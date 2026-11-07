/* =====================================================================================================
   S07 · 1013.98 → 1187.85 · "THE CATCH" → "THE PRICE" (drought, water, cars, the 2008 bubble, jobs)
   ─────────────────────────────────────────────────────────────────────────────────────────────────────
   VISUAL PLAN (script → chapters → blocks → beats). One sun from the upper-left; light vs shade tells
   the story inside every scene: the pillars stand in sun, the price falls into shade. No slides, no
   cards: every date lives inside a scene (cracked earth, a map, a site sign, a falling-brick pile,
   a brass plaque). Every topic change is a motivated camera move / object match / real-object wipe.

   CH.A  THE CATCH: WATER  (heat → summer)                                      1013.98 – 1054.15
     A1  heat haze + the ground cracks open over S06's last frame (custom 'heatCrack') → a cracked
         plain in perspective, the sun disk scorching the horizon, "2023" standing as a monument.  2.5D
     A2  rack-focus into an olive branch: the shadow divide sweeps in, HALF the olives wither & fall.  2D
     A3  camera follows a falling olive down → it becomes an oil drop feeding a price line: ×2.        2D chart
     A4  oil fills the frame → pull back from inside a 1-litre (≈1 quart) bottle on a shop shelf; the
         shelf tag swings to €10.                                                                    2.5D
     A5  truck along the shelf to the bakery: a hand reaches for a barra de pan, the tag flips ×2.    2.5D
     A6  hard cut on "Water": Spain as a glass vessel, almost empty; WATER refracts below the line.   2.5D
     A7  the vessel lays down into the map → flight to Catalonia, Barcelona pulses, 2024 on the map.  map
     A8  dive into the Sau reservoir: the level drains to 15 %, the drowned church tower emerges.     2.5D
     A9  whip to the coast → inside a desalination hall (racks of pressure vessels).                  3D
     A10 crane up into the map: the Tagus → Segura aqueduct draws over the relief, 286 km · 178 mi.   map
     A11 the camera tilts down onto that map; MORE ROCK THAN WATER rises as stone letters (callback to
         S02, now cracked & dry); "HOTTER, TOO" melts in Climate Crisis as the sun swells.          2.5D type
   CH.B  CARS  (economy, pulse)                                                                1054.15 – 1066.05
     B1  match cut: the sun disk becomes a wheel → pull back from a car on the factory floor.        2.5D
     B2  zoom out into a Europe prism map: production lifts the countries, Germany #1, Spain #2;
         flight into Spain: SEAT (VW) · Renault · Ford · Stellantis factories rise as spoken.        map
     B3  dive onto a highway: "2M+" painted on the asphalt, cars stream over it…                     2.5D type
   CH.C  THE PRICE  (problem 01 — the turn into shade)                                         1066.05 – 1078.20
         …"the price of all this": a crane's shadow sweeps the sunny road, THE PRICE falls as a
         cast shadow, everything sinks into sombra. Rack-focus into the concrete: 2008 is cast in
         it ("PROBLEM 01" engraved small), it cracks right across ("Spain's problems").               2.5D
   CH.D  THE BOOM  (2000s · tension rising like a bubble)                                      1078.20 – 1100.65
     D1  tilt up from the cracked slab: a sunny coast fills with cranes; a hook lands B·O·O·M.        2.5D
     D2  a crane jib wipes the lens: cheap € (the sun disk as a euro coin), tourists, immigrant workers. 2.5D
     D3  crane up: a tilted map of Spain sprouts buildings everywhere.                                2.5D map
     D4  dive into one estate: 80 houses = 800,000 homes; "2006" on the site sign.                   2.5D unit chart
     D5  truck right: Spain's pile vs Germany + France + Britain combined (true silhouettes).         2D
     D6  1 IN 8 JOBS: eight workers, only the builder stands in the sun.                              2D figures
   CH.E  GHOSTS  (melancholy)                                                                  1100.65 – 1120.85
     E1  dusk relief map → Ciudad Real (75,000) → the blueprint of a 4 km runway, €1 billion, the
         terminal stands up out of the plan.                                                          map → 2.5D
     E2  through the doors: a split-flap board counts 3 years → CLOSED; dolly back through the vast
         empty terminal, ghost passengers that never materialise.                                    3D
     E3  lights out → night map, ghost airports flicker.                                              map
     E4  an empty estate at night: dark windows, SE VENDE banners, one light that never comes on.     2.5D
   CH.F  THE BURST  (crisis grey → lament)                                                     1120.85 – 1161.30
     F1  tilt up: a soap bubble holding the boom pops; its bricks fall into "2008".                  2D
     F2  the camera falls into a Europe "sinkhole" map: Spain sinks, only Greece sinks deeper.        map
     F3  bullring stands, 100 seats: the shade covers 26 % → the crowd turns young → 55 % → more than
         half (push into the shade).                                                                  2.5D unit chart
     F4  a door slams over the frame and opens on a corridor: doors close one by one, 500,000 families. 2.5D
     F5  character: a proud young engineer (graduate) → map arcs to Germany & Britain → the same man
         as a waiter, tray in hand.                                                                   char + map
     F6  NI-NI pasted on a wall over a row of young people; SCHOOL / WORK struck out.                 2.5D type
     F7  a bank sinks in black water; Europe's ring of stars as a lifebuoy: €40 BN.                   2D
     F8  ten steps out of the pit, 2008 → 2018, a small figure climbs into the light.                 2.5D
   CH.G  TODAY · WHY  (sneaky)                                                                 1161.30 – 1187.85(+1.2)
     G1  the same bullring, now 11 % in the shade → a spotlight (the sun disk) finds Spain on the EU
         map: still the highest. WHY?                                                                 2.5D + map
     G2  a beach hotel under a year-arc: the sun lights May→October only; the hotel opens in MAY and
         hires her, closes in OCTOBER and lets her go.                                                char 2.5D
     G3  push into the hotel's revolving door: 4 wings = 1 in 4 contracts temporary (red wing),
         a European record; brass plaque "2022 REFORM"; it slows… and keeps turning. The habit stuck.  3D
   Music: heat drone (oud, frame drum, cicadas) → pulse (cars) → low hit + tension rising (boom) →
          hollow ambient (ghosts) → pop + dread (burst) → lament (people) → sneaky pizzicato (hotel/door).
   ===================================================================================================== */
(function () {
'use strict';
const MG = window.MG; const P = MG.PAL; const { clamp, lerp } = MG; const TAU = MG.TAU;
const W = 1920, H = 1080;
const S7 = {}; // local helpers & engine workarounds (see report)
const pr = MG.prog, lin = MG.lin;
const TW = (w, a) => MG.T(w, a, 3); // spoken word start (searched within ±3 s)
const TE = (w, a) => MG.Tend(w, a, 3);
const SC = []; // scenes, pushed by chapter

// ---------- palette (chapter tints built on MG.PAL) ----------
const C = S7.C = {
  heatSky: '#F7D9A6', heatSky2: '#F3B778', heatHaze: '#FBE9C8', mud: '#C99A62', mudLight: '#E2BE86', mudDark: '#7A4E33', crackDark: '#3B2320',
  oil: '#C9A227', oilDeep: '#7D6A14', oilLight: '#F4DF7A', olive: '#6F7A3A', oliveDark: '#3F4A20', oliveLeaf: '#7C8752', oliveLeafLight: '#B7BE8F',
  water: '#4C8FBF', waterLight: '#9CC7E4', waterDeep: '#25557E',
  concrete: '#A9A6A0', concreteLight: '#C9C6BF', concreteDark: '#6E6B67',
  crisisBg: '#CFCBC4', crisisInk: '#1d1d1f', night: '#131a2c', nightInk: '#0b1020',
  blueprint: '#1D3F73', blueprintLine: '#D8E6F5',
  skin1: '#E8B48F', skin2: '#C98B62', skin3: '#9A5F3E', skin4: '#F0C8A6', skin5: '#B57650', hair1: '#2a1d18', hair2: '#5a3a26', hair3: '#8a5a32', hair4: '#1a1414',
};
const SKINS = [C.skin1, C.skin2, C.skin3, C.skin4, C.skin5];
const HAIRS = [C.hair1, C.hair2, C.hair3, C.hair4, '#3b2a22'];
const LIGHT = [-0.55, -0.83]; // the film's sun: upper-left

// ---------- tiny utils ----------
S7.rr = (seed, i) => MG.rand(seed, i);
S7.ease = (k) => MG.ease.out(clamp(k));
/** stepped 12 fps time for paper-cut/hand-drawn things */
S7.two = (t) => Math.floor(t * 12) / 12;
/** deterministic window envelope */
S7.env = (t, a, b, i = 0.4, o = 0.3) => MG.win(t, a, b, i, o);
/** clip a polygon (array of [x,y]) by half-plane n·p <= c */
S7.clipHalf = (poly, nx, ny, c) => { const out = []; for (let i = 0; i < poly.length; i++) { const a = poly[i], b = poly[(i + 1) % poly.length]; const da = nx * a[0] + ny * a[1] - c, db = nx * b[0] + ny * b[1] - c; if (da <= 0) out.push(a); if ((da <= 0) !== (db <= 0)) { const u = da / (da - db); out.push([a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u]); } } return out; };
/** jittered-grid Voronoi cells (for cracked mud). returns [{site,poly}] in [0,w]x[0,h] */
S7.voronoi = (cols, rows, w, h, seed = 3, jit = 0.85) => {
  const r = MG.rng(seed); const cw = w / cols, ch = h / rows; const S = [];
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) S.push([(i + 0.5 + (r() - 0.5) * jit) * cw, (j + 0.5 + (r() - 0.5) * jit) * ch]);
  const cells = [];
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const s = S[j * cols + i]; let poly = [[s[0] - 2.5 * cw, s[1] - 2.5 * ch], [s[0] + 2.5 * cw, s[1] - 2.5 * ch], [s[0] + 2.5 * cw, s[1] + 2.5 * ch], [s[0] - 2.5 * cw, s[1] + 2.5 * ch]];
    for (let dj = -2; dj <= 2; dj++) for (let di = -2; di <= 2; di++) { if (!di && !dj) continue; const ii = i + di, jj = j + dj; if (ii < 0 || jj < 0 || ii >= cols || jj >= rows) continue; const n = S[jj * cols + ii]; const nx = n[0] - s[0], ny = n[1] - s[1]; const mx = (n[0] + s[0]) / 2, my = (n[1] + s[1]) / 2; poly = S7.clipHalf(poly, nx, ny, nx * mx + ny * my); if (poly.length < 3) break; }
    poly = poly.map((p) => [clamp(p[0], 0, w), clamp(p[1], 0, h)]);
    cells.push({ site: s, poly, i, j, r: r() });
  }
  return cells;
};
/** shrink polygon toward centroid */
S7.shrink = (poly, k) => { let cx = 0, cy = 0; for (const p of poly) { cx += p[0]; cy += p[1]; } cx /= poly.length; cy /= poly.length; return poly.map((p) => [cx + (p[0] - cx) * k, cy + (p[1] - cy) * k]); };
/** heat shimmer: re-draws a horizontal band of the current canvas with sine offsets */
S7.shimmer = (ctx, t, y0, y1, amp = 4, o = {}) => {
  y0 = Math.max(0, Math.floor(y0)); y1 = Math.min(H, Math.ceil(y1)); const h = y1 - y0; if (h < 2 || amp < 0.2) return;
  const c = MG.scratch(3); const x = c.getContext('2d'); x.setTransform(1, 0, 0, 1, 0, 0); x.globalCompositeOperation = 'copy'; x.drawImage(ctx.canvas, 0, y0, W, h, 0, 0, W, h); x.globalCompositeOperation = 'source-over';
  const step = o.step || 3; ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0);
  for (let yy = 0; yy < h; yy += step) { const k = o.fade ? (o.fade > 0 ? yy / h : 1 - yy / h) : 1; const dx = (Math.sin(yy * 0.11 + t * 9.1) * 0.6 + Math.sin(yy * 0.031 - t * 4.3) * 0.4) * amp * k; ctx.drawImage(c, 0, yy, W, step, dx - amp, y0 + yy, W + amp * 2, step); }
  ctx.restore();
};
/** text with a soft paper-shadow (used for in-scene typography) */
S7.type = (ctx, s, x, y, o = {}) => MG.text.draw(ctx, s, x, y, { shadow: o.shadow === false ? undefined : { blur: o.sb ?? 14, dx: o.sdx ?? 6, dy: o.sdy ?? 8, color: o.sc || 'rgba(40,20,30,0.28)' }, ...o });
/** small mono kicker */
S7.mono = (ctx, s, x, y, t, t0, o = {}) => MG.text.reveal(ctx, s.toUpperCase(), x, y, t, t0, { font: MG.F.mono, weight: o.weight || 600, size: o.size || 22, tracking: o.tracking ?? 0.22, color: o.color || P.ink2, align: o.align || 'left', style: o.style || 'track', by: 'line', dur: 0.6, alpha: o.alpha, stroke: o.stroke, strokeW: o.strokeW });
/** perspective camera point projection (y is DOWN; ground = y 0; camera above ground has negative y) */
S7.pj = (x, y, z, cam) => MG.persp.project([x, y, z], cam);
/** draw a polygon given world points projected with cam; returns screen pts or null */
S7.ppoly = (pts, cam) => { const out = []; for (const p of pts) { const q = S7.pj(p[0], p[1], p[2], cam); if (q[3] < 5) return null; out.push(q); } return out; };
S7.path = (pts, close = true) => { const p = new Path2D(); pts.forEach((q, i) => (i ? p.lineTo(q[0], q[1]) : p.moveTo(q[0], q[1]))); if (close) p.closePath(); return p; };
/** €-formatted count */
S7.count = (t, t0, t1, a, b, o = {}) => MG.text.count(t, t0, t1, a, b, { ease: o.ease || 'outCubic', ...o });
/** soft light pool / god-ray helper (screen) */
S7.pool = (ctx, x, y, r, col, a) => MG.fx.glow(ctx, x, y, r, col, a, 'screen');
/** ground contact + long violet cast shadow of a box-like object (screen space) */
S7.castShadow = (ctx, x, y, w, h, len = 1.6, a = 0.32) => { ctx.save(); ctx.fillStyle = `rgba(52,30,58,${a})`; ctx.filter = 'blur(6px)'; ctx.beginPath(); ctx.moveTo(x - w / 2, y); ctx.lineTo(x + w / 2, y); ctx.lineTo(x + w / 2 + h * len * 0.55, y + h * 0.18); ctx.lineTo(x - w / 2 + h * len * 0.55, y + h * 0.22); ctx.closePath(); ctx.fill(); ctx.restore(); };

// ---------- map helpers ----------
S7.proj = (v) => MG.geo.proj(v.kind || 'spain', v);
S7.halo = (ctx, s, x, y, o = {}) => MG.text.draw(ctx, s, x, y, { font: o.font || MG.F.grotesk, weight: o.weight || 700, size: o.size || 26, color: o.color || P.ink, stroke: o.halo || 'rgba(250,244,232,0.9)', strokeW: o.haloW || 7, tracking: o.tracking ?? 0.08, align: o.align || 'left', alpha: o.alpha });
/** map label that grows from nothing at t0 (dot + text, optional leader) */
S7.mapLabel = (ctx, pr2, ll, t, t0, text, o = {}) => MG.geo.label(ctx, pr2, ll, { text, t, t0, dot: o.dot ?? 6, dotColor: o.dotColor || P.rojo, dx: o.dx, dy: o.dy, leader: o.leader, halo: o.halo ?? 'rgba(250,244,232,0.92)', haloW: 7, size: o.size || 26, weight: o.weight || 700, font: o.font, color: o.color || P.ink, tracking: o.tracking ?? 0.06, pulse: o.pulse, alpha: o.alpha, style: o.style || 'rise' });
/** project then return [x,y] */
S7.at = (pr2, ll) => pr2(ll);
// Segura & Mundo rivers (not in data/geo_extra.js) — digitised through their gauging towns: source (Pontones) → Fuensanta → Cenajo →
// Calasparra → Cieza → Ojós → Archena → Murcia → Orihuela → Guardamar. Tagus–Segura aqueduct: Bolarque → Altomira → Alarcón → Talave.
S7.SEGURA = [[-2.64, 38.08], [-2.45, 38.2], [-2.24, 38.36], [-2.0, 38.4], [-1.8, 38.37], [-1.68, 38.29], [-1.62, 38.25], [-1.42, 38.24], [-1.34, 38.15], [-1.25, 38.08], [-1.13, 37.985], [-0.94, 38.08], [-0.78, 38.08], [-0.64, 38.1]];
S7.MUNDO = [[-2.35, 38.48], [-2.05, 38.5], [-1.86, 38.52], [-1.75, 38.42], [-1.66, 38.34], [-1.64, 38.29]];
S7.AQUEDUCT = [[-2.833, 40.366], [-2.8, 40.25], [-2.72, 40.08], [-2.55, 39.88], [-2.32, 39.72], [-2.12, 39.58], [-2.03, 39.3], [-1.97, 39.02], [-1.9, 38.75], [-1.86, 38.52]];

// ---------- custom, content-motivated transitions ----------
const TR = S7.TR = {};
/** OPENING: heat haze bends S06's last frame, the ground cracks across it and the drought shows through the cracks */
TR.heatCrack = (ctx, A, B, p, o) => {
  // A in heat haze, warm bleach
  const c = MG.scratch(4); const x = c.getContext('2d'); x.setTransform(1, 0, 0, 1, 0, 0); x.globalCompositeOperation = 'copy'; x.drawImage(A, 0, 0); x.globalCompositeOperation = 'source-over';
  const amp = 2 + p * 16; for (let yy = 0; yy < H; yy += 4) { const dx = (Math.sin(yy * 0.07 + p * 22) * 0.7 + Math.sin(yy * 0.021 - p * 9) * 0.5) * amp; ctx.drawImage(c, 0, yy, W, 4, dx - amp, yy, W + amp * 2, 4); }
  ctx.save(); ctx.globalCompositeOperation = 'screen'; ctx.fillStyle = `rgba(250,190,110,${0.45 * MG.smoothstep(0, 0.7, p)})`; ctx.fillRect(0, 0, W, H); ctx.restore();
  // crack network (cached), progressively drawn; B shows through the widening cracks
  if (!TR._cracks) { const r = MG.rng(77); const L = []; const grow = (x0, y0, a, len, w, d) => { const pts = [[x0, y0]]; let xx = x0, yy = y0, aa = a; const n = Math.max(3, Math.round(len / 26)); for (let i = 0; i < n; i++) { aa += (r() - 0.5) * 0.7; xx += Math.cos(aa) * len / n; yy += Math.sin(aa) * len / n; pts.push([xx, yy]); if (d < 3 && r() < 0.22) grow(xx, yy, aa + (r() < 0.5 ? -1 : 1) * (0.6 + r() * 0.6), len * (0.45 + r() * 0.3), w * 0.6, d + 1); } L.push({ pts, w, d, t0: d * 0.12 + r() * 0.08 }); }; for (let k = 0; k < 9; k++) grow(960 + (r() - 0.5) * 300, 600 + (r() - 0.5) * 200, (k / 9) * TAU + r() * 0.4, 700 + r() * 500, 22, 0); TR._cracks = L; }
  const pat = ctx.createPattern(B, 'no-repeat');
  const draw = (lw, style, k0) => { for (const L of TR._cracks) { const q = clamp((p - L.t0) / 0.55); if (q <= 0) continue; const sub = MG.path.trim(L.pts, 0, MG.ease.outCubic(q)); if (sub.length < 2) continue; ctx.beginPath(); sub.forEach((pt, i) => (i ? ctx.lineTo(pt[0], pt[1]) : ctx.moveTo(pt[0], pt[1]))); ctx.lineWidth = Math.max(1, (L.w * (0.25 + 2.5 * MG.ease.inCubic(clamp((p - 0.15) / 0.85))) + lw) * (k0 ?? 1) * (1 + MG.ease.inQuart(clamp((p - 0.55) / 0.45)) * 30)); ctx.strokeStyle = style; ctx.stroke(); } };
  ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; draw(5, 'rgba(40,18,12,0.85)'); draw(0, pat, 1); ctx.restore();
  // full reveal at the end
  if (p > 0.82) { ctx.save(); ctx.globalAlpha = MG.smoothstep(0.82, 1, p); ctx.drawImage(B, 0, 0); ctx.restore(); }
};
/** a dark lattice crane jib sweeps across the lens (foreground wipe by a real object) */
TR.jib = (ctx, A, B, p, o) => {
  const ang = MG.deg(o.angle ?? -14); const ca = Math.cos(ang), sa = Math.sin(ang); const D = 2600; const pos = lerp(-1500, 1500, MG.ease.inOutCubic(p)); const bw = o.width || 300;
  ctx.drawImage(A, 0, 0);
  ctx.save(); ctx.translate(960, 540); ctx.rotate(ang); ctx.beginPath(); ctx.rect(-D, -D, D + pos - bw * 0.2, D * 2); ctx.restore(); ctx.save(); ctx.clip(); ctx.drawImage(B, 0, 0); ctx.restore();
  // the jib: two chords + lattice, motion-blurred, out of focus (very near the lens)
  ctx.save(); ctx.translate(960, 540); ctx.rotate(ang); ctx.translate(pos, 0); ctx.filter = 'blur(9px)'; ctx.fillStyle = '#2a2326';
  ctx.fillRect(-bw * 0.62, -D, bw * 0.16, D * 2); ctx.fillRect(bw * 0.36, -D, bw * 0.16, D * 2);
  ctx.strokeStyle = '#2a2326'; ctx.lineWidth = 34; ctx.beginPath(); for (let yy = -D; yy < D; yy += bw * 0.9) { ctx.moveTo(-bw * 0.55, yy); ctx.lineTo(bw * 0.45, yy + bw * 0.45); ctx.lineTo(-bw * 0.55, yy + bw * 0.9); } ctx.stroke();
  ctx.fillStyle = 'rgba(242,163,58,0.35)'; ctx.fillRect(-bw * 0.62, -D, bw * 0.06, D * 2); ctx.restore();
};
/** zoom-out: the previous shot shrinks into a point of the new (map) shot, which settles from big */
TR.zoomOut = (ctx, A, B, p, o) => {
  const x = o.x ?? 960, y = o.y ?? 540; const e = MG.ease.inOutCubic(p); const sb = lerp(o.from ?? 3.2, 1, e); const sa = lerp(1, 1 / (o.from ?? 3.2), e);
  ctx.save(); ctx.translate(x, y); ctx.scale(sb, sb); ctx.translate(-x, -y); ctx.filter = `blur(${((1 - p) * 6).toFixed(1)}px)`; ctx.drawImage(B, 0, 0); ctx.restore();
  ctx.save(); ctx.globalAlpha = 1 - MG.smoothstep(0.35, 0.9, p); ctx.translate(x, y); ctx.scale(sa, sa); ctx.translate(-x, -y); ctx.shadowColor = 'rgba(20,10,10,0.4)'; ctx.shadowBlur = 40; ctx.drawImage(A, 0, 0); ctx.restore();
};
/** a front door swings shut over the frame (eviction), then swings open onto the next shot */
TR.door = (ctx, A, B, p, o) => {
  const closing = p < 0.5; const q = closing ? MG.ease.inCubic(p / 0.5) : 1 - MG.ease.outCubic((p - 0.5) / 0.5);
  ctx.drawImage(closing ? A : B, 0, 0);
  if (q <= 0.001) return;
  // hinge on the left; the door's free edge sweeps from far (narrow) to the right edge of frame
  const fx = lerp(-60, W + 40, q); const persp = Math.sin(q * Math.PI) * 110; // free edge nearer to camera at mid swing
  const door = new Path2D(); door.moveTo(-40, -40); door.lineTo(fx, -40 - persp); door.lineTo(fx, H + 40 + persp); door.lineTo(-40, H + 40); door.closePath();
  ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.55)'; ctx.shadowBlur = 60; ctx.fillStyle = '#4a2f24'; ctx.fill(door); ctx.restore();
  ctx.save(); ctx.clip(door); const g = ctx.createLinearGradient(0, 0, fx, 0); g.addColorStop(0, '#3a241c'); g.addColorStop(0.7, '#6b4533'); g.addColorStop(1, '#2a1912'); ctx.fillStyle = g; ctx.fillRect(-60, -200, W + 200, H + 400);
  // panels & handle
  ctx.strokeStyle = 'rgba(20,10,6,0.55)'; ctx.lineWidth = 6; const wd = fx + 40; for (const [a, b, c2, d] of [[0.1, 0.08, 0.8, 0.36], [0.1, 0.52, 0.8, 0.4]]) { ctx.strokeRect(-40 + wd * a, H * b, wd * c2, H * d); }
  MG.tex.over(ctx, 'fibers', { alpha: 0.5, color: '#1a0e08' }); ctx.fillStyle = '#C9A04A'; ctx.beginPath(); ctx.arc(fx - wd * 0.08, H * 0.5, 12 * q + 4, 0, TAU); ctx.fill();
  ctx.restore();
};
/** match: a round object (sun) becomes another round object (wheel): quick scaled cross-dissolve */
TR.match = (ctx, A, B, p, o) => { const x = o.x ?? 960, y = o.y ?? 540; ctx.drawImage(A, 0, 0); ctx.save(); ctx.globalAlpha = MG.smoothstep(0.1, 0.9, p); const s = lerp(1.08, 1, MG.ease.outCubic(p)); ctx.translate(x, y); ctx.scale(s, s); ctx.translate(-x, -y); ctx.drawImage(B, 0, 0); ctx.restore(); ctx.save(); ctx.globalCompositeOperation = 'screen'; ctx.globalAlpha = Math.sin(p * Math.PI) * 0.35; ctx.fillStyle = '#ffe2a8'; ctx.fillRect(0, 0, W, H); ctx.restore(); };

// =====================================================================================================
// shared art: map camera, olive branch, bottle, price tag, figures, houses, cranes, cars
// =====================================================================================================
/** fixed-projection map camera: vector features drawn with ctx transform (crisp), rasters cached once */
S7.mapCam = (pr0, c, z, cx = W / 2, cy = H / 2) => {
  const p = pr0(c); const T = { pr0, z, ox: cx - p[0] * z, oy: cy - p[1] * z };
  T.pt = (ll) => { const q = pr0(ll); return q ? [q[0] * z + T.ox, q[1] * z + T.oy] : null; };
  T.apply = (ctx) => ctx.setTransform(z, 0, 0, z, T.ox, T.oy);
  T.inv = (x, y) => [(x - T.ox) / z, (y - T.oy) / z];
  return T;
};
/** interpolate a map camera between keys [[t,{c,z}],...] (zoom in log space) */
S7.mapKeys = (pr0, t, keys) => {
  if (t <= keys[0][0]) return S7.mapCam(pr0, keys[0][1].c, keys[0][1].z); const L = keys[keys.length - 1]; if (t >= L[0]) return S7.mapCam(pr0, L[1].c, L[1].z);
  let i = 1; while (keys[i][0] < t) i++; const a = keys[i - 1], b = keys[i]; const u = clamp((t - a[0]) / (b[0] - a[0])); const e = MG.easeOf(b[2] || 'cam')(u);
  const pa = pr0(a[1].c), pb = pr0(b[1].c); const za = a[1].z, zb = b[1].z; const z = Math.exp(lerp(Math.log(za), Math.log(zb), e));
  // keep the motion perceptually even: move the centre in proportion to the zoom progress
  const k = zb > za ? clamp((1 / za - 1 / z) / (1 / za - 1 / zb || 1)) : clamp((z - za) / (zb - za || 1)); const pc = [lerp(pa[0], pb[0], Math.abs(zb - za) < 1e-6 ? e : k), lerp(pa[1], pb[1], Math.abs(zb - za) < 1e-6 ? e : k)];
  const T = { pr0, z, ox: W / 2 - pc[0] * z, oy: H / 2 - pc[1] * z }; T.pt = (ll) => { const q = pr0(ll); return q ? [q[0] * z + T.ox, q[1] * z + T.oy] : null; }; T.apply = (ctx) => ctx.setTransform(z, 0, 0, z, T.ox, T.oy); T.inv = (x, y) => [(x - T.ox) / z, (y - T.oy) / z]; return T;
};
/** Spain mainland + Balearics only (vessel / clean silhouettes) */
S7.spainMain = () => { if (S7._spm) return S7._spm; const f = MG.geo.country('Spain', '10'); const g = f.geometry; const polys = (g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates]).filter((poly) => Math.max(...poly[0].map((q) => q[1])) > 36.3); S7._spm = { type: 'Feature', properties: { name: 'Spain' }, geometry: { type: 'MultiPolygon', coordinates: polys } }; return S7._spm; };
/** standard muted base map into the current transform (neighbours + sea + Spain), optional relief (cached raster) */
S7.baseMap = (ctx, pr0, z, o = {}) => {
  const w = (v) => v / z;
  ctx.fillStyle = o.sea || P.seaLight; ctx.fillRect(-1e5, -1e5, 2e5, 2e5);
  const neigh = o.neigh || ['France', 'Portugal', 'Morocco', 'Algeria', 'Andorra', 'Italy', 'Gibraltar'];
  for (const n of neigh) { const f = MG.geo.country(n, o.res || '10'); if (f) MG.geo.draw(ctx, pr0, f, { fill: n === 'Portugal' ? (o.portugal || '#E6D7B8') : (o.land || MG.kit.map.landOther), stroke: o.border || MG.kit.map.border, width: w(1.2) }); }
  const es = MG.geo.country('Spain', o.res || '10'); MG.geo.draw(ctx, pr0, es, { fill: o.spain || MG.kit.map.spain, stroke: o.coast || MG.kit.map.coast, width: w(1.4) });
  if (o.relief) { ctx.save(); MG.geo.clip(ctx, pr0, es); ctx.globalAlpha = o.relief; ctx.globalCompositeOperation = 'multiply'; const m = ctx.getTransform(); MG.geo.relief(ctx, pr0, { grid: o.grid || 24 }); ctx.setTransform(m); ctx.restore(); }
  if (o.regions) MG.geo.draw(ctx, pr0, MG.geo.regionMesh, { stroke: o.regionStroke || 'rgba(58,43,58,0.4)', width: w(1.1) });
  if (o.provinces) MG.geo.draw(ctx, pr0, MG.geo.provinceMesh, { stroke: 'rgba(58,43,58,0.2)', width: w(0.7) });
  return es;
};
/** relief raster is drawn with setTransform(1..) inside MG.geo.raster — so render it into the BASE projection only.
 *  This helper caches a whole static base map (sea, land, relief) for a projection into a canvas. */
S7.cacheMap = (key, pr0, o = {}) => MG.cache('s7map:' + key, W, H, (x) => { S7.baseMap(x, pr0, 1, o); if (o.after) o.after(x); });

// ---------- olive branch ----------
S7.branchGeo = () => {
  if (S7._br) return S7._br; const r = MG.rng(41); const stem = []; for (let i = 0; i <= 24; i++) { const u = i / 24; stem.push([u * 1750, Math.sin(u * 2.6) * 70 + u * 300]); }
  const leaves = [], olives = [], twigs = [];
  for (let i = 0; i < 9; i++) { const u = 0.08 + i * 0.1 + r() * 0.03; const b = MG.path.along(stem, u); const side = i % 2 ? 1 : -1; const len = 120 + r() * 70; const a = b[2] + side * (0.9 + r() * 0.4); const pts = []; for (let k = 0; k <= 8; k++) { const v = k / 8; pts.push([b[0] + Math.cos(a) * len * v + Math.cos(a + side * 1.2) * Math.sin(v * 3) * 10, b[1] + Math.sin(a) * len * v + Math.sin(a + side * 1.2) * Math.sin(v * 3) * 10]); } twigs.push({ pts, u });
    for (let k = 0; k < 4; k++) { const v = 0.25 + k * 0.22; const q = MG.path.along(pts, v); leaves.push({ x: q[0], y: q[1], a: q[2] + (k % 2 ? 0.7 : -0.7) + (r() - 0.5) * 0.3, len: 105 + r() * 40, w: 17 + r() * 5, silver: r() < 0.35, u }); }
  }
  for (let i = 0; i < 30; i++) { const u = 0.03 + r() * 0.95; const q = MG.path.along(stem, u); leaves.push({ x: q[0], y: q[1], a: q[2] + (r() < 0.5 ? -1 : 1) * (0.5 + r() * 0.8), len: 110 + r() * 50, w: 17 + r() * 6, silver: r() < 0.35, u }); }
  const ou = [0.13, 0.22, 0.31, 0.4, 0.49, 0.585, 0.67, 0.755, 0.84, 0.92];
  ou.forEach((u, i) => { const q = MG.path.along(stem, u); olives.push({ x: q[0] + (r() - 0.5) * 20, y: q[1] + 8, hang: 46 + r() * 34, r: 30 + r() * 6, u, rot: (r() - 0.5) * 0.4, seed: i }); });
  S7._br = { stem, leaves, olives, twigs }; return S7._br;
};
S7.leaf = (ctx, x, y, a, len, w, col, mid) => { const p = new Path2D(); const n = 9; const L = [], R = []; for (let i = 0; i <= n; i++) { const u = i / n; const ww = w * Math.pow(Math.sin(Math.PI * Math.min(1, u * 1.08)), 0.75) * 0.5; const px = x + Math.cos(a) * len * u, py = y + Math.sin(a) * len * u; L.push([px - Math.sin(a) * ww, py + Math.cos(a) * ww]); R.push([px + Math.sin(a) * ww, py - Math.cos(a) * ww]); } L.forEach((q, i) => (i ? p.lineTo(q[0], q[1]) : p.moveTo(q[0], q[1]))); for (let i = R.length - 1; i >= 0; i--) p.lineTo(R[i][0], R[i][1]); p.closePath(); ctx.fillStyle = col; ctx.fill(p); ctx.strokeStyle = mid; ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a) * len * 0.92, y + Math.sin(a) * len * 0.92); ctx.stroke(); };
/** olive fruit. wither 0..1 (green plump → dark wrinkled) */
S7.olive = (ctx, x, y, r, wither = 0, rot = 0, seed = 1) => {
  const k = 1 - 0.28 * wither; const rx = r * 0.82 * k, ry = r * k; const col = MG.col.mix(MG.col.mix('#8C9A3E', '#6E7B2E', (seed % 3) / 3), '#3A2530', wither);
  ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
  const p = MG.path.ellipse(0, 0, rx, ry); MG.fx.volume(ctx, p, [-rx, -ry, rx * 2, ry * 2], { color: col, shade: 0.55, shadeColor: MG.col.shade(col, 0.6), hi: 0.45 * (1 - wither * 0.6), soft: 0.25, size: ry * 2 });
  ctx.fillStyle = `rgba(255,255,240,${0.8 - wither * 0.5})`; ctx.beginPath(); ctx.ellipse(-rx * 0.35, -ry * 0.45, rx * 0.22, ry * 0.12, -0.5, 0, TAU); ctx.fill();
  if (wither > 0.05) { ctx.strokeStyle = `rgba(20,10,14,${0.55 * wither})`; ctx.lineWidth = 1.6; for (let i = 0; i < 4; i++) { ctx.beginPath(); ctx.arc(rx * (0.3 - i * 0.25), ry * (0.1 + 0.1 * i), ry * (0.4 + i * 0.1), -1.2 + i * 0.4, 0.3 + i * 0.3); ctx.stroke(); } }
  ctx.restore();
};
/** draws the branch. o: {x,y,s,rot, wither(i)→0..1, fall(i)→{dy,rot}, dryLeaf(u)→0..1, sway} */
S7.branch = (ctx, t, o = {}) => {
  const B = S7.branchGeo(); ctx.save(); ctx.translate(o.x || 0, o.y || 0); ctx.rotate(o.rot || 0); ctx.scale(o.s || 1, o.s || 1);
  const sway = o.sway ?? 1; const sw = (u) => Math.sin(t * 1.3 + u * 3) * 6 * u * sway;
  const st = B.stem.map((q, i) => [q[0], q[1] + sw(i / 24)]);
  MG.fx.ink(ctx, st, { width: 30, color: '#5E4E3E', taper: [0, 0.85] }); MG.fx.ink(ctx, st.map((q) => [q[0], q[1] - 6]), { width: 8, color: 'rgba(230,210,180,0.35)', taper: [0.1, 0.9] });
  for (const tw of B.twigs) MG.fx.ink(ctx, tw.pts.map((q) => [q[0], q[1] + sw(tw.u)]), { width: 11, color: '#5E4E3E', taper: [0, 0.9] });
  for (const L of B.leaves) { const d = o.dryLeaf ? o.dryLeaf(L.x) : 0; const top = L.silver ? MG.col.mix(C.oliveLeafLight, '#C9B48A', d) : MG.col.mix('#56653A', '#8A6A3A', d); S7.leaf(ctx, L.x, L.y + sw(L.u), L.a + d * 0.5, L.len * (1 - d * 0.15), L.w * (1 - d * 0.3), top, MG.col.darken(top, 0.25)); }
  B.olives.forEach((ol, i) => { const wv = o.wither ? o.wither(i, ol) : 0; const f = o.fall ? o.fall(i, ol) : null; const ax = ol.x, ay = ol.y + sw(ol.u); const ox = ax + Math.sin(t * 1.1 + i) * 3 * sway, oy = ay + ol.hang;
    if (!f || f.dy < 1) { ctx.strokeStyle = '#5E4E3E'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(ax, ay); ctx.quadraticCurveTo(ax + 6, ay + ol.hang * 0.5, ox, oy - ol.r * 0.9); ctx.stroke(); }
    S7.olive(ctx, ox + (f ? f.dx || 0 : 0), oy + (f ? f.dy : 0), ol.r, wv, ol.rot + (f ? f.rot : 0), ol.seed); });
  ctx.restore();
};

