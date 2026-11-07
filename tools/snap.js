#!/usr/bin/env node
/* Review tool (for directors / agents): render stills, contact sheets, motion strips and segment audio.

   node tools/snap.js --only s03 --times 351.5,355,360.2 --out /tmp/x          → PNG per time
   node tools/snap.js --only s03 --range 351 400 1.0 --out /tmp/x --sheet      → contact sheet (every 1.0 s), labelled
   node tools/snap.js --only s03 --strip 380.0 0.1 12 --out /tmp/x             → 12 frames, 0.1 s apart, as one strip (check motion)
   node tools/snap.js --only s03 --audio S03 --out /tmp/x                      → S03.wav + loudness/peak report + spectrogram PNG
   node tools/snap.js --only s03 --clip 351 360 --out /tmp/x                   → short MP4 with VO + segment audio (needs ffmpeg)
   Options: --scale 0.5 (downscale stills), --errors (print scene errors), --gpu
*/
const fs = require('fs'); const path = require('path'); const { execFileSync } = require('child_process');
const { serve, launchBrowser } = require('./server');
const ROOT = path.resolve(__dirname, '..');
const argv = process.argv.slice(2); const arg = (k, n = 1) => { const i = argv.indexOf('--' + k); if (i < 0) return null; return n === 1 ? argv[i + 1] : argv.slice(i + 1, i + 1 + n); }; const flag = (k) => argv.includes('--' + k);

