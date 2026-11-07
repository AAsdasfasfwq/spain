/* =====================================================================================================
   S02 · 174.63 → 351.14 · "Madrid at the centre · rock & water · olive / wine / jamón · Empty Spain ·
                             Al-Andalus → the fall of Granada, 1492"
   PLAN: see the beat list at the end of this header (kept in sync with the scenes below).
   ===================================================================================================== */
(function () {
'use strict';
const MG = window.MG; const P = MG.PAL; const F = MG.F; const { clamp, lerp } = MG;
const S2 = (window.S2 = {});                       // private namespace (exposed for debugging only)
const pg = MG.prog, lin = MG.lin, E = MG.ease;
const W = MG.W, H = MG.H;
const TW = (w, a) => MG.T(w, a, 2.5);              // word start (tight search window)
const TE = (w, a) => MG.Tend(w, a, 2.5);           // word end
S2.TW = TW;

// ------------------------------------------------------------------------------------------------
// generic helpers
// ------------------------------------------------------------------------------------------------
/** projective map of the unit square onto quad [TL,TR,BR,BL] → (u,v)=>[x,y] (perspective-correct) */
S2.homo = (q) => {
  const [x0, y0] = q[0], [x1, y1] = q[1], [x2, y2] = q[2], [x3, y3] = q[3];
  const dx1 = x1 - x2, dx2 = x3 - x2, dx3 = x0 - x1 + x2 - x3, dy1 = y1 - y2, dy2 = y3 - y2, dy3 = y0 - y1 + y2 - y3;
  let g = 0, h = 0; const den = dx1 * dy2 - dx2 * dy1;
  if (Math.abs(dx3) > 1e-6 || Math.abs(dy3) > 1e-6) { g = (dx3 * dy2 - dx2 * dy3) / den; h = (dx1 * dy3 - dx3 * dy1) / den; }
  const a = x1 - x0 + g * x1, b = x3 - x0 + h * x3, c = x0, d = y1 - y0 + g * y1, e = y3 - y0 + h * y3, f = y0;
  return (u, v) => { const w = g * u + h * v + 1; return [(a * u + b * v + c) / w, (d * u + e * v + f) / w]; };
};
S2.lerpQ = (A, B, k) => A.map((p, i) => [lerp(p[0], B[i][0], k), lerp(p[1], B[i][1], k)]);
/** draw an image onto a perspective quad */
S2.quad = (ctx, img, q, div = 12, o) => MG.persp.quad(ctx, img, S2.homo(q), div, o);
/** 2-bone IK: shoulder s, target t, lengths a,b, bend sign → elbow point */
S2.ik = (s, t, a, b, bend = 1) => { const dx = t[0] - s[0], dy = t[1] - s[1]; let d = Math.hypot(dx, dy); d = Math.min(d, a + b - 0.01); const ang = Math.atan2(dy, dx); const c = clamp((a * a + d * d - b * b) / (2 * a * d), -1, 1); const A = ang + bend * Math.acos(c); return [s[0] + Math.cos(A) * a, s[1] + Math.sin(A) * a]; };
/** label with halo (map labels) */
S2.label = (ctx, str, x, y, o = {}) => MG.text.draw(ctx, str, x, y, { font: F.grotesk, weight: 700, size: 26, tracking: 0.12, color: P.ink, stroke: o.halo === false ? null : (o.haloColor || 'rgba(250,244,232,0.85)'), strokeW: 7, ...o });
/** small mono kicker */
S2.kicker = (ctx, str, x, y, t, t0, o = {}) => MG.text.reveal(ctx, str.toUpperCase(), x, y, t, t0, { font: F.mono, weight: 500, size: o.size || 22, tracking: 0.25, color: o.color || P.ink2, style: 'track', by: 'line', align: o.align || 'left', ...o });
/** cheap ease helpers */
S2.k = (t, a, b, e = 'out') => pg(t, a, b, e);
/** draw canvas covering screen with 2D camera (world 1920×1080 at scale R in canvas) */
S2.drawCam = (ctx, img, R, cx, cy, z, o = {}) => { ctx.save(); if (o.alpha !== undefined) ctx.globalAlpha *= o.alpha; ctx.translate(W / 2 + (o.dx || 0), H / 2 + (o.dy || 0)); if (o.rot) ctx.rotate(o.rot); ctx.scale(z / R, z / R); ctx.translate(-cx * R, -cy * R); ctx.drawImage(img, 0, 0); ctx.restore(); };
/** world→screen for drawCam */
S2.camPt = (p, cx, cy, z, o = {}) => [W / 2 + (o.dx || 0) + (p[0] - cx) * z, H / 2 + (o.dy || 0) + (p[1] - cy) * z];

// ------------------------------------------------------------------------------------------------
// MAPS — hi-res cached versions of the film's standard Iberia map (same style as MG.kit.iberiaMap)
// ------------------------------------------------------------------------------------------------
S2.NEIGH = ['France', 'Portugal', 'Morocco', 'Algeria', 'Andorra', 'Italy', 'Switzerland', 'Tunisia', 'Gibraltar', 'United Kingdom', 'Belgium', 'Germany', 'W. Sahara', 'Mauritania'];
S2.reliefInto = (x, pr, w, h, clipF, alpha = 0.75) => {
  const img = MG.img('iberia_shaded'); if (!img) return; const buf = MG.canvas(w, h); const b = buf.getContext('2d');
  const [lon0, lat0, lon1, lat1] = MG.geo.IBERIA_BBOX;
  MG.persp.quad(b, img, (u, v) => { const p = pr([lon0 + u * (lon1 - lon0), lat1 - v * (lat1 - lat0)]); return p && isFinite(p[0]) ? p : null; }, 36);
  x.save(); if (clipF) MG.geo.clip(x, pr, clipF); x.globalAlpha = alpha; x.globalCompositeOperation = 'multiply'; x.drawImage(buf, 0, 0); x.restore();
};
S2.seaInto = (x, w, h, color = MG.kit.map.sea, R = 1) => {
  x.fillStyle = color; x.fillRect(0, 0, w, h);
  const g = x.createRadialGradient(w * 0.45, h * 0.4, 100 * R, w * 0.5, h * 0.5, w * 0.8); g.addColorStop(0, 'rgba(255,255,255,0.18)'); g.addColorStop(1, 'rgba(10,30,60,0.22)'); x.fillStyle = g; x.fillRect(0, 0, w, h);
  x.strokeStyle = 'rgba(255,255,255,0.13)'; x.lineWidth = 1.2 * R; for (let yy = 8 * R; yy < h; yy += 14 * R) { x.beginPath(); for (let xx = 0; xx <= w; xx += 12 * R) x.lineTo(xx, yy + Math.sin(xx / R * 0.013 + yy / R * 0.7) * 2.2 * R); x.stroke(); }
  MG.tex.over(x, 'grain', { alpha: 0.08, blend: 'overlay' });
};
/** projection for the 'iberia' view rendered into a canvas R× larger */
S2.prIb = (R = 1, o = {}) => MG.geo.proj('spain', { center: o.center || [-3.6, 40.0], scale: (o.scale || 6900) * R, translate: [W * R / 2, H * R / 2] });
/** the standard relief map (= MG.kit.iberiaMap view iberia, relief .75, lift 14) at R× resolution */
S2.mapModern = (R = 1.25) => MG.cache('s2:mapModern:' + R, W * R, H * R, (x, w, h) => {
  MG.geo.init(); const pr = S2.prIb(R); S2.seaInto(x, w, h, MG.kit.map.sea, R);
  for (const n of S2.NEIGH) { const f = MG.geo.country(n, '10'); if (f) MG.geo.draw(x, pr, f, { fill: n === 'Portugal' ? '#E6D7B8' : MG.kit.map.landOther, stroke: MG.kit.map.border, width: 1 * R }); }
  const es = MG.geo.country('Spain', '10'); const L = 14 * R;
  MG.geo.slab(x, pr, es, { depth: L, top: MG.kit.map.spain, side: MG.col.shade(MG.kit.map.spain, 0.5), shadowDy: L * 1.2, tex: 'blotch', texAlpha: 0.15, stroke: MG.kit.map.coast, width: 1.2 * R });
  S2.reliefInto(x, pr, w, h, es, 0.75);
});
/** the same map, aged into a 1561 parchment chart (sepia + engraving + Latin labels) */
S2.mapAged = (R = 1.25) => MG.cache('s2:mapAged:' + R, W * R, H * R, (x, w, h) => {
  x.filter = 'sepia(0.9) saturate(0.75) contrast(1.08) brightness(1.03)'; x.drawImage(S2.mapModern(R), 0, 0); x.filter = 'none';
  x.globalCompositeOperation = 'multiply'; x.globalAlpha = 0.5; x.fillStyle = x.createPattern(MG.tex.blotch(512, 3, 9, '#8a5a2a'), 'repeat'); x.fillRect(0, 0, w, h);
  x.globalAlpha = 1; x.fillStyle = x.createPattern(MG.tex.fibers(512, 12, '#4a2e14'), 'repeat'); x.fillRect(0, 0, w, h); x.globalCompositeOperation = 'source-over';
  const g = x.createRadialGradient(w / 2, h / 2, h * 0.35, w / 2, h / 2, w * 0.62); g.addColorStop(0, 'rgba(90,50,20,0)'); g.addColorStop(1, 'rgba(90,50,20,0.55)'); x.fillStyle = g; x.fillRect(0, 0, w, h);
  // rhumb lines from a compass rose in the Atlantic (period chart grammar)
  const cx = 300 * R, cy = 420 * R; x.strokeStyle = 'rgba(70,40,20,0.22)'; x.lineWidth = 1.2 * R; for (let i = 0; i < 16; i++) { const a = i / 16 * MG.TAU; x.beginPath(); x.moveTo(cx, cy); x.lineTo(cx + Math.cos(a) * 2600 * R, cy + Math.sin(a) * 2600 * R); x.stroke(); }
  x.fillStyle = 'rgba(70,40,20,0.75)'; for (let i = 0; i < 8; i++) { const a = i / 8 * MG.TAU - Math.PI / 2, r1 = (i % 2 ? 34 : 70) * R; x.beginPath(); x.moveTo(cx, cy); x.lineTo(cx + Math.cos(a - 0.16) * r1 * 0.3, cy + Math.sin(a - 0.16) * r1 * 0.3); x.lineTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1); x.lineTo(cx + Math.cos(a + 0.16) * r1 * 0.3, cy + Math.sin(a + 0.16) * r1 * 0.3); x.closePath(); x.fill(); }
  x.beginPath(); x.arc(cx, cy, 10 * R, 0, MG.TAU); x.fill();
  const lab = (s, px, py, sz, o = {}) => MG.text.draw(x, s, px * R, py * R, { font: F.old, italic: o.italic ?? true, size: sz * R, color: 'rgba(60,34,16,0.82)', tracking: o.tr ?? 0.12, align: 'center' });
  lab('HISPANIA', 960, 610, 46, { italic: false, tr: 0.5 }); lab('Oceanus Atlanticus', 330, 700, 30); lab('Mare Mediterraneum', 1560, 760, 30); lab('Lusitania', 470, 560, 22); lab('Gallia', 1380, 120, 26); lab('Africa', 1000, 1050, 28);
});

// ------------------------------------------------------------------------------------------------
// CHARACTER: Philip II (black, white ruff, Habsburg jaw, Golden Fleece). Local origin = centre of ruff.
// S2.philip draws body+head (call before the table sheet); S2.philipArm draws the reaching right arm (after it).
// o: {look:[x,y], turn, lid, brow, nod, mouth}
// ------------------------------------------------------------------------------------------------
S2.PH = { INK: '#1a1214', BLK: '#201a1f', SK: '#EBCBAE', SKS: '#B48474', HAIR: '#9c7249', BEARD: '#b58650', L: [-0.62, -0.78] };
/** heavy-lidded almond eye (for adult characters). o: {lid 0..1, blink, look:[x,y], iris, skin, ink} */
S2.eyeH = (ctx, x, y, r, o = {}) => {
  const w = r * 1.35, lid = clamp(o.lid ?? 0.5), bl = clamp(o.blink || 0), lk = o.look || [0, 0], ink = o.ink || '#1a1214';
  const op = 1 - bl * 0.92; const top = y - r * 0.62 * op, bot = y + r * 0.5 * op;
  const sh = new Path2D(); sh.moveTo(x - w, y + r * 0.05); sh.bezierCurveTo(x - w * 0.5, top - r * 0.12, x + w * 0.45, top - r * 0.1, x + w, y - r * 0.08); sh.bezierCurveTo(x + w * 0.5, bot + r * 0.1, x - w * 0.5, bot + r * 0.12, x - w, y + r * 0.05); sh.closePath();
  ctx.save(); ctx.fillStyle = '#F6EFE4'; ctx.fill(sh); ctx.save(); ctx.clip(sh);
  const ix = x + lk[0] * w * 0.42, iy = y + lk[1] * r * 0.3; const ir = r * 0.6;
  ctx.fillStyle = o.iris || '#5d7088'; ctx.beginPath(); ctx.arc(ix, iy, ir, 0, MG.TAU); ctx.fill(); ctx.fillStyle = '#100a0a'; ctx.beginPath(); ctx.arc(ix, iy, ir * 0.5, 0, MG.TAU); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.beginPath(); ctx.arc(ix - ir * 0.35, iy - ir * 0.35, ir * 0.22, 0, MG.TAU); ctx.fill();
  const ly = lerp(top - r * 0.2, bot, lid * 0.75 + bl * 0.4); // upper lid edge
  ctx.fillStyle = o.skin || '#E8C2A4'; ctx.beginPath(); ctx.moveTo(x - w * 1.2, y - r * 2); ctx.lineTo(x + w * 1.2, y - r * 2); ctx.lineTo(x + w * 1.2, ly - r * 0.05); ctx.quadraticCurveTo(x, ly + r * 0.18, x - w * 1.2, ly + r * 0.05); ctx.closePath(); ctx.fill();
  ctx.fillStyle = 'rgba(80,30,30,0.18)'; ctx.fillRect(x - w, ly, w * 2, r * 0.25); ctx.restore();
  ctx.strokeStyle = ink; ctx.lineCap = 'round'; ctx.lineWidth = Math.max(2, r * 0.22); ctx.beginPath(); ctx.moveTo(x - w, ly + r * 0.06); ctx.quadraticCurveTo(x, ly + r * 0.2, x + w, ly - r * 0.02); ctx.stroke(); // lash line on the lid edge
  ctx.lineWidth = Math.max(1.2, r * 0.1); ctx.globalAlpha *= 0.55; ctx.beginPath(); ctx.moveTo(x - w * 0.8, top - r * 0.45); ctx.quadraticCurveTo(x, top - r * 0.7, x + w * 0.85, top - r * 0.45); ctx.stroke(); // crease
  ctx.globalAlpha /= 0.55; ctx.lineWidth = Math.max(1, r * 0.08); ctx.globalAlpha *= 0.5; ctx.beginPath(); ctx.moveTo(x - w * 0.8, bot + r * 0.02); ctx.quadraticCurveTo(x, bot + r * 0.22, x + w * 0.8, bot); ctx.stroke();
  ctx.restore();
};
/** soft tapered sleeve through points (shoulder→elbow→wrist) with outline and a light-side sheen */
S2.sleeve = (ctx, pts, w, o = {}) => {
  const sp = MG.path.spline(pts, 10); const pr = o.pressure || ((u) => 1.08 - 0.42 * u + 0.12 * Math.sin(u * Math.PI));
  MG.fx.ink(ctx, sp, { width: w + (o.outlineW ?? 9), color: o.ink || '#1a1214', taper: [0, 0], pressure: (u) => pr(u) });
  MG.fx.ink(ctx, sp, { width: w, color: o.color || '#262027', taper: [0, 0], pressure: pr });
  const off = sp.map((p, i) => { const a = sp[Math.max(0, i - 1)], b = sp[Math.min(sp.length - 1, i + 1)]; const dx = b[0] - a[0], dy = b[1] - a[1], d = Math.hypot(dx, dy) || 1; const u = i / (sp.length - 1); const k = w * 0.28 * pr(u); return [p[0] + (dy / d) * k * (o.side || 1), p[1] - (dx / d) * k * (o.side || 1)]; });
  MG.fx.ink(ctx, off, { width: w * 0.16, color: o.sheen || 'rgba(150,130,165,0.35)', taper: [0.3, 0.4] });
};
S2.philip = (ctx, x, y, s, t, o = {}) => {
  const { INK, BLK, SK, SKS, HAIR, BEARD, L } = S2.PH; const tb = MG.kit.twos(t);
  const boil = (i) => MG.noise2(tb * 3.1, i * 7.7) * 0.8;
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
  const br = Math.sin(t * 1.6) * 2.2; ctx.translate(0, br * 0.3);
  // left arm (screen right) resting on the table
  // torso / doublet
  const torso = MG.path.smooth([[-178, 82], [-130, 26], [-62, 6], [62, 6], [130, 26], [178, 82], [196, 200], [160, 470], [-160, 470], [-196, 200]], true);
  MG.fx.volume(ctx, torso, [-196, 6, 392, 464], { color: BLK, shadeColor: '#09070a', shade: 0.65, hi: 0.32, hiColor: '#6a5a6c', cel: true, light: L, outline: INK, outlineW: 5, rim: '#9a86a0', rimW: 3, rimA: 0.6 });
  ctx.save(); ctx.clip(torso);
  ctx.strokeStyle = 'rgba(140,120,150,0.12)'; ctx.lineWidth = 2; for (let i = -12; i < 12; i++) { ctx.beginPath(); ctx.moveTo(i * 34 - 200, 0); ctx.lineTo(i * 34 + 260, 470); ctx.stroke(); }
  ctx.strokeStyle = 'rgba(0,0,0,0.5)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-4, 40); ctx.quadraticCurveTo(-8, 250, -2, 470); ctx.stroke();
  for (let i = 0; i < 7; i++) { const by = 70 + i * 44; MG.fx.volume(ctx, MG.path.circle(-5, by, 6.5), [-12, by - 7, 14, 14], { color: P.gold, shade: 0.5, hi: 0.7, hiColor: '#fff3c0', outline: '#4a3410', outlineW: 1.5 }); }
  ctx.restore();
  for (const sx of [-1, 1]) { const rp = MG.path.smooth([[sx * 118, 30], [sx * 172, 36], [sx * 200, 82], [sx * 186, 120], [sx * 140, 104], [sx * 112, 64]], true); MG.fx.volume(ctx, rp, [sx > 0 ? 112 : -200, 30, 88, 92], { color: '#2a2229', shade: 0.6, hi: 0.4, hiColor: '#7a6a7e', cel: true, light: L, outline: INK, outlineW: 4 }); ctx.save(); ctx.clip(rp); ctx.strokeStyle = 'rgba(160,140,170,0.35)'; ctx.lineWidth = 3; for (let k = 0; k < 6; k++) { const xx = sx * (122 + k * 13); ctx.beginPath(); ctx.moveTo(xx, 30); ctx.lineTo(xx + sx * 10, 120); ctx.stroke(); } ctx.restore(); }
  // Golden Fleece on a red ribbon
  ctx.strokeStyle = '#8f1f1b'; ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-58, 32); ctx.quadraticCurveTo(-28, 150, -6, 178); ctx.quadraticCurveTo(22, 150, 50, 32); ctx.stroke();
  ctx.strokeStyle = '#c23a30'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-56, 34); ctx.quadraticCurveTo(-28, 148, -6, 174); ctx.stroke();
  { const fx = -6, fy = 196 + Math.sin(t * 1.6 + 0.5) * 1.5; const ram = MG.path.smooth([[fx - 30, fy - 4], [fx - 14, fy - 14], [fx + 16, fy - 12], [fx + 32, fy - 2], [fx + 22, fy + 8], [fx + 18, fy + 22], [fx + 10, fy + 10], [fx - 10, fy + 12], [fx - 16, fy + 24], [fx - 22, fy + 8]], true);
    MG.fx.volume(ctx, ram, [fx - 32, fy - 14, 64, 38], { color: P.gold, shade: 0.5, hi: 0.8, hiColor: '#fff0b8', cel: true, light: L, outline: '#3c2808', outlineW: 2 }); ctx.fillStyle = '#3c2808'; for (let k = 0; k < 5; k++) { ctx.beginPath(); ctx.arc(fx - 18 + k * 9, fy - 2 + (k % 2) * 3, 1.6, 0, MG.TAU); ctx.fill(); } }
  // neck
  const neck = MG.path.smooth([[-34, -40], [30, -46], [36, 6], [-30, 10]], true); ctx.fillStyle = SKS; ctx.fill(neck);
  // ruff (lechuguilla): pleated ring, back pleats first
  const rx = 112, ry = 40, rcx = -8, rcy = -4; const pleats = [];
  for (let i = 0; i < 30; i++) { const a = (i / 30) * MG.TAU; pleats.push({ a, x: rcx + Math.cos(a) * rx * 0.8, y: rcy + Math.sin(a) * ry * 0.8 }); }
  pleats.sort((p, q) => p.y - q.y);
  for (const pl of pleats) { const back = Math.sin(pl.a) < 0; const pth = MG.path.ellipse(pl.x, pl.y + boil(pl.a * 3) * 0.6, 26, back ? 18 : 22, pl.a + Math.PI / 2); ctx.fillStyle = back ? '#d9d2c6' : '#F7F2E8'; ctx.fill(pth); ctx.strokeStyle = 'rgba(70,64,80,0.75)'; ctx.lineWidth = 2.2; ctx.stroke(pth); ctx.strokeStyle = 'rgba(120,112,135,0.45)'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.ellipse(pl.x, pl.y, 13, 8, pl.a + Math.PI / 2, 0, Math.PI); ctx.stroke(); }
  ctx.save(); ctx.globalCompositeOperation = 'multiply'; const rg = ctx.createLinearGradient(-120, 0, 120, 0); rg.addColorStop(0, 'rgba(255,250,240,0)'); rg.addColorStop(1, 'rgba(120,100,150,0.35)'); ctx.fillStyle = rg; ctx.beginPath(); ctx.ellipse(rcx, rcy, rx + 18, ry + 16, 0, 0, MG.TAU); ctx.fill(); ctx.restore();
  // head (3/4 left): long narrow face, heavy protruding lower jaw (Habsburg), short blond beard
  const turn = o.turn || 0; const tx = turn * 10; const nod = o.nod || 0; const mo = o.mouth || 0;
  ctx.save(); ctx.translate(-14, -150 + nod * 6); ctx.rotate(nod * 0.05 + MG.wiggle(t, 0.3, 0.015, 3));
  const J = 1 + mo * 0.04; // jaw drop
  const hp = [[4, -128], [60, -108], [80, -52], [76, 10], [64, 62 * J], [40, 110 * J], [-8, 146 * J], [-52 + tx * 0.3, 146 * J], [-80 + tx * 0.4, 124 * J], [-78 + tx * 0.5, 104 * J], [-70 + tx * 0.5, 99], [-74 + tx * 0.5, 89], [-64 + tx * 0.6, 77], [-62 + tx * 0.6, 60], [-76 + tx, 38], [-72 + tx * 0.9, 24], [-60 + tx * 0.8, -16], [-60 + tx * 0.7, -36], [-54 + tx * 0.5, -86], [-28, -118]];
  const head = MG.path.smooth(hp, true);
  MG.fx.volume(ctx, head, [-84, -128, 168, 268], { color: SK, shadeColor: SKS, shade: 0.55, hi: 0.32, hiColor: '#fff1dc', cel: true, light: L, shadeOffset: 0.16, outline: INK, outlineW: 4.5, rim: '#ffe7c4', rimW: 3 });
  ctx.save(); ctx.clip(head); MG.fx.glow(ctx, -26 + tx * 0.5, 30, 26, '#e0a090', 0.22, 'multiply'); // faint cheek
  ctx.strokeStyle = 'rgba(120,70,60,0.35)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-30, 46); ctx.quadraticCurveTo(-46, 62, -48, 74); ctx.stroke(); ctx.restore(); // nasolabial fold
  // beard covering jaw + the long chin, under-lip tuft
  const beard = MG.path.smooth([[74, 6], [64, 62 * J], [40, 110 * J], [-8, 148 * J], [-52 + tx * 0.3, 148 * J], [-82 + tx * 0.4, 126 * J], [-80 + tx * 0.5, 106 * J], [-66 + tx * 0.5, 110 * J], [-40, 112 * J], [-10, 112 * J], [24, 90], [48, 52], [60, 14]], true);
  MG.fx.volume(ctx, beard, [-80, 6, 154, 136], { color: BEARD, shade: 0.5, hi: 0.3, cel: true, light: L, outline: INK, outlineW: 3 });
  ctx.save(); ctx.clip(beard); ctx.strokeStyle = 'rgba(80,50,20,0.4)'; ctx.lineWidth = 1.6; for (let k = 0; k < 30; k++) { const bx = -76 + k * 5, by = 104 + Math.sin(k * 1.3) * 8; ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(bx + 2, by + 16 + boil(k) * 2); ctx.stroke(); } ctx.restore();
  // mouth: thin upper lip; heavy everted lower lip resting on the jutting chin (Habsburg)
  MG.fx.ink(ctx, [[-66 + tx * 0.6, 78], [-54 + tx * 0.5, 81], [-38, 80]], { width: 3, color: INK, taper: [0.2, 0.6] });
  const lowerLip = MG.path.smooth([[-73 + tx * 0.5, 88 + mo * 3], [-58 + tx * 0.5, 84 + mo * 3], [-42, 86 + mo * 3], [-48, 94 + mo * 4], [-66 + tx * 0.4, 97 + mo * 4]], true);
  MG.fx.volume(ctx, lowerLip, [-78, 83, 36, 16], { color: '#a8665a', shade: 0.45, hi: 0.4, hiColor: '#e6a898', cel: true, light: L, outline: INK, outlineW: 2.2 });
  if (mo > 0.05) { ctx.fillStyle = '#3a1010'; ctx.beginPath(); ctx.ellipse(-56 + tx * 0.5, 83, 11, 2.5 * mo + 0.4, 0.05, 0, MG.TAU); ctx.fill(); }
  // moustache (thin, drooping)
  MG.fx.ink(ctx, [[-70 + tx * 0.6, 66], [-56 + tx * 0.5, 71], [-42, 75], [-32, 84]], { width: 6, color: BEARD, taper: [0.3, 0.8] }); MG.fx.ink(ctx, [[-70 + tx * 0.6, 66], [-78 + tx * 0.7, 76]], { width: 4.5, color: BEARD, taper: [0.2, 0.8] });
  // long nose: bridge line + nostril wing
  MG.fx.ink(ctx, [[-44 + tx * 0.6, -16], [-52 + tx * 0.8, 10], [-60 + tx * 0.9, 30], [-52 + tx * 0.7, 46]], { width: 2.6, color: 'rgba(70,32,30,0.6)', taper: [0.5, 0.2] });
  ctx.fillStyle = 'rgba(70,30,30,0.5)'; ctx.beginPath(); ctx.ellipse(-60 + tx * 0.8, 46, 5, 3, 0.3, 0, MG.TAU); ctx.fill();
  // hair (short, light brown) at temple & back
  const hair = MG.path.smooth([[-30, -118], [20, -130], [64, -110], [86, -54], [80, 4], [66, 2], [56, -40], [28, -76], [-20, -90], [-50, -88]], true);
  MG.fx.volume(ctx, hair, [-50, -130, 136, 134], { color: HAIR, shade: 0.5, hi: 0.35, cel: true, light: L, outline: INK, outlineW: 3.5 });
  const ear = MG.path.smooth([[40, -26], [56, -32], [62, -8], [56, 16], [42, 18], [46, -2]], true); MG.fx.volume(ctx, ear, [40, -32, 22, 50], { color: SK, shadeColor: SKS, shade: 0.5, cel: true, light: L, outline: INK, outlineW: 3 });
  MG.fx.ink(ctx, [[52, -20], [56, -4], [50, 10]], { width: 2.5, color: 'rgba(90,40,40,0.6)' });
  // eyes: small, heavy-lidded, melancholic; low straight brows
  const lk = o.look || [-0.6, 0.5]; const bl = Math.max(MG.kit.blink(t, 21), o.blink || 0); const lid = o.lid ?? 0.55;
  ctx.fillStyle = 'rgba(150,90,80,0.22)'; ctx.beginPath(); ctx.ellipse(-40 + tx * 0.7, -12, 13, 6, 0, 0, MG.TAU); ctx.ellipse(8 + tx * 0.4, -14, 16, 7, 0, 0, MG.TAU); ctx.fill(); // eye bags
  S2.eyeH(ctx, -40 + tx * 0.7, -24, 9.5, { lid, blink: bl, look: lk, skin: SK, ink: INK });
  S2.eyeH(ctx, 8 + tx * 0.4, -26, 11.5, { lid, blink: bl, look: lk, skin: SK, ink: INK });
  const raise = o.brow ?? 0.0; MG.kit.brow(ctx, -40 + tx * 0.7, -42, { w: 30, raise, angle: 0.12, color: '#6e4c2c', thick: 6, arch: 0.05 }); MG.kit.brow(ctx, 10 + tx * 0.4, -46, { w: 40, raise, angle: -0.06, color: '#6e4c2c', thick: 7, flip: true, arch: 0.06 });
  // hat: black cap with gold band and a small white plume
  const hat = MG.path.smooth([[-72, -102], [-66, -156], [-20, -176], [52, -172], [92, -132], [86, -104], [40, -110], [-20, -110]], true);
  MG.fx.volume(ctx, hat, [-72, -176, 164, 74], { color: '#1c171b', shadeColor: '#060406', shade: 0.6, hi: 0.4, hiColor: '#6b5b70', cel: true, light: L, outline: INK, outlineW: 4 });
  ctx.strokeStyle = P.gold; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(-70, -118); ctx.quadraticCurveTo(10, -128, 90, -116); ctx.stroke();
  const plume = MG.path.smooth([[60, -156], [96, -192 + boil(9) * 2], [122, -182], [108, -156], [78, -144]], true); MG.fx.volume(ctx, plume, [60, -192, 62, 48], { color: '#f2ece0', shade: 0.4, cel: true, light: L, outline: INK, outlineW: 2.5 });
  ctx.restore();
  ctx.restore();
  return { br };
};
/** Philip's reaching right arm (shoulder in body space → hand at screen point hs). returns hand angle */
S2.philipArm = (ctx, x, y, s, t, hs) => {
  const { INK, BLK, SK } = S2.PH; const br = Math.sin(t * 1.6) * 2.2 * 0.3;
  const sh = [x - 150 * s, y + (70 + br) * s]; const el = S2.ik(sh, hs, 235 * s, 235 * s, -1);
  S2.sleeve(ctx, [sh, el, hs], 112 * s, { color: BLK, side: 1 });
  const ang = Math.atan2(hs[1] - el[1], hs[0] - el[0]);
  for (let k = 0; k < 9; k++) { const a = ang + Math.PI / 2 + (k / 8 - 0.5) * 2.4; const px = hs[0] + (Math.cos(a) * 28 - Math.cos(ang) * 4) * s, py = hs[1] + (Math.sin(a) * 28 - Math.sin(ang) * 4) * s; const e = MG.path.ellipse(px, py, 12 * s, 9 * s, a); ctx.fillStyle = '#F4EFE4'; ctx.fill(e); ctx.strokeStyle = 'rgba(70,64,80,0.7)'; ctx.lineWidth = 1.8 * s; ctx.stroke(e); }
  MG.kit.hand(ctx, hs[0] + Math.cos(ang) * 10 * s, hs[1] + Math.sin(ang) * 10 * s, { pose: 'fist', angle: ang - Math.PI / 2, s: 1.45 * s, skin: SK, outline: INK });
  return ang;
};
/** Philip's left arm resting on the table (drawn after the table top), hand flat on the chart's edge */
S2.philipLeft = (ctx, x, y, s, t) => {
  const { INK, BLK, SK } = S2.PH; const br = Math.sin(t * 1.6) * 2.2 * 0.3;
  const sh = [x + 150 * s, y + (70 + br) * s], el = [x + 236 * s, y + 300 * s], hd = [x + 70 * s, y + 352 * s];
  S2.sleeve(ctx, [sh, el, hd], 108 * s, { color: BLK, side: -1, pressure: (u) => 1.05 - 0.35 * u });
  for (let k = 0; k < 7; k++) { const a = Math.PI + (k / 6 - 0.5) * 2.2; const e = MG.path.ellipse(hd[0] + 16 * s + Math.cos(a) * 6 * s, hd[1] + Math.sin(a) * 26 * s, 9 * s, 11 * s, a); ctx.fillStyle = '#F4EFE4'; ctx.fill(e); ctx.strokeStyle = 'rgba(70,64,80,0.7)'; ctx.lineWidth = 1.6 * s; ctx.stroke(e); }
  MG.kit.hand(ctx, hd[0] + 4 * s, hd[1], { pose: 'open', angle: 1.9, s: 1.35 * s, skin: SK, outline: INK });
};
/** the crowned capital pin: needle + almagre head + small gold crown. tip at (x,y); len px; tilt rad */
S2.pin = (ctx, x, y, len, o = {}) => {
  const tilt = o.tilt || 0; const hx = x + Math.sin(tilt) * len, hy = y - Math.cos(tilt) * len; const r = o.r || len * 0.16;
  ctx.save(); if (o.alpha !== undefined) ctx.globalAlpha *= o.alpha;
  // shadow on the ground (sun from upper-left → shadow to lower-right)
  if (o.shadow !== false) { ctx.save(); ctx.globalAlpha *= 0.35 * (o.shadowA ?? 1); ctx.strokeStyle = '#2a1a22'; ctx.lineWidth = Math.max(2, len * 0.03); ctx.lineCap = 'round'; ctx.filter = `blur(${Math.max(1, len * 0.02)}px)`; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + len * 0.55, y + len * 0.28); ctx.stroke(); ctx.fillStyle = '#2a1a22'; ctx.beginPath(); ctx.ellipse(x + len * 0.6, y + len * 0.3, r * 1.1, r * 0.7, 0.4, 0, MG.TAU); ctx.fill(); ctx.restore(); }
  const g = ctx.createLinearGradient(x - 4, 0, x + 4, 0); g.addColorStop(0, '#f4f4f4'); g.addColorStop(0.5, '#9aa0a8'); g.addColorStop(1, '#4a4e56');
  ctx.strokeStyle = g; ctx.lineWidth = Math.max(2.5, len * 0.035); ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(hx, hy); ctx.stroke();
  const head = MG.path.circle(hx, hy, r); MG.fx.volume(ctx, head, [hx - r, hy - r, r * 2, r * 2], { color: o.color || P.rojo, shade: 0.55, hi: 0.7, hiColor: '#ffd9c8', light: [-0.6, -0.8], outline: '#3a0f0c', outlineW: Math.max(1.5, r * 0.08) });
  if (o.crown !== false) { const cw = r * 1.5, ch = r * 1.05, cy = hy - r * 0.78; const cr = new Path2D(); cr.moveTo(hx - cw / 2, cy); for (let i = 0; i <= 4; i++) { const xx = hx - cw / 2 + (i / 4) * cw; cr.lineTo(xx, cy - ch * (i % 2 ? 0.55 : 1)); if (i < 4) cr.lineTo(xx + cw / 8, cy - ch * 0.45); } cr.lineTo(hx + cw / 2, cy); cr.closePath(); MG.fx.volume(ctx, cr, [hx - cw / 2, cy - ch, cw, ch], { color: P.gold, shade: 0.45, hi: 0.8, hiColor: '#fff2b0', cel: true, outline: '#4a3208', outlineW: Math.max(1.2, r * 0.07) }); }
  ctx.restore(); return [hx, hy];
};