// ---------- bottle & price tag ----------
S7.bottlePath = (cx, base, h, wd = 0.34) => { const bw = h * wd / 2, nw = h * 0.05, sh = base - h * 0.6, nk = base - h * 0.8, top = base - h * 0.94; const p = new Path2D(); p.moveTo(cx - bw + 10, base); p.quadraticCurveTo(cx - bw, base, cx - bw, base - 12); p.lineTo(cx - bw, sh); p.bezierCurveTo(cx - bw, sh - h * 0.1, cx - nw, nk + h * 0.04, cx - nw, nk); p.lineTo(cx - nw, top); p.lineTo(cx + nw, top); p.lineTo(cx + nw, nk); p.bezierCurveTo(cx + nw, nk + h * 0.04, cx + bw, sh - h * 0.1, cx + bw, sh); p.lineTo(cx + bw, base - 12); p.quadraticCurveTo(cx + bw, base, cx + bw - 10, base); p.closePath(); return p; };
/** glass bottle of olive oil with plain label. level 0..1 of the oil (1 = up to the neck) */
S7.bottle = (ctx, cx, base, h, o = {}) => {
  const bw = h * 0.17; const path = S7.bottlePath(cx, base, h); const lvl = o.level ?? 1; const yl = lerp(base - 8, base - h * 0.79, lvl);
  ctx.save(); ctx.fillStyle = 'rgba(210,225,200,0.25)'; ctx.fill(path); ctx.clip(path);
  const g = ctx.createLinearGradient(cx - bw, 0, cx + bw, 0); g.addColorStop(0, o.deep || C.oilDeep); g.addColorStop(0.25, o.oil || C.oil); g.addColorStop(0.42, o.light || C.oilLight); g.addColorStop(0.62, o.oil || C.oil); g.addColorStop(1, '#4E4310');
  ctx.fillStyle = g; ctx.fillRect(cx - bw - 4, yl, bw * 2 + 8, base - yl + 4);
  ctx.fillStyle = 'rgba(255,245,190,0.55)'; ctx.fillRect(cx - bw - 4, yl - 2, bw * 2 + 8, 4);
  // glass highlights
  ctx.globalCompositeOperation = 'screen'; ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.fillRect(cx - bw * 0.72, base - h * 0.78, bw * 0.1, h * 0.72); ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.fillRect(cx - bw * 0.52, base - h * 0.7, bw * 0.05, h * 0.62); ctx.fillRect(cx + bw * 0.72, base - h * 0.55, bw * 0.06, h * 0.48);
  ctx.globalCompositeOperation = 'source-over';
  // thick glass base
  ctx.fillStyle = 'rgba(255,250,220,0.3)'; ctx.fillRect(cx - bw, base - 14, bw * 2, 14);
  ctx.restore();
  ctx.save(); ctx.strokeStyle = 'rgba(40,40,20,0.55)'; ctx.lineWidth = 2; ctx.stroke(path); ctx.restore();
  // cap
  const nw = h * 0.05; const top = base - h * 0.94; const cap = MG.path.rr(cx - nw * 1.25, top - h * 0.07, nw * 2.5, h * 0.08, 6); MG.fx.volume(ctx, cap, [cx - nw * 1.25, top - h * 0.07, nw * 2.5, h * 0.08], { color: o.cap || '#2E4A2A', shade: 0.5, hi: 0.4 });
  ctx.strokeStyle = 'rgba(255,255,255,0.18)'; ctx.lineWidth = 1; for (let i = 1; i < 8; i++) { const xx = cx - nw * 1.25 + (nw * 2.5 * i) / 8; ctx.beginPath(); ctx.moveTo(xx, top - h * 0.07 + 3); ctx.lineTo(xx, top - 3); ctx.stroke(); }
  // label
  if (o.label !== false) { const ly = base - h * 0.47, lh = h * 0.25; ctx.save(); const lp = new Path2D(); lp.rect(cx - bw, ly, bw * 2, lh); ctx.fillStyle = '#F4ECD8'; ctx.fill(lp); ctx.clip(lp);
    const lg = ctx.createLinearGradient(cx - bw, 0, cx + bw, 0); lg.addColorStop(0, 'rgba(60,40,20,0.35)'); lg.addColorStop(0.3, 'rgba(60,40,20,0)'); lg.addColorStop(0.75, 'rgba(60,40,20,0)'); lg.addColorStop(1, 'rgba(60,40,20,0.4)'); ctx.fillStyle = lg; ctx.fillRect(cx - bw, ly, bw * 2, lh);
    ctx.fillStyle = '#6F7A3A'; ctx.fillRect(cx - bw, ly + lh * 0.08, bw * 2, lh * 0.05); ctx.fillRect(cx - bw, ly + lh * 0.87, bw * 2, lh * 0.05);
    const s = h / 620; MG.text.draw(ctx, 'Aceite de Oliva', cx, ly + lh * 0.42, { font: MG.F.display, italic: true, weight: 600, size: 30 * s, color: '#2F3A1A', align: 'center' }); MG.text.draw(ctx, 'VIRGEN EXTRA', cx, ly + lh * 0.6, { font: MG.F.mono, weight: 600, size: 15 * s, tracking: 0.2, color: '#4a3a20', align: 'center' }); MG.text.draw(ctx, '1 L', cx, ly + lh * 0.82, { font: MG.F.cond, weight: 900, size: 34 * s, color: '#2F3A1A', align: 'center' });
    ctx.restore(); }
};
/** supermarket shelf tag. face: 0 shows `a`, 1 shows `b`; flip anim via sy */
S7.tag = (ctx, x, y, w, h, o = {}) => {
  const f = clamp(o.flip ?? 0); const sy = Math.abs(Math.cos(f * Math.PI)); const showB = f > 0.5; ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(1, Math.max(0.02, sy));
  const p = MG.path.rr(-w / 2, 0, w, h, 8); MG.fx.shadow(ctx, p, { dx: 6, dy: 10, blur: 16, color: 'rgba(40,20,10,0.35)' }); ctx.fillStyle = showB ? (o.colB || '#F6D04D') : (o.colA || '#F4EEE0'); ctx.fill(p); ctx.save(); ctx.clip(p); MG.tex.over(ctx, 'fibers', { alpha: 0.5 }); ctx.restore();
  ctx.strokeStyle = 'rgba(30,20,10,0.25)'; ctx.lineWidth = 2; ctx.stroke(p);
  if (o.draw) o.draw(ctx, showB, w, h);
  ctx.restore();
};

// ---------- people ----------
/** stylised full figure, feet at (x,y), height h. o: {skin, hair, hairStyle, top, bottom, shoes, hat:'hard'|'cap'|'straw'|'none', vest, apron, prop, walk (phase), sil (silhouette colour), face (draw eyes), mood, lean} */
S7.figure = (ctx, x, y, h, o = {}) => {
  const s = h / 400; const sil = o.sil; const skin = sil || o.skin || C.skin1; const top = sil || o.top || '#4C6B8C'; const bot = sil || o.bottom || '#2E3440'; const shoe = sil || o.shoes || '#1d1a1f'; const hairC = sil || o.hair || C.hair1;
  const ph = o.walk ?? null; const sw = ph === null ? 0 : Math.sin(ph); const bob = ph === null ? 0 : Math.abs(Math.cos(ph)) * 4 * s;
  ctx.save(); ctx.translate(x, y - bob); ctx.scale(s, s); if (o.lean) ctx.rotate(o.lean);
  const bw = o.build ?? 1; // body width factor
  // legs
  const hipY = -190, hipW = 34 * bw; const legL = [[-hipW * 0.45, hipY], [-hipW * 0.45 + sw * 30, -95], [-hipW * 0.4 + sw * 44, -6]]; const legR = [[hipW * 0.45, hipY], [hipW * 0.45 - sw * 30, -95], [hipW * 0.4 - sw * 44, -6]];
  if (o.skirt) { ctx.fillStyle = bot; ctx.beginPath(); ctx.moveTo(-hipW, hipY - 10); ctx.lineTo(hipW, hipY - 10); ctx.lineTo(hipW * 1.25, -110); ctx.lineTo(-hipW * 1.25, -110); ctx.closePath(); ctx.fill(); MG.fx.ink(ctx, [[-14, -110], [-14 + sw * 20, -6]], { width: 20, color: sil || o.legs || skin, taper: [0, 0.2] }); MG.fx.ink(ctx, [[14, -110], [14 - sw * 20, -6]], { width: 20, color: sil || o.legs || skin, taper: [0, 0.2] }); }
  else { MG.fx.ink(ctx, MG.path.spline(legL, 4), { width: 36 * bw, color: MG.col.shade(bot, 0.15), taper: [0, 0.25] }); MG.fx.ink(ctx, MG.path.spline(legR, 4), { width: 36 * bw, color: bot, taper: [0, 0.25] }); }
  // shoes
  for (const [lx, sgn] of [[legL[2][0], -1], [legR[2][0], 1]]) { ctx.fillStyle = shoe; ctx.beginPath(); ctx.ellipse(lx + 10, -6, 26, 11, 0, 0, TAU); ctx.fill(); }
  // torso
  const shY = -330, shW = 58 * bw; const torso = MG.path.smooth([[-shW, shY + 8], [-shW * 0.3, shY - 6], [shW * 0.3, shY - 6], [shW, shY + 8], [shW * 0.85, -250], [hipW * 1.05, hipY + 6], [-hipW * 1.05, hipY + 6], [-shW * 0.85, -250]], true);
  if (sil) { ctx.fillStyle = sil; ctx.fill(torso); } else MG.fx.volume(ctx, torso, [-shW, shY - 6, shW * 2, 150], { color: top, shade: 0.45, hi: 0.25, cel: true, light: LIGHT, size: 120 });
  if (o.vest && !sil) { const v = MG.path.smooth([[-shW * 0.8, shY + 14], [-shW * 0.25, shY + 4], [-shW * 0.2, hipY], [-hipW, hipY + 4], [-shW * 0.8, -250]], true); const v2 = MG.path.smooth([[shW * 0.8, shY + 14], [shW * 0.25, shY + 4], [shW * 0.2, hipY], [hipW, hipY + 4], [shW * 0.8, -250]], true); for (const vp of [v, v2]) { ctx.fillStyle = o.vest; ctx.fill(vp); } ctx.fillStyle = 'rgba(240,240,230,0.85)'; ctx.fillRect(-shW * 0.8, -265, shW * 1.6, 8); ctx.fillRect(-shW * 0.8, -240, shW * 1.6, 8); }
  if (o.apron && !sil) { const a = MG.path.rr(-hipW * 1.1, -270, hipW * 2.2, 200, 10); ctx.fillStyle = o.apron; ctx.fill(a); ctx.strokeStyle = 'rgba(0,0,0,0.15)'; ctx.lineWidth = 2; ctx.stroke(a); }
  // arms
  const armA = o.arms || [0.15 + sw * 0.25, -0.15 - sw * 0.25]; const armLen = 130;
  for (const [sx2, a] of [[-shW * 0.92, armA[0]], [shW * 0.92, armA[1]]]) { const ex = sx2 + Math.sin(a) * armLen * 0.5 * (sx2 < 0 ? -1 : 1) * 0.2, ey = shY + 12 + Math.cos(a) * armLen * 0.5; const hx = sx2 + Math.sin(a) * armLen * (sx2 < 0 ? 1 : 1), hy = shY + 12 + Math.cos(a) * armLen; MG.fx.ink(ctx, MG.path.spline([[sx2, shY + 14], [ex, ey], [hx, hy]], 4), { width: 26 * bw, color: sil || MG.col.shade(top, sx2 < 0 ? 0.08 : 0), taper: [0, 0.3] }); ctx.fillStyle = skin; ctx.beginPath(); ctx.arc(hx, hy + 6, 12, 0, TAU); ctx.fill(); }
  // neck + head
  ctx.fillStyle = sil || MG.col.shade(skin, 0.15); ctx.fillRect(-11, shY - 30, 22, 30);
  const hy = shY - 70; const head = MG.path.blob(0, hy, 40, { seed: o.seed || 3, irr: 0.06, sy: 1.12 });
  if (sil) { ctx.fillStyle = sil; ctx.fill(head); } else MG.fx.volume(ctx, head, [-42, hy - 46, 84, 92], { color: skin, shade: 0.4, hi: 0.3, cel: true, light: LIGHT, size: 90 });
  // hair
  const hs = o.hairStyle || 'short'; ctx.fillStyle = hairC;
  if (hs === 'short') { ctx.beginPath(); ctx.ellipse(0, hy - 26, 42, 26, 0, Math.PI, TAU); ctx.fill(); ctx.fillRect(-42, hy - 28, 10, 22); }
  else if (hs === 'curly') { for (let i = 0; i < 9; i++) { const a = Math.PI + (i / 8) * Math.PI; ctx.beginPath(); ctx.arc(Math.cos(a) * 34, hy - 12 + Math.sin(a) * 34, 15, 0, TAU); ctx.fill(); } }
  else if (hs === 'long') { ctx.beginPath(); ctx.ellipse(0, hy - 22, 45, 30, 0, Math.PI, TAU); ctx.fill(); ctx.fillRect(-46, hy - 24, 18, 90); ctx.fillRect(28, hy - 24, 18, 90); }
  else if (hs === 'bun') { ctx.beginPath(); ctx.ellipse(0, hy - 24, 43, 26, 0, Math.PI, TAU); ctx.fill(); ctx.beginPath(); ctx.arc(6, hy - 54, 18, 0, TAU); ctx.fill(); }
  else if (hs === 'bald') { ctx.beginPath(); ctx.ellipse(-30, hy - 6, 12, 16, 0, 0, TAU); ctx.fill(); }
  // hats
  if (o.hat === 'hard') { const hp = new Path2D(); hp.ellipse(0, hy - 30, 46, 34, 0, Math.PI, TAU); hp.rect(-56, hy - 32, 112, 8); ctx.fillStyle = sil || '#F2C230'; ctx.fill(hp); if (!sil) { ctx.fillStyle = 'rgba(255,255,255,0.45)'; ctx.beginPath(); ctx.ellipse(-14, hy - 50, 12, 6, -0.4, 0, TAU); ctx.fill(); } }
  else if (o.hat === 'cap') { ctx.fillStyle = sil || o.hatColor || '#2E4A7A'; ctx.beginPath(); ctx.ellipse(0, hy - 28, 42, 22, 0, Math.PI, TAU); ctx.fill(); ctx.fillRect(10, hy - 30, 50, 8); }
  else if (o.hat === 'straw') { ctx.fillStyle = sil || '#D9B477'; ctx.beginPath(); ctx.ellipse(0, hy - 30, 72, 12, 0, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.ellipse(0, hy - 38, 38, 24, 0, Math.PI, TAU); ctx.fill(); }
  // face (simple, readable at small sizes)
  if (!sil && o.face !== false) { const look = o.look ?? 0.25; const bl = o.blink || 0; ctx.fillStyle = '#231815'; for (const ex of [-14, 14]) { ctx.beginPath(); ctx.ellipse(ex + look * 8, hy - 2, 4.5, 5.5 * (1 - bl * 0.9), 0, 0, TAU); ctx.fill(); } ctx.strokeStyle = '#231815'; ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.beginPath(); const m = o.mood || 'neutral'; if (m === 'smile') ctx.arc(look * 8, hy + 14, 12, 0.3, Math.PI - 0.3); else if (m === 'sad') ctx.arc(look * 8, hy + 30, 12, Math.PI + 0.5, TAU - 0.5); else { ctx.moveTo(-8 + look * 8, hy + 22); ctx.lineTo(8 + look * 8, hy + 22); } ctx.stroke(); ctx.fillStyle = MG.col.shade(skin, 0.25); ctx.beginPath(); ctx.ellipse(look * 12 + 3, hy + 8, 6, 9, 0, 0, TAU); ctx.fill(); }
  if (o.prop) o.prop(ctx, { shY, hy, shW, hipY });
  ctx.restore();
};
/** head-and-shoulders bust for crowds. o: {skin,hair,hairStyle,top,young,sad,seed} — sized ~ 100 px tall at s=1 */
S7.bust = (ctx, x, y, s, o = {}) => {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); const skin = o.skin, top = o.top, hairC = o.hair; const sad = o.sad ? 1 : 0;
  const sh = MG.path.smooth([[-46, 40], [-40, 6], [-16, -6], [16, -6], [40, 6], [46, 40]], false); const shp = new Path2D(sh); shp.lineTo(46, 60); shp.lineTo(-46, 60); shp.closePath();
  MG.fx.volume(ctx, shp, [-46, -6, 92, 66], { color: top, shade: 0.4, hi: 0.2, cel: true, size: 70 });
  if (o.hood) { ctx.fillStyle = MG.col.shade(top, 0.15); ctx.beginPath(); ctx.ellipse(0, -2, 30, 12, 0, 0, TAU); ctx.fill(); }
  const hy = -34 + sad * 8; const hx = sad * 2; const head = MG.path.ellipse(hx, hy, 23, 27, sad * 0.12);
  MG.fx.volume(ctx, head, [hx - 23, hy - 27, 46, 54], { color: skin, shade: 0.4, hi: 0.25, cel: true, size: 50 });
  ctx.fillStyle = hairC; const hs = o.hairStyle;
  if (hs === 'curly') { for (let i = 0; i < 7; i++) { const a = Math.PI + (i / 6) * Math.PI; ctx.beginPath(); ctx.arc(hx + Math.cos(a) * 20, hy - 8 + Math.sin(a) * 18, 10, 0, TAU); ctx.fill(); } }
  else if (hs === 'long') { ctx.beginPath(); ctx.ellipse(hx, hy - 12, 26, 20, 0, Math.PI, TAU); ctx.fill(); ctx.fillRect(hx - 27, hy - 12, 10, 46); ctx.fillRect(hx + 17, hy - 12, 10, 46); }
  else if (hs === 'bun') { ctx.beginPath(); ctx.ellipse(hx, hy - 14, 25, 17, 0, Math.PI, TAU); ctx.fill(); ctx.beginPath(); ctx.arc(hx, hy - 34, 10, 0, TAU); ctx.fill(); }
  else if (hs === 'cap') { ctx.fillStyle = o.capColor || '#B8322A'; ctx.beginPath(); ctx.ellipse(hx, hy - 14, 25, 15, 0, Math.PI, TAU); ctx.fill(); ctx.fillRect(hx - 2, hy - 16, 30, 6); }
  else if (hs === 'grey') { ctx.fillStyle = '#B9B2A8'; ctx.beginPath(); ctx.ellipse(hx, hy - 14, 25, 16, 0, Math.PI, TAU); ctx.fill(); }
  else if (hs === 'bald') { ctx.fillStyle = hairC; ctx.beginPath(); ctx.ellipse(hx - 20, hy - 2, 6, 10, 0, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.ellipse(hx + 20, hy - 2, 6, 10, 0, 0, TAU); ctx.fill(); }
  else { ctx.beginPath(); ctx.ellipse(hx, hy - 14, 25, 17, 0, Math.PI, TAU); ctx.fill(); }
  // face
  ctx.fillStyle = '#231815'; const ey = hy - 2 + sad * 4; for (const ex of [-8, 8]) { ctx.beginPath(); ctx.ellipse(hx + ex, ey, 2.6, sad ? 1.2 : 3.2, 0, 0, TAU); ctx.fill(); }
  ctx.strokeStyle = '#231815'; ctx.lineWidth = 2.2; ctx.lineCap = 'round'; ctx.beginPath(); if (sad) ctx.arc(hx, hy + 20, 7, Math.PI + 0.6, TAU - 0.6); else ctx.arc(hx, hy + 6, 7, 0.4, Math.PI - 0.4); ctx.stroke();
  if (sad) { ctx.strokeStyle = 'rgba(35,24,21,0.8)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(hx - 13, ey - 8); ctx.lineTo(hx - 4, ey - 6); ctx.moveTo(hx + 13, ey - 8); ctx.lineTo(hx + 4, ey - 6); ctx.stroke(); }
  ctx.restore();
};

// ---------- buildings ----------
/** isometric house sprite (cached). variant changes roof/wall tint */
S7.houseSprite = (v = 0, sc = 1) => MG.cache(`s7house:${v}:${sc}`, Math.ceil(120 * sc), Math.ceil(110 * sc), (x) => {
  x.scale(sc, sc); const cx = 60, base = 96; const a = 34, b = 18, hgt = 34; // iso half-width, half-depth, wall height
  const L = [[cx - a, base - b], [cx, base], [cx, base - hgt], [cx - a, base - b - hgt]]; const R = [[cx, base], [cx + a, base - b], [cx + a, base - b - hgt], [cx, base - hgt]];
  const wall = ['#F7F1E3', '#F3E6CF', '#EFE2D2', '#F6EBDD'][v % 4]; const roof = ['#C8693F', '#B8583A', '#D07A4A', '#A9533A'][v % 4];
  x.fillStyle = 'rgba(60,35,45,0.28)'; x.beginPath(); x.moveTo(cx - a, base - b); x.lineTo(cx, base); x.lineTo(cx + a + 26, base - b + 10); x.lineTo(cx + 20, base + 12); x.closePath(); x.fill();
  x.fillStyle = wall; x.beginPath(); L.forEach((q, i) => (i ? x.lineTo(q[0], q[1]) : x.moveTo(q[0], q[1]))); x.closePath(); x.fill();
  x.fillStyle = MG.col.shade(wall, 0.25); x.beginPath(); R.forEach((q, i) => (i ? x.lineTo(q[0], q[1]) : x.moveTo(q[0], q[1]))); x.closePath(); x.fill();
  // roof (gable along the right axis)
  const rt = 18; const r1 = [[cx - a, base - b - hgt], [cx, base - hgt], [cx + a * 0.5, base - hgt - b * 0.5 - rt], [cx - a * 0.5, base - b - hgt - b * 0.5 - rt]]; const r2 = [[cx, base - hgt], [cx + a, base - b - hgt], [cx + a * 0.5, base - hgt - b * 0.5 - rt]];
  x.fillStyle = MG.col.light(roof, 0.12); x.beginPath(); r1.forEach((q, i) => (i ? x.lineTo(q[0], q[1]) : x.moveTo(q[0], q[1]))); x.closePath(); x.fill();
  x.fillStyle = MG.col.shade(roof, 0.3); x.beginPath(); r2.forEach((q, i) => (i ? x.lineTo(q[0], q[1]) : x.moveTo(q[0], q[1]))); x.closePath(); x.fill();
  x.fillStyle = MG.col.shade(wall, 0.25); x.beginPath(); x.moveTo(cx + a * 0.5, base - hgt - b * 0.5 - rt); x.lineTo(cx + a, base - b - hgt); x.lineTo(cx, base - hgt); x.closePath(); x.globalAlpha = 0.4; x.fill(); x.globalAlpha = 1;
  // door & windows
  x.fillStyle = '#5A4038'; x.beginPath(); x.moveTo(cx - a * 0.55, base - b * 0.55); x.lineTo(cx - a * 0.35, base - b * 0.35); x.lineTo(cx - a * 0.35, base - b * 0.35 - 18); x.lineTo(cx - a * 0.55, base - b * 0.55 - 18); x.closePath(); x.fill();
  x.fillStyle = '#2F5B85'; x.beginPath(); x.moveTo(cx + a * 0.3, base - b * 0.3 - 12); x.lineTo(cx + a * 0.65, base - b * 0.65 - 12); x.lineTo(cx + a * 0.65, base - b * 0.65 - 24); x.lineTo(cx + a * 0.3, base - b * 0.3 - 24); x.closePath(); x.fill();
  x.strokeStyle = 'rgba(40,25,25,0.35)'; x.lineWidth = 1; x.stroke();
});
/** tower crane (side view). o: {mast, jib, cjib, rot (jib turn −1..1), col, hook (0..1 cable), sil} */
S7.crane = (ctx, x, base, s, o = {}) => {
  const col = o.col || '#E8B531'; const ink = o.ink || 'rgba(40,30,30,0.75)'; const mh = (o.mast ?? 520) * s; const rot = o.rot ?? 1; const jl = (o.jib ?? 420) * s * rot, cl = (o.cjib ?? 160) * s * rot; const w = 22 * s;
  ctx.save(); ctx.translate(x, base);
  // mast lattice
  ctx.strokeStyle = col; ctx.lineWidth = Math.max(1, 3 * s); ctx.beginPath(); ctx.moveTo(-w / 2, 0); ctx.lineTo(-w / 2, -mh); ctx.moveTo(w / 2, 0); ctx.lineTo(w / 2, -mh); for (let yy = 0; yy > -mh; yy -= w) { ctx.moveTo(-w / 2, yy); ctx.lineTo(w / 2, yy - w); ctx.moveTo(-w / 2, yy - w); ctx.lineTo(w / 2, yy - w); } ctx.stroke();
  // cab + apex
  ctx.fillStyle = col; ctx.fillRect(-w * 0.9, -mh - w * 0.9, w * 1.8, w * 0.9); ctx.fillStyle = 'rgba(40,60,90,0.6)'; ctx.fillRect(w * 0.1, -mh - w * 0.75, w * 0.6, w * 0.5);
  ctx.strokeStyle = col; ctx.beginPath(); ctx.moveTo(0, -mh - w * 0.9); ctx.lineTo(0, -mh - w * 3); ctx.stroke();
  // jib & counter-jib (lattice) + ties
  const jy = -mh - w * 0.9; ctx.lineWidth = Math.max(1, 2.5 * s); ctx.beginPath(); ctx.moveTo(-cl, jy); ctx.lineTo(jl, jy); ctx.moveTo(-cl, jy + w * 0.6); ctx.lineTo(jl, jy + w * 0.6); const st = w * 0.9 * Math.sign(rot || 1); if (Math.abs(jl) > 2) for (let xx = 0; Math.abs(xx) < Math.abs(jl); xx += st) { ctx.moveTo(xx, jy + w * 0.6); ctx.lineTo(xx + st * 0.5, jy); ctx.lineTo(xx + st, jy + w * 0.6); } ctx.stroke();
  ctx.lineWidth = Math.max(1, 1.5 * s); ctx.strokeStyle = ink; ctx.beginPath(); ctx.moveTo(0, -mh - w * 3); ctx.lineTo(jl * 0.7, jy); ctx.moveTo(0, -mh - w * 3); ctx.lineTo(-cl, jy); ctx.stroke();
  // counterweights
  ctx.fillStyle = o.cw || '#8C8A86'; ctx.fillRect(-cl, jy - w * 0.2, w * 1.6 * Math.sign(rot || 1), w * 1.4);
  // trolley + hook
  if (o.hook !== undefined) { const hx = jl * (o.trolley ?? 0.75); const hl = o.hook * mh * 0.9; ctx.strokeStyle = ink; ctx.lineWidth = Math.max(1, 1.2 * s); ctx.beginPath(); ctx.moveTo(hx, jy + w * 0.6); ctx.lineTo(hx, jy + w * 0.6 + hl); ctx.stroke(); ctx.fillStyle = '#3a3030'; ctx.fillRect(hx - 5 * s, jy + w * 0.6 + hl, 10 * s, 12 * s); if (o.load) o.load(ctx, hx, jy + w * 0.6 + hl + 12 * s); }
  ctx.restore();
};
/** concrete frame building under construction: floors built so far (fractional), bays, floor height. returns roof y */
S7.frame = (ctx, x, base, wd, floors, built, o = {}) => {
  const fh = o.fh || 54; const bays = o.bays || 5; const col = o.col || '#CFC8BC'; const sh = MG.col.shade(col, 0.35); const n = Math.floor(built); const fr = built - n;
  ctx.save(); ctx.translate(x, base);
  for (let i = 0; i < Math.min(floors, Math.ceil(built)); i++) { const k = i < n ? 1 : fr; const y0 = -i * fh; const hgt = fh * k;
    // columns
    for (let b = 0; b <= bays; b++) { const cx2 = -wd / 2 + (wd * b) / bays; ctx.fillStyle = b === bays ? sh : col; ctx.fillRect(cx2 - 5, y0 - hgt, 10, hgt); }
    // dark interior
    ctx.fillStyle = 'rgba(40,30,38,0.38)'; ctx.fillRect(-wd / 2 + 5, y0 - hgt, wd - 10, hgt - 8);
    // slab
    if (k > 0.85) { ctx.fillStyle = col; ctx.fillRect(-wd / 2 - 8, y0 - fh - 6, wd + 16, 10); ctx.fillStyle = sh; ctx.fillRect(-wd / 2 - 8, y0 - fh + 4, wd + 16, 3); }
    // brick infill on lower floors
    if (o.infill && i < built - 2) { ctx.fillStyle = MG.col.mix('#C8693F', '#B8583A', (i % 3) / 3); for (let b = 0; b < bays; b++) { if ((b + i) % 3 === 1) continue; ctx.fillRect(-wd / 2 + (wd * b) / bays + 6, y0 - fh + 8, wd / bays - 12, fh - 16); ctx.fillStyle = 'rgba(30,40,60,0.6)'; ctx.fillRect(-wd / 2 + (wd * b) / bays + wd / bays * 0.3, y0 - fh * 0.7, wd / bays * 0.4, fh * 0.35); ctx.fillStyle = MG.col.mix('#C8693F', '#B8583A', (i % 3) / 3); } }
  }
  // rebar sticking out of the top
  const ty = -Math.min(floors, built) * fh; ctx.strokeStyle = 'rgba(60,40,40,0.7)'; ctx.lineWidth = 1.5; for (let b = 0; b <= bays; b++) { const cx2 = -wd / 2 + (wd * b) / bays; ctx.beginPath(); ctx.moveTo(cx2 - 3, ty); ctx.lineTo(cx2 - 4, ty - 14); ctx.moveTo(cx2 + 3, ty); ctx.lineTo(cx2 + 4, ty - 14); ctx.stroke(); }
  ctx.restore(); return base + ty;
};
/** car side view (facing right), length L, wheel angle; returns wheel centres */
S7.carSide = (ctx, x, y, L, o = {}) => {
  const s = L / 1000; const col = o.color || P.sol; const wr = 88 * s; ctx.save(); ctx.translate(x, y);
  const body = MG.path.smooth([[-500, -60], [-505, -170], [-470, -230], [-300, -255], [-180, -380], [130, -395], [280, -265], [470, -235], [505, -170], [500, -60], [380, -40], [300, -95], [180, -95], [140, -40], [-170, -40], [-210, -95], [-330, -95], [-370, -40]].map((q) => [q[0] * s, q[1] * s]), true);
  ctx.fillStyle = 'rgba(40,20,30,0.3)'; ctx.filter = 'blur(10px)'; ctx.beginPath(); ctx.ellipse(40 * s, 0, 560 * s, 26 * s, 0, 0, TAU); ctx.fill(); ctx.filter = 'none';
  MG.fx.volume(ctx, body, [-505 * s, -395 * s, 1010 * s, 355 * s], { color: col, shade: 0.4, hi: 0.45, soft: 0.2, light: LIGHT, rim: '#FFF3D6', rimW: 3 });
  // windows
  const win = MG.path.smooth([[-275, -250], [-170, -360], [120, -372], [245, -262], [60, -250]].map((q) => [q[0] * s, q[1] * s]), true); ctx.fillStyle = '#1F3A5C'; ctx.fill(win); ctx.save(); ctx.clip(win); const g = ctx.createLinearGradient(-200 * s, -380 * s, 100 * s, -240 * s); g.addColorStop(0, 'rgba(200,225,250,0.6)'); g.addColorStop(0.5, 'rgba(200,225,250,0.05)'); g.addColorStop(1, 'rgba(200,225,250,0.25)'); ctx.fillStyle = g; ctx.fillRect(-300 * s, -400 * s, 600 * s, 200 * s); ctx.restore();
  ctx.fillStyle = col; ctx.fillRect(-40 * s, -372 * s, 26 * s, 122 * s);
  ctx.strokeStyle = 'rgba(30,20,20,0.35)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-30 * s, -245 * s); ctx.lineTo(-30 * s, -60 * s); ctx.moveTo(260 * s, -250 * s); ctx.lineTo(250 * s, -110 * s); ctx.stroke();
  ctx.fillStyle = '#FFF1C8'; ctx.beginPath(); ctx.ellipse(470 * s, -200 * s, 26 * s, 14 * s, 0.2, 0, TAU); ctx.fill(); ctx.fillStyle = '#B8322A'; ctx.fillRect(-505 * s, -215 * s, 18 * s, 34 * s);
  ctx.fillStyle = '#2A2426'; ctx.fillRect(-505 * s, -85 * s, 1010 * s, 22 * s);
  const wheels = [[-270 * s, -40 * s], [240 * s, -40 * s]];
  for (const [wx, wy] of wheels) S7.wheel(ctx, wx, wy - wr * 0.55 + 40 * s, wr, o.spin || 0);
  ctx.restore(); return wheels.map(([wx, wy]) => [x + wx, y + wy - wr * 0.55 + 40 * s]);
};
S7.wheel = (ctx, x, y, r, rot = 0, o = {}) => {
  ctx.save(); ctx.translate(x, y); ctx.fillStyle = '#1E1A1D'; ctx.beginPath(); ctx.arc(0, 0, r, 0, TAU); ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.08)'; ctx.lineWidth = r * 0.05; for (let i = 0; i < 24; i++) { const a = rot + (i / 24) * TAU; ctx.beginPath(); ctx.moveTo(Math.cos(a) * r * 0.82, Math.sin(a) * r * 0.82); ctx.lineTo(Math.cos(a) * r * 0.97, Math.sin(a) * r * 0.97); ctx.stroke(); }
  const rim = MG.path.circle(0, 0, r * 0.66); MG.fx.volume(ctx, rim, [-r * 0.66, -r * 0.66, r * 1.32, r * 1.32], { color: o.rim || '#C9CDD2', shade: 0.5, hi: 0.6, light: LIGHT });
  ctx.fillStyle = '#3B3F46'; for (let i = 0; i < 5; i++) { const a = rot + (i / 5) * TAU; ctx.save(); ctx.rotate(a); ctx.beginPath(); ctx.moveTo(r * 0.16, -r * 0.09); ctx.lineTo(r * 0.6, -r * 0.18); ctx.arc(0, 0, r * 0.6, -0.3, 0.3); ctx.lineTo(r * 0.16, r * 0.09); ctx.closePath(); ctx.fill(); ctx.restore(); }
  ctx.fillStyle = '#9EA4AC'; ctx.beginPath(); ctx.arc(0, 0, r * 0.15, 0, TAU); ctx.fill(); ctx.restore();
};
/** top-view car sprite (cached), pointing up (−y) */
S7.carTop = (v) => MG.cache('s7cartop:' + v, 90, 180, (x) => { const cols = [P.sol, P.azulejo, P.rojo, '#F4EEE0', '#2E2A2C', P.silver, P.oliva, P.terracota]; const c = cols[v % cols.length]; const body = MG.path.rr(10, 8, 70, 164, 26); x.fillStyle = 'rgba(30,20,30,0.35)'; x.fillRect(16, 16, 70, 160); MG.fx.volume(x, body, [10, 8, 70, 164], { color: c, shade: 0.35, hi: 0.5, light: [-0.7, -0.5] }); x.fillStyle = '#22354F'; x.beginPath(); x.moveTo(18, 52); x.lineTo(72, 52); x.lineTo(66, 76); x.lineTo(24, 76); x.closePath(); x.fill(); x.beginPath(); x.moveTo(22, 128); x.lineTo(68, 128); x.lineTo(72, 144); x.lineTo(18, 144); x.closePath(); x.fill(); x.fillStyle = 'rgba(255,255,255,0.22)'; x.fillRect(26, 80, 38, 44); x.fillStyle = '#FFF1C8'; x.fillRect(16, 10, 14, 6); x.fillRect(60, 10, 14, 6); x.fillStyle = '#B8322A'; x.fillRect(16, 166, 12, 5); x.fillRect(62, 166, 12, 5); });

// =====================================================================================================
// CHAPTER A — THE CATCH: WATER
// =====================================================================================================
// ---------- A1 · cracked plain, the sun, "2023" ----------
S7.plain = { cam: (t) => { const k = MG.ease.inOutSine(lin(t, 1013.98, 1016.7)); return { x: lerp(-30, 10, k), y: -lerp(430, 300, k), z: lerp(-200, 60, k), pitch: lerp(0.15, 0.1, k), yaw: lerp(0.015, 0.0, k), fov: 50 }; } };
SC.push({
  id: 's07_a1_crack', start: 1013.98, end: 1016.62,
  transIn: { type: TR.heatCrack, dur: 1.0, ease: 'linear' },
  init() {
    const cells = S7.voronoi(46, 30, 10800, 6300, 23, 0.9); this.cells = [];
    for (const c of cells) { const cx = c.site[0] - 5400, cz = c.site[1] + 90; if (Math.abs(cx) > cz * 0.95 + 500) continue; this.cells.push({ pts: c.poly.map((q) => [q[0] - 5400, q[1] + 90]), cx, cz, r: c.r }); }
    this.cells.sort((a, b) => b.cz - a.cz);
    this.sky = MG.cache('s7a1sky', W, H, (x) => { MG.fx.vgrad(x, [[0, '#E9894A'], [0.32, '#F2B36E'], [0.5, '#FBE2B4'], [1, '#FBE2B4']]); MG.tex.over(x, 'blotch', { alpha: 0.08, color: '#8a4a20', scale: 3 }); });
  },
  draw(ctx, t) {
    const cam = S7.plain.cam(t); const f = (H / 2) / Math.tan(MG.deg(cam.fov / 2)); const hy = H / 2 - f * Math.tan(cam.pitch);
    ctx.drawImage(this.sky, 0, hy - 540);
    // sun + heat glow on the horizon
    const sx = 1260, sy = hy - 70; MG.fx.glow(ctx, sx, sy, 620, '#FFE7B0', 0.55); MG.kit.sun(ctx, sx, sy, 150, t, { rays: 0.35, corona: 0.8, halftone: 0.4 });
    // ground: dark crack colour fading into haze
    const g = ctx.createLinearGradient(0, hy, 0, H); g.addColorStop(0, '#E9C79A'); g.addColorStop(0.08, '#B47F55'); g.addColorStop(0.35, C.crackDark); g.addColorStop(1, '#2A1714'); ctx.fillStyle = g; ctx.fillRect(0, hy, W, H - hy);
    const dry = MG.ease.inOutSine(lin(t, 1014.0, 1016.6)); const k = lerp(0.965, 0.84, dry); const th = lerp(6, 16, dry);
    for (const c of this.cells) {
      const pts = c.pts; let cx = 0, cz = 0; for (const p of pts) { cx += p[0]; cz += p[1]; } cx /= pts.length; cz /= pts.length;
      const top = [], side = []; let ok = true; for (const p of pts) { const X = cx + (p[0] - cx) * k, Z = cz + (p[1] - cz) * k; const a = S7.pj(X, -th, Z, cam), b = S7.pj(X, 0, Z, cam); if (a[3] < 20) { ok = false; break; } top.push(a); side.push(b); }
      if (!ok) continue; if (top.every((q) => q[0] < -50) || top.every((q) => q[0] > W + 50) || top.every((q) => q[1] > H + 20)) continue;
      const fog = MG.smoothstep(900, 6200, c.cz); const base = MG.col.mix(MG.col.mix(C.mud, C.mudLight, c.r), '#F1D3A4', fog * 0.85);
      ctx.fillStyle = MG.col.mix('#5A3527', '#C9986A', fog); ctx.beginPath(); side.forEach((q, i) => (i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]))); ctx.closePath(); ctx.fill();
      ctx.fillStyle = base; ctx.beginPath(); top.forEach((q, i) => (i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]))); ctx.closePath(); ctx.fill();
      if (fog < 0.7) { ctx.strokeStyle = `rgba(255,238,205,${0.32 * (1 - fog)})`; ctx.lineWidth = 1.2; ctx.stroke(); }
    }
    // low heat haze over the far plain
    const hz = ctx.createLinearGradient(0, hy - 40, 0, hy + 140); hz.addColorStop(0, 'rgba(251,226,180,0)'); hz.addColorStop(0.35, 'rgba(251,226,180,0.85)'); hz.addColorStop(1, 'rgba(251,226,180,0)'); ctx.fillStyle = hz; ctx.fillRect(0, hy - 40, W, 180);
    // "2023" monument standing on the plain (backlit, long shadow toward camera)
    const rise = MG.ease.out(lin(t, 1014.3, 1015.3)); const q = S7.pj(-560, 0, 1750, cam); const sc = q[2]; const fs = 540 * sc; const bx = q[0], by = q[1];
    if (rise > 0) {
      ctx.save(); MG.text.set(ctx, { font: MG.F.cond, weight: 900, size: fs }); const tw = ctx.measureText('2023').width; ctx.restore();
      // cast shadow
      ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.globalAlpha = 0.55 * rise; ctx.setTransform(1, 0, -0.55, -0.26 * rise, bx - tw / 2, by + 4); ctx.filter = 'blur(3px)'; MG.text.set(ctx, { font: MG.F.cond, weight: 900, size: fs }); ctx.fillStyle = '#4a2630'; ctx.fillText('2023', 0, 0); ctx.restore();
      ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, by + 2); ctx.clip(); const dy = (1 - rise) * fs * 0.78;
      for (let i = 7; i >= 1; i--) MG.text.draw(ctx, '2023', bx + i * 1.6, by + dy - i * 1.1, { font: MG.F.cond, weight: 900, size: fs, color: MG.col.mix('#3A2026', '#6A3E32', i / 7), align: 'center' });
      MG.text.draw(ctx, '2023', bx + 2.5, by + dy - 2.5, { font: MG.F.cond, weight: 900, size: fs, color: '#FFD9A0', align: 'center' });
      MG.text.draw(ctx, '2023', bx, by + dy, { font: MG.F.cond, weight: 900, size: fs, color: '#7A3F33', align: 'center' });
      ctx.restore();
      MG.fx.smoke(ctx, bx, by - 10, t, { n: 7, spread: tw, rise: 12, r: 70 * sc * 2, alpha: 0.4 * (1 - MG.smoothstep(1015.0, 1016.4, t)), color: '#E8C394', seed: 5 });
      S7.mono(ctx, 'sequía · drought', bx, by - fs * 0.86 + dy, t, TW('drought', 1015.8) - 0.1, { align: 'center', color: '#5A2E22', size: 24 });
    }
    S7.shimmer(ctx, t, hy - 160, hy + 170, 3 + dry * 4, {});
    // a dry olive branch swings into the foreground (rack-focus hand-off)
    const fb = MG.ease.out(lin(t, 1016.05, 1016.95)); if (fb > 0) { ctx.save(); ctx.filter = 'blur(10px)'; S7.branch(ctx, t, { x: lerp(2300, 1080, fb), y: lerp(-500, -120, fb), s: 1.05, rot: 0.25, sway: 0.3 }); ctx.restore(); }
  },
  post: { grade: 'heat', vignette: 0.4, grain: 0.05 },
});

