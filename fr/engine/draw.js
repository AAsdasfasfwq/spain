/* =====================================================================
   MG.draw / MG.tex / MG.fx / MG.path — materials, textures, shading,
   shadows, brush strokes, deterministic particles.
   Rule of thumb: build anything static ONCE with MG.cache(), then draw
   the cached canvas every frame (fast). Never re-generate noise per frame.
   ===================================================================== */
(function () {
  const MG = window.MG;
  const { clamp, lerp } = MG;

  // ---------- canvases & caching ----------
  MG.canvas = (w = MG.W, h = MG.H) => { const c = document.createElement('canvas'); c.width = Math.max(1, Math.ceil(w)); c.height = Math.max(1, Math.ceil(h)); return c; };
  const cache = new Map();
  /** draw once, reuse forever: MG.cache('key', w, h, (ctx,w,h)=>{...}) → canvas */
  MG.cache = (key, w, h, fn) => {
    let c = cache.get(key); if (c) return c;
    c = MG.canvas(w, h); const ctx = c.getContext('2d'); fn(ctx, c.width, c.height); cache.set(key, c); return c;
  };
  MG.cacheHas = (k) => cache.has(k);
  MG.cacheDrop = (prefix) => { for (const k of [...cache.keys()]) if (k.startsWith(prefix)) cache.delete(k); };
  /** cached blurred copy of a canvas (blur quantised to 0.5px) */
  const blurCache = new WeakMap();
  MG.blurred = (src, px) => {
    px = Math.round(px * 2) / 2; if (px <= 0.25) return src;
    let m = blurCache.get(src); if (!m) { m = new Map(); blurCache.set(src, m); }
    let c = m.get(px); if (c) return c;
    const pad = Math.ceil(px * 2.5); c = MG.canvas(src.width + pad * 2, src.height + pad * 2); c._pad = pad;
    const x = c.getContext('2d'); x.filter = `blur(${px}px)`; x.drawImage(src, pad, pad); m.set(px, c); return c;
  };
  /** draw a canvas centred at x,y with scale/rotation/alpha/blur (blur uses cache) */
  MG.sprite = (ctx, img, x, y, o = {}) => {
    const s = o.scale ?? 1, r = o.rot ?? 0, a = o.alpha ?? 1, ax = o.ax ?? 0.5, ay = o.ay ?? 0.5;
    if (a <= 0.001 || s <= 0.0001) return;
    let src = img, pad = 0; if (o.blur) { src = MG.blurred(img, o.blur); pad = src._pad || 0; }
    ctx.save(); ctx.globalAlpha *= a; if (o.blend) ctx.globalCompositeOperation = o.blend;
    ctx.translate(x, y); if (r) ctx.rotate(r); ctx.scale(s * (o.sx ?? 1), s * (o.sy ?? 1));
    ctx.drawImage(src, -img.width * ax - pad, -img.height * ay - pad);
    ctx.restore();
  };
  /** scratch full-frame buffers for masking etc. (index 0..7). Caller must clear. */
  const scratch = [];
  MG.scratch = (i = 0, w = MG.W, h = MG.H) => { let c = scratch[i]; if (!c || c.width !== w || c.height !== h) { c = scratch[i] = MG.canvas(w, h); } return c; };
  MG.clear = (ctx) => { ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); ctx.restore(); };
  MG.reset = (ctx) => { ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over'; ctx.filter = 'none'; ctx.shadowBlur = 0; ctx.shadowColor = 'transparent'; ctx.shadowOffsetX = ctx.shadowOffsetY = 0; ctx.lineCap = 'butt'; ctx.lineJoin = 'miter'; ctx.setLineDash([]); ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high'; };

  // ---------- textures ----------
  MG.tex = {};
  /** monochrome grain tile (alpha noise) */
  MG.tex.grain = (size = 256, amount = 1, seed = 1, soft = 0) => MG.cache(`grain:${size}:${amount}:${seed}:${soft}`, size, size, (x, w, h) => {
    const id = x.createImageData(w, h); const r = MG.rng(seed);
    for (let i = 0; i < w * h; i++) { const v = r(); id.data[i * 4] = id.data[i * 4 + 1] = id.data[i * 4 + 2] = v * 255; id.data[i * 4 + 3] = 255 * amount * Math.abs(v - 0.5) * 2; }
    x.putImageData(id, 0, 0); if (soft) { const c2 = MG.canvas(w, h); const y = c2.getContext('2d'); y.filter = `blur(${soft}px)`; y.drawImage(x.canvas, 0, 0); x.clearRect(0, 0, w, h); x.drawImage(c2, 0, 0); }
  });
  /** value-noise cloud texture (soft blotches) tile, colour on transparent */
  MG.tex.blotch = (size = 512, scale = 4, seed = 2, color = '#000000', contrast = 1.4) => MG.cache(`blotch:${size}:${scale}:${seed}:${color}:${contrast}`, size, size, (x, w, h) => {
    const id = x.createImageData(w, h); const [cr, cg, cb] = MG.col.rgb(color); const off = seed * 31.7;
    for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) {
      // tileable via 4D-ish torus trick using two 2D noises blended
      const u = i / w, v = j / h; const a = MG.TAU * u, b = MG.TAU * v; const R = scale / MG.TAU;
      const n = MG.noise3(Math.cos(a) * R + off, Math.sin(a) * R + off, Math.cos(b) * R + Math.sin(b) * 0.7) * 0.6 + MG.noise3(Math.cos(a) * R * 2.3 + 5, Math.sin(a) * R * 2.3, Math.sin(b) * R * 2.3 + off) * 0.4;
      const k = (i + j * w) * 4; id.data[k] = cr; id.data[k + 1] = cg; id.data[k + 2] = cb; id.data[k + 3] = clamp((n * contrast * 0.5 + 0.5)) * 255;
    }
    x.putImageData(id, 0, 0);
  });
  /** fibrous paper texture tile (fibers + speckles), transparent, meant for multiply */
  MG.tex.fibers = (size = 512, seed = 3, ink = '#3a2a1a') => MG.cache(`fibers:${size}:${seed}:${ink}`, size, size, (x, w, h) => {
    const r = MG.rng(seed); x.lineCap = 'round';
    for (let i = 0; i < 900; i++) { const px = r() * w, py = r() * h, l = 4 + r() * 22, a = r() * Math.PI * 2; x.strokeStyle = MG.col.a(ink, 0.03 + r() * 0.06); x.lineWidth = 0.4 + r() * 0.8; x.beginPath(); x.moveTo(px, py); x.quadraticCurveTo(px + Math.cos(a + 0.6) * l * 0.5, py + Math.sin(a + 0.6) * l * 0.5, px + Math.cos(a) * l, py + Math.sin(a) * l); x.stroke(); }
    for (let i = 0; i < 1600; i++) { x.fillStyle = MG.col.a(ink, 0.04 + r() * 0.12); const s = r() * 1.3; x.fillRect(r() * w, r() * h, s, s); }
  });
  /** CanvasPattern helper (pattern objects are per-context; cached per ctx) */
  const patCache = new WeakMap();
  MG.tex.pattern = (ctx, tile, rep = 'repeat') => { let m = patCache.get(ctx); if (!m) { m = new Map(); patCache.set(ctx, m); } let p = m.get(tile); if (!p) { p = ctx.createPattern(tile, rep); m.set(tile, p); } return p; };
  /** full-frame paper background (cached by params). Optional warm light falloff. */
  MG.tex.paper = (base = '#efe4d0', o = {}) => {
    const key = `paper:${base}:${o.seed || 1}:${o.blotch ?? 0.08}:${o.fiber ?? 1}:${o.light ?? 0.25}:${o.w || MG.W}x${o.h || MG.H}`;
    return MG.cache(key, o.w || MG.W, o.h || MG.H, (x, w, h) => {
      x.fillStyle = base; x.fillRect(0, 0, w, h);
      x.globalCompositeOperation = 'multiply'; x.globalAlpha = o.blotch ?? 0.08;
      x.fillStyle = x.createPattern(MG.tex.blotch(512, 3, o.seed || 1, MG.col.darken(base, 0.35)), 'repeat'); x.fillRect(0, 0, w, h);
      x.globalAlpha = o.fiber ?? 1; x.fillStyle = x.createPattern(MG.tex.fibers(512, (o.seed || 1) + 7, MG.col.darken(base, 0.7)), 'repeat'); x.fillRect(0, 0, w, h);
      x.globalAlpha = 1; x.globalCompositeOperation = 'source-over';
      const L = o.light ?? 0.25; if (L > 0) { const g = x.createRadialGradient(w * 0.42, h * 0.38, 0, w * 0.5, h * 0.5, Math.hypot(w, h) * 0.62); g.addColorStop(0, `rgba(255,250,235,${L * 0.5})`); g.addColorStop(0.6, 'rgba(255,250,235,0)'); g.addColorStop(1, `rgba(40,20,10,${L * 0.6})`); x.fillStyle = g; x.fillRect(0, 0, w, h); }
    });
  };
  /** generic material overlay inside current clip/path: kind = grain|blotch|fibers|halftone|lines */
  MG.tex.over = (ctx, kind, o = {}) => {
    const tile = kind === 'grain' ? MG.tex.grain(256, 1, o.seed || 5) : kind === 'blotch' ? MG.tex.blotch(512, o.scale || 4, o.seed || 2, o.color || '#000') : kind === 'fibers' ? MG.tex.fibers(512, o.seed || 3, o.color || '#2a1a10') : kind === 'halftone' ? MG.tex.halftone(o.spacing || 8, o.radius || 2.2, o.color || '#000') : MG.tex.lines(o.spacing || 6, o.width || 1, o.color || '#000', o.angle || 45);
    ctx.save(); ctx.globalAlpha *= o.alpha ?? 0.25; ctx.globalCompositeOperation = o.blend || 'multiply';
    ctx.fillStyle = MG.tex.pattern(ctx, tile);
    const m = ctx.getTransform(); ctx.setTransform(1, 0, 0, 1, 0, 0);
    if (o.path) { ctx.setTransform(m); ctx.fill(o.path); } else ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.restore();
  };
  MG.tex.halftone = (spacing = 8, radius = 2.2, color = '#000') => MG.cache(`ht:${spacing}:${radius}:${color}`, spacing * 2, spacing * 2, (x, w) => { x.fillStyle = color; for (const [cx, cy] of [[0, 0], [w, 0], [0, w], [w, w], [w / 2, w / 2]]) { x.beginPath(); x.arc(cx, cy, radius, 0, MG.TAU); x.fill(); } });
  MG.tex.lines = (spacing = 6, width = 1, color = '#000', angle = 45) => MG.cache(`ln:${spacing}:${width}:${color}:${angle}`, 64, 64, (x, w, h) => { x.strokeStyle = color; x.lineWidth = width; x.translate(w / 2, h / 2); x.rotate(MG.deg(angle)); for (let i = -64; i <= 64; i += spacing) { x.beginPath(); x.moveTo(-90, i); x.lineTo(90, i); x.stroke(); } });

  // ---------- paths ----------
  MG.path = {};
  MG.path.rr = (x, y, w, h, r = 12) => { const p = new Path2D(); p.roundRect(x, y, w, h, r); return p; };
  MG.path.circle = (x, y, r) => { const p = new Path2D(); p.arc(x, y, Math.max(0, r), 0, MG.TAU); return p; };
  MG.path.ellipse = (x, y, rx, ry, rot = 0) => { const p = new Path2D(); p.ellipse(x, y, Math.max(0, rx), Math.max(0, ry), rot, 0, MG.TAU); return p; };
  MG.path.poly = (pts, close = true) => { const p = new Path2D(); pts.forEach((q, i) => (i ? p.lineTo(q[0], q[1]) : p.moveTo(q[0], q[1]))); if (close) p.closePath(); return p; };
  /** smooth closed/open curve through points (Catmull-Rom → bezier) */
  MG.path.smooth = (pts, close = true, tension = 0.5) => {
    const p = new Path2D(); const n = pts.length; if (n < 2) return p;
    const P = (i) => (close ? pts[(i + n) % n] : pts[clamp(i, 0, n - 1)]);
    p.moveTo(pts[0][0], pts[0][1]);
    const segs = close ? n : n - 1;
    for (let i = 0; i < segs; i++) { const p0 = P(i - 1), p1 = P(i), p2 = P(i + 1), p3 = P(i + 2); const k = tension / 3 * 2; p.bezierCurveTo(p1[0] + (p2[0] - p0[0]) * k / 2, p1[1] + (p2[1] - p0[1]) * k / 2, p2[0] - (p3[0] - p1[0]) * k / 2, p2[1] - (p3[1] - p1[1]) * k / 2, p2[0], p2[1]); }
    if (close) p.closePath(); return p;
  };
  /** organic blob: n lobes with noise; t animates boiling */
  MG.path.blob = (cx, cy, r, o = {}) => { const n = o.n || 14, irr = o.irr ?? 0.18, seed = o.seed || 1, t = o.t || 0; const pts = []; for (let i = 0; i < n; i++) { const a = (i / n) * MG.TAU; const k = 1 + irr * MG.noise2(Math.cos(a) * 1.3 + seed, Math.sin(a) * 1.3 + t * 0.6); pts.push([cx + Math.cos(a) * r * k * (o.sx || 1), cy + Math.sin(a) * r * k * (o.sy || 1)]); } return MG.path.smooth(pts, true); };
  /** torn-paper rectangle */
  MG.path.torn = (x, y, w, h, o = {}) => {
    const seed = o.seed || 1, amp = o.amp ?? 6, step = o.step ?? 14; const r = MG.rng(seed); const pts = [];
    const edge = (x0, y0, x1, y1, nx, ny, torn) => { const L = Math.hypot(x1 - x0, y1 - y0), n = Math.max(2, Math.round(L / step)); for (let i = 0; i < n; i++) { const t = i / n; const j = torn ? (r() - 0.5) * 2 * amp + (r() < 0.12 ? (r() - 0.3) * amp * 2 : 0) : (r() - 0.5) * 0.8; pts.push([lerp(x0, x1, t) + nx * j, lerp(y0, y1, t) + ny * j]); } };
    const e = o.edges || 'tblr';
    edge(x, y, x + w, y, 0, -1, e.includes('t')); edge(x + w, y, x + w, y + h, 1, 0, e.includes('r')); edge(x + w, y + h, x, y + h, 0, 1, e.includes('b')); edge(x, y + h, x, y, -1, 0, e.includes('l'));
    return MG.path.poly(pts, true);
  };
  /** star / sun-burst */
  MG.path.star = (cx, cy, r1, r2, n = 5, rot = -Math.PI / 2) => { const pts = []; for (let i = 0; i < n * 2; i++) { const a = rot + (i / (n * 2)) * MG.TAU; const r = i % 2 ? r2 : r1; pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]); } return MG.path.poly(pts); };
  /** point along a polyline at fraction t (by length) → [x,y,angle] */
  MG.path.along = (pts, t) => {
    let L = 0; const seg = []; for (let i = 1; i < pts.length; i++) { const d = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); seg.push(d); L += d; }
    let target = clamp(t) * L; for (let i = 0; i < seg.length; i++) { if (target <= seg[i] || i === seg.length - 1) { const u = seg[i] ? target / seg[i] : 0; const a = pts[i], b = pts[i + 1]; return [lerp(a[0], b[0], u), lerp(a[1], b[1], u), Math.atan2(b[1] - a[1], b[0] - a[0])]; } target -= seg[i]; }
    return [pts[0][0], pts[0][1], 0];
  };
  /** sub-polyline from 0..t (for line-draw-on animations) */
  MG.path.trim = (pts, t0, t1) => {
    if (t1 === undefined) { t1 = t0; t0 = 0; }
    let L = 0; const cum = [0]; for (let i = 1; i < pts.length; i++) { L += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); cum.push(L); }
    const a = clamp(t0) * L, b = clamp(t1) * L; const out = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const s0 = cum[i], s1 = cum[i + 1]; if (s1 < a || s0 > b) continue;
      const p = (s) => { const u = (s - s0) / (s1 - s0 || 1); return [lerp(pts[i][0], pts[i + 1][0], u), lerp(pts[i][1], pts[i + 1][1], u)]; };
      if (!out.length) out.push(p(Math.max(a, s0))); out.push(p(Math.min(b, s1)));
    }
    return out;
  };
  /** densify + catmull-smooth a polyline into many points */
  MG.path.spline = (pts, perSeg = 12) => { const n = pts.length; if (n < 3) return pts.slice(); const out = []; const P = (i) => pts[clamp(i, 0, n - 1)]; for (let i = 0; i < n - 1; i++) { const p0 = P(i - 1), p1 = P(i), p2 = P(i + 1), p3 = P(i + 2); for (let k = 0; k < perSeg; k++) { const t = k / perSeg, t2 = t * t, t3 = t2 * t; out.push([0, 1].map((d) => 0.5 * (2 * p1[d] + (-p0[d] + p2[d]) * t + (2 * p0[d] - 5 * p1[d] + 4 * p2[d] - p3[d]) * t2 + (-p0[d] + 3 * p1[d] - 3 * p2[d] + p3[d]) * t3))); } } out.push(pts[n - 1]); return out; };

  // ---------- strokes ----------
  MG.fx = {};
  /** variable-width ink stroke along points: width can taper; wobble+boil gives hand-drawn life.
   *  o: {width, color, taper:[start,end] (0..1), wobble px, seed, boil (time; steps on 2s), alpha} */
  MG.fx.ink = (ctx, pts, o = {}) => {
    if (pts.length < 2) return; const w = o.width ?? 4, tp = o.taper ?? [0.3, 0.3], wob = o.wobble ?? 0, seed = o.seed || 1;
    const boil = o.boil !== undefined ? Math.floor(o.boil * 12) : 0; // 12fps boil
    const P = pts.map((p, i) => wob ? [p[0] + MG.noise2(i * 0.37 + seed, boil * 3.1) * wob, p[1] + MG.noise2(i * 0.37 + 50 + seed, boil * 3.1) * wob] : p);
    const n = P.length; const L = [], R = [];
    for (let i = 0; i < n; i++) {
      const a = P[Math.max(0, i - 1)], b = P[Math.min(n - 1, i + 1)]; let dx = b[0] - a[0], dy = b[1] - a[1]; const d = Math.hypot(dx, dy) || 1; dx /= d; dy /= d;
      const u = i / (n - 1); let k = 1; if (tp[0] > 0 && u < tp[0]) k = Math.sin((u / tp[0]) * Math.PI / 2); if (tp[1] > 0 && u > 1 - tp[1]) k = Math.min(k, Math.sin(((1 - u) / tp[1]) * Math.PI / 2));
      const hw = (w / 2) * Math.max(0.08, k) * (1 + (o.pressure ? o.pressure(u) - 1 : 0));
      L.push([P[i][0] - dy * hw, P[i][1] + dx * hw]); R.push([P[i][0] + dy * hw, P[i][1] - dx * hw]);
    }
    const path = new Path2D(); L.forEach((p, i) => (i ? path.lineTo(p[0], p[1]) : path.moveTo(p[0], p[1]))); for (let i = n - 1; i >= 0; i--) path.lineTo(R[i][0], R[i][1]); path.closePath();
    ctx.save(); if (o.alpha !== undefined) ctx.globalAlpha *= o.alpha; ctx.fillStyle = o.color || '#1d1a1f'; ctx.fill(path); ctx.restore();
    return path;
  };
  /** hand-drawn outline around a Path2D-like set of points (closed) */
  MG.fx.inkClosed = (ctx, pts, o = {}) => MG.fx.ink(ctx, [...pts, pts[0], pts[1]], { taper: [0, 0], ...o });
  /** dashed/dotted progressive line with optional moving head */
  MG.fx.line = (ctx, pts, o = {}) => {
    const t = o.progress ?? 1; const sub = MG.path.trim(pts, o.from || 0, t); if (sub.length < 2) return;
    ctx.save(); ctx.strokeStyle = o.color || '#1d1a1f'; ctx.lineWidth = o.width || 3; ctx.lineCap = o.cap || 'round'; ctx.lineJoin = 'round'; if (o.dash) { ctx.setLineDash(o.dash); ctx.lineDashOffset = o.dashOffset || 0; } if (o.alpha !== undefined) ctx.globalAlpha *= o.alpha;
    ctx.beginPath(); sub.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); ctx.restore();
    if (o.head && t > 0 && t < 1) { const h = sub[sub.length - 1]; ctx.save(); ctx.fillStyle = o.headColor || o.color || '#1d1a1f'; ctx.beginPath(); ctx.arc(h[0], h[1], o.head, 0, MG.TAU); ctx.fill(); ctx.restore(); }
    return sub[sub.length - 1];
  };
  /** arrowhead at the end of pts */
  MG.fx.arrowHead = (ctx, pts, size = 16, color = '#1d1a1f') => { const n = pts.length; if (n < 2) return; const a = pts[n - 2], b = pts[n - 1]; const ang = Math.atan2(b[1] - a[1], b[0] - a[0]); ctx.save(); ctx.translate(b[0], b[1]); ctx.rotate(ang); ctx.fillStyle = color; ctx.beginPath(); ctx.moveTo(size * 0.35, 0); ctx.lineTo(-size * 0.75, -size * 0.55); ctx.quadraticCurveTo(-size * 0.45, 0, -size * 0.75, size * 0.55); ctx.closePath(); ctx.fill(); ctx.restore(); };

  // ---------- volume / light / shadow ----------
  /** Fill a path so it reads as a lit 3D form:
   *  base fill → core shadow crescent away from light → highlight toward light → rim light → texture.
   *  o: {color, light:[lx,ly] (unit dir TO the light, screen space), shade (0..1), shadeColor, hi (0..1), hiColor,
   *      size (form size px, sets blur), rim (color|null), rimW, tex:'grain'|'blotch'|null, texAlpha, cel:boolean, bounce} */
  MG.fx.volume = (ctx, path, bbox, o = {}) => {
    const [bx, by, bw, bh] = bbox; const size = o.size || Math.max(bw, bh);
    const L = o.light || [-0.55, -0.83]; const base = o.color || '#c8693f';
    ctx.save(); ctx.fillStyle = base; ctx.fill(path); ctx.clip(path);
    const cel = !!o.cel; const blur = cel ? 0 : size * (o.soft ?? 0.18);
    // core shadow: fill bbox, knock out a copy of the shape shifted toward the light
    const shade = o.shade ?? 0.42; if (shade > 0) {
      const c = MG.scratch(7, Math.ceil(bw + 40), Math.ceil(bh + 40)); const x = c.getContext('2d'); x.setTransform(1, 0, 0, 1, 0, 0); x.clearRect(0, 0, c.width, c.height);
      x.fillStyle = o.shadeColor || MG.col.shade(base, 0.55); x.fillRect(0, 0, c.width, c.height);
      x.globalCompositeOperation = 'destination-out'; if (blur) x.filter = `blur(${blur}px)`;
      const off = size * (o.shadeOffset ?? 0.22); x.translate(20 - bx + L[0] * off, 20 - by + L[1] * off); const sc = o.shadeScale ?? 1.04; x.translate(bx + bw / 2, by + bh / 2); x.scale(sc, sc); x.translate(-(bx + bw / 2), -(by + bh / 2)); x.fill(path);
      x.filter = 'none'; x.globalCompositeOperation = 'source-over'; x.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalAlpha = shade; ctx.drawImage(c, bx - 20, by - 20); ctx.globalAlpha = 1;
    }
    // reflected bounce light at the far edge
    if (o.bounce) { const g = ctx.createLinearGradient(bx + bw / 2 - L[0] * bw * 0.6, by + bh / 2 - L[1] * bh * 0.6, bx + bw / 2, by + bh / 2); g.addColorStop(0, MG.col.a(o.bounce, 0.35)); g.addColorStop(0.5, MG.col.a(o.bounce, 0)); ctx.fillStyle = g; ctx.fillRect(bx, by, bw, bh); }
    // highlight
    const hi = o.hi ?? 0.35; if (hi > 0) {
      const cx = bx + bw / 2 + L[0] * bw * 0.28, cy = by + bh / 2 + L[1] * bh * 0.28; const r = Math.max(bw, bh) * (o.hiSize ?? 0.55);
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r); const hc = o.hiColor || MG.col.light(base, 0.65);
      if (cel) { g.addColorStop(0, MG.col.a(hc, hi)); g.addColorStop(0.45, MG.col.a(hc, hi)); g.addColorStop(0.46, MG.col.a(hc, 0)); } else { g.addColorStop(0, MG.col.a(hc, hi)); g.addColorStop(1, MG.col.a(hc, 0)); }
      ctx.globalCompositeOperation = o.hiBlend || 'screen'; ctx.fillStyle = g; ctx.fillRect(bx, by, bw, bh); ctx.globalCompositeOperation = 'source-over';
    }
    if (o.tex) MG.tex.over(ctx, o.tex, { alpha: o.texAlpha ?? 0.18, seed: o.texSeed, scale: o.texScale, color: o.texColor });
    ctx.restore();
    if (o.rim) { ctx.save(); ctx.clip(path); ctx.strokeStyle = o.rim; ctx.lineWidth = (o.rimW || 3) * 2; ctx.globalAlpha = o.rimA ?? 0.8; ctx.translate(L[0] * (o.rimW || 3) * -0.9, L[1] * (o.rimW || 3) * -0.9); ctx.stroke(path); ctx.restore(); }
    if (o.outline) { ctx.save(); ctx.strokeStyle = o.outline; ctx.lineWidth = o.outlineW || 2.5; ctx.lineJoin = 'round'; ctx.stroke(path); ctx.restore(); }
  };
  /** soft cast/drop shadow of a path (uses scratch + blur). */
  MG.fx.shadow = (ctx, path, o = {}) => { ctx.save(); ctx.shadowColor = o.color || 'rgba(30,15,10,0.35)'; ctx.shadowBlur = o.blur ?? 24; ctx.shadowOffsetX = o.dx ?? 10; ctx.shadowOffsetY = o.dy ?? 18; ctx.fillStyle = o.fill || '#000'; ctx.globalAlpha *= o.alpha ?? 1; ctx.fill(path); ctx.restore(); };
  /** cheap elliptical contact shadow on the ground */
  MG.fx.contact = (ctx, x, y, rx, ry, alpha = 0.35, color = '#20120c') => { const g = ctx.createRadialGradient(x, y, 0, x, y, rx); g.addColorStop(0, MG.col.a(color, alpha)); g.addColorStop(1, MG.col.a(color, 0)); ctx.save(); ctx.translate(x, y); ctx.scale(1, ry / rx); ctx.translate(-x, -y); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, rx, 0, MG.TAU); ctx.fill(); ctx.restore(); };
  /** additive radial glow */
  MG.fx.glow = (ctx, x, y, r, color = '#ffd28a', alpha = 0.5, blend = 'screen') => { if (alpha <= 0 || r <= 0) return; const g = ctx.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, MG.col.a(color, alpha)); g.addColorStop(0.35, MG.col.a(color, alpha * 0.45)); g.addColorStop(1, MG.col.a(color, 0)); ctx.save(); ctx.globalCompositeOperation = blend; ctx.fillStyle = g; ctx.fillRect(x - r, y - r, r * 2, r * 2); ctx.restore(); };
  /** volumetric light rays from a point (god rays). */
  MG.fx.rays = (ctx, x, y, o = {}) => { const n = o.n || 9, len = o.len || 1400, spread = o.spread ?? 0.9, dir = o.dir ?? Math.PI / 2, seed = o.seed || 4, t = o.t || 0; ctx.save(); ctx.globalCompositeOperation = o.blend || 'screen'; for (let i = 0; i < n; i++) { const a = dir + (MG.rand(seed, i) - 0.5) * spread + MG.wiggle(t, 0.07, 0.03, seed + i); const w = (o.width || 0.05) * (0.4 + MG.rand(seed, i + 40)); const al = (o.alpha ?? 0.12) * (0.4 + 0.6 * MG.rand(seed, i + 80)) * (0.7 + 0.3 * Math.sin(t * 0.6 + i)); const g = ctx.createLinearGradient(x, y, x + Math.cos(a) * len, y + Math.sin(a) * len); g.addColorStop(0, MG.col.a(o.color || '#fff1c9', al)); g.addColorStop(1, MG.col.a(o.color || '#fff1c9', 0)); ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a - w) * len, y + Math.sin(a - w) * len); ctx.lineTo(x + Math.cos(a + w) * len, y + Math.sin(a + w) * len); ctx.closePath(); ctx.fill(); } ctx.restore(); };
  /** halftone shading inside a path: dot size follows a linear light gradient */
  MG.fx.halftone = (ctx, path, bbox, o = {}) => { const [bx, by, bw, bh] = bbox; const sp = o.spacing || 9, ang = MG.deg(o.angle ?? 30), L = o.light || [-0.6, -0.8]; ctx.save(); ctx.clip(path); ctx.fillStyle = o.color || 'rgba(20,10,10,0.5)'; const cx = bx + bw / 2, cy = by + bh / 2, R = Math.hypot(bw, bh) / 2 + sp; const ca = Math.cos(ang), sa = Math.sin(ang); for (let v = -R; v <= R; v += sp) for (let u = -R; u <= R; u += sp) { const x = cx + u * ca - v * sa, y = cy + u * sa + v * ca; const d = ((x - cx) * -L[0] + (y - cy) * -L[1]) / R; const s = clamp((d * 0.5 + 0.5) * (o.amount ?? 1.2) - (o.cut ?? 0.25)); if (s <= 0.02) continue; ctx.beginPath(); ctx.arc(x, y, s * sp * 0.55, 0, MG.TAU); ctx.fill(); } ctx.restore(); };
  /** engraving / hatch lines inside path, density by light direction */
  MG.fx.hatch = (ctx, path, bbox, o = {}) => { const [bx, by, bw, bh] = bbox; const sp = o.spacing || 6, ang = MG.deg(o.angle ?? -35), L = o.light || [-0.6, -0.8]; ctx.save(); ctx.clip(path); ctx.strokeStyle = o.color || 'rgba(25,15,10,0.55)'; ctx.lineWidth = o.width || 1; const cx = bx + bw / 2, cy = by + bh / 2, R = Math.hypot(bw, bh) / 2; const ca = Math.cos(ang), sa = Math.sin(ang); for (let v = -R; v <= R; v += sp) { ctx.beginPath(); let on = false; for (let u = -R; u <= R; u += 4) { const x = cx + u * ca - v * sa, y = cy + u * sa + v * ca; const d = ((x - cx) * -L[0] + (y - cy) * -L[1]) / R; const draw = d > (o.threshold ?? 0.05) + MG.noise2(x * 0.02, y * 0.02) * 0.15; if (draw && !on) { ctx.moveTo(x, y); on = true; } else if (draw) ctx.lineTo(x, y); else on = false; } ctx.stroke(); } ctx.restore(); };

  // ---------- deterministic particles ----------
  /** Particles computed analytically from (seed, i, t) — no state, seek-safe.
   *  o: {n, seed, t, area:[x,y,w,h], vel:[vx,vy], velJitter, life, size:[a,b], color|colors, alpha, gravity, drift, shape:'dot'|'streak'|'square'|'puff'|'spark', blend, fadeIn, fadeOut, rot} */
  MG.fx.particles = (ctx, o = {}) => {
    const n = o.n || 60, seed = o.seed || 9, t = o.t || 0, life = o.life || 4, A = o.area || [0, 0, MG.W, MG.H];
    const V = o.vel || [0, -20], VJ = o.velJitter ?? 0.5, G = o.gravity || 0, S = o.size || [1.5, 4];
    ctx.save(); if (o.blend) ctx.globalCompositeOperation = o.blend;
    for (let i = 0; i < n; i++) {
      const off = MG.rand(seed, i) * life; const tt = t + off; const cycle = Math.floor(tt / life); const age = tt - cycle * life; const u = age / life;
      const k = seed * 1.7 + i * 13 + cycle * 101;
      const x0 = A[0] + MG.hash(k) * A[2], y0 = A[1] + MG.hash(k + 1) * A[3];
      const vx = V[0] * (1 + (MG.hash(k + 2) - 0.5) * 2 * VJ), vy = V[1] * (1 + (MG.hash(k + 3) - 0.5) * 2 * VJ);
      const dr = o.drift || 0; const x = x0 + vx * age + (dr ? MG.noise2(k * 0.1, age * 0.5) * dr : 0); const y = y0 + vy * age + 0.5 * G * age * age + (dr ? MG.noise2(k * 0.1 + 9, age * 0.5) * dr : 0);
      const fi = o.fadeIn ?? 0.15, fo = o.fadeOut ?? 0.35; const a = (o.alpha ?? 0.7) * Math.min(1, u / fi, (1 - u) / fo) * (0.5 + 0.5 * MG.hash(k + 4));
      if (a <= 0.003) continue; const s = lerp(S[0], S[1], MG.hash(k + 5)) * (o.grow ? 1 + u * o.grow : 1);
      ctx.globalAlpha = a; ctx.fillStyle = ctx.strokeStyle = o.colors ? o.colors[Math.floor(MG.hash(k + 6) * o.colors.length)] : o.color || '#fff6df';
      const sh = o.shape || 'dot';
      if (sh === 'dot') { ctx.beginPath(); ctx.arc(x, y, s, 0, MG.TAU); ctx.fill(); }
      else if (sh === 'square') { ctx.save(); ctx.translate(x, y); ctx.rotate((o.rot || 3) * age + k); ctx.fillRect(-s, -s * 0.6, s * 2, s * 1.2); ctx.restore(); }
      else if (sh === 'streak') { const vvx = vx, vvy = vy + G * age; const L = (o.streak || 0.04); ctx.lineWidth = s; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - vvx * L, y - vvy * L); ctx.stroke(); }
      else if (sh === 'puff') { const g = ctx.createRadialGradient(x, y, 0, x, y, s); g.addColorStop(0, ctx.fillStyle); g.addColorStop(1, MG.col.a(o.color || '#ffffff', 0)); ctx.fillStyle = g; ctx.fillRect(x - s, y - s, s * 2, s * 2); }
      else if (sh === 'spark') { ctx.globalCompositeOperation = 'lighter'; ctx.beginPath(); ctx.arc(x, y, s, 0, MG.TAU); ctx.fill(); }
      else if (typeof sh === 'function') sh(ctx, x, y, s, age, k);
    }
    ctx.restore();
  };
  /** soft smoke / cloud puff sprite (cached) */
  MG.tex.puff = (r = 128, seed = 1, color = '#ffffff') => MG.cache(`puff:${r}:${seed}:${color}`, r * 2, r * 2, (x, w) => { const rr = MG.rng(seed); for (let i = 0; i < 18; i++) { const a = rr() * MG.TAU, d = rr() * r * 0.45, s = r * (0.25 + rr() * 0.4); const cx = w / 2 + Math.cos(a) * d, cy = w / 2 + Math.sin(a) * d; const g = x.createRadialGradient(cx, cy, 0, cx, cy, s); g.addColorStop(0, MG.col.a(color, 0.22)); g.addColorStop(1, MG.col.a(color, 0)); x.fillStyle = g; x.fillRect(0, 0, w, w); } });
  /** drifting smoke/fog bank */
  MG.fx.smoke = (ctx, x, y, t, o = {}) => { const n = o.n || 10, seed = o.seed || 3, spread = o.spread || 300, rise = o.rise ?? 30, R = o.r || 140; const spr = MG.tex.puff(64, seed, o.color || '#ffffff'); for (let i = 0; i < n; i++) { const life = o.life || 6; const tt = t + MG.rand(seed, i) * life; const age = tt % life, u = age / life; const px = x + (MG.rand(seed, i + 9) - 0.5) * spread + MG.wiggle(tt, 0.2, 30, seed + i) + (o.wind || 0) * age; const py = y - rise * age + (MG.rand(seed, i + 19) - 0.5) * spread * 0.3; MG.sprite(ctx, spr, px, py, { scale: (R / 64) * (0.6 + u * 0.9), alpha: (o.alpha ?? 0.6) * Math.sin(u * Math.PI), rot: i + age * 0.1 }); } };

  // ---------- common backgrounds ----------
  /** vertical gradient fill */
  MG.fx.vgrad = (ctx, stops, x = 0, y = 0, w = MG.W, h = MG.H) => { const g = ctx.createLinearGradient(x, y, x, y + h); stops.forEach((s, i) => (Array.isArray(s) ? g.addColorStop(s[0], s[1]) : g.addColorStop(i / (stops.length - 1), s))); ctx.fillStyle = g; ctx.fillRect(x, y, w, h); };
  /** radial gradient fill */
  MG.fx.rgrad = (ctx, cx, cy, r, stops) => { const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r); stops.forEach((s, i) => (Array.isArray(s) ? g.addColorStop(s[0], s[1]) : g.addColorStop(i / (stops.length - 1), s))); ctx.fillStyle = g; ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height); };
  /** tiny helper: fill full frame */
  MG.fx.fill = (ctx, c) => { ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.fillStyle = c; ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height); ctx.restore(); };
})();