// ------------------------------------------------------------------------------------------------
// SCENES
// ------------------------------------------------------------------------------------------------
const SC = [];

// A1–A4 · 174.63–183.27 · Madrid pin → "no accident" → the map is Philip II's 1561 chart; he moves the capital
S2.Q_SHEET = [[560, 560], [1300, 560], [1530, 1062], [300, 1062]];     // the chart lying on the king's table
S2.PHIL = { x: 1130, y: 372, s: 0.96 };
SC.push({ id: 's02_madrid', start: 174.63, end: 183.27,
  init() { this.mm = S2.mapModern(1.25); this.ma = S2.mapAged(1.25); this.pr = MG.kit.view('iberia');
    this.room = MG.cache('s02:room', W, H, (x, w, h) => {
      x.fillStyle = '#2a1d22'; x.fillRect(0, 0, w, h);
      // stone wall courses
      x.strokeStyle = 'rgba(0,0,0,0.25)'; x.lineWidth = 3; for (let yy = 40; yy < 700; yy += 92) { x.beginPath(); x.moveTo(0, yy); x.lineTo(w, yy + 6); x.stroke(); for (let xx = ((yy / 92) % 2) * 90; xx < w; xx += 180) { x.beginPath(); x.moveTo(xx, yy); x.lineTo(xx, yy + 92); x.stroke(); } }
      // tall window, upper left (the film's sun comes from here)
      x.fillStyle = 'rgba(255,214,150,0.85)'; x.beginPath(); x.moveTo(250, 520); x.lineTo(250, 170); x.quadraticCurveTo(330, 60, 410, 170); x.lineTo(410, 520); x.closePath(); x.fill();
      x.strokeStyle = '#2a1d22'; x.lineWidth = 10; x.beginPath(); x.moveTo(330, 100); x.lineTo(330, 520); x.moveTo(250, 330); x.lineTo(410, 330); x.stroke();
      const g = x.createRadialGradient(330, 300, 40, 420, 360, 1100); g.addColorStop(0, 'rgba(255,196,120,0.55)'); g.addColorStop(0.4, 'rgba(160,90,60,0.22)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(0, 0, w, h);
      x.save(); x.globalCompositeOperation = 'screen'; x.fillStyle = 'rgba(255,210,150,0.10)'; x.beginPath(); x.moveTo(250, 170); x.lineTo(410, 170); x.lineTo(1200, 1080); x.lineTo(700, 1080); x.closePath(); x.fill(); x.restore();
      for (let i = 0; i < 9; i++) { const cx = 1640 + i * 40; const gg = x.createLinearGradient(cx - 20, 0, cx + 20, 0); gg.addColorStop(0, '#3a0d10'); gg.addColorStop(0.5, '#7a1c1e'); gg.addColorStop(1, '#2a080a'); x.fillStyle = gg; x.beginPath(); x.moveTo(cx - 26, 0); x.bezierCurveTo(cx - 30, 300, cx - 10, 700, cx - 24, 1080); x.lineTo(cx + 26, 1080); x.bezierCurveTo(cx + 16, 700, cx + 30, 300, cx + 22, 0); x.closePath(); x.fill(); }
      MG.tex.over(x, 'blotch', { alpha: 0.35, color: '#000', scale: 3 }); MG.tex.over(x, 'fibers', { alpha: 0.5, color: '#000' });
    });
    this.roomB = MG.blurred(this.room, 7);
    this.table = MG.cache('s02:table', 1200, 700, (x, w, h) => { const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, '#3e2416'); g.addColorStop(1, '#6b4128'); x.fillStyle = g; x.fillRect(0, 0, w, h); x.strokeStyle = 'rgba(30,14,8,0.35)'; for (let i = 0; i < 70; i++) { x.lineWidth = 1 + MG.rand(3, i) * 2; x.beginPath(); const yy = MG.rand(4, i) * h; x.moveTo(0, yy); for (let xx = 0; xx <= w; xx += 40) x.lineTo(xx, yy + Math.sin(xx * 0.01 + i) * 6); x.stroke(); } MG.tex.over(x, 'grain', { alpha: 0.2 }); const v = x.createRadialGradient(w * 0.3, h * 0.3, 50, w * 0.5, h * 0.5, w * 0.7); v.addColorStop(0, 'rgba(255,200,140,0.18)'); v.addColorStop(1, 'rgba(0,0,0,0.45)'); x.fillStyle = v; x.fillRect(0, 0, w, h); });
    this.mapMix = MG.canvas(W * 1.25, H * 1.25);
  },
  draw(ctx, t, S) {
    const R = 1.25; const pr = this.pr; const mad = pr(MG.geo.cities.Madrid), tol = pr(MG.geo.cities.Toledo);
    const tPin = 174.78, tLand = 175.12, tAcc = TW('accident', 178.4), t1561 = TW('1561', 179.67), tPhil = TW('Philip', 181.35), tMoves = TW('moves', 182.31), tCap = TW('capital', 182.95);
    const z = 1 + 0.07 * E.inOutSine(lin(t, 175.0, 179.6)); const cx = lerp(960, mad[0], 0.35 * lin(t, 175, 179.6)), cy = lerp(540, mad[1], 0.35 * lin(t, 175, 179.6));
    const kBack = pg(t, 179.55, 181.5, 'inOutCubic');
    if (t < 174.97) { MG.kit.iberiaMap(ctx, { view: 'iberia', relief: 0.75, lift: 14 }); }      // the exact S01 handoff frame
    const age = pg(t, 179.6, 180.6, 'inOutSine');
    const mx = this.mapMix.getContext('2d'); mx.setTransform(1, 0, 0, 1, 0, 0); mx.globalAlpha = 1; mx.drawImage(this.mm, 0, 0); if (age > 0) { mx.globalAlpha = age; mx.drawImage(this.ma, 0, 0); mx.globalAlpha = 1; }
    mx.save(); mx.scale(R, R);
    const kM = pg(t, TW('plateau', 176.71) - 0.1, TW('plateau', 176.71) + 0.9) * (1 - pg(t, 179.3, 179.8));
    if (kM > 0) { const band = MG.geo.reliefBands([0.24], 1)[0]; mx.save(); MG.geo.clip(mx, pr, MG.geo.country('Spain', '10')); MG.geo.draw(mx, pr, band, { fill: MG.col.a(P.solLight, 0.32 * kM), stroke: MG.col.a(P.rojoDeep, 0.65 * kM), width: 2.2, dash: [7, 6] }); mx.restore();
      MG.text.draw(mx, 'MESETA', 1010, 640, { font: F.grotesk, weight: 800, size: 30, tracking: 0.45, color: MG.col.a(P.rojoDeep, 0.9 * kM), stroke: MG.col.a('#FAF4E8', 0.7 * kM), strokeW: 6 }); }
    const kC = pg(t, tAcc - 0.25, tAcc + 0.45, 'inOutSine') * (1 - pg(t, 179.7, 180.3));
    if (kC > 0) { const pts = []; const tb = MG.kit.twos(t); for (let i = 0; i <= 40; i++) { const a = -2.2 + (i / 40) * MG.TAU * 1.08 * kC; const rr = 62 + MG.noise2(i * 0.3, tb * 2) * 3 + i * 0.25; pts.push([mad[0] + Math.cos(a) * rr * 1.25, mad[1] + Math.sin(a) * rr]); } MG.fx.ink(mx, pts, { width: 7, color: MG.col.a(P.rojo, 0.92), taper: [0.1, 0.4] }); }
    const k61 = pg(t, t1561 - 0.15, t1561 + 0.9, 'inOutSine');
    if (k61 > 0) { const bx = 120, by = 800; mx.save(); mx.globalAlpha = Math.min(1, k61 * 3); mx.fillStyle = 'rgba(244,228,196,0.92)'; mx.strokeStyle = 'rgba(70,40,18,0.9)'; mx.lineWidth = 3; const cart = MG.path.smooth([[bx, by], [bx + 200, by - 18], [bx + 400, by], [bx + 420, by + 120], [bx + 400, by + 220], [bx + 200, by + 238], [bx, by + 220], [bx - 20, by + 110]], true); mx.fill(cart); mx.stroke(cart); mx.lineWidth = 1.2; mx.strokeStyle = 'rgba(70,40,18,0.6)'; mx.save(); mx.translate(bx + 200, by + 110); mx.scale(0.92, 0.88); mx.translate(-(bx + 200), -(by + 110)); mx.stroke(cart); mx.restore();
      MG.text.draw(mx, 'ANNO DOMINI', bx + 200, by + 58, { font: F.oldSC, size: 26, color: 'rgba(60,32,14,0.85)', align: 'center', tracking: 0.2 }); mx.restore();
      mx.save(); mx.beginPath(); mx.rect(bx + 20, by + 60, 360 * k61, 160); mx.clip(); MG.text.draw(mx, '1561', bx + 200, by + 190, { font: F.cond, weight: 900, size: 140, color: '#3a1c0c', align: 'center', tracking: 0.02 }); mx.restore(); }
    mx.restore();
    // ---- camera dolly toward Madrid on the table after the reveal (leads into the push-through)
    const kD = E.inOutSine(lin(t, 181.2, 183.27)); const dz = 1 + 0.1 * kD;
    const q0 = [[0, 0], [W, 0], [W, H], [0, H]].map((p) => S2.camPt(p, cx, cy, z)); const tq = S2.lerpQ(q0, S2.Q_SHEET, kBack);
    const hom = S2.homo(tq); const onSheet = (p) => hom(p[0] / W, p[1] / H); const pMad = onSheet(mad), pTol = onSheet(tol);
    ctx.save();
    if (kD > 0) { const fx = lerp(960, pMad[0], 0.6), fy = lerp(540, pMad[1], 0.6); ctx.translate(fx, fy); ctx.scale(dz, dz); ctx.translate(-fx, -fy); }
    if (t >= 174.97) {
      if (kBack > 0.001) {
        ctx.drawImage(this.roomB, 0, 0);
        const tableQ = S2.lerpQ(q0.map((p) => [lerp(p[0], 960, -0.3), lerp(p[1], 540, -0.3)]), [[430, 530], [1460, 530], [1800, 1120], [120, 1120]], kBack);
        // table edge (thickness) under the far rim + the top
        ctx.fillStyle = '#24130b'; ctx.beginPath(); ctx.moveTo(tableQ[0][0], tableQ[0][1]); ctx.lineTo(tableQ[1][0], tableQ[1][1]); ctx.lineTo(tableQ[1][0], tableQ[1][1] - 6); ctx.lineTo(tableQ[0][0], tableQ[0][1] - 6); ctx.fill();
      }
      const kP = pg(t, 180.2, 181.4);
      const PH = S2.PHIL; const px = PH.x + (1 - kP) * 30, py = PH.y + (1 - kP) * 60;
      const pose = this._pose(t, tMoves, tCap, pMad, pTol);
      if (kP > 0) S2.philip(ctx, px, py, PH.s, t, pose);
      if (kBack > 0.001) { const tableQ = S2.lerpQ(q0.map((p) => [lerp(p[0], 960, -0.3), lerp(p[1], 540, -0.3)]), [[430, 530], [1460, 530], [1800, 1120], [120, 1120]], kBack); S2.quad(ctx, this.table, tableQ, 6);
        // the king's left hand flat on the table
        ctx.save(); ctx.fillStyle = 'rgba(10,4,2,0.5)'; ctx.filter = 'blur(10px)'; ctx.beginPath(); tq.forEach((p, i) => (i ? ctx.lineTo(p[0] + 14, p[1] + 16) : ctx.moveTo(p[0] + 14, p[1] + 16))); ctx.closePath(); ctx.fill(); ctx.restore(); }
      if (kBack < 0.001) S2.drawCam(ctx, this.mapMix, R, cx, cy, z, { alpha: t < 175.3 ? MG.smoothstep(174.97, 175.3, t) : 1 });
      else { S2.quad(ctx, this.mapMix, tq, 12);
        // candle-and-window light across the sheet; the king's shadow falls to the right
        ctx.save(); ctx.beginPath(); tq.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.clip();
        const lg = ctx.createLinearGradient(400, 560, 1500, 1060); lg.addColorStop(0, `rgba(255,220,160,${0.16 * kBack})`); lg.addColorStop(1, `rgba(40,16,20,${0.42 * kBack})`); ctx.fillStyle = lg; ctx.fillRect(0, 0, W, H);
        if (kP > 0) { ctx.globalCompositeOperation = 'multiply'; ctx.filter = 'blur(28px)'; ctx.fillStyle = `rgba(70,40,60,${0.55 * kP})`; ctx.beginPath(); ctx.ellipse(px + 120, 700, 230, 140, 0.3, 0, MG.TAU); ctx.fill(); }
        ctx.restore(); if (kP > 0) S2.philipLeft(ctx, px, py, S2.PHIL.s, t); }
      // candle on the near-left corner
      if (kBack > 0.3) { const ca = pg(t, 180.6, 181.4); const fl = 1 + MG.wiggle(t, 6, 0.12, 5); const bx = 240, by = 1000; ctx.save(); ctx.globalAlpha *= ca;
        MG.fx.glow(ctx, bx, by - 210, 260 * fl, '#ffc070', 0.35, 'screen');
        const cand = MG.path.rr(bx - 26, by - 170, 52, 190, 8); MG.fx.volume(ctx, cand, [bx - 26, by - 170, 52, 190], { color: '#efe3c8', shade: 0.45, hi: 0.4, light: [0.6, -0.8], outline: '#2a1a12', outlineW: 3 });
        const flame = MG.path.smooth([[bx, by - 250 * fl + MG.wiggle(t, 4, 6, 9)], [bx + 13, by - 196], [bx, by - 172], [bx - 13, by - 196]], true); ctx.fillStyle = '#ffd27a'; ctx.fill(flame); ctx.fillStyle = '#fff3d0'; ctx.beginPath(); ctx.ellipse(bx, by - 192, 5, 12, 0, 0, MG.TAU); ctx.fill(); ctx.restore(); }
    }
    // ---- the crowned pin
    const sc = lerp(z, 0.66, kBack);
    let tip, len = 78 * sc, alpha = 1, lift = 0;
    if (t < 179.4) { const kd = pg(t, tPin, tLand, 'inQuad'); tip = pMad; lift = (1 - kd) * 260; alpha = clamp((t - tPin) / 0.12); }
    else if (t < tMoves - 0.05) { tip = pTol; alpha = MG.smoothstep(179.4, 180.2, t); }
    else { const km = pg(t, tMoves - 0.05, tCap + 0.05, 'inOutCubic'); tip = [lerp(pTol[0], pMad[0], km), lerp(pTol[1], pMad[1], km)]; lift = Math.sin(km * Math.PI) * 70 * sc; }
    if (t >= tPin && alpha > 0) {
      const squash = MG.jiggle(t, tLand, 0.12, 5, 7) + (t > tMoves ? MG.jiggle(t, tCap + 0.05, 0.1, 5, 8) : 0);
      ctx.save(); ctx.globalAlpha *= alpha;
      const rp = pg(t, tLand, tLand + 0.7); if (lift < 0.5 && rp > 0 && rp < 1 && t < 179) { ctx.strokeStyle = MG.col.a(P.rojoDeep, 0.6 * (1 - rp)); ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(tip[0], tip[1], 10 + rp * 70, (10 + rp * 70) * 0.55, 0, 0, MG.TAU); ctx.stroke(); }
      const kc = pg(t, tCap - 0.2, tCap + 0.2); const rp2 = pg(t, tCap + 0.05, tCap + 0.8); if (rp2 > 0 && rp2 < 1) { ctx.strokeStyle = MG.col.a(P.gold, 0.8 * (1 - rp2)); ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(pMad[0], pMad[1], 8 + rp2 * 60, (8 + rp2 * 60) * 0.45, 0, 0, MG.TAU); ctx.stroke(); }
      S2.pin(ctx, tip[0], tip[1] - lift, len * (1 - squash * 0.4), { r: 15 * sc, tilt: -0.12, shadowA: lift > 1 ? 0.5 : 1, crown: t > 179.4 });
      ctx.restore();
    }
    if (pg(t, 180.2, 181.4) > 0 && kBack > 0.5) { const PH = S2.PHIL; const kP = pg(t, 180.2, 181.4); const pose = this._pose(t, tMoves, tCap, pMad, pTol); S2.philipArm(ctx, PH.x + (1 - kP) * 30, PH.y + (1 - kP) * 60, PH.s, t, pose.hs); }
    ctx.restore();
    // labels (screen space)
    const kL = pg(t, tLand, tLand + 0.45) * (1 - pg(t, 179.4, 179.8));
    if (kL > 0) { const lp = S2.camPt(mad, cx, cy, z); MG.text.reveal(ctx, 'MADRID', lp[0] + 34, lp[1] - 18, t, tLand, { font: F.grotesk, weight: 800, size: 40, tracking: 0.14, color: P.ink, stroke: 'rgba(250,244,232,0.9)', strokeW: 8, alpha: kL });
      MG.text.reveal(ctx, '40.4°N  3.7°W', lp[0] + 36, lp[1] + 16, t, tLand + 0.25, { font: F.mono, weight: 500, size: 20, tracking: 0.12, color: P.ink2, style: 'fade', by: 'line', alpha: kL }); }
    const kN = pg(t, tAcc - 0.05, tAcc + 0.5) * (1 - pg(t, 179.4, 179.75));
    if (kN > 0) { const lp = S2.camPt(mad, cx, cy, z); MG.text.reveal(ctx, 'no accident.', lp[0] + 120, lp[1] + 120, t, tAcc - 0.05, { font: F.brush, size: 64, color: P.rojo, style: 'wipe', by: 'line', dur: 0.5, alpha: kN }); }
    if (t > tPhil - 0.1) MG.kit.tag(ctx, t, tPhil - 0.1, 'Philip II', { sub: 'King of Spain · 1556–1598', x: 1440, y: 150, subColor: 'rgba(250,240,225,0.8)' });
  },
  _pose(t, tMoves, tCap, pMad, pTol) {
    const rest = [S2.PHIL.x - 300, S2.PHIL.y + 330]; const reach = pg(t, 181.3, tMoves - 0.05, 'inOutCubic'); const km = pg(t, tMoves - 0.05, tCap + 0.05, 'inOutCubic');
    const top = (p) => [p[0] + 4, p[1] - 58]; const tl = top(pTol), ml = top(pMad);
    let hs; if (t < tMoves - 0.05) hs = [lerp(rest[0], tl[0], reach), lerp(rest[1], tl[1], reach)];
    else if (t < tCap + 0.05) hs = [lerp(tl[0], ml[0], km), lerp(tl[1], ml[1], km) - Math.sin(km * Math.PI) * 46];
    else { const kr = pg(t, tCap + 0.3, tCap + 1.0, 'inOutCubic'); hs = [lerp(ml[0], rest[0] + 60, kr), lerp(ml[1], rest[1] - 30, kr)]; }
    return { hs, look: t < tCap + 0.35 ? [-0.8, 0.8] : [-0.3, 0.35], turn: t > tCap + 0.4 ? 0.3 : 0, nod: t > tCap - 0.1 ? MG.jiggle(t, tCap, 0.4, 2.2, 4) : 0, brow: t > tCap ? 0.25 : 0, mouth: t > tCap ? 0.3 : 0.1 };
  },
  post: { grade: 'warm', vignette: 0.34 } });

// screen point of Madrid at the end of s02_madrid (for the push-through)
S2.madEnd = (() => { const pr = MG.kit.view('iberia'); const m = pr(MG.geo.cities.Madrid); const h = S2.homo(S2.Q_SHEET); const q = h(m[0] / W, m[1] / H); const fx = lerp(960, q[0], 0.6), fy = lerp(540, q[1], 0.6); return [fx + (q[0] - fx) * 1.1, fy + (q[1] - fy) * 1.1]; })();

// ---- scenery helpers (2.5D oblique buildings, lit from upper-left) ----
/** whitewashed house: x,y = front-bottom-left; w,h front size; d depth (side face to the right-up); roof colour */
S2.house = (x, ctx, y, w, h, d, o = {}) => {
  const dx = d * 0.7, dy = -d * 0.45; const wall = o.wall || '#F1E8D8', side = o.side || '#C8B6A2', roof = o.roof || '#B95C3A', ink = 'rgba(40,24,20,0.55)';
  ctx.lineJoin = 'round'; ctx.lineWidth = 1.4; ctx.strokeStyle = ink;
  // side
  ctx.fillStyle = side; ctx.beginPath(); ctx.moveTo(x + w, y); ctx.lineTo(x + w + dx, y + dy); ctx.lineTo(x + w + dx, y + dy - h); ctx.lineTo(x + w, y - h); ctx.closePath(); ctx.fill(); ctx.stroke();
  // front
  ctx.fillStyle = wall; ctx.fillRect(x, y - h, w, h); ctx.strokeRect(x, y - h, w, h);
  // roof: gable seen from front (hip-ish), tiles lines
  const rh = o.rh ?? h * 0.42; ctx.fillStyle = roof; ctx.beginPath(); ctx.moveTo(x - 3, y - h); ctx.lineTo(x + w * 0.5, y - h - rh); ctx.lineTo(x + w * 0.5 + dx, y - h - rh + dy); ctx.lineTo(x + w + dx + 3, y - h + dy); ctx.lineTo(x + w + 3, y - h); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.fillStyle = MG.col.shade(roof, 0.28); ctx.beginPath(); ctx.moveTo(x - 3, y - h); ctx.lineTo(x + w * 0.5, y - h - rh); ctx.lineTo(x + w + 3, y - h); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.strokeStyle = 'rgba(60,20,10,0.3)'; for (let k = 1; k < 5; k++) { const u = k / 5; ctx.beginPath(); ctx.moveTo(lerp(x + w * 0.5, x + w + 3, u), lerp(y - h - rh, y - h, u)); ctx.lineTo(lerp(x + w * 0.5 + dx, x + w + dx + 3, u), lerp(y - h - rh + dy, y - h + dy, u)); ctx.stroke(); }
  // door + windows
  ctx.fillStyle = o.door || '#5a3a26'; ctx.fillRect(x + w * 0.4, y - h * 0.5, w * 0.2, h * 0.5);
  if (w > 24) { ctx.fillStyle = '#3a2a26'; ctx.fillRect(x + w * 0.12, y - h * 0.72, w * 0.16, h * 0.18); ctx.fillRect(x + w * 0.72, y - h * 0.72, w * 0.16, h * 0.18); }
  // cast shadow to the lower right
  ctx.fillStyle = 'rgba(60,40,60,0.18)'; ctx.beginPath(); ctx.moveTo(x + w + dx, y + dy); ctx.lineTo(x + w + dx + h * 0.5, y + dy + h * 0.12); ctx.lineTo(x + w + h * 0.5, y + h * 0.12); ctx.lineTo(x + w, y); ctx.closePath(); ctx.fill();
};
/** square tower with slate spire */
S2.tower = (ctx, x, y, w, h, d, o = {}) => { S2.house(x, ctx, y, w, h, d, { wall: o.wall || '#D9C4A2', side: o.side || '#A8906E', roof: '#4a4f5a', rh: 0.01 }); const dx = d * 0.7, dy = -d * 0.45; const sx = x + w / 2 + dx / 2, sy = y - h + dy / 2; ctx.fillStyle = '#4c525e'; ctx.strokeStyle = 'rgba(20,20,30,0.6)'; ctx.beginPath(); ctx.moveTo(x - 2, y - h); ctx.lineTo(sx, sy - (o.spire || w * 1.8)); ctx.lineTo(x + w + 2, y - h); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.fillStyle = '#2f343e'; ctx.beginPath(); ctx.moveTo(x + w + 2, y - h); ctx.lineTo(sx, sy - (o.spire || w * 1.8)); ctx.lineTo(x + w + dx + 2, y - h + dy); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.strokeStyle = P.gold; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(sx, sy - (o.spire || w * 1.8)); ctx.lineTo(sx, sy - (o.spire || w * 1.8) - 14); ctx.stroke(); };