// ---------- A2 · olive branch, the shade takes half the harvest ----------
SC.push({
  id: 's07_a2_olive', start: 1016.62, end: 1018.2,
  transIn: { type: 'blur', dur: 0.55, amount: 18 },
  init() {
    this.bg = MG.cache('s7a2bg', W, H, (x) => {
      MG.fx.vgrad(x, [[0, '#EFB878'], [0.5, '#F8E1B8'], [0.62, '#EBCB98'], [1, '#C9A06A']]);
      x.fillStyle = '#D8B587'; x.beginPath(); x.moveTo(0, 560); for (let xx = 0; xx <= W; xx += 20) x.lineTo(xx, 540 + MG.fbm(xx * 0.003, 4, 3) * 50); x.lineTo(W, H); x.lineTo(0, H); x.closePath(); x.fill();
      const r = MG.rng(9); for (let row = 0; row < 7; row++) { const y0 = 560 + Math.pow(row / 6, 1.6) * 470; const s = 0.35 + Math.pow(row / 6, 1.5) * 1.5; const gap = 120 + s * 150; const off = r() * gap;
        for (let xx = -gap + off; xx < W + gap; xx += gap * (0.8 + r() * 0.5)) { const tw = s * (60 + r() * 30), th = s * (40 + r() * 22); x.fillStyle = 'rgba(70,40,40,0.22)'; x.beginPath(); x.ellipse(xx + tw * 0.8, y0 + th * 0.9, tw * 1.2, th * 0.25, 0, 0, TAU); x.fill(); x.fillStyle = '#5B4636'; x.fillRect(xx - 4 * s, y0, 9 * s, th * 0.9);
          for (let k = 0; k < 5; k++) { x.fillStyle = MG.col.mix(MG.col.mix('#7F8B55', '#4E5A30', r()), '#D9C49A', Math.max(0, 0.5 - row * 0.09)); x.beginPath(); x.ellipse(xx + (r() - 0.5) * tw, y0 - th * 0.6 + (r() - 0.5) * th * 0.6, tw * (0.45 + r() * 0.3), th * (0.45 + r() * 0.25), 0, 0, TAU); x.fill(); } } }
    });
    this.bgB = MG.blurred(this.bg, 12);
  },
  draw(ctx, t) {
    const z = lerp(1.0, 1.06, MG.ease.inOutSine(lin(t, 1016.6, 1018.3))); const hh = MG.cam.handheld(t, 3, 4);
    ctx.save(); ctx.translate(960 + hh.dx, 540 + hh.dy); ctx.scale(z, z); ctx.translate(-960, -540);
    MG.sprite(ctx, this.bgB, 960, 540, { ax: 0.5, ay: 0.5 });
    // the shade divide sweeps in from the right and stops at the half
    const dv = lerp(2400, 990, MG.ease.inOutCubic(lin(t, TW('half', 1016.8) - 0.05, TW('harvest', 1017.3) + 0.15)));
    const ang = MG.deg(-62); const nx = Math.sin(ang), ny = -Math.cos(ang); // normal of divide line
    const side = (x, y) => ((x - dv) * Math.cos(MG.deg(28)) + (y - 540) * Math.sin(MG.deg(28))) > 0; // right of divide
    const tw0 = TW('half', 1016.8); const B = S7.branchGeo(); const bx = 40, by = 150, bs = 1.0, br = 0.08;
    const toScreen = (ol) => { const c = Math.cos(br), s2 = Math.sin(br); const lx = ol.x, ly = ol.y + ol.hang; return [bx + (lx * c - ly * s2) * bs, by + (lx * s2 + ly * c) * bs]; };
    const withered = B.olives.map((ol) => { const p = toScreen(ol); return side(p[0], p[1]); });
    S7.branch(ctx, t, { x: bx, y: by, s: bs, rot: br, sway: 0.8,
      wither: (i) => (withered[i] ? MG.ease.inOutSine(lin(t, tw0 + 0.25 + i * 0.03, tw0 + 0.9 + i * 0.03)) : 0),
      fall: (i) => { if (!withered[i]) return null; const tf = tw0 + 0.75 + (i % 4) * 0.13; const u = Math.max(0, t - tf); return { dy: 0.5 * 2600 * u * u, rot: u * 2.5 * (i % 2 ? 1 : -1), dx: u * 40 }; },
      dryLeaf: (lx) => { const sx2 = bx + lx * bs; return sx2 > dv - 60 ? MG.ease.inOutSine(lin(t, tw0 + 0.3, tw0 + 1.1)) * 0.85 : 0; } });
    // shade over the right half (multiply, violet)
    ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = 'rgba(92,70,110,0.62)'; ctx.translate(dv, 540); ctx.rotate(MG.deg(28)); ctx.fillRect(0, -2000, 4000, 4000); ctx.restore();
    ctx.restore();
    // numbers inside the shade
    const kk = MG.prog(t, TW('harvest', 1017.3), TW('harvest', 1017.3) + 0.5);
    if (kk > 0) { MG.text.reveal(ctx, '−50%', 1440, 820, t, TW('harvest', 1017.3), { font: MG.F.cond, weight: 900, size: 230, color: '#FBEFD9', align: 'center', style: 'rise', by: 'char', stagger: 0.04 }); S7.mono(ctx, 'olive harvest 2023', 1440, 880, t, TW('harvest', 1017.3) + 0.2, { align: 'center', color: '#FBEFD9', size: 22 }); }
    MG.text.reveal(ctx, 'half the', 160, 900, t, tw0 - 0.08, { font: MG.F.serif, italic: true, size: 70, color: P.ink, style: 'blur', by: 'word' });
    MG.text.reveal(ctx, 'harvest', 160, 990, t, TW('harvest', 1017.3) - 0.08, { font: MG.F.display, weight: 800, size: 96, color: P.ink, style: 'rise', by: 'char', stagger: 0.025 });
  },
  post: { grade: 'heat', vignette: 0.36 },
});

// ---------- A3 · a falling olive becomes oil: the price line doubles ----------
SC.push({
  id: 's07_a3_oilprice', start: 1018.2, end: 1020.3,
  transIn: { type: 'push', dir: 'up', dur: 0.5, ease: 'inOutCubic' },
  init() {
    this.paper = MG.tex.paper('#F6E4C4', { seed: 12, light: 0.25 });
    // 2021 → 2024 retail price index of Spanish extra-virgin olive oil (shape only; ≈ doubled by late 2023)
    this.data = [[2021.0, 1.0], [2021.4, 1.02], [2021.8, 1.05], [2022.2, 1.12], [2022.6, 1.28], [2023.0, 1.52], [2023.35, 1.78], [2023.7, 2.0], [2024.0, 2.12], [2024.35, 2.06]];
  },
  draw(ctx, t) {
    ctx.drawImage(this.paper, 0, 0);
    const X = (yr) => lerp(300, 1580, (yr - 2021) / 3.35), Y = (v) => 880 - v * 200; const base = 880;
    // axis + year ticks
    ctx.strokeStyle = 'rgba(30,26,29,0.45)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(260, base); ctx.lineTo(1660, base); ctx.stroke();
    for (const yr of [2021, 2022, 2023, 2024]) { ctx.beginPath(); ctx.moveTo(X(yr), base); ctx.lineTo(X(yr), base + 12); ctx.stroke(); MG.text.draw(ctx, String(yr), X(yr), base + 46, { font: MG.F.mono, weight: 600, size: 24, color: P.ink2, align: 'center', tracking: 0.1 }); }
    // dashed reference at ×1
    ctx.save(); ctx.setLineDash([10, 10]); ctx.strokeStyle = 'rgba(30,26,29,0.35)'; ctx.beginPath(); ctx.moveTo(260, Y(1)); ctx.lineTo(1660, Y(1)); ctx.stroke(); ctx.restore();
    MG.text.draw(ctx, '×1', 220, Y(1) + 10, { font: MG.F.mono, weight: 700, size: 24, color: P.ink2, align: 'right' });
    // the oil drop falls into the start of the line
    const td = lin(t, 1018.2, 1018.55); if (td < 1) { const yy = lerp(-60, Y(1), MG.ease.inQuad(td)); ctx.fillStyle = C.oil; ctx.beginPath(); ctx.moveTo(X(2021), yy - 40); ctx.bezierCurveTo(X(2021) + 26, yy - 4, X(2021) + 22, yy + 22, X(2021), yy + 22); ctx.bezierCurveTo(X(2021) - 22, yy + 22, X(2021) - 26, yy - 4, X(2021), yy - 40); ctx.fill(); ctx.fillStyle = 'rgba(255,250,200,0.7)'; ctx.beginPath(); ctx.ellipse(X(2021) - 7, yy + 2, 5, 9, 0.3, 0, TAU); ctx.fill(); }
    // line + oil area grow
    const p = MG.ease.inOutSine(lin(t, 1018.5, TW('double', 1019.3) + 0.25)); const pts = MG.path.spline(this.data.map(([a, b]) => [X(a), Y(b)]), 10); const sub = MG.path.trim(pts, 0, p);
    const flood = MG.ease.inCubic(lin(t, 1019.85, 1020.32));
    if (sub.length > 1) {
      const wob = (x) => Math.sin(x * 0.03 + t * 4) * 3;
      const area = new Path2D(); area.moveTo(sub[0][0], base); sub.forEach((q) => area.lineTo(q[0], lerp(q[1] + wob(q[0]), -80, flood))); area.lineTo(sub[sub.length - 1][0] + (flood > 0 ? 400 : 0), lerp(sub[sub.length - 1][1], -80, flood)); area.lineTo(sub[sub.length - 1][0] + (flood > 0 ? 400 : 0), base); area.closePath();
      if (flood > 0) { area.moveTo(-50, base + 300); area.lineTo(-50, lerp(base, -80, flood)); area.lineTo(W + 50, lerp(base, -80, flood)); area.lineTo(W + 50, base + 300); area.closePath(); }
      const g = ctx.createLinearGradient(0, Y(2.2), 0, base); g.addColorStop(0, C.oilLight); g.addColorStop(0.4, C.oil); g.addColorStop(1, C.oilDeep); ctx.fillStyle = g; ctx.globalAlpha = 0.92; ctx.fill(area); ctx.globalAlpha = 1;
      ctx.save(); ctx.clip(area); MG.fx.particles(ctx, { n: 40, seed: 31, t, area: [260, 380, 1400, 520], vel: [0, -40], life: 3, size: [2, 5], color: 'rgba(255,248,200,0.8)', alpha: 0.6 }); MG.tex.over(ctx, 'blotch', { alpha: 0.12, color: '#5a4a00' }); ctx.restore();
      MG.fx.ink(ctx, sub.map((q) => [q[0], q[1] + wob(q[0])]), { width: 12, color: '#7A6512', taper: [0, 0] }); MG.fx.ink(ctx, sub.map((q) => [q[0], q[1] + wob(q[0]) - 3]), { width: 3, color: 'rgba(255,250,210,0.85)', taper: [0.05, 0.05] });
      const hd = sub[sub.length - 1]; if (p < 1) { ctx.fillStyle = C.oilLight; ctx.beginPath(); ctx.arc(hd[0], hd[1], 10, 0, TAU); ctx.fill(); }
    }
    // ×2 bracket
    const kb = MG.prog(t, TW('double', 1019.3) - 0.1, TW('double', 1019.3) + 0.4); if (kb > 0 && flood < 0.6) { const bx = 1640; ctx.save(); ctx.globalAlpha = kb * (1 - flood); ctx.strokeStyle = P.rojo; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(bx - 14, Y(1)); ctx.lineTo(bx, Y(1)); ctx.lineTo(bx, lerp(Y(1), Y(2.1), kb)); ctx.lineTo(bx - 14, lerp(Y(1), Y(2.1), kb)); ctx.stroke(); ctx.restore(); MG.text.reveal(ctx, '×2', bx + 30, Y(1.62) + 40, t, TW('double', 1019.3), { font: MG.F.cond, weight: 900, size: 170, color: P.rojo, style: 'drop', by: 'char', alpha: 1 - flood }); }
    S7.mono(ctx, 'olive oil · price at the store', 300, 200, t, 1018.4, { size: 24, alpha: 1 - flood });
    MG.text.reveal(ctx, 'olive oil', 300, 300, t, TW('olive', 1018.3) - 0.05, { font: MG.F.display, weight: 800, size: 92, color: P.ink, style: 'rise', by: 'word', alpha: 1 - flood });
  },
  post: { grade: 'warm', vignette: 0.32 },
});

// ---------- A4 · pull back from inside the bottle: €10 ----------
SC.push({
  id: 's07_a4_bottle', start: 1020.3, end: 1024.25,
  transIn: { type: 'fade', dur: 0.3 },
  init() {
    this.bg = MG.cache('s7a4bg', W, H, (x) => {
      MG.fx.vgrad(x, [[0, '#E9E2D2'], [0.6, '#DCD2BE'], [1, '#C9BBA0']]);
      // upper shelf + blurred bottles behind
      const back = MG.canvas(W, H); const b = back.getContext('2d');
      for (let i = -1; i < 11; i++) { const cx = 40 + i * 190; S7.bottle(b, cx, 400, 420, { label: true, level: 0.96 }); }
      b.fillStyle = '#B9AE98'; b.fillRect(0, 400, W, 26); b.fillStyle = '#F2EDE3'; b.fillRect(0, 404, W, 14);
      x.drawImage(MG.blurred(back, 7), -7 * 2.5, -7 * 2.5);
      const side = MG.canvas(W, H); const s2 = side.getContext('2d'); for (const cx of [300, 560, 1360, 1620]) S7.bottle(s2, cx, 820, 560, { level: 0.97 }); x.drawImage(MG.blurred(side, 3.5), -3.5 * 2.5, -3.5 * 2.5);
      // shelf board & price rail
      x.fillStyle = '#C2B49A'; x.fillRect(0, 820, W, 40); x.fillStyle = '#EDE8DE'; x.fillRect(0, 830, W, 64); x.fillStyle = '#D9D2C2'; x.fillRect(0, 890, W, 12); x.fillStyle = '#8F8574'; x.fillRect(0, 902, W, 178); MG.tex.over(x, 'grain', { alpha: 0.06 });
    });
    this.hero = MG.cache('s7a4hero', 520, 800, (x) => { S7.bottle(x, 260, 760, 640, { level: 0.98 }); });
  },
  draw(ctx, t) {
    const k = MG.ease.cam(lin(t, 1020.3, 1021.3)); const k2 = MG.ease.inOutSine(lin(t, 1021.6, 1024.3));
    const zoom = lerp(5.5, 1, k) * lerp(1, 1.12, k2); const cx = lerp(960, 960, k), cy = lerp(560, 560, k) + lerp(0, 120, k2);
    ctx.save(); MG.cam.apply(ctx, { x: cx, y: cy, zoom, rot: lerp(0.05, 0, k) });
    ctx.drawImage(this.bg, 0, 0);
    MG.fx.contact(ctx, 975, 822, 200, 18, 0.4); ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = 'rgba(80,55,60,0.25)'; ctx.beginPath(); ctx.moveTo(870, 822); ctx.lineTo(1060, 822); ctx.lineTo(1380, 835); ctx.lineTo(1180, 845); ctx.closePath(); ctx.filter = 'blur(8px)'; ctx.fill(); ctx.restore();
    ctx.drawImage(this.hero, 960 - 260, 820 - 760);
    // the shelf tag: old price struck, swings to €10
    const tf = MG.ease.inOutCubic(lin(t, TW('€10', 1022.4) - 0.28, TW('€10', 1022.4) + 0.12)); const swing = MG.jiggle(t, TW('€10', 1022.4) + 0.1, 0.08, 2.2, 3.5);
    S7.tag(ctx, 960, 846, 300, 150, { flip: tf, rot: swing, draw: (x, B, w, h) => {
      if (!B) { MG.text.draw(x, '€5', 0, 96, { font: MG.F.cond, weight: 900, size: 96, color: '#3a3330', align: 'center' }); const st = MG.ease.out(lin(t, 1021.3, 1021.8)); if (st > 0) MG.fx.ink(x, [[-70, 70], [-70 + 140 * st, 52]], { width: 9, color: P.rojo, taper: [0.1, 0.3] }); }
      else { MG.text.draw(x, '€10', 0, 104, { font: MG.F.cond, weight: 900, size: 118, color: P.rojo, align: 'center' }); MG.text.draw(x, '1 L ≈ 1 QUART', 0, 136, { font: MG.F.mono, weight: 700, size: 17, color: '#3a3330', align: 'center', tracking: 0.12 }); }
    } });
    ctx.restore();
    // depth of field: a soft vignette of out-of-focus light
    S7.pool(ctx, 520, 220, 520, '#FFF4DC', 0.25);
    S7.mono(ctx, 'a one-quart bottle', 140, 160, t, TW('roughly', 1020.6), { size: 24 });
  },
  post: { grade: 'warm', vignette: 0.34 },
});

// ---------- A5 · along the shelf to the bread ----------
S7.barra = (ctx, x, y, L, rot = 0, o = {}) => {
  ctx.save(); ctx.translate(x, y); ctx.rotate(rot); const hgt = L * 0.15;
  const body = MG.path.smooth([[-L / 2, 6], [-L * 0.46, -hgt * 0.42], [-L * 0.3, -hgt * 0.5], [0, -hgt * 0.55], [L * 0.3, -hgt * 0.5], [L * 0.46, -hgt * 0.42], [L / 2, 4], [L * 0.45, hgt * 0.38], [0, hgt * 0.46], [-L * 0.45, hgt * 0.38]], true);
  MG.fx.shadow(ctx, body, { dx: 18, dy: 26, blur: 26, color: 'rgba(60,30,20,0.35)' });
  MG.fx.volume(ctx, body, [-L / 2, -hgt * 0.55, L, hgt], { color: '#C98A3E', shadeColor: '#7A4620', shade: 0.55, hi: 0.5, hiColor: '#F5D79A', light: LIGHT, size: hgt * 1.4 });
  for (let i = 0; i < 6; i++) { const cx = -L * 0.36 + i * L * 0.145; const sc = new Path2D(); sc.ellipse(cx, -hgt * 0.12, L * 0.055, hgt * 0.11, -0.45, 0, TAU); ctx.fillStyle = '#EFCB8A'; ctx.fill(sc); ctx.fillStyle = 'rgba(110,60,25,0.55)'; ctx.beginPath(); ctx.ellipse(cx + L * 0.012, -hgt * 0.06, L * 0.05, hgt * 0.05, -0.45, 0, Math.PI); ctx.fill(); }
  ctx.save(); ctx.clip(body); MG.tex.over(ctx, 'grain', { alpha: 0.18 }); ctx.fillStyle = 'rgba(255,250,240,0.35)'; for (let i = 0; i < 70; i++) { ctx.fillRect(-L / 2 + MG.rand(7, i) * L, -hgt * 0.5 + MG.rand(8, i) * hgt * 0.4, 2, 2); } ctx.restore();
  ctx.restore();
};
SC.push({
  id: 's07_a5_bread', start: 1024.25, end: 1028.1,
  transIn: { type: 'push', dir: 'left', dur: 0.6, ease: 'inOutCubic' },
  init() {
    this.bg = MG.cache('s7a5bg', W, H, (x) => {
      MG.fx.vgrad(x, [[0, '#E9E2D2'], [0.6, '#DED3BF'], [1, '#C9BBA0']]);
      // wicker basket with standing barras (soft)
      const back = MG.canvas(W, H); const b = back.getContext('2d'); for (let i = 0; i < 9; i++) S7.barra(b, 1230 + i * 55, 430, 520, -1.35 + i * 0.05);
      b.fillStyle = '#9C7442'; b.beginPath(); b.moveTo(1150, 500); b.lineTo(1780, 500); b.lineTo(1720, 760); b.lineTo(1210, 760); b.closePath(); b.fill(); b.strokeStyle = 'rgba(60,40,20,0.5)'; b.lineWidth = 4; for (let yy = 520; yy < 760; yy += 22) { b.beginPath(); b.moveTo(1160, yy); b.lineTo(1770, yy); b.stroke(); }
      x.drawImage(MG.blurred(back, 6), -15, -15);
      // counter (wood) + kraft paper
      x.fillStyle = '#A6784A'; x.fillRect(0, 760, W, 320); const g = x.createLinearGradient(0, 760, 0, 1080); g.addColorStop(0, 'rgba(255,230,190,0.35)'); g.addColorStop(1, 'rgba(60,30,10,0.35)'); x.fillStyle = g; x.fillRect(0, 760, W, 320); x.strokeStyle = 'rgba(70,40,20,0.25)'; x.lineWidth = 2; for (let i = 0; i < 30; i++) { x.beginPath(); x.moveTo(0, 780 + i * 11 + Math.sin(i) * 4); x.bezierCurveTo(600, 770 + i * 11, 1300, 795 + i * 11, W, 780 + i * 11); x.stroke(); }
      const kp = MG.path.torn(380, 740, 1000, 210, { seed: 5, amp: 4 }); x.save(); x.fillStyle = '#C9A877'; x.translate(0, 0); x.fill(kp); x.clip(kp); MG.tex.over(x, 'fibers', { alpha: 0.7 }); x.restore();
    });
  },
  draw(ctx, t) {
    const hh = MG.cam.handheld(t, 2.5, 8); ctx.save(); ctx.translate(hh.dx, hh.dy); ctx.drawImage(this.bg, 0, 0);
    S7.barra(ctx, 860, 820, 860, -0.05);
    // second barra joins on "doubling"
    const d2 = MG.ease.out(lin(t, TW('doubling', 1026.9) - 0.1, TW('doubling', 1026.9) + 0.45)); if (d2 > 0) S7.barra(ctx, lerp(2400, 900, d2), 905, 860, 0.02);
    // the hand reaches in … and hesitates
    const hr = MG.ease.out(lin(t, TW('Spaniard', 1024.7) - 0.2, TW('Spaniard', 1024.7) + 0.6)); const back = MG.ease.inOutCubic(lin(t, TW('doubling', 1026.9) + 0.05, TW('doubling', 1026.9) + 0.5));
    const hx = lerp(2150, 1430, hr) + back * 160, hy = lerp(560, 650, hr) - back * 30;
    if (hr > 0) { ctx.save(); MG.fx.ink(ctx, [[hx + 40, hy - 10], [hx + 420, hy - 80], [W + 300, hy - 120]], { width: 90, color: '#3E5C7E', taper: [0, 0] }); ctx.fillStyle = '#F4EEE0'; ctx.beginPath(); ctx.ellipse(hx + 50, hy - 10, 26, 52, -0.2, 0, TAU); ctx.fill(); MG.kit.hand(ctx, hx, hy, { pose: back > 0.5 ? 'fist' : 'open', angle: Math.PI / 2 + 0.35 - back * 0.2, s: 2.6, skin: C.skin1, flip: true }); ctx.restore(); }
    // tag on a little stake: ×2
    const tf = MG.ease.inOutCubic(lin(t, TW('doubling', 1026.9) - 0.25, TW('doubling', 1026.9) + 0.15)); const sw = MG.jiggle(t, TW('doubling', 1026.9) + 0.15, 0.07, 2.4, 3.5);
    ctx.strokeStyle = '#6A5038'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(560, 760); ctx.lineTo(560, 610); ctx.stroke();
    S7.tag(ctx, 560, 460, 280, 150, { flip: tf, rot: sw, draw: (x, B) => { if (!B) { MG.text.draw(x, 'BARRA', 0, 58, { font: MG.F.mono, weight: 700, size: 24, color: '#3a3330', align: 'center', tracking: 0.2 }); MG.text.draw(x, 'PAN', 0, 118, { font: MG.F.cond, weight: 900, size: 64, color: '#3a3330', align: 'center' }); } else { MG.text.draw(x, 'BARRA', 0, 52, { font: MG.F.mono, weight: 700, size: 22, color: '#3a3330', align: 'center', tracking: 0.2 }); MG.text.draw(x, '×2', 0, 128, { font: MG.F.cond, weight: 900, size: 104, color: P.rojo, align: 'center' }); } } });
    ctx.restore();
    MG.text.reveal(ctx, 'for a Spaniard, that’s like', 140, 170, t, TW('For', 1024.35), { font: MG.F.serif, italic: true, size: 62, color: P.ink, style: 'blur', by: 'word', stagger: 0.07 });
    MG.text.reveal(ctx, 'bread doubling', 140, 290, t, TW('bread', 1026.6) - 0.06, { font: MG.F.display, weight: 800, size: 104, color: P.ink, style: 'rise', by: 'word', stagger: 0.12 });
  },
  post: { grade: 'warm', vignette: 0.34 },
});

