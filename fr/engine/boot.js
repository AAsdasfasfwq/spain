/* =====================================================================
   Boot: loads segment files (isolated: a broken segment cannot break the
   others), waits for fonts / images / Three.js, exposes window.MG_BOOT.
   URL params:  ?only=s03,s04  (load only these segments — fast previews)
                ?t=123.4       (preview: start time)   ?preview=1 (player UI)
   ===================================================================== */
(function () {
  const MG = window.MG;
  MG.SEGMENT_FILES = ['s01', 's02', 's03', 's04', 's05', 's06', 's07', 's08', 's09', 's10', 's11'];
  const q = new URLSearchParams(location.search);
  const only = q.get('only') ? q.get('only').split(',').map((s) => s.trim().toLowerCase()) : null;
  const loadScript = (src) => new Promise((res) => { const s = document.createElement('script'); s.src = src + '?v=' + (q.get('v') || Date.now()); s.onload = () => res(true); s.onerror = () => { console.warn('[boot] missing or broken', src); MG.errors.push('load ' + src); res(false); }; document.body.appendChild(s); });
  const threeReady = () => new Promise((res) => { if (window.THREE && window.THREE_ADDONS) return res(); window.addEventListener('three-ready', () => res(), { once: true }); setTimeout(res, 8000); });
  window.addEventListener('error', (e) => { MG.errors.push('window: ' + (e.message || e)); });

  window.MG_BOOT = (async () => {
    MG.geo.init();
    await Promise.all([MG.loadImages(), document.fonts ? Promise.all(MG.FONT_LOADS.map((f) => document.fonts.load(f).catch(() => null))) : null, threeReady()]);
    if (document.fonts) await document.fonts.ready;
    for (const f of (only || MG.SEGMENT_FILES)) await loadScript(`segments/${f}.js`);
    MG.post.init(document.getElementById('out'));
    MG.ready = true;
    if (q.get('preview')) MG.preview.mount(parseFloat(q.get('t') || '0'));
    else MG.renderFrame(parseFloat(q.get('t') || '0'));
    return MG.info();
  })();

  // ---------- preview player (real-time-ish) ----------
  MG.preview = {
    mount(t0) {
      const bar = document.createElement('div'); bar.id = 'mgbar';
      bar.innerHTML = `<button id="mgplay">▶</button><input id="mgseek" type="range" min="0" max="${MG.DURATION_OUT || MG.DURATION}" step="0.0333" value="${t0}"><span id="mgtime"></span><label><input id="mgbed" type="checkbox"> music/SFX (renders current segment)</label>`;
      document.body.appendChild(bar);
      const vo = new Audio('assets/voiceover.mp3'); vo.preload = 'auto'; let playing = false, bed = null, bedSrc = null, actx = null;
      const seek = bar.querySelector('#mgseek'), lab = bar.querySelector('#mgtime'), btn = bar.querySelector('#mgplay'), chk = bar.querySelector('#mgbed');
      let t = t0; const show = () => { const id = MG.renderFrame(t); lab.textContent = `${t.toFixed(2)}s  ${id || ''}`; seek.value = t; };
      seek.oninput = () => { t = parseFloat(seek.value); vo.currentTime = t; if (playing) startBed(); show(); };
      const startBed = async () => { if (!chk.checked) return; if (bedSrc) { try { bedSrc.stop(); } catch (e) { } } const te = MG.toEn ? MG.toEn(t) : t; const seg = MG.segments.find((s) => s.start <= te && te < s.end); if (!seg) return; if (!bed || bed.id !== seg.id) { lab.textContent = 'rendering audio…'; bed = { id: seg.id, buf: await MG.audio.renderSegment(seg.id) }; } actx = actx || new AudioContext(); bedSrc = actx.createBufferSource(); bedSrc.buffer = bed.buf; bedSrc.connect(actx.destination); bedSrc.start(0, Math.max(0, t - (MG.toOut ? MG.toOut(seg.start) : seg.start))); };
      btn.onclick = async () => { playing = !playing; btn.textContent = playing ? '❚❚' : '▶'; if (playing) { vo.currentTime = t; await vo.play().catch(() => { }); startBed(); loop(); } else { vo.pause(); if (bedSrc) try { bedSrc.stop(); } catch (e) { } } };
      const loop = () => { if (!playing) return; t = vo.currentTime; show(); requestAnimationFrame(loop); };
      window.addEventListener('keydown', (e) => { if (e.code === 'Space') { e.preventDefault(); btn.onclick(); } if (e.code === 'ArrowRight') { t += e.shiftKey ? 5 : 1 / 30; seek.oninput.call(null); } if (e.code === 'ArrowLeft') { t -= e.shiftKey ? 5 : 1 / 30; seek.oninput.call(null); } });
      show();
    },
  };
})();