// A5 · 183.27–185.43 · "…to an otherwise unremarkable town": tiny 16th-c. Madrid; the giant crowned pin stabs in
SC.push({ id: 's02_town', start: 183.27, end: 185.43, transIn: { type: 'zoom', dur: 0.5, x: S2.madEnd[0], y: S2.madEnd[1], amount: 2.6, from: 0.75 },
  init() {
    this.bg = MG.cache('s02:townbg', W, H, (x, w, h) => {
      MG.fx.vgrad(x, [[0, '#B9CFE0'], [0.55, '#EADFC8'], [1, '#E5D2AA']]);
      // Sierra de Guadarrama behind Madrid, with snow
      const ridge = (yb, amp, col, snow, seed) => { x.fillStyle = col; x.beginPath(); x.moveTo(0, h); for (let xx = 0; xx <= w; xx += 8) x.lineTo(xx, yb - Math.abs(MG.fbm(xx * 0.0022 + seed, seed, 4)) * amp - MG.fbm(xx * 0.01, seed + 3, 2) * amp * 0.15); x.lineTo(w, h); x.closePath(); x.fill(); if (snow) { x.save(); x.clip(); x.fillStyle = 'rgba(250,250,255,0.85)'; x.beginPath(); for (let xx = 0; xx <= w; xx += 8) { const yy = yb - Math.abs(MG.fbm(xx * 0.0022 + seed, seed, 4)) * amp - MG.fbm(xx * 0.01, seed + 3, 2) * amp * 0.15; xx ? x.lineTo(xx, yy) : x.moveTo(xx, yy); } for (let xx = w; xx >= 0; xx -= 8) { const yy = yb - Math.abs(MG.fbm(xx * 0.0022 + seed, seed, 4)) * amp * 0.62; x.lineTo(xx, yy); } x.closePath(); x.fill(); x.restore(); } };
      ridge(470, 380, '#9AA6C0', true, 2); ridge(520, 160, '#A9A79E', false, 7);
      x.filter = 'blur(2px)'; x.drawImage(x.canvas, 0, 0); x.filter = 'none';
      // plain with furrows
      x.fillStyle = '#D9BE86'; x.beginPath(); x.moveTo(0, 560); x.bezierCurveTo(600, 520, 1300, 560, w, 540); x.lineTo(w, h); x.lineTo(0, h); x.closePath(); x.fill();
      x.strokeStyle = 'rgba(120,80,40,0.18)'; x.lineWidth = 2; for (let i = 0; i < 40; i++) { const yy = 580 + i * 14 + i * i * 0.4; x.beginPath(); x.moveTo(0, yy); x.bezierCurveTo(600, yy - 20, 1300, yy + 10, w, yy - 10); x.stroke(); }
      MG.tex.over(x, 'blotch', { alpha: 0.18, color: '#7a5a2a', scale: 3 });
      // the low hill
      x.fillStyle = '#CFAE74'; x.beginPath(); x.moveTo(300, 820); x.bezierCurveTo(600, 600, 1300, 600, 1650, 820); x.closePath(); x.fill();
    });
    this.town = MG.cache('s02:town', W, H, (x, w, h) => {
      // houses (painter's order: back to front), Alcázar on the west edge, church tower
      const R = MG.rng(61); const items = [];
      for (let i = 0; i < 26; i++) { const xx = 640 + R() * 700, yy = 640 + R() * 150; items.push({ k: 'h', x: xx, y: yy, w: 34 + R() * 26, h: 26 + R() * 18, d: 22 + R() * 14 }); }
      items.push({ k: 'alc', x: 560, y: 700 }); items.push({ k: 'ch', x: 1100, y: 690 });
      items.sort((a, b) => a.y - b.y);
      // town wall
      x.strokeStyle = '#B79E7A'; x.lineWidth = 9; x.beginPath(); x.ellipse(980, 740, 470, 110, 0, Math.PI * 1.05, Math.PI * 1.95); x.stroke();
      for (const it of items) {
        if (it.k === 'h') S2.house(it.x, x, it.y, it.w, it.h, it.d, { roof: MG.col.mix('#B95C3A', '#9a4a30', MG.rand(5, it.x)) });
        else if (it.k === 'ch') { S2.house(it.x - 30, x, it.y, 80, 60, 40, { wall: '#E9DCC4', roof: '#a85434' }); S2.tower(x, it.x + 52, it.y + 4, 30, 118, 22, { wall: '#E4D3B4', spire: 60 }); }
        else { S2.house(it.x, x, it.y, 200, 80, 60, { wall: '#DCC6A0', side: '#AE9570', roof: '#6a5a50', rh: 8 }); S2.tower(x, it.x - 16, it.y + 6, 44, 132, 30, {}); S2.tower(x, it.x + 178, it.y + 2, 44, 140, 30, {}); }
      }
      MG.tex.over(x, 'grain', { alpha: 0.12 });
    });
    this.townB = MG.blurred(this.bg, 1.5);
  },
  draw(ctx, t) {
    const tTown = TW('town', 184.95), tUn = TW('unremarkable', 184.23); const tHit = 183.62;
    const sh = MG.cam.add(MG.cam.shake(t, tHit, 16, 7), MG.cam.handheld(t, 2.5, 4));
    const z = 1.02 + 0.05 * lin(t, 183.27, 185.6);
    ctx.save(); ctx.translate(960 + sh.dx, 600 + sh.dy); ctx.scale(z, z); ctx.rotate(sh.rot); ctx.translate(-960, -600);
    ctx.drawImage(this.bg, 0, 0); ctx.drawImage(this.town, 0, 0);
    // chimney smoke, birds over the plain
    MG.fx.smoke(ctx, 860, 640, t, { n: 6, seed: 3, spread: 120, rise: 26, r: 40, alpha: 0.22, color: '#f4efe6', wind: 10 });
    MG.fx.particles(ctx, { n: 7, seed: 12, t, area: [300, 300, 600, 120], vel: [40, -4], life: 6, size: [2, 3], shape: (c, x, y, s, age) => { const f = Math.sin(age * 14) * 3; c.strokeStyle = '#3a3036'; c.lineWidth = 1.6; c.beginPath(); c.moveTo(x - 6, y - f); c.lineTo(x, y); c.lineTo(x + 6, y - f); c.stroke(); }, alpha: 0.7 });
    // a farmer and his donkey on the road (stepped on twos)
    { const tb = MG.kit.twos(t); const dxp = 1500 - (tb - 183.27) * 26; const dyp = 905; const bob = Math.abs(Math.sin(tb * 7)) * 3;
      ctx.save(); ctx.translate(dxp, dyp); MG.fx.contact(ctx, 0, 4, 60, 10, 0.3);
      const body = MG.path.smooth([[-46, -50 - bob], [20, -56 - bob], [40, -40 - bob], [36, -20], [-40, -18], [-52, -30]], true); MG.fx.volume(ctx, body, [-52, -56, 92, 38], { color: '#8b7d74', shade: 0.5, cel: true, outline: '#2a1d1a', outlineW: 2.5 });
      ctx.strokeStyle = '#2a1d1a'; ctx.lineWidth = 5; ctx.lineCap = 'round'; for (const [lx, ph] of [[-34, 0], [-20, 1.6], [16, 3.1], [30, 4.7]]) { ctx.beginPath(); ctx.moveTo(lx, -22); ctx.lineTo(lx + Math.sin(tb * 7 + ph) * 6, 0); ctx.stroke(); }
      const hd = MG.path.smooth([[-50, -46 - bob], [-74, -64 - bob], [-86, -50 - bob], [-70, -34 - bob]], true); MG.fx.volume(ctx, hd, [-86, -64, 36, 30], { color: '#8b7d74', shade: 0.5, cel: true, outline: '#2a1d1a', outlineW: 2.5 }); ctx.fillStyle = '#5d524b'; ctx.beginPath(); ctx.ellipse(-62, -76 - bob, 4, 12, -0.4, 0, MG.TAU); ctx.fill();
      // farmer walking ahead with a stick
      const fb = Math.abs(Math.sin(tb * 7 + 1)) * 3; ctx.translate(-120, 0); ctx.strokeStyle = '#2a1d1a'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(-4, -40); ctx.lineTo(-4 + Math.sin(tb * 7) * 8, 0); ctx.moveTo(4, -40); ctx.lineTo(4 - Math.sin(tb * 7) * 8, 0); ctx.stroke();
      const cl = MG.path.smooth([[-14, -86 - fb], [14, -86 - fb], [18, -36], [-18, -36]], true); MG.fx.volume(ctx, cl, [-18, -86, 36, 50], { color: '#6d4b34', shade: 0.5, cel: true, outline: '#2a1d1a', outlineW: 2.5 });
      MG.fx.volume(ctx, MG.path.circle(0, -98 - fb, 11), [-11, -109 - fb, 22, 22], { color: '#d9a982', shade: 0.5, cel: true, outline: '#2a1d1a', outlineW: 2 }); ctx.fillStyle = '#3a2a20'; ctx.beginPath(); ctx.ellipse(0, -106 - fb, 15, 5, 0, 0, MG.TAU); ctx.fill(); ctx.fillRect(-8, -116 - fb, 16, 10);
      ctx.strokeStyle = '#4a3020'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-14, -60); ctx.lineTo(-30, 2); ctx.stroke(); ctx.restore(); }
    // the giant crowned capital pin falls and stabs into the plaza
    const plaza = [960, 735]; const kd = pg(t, 183.27, tHit, 'inQuad'); const len = 560;
    const tipY = lerp(-700, plaza[1], kd); const sq = MG.jiggle(t, tHit, 0.06, 6, 6);
    S2.pin(ctx, plaza[0], tipY, len * (1 - sq), { r: 70, tilt: -0.08, shadowA: kd, color: P.rojo });
    if (t > tHit) { const u = (t - tHit); // dust ring + debris
      MG.fx.particles(ctx, { n: 40, seed: 77, t: u, area: [plaza[0] - 40, plaza[1] - 10, 80, 20], vel: [0, -60], velJitter: 2.2, gravity: 90, life: 1.6, size: [3, 9], colors: ['#d8c39a', '#c4a676', '#efe1c2'], alpha: 0.6 * Math.exp(-u * 1.2), shape: 'puff', fadeIn: 0.01 });
      const rr = pg(t, tHit, tHit + 0.9); ctx.save(); ctx.strokeStyle = `rgba(220,200,160,${0.7 * (1 - rr)})`; ctx.lineWidth = 6; ctx.beginPath(); ctx.ellipse(plaza[0], plaza[1], 30 + rr * 380, (30 + rr * 380) * 0.22, 0, 0, MG.TAU); ctx.stroke(); ctx.restore(); }
    ctx.restore();
    MG.kit.tag(ctx, t, tUn - 0.15, 'Madrid', { sub: 'an unremarkable town · 1561', x: 140, y: 930 });
  },
  post: { grade: 'warm', vignette: 0.3 } });

// A6 · 185.43–189.75 · 3D: the Spain slab balanced on the capital pin — the geographic centre
SC.push({ id: 's02_balance', start: 185.43, end: 189.75, transIn: { type: 'blur', dur: 0.45, amount: 18 },
  init() {
    const T = THREE; const pr = MG.kit.view('iberia'); const mad = pr(MG.geo.cities.Madrid); this.mad = mad;
    const es = MG.geo.country('Spain', '10'); const polys = es.geometry.type === 'Polygon' ? [es.geometry.coordinates] : es.geometry.coordinates;
    let best = null, bestA = 0; for (const poly of polys) { const pts = poly[0].map((c) => pr(c)); let a = 0; for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) a += (pts[j][0] + pts[i][0]) * (pts[j][1] - pts[i][1]); a = Math.abs(a / 2); if (a > bestA) { bestA = a; best = pts; } }
    const simp = [best[0]]; for (const p of best) { const q = simp[simp.length - 1]; if (Math.hypot(p[0] - q[0], p[1] - q[1]) > 3.5) simp.push(p); }
    const shape = new T.Shape(simp.map((p) => new T.Vector2((p[0] - mad[0]) / 100, -(p[1] - mad[1]) / 100)));
    const geo = new T.ExtrudeGeometry(shape, { depth: 0.22, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.02, bevelSegments: 1, curveSegments: 2 });
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position, uv = geo.attributes.uv; for (let i = 0; i < pos.count; i++) { const px = pos.getX(i) * 100 + mad[0], py = pos.getZ(i) * 100 + mad[1]; uv.setXY(i, px / W, 1 - py / H); } uv.needsUpdate = true;
    const tex = MG.three.canvasTexture(S2.mapModern(1.25)); this.tex = tex;
    const top = new T.MeshStandardMaterial({ map: tex, roughness: 0.9, metalness: 0, envMapIntensity: 0 }); const side = new T.MeshStandardMaterial({ color: new T.Color(MG.col.shade(P.sol, 0.45)), roughness: 0.9, envMapIntensity: 0.2 });
    this.slab = new T.Mesh(geo, [top, side]);
    this.sc = new T.Scene(); this.sc.environment = MG.three.env();
    this.grp = new T.Group(); this.grp.add(this.slab); this.sc.add(this.grp);
    // the crowned pin through Madrid (needle down to the table)
    const steel = new T.MeshStandardMaterial({ color: 0xdadde2, metalness: 0.9, roughness: 0.25 });
    const needle = new T.Mesh(new T.CylinderGeometry(0.022, 0.006, 3.0, 12), steel); needle.position.y = -0.95; this.sc.add(needle);
    const up = new T.Mesh(new T.CylinderGeometry(0.022, 0.022, 0.9, 12), steel); up.position.y = 0.67; this.sc.add(up);
    const head = new T.Mesh(new T.SphereGeometry(0.15, 32, 20), new T.MeshStandardMaterial({ color: new T.Color(P.rojo), roughness: 0.32, metalness: 0.05 })); head.position.y = 1.2; this.sc.add(head);
    const gold = new T.MeshStandardMaterial({ color: new T.Color(P.gold), metalness: 0.85, roughness: 0.3 });
    const band = new T.Mesh(new T.CylinderGeometry(0.11, 0.12, 0.07, 24, 1, true), gold); band.position.y = 1.36; this.sc.add(band);
    for (let i = 0; i < 5; i++) { const a = (i / 5) * MG.TAU; const c = new T.Mesh(new T.ConeGeometry(0.03, 0.1, 8), gold); c.position.set(Math.cos(a) * 0.11, 1.44, Math.sin(a) * 0.11); this.sc.add(c); }
    this.sc.add(new T.HemisphereLight(0xfff1dc, 0x5a4660, 0.38)); const dl = new T.DirectionalLight(0xfff0d8, 0.82); dl.position.set(-4, 7, 3); this.sc.add(dl);
    this.cam = new T.PerspectiveCamera(30, 16 / 9, 0.1, 200);
    this.v = new T.Vector3();
  },
  draw(ctx, t) {
    const T = THREE; const mad = this.mad; const t0 = 185.43, tEnd = 189.75;
    const kTop = pg(t, 188.6, 189.75, 'inOutCubic');
    // background: warm paper → the standard map (so the top-down end frame matches the next scene)
    MG.kit.paper(ctx, P.paper2, { light: 0.3 }); if (kTop > 0) { ctx.save(); ctx.globalAlpha = kTop; ctx.drawImage(this.bgMap || (this.bgMap = MG.cache('s02:mapbg1x', W, H, (x) => { MG.kit.iberiaMap(x, { view: 'iberia', relief: 0.75, lift: 14 }); })), 0, 0); ctx.restore(); }
    // wobble settling into balance
    const u = Math.max(0, t - t0); const amp = 0.2 * Math.exp(-u * 0.9); this.grp.rotation.set(amp * Math.sin(u * 5.2), (1 - pg(t, t0, 188.9, 'inOutSine')) * 0.9, amp * Math.cos(u * 4.1 + 0.4));
    // camera: close on the crown → pull back & up → straight down (map projection match)
    const fovk = 2015 / 100; const tgtTop = new T.Vector3((960 - mad[0]) / 100, 0.22, (540 - mad[1]) / 100);
    const kA = pg(t, t0, 187.2, 'inOutCubic');
    const p0 = new T.Vector3(1.4, 1.9, 3.2), l0 = new T.Vector3(0, 1.0, 0); const p1 = new T.Vector3(4.5, 7.5, 13.5), l1 = new T.Vector3(0, -0.2, 0.3);
    const p2 = new T.Vector3(tgtTop.x, tgtTop.y + fovk, tgtTop.z + 0.02);
    const pos = p0.clone().lerp(p1, kA).lerp(p2, kTop); const look = l0.clone().lerp(l1, kA).lerp(tgtTop, kTop);
    this.cam.position.copy(pos); this.cam.lookAt(look); this.cam.updateMatrixWorld();
    // soft shadow of the slab on the paper (light upper-left)
    if (kTop < 0.98) { this.v.set(1.2, -2.1, 1.2).project(this.cam); const sx = (this.v.x * 0.5 + 0.5) * W, sy = (-this.v.y * 0.5 + 0.5) * H; const sr = 520 / Math.max(0.5, pos.distanceTo(look) / 6); ctx.save(); ctx.globalAlpha = 0.35 * (1 - kTop); ctx.filter = 'blur(30px)'; ctx.fillStyle = '#3a2430'; ctx.beginPath(); ctx.ellipse(sx, sy, sr, sr * 0.42, 0, 0, MG.TAU); ctx.fill(); ctx.restore();
      this.v.set(0, -2.45, 0).project(this.cam); const nx = (this.v.x * 0.5 + 0.5) * W, ny = (-this.v.y * 0.5 + 0.5) * H; MG.fx.contact(ctx, nx + 6, ny + 3, 26, 9, 0.5 * (1 - kTop)); }
    const c = MG.three.render(this.sc, this.cam, { slot: 0, toneMapping: T.NoToneMapping }); ctx.drawImage(c, 0, 0);
    // labels
    this.v.set(0, 1.25, 0).project(this.cam); const hx = (this.v.x * 0.5 + 0.5) * W, hy = (-this.v.y * 0.5 + 0.5) * H;
    const tC = TW('geographic', 185.75); const kl = pg(t, tC, tC + 0.5) * (1 - pg(t, 188.3, 188.7));
    if (kl > 0) { ctx.save(); ctx.globalAlpha = kl; ctx.strokeStyle = P.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(hx + 22, hy - 10); ctx.lineTo(hx + 150, hy - 110); ctx.lineTo(hx + 190, hy - 110); ctx.stroke(); ctx.restore();
      MG.text.reveal(ctx, 'GEOGRAPHIC CENTRE', hx + 200, hy - 102, t, tC, { font: F.mono, weight: 700, size: 26, tracking: 0.18, color: P.ink, style: 'track', by: 'line', alpha: kl }); }
    const tQ = TW('most', 188.07); const kq = 1 - pg(t, 189.3, 189.7);
    if (t > tQ - 0.2 && kq > 0) { MG.text.reveal(ctx, 'the most popular', 160, 210, t, tQ - 0.1, { font: F.serif, italic: true, size: 56, color: P.ink2, style: 'blur', by: 'word', alpha: kq });
      MG.text.reveal(ctx, 'explanation?', 156, 320, t, TW('explanation', 188.71) - 0.1, { font: F.display, weight: 800, size: 110, color: P.ink, style: 'rise', by: 'word', alpha: kq }); }
  },
  post: { grade: 'warm', vignette: 0.3 } });

// A7–A9 · 189.75–200.71 · equal distance rings → provinces level out → three capitals on a time-scaled line
S2.LENS = { mad: [340, 440], was: [1186, 440], can: [1640, 440], r: 205 };
SC.push({ id: 's02_equal', start: 189.75, end: 200.71, transIn: { type: 'fade', dur: 0.3 },
  init() {
    this.pr = MG.kit.view('iberia'); this.mad = this.pr(MG.geo.cities.Madrid); this.base = MG.cache('s02:mapbg1x', W, H, (x) => { MG.kit.iberiaMap(x, { view: 'iberia', relief: 0.75, lift: 14 }); });
    const pen = MG.geo.provinces.features.filter((f) => !['35', '38', '51', '52', '54', '07'].includes(f.id));
    this.prov = pen.map((f) => { const p2 = MG.geo.path2d(this.pr, f); const c = this.pr(d3.geoCentroid(f)); return { f, p2, c, id: f.id, d: Math.hypot(c[0] - this.mad[0], c[1] - this.mad[1]) }; }).sort((a, b) => a.c[1] - b.c[1]);
    this.km = (d) => { // pixel radius of a d-km circle around Madrid (projected at the latitude of Madrid)
      const ll = MG.geo.cities.Madrid; const p = this.pr([ll[0], ll[1] + d / 111.2]); return Math.abs(p[1] - this.mad[1]); };
    // lens maps
    const mk = (key, center, scale, land, extra) => MG.cache('s02:lens:' + key, 420, 420, (x, w, h) => { const pr = MG.geo.proj('mercator', { center, scale, translate: [w / 2, h / 2] }); x.fillStyle = MG.kit.map.sea; x.fillRect(0, 0, w, h); x.strokeStyle = 'rgba(255,255,255,0.16)'; x.lineWidth = 1.2; for (let yy = 6; yy < h; yy += 12) { x.beginPath(); for (let xx = 0; xx <= w; xx += 10) x.lineTo(xx, yy + Math.sin(xx * 0.03 + yy) * 1.6); x.stroke(); } MG.geo.draw(x, pr, MG.geo.land50, { fill: MG.kit.map.landOther, stroke: MG.kit.map.coast, width: 1 }); for (const n of land) MG.geo.draw(x, pr, MG.geo.country(n, '50'), { fill: '#E9DCC0', stroke: MG.kit.map.border, width: 1 }); if (extra) extra(x, pr); MG.tex.over(x, 'grain', { alpha: 0.1, blend: 'overlay' }); });
    this.lWas = mk('was', [-76.8, 37.6], 1200, ['United States of America']); this.lCan = mk('can', [148.4, -35.6], 1500, ['Australia']);
    this.prWas = MG.geo.proj('mercator', { center: [-76.8, 37.6], scale: 1200, translate: [210, 210] }); this.prCan = MG.geo.proj('mercator', { center: [148.4, -35.6], scale: 1500, translate: [210, 210] });
  },
  draw(ctx, t) {
    const mad = this.mad; const tEq = TW('equally', 190.31), tEv = TW('everyone', 191.51), tProv = TW('province', 192.79), tClaim = TW('claim', 193.43), tThan = TW('than', 194.79), tWas = TW('Washington', 195.99), tCan = TW('Canberra', 196.63), tSame = TW('same', 197.95), tCent = TW('centuries', 199.27);
    const kLens = pg(t, tWas - 0.55, tWas + 0.35, 'inOutCubic'); const L = S2.LENS;
    // the Spain view shrinks into the first lens of the timeline
    const sc = lerp(1, 0.33, kLens); const ox = lerp(960, L.mad[0] + (960 - mad[0]) * 0.33, kLens) , oy = lerp(540, L.mad[1] + (540 - mad[1]) * 0.33, kLens);
    MG.kit.paper(ctx, P.paper, { light: 0.25 });
    const lensR = lerp(1300, L.r, kLens);
    ctx.save(); ctx.beginPath(); ctx.arc(L.mad[0] + (mad[0] - 960) * 0 + 0, L.mad[1], lensR, 0, MG.TAU); if (kLens > 0) ctx.clip();
    ctx.translate(ox, oy); ctx.scale(sc, sc); ctx.translate(-960, -540);
    ctx.drawImage(this.base, 0, 0);
    // provinces: hairline borders, then the 'claim' beat (tiles rise, are pressed level)
    const kP = pg(t, tProv - 0.4, tProv + 0.2) * (1 - pg(t, tWas - 0.6, tWas - 0.1));
    if (kP > 0) {
      ctx.save(); if (!this.allP) { this.allP = new Path2D(); for (const p of this.prov) this.allP.addPath(p.p2); } ctx.clip(this.allP);
      const claimers = { '08': 1, '41': 1, '46': 1, '47': 1, '45': 0.7 };
      for (const p of this.prov) { const wave = Math.max(0, Math.sin(clamp((t - tProv - p.d * 0.0018) / 0.5) * Math.PI)) * 10; let hgt = wave * kP; const cl = claimers[p.id]; if (cl) { const up = pg(t, tClaim - 0.1 + cl * 0.1, tClaim + 0.4) * (1 - pg(t, tThan - 0.05, tThan + 0.25, 'inCubic')); hgt += up * 46 * cl; }
        if (hgt > 0.5) { ctx.save(); ctx.fillStyle = 'rgba(40,20,20,0.28)'; ctx.translate(5, 7); ctx.fill(p.p2); ctx.restore();
          ctx.save(); ctx.translate(0, -hgt); for (let k = Math.ceil(hgt / 2); k >= 1; k--) { ctx.save(); ctx.translate(0, k * 2); ctx.fillStyle = MG.col.shade(P.solDeep, 0.35 + (k / Math.ceil(hgt / 2)) * 0.15); ctx.fill(p.p2); ctx.restore(); }
          ctx.save(); ctx.clip(p.p2); ctx.drawImage(this.base, 0, hgt); if (cl && hgt > 12) { ctx.fillStyle = 'rgba(255,236,190,0.22)'; ctx.fill(p.p2); } ctx.restore(); ctx.strokeStyle = 'rgba(255,248,230,0.6)'; ctx.lineWidth = 1.5; ctx.stroke(p.p2); ctx.restore(); }
      }
      ctx.restore();
      MG.geo.draw(ctx, this.pr, MG.geo.provinceMesh, { stroke: `rgba(58,43,58,${0.5 * kP})`, width: 1.2 });
      if (t > tClaim - 0.1 && t < tThan + 0.6) { const ka = pg(t, tClaim, tClaim + 0.3) * (1 - pg(t, tThan + 0.1, tThan + 0.5)); for (const id of ['08', '41', '46', '47']) { const p = this.prov.find((q) => q.id === id); MG.text.draw(ctx, p.f.properties.short.toUpperCase(), p.c[0], p.c[1] - 60, { font: F.grotesk, weight: 800, size: 22, tracking: 0.1, align: 'center', color: P.ink, stroke: 'rgba(250,244,232,0.9)', strokeW: 6, alpha: ka }); } }
    }
    // equal-distance rings from Madrid
    const kR = pg(t, tEq - 0.2, tEq + 1.6, 'inOutSine') * (1 - 0.6 * kP);
    if (kR > 0) { for (let i = 1; i <= 5; i++) { const ri = this.km(i * 100); const ki = clamp(kR * 5 - (i - 1)); if (ki <= 0) continue; ctx.save(); ctx.strokeStyle = MG.col.a(P.rojoDeep, 0.75 * ki); ctx.lineWidth = i === 4 ? 3 : 2; ctx.setLineDash([10, 8]); ctx.lineDashOffset = -t * 20; ctx.beginPath(); ctx.arc(mad[0], mad[1], ri * E.out(ki), 0, MG.TAU); ctx.stroke(); ctx.restore();
        if (kLens < 0.2) MG.text.draw(ctx, `${i * 100} KM`, mad[0] + 8, mad[1] - ri * E.out(ki) - 8, { font: F.mono, weight: 700, size: 18, tracking: 0.1, color: P.rojoDeep, stroke: 'rgba(250,244,232,0.85)', strokeW: 5, alpha: ki * (1 - kP) }); }
      const ke = pg(t, tEv - 0.1, tEv + 0.6) * (1 - kP); if (ke > 0) for (const c of ['ACoruna', 'Bilbao', 'Barcelona', 'Valencia', 'Malaga', 'Cadiz', 'Lisbon']) { const p = this.pr(MG.geo.cities[c]); ctx.save(); ctx.globalAlpha = ke; ctx.strokeStyle = 'rgba(30,26,29,0.45)'; ctx.lineWidth = 1.5; ctx.setLineDash([3, 5]); ctx.beginPath(); ctx.moveTo(mad[0], mad[1]); ctx.lineTo(lerp(mad[0], p[0], ke), lerp(mad[1], p[1], ke)); ctx.stroke(); ctx.setLineDash([]); ctx.fillStyle = P.ink; ctx.beginPath(); ctx.arc(p[0], p[1], 6, 0, MG.TAU); ctx.fill(); ctx.restore(); } }
    S2.pin(ctx, mad[0], mad[1], 78, { r: 15, tilt: -0.12 });
    ctx.restore();
    if (kLens > 0) { ctx.save(); ctx.globalAlpha = kLens; ctx.strokeStyle = P.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(L.mad[0], L.mad[1], lensR, 0, MG.TAU); ctx.stroke(); ctx.setLineDash([3, 7]); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(L.mad[0], L.mad[1], lensR + 16, 0, MG.TAU); ctx.stroke(); ctx.restore(); }
    // ---- timeline of capitals (positions proportional to time)
    if (kLens > 0.02) this._timeline(ctx, t, kLens, tWas, tCan, tSame, tCent);
  },
  _lens(ctx, img, c, r, k, t, drawIn) { if (k <= 0) return; const rr = r * E.outBack(k); ctx.save(); MG.fx.shadow(ctx, MG.path.circle(c[0], c[1], rr), { dx: 10, dy: 16, blur: 30, color: 'rgba(40,20,10,0.3)' }); ctx.beginPath(); ctx.arc(c[0], c[1], rr, 0, MG.TAU); ctx.clip(); const s = rr / r; ctx.translate(c[0], c[1]); ctx.scale(s * (2 * r / 420), s * (2 * r / 420)); ctx.translate(-210, -210); ctx.drawImage(img, 0, 0); if (drawIn) drawIn(ctx); ctx.restore(); ctx.save(); ctx.strokeStyle = P.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(c[0], c[1], rr, 0, MG.TAU); ctx.stroke(); ctx.setLineDash([3, 7]); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(c[0], c[1], rr + 16, 0, MG.TAU); ctx.stroke(); ctx.restore(); },
  _timeline(ctx, t, kL, tWas, tCan, tSame, tCent) {
    const L = S2.LENS; const ly = 820; const kW = pg(t, tWas - 0.1, tWas + 0.45), kC = pg(t, tCan - 0.1, tCan + 0.45); const kS = pg(t, tSame - 0.1, tSame + 0.9, 'inOutCubic'); const kT = pg(t, tCent - 0.1, tCent + 0.6);
    // the line
    ctx.save(); ctx.strokeStyle = P.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(L.mad[0] - 120, ly); ctx.lineTo(lerp(L.mad[0], 1800, kL), ly); ctx.stroke(); ctx.restore();
    const tick = (x, year, name, k, t0) => { if (k <= 0) return; ctx.save(); ctx.globalAlpha = k; ctx.strokeStyle = P.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x, ly - 16); ctx.lineTo(x, ly + 16); ctx.stroke(); ctx.setLineDash([2, 6]); ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x, L.mad[1] + L.r + 22); ctx.lineTo(x, ly - 18); ctx.stroke(); ctx.restore();
      MG.text.reveal(ctx, year, x, ly + 92, t, t0, { font: F.cond, weight: 900, size: 76, color: P.ink, align: 'center', style: 'rise', by: 'char', stagger: 0.04 }); MG.text.reveal(ctx, name, x, L.mad[1] - L.r - 34, t, t0 + 0.1, { font: F.grotesk, weight: 800, size: 30, tracking: 0.16, color: P.ink, align: 'center', style: 'track', by: 'line' }); };
    tick(L.mad[0], '1561', 'MADRID', kL, tWas - 0.3); tick(L.was[0], '1790', 'WASHINGTON', kW, tWas); tick(L.can[0], '1913', 'CANBERRA', kC, tCan);
    // lens contents: rival cities converge on the crowned compromise capital
    const conv = (c, pr, rivals, cap) => (x) => { const cp = pr(cap); for (const [ll, lab, dx, dy, al] of rivals) { const p = pr(ll); x.save(); x.strokeStyle = P.rojoDeep; x.lineWidth = 4; x.setLineDash([10, 7]); x.lineDashOffset = -t * 30; x.beginPath(); x.moveTo(p[0], p[1]); x.lineTo(lerp(p[0], cp[0], kS), lerp(p[1], cp[1], kS)); x.stroke(); x.restore(); x.fillStyle = P.ink; x.beginPath(); x.arc(p[0], p[1], 8, 0, MG.TAU); x.fill(); MG.text.draw(x, lab, p[0] + dx, p[1] + dy, { font: F.mono, weight: 700, size: 21, tracking: 0.08, color: P.ink, align: al, stroke: 'rgba(250,244,232,0.85)', strokeW: 5, alpha: clamp(kS * 3) }); }
      if (kS > 0.7) S2.pin(x, cp[0], cp[1], 70, { r: 14, tilt: -0.1, alpha: pg(t, tSame + 0.5, tSame + 0.9) }); };
    this._lens(ctx, this.lWas, L.was, L.r, kW, t, conv(L.was, this.prWas, [[[-74.006, 40.7128], 'NORTH', 14, 7, 'left'], [[-79.93, 32.78], 'SOUTH', 14, 7, 'left']], MG.geo.cities.Washington));
    this._lens(ctx, this.lCan, L.can, L.r, kC, t, conv(L.can, this.prCan, [[MG.geo.cities.Sydney, 'SYDNEY', 14, 7, 'left'], [MG.geo.cities.Melbourne, 'MELBOURNE', 8, 34, 'center']], MG.geo.cities.Canberra));
    // "centuries later": the gaps measured on the line
    if (kT > 0) { const gap = (a, b, str, k) => { const y = ly - 40; ctx.save(); ctx.globalAlpha = k; ctx.strokeStyle = P.rojo; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(a + 20, y); ctx.lineTo(lerp(a + 20, b - 20, k), y); ctx.stroke(); ctx.restore(); MG.text.draw(ctx, str, (a + b) / 2, y - 14, { font: F.mono, weight: 700, size: 22, tracking: 0.12, color: P.rojo, align: 'center', alpha: k }); };
      gap(L.mad[0], L.was[0], '+229 YEARS', kT); gap(L.was[0], L.can[0], '+123', pg(t, tCent + 0.25, tCent + 0.85)); }
  },
  post: { grade: 'warm', vignette: 0.28 } });