// ---------- A6 · Spain as a glass vessel, almost empty ----------
S7.vesselProj = () => MG.geo.proj('spain', { center: [-3.6, 40.15], scale: 4700, translate: [960, 585] });
S7.vessel = (ctx, t, o = {}) => {
  const pr0 = S7.vesselProj(); const f = S7.spainMain(); if (!S7._vp) { S7._vp = MG.geo.path2d(pr0, f); S7._vb = MG.geo.bbox(pr0, f); } const path = S7._vp, bb = S7._vb;
  const lvl = o.level ?? 0.16; const yTop = bb[1], yBot = bb[1] + bb[3]; const wl = (x) => lerp(yBot, yTop, lvl) + Math.sin(x * 0.012 + t * 2.2) * 5 * (o.slosh ?? 1) + Math.sin(x * 0.031 - t * 3.1) * 2;
  const glass = o.glass ?? 1;
  // back face (thickness) + shadow on paper
  ctx.save(); ctx.globalAlpha = glass; ctx.translate(16, 12); ctx.fillStyle = 'rgba(120,140,150,0.25)'; ctx.fill(path); ctx.restore();
  ctx.save(); ctx.globalAlpha = 0.35 * glass; ctx.filter = 'blur(18px)'; ctx.translate(40, 34); ctx.fillStyle = '#5a4560'; ctx.fill(path); ctx.restore();
  // behind-glass word
  if (o.word) o.word(ctx, false);
  ctx.save(); ctx.clip(path);
  ctx.fillStyle = `rgba(235,246,250,${0.35 * glass})`; ctx.fillRect(bb[0], bb[1], bb[2], bb[3]);
  const wp = new Path2D(); wp.moveTo(bb[0] - 20, yBot + 30); for (let x = bb[0] - 20; x <= bb[0] + bb[2] + 20; x += 12) wp.lineTo(x, wl(x)); wp.lineTo(bb[0] + bb[2] + 20, yBot + 30); wp.closePath();
  ctx.save(); ctx.clip(wp); const g = ctx.createLinearGradient(0, yBot - bb[3] * 0.3, 0, yBot); g.addColorStop(0, C.waterLight); g.addColorStop(1, C.water); ctx.fillStyle = g; ctx.fillRect(bb[0], bb[1], bb[2], bb[3] + 40); if (o.word) o.word(ctx, true); ctx.restore();
  ctx.strokeStyle = 'rgba(255,255,255,0.85)'; ctx.lineWidth = 3; ctx.beginPath(); for (let x = bb[0] - 20; x <= bb[0] + bb[2] + 20; x += 12) (x === bb[0] - 20 ? ctx.moveTo(x, wl(x)) : ctx.lineTo(x, wl(x))); ctx.stroke();
  // glass streaks (light from upper-left)
  ctx.globalAlpha = glass; ctx.globalCompositeOperation = 'screen'; ctx.fillStyle = 'rgba(255,255,255,0.35)'; for (const [x0, w0] of [[0.12, 26], [0.2, 8], [0.62, 14]]) { ctx.save(); ctx.translate(bb[0] + bb[2] * x0, bb[1]); ctx.rotate(0.5); ctx.fillRect(0, -200, w0, bb[3] * 1.6); ctx.restore(); }
  ctx.restore();
  ctx.save(); ctx.globalAlpha = glass; ctx.strokeStyle = 'rgba(255,255,255,0.9)'; ctx.lineWidth = 4; ctx.stroke(path); ctx.strokeStyle = 'rgba(40,60,80,0.55)'; ctx.lineWidth = 1.5; ctx.stroke(path); ctx.restore();
  return { path, bb, wl };
};
SC.push({
  id: 's07_a6_water', start: 1028.1, end: 1032.05,
  init() { this.paper = MG.tex.paper(P.cal, { seed: 4, light: 0.25 }); },
  draw(ctx, t) {
    ctx.drawImage(this.paper, 0, 0);
    const hh = MG.cam.handheld(t, 2, 3); ctx.save(); ctx.translate(hh.dx, hh.dy);
    const wordIn = MG.ease.out(lin(t, 1028.2, 1028.8)); const fs = 330;
    const word = (x, under) => { if (wordIn <= 0) return; MG.text.draw(x, 'WATER', 960 + (under ? 12 : 0), 870 + (under ? 8 : 0) + (1 - wordIn) * 60, { font: MG.F.display, weight: 900, size: fs * (under ? 1.03 : 1), color: under ? '#173E63' : P.ink, align: 'center', alpha: wordIn * (under ? 0.85 : 1) }); };
    const V = S7.vessel(ctx, t, { level: 0.165, word });
    // the drop
    const td = lin(t, 1028.1, 1028.42); const dx = 880; if (td < 1) { const yy = lerp(-40, V.wl(dx), MG.ease.inQuad(td)); ctx.fillStyle = C.water; ctx.beginPath(); ctx.arc(dx, yy, 11, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.moveTo(dx - 10, yy - 3); ctx.lineTo(dx, yy - 30); ctx.lineTo(dx + 10, yy - 3); ctx.fill(); }
    const tr = t - 1028.42; if (tr > 0 && tr < 1.4) { ctx.save(); ctx.strokeStyle = `rgba(255,255,255,${0.8 * (1 - tr / 1.4)})`; ctx.lineWidth = 2.5; for (let k = 0; k < 3; k++) { const rr = (tr - k * 0.15) * 160; if (rr > 0) { ctx.beginPath(); ctx.ellipse(dx, V.wl(dx), rr, rr * 0.18, 0, 0, TAU); ctx.stroke(); } } ctx.restore(); }
    // canary islands, same water level, in their standard inset
    const box = [140, 780, 260, 150]; ctx.save(); ctx.strokeStyle = 'rgba(30,25,20,0.4)'; ctx.setLineDash([6, 5]); ctx.lineWidth = 1.5; ctx.strokeRect(...box); ctx.restore();
    if (!this.can) { const can = MG.geo.region('Canary Islands'); const pc = MG.geo.proj('mercator', { center: [-15.7, 28.4], scale: 1 }); pc.fitExtent([[box[0] + 14, box[1] + 14], [box[0] + box[2] - 14, box[1] + box[3] - 22]], can); this.can = MG.geo.path2d(pc, can); this.canb = MG.geo.bbox(pc, can); }
    ctx.save(); ctx.fillStyle = 'rgba(235,246,250,0.5)'; ctx.fill(this.can); ctx.clip(this.can); ctx.fillStyle = C.waterLight; ctx.fillRect(box[0], this.canb[1] + this.canb[3] * 0.8, box[2], box[3]); ctx.restore(); ctx.strokeStyle = 'rgba(40,60,80,0.6)'; ctx.lineWidth = 1.2; ctx.stroke(this.can);
    MG.text.draw(ctx, 'CANARY ISLANDS', box[0] + 10, box[1] + box[3] - 10, { font: MG.F.mono, size: 13, weight: 500, color: 'rgba(30,25,20,0.7)', tracking: 0.12 });
    ctx.restore();
    MG.text.spoken(ctx, MG.phrase('the single biggest constraint', 1029).words, 960, 165, t, { font: MG.F.serif, italic: true, size: 72, color: P.ink, align: 'center', style: 'blur' });
    S7.mono(ctx, 'on spain’s economy', 960, 222, t, TW('economy', 1031) - 0.2, { align: 'center', size: 24 });
  },
  post: { grade: 'neutral', vignette: 0.3 },
});

// ---------- A7 · the vessel lays down into the map → Barcelona, 2024 ----------
SC.push({
  id: 's07_a7_bcn', start: 1032.05, end: 1036.2,
  init() {
    this.pr0 = S7.vesselProj();
    this.base = S7.cacheMap('a7', this.pr0, { spain: '#E2C793', relief: 0.55, regions: true, land: '#E6D9BE', neigh: ['France', 'Portugal', 'Morocco', 'Algeria', 'Andorra', 'Italy', 'Gibraltar'] });
    this.cat = MG.geo.region('Catalonia');
  },
  draw(ctx, t) {
    const tw = TW('2024', 1032.3); const cam = S7.mapKeys(this.pr0, t, [[1032.55, { c: [-3.6, 40.15], z: 1 }], [1033.75, { c: [1.6, 41.72], z: 3.6 }, 'cam'], [1036.2, { c: [1.75, 41.7], z: 3.9 }, 'linear']]);
    const reveal = MG.ease.out(lin(t, 1032.05, 1032.7));
    ctx.save(); ctx.fillStyle = P.cal; ctx.fillRect(0, 0, W, H); cam.apply(ctx); ctx.globalAlpha = reveal; ctx.drawImage(this.base, 0, 0); ctx.globalAlpha = 1;
    // Catalonia dries & turns heat-orange
    const kc = MG.ease.inOutSine(lin(t, 1033.2, 1034.2)); MG.geo.draw(ctx, this.pr0, this.cat, { fill: MG.col.a('#E8853C', 0.75 * kc), stroke: MG.col.a(P.rojoDeep, kc), width: 2.5 / cam.z });
    if (kc > 0) { ctx.save(); MG.geo.clip(ctx, this.pr0, this.cat); MG.tex.over(ctx, 'blotch', { alpha: 0.2 * kc, color: '#6a2a10', scale: 2 }); ctx.restore(); }
    MG.geo.draw(ctx, this.pr0, MG.geo.country('Spain', '10'), { stroke: MG.kit.map.coast, width: 1.4 / cam.z, alpha: reveal });
    ctx.restore();
    // the glass dissolving into the map
    if (reveal < 1) { ctx.save(); ctx.globalAlpha = 1 - reveal; S7.vessel(ctx, t, { level: lerp(0.165, 0, reveal), glass: 1 - reveal }); ctx.restore(); }
    // labels (screen space)
    const bcn = cam.pt(MG.geo.cities.Barcelona); const tb = TW('Barcelona', 1033.6);
    if (t > tb - 0.1) { MG.geo.pulse(ctx, cam.pt, MG.geo.cities.Barcelona, t, { color: P.rojo, r: 90, rings: 3, alpha: 0.9, width: 3 }); }
    S7.mapLabel(ctx, cam.pt, MG.geo.cities.Barcelona, t, tb - 0.1, 'BARCELONA', { dot: 9, size: 34, dx: 20, dy: 12 });
    S7.mapLabel(ctx, cam.pt, [1.15, 42.05], t, 1033.4, 'CATALONIA', { dot: 0, size: 26, weight: 600, tracking: 0.3, color: P.rojoDeep, style: 'track' });
    // Sau reservoir marker (where we dive next)
    const sau = cam.pt([2.37, 41.97]); const ks = MG.prog(t, 1035.2, 1035.7); if (ks > 0) { ctx.save(); ctx.globalAlpha = ks; ctx.strokeStyle = C.waterDeep; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(sau[0], sau[1], 12, 0, TAU); ctx.stroke(); ctx.fillStyle = C.water; ctx.beginPath(); ctx.arc(sau[0], sau[1], 6, 0, TAU); ctx.fill(); ctx.restore(); }
    // 2024 sits in the sea; the emergency banner
    const p24 = cam.pt([3.75, 42.0]); if (t > tw - 0.2) MG.text.reveal(ctx, '2024', p24[0], p24[1], t, tw - 0.05, { font: MG.F.cond, weight: 900, size: 200, color: MG.col.a(P.ink, 0.9), align: 'center', style: 'rise', by: 'char', stagger: 0.05 });
    const te = TW('emergency', 1035.4); const ke = MG.prog(t, TW('drought', 1034.8) - 0.1, te + 0.2);
    if (ke > 0) { const x0 = bcn[0] + 40, y0 = bcn[1] + 64; ctx.save(); ctx.fillStyle = P.rojo; ctx.fillRect(x0, y0, 560 * ke, 92); ctx.restore(); MG.text.reveal(ctx, 'DROUGHT EMERGENCY', x0 + 22, y0 + 64, t, TW('drought', 1034.8), { font: MG.F.grotesk, weight: 800, size: 50, color: P.cal, style: 'rise', by: 'word', stagger: 0.25 }); }
  },
  post: { grade: 'warm', vignette: 0.3 },
});

// ---------- A8 · Sau reservoir drains to 15 % ----------
SC.push({
  id: 's07_a8_reservoir', start: 1036.2, end: 1040.5,
  transIn: { type: 'zoom', dur: 0.7, x: 1390, y: 470, amount: 2.6, from: 0.75 },
  init() {
    { const pr0 = S7.vesselProj(); const cam = S7.mapKeys(pr0, 1036.2, [[1033.75, { c: [1.6, 41.72], z: 3.6 }], [1036.2, { c: [1.75, 41.7], z: 3.9 }, 'linear']]); const q = cam.pt([2.37, 41.97]); this.transIn.x = q[0]; this.transIn.y = q[1]; }
    this.sky = MG.cache('s7a8sky', W, H, (x) => { MG.fx.vgrad(x, [[0, '#EBAE6E'], [0.45, '#F6DCAE'], [1, '#F6DCAE']]); MG.tex.over(x, 'blotch', { alpha: 0.06, color: '#7a4a20' }); });
    // valley: hills layers
    this.hills = MG.cache('s7a8hills', W, H, (x) => {
      const ridge = (y0, amp, seed, col, f = 0.004) => { x.fillStyle = col; x.beginPath(); x.moveTo(0, H); for (let xx = 0; xx <= W; xx += 10) x.lineTo(xx, y0 + MG.fbm(xx * f, seed, 3) * amp); x.lineTo(W, H); x.closePath(); x.fill(); };
      ridge(330, 120, 3, '#C9B49A'); ridge(400, 110, 7, '#B89A72');
      // valley walls (left & right slopes) with scrub
      x.fillStyle = '#9C7E52'; x.beginPath(); x.moveTo(0, 430); x.bezierCurveTo(260, 450, 420, 640, 560, 860); x.lineTo(0, H); x.closePath(); x.fill();
      x.fillStyle = '#A88A5C'; x.beginPath(); x.moveTo(W, 420); x.bezierCurveTo(1650, 430, 1460, 620, 1300, 860); x.lineTo(W, H); x.closePath(); x.fill();
      const r = MG.rng(5); for (let i = 0; i < 260; i++) { const xx = r() * W, yy = 420 + r() * 300; const onL = xx < 560 - (yy - 430) * 0.2, onR = xx > 1300 + (yy - 430) * 0.1; if (!onL && !onR) continue; x.fillStyle = MG.col.a('#5E6B34', 0.6 + r() * 0.3); x.beginPath(); x.ellipse(xx, yy, 6 + r() * 8, 4 + r() * 5, 0, 0, TAU); x.fill(); }
      MG.tex.over(x, 'grain', { alpha: 0.08 });
    });
    // basin: bathtub rings (exposed sediment)
    this.basin = MG.cache('s7a8basin', W, H, (x) => {
      const bp = new Path2D(); bp.moveTo(180, 400); bp.bezierCurveTo(420, 430, 560, 760, 760, 880); bp.lineTo(1160, 880); bp.bezierCurveTo(1360, 760, 1500, 430, 1760, 400); bp.lineTo(1760, 1100); bp.lineTo(180, 1100); bp.closePath(); x.fillStyle = '#D9C7A4'; x.fill(bp); x.save(); x.clip(bp);
      for (let yy = 400; yy < 900; yy += 16) { x.fillStyle = MG.col.a(MG.col.mix('#E9DCC0', '#B7A280', (yy - 400) / 500), 0.9); x.fillRect(0, yy, W, 9); }
      const cells = S7.voronoi(26, 10, 1400, 160, 7, 0.9); x.translate(260, 730); for (const c of cells) { const pp = S7.shrink(c.poly, 0.88); x.fillStyle = MG.col.mix('#CBB28A', '#A98E68', c.r); x.beginPath(); pp.forEach((q, i) => (i ? x.lineTo(q[0], q[1]) : x.moveTo(q[0], q[1]))); x.closePath(); x.fill(); }
      x.restore(); MG.tex.over(x, 'grain', { alpha: 0.08 });
    });
    this.church = MG.cache('s7a8church', 360, 560, (x) => {
      const st = '#B59E7E', stD = '#7E6A52', stL = '#D6C3A3';
      // nave + apse
      x.fillStyle = stD; x.fillRect(150, 380, 200, 170); x.fillStyle = st; x.fillRect(150, 380, 120, 170); x.fillStyle = '#6E5642'; x.beginPath(); x.moveTo(140, 382); x.lineTo(250, 330); x.lineTo(360, 382); x.closePath(); x.fill();
      // tower
      x.fillStyle = st; x.fillRect(40, 110, 140, 440); x.fillStyle = stD; x.fillRect(150, 110, 30, 440); x.fillStyle = '#6E5642'; x.beginPath(); x.moveTo(30, 112); x.lineTo(110, 40); x.lineTo(190, 112); x.closePath(); x.fill();
      x.fillStyle = '#2E2420'; for (const yy of [160, 270]) for (const xx of [62, 112]) { x.beginPath(); x.moveTo(xx, yy + 60); x.lineTo(xx, yy + 18); x.arc(xx + 14, yy + 18, 14, Math.PI, 0); x.lineTo(xx + 28, yy + 60); x.closePath(); x.fill(); }
      x.strokeStyle = 'rgba(60,45,30,0.35)'; x.lineWidth = 1.5; for (let yy = 120; yy < 550; yy += 18) { x.beginPath(); x.moveTo(40, yy); x.lineTo(180, yy); x.stroke(); }
      x.fillStyle = stL; x.fillRect(40, 110, 10, 440); MG.tex.over(x, 'blotch', { alpha: 0.25, color: '#3a2a18' });
    });
  },
  draw(ctx, t) {
    const z = lerp(1.0, 1.08, MG.ease.inOutSine(lin(t, 1036.2, 1040.6))); ctx.save(); ctx.translate(960, 600); ctx.scale(z, z); ctx.translate(-960, -600 + lerp(0, -20, lin(t, 1036.2, 1040.5)));
    ctx.drawImage(this.sky, 0, 0); ctx.drawImage(this.hills, 0, 0); ctx.drawImage(this.basin, 0, 0);
    const t15 = TW('15', 1038.1); const drain = MG.ease.inOutCubic(lin(t, 1036.4, t15 + 0.15)); const lvlPct = lerp(100, 15, drain);
    const y0 = 880, y100 = 300; const wy = lerp(y100, y0, 1 - lvlPct / 100) ; // waterline
    const wl = (x) => wy + Math.sin(x * 0.02 + t * 1.6) * 2;
    // church (drips as it emerges)
    ctx.drawImage(this.church, 780, 360);
    // water body
    const wp = new Path2D(); wp.moveTo(0, wl(0)); for (let x = 0; x <= W; x += 16) wp.lineTo(x, wl(x)); wp.lineTo(W, H); wp.lineTo(0, H); wp.closePath();
    ctx.save(); ctx.clip(wp); const g = ctx.createLinearGradient(0, wy, 0, wy + 300); g.addColorStop(0, '#6FA3C7'); g.addColorStop(1, '#2C5B80'); ctx.fillStyle = g; ctx.globalAlpha = 0.95; ctx.fillRect(0, wy - 5, W, H); ctx.globalAlpha = 1; ctx.strokeStyle = 'rgba(255,255,255,0.22)'; ctx.lineWidth = 2; for (let k = 0; k < 8; k++) { const yy = wy + 14 + k * 26; ctx.beginPath(); for (let x = 0; x <= W; x += 20) ctx.lineTo(x, yy + Math.sin(x * 0.02 + k + t * 1.3) * 2.5); ctx.stroke(); } ctx.restore();
    // wet band just above the water
    ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = 'rgba(110,90,70,0.35)'; ctx.fillRect(0, wy - 26, W, 26); ctx.restore();
    if (drain > 0.2) MG.fx.particles(ctx, { n: 16, seed: 17, t, area: [790, 380, 150, Math.max(10, wy - 380)], vel: [0, 160], life: 0.8, size: [1.5, 3], color: '#E8F2F8', alpha: 0.7 });
    // stranded rowing boat
    ctx.save(); ctx.translate(1240, 840); ctx.rotate(-0.12); ctx.fillStyle = '#6B4A34'; ctx.beginPath(); ctx.moveTo(-70, 0); ctx.quadraticCurveTo(0, 34, 70, 0); ctx.lineTo(60, -14); ctx.lineTo(-60, -14); ctx.closePath(); ctx.fill(); ctx.fillStyle = '#B8322A'; ctx.fillRect(-60, -18, 120, 5); ctx.restore();
    // dam on the right with gauge
    ctx.fillStyle = '#C9C6BF'; ctx.beginPath(); ctx.moveTo(1590, 240); ctx.lineTo(1920, 210); ctx.lineTo(1920, 1080); ctx.lineTo(1520, 1080); ctx.quadraticCurveTo(1540, 600, 1590, 240); ctx.fill(); ctx.fillStyle = 'rgba(70,60,70,0.25)'; ctx.fillRect(1590, 240, 26, 840);
    ctx.strokeStyle = P.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(1660, y100); ctx.lineTo(1660, y0); ctx.stroke();
    for (let p = 0; p <= 100; p += 25) { const yy = lerp(y0, y100, p / 100); ctx.beginPath(); ctx.moveTo(1660, yy); ctx.lineTo(1690, yy); ctx.stroke(); MG.text.draw(ctx, String(p), 1702, yy + 8, { font: MG.F.mono, weight: 700, size: 22, color: P.ink }); }
    ctx.fillStyle = P.rojo; ctx.beginPath(); ctx.moveTo(1650, wy); ctx.lineTo(1620, wy - 12); ctx.lineTo(1620, wy + 12); ctx.closePath(); ctx.fill(); ctx.fillRect(1590, wy - 2, 70, 4);
    ctx.restore();
    // counter
    S7.mono(ctx, 'catalonia’s reservoirs', 150, 170, t, TW('reservoirs', 1036.9) - 0.2, { size: 24, color: P.ink });
    MG.text.draw(ctx, Math.round(lvlPct) + '%', 150, 400, { font: MG.F.cond, weight: 900, size: 250, color: drain > 0.95 ? P.rojo : P.ink, shadow: { blur: 14, dx: 6, dy: 8, color: 'rgba(60,30,20,0.25)' } });
    S7.mono(ctx, 'of capacity', 156, 450, t, TW('capacity', 1039.6) - 0.2, { size: 26, color: P.ink });
  },
  post: { grade: 'warm', vignette: 0.34 },
});

// ---------- A9 · inside a desalination hall (3D) ----------
SC.push({
  id: 's07_a9_desal', start: 1040.5, end: 1044.05,
  transIn: { type: 'whip', dir: 'left', dur: 0.45 },
  init() {
    const T = THREE; const sc = new T.Scene(); this.sc = sc; sc.background = new T.Color(0xc9d3d9); sc.fog = new T.Fog(0xc9d3d9, 8, 36); sc.environment = MG.three.env();
    const cam = new T.PerspectiveCamera(50, 16 / 9, 0.1, 80); this.cam = cam;
    // floor (polished concrete with a painted walkway)
    const fc = MG.canvas(512, 1024); { const x = fc.getContext('2d'); x.fillStyle = '#b9b7b1'; x.fillRect(0, 0, 512, 1024); MG.tex.over(x, 'blotch', { alpha: 0.25, color: '#6c6a66' }); x.fillStyle = '#5c8a6a'; x.fillRect(150, 0, 212, 1024); x.fillStyle = '#E8B531'; x.fillRect(142, 0, 8, 1024); x.fillRect(362, 0, 8, 1024); x.strokeStyle = 'rgba(60,60,60,0.25)'; x.lineWidth = 2; for (let y = 0; y < 1024; y += 128) { x.beginPath(); x.moveTo(0, y); x.lineTo(512, y); x.stroke(); } }
    const ft = MG.three.canvasTexture(fc); ft.wrapS = ft.wrapT = T.RepeatWrapping; ft.repeat.set(1, 6);
    const floor = new T.Mesh(new T.PlaneGeometry(9, 60), new T.MeshStandardMaterial({ map: ft, roughness: 0.32, metalness: 0.05 })); floor.rotation.x = -Math.PI / 2; floor.position.set(0, 0, 28); sc.add(floor);
    // water channel in the aisle (animated texture)
    const wc = MG.canvas(128, 512); this.wc = wc; this.wt = MG.three.canvasTexture(wc); this.wt.wrapS = this.wt.wrapT = T.RepeatWrapping; this.wt.repeat.set(1, 10); this.drawWater(0);
    const ch = new T.Mesh(new T.PlaneGeometry(0.55, 60), new T.MeshStandardMaterial({ map: this.wt, roughness: 0.15, metalness: 0.1, emissive: 0x0d3550, emissiveIntensity: 0.35 })); ch.rotation.x = -Math.PI / 2; ch.position.set(0, 0.012, 28); sc.add(ch);
    // racks of pressure vessels (instanced) — long white vessels parallel to the walkway, blue end caps
    const SEG = 5, R = 7, DEP = 2, LEN = 6.2; const tubeG = new T.CylinderGeometry(0.19, 0.19, LEN, 18, 1, true); tubeG.rotateX(Math.PI / 2); const capG = new T.CylinderGeometry(0.205, 0.205, 0.18, 20); capG.rotateX(Math.PI / 2);
    const tubeM = new T.MeshStandardMaterial({ color: 0xf1ede4, roughness: 0.35, metalness: 0.0 }); const capM = new T.MeshStandardMaterial({ color: 0x2b63a6, roughness: 0.28, metalness: 0.35 });
    const nT = SEG * R * DEP * 2; const tubes = new T.InstancedMesh(tubeG, tubeM, nT), caps = new T.InstancedMesh(capG, capM, nT * 2); const m = new T.Matrix4(); let i = 0, j = 0;
    for (const s of [-1, 1]) for (let k = 0; k < SEG; k++) for (let r = 0; r < R; r++) for (let d = 0; d < DEP; d++) { const z = 1.5 + k * (LEN + 1.1) + LEN / 2, y = 0.5 + r * 0.56, x = s * (1.75 + d * 0.5); m.makeTranslation(x, y, z); tubes.setMatrixAt(i++, m); m.makeTranslation(x, y, z - LEN / 2); caps.setMatrixAt(j++, m); m.makeTranslation(x, y, z + LEN / 2); caps.setMatrixAt(j++, m); }
    sc.add(tubes, caps);
    // frame posts & headers
    const postM = new T.MeshStandardMaterial({ color: 0x8c949c, roughness: 0.5, metalness: 0.6 }); const postG = new T.BoxGeometry(0.08, 4.3, 0.08); const posts = new T.InstancedMesh(postG, postM, 2 * 2 * 22); i = 0; for (const s of [-1, 1]) for (const xx of [1.5, 2.25]) for (let k = 0; k < 22; k++) { m.makeTranslation(s * xx, 2.15, 1.2 + k * 1.83); posts.setMatrixAt(i++, m); } sc.add(posts); const railG = new T.BoxGeometry(0.06, 0.06, 40); const rails = new T.InstancedMesh(railG, postM, 2 * 4); i = 0; for (const s of [-1, 1]) for (const yy of [0.18, 4.25]) for (const xx of [1.5, 2.25]) { m.makeTranslation(s * xx, yy, 20); rails.setMatrixAt(i++, m); } sc.add(rails);
    const hdrG = new T.CylinderGeometry(0.13, 0.13, 30, 16); hdrG.rotateX(Math.PI / 2); hdrG.translate(0, 0, 0); const hdrM = new T.MeshStandardMaterial({ color: 0x3f7fc2, roughness: 0.3, metalness: 0.35 }); const hdrM2 = new T.MeshStandardMaterial({ color: 0xc9cfd4, roughness: 0.3, metalness: 0.6 });
    for (const s of [-1, 1]) { const a = new T.Mesh(hdrG, hdrM); a.position.set(s * 1.3, 0.3, 16); const b = new T.Mesh(hdrG, hdrM2); b.position.set(s * 1.3, 4.5, 16); sc.add(a, b); }
    // ceiling with light strips, end window
    const ceil = new T.Mesh(new T.PlaneGeometry(14, 60), new T.MeshStandardMaterial({ color: 0x55595e, roughness: 0.9 })); ceil.rotation.x = Math.PI / 2; ceil.position.set(0, 5.4, 28); sc.add(ceil);
    const lsG = new T.BoxGeometry(0.25, 0.05, 1.6); const lsM = new T.MeshBasicMaterial({ color: 0xfff6e4 }); for (let k = 0; k < 12; k++) { const l = new T.Mesh(lsG, lsM); l.position.set(0, 5.35, 1 + k * 3); sc.add(l); }
    const win = new T.Mesh(new T.PlaneGeometry(10, 6), new T.MeshBasicMaterial({ color: 0xfff1d6 })); win.position.set(0, 2.6, 36); sc.add(win);
    sc.add(new T.HemisphereLight(0xfff3df, 0x4a4d55, 0.9)); const dl = new T.DirectionalLight(0xffe0b0, 1.6); dl.position.set(-5, 7, -3); sc.add(dl);
  },
  drawWater(t) { const x = this.wc.getContext('2d'); x.fillStyle = '#2f79ad'; x.fillRect(0, 0, 128, 512); x.strokeStyle = 'rgba(220,240,255,0.55)'; x.lineWidth = 3; for (let k = 0; k < 9; k++) { const yy = ((k * 57 + t * 220) % 512); x.beginPath(); for (let xx = 0; xx <= 128; xx += 8) x.lineTo(xx, yy + Math.sin(xx * 0.08 + k) * 6); x.stroke(); } this.wt.needsUpdate = true; },
  draw(ctx, t) {
    const k = MG.ease.inOutSine(lin(t, 1040.5, 1044.1)); const rise = MG.ease.inCubic(lin(t, 1043.35, 1044.1));
    this.cam.position.set(0.12 * Math.sin(t * 0.7), lerp(1.55, 7.5, rise), lerp(-1.0, 4.0, k)); this.cam.lookAt(0.3 * Math.sin(t * 0.4), lerp(1.75, 0, rise), this.cam.position.z + lerp(10, 2.5, rise));
    this.drawWater(t);
    const c = MG.three.render(this.sc, this.cam, { slot: 0, w: 1440, h: 810, exposure: 1.05 }); ctx.drawImage(c, 0, 0, W, H);
    MG.fx.glow(ctx, 960, 470, 520, '#FFF1D6', 0.25); { const g = ctx.createLinearGradient(0, 600, 0, H); g.addColorStop(0, 'rgba(20,30,45,0)'); g.addColorStop(1, `rgba(20,30,45,${0.55 * (1 - MG.smoothstep(1043.4, 1044.0, t))})`); ctx.fillStyle = g; ctx.fillRect(0, 600, W, 480); }
    const ta = TW('Europe’s', 1041.8); MG.text.reveal(ctx, 'EUROPE’S LARGEST', 150, 800, t, ta - 0.05, { font: MG.F.mono, weight: 700, size: 30, tracking: 0.25, color: P.cal, style: 'track', by: 'line', shadow: { blur: 10, dy: 3, color: 'rgba(0,0,0,0.5)' }, out: { at: 1043.6, dur: 0.4 } });
    MG.text.reveal(ctx, 'desalination', 140, 920, t, TW('desalination', 1042.8) - 0.08, { font: MG.F.display, weight: 800, size: 132, color: P.cal, style: 'rise', by: 'char', stagger: 0.02, shadow: { blur: 18, dy: 6, color: 'rgba(0,0,0,0.45)' }, out: { at: 1043.6, dur: 0.4 } });
  },
  post: { grade: 'cool', vignette: 0.42, temp: -0.02 },
});

// ---------- A10 · the Tagus → Segura aqueduct ----------
S7.a10 = {
  pr: () => S7._a10pr || (S7._a10pr = MG.geo.proj('spain', { center: [-2.4, 39.35], scale: 12500 })),
  keys: [[1044.05, { c: [-2.45, 39.75], z: 1.0 }], [1047.9, { c: [-2.05, 39.05], z: 1.06 }, 'inOutSine']],
  frame(ctx, t, o = {}) {
    const pr0 = this.pr(); const base = S7.cacheMap('a10', pr0, { spain: '#E4CB97', relief: 0.85, provinces: true, land: '#E2D5BA', neigh: ['Portugal', 'France'] });
    const cam = S7.mapKeys(pr0, t, this.keys); ctx.save(); cam.apply(ctx); ctx.drawImage(base, 0, 0); MG.geo.draw(ctx, pr0, MG.geo.country('Spain', '10'), { stroke: MG.kit.map.coast, width: 1.5 / cam.z }); ctx.restore();
    const flow = -t * 40;
    const riv = (coords, w, prog = 1) => { const r = MG.geo.line(ctx, cam.pt, coords, { color: '#3A6E9E', width: w, progress: prog, smooth: 6 }); MG.fx.line(ctx, r.pts, { color: 'rgba(220,240,255,0.8)', width: w * 0.35, dash: [6, 18], dashOffset: flow, progress: prog }); return r.pts; };
    const tag = riv(MG.geo.rivers.Tagus, 5); const seg = riv(S7.SEGURA, 4.5); riv(S7.MUNDO, 3);
    // aqueduct draws on from the Tagus to the Talave reservoir
    const ta = TW('transfers', 1044.3); const p = o.full ? 1 : MG.ease.inOutSine(lin(t, ta - 0.1, TW('miles', 1046.9)));
    const aq = MG.path.spline(S7.AQUEDUCT.map((c) => cam.pt(c)), 8);
    MG.fx.line(ctx, aq, { color: '#FFFDF6', width: 14, progress: p }); MG.fx.line(ctx, aq, { color: '#2E7BC0', width: 6, progress: p }); MG.fx.line(ctx, aq, { color: 'rgba(230,248,255,0.95)', width: 2.5, dash: [4, 14], dashOffset: flow * 1.6, progress: p });
    if (p > 0 && p < 1) { const hd = MG.path.along(aq, p); MG.fx.glow(ctx, hd[0], hd[1], 40, '#BFE6FF', 0.8); ctx.fillStyle = '#FFFFFF'; ctx.beginPath(); ctx.arc(hd[0], hd[1], 7, 0, TAU); ctx.fill(); }
    for (const c of [S7.AQUEDUCT[0], S7.AQUEDUCT[S7.AQUEDUCT.length - 1]]) { const q = cam.pt(c); ctx.fillStyle = '#2E7BC0'; ctx.beginPath(); ctx.ellipse(q[0], q[1], 12, 8, -0.3, 0, TAU); ctx.fill(); ctx.strokeStyle = '#FFFDF6'; ctx.lineWidth = 2.5; ctx.stroke(); }
    if (o.labels === false) return cam;
    const lo = 1 - MG.smoothstep(1047.35, 1047.85, t); ctx.save(); ctx.globalAlpha = lo;
    MG.text.onPath(ctx, 'TAGUS', tag.slice(Math.floor(tag.length * 0.08), Math.floor(tag.length * 0.5)).reverse(), { font: MG.F.grotesk, weight: 700, size: 26, tracking: 0.3, color: '#24496E', halo: 'rgba(250,244,232,0.9)', haloW: 6, offset: 0.55, dy: -12, reveal: MG.prog(t, 1044.2, 1045.0) });
    MG.text.onPath(ctx, 'SEGURA', seg.slice(Math.floor(seg.length * 0.0), Math.floor(seg.length * 0.42)), { font: MG.F.grotesk, weight: 700, size: 26, tracking: 0.3, color: '#24496E', halo: 'rgba(250,244,232,0.9)', haloW: 6, offset: 0.5, dy: 30, reveal: MG.prog(t, 1045.2, 1046.0) });
    S7.mapLabel(ctx, cam.pt, MG.geo.cities.Madrid, t, 1044.15, 'MADRID', { dot: 7, dotColor: P.ink, size: 24, dx: -14, dy: -14, style: 'fade' });
    S7.mapLabel(ctx, cam.pt, MG.geo.cities.Murcia, t, 1045.6, 'MURCIA', { dot: 7, dotColor: P.ink, size: 24, dx: 14, dy: 26, style: 'fade' });
    const mid = cam.pt([-2.2, 39.62]); const k1 = MG.prog(t, 1045.0, 1045.6); if (k1 > 0) { MG.text.reveal(ctx, 'TAGUS–SEGURA', mid[0] + 60, mid[1] - 20, t, 1045.0, { font: MG.F.grotesk, weight: 800, size: 40, color: P.ink, stroke: 'rgba(250,244,232,0.92)', strokeW: 8, style: 'rise', by: 'word' }); MG.text.reveal(ctx, 'WATER TRANSFER', mid[0] + 62, mid[1] + 18, t, 1045.15, { font: MG.F.mono, weight: 700, size: 24, tracking: 0.2, color: P.ink2, stroke: 'rgba(250,244,232,0.92)', strokeW: 6, style: 'track', by: 'line' }); }
    // ruler parallel to the aqueduct
    const kr = MG.prog(t, TW('hundreds', 1046.4) - 0.1, TW('hundreds', 1046.4) + 0.5); if (kr > 0) { const a = cam.pt([-2.833, 40.366]), b = cam.pt([-1.86, 38.52]); const dx = b[0] - a[0], dy = b[1] - a[1]; const L = Math.hypot(dx, dy); const nx = -dy / L, ny = dx / L; const off = 175; const A2 = [a[0] + nx * off, a[1] + ny * off], B2 = [lerp(a[0], b[0], kr) + nx * off, lerp(a[1], b[1], kr) + ny * off];
      ctx.save(); ctx.strokeStyle = P.rojo; ctx.lineWidth = 3; ctx.setLineDash([2, 8]); ctx.beginPath(); ctx.moveTo(A2[0], A2[1]); ctx.lineTo(B2[0], B2[1]); ctx.stroke(); ctx.setLineDash([]); for (const E of [A2, B2]) { ctx.beginPath(); ctx.moveTo(E[0] - nx * 14, E[1] - ny * 14); ctx.lineTo(E[0] + nx * 14, E[1] + ny * 14); ctx.stroke(); } ctx.restore();
      const m = [lerp(A2[0], B2[0], 0.5) + nx * 48, lerp(A2[1], B2[1], 0.5) + ny * 48]; MG.text.reveal(ctx, '286 km · 178 mi', m[0], m[1], t, TW('hundreds', 1046.4) + 0.15, { font: MG.F.mono, weight: 800, size: 30, color: P.rojo, align: 'center', stroke: 'rgba(250,244,232,0.92)', strokeW: 8, style: 'track', by: 'line' }); }
    ctx.restore(); return cam;
  },
};
SC.push({
  id: 's07_a10_transfer', start: 1044.05, end: 1047.9,
  transIn: { type: 'fade', dur: 0.55 },
  draw(ctx, t) { S7.a10.frame(ctx, t); },
  post: { grade: 'warm', vignette: 0.3 },
});

// ---------- A11 · the map tilts into a landscape: MORE ROCK THAN WATER … only hotter ----------
S7._rockWord = (word, size, o) => {
  word = MG.tr(word);
  const key = `s7rockw:${word}:${size}:${o.kind || 'rock'}`; if (S7[key]) return S7[key];
  const meas = MG.canvas(10, 10).getContext('2d'); MG.text.set(meas, { font: MG.F.display, weight: 900, size }); const w = Math.ceil(meas.measureText(word).width) + 40, h = Math.ceil(size * 1.05);
  const mk = (fill) => { const c = MG.canvas(w, h); const x = c.getContext('2d'); MG.text.set(x, { font: MG.F.display, weight: 900, size }); x.fillStyle = '#000'; x.fillText(word, 20, size * 0.86); x.globalCompositeOperation = 'source-in'; fill(x, w, h); return c; };
  const r = MG.rng(word.length * 7 + size);
  const cracks = (x, col, n, wd) => { x.strokeStyle = col; x.lineWidth = wd; for (let i = 0; i < n; i++) { let px = r() * w, py = r() * h * 0.3; x.beginPath(); x.moveTo(px, py); for (let k = 0; k < 7; k++) { px += (r() - 0.5) * size * 0.25; py += size * 0.13; x.lineTo(px, py); } x.stroke(); } };
  let face, dark;
  if ((o.kind || 'rock') === 'rock') {
    face = mk((x) => { const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, '#C9B391'); g.addColorStop(0.55, '#9C8466'); g.addColorStop(1, '#6E5A46'); x.fillStyle = g; x.fillRect(0, 0, w, h); x.globalCompositeOperation = 'source-atop'; x.globalAlpha = 0.55; x.fillStyle = x.createPattern(MG.tex.blotch(512, 6, 33, '#3a2a1c'), 'repeat'); x.fillRect(0, 0, w, h); x.globalAlpha = 0.35; x.fillStyle = x.createPattern(MG.tex.lines(5, 1, '#4a3a2a', -30), 'repeat'); x.fillRect(0, 0, w, h); x.globalAlpha = 1; cracks(x, 'rgba(40,24,16,0.85)', 9, Math.max(1.5, size * 0.012)); x.fillStyle = 'rgba(255,235,200,0.35)'; x.fillRect(0, 0, w, h * 0.12); });
    dark = mk((x) => { x.fillStyle = '#4A3A30'; x.fillRect(0, 0, w, h); });
  } else {
    face = mk((x) => { const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, 'rgba(170,210,235,0.55)'); g.addColorStop(0.7, 'rgba(110,170,210,0.6)'); g.addColorStop(0.71, 'rgba(60,130,190,0.95)'); g.addColorStop(1, 'rgba(40,100,160,0.95)'); x.fillStyle = g; x.fillRect(0, 0, w, h); x.globalCompositeOperation = 'source-atop'; x.strokeStyle = 'rgba(255,255,255,0.8)'; x.lineWidth = 3; x.beginPath(); for (let xx = 0; xx <= w; xx += 10) x.lineTo(xx, h * 0.705 + Math.sin(xx * 0.05) * 3); x.stroke(); });
    dark = mk((x) => { x.fillStyle = 'rgba(40,80,120,0.5)'; x.fillRect(0, 0, w, h); });
  }
  const dry = (o.kind === 'water') ? mk((x) => { x.fillStyle = '#B9A383'; x.fillRect(0, 0, w, h); x.globalCompositeOperation = 'source-atop'; x.fillStyle = x.createPattern(MG.tex.blotch(512, 5, 21, '#5a3a20'), 'repeat'); x.globalAlpha = 0.5; x.fillRect(0, 0, w, h); x.globalAlpha = 1; const cells = S7.voronoi(Math.ceil(w / (size * 0.18)), 4, w, h, 5, 0.9); x.strokeStyle = 'rgba(50,28,20,0.9)'; x.lineWidth = Math.max(2, size * 0.02); for (const c of cells) { x.beginPath(); c.poly.forEach((q, i) => (i ? x.lineTo(q[0], q[1]) : x.moveTo(q[0], q[1]))); x.closePath(); x.stroke(); } }) : null;
  return (S7[key] = { face, dark, dry, w, h, base: size * 0.86, size });
};
/** a word standing on the ground at screen base (x,y) with pixel cap size px; rise 0..1 */
S7.standWord = (ctx, Wd, x, y, px, rise, o = {}) => {
  if (rise <= 0) return; const s = px / Wd.size; const ww = Wd.w * s, hh = Wd.h * s; const left = x - ww / 2, top = y - Wd.base * s + (1 - rise) * Wd.base * s;
  // ground shadow (light from upper-left behind → shadow to lower-right)
  ctx.save(); ctx.globalAlpha = 0.5 * rise * (o.shadow ?? 1); ctx.globalCompositeOperation = 'multiply'; ctx.setTransform(s, 0, -0.9 * s, -0.22 * s * rise, left, y + 2); ctx.filter = 'blur(4px)'; ctx.drawImage(Wd.dark, 0, -Wd.base); ctx.restore();
  ctx.save(); ctx.beginPath(); ctx.rect(-100, -100, W + 200, y + 100 + 1); ctx.clip();
  const vx = (o.vp ? o.vp[0] : 960) - x, vy = (o.vp ? o.vp[1] : 300) - y; const L = Math.hypot(vx, vy) || 1; const d = (o.depth ?? 0.06) * px;
  for (let i = 6; i >= 1; i--) ctx.drawImage(Wd.dark, left + (vx / L) * d * i / 6, top + (vy / L) * d * i / 6, ww, hh);
  ctx.globalAlpha = o.alpha ?? 1; ctx.drawImage(Wd.face, left, top, ww, hh);
  if (o.dry && Wd.dry) { ctx.globalAlpha = o.dry; ctx.drawImage(Wd.dry, left, top, ww, hh); }
  ctx.restore();
};
SC.push({
  id: 's07_a11_rock', start: 1047.9, end: 1054.15,
  init() {
    // a frozen copy of A10's last frame (without labels) becomes the ground texture
    this.ground = MG.cache('s7a11ground', W, H, (x) => { S7.a10.frame(x, 1047.9, { labels: false, full: true }); });
    this.sky = MG.cache('s7a11sky', W, H, (x) => { MG.fx.vgrad(x, [[0, '#E9A46A'], [0.5, '#F6D8A8'], [1, '#F9E7C6']]); });
    this.hot = MG.cache('s7a11hot', W, H, (x) => { MG.fx.vgrad(x, [[0, '#C8452A'], [0.45, '#EE7B36'], [1, '#F8C27A']]); });
    this.f = (H / 2) / Math.tan(MG.deg(20));
  },
  cam(t) { const k = MG.ease.inOutCubic(lin(t, 1047.95, 1049.6)); const D = this.f; return { x: 0, y: -lerp(D, 230, k), z: lerp(0, -950, MG.ease.inOutSine(k)), pitch: lerp(Math.PI / 2, 0.1407, k), yaw: 0, roll: 0, fov: 40 }; },
  draw(ctx, t) {
    const cam = this.cam(t); const hy = H / 2 - this.f * Math.tan(cam.pitch); const tilt = lin(t, 1047.95, 1049.55);
    const heat = MG.ease.inOutSine(lin(t, TW('Only', 1051.6) - 0.2, TW('hotter', 1052.7) + 0.4));
    // sky (only visible once tilted)
    const push = MG.ease.inOutCubic(lin(t, 1053.5, 1054.15)); const SUN = [960, 230]; ctx.save(); if (push > 0) { const zz = lerp(1, 1.7, push); ctx.translate(960, lerp(SUN[1], 540, push)); ctx.scale(zz, zz); ctx.translate(-SUN[0], -SUN[1]); }
    ctx.fillStyle = '#E4CB97'; ctx.fillRect(0, Math.max(0, hy), W, H);
    if (tilt > 0.3) { ctx.drawImage(this.sky, 0, Math.min(0, hy - H * 0.55)); if (heat > 0) { ctx.save(); ctx.globalAlpha = heat; ctx.drawImage(this.hot, 0, Math.min(0, hy - H * 0.55)); ctx.restore(); } }
    else { ctx.fillStyle = '#E4CB97'; ctx.fillRect(0, 0, W, H); }
    // the sun rises behind the words when it gets hotter
    const sunR = lerp(120, 190, heat); const sunY = lerp(hy + 140, 230, MG.ease.out(lin(t, 1051.4, 1053.2))); if (tilt > 0.6) { ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, hy + 2); ctx.clip(); MG.fx.glow(ctx, 960, sunY, 700, '#FFD08A', 0.35 + 0.35 * heat); MG.kit.sun(ctx, 960, sunY, sunR, t, { rays: 0.3 + 0.4 * heat, corona: 0.9, color: MG.col.mix(P.sol, '#F26A2E', heat), deep: MG.col.mix(P.solDeep, '#B8322A', heat) }); ctx.restore(); }
    // the map lying on the ground
    MG.persp.ground(ctx, this.ground, { w: 1920, h: 1080, x: 0, z: 0, y: 0 }, cam, 14);
    // haze over the far edge
    if (tilt > 0.25) { const ye = S7.pj(0, 0, 540, cam)[1]; const a = MG.smoothstep(0.25, 0.7, tilt); const hc = MG.col.mix('#F6D8A8', '#F49A55', heat); const top = Math.min(hy - 30, ye - 60); const g = ctx.createLinearGradient(0, top, 0, ye + 70); g.addColorStop(0, MG.col.a(hc, a)); g.addColorStop(Math.max(0.01, (ye - top) / (ye + 70 - top)), MG.col.a(hc, a)); g.addColorStop(1, MG.col.a(hc, 0)); ctx.fillStyle = g; ctx.fillRect(0, top, W, ye + 70 - top); }
    // words rising like rock out of the plateau
    const rows = [{ w: 'MORE', x: -168, z: -254, s: 104, t0: TW('more', 1049.7) }, { w: 'ROCK', x: 168, z: -254, s: 104, t0: TW('rock', 1050.1) }, { w: 'THAN', x: -262, z: 380, s: 150, t0: TW('than', 1050.4) }, { w: 'WATER', x: 300, z: 380, s: 150, t0: TW('water', 1050.7), kind: 'water' }];
    if (MG.LANG === 'fr') for (const [A, B, gap] of [[rows[0], rows[1], 0.3], [rows[2], rows[3], 0.06]]) { const wa = S7._rockWord(A.w, 220, { kind: A.kind }).w / 220, wb = S7._rockWord(B.w, 220, { kind: B.kind }).w / 220; const sc = S7.pj(0, 0, A.z, cam)[2] || 1; const s = Math.min(A.s, 1640 / ((wa + wb + gap) * sc)); A.s = B.s = s; const T = (wa + wb + gap) * s; A.x = -T / 2 + wa * s / 2; B.x = T / 2 - wb * s / 2; }
    for (const R of [...rows].reverse()) { const q = S7.pj(R.x, 0, R.z, cam); if (q[3] < 50) continue; const px = R.s * q[2]; const Wd = S7._rockWord(R.w, 220, { kind: R.kind }); const rise = MG.ease.out(lin(t, R.t0 - 0.12, R.t0 + 0.4)); const dry = R.kind ? MG.ease.inOutSine(lin(t, TW('water', 1050.7) + 0.55, TW('Only', 1051.6) + 0.5)) : 0;
      S7.standWord(ctx, Wd, q[0], q[1], px, rise, { vp: [960, hy], dry, depth: 0.07 });
      if (rise > 0 && rise < 1) MG.fx.smoke(ctx, q[0], q[1], t, { n: 5, spread: Wd.w * px / 220, rise: 20, r: 60, alpha: 0.45 * (1 - rise), color: '#D8BD90', seed: R.w.length }); }
    if (heat > 0) S7.shimmer(ctx, t, hy - 260, hy + 380, heat * 7, { step: 4 });
    if (push > 0) { ctx.save(); ctx.globalAlpha = MG.smoothstep(0.15, 0.8, push); const g = ctx.createLinearGradient(0, 300, 0, H); g.addColorStop(0, 'rgba(247,160,80,0.6)'); g.addColorStop(0.35, 'rgba(240,120,60,1)'); g.addColorStop(1, 'rgba(220,90,50,1)'); ctx.fillStyle = g; ctx.fillRect(0, 300, W, H); ctx.restore(); ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, H); ctx.clip(); MG.kit.sun(ctx, 960, sunY, sunR, t, { rays: 0.7, corona: 0.9, color: '#F26A2E', deep: '#B8322A' }); ctx.restore(); }
    // lead-in and heat word
    MG.text.spoken(ctx, MG.phrase('The same old problem', 1048).words, 960, 160, t, { font: MG.F.serif, italic: true, size: 72, color: P.ink, align: 'center', style: 'blur', out: { at: TW('Only', 1051.6) - 0.3, dur: 0.4 } });
    const th = TW('hotter', 1052.7); if (t > th - 0.2) { const k = MG.prog(t, th - 0.1, th + 0.3); ctx.save(); ctx.globalAlpha = 1 - MG.smoothstep(1053.62, 1053.95, t); const H1 = MG.tr('HOTTER,'), H2 = MG.tr('TOO.'); ctx.save(); MG.text.set(ctx, { font: MG.F.heat, size: 150 }); const tw0 = ctx.measureText(H1 + ' ' + H2).width; ctx.restore(); const HS = Math.min(150, 150 * (MG.LANG === 'fr' ? 1150 : 1720) / tw0), tw = tw0 * HS / 150; const x0 = 960 - tw / 2, y0 = 250;
      MG.text.reveal(ctx, 'HOTTER,', x0, y0 - 20, t, th - 0.08, { font: MG.F.heat, size: HS, color: '#FFF2DC', style: 'rise', by: 'char', stagger: 0.03, shadow: { blur: 22, dy: 8, color: 'rgba(120,20,10,0.45)' } });
      ctx.save(); MG.text.set(ctx, { font: MG.F.heat, size: HS }); const w1 = ctx.measureText(H1 + ' ').width; ctx.restore();
      MG.text.reveal(ctx, 'TOO.', x0 + w1, y0 - 20, t, TW('too', 1053.1) - 0.06, { font: MG.F.heat, size: HS, color: '#FFF2DC', style: 'rise', by: 'char', stagger: 0.04, shadow: { blur: 22, dy: 8, color: 'rgba(120,20,10,0.45)' } });
      // melting drips under the letters
      ctx.save(); ctx.fillStyle = '#FFF2DC'; for (let i = 0; i < 14; i++) { const dx = x0 + 30 + MG.rand(71, i) * (tw - 60); const L = MG.ease.inQuad(lin(t, th + 0.2 + MG.rand(72, i) * 0.6, th + 1.4 + MG.rand(73, i))) * (20 + MG.rand(74, i) * 50) * k; if (L < 1) continue; ctx.beginPath(); ctx.moveTo(dx - 6, y0 - 4); ctx.lineTo(dx + 6, y0 - 4); ctx.lineTo(dx + 3, y0 + L); ctx.arc(dx, y0 + L, 4, 0, Math.PI); ctx.closePath(); ctx.fill(); } ctx.restore(); ctx.restore(); }
    ctx.restore();
  },
  post: (t) => ({ grade: 'heat', vignette: 0.38, temp: 0.03 * MG.smoothstep(1051.5, 1053, t), bloom: 0.12 * MG.smoothstep(1052, 1054, t) }),
});