(async () => {
  const out = path.resolve(arg('out') || path.join(ROOT, 'build', 'snaps')); fs.mkdirSync(out, { recursive: true });
  const only = arg('only'); const scale = parseFloat(arg('scale') || '1');
  const { srv, port } = await serve(ROOT); const B = await launchBrowser({ gpu: flag('gpu') }); const page = await B.newPage();
  const logs = []; page.on('console', (m) => { const s = m.text(); if (/error|warn|not found|ERROR/i.test(s)) logs.push(s); });
  page.on('pageerror', (e) => logs.push('PAGEERROR ' + e.message));
  await page.goto(`http://127.0.0.1:${port}/index.html${only ? '?only=' + only : ''}`, { waitUntil: 'load', timeout: 120000 });
  const info = await page.evaluate(() => window.MG_BOOT);
  const grab = async (t) => { const d = await page.evaluate(([t, s]) => { const id = MG.renderFrame(t); let c = MG.post.out; if (s !== 1) { const k = document.createElement('canvas'); k.width = 1920 * s; k.height = 1080 * s; k.getContext('2d').drawImage(c, 0, 0, k.width, k.height); c = k; } return [id, c.toDataURL('image/png')]; }, [t, scale]); return { id: d[0], buf: Buffer.from(d[1].split(',')[1], 'base64') }; };
  const saved = [];
  if (arg('times')) for (const ts of arg('times').split(',')) { const t = parseFloat(ts); const g = await grab(t); const f = path.join(out, `t${t.toFixed(2)}.png`); fs.writeFileSync(f, g.buf); saved.push(`${f}  [${g.id}]`); }
  if (arg('range', 3)) {
    const [a, b, st] = arg('range', 3).map(parseFloat); const sheet = flag('sheet'); const frames = [];
    for (let t = a; t <= b + 1e-6; t += st) frames.push(t);
    if (sheet) {
      const cols = 5, w = 384, h = 216; const rows = Math.ceil(frames.length / cols); const pages = [];
      for (const t of frames) { const d = await page.evaluate((t) => { const id = MG.renderFrame(t); const k = document.createElement('canvas'); k.width = 384; k.height = 216; const x = k.getContext('2d'); x.drawImage(MG.post.out, 0, 0, 384, 216); x.fillStyle = 'rgba(0,0,0,.6)'; x.fillRect(0, 196, 384, 20); x.fillStyle = '#fff'; x.font = '12px monospace'; x.fillText(t.toFixed(2) + 's ' + (id || ''), 4, 210); return k.toDataURL('image/png'); }, t); pages.push(d); }
      const html = await page.evaluate(async ([pages, cols, w, h]) => { const rows = Math.ceil(pages.length / cols); const k = document.createElement('canvas'); k.width = cols * w; k.height = rows * h; const x = k.getContext('2d'); for (let i = 0; i < pages.length; i++) { const im = new Image(); im.src = pages[i]; await im.decode(); x.drawImage(im, (i % cols) * w, Math.floor(i / cols) * h); } return k.toDataURL('image/jpeg', 0.85); }, [pages, cols, w, h]);
      const f = path.join(out, `sheet_${a.toFixed(1)}-${b.toFixed(1)}.jpg`); fs.writeFileSync(f, Buffer.from(html.split(',')[1], 'base64')); saved.push(f);
    } else for (const t of frames) { const g = await grab(t); const f = path.join(out, `r${t.toFixed(2)}.png`); fs.writeFileSync(f, g.buf); saved.push(`${f} [${g.id}]`); }
  }
  if (arg('strip', 3)) {
    const [a, st, n] = arg('strip', 3).map(parseFloat); const pages = []; for (let i = 0; i < n; i++) { const t = a + i * st; pages.push(await page.evaluate((t) => { MG.renderFrame(t); const k = document.createElement('canvas'); k.width = 480; k.height = 270; const x = k.getContext('2d'); x.drawImage(MG.post.out, 0, 0, 480, 270); x.fillStyle = '#fff'; x.font = '13px monospace'; x.fillText(t.toFixed(2), 6, 262); return k.toDataURL('image/png'); }, t)); }
    const img = await page.evaluate(async ([pages]) => { const cols = 4; const k = document.createElement('canvas'); k.width = 480 * cols; k.height = 270 * Math.ceil(pages.length / cols); const x = k.getContext('2d'); for (let i = 0; i < pages.length; i++) { const im = new Image(); im.src = pages[i]; await im.decode(); x.drawImage(im, (i % cols) * 480, Math.floor(i / cols) * 270); } return k.toDataURL('image/jpeg', 0.85); }, [pages]);
    const f = path.join(out, `strip_${a.toFixed(2)}.jpg`); fs.writeFileSync(f, Buffer.from(img.split(',')[1], 'base64')); saved.push(f);
  }
  if (arg('audio')) {
    const id = arg('audio').toUpperCase(); const r = await page.evaluate((id) => MG.audio.renderSegmentWav(id), id); const parts = []; for (let i = 0; i < r.chunks; i++) parts.push(Buffer.from(await page.evaluate((i) => MG.audio.chunk(i), i), 'base64'));
    const f = path.join(out, `${id}.wav`); fs.writeFileSync(f, Buffer.concat(parts)); saved.push(`${f}  peak=${r.peak.toFixed(3)} (${(20 * Math.log10(r.peak + 1e-9)).toFixed(1)} dBFS) dur=${r.seconds.toFixed(1)}s start=${r.start}`);
    { const { spawnSync } = require('child_process'); const rr = spawnSync('ffmpeg', ['-hide_banner', '-nostats', '-i', f, '-af', 'ebur128=peak=true', '-f', 'null', '-'], { encoding: 'utf8' }); const s = String(rr.stderr || ''); const m = s.match(/I:\s+(-?[\d.]+) LUFS[\s\S]*?Peak:\s+(-?[\d.]+) dBFS/); if (m) saved.push(`   integrated ${m[1]} LUFS, true peak ${m[2]} dBFS (target: bed ≈ -30…-26 LUFS, peak < -8 dBFS)`); }
    try { execFileSync('ffmpeg', ['-y', '-v', 'error', '-i', f, '-lavfi', 'showspectrumpic=s=1600x400:legend=1:scale=log', path.join(out, `${id}_spectrum.png`)]); saved.push(path.join(out, `${id}_spectrum.png`)); } catch (e) { }
    try { execFileSync('ffmpeg', ['-y', '-v', 'error', '-i', f, '-lavfi', 'showwavespic=s=1600x300:split_channels=0:colors=#f2a33a', path.join(out, `${id}_wave.png`)]); saved.push(path.join(out, `${id}_wave.png`)); } catch (e) { }
  }
  if (arg('clip', 2)) {
    const [a, b] = arg('clip', 2).map(parseFloat); const fdir = path.join(out, 'clipframes'); fs.mkdirSync(fdir, { recursive: true }); let i = 0;
    for (let t = a; t < b; t += 1 / 30, i++) { const d = await page.evaluate((t) => { MG.renderFrame(t); return MG.post.out.toDataURL('image/jpeg', 0.9); }, t); fs.writeFileSync(path.join(fdir, `f${String(i).padStart(5, '0')}.jpg`), Buffer.from(d.split(',')[1], 'base64')); }
    const seg = await page.evaluate((a) => { const s = MG.segments.find((s) => s.start <= a && a < s.end); return s ? s.id : null; }, a);
    let bed = null; if (seg) { const r = await page.evaluate((id) => MG.audio.renderSegmentWav(id), seg); const parts = []; for (let k = 0; k < r.chunks; k++) parts.push(Buffer.from(await page.evaluate((k) => MG.audio.chunk(k), k), 'base64')); bed = path.join(out, `bed_${seg}.wav`); fs.writeFileSync(bed, Buffer.concat(parts)); bed = { f: bed, start: r.start }; }
    const mp4 = path.join(out, `clip_${a.toFixed(1)}-${b.toFixed(1)}.mp4`); const ffa = ['-y', '-v', 'error', '-framerate', '30', '-i', path.join(fdir, 'f%05d.jpg'), '-ss', String(a), '-t', String(b - a), '-i', path.join(ROOT, 'assets/voiceover.mp3')];
    if (bed) ffa.push('-ss', String(a - bed.start), '-t', String(b - a), '-i', bed.f, '-filter_complex', '[1:a]aformat=channel_layouts=stereo,volume=2.2[v];[2:a]volume=1[m];[v][m]amix=inputs=2:normalize=0[a]', '-map', '0:v', '-map', '[a]'); else ffa.push('-map', '0:v', '-map', '1:a');
    ffa.push('-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '20', '-c:a', 'aac', '-shortest', mp4); execFileSync('ffmpeg', ffa); saved.push(mp4); fs.rmSync(fdir, { recursive: true, force: true });
  }
  const errs = await page.evaluate(() => MG.errors.slice(0, 40)); const val = await page.evaluate(() => MG.validate());
  console.log(JSON.stringify({ segments: info.segments }, null, 0));
  saved.forEach((s) => console.log('saved', s));
  if (errs.length) console.log('SCENE ERRORS:\n  ' + errs.join('\n  '));
  if (logs.length) console.log('CONSOLE:\n  ' + [...new Set(logs)].slice(0, 30).join('\n  '));
  if (flag('validate')) console.log('VALIDATE:\n  ' + val.join('\n  '));
  await B.close(); srv.close();
})().catch((e) => { console.error(e); process.exit(1); });