// ---- material typography: carved stone glyphs (cached) ----
S2.glyphMask = (ch, size, font = F.cond, weight = 900, italic = false) => MG.cache(`s02:gm:${ch}:${size}:${font}:${weight}:${italic}`, Math.ceil(size * 1.1), Math.ceil(size * 1.25), (x, w, h) => { MG.text.set(x, { font, weight, size, italic }); x.fillStyle = '#fff'; x.fillText(ch, size * 0.05, size * 1.0); });
S2.glyphW = (ch, size, font = F.cond, weight = 900, italic = false) => { const c = MG.canvas(10, 10).getContext('2d'); MG.text.set(c, { font, weight, size, italic }); return c.measureText(ch).width; };
S2.tint = (src, color) => { const c = MG.canvas(src.width, src.height); const x = c.getContext('2d'); x.drawImage(src, 0, 0); x.globalCompositeOperation = 'source-in'; x.fillStyle = color; x.fillRect(0, 0, c.width, c.height); return c; };
S2.stoneGlyph = (ch, size) => MG.cache(`s02:stone:${ch}:${size}`, Math.ceil(size * 1.1) + 60, Math.ceil(size * 1.25) + 60, (x, w, h) => {
  const m = S2.glyphMask(ch, size); const dark = S2.tint(m, '#4a3a3e'), mid = S2.tint(m, '#6c5a54'), lite = S2.tint(m, '#f4e6cc');
  const D = Math.round(size * 0.07); for (let k = D; k >= 1; k--) x.drawImage(k > D * 0.5 ? dark : mid, k * 0.9, k * 0.9); // extrusion away from the light
  // face: rock material
  const f = MG.canvas(w, h); const fx = f.getContext('2d'); fx.drawImage(m, 0, 0); fx.globalCompositeOperation = 'source-in';
  const g = fx.createLinearGradient(0, 0, w * 0.7, h); g.addColorStop(0, '#C9B79C'); g.addColorStop(0.55, '#A8927A'); g.addColorStop(1, '#7E6A5E'); fx.fillStyle = g; fx.fillRect(0, 0, w, h);
  fx.globalCompositeOperation = 'source-atop'; fx.globalAlpha = 0.55; fx.fillStyle = fx.createPattern(MG.tex.blotch(512, 6, 31, '#3a2a22'), 'repeat'); fx.fillRect(0, 0, w, h); fx.globalAlpha = 0.6; fx.fillStyle = fx.createPattern(MG.tex.grain(256, 1, 8), 'repeat'); fx.globalCompositeOperation = 'source-atop'; fx.fillRect(0, 0, w, h);
  fx.globalAlpha = 1; const R = MG.rng(ch.charCodeAt(0) * 7); fx.strokeStyle = 'rgba(40,26,24,0.55)'; fx.lineCap = 'round'; for (let i = 0; i < 9; i++) { let px = R() * w, py = R() * h; fx.lineWidth = 1 + R() * 2.2; fx.beginPath(); fx.moveTo(px, py); for (let k = 0; k < 6; k++) { px += (R() - 0.5) * size * 0.18; py += R() * size * 0.12; fx.lineTo(px, py); } fx.stroke(); }
  // strata bands across the glyph (sedimentary rock)
  fx.globalAlpha = 0.14; for (let yy = 0; yy < h; yy += size * 0.11) { fx.fillStyle = (yy / (size * 0.11)) % 2 ? '#fff4dc' : '#3a2620'; fx.fillRect(0, yy, w, size * 0.05); }
  x.drawImage(f, 0, 0);
  // bevel: light rim up-left, dark rim down-right
  const rim = MG.canvas(w, h); const rx = rim.getContext('2d'); rx.drawImage(lite, 0, 0); rx.globalCompositeOperation = 'destination-out'; rx.drawImage(m, 3, 3); x.globalAlpha = 0.8; x.drawImage(rim, 0, 0);
  const rim2 = MG.canvas(w, h); const r2 = rim2.getContext('2d'); r2.drawImage(dark, 0, 0); r2.globalCompositeOperation = 'destination-out'; r2.drawImage(m, -3, -3); x.globalAlpha = 0.7; x.drawImage(rim2, 0, 0); x.globalAlpha = 1;
});

// B1–B2 · 200.71–207.03 · "the first thing to understand… more ROCK than water"
SC.push({ id: 's02_rock', start: 200.71, end: 207.03, transIn: { type: 'zoom', dur: 0.55, x: S2.LENS.mad[0], y: S2.LENS.mad[1], amount: 3.2, from: 0.7 },
  init() {
    this.sky = MG.cache('s02:rocksky', W, H, (x, w, h) => {
      MG.fx.vgrad(x, [[0, '#E6D6BB'], [0.62, '#F4DFB4'], [1, '#EBCB92']]); MG.tex.over(x, 'grain', { alpha: 0.05, blend: 'overlay' });
      x.fillStyle = '#CDAE8E'; x.beginPath(); x.moveTo(0, 700); const mes = [[0, 690], [180, 690], [230, 640], [520, 636], [570, 690], [900, 688], [960, 612], [1300, 606], [1350, 686], [1640, 684], [1690, 650], [1920, 646], [1920, 700]]; mes.forEach((p) => x.lineTo(p[0], p[1])); x.closePath(); x.fill();
      x.fillStyle = 'rgba(255,244,220,0.35)'; x.fillRect(0, 600, w, 100); });
    const cols = ['#C98E5C', '#B7754C', '#D3A673', '#9E5E44', '#C08A62', '#7D4A3E', '#A96E52']; let yb = 740; this.strata = [];
    for (let i = 0; i < cols.length; i++) { const th = 34 + i * 9; const top = yb; this.strata.push({ y: top, img: MG.cache('s02:stratum' + i, W, H - top + 40, (x, w, h) => { x.fillStyle = cols[i]; x.beginPath(); x.moveTo(0, h); for (let xx = 0; xx <= w; xx += 16) x.lineTo(xx, 20 + MG.fbm(xx * 0.004, i * 3.1, 3) * 10); x.lineTo(w, h); x.closePath(); x.fill(); x.strokeStyle = 'rgba(50,25,20,0.3)'; x.lineWidth = 2; x.stroke(); x.save(); x.clip(); MG.tex.over(x, 'blotch', { alpha: 0.28, color: '#3a1a10', scale: 4, seed: i + 2 }); MG.tex.over(x, 'fibers', { alpha: 0.6 }); const R = MG.rng(5 + i); for (let k = 0; k < 16; k++) { const px = R() * w, py = 30 + R() * th, r = 3 + R() * 8; MG.fx.volume(x, MG.path.blob(px, py, r, { seed: k, irr: 0.3 }), [px - r, py - r, r * 2, r * 2], { color: MG.col.mix('#8a6a58', '#d8c0a0', R()), shade: 0.5, cel: true }); } x.restore(); }) }); yb += th; }
    this.letters = 'ROCK'.split('').map((ch) => ({ ch, img: S2.stoneGlyph(ch, 420), w: S2.glyphW(ch, 420) }));
    this.masks = this.letters.map((l) => S2.glyphMask(l.ch, 420));
  },
  draw(ctx, t) {
    const tFirst = TW('first', 201.35), tCent = TW('centuries', 203.83), tMore = TW('more', 205.03), tRock = TW('rock', 205.43), tThan = TW('than', 205.91), tWater = TW('water', 206.15);
    const hh = MG.cam.handheld(t, 2.5, 7); const sh = MG.cam.shake(t, tRock + 0.05, 10, 7); const z = 1 + 0.035 * lin(t, 200.71, 207.5);
    ctx.save(); ctx.translate(960 + hh.dx + sh.dx, 600 + hh.dy + sh.dy); ctx.scale(z, z); ctx.translate(-960, -600);
    ctx.fillStyle = '#E6D6BB'; ctx.fillRect(-100, -200, W + 200, 300);
    ctx.translate(0, lerp(70, 0, pg(t, 200.71, 204.2, 'inOutSine'))); // slow crane down onto the strata
    ctx.drawImage(this.sky, 0, 0); MG.kit.sun(ctx, 300, 250, 92, t, { rays: 0.35, corona: 0.7 });
    this.strata.forEach((st, i) => { const k = pg(t, 200.95 + i * 0.28, 201.75 + i * 0.28, 'out'); ctx.drawImage(st.img, 0, st.y - 20 + (1 - k) * (260 + i * 30)); });
    // lead-in typography (serif italic), then the statement
    const kLead = 1 - pg(t, 203.3, 203.7);
    if (kLead > 0) MG.text.spoken(ctx, MG.phrase('the first thing to understand', 201.1).words, 960, 330, t, { font: F.serif, italic: true, size: 84, color: P.ink2, align: 'center', style: 'blur', alpha: kLead });
    if (t > tCent - 0.2) S2.kicker(ctx, 'for centuries', 960, 300, t, tCent - 0.15, { align: 'center', size: 26, color: P.rojoDeep, alpha: 1 - pg(t, 206.7, 207.1) });
    // "more"
    const base = 740; const WS = 118; const wMore = MG.text.width(ctx, 'more', { font: F.serif, italic: true, size: 110 }), wThan = MG.text.width(ctx, 'than ', { font: F.serif, italic: true, size: 96 }), wWat = MG.text.width(ctx, 'water', { font: F.display, weight: 700, italic: true, size: WS });
    const wRock = this.letters.reduce((a, l) => a + l.w, 0); const x0 = 960 - (wMore + 30 + wRock + 40 + wThan + 10 + wWat) / 2; let x = x0 + wMore + 30;
    MG.text.reveal(ctx, 'more', x - 30, base - 8, t, tMore - 0.08, { font: F.serif, italic: true, size: 110, color: P.ink, align: 'right', style: 'blur' });
    // ROCK — stone glyphs drop onto the strata
    for (let i = 0; i < this.letters.length; i++) { const L = this.letters[i]; const ti = tRock - 0.2 + i * 0.07; const kd = pg(t, ti, ti + 0.26, 'inQuad'); if (t < ti) { x += L.w; continue; }
      const sq = MG.jiggle(t, ti + 0.26, 0.09, 4.5, 8); const yy = lerp(-620, 0, kd);
      // long cast shadow on the ground (light from the upper-left)
      if (kd > 0.5) { ctx.save(); ctx.globalAlpha = 0.32 * clamp((kd - 0.5) * 2); ctx.transform(1, 0, -0.95, -0.16, x, base); ctx.drawImage(S2.tint(this.masks[i], '#3a2440'), -21, -420); ctx.restore(); }
      ctx.save(); ctx.translate(x + L.w / 2, base + yy); ctx.scale(1 + sq * 0.6, 1 - sq); ctx.drawImage(L.img, -L.w / 2 - 21, -420 - 21 + 21); ctx.restore();
      if (t > ti + 0.26) MG.fx.particles(ctx, { n: 14, seed: 40 + i, t: t - ti - 0.26, area: [x + 10, base - 8, L.w - 20, 10], vel: [0, -50], velJitter: 2.5, gravity: 60, life: 1.4, size: [6, 18], colors: ['#d8c09c', '#c4a47c'], alpha: 0.5 * Math.exp(-(t - ti) * 1.3), shape: 'puff', fadeIn: 0.01 });
      x += L.w; }
    // "than" + "water": small, liquid, evaporating in the heat
    const wx = x + 40; MG.text.reveal(ctx, 'than', wx, base - 8, t, tThan - 0.08, { font: F.serif, italic: true, size: 96, color: P.ink, style: 'blur' });
    const wW = wThan; const kw = pg(t, tWater - 0.1, tWater + 0.35); const evap = pg(t, 206.55, 207.2, 'inSine');
    if (kw > 0) { const str = 'water'; MG.text.set(ctx, { font: F.display, weight: 700, italic: true, size: WS }); let cx = wx + wW + 10;
      for (let i = 0; i < str.length; i++) { const ch = str[i]; const cw = ctx.measureText(ch).width; const ki = clamp(kw * 1.6 - i * 0.12); const wob = Math.sin(t * 5 + i * 1.3) * 3; const yy = base - 10 + wob + (1 - ki) * 30 - evap * 20;
        ctx.save(); ctx.globalAlpha = ki * (1 - evap * 0.85); ctx.translate(cx, yy); ctx.scale(1, 1 - evap * 0.5); const g = ctx.createLinearGradient(0, -80, 0, 10); g.addColorStop(0, '#9FD0EE'); g.addColorStop(0.6, '#3A7FB8'); g.addColorStop(1, '#245C93'); MG.text.set(ctx, { font: F.display, weight: 700, italic: true, size: WS }); ctx.fillStyle = g; ctx.fillText(ch, 0, 0); ctx.strokeStyle = 'rgba(255,255,255,0.65)'; ctx.lineWidth = 2; ctx.strokeText(ch, -2, -2); ctx.restore();
        if (ki > 0.8 && evap < 0.9) { const dk = MG.fract(t * 0.9 + i * 0.37); ctx.fillStyle = `rgba(58,127,184,${0.7 * (1 - dk) * (1 - evap)})`; ctx.beginPath(); ctx.ellipse(cx + cw * 0.5, base + 4 + dk * 34, 3.5, 5.5, 0, 0, MG.TAU); ctx.fill(); }
        cx += cw; }
      if (evap > 0) MG.fx.particles(ctx, { n: 26, seed: 9, t, area: [wx + wW, base - 90, cx - wx - wW, 60], vel: [8, -40], life: 2, size: [6, 16], color: '#eaf4fb', alpha: 0.45 * evap, shape: 'puff' }); }
    ctx.restore();
  },
  post: { grade: 'warm', vignette: 0.3 } });

// river styling helper (drawn in map-world coords of the iberia view)
S2.river = (ctx, pts, o = {}) => { const w = o.w ?? 7, k = o.k ?? 1; if (k <= 0) return; const sub = MG.path.trim(pts, 0, k); if (sub.length < 2) return; ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; if (o.dash) ctx.setLineDash(o.dash);
  ctx.strokeStyle = o.dark || '#245C93'; ctx.lineWidth = w + 2.5; ctx.beginPath(); sub.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke();
  ctx.strokeStyle = o.color || '#4F95D0'; ctx.lineWidth = w; ctx.stroke(); ctx.setLineDash([w * 1.6, w * 4]); ctx.lineDashOffset = -(o.t || 0) * 40; ctx.strokeStyle = 'rgba(220,240,255,0.7)'; ctx.lineWidth = Math.max(1, w * 0.3); ctx.stroke(); ctx.restore(); };

// B3–B4 · 207.03–212.39 · the Tagus, the Ebro, the Guadalquivir… run low in summer
SC.push({ id: 's02_rivers', start: 207.03, end: 212.39, transIn: { type: 'push', dur: 0.5, dir: 'up' },
  init() { this.mm = S2.mapModern(1.25); this.pr = MG.kit.view('iberia'); this.rv = {}; for (const k of ['Tagus', 'Ebro', 'Guadalquivir', 'Douro', 'Guadiana']) this.rv[k] = MG.path.spline(MG.geo.rivers[k].map((c) => this.pr(c)), 8); },
  draw(ctx, t) {
    const tTag = TW('Tagus', 208.07), tEb = TW('Ebro', 208.95), tGq = TW('Guadalquivir', 209.59), tLow = TW('low', 211.03), tSum = TW('summer', 211.51);
    const kz = pg(t, 207.03, 209.9, 'inOutCubic'); const z = lerp(1.22, 1.0, kz); const cx = lerp(880, 960, kz), cy = lerp(560, 540, kz);
    S2.drawCam(ctx, this.mm, 1.25, cx, cy, z);
    const dry = pg(t, tLow - 0.15, tSum + 0.6, 'inOutSine');
    ctx.save(); ctx.translate(W / 2, H / 2); ctx.scale(z, z); ctx.translate(-cx, -cy);
    // heat: bleach + cracked-earth hatching over Spain
    if (dry > 0) { ctx.save(); MG.geo.clip(ctx, this.pr, MG.geo.country('Spain', '10')); ctx.globalAlpha = 0.28 * dry; ctx.fillStyle = '#FFE9B8'; ctx.fillRect(0, 0, W, H); ctx.globalAlpha = 1; MG.tex.over(ctx, 'lines', { alpha: 0.12 * dry, spacing: 7, color: '#6a3a20', angle: 35 }); ctx.restore(); }
    const wOf = (k0) => lerp(8, 2.2, dry);
    const dash = dry > 0.4 ? [lerp(40, 10, dry), lerp(2, 14, dry)] : null;
    for (const k of ['Douro', 'Guadiana']) S2.river(ctx, this.rv[k], { w: 3, k: pg(t, 208.2, 209.4), t, color: '#7FB1DA', dark: '#4F7FA8', dash });
    const kT = pg(t, tTag - 0.35, tTag + 0.8, 'inOutSine'), kE = pg(t, tEb - 0.35, tEb + 0.8, 'inOutSine'), kG = pg(t, tGq - 0.35, tGq + 0.9, 'inOutSine');
    S2.river(ctx, this.rv.Tagus, { w: wOf(), k: kT, t, dash, color: MG.col.mix('#4F95D0', '#A9C6DE', dry) });
    S2.river(ctx, this.rv.Ebro, { w: wOf(), k: kE, t, dash, color: MG.col.mix('#4F95D0', '#A9C6DE', dry) });
    S2.river(ctx, this.rv.Guadalquivir, { w: wOf(), k: kG, t, dash, color: MG.col.mix('#4F95D0', '#A9C6DE', dry) });
    const lab = (str, pts, off, k, dy) => { if (k <= 0) return; MG.text.onPath(ctx, str, pts, { font: F.display, italic: true, weight: 700, size: 34 / z, color: '#173E66', halo: 'rgba(250,244,232,0.9)', haloW: 6 / z, offset: off, reveal: k, dy, alpha: 1 - dry * 0.35 }); };
    lab('Tagus', this.rv.Tagus, 0.42, pg(t, tTag, tTag + 0.4), -14); lab('Ebro', this.rv.Ebro, 0.5, pg(t, tEb, tEb + 0.4), -14); lab('Guadalquivir', this.rv.Guadalquivir, 0.45, pg(t, tGq, tGq + 0.5), -14);
    ctx.restore();
    // the sun slides in: summer
    const ks = pg(t, tLow - 0.4, tLow + 0.5); if (ks > 0) { MG.kit.sun(ctx, lerp(-150, 230, ks), lerp(-120, 200, ks), 120, t, { rays: 0.6, corona: 0.9 }); S2.kicker(ctx, 'summer', 175, 395, t, tSum - 0.1, { size: 28, color: P.rojoDeep }); }
  },
  post: (t) => ({ grade: 'warm', vignette: 0.3, temp: 0.06 * pg(t, 210.9, 212) }) });

// ---- landscape helpers: olive tree, vine, sheep sprites ----
S2.oliveTree = (seed) => MG.cache('s02:olive:' + seed, 260, 230, (x, w, h) => {
  const R = MG.rng(seed); const L = [-0.6, -0.8];
  // short, thick, twisted trunk splitting in two
  MG.fx.ink(x, [[118, 228], [112, 204], [122, 182], [108, 156], [92, 128]], { width: 26, color: '#6a5a4a', taper: [0, 0.55] }); MG.fx.ink(x, [[134, 228], [146, 200], [138, 178], [156, 146], [176, 122]], { width: 22, color: '#5a4a3c', taper: [0, 0.6] });
  MG.fx.ink(x, [[112, 222], [116, 196], [110, 170]], { width: 5, color: 'rgba(235,220,195,0.4)' }); MG.fx.ink(x, [[140, 224], [148, 200]], { width: 3, color: 'rgba(30,20,16,0.45)' });
  // airy, silvery canopy: many small clumps with sky gaps between them
  const cl = []; for (let i = 0; i < 16; i++) { const a = R() * MG.TAU, d = Math.sqrt(R()); cl.push([130 + Math.cos(a) * d * 96, 82 + Math.sin(a) * d * 52, 16 + R() * 14]); } cl.sort((a, b) => a[1] - b[1]);
  for (const [cx, cy, r] of cl) { const pth = MG.path.blob(cx, cy, r, { seed: Math.floor(R() * 99), irr: 0.38, n: 14 }); MG.fx.volume(x, pth, [cx - r, cy - r, r * 2, r * 2], { color: '#97A27A', shadeColor: '#5D6A4A', shade: 0.62, hi: 0.55, hiColor: '#DDE2BE', cel: true, light: L, outline: 'rgba(50,56,36,0.45)', outlineW: 1.3 }); }
  x.fillStyle = 'rgba(230,236,210,0.55)'; for (let i = 0; i < 90; i++) { const a = R() * MG.TAU, d = Math.sqrt(R()); const px = 130 + Math.cos(a) * d * 100, py = 82 + Math.sin(a) * d * 56; x.beginPath(); x.ellipse(px, py, 4, 1.3, R() * 3, 0, MG.TAU); x.fill(); }
});
S2.vine = (seed) => MG.cache('s02:vine:' + seed, 170, 110, (x, w, h) => { const R = MG.rng(seed); MG.fx.ink(x, [[85, 108], [82, 80], [90, 60]], { width: 9, color: '#5a4030', taper: [0, 0.4] }); for (let i = 0; i < 8; i++) { const cx = 25 + R() * 120, cy = 25 + R() * 45, r = 16 + R() * 12; MG.fx.volume(x, MG.path.blob(cx, cy, r, { seed: i + seed, irr: 0.32 }), [cx - r, cy - r, r * 2, r * 2], { color: '#6E8A3A', shadeColor: '#3E5424', shade: 0.6, hi: 0.4, hiColor: '#B8CC6A', cel: true, outline: 'rgba(30,40,20,0.5)', outlineW: 1.4 }); } for (let k = 0; k < 3; k++) { const bx = 40 + R() * 90, by = 62 + R() * 18; for (let j = 0; j < 7; j++) { const gx = bx + (j % 3 - 1) * 6, gy = by + Math.floor(j / 3) * 6; MG.fx.volume(x, MG.path.circle(gx, gy, 4.2), [gx - 4, gy - 4, 8, 8], { color: '#5B2E57', shade: 0.4, hi: 0.6, hiColor: '#c08ab8', cel: true }); } } });
/** sheep (side view, facing left or right). legs walk on twos */
S2.sheep = (ctx, x, y, s, t, o = {}) => { const tb = MG.kit.twos(t + (o.ph || 0)); const dir = o.dir || 1; ctx.save(); ctx.translate(x, y); ctx.scale(s * dir, s); MG.fx.contact(ctx, 6, 2, 50, 9, 0.3);
  const walk = o.walk ?? 1; ctx.strokeStyle = '#2a2224'; ctx.lineWidth = 5; ctx.lineCap = 'round'; for (const [lx, ph] of [[-26, 0], [-12, 2], [14, 1], [26, 3]]) { const a = Math.sin(tb * 8 + ph) * 0.3 * walk; ctx.beginPath(); ctx.moveTo(lx, -18); ctx.lineTo(lx + Math.sin(a) * 18, 0); ctx.stroke(); }
  const body = MG.path.blob(0, -34, 34, { seed: o.seed || 3, irr: 0.12, n: 22, sy: 0.62, t: tb * 0.2 }); MG.fx.volume(ctx, body, [-34, -56, 68, 44], { color: '#EFE6D6', shadeColor: '#B5A6A0', shade: 0.55, hi: 0.4, cel: true, light: [-0.6 * dir, -0.8], outline: '#3a3036', outlineW: 2.2 });
  ctx.fillStyle = 'rgba(160,140,140,0.35)'; for (let i = 0; i < 10; i++) { ctx.beginPath(); ctx.arc(-24 + (i % 5) * 12, -44 + Math.floor(i / 5) * 14, 4, 0, MG.TAU); ctx.fill(); }
  const graze = o.graze ? (0.5 + 0.5 * Math.sin(tb * 2)) : 0; ctx.save(); ctx.translate(34, -40 + graze * 18); ctx.rotate(0.3 + graze * 0.6);
  const head = MG.path.smooth([[-6, -10], [10, -12], [24, 0], [20, 10], [2, 10], [-6, 4]], true); MG.fx.volume(ctx, head, [-6, -12, 30, 22], { color: '#2e2628', shade: 0.4, hi: 0.3, hiColor: '#7a6a6e', cel: true, outline: '#151012', outlineW: 1.6 });
  ctx.fillStyle = '#2e2628'; ctx.beginPath(); ctx.ellipse(0, -10, 9, 4, -0.6, 0, MG.TAU); ctx.fill(); ctx.fillStyle = '#f4efe4'; ctx.beginPath(); ctx.arc(9, -3, 2.4, 0, MG.TAU); ctx.fill(); ctx.fillStyle = '#111'; ctx.beginPath(); ctx.arc(9.6, -3, 1.2, 0, MG.TAU); ctx.fill(); ctx.restore(); ctx.restore(); };