// =====================================================================================================
// CHAPTER B — CARS · CHAPTER C — THE PRICE
// =====================================================================================================
// fix the car so wheels sit on the ground line y (wheels behind the body arches)
S7.carSide = (ctx, x, y, L, o = {}) => {
  const s = L / 1000; const col = o.color || P.sol; const wr = 88 * s; ctx.save(); ctx.translate(x, y);
  ctx.fillStyle = 'rgba(40,20,30,0.35)'; ctx.filter = 'blur(12px)'; ctx.beginPath(); ctx.ellipse(40 * s, 2, 600 * s, 22 * s, 0, 0, TAU); ctx.fill(); ctx.filter = 'none';
  const wheels = [[-270 * s, -wr], [240 * s, -wr]]; for (const [wx, wy] of wheels) S7.wheel(ctx, wx, wy, wr, o.spin || 0, { rim: o.rim });
  const body = MG.path.smooth([[-500, -70], [-505, -170], [-470, -230], [-300, -255], [-180, -380], [130, -395], [280, -265], [470, -235], [505, -170], [500, -70], [380, -52], [345, -125], [270, -150], [180, -138], [138, -52], [-150, -52], [-190, -138], [-280, -150], [-358, -125], [-395, -52]].map((q) => [q[0] * s, q[1] * s]), true);
  MG.fx.volume(ctx, body, [-505 * s, -395 * s, 1010 * s, 345 * s], { color: col, shade: 0.4, hi: 0.45, soft: 0.2, light: LIGHT, rim: '#FFF3D6', rimW: 3 });
  const win = MG.path.smooth([[-275, -250], [-170, -360], [120, -372], [245, -262], [60, -250]].map((q) => [q[0] * s, q[1] * s]), true); ctx.fillStyle = '#1F3A5C'; ctx.fill(win); ctx.save(); ctx.clip(win); const g = ctx.createLinearGradient(-200 * s, -380 * s, 100 * s, -240 * s); g.addColorStop(0, 'rgba(200,225,250,0.6)'); g.addColorStop(0.5, 'rgba(200,225,250,0.05)'); g.addColorStop(1, 'rgba(200,225,250,0.25)'); ctx.fillStyle = g; ctx.fillRect(-300 * s, -400 * s, 600 * s, 200 * s); ctx.restore();
  ctx.fillStyle = col; ctx.fillRect(-40 * s, -372 * s, 26 * s, 122 * s);
  ctx.strokeStyle = 'rgba(30,20,20,0.35)'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(-30 * s, -245 * s); ctx.lineTo(-30 * s, -70 * s); ctx.moveTo(262 * s, -250 * s); ctx.lineTo(250 * s, -140 * s); ctx.moveTo(-150 * s, -190 * s); ctx.lineTo(-80 * s, -190 * s); ctx.moveTo(110 * s, -190 * s); ctx.lineTo(180 * s, -190 * s); ctx.stroke();
  ctx.save(); ctx.clip(body); const sg = ctx.createLinearGradient(0, -260 * s, 0, -60 * s); sg.addColorStop(0, 'rgba(255,250,235,0.0)'); sg.addColorStop(0.42, 'rgba(255,250,235,0.55)'); sg.addColorStop(0.47, 'rgba(255,250,235,0.0)'); sg.addColorStop(0.8, 'rgba(60,30,40,0.0)'); sg.addColorStop(1, 'rgba(60,30,40,0.35)'); ctx.fillStyle = sg; ctx.fillRect(-520 * s, -260 * s, 1040 * s, 220 * s); ctx.restore();
  ctx.fillStyle = MG.col.shade(col, 0.35); ctx.beginPath(); ctx.moveTo(210 * s, -262 * s); ctx.lineTo(268 * s, -262 * s); ctx.lineTo(262 * s, -232 * s); ctx.lineTo(214 * s, -236 * s); ctx.closePath(); ctx.fill(); ctx.fillStyle = 'rgba(40,30,30,0.6)'; ctx.fillRect(-110 * s, -205 * s, 46 * s, 9 * s); ctx.fillRect(150 * s, -205 * s, 46 * s, 9 * s);
  ctx.fillStyle = '#FFF1C8'; ctx.beginPath(); ctx.ellipse(470 * s, -200 * s, 26 * s, 14 * s, 0.2, 0, TAU); ctx.fill(); ctx.fillStyle = '#B8322A'; ctx.fillRect(-505 * s, -215 * s, 18 * s, 34 * s);
  ctx.fillStyle = '#2A2426'; ctx.fillRect(-505 * s, -98 * s, 120 * s, 24 * s); ctx.fillRect(385 * s, -98 * s, 120 * s, 24 * s);
  ctx.restore(); return wheels.map(([wx, wy]) => [x + wx, y + wy, wr]);
};

// ---------- B1 · the sun becomes a wheel: a car on the factory floor ----------
SC.push({
  id: 's07_b1_car', start: 1054.15, end: 1056.3,
  transIn: { type: TR.match, dur: 0.35, x: 960, y: 540, ease: 'linear' },
  init() {
    this.bg = MG.cache('s7b1bg', W, H, (x) => {
      MG.fx.vgrad(x, [[0, '#E9ECEC'], [0.62, '#F7F3EA'], [0.63, '#D8D6D0'], [1, '#C4C2BC']]);
      // tall windows with light
      for (let i = 0; i < 7; i++) { const wx = 80 + i * 270; x.fillStyle = '#FFFDF5'; x.fillRect(wx, 80, 200, 420); x.strokeStyle = '#B9BDC2'; x.lineWidth = 6; x.strokeRect(wx, 80, 200, 420); for (let k = 1; k < 4; k++) { x.beginPath(); x.moveTo(wx, 80 + k * 105); x.lineTo(wx + 200, 80 + k * 105); x.stroke(); } x.beginPath(); x.moveTo(wx + 100, 80); x.lineTo(wx + 100, 500); x.stroke(); }
      x.globalCompositeOperation = 'screen'; MG.fx.rays(x, 600, -80, { n: 7, len: 1400, spread: 0.7, dir: 1.15, alpha: 0.16, width: 0.06, seed: 3 }); x.globalCompositeOperation = 'source-over';
      // robot arms (out of focus)
      const arm = (bx, by, fl) => { x.save(); x.translate(bx, by); x.scale(fl, 1); x.fillStyle = '#2E5E95'; x.fillRect(-40, -40, 80, 40); x.beginPath(); x.arc(0, -50, 34, 0, TAU); x.fill(); MG.fx.ink(x, [[0, -50], [60, -230], [210, -260]], { width: 46, color: '#3A6FA8', taper: [0, 0] }); MG.fx.ink(x, [[210, -260], [300, -170]], { width: 28, color: '#3A6FA8', taper: [0, 0.3] }); x.fillStyle = '#E8B531'; x.beginPath(); x.arc(60, -230, 20, 0, TAU); x.fill(); x.restore(); };
      arm(220, 690, 1); arm(1700, 690, -1);
      x.fillStyle = '#E8B531'; x.fillRect(0, 760, W, 8); x.fillRect(0, 1000, W, 10); MG.tex.over(x, 'grain', { alpha: 0.05 });
    });
    this.bgB = MG.blurred(this.bg, 6);
  },
  draw(ctx, t) {
    const k = MG.ease.cam(lin(t, 1054.15, 1055.35)); const roll = 1 - Math.pow(1 - lin(t, 1054.25, 1055.7), 2);
    const carX = 900 + roll * 120, gy = 860; const L = 1150; const s = L / 1000; const wr = 88 * s; const fw = [carX + 240 * s, gy - wr];
    const zs = lerp(323 / (0.66 * wr), 1, k); const cx = lerp(fw[0], 960, k), cy = lerp(fw[1], 560, k);
    ctx.save(); MG.cam.apply(ctx, { x: cx, y: cy, zoom: zs }); MG.sprite(ctx, this.bgB, 960, 540, {}); MG.fx.contact(ctx, carX + 30, gy + 4, 700, 40, 0.25);
    S7.carSide(ctx, carX, gy, L, { color: P.sol, spin: roll * 3.2 });
    ctx.restore();
    S7.mono(ctx, 'and then there are cars', 140, 150, t, TW('cars', 1055.3) - 0.3, { size: 26, color: P.ink });
  },
  post: { grade: 'neutral', vignette: 0.3 },
});

// ---------- B2 · Europe prism map → Spain's factories ----------
S7.CARS = [['Germany', 4.11], ['Spain', 2.45], ['France', 1.51], ['Czechia', 1.4], ['Slovakia', 1.08], ['United Kingdom', 1.03], ['Italy', 0.88], ['Romania', 0.51], ['Hungary', 0.5], ['Poland', 0.45], ['Portugal', 0.32], ['Belgium', 0.3], ['Sweden', 0.29]]; // OICA 2023, millions (ordering only; heights are relative)
S7.FACT = [{ n: 'SEAT', sub: 'VOLKSWAGEN GROUP', col: P.rojo, pts: [[1.93, 41.47]], w: 'SEAT', a: 1060.4, lab: [80, -40] }, { n: 'RENAULT', col: '#D99A1E', pts: [[-4.75, 41.62], [-4.51, 41.95]], w: 'Renault', a: 1063.7, lab: [-40, -70], right: true }, { n: 'FORD', col: P.azulejo, pts: [[-0.41, 39.29]], w: 'Ford', a: 1064.4, lab: [90, 20] }, { n: 'STELLANTIS', sub: 'VIGO · ZARAGOZA · MADRID', col: '#2F7A5A', pts: [[-8.74, 42.21], [-1.17, 41.77], [-3.7, 40.34]], w: 'Stellantis', a: 1064.95, lab: [-60, -60], right: true }];
S7.factorySprite = (col) => MG.cache('s7fact:' + col, 90, 70, (x) => { x.fillStyle = 'rgba(40,20,30,0.3)'; x.fillRect(14, 56, 72, 8); x.fillStyle = '#F4EFE6'; x.fillRect(10, 30, 66, 30); x.fillStyle = MG.col.shade('#F4EFE6', 0.25); x.fillRect(58, 30, 18, 30); x.fillStyle = col; for (let i = 0; i < 3; i++) { x.beginPath(); x.moveTo(10 + i * 22, 30); x.lineTo(10 + i * 22, 16); x.lineTo(32 + i * 22, 30); x.closePath(); x.fill(); } x.fillStyle = '#8C8A86'; x.fillRect(66, 4, 7, 28); x.fillStyle = 'rgba(30,40,60,0.6)'; x.fillRect(16, 40, 10, 10); x.fillRect(32, 40, 10, 10); });
SC.push({
  id: 's07_b2_europe', start: 1056.3, end: 1066.05,
  transIn: { type: TR.zoomOut, dur: 0.8, from: 3.6, x: 760, y: 790 },
  init() {
    this.pr0 = MG.geo.proj('conic', { center: [5, 47], scale: 1250 });
    const mart = this.pr0([1.93, 41.47]); this.transIn.x = mart[0]; this.transIn.y = mart[1];
    this.land = MG.cache('s7b2land', W, H, (x) => { x.fillStyle = P.seaLight; x.fillRect(0, 0, W, H); MG.kit.seaBg(x); MG.geo.draw(x, this.pr0, MG.geo.land50, { fill: '#E6DAC0' }); MG.geo.draw(x, this.pr0, MG.geo.borders50, { stroke: 'rgba(58,43,58,0.3)', width: 1 }); });
    const main = (f, minLon) => ({ type: 'Feature', properties: f.properties, geometry: { type: 'MultiPolygon', coordinates: (f.geometry.type === 'MultiPolygon' ? f.geometry.coordinates : [f.geometry.coordinates]).filter((pl) => Math.min(...pl[0].map((q) => q[0])) > minLon) } });
    this.feats = S7.CARS.map(([n, v]) => { let f = n === 'Spain' ? S7.spainMain() : MG.geo.country(n, ['France', 'Portugal'].includes(n) ? '10' : '50'); if (n === 'Portugal' || n === 'France') f = main(f, -10.5); const c = window.d3.geoCentroid(n === 'France' ? MG.geo.country('France', '50') : f); return { n, v, f, cy: this.pr0(c)[1] }; }).sort((a, b) => a.cy - b.cy);
    this.es10 = MG.geo.country('Spain', '10');
  },
  draw(ctx, t) {
    const fly = [[1060.15, { c: [5, 47], z: 1 }], [1061.6, { c: [-3.5, 40.1], z: 4.5 }, 'cam'], [1066.05, { c: [-3.7, 40.1], z: 4.6 }, 'linear']]; const cam = S7.mapKeys(this.pr0, t, fly); const z = cam.z;
    const up = (i) => MG.ease.out(lin(t, 1056.55 + i * 0.07, 1057.5 + i * 0.07)); const down = MG.ease.inOutCubic(lin(t, 1060.2, 1061.3));
    ctx.save(); cam.apply(ctx); ctx.drawImage(this.land, 0, 0); MG.geo.draw(ctx, this.pr0, MG.geo.region('Canary Islands'), { fill: P.sol, stroke: 'rgba(30,26,29,0.45)', width: 1 / z });
    // ground shadows of the prisms
    this.feats.forEach((F, i) => { const d = F.v * 34 * up(i) * (F.n === 'Spain' ? lerp(1, 0.32, down) : 1 - down); if (d < 0.5) return; ctx.save(); ctx.translate(d * 0.5 / z, d * 0.25 / z); ctx.globalAlpha = 0.25; ctx.filter = 'blur(6px)'; MG.geo.draw(ctx, this.pr0, F.f, { fill: '#3a2a40' }); ctx.restore(); });
    this.feats.forEach((F, i) => { const dpx = F.v * 34 * up(i) * (F.n === 'Spain' ? lerp(1, 0.32, down) : 1 - down); const dw = dpx / z; const top = F.n === 'Spain' ? P.sol : F.n === 'Germany' ? P.azulejo : '#D9C7A5';
      if (dw < 0.05) { MG.geo.draw(ctx, this.pr0, F.f, { fill: top, stroke: 'rgba(58,43,58,0.4)', width: 1 / z }); return; }
      ctx.save(); ctx.translate(0, -dw); MG.geo.slab(ctx, this.pr0, F.f, { depth: dw, top, side: MG.col.shade(top, 0.45), shadow: false, stroke: 'rgba(30,26,29,0.45)', width: 1.2 / z, edge: false }); ctx.restore(); });
    const spD = 2.45 * 34 * up(1) * lerp(1, 0.32, down);
    if (down > 0) { ctx.save(); ctx.translate(0, -spD / z); ctx.globalAlpha = down; MG.geo.draw(ctx, this.pr0, MG.geo.regionMesh, { stroke: 'rgba(58,43,58,0.35)', width: 1 / z }); ctx.restore(); }
    ctx.restore();
    // labels
    const lab = (ll, t0, a, b, col, dx, dy) => { const p = cam.pt(ll); if (!p) return; const k = MG.prog(t, t0, t0 + 0.5); if (k <= 0) return; ctx.save(); ctx.globalAlpha = k * (1 - down); MG.text.draw(ctx, a, p[0] + dx, p[1] + dy, { font: MG.F.cond, weight: 900, size: 64, color: col, stroke: 'rgba(250,244,232,0.95)', strokeW: 8 }); MG.text.draw(ctx, b, p[0] + dx + 4, p[1] + dy + 34, { font: MG.F.grotesk, weight: 800, size: 30, color: P.ink, stroke: 'rgba(250,244,232,0.95)', strokeW: 7, tracking: 0.08 }); ctx.restore(); };
    lab([10.4, 51.2], TW('Germany', 1059.2) - 0.1, '#1', 'GERMANY', P.azulejo, -40, -175);
    lab([-3.7, 40.2], TW('second-largest', 1057.5) - 0.1, '#2', 'SPAIN', P.solDeep, -60, -110);
    S7.mono(ctx, 'car production · europe', 140, 150, t, 1056.6, { size: 24, color: P.ink, alpha: 1 - down });
    // factories on Spain
    for (const F of S7.FACT) { const t0 = TW(F.w, F.a) - 0.12; const spr = S7.factorySprite(F.col);
      F.pts.forEach((ll, j) => { const p = cam.pt(ll); const k = MG.ease.outBack(clamp((t - t0 - j * 0.1) / 0.45)); if (k <= 0) return; MG.sprite(ctx, spr, p[0], p[1] - spD, { ay: 0.85, scale: 1.7 * k }); });
      const p0 = cam.pt(F.pts[0]); const kk = MG.prog(t, t0 + 0.1, t0 + 0.6); if (kk > 0) { const lx = p0[0] + F.lab[0], ly = p0[1] - spD + F.lab[1]; ctx.save(); ctx.globalAlpha = kk; ctx.strokeStyle = F.col; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(p0[0], p0[1] - spD - 50); ctx.lineTo(lx, ly + 8); ctx.stroke(); MG.text.draw(ctx, F.n, lx + (F.right ? -8 : 8), ly, { font: MG.F.grotesk, weight: 800, size: 40, color: F.col, stroke: 'rgba(250,244,232,0.95)', strokeW: 8, align: F.right ? 'right' : 'left' }); if (F.sub) { const ts = F.n === 'SEAT' ? TW('Volkswagen', 1061.4) - 0.1 : t0 + 0.3; ctx.globalAlpha = kk * MG.prog(t, ts, ts + 0.4); MG.text.draw(ctx, F.n === 'SEAT' ? 'OWNED BY VOLKSWAGEN' : F.sub, lx + (F.right ? -10 : 10), ly + 30, { font: MG.F.mono, weight: 700, size: 19, color: P.ink2, stroke: 'rgba(250,244,232,0.95)', strokeW: 6, tracking: 0.12, align: F.right ? 'right' : 'left' }); } ctx.restore(); } }
    if (down > 0.6) { const a = MG.smoothstep(0.6, 1, down); MG.geo.canaryInset(ctx, [130, 820, 250, 150], { fill: P.sol, alpha: a }); S7.mono(ctx, 'car factories · spain', 140, 150, t, 1061.4, { size: 24, color: P.ink }); }
  },
  post: { grade: 'neutral', vignette: 0.3 },
});

// ---------- B3 · the highway: 2M+ painted on the asphalt … and the shadow of the price ----------
S7.hw = {
  cam(t) { const k = MG.ease.inOutCubic(lin(t, 1071.25, 1072.05)); return { x: 0, y: -lerp(900, 420, k), z: lerp(0, 250, lin(t, 1066.05, 1072.0)) + k * 300, pitch: lerp(0.72, 1.32, k), yaw: 0, roll: 0, fov: 50 }; },
  dist(t, v) { const ts = 1069.1, te = 1070.6; if (t <= ts) return v * (t - 1066.0); const u = clamp((t - ts) / (te - ts)); const S = (u ** 3 - u ** 4 / 2) * (te - ts); return v * (ts - 1066.0) + v * ((Math.min(t, te) - ts) - 0.75 * S) + (t > te ? v * 0.25 * (t - te) : 0); },
};
SC.push({
  id: 's07_b3_highway', start: 1066.05, end: 1072.0,
  transIn: { type: 'zoom', dur: 0.6, x: 960, y: 540, amount: 2.4, from: 0.7 },
  init() {
    { const pr0 = MG.geo.proj('conic', { center: [5, 47], scale: 1250 }); const cam = S7.mapKeys(pr0, 1066.05, [[1061.6, { c: [-3.5, 40.1], z: 4.5 }], [1066.05, { c: [-3.7, 40.1], z: 4.6 }, 'linear']]); const q = cam.pt(MG.geo.cities.Madrid); this.transIn.x = q[0]; this.transIn.y = q[1] - 2.45 * 34 * 0.32; }
    this.paint = MG.cache('s7b3paint', 1800, 2400, (x) => { x.fillStyle = 'rgba(250,248,240,0.92)'; MG.text.set(x, { font: MG.F.cond, weight: 900, size: 980 }); x.textAlign = 'center'; x.fillText(MG.tr('2M+'), 900, 1500); MG.text.set(x, { font: MG.F.cond, weight: 800, size: 200, tracking: 0.04 }); x.textAlign = 'center'; x.fillText(MG.tr('VEHICLES A YEAR'), 900, 1880); x.globalCompositeOperation = 'destination-out'; x.fillStyle = x.createPattern(MG.tex.grain(256, 1, 9), 'repeat'); x.globalAlpha = 0.35; x.fillRect(0, 0, 1800, 2400); });
    this.price = MG.cache('s7b3price', 1800, 1400, (x) => { x.fillStyle = '#2a1830'; MG.text.set(x, { font: MG.F.display, weight: 900, size: 520 }); x.textAlign = 'center'; x.fillText(MG.tr('THE'), 900, 560); x.fillText(MG.tr('PRICE'), 900, 1160); });
    this.cars = []; const r = MG.rng(5); for (let lane = 0; lane < 5; lane++) for (let i = 0; i < 4; i++) this.cars.push({ lane, z0: i * 2250 + r() * 1200, v: 1500 + lane * 160 + r() * 200, spr: Math.floor(r() * 8) });
  },
  draw(ctx, t) {
    const cam = S7.hw.cam(t); const f = (H / 2) / Math.tan(MG.deg(cam.fov / 2)); const hy = H / 2 - f * Math.tan(cam.pitch);
    // ground & road
    MG.fx.vgrad(ctx, [[0, '#F1D6A6'], [1, '#D7B27A']]); if (hy > 0) { MG.fx.vgrad(ctx, [[0, '#F4C98A'], [1, '#F9E7C6']], 0, 0, W, Math.max(1, hy)); }
    const q = (x, z) => S7.pj(x, 0, z, cam); const zN = cam.z + 120, zF = cam.z + 16000;
    const quad = (x0, x1, z0, z1, col) => { const a = q(x0, z0), b = q(x1, z0), c = q(x1, z1), d = q(x0, z1); ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.lineTo(c[0], c[1]); ctx.lineTo(d[0], d[1]); ctx.closePath(); ctx.fill(); };
    quad(-1150, 1150, zN, zF, '#8E8778'); quad(-1000, 1000, zN, zF, '#4B4749');
    ctx.save(); const hg = ctx.createLinearGradient(0, hy, 0, hy + 200); hg.addColorStop(0, 'rgba(244,214,166,0.95)'); hg.addColorStop(1, 'rgba(244,214,166,0)'); ctx.fillStyle = hg; ctx.fillRect(0, hy, W, 200); ctx.restore();
    for (const xl of [-1000, 1000]) quad(xl - 18, xl + 18, zN, zF, '#F4EFE0');
    const off = (cam.z % 700 + 700) % 700; for (let l = 1; l < 5; l++) { const xl = -1000 + l * 400; for (let zz = cam.z - off + 120; zz < cam.z + 9000; zz += 700) quad(xl - 14, xl + 14, zz, zz + 300, '#F4EFE0'); }
    // 2M+ painted on the asphalt (sprayed on from near to far)
    const kp = MG.ease.inOutSine(lin(t, TW('2', 1066.5) - 0.2, TW('vehicles', 1067.5) + 0.2)); if (kp > 0) { const z0 = 1150, z1 = 2700; ctx.save(); const yN = q(0, z0)[1], yF = q(0, z1)[1]; ctx.beginPath(); ctx.rect(0, lerp(yN, yF, kp), W, H); ctx.clip(); MG.persp.ground(ctx, this.paint, { w: 1800, h: z1 - z0, x: 0, z: (z0 + z1) / 2, y: 0 }, cam, 10); ctx.restore(); }
    // cars
    const list = this.cars.map((c) => { const zz = ((c.z0 + S7.hw.dist(t, c.v)) % 9000) + cam.z - 300; return { ...c, zz }; }).sort((a, b) => b.zz - a.zz);
    for (const c of list) { if (c.zz < cam.z + 150) continue; const x = -800 + c.lane * 400; const fr = q(x, c.zz + 240), rr = q(x, c.zz - 240); if (fr[3] < 50) continue; const w = 200 * fr[2]; const len = rr[1] - fr[1]; if (len < 1) continue; ctx.save(); ctx.globalAlpha = 0.35; ctx.fillStyle = '#20141c'; ctx.fillRect(fr[0] - w / 2 + w * 0.18, fr[1] + len * 0.06, w, len); ctx.restore(); ctx.drawImage(S7.carTop(c.spr), fr[0] - w / 2, fr[1], w, len); }
    // the shadow of a crane jib sweeps the road; everything falls into shade
    const ts = TW('Now', 1069.1); const sp = MG.ease.inOutCubic(lin(t, ts - 0.05, ts + 1.3)); if (sp > 0) {
      const ang = MG.deg(28); const pos = lerp(-700, W + 900, sp);
      ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.translate(pos, 540); ctx.rotate(ang); ctx.fillStyle = 'rgba(78,58,98,0.62)'; ctx.fillRect(-4000, -2000, 4000, 4000);
      ctx.fillStyle = 'rgba(40,24,50,0.75)'; ctx.fillRect(-60, -2000, 90, 4000); ctx.strokeStyle = 'rgba(40,24,50,0.75)'; ctx.lineWidth = 16; ctx.beginPath(); for (let yy = -2000; yy < 2000; yy += 150) { ctx.moveTo(-60, yy); ctx.lineTo(-210, yy + 75); ctx.lineTo(-60, yy + 150); } ctx.stroke(); ctx.fillRect(-250, -2000, 50, 4000); ctx.restore();
    }
    // THE PRICE falls on the road as a cast shadow
    const tp = TW('price', 1070.5); const kk = MG.ease.out(lin(t, tp - 0.25, tp + 0.45)); if (kk > 0) { ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.globalAlpha = 0.85 * kk; ctx.filter = 'blur(2px)'; const zc = lerp(1900, 760, kk); MG.persp.ground(ctx, this.price, { w: 1500, h: 760, x: -60, z: zc, y: 0 }, cam, 8); ctx.restore(); }
    S7.mono(ctx, 'the price of all this', 140, 1000, t, TW('price', 1070.5) + 0.2, { size: 26, color: P.cal, alpha: 1 - MG.smoothstep(1071.3, 1071.7, t) });
  },
  post: (t) => ({ grade: 'warm', vignette: lerp(0.3, 0.5, MG.smoothstep(1069.1, 1070.5, t)), sat: lerp(1, 0.85, MG.smoothstep(1069.1, 1070.5, t)) }),
});

// ---------- C2 · 2008 cast in the concrete — and it cracks ----------
S7._deb = (key, txt, font, size, weight) => {
  txt = MG.tr(txt);
  if (S7['deb' + key]) return S7['deb' + key]; const m = MG.canvas(10, 10).getContext('2d'); MG.text.set(m, { font, weight, size }); const w = Math.ceil(m.measureText(txt).width) + 60, h = Math.ceil(size * 1.2);
  const mask = MG.canvas(w, h); { const x = mask.getContext('2d'); MG.text.set(x, { font, weight, size }); x.fillStyle = '#fff'; x.fillText(txt, 30, size * 0.98); }
  const layer = (dx, dy, col) => { const c = MG.canvas(w, h); const x = c.getContext('2d'); x.drawImage(mask, 0, 0); x.globalCompositeOperation = 'destination-out'; x.drawImage(mask, dx, dy); x.globalCompositeOperation = 'source-in'; x.fillStyle = col; x.fillRect(0, 0, w, h); return c; };
  const d = Math.max(3, size * 0.022);
  const floor = MG.canvas(w, h); { const x = floor.getContext('2d'); x.drawImage(mask, 0, 0); x.globalCompositeOperation = 'source-in'; x.fillStyle = '#7F7B76'; x.fillRect(0, 0, w, h); x.fillStyle = x.createPattern(MG.tex.blotch(512, 5, 44, '#2a2830'), 'repeat'); x.globalAlpha = 0.35; x.fillRect(0, 0, w, h); }
  return (S7['deb' + key] = { w, h, floor, shadow: layer(d, d, 'rgba(24,20,30,0.85)'), hi: layer(-d, -d, 'rgba(255,250,240,0.5)'), base: size * 0.98 });
};
SC.push({
  id: 's07_c2_2008', start: 1072.0, end: 1078.2,
  transIn: { type: 'blur', dur: 0.7, amount: 22 },
  init() {
    this.conc = MG.cache('s7c2conc', W, H, (x) => { x.fillStyle = '#A7A49E'; x.fillRect(0, 0, W, H); x.globalAlpha = 0.5; x.fillStyle = x.createPattern(MG.tex.blotch(512, 4, 17, '#5d5a57'), 'repeat'); x.fillRect(0, 0, W, H); x.globalAlpha = 1; const r = MG.rng(3); for (let i = 0; i < 9000; i++) { const px = r() * W, py = r() * H, s = 0.6 + r() * 2.4; x.fillStyle = r() < 0.5 ? `rgba(60,58,60,${0.15 + r() * 0.3})` : `rgba(235,232,225,${0.15 + r() * 0.3})`; x.fillRect(px, py, s, s); } for (let i = 0; i < 260; i++) { x.fillStyle = 'rgba(40,38,40,0.5)'; x.beginPath(); x.ellipse(r() * W, r() * H, 1 + r() * 3, 1 + r() * 2, r() * 3, 0, TAU); x.fill(); } x.strokeStyle = 'rgba(70,66,64,0.25)'; x.lineWidth = 2; for (const yy of [270, 820]) { x.beginPath(); x.moveTo(0, yy); x.lineTo(W, yy + 4); x.stroke(); } });
    this.n = S7._deb('2008', '2008', MG.F.cond, 470); this.p = S7._deb('p01', 'PROBLEM 01', MG.F.mono, 46, 800);
    // crack network starting inside the "0"
    const r = MG.rng(808); const segs = []; const grow = (x, y, a, n, w, d, t0) => { const a0 = a; const pts = [[x, y]]; for (let i = 0; i < n; i++) { a += (r() - 0.5) * 0.8 + (a0 - a) * 0.35; x += Math.cos(a) * (26 + r() * 30); y += Math.sin(a) * (26 + r() * 30); pts.push([x, y]); if (d < 3 && r() < 0.18) grow(x, y, a + (r() < 0.5 ? 1 : -1) * (0.5 + r() * 0.7), Math.floor(n * 0.5), w * 0.6, d + 1, t0 + (i / n) * 0.8); } segs.push({ pts, w, t0 }); };
    grow(880, 470, 0.08, 40, 11, 0, 0); grow(880, 470, Math.PI - 0.06, 38, 10, 0, 0.05); grow(1000, 455, -1.3, 10, 6, 2, 0.3);
    this.segs = segs;
  },
  draw(ctx, t) {
    const z = lerp(1.0, 1.07, MG.ease.inOutSine(lin(t, 1072.0, 1078.2))); const hh = MG.cam.handheld(t, 2.2, 5); const t08 = TW('2008', 1073.25); const sh = MG.cam.shake(t, t08, 6, 7); const sh2 = MG.cam.shake(t, TW('without', 1077.0), 5, 6);
    const tilt = MG.ease.inCubic(lin(t, 1077.4, 1078.3));
    ctx.save(); ctx.translate(960 + hh.dx + sh.dx + sh2.dx, 540 + hh.dy + sh.dy + sh2.dy + tilt * 260); ctx.scale(z, z); ctx.translate(-960, -540);
    ctx.drawImage(this.conc, 0, 0);
    // the numerals press into the concrete
    const kd = MG.ease.out(lin(t, t08 - 0.15, t08 + 0.3)); const N = this.n; const nx = 960 - N.w / 2, ny = 600 - N.base;
    if (kd > 0) { ctx.save(); ctx.globalAlpha = kd; ctx.drawImage(N.floor, nx, ny); ctx.drawImage(N.shadow, nx, ny); ctx.drawImage(N.hi, nx, ny); ctx.restore(); }
    const kp = MG.ease.out(lin(t, 1072.5, 1073.0)); if (kp > 0) { const Pp = this.p; ctx.save(); ctx.globalAlpha = kp * 0.9; ctx.drawImage(Pp.floor, nx + 40, ny - 40); ctx.drawImage(Pp.shadow, nx + 40, ny - 40); ctx.drawImage(Pp.hi, nx + 40, ny - 40); ctx.restore(); }
    // the crack
    const tc = TW('because', 1074.7); const kc = lin(t, tc - 0.1, TW('problems', 1076.6) + 0.3);
    for (const S of this.segs) { const u = clamp((kc - S.t0 * 0.6) / 0.6); if (u <= 0) continue; const sub = MG.path.trim(S.pts, 0, MG.ease.inOutSine(u)); if (sub.length < 2) continue; MG.fx.ink(ctx, sub.map((q2) => [q2[0] + 1.5, q2[1] + 2]), { width: S.w + 3, color: 'rgba(250,246,238,0.45)', taper: [0.05, 0.6] }); MG.fx.ink(ctx, sub, { width: S.w, color: '#1E1A1F', taper: [0.05, 0.6] }); }
    if (kc > 0 && kc < 1.2) MG.fx.particles(ctx, { n: 30, seed: 13, t, area: [300, 520, 1400, 80], vel: [0, 200], gravity: 400, life: 1.2, size: [1, 3.5], color: '#CFCBC4', alpha: 0.8 });
    ctx.restore();
    // cool raking light from the upper-left, shade elsewhere
    ctx.save(); ctx.globalCompositeOperation = 'multiply'; MG.fx.rgrad(ctx, 640, 260, 1500, [[0, 'rgba(255,255,255,1)'], [0.6, 'rgba(160,150,175,1)'], [1, 'rgba(90,80,110,1)']]); ctx.restore();
    S7.mono(ctx, 'you can’t understand spain’s problems without it', 960, 1000, t, TW('understand', 1075.5) - 0.3, { align: 'center', size: 22, color: P.cal, alpha: 1 - tilt });
  },
  post: { grade: 'cool', vignette: 0.45, sat: 0.8 },
});

// =====================================================================================================
// CHAPTER D — THE BOOM (2000s)
// =====================================================================================================
S7.boomSky = () => MG.cache('s7boomsky', W, H, (x) => { MG.fx.vgrad(x, [[0, '#F0A24E'], [0.45, '#F7CF8C'], [0.7, '#FBE6BF'], [1, '#FBE6BF']]); MG.tex.over(x, 'blotch', { alpha: 0.07, color: '#8a4a10', scale: 3 }); });
S7.coinSprite = (r = 40) => MG.cache('s7coin:' + r, r * 2 + 8, r * 2 + 8, (x) => { MG.kit.sun(x, r + 4, r + 4, r, 0, { variant: 'coin', color: '#D9B451' }); x.fillStyle = 'rgba(190,195,201,0.95)'; x.beginPath(); x.arc(r + 4, r + 4, r * 0.62, 0, TAU); x.fill(); MG.text.draw(x, '€', r + 4, r + 4 + r * 0.34, { font: MG.F.display, weight: 800, size: r * 0.95, color: '#5A4A20', align: 'center' }); });
S7.letterBlock = (ch, col) => MG.cache('s7blk:' + ch + col, 150, 160, (x) => { const a = 120, d = 26; x.fillStyle = MG.col.shade(col, 0.35); x.beginPath(); x.moveTo(10 + a, 30); x.lineTo(10 + a + d, 30 - d * 0.6 + 26); x.lineTo(10 + a + d, 30 + a - d * 0.6 + 26); x.lineTo(10 + a, 30 + a); x.closePath(); x.fill(); x.fillStyle = MG.col.light(col, 0.2); x.beginPath(); x.moveTo(10, 30); x.lineTo(10 + d, 30 - d * 0.6 + 26 - 26); x.lineTo(10 + a + d, 30 - d * 0.6); x.lineTo(10 + a, 30); x.closePath(); x.fill(); const f = MG.path.rr(10, 30, a, a, 4); MG.fx.volume(x, f, [10, 30, a, a], { color: col, shade: 0.25, hi: 0.3 }); MG.text.draw(x, ch, 10 + a / 2, 30 + a * 0.82, { font: MG.F.cond, weight: 900, size: 118, color: col === P.cal ? P.ink : P.cal, align: 'center' }); });

