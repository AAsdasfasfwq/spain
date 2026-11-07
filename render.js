#!/usr/bin/env node
/* =====================================================================
   SPAIN — final renderer (Puppeteer).   Requirements: Node 18+, ffmpeg in PATH,  npm i puppeteer

     node render.js                       full film → build/spain_1080p30.mp4
     node render.js --workers 6           parallel browsers (≈ CPU cores − 1)
     node render.js --from 300 --to 420   render only a time range (seconds) → build/range_300-420.mp4
     node render.js --audio-only          only (re)build the music + SFX bed and the final mix
     node render.js --video-only          skip audio (silent mp4 of the picture)
     node render.js --preview             open a local server for the browser preview player (http://localhost:8080/?preview=1&fit=1)
   Options: --quality 0.93 (JPEG frames)  --png (lossless frames, slower)  --crf 16  --preset medium
            --bed-gain 0   (dB, music+SFX bed level under the voice)  --force (ignore cached chunks/stems)  --gpu (try hardware GL)
            --chunk 600 (frames per resumable chunk)
   Re-running resumes: finished chunks in build/parts and stems in build/audio are reused.
   ===================================================================== */
const fs = require('fs'); const path = require('path'); const { spawn, spawnSync } = require('child_process'); const os = require('os');
const { serve, launchBrowser } = require('./tools/server');
const ROOT = __dirname; const BUILD = path.join(ROOT, 'build');
const argv = process.argv.slice(2); const arg = (k, d) => { const i = argv.indexOf('--' + k); return i < 0 ? d : argv[i + 1]; }; const flag = (k) => argv.includes('--' + k);
const FPS = 30;
const log = (...a) => console.log(new Date().toISOString().slice(11, 19), ...a);
const ff = (args, opts = {}) => { const r = spawnSync('ffmpeg', ['-hide_banner', '-y', ...args], { stdio: opts.quiet ? ['ignore', 'ignore', 'pipe'] : 'inherit', encoding: 'utf8' }); if (r.status !== 0) throw new Error('ffmpeg failed: ' + (r.stderr || '').slice(-2000)); return r; };

async function openPage(port, extra = '') {
  const B = await launchBrowser({ gpu: flag('gpu') }); const page = await B.newPage();
  page.on('pageerror', (e) => log('pageerror', e.message));
  await page.goto(`http://127.0.0.1:${port}/index.html?v=render${extra}`, { waitUntil: 'load', timeout: 180000 });
  const info = await page.evaluate(() => window.MG_BOOT);
  return { B, page, info };
}