// B5 · 212.39–217.51 · semidesert → olives, grapes, grazing sheep (one evolving 2.5D landscape)
S2.tiltTrans = (ctx, A, B, p) => { ctx.drawImage(B, 0, 0); const q = S2.lerpQ([[0, 0], [W, 0], [W, H], [0, H]], [[-900, 470], [2820, 470], [4200, 1500], [-2280, 1500]], E.inOutCubic(p)); ctx.save(); ctx.globalAlpha = 1 - MG.smoothstep(0.35, 1, p); S2.quad(ctx, A, q, 10); ctx.restore(); };
SC.push({ id: 's02_land', start: 212.39, end: 217.51, transIn: { type: S2.tiltTrans, dur: 0.7 },
  init() {
    this.sky = MG.cache('s02:landsky', W, H, (x, w, h) => { MG.fx.vgrad(x, [[0, '#E8DCC6'], [0.42, '#F6E0B2'], [0.44, '#DDB98A'], [1, '#CC9A66']]); MG.tex.over(x, 'grain', { alpha: 0.05, blend: 'overlay' });
      x.fillStyle = '#C9A788'; x.beginPath(); x.moveTo(0, 470); [[0, 455], [240, 452], [270, 428], [600, 424], [640, 452], [1100, 450], [1150, 418], [1500, 414], [1540, 446], [1920, 444], [1920, 470]].forEach((p) => x.lineTo(p[0], p[1])); x.closePath(); x.fill();
      x.fillStyle = 'rgba(255,240,210,0.4)'; x.fillRect(0, 400, w, 75);
      // dry ground texture: furrows converging + scrub
      x.save(); x.beginPath(); x.rect(0, 470, w, h); x.clip(); for (let i = -40; i <= 40; i++) { x.strokeStyle = `rgba(120,80,40,${0.06 + (i % 3 === 0 ? 0.05 : 0)})`; x.lineWidth = 2; x.beginPath(); x.moveTo(960 + i * 20, 470); x.lineTo(960 + i * 260, h); x.stroke(); } x.restore();
      x.save(); x.beginPath(); x.rect(0, 470, w, h); x.clip(); MG.tex.over(x, 'blotch', { alpha: 0.14, color: '#7a3a18', scale: 7 }); MG.tex.over(x, 'grain', { alpha: 0.18 }); x.restore();
      const R = MG.rng(17); for (let i = 0; i < 160; i++) { const zz = 400 + R() * 6000; const X = (R() - 0.5) * 9000; const sx = 960 + X * 1000 / zz, sy = 470 + 160 * 1000 / zz; if (sx < -20 || sx > w + 20) continue; const r = 2600 / zz * (1 + R()); MG.fx.volume(x, MG.path.blob(sx, sy - r * 0.4, r, { seed: i, irr: 0.4, sy: 0.6 }), [sx - r, sy - r, r * 2, r * 2], { color: '#8A8552', shade: 0.5, cel: true }); }
    });
    this.oT = [S2.oliveTree(3), S2.oliveTree(7), S2.oliveTree(11)]; this.vT = [S2.vine(2), S2.vine(5)];
    const R = MG.rng(23); this.olives = []; for (let r = 0; r < 8; r++) for (let c = 0; c < 9; c++) this.olives.push({ X: -3300 + c * 470, Z: 1500 + r * 620, s: this.oT[(r * 9 + c) % 3], j: R() });
    this.vines = []; for (let r = 0; r < 4; r++) for (let c = 0; c < 12; c++) this.vines.push({ X: 520 + c * 190, Z: 760 + r * 300, s: this.vT[(r + c) % 2], j: R() });
    this.all = [...this.olives.map((o) => ({ ...o, k: 'o' })), ...this.vines.map((o) => ({ ...o, k: 'v' }))].sort((a, b) => b.Z - a.Z);
  },
  draw(ctx, t) {
    const tSemi = TW('semidesert', 213.43), tOl = TW('olives', 214.87), tGr = TW('grapes', 215.59), tSh = TW('sheep', 216.79), tGraz = TW('grazing', 216.31);
    const camZ = lerp(0, 380, E.inOutSine(lin(t, 212.39, 217.9))); const camX = lerp(-120, 120, E.inOutSine(lin(t, 212.39, 217.9))); const hh = MG.cam.handheld(t, 2, 11);
    ctx.save(); ctx.translate(hh.dx, hh.dy); ctx.drawImage(this.sky, 0, 0);
    MG.kit.sun(ctx, 390, 250, 82, t, { rays: 0.3, corona: 0.8 });
    S2.house(1260, ctx, 462, 30, 16, 16, { wall: '#EFE3CC', roof: '#B0603E' }); S2.house(1288, ctx, 460, 18, 12, 10, { wall: '#E8DCC2', roof: '#A85838' });
    MG.fx.smoke(ctx, 1500 - (t - 212.4) * 30, 520, t, { n: 9, seed: 21, spread: 50, rise: 60, r: 34, alpha: 0.26 * (1 - pg(t, 214.6, 215.4)), color: '#E9CFA0', wind: 6 });
    MG.fx.particles(ctx, { n: 3, seed: 44, t, area: [500, 260, 900, 120], vel: [26, 3], life: 9, size: [2, 3], alpha: 0.75, shape: (c, x, y, s2, age) => { const f = Math.sin(age * 9) * 4; c.strokeStyle = '#3a3036'; c.lineWidth = 2; c.beginPath(); c.moveTo(x - 8, y - f); c.quadraticCurveTo(x - 3, y - 2, x, y); c.quadraticCurveTo(x + 3, y - 2, x + 8, y - f); c.stroke(); } });
    const proj = (X, Z) => { const zz = Z - camZ; return [960 + (X - camX) * 1000 / zz, 470 + 160 * 1000 / zz, 1000 / zz]; };
    // grow-ins
    for (const it of this.all) { const [sx, sy, sc] = proj(it.X, it.Z); if (sx < -300 || sx > W + 300) continue;
      const t0 = it.k === 'o' ? tOl - 0.25 + it.j * 0.5 + (it.Z - 1500) / 9000 : tGr - 0.2 + it.j * 0.4; const k = E.outBack(clamp((t - t0) / 0.45)); if (k <= 0) continue;
      const img = it.s; const s = sc * (it.k === 'o' ? 1.35 : 1.05) * k; ctx.save(); ctx.globalAlpha *= clamp(k * 2); MG.fx.contact(ctx, sx + 40 * s, sy, 90 * s, 16 * s, 0.32); ctx.drawImage(img, sx - img.width * s / 2, sy - img.height * s + 4 * s, img.width * s, img.height * s); ctx.restore(); }
    // vine wires
    if (t > tGr) { const kk = pg(t, tGr, tGr + 0.6); ctx.save(); ctx.strokeStyle = `rgba(60,50,40,${0.4 * kk})`; ctx.lineWidth = 1.5; for (let r = 0; r < 4; r++) { const a = proj(520, 760 + r * 300), b = proj(520 + 11 * 190, 760 + r * 300); ctx.beginPath(); ctx.moveTo(a[0], a[1] - 40 * a[2]); ctx.lineTo(b[0], b[1] - 40 * b[2]); ctx.stroke(); } ctx.restore(); }
    // a small flock crossing the mid-ground
    if (t > tGraz - 0.4) { const kk = pg(t, tGraz - 0.4, tGraz + 0.2); for (let i = 0; i < 7; i++) { const X = -900 + i * 150 + (t - tGraz) * 40 + (i % 3) * 30, Z = 1250 + (i % 3) * 110; const [sx, sy, sc] = proj(X, Z); ctx.save(); ctx.globalAlpha *= kk; S2.sheep(ctx, sx, sy, sc * 1.25, t, { seed: i + 2, ph: i * 0.17, graze: i % 3 === 1, dir: 1 }); ctx.restore(); } }
    // foreground: dry grass tufts out of focus (depth)
    ctx.drawImage(this.fg || (this.fg = MG.blurred(MG.cache('s02:landfg', W, 300, (x, w, h) => { const R = MG.rng(4); for (let i = 0; i < 70; i++) { const bx = (i < 35 ? R() * 520 : 1400 + R() * 520), by = 150 + R() * 160; for (let k = 0; k < 7; k++) { const a = -Math.PI / 2 + (R() - 0.5) * 1.2; MG.fx.ink(x, [[bx, by], [bx + Math.cos(a) * 30, by + Math.sin(a) * 60], [bx + Math.cos(a) * 46, by + Math.sin(a) * 110]], { width: 6, color: MG.col.mix('#8a6a3a', '#c8a868', R()), taper: [0, 1] }); } } }), 6)), -15 + (camX * 0.4), H - 300 - 15);
    ctx.restore();
    // sketch-note annotations synced to the words
    const note = (str, x, y, t0, lx, ly) => { const k = pg(t, t0 - 0.05, t0 + 0.35) * (1 - pg(t, 217.2, 217.5)); if (k <= 0) return; ctx.save(); ctx.globalAlpha = k; ctx.strokeStyle = P.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(x, y + 10); ctx.quadraticCurveTo((x + lx) / 2, y + 40, lx, ly); ctx.stroke(); MG.fx.arrowHead(ctx, [[(x + lx) / 2, (y + ly) / 2 + 20], [lx, ly]], 14, P.ink); ctx.restore(); MG.text.reveal(ctx, str, x, y, t, t0, { font: F.brush, size: 62, color: P.ink, style: 'wipe', by: 'line', dur: 0.35, align: 'center' }); };
    S2.kicker(ctx, 'semidesert', 960, 140, t, tSemi - 0.1, { align: 'center', size: 28, color: P.rojoDeep, alpha: 1 - pg(t, 214.6, 215) });
    note('olives', 520, 330, tOl, 520, 470); note('grapes', 1720, 440, tGr, 1690, 560); note('sheep', 260, 450, tSh - 0.3, 330, 560);
  },
  post: { grade: 'heat', vignette: 0.3, temp: 0.04 } });

// B6–B7 · 217.51–224.83 · the sun becomes an olive → #1 olive oil → a drop fills the world's supply to almost half
S2.dropPath = (cx, cy, r) => { const p = new Path2D(); p.moveTo(cx, cy - r * 1.75); p.bezierCurveTo(cx + r * 0.25, cy - r * 1.2, cx + r, cy - r * 0.55, cx + r, cy + r * 0.05); p.bezierCurveTo(cx + r, cy + r * 0.62, cx + r * 0.55, cy + r, cx, cy + r); p.bezierCurveTo(cx - r * 0.55, cy + r, cx - r, cy + r * 0.62, cx - r, cy + r * 0.05); p.bezierCurveTo(cx - r, cy - r * 0.55, cx - r * 0.25, cy - r * 1.2, cx, cy - r * 1.75); p.closePath(); return p; };
SC.push({ id: 's02_olive', start: 217.51, end: 224.83, transIn: { type: 'fade', dur: 0.35 },
  init() { // fill height of the drop vessel that holds 47% of its area (≈ "almost half")
    const c = MG.canvas(200, 300).getContext('2d'); const pth = S2.dropPath(100, 180, 100); const im = (() => { c.fillStyle = '#000'; c.fill(pth); return c.getImageData(0, 0, 200, 300).data; })();
    const rows = []; let tot = 0; for (let y = 0; y < 300; y++) { let n = 0; for (let x = 0; x < 200; x++) if (im[(y * 200 + x) * 4 + 3] > 127) n++; rows.push(n); tot += n; }
    const lvl = (f) => { let acc = 0; for (let y = 299; y >= 0; y--) { acc += rows[y]; if (acc >= tot * f) return (y - 180) / 100; } return -1.75; }; this.l47 = lvl(0.47); this.l50 = lvl(0.5);
    this.leaf = (x, ang, len, seed) => { const pts = [[0, 0], [len * 0.3, -len * 0.09], [len * 0.7, -len * 0.08], [len, 0], [len * 0.7, len * 0.07], [len * 0.3, len * 0.08]]; const P2 = MG.path.smooth(pts, true); x.save(); x.rotate(ang); MG.fx.volume(x, P2, [0, -len * 0.1, len, len * 0.2], { color: seed % 2 ? '#6F7A4A' : '#8C9868', shade: 0.5, hi: 0.5, hiColor: '#D6DCB4', cel: true, outline: '#2e3420', outlineW: 1.6 }); x.strokeStyle = 'rgba(230,235,200,0.6)'; x.lineWidth = 1.2; x.beginPath(); x.moveTo(len * 0.05, 0); x.lineTo(len * 0.92, 0); x.stroke(); x.restore(); };
  },
  draw(ctx, t) {
    const tW = TW('world’s', 219.51), tOil = TW('olive', 220.55), tProd = TW('producer', 221.03), tHalf = TW('half', 223.11), tAlm = TW('almost', 222.63), tGlob = TW('global', 223.67), tResp = TW('responsible', 221.83);
    const kPan = pg(t, 221.7, 222.9, 'inOutCubic'); const camY = lerp(0, 470, kPan);
    MG.kit.paper(ctx, '#F1E4C8', { light: 0.35 });
    ctx.save(); ctx.translate(0, -camY);
    // the olive (born from the landscape's sun)
    const km = pg(t, 217.51, 218.5, 'inOutCubic'); const ox = lerp(390, 760, km), oy = lerp(250, 520, km), orr = lerp(82, 190, km);
    const sq = pg(t, tResp - 0.1, tResp + 0.35) * (1 - pg(t, tResp + 0.45, tResp + 0.9)); // squeeze
    if (km < 1) MG.kit.sun(ctx, ox, oy, orr, t, { rays: 0.3 * (1 - km), corona: 0.6 * (1 - km), alpha: 1 - km });
    if (km > 0) { ctx.save(); ctx.globalAlpha = MG.smoothstep(0.1, 0.7, km);
      // stem + leaves sprouting
      const kl = pg(t, 218.0, 219.0); ctx.save(); ctx.translate(ox - orr * 0.2, oy - orr * 0.95); MG.fx.ink(ctx, [[0, 0], [-30, -60 * kl], [-70, -110 * kl]], { width: 8, color: '#5a4a32', taper: [0.2, 0.5] }); ctx.translate(-30, -60 * kl); for (let i = 0; i < 4; i++) this.leaf(ctx, -2.4 + i * 0.75 + Math.sin(t * 1.3 + i) * 0.04, 190 * kl * (0.8 + (i % 2) * 0.25), i); ctx.restore();
      ctx.save(); ctx.translate(ox, oy); ctx.rotate(0.35); ctx.scale(1 + sq * 0.08, 1 - sq * 0.12); const ol = MG.path.ellipse(0, 0, orr * 0.82, orr * 1.04);
      MG.fx.shadow(ctx, ol, { dx: 26, dy: 30, blur: 40, color: 'rgba(40,30,20,0.35)' });
      MG.fx.volume(ctx, ol, [-orr * 0.82, -orr * 1.04, orr * 1.64, orr * 2.08], { color: MG.col.mix(P.sol, '#55602A', km), shadeColor: MG.col.mix(P.solDeep, '#2A2416', km), shade: 0.7, hi: 0.5, hiColor: '#DDE6A0', light: [-0.75, -0.6], rim: 'rgba(255,240,200,0.6)', rimW: 4 });
      ctx.save(); ctx.clip(ol); MG.fx.glow(ctx, orr * 0.3, orr * 0.4, orr * 0.9, '#4a1a3a', 0.5 * km, 'multiply'); ctx.fillStyle = 'rgba(255,255,255,0.75)'; ctx.beginPath(); ctx.ellipse(-orr * 0.35, -orr * 0.45, orr * 0.14, orr * 0.26, -0.3, 0, MG.TAU); ctx.fill(); ctx.restore(); ctx.restore(); ctx.restore(); }
    // typography: WORLD'S LARGEST · OLIVE OIL · PRODUCER
    const kT = 1 - pg(t, 221.6, 222.1); if (kT > 0) { S2.kicker(ctx, "world's largest", 1100, 410, t, tW - 0.1, { size: 32, color: P.rojoDeep, alpha: kT });
      MG.text.reveal(ctx, 'OLIVE OIL', 1094, 560, t, tOil - 0.12, { font: F.display, weight: 900, size: 150, color: '#3F4A1E', style: 'rise', by: 'word', alpha: kT });
      MG.text.reveal(ctx, 'producer', 1100, 650, t, tProd - 0.1, { font: F.serif, italic: true, size: 80, color: P.ink2, style: 'blur', alpha: kT }); }
    // the drop: forms at the olive's tip, falls into the vessel
    const vx = 760, vy = 1090, vr = 210; const tDrop = tResp + 0.35, tSplash = tDrop + 0.75;
    if (t > tDrop - 0.4) { const kf = pg(t, tDrop, tSplash, 'inQuad'); const dy = lerp(oy + orr * 1.0, vy - vr * 1.2, kf); const grow = pg(t, tDrop - 0.4, tDrop); if (t < tSplash) { const dr = 22 * grow; const d = S2.dropPath(vx, dy, dr); MG.fx.volume(ctx, d, [vx - dr, dy - dr * 1.75, dr * 2, dr * 2.75], { color: '#D9AE45', shade: 0.4, hi: 0.8, hiColor: '#fff2c0', light: [-0.6, -0.8] }); } }
    // vessel = the world's supply (glass drop); oil level rises to ~47% of its area
    const kV = pg(t, 221.9, 222.7); if (kV > 0) { const vp = S2.dropPath(vx, vy, vr * E.outBack(kV));
      ctx.save(); MG.fx.shadow(ctx, vp, { dx: 22, dy: 26, blur: 36, color: 'rgba(40,30,20,0.25)', fill: '#F1E4C8' }); ctx.fillStyle = 'rgba(255,252,244,0.6)'; ctx.fill(vp); ctx.clip(vp);
      const kF = pg(t, tSplash, tGlob + 0.5, 'inOutCubic'); const lvl = vy + lerp(1.0, this.l47, kF) * vr; const slosh = Math.sin(t * 6) * 6 * Math.exp(-(t - tSplash) * 1.5) * (t > tSplash ? 1 : 0);
      const g = ctx.createLinearGradient(0, lvl, 0, vy + vr); g.addColorStop(0, '#E8C25A'); g.addColorStop(1, '#B98A2A'); ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(vx - vr * 1.2, lvl + slosh); ctx.quadraticCurveTo(vx, lvl - slosh, vx + vr * 1.2, lvl + slosh); ctx.lineTo(vx + vr * 1.2, vy + vr * 1.2); ctx.lineTo(vx - vr * 1.2, vy + vr * 1.2); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = 'rgba(255,245,200,0.9)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(vx - vr * 1.2, lvl + slosh); ctx.quadraticCurveTo(vx, lvl - slosh, vx + vr * 1.2, lvl + slosh); ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.beginPath(); ctx.ellipse(vx - vr * 0.55, vy - vr * 0.1, vr * 0.12, vr * 0.5, 0.2, 0, MG.TAU); ctx.fill(); ctx.restore();
      ctx.save(); ctx.strokeStyle = P.ink; ctx.lineWidth = 4; ctx.stroke(vp); ctx.restore();
      // half mark
      const hy = vy + this.l50 * vr; const kh = pg(t, tHalf - 0.2, tHalf + 0.3); if (kh > 0) { ctx.save(); ctx.globalAlpha = kh; ctx.strokeStyle = P.rojo; ctx.lineWidth = 3; ctx.setLineDash([12, 8]); ctx.beginPath(); ctx.moveTo(vx - vr * 1.28, hy); ctx.lineTo(vx + vr * 1.25, hy); ctx.stroke(); ctx.restore(); MG.text.draw(ctx, '½', vx - vr * 1.32, hy + 26, { font: F.cond, weight: 900, size: 76, color: P.rojo, alpha: kh, align: 'right' }); }
      if (kF > 0.3) { MG.text.reveal(ctx, 'SPAIN', vx, vy + vr * 0.55, t, tSplash + 0.3, { font: F.grotesk, weight: 800, size: 40, tracking: 0.2, color: '#4a3208', align: 'center', style: 'rise' }); }
      MG.text.reveal(ctx, 'almost half', 1120, 1040, t, tAlm - 0.1, { font: F.serif, italic: true, size: 96, color: P.ink, style: 'blur', by: 'word' });
      S2.kicker(ctx, 'of the global supply', 1126, 1112, t, tGlob - 0.1, { size: 32, color: P.rojoDeep }); }
    ctx.restore();
  },
  post: { grade: 'warm', vignette: 0.3 } });

// B8 · 224.83–228.94 · more land under vines than any other country: stacked fields, area ∝ vineyard hectares (OIV 2023)
S2.VINES = [['SPAIN', 955], ['FRANCE', 812], ['CHINA', 756], ['ITALY', 718]];
SC.push({ id: 's02_vines', start: 224.83, end: 228.94, transIn: { type: 'whip', dur: 0.45, dir: 'left' },
  init() { this.rows = MG.cache('s02:vinerows', 400, 400, (x, w, h) => { for (let r = 0; r < 26; r++) { const yy = 8 + r * 15.2; x.strokeStyle = 'rgba(70,50,30,0.35)'; x.lineWidth = 1; x.beginPath(); x.moveTo(0, yy + 4); x.lineTo(w, yy + 4); x.stroke(); for (let c = 0; c < 44; c++) { const xx = 4 + c * 9.1 + (r % 2) * 4; x.fillStyle = MG.col.mix('#5E7A30', '#93AE4A', MG.rand(r, c)); x.beginPath(); x.ellipse(xx, yy, 4.4, 3.4, 0, 0, MG.TAU); x.fill(); } } }); },
  draw(ctx, t) {
    const tVin = TW('vineyards', 226.38), tAny = TW('any', 227.26), tMore = TW('more', 225.18);
    MG.kit.paper(ctx, '#EFE2C6', { light: 0.3 });
    const S0 = 345, gap = 95; const sides = S2.VINES.map(([, ha]) => S0 * Math.sqrt(ha / 955)); const total = sides.reduce((a, b) => a + b, 0) + gap * 3; let x0 = 960 - total / 2 - 60; const gy = 760;
    const kz = 1 + 0.04 * lin(t, 224.83, 229); ctx.save(); ctx.translate(960, 600); ctx.scale(kz, kz); ctx.translate(-960, -600);
    S2.VINES.forEach(([name, ha], i) => { const side = sides[i]; const t0 = i === 0 ? tMore - 0.1 : tAny - 0.35 + (i - 1) * 0.18; const k = E.outBack(clamp((t - t0) / 0.5)); const sd = side * Math.max(0.001, k);
      // oblique field: front edge at gy, receding up-right (depth = 0.55·side)
      const fx = x0 + (side - sd) / 2, dpx = sd * 0.42, dpy = sd * 0.62; const c = [[fx + dpx, gy - dpy], [fx + sd + dpx, gy - dpy], [fx + sd, gy], [fx, gy]];
      if (k > 0.01) {
        ctx.save(); ctx.fillStyle = 'rgba(50,30,20,0.2)'; ctx.filter = 'blur(10px)'; ctx.beginPath(); c.forEach((p, j) => (j ? ctx.lineTo(p[0] + 18, p[1] + 20) : ctx.moveTo(p[0] + 18, p[1] + 20))); ctx.closePath(); ctx.fill(); ctx.restore();
        ctx.fillStyle = MG.col.shade(i === 0 ? '#C8693F' : '#B89870', 0.35); ctx.beginPath(); ctx.moveTo(c[3][0], c[3][1]); ctx.lineTo(c[2][0], c[2][1]); ctx.lineTo(c[2][0], c[2][1] + 14); ctx.lineTo(c[3][0], c[3][1] + 14); ctx.closePath(); ctx.fill(); ctx.beginPath(); ctx.moveTo(c[2][0], c[2][1]); ctx.lineTo(c[1][0], c[1][1]); ctx.lineTo(c[1][0], c[1][1] + 14); ctx.lineTo(c[2][0], c[2][1] + 14); ctx.closePath(); ctx.fillStyle = MG.col.shade(i === 0 ? '#C8693F' : '#B89870', 0.5); ctx.fill();
        const top = MG.path.poly(c); ctx.fillStyle = i === 0 ? '#D9A066' : '#DCC8A0'; ctx.fill(top);
        const kr = pg(t, tVin - 0.3 + i * 0.12, tVin + 0.9 + i * 0.12); if (kr > 0) { ctx.save(); ctx.clip(top); const q = [c[3], c[2], [lerp(c[2][0], c[1][0], kr), lerp(c[2][1], c[1][1], kr)], [lerp(c[3][0], c[0][0], kr), lerp(c[3][1], c[0][1], kr)]]; S2.quad(ctx, this.rows, [q[3], q[2], q[1], q[0]], 6); ctx.restore(); }
        ctx.strokeStyle = i === 0 ? P.rojoDeep : 'rgba(60,40,30,0.6)'; ctx.lineWidth = i === 0 ? 4 : 2.2; ctx.stroke(top);
        const kl = pg(t, t0 + 0.3, t0 + 0.7); MG.text.draw(ctx, name, fx + sd / 2, gy + 80, { font: F.grotesk, weight: 800, size: i === 0 ? 50 : 34, tracking: 0.14, color: i === 0 ? P.rojoDeep : P.ink2, align: 'center', alpha: kl });
        if (i === 0) MG.text.draw(ctx, '#1', fx + sd / 2, gy + 160, { font: F.cond, weight: 900, size: 80, color: P.rojoDeep, align: 'center', alpha: pg(t, tVin + 0.4, tVin + 0.8) });
      }
      x0 += side + gap; });
    ctx.restore();
    S2.kicker(ctx, 'land planted with vineyards', 140, 150, t, tVin - 0.2, { size: 32, color: P.rojoDeep });
    MG.text.reveal(ctx, 'more than any other country', 140, 240, t, tAny - 0.1, { font: F.serif, italic: true, size: 72, color: P.ink, style: 'blur', by: 'word' });
  },
  post: { grade: 'warm', vignette: 0.28 } });