// ---------- D1 · tilt up from the slab: the coast fills with cranes, B·O·O·M lands ----------
SC.push({
  id: 's07_d1_boom', start: 1078.2, end: 1083.05,
  transIn: { type: 'push', dir: 'down', dur: 0.7, ease: 'inOutCubic' },
  init() {
    this.far = MG.cache('s7d1far', W, H, (x) => { x.fillStyle = '#B7A2A8'; x.beginPath(); x.moveTo(0, 640); for (let xx = 0; xx <= W; xx += 12) x.lineTo(xx, 600 + MG.fbm(xx * 0.0025, 8, 3) * 90); x.lineTo(W, H); x.lineTo(0, H); x.closePath(); x.fill(); x.fillStyle = '#7FA7C4'; x.fillRect(1150, 664, W - 1150, 30); x.fillStyle = 'rgba(255,255,255,0.5)'; for (let i = 0; i < 40; i++) x.fillRect(1160 + MG.rand(3, i) * 760, 668 + MG.rand(4, i) * 22, 14, 2); x.fillStyle = '#D9C6A0'; x.fillRect(0, 690, W, H - 690); });
    this.fg = MG.cache('s7d1fg', W, 420, (x) => { // hoarding + slab edge
      x.fillStyle = '#9C9890'; x.fillRect(0, 330, W, 90); x.strokeStyle = '#1E1A1F'; x.lineWidth = 6; x.beginPath(); x.moveTo(0, 372); for (let xx = 0; xx < W; xx += 40) x.lineTo(xx, 368 + Math.sin(xx * 0.05) * 6 + (MG.rand(5, xx) - 0.5) * 10); x.stroke();
      for (let i = 0; i < 6; i++) { const px = i * 205; x.fillStyle = i % 2 ? '#EDE6D6' : '#F4EFE3'; x.fillRect(px, 40, 200, 300); x.fillStyle = 'rgba(40,30,30,0.15)'; x.fillRect(px + 196, 40, 6, 300); }
      x.fillStyle = P.rojo; x.fillRect(0, 110, 1220, 150); MG.text.draw(x, '2000s', 60, 238, { font: MG.F.cond, weight: 900, size: 170, color: P.cal }); MG.text.draw(x, 'OBRA · CONSTRUCTION', Math.max(600, 100 + MG.text.width(x, '2000s', { font: MG.F.cond, weight: 900, size: 170 })), 210, { font: MG.F.mono, weight: 700, size: 30, color: P.cal, tracking: 0.25 });
      MG.tex.over(x, 'fibers', { alpha: 0.5 });
    });
    this.blocks = ['B', 'O', 'O', 'M'].map((c, i) => S7.letterBlock(c, [P.sol, P.cal, P.azulejo, P.rojo][i]));
    const r = MG.rng(12); this.farC = []; for (let i = 0; i < 11; i++) this.farC.push({ x: 120 + i * 165 + r() * 60, t0: 1078.5 + r() * 2.2, s: 0.32 + r() * 0.12, rot: r() < 0.5 ? 1 : -1, ph: r() * 6 });
    this.farB = []; for (let i = 0; i < 16; i++) this.farB.push({ x: 60 + i * 120 + r() * 50, t0: 1078.4 + r() * 2.5, f: 5 + Math.floor(r() * 8), w: 70 + r() * 50 });
  },
  draw(ctx, t) {
    const up = MG.ease.cam(lin(t, 1078.2, 1080.4)); const camY = lerp(240, 0, up); const hh = MG.cam.handheld(t, 2, 6);
    ctx.drawImage(S7.boomSky(), 0, 0); MG.kit.sun(ctx, 330, 220 + camY * 0.15, 92, t, { rays: 0.4, corona: 0.6 });
    ctx.save(); ctx.translate(hh.dx * 0.3, camY * 0.3); ctx.drawImage(this.far, 0, 0);
    for (const B of this.farB) { const k = clamp((t - B.t0) / 1.6); if (k <= 0) continue; ctx.save(); ctx.globalAlpha = 0.75; S7.frame(ctx, B.x, 700, B.w * 0.5, B.f, B.f * k, { fh: 16, bays: 3, col: '#E4D8C6' }); ctx.restore(); }
    for (const Cr of this.farC) { const k = MG.ease.out(clamp((t - Cr.t0) / 0.7)); if (k <= 0) continue; ctx.save(); ctx.globalAlpha = 0.8; S7.crane(ctx, Cr.x, 700, Cr.s, { mast: 520 * k, rot: Math.cos(t * 0.4 + Cr.ph) * Cr.rot, col: '#E8B531' }); ctx.restore(); }
    ctx.restore();
    ctx.save(); ctx.translate(hh.dx * 0.6, camY * 0.6);
    // mid buildings & cranes
    const mids = [[360, 6, 0.0], [640, 9, 0.3], [1250, 7, 0.6], [1560, 10, 0.2]]; for (const [bx, fl, o] of mids) S7.frame(ctx, bx, 930, 230, fl, fl * MG.ease.inOutSine(lin(t, 1078.5 + o, 1081.8 + o)), { fh: 40, bays: 4, infill: true });
    const hero = 900; const built = 7 * MG.ease.inOutSine(lin(t, 1078.4, 1081.6)); const roof = S7.frame(ctx, hero, 930, 330, 7, built, { fh: 54, bays: 5, infill: true });
    for (const [cx, o, s, sg] of [[520, 0.2, 0.95, 1], [1400, 0.7, 1.05, -1]]) { const k = MG.ease.out(lin(t, 1078.8 + o, 1079.9 + o)); S7.crane(ctx, cx, 930, s, { mast: 640 * k, rot: sg * Math.cos(t * 0.35 + o * 4), hook: 0.35 + 0.2 * Math.sin(t + o), trolley: 0.6 }); }
    // the hero crane lowers B·O·O·M onto the roof
    const tb = TW('boom', 1082.4); const low = MG.ease.inOutCubic(lin(t, tb - 0.9, tb)); const land = t > tb ? MG.jiggle(t, tb, 0.12, 3, 7) : 0;
    const jy = 930 - 760 * 1.0 - 22; const cableY0 = jy + 14; const loadY = lerp(cableY0 + 120, roof - 150, low);
    S7.crane(ctx, 1180, 930, 1.0, { mast: 760, jib: 620, rot: -1, hook: 0 });
    ctx.strokeStyle = 'rgba(40,30,30,0.8)'; ctx.lineWidth = 2; const hx = 1180 - 620 * 0.47; ctx.beginPath(); ctx.moveTo(hx, cableY0); ctx.lineTo(hx, loadY - 40); ctx.moveTo(hx, loadY - 40); ctx.lineTo(hx - 240, loadY); ctx.moveTo(hx, loadY - 40); ctx.lineTo(hx + 240, loadY); ctx.stroke(); ctx.fillStyle = '#3a3030'; ctx.fillRect(hx - 250, loadY - 6, 500, 10);
    this.blocks.forEach((b, i) => { const bx = hx - 230 + i * 118; const by = loadY + 8; const sq = i === 0 ? 1 : 1; ctx.save(); ctx.translate(bx + 65, by + 75 + land * 40 * (i % 2 ? 1 : -1)); ctx.scale(1 + land * 0.2, 1 - land * 0.2); ctx.drawImage(b, -75, -80, 150 * 0.9, 160 * 0.9); ctx.restore(); });
    if (t > tb && t < tb + 1.2) MG.fx.smoke(ctx, hx, roof - 10, t - tb, { n: 8, spread: 480, rise: 20, r: 90, alpha: 0.5 * (1 - (t - tb) / 1.2), color: '#E8D8BE', seed: 9 });
    ctx.restore();
    // foreground hoarding (parallax, out of focus a touch)
    ctx.save(); ctx.translate(0, 660 + camY * 1.25); MG.sprite(ctx, this.fg, 960, 210, { blur: 1.5 }); ctx.restore();
    MG.text.reveal(ctx, 'an unprecedented construction boom', 960, 130, t, TW('unprecedented', 1080.85) - 0.1, { font: MG.F.serif, italic: true, size: 64, color: P.ink, align: 'center', style: 'blur', by: 'word', stagger: 0.09, out: { at: 1082.85, dur: 0.3 } });
  },
  post: { grade: 'golden', vignette: 0.32 },
});

// ---------- D2 · the fuel: cheap €, tourists, immigrant workers ----------
S7.suitcase = (ctx, x, y, s, col, rot = 0) => { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s); const b = MG.path.rr(-34, -80, 68, 80, 10); MG.fx.volume(ctx, b, [-34, -80, 68, 80], { color: col, shade: 0.35, hi: 0.3, cel: true }); ctx.strokeStyle = 'rgba(0,0,0,0.25)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-14, -80); ctx.lineTo(-14, -74); ctx.moveTo(14, -80); ctx.lineTo(14, -74); ctx.stroke(); ctx.strokeStyle = '#3a3030'; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(-10, -80); ctx.lineTo(-10, -112); ctx.lineTo(10, -112); ctx.lineTo(10, -80); ctx.stroke(); ctx.fillStyle = '#F4EEE0'; ctx.fillRect(-20, -54, 22, 14); ctx.fillStyle = '#2a2224'; ctx.beginPath(); ctx.arc(-22, 2, 6, 0, TAU); ctx.arc(22, 2, 6, 0, TAU); ctx.fill(); ctx.restore(); };
SC.push({
  id: 's07_d2_inputs', start: 1083.05, end: 1086.65,
  transIn: { type: TR.jib, dur: 0.6, angle: -16, width: 320 },
  draw(ctx, t) {
    ctx.drawImage(S7.boomSky(), 0, 0); const hh = MG.cam.handheld(t, 2, 9);
    ctx.save(); ctx.translate(hh.dx, hh.dy);
    ctx.fillStyle = '#D9C6A0'; ctx.fillRect(0, 900, W, 180); ctx.fillStyle = 'rgba(60,40,40,0.12)'; ctx.fillRect(0, 900, W, 10);
    const tc = TW('Cheap', 1083.2), te = TW('euros', 1084.0), tt = TW('Tourists', 1084.8), ti = TW('Immigrants', 1085.7);
    // the sun turns into a euro coin, and coins pour out of it into the building
    const sx = 250, sy = 210, sR = 96; const flip = MG.ease.inOutCubic(lin(t, tc - 0.05, tc + 0.4));
    ctx.save(); ctx.translate(sx, sy); ctx.scale(Math.abs(Math.cos(flip * Math.PI)) || 0.02, 1); if (flip < 0.5) MG.kit.sun(ctx, 0, 0, sR, t, { rays: 0.4 }); else MG.sprite(ctx, S7.coinSprite(48), 0, 0, { scale: sR / 48 }); ctx.restore();
    const roofY = S7.frame(ctx, 1000, 900, 520, 9, lerp(4, 6, MG.ease.inOutSine(lin(t, tc + 0.3, tt))) + MG.ease.inOutSine(lin(t, tt, ti)) + 1.4 * MG.ease.inOutSine(lin(t, ti, 1086.6)), { fh: 58, bays: 6, infill: true });
    if (t > tc + 0.25) { const coin = S7.coinSprite(22); for (let i = 0; i < 34; i++) { const u = MG.fract((t - tc) * 0.85 + i / 34); if ((t - tc) * 0.85 < i / 34) continue; const px = lerp(sx + 60, 960 + (MG.rand(5, i) - 0.5) * 260, u), py = lerp(sy + 40, roofY + 20, u) - Math.sin(u * Math.PI) * 160; MG.sprite(ctx, coin, px, py, { scale: 0.9, sx: Math.abs(Math.cos(t * 7 + i)) + 0.08, alpha: u < 0.9 ? 1 : (1 - u) * 10 }); } }
    // tourists: a jet overhead, suitcases rolling in
    if (t > tt - 0.4) { const u = lin(t, tt - 0.4, tt + 1.6); const px = lerp(W + 200, 1150, MG.ease.out(u)); ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,0.75)'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(px + 60, 150); ctx.lineTo(W + 300, 140); ctx.stroke(); ctx.fillStyle = '#F4EEE0'; ctx.beginPath(); ctx.moveTo(px - 70, 150); ctx.quadraticCurveTo(px - 60, 138, px, 140); ctx.lineTo(px + 70, 142); ctx.lineTo(px + 86, 124); ctx.lineTo(px + 96, 124); ctx.lineTo(px + 88, 150); ctx.lineTo(px - 60, 158); ctx.closePath(); ctx.fill(); ctx.fillStyle = '#D9D2C2'; ctx.beginPath(); ctx.moveTo(px - 10, 148); ctx.lineTo(px + 30, 148); ctx.lineTo(px - 20, 182); ctx.lineTo(px - 34, 182); ctx.closePath(); ctx.fill(); ctx.restore();
      const cols = [P.rojo, P.azulejo, P.sol, P.oliva, P.terracota]; cols.forEach((c, i) => { const k = MG.ease.out(lin(t, tt + i * 0.12, tt + 0.9 + i * 0.12)); if (k <= 0) return; const x = lerp(W + 120, 1330 + i * 88, k); S7.suitcase(ctx, x, 905, 0.9 + (i % 2) * 0.15, c, Math.sin((1 - k) * 12) * 0.1); }); }
    // immigrant workers walk in and climb the scaffold
    if (t > ti - 0.3) { const outfits = [['#E5762C', '#3F4E6A'], ['#3F6B8C', '#2E3440'], ['#7A5A3A', '#3A3632'], ['#B8322A', '#2E3440']]; outfits.forEach(([top, bot], i) => { const k = MG.ease.out(lin(t, ti - 0.2 + i * 0.15, ti + 0.9 + i * 0.15)); const x = lerp(-120, 430 + i * 105, k); S7.figure(ctx, x, 905, 230, { top, bottom: bot, hat: 'hard', skin: SKINS[(i * 2 + 1) % 5], hair: HAIRS[i], walk: k < 1 ? t * 9 + i : null, seed: i + 3, mood: 'smile', vest: i === 1 ? '#D8E04A' : null, prop: (c2, q) => { c2.fillStyle = '#7A5A3A'; c2.fillRect(q.shW * 0.6, q.shY + 60, 40, 30); } }); }); }
    ctx.restore();
    // labels on the spoken word
    const lab = (s, x, y, t0, col) => MG.text.reveal(ctx, s, x, y, t, t0, { font: MG.F.grotesk, weight: 800, size: 46, color: col || P.ink, style: 'rise', by: 'word', stroke: 'rgba(251,230,191,0.9)', strokeW: 8 });
    lab('CHEAP LOANS €', 360, 330, tc - 0.06); lab('TOURISTS', 1360, 760, tt - 0.06); lab('IMMIGRANTS', 380, 610, ti - 0.06);
  },
  post: { grade: 'golden', vignette: 0.3 },
});

// ---------- D3 · crane up: Spain sprouts buildings everywhere ----------
S7.d3 = {
  pr: () => S7._d3pr || (S7._d3pr = MG.kit.view('iberia')),
  pts() { if (S7._d3pts) return S7._d3pts; const pr0 = this.pr(); const r = MG.rng(44); const out = []; const d3 = window.d3; const coast = [MG.geo.cities.Malaga, MG.geo.cities.Alicante, MG.geo.cities.Valencia, MG.geo.cities.Barcelona, MG.geo.cities.Murcia, MG.geo.cities.Madrid, MG.geo.cities.Almeria, MG.geo.cities.Cadiz, MG.geo.cities.Tarragona, MG.geo.cities.Benidorm];
    for (const f of MG.geo.provinces.features) { if (/Canarias|Palmas|Tenerife|Ceuta|Melilla|Gibraltar/.test(f.properties.name)) continue; const dens = MG.geo.density[f.id] || 30; const n = 2 + Math.round(Math.sqrt(dens) * 0.55); const b = d3.geoBounds(f); let k = 0, tries = 0; while (k < n && tries < 300) { tries++; const ll = [lerp(b[0][0], b[1][0], r()), lerp(b[0][1], b[1][1], r())]; if (!d3.geoContains(f, ll)) continue; const p = pr0(ll); let dmin = 1e9; for (const c of coast) { const q = pr0(c); dmin = Math.min(dmin, Math.hypot(q[0] - p[0], q[1] - p[1])); } out.push({ p, d: dmin, h: 12 + r() * 30 + (dmin < 60 ? 20 : 0), w: 8 + r() * 7, v: Math.floor(r() * 4), crane: r() < 0.06 }); k++; } }
    out.sort((a, b) => a.p[1] - b.p[1]); S7._d3pts = out; return out; },
};
SC.push({
  id: 's07_d3_everywhere', start: 1086.65, end: 1089.25,
  transIn: { type: TR.zoomOut, dur: 0.7, from: 4, x: 1160, y: 640 },
  init() { const pr0 = S7.d3.pr(); const q = pr0(MG.geo.cities.Valencia); this.transIn.x = q[0]; this.transIn.y = q[1]; this.base = S7.cacheMap('d3', pr0, { spain: P.sol, relief: 0.35, provinces: true }); S7.d3.pts(); },
  draw(ctx, t) {
    const z = lerp(1.0, 1.06, MG.ease.inOutSine(lin(t, 1086.65, 1089.3))); ctx.save(); ctx.translate(960, 540); ctx.scale(z, z); ctx.translate(-960, -540); ctx.drawImage(this.base, 0, 0);
    const te = TW('everywhere', 1088.2); for (const B of S7.d3.pts()) { const t0 = 1086.75 + Math.min(1.6, B.d / 260) * (te - 1086.75) / 1.0 * 0.9; const k = clamp((t - t0) / 0.35); if (k <= 0) continue; const e = MG.ease.outBack(k); const h = B.h * e, w = B.w; const [x, y] = B.p;
      ctx.fillStyle = 'rgba(50,30,40,0.25)'; ctx.beginPath(); ctx.moveTo(x - w / 2, y); ctx.lineTo(x + w / 2, y); ctx.lineTo(x + w / 2 + h * 0.6, y + h * 0.2); ctx.lineTo(x - w / 2 + h * 0.6, y + h * 0.2); ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#F7F1E3'; ctx.fillRect(x - w / 2, y - h, w * 0.6, h); ctx.fillStyle = '#D9CBB8'; ctx.fillRect(x - w / 2 + w * 0.6, y - h, w * 0.4, h); ctx.fillStyle = ['#C8693F', '#B8583A', '#D07A4A', '#A9533A'][B.v]; ctx.fillRect(x - w / 2, y - h - 3, w, 4);
      if (B.crane && k >= 1) S7.crane(ctx, x + 10, y, 0.09, { mast: 520, rot: Math.cos(t + x), col: '#E8B531' }); }
    ctx.restore();
    MG.geo.canaryInset(ctx, [140, 840, 250, 150], { fill: P.sol });
    MG.text.spoken(ctx, MG.phrase('Everyone is building', 1086.8).words, 140, 170, t, { font: MG.F.serif, italic: true, size: 70, color: P.ink, style: 'blur' });
    MG.text.reveal(ctx, 'everywhere.', 140, 290, t, te - 0.08, { font: MG.F.display, weight: 900, size: 120, color: P.ink, style: 'rise', by: 'char', stagger: 0.025 });
  },
  post: { grade: 'golden', vignette: 0.3 },
});

// ---------- D4 · one estate: 80 houses = 800,000 homes · 2006 on the site sign ----------
SC.push({
  id: 's07_d4_800k', start: 1089.25, end: 1094.15,
  transIn: { type: 'zoom', dur: 0.6, x: 1180, y: 700, amount: 2.4, from: 0.7 },
  init() { const pr0 = S7.d3.pr(); const q = pr0(MG.geo.cities.Murcia); this.transIn.x = q[0]; this.transIn.y = q[1];
    this.ground = MG.cache('s7d4g', W, H, (x) => { MG.fx.vgrad(x, [[0, '#F3C98A'], [0.28, '#FBE6BF'], [0.3, '#D9BE8E'], [1, '#C8A774']]); x.fillStyle = '#B8A18F'; x.beginPath(); x.moveTo(0, 330); for (let xx = 0; xx <= W; xx += 14) x.lineTo(xx, 300 + MG.fbm(xx * 0.003, 2, 3) * 60); x.lineTo(W, 340); x.lineTo(W, H); x.lineTo(0, H); x.closePath(); x.globalAlpha = 0.5; x.fill(); x.globalAlpha = 1; MG.tex.over(x, 'grain', { alpha: 0.08 }); });
  },
  iso: (i, j) => [980 + (i - j) * 62, 370 + (i + j) * 34],
  draw(ctx, t) {
    const z = lerp(1.06, 1.0, MG.ease.inOutSine(lin(t, 1089.25, 1094.2))); const hh = MG.cam.handheld(t, 2, 11); ctx.save(); ctx.translate(960 + hh.dx, 540 + hh.dy); ctx.scale(z, z); ctx.translate(-960, -540);
    ctx.drawImage(this.ground, 0, 0);
    const ts = TW('construction', 1091.0) - 0.15; for (let s2 = 0; s2 < 17; s2++) for (let i = 0; i < 10; i++) { const j = s2 - i; if (j < 0 || j > 7) continue; const [x, y] = this.iso(i, j); const k = clamp((t - ts - (i + j) * 0.075) / 0.4);
      // plot outline
      ctx.strokeStyle = 'rgba(120,90,60,0.4)'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(x - 56, y); ctx.lineTo(x, y + 31); ctx.lineTo(x + 56, y); ctx.lineTo(x, y - 31); ctx.closePath(); ctx.stroke();
      if (k <= 0) continue; const spr = S7.houseSprite((i * 3 + j) % 4, 1.5); const hgt = spr.height * MG.ease.out(k); ctx.save(); ctx.beginPath(); ctx.rect(x - 100, y + 26 - hgt, 200, hgt + 10); ctx.clip(); ctx.drawImage(spr, x - 90, y + 26 - spr.height + 8); ctx.restore(); }
    // site sign with the year
    ctx.save(); ctx.translate(330, 640); ctx.rotate(-0.04); ctx.fillStyle = '#5E4E3E'; ctx.fillRect(-150, 0, 16, 330); ctx.fillRect(140, 0, 16, 330); const pan = MG.path.rr(-200, -240, 410, 280, 6); MG.fx.shadow(ctx, pan, { dx: 14, dy: 18, blur: 20, color: 'rgba(50,30,20,0.35)' }); ctx.fillStyle = '#F6F1E6'; ctx.fill(pan); ctx.fillStyle = '#2F7A5A'; ctx.fillRect(-200, -240, 410, 62); MG.text.draw(ctx, 'OBRA NUEVA', 5, -196, { font: MG.F.grotesk, weight: 800, size: 36, color: P.cal, align: 'center', tracking: 0.12 }); MG.text.draw(ctx, '2006', 5, -40, { font: MG.F.cond, weight: 900, size: 150, color: P.ink, align: 'center' }); MG.text.draw(ctx, 'NEW HOMES · HOUSING STARTS', 5, 10, { font: MG.F.mono, weight: 700, size: 17, color: P.ink2, align: 'center', tracking: 0.1 }); ctx.restore();
    ctx.restore();
    const t8 = TW('800,000', 1092.0); const cnt = S7.count(t, ts, t8 + 0.5, 0, 800000, { ease: 'inOutSine' }); MG.text.draw(ctx, cnt, 1790, 250, { font: MG.F.cond, weight: 900, size: 190, color: P.ink, align: 'right', shadow: { blur: 12, dx: 5, dy: 7, color: 'rgba(60,30,20,0.25)' } });
    S7.mono(ctx, 'homes started in one year', 1790, 300, t, TW('homes', 1092.85) - 0.2, { align: 'right', size: 24, color: P.ink });
    const kl = MG.prog(t, 1092.6, 1093.1); if (kl > 0) { ctx.save(); ctx.globalAlpha = kl; MG.sprite(ctx, S7.houseSprite(0, 1), 1480, 1000, { scale: 0.55 }); MG.text.draw(ctx, '= 10,000 HOMES', 1520, 1012, { font: MG.F.mono, weight: 700, size: 24, color: P.ink, tracking: 0.12 }); ctx.restore(); }
  },
  post: { grade: 'golden', vignette: 0.3 },
});

// ---------- D5 · Spain's pile vs Germany + France + Britain combined ----------
S7.tower = (ctx, x, base, cols, rows, built, sc = 0.62) => { const spr = S7.houseSprite(1, 1); const dx = 66 * sc, dy = 40 * sc; let n = 0; for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) { const k = clamp(built - n); n++; if (k <= 0) continue; const e = MG.ease.outBack(k); const px = x + (c - (cols - 1) / 2) * dx, py = base - r * dy * 1.05 - (1 - e) * 40; ctx.save(); ctx.globalAlpha = Math.min(1, k * 2); ctx.drawImage(S7.houseSprite((r + c) % 4, 1), px - 60 * sc, py - 100 * sc, 120 * sc, 110 * sc); ctx.restore(); } return base - rows * dy * 1.05; };
SC.push({
  id: 's07_d5_combined', start: 1094.15, end: 1097.6,
  transIn: { type: 'push', dir: 'left', dur: 0.5, ease: 'inOutCubic' },
  init() { this.paper = MG.tex.paper('#F6E4C4', { seed: 22, light: 0.25 }); this.sil = {}; for (const n of ['Spain', 'Germany', 'France', 'United Kingdom']) { const f = n === 'Spain' ? S7.spainMain() : MG.geo.country(n, n === 'France' ? '10' : '50'); const ff = n === 'France' ? { ...f, geometry: { type: 'MultiPolygon', coordinates: f.geometry.coordinates.filter((pl) => Math.min(...pl[0].map((q) => q[0])) > -6 && Math.max(...pl[0].map((q) => q[1])) > 41.2) } } : f; const pr0 = MG.geo.proj('mercator', { center: [0, 0], scale: 1 }); pr0.fitExtent([[0, 0], [150, 150]], ff); this.sil[n] = MG.cache('s7sil:' + n, 160, 160, (x) => { x.translate(5, 5); MG.geo.draw(x, pr0, ff, { fill: n === 'Spain' ? P.sol : '#8C8A86', stroke: 'rgba(30,26,29,0.6)', width: 1.5 }); }); } },
  draw(ctx, t) {
    ctx.drawImage(this.paper, 0, 0); const hh = MG.cam.handheld(t, 2, 13); ctx.save(); ctx.translate(hh.dx, hh.dy);
    MG.fx.contact(ctx, 600, 905, 260, 26, 0.3); MG.fx.contact(ctx, 1330, 905, 260, 26, 0.3);
    const topES = S7.tower(ctx, 600, 900, 4, 20, 80);
    const tc = TW('combined', 1096.45); const built = 68 * MG.ease.inOutSine(lin(t, tc - 0.1, tc + 0.7)); const topX = S7.tower(ctx, 1330, 900, 4, 17, built);
    // dashed level of Spain's pile
    const kd = MG.prog(t, tc + 0.5, tc + 0.9); if (kd > 0) { ctx.save(); ctx.strokeStyle = P.rojo; ctx.lineWidth = 3; ctx.setLineDash([10, 10]); ctx.beginPath(); ctx.moveTo(720, topES); ctx.lineTo(lerp(720, 1500, kd), topES); ctx.stroke(); ctx.restore(); MG.text.reveal(ctx, 'MORE', 1520, topES + 12, t, tc + 0.7, { font: MG.F.grotesk, weight: 800, size: 40, color: P.rojo, style: 'rise' }); }
    MG.sprite(ctx, this.sil.Spain, 600, 980, { scale: 0.72 }); MG.text.draw(ctx, 'SPAIN', 600, 1062, { font: MG.F.mono, weight: 800, size: 26, color: P.ink, align: 'center', tracking: 0.2 });
    const cs = [['Germany', 'GERMANY', TW('Germany', 1094.85), 1170], ['France', 'FRANCE', TW('France', 1095.5), 1330], ['United Kingdom', 'BRITAIN', TW('Britain', 1096.1), 1490]];
    for (const [n, lab, t0, x] of cs) { const k = MG.ease.out(lin(t, t0 - 0.1, t0 + 0.35)); if (k <= 0) continue; MG.sprite(ctx, this.sil[n], x, lerp(780, 980, k), { scale: 0.6, alpha: Math.min(1, k * 2) }); MG.text.draw(ctx, lab, x, 1062, { font: MG.F.mono, weight: 800, size: MG.LANG === 'fr' ? 18 : 24, color: P.ink2, align: 'center', tracking: 0.16, alpha: k }); }
    const kp = MG.prog(t, 1095.45, 1095.9); if (kp > 0) { MG.text.draw(ctx, '+', 1250, 1000, { font: MG.F.cond, weight: 900, size: 60, color: P.ink2, align: 'center', alpha: kp }); }
    const kq = MG.prog(t, 1096.05, 1096.5); if (kq > 0) { MG.text.draw(ctx, '+', 1410, 1000, { font: MG.F.cond, weight: 900, size: 60, color: P.ink2, align: 'center', alpha: kq }); }
    ctx.restore();
    MG.text.reveal(ctx, 'more than', 960, 150, t, TW('More', 1094.3), { font: MG.F.serif, italic: true, size: 62, color: P.ink, align: 'center', style: 'blur', by: 'word' });
    MG.text.reveal(ctx, 'all three combined', 960, 240, t, tc - 0.05, { font: MG.F.display, weight: 800, size: 76, color: P.ink, align: 'center', style: 'rise', by: 'word', stagger: 0.08 });
  },
  post: { grade: 'warm', vignette: 0.3 },
});

// ---------- D6 · one in eight jobs: only the builder stands in the sun ----------
S7.JOBS = [{ top: '#F4EEE0', bottom: '#1E1A1D', apron: '#FAF6EE', hair: C.hair1, hs: 'short' }, { top: '#3F8E8C', bottom: '#3F8E8C', hair: C.hair2, hs: 'bun' }, { top: '#8C8A86', bottom: '#3F5E86', vest: '#E5E04A', hat: 'hard', hair: C.hair4, hs: 'short' }, { top: '#E9EDF2', bottom: '#2E3440', hair: C.hair3, hs: 'short' }, { top: '#B8322A', bottom: '#2E3440', apron: '#B8322A', hair: C.hair1, hs: 'long' }, { top: '#9C6B4A', bottom: '#5A4A3A', hat: 'straw', hair: C.hair2, hs: 'bald' }, { top: '#6F7A3A', bottom: '#4A3A30', hair: '#B9B2A8', hs: 'short' }, { top: '#2E4A7A', bottom: '#2E3440', hat: 'cap', hair: C.hair1, hs: 'short' }];
SC.push({
  id: 's07_d6_jobs', start: 1097.6, end: 1100.65,
  init() { this.wall = MG.cache('s7d6wall', W, H, (x) => { MG.fx.vgrad(x, [[0, '#F3DDB8'], [0.86, '#EBCDA0'], [0.861, '#C9A774'], [1, '#B89565']]); x.globalAlpha = 0.3; x.fillStyle = x.createPattern(MG.tex.blotch(512, 3, 5, '#8a5a30'), 'repeat'); x.fillRect(0, 0, W, H); x.globalAlpha = 1; MG.tex.over(x, 'fibers', { alpha: 0.4 }); }); },
  draw(ctx, t) {
    ctx.drawImage(this.wall, 0, 0); const t1 = TW('one', 1098.9); const open = MG.ease.inOutCubic(lin(t, t1 - 0.3, t1 + 0.35));
    const xs = (i) => 250 + i * 203; const lit = 2;
    S7.JOBS.forEach((J, i) => { const br = Math.sin(S7.two(t) * 2.2 + i) * 0.012; ctx.save(); ctx.translate(xs(i), 930); ctx.scale(1, 1 + br); S7.figure(ctx, 0, 0, 430, { top: J.top, bottom: J.bottom, apron: J.apron, vest: J.vest, hat: J.hat, hair: J.hair, hairStyle: J.hs, skin: SKINS[(i * 3) % 5], seed: i + 1, mood: i === lit ? 'smile' : 'neutral', look: i < lit ? 0.5 : -0.4, blink: MG.kit.blink(t, i + 2), arms: i === lit ? [0.25, -0.9] : null, prop: i === lit ? (c2, q) => { c2.fillStyle = '#6A5038'; c2.fillRect(q.shW + 40, q.shY - 10, 14, 120); c2.fillStyle = '#8C8A86'; c2.fillRect(q.shW + 20, q.shY - 20, 54, 22); } : null }); ctx.restore(); });
    // shade over everyone except a shaft of sun on the builder
    const cx = xs(lit) + 30, half = lerp(0, 150, open); ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = 'rgba(86,66,104,0.62)'; const sk = 0.36; ctx.beginPath(); ctx.moveTo(-200, 0); ctx.lineTo(cx - half - H * sk * 0.5, 0); ctx.lineTo(cx - half + H * sk * 0.5, H); ctx.lineTo(-200, H); ctx.closePath(); ctx.moveTo(cx + half - H * sk * 0.5, 0); ctx.lineTo(W + 400, 0); ctx.lineTo(W + 400, H); ctx.lineTo(cx + half + H * sk * 0.5, H); ctx.closePath(); ctx.fill(); ctx.restore();
    if (open > 0.05) { ctx.save(); ctx.globalCompositeOperation = 'screen'; ctx.globalAlpha = 0.18 * open; ctx.fillStyle = '#FFE7B0'; ctx.beginPath(); ctx.moveTo(cx - half - H * sk * 0.5, 0); ctx.lineTo(cx + half - H * sk * 0.5, 0); ctx.lineTo(cx + half + H * sk * 0.5, H); ctx.lineTo(cx - half + H * sk * 0.5, H); ctx.closePath(); ctx.fill(); ctx.restore(); }
    MG.text.reveal(ctx, '1 IN 8', 1780, 230, t, t1 - 0.06, { font: MG.F.cond, weight: 900, size: 200, color: P.cal, align: 'right', style: 'rise', by: 'word', stagger: 0.1, shadow: { blur: 14, dy: 6, color: 'rgba(30,20,40,0.35)' } });
    S7.mono(ctx, 'jobs were in construction', 1780, 285, t, TW('jobs', 1099.7) - 0.2, { align: 'right', size: 26, color: P.cal });
  },
  post: { grade: 'golden', vignette: 0.36 },
});

// =====================================================================================================
// CHAPTER E — GHOSTS
// =====================================================================================================
S7.CR = [-3.927, 38.985]; S7.CRAP = [-3.97, 38.856];
// ---------- E1 · dusk map → Ciudad Real (75,000) → a blueprint → the terminal stands up ----------
SC.push({
  id: 's07_e1_ciudadreal', start: 1100.65, end: 1108.0,
  transIn: { type: 'blur', dur: 0.8, amount: 20 },
  init() {
    this.pr0 = MG.geo.proj('spain', { center: [-3.75, 39.7], scale: 6900 });
    this.base = S7.cacheMap('e1', this.pr0, { sea: '#5F7E9B', land: '#B9A98F', portugal: '#C2B196', spain: '#D6A469', relief: 0.65, provinces: true, after: (x) => { x.globalCompositeOperation = 'multiply'; MG.fx.rgrad(x, 1500, 200, 1700, [[0, 'rgba(255,214,170,1)'], [1, 'rgba(120,96,140,1)']]); x.globalCompositeOperation = 'source-over'; } });
    const r = MG.rng(75); this.dots = []; for (let i = 0; i < 75; i++) { const a = i * 2.39996, d = Math.sqrt(i + 0.5) * 9.5; this.dots.push([Math.cos(a) * d, Math.sin(a) * d * 0.9, r()]); }
    this.bp = MG.cache('s7e1bp', W, H, (x) => { x.fillStyle = C.blueprint; x.fillRect(0, 0, W, H); x.strokeStyle = 'rgba(216,230,245,0.12)'; x.lineWidth = 1; for (let i = 0; i < W; i += 40) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, H); x.stroke(); } for (let j = 0; j < H; j += 40) { x.beginPath(); x.moveTo(0, j); x.lineTo(W, j); x.stroke(); } x.strokeStyle = 'rgba(216,230,245,0.22)'; for (let i = 0; i < W; i += 200) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, H); x.stroke(); } MG.tex.over(x, 'blotch', { alpha: 0.15, color: '#000', scale: 3 }); MG.tex.over(x, 'fibers', { alpha: 0.35, color: '#9bb8d8', blend: 'screen' }); });
  },
  draw(ctx, t) {
    const cam = S7.mapKeys(this.pr0, t, [[1100.75, { c: [-3.75, 39.7], z: 1 }], [1102.4, { c: [-3.93, 38.95], z: 4.4 }, 'cam'], [1104.8, { c: [-3.94, 38.93], z: 4.9 }, 'linear']]);
    ctx.save(); cam.apply(ctx); ctx.drawImage(this.base, 0, 0); ctx.restore();
    S7.mapLabel(ctx, cam.pt, MG.geo.cities.Madrid, t, 1100.9, 'MADRID', { dot: 7, dotColor: P.ink, size: 26, dx: 14, dy: -12, style: 'fade', alpha: 1 - MG.smoothstep(1101.6, 1102.2, t) });
    const tc = TW('Ciudad', 1101.0); S7.mapLabel(ctx, cam.pt, S7.CR, t, tc - 0.1, 'CIUDAD REAL', { dot: 9, size: 40, dx: 26, dy: -24, weight: 800 });
    const t75 = TW('75,000', 1102.8); const c = cam.pt(S7.CR);
    this.dots.forEach(([dx, dy, rr], i) => { const k = MG.ease.outBack(clamp((t - t75 + 0.05 - i * 0.008) / 0.3)); if (k <= 0) return; ctx.fillStyle = rr < 0.5 ? '#FFF1D6' : '#F7D39A'; ctx.beginPath(); ctx.arc(c[0] + dx * 1.6, c[1] + 40 + dy * 1.6, 5.5 * k, 0, TAU); ctx.fill(); });
    if (t > t75 - 0.1) { MG.text.reveal(ctx, '75,000', c[0] + 28, c[1] + 26, t, t75 - 0.05, { font: MG.F.cond, weight: 900, size: 64, color: P.cal, stroke: 'rgba(40,30,50,0.6)', strokeW: 6, style: 'rise', by: 'char', stagger: 0.03 }); S7.mono(ctx, 'people · ● = 1,000', c[0] + 32, c[1] + 62, t, t75 + 0.3, { size: 20, color: P.cal, stroke: 'rgba(40,30,50,0.6)', strokeW: 5 }); }
    // the blueprint unrolls over the map
    const tb = TW('build', 1104.9); const un = MG.ease.inOutCubic(lin(t, tb - 0.35, tb + 0.45)); if (un > 0) {
      const ex = lerp(-40, W + 60, un); ctx.save(); ctx.beginPath(); ctx.rect(0, 0, ex, H); ctx.clip(); ctx.drawImage(this.bp, 0, 0);
      const draw = (k0, k1, fn) => { const p = MG.ease.inOutSine(lin(t, k0, k1)); if (p > 0) fn(p); };
      const L = (pts, p, w = 3, dash) => MG.fx.line(ctx, pts, { color: C.blueprintLine, width: w, progress: p, dash });
      const ang = -0.17; const R = (x, y) => { const cx = 1000, cy = 560; const ca = Math.cos(ang), sa = Math.sin(ang); return [cx + (x - cx) * ca - (y - cy) * sa, cy + (x - cx) * sa + (y - cy) * ca]; };
      draw(tb, tb + 1.0, (p) => { L([R(260, 560), R(1740, 560), R(1740, 610), R(260, 610), R(260, 560)], p, 4); L([R(280, 585), R(1720, 585)], p, 2, [22, 18]); });
      draw(tb + 0.5, tb + 1.4, (p) => { L([R(380, 690), R(1620, 690)], p, 3); for (let k = 0; k < 6; k++) L([R(500 + k * 200, 610), R(540 + k * 200, 690)], p, 2); });
      draw(tb + 0.9, tb + 1.8, (p) => { L([R(760, 760), R(1260, 760), R(1260, 880), R(760, 880), R(760, 760)], p, 3); L([R(1360, 780)], 1); });
      draw(tb + 1.1, tb + 1.9, (p) => { ctx.save(); ctx.strokeStyle = C.blueprintLine; ctx.lineWidth = 3; const q = R(1380, 800); ctx.beginPath(); ctx.arc(q[0], q[1], 36, 0, TAU * p); ctx.stroke(); ctx.restore(); });
      MG.text.reveal(ctx, 'RUNWAY · 4,000 M', R(300, 540)[0], R(300, 540)[1], t, tb + 0.6, { font: MG.F.mono, weight: 700, size: 24, color: C.blueprintLine, tracking: 0.18, style: 'type', by: 'char', stagger: 0.02 });
      // title block
      const tbX = 1300, tbY = 860; const kb = MG.prog(t, tb + 0.2, tb + 0.6); if (kb > 0) { ctx.save(); ctx.globalAlpha = kb; ctx.strokeStyle = C.blueprintLine; ctx.lineWidth = 2; ctx.strokeRect(tbX, tbY, 520, 170); ctx.beginPath(); ctx.moveTo(tbX, tbY + 50); ctx.lineTo(tbX + 520, tbY + 50); ctx.stroke(); MG.text.draw(ctx, 'CIUDAD REAL · CENTRAL AIRPORT', tbX + 16, tbY + 34, { font: MG.F.mono, weight: 700, size: 20, color: C.blueprintLine, tracking: 0.08 }); ctx.restore(); }
      MG.text.reveal(ctx, '€1 BILLION', tbX + 16, tbY + 148, t, TW('billion-euro', 1105.5) - 0.05, { font: MG.F.cond, weight: 900, size: 100, color: '#FFFFFF', style: 'rise', by: 'word' });
      ctx.restore();
      // paper roll edge
      if (un < 1) { ctx.save(); const g = ctx.createLinearGradient(ex - 40, 0, ex + 30, 0); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(0.6, 'rgba(10,20,40,0.45)'); g.addColorStop(1, 'rgba(10,20,40,0)'); ctx.fillStyle = g; ctx.fillRect(ex - 40, 0, 70, H); ctx.fillStyle = '#2A5490'; ctx.fillRect(ex - 6, 0, 22, H); ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.fillRect(ex - 2, 0, 5, H); ctx.restore(); }
      // the terminal stands up out of the plan
      const ta = TW('airport', 1107.0); const st = MG.ease.out(lin(t, ta - 0.25, ta + 0.6)); if (st > 0) { const ang2 = -0.17; const R2 = (x, y) => { const cx = 1000, cy = 560; const ca = Math.cos(ang2), sa = Math.sin(ang2); return [cx + (x - cx) * ca - (y - cy) * sa, cy + (x - cx) * sa + (y - cy) * ca]; }; const hgt = 150 * st; const fp = [R2(760, 760), R2(1260, 760), R2(1260, 880), R2(760, 880)];
        ctx.save(); ctx.fillStyle = 'rgba(10,20,40,0.35)'; ctx.beginPath(); fp.forEach((q, i) => (i ? ctx.lineTo(q[0] + hgt * 0.5, q[1] + hgt * 0.2) : ctx.moveTo(q[0] + hgt * 0.5, q[1] + hgt * 0.2))); ctx.closePath(); ctx.fill();
        const top = fp.map((q) => [q[0], q[1] - hgt]); ctx.fillStyle = '#C9D8EA'; ctx.beginPath(); ctx.moveTo(fp[3][0], fp[3][1]); ctx.lineTo(fp[2][0], fp[2][1]); ctx.lineTo(top[2][0], top[2][1]); ctx.lineTo(top[3][0], top[3][1]); ctx.closePath(); ctx.fill(); ctx.fillStyle = '#9FB6D2'; ctx.beginPath(); ctx.moveTo(fp[2][0], fp[2][1]); ctx.lineTo(fp[1][0], fp[1][1]); ctx.lineTo(top[1][0], top[1][1]); ctx.lineTo(top[2][0], top[2][1]); ctx.closePath(); ctx.fill();
        ctx.fillStyle = '#EEF3F9'; ctx.beginPath(); top.forEach((q, i) => (i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]))); ctx.closePath(); ctx.fill(); ctx.strokeStyle = C.blueprint; ctx.lineWidth = 2; ctx.stroke();
        ctx.fillStyle = 'rgba(30,60,100,0.55)'; for (let k = 0; k < 12; k++) { const u = (k + 0.5) / 12; const a = [lerp(fp[3][0], fp[2][0], u), lerp(fp[3][1], fp[2][1], u)]; ctx.fillRect(a[0] - 10, a[1] - hgt * 0.75, 20, hgt * 0.55); }
        const tw = R2(1380, 800); ctx.fillStyle = '#DCE6F2'; ctx.fillRect(tw[0] - 14, tw[1] - 260 * st, 28, 260 * st); ctx.fillStyle = '#9FB6D2'; ctx.beginPath(); ctx.ellipse(tw[0], tw[1] - 260 * st, 46, 22, 0, 0, TAU); ctx.fill(); ctx.restore(); }
    }
  },
  post: (t) => ({ grade: t < 1104.6 ? 'golden' : 'cool', vignette: 0.38, sat: 0.92 }),
});