// ---------------- audio ----------------
async function buildAudio(port, info) {
  const dir = path.join(BUILD, 'audio'); fs.mkdirSync(dir, { recursive: true });
  const { B, page } = await openPage(port);
  const stems = [];
  for (const s of info.segments) {
    const f = path.join(dir, `${s.id}.wav`);
    if (!s.audio) { log('audio', s.id, '— no audio() defined, skipped'); continue; }
    if (fs.existsSync(f) && !flag('force')) { stems.push({ f, start: s.start }); log('audio', s.id, 'cached'); continue; }
    log('audio', s.id, 'rendering…'); const r = await page.evaluate((id) => MG.audio.renderSegmentWav(id), s.id);
    const parts = []; for (let i = 0; i < r.chunks; i++) parts.push(Buffer.from(await page.evaluate((i) => MG.audio.chunk(i), i), 'base64'));
    fs.writeFileSync(f, Buffer.concat(parts)); stems.push({ f, start: s.start }); log('audio', s.id, `ok peak ${(20 * Math.log10(r.peak + 1e-9)).toFixed(1)} dBFS, ${r.seconds.toFixed(1)}s`);
  }
  await B.close();
  // ---- mix: VO (normalised, limited) + bed (delayed stems, side-chain ducked under VO) ----
  const out = path.join(BUILD, 'mix.wav'); const vo = path.join(ROOT, 'assets', 'voiceover.mp3'); const dur = info.duration;
  const inputs = ['-i', vo]; stems.forEach((s) => inputs.push('-i', s.f));
  const bedGain = parseFloat(arg('bed-gain', '0'));
  let fc = `[0:a]aresample=48000,pan=stereo|c0=c0|c1=c0,loudnorm=I=-16:TP=-1.5:LRA=9,apad=whole_dur=${dur},asplit=2[vo][sc];`;
  stems.forEach((s, i) => { const ms = Math.round(s.start * 1000); fc += `[${i + 1}:a]aresample=48000,adelay=${ms}|${ms}[b${i}];`; });
  if (stems.length) {
    fc += stems.map((_, i) => `[b${i}]`).join('') + `amix=inputs=${stems.length}:normalize=0:duration=longest,volume=${bedGain}dB,apad=whole_dur=${dur}[bedraw];`;
    fc += `[bedraw][sc]sidechaincompress=threshold=0.045:ratio=4:attack=30:release=520:knee=4:makeup=1[bed];`;
    fc += `[vo][bed]amix=inputs=2:normalize=0:duration=first,atrim=0:${dur},alimiter=limit=0.891:attack=4:release=60:level=false[out]`;
  } else fc += `[vo]anull,atrim=0:${dur}[out];[sc]anullsink`;
  log('mixing → build/mix.wav'); ff([...inputs, '-filter_complex', fc, '-map', '[out]', '-ar', '48000', '-c:a', 'pcm_s16le', out], { quiet: true });
  const r = spawnSync('ffmpeg', ['-hide_banner', '-nostats', '-i', out, '-af', 'ebur128=peak=true', '-f', 'null', '-'], { encoding: 'utf8' }); const m = String(r.stderr).match(/I:\s+(-?[\d.]+) LUFS[\s\S]*?Peak:\s+(-?[\d.]+) dBFS/); if (m) log(`mix loudness ${m[1]} LUFS, true peak ${m[2]} dBFS`);
  return out;
}

