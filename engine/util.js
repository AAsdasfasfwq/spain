/* =====================================================================
   MG — motion engine utilities (math, easing, keys, springs, noise, rng,
   colour, voice-over timing lookup).  Everything is a pure function of
   its inputs: NEVER use Math.random() or Date in drawing code.
   ===================================================================== */
(function () {
  const MG = (window.MG = window.MG || {});
  MG.W = 1920; MG.H = 1080; MG.FPS = 30;

  // ---------- math ----------
  const clamp = (v, a = 0, b = 1) => (v < a ? a : v > b ? b : v);
  const lerp = (a, b, t) => a + (b - a) * t;
  const invLerp = (a, b, v) => (b === a ? 0 : (v - a) / (b - a));
  const fract = (x) => x - Math.floor(x);
  const mod = (a, n) => ((a % n) + n) % n;
  const smoothstep = (a, b, v) => { const t = clamp(invLerp(a, b, v)); return t * t * (3 - 2 * t); };
  MG.clamp = clamp; MG.lerp = lerp; MG.invLerp = invLerp; MG.fract = fract; MG.mod = mod; MG.smoothstep = smoothstep;
  MG.TAU = Math.PI * 2;
  MG.deg = (d) => (d * Math.PI) / 180;
  MG.dist = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);
  MG.lerpArr = (a, b, t) => a.map((v, i) => lerp(v, b[i], t));
  MG.lerpAngle = (a, b, t) => { let d = mod(b - a + Math.PI, MG.TAU) - Math.PI; return a + d * t; };
  /** map v from [a,b] to [c,d] (clamped) with optional easing */
  MG.map = (v, a, b, c, d, ease) => { let t = clamp(invLerp(a, b, v)); if (ease) t = ease(t); return lerp(c, d, t); };

  // ---------- easing ----------
  function bezier(x1, y1, x2, y2) {
    // cubic-bezier like CSS, solved with Newton + bisection
    const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
    const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
    const sx = (t) => ((ax * t + bx) * t + cx) * t;
    const sy = (t) => ((ay * t + by) * t + cy) * t;
    const dsx = (t) => (3 * ax * t + 2 * bx) * t + cx;
    return function (x) {
      if (x <= 0) return 0; if (x >= 1) return 1;
      let t = x;
      for (let i = 0; i < 8; i++) { const e = sx(t) - x; if (Math.abs(e) < 1e-6) return sy(t); const d = dsx(t); if (Math.abs(d) < 1e-6) break; t -= e / d; }
      let lo = 0, hi = 1; t = x;
      for (let i = 0; i < 30; i++) { const v = sx(t); if (Math.abs(v - x) < 1e-6) break; if (x > v) lo = t; else hi = t; t = (lo + hi) / 2; }
      return sy(t);
    };
  }
  const c1 = 1.70158, c2 = c1 * 1.525, c3 = c1 + 1;
  const E = {
    linear: (t) => t,
    inQuad: (t) => t * t, outQuad: (t) => 1 - (1 - t) * (1 - t), inOutQuad: (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
    inCubic: (t) => t * t * t, outCubic: (t) => 1 - Math.pow(1 - t, 3), inOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
    inQuart: (t) => t * t * t * t, outQuart: (t) => 1 - Math.pow(1 - t, 4), inOutQuart: (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2),
    inQuint: (t) => t ** 5, outQuint: (t) => 1 - Math.pow(1 - t, 5), inOutQuint: (t) => (t < 0.5 ? 16 * t ** 5 : 1 - Math.pow(-2 * t + 2, 5) / 2),
    inSine: (t) => 1 - Math.cos((t * Math.PI) / 2), outSine: (t) => Math.sin((t * Math.PI) / 2), inOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
    inExpo: (t) => (t === 0 ? 0 : Math.pow(2, 10 * t - 10)), outExpo: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    inOutExpo: (t) => (t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2),
    inCirc: (t) => 1 - Math.sqrt(1 - t * t), outCirc: (t) => Math.sqrt(1 - Math.pow(t - 1, 2)),
    inOutCirc: (t) => (t < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2),
    inBack: (t) => c3 * t * t * t - c1 * t * t, outBack: (t) => 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2),
    inOutBack: (t) => (t < 0.5 ? (Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2 : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2),
    outElastic: (t) => (t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1),
    outBounce: (t) => { const n1 = 7.5625, d1 = 2.75; if (t < 1 / d1) return n1 * t * t; if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75; if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375; return n1 * (t -= 2.625 / d1) * t + 0.984375; },
    bezier,
    backOut: (s = 1.70158) => (t) => 1 + (s + 1) * Math.pow(t - 1, 3) + s * Math.pow(t - 1, 2),
    steps: (n) => (t) => Math.floor(t * n) / n,
  };
  // ---- the film's motion language (see docs/MOTION.md) ----
  E.out = bezier(0.22, 1, 0.36, 1);     // signature entrance / landing
  E.in = bezier(0.64, 0, 0.78, 0);      // exits (accelerate away)
  E.inOut = bezier(0.65, 0, 0.35, 1);   // camera & large transforms
  E.cam = bezier(0.45, 0.05, 0.2, 1);   // camera moves: quick departure, long settle
  E.snap = E.outExpo;                   // punchy hits
  E.soft = E.inOutSine;                 // drifts / breathing
  MG.ease = E;
  const easeOf = (e) => (typeof e === 'function' ? e : e ? E[e] || E.out : E.out);
  MG.easeOf = easeOf;

  /** eased progress of t inside [a,b] → 0..1 */
  MG.prog = (t, a, b, ease) => { const p = clamp(invLerp(a, b, t)); return ease === undefined ? E.out(p) : easeOf(ease)(p); };
  /** raw linear progress */
  MG.lin = (t, a, b) => clamp(invLerp(a, b, t));
  /** window: 0 before a, rises to 1 over [a,a+inD], holds, falls to 0 over [b-outD,b] */
  MG.win = (t, a, b, inD = 0.4, outD = 0.3, easeIn = E.out, easeOut = E.in) => {
    if (t <= a || t >= b) return 0;
    const i = inD > 0 ? easeOf(easeIn)(clamp((t - a) / inD)) : 1;
    const o = outD > 0 ? 1 - easeOf(easeOut)(clamp((t - (b - outD)) / outD)) : 1;
    return Math.min(i, o);
  };

  /** Keyframes: frames = [[time, value, ease?], ...] ; value: number | array | {k:number}
   *  ease on a key applies to the segment that ENDS at that key. Holds = repeat values. */
  MG.keys = (t, frames) => {
    if (!frames.length) return 0;
    if (t <= frames[0][0]) return frames[0][1];
    const last = frames[frames.length - 1];
    if (t >= last[0]) return last[1];
    let i = 1; while (i < frames.length && frames[i][0] < t) i++;
    const a = frames[i - 1], b = frames[i];
    const p = easeOf(b[2] || 'inOut')(clamp((t - a[0]) / (b[0] - a[0] || 1e-9)));
    const va = a[1], vb = b[1];
    if (typeof va === 'number') return lerp(va, vb, p);
    if (Array.isArray(va)) return va.map((v, k) => lerp(v, vb[k], p));
    const o = {}; for (const k in va) o[k] = typeof va[k] === 'number' ? lerp(va[k], vb[k], p) : (p < 0.5 ? va[k] : vb[k]); return o;
  };

  /** analytic damped spring step response (0 → 1) for time t≥0 since trigger.
   *  f = frequency (Hz), z = damping ratio (0.3 bouncy … 1 critical) */
  MG.spring = (t, f = 2.2, z = 0.45) => {
    if (t <= 0) return 0;
    const w = 2 * Math.PI * f;
    if (z >= 1) { return 1 - (1 + w * t) * Math.exp(-w * t); }
    const wd = w * Math.sqrt(1 - z * z);
    return 1 - Math.exp(-z * w * t) * (Math.cos(wd * t) + ((z * w) / wd) * Math.sin(wd * t));
  };
  /** spring from value a to b triggered at t0 */
  MG.springTo = (t, t0, a, b, f, z) => lerp(a, b, MG.spring(t - t0, f, z));
  /** decaying oscillation (for wobble/jiggle after an impact) */
  MG.jiggle = (t, t0, amp = 1, f = 4, decay = 5) => (t < t0 ? 0 : amp * Math.sin((t - t0) * f * MG.TAU) * Math.exp(-(t - t0) * decay));

  /** Deterministic secondary motion: integrate a spring that follows targetFn(time) from t0 to t.
   *  Fixed dt grid => identical result regardless of seek order. */
  const followCache = new Map();
  MG.follow = (key, targetFn, t, t0, k = 120, d = 14) => {
    const dt = 1 / 240;
    if (t <= t0) return targetFn(t0);
    const n = Math.floor((t - t0) / dt);
    let c = followCache.get(key);
    if (!c || c.t0 !== t0 || c.n > n) { const v0 = targetFn(t0); c = { t0, n: 0, x: v0, v: 0 }; }
    let { x, v } = c;
    for (let i = c.n; i < n; i++) { const tt = t0 + i * dt; const a = k * (targetFn(tt) - x) - d * v; v += a * dt; x += v * dt; }
    followCache.set(key, { t0, n, x, v });
    return x;
  };

  // ---------- seeded random ----------
  MG.rng = (seed = 1) => { let a = (seed * 2654435761) >>> 0 || 1; return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
  MG.hash = (n) => { let x = Math.sin(n * 127.1 + 311.7) * 43758.5453123; return x - Math.floor(x); };
  MG.hash2 = (x, y) => { let h = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123; return h - Math.floor(h); };
  MG.rand = (seed, i = 0) => MG.hash(seed * 1013.13 + i * 7.77);
  MG.range = (seed, i, a, b) => lerp(a, b, MG.rand(seed, i));

  // ---------- simplex noise (2D/3D) ----------
  const grad3 = [[1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0], [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1], [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1]];
  const perm = new Uint8Array(512);
  { const r = MG.rng(1337); const p = new Uint8Array(256); for (let i = 0; i < 256; i++) p[i] = i; for (let i = 255; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; } for (let i = 0; i < 512; i++) perm[i] = p[i & 255]; }
  const F2 = 0.5 * (Math.sqrt(3) - 1), G2 = (3 - Math.sqrt(3)) / 6;
  MG.noise2 = (xin, yin) => {
    let n0 = 0, n1 = 0, n2 = 0; const s = (xin + yin) * F2; const i = Math.floor(xin + s), j = Math.floor(yin + s);
    const t = (i + j) * G2; const x0 = xin - (i - t), y0 = yin - (j - t);
    const i1 = x0 > y0 ? 1 : 0, j1 = x0 > y0 ? 0 : 1;
    const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2, x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2;
    const ii = i & 255, jj = j & 255;
    let t0 = 0.5 - x0 * x0 - y0 * y0; if (t0 > 0) { const g = grad3[perm[ii + perm[jj]] % 12]; t0 *= t0; n0 = t0 * t0 * (g[0] * x0 + g[1] * y0); }
    let t1 = 0.5 - x1 * x1 - y1 * y1; if (t1 > 0) { const g = grad3[perm[ii + i1 + perm[jj + j1]] % 12]; t1 *= t1; n1 = t1 * t1 * (g[0] * x1 + g[1] * y1); }
    let t2 = 0.5 - x2 * x2 - y2 * y2; if (t2 > 0) { const g = grad3[perm[ii + 1 + perm[jj + 1]] % 12]; t2 *= t2; n2 = t2 * t2 * (g[0] * x2 + g[1] * y2); }
    return 70 * (n0 + n1 + n2); // -1..1
  };
  const F3 = 1 / 3, G3 = 1 / 6;
  MG.noise3 = (x, y, z) => {
    let n0, n1, n2, n3; const s = (x + y + z) * F3; const i = Math.floor(x + s), j = Math.floor(y + s), k = Math.floor(z + s);
    const t = (i + j + k) * G3; const x0 = x - (i - t), y0 = y - (j - t), z0 = z - (k - t);
    let i1, j1, k1, i2, j2, k2;
    if (x0 >= y0) { if (y0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0; } else if (x0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1; } else { i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1; } }
    else { if (y0 < z0) { i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1; } else if (x0 < z0) { i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1; } else { i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0; } }
    const x1 = x0 - i1 + G3, y1 = y0 - j1 + G3, z1 = z0 - k1 + G3, x2 = x0 - i2 + 2 * G3, y2 = y0 - j2 + 2 * G3, z2 = z0 - k2 + 2 * G3, x3 = x0 - 1 + 3 * G3, y3 = y0 - 1 + 3 * G3, z3 = z0 - 1 + 3 * G3;
    const ii = i & 255, jj = j & 255, kk = k & 255;
    const dot = (g, a, b, c) => g[0] * a + g[1] * b + g[2] * c;
    let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0; n0 = t0 < 0 ? 0 : ((t0 *= t0), t0 * t0 * dot(grad3[perm[ii + perm[jj + perm[kk]]] % 12], x0, y0, z0));
    let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1; n1 = t1 < 0 ? 0 : ((t1 *= t1), t1 * t1 * dot(grad3[perm[ii + i1 + perm[jj + j1 + perm[kk + k1]]] % 12], x1, y1, z1));
    let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2; n2 = t2 < 0 ? 0 : ((t2 *= t2), t2 * t2 * dot(grad3[perm[ii + i2 + perm[jj + j2 + perm[kk + k2]]] % 12], x2, y2, z2));
    let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3; n3 = t3 < 0 ? 0 : ((t3 *= t3), t3 * t3 * dot(grad3[perm[ii + 1 + perm[jj + 1 + perm[kk + 1]]] % 12], x3, y3, z3));
    return 32 * (n0 + n1 + n2 + n3);
  };
  MG.fbm = (x, y, oct = 4, lac = 2, gain = 0.5) => { let a = 1, f = 1, s = 0, n = 0; for (let i = 0; i < oct; i++) { s += a * MG.noise2(x * f, y * f); n += a; a *= gain; f *= lac; } return s / n; };
  /** smooth wiggle in [-amp, amp] (handheld camera, idle motion) */
  MG.wiggle = (t, freq = 1, amp = 1, seed = 0, oct = 2) => { let s = 0, a = 1, n = 0, f = freq; for (let i = 0; i < oct; i++) { s += a * MG.noise2(t * f, seed * 17.31 + i * 9.7); n += a; a *= 0.5; f *= 2.1; } return (s / n) * amp; };

  // ---------- colour ----------
  const hexCache = new Map();
  function hex2rgb(h) {
    if (Array.isArray(h)) return h;
    let c = hexCache.get(h); if (c) return c;
    let s = h.replace('#', ''); if (s.length === 3) s = s.split('').map((x) => x + x).join('');
    c = [parseInt(s.slice(0, 2), 16), parseInt(s.slice(2, 4), 16), parseInt(s.slice(4, 6), 16)];
    hexCache.set(h, c); return c;
  }
  const toHex = (r, g, b) => '#' + [r, g, b].map((v) => Math.round(clamp(v, 0, 255)).toString(16).padStart(2, '0')).join('');
  MG.col = {
    rgb: hex2rgb, hex: toHex,
    /** css rgba string from hex + alpha */
    a: (h, a = 1) => { const [r, g, b] = hex2rgb(h); return `rgba(${r},${g},${b},${a})`; },
    mix: (h1, h2, t) => { const a = hex2rgb(h1), b = hex2rgb(h2); return toHex(lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)); },
    lighten: (h, t) => MG.col.mix(h, '#ffffff', t),
    darken: (h, t) => MG.col.mix(h, '#000000', t),
    /** shade toward a warm or cool tint (better than plain black/white for volume) */
    shade: (h, t, toward = '#1b1226') => MG.col.mix(h, toward, t),
    light: (h, t, toward = '#fff4dc') => MG.col.mix(h, toward, t),
    /** multi-stop ramp: stops = ['#hex', ...] ; t in 0..1 */
    ramp: (stops, t) => { t = clamp(t); const n = stops.length - 1; const i = Math.min(n - 1, Math.floor(t * n)); return MG.col.mix(stops[i], stops[i + 1], t * n - i); },
  };

  // ---------- voice-over timing ----------
  const norm = (s) => s.toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9€$%'.,-]/g, '').replace(/[.,]+$/, '').replace(/^[“"‘(]+/, '');
  MG.words = (window.MG_WORDS || []).map((w, i) => ({ i, w: w[0], n: norm(w[0]), s: w[1], e: w[2] }));
  MG.sentences = (window.MG_SENTENCES || []).map((s, i) => ({ i, text: s[0], s: s[1], e: s[2] }));
  MG.VO_DURATION = window.MG_VO_DURATION || 1744.823;
  MG.DURATION = Math.ceil(MG.VO_DURATION + 5); // short tail after the last word
  function findWord(q, approx, within = 30) {
    const nq = norm(q); let best = null, bd = 1e9;
    for (const w of MG.words) {
      if (Math.abs(w.s - approx) > within) continue;
      if (w.n === nq || w.n.startsWith(nq)) { const d = Math.abs(w.s - approx) + (w.n === nq ? 0 : 0.5); if (d < bd) { bd = d; best = w; } }
    }
    if (!best) console.warn('[MG.T] word not found:', q, '@', approx);
    return best;
  }
  /** start time of the spoken word `q` nearest to `approx` seconds (falls back to approx) */
  MG.T = (q, approx, within) => { const w = findWord(q, approx, within); return w ? w.s : approx; };
  /** end time of that word */
  MG.Tend = (q, approx, within) => { const w = findWord(q, approx, within); return w ? w.e : approx; };
  /** multi-word phrase → {s, e, words:[{w,s,e}]} ; matches consecutive words */
  MG.phrase = (text, approx, within = 30) => {
    const parts = text.split(/\s+/).map(norm).filter(Boolean);
    let best = null, bd = 1e9;
    for (let i = 0; i < MG.words.length; i++) {
      const w0 = MG.words[i]; if (Math.abs(w0.s - approx) > within) continue;
      let ok = true; for (let k = 0; k < parts.length; k++) { const w = MG.words[i + k]; if (!w || !(w.n === parts[k] || w.n.startsWith(parts[k]))) { ok = false; break; } }
      if (ok) { const d = Math.abs(w0.s - approx); if (d < bd) { bd = d; best = i; } }
    }
    if (best === null) { console.warn('[MG.phrase] not found:', text, '@', approx); return { s: approx, e: approx + 1, words: [] }; }
    const ws = MG.words.slice(best, best + parts.length);
    return { s: ws[0].s, e: ws[ws.length - 1].e, words: ws.map((w) => ({ w: w.w, s: w.s, e: w.e })) };
  };
  /** words spoken inside [a,b] */
  MG.wordsIn = (a, b) => MG.words.filter((w) => w.s >= a && w.s < b);
  /** is the narrator speaking at time t (with padding)? */
  MG.speaking = (t, pad = 0.05) => { let lo = 0, hi = MG.words.length - 1; while (lo <= hi) { const m = (lo + hi) >> 1, w = MG.words[m]; if (t < w.s - pad) hi = m - 1; else if (t > w.e + pad) lo = m + 1; else return true; } return false; };
})();