// ---------- E2 · split-flap board counts three years → CLOSED; the empty terminal ----------
S7.flapState = (t) => { const a = TW('operates', 1108.2), th = TW('three', 1109.0), y = TW('years', 1109.2), cl = TW('closes', 1110.2); if (t < a + 0.1) return 'OPEN'; if (t < th) return 'YEAR 1'; if (t < y + 0.35) return 'YEAR 2'; if (t < cl - 0.05) return 'YEAR 3'; return 'CLOSED'; };
S7.flapTimes = () => { const a = TW('operates', 1108.2), th = TW('three', 1109.0), y = TW('years', 1109.2), cl = TW('closes', 1110.2); return [[0, 'OPEN'], [a + 0.1, 'YEAR 1'], [th, 'YEAR 2'], [y + 0.35, 'YEAR 3'], [cl - 0.05, 'CLOSED']]; };
S7.drawBoard = (x, t) => {
  const w = x.canvas.width, h = x.canvas.height; x.fillStyle = '#16181C'; x.fillRect(0, 0, w, h); x.strokeStyle = '#3a3f46'; x.lineWidth = 8; x.strokeRect(4, 4, w - 8, h - 8);
  MG.text.draw(x, 'AEROPUERTO CENTRAL · CIUDAD REAL', 40, 62, { font: MG.F.mono, weight: 700, size: 34, color: '#E8C25A', tracking: 0.08 }); MG.text.draw(x, 'DEPARTURES', w - 40, 62, { font: MG.F.mono, weight: 700, size: 30, color: '#8E959E', align: 'right', tracking: 0.2 });
  const T = S7.flapTimes(); let cur = T[0], prev = T[0]; for (const k of T) if (t >= k[0]) { prev = cur; cur = k; } const N = 7; const cw = 120, chh = 190, x0 = (w - N * (cw + 12)) / 2, y0 = 100;
  for (let i = 0; i < N; i++) { const a = (MG.tr(prev[1]).padEnd(N))[i], b = (MG.tr(cur[1]).padEnd(N))[i]; const p = clamp((t - cur[0] - i * 0.04) / 0.22); const cx = x0 + i * (cw + 12); const red = cur[1] === 'CLOSED' && p > 0.5;
    const cell = (ch, half, col) => { x.save(); x.beginPath(); x.rect(cx, half === 0 ? y0 : y0 + chh / 2, cw, chh / 2); x.clip(); x.fillStyle = '#25282E'; x.fillRect(cx, y0, cw, chh); MG.text.draw(x, ch, cx + cw / 2, y0 + chh * 0.78, { font: MG.F.cond, weight: 800, size: 170, color: col, align: 'center' }); x.restore(); };
    const colA = prev[1] === 'CLOSED' ? '#E0503F' : '#F3EFE6', colB = cur[1] === 'CLOSED' ? '#E0503F' : '#F3EFE6';
    if (p >= 1 || a === b) { cell(b, 0, colB); cell(b, 1, colB); }
    else { cell(b, 0, colB); cell(a, 1, colA); const f = p < 0.5 ? 1 - p * 2 : (p - 0.5) * 2; x.save(); if (p < 0.5) { x.translate(cx, y0 + chh / 2); x.scale(1, f); x.translate(-cx, -(y0 + chh / 2)); cell(a, 0, colA); } else { x.translate(cx, y0 + chh / 2); x.scale(1, f); x.translate(-cx, -(y0 + chh / 2)); cell(b, 1, colB); } x.restore(); }
    x.fillStyle = '#0c0d10'; x.fillRect(cx, y0 + chh / 2 - 2, cw, 4); }
};
SC.push({
  id: 's07_e2_terminal', start: 1108.0, end: 1113.85,
  transIn: { type: 'zoom', dur: 0.6, x: 1064, y: 814, amount: 3.0, from: 0.75 },
  init() {
    const T = THREE; const sc = new T.Scene(); this.sc = sc; sc.background = new T.Color(0x2a2430); sc.fog = new T.Fog(0x3a3240, 14, 46); sc.environment = MG.three.env();
    this.cam = new T.PerspectiveCamera(46, 16 / 9, 0.1, 100);
    const floor = new T.Mesh(new T.PlaneGeometry(16, 70), new T.MeshStandardMaterial({ color: 0xcfc6ba, roughness: 0.18, metalness: 0.15 })); floor.rotation.x = -Math.PI / 2; floor.position.set(0, 0, 20); sc.add(floor);
    const wall = new T.Mesh(new T.PlaneGeometry(70, 7), new T.MeshStandardMaterial({ color: 0xe9e1d3, roughness: 0.8 })); wall.rotation.y = -Math.PI / 2; wall.position.set(6.5, 3.5, 20); sc.add(wall);
    // outside: dusk sky seen through the glass wall
    const sky = MG.canvas(1024, 256); { const x = sky.getContext('2d'); const g = x.createLinearGradient(0, 0, 0, 256); g.addColorStop(0, '#4b3a66'); g.addColorStop(0.55, '#E58A4E'); g.addColorStop(0.62, '#F6C27A'); g.addColorStop(0.63, '#3a3036'); g.addColorStop(1, '#2a2226'); x.fillStyle = g; x.fillRect(0, 0, 1024, 256); for (let i = 0; i < 40; i++) { x.fillStyle = 'rgba(255,220,150,0.8)'; x.fillRect(i * 26, 168, 4, 3); } }
    const skyM = new T.Mesh(new T.PlaneGeometry(80, 14), new T.MeshBasicMaterial({ map: MG.three.canvasTexture(sky) })); skyM.rotation.y = Math.PI / 2; skyM.position.set(-12, 4, 20); sc.add(skyM);
    const mulM = new T.MeshStandardMaterial({ color: 0x3b3f47, roughness: 0.4, metalness: 0.7 }); const mul = new T.InstancedMesh(new T.BoxGeometry(0.12, 7, 0.12), mulM, 24); const m = new T.Matrix4(); for (let k = 0; k < 24; k++) { m.makeTranslation(-6.5, 3.5, -4 + k * 2.8); mul.setMatrixAt(k, m); } sc.add(mul); const tr = new T.InstancedMesh(new T.BoxGeometry(0.1, 0.1, 70), mulM, 3); [0.05, 3.2, 6.9].forEach((y, i) => { m.makeTranslation(-6.5, y, 20); tr.setMatrixAt(i, m); }); sc.add(tr);
    const slat = new T.InstancedMesh(new T.BoxGeometry(13, 0.08, 0.35), new T.MeshStandardMaterial({ color: 0xd8d0c2, roughness: 0.6 }), 60); for (let k = 0; k < 60; k++) { m.makeTranslation(0, 7 + Math.sin(k * 0.3) * 0.25, -4 + k * 0.9); slat.setMatrixAt(k, m); } sc.add(slat);
    // rows of empty seats
    const seatM = new T.MeshStandardMaterial({ color: 0x2b5c95, roughness: 0.45, metalness: 0.1 }); const legM = new T.MeshStandardMaterial({ color: 0x9aa0a8, roughness: 0.3, metalness: 0.8 }); const nS = 2 * 7 * 9; const pan = new T.InstancedMesh(new T.BoxGeometry(0.52, 0.08, 0.5), seatM, nS), back = new T.InstancedMesh(new T.BoxGeometry(0.52, 0.55, 0.07), seatM, nS), beam = new T.InstancedMesh(new T.BoxGeometry(5.0, 0.06, 0.1), legM, 2 * 7);
    let i = 0, b = 0; for (const sx of [-2.9, 2.6]) for (let r = 0; r < 7; r++) { const z = 3 + r * 2.4; m.makeTranslation(sx, 0.42, z); beam.setMatrixAt(b++, m); for (let c = 0; c < 9; c++) { const x = sx - 2.2 + c * 0.55; m.makeTranslation(x, 0.46, z); pan.setMatrixAt(i, m); m.makeTranslation(x, 0.74, z + 0.26); back.setMatrixAt(i, m); i++; } } sc.add(pan, back, beam);
    // split-flap board
    this.bc = MG.canvas(1024, 320); this.bt = MG.three.canvasTexture(this.bc); S7.drawBoard(this.bc.getContext('2d'), 1108); const bm = [new T.MeshStandardMaterial({ color: 0x111215 }), new T.MeshStandardMaterial({ color: 0x111215 }), new T.MeshStandardMaterial({ color: 0x111215 }), new T.MeshStandardMaterial({ color: 0x111215 }), new T.MeshBasicMaterial({ map: this.bt }), new T.MeshStandardMaterial({ color: 0x111215 })];
    const board = new T.Mesh(new T.BoxGeometry(6.4, 2.0, 0.25), bm); board.position.set(0, 4.6, 18); board.rotation.y = Math.PI; sc.add(board);
    for (const sx of [-2.6, 2.6]) { const rod = new T.Mesh(new T.CylinderGeometry(0.03, 0.03, 1.6), legM); rod.position.set(sx, 6.4, 18); sc.add(rod); }
    // ghost passengers (dotted silhouettes)
    const gc = MG.canvas(128, 256); { const x = gc.getContext('2d'); x.fillStyle = 'rgba(240,235,255,0.9)'; const sil = new Path2D(); sil.arc(64, 40, 22, 0, TAU); sil.moveTo(30, 250); sil.lineTo(34, 120); sil.quadraticCurveTo(36, 72, 64, 70); sil.quadraticCurveTo(92, 72, 94, 120); sil.lineTo(98, 250); sil.closePath(); x.save(); x.clip(sil); for (let yy = 0; yy < 256; yy += 7) for (let xx = (yy / 7) % 2 * 3.5; xx < 128; xx += 7) { x.beginPath(); x.arc(xx, yy, 1.8, 0, TAU); x.fill(); } x.restore(); x.strokeStyle = 'rgba(240,235,255,0.6)'; x.setLineDash([4, 6]); x.lineWidth = 2; x.stroke(sil); }
    const gt = MG.three.canvasTexture(gc); this.ghosts = []; const r = MG.rng(31); for (let k = 0; k < 11; k++) { const sp = new T.Sprite(new T.SpriteMaterial({ map: gt, transparent: true, opacity: 0, depthWrite: false })); sp.scale.set(0.85, 1.7, 1); sp.position.set(-4 + r() * 8, 0.85, 2 + r() * 14); this.ghosts.push({ sp, t0: 1111.4 + r() * 0.9, seed: k }); sc.add(sp); }
    sc.add(new T.HemisphereLight(0xffd9b0, 0x302838, 0.75)); const dl = new T.DirectionalLight(0xffb070, 2.2); dl.position.set(-10, 3.5, 6); sc.add(dl); const dl2 = new T.DirectionalLight(0x8090c0, 0.5); dl2.position.set(5, 6, -6); sc.add(dl2);
  },
  draw(ctx, t) {
    const k = MG.ease.inOutCubic(lin(t, 1110.4, 1113.0)); const d = MG.ease.inOutSine(lin(t, 1113.0, 1114.0));
    this.cam.position.set(lerp(0.2, -2.2, k), lerp(3.6, 1.65, k), lerp(12.6, 0.5, k) - d * 0.4); this.cam.lookAt(lerp(0, 1.0, k), lerp(4.4, 2.6, k), lerp(18, 16, k));
    S7.drawBoard(this.bc.getContext('2d'), t); this.bt.needsUpdate = true;
    for (const G of this.ghosts) { const u = t - G.t0; const fl = 0.55 + 0.45 * Math.sin(t * 23 + G.seed * 3) * Math.sin(t * 7 + G.seed); G.sp.material.opacity = u < 0 ? 0 : Math.max(0, Math.min(0.5, u * 2) * (1 - MG.smoothstep(0.6, 1.6, u)) * fl); }
    const c = MG.three.render(this.sc, this.cam, { slot: 1, w: 1440, h: 810, exposure: 1.0 }); ctx.drawImage(c, 0, 0, W, H);
    // sunset shafts through the glass wall
    ctx.save(); ctx.globalCompositeOperation = 'screen'; MG.fx.rays(ctx, -200, 380, { n: 8, len: 2200, spread: 0.5, dir: 0.18, alpha: 0.12 * k + 0.04, width: 0.05, seed: 8, t, color: '#FFC27A' }); ctx.restore();
    MG.text.spoken(ctx, MG.phrase('The passengers never materialize', 1111.4).words, 960, 1000, t, { font: MG.F.serif, italic: true, size: 60, color: '#F3E9DA', align: 'center', style: 'blur', shadow: { blur: 12, dy: 3, color: 'rgba(0,0,0,0.6)' } });
  },
  post: { grade: 'golden', vignette: 0.45, sat: 0.9, contrast: 1.04 },
});

// ---------- E3 · lights out → night map of ghost airports ----------
S7.GHOSTAP = [['CIUDAD REAL', S7.CRAP, 1.75, [22, 34]], ['CASTELLÓN', [-0.0736, 40.214], 1.4, [24, -18]], ['HUESCA', [-0.3163, 42.0761], 1.2, [-22, -20]], ['LLEIDA', [0.5354, 41.7282], 0.5, [24, 30]]];
SC.push({
  id: 's07_e3_ghostmap', start: 1113.85, end: 1116.7,
  transIn: { type: 'dip', dur: 0.8, color: '#07090f' },
  init() { this.pr0 = MG.kit.view('iberia'); this.base = S7.cacheMap('e3', this.pr0, { sea: '#0C1422', land: '#141B29', portugal: '#161D2B', spain: '#1C2436', coast: 'rgba(140,170,215,0.45)', border: 'rgba(120,140,180,0.25)', provinces: true }); },
  draw(ctx, t) {
    const z = lerp(1.0, 1.05, MG.ease.inOutSine(lin(t, 1113.85, 1116.8))); ctx.save(); ctx.translate(960, 540); ctx.scale(z, z); ctx.translate(-960, -540); ctx.drawImage(this.base, 0, 0);
    // city lights
    const cities = [['Madrid', 1], ['Barcelona', 0.9], ['Valencia', 0.7], ['Seville', 0.6], ['Bilbao', 0.5], ['Malaga', 0.5], ['Zaragoza', 0.45], ['Murcia', 0.4], ['Palma', 0.35], ['Valladolid', 0.3], ['Alicante', 0.4], ['Granada', 0.3], ['ACoruna', 0.3], ['Vigo', 0.3], ['Cordoba', 0.3], ['Oviedo', 0.25]];
    for (const [n, s] of cities) { const p = this.pr0(MG.geo.cities[n]); MG.fx.glow(ctx, p[0], p[1], 50 * s + 14, '#F5B85A', 0.5 + 0.1 * Math.sin(t * 3 + s * 9)); ctx.fillStyle = '#FFE2A8'; ctx.beginPath(); ctx.arc(p[0], p[1], 2 + 3 * s, 0, TAU); ctx.fill(); }
    // ghost airports: pale runway + a dotted plane that flickers
    S7.GHOSTAP.forEach(([n, ll, rot, off], i) => { const p = this.pr0(ll); const t0 = 1114.1 + i * 0.32; const k = MG.prog(t, t0, t0 + 0.4); if (k <= 0) return; const fl = 0.55 + 0.45 * Math.abs(Math.sin(t * (9 + i * 2) + i)) * (Math.sin(t * 3 + i) > -0.3 ? 1 : 0.3);
      ctx.save(); ctx.globalAlpha = k; ctx.translate(p[0], p[1]); ctx.rotate(rot); ctx.fillStyle = 'rgba(200,215,240,0.35)'; ctx.fillRect(-34, -5, 68, 10); ctx.strokeStyle = 'rgba(230,240,255,0.7)'; ctx.setLineDash([5, 5]); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(-30, 0); ctx.lineTo(30, 0); ctx.stroke(); ctx.setLineDash([]); ctx.restore();
      ctx.save(); ctx.globalAlpha = k * fl; ctx.translate(p[0], p[1] - 26); ctx.rotate(-0.3); ctx.strokeStyle = 'rgba(235,240,255,0.95)'; ctx.setLineDash([3, 4]); ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-22, 0); ctx.lineTo(22, 0); ctx.moveTo(-4, 0); ctx.lineTo(-12, -16); ctx.moveTo(-4, 0); ctx.lineTo(-12, 16); ctx.moveTo(-18, 0); ctx.lineTo(-24, -7); ctx.moveTo(-18, 0); ctx.lineTo(-24, 7); ctx.stroke(); ctx.restore();
      MG.text.draw(ctx, n, p[0] + off[0], p[1] + off[1], { font: MG.F.mono, weight: 700, size: 22, color: `rgba(230,236,250,${0.85 * k})`, tracking: 0.14, align: off[0] < 0 ? 'right' : 'left' }); });
    ctx.restore();
    MG.geo.canaryInset(ctx, [140, 830, 250, 150], { fill: '#1C2436', frame: 'rgba(160,180,220,0.4)', labelColor: 'rgba(200,210,235,0.7)' });
    MG.text.spoken(ctx, MG.phrase('several of these ghost airports', 1114.7).words, 1780, 170, t, { font: MG.F.serif, italic: true, size: 70, color: '#E9E3F4', align: 'right', style: 'blur' });
  },
  post: { grade: 'night', vignette: 0.45 },
});

// ---------- E4 · an estate where nobody has ever lived ----------
S7.seVende = () => MG.cache('s7sevende', 256, 96, (x) => { x.fillStyle = '#F4EEE0'; x.fillRect(0, 0, 256, 96); x.fillStyle = P.rojo; x.fillRect(0, 0, 256, 14); x.fillRect(0, 82, 256, 14); MG.text.draw(x, 'SE VENDE', 128, 66, { font: MG.F.grotesk, weight: 800, size: 46, color: P.rojo, align: 'center' }); });
SC.push({
  id: 's07_e4_ghosttown', start: 1116.7, end: 1120.85,
  transIn: { type: 'blur', dur: 0.7, amount: 24 },
  init() { const r = MG.rng(61); this.ban = []; for (let s = 0; s < 2; s++) for (let k = 0; k < 7; k++) for (let f = 0; f < 6; f++) for (let c = 0; c < 4; c++) if (r() < 0.06 && f > 0) this.ban.push([s, k, f, c]); this.sky = MG.cache('s7e4sky', W, H, (x) => { MG.fx.vgrad(x, [[0, '#0C1022'], [0.55, '#1E2442'], [0.7, '#3A3350'], [1, '#3A3350']]); for (let i = 0; i < 90; i++) { x.fillStyle = `rgba(255,255,255,${0.2 + MG.rand(3, i) * 0.6})`; x.fillRect(MG.rand(4, i) * W, MG.rand(5, i) * 500, 1.6, 1.6); } }); },
  draw(ctx, t) {
    const zc = lerp(0, 700, MG.ease.inOutSine(lin(t, 1116.7, 1121.6))); const cam = { x: 40 * Math.sin(t * 0.3), y: -170, z: zc, pitch: -0.03, yaw: 0, roll: 0, fov: 54 };
    ctx.drawImage(this.sky, 0, 0); const hz = S7.pj(0, 0, 1e6, cam)[1]; MG.fx.glow(ctx, 960, hz, 700, '#E9A06A', 0.25);
    const quad = (pts, fill) => { const q = S7.ppoly(pts, cam); if (!q) return null; ctx.fillStyle = fill; ctx.beginPath(); q.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.fill(); return q; };
    // ground: road + pavements
    quad([[-2000, 0, zc + 60], [2000, 0, zc + 60], [2000, 0, 9000], [-2000, 0, 9000]], '#24222A'); quad([[-330, 0, zc + 60], [330, 0, zc + 60], [330, 0, 9000], [-330, 0, 9000]], '#1A1A20');
    for (let zz = 300; zz < 8000; zz += 500) quad([[-6, -0.1, zz], [6, -0.1, zz], [6, -0.1, zz + 220], [-6, -0.1, zz + 220]], 'rgba(200,190,170,0.35)');
    // street lamps (pools of light first)
    for (let k = 0; k < 9; k++) for (const s of [-1, 1]) { const zz = 500 + k * 820 + (s > 0 ? 410 : 0); const g = S7.pj(s * 380, 0, zz, cam); if (g[3] < 30) continue; const fl = (k === 3 && s > 0) ? (Math.sin(t * 30) > 0.2 ? 1 : 0.25) : 1; ctx.save(); ctx.translate(g[0], g[1]); ctx.scale(1, 0.35); MG.fx.glow(ctx, 0, 0, 260 * g[2], '#F5B85A', 0.4 * fl); ctx.restore(); }
    // façades (far → near)
    const bl = []; for (let k = 6; k >= 0; k--) for (const s of [-1, 1]) bl.push([s, k]);
    for (const [s, k] of bl) { const z0 = 400 + k * 1000, z1 = z0 + 860; const x = s * 620; const Hh = 1700; if (z1 < zc + 30) continue; const zz0 = Math.max(z0, zc + 40);
      const fq = quad([[x, 0, zz0], [x, 0, z1], [x, -Hh, z1], [x, -Hh, zz0]], MG.col.mix('#3A3A4A', '#4E4A58', k / 7)); if (!fq) continue;
      quad([[x, -Hh, z1], [x + s * 400, -Hh, z1], [x + s * 400, 0, z1], [x, 0, z1]], '#2C2C38');
      for (let f = 0; f < 6; f++) for (let c = 0; c < 4; c++) { const wz0 = z0 + 60 + c * 200, wz1 = wz0 + 110, wy0 = -150 - f * 260, wy1 = wy0 - 150; if (wz0 < zc + 50) continue; const lit = (s > 0 && k === 1 && f === 3 && c === 2) ? (t > TW('nobody', 1119.1) && t < TW('nobody', 1119.1) + 0.55 ? 1 : 0) : 0;
        quad([[x - s * 2, wy0, wz0], [x - s * 2, wy0, wz1], [x - s * 2, wy1, wz1], [x - s * 2, wy1, wz0]], lit ? '#F2C77A' : '#161A28');
        if (f > 0) quad([[x - s * 2, wy0 + 6, wz0 - 10], [x - s * 2, wy0 + 6, wz1 + 10], [x - s * 60, wy0 + 6, wz1 + 10], [x - s * 60, wy0 + 6, wz0 - 10]], '#5A5868'); }
      for (const [bs, bk, bf, bc] of this.ban) { if (bs !== (s > 0 ? 1 : 0) || bk !== k) continue; const wz0 = z0 + 60 + bc * 200; const pts = S7.ppoly([[x - s * 60, -150 - bf * 260 + 70, wz0 - 10], [x - s * 60, -150 - bf * 260 + 70, wz0 + 140], [x - s * 60, -150 - bf * 260 + 10, wz0 + 140], [x - s * 60, -150 - bf * 260 + 10, wz0 - 10]], cam); if (pts) MG.persp.quad(ctx, S7.seVende(), s > 0 ? [pts[1], pts[0], pts[3], pts[2]] : [pts[0], pts[1], pts[2], pts[3]], 1); } }
    // lamp posts
    for (let k = 8; k >= 0; k--) for (const s of [-1, 1]) { const zz = 500 + k * 820 + (s > 0 ? 410 : 0); if (zz < zc + 80) continue; const a = S7.pj(s * 380, 0, zz, cam), b = S7.pj(s * 380, -560, zz, cam); ctx.strokeStyle = '#121218'; ctx.lineWidth = Math.max(1, 14 * a[2]); ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); const fl = (k === 3 && s > 0) ? (Math.sin(t * 30) > 0.2 ? 1 : 0.25) : 1; MG.fx.glow(ctx, b[0], b[1], 90 * b[2] + 6, '#FFD08A', 0.7 * fl); }
    // a plastic bag drifting across the empty street
    const bx = lerp(-100, 1300, lin(t, 1117.0, 1120.9)), by = 900 - Math.abs(Math.sin(t * 2.3)) * 60; ctx.save(); ctx.translate(bx, by); ctx.rotate(t * 1.7); ctx.fillStyle = 'rgba(230,230,235,0.75)'; ctx.beginPath(); ctx.ellipse(0, 0, 22, 14 + 6 * Math.sin(t * 5), 0, 0, TAU); ctx.fill(); ctx.restore();
    MG.text.spoken(ctx, MG.phrase('where nobody has ever lived', 1118.7).words, 960, 160, t, { font: MG.F.serif, italic: true, size: 70, color: '#EDE6F5', align: 'center', style: 'blur' });
  },
  post: { grade: 'night', vignette: 0.48, sat: 0.92 },
});

// =====================================================================================================
// registration
// =====================================================================================================
SC.sort((a, b) => a.start - b.start);
// =====================================================================================================
// CH.F THE BURST (1120.85 → 1161.37) · CH.G TODAY · WHY (1161.37 → 1187.85)
// =====================================================================================================
const FIG = (ctx, x, y, h, i, o = {}) => S7.figure(ctx, x, y, h, { skin: SKINS[i % 5], hair: HAIRS[(i * 3) % 5], top: o.top || ['#4C6B8C', '#8A4A3A', '#5A6A3A', '#6A4A7A', '#3A5A6A', '#9A7A3A'][i % 6], bottom: o.bottom || ['#2E3440', '#3A3030', '#2A3A4A'][i % 3], hairStyle: ['short', 'long', 'curly', 'bun', 'short'][i % 5], seed: i + 3, ...o });
/** the bullring stand (sol y sombra): rows of seated spectators on a curved tier; shade covers a fraction from the left */
S7.ring = (ctx, t, shadeFrac, o = {}) => {
  // frontal view of a bullring "tendido": 10 curved rows × 10 seats = 100 people; the shade (sombra) creeps over them
  MG.fx.vgrad(ctx, [[0, '#E9C79A'], [1, '#D8A86E']]);
  const seats = []; for (let r = 0; r < 10; r++) { const y = 150 + r * 84; const sc = 0.62 + r * 0.05; for (let i = 0; i < 10; i++) { const x = 960 + (i - 4.5) * (150 + r * 6); seats.push({ r, i, x, y: y + Math.pow((x - 960) / 960, 2) * 70, s: sc }); } }
  // tiers (stone steps) behind each row
  for (let r = 0; r < 10; r++) { const y = 150 + r * 84 + 40; ctx.fillStyle = r % 2 ? '#C9B08A' : '#D6BE96'; ctx.beginPath(); ctx.moveTo(0, y + 70); for (let x = 0; x <= W; x += 40) ctx.lineTo(x, y + Math.pow((x - 960) / 960, 2) * 70); ctx.lineTo(W, y + 160); ctx.lineTo(0, y + 160); ctx.closePath(); ctx.fill(); ctx.fillStyle = 'rgba(80,50,30,0.25)'; ctx.fillRect(0, y - 2, W, 3); }
  // decide shade per seat along a diagonal axis so that exactly shadeFrac of the 100 are in shadow
  const ax = Math.cos(MG.deg(28)), ay = Math.sin(MG.deg(28)); const us = seats.map((q) => q.x * ax + q.y * ay).sort((p1, p2) => p1 - p2); const n = Math.round(shadeFrac * 100); const thr = n <= 0 ? -1e9 : n >= 100 ? 1e9 : (us[n - 1] + us[n]) / 2;
  for (const q of seats) { const idx = q.r * 10 + q.i; const young = o.young && idx % 2 === 0; S7.bust(ctx, q.x, q.y + 34, q.s * 1.05, { skin: SKINS[idx % 5], hair: HAIRS[(idx * 3) % 5], hairStyle: young ? 'curly' : ['short', 'long', 'curly', 'bun', 'short'][idx % 5], top: o.colors ? o.colors(idx) : ['#4C6B8C', '#8A4A3A', '#5A6A3A', '#6A4A7A', '#3A5A6A', '#9A7A3A'][idx % 6], young, sad: q.x * ax + q.y * ay < thr, seed: idx }); }
  // the shadow half-plane (soft edge) over the stand
  if (n > 0) { ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = 'rgba(58,43,58,0.6)'; const px = thr * ax, py = thr * ay; const dx = -ay, dy = ax; ctx.beginPath(); ctx.moveTo(px + dx * 3000, py + dy * 3000); ctx.lineTo(px - dx * 3000, py - dy * 3000); ctx.lineTo(px - dx * 3000 - ax * 4000, py - dy * 3000 - ay * 4000); ctx.lineTo(px + dx * 3000 - ax * 4000, py + dy * 3000 - ay * 4000); ctx.closePath(); ctx.fill(); ctx.restore(); }
  ctx.fillStyle = '#9E2A22'; ctx.fillRect(0, 1000, W, 80); ctx.fillStyle = '#F2C230'; ctx.fillRect(0, 1000, W, 8);
};
S7.ringFrac = (frac) => frac; // the wedge spans the visible 10 columns

// ---- F1 · 1120.85 · the bubble bursts in 2008
{ const tBub = TW('bubble', 1121.3), tBur = TW('bursts', 1121.8), t2008 = TW('2008,', 1122.6);
SC.push({ id: 's07_bubble', start: 1120.85, end: 1123.95, transIn: { type: 'blur', dur: 0.5 },
  draw(ctx, t) {
    MG.fx.vgrad(ctx, [[0, '#BFC8D2'], [1, '#E8E2D6']]); const kp = pr(t, tBur - 0.05, tBur + 0.25, 'outExpo'); const R = 330 * (1 + 0.04 * Math.sin(t * 3)) * (1 + kp * 0.15);
    const cx = 960, cy = 470 + MG.wiggle(t, 0.4, 8, 2);
    if (kp < 1) { ctx.save(); ctx.globalAlpha = 1 - kp; ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.clip(); MG.fx.vgrad(ctx, [[0, '#F6D7A0'], [1, '#F3B778']], cx - R, cy - R, R * 2, R * 2);
      for (let i = 0; i < 6; i++) { const hx = cx - 260 + i * 100, hh2 = 90 + (i % 3) * 50; ctx.fillStyle = '#F4EFE6'; ctx.fillRect(hx, cy + 140 - hh2, 80, hh2); ctx.fillStyle = 'rgba(80,60,60,0.18)'; ctx.fillRect(hx + 56, cy + 140 - hh2, 24, hh2); }
      ctx.strokeStyle = '#E2A21A'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(cx + 120, cy + 150); ctx.lineTo(cx + 120, cy - 160); ctx.lineTo(cx - 140, cy - 160); ctx.moveTo(cx + 120, cy - 120); ctx.lineTo(cx + 200, cy - 160); ctx.stroke();
      ctx.restore();
      // iridescent skin
      ctx.save(); ctx.globalAlpha = (1 - kp) * 0.8; const g = ctx.createRadialGradient(cx - R * 0.4, cy - R * 0.45, R * 0.05, cx, cy, R); g.addColorStop(0, 'rgba(255,255,255,0.7)'); g.addColorStop(0.6, 'rgba(255,255,255,0.05)'); g.addColorStop(0.86, 'rgba(160,200,255,0.25)'); g.addColorStop(0.95, 'rgba(255,170,220,0.45)'); g.addColorStop(1, 'rgba(255,255,255,0.0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.fill(); ctx.restore(); }
    if (kp > 0) { // droplets + falling bricks
      MG.fx.particles(ctx, { n: 80, seed: 31, t: (t - tBur) * 0.25, area: [cx - R, cy - R, R * 2, R * 2], vel: [0, 0], life: 4, size: [2, 5], color: '#DDEBFF', alpha: 0.7 * (1 - kp * 0.5), gravity: 0 });
      for (let i = 0; i < 18; i++) { const tt = Math.max(0, t - tBur); const x = cx - 260 + (i % 6) * 100 + (MG.rand(4, i) - 0.5) * 80 + tt * (MG.rand(5, i) - 0.5) * 300; const y = cy + 60 - (i / 6 | 0) * 40 + 0.5 * 2200 * tt * tt; if (y > H + 50) continue; ctx.save(); ctx.translate(x, y); ctx.rotate(tt * (MG.rand(6, i) * 6 - 3)); ctx.fillStyle = C.brick || '#B5543A'; ctx.fillRect(-26, -12, 52, 24); ctx.strokeStyle = 'rgba(40,20,10,0.4)'; ctx.lineWidth = 2; ctx.strokeRect(-26, -12, 52, 24); ctx.restore(); } }
    // 2008 stamped on the brick pile at the bottom
    const k8 = pr(t, t2008 - 0.2, t2008 + 0.3, 'outBack'); if (k8 > 0) { ctx.save(); ctx.translate(960, 900); ctx.scale(k8, k8); S7.type(ctx, '2008', 0, 0, { font: MG.F.cond, weight: 900, size: 240, color: C.crisisInk || '#1d1d1f', align: 'center' }); ctx.restore(); }
  },
  post: { grade: 'cool', vignette: 0.36 } }); }

// ---- F2 · 1123.95 · Spain falls harder than any European country except Greece — the countries sink as slabs on a tilted map
{ const tHard = TW('harder', 1124.6), tExc = TW('except', 1126.2), tGreece = TW('Greece.', 1126.9);
SC.push({ id: 's07_sink', start: 1123.95, end: 1127.73, transIn: { type: 'zoom', dur: 0.45, x: 960, y: 900, amount: 1.5, from: 0.88 },
  init() { this.pr = MG.geo.proj('conic', { center: [10, 47], scale: 1250, translate: [960, 560] }); },
  draw(ctx, t) {
    const prj = this.pr; ctx.fillStyle = '#8FA7B8'; ctx.fillRect(0, 0, W, H); const drop = { Spain: 46, Greece: 64, Italy: 18, Portugal: 22, Ireland: 24, France: 8, Germany: 4, 'United Kingdom': 10, Netherlands: 7, Belgium: 6, Austria: 5, Poland: 2, Sweden: 6, Denmark: 8 };
    const kd = pr(t, tHard - 0.3, tGreece + 0.4, 'inOutCubic');
    for (const f of MG.geo.world50.features) { const n = f.properties.name; const c = window.d3.geoCentroid(f); if (c[0] < -26 || c[0] > 45 || c[1] < 33 || c[1] > 71) continue; const d = (drop[n] || 3) * kd; MG.geo.slab(ctx, prj, f, { depth: 10 + d * 0.0, top: n === 'Spain' ? P.rojo : n === 'Greece' ? '#7E1F1B' : '#DCD6CA', side: '#4A4440', dir: [0, 1], shadow: false, edge: false, stroke: 'rgba(40,30,30,0.35)', width: 0.8 });
      if (d > 2) { ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.translate(0, 0); MG.geo.draw(ctx, prj, f, { fill: `rgba(30,20,40,${Math.min(0.55, d / 90)})` }); ctx.restore(); } }
    // depth gauges under Spain and Greece
    for (const [n, ll, d, t0] of [['SPAIN', [-3.7, 40.2], 46, tHard], ['GREECE', [22.5, 39.2], 64, tExc]]) { const k = pr(t, t0 - 0.2, t0 + 0.6, 'inOutCubic'); const p = prj(ll); if (!p || k <= 0) continue; ctx.save(); ctx.strokeStyle = '#1d1d1f'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(p[0], p[1] + d * 4 * k); ctx.stroke(); MG.fx.arrowHead(ctx, [[p[0], p[1]], [p[0], p[1] + d * 4 * k]], 18, '#1d1d1f'); S7.halo(ctx, n, p[0] + 14, p[1] + d * 4 * k, { size: 26, color: n === 'SPAIN' ? P.rojo : '#7E1F1B' }); ctx.restore(); }
    S7.mono(ctx, 'the hardest falls in Europe', 140, 150, t, tHard - 0.1, { size: 26, color: '#1d1d1f' });
  },
  post: { grade: 'cool', vignette: 0.36, sat: 0.85 } }); }

// ---- F3 · 1127.7 · the bullring: unemployment 26 % → youth 55 % → more than half of under-25s
{ const t26 = TW('26', 1129.5), tYouth = TW('Youth', 1130.53), t55 = TW('55', 1132.0), tHalf = TW('half', 1134.4), t25 = TW('25', 1135.9);
SC.push({ id: 's07_ring', start: 1127.73, end: 1137.48, transIn: { type: 'zoom', dur: 0.5, x: 960, y: 560, amount: 1.4, from: 0.85 },
  draw(ctx, t) {
    const young = t > tYouth - 0.2; const frac = MG.keys(t, [[1127.73, 0], [t26 + 0.3, 0.26, 'inOutCubic'], [tYouth, 0.26], [t55 + 0.4, 0.55, 'inOutCubic'], [tHalf, 0.55], [t25 + 0.4, 0.56]]);
    const z = MG.keys(t, [[1127.73, 1.0], [tYouth, 1.02], [t25 + 0.5, 1.12, 'inOutSine'], [1137.5, 1.14]]); ctx.save(); ctx.translate(960, 540); ctx.scale(z, z); ctx.translate(-960, -540);
    S7.ring(ctx, t, frac, { young, colors: young ? (i) => ['#E07B24', '#2FA7A0', '#C8322B', '#6A4A7A', '#F2C230'][i % 5] : undefined }); ctx.restore();
    const big = t < tYouth ? '26 %' : '55 %'; const k = t < tYouth ? pr(t, t26 - 0.2, t26 + 0.4, 'outBack') : pr(t, t55 - 0.2, t55 + 0.4, 'outBack');
    ctx.save(); ctx.translate(330, 560); ctx.scale(k, k); ctx.fillStyle = 'rgba(30,20,30,0.55)'; ctx.fillRect(-230, -190, 460, 260); S7.type(ctx, big, 0, 0, { font: MG.F.cond, weight: 900, size: 200, color: '#F4EFE6', align: 'center', sc: 'rgba(0,0,0,0.5)' }); ctx.restore();
    S7.mono(ctx, t < tYouth ? 'unemployment · 2013' : 'youth unemployment', 330, 610, t, t < tYouth ? t26 : tYouth, { align: 'center', size: 24, color: '#F4EFE6' });
    if (t > tHalf - 0.2) S7.type(ctx, 'more than half of under-25s', 1300, 110, { font: MG.F.serif, italic: true, size: 56, color: '#1d1d1f', align: 'center', alpha: pr(t, tHalf - 0.2, tHalf + 0.4) });
  },
  post: { grade: 'warm', vignette: 0.36, sat: 0.95 } }); }

// ---- F4 · 1137.5 · half a million families evicted — a corridor of front doors closing one by one
{ const tHalf = TW('Half', 1137.48), tFam = TW('families', 1138.4), tEv = TW('evicted', 1139.2);
SC.push({ id: 's07_evict', start: 1137.48, end: 1141.48, transIn: { type: 'push', dir: 'left', dur: 0.45 },
  draw(ctx, t) {
    MG.fx.vgrad(ctx, [[0, '#3A3A40'], [1, '#1E1E22']]); const cam = { x: 0, y: -1.6, z: 0 + pr(t, 1137.48, 1141.6, 'inOutSine') * 1.6, fov: 55 };
    // floor & walls in perspective
    const quad = (pts, col) => { const q = S7.ppoly(pts, cam); if (!q) return; ctx.fillStyle = col; ctx.fill(S7.path(q)); };
    for (let zz = 6; zz < 34; zz += 2) { quad([[-2, 0, zz], [2, 0, zz], [2, 0, zz + 2], [-2, 0, zz + 2]], zz % 4 ? '#5A524A' : '#625A50'); quad([[-2, 0, zz], [-2, -3.2, zz], [-2, -3.2, zz + 2], [-2, 0, zz + 2]], MG.col.mix('#9A9286', '#3A3630', (zz - 6) / 30)); quad([[2, 0, zz], [2, -3.2, zz], [2, -3.2, zz + 2], [2, 0, zz + 2]], MG.col.mix('#8A8276', '#34302A', (zz - 6) / 30)); quad([[-2, -3.2, zz], [2, -3.2, zz], [2, -3.2, zz + 2], [-2, -3.2, zz + 2]], MG.col.mix('#7A7268', '#2E2A26', (zz - 6) / 30)); }
    for (let i = 9; i >= 0; i--) for (const side of [-1, 1]) { const z0 = 7 + i * 2.6; const k = pr(t, tFam - 0.6 + (9 - i) * 0.1 + (side > 0 ? 0.05 : 0), tFam - 0.2 + (9 - i) * 0.1, 'inCubic'); const xw = side * 2; const open = 1 - k; // door leaf rotates shut
      const fr = S7.ppoly([[xw, 0, z0], [xw, -2.2, z0], [xw, -2.2, z0 + 1.1], [xw, 0, z0 + 1.1]], cam); if (!fr) continue; ctx.fillStyle = `rgba(255,210,150,${0.55 * open})`; ctx.fill(S7.path(fr));
      const ang = open * 1.25; const dx = -side * Math.sin(ang) * 1.1, dz = Math.cos(ang) * 1.1; const lf = S7.ppoly([[xw, 0, z0], [xw, -2.2, z0], [xw + dx, -2.2, z0 + dz], [xw + dx, 0, z0 + dz]], cam); if (lf) { ctx.fillStyle = MG.col.mix('#6E4A30', '#3A2A20', k); ctx.fill(S7.path(lf)); ctx.strokeStyle = 'rgba(0,0,0,0.4)'; ctx.lineWidth = 2; ctx.stroke(S7.path(lf)); }
      if (k > 0.95) { const no = S7.ppoly([[xw - side * 0.02, -1.5, z0 + 0.3], [xw - side * 0.02, -1.2, z0 + 0.3], [xw - side * 0.02, -1.2, z0 + 0.8], [xw - side * 0.02, -1.5, z0 + 0.8]], cam); if (no) { ctx.fillStyle = '#F4EFE6'; ctx.fill(S7.path(no)); } } }
    const kc = pr(t, tHalf - 0.1, tHalf + 0.5); ctx.save(); ctx.globalAlpha = kc; S7.type(ctx, S7.count(t, tHalf - 0.1, tEv + 0.6, 0, 500000), 960, 220, { font: MG.F.cond, weight: 900, size: 160, color: '#F4EFE6', align: 'center' }); ctx.restore(); S7.mono(ctx, 'families evicted', 960, 280, t, tEv - 0.1, { align: 'center', color: '#F2C9A0', size: 26 });
  },
  post: { grade: 'night', vignette: 0.5, sat: 0.8 } }); }

// ---- F5 · 1141.5 · the young & educated leave for Germany and Britain — to work as waiters
{ const tHund = TW('Hundreds', 1141.48), tEdu = TW('educated', 1143.4), tGer = TW('Germany', 1144.7), tBri = TW('Britain', 1145.6), tWait = TW('waiters.', 1147.3);
SC.push({ id: 's07_leave', start: 1141.48, end: 1148.01, transIn: { type: 'blur', dur: 0.45 },
  init() { this.pr = MG.geo.proj('conic', { center: [2.5, 46.5], scale: 2100, translate: [960, 560] }); this.map = S7.cacheMap('leave', this.pr, { neigh: ['France', 'Portugal', 'Morocco', 'Germany', 'United Kingdom', 'Ireland', 'Belgium', 'Netherlands', 'Switzerland', 'Italy', 'Austria', 'Denmark', 'Czechia', 'Luxembourg'], land: '#DCD6CA', spain: '#E9C99A' }); },
  draw(ctx, t) {
    const kw = pr(t, tWait - 0.8, tWait + 0.1, 'inOutCubic');
    ctx.drawImage(this.map, 0, 0); const prj = this.pr; const src = prj(MG.geo.cities.Madrid);
    const dst = [[MG.geo.cities.Berlin, tGer - 0.3], [MG.geo.cities.Munich, tGer], [MG.geo.cities.Frankfurt, tGer + 0.2], [MG.geo.cities.London, tBri - 0.2], [[-2.24, 53.48], tBri + 0.1]];
    dst.forEach(([ll, t0], j) => { const b = prj(ll); for (let i = 0; i < 7; i++) { const u = MG.fract((t - t0) * 0.5 + i / 7); if (t < t0) continue; const x = lerp(src[0], b[0], u), y = lerp(src[1], b[1], u) - Math.sin(u * Math.PI) * 120; ctx.fillStyle = '#1d1d1f'; ctx.beginPath(); ctx.arc(x, y, 4, 0, TAU); ctx.fill(); } const pts = []; for (let u = 0; u <= 1.001; u += 0.05) pts.push([lerp(src[0], b[0], u), lerp(src[1], b[1], u) - Math.sin(u * Math.PI) * 120]); MG.fx.line(ctx, pts, { color: 'rgba(30,30,30,0.35)', width: 2, dash: [6, 6], progress: pr(t, t0 - 0.2, t0 + 0.6) }); });
    S7.mapLabel(ctx, prj, MG.geo.cities.Berlin, t, tGer - 0.2, 'GERMANY', { dotColor: '#1d1d1f' }); S7.mapLabel(ctx, prj, MG.geo.cities.London, t, tBri - 0.2, 'BRITAIN', { dotColor: '#1d1d1f' });
    // the graduate becomes a waiter (character card in the foreground, lit by a café lamp)
    const fx = 1560, fy = 1010; ctx.save(); MG.fx.contact(ctx, fx, fy, 120, 18, 0.35);
    const grad = (c, o2) => S7.figure(c, fx, fy, 520, { skin: C.skin4, hair: C.hair2, hairStyle: 'short', top: o2.top, bottom: '#1d1d1f', seed: 9, look: -0.4, ...o2 });
    ctx.save(); ctx.beginPath(); ctx.rect(fx - 300, 0, 600, H); ctx.clip();
    if (kw < 1) { ctx.save(); ctx.globalAlpha = 1 - kw; grad(ctx, { top: '#2E3440', prop: (c, s) => { c.fillStyle = '#1d1d1f'; c.beginPath(); c.moveTo(-60, s.hy - 56); c.lineTo(60, s.hy - 56); c.lineTo(0, s.hy - 80); c.closePath(); c.fill(); c.fillRect(-30, s.hy - 60, 60, 16); c.save(); c.translate(70, s.shY + 70); c.rotate(-0.4); c.fillStyle = '#F4EFE6'; c.fillRect(-12, -50, 24, 100); c.fillStyle = P.rojo; c.fillRect(-13, -8, 26, 10); c.restore(); } }); ctx.restore(); }
    if (kw > 0) { ctx.save(); ctx.globalAlpha = kw; grad(ctx, { top: '#F4EFE6', vest: '#1d1d1f', apron: '#1d1d1f', arms: [0.2, -1.9], prop: (c, s) => { c.save(); c.translate(120, s.shY - 30); c.fillStyle = '#C9CDD2'; c.beginPath(); c.ellipse(0, 0, 80, 14, 0, 0, TAU); c.fill(); c.fillStyle = '#F2C230'; c.fillRect(-40, -46, 22, 44); c.fillStyle = '#E6DFD0'; c.fillRect(-6, -40, 18, 38); c.fillRect(24, -34, 16, 32); c.restore(); } }); ctx.restore(); }
    ctx.restore(); ctx.restore();
    S7.mono(ctx, kw < 0.5 ? 'young · educated' : 'waiter', fx, 200, t, kw < 0.5 ? tEdu - 0.1 : tWait - 0.5, { align: 'center', size: 26, color: '#1d1d1f' });
    if (t > tHund) S7.type(ctx, 'hundreds of thousands', 140, 170, { font: MG.F.display, weight: 800, size: 72, color: '#1d1d1f', alpha: pr(t, tHund, tHund + 0.5) });
  },
  post: { grade: 'cool', vignette: 0.34 } }); }

// ---- F6 · 1148.0 · "ni-ni" — neither in school nor working (paste-up on a wall above a row of young people)
{ const tGen = TW('generation', 1148.6), tNini = TW('“ni-ni”—neither', 1150.4) || 1150.4, tSchool = TW('school', 1151.9), tWork = TW('working.', 1152.7);
SC.push({ id: 's07_nini', start: 1148.01, end: 1153.81, transIn: { type: 'zoom', dur: 0.5, x: 1560, y: 600, amount: 1.4, from: 0.88 },
  draw(ctx, t) {
    ctx.fillStyle = '#B9B2A6'; ctx.fillRect(0, 0, W, H); MG.tex.over(ctx, 'blotch', { alpha: 0.3, color: '#4a4440', scale: 3 }); for (let y = 0; y < H; y += 90) { ctx.fillStyle = 'rgba(0,0,0,0.05)'; ctx.fillRect(0, y, W, 2); }
    // the paste-up poster
    const kp = pr(t, tNini - 0.6, tNini + 0.1, 'inOutCubic'); ctx.save(); ctx.translate(960, 90); ctx.rotate(-0.02); const ph = 420 * kp; ctx.fillStyle = '#F2EBDD'; ctx.fillRect(-520, 0, 1040, ph); if (ph > 200) { ctx.beginPath(); ctx.rect(-520, 0, 1040, ph); ctx.clip(); S7.type(ctx, 'NI-NI', 0, 300, { font: MG.F.stencil2, weight: 900, size: 300, color: '#1d1d1f', align: 'center', shadow: false }); } ctx.restore();
    // a row of young people sitting on the kerb below
    for (let i = 0; i < 9; i++) { const x = 200 + i * 190; S7.figure(ctx, x, 1060, 380, { skin: SKINS[i % 5], hair: HAIRS[(i + 2) % 5], top: ['#2FA7A0', '#C8322B', '#6A4A7A', '#F2C230', '#3A5A6A'][i % 5], bottom: '#2E3440', hairStyle: ['curly', 'long', 'short', 'bun', 'short'][i % 5], seed: 20 + i, look: Math.sin(t + i) * 0.4, lean: Math.sin(i * 1.3) * 0.06 }); }
    // "school" and "work" struck out in marker
    [['SCHOOL', 560, tSchool], ['WORK', 1360, tWork]].forEach(([w, x, t0]) => { const k = pr(t, t0 - 0.1, t0 + 0.3); if (k <= 0) return; ctx.save(); ctx.globalAlpha = k; S7.type(ctx, w, x, 600, { font: MG.F.marker, size: 96, color: '#1d1d1f', align: 'center', shadow: false }); const kk = pr(t, t0 + 0.2, t0 + 0.55, 'inOutCubic'); ctx.strokeStyle = P.rojo; ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x - 180, 570); ctx.lineTo(x - 180 + 360 * kk, 560); ctx.stroke(); ctx.restore(); });
    S7.mono(ctx, 'a whole generation', 140, MG.LANG === 'fr' ? 470 : 560, t, tGen - 0.1, { size: 24, color: '#1d1d1f' });
  },
  post: { grade: 'bleach', vignette: 0.36 } }); }

// ---- F7 · 1153.8 · Spain borrows €40 billion from Europe to rescue its banks — a bank sinking, Europe's ring of stars as a lifebuoy
{ const tBor = TW('borrows', 1154.1), t40 = TW('€40', 1155.0) || 1155.0, tEur = TW('Europe', 1156.3), tRes = TW('rescue', 1156.9);
SC.push({ id: 's07_bailout', start: 1153.81, end: 1158.44, transIn: { type: 'blur', dur: 0.45 },
  draw(ctx, t) {
    MG.fx.vgrad(ctx, [[0, '#2A3440'], [1, '#0E141C']]); const sink = lerp(0, 120, pr(t, 1153.8, tEur, 'inOutSine')) - lerp(0, 90, pr(t, tRes - 0.2, tRes + 1.2, 'outBack'));
    // the bank (neo-classical portico) half under water
    ctx.save(); ctx.translate(960, 640 + sink); ctx.fillStyle = '#C9C6BF'; ctx.beginPath(); ctx.moveTo(-360, -260); ctx.lineTo(0, -380); ctx.lineTo(360, -260); ctx.closePath(); ctx.fill(); ctx.fillRect(-340, -260, 680, 40); for (let i = 0; i < 6; i++) { const x = -300 + i * 120; MG.fx.volume(ctx, MG.path.rr(x - 26, -220, 52, 400, 4), [x - 26, -220, 52, 400], { color: '#D8D4CC', shade: 0.4, hi: 0.3, cel: true }); } ctx.fillStyle = '#A9A6A0'; ctx.fillRect(-360, 180, 720, 40); S7.type(ctx, 'BANCO', 0, -280, { font: MG.F.roman, weight: 700, size: 40, color: '#4A4440', align: 'center', shadow: false }); ctx.restore();
    // black water surface with ripples
    ctx.fillStyle = 'rgba(8,12,18,0.82)'; ctx.fillRect(0, 700, W, 380); ctx.strokeStyle = 'rgba(160,190,220,0.25)'; ctx.lineWidth = 2; for (let i = 0; i < 12; i++) { ctx.beginPath(); for (let x = 0; x <= W; x += 20) ctx.lineTo(x, 708 + i * 30 + Math.sin(x * 0.01 + t * 2 + i) * 4); ctx.stroke(); }
    // the EU ring of 12 stars descends as a lifebuoy
    const kb = pr(t, tEur - 0.6, tRes + 0.2, 'inOutCubic'); const by = lerp(-200, 470, kb); ctx.save(); ctx.translate(960, by); ctx.strokeStyle = '#24408E'; ctx.lineWidth = 46; ctx.beginPath(); ctx.ellipse(0, 0, 300, 90, 0, 0, TAU); ctx.stroke(); for (let i = 0; i < 12; i++) { const a = i / 12 * TAU; const sx = Math.cos(a) * 300, sy = Math.sin(a) * 90; ctx.fillStyle = '#F2C230'; ctx.fill(MG.path.star(sx, sy, 16, 7, 5)); } ctx.restore();
    if (t > t40 - 0.2) { const k = pr(t, t40 - 0.2, t40 + 0.4, 'outBack'); ctx.save(); ctx.translate(960, 220); ctx.scale(k, k); S7.type(ctx, '€40 bn', 0, 0, { font: MG.F.cond, weight: 900, size: 170, color: '#F4EFE6', align: 'center' }); ctx.restore(); S7.mono(ctx, 'to rescue the banks', 960, 280, t, tRes - 0.2, { align: 'center', color: '#C9D6E2', size: 26 }); }
  },
  post: { grade: 'night', vignette: 0.45 } }); }

// ---- F8 · 1158.4 · it takes ten years to climb out — ten steps 2008 → 2018, a small figure climbs into the light
{ const tTen = TW('ten', 1159.3), tOut = TW('out.', 1160.7);
SC.push({ id: 's07_climb', start: 1158.44, end: 1161.37, transIn: { type: 'zoom', dur: 0.4, x: 960, y: 900, amount: 1.4, from: 0.9 },
  draw(ctx, t) {
    MG.fx.vgrad(ctx, [[0, '#F6D7A0'], [0.4, '#8A8A8E'], [1, '#2A2E36']]); const k = pr(t, 1158.5, 1161.3, 'inOutSine');
    for (let i = 0; i < 10; i++) { const x = 320 + i * 132, y = 960 - i * 66; const p = new Path2D(); p.rect(x, y, 132, H - y); ctx.fillStyle = MG.col.mix('#4A4A50', '#D9C9A8', i / 9); ctx.fill(p); ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.fillRect(x, y, 132, 6); S7.type(ctx, String(2008 + i + (i === 9 ? 1 : 0)), x + 66, y + 44, { font: MG.F.mono, weight: 600, size: 22, color: i > 5 ? '#3A2A20' : '#D8DCE2', align: 'center', shadow: false }); }
    const step = k * 9.2; const si = Math.floor(step), sf = step - si; const x = 320 + step * 132 + 66, y = 960 - si * 66 - Math.sin(sf * Math.PI) * 40 - (sf > 0.5 ? 66 * (sf - 0.5) * 2 : 0);
    MG.fx.glow(ctx, 1640, 240, 520, '#FFE2A8', 0.6 * k); S7.figure(ctx, x, y, 170, { skin: C.skin1, hair: C.hair1, top: '#C8322B', bottom: '#2E3440', walk: step * Math.PI, seed: 5 });
    S7.type(ctx, '10 years', 140, 180, { font: MG.F.display, weight: 800, size: 96, color: '#1d1d1f', alpha: pr(t, tTen - 0.2, tTen + 0.4) });
  },
  post: { grade: 'warm', vignette: 0.32 } }); }

// ---- G1 · 1161.4 · today ≈ 11 %, still the EU's highest — the bullring again, then a spotlight on the EU map · "Why?"
{ const tToday = TW('Today,', 1161.37), t11 = TW('11', 1163.2), tHigh = TW('highest', 1165.2), tEU = TW('European', 1165.9), tWhy = TW('Why?', 1167.48);
SC.push({ id: 's07_today', start: 1161.37, end: 1168.52, transIn: { type: 'blur', dur: 0.45 },
  init() { this.pr = MG.geo.proj('conic', { center: [12, 50], scale: 1300, translate: [960, 560] }); },
  draw(ctx, t) {
    const km = pr(t, tHigh - 0.9, tHigh - 0.1, 'inOutCubic');
    if (km < 1) { ctx.save(); ctx.globalAlpha = 1 - km; S7.ring(ctx, t, MG.keys(t, [[1161.37, 0.55], [t11 + 0.3, 0.11, 'inOutCubic']])); const k = pr(t, t11 - 0.2, t11 + 0.4, 'outBack'); ctx.save(); ctx.translate(1590, 560); ctx.scale(k, k); ctx.fillStyle = 'rgba(250,240,220,0.75)'; ctx.fillRect(-230, -190, 460, 260); S7.type(ctx, '≈11 %', 0, 0, { font: MG.F.cond, weight: 900, size: 200, color: '#1d1d1f', align: 'center' }); ctx.restore(); S7.mono(ctx, 'unemployment today', 1590, 610, t, t11, { align: 'center', size: 24, color: '#1d1d1f' }); ctx.restore(); }
    if (km > 0) { ctx.save(); ctx.globalAlpha = km; ctx.fillStyle = '#1E2028'; ctx.fillRect(0, 0, W, H); const prj = this.pr; const eu = ['Spain', 'Portugal', 'France', 'Italy', 'Germany', 'Austria', 'Belgium', 'Netherlands', 'Luxembourg', 'Ireland', 'Denmark', 'Sweden', 'Finland', 'Poland', 'Czechia', 'Slovakia', 'Hungary', 'Slovenia', 'Croatia', 'Romania', 'Bulgaria', 'Greece', 'Cyprus', 'Malta', 'Estonia', 'Latvia', 'Lithuania'];
      for (const f of MG.geo.world50.features) { const c = window.d3.geoCentroid(f); if (c[0] < -26 || c[0] > 45 || c[1] < 33 || c[1] > 71) continue; const n = f.properties.name; MG.geo.draw(ctx, prj, f, { fill: n === 'Spain' ? P.sol : eu.includes(n) ? '#4A4E5A' : '#2E313A', stroke: 'rgba(0,0,0,0.5)', width: 0.8 }); }
      const sp = prj([-3.7, 40.2]); ctx.save(); ctx.globalCompositeOperation = 'screen'; const g = ctx.createRadialGradient(sp[0], sp[1], 10, sp[0], sp[1], 300); g.addColorStop(0, 'rgba(255,220,150,0.55)'); g.addColorStop(1, 'rgba(255,220,150,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); ctx.restore(); MG.kit.sun(ctx, sp[0] - 260, sp[1] - 360, 46, t, { corona: 0.6, rays: 0.4 });
      S7.halo(ctx, 'HIGHEST IN THE EU', sp[0] + 40, sp[1] + 10, { size: 32, color: '#1d1d1f', halo: 'rgba(250,236,200,0.95)' }); ctx.restore(); }
    if (t > tWhy - 0.1) { const k = pr(t, tWhy - 0.1, tWhy + 0.4, 'outBack'); const FRw = MG.LANG === 'fr'; ctx.save(); ctx.translate(FRw ? 1560 : 1500, FRw ? 860 : 820); ctx.scale(k, k); S7.type(ctx, 'Why?', 0, 0, { font: MG.F.display, italic: true, weight: 900, size: FRw ? 130 : 160, color: '#F4EFE6', align: 'center' }); ctx.restore(); }
  },
  post: { grade: 'cool', vignette: 0.4 } }); }

// ---- G2 · 1168.5 · seasonal, low-paying work: the hotel opens in May and hires you, closes in October and lets you go
{ const tTour = TW('Tourism', 1168.52), tSeas = TW('seasonal,', 1170.3), tMay = TW('May', 1173.4), tHire = TW('hires', 1173.9), tOct = TW('October', 1176.0), tGo = TW('go.', 1177.2);
SC.push({ id: 's07_hotel', start: 1168.52, end: 1177.8, transIn: { type: 'zoom', dur: 0.5, x: 1500, y: 820, amount: 1.4, from: 0.88 },
  draw(ctx, t) {
    // month along the arc: Jan → Dec over the scene; sunlight only May → October
    const mon = MG.keys(t, [[1168.52, 1.5], [tMay - 0.3, 4.8, 'inOutSine'], [tHire + 0.8, 5.6], [tOct - 0.3, 9.7, 'inOutSine'], [tGo + 0.3, 10.6], [1177.8, 11.2]]); const open = mon >= 5 && mon < 10; const kl = clamp(Math.min(mon - 4.6, 10.2 - mon) * 2.5);
    MG.fx.vgrad(ctx, [[0, MG.col.mix('#7A8494', '#F3C489', kl)], [1, MG.col.mix('#AEB4BC', '#F8E7C8', kl)]]);
    // the year arc with month ticks; the sun rides it
    ctx.save(); ctx.strokeStyle = 'rgba(30,30,30,0.35)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(960, 760, 820, 560, 0, Math.PI * 1.05, Math.PI * 1.95); ctx.stroke(); const ML = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']; for (let m = 0; m < 12; m++) { const a = Math.PI * 1.05 + (m + 0.5) / 12 * Math.PI * 0.9; const x = 960 + Math.cos(a) * 820, y = 760 + Math.sin(a) * 560; S7.type(ctx, ML[m], x, y - 16, { font: MG.F.mono, weight: 700, size: 24, color: m >= 4 && m <= 9 ? '#B8322A' : '#3A3A40', align: 'center', shadow: false }); }
    const sa = Math.PI * 1.05 + (mon / 12) * Math.PI * 0.9; MG.kit.sun(ctx, 960 + Math.cos(sa) * 820, 760 + Math.sin(sa) * 560, 52, t, { corona: 0.5 * kl, color: open ? P.sol : '#C9B08A' }); ctx.restore();
    // the beach hotel
    ctx.fillStyle = MG.col.mix('#C9C6BF', '#F4EFE6', kl); ctx.fillRect(620, 420, 680, 520); for (let r = 0; r < 6; r++) for (let c = 0; c < 8; c++) { ctx.fillStyle = open ? '#F2C98A' : '#4A4E5A'; ctx.fillRect(650 + c * 82, 450 + r * 78, 52, 44); }
    ctx.fillStyle = '#E9C99A'; ctx.fillRect(0, 940, W, 140); S7.type(ctx, 'HOTEL', 960, 410, { font: MG.F.retro, size: 64, color: open ? P.rojo : '#5A5A60', align: 'center', shadow: false });
    // the sign on the door: ABIERTO / CERRADO
    ctx.save(); ctx.translate(960, 880); ctx.rotate(MG.jiggle(t, tMay - 0.2, 0.3, 3, 4) + MG.jiggle(t, tOct - 0.2, 0.3, 3, 4)); ctx.fillStyle = open ? '#2FA7A0' : '#B8322A'; ctx.fillRect(-110, -30, 220, 60); S7.type(ctx, open ? 'ABIERTO' : 'CERRADO', 0, 14, { font: MG.F.grotesk, weight: 800, size: 34, color: '#F4EFE6', align: 'center', shadow: false }); ctx.restore();
    // the worker: walks in on "hires you", walks out on "lets you go"
    const kin = pr(t, tHire - 0.2, tHire + 0.8, 'inOutSine'), kout = pr(t, tGo - 0.4, tGo + 0.6, 'inOutSine'); const wx = lerp(lerp(260, 900, kin), 1700, kout); const walking = (kin > 0 && kin < 1) || (kout > 0 && kout < 1);
    S7.figure(ctx, wx, 1000, 330, { skin: C.skin2, hair: C.hair3, hairStyle: 'bun', top: '#F4EFE6', bottom: '#2E3440', apron: open || kout < 0.5 ? '#2FA7A0' : undefined, walk: walking ? t * 9 : null, seed: 12, look: kout > 0 ? 0.6 : -0.3 });
    S7.mono(ctx, 'seasonal · low-paid', 140, 170, t, tSeas - 0.1, { size: 28, color: '#1d1d1f' });
    if (t > tMay - 0.2 && t < tOct) S7.type(ctx, 'May: hired', 1540, 980, { font: MG.F.grotesk, weight: 800, size: 46, color: '#1d1d1f', align: 'center', alpha: pr(t, tMay - 0.2, tMay + 0.3) });
    if (t > tOct - 0.2) S7.type(ctx, 'October: let go', 1540, 980, { font: MG.F.grotesk, weight: 800, size: 46, color: P.rojo, align: 'center', alpha: pr(t, tOct - 0.2, tOct + 0.3) });
  },
  post: (t) => ({ grade: 'warm', vignette: 0.32, sat: 0.95 }) }); }

// ---- G3 · 1177.8 · one in four contracts temporary — a European record — the 2022 reform slows the revolving door, the habit stuck
{ const tOne = TW('one', 1179.0), tTemp = TW('temporary,', 1181.0), tRec = TW('record.', 1182.8), t2022 = TW('2022', 1184.2), tDown = TW('down,', 1185.8), tStuck = TW('stuck.', 1187.3);
SC.push({ id: 's07_door', start: 1177.8, end: 1187.85, transIn: { type: 'zoom', dur: 0.5, x: 960, y: 880, amount: 1.6, from: 0.85 },
  draw(ctx, t) {
    MG.fx.vgrad(ctx, [[0, '#3A2E2A'], [1, '#1E1816']]); MG.fx.glow(ctx, 960, 300, 900, '#FFD08A', 0.2);
    // revolving-door drum (glass cylinder) in perspective
    const speed = MG.keys(t, [[1177.8, 1.2], [t2022, 1.2], [tDown + 0.6, 0.35, 'inOutCubic'], [tStuck, 0.38], [1189, 0.45]]); // rev/s-ish
    let ang = 0; { const N = 80; const a0 = 1177.8; for (let i = 0; i < N; i++) { const tt = a0 + (t - a0) * (i + 0.5) / N; const sp = MG.keys(tt, [[1177.8, 1.2], [t2022, 1.2], [tDown + 0.6, 0.35, 'inOutCubic'], [tStuck, 0.38], [1189, 0.45]]); ang += sp * (t - a0) / N * 1.6; } }
    const cx = 960, cy = 640, R = 420, rx = R, ry = R * 0.28; ctx.fillStyle = '#2A2220'; ctx.beginPath(); ctx.ellipse(cx, cy + 300, rx + 30, ry + 12, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = 'rgba(180,210,230,0.12)'; ctx.fillRect(cx - rx, cy - 320, rx * 2, 620);
    const wings = []; for (let i = 0; i < 4; i++) { const a = ang + i * Math.PI / 2; wings.push({ a, i, d: Math.sin(a) }); } wings.sort((a, b) => a.d - b.d);
    for (const w of wings) { const x2 = cx + Math.cos(w.a) * rx, y2 = Math.sin(w.a) * ry; const red = w.i === 0; ctx.fillStyle = red ? MG.col.a(P.rojo, 0.75 + 0.15 * w.d) : `rgba(200,225,240,${0.25 + 0.15 * (w.d + 1)})`; ctx.beginPath(); ctx.moveTo(cx, cy - 300); ctx.lineTo(x2, cy - 300 + y2); ctx.lineTo(x2, cy + 300 + y2); ctx.lineTo(cx, cy + 300); ctx.closePath(); ctx.fill(); ctx.strokeStyle = '#C9A04A'; ctx.lineWidth = 6; ctx.stroke();
      if (red && w.d > -0.2 && t > tTemp - 0.4) S7.type(ctx, 'TEMP', (cx + x2) / 2, cy + y2 / 2, { font: MG.F.stencil, size: 40, color: '#F4EFE6', align: 'center', shadow: false }); }
    ctx.strokeStyle = '#C9A04A'; ctx.lineWidth = 10; ctx.beginPath(); ctx.ellipse(cx, cy - 300, rx, ry, 0, 0, TAU); ctx.stroke(); ctx.fillStyle = '#C9A04A'; ctx.fillRect(cx - 6, cy - 300, 12, 600);
    // the figures pushed around (in and out of work)
    for (let i = 0; i < 3; i++) { const a = ang * 1.0 + i * 2.1; const px = cx + Math.cos(a) * rx * 0.6, d = Math.sin(a); if (d < 0) continue; S7.figure(ctx, px, cy + 300 + d * ry * 0.6, 300, { skin: SKINS[i + 1], hair: HAIRS[i], top: ['#2FA7A0', '#F2C230', '#6A4A7A'][i], bottom: '#2E3440', walk: t * 8 + i, seed: 40 + i }); }
    const k1 = pr(t, tOne - 0.2, tOne + 0.4, 'outBack'); ctx.save(); ctx.translate(300, 300); ctx.scale(k1, k1); S7.type(ctx, '1 in 4', 0, 0, { font: MG.F.cond, weight: 900, size: 170, color: '#F4EFE6', align: 'center' }); ctx.restore(); S7.mono(ctx, 'contracts temporary', 300, 360, t, tTemp - 0.2, { align: 'center', size: 24, color: '#F2C9A0' }); S7.mono(ctx, 'a European record', 300, 400, t, tRec - 0.3, { align: 'center', size: 22, color: P.sol });
    // brass plaque on the frame: 2022 REFORM
    const kp = pr(t, t2022 - 0.3, t2022 + 0.4, 'outBack'); if (kp > 0) { ctx.save(); ctx.translate(1580, 300); ctx.scale(kp, kp); MG.fx.volume(ctx, MG.path.rr(-170, -60, 340, 120, 10), [-170, -60, 340, 120], { color: '#C9A04A', shade: 0.4, hi: 0.6, outline: '#5a3a10', outlineW: 3 }); S7.type(ctx, '2022 REFORM', 0, 16, { font: MG.F.roman, weight: 900, size: MG.LANG === 'fr' ? 32 : 40, color: '#3A2410', align: 'center', shadow: false }); ctx.restore(); }
    if (t > tStuck - 0.5) S7.type(ctx, 'the habit stuck', 1580, 900, { font: MG.F.serif, italic: true, size: 64, color: '#F4EFE6', align: 'center', alpha: pr(t, tStuck - 0.5, tStuck) });
  },
  post: { grade: 'warm', vignette: 0.45 } }); }

// ===================================================================================== AUDIO (whole segment)
S7.audio = (A) => {
  // CH.A water / heat
  A.music('heat', 1013.98, 1054.6, { key: 'E2', bpm: 70, intensity: [[1013.98, 0.4], [1020, 0.55], [1028, 0.5], [1040, 0.6], [1048, 0.7], [1054.4, 0.5]], fadeIn: 1.5, fadeOut: 1.4 });
  A.sfx.amb('cicadas', 1014.0, 12, { gain: 0.7 }); A.sfx.sizzle(1014.2, 2.5, { gain: 0.8 }); A.sfx.thud(1015.0, { gain: 0.4 });
  for (let i = 0; i < 6; i++) A.sfx.pop(1016.6 + i * 0.22, { freq: 380 - i * 20, gain: 0.45 }); A.sfx.blip(1019.0, { note: 'A5', gain: 0.5 }); A.sfx.tick(1021.6, { gain: 0.8 }); A.sfx.tick(1025.4, { gain: 0.8 });
  A.sfx.splash(1028.3, { gain: 0.4 }); A.sfx.amb('wind', 1032.0, 8, { gain: 0.5 }); A.sfx.creak(1036.6, { gain: 0.7 }); A.sfx.amb('hum', 1040.6, 4, { gain: 0.8 }); A.sfx.whoosh(1040.5, { dur: 0.5, gain: 0.5 });
  A.sfx.stamp(1049.7, { gain: 0.45 }); A.sfx.sizzle(1051.6, 2.6, { gain: 0.8 });
  // CH.B cars
  A.music('pulse', 1053.9, 1067.0, { key: 'A2', bpm: 118, intensity: [[1053.9, 0.45], [1058, 0.7], [1066.5, 0.5]], fadeIn: 1.0, fadeOut: 1.4 });
  for (let i = 0; i < 5; i++) A.sfx.thud(1056.4 + i * 0.75, { gain: 0.35 }); A.sfx.amb('city', 1063.0, 3.2, { gain: 0.9 });
  // CH.C the price — a shadow falls
  A.sfx.downlifter(1066.4, { dur: 2, gain: 0.7 }); A.sfx.sub(1069.1, { gain: 0.5 });
  A.music('tension', 1067.2, 1100.8, { key: 'C3', bpm: 100, intensity: [[1067.2, 0.3], [1072, 0.4], [1078, 0.5], [1089, 0.7], [1097, 0.85], [1100.5, 0.5]], fadeIn: 1.2, fadeOut: 1.6 });
  A.sfx.impact(1071.9, { size: 0.4, gain: 0.5 }); A.sfx.creak(1079.0, { gain: 0.8 }); A.sfx.creak(1084.5, { gain: 0.6 }); for (let i = 0; i < 10; i++) A.sfx.thud(1089.4 + i * 0.3, { gain: 0.25 });
  // CH.E ghosts
  A.music('ambient', 1100.3, 1121.2, { key: 'D3', bpm: 64, scale: 'phrygian', intensity: [[1100.3, 0.35], [1110, 0.45], [1121, 0.3]], fadeIn: 1.4, fadeOut: 1.2 });
  A.sfx.amb('wind', 1100.7, 20, { gain: 0.6 }); for (let i = 0; i < 6; i++) A.sfx.typekey(1108.3 + i * 0.12, { gain: 0.6 }); A.sfx.powerDown(1113.9, { gain: 0.6 });
  // CH.F the burst
  A.sfx.pop(1121.8, { freq: 900, gain: 0.9 }); A.sfx.impact(1122.1, { size: 0.5, gain: 0.55 }); for (let i = 0; i < 8; i++) A.sfx.thud(1122.5 + i * 0.1, { gain: 0.3 });
  A.music('dread', 1121.5, 1137.8, { key: 'C2', intensity: 0.6, fadeIn: 0.8, fadeOut: 1.4 }); A.sfx.sub(1129.5, { gain: 0.5 }); A.sfx.sub(1132.0, { gain: 0.5 }); A.sfx.amb('crowd', 1127.8, 9.5, { gain: 0.35 });
  for (let i = 0; i < 12; i++) A.sfx.thud(1138.3 + i * 0.1, { gain: 0.35 });
  A.music('lament', 1137.2, 1161.6, { key: 'D3', bpm: 60, intensity: [[1137.2, 0.35], [1144, 0.5], [1153.8, 0.5], [1161.3, 0.4]], fadeIn: 1.2, fadeOut: 1.0 });
  A.sfx.plane(1144.3, 3.0, { gain: 0.5 }); A.sfx.ding(1147.4, { note: 'E5', gain: 0.5 }); A.sfx.paper(1149.9, { dur: 0.8, gain: 0.8 }); A.sfx.swish(1152.0); A.sfx.swish(1152.9);
  A.sfx.splash(1154.3, { gain: 0.5 }); A.sfx.chime(1156.6, { note: 'G5', gain: 0.5 }); for (let i = 0; i < 10; i++) A.sfx.tock(1158.6 + i * 0.27, { gain: 0.5 });
  // CH.G why · the revolving door (sneaky)
  A.sfx.sub(1163.2, { gain: 0.4 }); A.sfx.swell(1167.4, { dur: 0.9, gain: 0.5 });
  A.music('sneaky', 1167.6, 1189.3, { key: 'D3', bpm: 112, intensity: [[1167.6, 0.4], [1172, 0.6], [1178, 0.7], [1184.2, 0.55], [1187.8, 0.35]], fadeIn: 0.6, fadeOut: 1.4 });
  A.sfx.amb('sea', 1168.6, 9, { gain: 0.5 }); A.sfx.click(1173.4, { gain: 1 }); A.sfx.ding(1173.9, { note: 'C6', gain: 0.5 }); A.sfx.click(1176.0, { gain: 1 }); A.sfx.slide(1177.0, { gain: 0.8 });
  for (let i = 0; i < 9; i++) A.sfx.whoosh(1178.4 + i * 0.62, { dur: 0.35, gain: 0.18, pitch: 1.6 }); A.sfx.stamp(1184.2, { gain: 0.5 }); for (let i = 0; i < 4; i++) A.sfx.whoosh(1185.8 + i * 1.1, { dur: 0.6, gain: 0.14, pitch: 1.2 });
};
MG.segment('S07', { start: 1013.98, end: 1187.85, scenes: SC, audio(A) { if (S7.audio) S7.audio(A); } });
})();