// B9 · 228.94–231.74 · Europe's largest pork producer: prism map (heights ∝ pig-meat output, Eurostat ≈2023)
S2.PORK = { Spain: 4.9, Germany: 4.2, France: 2.1, Poland: 1.9, Netherlands: 1.6, Denmark: 1.5, Italy: 1.3, Belgium: 1.0, 'United Kingdom': 0.95, Austria: 0.5, Portugal: 0.4, Hungary: 0.45, Ireland: 0.3, Czechia: 0.25, Sweden: 0.25, Romania: 0.4 };
SC.push({ id: 's02_pork', start: 228.94, end: 231.74, transIn: { type: 'shape', dur: 0.55, path: (p) => { const pr = MG.geo.proj('conic', { center: [7, 49], scale: 1250 }); const f = MG.geo.country('Spain', '50'); const c = pr([-3.7, 40.2]); const m = new DOMMatrix().translateSelf(c[0], c[1]).scaleSelf(0.05 + p * 9, 0.05 + p * 9).translateSelf(-c[0], -c[1]); const out = new Path2D(); out.addPath(MG.geo.path2d(pr, f), m); return out; } },
  init() { this.pr = MG.geo.proj('conic', { center: [7, 49], scale: 1250 });
    this.base = MG.cache('s02:eumap', W, H, (x, w, h) => { S2.seaInto(x, w, h); MG.geo.graticule(x, this.pr, { color: 'rgba(30,60,90,0.08)' }); MG.geo.draw(x, this.pr, MG.geo.land50, { fill: '#E6D8BC', stroke: MG.kit.map.coast, width: 1 }); MG.geo.draw(x, this.pr, MG.geo.borders50, { stroke: MG.kit.map.border, width: 1 }); });
    this.cs = Object.entries(S2.PORK).map(([n, v]) => { let f = MG.geo.country(n, '50'); if (n === 'Spain' || n === 'Portugal') { const g = f.geometry; const polys = (g.type === 'Polygon' ? [g.coordinates] : g.coordinates).filter((pl) => d3.geoCentroid({ type: 'Polygon', coordinates: pl })[1] > 35.5); f = { type: 'Feature', properties: f.properties, geometry: { type: 'MultiPolygon', coordinates: polys } }; } return { n, v, f, p2: MG.geo.path2d(this.pr, f), c: this.pr(d3.geoCentroid(f)) }; }).sort((a, b) => a.c[1] - b.c[1]); },
  draw(ctx, t) {
    const tEu = TW('Europe’s', 229.58), tLarg = TW('largest', 230.1), tPork = TW('pork', 230.46);
    const z = 1 + 0.05 * lin(t, 228.94, 232); ctx.save(); ctx.translate(960, 600); ctx.scale(z, z); ctx.translate(-960, -600); ctx.drawImage(this.base, 0, 0);
    for (const c of this.cs) { const sp = c.n === 'Spain'; const k = sp ? pg(t, tLarg - 0.25, tLarg + 0.55, 'outBack') : pg(t, tEu - 0.3, tEu + 0.6); const hgt = c.v * 19 * k; const top = sp ? P.sol : '#D8A08A', side = sp ? MG.col.shade(P.solDeep, 0.35) : MG.col.shade('#C47E6A', 0.4);
      if (hgt < 1) { ctx.fillStyle = MG.col.mix('#E6D8BC', top, 0.5); ctx.fill(c.p2); continue; }
      ctx.save(); ctx.fillStyle = 'rgba(40,20,20,0.2)'; ctx.translate(hgt * 0.35, 6); ctx.fill(c.p2); ctx.restore();
      for (let y = 0; y < hgt; y += 3) { ctx.save(); ctx.translate(0, -y); ctx.fillStyle = MG.col.mix(side, MG.col.shade(side, 0.3), 1 - y / hgt); ctx.fill(c.p2); ctx.restore(); }
      ctx.save(); ctx.translate(0, -hgt); ctx.fillStyle = top; ctx.fill(c.p2); ctx.strokeStyle = 'rgba(255,248,230,0.7)'; ctx.lineWidth = 1.5; ctx.stroke(c.p2); ctx.restore(); c.h = hgt; }
    const sp = this.cs.find((c) => c.n === 'Spain'), de = this.cs.find((c) => c.n === 'Germany');
    const lab = (c, str, sz, col, t0) => { const k = pg(t, t0, t0 + 0.4); if (k <= 0) return; MG.text.draw(ctx, str, c.c[0], c.c[1] - (c.h || 0) - 24, { font: F.grotesk, weight: 800, size: sz, tracking: 0.14, color: col, align: 'center', stroke: 'rgba(250,244,232,0.9)', strokeW: 7, alpha: k }); };
    lab(de, 'GERMANY', 26, P.ink2, tEu + 0.3); lab(sp, 'SPAIN  #1', 44, P.rojoDeep, tLarg + 0.35);
    ctx.restore();
    S2.kicker(ctx, "europe's largest", 140, 140, t, tEu - 0.1, { size: 32, color: P.rojoDeep });
    MG.text.reveal(ctx, 'pork producer', 136, 236, t, tPork - 0.1, { font: F.display, weight: 800, size: 92, color: P.ink, style: 'rise', by: 'word' });
  },
  post: { grade: 'warm', vignette: 0.3 } });

// B10 · 231.74–235.26 · "Think jamón": the ham on its stand, sliced paper-thin
SC.push({ id: 's02_jamon', start: 231.74, end: 235.26,
  init() {
    this.bg = MG.cache('s02:jamonbg', W, H, (x, w, h) => { MG.fx.vgrad(x, [[0, '#2A1C18'], [0.62, '#3A261C'], [0.63, '#5A3A26'], [1, '#3A2418']]); const g = x.createRadialGradient(560, 300, 50, 700, 500, 1200); g.addColorStop(0, 'rgba(255,190,120,0.45)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(0, 0, w, h); x.strokeStyle = 'rgba(20,10,6,0.35)'; for (let i = 0; i < 40; i++) { x.lineWidth = 1 + MG.rand(8, i) * 2; const yy = 690 + i * 10 + MG.rand(9, i) * 8; x.beginPath(); x.moveTo(0, yy); x.bezierCurveTo(600, yy - 8, 1300, yy + 6, w, yy - 4); x.stroke(); } MG.tex.over(x, 'blotch', { alpha: 0.3, color: '#000', scale: 3 }); });
    this.bgB = MG.blurred(this.bg, 3);
    this.ham = MG.cache('s02:ham', 1300, 760, (x, w, h) => {
      const L = [-0.7, -0.7];
      // stand (jamonero): board + post + clamp
      x.fillStyle = '#7A4A2A'; x.beginPath(); x.moveTo(60, 650); x.lineTo(1180, 600); x.lineTo(1240, 660); x.lineTo(110, 720); x.closePath(); x.fill(); x.fillStyle = '#5A341C'; x.beginPath(); x.moveTo(110, 720); x.lineTo(1240, 660); x.lineTo(1240, 690); x.lineTo(110, 752); x.closePath(); x.fill();
      MG.fx.volume(x, MG.path.rr(1040, 150, 70, 480, 12), [1040, 150, 70, 480], { color: '#8A5632', shade: 0.5, hi: 0.4, cel: true, light: L, outline: '#2a160c', outlineW: 3 });
      // the leg: haunch (left) tapering to the shank and the black hoof clamped at the post
      const leg = MG.path.smooth([[110, 560], [150, 420], [300, 330], [520, 300], [760, 260], [930, 210], [1030, 170], [1060, 214], [960, 290], [800, 370], [600, 470], [420, 580], [240, 640], [140, 640]], true);
      MG.fx.volume(x, leg, [110, 170, 950, 470], { color: '#B97A3E', shadeColor: '#6A3A1E', shade: 0.65, hi: 0.55, hiColor: '#F2C27A', cel: false, soft: 0.12, light: L, outline: '#2a160c', outlineW: 4, rim: 'rgba(255,214,150,0.6)', rimW: 4 });
      x.save(); x.clip(leg); MG.tex.over(x, 'blotch', { alpha: 0.4, color: '#4a2410', scale: 6, seed: 4 }); x.restore();
      // the cut face: deep red meat, marbled, ringed with white fat
      const cut = MG.path.smooth([[250, 470], [330, 380], [520, 340], [700, 330], [760, 360], [680, 420], [520, 470], [360, 510]], true); x.fillStyle = '#F1E4D6'; x.fill(cut);
      const meat = MG.path.smooth([[290, 466], [360, 396], [520, 362], [680, 352], [720, 372], [650, 418], [510, 456], [370, 490]], true); MG.fx.volume(x, meat, [290, 352, 430, 138], { color: '#8E1F2A', shadeColor: '#4A0E16', shade: 0.5, hi: 0.4, hiColor: '#D86A6A', light: L });
      x.save(); x.clip(meat); x.strokeStyle = 'rgba(250,235,225,0.55)'; x.lineCap = 'round'; const R = MG.rng(3); for (let i = 0; i < 30; i++) { x.lineWidth = 1 + R() * 2.5; let px = 300 + R() * 420, py = 360 + R() * 120; x.beginPath(); x.moveTo(px, py); for (let k = 0; k < 4; k++) { px += 10 + R() * 18; py += (R() - 0.5) * 12; x.lineTo(px, py); } x.stroke(); } x.restore();
      x.strokeStyle = '#2a160c'; x.lineWidth = 2.5; x.stroke(cut);
      // the black hoof (pata negra) in the clamp
      const hoof = MG.path.smooth([[1000, 150], [1056, 120], [1092, 140], [1080, 200], [1036, 214]], true); MG.fx.volume(x, hoof, [1000, 120, 92, 94], { color: '#231a1c', shade: 0.6, hi: 0.5, hiColor: '#6a5a60', cel: true, light: L, outline: '#0c0808', outlineW: 3 });
      MG.fx.volume(x, MG.path.rr(1028, 128, 96, 34, 8), [1028, 128, 96, 34], { color: '#9AA0A8', shade: 0.5, hi: 0.7, cel: true, light: L, outline: '#2a2a30', outlineW: 2.5 });
      MG.fx.ink(x, [[960, 290], [1010, 250]], { width: 6, color: 'rgba(255,220,170,0.3)' });
    });
    this.slice = MG.cache('s02:slice', 260, 120, (x, w, h) => { const sl = MG.path.smooth([[10, 60], [60, 20], [160, 12], [250, 40], [220, 92], [110, 108], [30, 96]], true); x.fillStyle = 'rgba(244,228,214,0.95)'; x.fill(sl); const m2 = MG.path.smooth([[26, 62], [70, 28], [160, 22], [232, 44], [206, 84], [110, 96], [40, 88]], true); x.fillStyle = 'rgba(166,36,48,0.88)'; x.fill(m2); x.save(); x.clip(m2); x.strokeStyle = 'rgba(255,240,235,0.6)'; for (let i = 0; i < 9; i++) { x.lineWidth = 1.5; x.beginPath(); x.moveTo(30 + i * 22, 30 + (i % 3) * 18); x.quadraticCurveTo(60 + i * 22, 50, 70 + i * 20, 80); x.stroke(); } x.restore(); x.strokeStyle = 'rgba(80,20,20,0.5)'; x.lineWidth = 1.5; x.stroke(sl); });
  },
  draw(ctx, t) {
    const tJam = TW('jamón', 231.98), tDry = TW('dry-cured', 233.74), tFam = TW('famous', 233.3);
    const z = 1.02 + 0.06 * lin(t, 231.74, 235.4); const hh = MG.cam.handheld(t, 2, 15);
    ctx.save(); ctx.translate(960 + hh.dx, 540 + hh.dy); ctx.scale(z, z); ctx.translate(-960, -540);
    ctx.drawImage(this.bgB, 0, 0);
    MG.fx.contact(ctx, 700, 740, 560, 40, 0.45); ctx.drawImage(this.ham, 60, 150);
    // plate with slices
    const pl = MG.path.ellipse(1450, 830, 300, 90); MG.fx.shadow(ctx, pl, { dx: 16, dy: 20, blur: 30, color: 'rgba(0,0,0,0.5)' }); MG.fx.volume(ctx, pl, [1150, 740, 600, 180], { color: '#EDE6DA', shade: 0.35, hi: 0.5, light: [-0.7, -0.7], outline: '#2a2020', outlineW: 2.5 }); ctx.strokeStyle = 'rgba(31,78,140,0.6)'; ctx.lineWidth = 4; ctx.beginPath(); ctx.ellipse(1450, 830, 250, 70, 0, 0, MG.TAU); ctx.stroke();
    for (let i = 0; i < 5; i++) { MG.sprite(ctx, this.slice, 1380 + i * 34, 820 - i * 6 + (i % 2) * 12, { rot: -0.2 + i * 0.12, scale: 0.9 }); }
    // the knife slices: back-and-forth strokes, a new slice peels and drops onto the plate
    const cyc = MG.fract((t - 231.74) / 1.1); const kx = Math.sin(cyc * MG.TAU) * 70; const kA = -0.32;
    ctx.save(); ctx.translate(520 + kx, 520 - kx * 0.2); ctx.rotate(kA * 0.6); const blade = MG.path.smooth([[-20, -10], [420, -16], [470, -2], [420, 8], [-20, 10]], true); MG.fx.volume(ctx, blade, [-20, -16, 490, 26], { color: '#C9CED6', shade: 0.4, hi: 0.9, hiColor: '#ffffff', cel: true, light: [-0.3, -1], outline: '#3a3e46', outlineW: 2 });
    MG.fx.volume(ctx, MG.path.rr(-170, -16, 160, 32, 10), [-170, -16, 160, 32], { color: '#3a2418', shade: 0.5, hi: 0.4, cel: true, outline: '#140a06', outlineW: 2.5 }); ctx.restore();
    const fall = MG.fract((t - 231.74 - 0.55) / 1.1); if (t > 232.3) { const sx = lerp(700, 1450, E.inOutSine(fall)), sy = lerp(540, 790, E.inQuad(fall)) - Math.sin(fall * Math.PI) * 160; MG.sprite(ctx, this.slice, sx, sy, { rot: -0.4 + fall * 0.9, scale: 0.9, sy: 0.6 + 0.4 * Math.abs(Math.cos(fall * 5)), alpha: Math.min(1, (1 - fall) * 4) }); }
    ctx.restore();
    // warm light shaft + type
    MG.fx.rays(ctx, 300, -60, { n: 7, len: 1500, spread: 0.6, dir: 1.05, alpha: 0.07, t, color: '#ffd9a0' });
    MG.text.reveal(ctx, 'jamón', 150, 230, t, tJam - 0.1, { font: F.display, weight: 900, italic: true, size: 190, color: '#F4E3C4', style: 'rise', by: 'char', stagger: 0.04, shadow: { blur: 30, dy: 10, color: 'rgba(0,0,0,0.5)' } });
    MG.text.reveal(ctx, 'dry-cured ham', 160, 330, t, tDry - 0.1, { font: F.serif, italic: true, size: 76, color: '#F4E3C4', style: 'blur', by: 'word' });
  },
  post: { grade: 'warm', vignette: 0.42, bloom: 0.08 } });

// ---- characters: black Iberian pig (side view, facing left) & a sun-struck cow ----
S2.pig = (ctx, x, y, s, t, o = {}) => { const tb = MG.kit.twos(t + (o.ph || 0)); const INK = '#120c0e', C = '#3a3236', L = [-0.6, -0.8]; const dir = o.dir || 1;
  ctx.save(); ctx.translate(x, y); ctx.scale(s * dir, s); MG.fx.contact(ctx, 10, 6, 150, 18, 0.35);
  const walk = o.walk || 0, root = o.root || 0; const ph = tb * 9;
  // legs (far pair darker)
  const leg = (lx, a, far) => { ctx.save(); ctx.translate(lx, -18); ctx.rotate(a); MG.fx.ink(ctx, [[0, 0], [2, 26], [0, 50]], { width: 16, color: far ? '#1e181c' : '#2c2428', taper: [0, 0.3] }); ctx.fillStyle = '#0c0808'; ctx.beginPath(); ctx.ellipse(0, 52, 8, 5, 0, 0, MG.TAU); ctx.fill(); ctx.restore(); };
  leg(-70, Math.sin(ph) * 0.35 * walk, true); leg(88, -Math.sin(ph) * 0.35 * walk, true);
  const br = Math.sin(t * 2.2) * 2; const hd = root * (0.5 + 0.5 * Math.sin(tb * 6)); // head dip when rooting
  const body = MG.path.smooth([[156, -36], [150, -86 - br], [100, -112 - br], [0, -114 - br], [-76, -106 - br], [-116, -84], [-120, -30], [-90, 4], [30, 12], [126, 2]], true);
  MG.fx.volume(ctx, body, [-112, -104, 262, 112], { color: C, shadeColor: '#141012', shade: 0.6, hi: 0.4, hiColor: '#8A7E8A', cel: true, light: L, outline: INK, outlineW: 3.5, rim: 'rgba(255,214,160,0.55)', rimW: 3 });
  ctx.save(); ctx.clip(body); ctx.strokeStyle = 'rgba(150,140,150,0.35)'; ctx.lineWidth = 1.5; for (let i = 0; i < 26; i++) { const bx = -100 + i * 9.5; ctx.beginPath(); ctx.moveTo(bx, -98 - br); ctx.lineTo(bx + 6, -88 - br); ctx.stroke(); } ctx.restore();
  leg(-48, -Math.sin(ph) * 0.35 * walk, false); leg(110, Math.sin(ph) * 0.35 * walk, false);
  // tail
  MG.fx.ink(ctx, [[146, -60], [160, -70 + Math.sin(t * 6) * 4], [168, -58], [160, -50]], { width: 4, color: INK, taper: [0.2, 0.6] });
  // head: long snout, floppy ear
  ctx.save(); ctx.translate(-100, -70); ctx.rotate(-0.1 + hd * 0.5);
  const head = MG.path.smooth([[24, -30], [-14, -40], [-46, -32], [-84, -14], [-112, 0], [-116, 14], [-108, 26], [-64, 32], [-20, 36], [24, 28]], true);
  MG.fx.volume(ctx, head, [-116, -40, 140, 76], { color: C, shadeColor: '#141012', shade: 0.55, hi: 0.4, hiColor: '#8A7E8A', cel: true, light: L, outline: INK, outlineW: 3.2, rim: 'rgba(255,214,160,0.55)', rimW: 3 });
  const disc = MG.path.ellipse(-115, 13, 7, 14, 0.12); MG.fx.volume(ctx, disc, [-122, -1, 14, 28], { color: '#9A7A7E', shade: 0.4, cel: true, outline: INK, outlineW: 2.2 }); ctx.fillStyle = '#1a0e10'; ctx.beginPath(); ctx.ellipse(-117, 7, 1.8, 3.2, 0, 0, MG.TAU); ctx.ellipse(-116, 19, 1.8, 3.2, 0, 0, MG.TAU); ctx.fill();
  const chew = o.chew ? Math.abs(Math.sin(tb * 10)) * 4 : 0; MG.fx.ink(ctx, [[-104, 27 + chew], [-74, 31 + chew], [-50, 26]], { width: 3, color: INK });
  if (o.happy) MG.fx.ink(ctx, [[-58, -12], [-50, -17], [-41, -13]], { width: 3.4, color: '#f0e6dc', taper: [0.3, 0.3] }); else { ctx.fillStyle = '#f4ede4'; ctx.beginPath(); ctx.ellipse(-50, -13, 5.5, 4.5, 0, 0, MG.TAU); ctx.fill(); ctx.fillStyle = '#100808'; ctx.beginPath(); ctx.arc(-52, -13, 2.8, 0, MG.TAU); ctx.fill(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(-53, -14.5, 1, 0, MG.TAU); ctx.fill(); }
  const flap = Math.sin(tb * 5) * 3; const ear = MG.path.smooth([[-6, -36], [14, -58], [-14, -54], [-56, -30], [-82, -6 + flap], [-62, -2 + flap], [-30, -16]], true); MG.fx.volume(ctx, ear, [-82, -58, 96, 56], { color: '#2c2428', shade: 0.5, hi: 0.35, hiColor: '#6a5e66', cel: true, light: L, outline: INK, outlineW: 2.6 });
  ctx.restore(); ctx.restore(); };
S2.cow = (ctx, x, y, s, t, o = {}) => { const tb = MG.kit.twos(t); const INK = '#1a1010', C = '#8A5534', L = [-0.6, -0.8];
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); MG.fx.contact(ctx, 0, 6, 220, 26, 0.4);
  const leg = (lx, far) => { MG.fx.ink(ctx, [[lx, -60], [lx + 2, -30], [lx, 0]], { width: 26, color: far ? '#5a3420' : '#7a4a2c', taper: [0, 0] }); ctx.fillStyle = '#1a1010'; ctx.fillRect(lx - 13, -6, 26, 10); };
  leg(-110, true); leg(120, true);
  const sag = Math.sin(t * 1.5) * 2; const body = MG.path.smooth([[180, -90], [170, -190 - sag], [40, -206 - sag], [-120, -196 - sag], [-170, -170], [-176, -80], [-120, -50], [80, -46], [170, -56]], true);
  MG.fx.volume(ctx, body, [-176, -206, 356, 160], { color: C, shadeColor: '#4A2A18', shade: 0.6, hi: 0.4, hiColor: '#E0A070', cel: true, light: L, outline: INK, outlineW: 4 });
  leg(-80, false); leg(150, false);
  MG.fx.ink(ctx, [[176, -170], [196, -120 + Math.sin(t * 2) * 10], [190, -70]], { width: 7, color: '#5a3420', taper: [0.2, 0.2] });
  // head toward camera, droopy & panting
  ctx.save(); ctx.translate(-190, -150 + Math.sin(t * 1.5) * 3); const head = MG.path.smooth([[-50, -60], [40, -62], [56, -10], [40, 60], [10, 90], [-30, 90], [-56, 60], [-66, -10]], true);
  MG.fx.volume(ctx, head, [-66, -62, 122, 152], { color: C, shadeColor: '#4A2A18', shade: 0.55, hi: 0.4, hiColor: '#E0A070', cel: true, light: L, outline: INK, outlineW: 3.5 });
  const muz = MG.path.ellipse(-8, 70, 44, 26); MG.fx.volume(ctx, muz, [-52, 44, 88, 52], { color: '#E4B8A0', shade: 0.45, cel: true, outline: INK, outlineW: 3 }); ctx.fillStyle = '#3a2020'; ctx.beginPath(); ctx.ellipse(-22, 68, 6, 4, 0, 0, MG.TAU); ctx.ellipse(8, 68, 6, 4, 0, 0, MG.TAU); ctx.fill();
  const tg = 6 + Math.abs(Math.sin(tb * 9)) * 8; const tongue = MG.path.smooth([[-16, 92], [8, 92], [10, 92 + tg + 10], [-6, 92 + tg + 18], [-18, 92 + tg + 6]], true); MG.fx.volume(ctx, tongue, [-18, 92, 30, 40], { color: '#D86A7A', shade: 0.4, hi: 0.6, cel: true, outline: INK, outlineW: 2.5 });
  for (const ex of [-34, 22]) { S2.eyeH(ctx, ex, -12, 11, { lid: 0.72, look: [0.1, 0.3], skin: C, ink: INK }); }
  for (const hx of [-1, 1]) { MG.fx.ink(ctx, [[hx * 34, -56], [hx * 56, -80], [hx * 50, -100]], { width: 10, color: '#E8DCC4', taper: [0, 0.8] }); const ear = MG.path.smooth([[hx * 50, -40], [hx * 96, -36], [hx * 92, -18], [hx * 52, -22]], true); MG.fx.volume(ctx, ear, [hx > 0 ? 50 : -96, -40, 46, 22], { color: C, shade: 0.5, cel: true, outline: INK, outlineW: 2.5 }); }
  // sweat drops
  for (let i = 0; i < 3; i++) { const k = MG.fract(t * 0.8 + i * 0.33); ctx.fillStyle = `rgba(140,200,240,${0.9 * (1 - k)})`; const dx2 = [-60, 58, -48][i], dy2 = [-40, -50, 20][i] + k * 40; const d = S2.dropPath(dx2, dy2, 6); ctx.fill(d); }
  ctx.restore();
  // flies circling
  for (let i = 0; i < 3; i++) { const a = t * (4 + i) + i * 2; ctx.fillStyle = '#111'; ctx.beginPath(); ctx.arc(-190 + Math.cos(a) * (70 + i * 14), -260 + Math.sin(a * 1.3) * 30, 3, 0, MG.TAU); ctx.fill(); }
  ctx.restore(); };
S2.holmOak = (seed) => MG.cache('s02:encina:' + seed, 520, 360, (x, w, h) => { const R = MG.rng(seed); const L = [-0.6, -0.8];
  MG.fx.ink(x, [[250, 360], [244, 300], [256, 250], [236, 210]], { width: 34, color: '#3a2c24', taper: [0, 0.4] }); MG.fx.ink(x, [[252, 270], [300, 230], [340, 200]], { width: 16, color: '#3a2c24', taper: [0, 0.6] }); MG.fx.ink(x, [[248, 260], [196, 222], [160, 196]], { width: 14, color: '#3a2c24', taper: [0, 0.6] });
  const cl = []; for (let i = 0; i < 34; i++) { const a = R() * MG.TAU, d = Math.sqrt(R()); cl.push([260 + Math.cos(a) * d * 225, 170 + Math.sin(a) * d * 56 - (1 - d * d) * 34, 24 + R() * 20]); } cl.sort((a, b) => a[1] - b[1]);
  for (const [cx, cy, r] of cl) MG.fx.volume(x, MG.path.blob(cx, cy, r, { seed: Math.floor(R() * 99), irr: 0.34, n: 16, sx: 1.25 }), [cx - r * 1.25, cy - r, r * 2.5, r * 2], { color: '#56664A', shadeColor: '#28321F', shade: 0.65, hi: 0.5, hiColor: '#A3AE86', cel: true, light: L, outline: 'rgba(20,30,16,0.45)', outlineW: 1.4 }); });

// B11–B12 · 235.26–241.74 · the dehesa: black pigs eating acorns under holm oaks … do better than cattle
SC.push({ id: 's02_dehesa', start: 235.26, end: 241.74, transIn: { type: 'blur', dur: 0.6, amount: 22 },
  init() {
    this.sky = MG.cache('s02:dehsky', W * 1.6, H, (x, w, h) => { MG.fx.vgrad(x, [[0, '#F0C890'], [0.45, '#F7DDB0'], [0.5, '#D8B878'], [1, '#B89A5A']], 0, 0, w, h); MG.tex.over(x, 'grain', { alpha: 0.06, blend: 'overlay' }); x.fillStyle = '#B5A27A'; x.beginPath(); x.moveTo(0, 540); for (let xx = 0; xx <= w; xx += 10) x.lineTo(xx, 520 - Math.abs(MG.fbm(xx * 0.0015, 3, 3)) * 60); x.lineTo(w, 600); x.lineTo(0, 600); x.closePath(); x.fill(); x.save(); x.beginPath(); x.rect(0, 540, w, h); x.clip(); MG.tex.over(x, 'blotch', { alpha: 0.18, color: '#5a4020', scale: 6 }); x.restore();
      // dry, cracked ground on the right (where the cow stands)
      x.strokeStyle = 'rgba(80,50,20,0.35)'; x.lineWidth = 2; const R = MG.rng(9); for (let i = 0; i < 70; i++) { let px = w * 0.62 + R() * w * 0.38, py = 640 + R() * 420; x.beginPath(); x.moveTo(px, py); for (let k = 0; k < 4; k++) { px += (R() - 0.5) * 70; py += (R() - 0.5) * 30; x.lineTo(px, py); } x.stroke(); } });
    this.oaks = [S2.holmOak(3), S2.holmOak(8), S2.holmOak(13)]; this.oakB = this.oaks.map((o) => MG.blurred(o, 2));
  },
  draw(ctx, t) {
    const tAc = TW('acorns', 237.74), tBet = TW('better', 239.02), tCat = TW('cattle', 240.46), tSouth = TW('south', 239.9);
    const pan = E.inOutCubic(pg(t, 238.3, 239.9, 'linear')) * 980; const hh = MG.cam.handheld(t, 2, 19);
    ctx.save(); ctx.translate(hh.dx, hh.dy);
    ctx.drawImage(this.sky, -pan * 0.5, 0);
    MG.kit.sun(ctx, 1480 - pan * 0.4, 300, 70, t, { rays: 0.25, corona: 0.9 });
    // far oaks (parallax 0.6), near oaks (1.0)
    const oak = (img, X, Y, sc, par) => { const sx = X - pan * par; MG.fx.contact(ctx, sx + 60 * sc, Y, 220 * sc, 26 * sc, 0.3); ctx.drawImage(img, sx - 260 * sc, Y - 352 * sc, 520 * sc, 360 * sc); };
    oak(this.oakB[1], 260, 560, 0.45, 0.6); oak(this.oakB[2], 820, 556, 0.4, 0.6); oak(this.oakB[0], 1700, 560, 0.42, 0.6); oak(this.oakB[1], 2200, 558, 0.4, 0.6);
    oak(this.oaks[0], 520, 700, 1.15, 1); oak(this.oaks[2], 1350, 660, 0.85, 1);
    // falling acorns
    MG.fx.particles(ctx, { n: 10, seed: 5, t, area: [300 - pan, 420, 700, 60], vel: [0, 30], gravity: 300, life: 1.6, size: [5, 7], alpha: 0.95, shape: (c, x, y, s2) => { MG.fx.volume(c, MG.path.ellipse(x, y, s2 * 0.75, s2), [x - s2, y - s2, s2 * 2, s2 * 2], { color: '#9A6A30', shade: 0.5, cel: true, outline: '#2a1a0a', outlineW: 1.2 }); c.fillStyle = '#5a4022'; c.beginPath(); c.ellipse(x, y - s2 * 0.8, s2 * 0.8, s2 * 0.4, 0, 0, MG.TAU); c.fill(); }, fadeOut: 0.1 });
    // acorns on the ground
    for (let i = 0; i < 26; i++) { const ax = 280 + MG.rand(3, i) * 900 - pan, ay = 760 + MG.rand(4, i) * 190; MG.fx.volume(ctx, MG.path.ellipse(ax, ay, 5, 7, 1.2), [ax - 7, ay - 7, 14, 14], { color: '#9A6A30', shade: 0.5, cel: true, outline: '#2a1a0a', outlineW: 1 }); }
    // the pigs
    S2.pig(ctx, 780 - pan, 940, 1.55, t, { root: 1, chew: true, happy: true });
    S2.pig(ctx, 1240 - pan - (t - 235.26) * 22, 790, 0.85, t, { walk: 1, ph: 0.3 });
    S2.pig(ctx, 330 - pan, 790, 0.7, t, { root: 1, chew: true, happy: true, dir: -1, ph: 0.6 });
    // the cow, parched, on cracked earth in the full sun
    S2.cow(ctx, 2250 - pan, 930, 1.05, t);
    // foreground grass (blurred) for depth
    ctx.drawImage(this.fg || (this.fg = MG.blurred(MG.cache('s02:dehfg', W * 1.8, 260, (x, w, h) => { const R = MG.rng(12); for (let i = 0; i < 160; i++) { const bx = R() * w, by = 120 + R() * 150; if (bx > w * 0.55 && R() < 0.7) continue; for (let k = 0; k < 6; k++) { const a = -Math.PI / 2 + (R() - 0.5) * 1.1; MG.fx.ink(x, [[bx, by], [bx + Math.cos(a) * 26, by + Math.sin(a) * 50], [bx + Math.cos(a) * 40, by + Math.sin(a) * 96]], { width: 6, color: MG.col.mix('#7a7a3a', '#c8b060', R()), taper: [0, 1] }); } } }), 7)), -pan * 1.3 - 20, H - 250);
    ctx.restore();
    MG.text.reveal(ctx, 'bellotas', 150, 200, t, tAc - 0.1, { font: F.brush, size: 70, color: '#5a3a1a', style: 'wipe', by: 'line', dur: 0.4, alpha: 1 - pg(t, 238.2, 238.6) });
    if (t > tAc - 0.1 && t < 238.6) { const k = pg(t, tAc, tAc + 0.4) * (1 - pg(t, 238.2, 238.6)); S2.kicker(ctx, 'acorns', 156, 250, t, tAc, { size: 22, color: '#5a3a1a', alpha: k }); }
    S2.kicker(ctx, 'the dry south', 1260, 160, t, tSouth - 0.1, { size: 28, color: P.rojoDeep, alpha: 1 - pg(t, 241.3, 241.7) });
    MG.text.reveal(ctx, 'than cattle', 1254, 260, t, tCat - 0.25, { font: F.display, weight: 800, size: 90, color: P.ink, style: 'rise', by: 'word', alpha: 1 - pg(t, 241.3, 241.7) });
  },
  post: { grade: 'golden', vignette: 0.32 } });

// C1–C6 · 241.74–267.82 · where people live: one dot system (1 dot ≈ 34,000 people) that changes form with the VO
S2.NDOT = 1400; S2.METRO = [['Madrid', 7.0], ['Barcelona', 5.0], ['Valencia', 1.9], ['Seville', 1.5], ['Bilbao', 1.0]];
SC.push({ id: 's02_people', start: 241.74, end: 267.82, transIn: { type: 'push', dur: 0.55, dir: 'down' },
  init() {
    const pr = this.pr = MG.kit.view('iberia'); this.mm = S2.mapModern(1.25);
    const provs = MG.geo.provinces.features.filter((f) => !['35', '38', '51', '52', '54'].includes(f.id)); this.provs = provs;
    // index canvas: each province painted with its own colour → fast point sampling
    const ic = MG.canvas(W, H); const ix = ic.getContext('2d'); provs.forEach((f, i) => { ix.fillStyle = `rgb(${i + 1},0,0)`; ix.beginPath(); d3.geoPath(pr, ix)(f); ix.fill(); }); const id = ix.getImageData(0, 0, W, H).data;
    const pix = (x, y) => id[((y | 0) * W + (x | 0)) * 4];
    const pop = provs.map((f) => (MG.geo.density[f.id] || 20) * d3.geoArea(f) * 6371 * 6371); const tot = pop.reduce((a, b) => a + b, 0);
    const R = MG.rng(31); const dots = []; const counts = pop.map((p) => p / tot * S2.NDOT); let carry = 0;
    provs.forEach((f, i) => { carry += counts[i]; const n = Math.floor(carry); carry -= n; const bb = MG.geo.bbox(pr, f); for (let k = 0; k < n; k++) { let x, y, tries = 0; do { x = bb[0] + R() * bb[2]; y = bb[1] + R() * bb[3]; tries++; } while (pix(x, y) !== i + 1 && tries < 400); dots.push({ tx: x, ty: y, d: MG.geo.density[f.id] || 20, pid: f.id }); } });
    while (dots.length > S2.NDOT) dots.pop();
    // uniform starts (anywhere on the peninsula)
    for (const d of dots) { let x, y, tries = 0; do { x = 380 + R() * 1300; y = 90 + R() * 950; tries++; } while (!pix(x, y) && tries < 500); d.sx = x; d.sy = y; d.j = R(); }
    // chart slots: densest 85% of dots → narrow left bar (30% of the land), the rest → wide right bar
    const byD = [...dots].sort((a, b) => b.d - a.d); const nL = Math.round(dots.length * 0.85); const X0 = 240, LW = 1440, wL = LW * 0.3, pitch = 12.4, base = 870;
    const colsL = Math.floor(wL / pitch), colsR = Math.floor((LW - wL) / pitch);
    byD.forEach((d, i) => { if (i < nL) { d.cx = X0 + (i % colsL) * pitch + pitch / 2; d.cy = base - 8 - Math.floor(i / colsL) * pitch; d.L = 1; } else { const j = i - nL; d.cx = X0 + wL + (j % colsR) * pitch + pitch / 2; d.cy = base - 8 - Math.floor(j / colsR) * pitch; d.L = 0; } });
    this.chart = { X0, LW, wL, base, hL: Math.ceil(nL / colsL) * pitch, hR: Math.ceil((dots.length - nL) / colsR) * pitch };
    // metro crowds: nearest dots fly to sunflower discs at each metro area (count ∝ people)
    const used = new Set(); this.metro = S2.METRO.map(([c, mil]) => { const p = pr(MG.geo.cities[c]); const n = Math.round(mil / 48 * S2.NDOT); const cand = dots.map((d, i) => [Math.hypot(d.tx - p[0], d.ty - p[1]), i]).filter((q) => !used.has(q[1])).sort((a, b) => a[0] - b[0]).slice(0, n); cand.forEach(([, i], k) => { used.add(i); const a = k * 2.39996, r = Math.sqrt(k + 0.5) * 6.2; dots[i].mx = p[0] + Math.cos(a) * r; dots[i].my = p[1] + Math.sin(a) * r * 0.62; dots[i].mc = c; }); return { c, mil, p, n, r: Math.sqrt(n) * 6.2 }; });
    this.dots = dots;
    this.ramp = (d) => d < 15 ? '#EFE6D2' : d < 50 ? '#E3C08A' : d < 150 ? '#D08A52' : d < 400 ? '#B5552F' : '#7E1F1B';
    this.choro = MG.cache('s02:choro', W, H, (x) => { MG.kit.iberiaMap(x, { view: 'iberia', relief: 0, lift: 10 }); provs.forEach((f) => MG.geo.draw(x, pr, f, { fill: this.ramp(MG.geo.density[f.id] || 20) })); MG.geo.draw(x, pr, MG.geo.provinceMesh, { stroke: 'rgba(58,43,58,0.45)', width: 1 }); x.save(); MG.geo.clip(x, pr, MG.geo.country('Spain', '10')); x.globalAlpha = 0.35; x.globalCompositeOperation = 'multiply'; MG.geo.relief(x, pr, { alpha: 1 }); x.restore(); });
    this.cold = provs.filter((f) => (MG.geo.density[f.id] || 99) < 15).map((f) => ({ f, p2: MG.geo.path2d(pr, f), c: pr(d3.geoCentroid(f)) }));
  },
  draw(ctx, t) {
    const tWhere = TW('where', 242.14), tEdge = TW('Around', 243.66), tCoast = TW('coasts', 245.82), tVal = TW('valleys', 246.78), t85 = TW('85', 249.1), t30 = TW('30', 251.5), tLand = TW('land.', 252.54);
    const tMad = TW('Madrid', 253.78), t7 = TW('7', 254.54), tBcn = TW('Barcelona,', 256.38), t5 = TW('5', 257.34), tVlc = TW('Valencia,', 258.7), tSev = TW('Seville,', 259.58), tBil = TW('Bilbao.', 260.3), tIn = TW('inland,', 261.42), tSib = TW('Siberia.', 266.54);
    const kChart = pg(t, 247.9, 249.0, 'inOutCubic') * (1 - pg(t, 252.95, 253.9, 'inOutCubic'));  // dots → bars → back
    const kMap = 1 - kChart; const kTilt = pg(t, 253.0, 254.2, 'inOutCubic') * (1 - pg(t, 260.9, 262.0, 'inOutCubic'));
    const kChoro = pg(t, 261.3, 262.4, 'inOutSine'); const kZ = pg(t, 262.3, 264.2, 'inOutCubic');
    // map plane: flat ↔ tilted (perspective) ↔ zoom on the Meseta for the choropleth
    const flatQ = [[0, 0], [W, 0], [W, H], [0, H]]; const tiltQ = [[-160, 150], [2080, 150], [2560, 1230], [-640, 1230]];
    const zq = (q, z, c) => q.map((p) => [c[0] + (p[0] - c[0]) * z, c[1] + (p[1] - c[1]) * z]);
    let Q = S2.lerpQ(flatQ, tiltQ, kTilt); Q = S2.lerpQ(Q, zq(flatQ, 1.45, [1000, 470]).map((p) => [p[0] - 40, p[1] + 60]), kZ);
    const hom = S2.homo(Q); const toS = (x, y) => hom(x / W, y / H);
    MG.kit.paper(ctx, P.paper2, { light: 0.25 });
    const mapA = 1 - 0.85 * kChart;
    if (mapA > 0.01) { ctx.save(); ctx.globalAlpha = mapA; if (kTilt < 0.001 && kZ < 0.001) ctx.drawImage(this.mm, 0, 0, W, H); else S2.quad(ctx, this.mm, Q, 12); if (kChoro > 0) { ctx.globalAlpha = mapA * kChoro; if (kTilt < 0.001 && kZ < 0.001) ctx.drawImage(this.choro, 0, 0); else S2.quad(ctx, this.choro, Q, 12); } ctx.restore(); }
    const kVeil = pg(t, 241.9, 242.6) * (1 - kChoro); if (kVeil > 0) { ctx.save(); ctx.globalAlpha = 0.32 * kVeil * mapA; ctx.fillStyle = '#F6EEDC'; if (kTilt < 0.001 && kZ < 0.001) ctx.fillRect(0, 0, W, H); else { ctx.beginPath(); Q.forEach((p2, i) => (i ? ctx.lineTo(p2[0], p2[1]) : ctx.moveTo(p2[0], p2[1]))); ctx.closePath(); ctx.fill(); } ctx.restore(); }
    // coasts & valleys emphasis during "around the edges"
    const kCo = pg(t, tCoast - 0.2, tCoast + 0.4) * (1 - pg(t, 247.6, 248.2)); if (kCo > 0) { ctx.save(); ctx.globalAlpha = kCo; MG.geo.draw(ctx, this.pr, MG.geo.country('Spain', '10'), { stroke: MG.col.a(P.rojo, 0.75), width: 6 }); ctx.restore(); }
    const kVa = pg(t, tVal - 0.2, tVal + 0.5) * (1 - pg(t, 247.6, 248.2)); if (kVa > 0) for (const r of ['Ebro', 'Guadalquivir']) { MG.geo.line(ctx, this.pr, MG.geo.rivers[r], { color: MG.col.a('#2a6aa8', 0.8 * kVa), width: 14, progress: kVa }); }
    // the dots
    const kDist = pg(t, tEdge - 0.25, tEdge + 1.6, 'inOutCubic'); const kIn = pg(t, 241.74, 242.9);
    const kMet = pg(t, tMad - 0.2, tMad + 1.0, 'inOutCubic'); const kFade = pg(t, 261.0, 262.0);
    const metT = { Madrid: tMad - 0.2, Barcelona: tBcn - 0.25, Valencia: tVlc - 0.2, Seville: tSev - 0.2, Bilbao: tBil - 0.2 };
    if (kFade < 1) { ctx.save(); ctx.globalAlpha = 1 - kFade; ctx.fillStyle = P.ink;
      for (const d of this.dots) {
        const di = clamp(kIn * 1.6 - d.j * 0.6); if (di <= 0) continue; const e = clamp((kDist - d.j * 0.3) / 0.7); let x = lerp(d.sx, d.tx, E.inOutCubic(e)), y = lerp(d.sy, d.ty, E.inOutCubic(e)); let r = 3.1;
        if (d.mc) { const km = pg(t, metT[d.mc] + d.j * 0.3, metT[d.mc] + 0.6 + d.j * 0.4, 'inOutCubic'); x = lerp(x, d.mx, km); y = lerp(y, d.my, km); r = lerp(r, 3.1, km); }
        let sp = toS(x, y);
        if (kChart > 0) { const kc = clamp((kChart - d.j * 0.25) / 0.75); const ec = E.inOutCubic(kc); sp = [lerp(sp[0], d.cx, ec), lerp(sp[1], d.cy, ec) - Math.sin(kc * Math.PI) * 80 * d.j]; r = lerp(r, 5.6, ec); ctx.fillStyle = MG.col.mix(P.ink, d.L ? P.rojoDeep : P.ink2, ec); }
        else ctx.fillStyle = d.mc && t > metT[d.mc] ? '#5a1414' : P.ink;
        ctx.globalAlpha = (1 - kFade) * di * (d.mc || kChart > 0 ? 1 : lerp(1, 0.55, kMet * (kTilt))); ctx.beginPath(); ctx.arc(sp[0], sp[1], r * (kTilt > 0 ? lerp(1, 1.15, kTilt) : 1), 0, MG.TAU); ctx.fill();
      } ctx.restore(); }
    // ---- chart furniture (land strip + labels)
    if (kChart > 0.02) { const C = this.chart; const kc = kChart; ctx.save(); ctx.globalAlpha = kc;
      const strip = (x, w, col) => { ctx.fillStyle = MG.col.shade(col, 0.35); ctx.fillRect(x, C.base, w, 26); ctx.fillStyle = col; ctx.fillRect(x, C.base - 2, w, 14); };
      strip(C.X0, C.wL, P.sol); strip(C.X0 + C.wL + 4, C.LW - C.wL - 4, '#E3D3B0'); ctx.restore();
      const kn = pg(t, t85 - 0.1, t85 + 0.4) * kc, kl = pg(t, t30 - 0.1, t30 + 0.4) * kc;
      MG.text.draw(ctx, '85%', C.X0 + C.wL / 2, C.base - C.hL - 36, { font: F.cond, weight: 900, size: 150, color: P.rojoDeep, align: 'center', alpha: kn });
      S2.kicker(ctx, 'of Spaniards', C.X0 + C.wL / 2, C.base - C.hL - 196, t, t85 + 0.6, { align: 'center', size: 26, color: P.ink, alpha: kn });
      MG.text.draw(ctx, '30%', C.X0 + C.wL / 2, C.base + 120, { font: F.cond, weight: 900, size: 92, color: P.ink, align: 'center', alpha: kl }); S2.kicker(ctx, 'of the land', C.X0 + C.wL / 2, C.base + 164, t, tLand - 0.2, { align: 'center', size: 24, alpha: kl });
      MG.text.draw(ctx, '15%', C.X0 + C.wL + (C.LW - C.wL) / 2, C.base - C.hR - 30, { font: F.cond, weight: 900, size: 70, color: P.ink2, align: 'center', alpha: kn * 0.85 });
      MG.text.draw(ctx, '70%', C.X0 + C.wL + (C.LW - C.wL) / 2, C.base + 120, { font: F.cond, weight: 900, size: 92, color: P.ink2, align: 'center', alpha: kl * 0.85 }); }
    // ---- metro labels on the tilted map
    for (const m of this.metro) { const t0 = metT[m.c]; const k = pg(t, t0 + 0.5, t0 + 0.9) * (1 - kFade); if (k <= 0) continue; const sp = toS(m.p[0], m.p[1] - m.r * 0.62 - 14); const big = m.mil >= 5;
      MG.text.draw(ctx, m.c.toUpperCase(), sp[0], sp[1] - (big ? 78 : 10), { font: F.grotesk, weight: 800, size: big ? 32 : 26, tracking: 0.14, color: P.ink, align: 'center', stroke: 'rgba(250,244,232,0.9)', strokeW: 7, alpha: k });
      if (big) { const tn = m.c === 'Madrid' ? t7 : t5; const kk = pg(t, tn - 0.1, tn + 0.3) * (1 - kFade); MG.text.draw(ctx, `${m.mil | 0} MILLION`, sp[0], sp[1] - 4, { font: F.cond, weight: 900, size: 84, color: P.rojoDeep, align: 'center', stroke: 'rgba(250,244,232,0.9)', strokeW: 8, alpha: kk }); } }
    // ---- choropleth labels, legend, frost
    if (kChoro > 0) { const kf = pg(t, tSib - 0.4, tSib + 1.0);
      for (const c of this.cold) { const sp = toS(c.c[0], c.c[1]); if (kf > 0) { ctx.save(); const pth = new Path2D(); const m = new DOMMatrix(); pth.addPath(c.p2); ctx.beginPath(); const qp = (x, y) => toS(x, y); // frost tint inside the province (approximate via its projected bbox clip)
          ctx.globalAlpha = 0.55 * kf; ctx.fillStyle = '#DCEAF4'; S2.polyQ(ctx, c.f, this.pr, toS); ctx.fill(); ctx.globalAlpha = 0.8 * kf; ctx.clip(); MG.fx.particles(ctx, { n: 26, seed: 7 + c.f.id * 1, t, area: [sp[0] - 120, sp[1] - 140, 240, 200], vel: [6, 40], life: 3, size: [2, 4], color: '#ffffff', alpha: 0.9, shape: 'dot' }); ctx.restore(); } }
      const lab = (id, dx, dy) => { const c = this.provs.find((f) => f.id === id); const sp = toS(...this.pr(d3.geoCentroid(c))); const k = pg(t, tIn + 0.6 + (id === '44' ? 0.25 : id === '16' ? 0.5 : 0), tIn + 1.1 + (id === '44' ? 0.25 : id === '16' ? 0.5 : 0)); if (k <= 0) return; MG.text.draw(ctx, c.properties.short.toUpperCase(), sp[0] + dx, sp[1] + dy, { font: F.grotesk, weight: 800, size: 30, tracking: 0.12, color: P.ink, align: 'center', stroke: 'rgba(250,244,232,0.92)', strokeW: 7, alpha: k }); MG.text.draw(ctx, `${MG.geo.density[id]}/km²`, sp[0] + dx, sp[1] + dy + 34, { font: F.mono, weight: 700, size: 22, color: P.azulejoDeep, align: 'center', stroke: 'rgba(250,244,232,0.92)', strokeW: 6, alpha: k }); };
      lab('42', 0, -6); lab('44', 0, 0); lab('16', 0, 8);
      // legend (4 steps)
      const kl = pg(t, 262.4, 263.0); if (kl > 0) { ctx.save(); ctx.globalAlpha = kl; const lx = 120, ly = 760; MG.text.draw(ctx, 'PEOPLE PER KM²', lx, ly - 18, { font: F.mono, weight: 700, size: 20, tracking: 0.14, color: P.ink }); [['< 15', 10], ['15–50', 30], ['50–150', 100], ['150 +', 600]].forEach(([lab2, v], i) => { ctx.fillStyle = this.ramp(v); ctx.fillRect(lx, ly + i * 44, 56, 32); ctx.strokeStyle = 'rgba(30,26,29,0.4)'; ctx.strokeRect(lx, ly + i * 44, 56, 32); MG.text.draw(ctx, lab2, lx + 72, ly + i * 44 + 24, { font: F.mono, weight: 500, size: 22, color: P.ink }); }); ctx.restore(); }
      if (kf > 0) MG.text.reveal(ctx, '≈ Siberia', 1290, 230, t, tSib - 0.15, { font: F.serif, italic: true, size: 96, color: '#24496E', style: 'blur', by: 'word' });
      S2.kicker(ctx, 'inland, on the meseta', 1296, 140, t, tIn - 0.1, { size: 26, color: P.rojoDeep });
    }
  },
  post: (t) => ({ grade: 'warm', vignette: 0.3, temp: -0.05 * pg(t, 266.3, 267.4) }) });
/** fill path of a geo feature mapped through a screen transform (for warped maps) */
S2.polyQ = (ctx, f, pr, toS) => { const g = f.geometry; const polys = g.type === 'Polygon' ? [g.coordinates] : g.coordinates; ctx.beginPath(); for (const pl of polys) for (const ring of pl) { ring.forEach((c, i) => { const p = pr(c); const s2 = toS(p[0], p[1]); i ? ctx.lineTo(s2[0], s2[1]) : ctx.moveTo(s2[0], s2[1]); }); ctx.closePath(); } };

// ---- village people: seated retirees (5 variants) ----
S2.OLD = [
  { body: '#5E4A3A', legs: '#3A3236', skin: '#E0AE8C', hat: 'beret', hair: '#D8D4CC', cane: true, mood: 'flat' },
  { body: '#221C20', legs: '#221C20', skin: '#E6BC9C', hat: 'scarf', hair: '#E8E4DC', skirt: true, mood: 'smile' },
  { body: '#6F6248', legs: '#4A443C', skin: '#D9A684', hat: 'cap', hair: '#BDB8B0', paper: true, mood: 'flat' },
  { body: '#8A4A3E', legs: '#2A2428', skin: '#E8C2A2', hat: 'bun', hair: '#EEEAE4', skirt: true, knit: true, mood: 'smile' },
  { body: '#3E4A5A', legs: '#3A3436', skin: '#DCA88A', hat: 'bald', hair: '#E0DCD4', cane: true, mood: 'smirk' },
];
S2.oldie = (ctx, x, y, s, t, v, o = {}) => { const C = S2.OLD[v % 5]; const tb = MG.kit.twos(t + v * 0.13); const INK = '#1e1618'; const L = [-0.6, -0.8]; const lk = clamp(o.look || 0, -1, 1);
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); MG.fx.contact(ctx, 10, 2, 70, 12, 0.35);
  // chair (back first)
  ctx.strokeStyle = '#5a3a22'; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-40, -92); ctx.lineTo(-36, -206); ctx.moveTo(40, -92); ctx.lineTo(36, -206); ctx.stroke(); ctx.lineWidth = 6; for (const yy of [-200, -176, -152]) { ctx.beginPath(); ctx.moveTo(-36, yy); ctx.lineTo(36, yy); ctx.stroke(); }
  ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(-40, -90); ctx.lineTo(-42, 0); ctx.moveTo(40, -90); ctx.lineTo(44, 0); ctx.stroke();
  const br = Math.sin(t * 1.4 + v) * 1.5;
  // body
  const torso = MG.path.smooth([[-42, -196 - br], [42, -196 - br], [52, -150], [50, -96], [-50, -96], [-52, -150]], true);
  MG.fx.volume(ctx, torso, [-52, -196, 104, 100], { color: C.body, shade: 0.55, hi: 0.35, cel: true, light: L, outline: INK, outlineW: 2.6 });
  if (C.skirt) { const sk = MG.path.smooth([[-52, -100], [52, -100], [58, -40], [-58, -40]], true); MG.fx.volume(ctx, sk, [-58, -100, 116, 60], { color: C.legs, shade: 0.5, cel: true, light: L, outline: INK, outlineW: 2.4 }); ctx.fillStyle = '#5a4a48'; ctx.fillRect(-30, -42, 14, 38); ctx.fillRect(16, -42, 14, 38); }
  else { MG.fx.ink(ctx, [[-24, -96], [-28, -60], [-24, -6]], { width: 24, color: C.legs, taper: [0, 0] }); MG.fx.ink(ctx, [[24, -96], [28, -60], [24, -6]], { width: 24, color: C.legs, taper: [0, 0] }); }
  ctx.fillStyle = '#16100e'; ctx.beginPath(); ctx.ellipse(-26, -2, 16, 7, 0, 0, MG.TAU); ctx.ellipse(28, -2, 16, 7, 0, 0, MG.TAU); ctx.fill();
  // arms + hands on lap / cane / newspaper / knitting
  MG.fx.ink(ctx, [[-44, -186], [-56, -140], [-26, -108]], { width: 20, color: MG.col.shade(C.body, 0.15), taper: [0, 0.2] }); MG.fx.ink(ctx, [[44, -186], [56, -140], [26, -108]], { width: 20, color: MG.col.shade(C.body, 0.15), taper: [0, 0.2] });
  if (C.cane) { ctx.strokeStyle = '#4a2a16'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(30, -116); ctx.lineTo(54, 0); ctx.stroke(); ctx.beginPath(); ctx.arc(24, -118, 9, Math.PI, 0); ctx.stroke(); }
  if (C.paper) { ctx.save(); ctx.translate(0, -126); ctx.rotate(-0.08); ctx.fillStyle = '#EDE6D6'; ctx.fillRect(-46, -30, 92, 52); ctx.strokeStyle = 'rgba(40,30,30,0.6)'; ctx.lineWidth = 1.2; for (let k = 0; k < 6; k++) { ctx.beginPath(); ctx.moveTo(-40, -22 + k * 8); ctx.lineTo(40, -22 + k * 8); ctx.stroke(); } ctx.restore(); }
  if (C.knit) { const kk = Math.sin(tb * 8) * 3; ctx.strokeStyle = '#c8b090'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-30, -126 + kk); ctx.lineTo(10, -100); ctx.moveTo(30, -126 - kk); ctx.lineTo(-10, -100); ctx.stroke(); MG.fx.volume(ctx, MG.path.blob(0, -104, 16, { seed: 3, irr: 0.2 }), [-16, -120, 32, 32], { color: '#C24A3A', shade: 0.4, cel: true, outline: INK, outlineW: 1.6 }); }
  for (const hx of [-24, 24]) MG.fx.volume(ctx, MG.path.ellipse(hx, -108, 10, 8), [hx - 10, -116, 20, 16], { color: C.skin, shade: 0.4, cel: true, outline: INK, outlineW: 1.8 });
  // head
  const hx = lk * 6; ctx.save(); ctx.translate(hx * 0.4, -232 - br + (C.paper ? 6 : 0)); ctx.rotate(lk * 0.08 + (C.paper ? 0.15 : 0));
  const head = MG.path.smooth([[-26, -30], [0, -38], [26, -30], [32, 0], [26, 26], [0, 36], [-26, 26], [-32, 0]], true); MG.fx.volume(ctx, head, [-32, -38, 64, 74], { color: C.skin, shade: 0.5, hi: 0.35, cel: true, light: L, outline: INK, outlineW: 2.4 });
  for (const ex of [-32, 32]) MG.fx.volume(ctx, MG.path.ellipse(ex, 2, 6, 10), [ex - 6, -8, 12, 20], { color: C.skin, shade: 0.5, cel: true, outline: INK, outlineW: 1.8 });
  const bl = MG.kit.blink(t, v + 30); const fx = lk * 9;
  for (const ex of [-11, 11]) { if (bl > 0.5 || C.paper) MG.fx.ink(ctx, [[ex - 5 + fx, -2], [ex + fx, 0], [ex + 5 + fx, -2]], { width: 2.4, color: INK }); else { ctx.fillStyle = '#1a1214'; ctx.beginPath(); ctx.arc(ex + fx, -2, 3, 0, MG.TAU); ctx.fill(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(ex + fx - 1, -3, 1, 0, MG.TAU); ctx.fill(); } }
  MG.fx.ink(ctx, [[-17 + fx, -12], [-6 + fx, -14]], { width: 3, color: C.hair }); MG.fx.ink(ctx, [[6 + fx, -14], [17 + fx, -12]], { width: 3, color: C.hair });
  MG.fx.volume(ctx, MG.path.ellipse(fx * 1.2, 8, 7, 9), [fx - 7, -1, 14, 18], { color: MG.col.shade(C.skin, 0.12), shade: 0.5, cel: true, outline: INK, outlineW: 1.6 });
  MG.kit.mouth(ctx, fx, 22, { w: 18, mood: C.mood, color: INK }); ctx.strokeStyle = 'rgba(120,60,50,0.35)'; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(-22 + fx, 6); ctx.lineTo(-18 + fx, 16); ctx.moveTo(22 + fx, 6); ctx.lineTo(18 + fx, 16); ctx.stroke();
  if (C.hat === 'beret') { const bp = MG.path.smooth([[-34, -26], [-10, -44], [26, -40], [38, -24], [0, -20]], true); MG.fx.volume(ctx, bp, [-34, -44, 72, 24], { color: '#1e1a22', shade: 0.5, hi: 0.3, cel: true, outline: INK, outlineW: 2 }); }
  else if (C.hat === 'cap') { const cp = MG.path.smooth([[-30, -22], [-24, -40], [24, -42], [34, -22], [48, -16], [0, -16]], true); MG.fx.volume(ctx, cp, [-30, -42, 78, 26], { color: '#6a5a48', shade: 0.5, cel: true, outline: INK, outlineW: 2 }); }
  else if (C.hat === 'scarf') { const sc = MG.path.smooth([[-36, 10], [-38, -30], [0, -46], [38, -30], [36, 10], [28, -18], [0, -30], [-28, -18]], true); MG.fx.volume(ctx, sc, [-38, -46, 76, 56], { color: '#2a2428', shade: 0.5, hi: 0.3, cel: true, outline: INK, outlineW: 2 }); }
  else if (C.hat === 'bun') { MG.fx.volume(ctx, MG.path.smooth([[-30, -12], [-24, -36], [24, -36], [30, -12], [10, -28], [-10, -28]], true), [-30, -36, 60, 24], { color: C.hair, shade: 0.4, cel: true, outline: INK, outlineW: 2 }); MG.fx.volume(ctx, MG.path.circle(0, -44, 12), [-12, -56, 24, 24], { color: C.hair, shade: 0.4, cel: true, outline: INK, outlineW: 2 }); }
  else { MG.fx.ink(ctx, [[-30, -6], [-28, -20]], { width: 7, color: C.hair }); MG.fx.ink(ctx, [[30, -6], [28, -20]], { width: 7, color: C.hair }); }
  ctx.restore(); ctx.restore(); };

// C7–C8 · 267.82–275.56 · "Empty Spain": one tracking shot — road sign → ten retirees → shuttered school → one bus a week
S2.VW = 4300; S2.VY = 400;
SC.push({ id: 's02_village', start: 267.82, end: 275.56, transIn: { type: 'zoom', dur: 0.6, x: 1180, y: 330, amount: 2.4, from: 0.7 },
  init() {
    this.sky = MG.cache('s02:vilsky', W, H, (x, w, h) => { MG.fx.vgrad(x, [[0, '#C9D6DE'], [0.5, '#EDE3CE'], [1, '#D9C49A']]); MG.tex.over(x, 'grain', { alpha: 0.05, blend: 'overlay' }); });
    this.hills = MG.cache('s02:vilhills', W * 1.6, 400, (x, w, h) => { x.fillStyle = '#B9B39A'; x.beginPath(); x.moveTo(0, h); for (let xx = 0; xx <= w; xx += 10) x.lineTo(xx, 220 - Math.abs(MG.fbm(xx * 0.0016, 5, 3)) * 140); x.lineTo(w, h); x.closePath(); x.fill(); x.fillStyle = '#CDBF96'; x.beginPath(); x.moveTo(0, h); for (let xx = 0; xx <= w; xx += 10) x.lineTo(xx, 300 - Math.abs(MG.fbm(xx * 0.0024, 9, 3)) * 70); x.lineTo(w, h); x.closePath(); x.fill(); });
    this.strip = MG.cache('s02:vilstrip', S2.VW, 680, (x, w, h) => { const Y = (y) => y - S2.VY;
      // fields + the street
      x.fillStyle = '#D2B884'; x.fillRect(0, Y(700), w, h); x.strokeStyle = 'rgba(120,90,50,0.18)'; x.lineWidth = 2; for (let i = 0; i < 12; i++) { x.beginPath(); x.moveTo(0, Y(712 + i * 30)); x.lineTo(w, Y(708 + i * 30)); x.stroke(); }
      x.fillStyle = '#B7A88E'; x.fillRect(0, Y(840), w, 70); x.fillStyle = 'rgba(255,250,235,0.35)'; for (let xx = 0; xx < w; xx += 140) x.fillRect(xx, Y(872), 70, 5);
      // stone houses with tiled roofs
      const R = MG.rng(77); const stone = (x0, w0, h0, roof) => { const yb = Y(840); x.fillStyle = '#C9B596'; x.fillRect(x0, yb - h0, w0, h0); x.strokeStyle = 'rgba(80,60,40,0.25)'; x.lineWidth = 1.5; for (let yy = yb - h0 + 14; yy < yb; yy += 18) { x.beginPath(); x.moveTo(x0, yy); x.lineTo(x0 + w0, yy); x.stroke(); for (let xx = x0 + ((yy / 18) % 2) * 20; xx < x0 + w0; xx += 40) { x.beginPath(); x.moveTo(xx, yy); x.lineTo(xx, yy + 18); x.stroke(); } }
        x.fillStyle = roof; x.beginPath(); x.moveTo(x0 - 14, yb - h0); x.lineTo(x0 + w0 * 0.5, yb - h0 - 70); x.lineTo(x0 + w0 + 14, yb - h0); x.closePath(); x.fill(); x.strokeStyle = 'rgba(60,20,10,0.35)'; for (let k = 1; k < 8; k++) { x.beginPath(); x.moveTo(x0 - 14 + k * (w0 + 28) / 8, yb - h0); x.lineTo(x0 + w0 * 0.5, yb - h0 - 70); x.stroke(); }
        x.fillStyle = '#5A3A24'; x.fillRect(x0 + w0 * 0.42, yb - 120, 46, 120); x.fillStyle = '#2E2420'; for (const wx of [x0 + 26, x0 + w0 - 70]) { x.fillRect(wx, yb - h0 + 50, 44, 50); x.strokeStyle = '#1a1210'; x.lineWidth = 3; for (let k = 1; k < 4; k++) { x.beginPath(); x.moveTo(wx + k * 11, yb - h0 + 50); x.lineTo(wx + k * 11, yb - h0 + 100); x.stroke(); } }
        MG.tex.over(x, 'blotch', { alpha: 0.0 }); };
      stone(1480, 330, 300, '#A8583A'); stone(1830, 290, 270, '#9A4E34'); stone(2140, 340, 310, '#B0603E'); stone(2500, 280, 260, '#9E5236');
      // school (two storeys, carved lintel)
      const sx = 2860, sw = 460, sh = 420; x.fillStyle = '#D8C6A2'; x.fillRect(sx, Y(840) - sh, sw, sh); x.fillStyle = '#A8583A'; x.beginPath(); x.moveTo(sx - 20, Y(840) - sh); x.lineTo(sx + sw / 2, Y(840) - sh - 90); x.lineTo(sx + sw + 20, Y(840) - sh); x.closePath(); x.fill();
      x.fillStyle = '#B9A47E'; x.fillRect(sx + sw / 2 - 110, Y(840) - 230, 220, 46); MG.text.draw(x, 'ESCUELA', sx + sw / 2, Y(840) - 196, { font: F.roman, weight: 700, size: 34, color: '#4a3622', align: 'center', tracking: 0.22 });
      x.fillStyle = '#4A3424'; x.fillRect(sx + sw / 2 - 40, Y(840) - 170, 80, 170);
      // bus stop pole + plate (text drawn live)
      x.fillStyle = '#6a6e74'; x.fillRect(3600, Y(840) - 330, 10, 330);
      // road sign post
      x.fillStyle = '#7a7e84'; x.fillRect(1050, Y(840) - 240, 9, 250); x.fillRect(1190, Y(840) - 240, 9, 250);
      x.save(); x.translate(1124, Y(840) - 300); x.fillStyle = '#F6F2EA'; x.fillRect(-150, -60, 300, 120); x.strokeStyle = '#B8322A'; x.lineWidth = 12; x.strokeRect(-140, -50, 280, 100); MG.text.draw(x, 'ESPAÑA VACÍA', 0, 14, { font: F.grotesk, weight: 800, size: 40, color: '#1E1A1D', align: 'center', tracking: 0.04 }); x.restore();
      // dry shrubs
      for (let i = 0; i < 40; i++) { const px = R() * w, py = Y(760 + R() * 70); const r = 8 + R() * 10; MG.fx.volume(x, MG.path.blob(px, py, r, { seed: i, irr: 0.4, sy: 0.6 }), [px - r, py - r, r * 2, r * 2], { color: '#8A8456', shade: 0.5, cel: true }); }
      MG.tex.over(x, 'grain', { alpha: 0.12 });
    });
    this.oldX = [1560, 1660, 1790, 1890, 2010, 2110, 2240, 2340, 2470, 2580];
  },
  draw(ctx, t) {
    const tCall = TW('call', 267.98), tEmp = TW('“Empty', 268.54), tVil = TW('Villages', 270.06), tTen = TW('ten', 270.78), tSh = TW('Shuttered', 272.62), tBus = TW('bus', 274.38);
    const cx = MG.keys(t, [[267.82, 760], [269.6, 1000, 'inOutSine'], [270.3, 1500, 'inOutCubic'], [271.9, 2160, 'inOutSine'], [272.5, 2980, 'inOutCubic'], [273.9, 3200, 'inOutSine'], [274.4, 3700, 'inOutCubic'], [275.8, 3780, 'inOutSine']]);
    const hh = MG.cam.handheld(t, 2.5, 23); ctx.save(); ctx.translate(hh.dx, hh.dy);
    ctx.drawImage(this.sky, 0, 0); ctx.drawImage(this.hills, -cx * 0.25, 340);
    MG.kit.sun(ctx, 1500 - cx * 0.05, 210, 60, t, { rays: 0.15, corona: 0.5 });
    const ox = 960 - cx; ctx.drawImage(this.strip, ox, S2.VY);
    // "Empty Spain" title floats over the empty plain (parallax 0.6)
    MG.text.reveal(ctx, 'Empty Spain', 960 - (cx - 900) * 0.6, 300, t, tEmp - 0.1, { font: F.display, weight: 800, size: 140, color: P.ink, align: 'center', style: 'track', by: 'char', stagger: 0.03, alpha: 1 - pg(t, 270.0, 270.6) });
    S2.kicker(ctx, 'they call it', 960 - (cx - 900) * 0.6, 160, t, tCall - 0.1, { align: 'center', size: 26, color: P.rojoDeep, alpha: 1 - pg(t, 270.0, 270.6) });
    // ten retirees in front of their houses, heads following the camera
    for (let i = 0; i < 10; i++) { const wx = this.oldX[i]; const sx = ox + wx; if (sx < -150 || sx > W + 150) continue; const k = pg(t, tTen - 0.5 + i * 0.07, tTen - 0.1 + i * 0.07); if (k <= 0) continue;
      ctx.save(); ctx.globalAlpha *= k; S2.oldie(ctx, sx, 855, 1.0, t, i, { look: clamp((960 - sx) / 600) * -1 }); ctx.restore(); }
    const k10 = pg(t, tTen, tTen + 0.4) * (1 - pg(t, 272.2, 272.6)); if (k10 > 0) { MG.text.draw(ctx, '10', 960, 230, { font: F.cond, weight: 900, size: 150, color: P.rojoDeep, align: 'center', alpha: k10 }); S2.kicker(ctx, 'retirees left', 960, 280, t, tTen + 0.1, { align: 'center', size: 26, alpha: k10 }); }
    // the school's green shutters slam shut
    const sx0 = ox + 2860; for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) { const wx = sx0 + 40 + c * 105, wy = 840 - 400 + 40 + r * 120; if (r === 1 && (c === 1 || c === 2)) continue; const k = pg(t, tSh - 0.15 + (r * 4 + c) * 0.05, tSh + 0.05 + (r * 4 + c) * 0.05, 'inCubic'); ctx.fillStyle = '#2a2220'; ctx.fillRect(wx, wy, 70, 84);
      for (const side of [0, 1]) { const ang = (1 - k) * 1.35; const w2 = 35 * Math.cos(ang); ctx.save(); ctx.translate(side ? wx + 70 : wx, wy); ctx.scale(side ? -1 : 1, 1); ctx.fillStyle = k > 0.98 ? '#3F6A4A' : '#4E7A5A'; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(w2, -Math.sin(ang) * 6); ctx.lineTo(w2, 84 + Math.sin(ang) * 6); ctx.lineTo(0, 84); ctx.closePath(); ctx.fill(); ctx.strokeStyle = 'rgba(20,30,20,0.6)'; ctx.lineWidth = 2; ctx.stroke(); for (let j = 1; j < 7; j++) { ctx.beginPath(); ctx.moveTo(2, j * 12); ctx.lineTo(w2 - 2, j * 12); ctx.stroke(); } ctx.restore(); } }
    // bus-stop timetable: one bus a week
    const bx = ox + 3605; if (bx > -300 && bx < W + 300) { const kb = pg(t, tBus - 0.5, tBus - 0.1); ctx.save(); MG.fx.volume(ctx, MG.path.circle(bx, 480, 44), [bx - 44, 436, 88, 88], { color: '#1F4E8C', shade: 0.4, hi: 0.5, cel: true, outline: '#0e2440', outlineW: 3 }); MG.text.draw(ctx, 'BUS', bx, 494, { font: F.grotesk, weight: 800, size: 30, color: '#F6F2EA', align: 'center' });
      const px = bx + 30, py = 560; ctx.fillStyle = '#F4EFE4'; ctx.fillRect(px, py, 250, 250); ctx.strokeStyle = '#1E1A1D'; ctx.lineWidth = 3; ctx.strokeRect(px, py, 250, 250); MG.text.draw(ctx, 'TIMETABLE', px + 125, py + 34, { font: F.mono, weight: 700, size: 20, color: P.ink, align: 'center', tracking: 0.12 });
      ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].forEach((d, i) => { const yy = py + 66 + i * 26; MG.text.draw(ctx, d, px + 24, yy, { font: F.mono, weight: 700, size: 19, color: P.ink }); MG.text.draw(ctx, i === 0 ? '09:15' : '—', px + 226, yy, { font: F.mono, weight: 700, size: 19, color: i === 0 ? P.rojo : 'rgba(30,26,29,0.45)', align: 'right', alpha: i === 0 ? 1 : kb }); });
      if (kb > 0) { ctx.strokeStyle = P.rojo; ctx.lineWidth = 3.5; ctx.beginPath(); ctx.ellipse(px + 125, py + 60, 118 * kb, 18, 0, 0, MG.TAU * kb); ctx.stroke(); } ctx.restore(); }
    // tumbleweed of dust down the street
    MG.fx.smoke(ctx, ox + 3300 + (t - 272) * 90, 860, t, { n: 6, seed: 41, spread: 60, rise: 6, r: 30, alpha: 0.25, color: '#E0CCA0', wind: 30 });
    ctx.restore();
  },
  post: { grade: 'neutral', vignette: 0.34, sat: 0.86, temp: -0.02 } });