// ---------------- video ----------------
async function buildVideo(port, info, f0, f1, outName) {
  const parts = path.join(BUILD, 'parts'); fs.mkdirSync(parts, { recursive: true });
  const CH = parseInt(arg('chunk', '600')); const chunks = []; for (let a = f0; a < f1; a += CH) chunks.push([a, Math.min(f1, a + CH)]);
  const fmt = flag('png') ? 'png' : 'jpeg'; const q = parseFloat(arg('quality', '0.93')); const crf = arg('crf', '16'), preset = arg('preset', 'medium');
  const name = (c) => path.join(parts, `p_${String(c[0]).padStart(6, '0')}_${String(c[1]).padStart(6, '0')}_${fmt}.mp4`);
  const todo = chunks.filter((c) => flag('force') || !fs.existsSync(name(c)));
  const W = Math.max(1, Math.min(todo.length, parseInt(arg('workers', String(Math.max(1, Math.min(8, os.cpus().length - 1)))))));
  log(`video frames ${f0}–${f1} (${f1 - f0}), ${chunks.length} chunks, ${todo.length} to render, ${W} worker(s)`);
  let done = 0, framesDone = 0; const t0 = Date.now(); const total = todo.reduce((a, c) => a + c[1] - c[0], 0); const errFile = path.join(BUILD, 'errors.log');
  const worker = async (wi) => {
    let ctx = await openPage(port);
    while (todo.length) {
      const c = todo.shift(); const tmp = name(c) + '.tmp.mp4';
      const enc = spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', fmt === 'png' ? 'png' : 'mjpeg', '-i', '-', '-c:v', 'libx264', '-preset', preset, '-crf', crf, '-pix_fmt', 'yuv420p', '-profile:v', 'high', '-r', String(FPS), '-movflags', '+faststart', tmp], { stdio: ['pipe', 'inherit', 'inherit'] });
      const ended = new Promise((res, rej) => enc.on('close', (code) => (code === 0 ? res() : rej(new Error('encoder exit ' + code)))));
      try {
        for (let f = c[0]; f < c[1]; f++) {
          const data = await ctx.page.evaluate(([t, fmt, q]) => { MG.renderFrame(t); return MG.post.out.toDataURL(fmt === 'png' ? 'image/png' : 'image/jpeg', q); }, [f / FPS, fmt, q]);
          const buf = Buffer.from(data.slice(data.indexOf(',') + 1), 'base64'); if (!enc.stdin.write(buf)) await new Promise((r) => enc.stdin.once('drain', r));
          framesDone++;
          if (framesDone % 150 === 0) { const el = (Date.now() - t0) / 1000; const fps = framesDone / el; log(`  ${framesDone}/${total} frames  ${fps.toFixed(1)} fps  ETA ${((total - framesDone) / fps / 60).toFixed(1)} min`); }
        }
        enc.stdin.end(); await ended; fs.renameSync(tmp, name(c)); done++;
        const errs = await ctx.page.evaluate(() => { const e = MG.errors.splice(0); return e; }); if (errs.length) fs.appendFileSync(errFile, errs.join('\n') + '\n');
      } catch (e) {
        log(`worker ${wi} chunk ${c} failed: ${e.message} — retrying with a fresh browser`); try { enc.kill('SIGKILL'); } catch (_) { } try { fs.unlinkSync(tmp); } catch (_) { }
        todo.push(c); try { await ctx.B.close(); } catch (_) { } ctx = await openPage(port);
      }
    }
    await ctx.B.close();
  };
  await Promise.all(Array.from({ length: W }, (_, i) => worker(i)));
  // concat
  const list = path.join(BUILD, 'parts.txt'); fs.writeFileSync(list, chunks.map((c) => `file '${name(c).replace(/'/g, "'\\''")}'`).join('\n'));
  const vid = path.join(BUILD, `${outName}_video.mp4`); log('concatenating parts'); ff(['-f', 'concat', '-safe', '0', '-i', list, '-c', 'copy', vid], { quiet: true });
  log(`video done in ${((Date.now() - t0) / 60000).toFixed(1)} min`); return vid;
}

(async () => {
  fs.mkdirSync(BUILD, { recursive: true });
  const { srv, port } = await serve(ROOT, flag('preview') ? parseInt(arg('port', '8080')) : 0);
  if (flag('preview')) { log(`preview: http://localhost:${port}/index.html?preview=1   (Space = play, ←/→ = frame, Shift+←/→ = 5 s; ?only=s03 loads one segment)`); return; }
  const probe = await openPage(port); const info = probe.info; await probe.B.close();
  log(`film ${info.duration}s @ ${FPS}fps, ${info.segments.length} segments`); if (info.errors.length) log('boot warnings:', info.errors.join(' | '));
  const from = parseFloat(arg('from', '0')), to = Math.min(info.duration, parseFloat(arg('to', String(info.duration))));
  const f0 = Math.round(from * FPS), f1 = Math.round(to * FPS); const full = from === 0 && to >= info.duration;
  const outName = full ? 'spain_1080p30' : `range_${from}-${to}`;
  let mix = null, vid = null;
  if (!flag('video-only')) mix = await buildAudio(port, info);
  if (!flag('audio-only')) vid = await buildVideo(port, info, f0, f1, outName);
  if (vid) {
    const final = path.join(BUILD, `${outName}.mp4`);
    if (mix) { log('muxing → ' + final); ff(['-i', vid, '-ss', String(from), '-t', String(to - from), '-i', mix, '-map', '0:v', '-map', '1:a', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '320k', '-ar', '48000', '-shortest', '-movflags', '+faststart', final], { quiet: true }); }
    else fs.copyFileSync(vid, final);
    log('DONE  ' + final);
  } else if (mix) log('DONE  ' + mix);
  srv.close(); process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });
