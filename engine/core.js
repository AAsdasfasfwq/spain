/* =====================================================================
   MG core — segments, scenes, transitions, compositing, post-processing.

   A SEGMENT (one agent's ≈3-minute slice) registers SCENES on the absolute
   voice-over timeline:

   MG.segment('S03', {
     start: 351.14, end: 507.32,
     scenes: [
       { id: 'columbus', start: 351.14, end: 365.7,
         init() {},                       // optional, called once (build caches / THREE scenes here)
         draw(ctx, t, S) {},              // t = absolute seconds; S = {t0,t1,lt,dur,p,seg,id}
         transIn: { type: 'iris', dur: 0.6, x: 960, y: 540 },   // optional, see MG.transitions
         post: { grade: 'warm', grain: 0.05 } },                // optional, see MG.POST_DEFAULT
       ...
     ],
     overlays: [ {start,end,draw(ctx,t,S)} ],   // optional, drawn above main scenes (e.g. a persistent chapter tag)
     audio(A) { ... }                            // music + SFX (see engine/audio.js)
   });

   During a transIn window [start, start+dur] the PREVIOUS scene keeps being drawn
   (with t beyond its end) — scenes must keep animating / holding gracefully.
   ===================================================================== */
(function () {
  const MG = window.MG; const { clamp, lerp } = MG;
  MG.segments = []; MG.scenes = []; MG.overlays = []; MG.errors = [];

  MG.segment = (id, def) => {
    const seg = { id, start: def.start, end: def.end, def, audio: def.audio, palette: def.palette };
    (def.scenes || []).forEach((s, i) => { s.seg = id; s.id = s.id || `${id}_${i}`; s._i = i; MG.scenes.push(s); });
    (def.overlays || []).forEach((s, i) => { s.seg = id; s.id = s.id || `${id}_ov${i}`; MG.overlays.push(s); });
    MG.segments.push(seg); MG.segments.sort((a, b) => a.start - b.start); MG.scenes.sort((a, b) => a.start - b.start || a._i - b._i);
    return seg;
  };

  // ---------- post defaults & grades ----------
  /** grade presets: temp (+warm/-cool), tint (+magenta/-green), sat, contrast, lift, gamma, gain */
  MG.GRADES = {
    neutral: {},
    warm: { temp: 0.06, sat: 1.04, contrast: 1.04 },
    golden: { temp: 0.12, tint: 0.01, sat: 1.06, contrast: 1.05, lift: 0.015 },
    cool: { temp: -0.07, sat: 0.95, contrast: 1.04 },
    night: { temp: -0.1, tint: 0.02, sat: 0.9, contrast: 1.08, lift: 0.01 },
    archival: { temp: 0.08, sat: 0.55, contrast: 1.1, lift: 0.03, gamma: 1.05 },
    bleach: { sat: 0.6, contrast: 1.18, lift: 0.0 },
    noir: { sat: 0.12, contrast: 1.2, lift: 0.02 },
    vivid: { sat: 1.15, contrast: 1.06 },
    retro: { temp: 0.05, tint: -0.015, sat: 0.92, contrast: 0.96, lift: 0.04, gamma: 1.02 },
    heat: { temp: 0.16, tint: 0.02, sat: 1.1, contrast: 1.06 },
  };
  MG.POST_DEFAULT = { grade: 'neutral', grain: 0.045, vignette: 0.32, aberration: 0.0016, bloom: 0, bloomThreshold: 0.72, letterbox: 0, fade: 0, fadeColor: [0, 0, 0], temp: 0, tint: 0, sat: 1, contrast: 1, lift: 0, gamma: 1, gain: 1, halation: 0 };
  const POST_KEYS = ['grain', 'vignette', 'aberration', 'bloom', 'bloomThreshold', 'letterbox', 'fade', 'temp', 'tint', 'sat', 'contrast', 'lift', 'gamma', 'gain', 'halation'];
  function resolvePost(scene, t) {
    let p = scene && scene.post; if (typeof p === 'function') p = p(t, sceneInfo(scene, t));
    const g = MG.GRADES[(p && p.grade) || 'neutral'] || {};
    const o = { ...MG.POST_DEFAULT }; for (const k in g) o[k] = g[k]; if (p) for (const k in p) if (k !== 'grade') o[k] = p[k];
    return o;
  }
  const mixPost = (a, b, u) => { const o = { ...b }; for (const k of POST_KEYS) o[k] = lerp(a[k], b[k], u); o.fadeColor = a.fadeColor.map((v, i) => lerp(v, b.fadeColor[i], u)); return o; };

  // ---------- transitions ----------
  // signature: (ctx, A, B, p, o) where A=prev frame canvas, B=next frame canvas, p eased 0..1
  const T = (MG.transitions = {});
  T.cut = (ctx, A, B) => ctx.drawImage(B, 0, 0);
  T.fade = (ctx, A, B, p) => { ctx.drawImage(A, 0, 0); ctx.globalAlpha = p; ctx.drawImage(B, 0, 0); ctx.globalAlpha = 1; };
  /** dissolve through blur (rack-focus feel) */
  T.blur = (ctx, A, B, p, o) => { const m = o.amount ?? 26; const ba = Math.sin(Math.min(1, p * 1.0) * Math.PI / 2) * m, bb = (1 - p) * m; ctx.save(); ctx.filter = `blur(${ba.toFixed(1)}px)`; ctx.drawImage(A, 0, 0); ctx.filter = `blur(${bb.toFixed(1)}px)`; ctx.globalAlpha = MG.smoothstep(0.15, 0.85, p); const s = 1 + (1 - p) * (o.scale ?? 0.04); ctx.translate(960, 540); ctx.scale(s, s); ctx.translate(-960, -540); ctx.drawImage(B, 0, 0); ctx.restore(); };
  /** whip pan with motion smear. o.dir: 'left'|'right'|'up'|'down' (direction content travels) */
  T.whip = (ctx, A, B, p, o) => {
    const d = o.dir || 'left'; const vx = d === 'left' ? -1 : d === 'right' ? 1 : 0, vy = d === 'up' ? -1 : d === 'down' ? 1 : 0; const W = MG.W, H = MG.H;
    const e = MG.ease.inOutQuart(p); const off = e; const smear = Math.sin(p * Math.PI) * (o.smear ?? 160); const N = 7;
    ctx.fillStyle = o.color || '#000'; ctx.fillRect(0, 0, W, H);
    const drawSm = (img, bx, by) => { for (let i = 0; i < N; i++) { const k = (i / (N - 1) - 0.5) * smear; ctx.globalAlpha = 1 / N * 1.6; ctx.drawImage(img, bx + vx * k, by + vy * k); } ctx.globalAlpha = 1; };
    drawSm(A, vx * W * off, vy * H * off); drawSm(B, vx * W * (off - 1), vy * H * (off - 1));
  };
  /** push: B pushes A out (no smear), with a little parallax gap shadow */
  T.push = (ctx, A, B, p, o) => { const d = o.dir || 'left'; const vx = d === 'left' ? -1 : d === 'right' ? 1 : 0, vy = d === 'up' ? -1 : d === 'down' ? 1 : 0; ctx.drawImage(A, vx * MG.W * p * 0.6, vy * MG.H * p * 0.6); ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.45)'; ctx.shadowBlur = 60; ctx.drawImage(B, vx * MG.W * (p - 1), vy * MG.H * (p - 1)); ctx.restore(); };
  /** card slide: B slides over A with soft shadow; A dims */
  T.slide = (ctx, A, B, p, o) => { ctx.drawImage(A, 0, 0); ctx.fillStyle = `rgba(10,6,4,${0.35 * p})`; ctx.fillRect(0, 0, MG.W, MG.H); T.push(ctx, A, B, p, { ...o, _noA: true }); };
  /** iris (circle) reveal from x,y. o: {x,y, ring: colour, ringW, soft, close:true (shrinks to point instead)} */
  T.iris = (ctx, A, B, p, o) => {
    const x = o.x ?? 960, y = o.y ?? 540; const R = Math.hypot(Math.max(x, MG.W - x), Math.max(y, MG.H - y)) * 1.02; const r = (o.close ? 1 - p : p) * R;
    const [bg, fg] = o.close ? [B, A] : [A, B];
    ctx.drawImage(bg, 0, 0); ctx.save(); ctx.beginPath(); ctx.arc(x, y, Math.max(0.1, r), 0, MG.TAU); ctx.clip(); ctx.drawImage(fg, 0, 0); ctx.restore();
    if (o.ring && r > 1 && p < 1) { ctx.save(); ctx.strokeStyle = o.ring; ctx.lineWidth = (o.ringW || 14) * Math.sin(p * Math.PI); ctx.beginPath(); ctx.arc(x, y, r, 0, MG.TAU); ctx.stroke(); ctx.restore(); }
  };
  /** arbitrary shape mask: o.path(p) → Path2D in screen space (e.g. a growing country silhouette) */
  T.shape = (ctx, A, B, p, o) => { ctx.drawImage(A, 0, 0); ctx.save(); const path = o.path(p); if (o.shadow !== false) { ctx.shadowColor = 'rgba(0,0,0,0.4)'; ctx.shadowBlur = 40; ctx.fillStyle = '#000'; ctx.fill(path); ctx.shadowColor = 'transparent'; } ctx.clip(path); ctx.drawImage(B, 0, 0); ctx.restore(); if (o.stroke) { ctx.save(); ctx.strokeStyle = o.stroke; ctx.lineWidth = o.strokeW || 6; ctx.globalAlpha = 1 - p; ctx.stroke(path); ctx.restore(); } };
  /** angled wipe with optional coloured leading band. o: {angle (deg), band, bandW, soft} */
  T.wipe = (ctx, A, B, p, o) => {
    const ang = MG.deg(o.angle ?? 20); const ca = Math.cos(ang), sa = Math.sin(ang); const D = Math.abs(MG.W * ca) + Math.abs(MG.H * sa); const bw = o.band ? (o.bandW || 90) : 0;
    const pos = -D / 2 - bw + (D + bw * 2) * p; ctx.drawImage(A, 0, 0);
    const half = (off) => { ctx.beginPath(); ctx.save(); ctx.translate(960, 540); ctx.rotate(ang); ctx.rect(-D, -D, D + off, D * 2); ctx.restore(); };
    ctx.save(); half(pos - bw); ctx.clip(); ctx.drawImage(B, 0, 0); ctx.restore();
    if (o.band) { ctx.save(); ctx.translate(960, 540); ctx.rotate(ang); ctx.fillStyle = o.band; ctx.fillRect(pos - bw, -D, bw, D * 2); if (o.band2) { ctx.fillStyle = o.band2; ctx.fillRect(pos - bw * 0.35, -D, bw * 0.35, D * 2); } ctx.restore(); }
  };
  /** torn-paper wipe (paper sheet B pulled across with ragged edge + shadow). o.dir 'left'|'right'|'up' */
  T.tear = (ctx, A, B, p, o) => {
    const dir = o.dir || 'right'; ctx.drawImage(A, 0, 0); const r = MG.rng(o.seed || 7); const pts = []; const N = 48; const amp = o.amp ?? 26;
    const horiz = dir === 'left' || dir === 'right'; const len = horiz ? MG.H : MG.W; const span = horiz ? MG.W : MG.H; const edge = -60 + (span + 120) * MG.ease.inOutCubic(p);
    const jit = []; for (let i = 0; i <= N; i++) jit.push((r() - 0.5) * amp + Math.sin(i * 1.7) * amp * 0.3);
    const ed = (i) => (dir === 'right' || dir === 'down' ? edge : span - edge) + jit[i];
    const path = new Path2D(); if (dir === 'right') { path.moveTo(-10, -10); for (let i = 0; i <= N; i++) path.lineTo(ed(i), (i / N) * len); path.lineTo(-10, len + 10); }
    else if (dir === 'left') { path.moveTo(MG.W + 10, -10); for (let i = 0; i <= N; i++) path.lineTo(ed(i), (i / N) * len); path.lineTo(MG.W + 10, len + 10); }
    else { path.moveTo(-10, MG.H + 10); for (let i = 0; i <= N; i++) path.lineTo((i / N) * len, ed(i)); path.lineTo(MG.W + 10, MG.H + 10); }
    path.closePath();
    ctx.save(); ctx.shadowColor = 'rgba(20,10,5,0.45)'; ctx.shadowBlur = 30; ctx.shadowOffsetX = dir === 'right' ? 12 : dir === 'left' ? -12 : 0; ctx.shadowOffsetY = dir === 'up' ? -12 : 6; ctx.fillStyle = o.paper || '#f3eadb'; ctx.fill(path); ctx.restore();
    ctx.save(); ctx.clip(path); ctx.drawImage(B, 0, 0); ctx.restore();
    ctx.save(); ctx.strokeStyle = o.paper || '#f8f1e4'; ctx.lineWidth = 7; ctx.stroke(path); ctx.restore();
  };
  /** ink-bleed / organic dissolve using a noise threshold mask */
  T.ink = (ctx, A, B, p, o) => {
    const m = MG.scratch(6, 480, 270); const x = m.getContext('2d'); x.setTransform(1, 0, 0, 1, 0, 0); x.clearRect(0, 0, 480, 270);
    const n = MG.tex.blotch(256, o.scale || 3, o.seed || 11, '#000000', 1.6); const thr = lerp(-0.2, 1.25, p);
    x.filter = `brightness(${(1 / Math.max(0.05, 1 - thr * 0.8)).toFixed(3)}) contrast(${o.hard ?? 9})`; x.fillStyle = '#fff'; x.fillRect(0, 0, 480, 270);
    x.globalCompositeOperation = 'destination-out'; x.filter = `contrast(${o.hard ?? 9}) brightness(${(1.6 - thr * 1.5).toFixed(3)})`; x.drawImage(n, 0, 0, 480, 270); x.filter = 'none'; x.globalCompositeOperation = 'source-over';
    // m now: opaque where B should show (approx). Composite.
    const b2 = MG.scratch(5); const y = b2.getContext('2d'); y.setTransform(1, 0, 0, 1, 0, 0); y.globalCompositeOperation = 'source-over'; y.clearRect(0, 0, MG.W, MG.H); y.drawImage(B, 0, 0); y.globalCompositeOperation = 'destination-in'; y.imageSmoothingEnabled = true; y.drawImage(m, 0, 0, MG.W, MG.H); y.globalCompositeOperation = 'source-over';
    ctx.drawImage(A, 0, 0); ctx.drawImage(b2, 0, 0);
  };
  /** zoom-through: A scales toward camera & blurs, B settles from slight scale-down */
  T.zoom = (ctx, A, B, p, o) => { const x = o.x ?? 960, y = o.y ?? 540; const sa = 1 + MG.ease.inCubic(p) * (o.amount ?? 2.2); const sb = lerp(o.from ?? 0.8, 1, MG.ease.outCubic(p)); ctx.save(); ctx.translate(x, y); ctx.scale(sa, sa); ctx.translate(-x, -y); ctx.filter = `blur(${(p * 14).toFixed(1)}px)`; ctx.drawImage(A, 0, 0); ctx.restore(); ctx.save(); ctx.globalAlpha = MG.smoothstep(0.25, 0.75, p); ctx.translate(x, y); ctx.scale(sb, sb); ctx.translate(-x, -y); ctx.filter = `blur(${((1 - p) * 10).toFixed(1)}px)`; ctx.drawImage(B, 0, 0); ctx.restore(); };
  /** light-leak flash: A burns out to warm light, B emerges. o.color */
  T.flash = (ctx, A, B, p, o) => { ctx.drawImage(p < 0.5 ? A : B, 0, 0); const k = Math.sin(p * Math.PI); const c = o.color || '#ffe7b8'; ctx.save(); ctx.globalCompositeOperation = 'screen'; const g = ctx.createRadialGradient(o.x ?? 1300, o.y ?? 380, 0, o.x ?? 1300, o.y ?? 380, 1500); g.addColorStop(0, MG.col.a(c, k)); g.addColorStop(0.5, MG.col.a(c, k * 0.85)); g.addColorStop(1, MG.col.a(o.edge || '#ff8a3d', k * 0.6)); ctx.fillStyle = g; ctx.fillRect(0, 0, MG.W, MG.H); ctx.restore(); };
  /** azulejo tiles: grid squares rotate/scale revealing B along a diagonal sweep. o: {size, color (tile backing)} */
  T.tiles = (ctx, A, B, p, o) => { ctx.drawImage(A, 0, 0); const s = o.size || 120; const cols = Math.ceil(MG.W / s), rows = Math.ceil(MG.H / s); for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) { const d = (i / cols) * 0.6 + (j / rows) * 0.4; const q = clamp((p * 1.6 - d * 0.6) / 0.4); if (q <= 0) continue; const e = MG.ease.outCubic(q); const cx = i * s + s / 2, cy = j * s + s / 2; ctx.save(); ctx.translate(cx, cy); ctx.rotate((1 - e) * 0.6); ctx.scale(e, e); ctx.beginPath(); ctx.rect(-s / 2 - 0.5, -s / 2 - 0.5, s + 1, s + 1); ctx.clip(); ctx.rotate(-(1 - e) * 0.6); ctx.scale(1 / e, 1 / e); ctx.drawImage(B, -cx, -cy); ctx.restore(); if (o.color && q < 1) { ctx.save(); ctx.translate(cx, cy); ctx.rotate((1 - e) * 0.6); ctx.scale(e, e); ctx.strokeStyle = o.color; ctx.lineWidth = 3; ctx.globalAlpha = 1 - q; ctx.strokeRect(-s / 2, -s / 2, s, s); ctx.restore(); } } };
  /** split: A breaks into two halves sliding apart (vertical or horizontal) */
  T.split = (ctx, A, B, p, o) => { ctx.drawImage(B, 0, 0); const e = MG.ease.inOutCubic(p); const v = o.vertical !== false; ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.5)'; ctx.shadowBlur = 40; if (v) { ctx.save(); ctx.beginPath(); ctx.rect(-e * 980, 0, 960, MG.H); ctx.clip(); ctx.drawImage(A, -e * 980, 0); ctx.restore(); ctx.save(); ctx.beginPath(); ctx.rect(960 + e * 980, 0, 960, MG.H); ctx.clip(); ctx.drawImage(A, e * 980, 0); ctx.restore(); } else { ctx.save(); ctx.beginPath(); ctx.rect(0, -e * 560, MG.W, 540); ctx.clip(); ctx.drawImage(A, 0, -e * 560); ctx.restore(); ctx.save(); ctx.beginPath(); ctx.rect(0, 540 + e * 560, MG.W, 540); ctx.clip(); ctx.drawImage(A, 0, e * 560); ctx.restore(); } ctx.restore(); };
  /** dip to a colour (or black) and back */
  T.dip = (ctx, A, B, p, o) => { ctx.drawImage(p < 0.5 ? A : B, 0, 0); ctx.fillStyle = o.color || '#0d0b0c'; ctx.globalAlpha = Math.sin(p * Math.PI); ctx.fillRect(0, 0, MG.W, MG.H); ctx.globalAlpha = 1; };

  // ---------- frame assembly ----------
  const bufA = () => MG.scratch(0), bufB = () => MG.scratch(1), comp = () => MG.scratch(2);
  function sceneInfo(s, t) { const dur = s.end - s.start; return { t0: s.start, t1: s.end, lt: t - s.start, dur, p: clamp((t - s.start) / dur), seg: s.seg, id: s.id }; }
  function drawScene(s, ctx, t) {
    ctx.save(); MG.reset(ctx); ctx.fillStyle = '#16120f'; ctx.fillRect(0, 0, MG.W, MG.H);
    try { if (!s._inited) { s._inited = true; if (s.init) s.init(); } s.draw(ctx, t, sceneInfo(s, t)); }
    catch (e) { MG.reset(ctx); MG.errors.push(`${s.id}@${t.toFixed(2)}: ${e && e.message}`); if (MG.errors.length < 50) console.error('[scene error]', s.id, t, e); ctx.fillStyle = '#300'; ctx.fillRect(0, 0, MG.W, MG.H); ctx.fillStyle = '#f0f'; ctx.font = '28px monospace'; ctx.fillText(`ERROR ${s.id} ${e && e.message}`, 40, 60); }
    ctx.restore();
  }
  MG.sceneAt = (t) => { let cur = null, idx = -1; for (let i = 0; i < MG.scenes.length; i++) { const s = MG.scenes[i]; if (s.start <= t && t < s.end) { cur = s; idx = i; } } return { cur, idx }; };
  MG.current = { scene: null, t: 0 };

  /** render the composited (pre-post) frame for time t into the comp canvas; returns post params */
  MG.composeFrame = (t) => {
    const C = comp(); const ctx = C.getContext('2d'); MG.reset(ctx);
    const { cur, idx } = MG.sceneAt(t); MG.current = { scene: cur, t };
    let post = resolvePost(cur, t);
    if (!cur) { ctx.fillStyle = '#16120f'; ctx.fillRect(0, 0, MG.W, MG.H); }
    else {
      const tr = cur.transIn; const prev = idx > 0 ? MG.scenes[idx - 1] : null;
      if (tr && prev && tr.type !== 'cut' && t < cur.start + (tr.dur || 0.5)) {
        const dur = tr.dur || 0.5; const raw = clamp((t - cur.start) / dur); const p = MG.easeOf(tr.ease || 'inOut')(raw);
        const A = bufA(), B = bufB(); drawScene(prev, A.getContext('2d'), t); drawScene(cur, B.getContext('2d'), t);
        const fn = typeof tr.type === 'function' ? tr.type : T[tr.type] || T.fade;
        ctx.save(); try { fn(ctx, A, B, p, tr); } catch (e) { console.error('[transition]', e); ctx.drawImage(B, 0, 0); } ctx.restore();
        post = mixPost(resolvePost(prev, t), post, raw);
      } else drawScene(cur, ctx, t);
    }
    for (const o of MG.overlays) if (o.start <= t && t < o.end) { ctx.save(); MG.reset(ctx); try { if (!o._inited) { o._inited = true; o.init && o.init(); } o.draw(ctx, t, sceneInfo(o, t)); } catch (e) { MG.errors.push(`${o.id}: ${e.message}`); console.error('[overlay]', o.id, e); } ctx.restore(); }
    // global fade-out at the very end
    const endFade = MG.lin(t, MG.VO_DURATION + 1.5, MG.DURATION - 0.3); if (endFade > 0) post.fade = Math.max(post.fade, endFade);
    return post;
  };

  // ---------- post (WebGL with 2D fallback) ----------
  const VS = `attribute vec2 p; varying vec2 uv; void main(){ uv = p*0.5+0.5; uv.y = 1.0-uv.y; gl_Position = vec4(p,0.,1.); }`;
  const FS = `precision highp float; varying vec2 uv; uniform sampler2D tex; uniform sampler2D blm;
  uniform float grain, vign, aber, bloom, thr, lbox, fade, temp, tint, sat, con, lift, gam, gain, seed, halation; uniform vec3 fadeCol; uniform vec2 res;
  float h(vec2 p){ p = fract(p*vec2(443.897,441.423)); p += dot(p, p.yx+19.19); return fract((p.x+p.y)*p.x); }
  void main(){
    vec2 c = uv-0.5; float r2 = dot(c,c);
    vec2 off = c * aber * (0.4 + r2*3.0);
    vec3 col; col.r = texture2D(tex, uv+off).r; col.g = texture2D(tex, uv).g; col.b = texture2D(tex, uv-off).b;
    if (bloom > 0.0 || halation > 0.0) { vec3 b = texture2D(blm, uv).rgb; vec3 bb = max(b - thr, 0.0) / max(1.0-thr, 0.01); col += bb * bloom; col += vec3(1.0,0.45,0.2) * max(b.r - thr*0.9, 0.0) * halation; }
    // white balance
    col *= vec3(1.0 + temp, 1.0 - tint*0.5, 1.0 - temp) ; col.g *= 1.0 + tint*-0.5 + tint*0.0;
    // lift / gamma / gain
    col = col * gain + lift * (1.0 - col); col = pow(max(col, 0.0), vec3(1.0/gam));
    float l = dot(col, vec3(0.2126,0.7152,0.0722)); col = mix(vec3(l), col, sat);
    col = (col - 0.5) * con + 0.5;
    // vignette
    float v = smoothstep(0.85, 0.15, length(c*vec2(1.0, 0.86))*1.18); col *= mix(1.0, v, vign);
    // grain (luma-weighted, film-like)
    float n = h(uv*res + seed*91.7) - 0.5; n += h(uv*res*0.5 + seed*13.1) - 0.5; col += n * grain * (0.6 + 0.4*(1.0-l));
    col = mix(col, fadeCol, fade);
    float lb = lbox * 0.5; if (uv.y < lb || uv.y > 1.0-lb) col = vec3(0.02);
    gl_FragColor = vec4(clamp(col,0.0,1.0), 1.0);
  }`;
  const P = (MG.post = { gl: null });
  P.init = (canvas) => {
    P.out = canvas; let gl = null;
    try { gl = canvas.getContext('webgl', { preserveDrawingBuffer: true, antialias: false, premultipliedAlpha: false }); } catch (e) { gl = null; }
    if (!gl) { console.warn('[post] WebGL unavailable — using 2D fallback'); P.ctx2d = canvas.getContext('2d'); return; }
    const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; };
    const pr = gl.createProgram(); gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(pr); gl.useProgram(pr);
    const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const mk = (unit) => { const tx = gl.createTexture(); gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, tx); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); return tx; };
    P.t0 = mk(0); P.t1 = mk(1); gl.uniform1i(gl.getUniformLocation(pr, 'tex'), 0); gl.uniform1i(gl.getUniformLocation(pr, 'blm'), 1);
    P.u = {}; for (const n of ['grain', 'vign', 'aber', 'bloom', 'thr', 'lbox', 'fade', 'temp', 'tint', 'sat', 'con', 'lift', 'gam', 'gain', 'seed', 'halation', 'fadeCol', 'res']) P.u[n] = gl.getUniformLocation(pr, n);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false); P.gl = gl; P.blm = MG.canvas(384, 216);
  };
  P.apply = (src, o, frame) => {
    const gl = P.gl;
    if (!gl) { // 2D fallback
      const x = P.ctx2d; MG.reset(x); x.filter = `saturate(${o.sat}) contrast(${o.con || o.contrast})`; x.drawImage(src, 0, 0); x.filter = 'none';
      if (o.vignette > 0) { const g = x.createRadialGradient(960, 540, 300, 960, 540, 1150); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, `rgba(0,0,0,${o.vignette})`); x.fillStyle = g; x.fillRect(0, 0, MG.W, MG.H); }
      if (o.grain > 0) { x.globalAlpha = o.grain * 2.2; x.globalCompositeOperation = 'overlay'; const tile = MG.tex.grain(256, 1, (frame % 8) + 1); x.fillStyle = x.createPattern(tile, 'repeat'); x.fillRect(0, 0, MG.W, MG.H); x.globalAlpha = 1; x.globalCompositeOperation = 'source-over'; }
      if (o.fade > 0) { x.fillStyle = `rgba(${o.fadeColor.map((v) => v * 255).join(',')},${o.fade})`; x.fillRect(0, 0, MG.W, MG.H); }
      return;
    }
    gl.viewport(0, 0, MG.W, MG.H);
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, P.t0); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, src);
    if (o.bloom > 0 || o.halation > 0) { const bx = P.blm.getContext('2d'); bx.filter = 'blur(7px)'; bx.drawImage(src, 0, 0, 384, 216); bx.filter = 'none'; gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, P.t1); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, P.blm); }
    const u = P.u; gl.uniform1f(u.grain, o.grain); gl.uniform1f(u.vign, o.vignette); gl.uniform1f(u.aber, o.aberration); gl.uniform1f(u.bloom, o.bloom); gl.uniform1f(u.thr, o.bloomThreshold); gl.uniform1f(u.lbox, o.letterbox); gl.uniform1f(u.fade, o.fade);
    gl.uniform1f(u.temp, o.temp); gl.uniform1f(u.tint, o.tint); gl.uniform1f(u.sat, o.sat); gl.uniform1f(u.con, o.contrast); gl.uniform1f(u.lift, o.lift); gl.uniform1f(u.gam, o.gamma); gl.uniform1f(u.gain, o.gain); gl.uniform1f(u.seed, (frame % 997) * 0.37 + 0.11); gl.uniform1f(u.halation, o.halation || 0);
    gl.uniform3f(u.fadeCol, o.fadeColor[0], o.fadeColor[1], o.fadeColor[2]); gl.uniform2f(u.res, MG.W, MG.H);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };

  /** render final frame at time t into the output canvas */
  MG.renderFrame = (t) => { const post = MG.composeFrame(t); P.apply(comp(), post, Math.round(t * MG.FPS)); return MG.current.scene ? MG.current.scene.id : null; };
  MG.capture = (type = 'image/jpeg', q = 0.93) => P.out.toDataURL(type, q);
  MG.info = () => ({ duration: MG.DURATION, vo: MG.VO_DURATION, fps: MG.FPS, segments: MG.segments.map((s) => ({ id: s.id, start: s.start, end: s.end, scenes: MG.scenes.filter((x) => x.seg === s.id).length, audio: !!s.audio })), errors: MG.errors.slice(0, 50) });
  /** coverage report: gaps / overlaps between consecutive scenes */
  MG.validate = () => { const out = []; let lastEnd = 0; for (const s of MG.scenes) { if (s.start > lastEnd + 0.02) out.push(`gap ${lastEnd.toFixed(2)}→${s.start.toFixed(2)} before ${s.id}`); if (s.end <= s.start) out.push(`empty ${s.id}`); lastEnd = Math.max(lastEnd, s.end); } if (lastEnd < MG.VO_DURATION) out.push(`timeline ends at ${lastEnd.toFixed(2)} < VO ${MG.VO_DURATION}`); return out; };

  // ---------- images ----------
  MG.IMAGES = { world_relief: 'assets/relief/world_relief_4k.jpg', bluemarble: 'assets/relief/world_bluemarble_4k.jpg', iberia_shaded: 'assets/relief/iberia_shaded.jpg', iberia_height: 'assets/relief/iberia_height.png' };
  const imgs = {}; MG.img = (n) => imgs[n] || null;
  MG.loadImages = () => Promise.all(Object.entries(MG.IMAGES).map(([k, src]) => new Promise((res) => { const im = new Image(); im.onload = () => { imgs[k] = im; res(); }; im.onerror = () => { console.warn('image failed', src); res(); }; im.src = src; })));
})();