// ---- hourglass (local origin = centre of the neck). top = fraction of sand in the upper bulb ----
S2.hourglass = (ctx, x, y, s, rot, top, t, o = {}) => { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s); const L = [-0.6, -0.8]; const INK = '#1e1618';
  const bulb = (dir) => { const p = new Path2D(); p.moveTo(-10, 0); p.bezierCurveTo(-30, dir * 30, -150, dir * 90, -150, dir * 190); p.bezierCurveTo(-150, dir * 250, -110, dir * 270, 0, dir * 272); p.bezierCurveTo(110, dir * 270, 150, dir * 250, 150, dir * 190); p.bezierCurveTo(150, dir * 90, 30, dir * 30, 10, 0); p.closePath(); return p; };
  const U = bulb(-1), D = bulb(1);
  // sand (people): upper fill from the neck up, lower mound from the base
  const sand = '#C8904A';
  const fillUp = (frac) => { if (frac <= 0.001) return; ctx.save(); ctx.clip(U); const h = 272 * Math.pow(frac, 0.6); ctx.fillStyle = sand; ctx.beginPath(); ctx.moveTo(-160, 0); ctx.lineTo(-160, -h); ctx.quadraticCurveTo(0, -h + 26, 160, -h); ctx.lineTo(160, 0); ctx.closePath(); ctx.fill(); MG.tex.over(ctx, 'grain', { alpha: 0.35 }); ctx.restore(); };
  const fillDn = (frac) => { if (frac <= 0.001) return; ctx.save(); ctx.clip(D); const h = 272 * Math.pow(frac, 0.6); ctx.fillStyle = sand; ctx.beginPath(); ctx.moveTo(-160, 272); ctx.lineTo(-160, 272 - h * 0.7); ctx.quadraticCurveTo(0, 272 - h * 1.35, 160, 272 - h * 0.7); ctx.lineTo(160, 272); ctx.closePath(); ctx.fill(); MG.tex.over(ctx, 'grain', { alpha: 0.35 }); ctx.restore(); };
  ctx.fillStyle = 'rgba(255,252,240,0.25)'; ctx.fill(U); ctx.fill(D);
  fillUp(top * (o.total ?? 1)); fillDn((1 - top) * (o.total ?? 1));
  if (o.flow) { ctx.strokeStyle = sand; ctx.lineWidth = 4; ctx.setLineDash([6, 4]); ctx.lineDashOffset = -t * 120; ctx.beginPath(); ctx.moveTo(0, -4); ctx.lineTo(0, 272 - 272 * Math.pow(1 - top, 0.6) * 1.0); ctx.stroke(); ctx.setLineDash([]); }
  for (const B of [U, D]) { ctx.save(); ctx.clip(B); ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.beginPath(); ctx.ellipse(-90, B === U ? -170 : 170, 18, 70, 0.15, 0, MG.TAU); ctx.fill(); ctx.restore(); ctx.strokeStyle = 'rgba(30,24,30,0.7)'; ctx.lineWidth = 4; ctx.stroke(B); }
  // wooden frame: discs + turned posts
  for (const sy of [-1, 1]) { const disc = MG.path.rr(-190, sy > 0 ? 272 : -308, 380, 36, 12); MG.fx.volume(ctx, disc, [-190, sy > 0 ? 272 : -308, 380, 36], { color: '#7A4A2A', shade: 0.5, hi: 0.5, hiColor: '#D8A070', cel: true, light: L, outline: INK, outlineW: 3 }); }
  for (const px of [-172, 172]) { const post = MG.path.smooth([[px - 9, -272], [px - 13, -150], [px - 7, 0], [px - 13, 150], [px - 9, 272], [px + 9, 272], [px + 13, 150], [px + 7, 0], [px + 13, -150], [px + 9, -272]], true); MG.fx.volume(ctx, post, [px - 13, -272, 26, 544], { color: '#8A5632', shade: 0.5, hi: 0.5, cel: true, light: L, outline: INK, outlineW: 2.5 }); }
  ctx.restore(); };

// C9–C10 · 275.56–285.16 · the interior lost half its people (hourglass on a village sill) → match cut: same hourglass on a ministry desk
SC.push({ id: 's02_hourglass', start: 275.56, end: 285.16, transIn: { type: 'blur', dur: 0.6, amount: 24 },
  init() { this.vil = MG.blurred(MG.cache('s02:vilsnap', W, H, (x) => { x.drawImage(MG.cache('s02:vilsky', W, H, () => {}), 0, 0); x.drawImage(MG.cache('s02:vilhills', W * 1.6, 400, () => {}), -3500 * 0.25, 340); x.drawImage(MG.cache('s02:vilstrip', S2.VW, 680, () => {}), 960 - 2300, S2.VY); }), 9);
    this.office = MG.blurred(MG.cache('s02:office', W, H, (x, w, h) => { MG.fx.vgrad(x, [[0, '#4A3426'], [1, '#2A1C16']]); for (let i = 0; i < 12; i++) { x.fillStyle = i % 2 ? 'rgba(0,0,0,0.12)' : 'rgba(255,220,180,0.05)'; x.fillRect(i * 170, 0, 170, 700); } x.strokeStyle = 'rgba(0,0,0,0.3)'; x.lineWidth = 6; x.strokeRect(80, 120, 520, 440); x.strokeRect(1320, 120, 520, 440);
      // Spanish flag (red-yellow-red) on a stand, a lamp glow
      x.fillStyle = '#8a8a8a'; x.fillRect(1540, 160, 8, 560); x.save(); x.translate(1548, 170); for (let i = 0; i < 3; i++) { x.fillStyle = i === 1 ? '#F1BF00' : '#AA151B'; x.beginPath(); x.moveTo(0, i === 0 ? 0 : i === 1 ? 70 : 210); for (let k = 0; k <= 10; k++) x.lineTo(k * 26, (i === 0 ? 0 : i === 1 ? 70 : 210) + Math.sin(k * 0.8) * 8); for (let k = 10; k >= 0; k--) x.lineTo(k * 26, (i === 0 ? 70 : i === 1 ? 210 : 280) + Math.sin(k * 0.8) * 8); x.closePath(); x.fill(); } x.restore();
      MG.fx.glow(x, 360, 300, 500, '#ffcf8a', 0.25); x.fillStyle = '#3A2418'; x.fillRect(0, 760, w, h - 760); x.fillStyle = '#5A3A26'; x.fillRect(0, 760, w, 14); }), 8);
  },
  draw(ctx, t) {
    const t50 = TW('50', 276.36), tInt = TW('interior', 277.84), tHalf = TW('half', 278.84), tGov = TW('government', 280.96), tMin = TW('ministry', 282.28), tDo = TW('doing', 283.52);
    const office = t >= 280.68; const z = office ? lerp(1.18, 1.0, pg(t, 280.68, 282.4, 'inOutCubic')) : 1 + 0.04 * lin(t, 275.56, 280.7);
    ctx.drawImage(office ? this.office : this.vil, -10, -10, W + 20, H + 20);
    if (!office) { ctx.save(); ctx.globalAlpha = 0.35; ctx.fillStyle = '#E6D8BE'; ctx.fillRect(0, 0, W, H); ctx.restore(); }
    ctx.save(); ctx.translate(820, 560); ctx.scale(z, z); ctx.translate(-820, -560);
    // sill / desk surface
    if (!office) { ctx.fillStyle = '#B9A88C'; ctx.fillRect(0, 900, W, 200); ctx.fillStyle = '#9A8A70'; ctx.fillRect(0, 900, W, 16); MG.tex.over(ctx, 'grain', { alpha: 0.2 }); }
    else { ctx.fillStyle = '#4A2C1A'; ctx.fillRect(-200, 900, W + 400, 300); ctx.fillStyle = '#6A4028'; ctx.fillRect(-200, 900, W + 400, 12);
      // nameplate (accurate full title, the demographic part emphasised)
      const kp = pg(t, tMin - 0.3, tMin + 0.2); ctx.save(); ctx.globalAlpha = kp; ctx.translate(1340, 960); ctx.fillStyle = '#1E1A1D'; ctx.beginPath(); ctx.moveTo(-250, 0); ctx.lineTo(250, 0); ctx.lineTo(270, 80); ctx.lineTo(-270, 80); ctx.closePath(); ctx.fill(); ctx.fillStyle = P.gold; ctx.fillRect(-236, 6, 472, 58);
        MG.text.draw(ctx, 'MINISTERIO PARA LA TRANSICIÓN ECOLÓGICA', 0, 28, { font: F.roman, weight: 700, size: 15, color: '#1E1A1D', align: 'center', tracking: 0.08 }); MG.text.draw(ctx, 'Y EL RETO DEMOGRÁFICO', 0, 56, { font: F.roman, weight: 900, size: 25, color: '#1E1A1D', align: 'center', tracking: 0.08 }); ctx.restore();
      MG.fx.volume(ctx, MG.path.rr(260, 880, 360, 40, 4), [260, 880, 360, 40], { color: '#EDE6D6', shade: 0.3, cel: true, outline: '#2a2020', outlineW: 2 }); // papers
    }
    // the hourglass: top bulb = the interior; it loses half of its sand over the "50 years"
    const drain = pg(t, t50 - 0.2, tHalf + 0.6, 'inOutSine'); let top = lerp(1, 0.5, drain); const flip = pg(t, tDo, tDo + 0.65, 'inOutCubic');
    let rot = flip * Math.PI; if (flip >= 1) { rot = 0; top = 1 - top; }
    const hx = 820, hy = 560; ctx.save(); ctx.fillStyle = 'rgba(30,20,20,0.35)'; ctx.filter = 'blur(16px)'; ctx.beginPath(); ctx.ellipse(hx + 60, 905, 240, 26, 0, 0, MG.TAU); ctx.fill(); ctx.restore();
    // the official's hand that flips it
    const kh = pg(t, tDo - 0.55, tDo - 0.05, 'inOutCubic') * (1 - pg(t, tDo + 0.8, tDo + 1.3, 'inCubic'));
    S2.hourglass(ctx, hx, hy, 1.0, rot, top, t, { flow: flip < 0.01 || flip >= 1, total: 0.92 });
    if (kh > 0) { const ax = lerp(2100, hx + 210, kh), ay = lerp(380, 300, kh); ctx.save(); ctx.translate(ax, ay); ctx.rotate(-0.5 + flip * 0.3); MG.fx.ink(ctx, [[600, 120], [260, 60], [0, 0]], { width: 120, color: '#1C2436', taper: [0, 0] }); MG.fx.volume(ctx, MG.path.rr(-24, -46, 40, 92, 10), [-24, -46, 40, 92], { color: '#F4F2EE', shade: 0.3, cel: true, outline: '#2a2a30', outlineW: 2 }); MG.kit.hand(ctx, -26, 0, { pose: 'fist', angle: Math.PI / 2, s: 1.6, skin: '#E2B494' }); ctx.restore(); }
    ctx.restore();
    // labels
    const kA = 1 - pg(t, 280.3, 280.7);
    if (kA > 0) { S2.kicker(ctx, 'over the past 50 years', 1200, 260, t, t50 - 0.15, { size: 30, color: P.rojoDeep, alpha: kA });
      MG.text.reveal(ctx, 'the interior', 1194, 360, t, tInt - 0.15, { font: F.serif, italic: true, size: 84, color: P.ink, style: 'blur', alpha: kA });
      MG.text.reveal(ctx, '−50%', 1190, 560, t, tHalf - 0.1, { font: F.cond, weight: 900, size: 230, color: P.rojoDeep, style: 'rise', by: 'char', stagger: 0.05, alpha: kA });
      const kd = pg(t, tHalf, tHalf + 0.5) * kA; if (kd > 0) { ctx.save(); ctx.globalAlpha = kd; ctx.strokeStyle = P.rojo; ctx.lineWidth = 3; ctx.setLineDash([10, 7]); const y1 = 560 - 272 * 0.92 ** 0.6 * 0.98; ctx.beginPath(); ctx.moveTo(640, y1); ctx.lineTo(1010, y1); ctx.stroke(); ctx.restore(); } }
    if (office) { S2.kicker(ctx, 'the government created a ministry', 1200, 200, t, tGov - 0.05, { size: 26, color: '#F2D9A8', alpha: 1 - pg(t, 284.8, 285.15) });
      MG.text.reveal(ctx, 'to do something', 1194, 300, t, tDo - 0.1, { font: F.serif, italic: true, size: 80, color: '#F6EEDC', style: 'blur', by: 'word', alpha: 1 - pg(t, 284.8, 285.15) }); }
  },
  post: (t) => (t < 280.68 ? { grade: 'neutral', vignette: 0.34, sat: 0.88 } : { grade: 'warm', vignette: 0.45 }) });

// placeholder for the rest of the segment (filled section by section)
SC.push({ id: 's02_todo', start: 285.16, end: 351.14, draw(ctx, t) { MG.kit.paper(ctx, P.paper2); MG.text.draw(ctx, 'S02 · ' + t.toFixed(2), 960, 560, { font: F.mono, size: 40, align: 'center' }); } });

// ------------------------------------------------------------------------------------------------
MG.segment('S02', {
  start: 174.63, end: 351.14,
  scenes: SC,
  audio(A) {
    A.music('ambient', 174.63, 190.5, { key: 'D3', intensity: [[174.63, 0.5], [180, 0.65], [190.5, 0.5]], fadeIn: 1.5, fadeOut: 1.5 });
  },
});
})();
