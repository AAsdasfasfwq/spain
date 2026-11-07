/* =====================================================================================
   S10 · 1509.97 → 1638.53 · "MEMORY → THE SOUTHERN DOOR → SOFT POWER"
   Author: S10 designer.  Colour states: memory (dark earth, candle, bone) → border (night sea, amber routes)
   → day (Gibraltar) → warm (Latin America) → stadium night (football) → dawn globe (question).

   CLIENT RULE honoured: no number card, no flat slides, no decorative wipes. Every topic change is a camera move,
   a match cut or a real object passing the lens.  Dates live in the world (strata, map labels, stone, parchment).

   VISUAL PLAN (beats; times are VO seconds)
   A · MEMORY (lament)
    01 1509.97 S09's frame loses its light, a shadow falls over it and the camera SINKS through the ground (custom
       transition "drain").  Earth strata: "PROBLEM 05 / Memory" is engraved in today's soil, lit by a lamp.
    02 1512.45 "Franco died fifty years ago" — camera keeps sinking: each soil layer is a decade on a ranging pole
       (2025 … 1975). A depth counter rolls 2025→1975 and lands on a 1975 peseta (Franco's profile) in the clay.
    03 1514.77 3D: the coin stands on its edge and spins on a stone floor split into SOL / SOMBRA light — it never
       settles: "Still divided".  It finally falls flat, face up …
    04 1517.95 … its face becomes the lens of a map (object morph): Madrid, Sierra de Guadarrama, Valley of
       Cuelgamuros 40.64 N 4.16 W, 45 km NW, "TOMB 1975–2019".
    05 1521.15 Map → environment (dive): 2.5D dusk monument — granite outcrop, basilica carved into it, ghosted
       prisoners on scaffolding ("political prisoners"); crane up to the 150 m cross; scale ruler 500 ft,
       ghost 40-storey tower, magnified 1.8 m human.
    06 1528.55 Camera sinks into the mountain: the tomb slab "FRANCISCO FRANCO" lifts away → empty void (24 OCT 2019).
    07 1530.75 Match cut: the void → an excavation pit; kneeling volunteers brush the soil under a string grid.
    08 1534.40 Pull-out: the pit becomes one candle-dot on Spain; 2,000+ dots spread; counter "2,000+".
    09 1539.55 The same map lies on a table: the LEFT pulls a cloth off ("a reckoning"), the RIGHT pulls it back
       ("leave it alone").
    10 1544.35 The cloth sweeps across and uncovers the Congress hemicycle (350 seats, real 2023 split);
       the 3rd-largest bloc (33) lifts; "next government?" bracket.
   B · GEOPOLITICS (ambient night → dread → tension)
    11 1551.00 Whip up into space: night globe, "Geopolitics" set on the globe's curve.
    12 1552.85 One continuous orthographic camera: Europe — Spain lies in still water, "surprisingly quiet."
    13 1555.80 EU (fill) + NATO (outline) membership; Spain in both (1982 / 1986).
    14 1558.45 Trade lanes leave Spanish ports — "TRADE", "war" struck out.
    15 1561.22 Camera pulls out to Africa, dives into the Strait: Ceuta & Melilla lift as saffron slabs.
    16 1567.58 Dive into Melilla → 2.5D night border fence, floodlights, climbers: "every year, thousands".
    17 1572.22 A searchlight sweeps the lens → night-sea map of the Canaries, 100 km ruler to Africa.
    18 1575.55 Camera slides south: Senegal & Mali, cayuco routes with moving boat lights.
    19 1578.70 The map plane tilts away into the horizon → a painted cayuco on the night Atlantic under the moon.
    20 1581.78 Horizon match cut: arrivals rise as columns of lights out of the sea, 2018–2024, 46,843 = record.
    21 1586.18 The lights fall into the sea; the dark route: "one of the deadliest", lights go out: "thousands".
    22 1593.45 3D: a monumental door stands on the night map at the Strait; Europe's light spills south;
       silver coins arc Brussels → Morocco; the door swings mostly closed.
   C · GIBRALTAR (sneaky, daylight)
    23 1599.90 The door leaf wipes the lens → day map of the Strait, Gibraltar (UK) with a never-ending loop.
    24 1603.45 Lens → painted Rock of Gibraltar; Treaty of Utrecht 1713 parchment; a Barbary macaque snatches it.
   D · LATIN AMERICA (warm)
    25 1607.33 Whip west: Atlantic map, golden threads Madrid → the Americas; 20 countries light (incl. Puerto Rico,
       Equatorial Guinea); the map tilts onto a table, paper objects of soft power drift on the threads;
       500 million dots flow to Madrid.
    26 1618.90 Dive into Madrid → Kilómetro 0 plaque, Puerta del Sol at night: "like home."
   E · FOOTBALL (triumph) → QUESTION (mystery)
    27 1621.44 The warm light pool → a football drops and bounces (sun disk → ball). "REAL MADRID".
    28 1623.60 Ball → spotlight: 3D hall of 15 European Cups, dolly + engraved years, count to 15.
    29 1627.74 Flash cut: the pitch split white | blaugrana, names painted on the grass.
    30 1629.78 Crane up into space: the night globe, 200 countries light up.
    31 1632.45 Lights fade — "So what's the secret?"; the old empire glows silver and is lost; dawn breaks over
       Spain at the limb: the sun rises (handoff to S11, alive to 1639.8).
   Mix: 2D maps/infographics ≈ 48 %, 2.5D painted/perspective ≈ 36 %, Three.js ≈ 16 % (coin, door, cups, globe).
   ===================================================================================== */
(function () {
  'use strict';
  const MG = window.MG; if (!MG) return;
  const P = MG.PAL; const { clamp, lerp } = MG; const W = MG.W, H = MG.H, TAU = MG.TAU;
  const prog = MG.prog, lin = MG.lin, kf = MG.keys, win = MG.win;
  const T0 = 1509.97, T1 = 1638.53;
  const S10 = {};                                    // local namespace (workarounds live here)
  const Q = new URLSearchParams(location.search);
  const wt = (q, a) => MG.T(q, a, 3);                // word start (searched ±3 s)
  const wte = (q, a) => MG.Tend(q, a, 3);
  const C = {
    earth: '#2A2320', earthDeep: '#15100e', bone: '#E6DFD0', candle: '#F5B85A', ember: '#D9783A', rust: '#9a4a2a',
    night: '#0F2238', nightDeep: '#081320', nland: '#1B2C43', nland2: '#25395A', amber: '#F5B85A', cal: '#FAF4E8', sky: '#8DB6D9',
    sol: '#F2A33A', bronze: '#C9A046', bronzeDeep: '#6f5220', bronzeLight: '#F3DE9A', left: '#B8322A', right: '#2D6FB0',
  };
  const ease = MG.ease;

  // ------------------------------------------------------------------ typography helpers
  const TX = {
    kick: (ctx, s, x, y, t, t0, o = {}) => MG.text.reveal(ctx, s.toUpperCase(), x, y, t, t0, { font: MG.F.mono, weight: 500, size: o.size || 22, tracking: o.tracking ?? 0.3, color: o.color || C.candle, align: o.align || 'left', style: 'track', by: 'line', dur: 0.7, out: o.out, alpha: o.alpha, shadow: o.shadow }),
    lead: (ctx, s, x, y, t, t0, o = {}) => MG.text.reveal(ctx, s, x, y, t, t0, { font: MG.F.serif, italic: true, size: o.size || 54, color: o.color || C.bone, align: o.align || 'left', style: o.style || 'blur', by: 'word', stagger: o.stagger ?? 0.07, dur: o.dur ?? 0.6, out: o.out, alpha: o.alpha, shadow: o.shadow }),
    big: (ctx, s, x, y, t, t0, o = {}) => MG.text.reveal(ctx, s, x, y, t, t0, { font: o.font || MG.F.display, weight: o.weight || 800, italic: o.italic, size: o.size || 110, color: o.color || C.bone, align: o.align || 'left', style: o.style || 'rise', by: o.by || 'word', stagger: o.stagger ?? 0.08, dur: o.dur ?? 0.6, out: o.out, tracking: o.tracking, alpha: o.alpha, shadow: o.shadow, stroke: o.stroke, strokeW: o.strokeW }),
    draw: (ctx, s, x, y, o = {}) => MG.text.draw(ctx, s, x, y, { font: o.font || MG.F.cond, weight: o.weight || 900, size: o.size || 200, color: o.color || C.bone, align: o.align || 'left', alpha: o.alpha, shadow: o.shadow, tracking: o.tracking, italic: o.italic, stroke: o.stroke, strokeW: o.strokeW }),
  };
  const SH = (a = 0.5, b = 18, dy = 6) => ({ color: `rgba(8,4,2,${a})`, blur: b, dy });
  const fmt = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // ------------------------------------------------------------------ shared drawing helpers
  const glow = (color, r = 32) => MG.cache(`s10glow:${color}:${r}`, r * 2, r * 2, (x, w) => { const g = x.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); g.addColorStop(0, MG.col.a(color, 1)); g.addColorStop(0.18, MG.col.a(color, 0.6)); g.addColorStop(0.5, MG.col.a(color, 0.16)); g.addColorStop(1, MG.col.a(color, 0)); x.fillStyle = g; x.fillRect(0, 0, w, w); });
  const dot = (ctx, x, y, r, color, a = 1) => { ctx.globalAlpha = a; ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.globalAlpha = 1; };
  const lightPool = (ctx, x, y, r, warm = '#ffd9a0', a = 0.35, dark = 0.55) => {
    ctx.save(); ctx.globalCompositeOperation = 'multiply'; const g = ctx.createRadialGradient(x, y, r * 0.15, x, y, r * 1.6); g.addColorStop(0, '#ffffff'); g.addColorStop(0.55, MG.col.mix('#ffffff', '#3a2b3a', dark * 0.5)); g.addColorStop(1, MG.col.mix('#ffffff', '#1b1226', dark)); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'screen'; const g2 = ctx.createRadialGradient(x, y, 0, x, y, r); g2.addColorStop(0, MG.col.a(warm, a)); g2.addColorStop(1, MG.col.a(warm, 0)); ctx.fillStyle = g2; ctx.fillRect(0, 0, W, H); ctx.restore();
  };
  /** debossed (engraved) type, cached: lit from upper-left. returns canvas centred on its middle */
  const engraved = (key, str, o) => MG.cache('s10eng:' + key, o.w, o.h, (x, w, h) => {
    str = MG.tr(str); const d = o.depth || 4; const set = () => MG.text.set(x, o); const tw = MG.text.width(x, str, o); const tx = (w - tw) / 2, ty = h / 2 + o.size * 0.34;
    // floor of the cut (dark) with top-left shadow band
    set(); x.fillStyle = o.shadow || 'rgba(10,6,4,0.9)'; x.fillText(str, tx, ty);
    x.globalCompositeOperation = 'source-atop'; x.fillStyle = o.floor || 'rgba(40,28,20,0.92)'; x.fillText(str, tx + d, ty + d);
    // lit bottom-right inner wall
    const c2 = MG.canvas(w, h); const y = c2.getContext('2d'); MG.text.set(y, o); y.fillStyle = o.lit || 'rgba(255,220,170,0.55)'; y.fillText(str, tx, ty); y.globalCompositeOperation = 'destination-out'; y.fillText(str, tx - d * 0.8, ty - d * 0.8);
    x.globalCompositeOperation = 'source-over'; x.drawImage(c2, 0, 0);
  });
  /** sky gradient above a ground line (used by the drain transition so both sides match) */
  const skyDark = (ctx) => { const g = ctx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#0d0a09'); g.addColorStop(1, '#241b17'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); };

  // Franco's profile (bas-relief, facing right) in coin units (r = 1)
  const FRANCO = [[-0.30, 0.68], [-0.32, 0.40], [-0.37, 0.20], [-0.42, 0.02], [-0.42, -0.18], [-0.35, -0.36], [-0.20, -0.49], [0.01, -0.54], [0.19, -0.48], [0.29, -0.35], [0.33, -0.21], [0.355, -0.12], [0.35, -0.06], [0.39, 0.01], [0.455, 0.085], [0.44, 0.115], [0.40, 0.125], [0.425, 0.16], [0.395, 0.19], [0.40, 0.225], [0.39, 0.255], [0.365, 0.275], [0.375, 0.32], [0.355, 0.37], [0.30, 0.42], [0.22, 0.465], [0.15, 0.50], [0.14, 0.58], [0.10, 0.68]];
  const francoPath = (cx, cy, r) => MG.path.smooth(FRANCO.map(([x, y]) => [cx + x * r, cy + y * r]), true, 0.42);
  /** golden aluminium-bronze peseta (1975) with Franco's profile. o: {flat (no outer shadow), wear} */
  S10.peseta = (ctx, cx, cy, r, o = {}) => {
    ctx.save();
    if (!o.flat) { ctx.save(); ctx.shadowColor = 'rgba(10,5,2,0.6)'; ctx.shadowBlur = r * 0.22; ctx.shadowOffsetX = r * 0.08; ctx.shadowOffsetY = r * 0.12; ctx.fillStyle = C.bronzeDeep; ctx.beginPath(); ctx.arc(cx, cy, r, 0, TAU); ctx.fill(); ctx.restore(); }
    const disk = MG.path.circle(cx, cy, r); const g = ctx.createLinearGradient(cx - r, cy - r, cx + r, cy + r); g.addColorStop(0, '#E9CC7A'); g.addColorStop(0.45, '#C29A45'); g.addColorStop(1, '#7a5a22');
    ctx.fillStyle = g; ctx.fill(disk); ctx.save(); ctx.clip(disk);
    MG.tex.over(ctx, 'blotch', { alpha: 0.35, color: '#4a3410', scale: 2, seed: 4 });
    // rim + recessed field
    ctx.lineWidth = r * 0.05; ctx.strokeStyle = 'rgba(255,236,180,0.55)'; ctx.beginPath(); ctx.arc(cx - r * 0.01, cy - r * 0.01, r * 0.955, 0, TAU); ctx.stroke();
    ctx.strokeStyle = 'rgba(70,48,14,0.7)'; ctx.lineWidth = r * 0.025; ctx.beginPath(); ctx.arc(cx + r * 0.008, cy + r * 0.008, r * 0.84, 0, TAU); ctx.stroke();
    ctx.fillStyle = 'rgba(80,55,15,0.55)'; for (let i = 0; i < 72; i++) { const a = (i / 72) * TAU; ctx.beginPath(); ctx.arc(cx + Math.cos(a) * r * 0.905, cy + Math.sin(a) * r * 0.905, r * 0.012, 0, TAU); ctx.fill(); }
    // legend
    const leg = (str, a0, a1, rad, flip) => { MG.text.set(ctx, { font: MG.F.roman, weight: 700, size: r * 0.115, tracking: 0.08 }); const n = str.length; for (let i = 0; i < n; i++) { const a = lerp(a0, a1, (i + 0.5) / n); ctx.save(); ctx.translate(cx + Math.cos(a) * rad, cy + Math.sin(a) * rad); ctx.rotate(a + (flip ? -Math.PI / 2 : Math.PI / 2)); const cw = ctx.measureText(str[i]).width; ctx.fillStyle = 'rgba(255,238,190,0.45)'; ctx.fillText(str[i], -cw / 2 - r * 0.004, r * 0.04 - r * 0.004); ctx.fillStyle = 'rgba(70,46,12,0.85)'; ctx.fillText(str[i], -cw / 2, r * 0.04); ctx.restore(); } };
    leg('FRANCISCO FRANCO', MG.deg(-200), MG.deg(20), r * 0.745, false);
    leg('1975', MG.deg(118), MG.deg(62), r * 0.80, true);
    // profile relief
    const pp = francoPath(cx - r * 0.04, cy + r * 0.02, r * 0.98); const d = r * 0.012;
    ctx.save(); ctx.translate(-d * 1.6, -d * 1.6); ctx.lineWidth = r * 0.03; ctx.strokeStyle = 'rgba(255,240,190,0.8)'; ctx.stroke(pp); ctx.restore();
    ctx.save(); ctx.translate(d * 1.8, d * 1.8); ctx.lineWidth = r * 0.03; ctx.strokeStyle = 'rgba(60,40,10,0.85)'; ctx.stroke(pp); ctx.restore();
    const g2 = ctx.createLinearGradient(cx - r * 0.5, cy - r * 0.6, cx + r * 0.5, cy + r * 0.6); g2.addColorStop(0, '#EFD485'); g2.addColorStop(1, '#A98236'); ctx.fillStyle = g2; ctx.fill(pp);
    ctx.save(); ctx.clip(pp); MG.tex.over(ctx, 'blotch', { alpha: 0.25, color: '#4a3410', scale: 3, seed: 9 });
    const ink = 'rgba(92,62,18,0.75)', lit = 'rgba(255,238,190,0.5)'; const P2 = (x, y) => [cx + (x - 0.04) * r * 0.98, cy + (y + 0.02) * r * 0.98];
    const st = (pts, wdt, col) => { ctx.strokeStyle = col; ctx.lineWidth = wdt * r; ctx.lineCap = 'round'; ctx.beginPath(); pts.map((p) => P2(...p)).forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); };
    // ear, side hair, eye, brow, moustache, jowl, collar
    ctx.strokeStyle = ink; ctx.lineWidth = r * 0.016; ctx.beginPath(); ctx.ellipse(...P2(-0.11, 0.03), r * 0.065, r * 0.1, 0.15, 0, TAU); ctx.stroke();
    for (let i = 0; i < 7; i++) st([[-0.36 + i * 0.01, -0.28 + i * 0.03], [-0.2 + i * 0.012, -0.24 + i * 0.035], [-0.07, -0.16 + i * 0.03]], 0.009, ink);
    st([[0.215, -0.115], [0.255, -0.105], [0.29, -0.095]], 0.014, ink); st([[0.2, -0.165], [0.25, -0.17], [0.31, -0.15]], 0.02, ink);
    st([[0.36, 0.15], [0.395, 0.155], [0.425, 0.162]], 0.024, ink); st([[0.3, 0.33], [0.24, 0.405], [0.18, 0.44]], 0.012, ink);
    st([[0.27, 0.0], [0.31, 0.09], [0.34, 0.14]], 0.01, ink); st([[-0.26, 0.58], [-0.05, 0.585], [0.12, 0.6]], 0.018, ink); st([[-0.27, 0.56], [-0.05, 0.565], [0.11, 0.58]], 0.008, lit);
    ctx.restore();
    // wear scratches
    ctx.strokeStyle = 'rgba(255,240,200,0.18)'; ctx.lineWidth = 1; for (let i = 0; i < 14; i++) { const a = MG.rand(31, i) * TAU, l = r * (0.1 + MG.rand(32, i) * 0.4); const x0 = cx + (MG.rand(33, i) - 0.5) * r * 1.2, y0 = cy + (MG.rand(34, i) - 0.5) * r * 1.2; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x0 + Math.cos(a) * l, y0 + Math.sin(a) * l); ctx.stroke(); }
    // specular sheen
    const g3 = ctx.createLinearGradient(cx - r, cy - r * 0.2, cx + r * 0.3, cy + r); g3.addColorStop(0.3, 'rgba(255,250,220,0)'); g3.addColorStop(0.45, 'rgba(255,250,220,0.28)'); g3.addColorStop(0.6, 'rgba(255,250,220,0)'); ctx.fillStyle = g3; ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
    ctx.restore();
    ctx.lineWidth = Math.max(1.5, r * 0.015); ctx.strokeStyle = 'rgba(60,40,12,0.9)'; ctx.stroke(disk);
    ctx.restore();
  };

  // ------------------------------------------------------------------ custom transitions (content-motivated)
  const TR = {};
  /** 01: S09's frame loses its light, a shadow falls across it, the camera sinks below ground (B rises from under it) */
  S10.surfY = (t) => kf(t, [[T0, 1190], [T0 + 0.32, 1160, 'linear'], [T0 + 1.2, 196, 'inOutCubic'], [1512.45, 172, 'outSine'], [1514.25, -1125, 'inOutCubic'], [1515.4, -1150, 'outSine']]);
  S10.surfEdge = (sy) => { const pts = []; for (let x = -30; x <= W + 30; x += 20) pts.push([x, sy + MG.noise2(x * 0.0042, 3.1) * 16 + MG.noise2(x * 0.03, 7) * 4]); return pts; };
  TR.drain = { dur: 1.2, ease: 'linear', type: (ctx, A, B, p, o) => {
    const t = T0 + p * o.dur; const sy = S10.surfY(t); const off = Math.min(0, sy - 1080); const k = clamp((t - T0) / 0.45);
    ctx.drawImage(B, 0, 0);
    const edge = S10.surfEdge(sy); const reg = new Path2D(); reg.moveTo(-40, -40); reg.lineTo(W + 40, -40); for (let i = edge.length - 1; i >= 0; i--) reg.lineTo(edge[i][0], edge[i][1]); reg.closePath();
    ctx.save(); ctx.clip(reg);
    ctx.filter = `saturate(${(1 - 0.85 * k).toFixed(3)}) brightness(${(1 - 0.35 * k).toFixed(3)})`; ctx.drawImage(A, 0, off); ctx.filter = 'none';
    // the shade falls over the old world from the right (problems fall into shadow)
    const sp = MG.ease.inOutCubic(clamp((t - T0) / 0.7)); ctx.save(); ctx.translate(lerp(W + 700, -500, sp), 540); ctx.rotate(MG.deg(28)); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = 'rgba(58,43,58,0.75)'; ctx.fillRect(0, -1600, 4000, 3200); ctx.restore();
    ctx.globalAlpha = clamp((t - T0 - 0.25) / 0.9); skyDark(ctx); ctx.globalAlpha = 1;
    ctx.restore();
  } };
  /** circle grows from an object (coin face → map lens, ball → spotlight). o: x, y, r0, ring */
  TR.circle = (x, y, r0, dur = 0.8, ring = 'rgba(230,223,208,0.8)') => ({ dur, ease: 'linear', type: (ctx, A, B, p) => {
    const e = MG.ease.inOutCubic(p); const R = Math.hypot(Math.max(x, W - x), Math.max(y, H - y)) + 30; const r = lerp(r0, R, e);
    ctx.drawImage(A, 0, 0); ctx.save(); ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.clip(); ctx.drawImage(B, 0, 0); ctx.restore();
    if (ring && p < 1) { ctx.save(); ctx.strokeStyle = ring; ctx.globalAlpha = 1 - e; ctx.lineWidth = 3; ctx.setLineDash([2, 9]); ctx.beginPath(); ctx.arc(x, y, r + 12, 0, TAU); ctx.stroke(); ctx.restore(); }
  } });
  /** pull-out: A shrinks into a point of B (the excavation becomes one dot on the map) */
  TR.pullOut = (x, y, dur = 1.0, rEnd = 6) => ({ dur, ease: 'linear', type: (ctx, A, B, p) => {
    const e = MG.ease.inOutCubic(p); ctx.drawImage(B, 0, 0); const s = lerp(1, 0.004, MG.ease.inQuart(p)); const r = lerp(1300, rEnd, MG.ease.inOutQuart(p));
    ctx.save(); ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.clip(); ctx.translate(x, y); ctx.scale(Math.max(s, r / 1100), Math.max(s, r / 1100)); ctx.translate(-960, -540); ctx.globalAlpha = 1 - MG.smoothstep(0.75, 1, p); ctx.drawImage(A, 0, 0); ctx.restore();
    if (p < 0.98) { ctx.save(); ctx.strokeStyle = MG.col.a(C.candle, 0.8 * (1 - e)); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.stroke(); ctx.restore(); }
  } });
  /** pass-through floor: camera tilts down into the ground, A slides up, B rises under a stone lip */
  TR.floor = (dur = 0.9, lip = '#2a221d') => ({ dur, ease: 'linear', type: (ctx, A, B, p) => {
    const e = MG.ease.inOutCubic(p); const y = lerp(H + 40, -60, e); ctx.drawImage(B, 0, Math.min(0, y - H) * 0 + 0); ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, Math.max(0, y)); ctx.clip(); ctx.filter = `brightness(${(1 - 0.5 * e).toFixed(3)})`; ctx.drawImage(A, 0, y - H); ctx.filter = 'none'; ctx.restore();
    const g = ctx.createLinearGradient(0, y - 30, 0, y + 30); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(0.5, lip); g.addColorStop(1, 'rgba(0,0,0,0.6)'); ctx.fillStyle = g; ctx.fillRect(0, y - 30, W, 60); ctx.fillStyle = 'rgba(255,210,150,0.35)'; ctx.fillRect(0, y - 2, W, 2);
  } });
  /** cloth wipe: a dark fabric band slides across the lens (real object) */
  TR.cloth = (dur = 1.0) => ({ dur, ease: 'linear', type: (ctx, A, B, p) => {
    const e = MG.ease.inOutCubic(p); const x = lerp(W + 500, -700, e); const bw = 620;
    const edgeL = (yy) => x + Math.sin(yy * 0.012 + p * 6) * 26 + Math.sin(yy * 0.031) * 9, edgeR = (yy) => x + bw + Math.sin(yy * 0.01 + 2 + p * 5) * 30;
    const path = (fn, side) => { const pth = new Path2D(); pth.moveTo(side < 0 ? -10 : W + 10, -10); for (let yy = -10; yy <= H + 10; yy += 20) pth.lineTo(fn(yy), yy); pth.lineTo(side < 0 ? -10 : W + 10, H + 10); pth.closePath(); return pth; };
    ctx.drawImage(A, 0, 0); ctx.save(); ctx.clip(path(edgeR, 1)); ctx.drawImage(B, 0, 0); ctx.restore();
    // the fabric
    const band = new Path2D(); band.moveTo(edgeL(-10), -10); for (let yy = -10; yy <= H + 10; yy += 20) band.lineTo(edgeL(yy), yy); for (let yy = H + 10; yy >= -10; yy -= 20) band.lineTo(edgeR(yy), yy); band.closePath();
    ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.55)'; ctx.shadowBlur = 50; ctx.shadowOffsetX = -25; ctx.fillStyle = '#2b1f2c'; ctx.fill(band); ctx.restore();
    ctx.save(); ctx.clip(band); for (let i = 0; i < 9; i++) { const fx = x + 40 + i * 64 + Math.sin(i * 2.1 + p * 3) * 14; const g = ctx.createLinearGradient(fx - 32, 0, fx + 32, 0); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(0.45, 'rgba(120,92,130,0.28)'); g.addColorStop(0.55, 'rgba(10,5,12,0.35)'); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = g; ctx.fillRect(fx - 32, 0, 64, H); } MG.tex.over(ctx, 'fibers', { alpha: 0.5, color: '#000' }); ctx.restore();
  } });
  /** searchlight beam sweeps across the lens and leaves the next world behind it */
  TR.beam = (dur = 0.9) => ({ dur, ease: 'linear', type: (ctx, A, B, p) => {
    const e = MG.ease.inOutSine(p); const x = lerp(-500, W + 500, e); const ang = MG.deg(12);
    ctx.drawImage(B, 0, 0); ctx.save(); ctx.beginPath(); ctx.moveTo(x, -200); ctx.lineTo(W + 600, -200); ctx.lineTo(W + 600, H + 200); ctx.lineTo(x - Math.tan(ang) * (H + 400), H + 200); ctx.closePath(); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore();
    ctx.save(); ctx.globalCompositeOperation = 'screen'; ctx.translate(x - Math.tan(ang) * 540, 540); ctx.rotate(-ang); const g = ctx.createLinearGradient(-260, 0, 260, 0); g.addColorStop(0, 'rgba(255,240,210,0)'); g.addColorStop(0.42, 'rgba(255,240,210,0.55)'); g.addColorStop(0.5, 'rgba(255,248,230,0.95)'); g.addColorStop(0.58, 'rgba(255,240,210,0.55)'); g.addColorStop(1, 'rgba(255,240,210,0)'); ctx.fillStyle = g; ctx.fillRect(-260, -900, 520, 1800); ctx.restore();
  } });
  /** the map plane tilts away into the distance and becomes the horizon of the next shot */
  TR.tilt = (dur = 1.0, horizon = 560) => ({ dur, ease: 'linear', type: (ctx, A, B, p) => {
    const e = MG.ease.inOutCubic(p); ctx.drawImage(B, 0, 0); const top = lerp(0, horizon - 4, e), bot = lerp(H, horizon + 2, e);
    ctx.save(); ctx.beginPath(); ctx.rect(0, top, W, Math.max(1, bot - top)); ctx.clip(); ctx.globalAlpha = 1 - MG.smoothstep(0.55, 0.95, p); ctx.filter = `brightness(${(1 - 0.4 * e).toFixed(3)})`;
    MG.persp.quad(ctx, A, (u, v) => { const z = lerp(1, 1 + 7 * e, 1 - v); const xx = 960 + (u - 0.5) * W / z * (1 + e * 0.6); const yy = lerp(top, bot, (v - 0) / 1) ; return [xx, horizon + (yy - horizon) * (1 / z) * (v > 0.999 ? 1 : 1)]; }, 8); ctx.restore();
  } });
  /** darkness by content: the previous lights go out (A darkens), then the next scene fades up */
  TR.lightsOut = (dur = 1.0) => ({ dur, ease: 'linear', type: (ctx, A, B, p) => { ctx.drawImage(A, 0, 0); ctx.fillStyle = `rgba(4,8,14,${MG.smoothstep(0, 0.55, p).toFixed(3)})`; ctx.fillRect(0, 0, W, H); ctx.globalAlpha = MG.smoothstep(0.45, 1, p); ctx.drawImage(B, 0, 0); ctx.globalAlpha = 1; } });
  /** the dark leaf of the door passes the lens */
  TR.doorLeaf = (dur = 0.85) => ({ dur, ease: 'linear', type: (ctx, A, B, p) => {
    const e = MG.ease.inOutCubic(p); const x0 = lerp(W + 40, -1500, e), x1 = x0 + 1300; ctx.drawImage(A, 0, 0); ctx.save(); ctx.beginPath(); ctx.rect(x1, 0, W, H); ctx.clip(); ctx.drawImage(B, 0, 0); ctx.restore();
    ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.6)'; ctx.shadowBlur = 60; ctx.fillStyle = '#3a2416'; ctx.fillRect(x0, -20, 1300, H + 40); ctx.restore();
    ctx.save(); ctx.beginPath(); ctx.rect(x0, 0, 1300, H); ctx.clip(); for (let i = 0; i < 7; i++) { const px = x0 + i * 186; const g = ctx.createLinearGradient(px, 0, px + 186, 0); g.addColorStop(0, 'rgba(255,200,140,0.10)'); g.addColorStop(0.9, 'rgba(0,0,0,0.25)'); g.addColorStop(1, 'rgba(0,0,0,0.6)'); ctx.fillStyle = g; ctx.fillRect(px, 0, 186, H); } ctx.fillStyle = '#16100c'; for (const yy of [170, 540, 910]) ctx.fillRect(x0, yy - 18, 1300, 36); ctx.fillStyle = '#7a6a5a'; for (const yy of [170, 540, 910]) for (let i = 0; i < 12; i++) { ctx.beginPath(); ctx.arc(x0 + 60 + i * 105, yy, 9, 0, TAU); ctx.fill(); } MG.tex.over(ctx, 'fibers', { alpha: 0.9, color: '#000' }); ctx.restore();
  } });

  // ================================================================== 01–02 STRATA (1509.97–1514.77)
  const yearDepth = (Y) => 130 + (2025 - Y) * 30;
  const STRATA_H = 2300;
  S10.strata = () => MG.cache('s10:strata', W, STRATA_H, (x, w, h) => {
    const B = [[0, '#2b1e17'], [104, '#3a291f'], [yearDepth(2015) + 6, '#634631'], [yearDepth(2005) + 4, '#86684a'], [yearDepth(1995) + 8, '#6a3b2b'], [yearDepth(1985) + 4, '#554840'], [yearDepth(1975) - 60, '#3c2d25']];
    const edgeY = (d, i, xx) => d + (i ? MG.noise2(xx * 0.003, i * 3.3) * 22 + MG.noise2(xx * 0.021, i + 5) * 6 : 0);
    for (let i = 0; i < B.length; i++) { const d0 = B[i][0], d1 = i + 1 < B.length ? B[i + 1][0] : h + 40; const p = new Path2D(); p.moveTo(-20, edgeY(d0, i, -20)); for (let xx = -20; xx <= w + 20; xx += 16) p.lineTo(xx, edgeY(d0, i, xx)); for (let xx = w + 20; xx >= -20; xx -= 16) p.lineTo(xx, i + 1 < B.length ? edgeY(d1, i + 1, xx) : h + 40); p.closePath(); x.fillStyle = B[i][1]; x.fill(p);
      x.save(); x.clip(p); MG.tex.over(x, 'blotch', { alpha: 0.45, color: '#120a06', scale: 3 + i, seed: 11 + i }); MG.tex.over(x, 'fibers', { alpha: 0.9, color: '#160d08', seed: 20 + i });
      // grains & pebbles per band
      const r = MG.rng(100 + i); const nP = [60, 220, 160, 900, 260, 380, 220][i];
      for (let k = 0; k < nP; k++) { const px = r() * w, py = d0 + r() * (Math.min(d1, h) - d0); const s = (i === 3 ? 3 + r() * 9 : 1.5 + r() * 5) * (r() < 0.06 ? 2.6 : 1); const tone = MG.col.mix(B[i][1], r() < 0.5 ? '#d8c4a4' : '#120a06', 0.25 + r() * 0.35); x.fillStyle = 'rgba(8,4,2,0.45)'; x.beginPath(); x.ellipse(px + s * 0.35, py + s * 0.4, s, s * 0.72, r(), 0, TAU); x.fill(); x.fillStyle = tone; x.beginPath(); x.ellipse(px, py, s, s * 0.72, r(), 0, TAU); x.fill(); x.fillStyle = 'rgba(255,230,190,0.22)'; x.beginPath(); x.ellipse(px - s * 0.3, py - s * 0.3, s * 0.45, s * 0.3, 0, 0, TAU); x.fill(); }
      x.restore(); x.strokeStyle = 'rgba(10,6,4,0.55)'; x.lineWidth = 2; if (i) { x.beginPath(); for (let xx = -20; xx <= w + 20; xx += 16) x.lineTo(xx, edgeY(d0, i, xx)); x.stroke(); }
    }
    // roots from the surface
    const rr = MG.rng(7); for (let k = 0; k < 26; k++) { let px = rr() * w, py = 0; const pts = [[px, py]]; const L = 80 + rr() * 300; for (let s = 0; s < 12; s++) { px += (rr() - 0.5) * 24; py += L / 12; pts.push([px, py]); } MG.fx.ink(x, pts, { width: 2 + rr() * 5, color: 'rgba(20,12,8,0.75)', taper: [0.05, 0.9] }); }
    // artefacts: euro coin (2008), bottle cap (1998), cassette (1989)
    const art = (yy, xx, f) => { x.save(); x.translate(xx, yy); f(x); x.restore(); };
    art(yearDepth(2008), 1510, (c) => { c.rotate(0.4); c.fillStyle = '#8a8574'; c.beginPath(); c.ellipse(0, 0, 22, 18, 0, 0, TAU); c.fill(); c.fillStyle = '#b39a55'; c.beginPath(); c.ellipse(0, 0, 13, 10.5, 0, 0, TAU); c.fill(); c.strokeStyle = 'rgba(0,0,0,0.4)'; c.stroke(); });
    art(yearDepth(1998), 640, (c) => { c.rotate(-0.8); c.fillStyle = '#7a2a20'; c.beginPath(); for (let i = 0; i < 21; i++) { const a = i / 21 * TAU; const rr2 = i % 2 ? 13 : 15; c.lineTo(Math.cos(a) * rr2, Math.sin(a) * rr2 * 0.55); } c.fill(); });
    art(yearDepth(1989), 1250, (c) => { c.rotate(0.12); c.fillStyle = '#2b2622'; c.fillRect(-46, -28, 92, 56); c.fillStyle = '#c9b48a'; c.fillRect(-38, -20, 76, 26); c.fillStyle = '#1a1512'; c.beginPath(); c.arc(-18, -7, 7, 0, TAU); c.arc(18, -7, 7, 0, TAU); c.fill(); });
    // decade lines (archaeological section markers)
    x.setLineDash([3, 9]); x.strokeStyle = 'rgba(230,223,208,0.16)'; x.lineWidth = 1.5; for (let Y = 2025; Y >= 1965; Y -= 10) { const d = yearDepth(Y); x.beginPath(); x.moveTo(250, d); x.lineTo(w, d); x.stroke(); } x.setLineDash([]);
    // ranging pole (red / white, 0.5 m segments)
    const pole = (c) => { for (let d = -10, i = 0; d < h; d += 60, i++) { c.fillStyle = i % 2 ? '#e8e0cf' : '#a8372b'; c.fillRect(196, d, 22, 60); } c.fillStyle = 'rgba(0,0,0,0.35)'; c.fillRect(212, -10, 6, h); c.fillStyle = 'rgba(255,255,255,0.18)'; c.fillRect(197, -10, 4, h); };
    pole(x);
  });
  const STRATA = { id: 's10_strata', start: T0, end: 1514.77, transIn: TR.drain,
    init() { S10.strata(); },
    draw(ctx, t) {
      const sy = S10.surfY(t); const hh = MG.cam.handheld(t, 2.5, 3);
      ctx.save(); ctx.translate(hh.dx, hh.dy);
      skyDark(ctx);
      // faint town silhouette on the dark horizon (the world above, already drained)
      ctx.fillStyle = '#1b1512'; ctx.beginPath(); ctx.moveTo(0, sy); for (let i = 0; i <= 40; i++) { const xx = i * 48; const hgt = 30 + MG.hash(i * 3.7) * 70 + (i % 9 === 4 ? 70 : 0); ctx.lineTo(xx, sy - hgt); ctx.lineTo(xx + 40, sy - hgt); } ctx.lineTo(W, sy); ctx.fill();
      ctx.drawImage(S10.strata(), 0, sy);
      // surface lip: grass tufts + a last rim of light
      const edge = S10.surfEdge(sy); ctx.strokeStyle = 'rgba(255,200,140,0.45)'; ctx.lineWidth = 2.5; ctx.beginPath(); edge.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke();
      ctx.strokeStyle = '#2a2a1c'; ctx.lineWidth = 2; for (let i = 0; i < 160; i++) { const xx = MG.hash(i * 1.3) * W; const yy = sy + MG.noise2(xx * 0.0042, 3.1) * 16; const hgt = 8 + MG.hash(i * 7.1) * 22; const lean = (MG.hash(i * 2.9) - 0.5) * 12 + MG.wiggle(t, 0.6, 3, i); ctx.beginPath(); ctx.moveTo(xx, yy + 2); ctx.quadraticCurveTo(xx + lean * 0.3, yy - hgt * 0.6, xx + lean, yy - hgt); ctx.stroke(); }
      // pole above ground
      ctx.fillStyle = '#a8372b'; ctx.fillRect(196, sy - 130, 22, 60); ctx.fillStyle = '#e8e0cf'; ctx.fillRect(196, sy - 70, 22, 70);
      // year labels on the pole
      MG.text.set(ctx, { font: MG.F.mono, weight: 500, size: 24, tracking: 0.12 });
      for (let Y = 2025; Y >= 1965; Y -= 10) { const yy = sy + yearDepth(Y); if (yy < -40 || yy > H + 40) continue; const near = 1 - clamp(Math.abs(yy - 540) / 420); ctx.fillStyle = MG.col.a(C.bone, 0.35 + 0.6 * near); ctx.fillText(String(Y), 238, yy + 8); ctx.fillStyle = MG.col.a(C.candle, 0.4 + 0.6 * near); ctx.fillRect(218, yy - 1, 14, 3); }
      // engraved "PROBLEM 05 · Memory" in today's soil, revealed by the lamp
      const ek = MG.text; const cx = 1010, ey = sy + 285;
      const eng1 = engraved('mem', 'Memory', { font: MG.F.display, weight: 800, italic: true, size: 230, w: 1100, h: 320, depth: 5, floor: 'rgba(32,22,16,0.95)' });
      const eng0 = engraved('p05', 'PROBLEM  05', { font: MG.F.mono, weight: 700, size: 46, tracking: 0.35, w: 640, h: 90, depth: 2.5, floor: 'rgba(28,18,12,0.97)', lit: 'rgba(255,214,160,0.75)' });
      const rv0 = prog(t, wt('problem', 1510.45) - 0.1, wt('problem', 1510.45) + 0.6, 'outCubic'), rv1 = prog(t, wt('memory', 1511.33) - 0.15, wt('memory', 1511.33) + 0.7, 'outCubic');
      if (rv0 > 0) { ctx.save(); ctx.beginPath(); ctx.rect(cx - 320, ey - 190, 640 * rv0, 90); ctx.clip(); ctx.drawImage(eng0, cx - 320, ey - 190); ctx.restore(); }
      if (rv1 > 0) { ctx.save(); ctx.beginPath(); ctx.rect(cx - 550, ey - 120, 1100 * rv1, 320); ctx.clip(); ctx.drawImage(eng1, cx - 550, ey - 120); ctx.restore(); }
      // the coin in the 1975 clay
      const coinY = sy + yearDepth(1975) + 46, coinX = 860;
      if (coinY < H + 200) { S10.peseta(ctx, coinX, coinY, 128); ctx.save(); ctx.fillStyle = '#3c2d25'; ctx.beginPath(); ctx.moveTo(coinX - 160, coinY + 96); for (let i = 0; i <= 16; i++) ctx.lineTo(coinX - 160 + i * 20, coinY + 86 + MG.noise2(i * 0.7, 2) * 14); ctx.lineTo(coinX + 160, coinY + 200); ctx.lineTo(coinX - 160, coinY + 200); ctx.fill(); for (let i = 0; i < 40; i++) { const a = MG.rand(5, i) * Math.PI, rr = 128 * (0.75 + MG.rand(6, i) * 0.35); dot(ctx, coinX + Math.cos(a) * rr, coinY + Math.sin(a) * rr * 0.9, 2 + MG.rand(7, i) * 4, MG.rand(8, i) < 0.5 ? '#4a382c' : '#2a1d16', 0.9); } ctx.restore(); }
      // archaeologist's lamp: follows the content
      const ly = lerp(ey + 40, coinY - 20, clamp((172 - sy) / (172 + 1125))); const lx = lerp(cx, coinX, clamp((172 - sy) / 900));
      lightPool(ctx, lx - 60, clamp(ly, 200, 880), 640, '#ffcf8a', 0.28, 0.62);
      ctx.restore();
      // depth / year read-out (right)
      const sinkP = clamp((172 - sy) / (172 + 1125)); const tF = wt('franco', 1512.45);
      if (t > tF - 0.1) { const a = prog(t, tF - 0.1, tF + 0.4);
        TX.kick(ctx, 'Franco', 1290, 410, t, tF - 0.05, { size: 26, color: C.candle });
        const yr = Math.round(lerp(2025, 1975, MG.ease.inOutSine(sinkP)));
        ctx.save(); ctx.globalAlpha = a; TX.draw(ctx, String(yr), 1282, 620, { size: 250, color: C.bone, shadow: SH(0.6, 30, 10) }); ctx.restore();
        TX.lead(ctx, 'fifty years ago', 1292, 702, t, wt('fifty', 1513.41) - 0.05, { size: 58 });
        TX.kick(ctx, '† 20 November 1975', 1294, 770, t, wte('ago', 1514.21) - 0.2, { size: 20, color: 'rgba(230,223,208,0.7)' });
      }
    },
    post: { grade: 'warm', grain: 0.05, vignette: 0.48, sat: 0.92, contrast: 1.05 } };

  // ================================================================== 03 COIN 3D (1514.77–1517.95)
  const COIN_T0 = 1514.77, COIN_FALL = 1517.3, COIN_END = 1517.95;
  const COIN = { id: 's10_coin', start: COIN_T0, end: COIN_END, transIn: { type: 'zoom', dur: 0.55, x: 860, y: 560, amount: 1.4, from: 0.86 },
    init() {
      const T = THREE; const sc = new T.Scene(); sc.environment = MG.three.env(); this.sc = sc;
      this.cam = new T.PerspectiveCamera(28, 16 / 9, 0.05, 60);
      const mk = (w, h, f) => { const c = MG.canvas(w, h); f(c.getContext('2d'), w, h); return c; };
      const rot = (src) => mk(1024, 1024, (x) => { x.translate(0, 1024); x.rotate(-Math.PI / 2); x.drawImage(src, 0, 0); });
      const face = mk(1024, 1024, (x) => S10.peseta(x, 512, 512, 508, { flat: true }));
      const back = mk(1024, 1024, (x) => { const g = x.createLinearGradient(0, 0, 1024, 1024); g.addColorStop(0, '#E2C26E'); g.addColorStop(1, '#7c5c24'); x.fillStyle = g; x.fillRect(0, 0, 1024, 1024); MG.tex.over(x, 'blotch', { alpha: 0.35, color: '#4a3410', scale: 2 }); x.strokeStyle = 'rgba(70,48,14,0.7)'; x.lineWidth = 14; x.beginPath(); x.arc(512, 512, 430, 0, TAU); x.stroke(); MG.text.draw(x, '1', 512, 560, { font: MG.F.roman, weight: 900, size: 300, color: 'rgba(80,55,15,0.85)', align: 'center' }); MG.text.draw(x, 'PESETA', 512, 690, { font: MG.F.roman, weight: 700, size: 92, color: 'rgba(80,55,15,0.85)', align: 'center', tracking: 0.12 }); });
      const bump = mk(1024, 1024, (x) => { x.fillStyle = '#777'; x.fillRect(0, 0, 1024, 1024); x.fillStyle = '#d8d8d8'; x.beginPath(); x.arc(512, 512, 508, 0, TAU); x.fill(); x.fillStyle = '#8a8a8a'; x.beginPath(); x.arc(512, 512, 426, 0, TAU); x.fill(); x.filter = 'blur(3px)'; x.fillStyle = '#e0e0e0'; x.fill(francoPath(512 - 20, 512 + 10, 498)); x.filter = 'none'; });
      const edge = mk(1024, 32, (x) => { for (let i = 0; i < 1024; i += 6) { x.fillStyle = (i / 6) % 2 ? '#8a6a2a' : '#E0C070'; x.fillRect(i, 0, 3, 32); x.fillStyle = '#b8913f'; x.fillRect(i + 3, 0, 3, 32); } });
      const tx = (c) => MG.three.canvasTexture(c);
      const mE = new T.MeshStandardMaterial({ map: tx(edge), metalness: 0.9, roughness: 0.4 });
      const fTex = tx(rot(face)), bTex = tx(rot(back)), bmp = new T.CanvasTexture(rot(bump));
      const mF = new T.MeshStandardMaterial({ map: fTex, bumpMap: bmp, bumpScale: 2.2, metalness: 0.82, roughness: 0.34 });
      const mB = new T.MeshStandardMaterial({ map: bTex, metalness: 0.82, roughness: 0.36 });
      const coin = new T.Mesh(new T.CylinderGeometry(0.42, 0.42, 0.05, 96, 1), [mE, mF, mB]); coin.rotation.x = Math.PI / 2;
      this.tilt = new T.Group(); this.spin = new T.Group(); this.tilt.add(coin); this.spin.add(this.tilt); sc.add(this.spin);
      // floor: dark stone with the bullring divide of light (sol | sombra) running under the coin
      const floorC = mk(1024, 1024, (x, w, h) => { x.fillStyle = '#241c18'; x.fillRect(0, 0, w, h); MG.tex.over(x, 'blotch', { alpha: 0.5, color: '#000', scale: 4 }); MG.tex.over(x, 'grain', { alpha: 0.3 }); x.save(); x.translate(512, 512); x.rotate(MG.deg(-62 + 90)); x.fillStyle = 'rgba(245,184,90,0.35)'; x.fillRect(-1400, -1400, 1400, 2800); x.fillStyle = 'rgba(58,43,90,0.35)'; x.fillRect(0, -1400, 1400, 2800); x.restore(); const g = x.createRadialGradient(512, 512, 60, 512, 512, 520); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(8,5,4,0.95)'); x.fillStyle = g; x.fillRect(0, 0, w, h); });
      const floor = new T.Mesh(new T.PlaneGeometry(6, 6), new T.MeshStandardMaterial({ map: tx(floorC), roughness: 0.85, metalness: 0 })); floor.rotation.x = -Math.PI / 2; sc.add(floor);
      const shC = mk(256, 256, (x) => { const g = x.createRadialGradient(128, 128, 0, 128, 128, 128); g.addColorStop(0, 'rgba(0,0,0,0.75)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(0, 0, 256, 256); });
      this.shadow = new T.Mesh(new T.PlaneGeometry(1, 1), new T.MeshBasicMaterial({ map: new T.CanvasTexture(shC), transparent: true, depthWrite: false })); this.shadow.rotation.x = -Math.PI / 2; this.shadow.position.y = 0.003; sc.add(this.shadow);
      const key = new T.DirectionalLight(0xffc98a, 3.0); key.position.set(-2.6, 2.4, 2.2); sc.add(key);
      const fill = new T.DirectionalLight(0x8b74c8, 1.1); fill.position.set(3, 1.0, 0.6); sc.add(fill);
      sc.add(new T.AmbientLight(0x2a2030, 0.6));
    },
    draw(ctx, t) {
      const T = THREE; const u = clamp((t - COIN_T0) / (COIN_FALL - COIN_T0)); const N = 8;
      const theta = TAU * N * (1 - Math.pow(1 - u, 2.4));
      const fall = MG.ease.outBounce(clamp((t - COIN_FALL) / 0.42)); const tilt = fall * Math.PI / 2;
      const wob = (0.03 + 0.12 * u * u) * (1 - fall);
      this.spin.rotation.y = theta; this.tilt.rotation.x = -tilt; this.tilt.rotation.z = Math.sin(theta * 0.5) * wob;
      this.spin.position.set(0, 0.42 * Math.cos(tilt) + 0.025 * Math.sin(tilt), -0.42 * Math.sin(tilt));
      const sw = Math.abs(Math.cos(theta)) * 0.84 * (1 - fall) + 0.12 + fall * 0.8;
      this.shadow.scale.set(lerp(sw, 0.95, fall), lerp(0.22, 0.95, fall), 1); this.shadow.rotation.z = -theta * (1 - fall); this.shadow.position.z = -0.42 * Math.sin(tilt) + 0.05;
      const cr = MG.ease.inOutCubic(clamp((t - (COIN_FALL - 0.05)) / 0.62));
      const z0 = lerp(4.1, 3.7, MG.ease.inOutSine(clamp((t - COIN_T0) / 2.5)));
      this.cam.position.set(lerp(0.15 * Math.sin(t * 0.4), 0, cr), lerp(0.62, 3.2, cr), lerp(z0, -0.42 + 0.001, cr));
      this.cam.lookAt(0, lerp(0.42, 0.025, cr), lerp(0, -0.42, cr));
      const g = ctx.createRadialGradient(960, 620, 50, 960, 560, 1100); g.addColorStop(0, '#2a201b'); g.addColorStop(1, '#0c0908'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      const c = MG.three.render(this.sc, this.cam, { slot: 0, w: 1280, h: 720, clearAlpha: 0, exposure: 1.05 }); ctx.drawImage(c, 0, 0, W, H);
      // text: lit by the two lights
      const tS = wt('spaniards', 1514.93), tSt = wt('still', 1515.65), tA = wt('agreed', 1516.13), outAt = COIN_FALL - 0.1;
      TX.kick(ctx, 'Fifty years on', 960, 170, t, tS - 0.1, { align: 'center', size: 24, color: 'rgba(230,223,208,0.8)', out: { at: outAt, dur: 0.3 } });
      TX.big(ctx, 'Still', 520, 330, t, tSt - 0.05, { size: 150, color: C.candle, align: 'center', shadow: SH(0.6, 30, 10), out: { at: outAt, style: 'blur', dur: 0.35 } });
      TX.big(ctx, 'divided', 1420, 330, t, tA - 0.05, { size: 150, color: '#b9a9d0', align: 'center', shadow: SH(0.6, 30, 10), out: { at: outAt, style: 'blur', dur: 0.35 } });
    },
    post: { grade: 'warm', grain: 0.05, vignette: 0.5, contrast: 1.06 } };

  // ================================================================== memory map (conic, affine-zoomable reference)
  S10.mproj = (center, scale) => { const pr = window.d3.geoConicConformal().parallels([36, 43.5]).rotate([3.7, 0]).center([0, 40.2]).scale(scale).translate([0, 0]); const p = pr(center); pr.translate([W / 2 - p[0], H / 2 - p[1]]); return pr; };
  const MREF = { s: 7400, c: [-3.4, 39.9], ox: 360, oy: 380 };
  S10.memRef = () => MG.cache('s10:memref', W + MREF.ox * 2, H + MREF.oy * 2, (x, w, h) => {
    MG.geo.init(); const pr = S10.mproj(MREF.c, MREF.s); pr.translate([pr.translate()[0] + MREF.ox, pr.translate()[1] + MREF.oy]);
    x.fillStyle = '#16110f'; x.fillRect(0, 0, w, h); x.drawImage(MG.tex.paper('#1a1412', { seed: 5, light: 0, blotch: 0.2, w, h }), 0, 0);
    x.strokeStyle = 'rgba(230,223,208,0.035)'; x.lineWidth = 1.2; for (let yy = 6; yy < h; yy += 15) { x.beginPath(); for (let xx = 0; xx <= w; xx += 14) x.lineTo(xx, yy + Math.sin(xx * 0.012 + yy) * 2); x.stroke(); }
    for (const n of ['France', 'Portugal', 'Andorra', 'Morocco', 'Algeria', 'Gibraltar']) MG.geo.draw(x, pr, MG.geo.country(n, '10'), { fill: '#2a221e', stroke: 'rgba(230,223,208,0.10)', width: 1 });
    const es = MG.geo.country('Spain', '10'); MG.geo.draw(x, pr, es, { fill: '#4e3e33', shadow: { blur: 30, dy: 10, color: 'rgba(0,0,0,0.6)' } });
    x.save(); MG.geo.clip(x, pr, es); x.globalCompositeOperation = 'overlay'; x.globalAlpha = 0.85; MG.geo.relief(x, pr, { alpha: 1 }); x.globalCompositeOperation = 'multiply'; x.globalAlpha = 0.35; MG.geo.relief(x, pr, { alpha: 1 }); x.restore();
    MG.geo.draw(x, pr, MG.geo.provinceMesh, { stroke: 'rgba(230,223,208,0.07)', width: 0.8 });
    MG.geo.draw(x, pr, es, { stroke: 'rgba(230,223,208,0.35)', width: 1.4 });
  });
  /** draw the reference map transformed to the current conic view (affine: same rotation, new scale/centre) */
  S10.memBase = (ctx, center, scale) => { const pr = S10.mproj(center, scale); const ref = S10.mproj(MREF.c, MREF.s); const k = scale / MREF.s; const tc = pr.translate(), tr = ref.translate();
    ctx.save(); ctx.fillStyle = '#16110f'; ctx.fillRect(0, 0, W, H); ctx.setTransform(k, 0, 0, k, tc[0] - (tr[0] + MREF.ox) * k + 0 * MREF.ox, tc[1] - (tr[1] + MREF.oy) * k); ctx.drawImage(S10.memRef(), 0, 0); ctx.restore();
    // the reference translate was offset by (ox,oy) inside the canvas: correct position = tc + (p_ref_canvas - (tr+o))·k → handled above
    return pr; };
  /** small hand-drawn mountain glyphs along a range line (old-map hachures) */
  S10.peaks = (ctx, pr, line, o = {}) => { const pts = MG.path.spline(line.map((c) => pr(c)), 6); let L = 0; for (let i = 1; i < pts.length; i++) L += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); const n = Math.max(3, Math.floor(L / (o.step || 26))); const a = o.alpha ?? 1;
    for (let i = 0; i < n; i++) { const [x, y] = MG.path.along(pts, (i + 0.5) / n); const s = (o.size || 16) * (0.75 + MG.rand(77, i) * 0.6); ctx.save(); ctx.globalAlpha = a; ctx.fillStyle = 'rgba(10,6,4,0.55)'; ctx.beginPath(); ctx.moveTo(x - s, y + s * 0.5); ctx.lineTo(x + s * 0.15, y - s); ctx.lineTo(x + s * 1.2, y + s * 0.5); ctx.fill(); ctx.fillStyle = o.lit || 'rgba(230,210,180,0.75)'; ctx.beginPath(); ctx.moveTo(x - s, y + s * 0.5); ctx.lineTo(x + s * 0.15, y - s); ctx.lineTo(x - s * 0.05, y + s * 0.5); ctx.fill(); ctx.fillStyle = o.dark || 'rgba(70,52,60,0.85)'; ctx.beginPath(); ctx.moveTo(x + s * 0.15, y - s); ctx.lineTo(x + s, y + s * 0.5); ctx.lineTo(x - s * 0.05, y + s * 0.5); ctx.fill(); ctx.restore(); } };

  // ================================================================== 04 LOCATE (1517.95–1521.15)
  const VALLE = [-4.1556, 40.6417];
  const LOC_V = (t) => MG.geo.view(t, [[1517.95, { center: [-3.75, 40.25], scale: 7600 }], [1518.7, { center: [-3.8, 40.3], scale: 8200 }, 'soft'], [1520.35, { center: [-3.98, 40.53], scale: 27000 }, 'cam'], [1521.4, { center: [-4.03, 40.56], scale: 30000 }, 'soft']]);
  const LOCATE = { id: 's10_locate', start: COIN_END, end: 1521.15, transIn: TR.circle(960, 540, 284, 0.85),
    init() { S10.memRef(); },
    draw(ctx, t) {
      const v = LOC_V(t); const pr = S10.memBase(ctx, v.center, v.scale); const mad = MG.geo.cities.Madrid;
      // Comunidad de Madrid outline + Sierra de Guadarrama glyphs
      const z = clamp((v.scale - 9000) / 12000);
      MG.geo.draw(ctx, pr, MG.geo.region('Madrid'), { stroke: `rgba(245,184,90,${0.15 + 0.3 * z})`, width: 1.6, dash: [6, 6] });
      const sierra = MG.geo.ranges.SistemaCentral.slice(3); S10.peaks(ctx, pr, sierra, { size: 8 + 12 * z, step: 16 + 16 * z, alpha: 0.5 + 0.5 * z });
      if (z > 0.3) { const lp = MG.path.spline(sierra.map((c) => pr(c)), 6).map(([x, y]) => [x, y - 30 - 10 * z]); MG.text.onPath(ctx, 'SIERRA DE GUADARRAMA', lp, { font: MG.F.mono, weight: 500, size: 20, tracking: 0.28, color: 'rgba(230,223,208,0.7)', offset: 0.55, reveal: prog(t, 1519.6, 1520.6, 'linear') }); }
      // Madrid
      MG.geo.label(ctx, pr, mad, { text: 'MADRID', t, t0: 1518.5, dot: 6, dotColor: C.bone, dotRing: '#16110f', color: C.bone, size: 28, weight: 700, dx: 16, dy: 10, font: MG.F.grotesk, tracking: 0.12 });
      // ruler Madrid → Cuelgamuros
      const a = pr(mad), b = pr(VALLE); const rp = prog(t, 1520.1, 1520.8);
      if (rp > 0) { ctx.save(); ctx.strokeStyle = 'rgba(230,223,208,0.8)'; ctx.lineWidth = 2; ctx.setLineDash([8, 6]); ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(lerp(a[0], b[0], rp), lerp(a[1], b[1], rp)); ctx.stroke(); ctx.setLineDash([]); const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2; ctx.globalAlpha = prog(t, 1520.5, 1520.9); TX.draw(ctx, '45 KM · 28 MI', mx + 22, my + 34, { font: MG.F.mono, weight: 500, size: 20, color: C.bone, tracking: 0.14 }); ctx.restore(); }
      // the valley
      const tv = 1518.3; MG.geo.pulse(ctx, pr, VALLE, t, { color: C.candle, r: 40, rings: 2, alpha: 0.7 * prog(t, tv, tv + 0.4) });
      MG.geo.label(ctx, pr, VALLE, { t, t0: tv, dot: 8, dotColor: C.candle, dotRing: '#16110f', text: '' });
      if (t > tv) { const p = pr(VALLE); const lx = p[0] - 120, ly = p[1] - 150; const k = prog(t, tv + 0.2, tv + 0.8);
        ctx.save(); ctx.strokeStyle = MG.col.a(C.candle, 0.9); ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(lerp(p[0], lx, k), lerp(p[1], ly, k)); ctx.lineTo(lerp(p[0], lx, k) - 240 * k, lerp(p[1], ly, k)); ctx.stroke(); ctx.restore();
        TX.kick(ctx, 'Valley of Cuelgamuros', lx, ly - 18, t, tv + 0.4, { align: 'right', size: 22, color: C.candle });
        TX.kick(ctx, '40.64° N · 4.16° W', lx, ly + 30, t, 1519.4, { align: 'right', size: 18, color: 'rgba(230,223,208,0.75)', tracking: 0.18 });
        TX.big(ctx, '1975 – 2019', lx, ly - 52, t, wt('2019', 1518.45) - 0.2, { font: MG.F.cond, weight: 900, size: 92, align: 'right', color: C.bone, by: 'char', stagger: 0.03, shadow: SH(0.7, 18, 6) });
        TX.kick(ctx, "Franco's tomb", lx, ly - 160, t, wt('lay', 1519.89) - 0.2, { align: 'right', size: 20, color: 'rgba(230,223,208,0.75)' }); }
      lightPool(ctx, 900, 480, 900, '#ffcf8a', 0.12, 0.5);
    },
    post: { grade: 'warm', grain: 0.05, vignette: 0.45, sat: 0.92 } };

  // ================================================================== 05 MONUMENT (1521.15–1528.55)
  const MON_RES = 1.3;
  S10.monSky = () => MG.cache('s10:monsky', W, H, (x, w, h) => {
    const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, '#120d0c'); g.addColorStop(0.42, '#2a1d19'); g.addColorStop(0.7, '#6a3522'); g.addColorStop(0.84, '#b5602e'); g.addColorStop(1, '#d98a45'); x.fillStyle = g; x.fillRect(0, 0, w, h);
    MG.tex.over(x, 'blotch', { alpha: 0.18, color: '#000', scale: 2 });
    for (let i = 0; i < 9; i++) { const yy = 330 + i * 52 + MG.rand(3, i) * 20; x.fillStyle = MG.col.a(i < 4 ? '#1d1513' : '#7a3a22', 0.35 + MG.rand(4, i) * 0.25); x.beginPath(); x.ellipse(MG.rand(5, i) * w, yy, 300 + MG.rand(6, i) * 500, 7 + MG.rand(7, i) * 9, 0, 0, TAU); x.fill(); }
  });
  S10.monFar = () => MG.cache('s10:monfar', 2600, 700, (x, w, h) => {
    const ridge = (base, amp, f, col, seed) => { x.fillStyle = col; x.beginPath(); x.moveTo(0, h); for (let xx = 0; xx <= w; xx += 10) x.lineTo(xx, base - Math.abs(MG.fbm(xx * f + seed, seed, 4)) * amp - MG.noise2(xx * f * 0.3, seed) * amp * 0.5); x.lineTo(w, h); x.fill(); };
    ridge(380, 260, 0.0025, '#5a3a35', 1); ridge(470, 210, 0.0034, '#3f2a2a', 7); ridge(560, 150, 0.005, '#2c1f20', 13);
    const g = x.createLinearGradient(0, 200, 0, h); g.addColorStop(0, 'rgba(217,138,69,0)'); g.addColorStop(1, 'rgba(217,138,69,0.25)'); x.fillStyle = g; x.fillRect(0, 0, w, h);
  });
  /** the monument in world coordinates (origin mid-rock; cross base y=-80, top y=-640 → 150 m = 560 px) */
  S10.monument = () => MG.cache('s10:monument', 2400 * MON_RES, 1500 * MON_RES, (x) => {
    x.scale(MON_RES, MON_RES); x.translate(1200, 720);
    const L = [-0.62, -0.78];
    // pines behind the rock
    const pine = (px, py, s, col) => { x.fillStyle = col; x.fillRect(px - 2 * s, py - 60 * s, 4 * s, 60 * s); for (let k = 0; k < 3; k++) { x.beginPath(); x.ellipse(px + (k - 1) * 10 * s, py - 70 * s - k * 6 * s, 26 * s, 11 * s, 0, 0, TAU); x.fill(); } };
    for (let i = 0; i < 70; i++) pine(-1200 + MG.rand(41, i) * 2400, 260 + MG.rand(42, i) * 160, 0.8 + MG.rand(43, i) * 0.7, MG.col.mix('#1e1a17', '#2e2622', MG.rand(44, i)));
    // granite outcrop (Risco de la Nava)
    const rockPts = [[-1220, 430], [-1080, 330], [-940, 268], [-800, 196], [-660, 120], [-520, 48], [-380, -20], [-250, -62], [-110, -84], [40, -86], [170, -72], [300, -36], [430, 22], [580, 96], [740, 170], [900, 240], [1060, 312], [1220, 400], [1220, 520], [-1220, 520]];
    const rock = MG.path.smooth(rockPts, true, 0.4);
    x.save(); x.shadowColor = 'rgba(0,0,0,0.5)'; x.shadowBlur = 40; x.fillStyle = '#6d5e55'; x.fill(rock); x.restore();
    MG.fx.volume(x, rock, [-1220, -90, 2440, 620], { color: '#7a6a5e', light: L, shade: 0.55, shadeColor: '#3a2f38', hi: 0.4, hiColor: '#e0a070', soft: 0.12, tex: 'blotch', texAlpha: 0.3 });
    // boulders
    const r = MG.rng(1521);
    for (let i = 0; i < 26; i++) { const u = r(); const bx = lerp(-900, 900, u); const topY = kf(bx, [[-1000, 300], [-500, 60], [-120, -70], [120, -70], [500, 60], [1000, 300]]); const by = topY + 30 + r() * 160; const br = 40 + r() * 90; const bp = MG.path.blob(bx, by, br, { seed: i + 3, irr: 0.16, sx: 1.25, sy: 0.85 });
      MG.fx.volume(x, bp, [bx - br * 1.4, by - br, br * 2.8, br * 2], { color: MG.col.mix('#7f6f62', '#9a8574', r()), light: L, shade: 0.6, shadeColor: '#352b35', hi: 0.45, hiColor: '#f0b07a', soft: 0.2, tex: 'blotch', texAlpha: 0.25 }); }
    x.save(); x.clip(rock); MG.fx.hatch(x, rock, [-1220, -90, 2440, 620], { spacing: 7, angle: -30, light: L, color: 'rgba(25,15,20,0.25)', threshold: 0.15 }); x.restore();
    for (let i = 0; i < 30; i++) { const sx = -800 + r() * 1600; const pts = []; let px = sx, py = kf(sx, [[-1000, 300], [-500, 60], [0, -70], [500, 60], [1000, 300]]) + 20 + r() * 60; for (let k = 0; k < 6; k++) { pts.push([px, py]); px += (r() - 0.5) * 30; py += 18 + r() * 18; } MG.fx.ink(x, pts, { width: 2.2, color: 'rgba(20,12,14,0.55)', taper: [0.1, 0.8] }); }
    // esplanade + exedra arcades + basilica portal
    const esp = new Path2D(); esp.moveTo(-1220, 372); esp.lineTo(1220, 372); esp.lineTo(1220, 520); esp.lineTo(-1220, 520); esp.closePath();
    const eg = x.createLinearGradient(0, 372, 0, 520); eg.addColorStop(0, '#7b6a5c'); eg.addColorStop(1, '#a08a74'); x.fillStyle = eg; x.fill(esp);
    x.strokeStyle = 'rgba(40,26,22,0.35)'; x.lineWidth = 1.5; for (let i = -14; i <= 14; i++) { x.beginPath(); x.moveTo(i * 22, 376); x.lineTo(i * 150, 520); x.stroke(); } for (let yy = 384; yy < 520; yy += (yy - 360) * 0.25 + 4) { x.beginPath(); x.moveTo(-1220, yy); x.lineTo(1220, yy); x.stroke(); }
    const arcade = (side) => { for (let i = 0; i < 13; i++) { const u = i / 12; const ax = side * lerp(150, 1050, u); const s = lerp(0.8, 1.55, u); const aw = 52 * s, ah = 92 * s, base = 372 + 10 * u; x.fillStyle = '#8a7766'; x.fillRect(ax - aw * 0.62, base - ah - 26 * s, aw * 1.24, ah + 26 * s); x.fillStyle = '#140d0b'; x.beginPath(); x.moveTo(ax - aw * 0.4, base); x.lineTo(ax - aw * 0.4, base - ah * 0.62); x.arc(ax, base - ah * 0.62, aw * 0.4, Math.PI, 0); x.lineTo(ax + aw * 0.4, base); x.fill(); x.fillStyle = side < 0 ? 'rgba(255,190,120,0.22)' : 'rgba(30,20,30,0.3)'; x.fillRect(ax - aw * 0.62, base - ah - 26 * s, aw * 0.18, ah + 26 * s); } x.fillStyle = '#6e5e52'; x.fillRect(side < 0 ? -1100 : 140, 372 - 150 - 20, 960, 22); };
    arcade(-1); arcade(1);
    x.fillStyle = '#9c8874'; x.fillRect(-120, 196, 240, 176); x.fillStyle = 'rgba(30,20,28,0.35)'; x.fillRect(60, 196, 60, 176); x.fillStyle = 'rgba(255,200,140,0.25)'; x.fillRect(-120, 196, 18, 176);
    x.fillStyle = '#0d0807'; x.beginPath(); x.moveTo(-50, 372); x.lineTo(-50, 268); x.arc(0, 268, 50, Math.PI, 0); x.lineTo(50, 372); x.fill();
    const pg = x.createRadialGradient(0, 330, 4, 0, 330, 60); pg.addColorStop(0, 'rgba(255,170,90,0.55)'); pg.addColorStop(1, 'rgba(255,170,90,0)'); x.fillStyle = pg; x.fillRect(-60, 230, 120, 142);
    x.fillStyle = '#7d6c5d'; x.fillRect(-140, 362, 280, 10); x.fillRect(-160, 352, 320, 8);
    // the cross: pedestal with sculpture masses, shaft, arms (front face + shaded side)
    const blk = (x0, y0, x1, y1, d = 12) => { x.fillStyle = '#4a3f4a'; x.beginPath(); x.moveTo(x1, y0); x.lineTo(x1 + d, y0 - d * 0.6); x.lineTo(x1 + d, y1 - d * 0.6); x.lineTo(x1, y1); x.fill(); x.fillStyle = '#c4ae94'; x.beginPath(); x.moveTo(x0, y0); x.lineTo(x0 + d, y0 - d * 0.6); x.lineTo(x1 + d, y0 - d * 0.6); x.lineTo(x1, y0); x.fill(); const g = x.createLinearGradient(x0, 0, x1, 0); g.addColorStop(0, '#b8a28a'); g.addColorStop(1, '#7c6c62'); x.fillStyle = g; x.fillRect(x0, y0, x1 - x0, y1 - y0); };
    blk(-100, -122, 100, -80, 14); blk(-78, -168, 78, -122, 13);
    for (const sx of [-1, 1]) for (const k of [0, 1]) { const fx = sx * (54 + k * 10), fy = -150 - k * 4; const fp = MG.path.blob(fx, fy, 22, { seed: 9 + sx + k * 3, irr: 0.25, sx: 0.8, sy: 1.5 }); MG.fx.volume(x, fp, [fx - 25, fy - 40, 50, 80], { color: '#9a8672', light: L, shade: 0.6, shadeColor: '#3c3140', hi: 0.4, soft: 0.25 }); }
    blk(-46, -205, 46, -168, 12);
    blk(-17, -640, 17, -205, 13); blk(-88, -476, 88, -440, 13);
    x.strokeStyle = 'rgba(40,28,30,0.35)'; x.lineWidth = 1.2; for (let yy = -620; yy < -205; yy += 22) { x.beginPath(); x.moveTo(-17, yy); x.lineTo(17, yy); x.stroke(); } for (let xx = -80; xx < 88; xx += 24) { x.beginPath(); x.moveTo(xx, -476); x.lineTo(xx, -440); x.stroke(); }
    x.fillStyle = 'rgba(255,190,120,0.45)'; x.fillRect(-17, -640, 3, 435); x.fillRect(-88, -476, 3, 36);
    MG.tex.over(x, 'grain', { alpha: 0.12 });
  });
  S10.branches = () => MG.cache('s10:branch', 900, 520, (x, w, h) => { x.strokeStyle = '#0c0a08'; x.fillStyle = '#0c0a08'; x.lineCap = 'round'; const r = MG.rng(88); const br = (px, py, a, l, wd, d) => { const ex = px + Math.cos(a) * l, ey = py + Math.sin(a) * l; x.lineWidth = wd; x.beginPath(); x.moveTo(px, py); x.lineTo(ex, ey); x.stroke(); for (let k = 0; k < 16; k++) { const u = k / 16; const nx = lerp(px, ex, u), ny = lerp(py, ey, u); for (const s of [-1, 1]) { x.lineWidth = 2; x.beginPath(); x.moveTo(nx, ny); x.lineTo(nx + Math.cos(a + s * 1.1) * 28, ny + Math.sin(a + s * 1.1) * 28); x.stroke(); } } if (d > 0) for (let k = 0; k < 3; k++) br(lerp(px, ex, 0.3 + k * 0.25), lerp(py, ey, 0.3 + k * 0.25), a + (r() - 0.5) * 1.6, l * 0.5, wd * 0.6, d - 1); }; br(-20, 60, 0.25, 900, 18, 2); });
  // prisoners (historical ghost layer): tiny figures on scaffolding with picks — on twos
  S10.prisoner = (ctx, x, y, s, pose, t, seed) => { const tt = MG.kit.twos(t + seed * 0.37); const swing = Math.sin(tt * 5.2 + seed) * 0.5 + 0.5; ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = '#1b1411'; ctx.strokeStyle = '#1b1411'; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.ellipse(0, -30, 4.2, 4.6, 0, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.moveTo(-5, -25); ctx.lineTo(5, -25); ctx.lineTo(4, -10); ctx.lineTo(-4, -10); ctx.fill(); ctx.lineWidth = 3.2; ctx.beginPath(); ctx.moveTo(-2.5, -10); ctx.lineTo(-4 - swing, 0); ctx.moveTo(2.5, -10); ctx.lineTo(4, 0); ctx.stroke();
    if (pose === 'pick') { const a = lerp(-2.4, -0.3, MG.ease.inQuad(swing)); ctx.lineWidth = 2.6; ctx.beginPath(); ctx.moveTo(2, -22); ctx.lineTo(2 + Math.cos(a) * 12, -22 + Math.sin(a) * 12); ctx.stroke(); ctx.lineWidth = 1.8; const hx = 2 + Math.cos(a) * 22, hy = -22 + Math.sin(a) * 22; ctx.beginPath(); ctx.moveTo(2, -22); ctx.lineTo(hx, hy); ctx.stroke(); ctx.lineWidth = 2.2; ctx.beginPath(); ctx.moveTo(hx + Math.cos(a + 1.57) * 6, hy + Math.sin(a + 1.57) * 6); ctx.lineTo(hx - Math.cos(a + 1.57) * 6, hy - Math.sin(a + 1.57) * 6); ctx.stroke(); }
    else { ctx.lineWidth = 2.6; ctx.beginPath(); ctx.moveTo(-4, -22); ctx.lineTo(-8, -32); ctx.moveTo(4, -22); ctx.lineTo(8, -32); ctx.stroke(); ctx.fillStyle = '#5a4a40'; ctx.beginPath(); ctx.ellipse(0, -38 + swing * 1.5, 9, 5, 0, 0, TAU); ctx.fill(); }
    ctx.restore(); };
  const MON_CAM = (t) => kf(t, [[1521.15, { x: -60, y: 235, z: 238 }], [1524.95, { x: 10, y: 205, z: 286 }, 'soft'], [1526.35, { x: 30, y: -128, z: -96 }, 'cam'], [1528.9, { x: 18, y: -150, z: -70 }, 'soft']]);
  const MONUMENT = { id: 's10_monument', start: 1521.15, end: 1528.55, transIn: (() => { const v = LOC_V(1521.15); const p = S10.mproj(v.center, v.scale)(VALLE); return { type: 'zoom', dur: 0.6, x: p[0], y: p[1], amount: 2.4, from: 0.8 }; })(),
    init() { S10.monSky(); S10.monFar(); S10.monument(); S10.branches(); },
    draw(ctx, t) {
      const c = MON_CAM(t); const hh = MG.cam.handheld(t, 2, 11); const cam = { x: c.x, y: c.y, z: c.z, focal: 1000, dx: hh.dx, dy: hh.dy };
      ctx.drawImage(S10.monSky(), 0, (c.y - 235) * -0.08);
      // the last sun sinks behind the sierra (sun-disk motif, dusk)
      const sp = MG.depth.project(cam, 900, 330, 3200); MG.kit.sun(ctx, sp[0], sp[1] + 40, 60, t, { corona: 0.5, halftone: 0.3, color: '#E98A3A', deep: '#B4502A' });
      const mon = S10.monument(), far = S10.monFar();
      MG.depth.stage(ctx, cam, [
        { z: 2600, draw: (x) => { x.drawImage(far, -2600, -620, 5200, 1400); } },
        { z: 1000, draw: (x) => {
          x.drawImage(mon, -1200, -720, 2400, 1500);
          // ghost layer: political prisoners carving the mountain (1940–58), sepia, fades with the crane
          const gk = win(t, wt('carved', 1521.89) - 0.3, 1525.6, 0.6, 0.8);
          if (gk > 0) { x.save(); x.globalAlpha = gk * 0.9;
            x.strokeStyle = 'rgba(120,90,60,0.9)'; x.lineWidth = 3; for (const px of [-330, -270, -210, -150]) { x.beginPath(); x.moveTo(px, 372); x.lineTo(px, 150); x.stroke(); } for (const py of [180, 250, 320]) { x.beginPath(); x.moveTo(-350, py); x.lineTo(-130, py); x.stroke(); }
            const F = [[-300, 180, 'pick'], [-235, 180, 'carry'], [-175, 250, 'pick'], [-290, 320, 'pick'], [-200, 320, 'carry'], [-120, 372, 'carry'], [160, 372, 'carry'], [230, 372, 'pick'], [-430, 372, 'pick']];
            F.forEach(([px, py, pose], i) => S10.prisoner(x, px, py, 1.05, pose, t, i));
            x.restore(); }
          // scale comparison (150 m cross): ruler, ghost 40-storey tower, magnified 1.8 m person
          const t5 = wt('500', 1526.45); const rk = prog(t, 1525.7, 1526.5);
          if (rk > 0) { x.save(); x.strokeStyle = C.bone; x.lineWidth = 2.2; const top = lerp(-80, -640, rk); x.beginPath(); x.moveTo(190, -80); x.lineTo(190, top); x.stroke(); for (let m = 0; m <= 150; m += 25) { const yy = -80 - m * 560 / 150; if (yy < top - 1) break; x.beginPath(); x.moveTo(190, yy); x.lineTo(m % 50 ? 202 : 212, yy); x.stroke(); }
            x.restore();
            const FR = MG.LANG === 'fr'; const ft = Math.round(MG.text.count(t, t5 - 0.1, t5 + 0.8, 0, FR ? 150 : 492, { sep: false }).replace(/[,\s\u202f]/g, '')); const fk = prog(t, t5 - 0.2, t5 + 0.2);
            x.save(); x.globalAlpha = fk; TX.draw(x, FR ? `${ft} M` : `${ft >= 492 ? '≈ 500' : ft} FT`, 226, -600, { size: 74, color: C.bone, shadow: SH(0.6, 14, 4) }); TX.draw(x, FR ? 'HEIGHT' : '150 M', 230, -560, { font: MG.F.mono, weight: 500, size: 22, color: C.candle, tracking: 0.2 }); x.restore();
            const tk = prog(t, wt('feet', 1527.25) - 0.3, wt('feet', 1527.25) + 0.4); if (tk > 0) { x.save(); x.globalAlpha = tk; x.strokeStyle = 'rgba(230,223,208,0.55)'; x.setLineDash([5, 5]); x.lineWidth = 1.6; x.strokeRect(-330, -640, 104, 560); x.setLineDash([]); for (let f = 1; f < 40; f++) { const yy = -80 - f * 14; x.globalAlpha = tk * 0.35; x.beginPath(); x.moveTo(-326, yy); x.lineTo(-230, yy); x.stroke(); } x.globalAlpha = tk; TX.draw(x, '40-STOREY TOWER', -278, -660, { font: MG.F.mono, weight: 500, size: 16, color: C.bone, align: 'center', tracking: 0.16 }); x.restore(); }
            const hk = prog(t, wt('tall', 1527.49) - 0.2, wt('tall', 1527.49) + 0.4); if (hk > 0) { x.save(); x.globalAlpha = hk; x.fillStyle = C.bone; x.fillRect(122, -86.7, 2.2, 6.7); x.strokeStyle = C.bone; x.lineWidth = 1.2; x.beginPath(); x.arc(123, -84, 10, 0, TAU); x.stroke(); x.beginPath(); x.moveTo(130, -91); x.lineTo(300, -230); x.stroke(); x.beginPath(); x.arc(340, -262, 52, 0, TAU); x.fillStyle = 'rgba(20,14,12,0.85)'; x.fill(); x.stroke(); S10.prisoner(x, 340, -228, 1.9, 'carry', 0, 2); TX.draw(x, '1.8 M', 340, -186, { font: MG.F.mono, weight: 500, size: 16, color: C.bone, align: 'center', tracking: 0.16 }); x.restore(); }
          }
        } },
        { z: 430, blur: 9, draw: (x) => { x.save(); x.globalAlpha = 0.9; x.drawImage(S10.branches(), -980, -760, 900, 520); x.scale(-1, 1); x.drawImage(S10.branches(), -990, -720, 900, 520); x.restore(); } },
      ]);
      // labels (screen space)
      TX.kick(ctx, 'Carved into the mountain', 150, 150, t, wt('carved', 1521.89) - 0.1, { size: 22, out: { at: 1525.1, dur: 0.4 } });
      TX.big(ctx, 'by political prisoners', 146, 236, t, wt('political', 1523.77) - 0.1, { font: MG.F.serif, italic: true, weight: 400, size: 76, out: { at: 1525.1, style: 'blur', dur: 0.4 }, shadow: SH(0.7, 20, 6) });
      TX.kick(ctx, 'A cross nearly 500 feet tall', 150, 960, t, wt('cross', 1525.49) - 0.2, { size: 22, color: C.bone });
      lightPool(ctx, 760, 420, 1100, '#ffb070', 0.1, 0.35);
    },
    post: { grade: 'warm', grain: 0.05, vignette: 0.5, sat: 0.9, contrast: 1.06, letterbox: 0.0 } };

  // ================================================================== 06 TOMB SLAB (1528.55–1530.75)
  S10.floorTex = () => MG.cache('s10:floor', W, H, (x, w, h) => { x.fillStyle = '#1f1b1a'; x.fillRect(0, 0, w, h); MG.tex.over(x, 'blotch', { alpha: 0.5, color: '#000', scale: 3 }); const r = MG.rng(19); for (let i = 0; i < 9000; i++) { x.fillStyle = r() < 0.5 ? 'rgba(220,210,200,0.10)' : 'rgba(0,0,0,0.3)'; x.fillRect(r() * w, r() * h, 1.5, 1.5); } x.strokeStyle = 'rgba(190,170,150,0.22)'; x.lineWidth = 3; x.strokeRect(330, 220, 1260, 640); x.lineWidth = 1.5; x.strokeRect(300, 190, 1320, 700); for (const xx of [0, 330, 1590, w]) { x.beginPath(); x.moveTo(xx, 0); x.lineTo(xx, h); x.stroke(); } });
  S10.slabTex = () => MG.cache('s10:slab', 840, 360, (x, w, h) => { const g = x.createLinearGradient(0, 0, w, h); g.addColorStop(0, '#5e5753'); g.addColorStop(1, '#3a3431'); x.fillStyle = g; x.fillRect(0, 0, w, h); const r = MG.rng(29); for (let i = 0; i < 6000; i++) { x.fillStyle = r() < 0.5 ? 'rgba(240,230,220,0.16)' : 'rgba(0,0,0,0.35)'; x.fillRect(r() * w, r() * h, 1.6, 1.6); } x.fillStyle = 'rgba(255,240,220,0.25)'; x.fillRect(0, 0, w, 4); x.fillRect(0, 0, 4, h); x.fillStyle = 'rgba(0,0,0,0.4)'; x.fillRect(0, h - 5, w, 5); x.fillRect(w - 5, 0, 5, h);
    const e = engraved('ff', 'FRANCISCO FRANCO', { font: MG.F.roman, weight: 700, size: 64, tracking: 0.12, w: 840, h: 140, depth: 3, floor: 'rgba(26,22,20,0.95)', lit: 'rgba(255,240,220,0.45)' }); x.drawImage(e, 0, h / 2 - 70); });
  const SLAB = { id: 's10_slab', start: 1528.55, end: 1530.75, transIn: TR.floor(0.95),
    draw(ctx, t) {
      const tr = wt('removed', 1529.49); const lift = prog(t, tr - 0.15, tr + 0.25, 'outCubic'), slide = MG.ease.inCubic(clamp((t - tr - 0.15) / 0.75));
      const z = lerp(1.0, 1.05, MG.ease.inOutSine(clamp((t - 1528.55) / 2.2))); const hh = MG.cam.handheld(t, 2, 5);
      ctx.save(); ctx.translate(960 + hh.dx, 540 + hh.dy); ctx.scale(z, z); ctx.translate(-960, -540);
      ctx.drawImage(S10.floorTex(), 0, 0);
      // the empty void beneath
      ctx.fillStyle = '#080605'; ctx.fillRect(540, 360, 840, 360); const ig = ctx.createLinearGradient(540, 360, 540, 440); ig.addColorStop(0, 'rgba(0,0,0,0.8)'); ig.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = ig; ctx.fillRect(540, 360, 840, 80);
      const dk = prog(t, tr + 0.5, tr + 1.0); if (dk > 0) { ctx.save(); ctx.globalAlpha = dk; ctx.strokeStyle = C.bone; ctx.setLineDash([10, 8]); ctx.lineWidth = 2; ctx.strokeRect(532, 352, 856, 376); ctx.restore(); }
      // the slab: lifts toward the lens, then slides away
      const sx = 540 + slide * 1500, sy = 360 - lift * 26; const ss = 1 + lift * 0.05;
      ctx.save(); ctx.translate(sx + 420, sy + 180); ctx.scale(ss, ss); ctx.shadowColor = 'rgba(0,0,0,0.75)'; ctx.shadowBlur = 10 + lift * 40; ctx.shadowOffsetX = 6 + lift * 30; ctx.shadowOffsetY = 8 + lift * 40; ctx.drawImage(S10.slabTex(), -420, -180); ctx.restore();
      ctx.restore();
      lightPool(ctx, 820, 430, 820, '#ffcf8a', 0.22, 0.65);
      TX.kick(ctx, 'His remains were removed', 540, 300, t, tr - 0.3, { size: 22, color: C.candle });
      TX.big(ctx, '24 October 2019', 540, 820, t, tr + 0.45, { font: MG.F.cond, weight: 800, size: 76, color: C.bone, by: 'char', stagger: 0.02, shadow: SH(0.6, 12, 4) });
    },
    post: { grade: 'warm', grain: 0.05, vignette: 0.55, sat: 0.85 } };

  // ================================================================== 07 EXCAVATION (1530.75–1534.40)
  S10.digGround = () => MG.cache('s10:dig', 3400, 2000, (x, w, h) => {
    x.fillStyle = '#9a7a55'; x.fillRect(0, 0, w, h); MG.tex.over(x, 'blotch', { alpha: 0.45, color: '#3a2412', scale: 3 }); MG.tex.over(x, 'fibers', { alpha: 1, color: '#2a1a0c' });
    const r = MG.rng(1930); for (let i = 0; i < 2600; i++) { const px = r() * w, py = r() * h, s = 1 + r() * 4; x.fillStyle = 'rgba(40,24,12,0.35)'; x.beginPath(); x.ellipse(px + s * 0.6, py + s * 0.6, s, s * 0.7, 0, 0, TAU); x.fill(); x.fillStyle = MG.col.mix('#b89870', '#6a4e34', r()); x.beginPath(); x.ellipse(px, py, s, s * 0.7, 0, 0, TAU); x.fill(); }
    for (let i = 0; i < 220; i++) { const px = r() * w, py = r() * h; x.strokeStyle = MG.col.mix('#6b6a3a', '#a69a5a', r()); x.lineWidth = 1.6; for (let k = 0; k < 7; k++) { const a = -Math.PI / 2 + (r() - 0.5) * 1.6; x.beginPath(); x.moveTo(px, py); x.lineTo(px + Math.cos(a) * (6 + r() * 14), py + Math.sin(a) * (6 + r() * 14)); x.stroke(); } }
    // pits (centre one at world 0,0 → canvas 1700,1000): walls + floor + spoil heaps
    const pit = (cx, cy, pw, ph, seed) => { const rr = MG.rng(seed); x.fillStyle = 'rgba(60,40,20,0.35)'; for (let k = 0; k < 9; k++) { x.beginPath(); x.ellipse(cx + pw / 2 + 70 + rr() * 60, cy - ph / 2 + rr() * ph, 50 + rr() * 50, 30 + rr() * 40, 0, 0, TAU); x.fill(); }
      x.fillStyle = '#5a3e28'; x.fillRect(cx - pw / 2, cy - ph / 2, pw, ph); const g = x.createLinearGradient(0, cy - ph / 2, 0, cy - ph / 2 + 70); g.addColorStop(0, '#2a1a10'); g.addColorStop(1, 'rgba(42,26,16,0)'); x.fillStyle = g; x.fillRect(cx - pw / 2, cy - ph / 2, pw, 70);
      x.fillStyle = '#7a5a3a'; x.fillRect(cx - pw / 2, cy + ph / 2 - 26, pw, 26); MG.tex.over(x, 'blotch', { alpha: 0.4, color: '#1a0e06', scale: 5, path: MG.path.rr(cx - pw / 2, cy - ph / 2, pw, ph, 2) });
      for (let k = 0; k < 7; k++) { x.fillStyle = 'rgba(30,18,10,0.4)'; x.beginPath(); x.ellipse(cx - pw / 2 + 80 + rr() * (pw - 160), cy - ph / 2 + 80 + rr() * (ph - 160), 30 + rr() * 60, 16 + rr() * 30, rr(), 0, TAU); x.fill(); } };
    pit(1700, 1000, 840, 360, 3); pit(1700 - 1250, 1000 + 520, 560, 300, 4); pit(1700 + 1180, 1000 - 560, 620, 280, 5);
    // string grid, pegs, tags
    x.strokeStyle = 'rgba(250,245,235,0.85)'; x.lineWidth = 1.6; for (let i = 0; i <= 8; i++) { const xx = 1700 - 420 + i * 105; x.beginPath(); x.moveTo(xx, 1000 - 200); x.lineTo(xx, 1000 + 200); x.stroke(); } for (let j = 0; j <= 4; j++) { const yy = 1000 - 180 + j * 90; x.beginPath(); x.moveTo(1700 - 440, yy); x.lineTo(1700 + 440, yy); x.stroke(); }
    for (let i = 0; i <= 8; i++) for (const yy of [1000 - 200, 1000 + 200]) { x.fillStyle = '#d9c9a0'; x.fillRect(1700 - 420 + i * 105 - 4, yy - 4, 8, 8); }
    for (let k = 0; k < 6; k++) { const tx0 = 1700 - 330 + k * 120 + (k % 2) * 30, ty0 = 1000 - 120 + (k % 3) * 80; x.fillStyle = '#f2ead8'; x.fillRect(tx0, ty0, 26, 18); x.fillStyle = '#b8322a'; x.fillRect(tx0, ty0, 26, 4); MG.text.draw(x, String(k + 1), tx0 + 13, ty0 + 15, { font: MG.F.mono, weight: 700, size: 11, color: '#222', align: 'center' }); }
    // tools: ranging pole, bucket, sieve, trowel, tape
    for (let s = 0; s < 8; s++) { x.fillStyle = s % 2 ? '#eee6d6' : '#a8372b'; x.fillRect(1700 - 420 + s * 60, 1000 + 228, 60, 12); }
    const bucket = (bx, by) => { x.fillStyle = 'rgba(30,18,10,0.45)'; x.beginPath(); x.ellipse(bx + 18, by + 20, 44, 38, 0, 0, TAU); x.fill(); x.fillStyle = '#2d5f8a'; x.beginPath(); x.arc(bx, by, 40, 0, TAU); x.fill(); x.fillStyle = '#5a3e28'; x.beginPath(); x.arc(bx, by, 32, 0, TAU); x.fill(); x.strokeStyle = '#1a3a55'; x.lineWidth = 3; x.beginPath(); x.arc(bx, by, 40, 0, TAU); x.stroke(); };
    bucket(1700 + 520, 1000 - 150); bucket(1700 + 600, 1000 - 60); bucket(1700 - 560, 1000 + 120);
    x.fillStyle = '#6a4a2a'; x.beginPath(); x.arc(1700 - 600, 1000 - 170, 60, 0, TAU); x.fill(); x.strokeStyle = 'rgba(30,20,10,0.6)'; x.lineWidth = 1; for (let k = -55; k < 60; k += 8) { x.beginPath(); x.moveTo(1700 - 660, 1000 - 170 + k); x.lineTo(1700 - 540, 1000 - 170 + k); x.stroke(); x.beginPath(); x.moveTo(1700 - 600 + k, 1000 - 230); x.lineTo(1700 - 600 + k, 1000 - 110); x.stroke(); }
    x.fillStyle = '#c8b030'; x.fillRect(1700 + 140, 1000 + 250, 300, 10);
  });
  /** a volunteer kneeling at the pit, seen from above (3/4 top view). a: facing angle (toward the pit), work: arm cycle */
  S10.kneeler = (ctx, x, y, a, s, t, seed, o = {}) => {
    const tt = MG.kit.twos(t + seed * 0.21); const scrub = Math.sin(tt * 7 + seed) ; const bob = Math.sin(tt * 3.5 + seed) * 1.5;
    ctx.save(); ctx.translate(x, y); ctx.rotate(a); ctx.scale(s, s);
    // cast shadow
    ctx.save(); ctx.translate(14, 18); ctx.rotate(-a); ctx.fillStyle = 'rgba(30,16,8,0.35)'; ctx.beginPath(); ctx.ellipse(0, 0, 44, 26, 0.6, 0, TAU); ctx.fill(); ctx.restore();
    // shins & soles behind
    ctx.fillStyle = o.trousers || '#4a4a3e'; ctx.beginPath(); ctx.roundRect(-26, 22, 18, 50, 8); ctx.roundRect(8, 22, 18, 50, 8); ctx.fill(); ctx.fillStyle = '#2a2018'; ctx.beginPath(); ctx.roundRect(-27, 64, 20, 16, 6); ctx.roundRect(7, 64, 20, 16, 6); ctx.fill();
    // back / shoulders
    const back = MG.path.smooth([[-30, 18], [-34, -6], [-26, -24], [0, -30], [26, -24], [34, -6], [30, 18], [0, 30]], true);
    MG.fx.volume(ctx, back, [-36, -32, 72, 64], { color: o.shirt || '#8a6a4a', light: [-0.6, -0.8], shade: 0.5, hi: 0.35, cel: true, outline: 'rgba(30,20,12,0.6)', outlineW: 1.5, size: 60 });
    // arms reaching to the pit with brush/trowel
    const hx = scrub * 9, hy = -58 + bob;
    MG.fx.ink(ctx, [[-24, -16], [-22 + hx * 0.4, -38], [-12 + hx, hy]], { width: 13, color: o.shirt || '#8a6a4a', taper: [0, 0.2] }); MG.fx.ink(ctx, [[24, -16], [20 + hx * 0.3, -38], [10 + hx * 0.8, hy + 4]], { width: 13, color: MG.col.shade(o.shirt || '#8a6a4a', 0.15), taper: [0, 0.2] });
    ctx.fillStyle = o.skin || '#c98b62'; ctx.beginPath(); ctx.arc(-12 + hx, hy - 2, 6, 0, TAU); ctx.arc(10 + hx * 0.8, hy + 2, 6, 0, TAU); ctx.fill();
    ctx.fillStyle = '#c8b38a'; ctx.fillRect(-14 + hx, hy - 20, 5, 16); ctx.fillStyle = '#3a2a1a'; ctx.fillRect(-15 + hx, hy - 26, 7, 8);
    // head: straw hat or hair
    if (o.hat !== false) { ctx.fillStyle = 'rgba(30,16,8,0.3)'; ctx.beginPath(); ctx.ellipse(4, -22, 30, 24, 0, 0, TAU); ctx.fill(); const hat = MG.path.ellipse(0, -26 + bob * 0.5, 28, 23); MG.fx.volume(ctx, hat, [-28, -50, 56, 48], { color: '#d8c08a', light: [-0.6, -0.8], shade: 0.4, hi: 0.4, cel: true, size: 50 }); ctx.strokeStyle = 'rgba(90,60,30,0.6)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(0, -26 + bob * 0.5, 14, 11, 0, 0, TAU); ctx.stroke(); ctx.fillStyle = '#6a2a20'; ctx.beginPath(); ctx.ellipse(0, -26 + bob * 0.5, 15, 12, 0, 0, TAU); ctx.globalAlpha = 0.25; ctx.fill(); ctx.globalAlpha = 1; }
    else { const hd = MG.path.ellipse(0, -28 + bob * 0.5, 15, 17); MG.fx.volume(ctx, hd, [-16, -46, 32, 36], { color: o.hair || '#3a2a20', light: [-0.6, -0.8], shade: 0.4, hi: 0.3, cel: true, size: 30 }); }
    ctx.restore();
  };
  const DIG_Z = (t) => kf(t, [[1530.75, 1.0], [1531.3, 0.98, 'soft'], [1533.0, 0.6, 'cam'], [1534.9, 0.53, 'soft']]);
  const DIG = { id: 's10_dig', start: 1530.75, end: 1534.4, transIn: { type: 'blur', dur: 0.35, amount: 10 },
    init() { S10.digGround(); },
    draw(ctx, t) {
      const z = DIG_Z(t); const hh = MG.cam.handheld(t, 2.5, 8); const px = lerp(0, -60, clamp((t - 1531) / 3)), py = lerp(0, 30, clamp((t - 1531) / 3));
      ctx.save(); ctx.translate(960 + hh.dx, 540 + hh.dy); ctx.scale(z, z); ctx.translate(px, py);
      ctx.drawImage(S10.digGround(), -1700, -1000);
      // volunteers (on twos)
      S10.kneeler(ctx, -150, 248, 0, 1.25, t, 1, { shirt: '#7c8a8a' });
      S10.kneeler(ctx, 170, 252, 0.1, 1.25, t, 2, { shirt: '#a0563a', hat: false, hair: '#2a2420' });
      S10.kneeler(ctx, 492, 40, -Math.PI / 2, 1.25, t, 3, { shirt: '#6a6a50' });
      S10.kneeler(ctx, -1150, 760, 0.2, 1.15, t, 4, { shirt: '#5a6a7a' });
      S10.kneeler(ctx, 1260, -360, Math.PI - 0.1, 1.15, t, 5, { shirt: '#8a7a5a', hat: false });
      ctx.restore();
      // warm low sun, long shadows; grade toward sober
      const g = ctx.createLinearGradient(0, 0, W, H); g.addColorStop(0, 'rgba(255,200,140,0.14)'); g.addColorStop(1, 'rgba(40,20,30,0.35)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      TX.kick(ctx, 'Across the country', 140, 140, t, wt('across', 1530.81) - 0.1, { size: 22, color: C.cal, shadow: SH(0.7, 10, 2) });
      TX.lead(ctx, 'people are still searching', 136, 214, t, wt('people', 1531.93) - 0.1, { size: 58, color: C.cal, shadow: SH(0.7, 16, 4), out: { at: 1534.0, dur: 0.3 } });
    },
    post: { grade: 'warm', grain: 0.05, vignette: 0.42, sat: 0.78, contrast: 1.05 } };

  // ================================================================== 08 GRAVES MAP (1534.40–1539.55)
  const GR_FIRST = [-6.05, 38.62];
  const GR_V = (t) => MG.geo.view(t, [[1534.4, { center: GR_FIRST, scale: 36000 }], [1534.9, { center: GR_FIRST, scale: 30000 }, 'soft'], [1536.6, { center: [-1.9, 39.95], scale: 6500 }, 'cam'], [1539.6, { center: [-1.75, 39.95], scale: 6600 }, 'soft']]);
  S10.graveDots = () => { if (S10._gd) return S10._gd; MG.geo.init(); const d3 = window.d3; const Wt = { 'Andalusia': 0.27, 'Aragon': 0.1, 'Castile and León': 0.12, 'Catalonia': 0.12, 'Extremadura': 0.08, 'Castile-La Mancha': 0.07, 'Valencia': 0.05, 'Asturias': 0.04, 'Galicia': 0.035, 'Navarre': 0.03, 'La Rioja': 0.02, 'Madrid': 0.02, 'Basque Country': 0.015, 'Cantabria': 0.01, 'Murcia': 0.008, 'Balearic Islands': 0.01, 'Canary Islands': 0.006 };
    const sum = Object.values(Wt).reduce((a, b) => a + b, 0); const r = MG.rng(1936); const out = [GR_FIRST.concat([0, 0])];
    for (const f of MG.geo.regions.features) { const w = Wt[f.properties.en]; if (!w) continue; const n = Math.round(2060 * w / sum); const b = d3.geoBounds(f); let k = 0, guard = 0; while (k < n && guard++ < n * 60) { const lon = lerp(b[0][0], b[1][0], r()), lat = lerp(b[0][1], b[1][1], r()); if (d3.geoContains(f, [lon, lat])) { out.push([lon, lat, r(), f.properties.en === 'Canary Islands' ? 1 : 0]); k++; } } }
    S10._gd = out; return out; };
  const GR_COUNT = (t) => { const a = 1535.0, b = wt('2,000', 1537.97) + 0.1; return Math.floor(lerp(1, S10.graveDots().length, MG.ease.inOutSine(clamp((t - a) / (b - a))))); };
  S10.drawGraves = (ctx, pr, t, n, o = {}) => { const D = S10.graveDots(); const gl = glow(C.candle, 14); const k = o.alpha ?? 1;
    ctx.save(); for (let i = 0; i < D.length; i++) { const d = D[i]; if (d[3]) continue; const ord = i === 0 ? 0 : d[2]; if (ord * D.length > n) continue; const p = pr(d); if (!p) continue; const age = i === 0 ? 1 : clamp((n - ord * D.length) / 60); ctx.globalAlpha = k * (0.55 + 0.45 * age); ctx.drawImage(gl, p[0] - 14, p[1] - 14); ctx.fillStyle = i === 0 ? '#ffe1a8' : C.candle; ctx.fillRect(p[0] - 1.6, p[1] - 1.6, 3.2, 3.2); } ctx.restore(); };
  const GRAVES = { id: 's10_graves', start: 1534.4, end: 1539.55, transIn: TR.pullOut(960, 540, 1.0),
    init() { S10.memRef(); S10.graveDots(); },
    draw(ctx, t) {
      const v = GR_V(t); const pr = S10.memBase(ctx, v.center, v.scale); const n = GR_COUNT(t);
      MG.geo.draw(ctx, pr, MG.geo.regionMesh, { stroke: 'rgba(230,223,208,0.12)', width: 1 });
      S10.drawGraves(ctx, pr, t, n);
      if (t < 1535.4) MG.geo.pulse(ctx, pr, GR_FIRST, t, { color: C.candle, r: 30, rings: 2, alpha: 0.8 * (1 - prog(t, 1534.9, 1535.4)) });
      // Canary inset (whole country shown)
      const ia = prog(t, 1536.0, 1536.8) * (1 - prog(t, 1539.0, 1539.4)); if (ia > 0) { const ipr = MG.geo.canaryInset(ctx, [150, 832, 320, 150], { fill: '#4e3e33', frame: 'rgba(230,223,208,0.35)', labelColor: 'rgba(230,223,208,0.6)', alpha: ia }); ctx.save(); ctx.globalAlpha = ia; S10.graveDots().forEach((d) => { if (!d[3] || d[2] * S10.graveDots().length > n) return; const p = ipr(d); ctx.drawImage(glow(C.candle, 14), p[0] - 14, p[1] - 14); ctx.fillStyle = C.candle; ctx.fillRect(p[0] - 1.6, p[1] - 1.6, 3.2, 3.2); }); ctx.restore(); }
      // read-out
      const tU = wt('unmarked', 1534.49), tC = wt('civil', 1535.77), t2 = wt('2,000', 1537.97), out = { at: 1539.05, dur: 0.4 };
      TX.kick(ctx, 'Unmarked graves', 1490, 380, t, tU, { size: 24, out });
      const cnt = Math.min(2000, Math.round(lerp(0, 2000, MG.ease.inOutSine(clamp((t - 1535.2) / (t2 + 0.05 - 1535.2))))));
      const ck = prog(t, 1535.1, 1535.5) * (1 - prog(t, 1539.05, 1539.45));
      if (ck > 0) { ctx.save(); ctx.globalAlpha = ck; const FRn = MG.LANG === 'fr'; const wnum = TX.draw(ctx, fmt(cnt), 1484, 590, { size: FRn ? 168 : 210, color: C.bone, shadow: SH(0.6, 30, 10) }); const pk = prog(t, t2 + 0.15, t2 + 0.45, 'outBack'); if (pk > 0) TX.draw(ctx, '+', 1484 + wnum + 8, FRn ? 572 : 560, { size: (FRn ? 120 : 150) * pk, color: C.candle }); ctx.restore(); }
      TX.lead(ctx, 'from the Civil War', 1490, 668, t, tC - 0.1, { size: 50, out });
      TX.kick(ctx, '1936 – 1939', 1492, 724, t, tC + 0.3, { size: 20, color: 'rgba(230,223,208,0.7)', out });
      TX.kick(ctx, 'Each light: one grave site · schematic', 1492, 1000, t, 1536.4, { size: 16, color: 'rgba(230,223,208,0.45)', tracking: 0.12, out });
      lightPool(ctx, 760, 520, 1000, '#ffcf8a', 0.08, 0.4);
    },
    post: { grade: 'warm', grain: 0.05, vignette: 0.45, sat: 0.9 } };

  // ================================================================== 09 THE CLOTH (1539.55–1544.35)
  const CL_V = { center: [-1.75, 39.95], scale: 6600 };
  S10.graveMapStill = () => MG.cache('s10:gstill', W, H, (x) => { const pr = S10.memBase(x, CL_V.center, CL_V.scale); MG.geo.draw(x, pr, MG.geo.regionMesh, { stroke: 'rgba(230,223,208,0.12)', width: 1 }); S10.drawGraves(x, pr, 0, 1e9); });
  /** perspective tilt of a flat sheet (rotate about the horizontal axis through screen centre, top goes away) */
  S10.tiltQuad = (ctx, img, a, o = {}) => { const D = o.D || 1700, cx = o.cx ?? 960, cy = o.cy ?? 540, w = img.width, h = img.height; const ox = o.ox ?? 0, oy = o.oy ?? 0, sc = o.scale ?? 1; const ca = Math.cos(a), sa = Math.sin(a);
    MG.persp.quad(ctx, img, (u, v) => { const X = (u * w - w / 2 + ox) * sc, Y = (v * h - h / 2 + oy) * sc; const Z = D + Y * sa; return [cx + X * D / Z, cy + Y * ca * D / Z]; }, o.div || 8); };
  S10.tiltPt = (X, Y, a, o = {}) => { const D = o.D || 1700, cx = o.cx ?? 960, cy = o.cy ?? 540; const Z = D + Y * Math.sin(a); return [cx + X * D / Z, cy + Y * Math.cos(a) * D / Z, D / Z]; };
  S10.sleeveHand = (ctx, x, y, ang, s, col, flip, t, seed) => { ctx.save(); ctx.translate(x, y); ctx.rotate(ang); ctx.scale(s, s);
    // forearm in sleeve coming from off-screen, cuff, gripping fist with gathered fabric
    ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.beginPath(); ctx.ellipse(30, 40, 60, 26, 0, 0, TAU); ctx.fill();
    const sl = MG.path.smooth([[-520, -46], [-40, -52], [-6, -40], [-6, 40], [-40, 50], [-520, 52]], true);
    MG.fx.volume(ctx, sl, [-520, -52, 520, 104], { color: col, light: [0, -1], shade: 0.5, hi: 0.3, cel: true, size: 100, outline: 'rgba(10,6,8,0.6)', outlineW: 3 });
    ctx.fillStyle = '#efe8da'; ctx.beginPath(); ctx.roundRect(-34, -46, 30, 92, 8); ctx.fill(); ctx.strokeStyle = 'rgba(10,6,8,0.5)'; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = '#3a2a36'; ctx.beginPath(); ctx.ellipse(56, 0, 40, 26, 0, 0, TAU); ctx.fill();
    MG.kit.hand(ctx, 0, 0, { pose: 'fist', angle: -Math.PI / 2, s: 1.7, skin: '#d9a07a', flip });
    ctx.restore(); };
  const CLOTH = { id: 's10_cloth', start: 1539.55, end: 1544.35, transIn: null,
    init() { S10.graveMapStill(); },
    draw(ctx, t) {
      const a = lerp(0, 0.66, MG.ease.inOutCubic(clamp((t - 1539.6) / 1.1))); const tw = wt('wants', 1540.09), tR = wt('right', 1542.41);
      // cloth right edge (in sheet coordinates, 0..W): slides over the map, the LEFT pulls it off, the RIGHT pulls it back
      const xr = kf(t, [[1539.55, 2400], [1540.15, 2240, 'inOutCubic'], [tw + 0.15, 2240], [1541.7, 640, 'inOutCubic'], [tR - 0.05, 610, 'soft'], [tR + 0.9, 1640, 'inOutCubic'], [1544.4, 1760, 'soft']]);
      const base = MG.scratch(3); const b = base.getContext('2d'); MG.reset(b); b.drawImage(S10.graveMapStill(), 0, 0);
      // fabric lying on the sheet
      const fold = (yy) => xr + Math.sin(yy * 0.011 + t * 0.8) * 22 + Math.sin(yy * 0.033 + 1) * 8;
      const cl = new Path2D(); cl.moveTo(-200, -20); for (let yy = -20; yy <= H + 20; yy += 20) cl.lineTo(fold(yy), yy); cl.lineTo(-200, H + 20); cl.closePath();
      b.save(); b.shadowColor = 'rgba(0,0,0,0.7)'; b.shadowBlur = 40; b.shadowOffsetX = 18; b.fillStyle = '#2a1e2b'; b.fill(cl); b.restore();
      b.save(); b.clip(cl); for (let i = 0; i < 18; i++) { const fx = xr - 60 - i * 130 + Math.sin(i * 1.7 + t) * 20; const g = b.createLinearGradient(fx - 60, 0, fx + 60, 0); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(0.45, 'rgba(130,100,140,0.22)'); g.addColorStop(0.56, 'rgba(8,4,10,0.4)'); g.addColorStop(1, 'rgba(0,0,0,0)'); b.fillStyle = g; b.fillRect(fx - 60, 0, 120, H); } MG.tex.over(b, 'fibers', { alpha: 0.7, color: '#000' }); b.restore();
      // table & sheet
      ctx.fillStyle = '#120d0b'; ctx.fillRect(0, 0, W, H); ctx.drawImage(MG.tex.paper('#1e1613', { seed: 9, light: 0.4 }), 0, 0);
      const sh = S10.tiltPt(0, -540, a); ctx.save(); ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.filter = 'blur(16px)'; ctx.fillRect(sh[0] - 960 * sh[2] + 20, sh[1] + 20, 1920 * sh[2], 1200); ctx.restore();
      S10.tiltQuad(ctx, base, a, { div: 10 });
      // hands (screen space at projected cloth points)
      const lp = S10.tiltPt(-860 + 0 * xr, 120, a); const lpull = clamp((t - tw) / 1.4);
      const lx = lp[0] + lerp(140, -80, MG.ease.inOutCubic(lpull)), ly = lp[1] - 30;
      if (t > tw - 0.5) S10.sleeveHand(ctx, lx - lerp(400, 0, prog(t, tw - 0.5, tw + 0.1)), ly, 0.1, 0.95 * lp[2], '#8e2d24', false, t, 1);
      const rp = S10.tiltPt(Math.min(960, xr - 960) + 30, 140, a);
      if (t > tR - 0.55) { const rin = prog(t, tR - 0.55, tR + 0.05); S10.sleeveHand(ctx, rp[0] + lerp(900, 0, rin), rp[1] + 10, Math.PI - 0.08, 0.95 * rp[2], '#22406a', true, t, 2); }
      // the two positions
      TX.kick(ctx, 'The left', 150, 130, t, wt('left', 1539.85) - 0.1, { size: 24, color: '#e06a58' });
      TX.big(ctx, 'a reckoning', 146, 230, t, wt('reckoning', 1540.53) - 0.1, { size: 104, italic: true, color: C.bone, shadow: SH(0.7, 20, 6) });
      const RY = MG.LANG === 'fr' ? 200 : 0; TX.kick(ctx, 'The right', 1770, 130 + RY, t, tR - 0.1, { size: 24, color: '#7aa6dc', align: 'right' });
      TX.big(ctx, 'leave it alone', 1774, 230 + RY, t, wt('leave', 1543.13) - 0.15, { size: 104, italic: true, color: C.bone, align: 'right', shadow: SH(0.7, 20, 6) });
    },
    post: { grade: 'warm', grain: 0.05, vignette: 0.5, sat: 0.9 } };

  // ================================================================== 10 HEMICYCLE (1544.35–1551.00)
  const PARTIES = [['EH Bildu', 6, '#8a8f6a'], ['ERC', 7, '#b89a5a'], ['BNG', 1, '#8a9aa8'], ['Sumar', 31, '#d04a86'], ['PSOE', 121, P.psoe], ['PNV', 5, '#5a8a5a'], ['Junts', 7, '#4aa8a0'], ['CC', 1, '#d8c04a'], ['PP', 137, P.pp], ['UPN', 1, '#6a7a9a'], ['Vox', 33, P.vox]];
  S10.seats = () => { if (S10._seats) return S10._seats; const rows = 10; const R = (i) => 300 + i * 50; let ns = []; for (let i = 0; i < rows; i++) ns.push(Math.floor(Math.PI * R(i) / 46)); let tot = ns.reduce((a, b) => a + b, 0); let i = rows - 1; while (tot > 350) { ns[i]--; tot--; i = (i - 1 + rows) % rows; } i = 0; while (tot < 350) { ns[i]++; tot++; i = (i + 1) % rows; }
    const S = []; for (let r = 0; r < rows; r++) for (let k = 0; k < ns[r]; k++) { const th = Math.PI * (k + 0.5) / ns[r]; S.push({ r, th, R: R(r) }); }
    S.sort((a, b) => a.th - b.th || a.r - b.r); let idx = 0; for (const [name, n, col] of PARTIES) for (let k = 0; k < n; k++) { S[idx].party = name; S[idx].col = col; idx++; }
    S10._seats = S; return S; };
  const HCAM = (t) => ({ x: 0, y: -560 + Math.sin(t * 0.3) * 6, z: kf(t, [[1544.35, -420], [1548.6, -470, 'soft'], [1551.2, -520, 'soft']]), pitch: 0.66, yaw: Math.sin(t * 0.25) * 0.02 + kf(t, [[1544.35, -0.05], [1551, 0.05, 'soft']]), fov: 42 });
  const HEMI = { id: 's10_hemi', start: 1544.35, end: 1551.0, transIn: TR.cloth(1.0),
    draw(ctx, t) {
      const cam = HCAM(t); ctx.fillStyle = '#1a1210'; ctx.fillRect(0, 0, W, H);
      // chamber floor (tiers of dark wood + red carpet arc)
      const P3 = (x, y, z) => MG.persp.project([x, y, z], cam);
      const ring = (Ra, y, col, wdt) => { ctx.beginPath(); for (let k = 0; k <= 48; k++) { const th = Math.PI * k / 48; const p = P3(-Ra * Math.cos(th), y, Ra * Math.sin(th)); k ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]); } ctx.strokeStyle = col; ctx.lineWidth = wdt; ctx.stroke(); };
      ctx.drawImage(MG.tex.paper('#24170f', { seed: 12, light: 0.45 }), 0, 0);
      for (let r = 10; r >= 0; r--) ring(300 + r * 50 - 25, -r * 16, r % 2 ? 'rgba(120,70,40,0.45)' : 'rgba(80,40,24,0.45)', 46 * (P3(0, -r * 16, 300 + r * 50)[2]));
      ring(250, 0, 'rgba(150,36,30,0.6)', 50 * P3(0, 0, 250)[2]);
      const pod = P3(0, 0, 120); ctx.fillStyle = '#3a2418'; ctx.fillRect(pod[0] - 90 * pod[2], pod[1] - 30 * pod[2], 180 * pod[2], 50 * pod[2]);
      // seats
      const S = S10.seats(); const tFill = 1544.45, t3 = wt('third-largest', 1546.73), tN = wt('nostalgic', 1544.89), tG = wt('government', 1549.69), tMay = wt('may', 1548.93);
      const lift = prog(t, t3 - 0.1, t3 + 0.5, 'outBack'); const dim = prog(t, t3, t3 + 0.6);
      const order = S.map((s, i) => [s, i]).sort((a, b) => b[0].R * Math.sin(b[0].th) - a[0].R * Math.sin(a[0].th));
      for (const [s] of order) { const appear = prog(t, tFill + (s.th / Math.PI) * 0.9 + s.r * 0.03, tFill + (s.th / Math.PI) * 0.9 + s.r * 0.03 + 0.4); if (appear <= 0) continue;
        const vox = s.party === 'Vox'; const close = vox ? prog(t, tMay, tMay + 0.9) * 0.05 : 0; const th = s.th - close;
        const y = -s.r * 16 - (vox ? lift * 22 : 0) - (1 - appear) * 30; const p = P3(-s.R * Math.cos(th), y, s.R * Math.sin(th)); const sz = 15 * p[2];
        let col = s.col; if (vox && t > tN - 0.2 && t < t3) col = MG.col.mix(s.col, '#c9a46a', 0.7 * prog(t, tN - 0.2, tN + 0.4));
        ctx.globalAlpha = appear * (vox ? 1 : 1 - 0.55 * dim * (s.party === 'PP' ? 0.4 : 1));
        if (vox && lift > 0) { ctx.fillStyle = 'rgba(0,0,0,0.4)'; ctx.fillRect(p[0] - sz * 0.6, p[1] + sz * 0.2 + lift * 22 * p[2], sz * 1.2, sz * 0.5); ctx.fillStyle = MG.col.shade(P.vox, 0.5); ctx.fillRect(p[0] - sz * 0.5, p[1], sz, lift * 22 * p[2]); }
        ctx.fillStyle = MG.col.shade(col, 0.45); ctx.beginPath(); ctx.roundRect(p[0] - sz * 0.62, p[1] - sz * 0.1, sz * 1.24, sz * 0.62, sz * 0.2); ctx.fill();
        ctx.fillStyle = col; ctx.beginPath(); ctx.roundRect(p[0] - sz * 0.6, p[1] - sz * 0.75, sz * 1.2, sz * 0.75, sz * 0.25); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.22)'; ctx.fillRect(p[0] - sz * 0.45, p[1] - sz * 0.7, sz * 0.9, sz * 0.14); }
      ctx.globalAlpha = 1;
      // party labels at wedge edges
      const wedge = (name) => { const ss = S.filter((s) => s.party === name); return ss.reduce((a, s) => a + s.th, 0) / ss.length; };
      const lab = (name, n, col, t0, dy = 0) => { const th = wedge(name); const p = P3(-830 * Math.cos(th), -10 * 16, 830 * Math.sin(th)); MG.text.reveal(ctx, `${name.toUpperCase()} ${n}`, p[0], p[1] + dy, t, t0, { font: MG.F.mono, weight: 700, size: 22, tracking: 0.16, color: col, align: 'center', style: 'fade', by: 'line', alpha: name === 'Vox' ? 1 : 1 - 0.5 * dim }); };
      lab('PSOE', 121, '#e8857a', 1545.3); lab('PP', 137, '#8ec0ea', 1545.5); lab('Sumar', 31, '#e48ab4', 1545.6, 0); lab('Vox', 33, '#9ad07a', t3 + 0.1, -lift * 26);
      // bracket: next government?
      const bk = prog(t, tMay - 0.1, tG + 0.2, 'inOutCubic'); if (bk > 0) { const ths = S.filter((s) => s.party === 'PP' || s.party === 'Vox').map((s) => s.th); const a0 = Math.min(...ths), a1 = Math.max(...ths); ctx.save(); ctx.strokeStyle = C.bone; ctx.lineWidth = 2.4; ctx.setLineDash([10, 8]); ctx.beginPath(); for (let k = 0; k <= 40 * bk; k++) { const th = lerp(a0, a1, k / 40); const p = P3(-900 * Math.cos(th), -10 * 16 - 40, 900 * Math.sin(th)); k ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]); } ctx.stroke(); ctx.restore(); }
      TX.kick(ctx, 'Congress · 350 seats · since 2023', 140, 120, t, 1544.6, { size: 22, color: C.candle });
      TX.lead(ctx, 'nostalgic for that era', 136, 196, t, tN - 0.05, { size: 54, out: { at: t3 - 0.1, dur: 0.3 } });
      TX.big(ctx, '3rd largest', 140, 220, t, t3 - 0.05, { size: 96, color: '#a8d88a', shadow: SH(0.7, 20, 6), out: { at: tMay - 0.2, style: 'rise', dur: 0.4 } });
      TX.big(ctx, 'next government?', 1780, 220, t, tG - 0.35, { size: 88, italic: true, align: 'right', color: C.bone, shadow: SH(0.7, 20, 6) });
    },
    post: { grade: 'warm', grain: 0.05, vignette: 0.45, sat: 0.95 } };

  // ================================================================== B · GEOPOLITICS — one continuous orthographic camera (1551.00–1567.58)
  S10.stars = () => MG.cache('s10:stars', W, H, (x, w, h) => { const g = x.createRadialGradient(960, 600, 100, 960, 540, 1200); g.addColorStop(0, '#0d1b30'); g.addColorStop(1, '#040810'); x.fillStyle = g; x.fillRect(0, 0, w, h); const r = MG.rng(4); for (let i = 0; i < 700; i++) { const s = r() < 0.08 ? 1.6 : 0.8; x.fillStyle = `rgba(230,236,255,${0.2 + r() * 0.6})`; x.fillRect(r() * w, r() * h, s, s); } });
  const EU = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden'];
  const NATO = ['Albania', 'Belgium', 'Bulgaria', 'Canada', 'Croatia', 'Czechia', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Montenegro', 'Netherlands', 'Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Turkey', 'United Kingdom', 'United States of America'];
  const PORTS = { Algeciras: [-5.45, 36.13], Valencia: [-0.33, 39.45], Barcelona: [2.17, 41.38], Bilbao: [-2.93, 43.26] };
  const LANES = [['Algeciras', [-74.0, 40.7]], ['Bilbao', [4.48, 51.92]], ['Barcelona', [32.3, 31.26]], ['Valencia', [8.93, 44.4]], ['Algeciras', [3.38, 6.45]], ['Algeciras', [-46.3, -23.9]], ['Valencia', [10.2, 36.8]]];
  const GEO_V = (t) => MG.geo.view(t, [[1551.0, { center: [-32, 14], scale: 280 }], [1552.75, { center: [-6, 36], scale: 420 }, 'cam'], [1555.25, { center: [5, 46.5], scale: 1050 }, 'cam'], [1558.3, { center: [2.5, 45.5], scale: 980 }, 'soft'], [1560.9, { center: [-7, 39.5], scale: 820 }, 'soft'], [1562.5, { center: [10, 9], scale: 470 }, 'cam'], [1563.85, { center: [-4.12, 35.62], scale: 26000 }, 'cam'], [1567.9, { center: [-3.98, 35.6], scale: 28500 }, 'soft']]);
  const CEUTA = [-5.3162, 35.8894], MELILLA = [-2.9381, 35.2923];
  S10.esPart = (i) => { const es = MG.geo.country('Spain', '10'); return { type: 'Feature', properties: {}, geometry: { type: 'Polygon', coordinates: es.geometry.coordinates[i] } }; };
  S10.geoDraw = (ctx, t) => {
    MG.geo.init(); const v = GEO_V(t); const pr = MG.geo.proj('ortho', { center: v.center, scale: v.scale, translate: [960, 540] }); const R = v.scale; const hi = v.scale > 2600;
    ctx.drawImage(S10.stars(), 0, 0);
    if (R < 2400) { const g = ctx.createRadialGradient(960, 540, R * 0.95, 960, 540, R * 1.2); g.addColorStop(0, 'rgba(110,160,220,0.35)'); g.addColorStop(1, 'rgba(110,160,220,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(960, 540, R * 1.25, 0, TAU); ctx.fill(); }
    MG.geo.sphere(ctx, pr, { fill: '#0c1d33' });
    ctx.save(); MG.geo.clip(ctx, pr, { type: 'Sphere' });
    const bm = clamp(1 - (R - 420) / 500); if (bm > 0.01) { const c = MG.geo.sphereTex('bluemarble', pr, { light3: [-2, 1.5, 4], ambient: 0.8 }); ctx.save(); ctx.globalAlpha = 0.55 * bm; ctx.drawImage(c, 0, 0); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = '#2a3f66'; ctx.fillRect(0, 0, W, H); ctx.restore(); }
    // sea lines
    ctx.strokeStyle = 'rgba(169,198,222,0.05)'; ctx.lineWidth = 1; for (let yy = 4; yy < H; yy += 14) { ctx.beginPath(); for (let xx = 0; xx <= W; xx += 16) ctx.lineTo(xx, yy + Math.sin(xx * 0.01 + yy) * 2); ctx.stroke(); }
    const landA = 0.75 + 0.25 * (1 - bm);
    if (!hi) { MG.geo.draw(ctx, pr, MG.geo.land50, { fill: C.nland, alpha: landA }); MG.geo.draw(ctx, pr, MG.geo.borders50, { stroke: 'rgba(169,198,222,0.16)', width: 0.8 }); }
    else { for (const f of MG.geo.iberia10.features) MG.geo.draw(ctx, pr, f, { fill: f.properties.name === 'Gibraltar' ? '#b05a50' : C.nland, stroke: 'rgba(169,198,222,0.22)', width: 1 }); }
    MG.geo.graticule(ctx, pr, { color: 'rgba(169,198,222,0.05)', step: [15, 15] });
    // EU fill + NATO outline (beat 13)
    const tN = wt('nato', 1556.49), tE = wt('european', 1557.21); const mem = win(t, tN - 0.2, 1561.0, 0.5, 0.8);
    if (mem > 0) { const bru = [4.35, 50.85]; for (const n of EU) { const f = MG.geo.country(n, '50'); if (!f) continue; const d = window.d3.geoDistance(window.d3.geoCentroid(f), bru); const k = clamp((t - tE - d * 0.9) / 0.35); if (k > 0) MG.geo.draw(ctx, pr, f, { fill: MG.col.a(C.amber, 0.32 * k * mem) }); }
      for (const n of NATO) { const f = MG.geo.country(n, '50'); if (!f) continue; const d = window.d3.geoDistance(window.d3.geoCentroid(f), bru); const k = clamp((t - tN - d * 0.5) / 0.35); if (k > 0) MG.geo.draw(ctx, pr, f, { stroke: MG.col.a('#9cc4ef', 0.9 * k * mem), width: 2 }); } }
    // Spain (+ Ceuta, Melilla, Canaries)
    const es = MG.geo.country('Spain', hi ? '10' : '50'); MG.geo.draw(ctx, pr, es, { fill: C.sol, stroke: 'rgba(255,230,180,0.6)', width: 1 });
    // still water around Spain (beat 12)
    const qk = win(t, 1552.9, 1556.2, 0.6, 0.6); if (qk > 0) for (let i = 0; i < 4; i++) { const u = MG.fract((t - 1552.9) * 0.18 + i / 4); MG.geo.draw(ctx, pr, window.d3.geoCircle().center([-3.7, 40]).radius(4 + u * 9)(), { stroke: `rgba(250,244,232,${(0.22 * (1 - u) * qk).toFixed(3)})`, width: 1.4 }); }
    // trade lanes (beat 14)
    const tk = win(t, 1558.6, 1562.0, 0.4, 0.6); if (tk > 0) LANES.forEach(([p, to], i) => { const a = PORTS[p]; const pg = prog(t, 1558.6 + i * 0.12, 1559.9 + i * 0.12, 'inOutCubic'); const res = MG.geo.route(ctx, pr, a, to, { progress: pg, color: MG.col.a(C.amber, 0.75 * tk), width: 2, dash: [6, 7], dashOffset: -t * 30, n: 48 }); if (res.pts.length > 2) for (let k = 0; k < 3; k++) { const u = MG.fract(t * 0.25 + k / 3 + i * 0.13); if (u > pg) continue; const q = MG.path.along(res.pts, u); ctx.globalAlpha = tk; ctx.drawImage(glow(C.amber, 12), q[0] - 12, q[1] - 12); ctx.fillStyle = '#fff2d8'; ctx.fillRect(q[0] - 2, q[1] - 2, 4, 4); ctx.globalAlpha = 1; } });
    // Africa (beat 15a) — warm tint of the continent
    const ak = win(t, 1561.6, 1563.4, 0.4, 0.5); if (ak > 0 && !hi) { MG.geo.draw(ctx, pr, MG.geo.country('Morocco', '50'), { fill: MG.col.a('#c79a6a', 0.0) }); }
    // Ceuta & Melilla as lifted slabs (beat 15b)
    if (hi) { const sk = prog(t, 1563.2, 1563.9); for (const i of [0, 1]) MG.geo.slab(ctx, pr, S10.esPart(i), { depth: 10 * sk, top: '#ffbe5a', side: '#9a5a20', stroke: 'rgba(255,240,200,0.8)', width: 1.2, shadowDy: 14, shadowBlur: 10 }); }
    // globe shading
    if (R < 2400) { const lg = ctx.createRadialGradient(960 - R * 0.3, 540 - R * 0.35, R * 0.05, 960, 540, R * 1.05); lg.addColorStop(0, 'rgba(255,248,225,0.10)'); lg.addColorStop(0.6, 'rgba(0,0,0,0)'); lg.addColorStop(1, 'rgba(0,4,16,0.6)'); ctx.fillStyle = lg; ctx.fillRect(960 - R, 540 - R, R * 2, R * 2); }
    ctx.restore();
    if (R < 2400) { ctx.save(); ctx.strokeStyle = 'rgba(160,200,240,0.4)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(960, 540, R, 0, TAU); ctx.stroke(); ctx.restore(); }
    return { pr, R, v };
  };
  const geoText = (ctx, t, pr, R) => {
    // 11 · title on the globe's curve
    const g0 = 1551.05, ga = win(t, g0, 1553.3, 0.3, 0.5); if (ga > 0) { const rr = R * 1.06 + 20; const pts = []; for (let k = 0; k <= 60; k++) { const a = lerp(-Math.PI * 0.86, -Math.PI * 0.14, k / 60); pts.push([960 + Math.cos(a) * rr, 540 + Math.sin(a) * rr]); } MG.text.onPath(ctx, 'GEOPOLITICS', pts, { font: MG.F.display, weight: 800, size: clamp(R * 0.3, 80, 150), color: C.cal, tracking: 0.14, offset: 0.5, reveal: prog(t, g0, g0 + 0.8, 'linear'), alpha: ga }); TX.kick(ctx, 'Now for', 960, 540 + R * 0.55, t, g0, { align: 'center', size: 24, color: C.amber, alpha: ga }); }
    // 12 · surprisingly quiet
    const tq = wt('surprisingly', 1554.21); const s = pr([-3.7, 40]);
    TX.lead(ctx, 'surprisingly', s[0] - 260, s[1] + 210, t, tq - 0.05, { size: 40, color: 'rgba(250,244,232,0.8)', out: { at: 1555.9, dur: 0.4 } });
    TX.big(ctx, 'quiet.', s[0] - 30, s[1] + 214, t, wt('quiet', 1554.89) - 0.05, { weight: 300, size: 42, color: C.cal, style: 'fade', out: { at: 1555.9, dur: 0.4 } });
    // 13 · membership legend
    const tN = wt('nato', 1556.49), tE = wt('european', 1557.21), lo = { at: 1558.6, dur: 0.4 };
    const ck = (x, y, k, fill) => { if (k <= 0) return; ctx.save(); ctx.globalAlpha = k; if (fill) { ctx.fillStyle = MG.col.a(C.amber, 0.6); ctx.fillRect(x, y - 22, 34, 24); } else { ctx.strokeStyle = '#9cc4ef'; ctx.lineWidth = 3; ctx.strokeRect(x, y - 22, 34, 24); } ctx.restore(); };
    ck(150, 868, prog(t, tN, tN + 0.3) * (1 - prog(t, lo.at, lo.at + 0.3)), false); ck(150, 938, prog(t, tE, tE + 0.3) * (1 - prog(t, lo.at, lo.at + 0.3)), true);
    TX.big(ctx, 'NATO', 204, 872, t, tN - 0.05, { font: MG.F.grotesk, weight: 800, size: 44, color: C.cal, out: lo }); TX.kick(ctx, 'since 1982', 350, 866, t, tN + 0.2, { size: 20, color: '#9cc4ef', out: lo });
    TX.big(ctx, 'European Union', 204, 942, t, tE - 0.05, { font: MG.F.grotesk, weight: 800, size: 44, color: C.cal, out: lo }); TX.kick(ctx, 'since 1986', Math.max(572, 204 + MG.text.width(ctx, 'European Union', { font: MG.F.grotesk, weight: 800, size: 44 }) + 26), 936, t, tE + 0.3, { size: 20, color: C.amber, out: lo });
    // 14 · trade, not war
    const tT = wt('trade', 1559.69), tW = wt('war', 1560.33), to = { at: 1561.6, dur: 0.35 };
    TX.lead(ctx, 'prefers', 150, 800, t, wt('prefers', 1559.25) - 0.05, { size: 52, out: to });
    TX.big(ctx, 'trade', 146, 940, t, tT - 0.05, { size: 160, color: C.amber, shadow: SH(0.6, 24, 8), out: to });
    const wx = 146 + MG.text.width(ctx, 'trade', { font: MG.F.display, weight: 800, size: 160 }) + 40;
    TX.lead(ctx, 'to war', wx, 930, t, tW - 0.2, { size: 64, color: 'rgba(250,244,232,0.75)', out: to });
    const sk = prog(t, tW + 0.15, tW + 0.45) * (1 - prog(t, to.at, to.at + 0.3)); if (sk > 0) { const LO = { font: MG.F.serif, italic: true, size: 64 }; const FRw = MG.LANG === 'fr'; const x0 = FRw ? wx + MG.text.raw.width(ctx, 'à la ', LO) - 4 : wx + 66, x1 = x0 + (FRw ? MG.text.raw.width(ctx, 'guerre', LO) + 8 : 110) * sk; MG.fx.ink(ctx, [[x0, 914], [lerp(x0, x1, 0.5), 908], [x1, 916]], { width: 9, color: '#d8423a', taper: [0.1, 0.3] }); }
    // 15 · Africa, Ceuta & Melilla
    const tA = wt('africa', 1562.33), tC = wt('ceuta', 1563.13), tM = wt('melilla', 1563.85), tL = wt('last', 1564.89);
    const v = GEO_V(t); if (v.scale < 1500 && t > tA - 0.6 && t < 1563.5) { const af = pr([18, 6]); if (af) TX.kick(ctx, 'Africa', af[0], af[1], t, tA - 0.3, { align: 'center', size: 30, color: 'rgba(250,244,232,0.85)', tracking: 0.6 }); for (const ll of [CEUTA, MELILLA]) MG.geo.pulse(ctx, pr, ll, t, { color: C.sol, r: 26, rings: 2 }); }
    if (v.scale > 2600) {
      const c = pr(CEUTA), m = pr(MELILLA); const lk = (p, t0, txt, dx, dy, al) => { const k = prog(t, t0, t0 + 0.5); if (k <= 0) return; ctx.save(); ctx.strokeStyle = MG.col.a(C.cal, 0.9); ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(p[0] + dx * k, p[1] + dy * k); ctx.stroke(); ctx.restore(); TX.big(ctx, txt, p[0] + dx + (al === 'right' ? -10 : 10), p[1] + dy + 14, t, t0 + 0.1, { font: MG.F.grotesk, weight: 800, size: 46, color: C.cal, align: al, tracking: 0.08, shadow: SH(0.8, 12, 3) }); };
      lk(c, Math.max(tC, 1563.6), 'CEUTA', -60, 120, 'right'); lk(m, Math.max(tM, 1563.9), 'MELILLA', 60, 120, 'left');
      const sp = pr([-4.6, 36.95]); TX.kick(ctx, 'Spain · Europe', sp[0], sp[1], t, 1563.7, { size: 24, color: 'rgba(250,244,232,0.75)', align: 'center' });
      const mo = pr([-4.6, 34.75]); TX.kick(ctx, 'Morocco · Africa', mo[0], mo[1], t, 1563.8, { size: 24, color: 'rgba(250,244,232,0.6)', align: 'center' });
      const gb = pr([-5.354, 36.14]); TX.kick(ctx, 'Gibraltar (UK)', gb[0] - 14, gb[1] - 18, t, 1564.1, { size: 16, color: '#e8a094', align: 'right', tracking: 0.14 });
      TX.kick(ctx, 'The last European possessions', 1180, 300, t, tL - 0.25, { size: 22, color: C.amber });
      TX.big(ctx, 'on the continent', 1176, 390, t, wt('continent', 1566.49) - 0.2, { font: MG.F.serif, italic: true, weight: 400, size: 76, color: C.cal, shadow: SH(0.7, 18, 5) });
    }
  };
  const mkGeo = (id, a, b, tr) => ({ id, start: a, end: b, transIn: tr, draw(ctx, t) { const g = S10.geoDraw(ctx, t); geoText(ctx, t, g.pr, g.R); }, post: { grade: 'night', grain: 0.045, vignette: 0.42, sat: 1.0 } });
  const GEO = [mkGeo('s10_geo_title', 1551.0, 1552.85, { type: 'whip', dur: 0.55, dir: 'down', smear: 220 }), mkGeo('s10_geo_quiet', 1552.85, 1555.8), mkGeo('s10_geo_nato', 1555.8, 1558.45), mkGeo('s10_geo_trade', 1558.45, 1561.22), mkGeo('s10_geo_africa', 1561.22, 1567.58)];

  // ================================================================== 16 FENCE · MELILLA (1567.58–1572.22)
  S10.fenceSky = () => MG.cache('s10:fsky', W, H, (x, w, h) => { const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, '#050a14'); g.addColorStop(0.55, '#0f1c30'); g.addColorStop(0.8, '#3a3040'); g.addColorStop(1, '#5a3a30'); x.fillStyle = g; x.fillRect(0, 0, w, h); const r = MG.rng(9); for (let i = 0; i < 300; i++) { x.fillStyle = `rgba(230,236,255,${0.15 + r() * 0.5})`; x.fillRect(r() * w, r() * h * 0.5, 1.2, 1.2); } });
  S10.city = () => MG.cache('s10:city', 2600, 420, (x, w, h) => { const r = MG.rng(12); const gg = x.createLinearGradient(0, 0, 0, h); gg.addColorStop(0, 'rgba(255,150,70,0)'); gg.addColorStop(1, 'rgba(255,150,70,0.4)'); x.fillStyle = gg; x.fillRect(0, 0, w, h); for (let i = 0; i < 90; i++) { const bx = r() * w, bw = 30 + r() * 70, bh = 40 + r() * 170; x.fillStyle = MG.col.mix('#140f14', '#241820', r()); x.fillRect(bx, h - bh, bw, bh); for (let wy = h - bh + 8; wy < h - 6; wy += 13) for (let wx = bx + 5; wx < bx + bw - 6; wx += 11) if (r() < 0.35) { x.fillStyle = `rgba(255,${180 + r() * 50 | 0},110,${0.5 + r() * 0.5})`; x.fillRect(wx, wy, 5, 6); } } });
  S10.fencePanel = (seed, wire) => MG.cache('s10:fence' + seed, 3000, 760, (x, w, h) => { const top = 120;
    x.strokeStyle = 'rgba(200,210,220,0.33)'; x.lineWidth = 1.1; for (let i = -h; i < w; i += 13) { x.beginPath(); x.moveTo(i, top); x.lineTo(i + (h - top), h); x.stroke(); x.beginPath(); x.moveTo(i + (h - top), top); x.lineTo(i, h); x.stroke(); }
    x.fillStyle = '#1b1e24'; for (let px = 40; px < w; px += 260) { x.fillRect(px - 6, top - 30, 12, h - top + 30); x.fillStyle = 'rgba(255,210,150,0.35)'; x.fillRect(px - 6, top - 30, 3, h - top + 30); x.fillStyle = '#1b1e24'; }
    x.fillRect(0, top - 4, w, 8);
    if (wire) { x.strokeStyle = 'rgba(210,215,225,0.65)'; x.lineWidth = 1.6; for (let i = 0; i < w; i += 9) { const a = i * 0.11; x.beginPath(); x.ellipse(i, top - 40, 28, 34, 0, a, a + 2.2); x.stroke(); } }
  });
  S10.climber = (ctx, x, y, s, t, seed, pose) => { const tt = MG.kit.twos(t + seed * 0.3); const ph = Math.sin(tt * 4 + seed * 2); ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; const body = '#07090d';
    if (pose === 'climb') { const up = ph * 8; ctx.strokeStyle = body; ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(-6, -40); ctx.lineTo(-16, -70 - up); ctx.moveTo(6, -40); ctx.lineTo(16, -66 + up); ctx.stroke(); ctx.lineWidth = 11; ctx.beginPath(); ctx.moveTo(-5, 0); ctx.lineTo(-14, 20 + up * 0.6); ctx.lineTo(-10, 40); ctx.moveTo(5, 0); ctx.lineTo(16, 14 - up * 0.6); ctx.lineTo(12, 36); ctx.stroke();
      ctx.fillStyle = body; ctx.beginPath(); ctx.ellipse(0, -20, 13, 26, 0, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.arc(0, -54, 10, 0, TAU); ctx.fill(); ctx.strokeStyle = 'rgba(255,220,170,0.55)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(0, -54, 10, -2.6, -0.8); ctx.stroke(); ctx.beginPath(); ctx.ellipse(0, -20, 13, 26, 0, -2.4, -1.0); ctx.stroke(); }
    else { const st = ph; ctx.strokeStyle = body; ctx.lineWidth = 11; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(14 * st, 22); ctx.lineTo(18 * st + 4, 44); ctx.moveTo(0, 0); ctx.lineTo(-12 * st, 22); ctx.lineTo(-16 * st - 6, 42); ctx.stroke(); ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(0, -36); ctx.lineTo(-16 * st, -14); ctx.moveTo(0, -36); ctx.lineTo(14 * st, -12); ctx.stroke(); ctx.fillStyle = body; ctx.beginPath(); ctx.ellipse(2, -20, 12, 24, 0.15, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.arc(6, -52, 10, 0, TAU); ctx.fill(); ctx.strokeStyle = 'rgba(255,220,170,0.5)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(6, -52, 10, -2.6, -0.8); ctx.stroke(); }
    ctx.restore(); };
  const FENCE = { id: 's10_fence', start: 1567.58, end: 1572.22, transIn: (() => { const v = GEO_V(1567.58); const p = MG.geo.proj('ortho', { center: v.center, scale: v.scale, translate: [960, 540] })(MELILLA); return { type: 'zoom', dur: 0.6, x: p[0], y: p[1], amount: 2.6, from: 0.82 }; })(),
    init() { S10.fenceSky(); S10.city(); S10.fencePanel(1, true); S10.fencePanel(2, true); S10.fencePanel(3, false); },
    draw(ctx, t) {
      const u = clamp((t - 1567.58) / 4.8); const hh = MG.cam.handheld(t, 3, 21); const cam = { x: lerp(-180, 160, MG.ease.inOutSine(u)), y: 0, z: lerp(0, 70, u), focal: 1000, dx: hh.dx, dy: hh.dy, focus: 620, aperture: 6, maxBlur: 10 };
      ctx.drawImage(S10.fenceSky(), 0, 0);
      const beam = (x, y, a, len, al) => { ctx.save(); ctx.globalCompositeOperation = 'screen'; ctx.translate(x, y); ctx.rotate(a); const g = ctx.createLinearGradient(0, 0, len, 0); g.addColorStop(0, `rgba(255,236,200,${al})`); g.addColorStop(1, 'rgba(255,236,200,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(len, -len * 0.14); ctx.lineTo(len, len * 0.14); ctx.closePath(); ctx.fill(); ctx.restore(); };
      MG.depth.stage(ctx, cam, [
        { z: 2400, draw: (x) => { x.drawImage(S10.city(), -3100, -40, 5200, 840); } },
        { z: 1150, draw: (x) => { x.drawImage(S10.fencePanel(3, false), -1900, -60, 3000 * 1.3, 760 * 1.3); } },
        { z: 860, draw: (x) => { x.drawImage(S10.fencePanel(2, true), -1700, -120, 3000 * 1.2, 760 * 1.2); for (let i = 0; i < 6; i++) { const lx = -1500 + i * 640; x.fillStyle = '#14161b'; x.fillRect(lx - 5, -360, 10, 300); x.drawImage(glow('#ffe7bf', 70), lx - 70, -430); } } },
        { z: 640, draw: (x) => { x.drawImage(S10.fencePanel(1, true), -1600, -150, 3000 * 1.12, 760 * 1.12); const cl = [[-760, 230, 0], [-430, 120, 1], [-200, 300, 2], [160, 180, 3], [470, 80, 4], [820, 250, 5], [1150, 150, 6]]; for (const [cx, cy, s] of cl) { const yy = cy - MG.kit.twos(t) * 6 * (1 + (s % 3)); S10.climber(x, cx, yy - 60, 1.0, t, s, 'climb'); } } },
        { z: 480, draw: (x) => { for (let i = 0; i < 7; i++) { const rx = -900 + i * 330 + MG.fract(t * 0.12 + i * 0.3) * 120; S10.climber(x, rx, 470 + (i % 2) * 20, 1.1, t, i + 9, 'run'); } x.fillStyle = '#05070a'; x.fillRect(-2600, 560, 5200, 600); } },
        { z: 300, blur: 12, draw: (x) => { x.fillStyle = '#030406'; for (let i = 0; i < 26; i++) { const bx = -1400 + i * 110; x.beginPath(); x.ellipse(bx, 520 + MG.rand(5, i) * 40, 70 + MG.rand(6, i) * 60, 40 + MG.rand(7, i) * 50, 0, 0, TAU); x.fill(); } } },
      ]);
      beam(1500 - cam.x * 0.6, 120, Math.PI - 0.4 + Math.sin(t * 0.7) * 0.28, 1500, 0.22); beam(300 - cam.x * 0.6, 150, -0.35 + Math.sin(t * 0.6 + 2) * 0.2, 1300, 0.16);
      MG.fx.particles(ctx, { n: 50, seed: 7, t, area: [0, 100, W, 700], vel: [12, -6], life: 6, size: [1, 2.5], color: '#ffe8c8', alpha: 0.35, drift: 30 });
      TX.kick(ctx, 'Melilla · border fence', 150, 140, t, 1567.9, { size: 22, color: C.amber });
      TX.lead(ctx, 'every year,', 150, 830, t, wt('every', 1567.61) - 0.05, { size: 56, color: C.cal });
      TX.big(ctx, 'thousands', 146, 960, t, wt('thousands', 1568.49) - 0.05, { size: 150, color: C.cal, shadow: SH(0.8, 24, 8) });
      TX.kick(ctx, 'try to force their way across', 154, 1010, t, wt('force', 1570.01) - 0.1, { size: 20, color: 'rgba(250,244,232,0.7)' });
    },
    post: { grade: 'night', grain: 0.05, vignette: 0.5, sat: 0.95 } };

  // ================================================================== 17–18 CANARIES & THE ATLANTIC ROUTE (1572.22–1578.70)  ·  21 DEADLY (1586.18–1593.45)
  const COAST = [[-13.2, 27.15], [-12.93, 27.94], [-11.1, 28.44], [-15.93, 23.68], [-17.03, 20.93], [-15.98, 18.07], [-16.49, 16.03], [-17.47, 14.72], [-16.27, 12.58]];
  const ISL = [[-15.41, 28.12], [-16.25, 28.46], [-13.55, 28.96], [-17.92, 27.75]];
  const ROUTES = [[[-17.47, 14.72], [-18.6, 17.5], [-18.9, 22.5], [-18.4, 26.0], [-17.98, 27.64]], [[-16.49, 16.03], [-17.6, 19.0], [-17.5, 23.5], [-16.9, 26.5], [-16.62, 28.0]], [[-17.03, 20.93], [-16.6, 23.5], [-16.0, 26.2], [-15.6, 27.8]], [[-15.98, 18.07], [-17.0, 20.5], [-16.95, 23.6]]];
  const OVERLAND = [[-8.0, 12.64], [-10.3, 14.6], [-12.6, 16.5], [-15.98, 18.07]];
  const CAN_V = (t) => MG.geo.view(t, [[1572.22, { center: [-15.3, 28.65], scale: 7600 }], [1575.35, { center: [-14.7, 28.3], scale: 8200 }, 'soft'], [1576.9, { center: [-14.0, 21.0], scale: 2750 }, 'cam'], [1578.9, { center: [-14.0, 20.8], scale: 2850 }, 'soft']]);
  const DEAD_V = (t) => MG.geo.view(t, [[1586.18, { center: [-16.0, 21.6], scale: 3100 }], [1593.6, { center: [-16.6, 23.2], scale: 3650 }, 'soft']]);
  S10.atlDraw = (ctx, t, v, o = {}) => {
    MG.geo.init(); const pr = MG.geo.proj('mercator', { center: v.center, scale: v.scale }); const dark = o.dark || 0;
    MG.kit.seaBg(ctx, '#0e2036'); ctx.fillStyle = `rgba(2,6,12,${0.25 + dark * 0.45})`; ctx.fillRect(0, 0, W, H);
    const hi = v.scale > 4200; const AF = ['Morocco', 'W. Sahara', 'Mauritania', 'Mali', 'Senegal', 'Gambia', 'Guinea-Bissau', 'Guinea', 'Algeria', 'Sierra Leone', 'Burkina Faso', 'Niger', 'Cape Verde'];
    for (const n of AF) { const f = (hi && ['Morocco', 'W. Sahara', 'Mauritania', 'Mali', 'Algeria'].includes(n)) ? MG.geo.country(n, '10') : MG.geo.country(n, '50'); if (!f) continue; let fill = MG.col.mix('#1f2c3e', '#2a3443', MG.hash(n.length)); const hk = (n === 'Senegal' ? prog(t, wt('senegal', 1577.45) - 0.2, wt('senegal', 1577.45) + 0.4) : n === 'Mali' ? prog(t, wt('mali', 1578.21) - 0.2, wt('mali', 1578.21) + 0.4) : 0) * (1 - dark); if (hk > 0) fill = MG.col.mix(fill, '#7a5a34', hk * 0.8); MG.geo.draw(ctx, pr, f, { fill, stroke: 'rgba(169,198,222,0.25)', width: 1 }); }
    const es = MG.geo.country('Spain', hi ? '10' : '50'); MG.geo.draw(ctx, pr, es, { fill: MG.col.mix(C.sol, '#3a3040', dark * 0.5), stroke: 'rgba(255,230,180,0.7)', width: 1, shadow: { blur: 12, dy: 4, color: 'rgba(0,0,0,0.6)' } });
    for (const c of COAST.concat(ISL)) { const p = pr(c); ctx.globalAlpha = 0.9 - dark * 0.5; ctx.drawImage(glow('#ffb860', 16), p[0] - 16, p[1] - 16); ctx.fillStyle = '#ffe2b0'; ctx.fillRect(p[0] - 1.5, p[1] - 1.5, 3, 3); ctx.globalAlpha = 1; }
    return pr;
  };
  S10.routePts = (pr, R) => MG.path.spline(R.map((c) => pr(c)), 12);
  const CANARY = { id: 's10_canary', start: 1572.22, end: 1578.7, transIn: TR.beam(0.9),
    draw(ctx, t) {
      const v = CAN_V(t); const pr = S10.atlDraw(ctx, t, v);
      // ruler: Fuerteventura → Africa
      const ra = pr([-13.934, 28.244]), rb = pr([-13.171, 27.685]); const rk = win(t, wt('african', 1574.21) - 0.3, 1576.3, 0.5, 0.4);
      if (rk > 0) { ctx.save(); ctx.globalAlpha = rk; ctx.strokeStyle = C.cal; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(ra[0], ra[1]); ctx.lineTo(lerp(ra[0], rb[0], MG.ease.out(rk)), lerp(ra[1], rb[1], MG.ease.out(rk))); ctx.stroke(); for (const p of [ra, rb]) { ctx.beginPath(); ctx.arc(p[0], p[1], 4, 0, TAU); ctx.fillStyle = C.cal; ctx.fill(); } TX.draw(ctx, '≈ 100 KM · 60 MI', (ra[0] + rb[0]) / 2 + 26, (ra[1] + rb[1]) / 2 + 40, { font: MG.F.mono, weight: 500, size: 22, color: C.cal, tracking: 0.12 }); ctx.restore(); }
      // routes from Senegal & Mali (moving boat lights)
      const tT = wt('tens', 1575.57);
      ROUTES.forEach((R, i) => { const pts = S10.routePts(pr, R); const pg = prog(t, tT + 0.4 + i * 0.25, tT + 2.4 + i * 0.25, 'inOutSine'); MG.fx.line(ctx, pts, { progress: pg, color: 'rgba(245,184,90,0.6)', width: 2.2, dash: [7, 8], dashOffset: -t * 20 }); for (let k = 0; k < 4; k++) { const u = MG.fract(t * 0.09 + k / 4 + i * 0.17); if (u > pg) continue; const q = MG.path.along(pts, u); ctx.drawImage(glow('#ffc070', 14), q[0] - 14, q[1] - 14); ctx.fillStyle = '#fff0d0'; ctx.fillRect(q[0] - 2, q[1] - 2, 4, 4); } });
      const op = S10.routePts(pr, OVERLAND); MG.fx.line(ctx, op, { progress: prog(t, wt('mali', 1578.21) - 0.3, wt('mali', 1578.21) + 0.8), color: 'rgba(245,184,90,0.45)', width: 2, dash: [2, 8] });
      // labels
      const c = pr([-15.6, 29.35]); TX.big(ctx, 'CANARY ISLANDS', c[0], c[1], t, wt('canary', 1572.97) - 0.1, { font: MG.F.grotesk, weight: 800, size: 40, color: C.cal, tracking: 0.12, align: 'center', shadow: SH(0.8, 10, 2), out: { at: 1576.0, dur: 0.4 } });
      TX.kick(ctx, 'Spain', c[0], c[1] + 36, t, wt('canary', 1572.97) + 0.2, { align: 'center', size: 20, color: C.sol, out: { at: 1576.0, dur: 0.4 } });
      const af = pr([-11.0, 26.6]); TX.kick(ctx, 'Africa', af[0], af[1], t, wt('african', 1574.21) - 0.1, { size: 30, color: 'rgba(250,244,232,0.7)', tracking: 0.6, out: { at: 1576.0, dur: 0.4 } });
      if (v.scale < 5000) { const sn = pr([-14.6, 14.6]), ml = pr([-8.6, 14.2]), mr = pr([-11.0, 20.2]), ci = pr([-15.4, 28.7]); TX.big(ctx, 'SENEGAL', sn[0], sn[1], t, wt('senegal', 1577.45) - 0.1, { font: MG.F.grotesk, weight: 800, size: 34, color: C.cal, tracking: 0.12, align: 'center' }); TX.big(ctx, 'MALI', ml[0], ml[1], t, wt('mali', 1578.21) - 0.1, { font: MG.F.grotesk, weight: 800, size: 34, color: C.cal, tracking: 0.12, align: 'center' }); TX.kick(ctx, 'Mauritania', mr[0], mr[1], t, 1577.0, { size: 18, align: 'center', color: 'rgba(250,244,232,0.5)' }); TX.kick(ctx, 'Canary Islands', ci[0], ci[1] - 30, t, 1576.9, { size: 18, align: 'center', color: C.sol }); }
      TX.kick(ctx, 'Tens of thousands', 150, 150, t, tT - 0.05, { size: 24, color: C.amber });
      TX.lead(ctx, 'cross the Atlantic', 146, 228, t, wt('cross', 1578.73) - 0.2, { size: 56, color: C.cal });
    },
    post: { grade: 'night', grain: 0.045, vignette: 0.45 } };

  // ================================================================== 19 CAYUCO (1578.70–1581.78)
  const HORIZON = 560;
  S10.nightSky = (key = 'a', moonX = 1460) => MG.cache('s10:nsky' + key, W, H, (x, w, h) => { const g = x.createLinearGradient(0, 0, 0, HORIZON); g.addColorStop(0, '#040912'); g.addColorStop(1, '#1b2d48'); x.fillStyle = g; x.fillRect(0, 0, w, HORIZON + 2); const r = MG.rng(31); for (let i = 0; i < 420; i++) { x.fillStyle = `rgba(230,236,255,${0.15 + r() * 0.6})`; x.fillRect(r() * w, r() * HORIZON * 0.95, r() < 0.07 ? 1.8 : 1, r() < 0.07 ? 1.8 : 1); }
    const sg = x.createLinearGradient(0, HORIZON, 0, h); sg.addColorStop(0, '#16263d'); sg.addColorStop(1, '#050a12'); x.fillStyle = sg; x.fillRect(0, HORIZON, w, h - HORIZON);
    x.drawImage(glow('#cfe0ff', 160), moonX - 160, 210 - 160); MG.kit.sun(x, moonX, 210, 46, 0, { variant: 'coin', color: '#d9e2ee' }); x.fillStyle = 'rgba(150,170,200,0.35)'; for (const [dx, dy, rr] of [[-12, -8, 9], [14, 10, 6], [4, -18, 4]]) { x.beginPath(); x.arc(moonX + dx, 210 + dy, rr, 0, TAU); x.fill(); } });
  const wave = (x, t, k, a) => Math.sin(x * 0.006 * k + t * 1.2 * k) * a + Math.sin(x * 0.017 * k - t * 1.9) * a * 0.35;
  S10.cayucoHull = () => MG.cache('s10:hull', 1100, 300, (x, w, h) => {
    const hull = new Path2D(); hull.moveTo(30, 70); hull.bezierCurveTo(120, 140, 260, 175, 520, 178); hull.bezierCurveTo(800, 178, 980, 150, 1060, 100); hull.lineTo(1040, 150); hull.bezierCurveTo(960, 230, 760, 262, 520, 262); hull.bezierCurveTo(280, 262, 120, 220, 30, 70); hull.closePath();
    x.save(); x.fillStyle = '#1d4a6e'; x.fill(hull); x.clip(hull);
    x.fillStyle = '#e8c23a'; x.beginPath(); x.moveTo(0, 168); x.bezierCurveTo(300, 200, 800, 200, 1100, 150); x.lineTo(1100, 170); x.bezierCurveTo(800, 222, 300, 222, 0, 190); x.fill();
    x.fillStyle = '#c23a2a'; x.beginPath(); x.moveTo(0, 190); x.bezierCurveTo(300, 222, 800, 222, 1100, 170); x.lineTo(1100, 186); x.bezierCurveTo(800, 238, 300, 238, 0, 206); x.fill();
    x.strokeStyle = '#f2ead8'; x.lineWidth = 3; x.beginPath(); for (let i = 0; i < 30; i++) { const xx = 140 + i * 28; x.lineTo(xx, 236 + (i % 2) * 12 - Math.max(0, (xx - 700) * 0.06)); } x.stroke();
    x.fillStyle = 'rgba(0,0,0,0.45)'; x.fillRect(0, 230, w, 60); MG.tex.over(x, 'fibers', { alpha: 0.9, color: '#000' }); MG.tex.over(x, 'blotch', { alpha: 0.4, color: '#000', scale: 4 });
    x.restore(); x.strokeStyle = 'rgba(255,240,210,0.35)'; x.lineWidth = 3; x.beginPath(); x.moveTo(30, 70); x.bezierCurveTo(120, 140, 260, 175, 520, 178); x.bezierCurveTo(800, 178, 980, 150, 1060, 100); x.stroke();
    x.fillStyle = '#2a2a2e'; x.fillRect(1010, 120, 46, 70); x.fillStyle = '#3a3a40'; x.fillRect(1018, 190, 14, 70);
  });
  S10.passengers = (ctx, t, n = 34) => { for (let i = 0; i < n; i++) { const px = 150 + i * 24 + MG.rand(3, i) * 10, py = 165 - Math.sin((px / 1000) * Math.PI) * 4 + MG.rand(4, i) * 6; const bob = Math.sin(t * 2 + i) * 1.5; const col = MG.rand(5, i) < 0.12 ? '#c8642a' : MG.col.mix('#0a0d14', '#1e2430', MG.rand(6, i)); ctx.fillStyle = col; ctx.beginPath(); ctx.ellipse(px, py - 18 + bob, 13, 22, 0, 0, TAU); ctx.fill(); ctx.fillStyle = '#0a0c10'; ctx.beginPath(); ctx.arc(px + 2, py - 44 + bob, 9, 0, TAU); ctx.fill(); ctx.strokeStyle = 'rgba(200,215,240,0.4)'; ctx.lineWidth = 1.6; ctx.beginPath(); ctx.arc(px + 2, py - 44 + bob, 9, -1.4, 0.3); ctx.stroke(); } };
  const CAYUCO = { id: 's10_cayuco', start: 1578.7, end: 1581.78, transIn: TR.tilt(1.0, HORIZON),
    init() { S10.nightSky(); S10.cayucoHull(); },
    draw(ctx, t) {
      const hh = MG.cam.handheld(t, 3, 17); ctx.save(); ctx.translate(hh.dx, hh.dy);
      ctx.drawImage(S10.nightSky(), 0, 0);
      ctx.save(); ctx.globalCompositeOperation = 'screen'; for (let i = 0; i < 40; i++) { const yy = HORIZON + 6 + i * 11, ww = 30 + i * 6; ctx.fillStyle = `rgba(200,220,255,${0.22 * (1 - i / 40)})`; ctx.fillRect(1460 - ww / 2 + Math.sin(t * 3 + i * 1.7) * 14, yy, ww * (0.4 + 0.6 * MG.hash(i + MG.kit.twos(t) * 3)), 2); } ctx.restore();
      const band = (y0, k, a, col, hl) => { ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(-20, H + 20); for (let xx = -20; xx <= W + 20; xx += 20) ctx.lineTo(xx, y0 + wave(xx, t, k, a)); ctx.lineTo(W + 20, H + 20); ctx.fill(); ctx.strokeStyle = hl; ctx.lineWidth = 2; ctx.beginPath(); for (let xx = -20; xx <= W + 20; xx += 20) ctx.lineTo(xx, y0 + wave(xx, t, k, a)); ctx.stroke(); };
      band(600, 1.4, 5, '#0f1d30', 'rgba(170,200,240,0.12)'); band(660, 1.1, 9, '#0c1828', 'rgba(170,200,240,0.14)');
      // the boat rides the swell
      const bx = lerp(1000, 820, clamp((t - 1578.7) / 3.2)); const yA = 720 + wave(bx - 400, t, 0.9, 14), yB = 720 + wave(bx + 400, t, 0.9, 14); const ang = Math.atan2(yB - yA, 800); const by = (yA + yB) / 2;
      ctx.save(); ctx.translate(bx, by); ctx.rotate(ang); ctx.translate(-550, -205);
      S10.passengers(ctx, t); ctx.drawImage(S10.cayucoHull(), 0, 0); ctx.restore();
      MG.fx.particles(ctx, { n: 30, seed: 3, t, area: [bx - 560, by - 40, 60, 40], vel: [-60, -30], gravity: 120, life: 1.2, size: [1, 3], color: '#dfe9ff', alpha: 0.5 });
      band(790, 0.8, 16, '#0a1422', 'rgba(170,200,240,0.18)'); band(930, 0.6, 26, '#060c16', 'rgba(170,200,240,0.12)');
      ctx.restore();
      TX.kick(ctx, 'Cayuco', 150, 150, t, wt('wooden', 1579.93) - 0.3, { size: 26, color: C.amber });
      TX.lead(ctx, 'a wooden fishing boat', 146, 226, t, wt('wooden', 1579.93) - 0.1, { size: 56, color: C.cal });
      TX.kick(ctx, 'Atlantic Ocean · night', 1770, 1000, t, 1579.0, { size: 18, color: 'rgba(250,244,232,0.5)', align: 'right' });
    },
    post: { grade: 'night', grain: 0.05, vignette: 0.5 } };

  // ================================================================== 20 RECORD (1581.78–1586.18)
  const ARRIVALS = [[2018, 1307], [2019, 2698], [2020, 23023], [2021, 22316], [2022, 15682], [2023, 39910], [2024, 46843]];
  const RECORD = { id: 's10_record', start: 1581.78, end: 1586.18, transIn: null,
    draw(ctx, t) {
      ctx.drawImage(S10.nightSky('b', 1700), 0, 0); const sink = clamp((t - 1586.18) / 0.8);
      const band = (y0, k, a, col) => { ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(-20, H + 20); for (let xx = -20; xx <= W + 20; xx += 20) ctx.lineTo(xx, y0 + wave(xx, t, k, a)); ctx.lineTo(W + 20, H + 20); ctx.fill(); };
      const t24 = wt('2024', 1581.97), t50 = wt('50,000', 1583.45), tRec = wt('record', 1585.57);
      const per = 500, cols = 4, sp = 19; const gl = glow('#ffc070', 12);
      ARRIVALS.forEach(([yr, v], i) => { const x0 = 300 + i * 205; const nL = Math.round(v / per); const rows = Math.ceil(nL / cols); const grow = prog(t, 1582.0 + i * 0.16, 1582.0 + i * 0.16 + (yr === 2024 ? 2.2 : 1.0), 'inOutSine'); const shown = Math.floor(nL * grow);
        for (let k = 0; k < shown; k++) { const r = Math.floor(k / cols), c = k % cols; let px = x0 + c * sp, py = HORIZON + 210 - r * sp; py += sink * (300 + MG.rand(k, i) * 400); const al = (yr === 2024 ? 1 : 0.7) * (1 - sink * MG.rand(k + 7, i)); if (al <= 0.02) continue; ctx.globalAlpha = al; ctx.drawImage(gl, px - 12, py - 12); ctx.fillStyle = yr === 2024 ? '#fff0d0' : '#f0c080'; ctx.fillRect(px - 2.5, py - 2.5, 5, 5); ctx.globalAlpha = al * 0.25; ctx.fillRect(px - 2.5, HORIZON + 420 + r * sp * 0.6 + Math.sin(t * 3 + k) * 2, 5, 3); }
        ctx.globalAlpha = 1 - sink; TX.draw(ctx, String(yr), x0 + 28, HORIZON + 262, { font: MG.F.mono, weight: yr === 2024 ? 700 : 500, size: 22, color: yr === 2024 ? C.amber : 'rgba(250,244,232,0.6)', align: 'center', tracking: 0.1 }); ctx.globalAlpha = 1; });
      band(HORIZON + 236, 0.8, 4, 'rgba(6,12,22,0.0)');
      ctx.save(); ctx.globalAlpha = 1 - sink;
      const x24 = 300 + 6 * 205; const top24 = HORIZON + 210 - Math.ceil(46843 / per / cols) * sp;
      if (t > t50 - 0.4) { const n = Math.round(lerp(0, 46843, MG.ease.outCubic(clamp((t - t50 + 0.3) / 1.0)))); TX.draw(ctx, fmt(n), x24 + 40, top24 - 40, { size: 120, color: C.cal, align: 'center', shadow: SH(0.8, 24, 8) }); }
      const rk = prog(t, tRec - 0.15, tRec + 0.3, 'outBack'); if (rk > 0) { ctx.save(); ctx.translate(x24 + 40, top24 - 190); ctx.scale(rk, rk); ctx.rotate(-0.05); ctx.fillStyle = C.amber; ctx.fillRect(-90, -30, 180, 50); TX.draw(ctx, 'RECORD', 0, 9, { font: MG.F.grotesk, weight: 800, size: 34, color: '#1a1a22', align: 'center', tracking: 0.14 }); ctx.restore(); }
      ctx.restore();
      TX.kick(ctx, 'Arrivals · Canary Islands', 150, 150, t, 1581.85, { size: 22, color: C.amber, out: { at: 1586.0, dur: 0.3 } });
      TX.lead(ctx, 'almost fifty thousand', 146, 226, t, wt('almost', 1582.97) - 0.1, { size: 54, color: C.cal, out: { at: 1586.0, dur: 0.3 } });
      TX.kick(ctx, 'each light = 500 people · source: Spanish Interior Ministry', 150, 1010, t, 1582.4, { size: 16, color: 'rgba(250,244,232,0.45)', tracking: 0.1, out: { at: 1586.0, dur: 0.3 } });
    },
    post: { grade: 'night', grain: 0.045, vignette: 0.45 } };

  // ================================================================== 21 DEADLY (1586.18–1593.45)
  const DEADLY = { id: 's10_deadly', start: 1586.18, end: 1593.45, transIn: TR.lightsOut(1.0),
    draw(ctx, t) {
      const v = DEAD_V(t); const dark = lin(t, 1586.2, 1593.0); const pr = S10.atlDraw(ctx, t, v, { dark: 0.4 + 0.5 * dark });
      const R = ROUTES[0]; const pts = S10.routePts(pr, R); const pts2 = S10.routePts(pr, ROUTES[1]);
      ctx.save(); ctx.globalAlpha = 0.5; MG.fx.line(ctx, pts, { color: 'rgba(245,184,90,0.35)', width: 26, cap: 'round' }); MG.fx.line(ctx, pts2, { color: 'rgba(245,184,90,0.25)', width: 20 }); ctx.restore();
      const tTh = wt('thousands', 1591.2); const gl = glow('#ffc070', 14);
      for (let i = 0; i < 46; i++) { const path = i % 3 ? pts : pts2; const u = MG.fract(MG.rand(91, i) + (t - 1586.18) * 0.035); const q = MG.path.along(path, u); const die = 1589.6 + MG.rand(92, i) * 3.6; const alive = MG.rand(93, i) < 0.42 ? 1 : 1 - clamp((t - die) / 0.9); const fl = alive < 1 && alive > 0 ? 0.6 + 0.4 * Math.sin(t * 40 + i) : 1; if (alive <= 0.01) { if (t - die < 2.5) { ctx.strokeStyle = `rgba(245,184,90,${(0.25 * (1 - (t - die - 0.9) / 1.6)).toFixed(3)})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(q[0], q[1] + 6, 6 + (t - die) * 8, 0, TAU); ctx.stroke(); } continue; }
        const sinkY = (1 - alive) * 10; ctx.globalAlpha = alive * fl; ctx.drawImage(gl, q[0] - 14, q[1] - 14 + sinkY); ctx.fillStyle = '#ffeccc'; ctx.fillRect(q[0] - 1.8, q[1] - 1.8 + sinkY, 3.6, 3.6); ctx.globalAlpha = 1; }
      TX.lead(ctx, 'one of the', 150, 160, t, wt('deadliest', 1586.92) - 0.4, { size: 50, color: 'rgba(250,244,232,0.8)', out: { at: 1589.3, dur: 0.5 } });
      TX.big(ctx, 'deadliest routes', 146, 280, t, wt('deadliest', 1586.92) - 0.05, { weight: 500, size: 110, color: C.cal, out: { at: 1589.3, style: 'blur', dur: 0.5 } });
      TX.kick(ctx, 'in the world', 152, 340, t, wt('world', 1588.72) - 0.2, { size: 22, color: 'rgba(250,244,232,0.6)', out: { at: 1589.3, dur: 0.5 } });
      TX.big(ctx, 'thousands', 146, 280, t, tTh - 0.05, { weight: 300, size: 130, color: C.cal, style: 'fade' });
      TX.lead(ctx, 'never make it', 152, 370, t, wt('never', 1591.92) - 0.05, { size: 60, color: 'rgba(250,244,232,0.8)' });
      TX.kick(ctx, 'estimate · human rights groups', 154, 430, t, wt('estimate', 1590.48), { size: 18, color: 'rgba(250,244,232,0.45)' });
    },
    post: { grade: 'night', grain: 0.05, vignette: 0.55, sat: 0.85 } };

  // ================================================================== 22 THE SOUTHERN DOOR · 3D (1593.45–1599.90)
  const DOOR_PR = () => window.d3.geoConicConformal().parallels([36, 48]).rotate([2, 0]).center([0, 42.5]).scale(5400).translate([1024, 1024]);
  S10.doorMap = () => MG.cache('s10:doormap', 2048, 2048, (x, w, h) => { MG.geo.init(); const pr = DOOR_PR();
    x.fillStyle = '#0a1828'; x.fillRect(0, 0, w, h); x.strokeStyle = 'rgba(169,198,222,0.06)'; x.lineWidth = 2; for (let yy = 0; yy < h; yy += 18) { x.beginPath(); for (let xx = 0; xx <= w; xx += 16) x.lineTo(xx, yy + Math.sin(xx * 0.01 + yy) * 2.5); x.stroke(); }
    const eu = new Set(EU); for (const f of MG.geo.world50.features) { const n = f.properties.name; const c = window.d3.geoCentroid(f); if (c[0] < -30 || c[0] > 40 || c[1] < 20 || c[1] > 72) continue; MG.geo.draw(x, pr, f, { fill: n === 'Spain' ? '#e49a3c' : eu.has(n) ? '#3a4a62' : c[1] < 37.5 ? '#1d2636' : '#2a3448', stroke: 'rgba(169,198,222,0.18)', width: 1.5 }); }
    for (const n of ['Morocco', 'Algeria', 'Portugal', 'France', 'Spain', 'Gibraltar']) MG.geo.draw(x, pr, MG.geo.country(n, '10'), { fill: n === 'Spain' ? '#e49a3c' : n === 'Morocco' || n === 'Algeria' ? '#1d2636' : n === 'Gibraltar' ? '#a05048' : '#3a4a62', stroke: 'rgba(169,198,222,0.3)', width: 1.5 });
    const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, 'rgba(255,190,110,0.10)'); g.addColorStop(0.55, 'rgba(255,190,110,0.03)'); g.addColorStop(1, 'rgba(0,0,0,0.35)'); x.fillStyle = g; x.fillRect(0, 0, w, h);
    for (const c of ['Paris', 'Berlin', 'Brussels', 'Madrid', 'Rome', 'Lisbon', 'London', 'Amsterdam', 'Milan', 'Barcelona', 'Munich', 'Frankfurt', 'Marseille', 'Valencia', 'Seville']) { const p = pr(MG.geo.cities[c]); x.drawImage(glow('#ffc878', 26), p[0] - 26, p[1] - 26); x.fillStyle = '#fff0cc'; x.fillRect(p[0] - 3, p[1] - 3, 6, 6); }
    for (const c of ['Rabat', 'Casablanca', 'Tangier', 'Algiers', 'Marrakesh']) { const p = pr(MG.geo.cities[c]); x.drawImage(glow('#ffb860', 18), p[0] - 18, p[1] - 18); }
  });
  const planeXZ = (ll) => { const p = DOOR_PR()(ll); return [(p[0] / 2048 - 0.5) * 20, (p[1] / 2048 - 0.5) * 20]; };
  const DOOR = { id: 's10_door', start: 1593.45, end: 1599.9, transIn: { type: 'blur', dur: 0.8, amount: 22 },
    init() {
      const T = THREE; const sc = new T.Scene(); this.sc = sc; sc.environment = MG.three.env(); sc.background = null;
      this.cam = new T.PerspectiveCamera(34, 16 / 9, 0.05, 80);
      const map = MG.three.canvasTexture(S10.doorMap()); const plane = new T.Mesh(new T.PlaneGeometry(20, 20), new T.MeshStandardMaterial({ map, roughness: 0.92, metalness: 0, envMapIntensity: 0.15 })); plane.rotation.x = -Math.PI / 2; sc.add(plane);
      const [dx, dz] = planeXZ([-5.55, 36.02]); this.door = { x: dx, z: dz };
      const g = new T.Group(); g.position.set(dx, 0, dz); sc.add(g); this.g = g;
      const mk = (w, h, f) => { const c = MG.canvas(w, h); f(c.getContext('2d'), w, h); return c; };
      const stone = MG.three.canvasTexture(mk(256, 512, (x, w, h) => { x.fillStyle = '#9a8a78'; x.fillRect(0, 0, w, h); MG.tex.over(x, 'blotch', { alpha: 0.5, color: '#3a2a20', scale: 3 }); x.strokeStyle = 'rgba(40,28,20,0.5)'; x.lineWidth = 3; for (let y = 0; y < h; y += 64) { x.beginPath(); x.moveTo(0, y); x.lineTo(w, y); x.stroke(); } }));
      const lint = MG.three.canvasTexture(mk(1024, 192, (x, w, h) => { x.fillStyle = '#9a8a78'; x.fillRect(0, 0, w, h); MG.tex.over(x, 'blotch', { alpha: 0.5, color: '#3a2a20', scale: 3 }); const e = engraved('europa', 'EUROPA', { font: MG.F.roman, weight: 900, size: 120, tracking: 0.3, w: 1024, h: 192, depth: 5, floor: 'rgba(50,36,26,0.95)', lit: 'rgba(255,236,200,0.6)' }); x.drawImage(e, 0, 0); }));
      const wood = mk(512, 1024, (x, w, h) => { for (let i = 0; i < 6; i++) { const g2 = x.createLinearGradient(i * w / 6, 0, (i + 1) * w / 6, 0); g2.addColorStop(0, '#6a4426'); g2.addColorStop(0.5, '#7a5030'); g2.addColorStop(1, '#3a2414'); x.fillStyle = g2; x.fillRect(i * w / 6, 0, w / 6, h); } MG.tex.over(x, 'fibers', { alpha: 1, color: '#1a0c04' }); MG.tex.over(x, 'blotch', { alpha: 0.3, color: '#000', scale: 4 }); x.fillStyle = '#1e1610'; for (const yy of [140, 512, 884]) x.fillRect(0, yy - 22, w, 44); for (const yy of [140, 512, 884]) for (let k = 0; k < 7; k++) { x.fillStyle = '#5a5048'; x.beginPath(); x.arc(36 + k * 73, yy, 11, 0, TAU); x.fill(); x.fillStyle = 'rgba(255,230,200,0.5)'; x.beginPath(); x.arc(33 + k * 73, yy - 3, 4, 0, TAU); x.fill(); } });
      const mStone = new T.MeshStandardMaterial({ map: stone, roughness: 0.85 }), mL = new T.MeshStandardMaterial({ map: lint, roughness: 0.85 }), mW = new T.MeshStandardMaterial({ map: MG.three.canvasTexture(wood), roughness: 0.7, metalness: 0.05 });
      const FW = 2.3, FH = 3.3; this.FW = FW;
      const jamb = (x0) => { const m = new T.Mesh(new T.BoxGeometry(0.42, FH, 0.5), mStone); m.position.set(x0, FH / 2, 0); g.add(m); };
      jamb(-FW / 2 - 0.21); jamb(FW / 2 + 0.21); const lt = new T.Mesh(new T.BoxGeometry(FW + 0.84 + 0.3, 0.6, 0.6), [mStone, mStone, mStone, mStone, mL, mStone]); lt.position.set(0, FH + 0.3, 0); g.add(lt);
      const st = new T.Mesh(new T.BoxGeometry(FW + 1.6, 0.12, 1.4), mStone); st.position.set(0, 0.06, 0.2); g.add(st);
      this.hinge = new T.Group(); this.hinge.position.set(-FW / 2, 0, -0.05); g.add(this.hinge); const leaf = new T.Mesh(new T.BoxGeometry(FW - 0.04, FH - 0.04, 0.12), mW); leaf.position.set(FW / 2, FH / 2, 0); this.hinge.add(leaf);
      // light wedge on the ground (additive) through the opening
      const wc = mk(64, 256, (x, w, h) => { const g3 = x.createLinearGradient(0, 0, 0, h); g3.addColorStop(0, 'rgba(255,200,130,0.85)'); g3.addColorStop(1, 'rgba(255,200,130,0)'); x.fillStyle = g3; x.fillRect(0, 0, w, h); });
      this.wedgeGeo = new T.BufferGeometry(); this.wedgeGeo.setAttribute('position', new T.Float32BufferAttribute(new Float32Array(12), 3)); this.wedgeGeo.setAttribute('uv', new T.Float32BufferAttribute([0, 1, 1, 1, 1, 0, 0, 0], 2)); this.wedgeGeo.setIndex([0, 1, 2, 0, 2, 3]);
      this.wedge = new T.Mesh(this.wedgeGeo, new T.MeshBasicMaterial({ map: new T.CanvasTexture(wc), transparent: true, blending: T.AdditiveBlending, depthWrite: false, side: T.DoubleSide })); sc.add(this.wedge);
      this.warm = new T.PointLight(0xffb870, 18, 7, 1.6); this.warm.position.set(dx + 0.4, 1.6, dz - 1.0); sc.add(this.warm);
      const moon = new T.DirectionalLight(0x8aa8d8, 0.9); moon.position.set(4, 6, 6); sc.add(moon); sc.add(new T.AmbientLight(0x30405a, 0.7));
      // Brussels → Morocco arc with silver coins
      const [bx, bz] = planeXZ(MG.geo.cities.Brussels), [rx, rz] = planeXZ(MG.geo.cities.Rabat); this.bru = new T.Vector3(bx, 0.05, bz); this.rab = new T.Vector3(rx, 0.05, rz);
      this.curve = new T.QuadraticBezierCurve3(this.bru, new T.Vector3((bx + rx) / 2 + 1.5, 5.2, (bz + rz) / 2), this.rab);
      this.tube = new T.Mesh(new T.TubeGeometry(this.curve, 120, 0.018, 6, false), new T.MeshBasicMaterial({ color: 0xffd08a, transparent: true, opacity: 0.85 })); sc.add(this.tube); this.tubeN = this.tube.geometry.index.count;
      const coinM = new T.MeshStandardMaterial({ color: 0xd8dde4, metalness: 1, roughness: 0.25 }); this.coins = []; for (let i = 0; i < 12; i++) { const c = new T.Mesh(new T.CylinderGeometry(0.11, 0.11, 0.02, 24), coinM); sc.add(c); this.coins.push(c); }
      // Moroccan coast patrol lights
      this.patrol = []; const pm = new T.MeshBasicMaterial({ color: 0xffc070 }); for (let i = 0; i < 14; i++) { const ll = [lerp(-6.0, -2.2, i / 13), lerp(35.78, 35.15, i / 13) + Math.sin(i * 1.3) * 0.08]; const [px, pz] = planeXZ(ll); const m = new T.Mesh(new T.SphereGeometry(0.035, 8, 6), pm); m.position.set(px, 0.04, pz + 0.12); sc.add(m); this.patrol.push(m); }
    },
    draw(ctx, t) {
      const T = THREE; const d = this.door; const tP = wt('pays', 1596.32), tCl = wt('closed', 1599.04), tMo = wt('morocco', 1596.64);
      const open = lerp(MG.deg(58), MG.deg(9), MG.ease.inOutCubic(clamp((t - (tP + 0.6)) / (tCl - tP - 0.4)))); this.hinge.rotation.y = open;
      const FW = this.FW, gap = FW - (FW - 0.04) * Math.cos(open); const x0 = d.x + FW / 2 - gap, x1 = d.x + FW / 2, z0 = d.z + 0.3, L = 6.5, spread = 1.0 + gap * 1.4;
      const pos = this.wedgeGeo.attributes.position.array; pos.set([x0, 0.02, z0, x1, 0.02, z0, x1 + spread * 0.5, 0.02, z0 + L, x0 - spread * 0.3, 0.02, z0 + L]); this.wedgeGeo.attributes.position.needsUpdate = true; this.wedge.material.opacity = clamp(gap / 1.6 + 0.15);
      this.warm.intensity = 6 + 16 * clamp(gap / 1.6);
      const u = clamp((t - 1593.45) / 6.5); const cx = d.x + lerp(1.6, 0.6, u), cy = lerp(2.3, 2.0, u), cz = d.z + lerp(7.6, 6.2, MG.ease.inOutSine(u));
      this.cam.position.set(cx, cy, cz); this.cam.lookAt(d.x + 0.2, lerp(1.7, 1.3, u), d.z - 3.5);
      const ck = prog(t, tP - 0.2, tP + 1.4, 'inOutSine'); this.tube.geometry.setDrawRange(0, Math.floor(this.tubeN * ck / 6) * 6); this.tube.visible = ck > 0.01;
      this.coins.forEach((c, i) => { const ph = MG.fract((t - tP) * 0.32 + i / 12); const vis = t > tP + i * 0.1 && ph < ck; c.visible = vis; if (!vis) return; const p = this.curve.getPoint(ph); c.position.copy(p); c.rotation.set(t * 3 + i, t * 2, 0.4); });
      this.patrol.forEach((m, i) => { m.visible = t > tMo + i * 0.06; m.scale.setScalar(1 + 0.3 * Math.sin(t * 5 + i)); });
      ctx.drawImage(S10.stars(), 0, 0);
      const c = MG.three.render(this.sc, this.cam, { slot: 1, w: 1280, h: 720, clearAlpha: 0, exposure: 1.1 }); ctx.drawImage(c, 0, 0, W, H);
      // labels from 3D points
      const scr = (v3) => { const v = v3.clone().project(this.cam); return [(v.x + 1) * 960, (1 - v.y) * 540]; };
      const bp = scr(this.bru), rp = scr(this.rab);
      TX.kick(ctx, 'Brussels', bp[0], bp[1] - 26, t, tP - 0.6, { size: 22, color: C.cal, align: 'center', shadow: SH(0.8, 8, 2) });
      TX.kick(ctx, 'Morocco', rp[0], rp[1] + 44, t, tMo - 0.1, { size: 22, color: C.amber, align: 'center', shadow: SH(0.8, 8, 2) });
      TX.lead(ctx, "Europe's", 150, 160, t, wt('europe', 1594.0) - 0.1, { size: 58, color: C.cal, shadow: SH(0.8, 14, 4) });
      TX.big(ctx, 'southern door', 146, 280, t, wt('southern', 1594.42) - 0.1, { size: 120, color: C.cal, shadow: SH(0.8, 24, 8) });
      TX.kick(ctx, 'mostly closed', 152, 344, t, tCl - 0.3, { size: 24, color: C.amber });
    },
    post: { grade: 'night', grain: 0.045, vignette: 0.5, contrast: 1.05 } };

  // ================================================================== 23 GIBRALTAR · day map (1599.90–1603.45)
  const GIB = [-5.3536, 36.1408];
  const GIB_V = (t) => MG.geo.view(t, [[1599.9, { center: [-5.2, 36.0], scale: 30000 }], [1602.2, { center: [-5.36, 36.08], scale: 52000 }, 'cam'], [1603.6, { center: [-5.36, 36.1], scale: 56000 }, 'soft']]);
  S10.infinity = (cx, cy, a, b) => { const pts = []; for (let i = 0; i <= 120; i++) { const u = (i / 120) * TAU; const s = Math.sin(u), c = Math.cos(u); pts.push([cx + a * c / (1 + s * s), cy + b * s * c / (1 + s * s)]); } return pts; };
  const GIBMAP = { id: 's10_gibmap', start: 1599.9, end: 1603.45, transIn: TR.doorLeaf(0.85),
    draw(ctx, t) {
      MG.geo.init(); const v = GIB_V(t); const pr = MG.geo.proj('mercator', { center: v.center, scale: v.scale });
      MG.kit.seaBg(ctx, P.seaLight);
      for (const n of ['Morocco', 'Portugal']) MG.geo.draw(ctx, pr, MG.geo.country(n, '10'), { fill: '#E3D6BB', stroke: 'rgba(30,26,29,0.5)', width: 1.4 });
      const es = MG.geo.country('Spain', '10'); MG.geo.draw(ctx, pr, es, { fill: P.sol, stroke: 'rgba(30,26,29,0.55)', width: 1.4, shadow: { blur: 16, dy: 6, color: 'rgba(40,20,10,0.25)' } });
      ctx.save(); MG.geo.clip(ctx, pr, es); ctx.globalAlpha = 0.5; ctx.globalCompositeOperation = 'multiply'; MG.geo.relief(ctx, pr, { alpha: 1 }); ctx.restore();
      const gf = MG.geo.region('Gibraltar') || MG.geo.country('Gibraltar', '10'); const gfe = MG.geo.regionsAll ? MG.geo.regionsAll.features.find((f) => /Gibraltar/.test(f.properties.name)) : null;
      MG.geo.slab(ctx, pr, gfe || MG.geo.country('Gibraltar', '10'), { depth: 6 * prog(t, 1600.6, 1601.4), top: P.rojo, side: P.rojoDeep, stroke: 'rgba(30,26,29,0.6)', width: 1.2, shadowDy: 8, shadowBlur: 8 });
      const g = pr(GIB); const lk = prog(t, wt('dispute', 1602.04) - 0.3, wt('dispute', 1602.04) + 0.6, 'linear');
      if (lk > 0) { const pts = S10.infinity(g[0] + 6, g[1] + 2, 150, 90); ctx.save(); ctx.strokeStyle = 'rgba(30,26,29,0.25)'; ctx.lineWidth = 2; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); const head = MG.fract((t - 1601.6) * 0.55); MG.fx.line(ctx, pts, { from: Math.max(0, head - 0.35 * lk), progress: head, color: P.rojo, width: 4 }); if (head < 0.35 * lk) MG.fx.line(ctx, pts, { from: 1 - (0.35 * lk - head), progress: 1, color: P.rojo, width: 4 }); const hp = MG.path.along(pts, head); MG.fx.arrowHead(ctx, [MG.path.along(pts, Math.max(0, head - 0.01)), hp], 18, P.rojo); ctx.restore(); }
      MG.geo.label(ctx, pr, GIB, { text: 'GIBRALTAR', t, t0: wt('gibraltar', 1603.52) - 1.2, dot: 0, dx: 24, dy: -40, size: 34, weight: 800, color: P.ink, halo: 'rgba(242,232,213,0.9)', haloW: 7, tracking: 0.1 });
      TX.kick(ctx, 'British', g[0] + 26, g[1] - 4, t, wt('britain', 1602.76) - 0.1, { size: 20, color: P.rojoDeep });
      const sp = pr([-5.75, 36.42]); TX.kick(ctx, 'Spain', sp[0], sp[1], t, 1600.3, { size: 26, color: P.ink, align: 'center', tracking: 0.5 });
      const mo = pr([-5.6, 35.78]); TX.kick(ctx, 'Morocco', mo[0], mo[1], t, 1600.4, { size: 22, color: 'rgba(30,26,29,0.55)', align: 'center', tracking: 0.5 });
      TX.lead(ctx, 'a never-ending dispute', 150, 170, t, wt('never-ending', 1601.36) - 0.1, { size: 60, color: P.ink });
      TX.kick(ctx, 'Spain  ⟷  Britain', 154, 236, t, wt('britain', 1602.76) - 0.1, { size: 22, color: P.rojo });
    },
    post: { grade: 'warm', grain: 0.04, vignette: 0.3 } };

  // ================================================================== 24 THE ROCK · macaque & the Treaty of Utrecht (1603.45–1607.33)
  S10.rockScene = () => MG.cache('s10:rock', W + 200, H + 120, (x, w, h) => {
    const g = x.createLinearGradient(0, 0, 0, 560); g.addColorStop(0, '#8DB6D9'); g.addColorStop(1, '#F2E4C8'); x.fillStyle = g; x.fillRect(0, 0, w, h);
    MG.kit.sun(x, 330, 170, 62, 0, { corona: 0.7, halftone: 0.4 });
    x.fillStyle = 'rgba(150,160,175,0.6)'; x.beginPath(); x.moveTo(1300, 560); x.bezierCurveTo(1450, 470, 1600, 480, 1700, 500); x.lineTo(2200, 560); x.fill();
    const sg = x.createLinearGradient(0, 560, 0, h); sg.addColorStop(0, '#5a8ab6'); sg.addColorStop(1, '#2d5a86'); x.fillStyle = sg; x.fillRect(0, 556, w, h);
    x.strokeStyle = 'rgba(255,255,255,0.25)'; x.lineWidth = 2; const r = MG.rng(21); for (let i = 0; i < 260; i++) { const yy = 570 + r() * 360, xx = r() * w, l = 10 + r() * 40 * (yy / 600); x.beginPath(); x.moveTo(xx, yy); x.lineTo(xx + l, yy); x.stroke(); }
    // the Rock: sheer north face (left), long ridge to the south (right)
    const rock = MG.path.smooth([[420, 600], [470, 420], [520, 300], [560, 236], [610, 214], [700, 226], [820, 250], [960, 262], [1100, 300], [1240, 352], [1380, 430], [1500, 520], [1580, 600]], true, 0.35);
    MG.fx.volume(x, rock, [420, 210, 1160, 390], { color: '#c9bfa8', light: [-0.7, -0.7], shade: 0.55, shadeColor: '#6f6878', hi: 0.45, hiColor: '#fff4dc', soft: 0.12, tex: 'blotch', texAlpha: 0.25 });
    x.save(); x.clip(rock); for (let i = 0; i < 160; i++) { const xx = 460 + r() * 1100, yy = 260 + r() * 340; x.fillStyle = MG.col.a(r() < 0.5 ? '#6f7a3a' : '#8a9450', 0.55); x.beginPath(); x.ellipse(xx, yy, 8 + r() * 26, 5 + r() * 12, 0, 0, TAU); x.fill(); } MG.fx.hatch(x, rock, [420, 210, 1160, 390], { spacing: 6, angle: 70, light: [-0.7, -0.7], color: 'rgba(60,50,70,0.25)', threshold: 0.2 }); x.restore();
    for (let i = 0; i < 70; i++) { const xx = 620 + r() * 900, yy = 560 + r() * 36; const bw = 10 + r() * 22, bh = 8 + r() * 18; x.fillStyle = '#f4efe4'; x.fillRect(xx, yy - bh, bw, bh); x.fillStyle = 'rgba(120,110,130,0.5)'; x.fillRect(xx + bw * 0.6, yy - bh, bw * 0.4, bh); x.fillStyle = '#c86a4a'; x.fillRect(xx - 1, yy - bh - 3, bw + 2, 3); }
    x.fillStyle = '#8f8a80'; x.beginPath(); x.moveTo(0, 640); x.lineTo(w, 610); x.lineTo(w, 630); x.lineTo(0, 662); x.fill(); x.strokeStyle = '#f4efe4'; x.lineWidth = 2; x.setLineDash([24, 18]); x.beginPath(); x.moveTo(0, 651); x.lineTo(w, 620); x.stroke(); x.setLineDash([]);
    // foreground wall top (fortification) where the macaque sits
    const wall = new Path2D(); wall.moveTo(-10, 840); for (let i = 0; i <= 12; i++) { const xx = i * 180; wall.lineTo(xx, 830 + (i % 2 ? 0 : -6)); } wall.lineTo(w + 10, 820); wall.lineTo(w + 10, h + 10); wall.lineTo(-10, h + 10); wall.closePath();
    MG.fx.volume(x, wall, [-10, 820, w + 20, h - 810], { color: '#c8b08a', light: [-0.6, -0.8], shade: 0.4, hi: 0.4, soft: 0.1, tex: 'blotch', texAlpha: 0.3 });
    x.strokeStyle = 'rgba(80,60,40,0.4)'; x.lineWidth = 2; for (let yy = 880; yy < h; yy += 50) { x.beginPath(); x.moveTo(0, yy); x.lineTo(w, yy - 6); x.stroke(); for (let xx = (yy / 50 % 2) * 60; xx < w; xx += 120) { x.beginPath(); x.moveTo(xx, yy); x.lineTo(xx, yy + 50); x.stroke(); } }
    x.fillStyle = 'rgba(255,245,220,0.35)'; x.fillRect(0, 826, w, 6);
  });
  /** Barbary macaque (tailless), sitting. g: grab 0..1, look: -1..1, smug 0..1 */
  S10.macaque = (ctx, x, y, s, t, o = {}) => {
    const tt = MG.kit.twos(t); const br = 1 + Math.sin(tt * 2.2) * 0.012; const fur = '#a8865a', furD = '#6e5232', furL = '#d8b888', face = '#d9a088';
    const g = o.grab || 0; const lean = (o.antic || 0) * -0.08 + g * 0.06;
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s * br); ctx.rotate(lean);
    MG.fx.contact(ctx, 10, 6, 190, 26, 0.35);
    const vol = (p, bb, col, o2 = {}) => MG.fx.volume(ctx, p, bb, { color: col, light: [-0.6, -0.8], shade: 0.5, shadeColor: MG.col.shade(col, 0.55), hi: 0.35, hiColor: furL, cel: true, rim: '#fff0d0', rimW: 3, outline: '#3a2614', outlineW: 3, size: bb[3], ...o2 });
    // haunches & feet
    vol(MG.path.blob(-70, -40, 70, { seed: 3, irr: 0.12, sx: 1.1, sy: 0.8 }), [-150, -100, 160, 120], fur); vol(MG.path.blob(80, -36, 66, { seed: 4, irr: 0.12, sx: 1.1, sy: 0.8 }), [0, -96, 160, 120], fur);
    for (const fx of [-110, 40]) { ctx.fillStyle = '#5a3e2a'; ctx.beginPath(); ctx.ellipse(fx + 30, 0, 46, 14, 0, 0, TAU); ctx.fill(); ctx.fillStyle = '#8a5a44'; for (let k = 0; k < 4; k++) { ctx.beginPath(); ctx.ellipse(fx + 64 + k * 2, -6 + k * 5, 10, 5, 0.3, 0, TAU); ctx.fill(); } }
    // torso
    const torso = MG.path.smooth([[-90, -60], [-110, -170], [-70, -260], [0, -290], [70, -262], [110, -170], [92, -60], [0, -40]], true);
    vol(torso, [-112, -292, 224, 252], fur, { tex: 'fibers', texAlpha: 0.6 });
    ctx.fillStyle = MG.col.a(furL, 0.55); ctx.beginPath(); ctx.ellipse(0, -140, 52, 80, 0, 0, TAU); ctx.fill();
    // fur boil on the silhouette
    ctx.strokeStyle = furD; ctx.lineWidth = 2.5; for (let i = 0; i < 26; i++) { const a = -Math.PI + (i / 25) * Math.PI; const rr = 112; const bx = Math.cos(a) * rr * 0.95, by = -170 + Math.sin(a) * 120; const j = MG.noise2(i, MG.kit.twos(t) * 6) * 4; ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(bx + Math.cos(a) * (10 + j), by + Math.sin(a) * (10 + j)); ctx.stroke(); }
    // far arm (resting / holding the scroll after the grab)
    const arm = (pts, w) => MG.fx.ink(ctx, pts, { width: w, color: fur, taper: [0, 0.15] });
    const reach = g < 0.5 ? g * 2 : 1 - (g - 0.5) * 2; // out & back
    const hx = lerp(-60, lerp(-330, -40, 0), MG.ease.inOutQuad(reach)) + (g >= 0.5 ? lerp(-330, -40, (g - 0.5) * 2) - lerp(-60, -330, 1) * 0 : 0);
    const handX = g < 0.5 ? lerp(-60, -330, MG.ease.outCubic(g * 2)) : lerp(-330, -50, MG.ease.inOutCubic((g - 0.5) * 2)); const handY = g < 0.5 ? lerp(-60, -40, g * 2) : lerp(-40, -150, MG.ease.inOutCubic((g - 0.5) * 2));
    arm([[70, -230], [100, -150], [70, -80]], 34); ctx.fillStyle = '#7a5a44'; ctx.beginPath(); ctx.ellipse(66, -72, 20, 14, 0.4, 0, TAU); ctx.fill();
    arm([[-70, -230], [lerp(-110, handX * 0.5 - 40, g > 0 ? 1 : 0), lerp(-150, -150, 0)], [handX, handY]], 34);
    if (o.scroll) o.scroll(ctx, handX, handY, g);
    ctx.fillStyle = '#7a5a44'; ctx.beginPath(); ctx.ellipse(handX, handY, 22, 16, -0.3, 0, TAU); ctx.fill(); ctx.strokeStyle = '#3a2614'; ctx.lineWidth = 2; ctx.stroke();
    // head
    const look = o.look || 0, hb = Math.sin(tt * 1.6) * 3; ctx.save(); ctx.translate(0 + look * 6, -330 + hb); ctx.rotate(look * 0.08 + (o.tilt || 0));
    vol(MG.path.blob(0, 0, 92, { seed: 7, irr: 0.14, n: 22, t: MG.kit.twos(t) }), [-100, -100, 200, 200], fur, { tex: 'fibers', texAlpha: 0.5 });
    for (const sx of [-1, 1]) { ctx.fillStyle = '#c98a72'; ctx.beginPath(); ctx.ellipse(sx * 84, -6, 16, 20, 0, 0, TAU); ctx.fill(); ctx.strokeStyle = '#3a2614'; ctx.lineWidth = 2.5; ctx.stroke(); }
    const fc = MG.path.smooth([[-56, -30], [-20, -46], [0, -36], [20, -46], [56, -30], [50, 20], [26, 60], [0, 70], [-26, 60], [-50, 20]], true);
    MG.fx.volume(ctx, fc, [-58, -48, 116, 120], { color: face, light: [-0.6, -0.8], shade: 0.4, hi: 0.4, cel: true, outline: '#3a2614', outlineW: 2.5, size: 110 });
    ctx.fillStyle = MG.col.a(furD, 0.85); ctx.beginPath(); ctx.ellipse(0, -44, 60, 12, 0, Math.PI, TAU); ctx.fill();
    const bl = MG.kit.blink(t, 4); const lk2 = [lerp(-0.6, 0.15, clamp(o.eyes ?? 0)), 0.1];
    MG.kit.eye(ctx, -24, -14, { r: 13, look: lk2, blink: bl, iris: '#6a3a14', skin: face, lid: 0.25 + 0.3 * (o.smug || 0) }); MG.kit.eye(ctx, 24, -14, { r: 13, look: lk2, blink: bl, iris: '#6a3a14', skin: face, lid: 0.25 + 0.3 * (o.smug || 0) });
    MG.kit.brow(ctx, -26, -36, { w: 34, raise: (o.smug || 0) * 0.6, angle: 0.1, color: '#4a2e18', thick: 7 }); MG.kit.brow(ctx, 26, -36, { w: 34, raise: (o.smug || 0) * -0.2, angle: -0.1, color: '#4a2e18', thick: 7, flip: true });
    const mz = MG.path.ellipse(0, 34, 34, 26); MG.fx.volume(ctx, mz, [-34, 8, 68, 52], { color: '#e2b09a', light: [-0.6, -0.8], shade: 0.35, hi: 0.4, cel: true, outline: '#3a2614', outlineW: 2, size: 50 });
    ctx.fillStyle = '#3a2014'; ctx.beginPath(); ctx.ellipse(-7, 24, 4, 3, 0.4, 0, TAU); ctx.ellipse(7, 24, 4, 3, -0.4, 0, TAU); ctx.fill();
    MG.kit.mouth(ctx, 2, 44, { w: 30, mood: (o.smug || 0) > 0.3 ? 'smirk' : 'neutral', open: o.chew ? 0.15 + 0.15 * Math.sin(tt * 9) : 0, color: '#3a1a10' });
    ctx.restore();
    ctx.restore();
  };
  S10.scroll = (ctx, x, y, k, o = {}) => { ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || -0.06); const w = lerp(60, 380, k), h = 240;
    ctx.save(); ctx.shadowColor = 'rgba(40,20,10,0.4)'; ctx.shadowBlur = 20; ctx.shadowOffsetY = 12; ctx.fillStyle = '#efe2c2'; ctx.fillRect(-w / 2, -h / 2, w, h); ctx.restore();
    ctx.save(); ctx.beginPath(); ctx.rect(-w / 2, -h / 2, w, h); ctx.clip(); MG.tex.over(ctx, 'blotch', { alpha: 0.35, color: '#8a6a3a', scale: 2 }); MG.tex.over(ctx, 'fibers', { alpha: 0.8 });
    ctx.globalAlpha = clamp((k - 0.5) * 2); MG.text.draw(ctx, 'TREATY OF UTRECHT', 0, -64, { font: MG.F.oldSC, size: 30, color: '#3a2a1a', align: 'center', tracking: 0.08 }); ctx.fillStyle = '#3a2a1a'; ctx.fillRect(-120, -50, 240, 2); MG.text.draw(ctx, '1713', 0, 40, { font: MG.F.old, size: 110, color: '#2a1c10', align: 'center' }); for (let i = 0; i < 3; i++) ctx.fillRect(-130, 70 + i * 14, 260 - i * 40, 2); ctx.restore();
    for (const sx of [-1, 1]) { const g = ctx.createLinearGradient(sx * w / 2 - 14, 0, sx * w / 2 + 14, 0); g.addColorStop(0, '#c8b088'); g.addColorStop(0.5, '#f4ead2'); g.addColorStop(1, '#a88a60'); ctx.fillStyle = g; ctx.fillRect(sx * w / 2 - 14, -h / 2 - 10, 28, h + 20); }
    ctx.fillStyle = '#9a2a20'; ctx.beginPath(); ctx.arc(w * 0.3 - 30, h / 2 - 20, 22 * clamp(k * 2 - 0.8), 0, TAU); ctx.fill(); ctx.restore(); };
  const ROCK = { id: 's10_rock', start: 1603.45, end: 1607.33, transIn: (() => { const v = GIB_V(1603.45); const p = MG.geo.proj('mercator', { center: v.center, scale: v.scale })(GIB); return TR.circle(p[0], p[1], 40, 0.8, 'rgba(184,50,42,0.9)'); })(),
    init() { S10.rockScene(); },
    draw(ctx, t) {
      const z = lerp(1.0, 1.06, MG.ease.inOutSine(clamp((t - 1603.45) / 4))); const hh = MG.cam.handheld(t, 2, 33);
      ctx.save(); ctx.translate(960 + hh.dx, 540 + hh.dy); ctx.scale(z, z); ctx.translate(-1060, -600); ctx.drawImage(S10.rockScene(), 0, 0); ctx.restore();
      const t17 = wt('1713', 1604.72), tNv = wt('never', 1606.2), tRet = wt('returned', 1606.8);
      const unroll = prog(t, t17 - 0.5, t17 + 0.3, 'outCubic'); const grab = clamp((t - (tNv - 0.1)) / 0.65); const antic = prog(t, tNv - 0.45, tNv - 0.1) * (1 - prog(t, tNv - 0.1, tNv + 0.1));
      const smug = prog(t, tRet, tRet + 0.4); const eyes = t < tNv - 0.6 ? 0.2 + 0.2 * Math.sin(t * 1.3) : t < tRet ? -0.6 : 1;
      const scrollOnWall = grab < 0.5; const sx = 760, sy = 760;
      if (scrollOnWall) S10.scroll(ctx, sx + (grab > 0.45 ? -20 : 0), sy, unroll);
      S10.macaque(ctx, 1340, 900, 1.02, t, { grab, antic, smug, eyes, look: t > tNv ? -0.4 + smug * 0.5 : 0.3, chew: t < tNv - 0.6, scroll: grab >= 0.5 ? (c, hx, hy, g) => { c.save(); c.translate(hx + 30, hy + 20); c.scale(0.55, 0.55); S10.scroll(c, 0, 0, lerp(1, 0.35, (g - 0.5) * 2), { rot: -0.4 }); c.restore(); } : null });
      TX.kick(ctx, 'Gibraltar', 150, 150, t, 1603.6, { size: 24, color: P.rojoDeep });
      TX.big(ctx, 'taken in 1713', 146, 250, t, wt('taken', 1604.37) - 0.1, { size: 92, color: P.ink, shadow: { color: 'rgba(255,250,235,0.6)', blur: 14, dy: 0 } });
      TX.lead(ctx, 'and never returned.', 150, 330, t, tNv - 0.1, { size: 64, color: P.ink });
    },
    post: { grade: 'warm', grain: 0.04, vignette: 0.28, sat: 1.04 } };

  // ================================================================== 25 LATIN AMERICA (1607.33–1618.90)
  const LATAM = [['Mexico', [-99.13, 19.43], 130], ['Guatemala', [-90.51, 14.63], 18], ['Honduras', [-87.21, 14.07], 10], ['El Salvador', [-89.19, 13.69], 6.3], ['Nicaragua', [-86.25, 12.13], 7], ['Costa Rica', [-84.09, 9.93], 5.2], ['Panama', [-79.52, 8.98], 4.4], ['Cuba', [-82.37, 23.11], 11], ['Dominican Rep.', [-69.93, 18.49], 11], ['Puerto Rico', [-66.11, 18.47], 3.2], ['Colombia', [-74.07, 4.71], 52], ['Venezuela', [-66.9, 10.48], 28], ['Ecuador', [-78.47, -0.18], 18], ['Peru', [-77.04, -12.05], 34], ['Bolivia', [-68.15, -16.5], 12], ['Chile', [-70.67, -33.45], 19.5], ['Argentina', [-58.38, -34.6], 46], ['Uruguay', [-56.16, -34.9], 3.4], ['Paraguay', [-57.58, -25.26], 6.9], ['Eq. Guinea', [8.78, 3.75], 1.7]];
  const MAD = [-3.7038, 40.4168];
  const LAT_V = (t) => MG.geo.view(t, [[1607.33, { center: [-24, 31], scale: 820 }], [1609.8, { center: [-47, 3], scale: 545 }, 'cam'], [1613.4, { center: [-45, 1], scale: 560 }, 'soft'], [1617.4, { center: [-40, 6], scale: 560 }, 'soft'], [1619.2, { center: [-6, 38.5], scale: 2400 }, 'cam']]);
  S10.latDots = () => { if (S10._ld) return S10._ld; MG.geo.init(); const d3 = window.d3; const r = MG.rng(500); const out = [];
    for (const [n, cap, pop] of LATAM.concat([['Spain', MAD, 48]])) { const f = MG.geo.country(n, '50'); const b = d3.geoBounds(f); const k = Math.max(1, Math.round(pop)); let c = 0, g = 0; while (c < k && g++ < k * 200) { const ll = [lerp(b[0][0], b[1][0], r()), lerp(b[0][1], b[1][1], r())]; if (d3.geoContains(f, ll)) { out.push({ ll, cap, d: r(), spain: n === 'Spain' }); c++; } } }
    S10._ld = out; return out; };
  S10.softObj = (ctx, kind, x, y, s, rot) => { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s); ctx.save(); ctx.translate(14, 22); ctx.fillStyle = 'rgba(40,20,10,0.28)'; ctx.filter = 'blur(6px)'; ctx.fillRect(-56, -40, 112, 80); ctx.restore();
    if (kind === 'book') { ctx.fillStyle = '#7a2a20'; ctx.fillRect(-62, -42, 124, 84); ctx.fillStyle = '#f4ead6'; ctx.beginPath(); ctx.moveTo(-58, -38); ctx.quadraticCurveTo(-28, -46, 0, -36); ctx.lineTo(0, 38); ctx.quadraticCurveTo(-28, 30, -58, 36); ctx.fill(); ctx.beginPath(); ctx.moveTo(58, -38); ctx.quadraticCurveTo(28, -46, 0, -36); ctx.lineTo(0, 38); ctx.quadraticCurveTo(28, 30, 58, 36); ctx.fill(); ctx.fillStyle = 'rgba(30,20,20,0.5)'; for (let i = 0; i < 6; i++) { ctx.fillRect(-50, -26 + i * 10, 40, 2); ctx.fillRect(10, -26 + i * 10, 40, 2); } MG.text.draw(ctx, 'QUIJOTE', 0, 60, { font: MG.F.oldSC, size: 16, color: '#3a2a1a', align: 'center' }); }
    else if (kind === 'guitar') { ctx.fillStyle = '#c98a4a'; ctx.beginPath(); ctx.ellipse(0, 22, 34, 30, 0, 0, TAU); ctx.ellipse(0, -14, 26, 24, 0, 0, TAU); ctx.fill(); ctx.fillStyle = '#2a1a10'; ctx.beginPath(); ctx.arc(0, 6, 10, 0, TAU); ctx.fill(); ctx.fillStyle = '#5a3a20'; ctx.fillRect(-5, -88, 10, 72); ctx.fillRect(-9, -100, 18, 16); ctx.strokeStyle = 'rgba(255,250,230,0.7)'; ctx.lineWidth = 1; for (let i = -2; i <= 2; i++) { ctx.beginPath(); ctx.moveTo(i * 1.8, -96); ctx.lineTo(i * 1.8, 40); ctx.stroke(); } }
    else if (kind === 'record') { ctx.fillStyle = '#1a1716'; ctx.beginPath(); ctx.arc(0, 0, 48, 0, TAU); ctx.fill(); ctx.strokeStyle = 'rgba(255,255,255,0.12)'; for (let rr = 18; rr < 46; rr += 4) { ctx.beginPath(); ctx.arc(0, 0, rr, 0, TAU); ctx.stroke(); } ctx.fillStyle = P.sol; ctx.beginPath(); ctx.arc(0, 0, 15, 0, TAU); ctx.fill(); ctx.fillStyle = '#1a1716'; ctx.beginPath(); ctx.arc(0, 0, 3, 0, TAU); ctx.fill(); }
    else if (kind === 'tv') { ctx.fillStyle = '#8a5a3a'; ctx.beginPath(); ctx.roundRect(-58, -42, 116, 86, 10); ctx.fill(); ctx.fillStyle = '#d9e6ea'; ctx.beginPath(); ctx.roundRect(-46, -32, 78, 64, 12); ctx.fill(); ctx.fillStyle = P.retroCoral; ctx.beginPath(); ctx.arc(-14, -4, 14, 0, TAU); ctx.fill(); ctx.fillStyle = '#3a2a1a'; ctx.beginPath(); ctx.arc(44, -16, 6, 0, TAU); ctx.arc(44, 8, 6, 0, TAU); ctx.fill(); ctx.strokeStyle = '#3a2a1a'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-10, -42); ctx.lineTo(-30, -70); ctx.moveTo(10, -42); ctx.lineTo(30, -70); ctx.stroke(); }
    else if (kind === 'mic') { ctx.fillStyle = '#3a3a40'; ctx.fillRect(-6, -10, 12, 70); ctx.fillStyle = '#c8ccd2'; ctx.beginPath(); ctx.ellipse(0, -30, 22, 30, 0, 0, TAU); ctx.fill(); ctx.strokeStyle = 'rgba(40,40,50,0.5)'; for (let i = -20; i < 20; i += 6) { ctx.beginPath(); ctx.moveTo(-20, -30 + i); ctx.lineTo(20, -30 + i); ctx.stroke(); } }
    ctx.restore(); };
  S10.latMap = (ctx, t, v) => {
    MG.geo.init(); const pr = MG.geo.proj('natural', { center: v.center, scale: v.scale });
    MG.kit.seaBg(ctx, P.seaLight); MG.geo.graticule(ctx, pr, { color: 'rgba(30,40,60,0.08)', step: [15, 15] });
    MG.geo.draw(ctx, pr, MG.geo.land50, { fill: '#E6D9BE', stroke: 'rgba(30,26,29,0.35)', width: 0.9 });
    const t20 = wt('twenty', 1610.98); LATAM.forEach(([n], i) => { const k = prog(t, t20 + i * 0.065, t20 + i * 0.065 + 0.3); if (k <= 0) return; MG.geo.draw(ctx, pr, MG.geo.country(n, '50'), { fill: MG.col.mix('#E6D9BE', i === 19 ? P.solDeep : P.terracota, k), stroke: 'rgba(60,30,20,0.45)', width: 0.9 }); });
    MG.geo.draw(ctx, pr, MG.geo.country('Spain', '50'), { fill: P.sol, stroke: 'rgba(30,26,29,0.5)', width: 1, shadow: { blur: 10, dy: 4, color: 'rgba(40,20,10,0.3)' } });
    return pr;
  };
  const latThreads = (ctx, pr, t, k) => { const tS = wt('special', 1608.5); LATAM.forEach(([n, cap], i) => { const pg = prog(t, tS - 0.3 + (i % 10) * 0.05, tS + 1.3 + (i % 10) * 0.05, 'inOutCubic'); if (pg <= 0) return; const d = window.d3.geoDistance(MAD, cap); MG.geo.route(ctx, pr, MAD, cap, { progress: pg, color: MG.col.a('#c99a2a', 0.75 * k), width: 1.8, lift: 40 + d * 70, n: 48 }); }); };
  const LATAM1 = { id: 's10_latam', start: 1607.33, end: 1613.44, transIn: { type: 'whip', dur: 0.5, dir: 'right', smear: 200 },
    draw(ctx, t) {
      const v = LAT_V(t); const pr = S10.latMap(ctx, t, v); latThreads(ctx, pr, t, 1);
      MG.geo.label(ctx, pr, MAD, { text: 'MADRID', t, t0: 1607.6, dot: 6, dotColor: P.rojo, size: 24, weight: 800, color: P.ink, halo: 'rgba(242,232,213,0.9)', haloW: 6, dx: 12, dy: -10, tracking: 0.1 });
      const t20 = wt('twenty', 1610.98); const n = Math.round(clamp((t - t20) / (19 * 0.065 + 0.15)) * 20);
      if (t > t20 - 0.1) { TX.draw(ctx, String(Math.max(1, n)), 150, 900, { size: 230, color: P.ink, shadow: { color: 'rgba(255,250,235,0.6)', blur: 20, dy: 0 } }); }
      TX.kick(ctx, 'countries', 160, 950, t, t20 + 0.2, { size: 26, color: P.ink });
      TX.lead(ctx, 'that speak Spanish', 156, 1006, t, wt('speak', 1611.88) - 0.1, { size: 46, color: P.ink });
      TX.kick(ctx, 'A special relationship', 150, 140, t, wt('special', 1608.5) - 0.2, { size: 24, color: P.rojoDeep });
      const pr2 = pr(MG.geo.cities.SanJuan), eg = pr([8.78, 2.6]);
      if (t > t20 + 0.5) { MG.geo.label(ctx, pr, [-66.4, 18.2], { text: 'PUERTO RICO', t, t0: t20 + 0.6, dot: 4, dotColor: P.rojo, size: 18, weight: 700, color: P.ink, leader: [70, -50], halo: 'rgba(242,232,213,0.9)', haloW: 5, tracking: 0.08 }); MG.geo.label(ctx, pr, [10.3, 1.6], { text: 'EQUATORIAL GUINEA', t, t0: t20 + 1.3, dot: 4, dotColor: P.rojo, size: 18, weight: 700, color: P.ink, leader: [60, 60], halo: 'rgba(242,232,213,0.9)', haloW: 5, tracking: 0.08 }); }
    },
    post: { grade: 'warm', grain: 0.04, vignette: 0.3 } };
  const LATAM2 = { id: 's10_softpower', start: 1613.44, end: 1618.9, transIn: null,
    init() { S10.latDots(); },
    draw(ctx, t) {
      const v = LAT_V(t); const a = lerp(0, 0.5, MG.ease.inOutCubic(clamp((t - 1613.44) / 0.9))) * (1 - MG.ease.inOutCubic(clamp((t - 1617.6) / 1.1)));
      const sheet = MG.scratch(3); const s = sheet.getContext('2d'); MG.reset(s); const pr = S10.latMap(s, t, v); latThreads(s, pr, t, 1);
      // half a billion: dots flow along the threads into Madrid
      const tH = wt('half', 1616.24), tM = wt('madrid', 1617.92); const D = S10.latDots(); const mp = pr(MAD);
      if (t > tH - 0.3) { const gl = glow('#b8322a', 8); for (const d of D) { const u = clamp((t - tH + 0.2 - d.d * 0.8) / 1.6); const p0 = pr(d.ll); if (!p0) continue; let x, y; if (d.spain) { x = lerp(p0[0], mp[0], MG.ease.inOutCubic(u)); y = lerp(p0[1], mp[1], MG.ease.inOutCubic(u)); } else { const e = MG.ease.inOutCubic(u); const dd = window.d3.geoDistance(MAD, d.ll); x = lerp(p0[0], mp[0], e); y = lerp(p0[1], mp[1], e) - Math.sin(e * Math.PI) * (40 + dd * 70); } s.globalAlpha = u >= 1 ? 0 : 0.95; s.drawImage(gl, x - 8, y - 8); s.fillStyle = '#8e231c'; s.fillRect(x - 2, y - 2, 4, 4); } s.globalAlpha = 1; const arrived = D.filter((d) => clamp((t - tH + 0.2 - d.d * 0.8) / 1.6) >= 1).length; s.save(); s.globalCompositeOperation = 'source-over'; s.drawImage(glow(P.rojo, 40), mp[0] - 40 - arrived * 0.04, mp[1] - 40 - arrived * 0.04, 80 + arrived * 0.08, 80 + arrived * 0.08); s.restore(); }
      MG.geo.label(s, pr, MAD, { text: 'MADRID', t: 99, dot: 7, dotColor: P.rojo, size: 26, weight: 800, color: P.ink, halo: 'rgba(242,232,213,0.9)', haloW: 6, dx: 14, dy: -12, tracking: 0.1 });
      ctx.fillStyle = '#c9b48e'; ctx.fillRect(0, 0, W, H); ctx.drawImage(MG.tex.paper('#cdb791', { seed: 21, light: 0.4 }), 0, 0);
      S10.tiltQuad(ctx, sheet, a, { div: 10, D: 1900 });
      // soft-power objects ride the threads (stand up on the tilted sheet)
      const tSP = wt('soft', 1615.2) - 0.9; const ok = win(t, tSP, 1617.2, 0.5, 0.6);
      if (ok > 0) { const kinds = ['book', 'guitar', 'record', 'tv', 'mic']; const caps = [[-74.07, 4.71], [-99.13, 19.43], [-58.38, -34.6], [-66.9, 10.48], [-77.04, -12.05]]; kinds.forEach((k, i) => { const u = MG.fract(0.15 + i * 0.19 + (t - tSP) * 0.11 * (i % 2 ? 1 : -1)); const ip = window.d3.geoInterpolate(i % 2 ? MAD : caps[i], i % 2 ? caps[i] : MAD); const ll = ip(u); const p = pr(ll); if (!p) return; const dd = window.d3.geoDistance(MAD, caps[i]); const lift = Math.sin(u * Math.PI) * (40 + dd * 70); const q = S10.tiltPt(p[0] - 960, p[1] - lift - 540, a, { D: 1900 }); S10.softObj(ctx, k, q[0], q[1] - 50 * ok, 1.15 * q[2] * ok, Math.sin(t * 1.3 + i) * 0.15); }); }
      TX.lead(ctx, "Spain's greatest", 150, 140, t, wt('greatest', 1614.16) - 0.1, { size: 56, color: P.ink, out: { at: tH - 0.3, dur: 0.4 } });
      TX.big(ctx, 'soft power', 146, 260, t, wt('soft', 1615.2) - 0.1, { size: 132, italic: true, color: P.ink, shadow: { color: 'rgba(255,250,235,0.6)', blur: 16, dy: 0 }, out: { at: tH - 0.3, style: 'blur', dur: 0.4 } });
      TX.big(ctx, 'half a billion', 146, 250, t, tH - 0.05, { size: 120, color: P.rojoDeep, shadow: { color: 'rgba(255,250,235,0.6)', blur: 16, dy: 0 }, out: { at: 1618.5, dur: 0.3 } });
      TX.lead(ctx, 'people for whom Madrid feels…', 152, 330, t, wt('people', 1617.2) - 0.1, { size: 50, color: P.ink, out: { at: 1618.5, dur: 0.3 } });
    },
    post: { grade: 'warm', grain: 0.04, vignette: 0.32 } };

  // ================================================================== 26–27 KILÓMETRO 0 → the ball (1618.90–1623.60)
  S10.km0 = () => MG.cache('s10:km0', W + 160, H + 120, (x, w, h) => {
    x.fillStyle = '#5a504a'; x.fillRect(0, 0, w, h); const r = MG.rng(7);
    for (let row = 0; row < 40; row++) for (let col = 0; col < 60; col++) { const sx = col * 36 + (row % 2) * 18 - 20, sy = row * 30 - 10; const c = MG.col.mix('#6a605a', '#8a8078', r()); x.fillStyle = '#2e2824'; x.beginPath(); x.roundRect(sx, sy, 34, 28, 7); x.fill(); x.fillStyle = c; x.beginPath(); x.roundRect(sx + 1, sy + 1, 31, 25, 7); x.fill(); x.fillStyle = 'rgba(255,240,220,0.15)'; x.fillRect(sx + 4, sy + 3, 20, 4); }
    // the plaque (granite slab with brass inlay: Spain outline + the six radial roads)
    const pw = 760, ph = 420, px = w / 2 - pw / 2, py = h / 2 - ph / 2 - 10;
    x.save(); x.shadowColor = 'rgba(0,0,0,0.6)'; x.shadowBlur = 30; x.shadowOffsetY = 10; x.fillStyle = '#7c7470'; x.beginPath(); x.roundRect(px, py, pw, ph, 40); x.fill(); x.restore();
    x.save(); x.beginPath(); x.roundRect(px, py, pw, ph, 40); x.clip(); for (let i = 0; i < 5000; i++) { x.fillStyle = r() < 0.5 ? 'rgba(255,250,240,0.18)' : 'rgba(0,0,0,0.3)'; x.fillRect(px + r() * pw, py + r() * ph, 1.6, 1.6); } x.restore();
    x.strokeStyle = '#c9a046'; x.lineWidth = 4; x.beginPath(); x.roundRect(px + 18, py + 18, pw - 36, ph - 36, 28); x.stroke();
    MG.geo.init(); const pen = { type: 'FeatureCollection', features: [MG.geo.country('Spain', '50'), MG.geo.country('Portugal', '50')] }; const pr = window.d3.geoConicConformal().parallels([36, 43.5]).rotate([3.7, 0]).fitExtent([[px + 250, py + 70], [px + pw - 250, py + ph - 90]], MG.geo.peninsular());
    MG.geo.draw(x, pr, MG.geo.peninsular(), { stroke: '#d8b055', width: 3 }); const m = pr(MAD);
    for (const c of [[-1.79, 43.34], [2.86, 42.43], [-0.376, 39.47], [-6.29, 36.53], [-6.97, 38.88], [-8.41, 43.36]]) { const q = pr(c); x.strokeStyle = '#d8b055'; x.lineWidth = 2.5; x.beginPath(); x.moveTo(m[0], m[1]); x.lineTo(q[0], q[1]); x.stroke(); }
    x.fillStyle = '#e8c870'; x.beginPath(); x.arc(m[0], m[1], 8, 0, TAU); x.fill();
    const e1 = engraved('km0', 'KILÓMETRO 0', { font: MG.F.roman, weight: 900, size: 54, tracking: 0.14, w: 700, h: 90, depth: 3, floor: 'rgba(40,34,30,0.95)', lit: 'rgba(255,240,220,0.5)' }); x.drawImage(e1, w / 2 - 350, py + ph - 100);
    const e2 = engraved('km0b', 'PUERTA DEL SOL · MADRID', { font: MG.F.roman, weight: 700, size: 26, tracking: 0.2, w: 700, h: 60, depth: 2, floor: 'rgba(40,34,30,0.95)', lit: 'rgba(255,240,220,0.5)' }); x.drawImage(e2, w / 2 - 350, py + 8);
  });
  S10.ball = (ctx, x, y, r, rot, sq = 0) => { ctx.save(); ctx.translate(x, y); ctx.scale(1 + sq * 0.25, 1 - sq * 0.25); ctx.rotate(rot); const b = MG.path.circle(0, 0, r);
    MG.fx.volume(ctx, b, [-r, -r, r * 2, r * 2], { color: '#f6f2ea', light: [-0.6, -0.8], shade: 0.45, shadeColor: '#6a6070', hi: 0.5, hiColor: '#fff6dc', cel: false, size: r * 2, soft: 0.25 }); ctx.save(); ctx.clip(b);
    const pent = (cx, cy, rr, a) => { ctx.beginPath(); for (let i = 0; i < 5; i++) { const aa = a + i * TAU / 5; ctx.lineTo(cx + Math.cos(aa) * rr, cy + Math.sin(aa) * rr); } ctx.closePath(); ctx.fill(); };
    ctx.fillStyle = '#26222a'; pent(0, 0, r * 0.32, -Math.PI / 2); for (let i = 0; i < 5; i++) { const a = -Math.PI / 2 + i * TAU / 5 + TAU / 10; pent(Math.cos(a) * r * 0.86, Math.sin(a) * r * 0.86, r * 0.3, a); }
    ctx.strokeStyle = 'rgba(40,36,44,0.45)'; ctx.lineWidth = Math.max(1, r * 0.025); for (let i = 0; i < 5; i++) { const a = -Math.PI / 2 + i * TAU / 5; ctx.beginPath(); ctx.moveTo(Math.cos(a) * r * 0.32, Math.sin(a) * r * 0.32); ctx.lineTo(Math.cos(a) * r * 0.62, Math.sin(a) * r * 0.62); ctx.stroke(); }
    ctx.restore(); ctx.strokeStyle = 'rgba(30,26,34,0.6)'; ctx.lineWidth = 2; ctx.stroke(b); ctx.restore(); };
  const BALL_T = 1621.44; const BALL_REST = [1180, 640];
  S10.ballPos = (t) => { const u = t - BALL_T; if (u < 0) return null; const g = 3600; const drops = [[0, 0.42, 520], [0.42, 0.78, 300], [0.78, 1.02, 150], [1.02, 1.18, 60]]; let y = 640, sq = 0; const x0 = 960, x1 = BALL_REST[0];
    for (const [a, b, hgt] of drops) if (u >= a && u < b) { const k = (u - a) / (b - a); y = 640 - hgt * (a === 0 ? (1 - k * k) : 4 * k * (1 - k)); if (k < 0.08 && a > 0) sq = 0.5 * (1 - k / 0.08); }
    if (u >= 1.18) y = 640; const x = lerp(x0, x1, MG.ease.outCubic(clamp((u - 0.3) / 1.6))); if (u >= 0.42 && u < 0.47) sq = 0.6 * (1 - (u - 0.42) / 0.05); return { x, y, sq, rot: (x - x0) / 70 }; };
  const KM0 = { id: 's10_km0', start: 1618.9, end: 1623.6, transIn: (() => { const v = LAT_V(1618.9); const p = MG.geo.proj('natural', { center: v.center, scale: v.scale })(MAD); return { type: 'zoom', dur: 0.6, x: p[0], y: p[1], amount: 2.2, from: 0.8 }; })(),
    init() { S10.km0(); },
    draw(ctx, t) {
      const z = lerp(1.08, 1.0, MG.ease.out(clamp((t - 1618.9) / 1.4))); const hh = MG.cam.handheld(t, 2, 44);
      ctx.save(); ctx.translate(960 + hh.dx, 540 + hh.dy); ctx.scale(z, z); ctx.translate(-1040, -600); ctx.drawImage(S10.km0(), 0, 0); ctx.restore();
      // the last of the half-billion lights settle into the plaque
      const tL = wt('like', 1620.56); for (let i = 0; i < 60; i++) { const u = clamp((t - 1618.9 - MG.rand(4, i) * 1.4) / 1.2); if (u >= 1 || u <= 0) continue; const a = MG.rand(5, i) * TAU; const R = (1 - MG.ease.inCubic(u)) * 1100; ctx.globalAlpha = 0.9; ctx.drawImage(glow('#ffcf8a', 10), 960 + Math.cos(a) * R - 10, 548 + Math.sin(a) * R * 0.6 - 10); ctx.globalAlpha = 1; }
      lightPool(ctx, 960, 560, 700, '#ffcf8a', 0.32, 0.72);
      // Plus soccer: the warm pool receives a ball (sun → football)
      const b = S10.ballPos(t); if (b) { const hgt = 640 - b.y; MG.fx.contact(ctx, b.x + 10, 640 + 64, 80 * (1 - hgt / 1400), 18 * (1 - hgt / 1400), 0.5 * (1 - hgt / 900)); S10.ball(ctx, b.x, b.y, 66, b.rot, b.sq); }
      TX.big(ctx, 'like home.', 960, 220, t, tL - 0.1, { font: MG.F.serif, italic: true, weight: 400, size: 110, color: C.cal, align: 'center', shadow: SH(0.8, 20, 6), out: { at: BALL_T - 0.1, style: 'blur', dur: 0.4 } });
      TX.kick(ctx, 'in some small way', 960, 120, t, wt('small', 1619.52) - 0.1, { size: 22, color: C.amber, align: 'center', out: { at: BALL_T - 0.1, dur: 0.3 } });
      TX.big(ctx, 'REAL MADRID', 960, 230, t, wt('real', 1622.64) - 0.05, { font: MG.F.grotesk, weight: 800, size: 130, color: '#ffffff', align: 'center', tracking: 0.06, shadow: SH(0.8, 24, 8), by: 'char', stagger: 0.025 });
      TX.kick(ctx, 'Plus football', 960, 120, t, BALL_T + 0.1, { size: 22, color: C.amber, align: 'center' });
    },
    post: { grade: 'warm', grain: 0.045, vignette: 0.5 } };

  // ================================================================== 28 FIFTEEN EUROPEAN CUPS · 3D (1623.60–1627.74)
  const CUP_YEARS = [1956, 1957, 1958, 1959, 1960, 1966, 1998, 2000, 2002, 2014, 2016, 2017, 2018, 2022, 2024];
  const CUP_T = (i) => lerp(1624.05, wt('fifteen', 1625.92), i / 14);
  const CUPS = { id: 's10_cups', start: 1623.6, end: 1627.74, transIn: TR.circle(BALL_REST[0], BALL_REST[1], 66, 0.7, 'rgba(255,255,255,0.8)'),
    init() {
      const T = THREE; const sc = new T.Scene(); this.sc = sc; sc.environment = MG.three.env();
      this.cam = new T.PerspectiveCamera(30, 16 / 9, 0.05, 100);
      // the big-eared cup: lathe body + two loop handles
      const prof = [[0.0, 0], [0.34, 0], [0.34, 0.06], [0.26, 0.1], [0.2, 0.16], [0.14, 0.26], [0.11, 0.42], [0.12, 0.52], [0.18, 0.6], [0.3, 0.72], [0.38, 0.86], [0.42, 1.02], [0.43, 1.1], [0.4, 1.1], [0.39, 1.02], [0.35, 0.88], [0.0, 0.88]].map(([r, y]) => new T.Vector2(r, y));
      const body = new T.LatheGeometry(prof, 56);
      const ear = new T.TubeGeometry(new T.CatmullRomCurve3([new T.Vector3(0.38, 1.0, 0), new T.Vector3(0.72, 1.12, 0), new T.Vector3(0.86, 0.82, 0), new T.Vector3(0.62, 0.42, 0), new T.Vector3(0.22, 0.3, 0)]), 48, 0.035, 8, false);
      const silver = new T.MeshStandardMaterial({ color: 0xe4e8ee, metalness: 1, roughness: 0.16, envMapIntensity: 1.2 });
      const plinthM = new T.MeshStandardMaterial({ color: 0x15161a, roughness: 0.4, metalness: 0.2 });
      this.cups = []; this.pools = [];
      const poolC = MG.canvas(256, 256); { const x = poolC.getContext('2d'); const g = x.createRadialGradient(128, 128, 0, 128, 128, 128); g.addColorStop(0, 'rgba(255,240,215,0.9)'); g.addColorStop(0.5, 'rgba(255,230,190,0.35)'); g.addColorStop(1, 'rgba(255,230,190,0)'); x.fillStyle = g; x.fillRect(0, 0, 256, 256); }
      const poolT = new T.CanvasTexture(poolC);
      const floor = new T.Mesh(new T.PlaneGeometry(60, 30), new T.MeshStandardMaterial({ color: 0x0c0c10, roughness: 0.35, metalness: 0.3 })); floor.rotation.x = -Math.PI / 2; sc.add(floor);
      CUP_YEARS.forEach((yr, i) => {
        const g = new T.Group(); const px = i * 1.5, pz = -i * 0.55; g.position.set(px, 0, pz); sc.add(g);
        const lab = MG.canvas(512, 256); { const x = lab.getContext('2d'); x.fillStyle = '#15161a'; x.fillRect(0, 0, 512, 256); MG.text.draw(x, String(yr), 256, 170, { font: MG.F.cond, weight: 800, size: 140, color: '#c9a04a', align: 'center' }); }
        const pl = new T.Mesh(new T.BoxGeometry(0.9, 0.7, 0.9), [plinthM, plinthM, plinthM, plinthM, new T.MeshStandardMaterial({ map: MG.three.canvasTexture(lab), roughness: 0.5 }), plinthM]); pl.position.y = 0.35; g.add(pl);
        const cup = new T.Group(); cup.position.y = 0.7; cup.add(new T.Mesh(body, silver)); const e1 = new T.Mesh(ear, silver); cup.add(e1); const e2 = new T.Mesh(ear, silver); e2.rotation.y = Math.PI; cup.add(e2); cup.scale.setScalar(0.95); cup.rotation.y = 0.5; g.add(cup);
        const pool = new T.Mesh(new T.PlaneGeometry(2.6, 2.6), new T.MeshBasicMaterial({ map: poolT, transparent: true, blending: T.AdditiveBlending, depthWrite: false, opacity: 0 })); pool.rotation.x = -Math.PI / 2; pool.position.set(px, 0.01, pz); sc.add(pool);
        const beam = new T.Mesh(new T.ConeGeometry(0.75, 5, 24, 1, true), new T.MeshBasicMaterial({ color: 0xffe8c0, transparent: true, opacity: 0, blending: T.AdditiveBlending, depthWrite: false, side: T.DoubleSide })); beam.position.set(px, 2.6, pz); sc.add(beam);
        this.cups.push(cup); this.pools.push([pool, beam]);
      });
      this.key = new T.SpotLight(0xfff0dc, 0, 30, 0.5, 0.6, 1); sc.add(this.key); sc.add(this.key.target);
      const amb = new T.AmbientLight(0x303040, 0.5); sc.add(amb); this.dir = new T.DirectionalLight(0xffe8d0, 1.6); this.dir.position.set(-4, 8, 6); sc.add(this.dir);
    },
    draw(ctx, t) {
      const T = THREE; let lit = 0;
      this.pools.forEach(([pool, beam], i) => { const k = clamp((t - CUP_T(i)) / 0.12); if (k > 0) lit = i + 1; pool.material.opacity = 0.9 * k; beam.material.opacity = 0.07 * k; this.cups[i].rotation.y = 0.5 + Math.sin(t * 0.6 + i) * 0.04; });
      this.dir.intensity = 0.2 + 1.6 * clamp((t - 1624.0) / 1.4);
      const u = clamp((t - 1623.6) / 4.14); const e = MG.ease.inOutSine(u);
      this.cam.position.set(lerp(-1.3, 7.5, e), lerp(1.05, 3.3, e), lerp(2.4, 9.4, e)); this.cam.lookAt(lerp(0.3, 10.5, e), lerp(1.1, 0.8, e), lerp(-0.1, -3.9, e));
      const g = ctx.createRadialGradient(960, 300, 100, 960, 540, 1200); g.addColorStop(0, '#1c1a20'); g.addColorStop(1, '#050507'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      const c = MG.three.render(this.sc, this.cam, { slot: 2, w: 1280, h: 720, clearAlpha: 0, exposure: 1.15 }); ctx.drawImage(c, 0, 0, W, H);
      MG.fx.particles(ctx, { n: 40, seed: 15, t, area: [0, 0, W, H], vel: [4, -8], life: 8, size: [0.8, 2], color: '#fff0d8', alpha: 0.25, drift: 20 });
      // count
      const tF = wt('fifteen', 1625.92);
      TX.kick(ctx, 'Most decorated club in history', 150, 140, t, wt('decorated', 1624.0) - 0.2, { size: 22, color: '#c9a04a' });
      if (lit > 0) { TX.draw(ctx, String(lit), 1760, 860, { size: 260, color: '#ffffff', align: 'right', shadow: SH(0.8, 30, 10) }); }
      TX.kick(ctx, 'European Cups', 1760, 940, t, tF - 0.2, { size: 26, color: '#c9a04a', align: 'right' });
    },
    post: { grade: 'neutral', grain: 0.045, vignette: 0.55, contrast: 1.06, bloom: 0.15, bloomThreshold: 0.8 } };

  // ================================================================== 29 EL CLÁSICO (1627.74–1629.78)
  S10.pitch = () => MG.cache('s10:pitch', 2000, 1300, (x, w, h) => {
    for (let i = 0; i < 20; i++) { x.fillStyle = i % 2 ? '#2f6a35' : '#367640'; x.fillRect(i * 100, 0, 100, h); }
    MG.tex.over(x, 'blotch', { alpha: 0.25, color: '#0a2010', scale: 4 }); MG.tex.over(x, 'grain', { alpha: 0.2 });
    x.strokeStyle = 'rgba(255,255,255,0.85)'; x.lineWidth = 6; x.strokeRect(60, 60, w - 120, h - 120); x.beginPath(); x.moveTo(w / 2, 60); x.lineTo(w / 2, h - 60); x.stroke(); x.beginPath(); x.arc(w / 2, h / 2, 170, 0, TAU); x.stroke(); x.fillStyle = '#fff'; x.beginPath(); x.arc(w / 2, h / 2, 9, 0, TAU); x.fill();
    x.strokeRect(60, h / 2 - 300, 260, 600); x.strokeRect(w - 320, h / 2 - 300, 260, 600);
    // the two names painted on the grass
    MG.text.draw(x, 'MADRID', w * 0.27, h / 2 + 70, { font: MG.F.grotesk, weight: 800, size: 200, color: 'rgba(255,255,255,0.88)', align: 'center', tracking: 0.04 });
    MG.text.draw(x, 'BARCELONA', w * 0.74, h / 2 + 60, { font: MG.F.grotesk, weight: 800, size: 140, color: 'rgba(255,255,255,0.88)', align: 'center', tracking: 0.04 });
  });
  const CLASICO = { id: 's10_clasico', start: 1627.74, end: 1629.78, transIn: { type: 'flash', dur: 0.4, color: '#ffffff', x: 960, y: 300 },
    init() { S10.pitch(); },
    draw(ctx, t) {
      const u = clamp((t - 1627.74) / 2.3); const a = lerp(0.95, 0.15, MG.ease.inOutSine(u)); const sc = lerp(1.15, 0.72, MG.ease.inOutSine(u));
      ctx.fillStyle = '#05070a'; ctx.fillRect(0, 0, W, H);
      const sheet = MG.scratch(3); const s = sheet.getContext('2d'); MG.reset(s); s.drawImage(S10.pitch(), 0, 0, 2000, 1300, 0, 0, W, H);
      const split = prog(t, wt('barcelona', 1628.72) - 0.2, wt('barcelona', 1628.72) + 0.4);
      s.save(); s.globalCompositeOperation = 'multiply'; s.fillStyle = '#f2f0ea'; s.fillRect(0, 0, W / 2, H); const bg = s.createLinearGradient(W / 2, 0, W, 0); bg.addColorStop(0, MG.col.mix('#ffffff', '#3a4ca8', split)); bg.addColorStop(1, MG.col.mix('#ffffff', '#a8203a', split)); s.fillStyle = bg; s.fillRect(W / 2, 0, W / 2, H); s.restore();
      S10.tiltQuad(ctx, sheet, a, { D: 1500, scale: sc, div: 10 });
      const bp = S10.tiltPt(0, 0, a, { D: 1500 }); S10.ball(ctx, bp[0], bp[1] - 28 * bp[2] * sc, 26 * bp[2] * sc / 0.72, t * 0.5);
      ctx.save(); ctx.globalCompositeOperation = 'screen'; for (const [lx, col] of [[300, 'rgba(255,255,255,0.18)'], [1620, 'rgba(180,60,90,0.18)']]) { const g = ctx.createRadialGradient(lx, 0, 0, lx, 0, 900); g.addColorStop(0, col); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); } ctx.restore();
      TX.kick(ctx, 'El Clásico', 960, 110, t, 1627.8, { size: 26, color: '#ffffff', align: 'center' });
    },
    post: { grade: 'vivid', grain: 0.04, vignette: 0.45 } };

  // ================================================================== 30–31 THE WORLD WATCHES → THE SECRET → DAWN (1629.78–1638.53 +1.3)
  const EMPIRE = LATAM.slice(0, 19).map((r) => r[0]);
  const WLD_V = (t) => MG.geo.view(t, [[1629.78, { center: [-3.7, 40.4], scale: 5200 }], [1630.7, { center: [-12, 33], scale: 470 }, 'cam'], [1632.45, { center: [-28, 26], scale: 430 }, 'soft'], [1635.0, { center: [-36, 22], scale: 440 }, 'soft'], [1639.9, { center: [-20, 30], scale: 470 }, 'soft']]);
  S10.watchOrder = () => { if (S10._wo) return S10._wo; MG.geo.init(); const fs = MG.geo.world50.features.filter((f) => !/Antarc/.test(f.properties.name)).map((f) => ({ f, d: window.d3.geoDistance(window.d3.geoCentroid(f), [-3.7, 40.4]) })); fs.sort((a, b) => a.d - b.d); S10._wo = fs.slice(0, 200); return S10._wo; };
  const WORLD = (id, a, b, tr) => ({ id, start: a, end: b, transIn: tr,
    init() { S10.watchOrder(); },
    draw(ctx, t) {
      MG.geo.init(); const v = WLD_V(t); const pr = MG.geo.proj('ortho', { center: v.center, scale: v.scale, translate: [960, 540] }); const R = v.scale;
      const tWat = wt('watch', 1630.0), tSec = wt('secret', 1633.36), tLost = wt('lost', 1635.0), tLiv = wt('living', 1636.32), tBet = wt('better', 1636.72);
      // dawn: the sun rises behind the limb (upper right) and its light sweeps over Spain
      const dawn = MG.ease.inOutSine(clamp((t - (tLost + 0.6)) / 3.0));
      ctx.drawImage(S10.stars(), 0, 0);
      const sunA = MG.deg(-38); const sR = R * lerp(1.32, 1.02, dawn); const sx = 960 + Math.cos(sunA) * sR, sy = 540 + Math.sin(sunA) * sR;
      if (dawn > 0.001) { ctx.save(); ctx.globalAlpha = dawn; MG.fx.glow(ctx, sx, sy, 900 * dawn, '#ffc070', 0.6); MG.kit.sun(ctx, sx, sy, 90, t, { rays: 0.6 * dawn, corona: 0.9 }); ctx.restore(); }
      const g = ctx.createRadialGradient(960, 540, R * 0.95, 960, 540, R * 1.25); g.addColorStop(0, MG.col.a(MG.col.mix('#6aa0dc', '#ffb070', dawn), 0.4)); g.addColorStop(1, 'rgba(110,160,220,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(960, 540, R * 1.3, 0, TAU); ctx.fill();
      MG.geo.sphere(ctx, pr, { fill: '#0b1a2e' }); ctx.save(); MG.geo.clip(ctx, pr, { type: 'Sphere' });
      const L3 = [lerp(-0.5, 2.6, dawn), lerp(0.6, 2.2, dawn), lerp(-2.5, 2.2, dawn)]; const tex = MG.geo.sphereTex('bluemarble', pr, { light3: L3, sunIntensity: lerp(0.5, 2.6, dawn), ambient: lerp(0.32, 0.55, dawn) }); ctx.save(); ctx.globalAlpha = lerp(0.85, 1, dawn); ctx.drawImage(tex, 0, 0); ctx.restore();
      ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = MG.col.mix('#26385a', '#ffffff', dawn * 0.75); ctx.fillRect(0, 0, W, H); ctx.restore();
      MG.geo.draw(ctx, pr, MG.geo.borders50, { stroke: 'rgba(169,198,222,0.18)', width: 0.7 });
      // 200 countries light up like TV screens (wave out from Madrid)
      const WO = S10.watchOrder(); const fadeL = 1 - prog(t, tSec - 0.6, tSec + 0.4); let n = 0;
      if (fadeL > 0) WO.forEach((o, i) => { const k = clamp((t - tWat + 0.3 - i * 0.0085) / 0.25); if (k <= 0) return; n++; const fl = 0.85 + 0.15 * Math.sin(t * 9 + i * 1.7); MG.geo.draw(ctx, pr, o.f, { fill: MG.col.a('#ffc070', 0.55 * k * fl * fadeL), stroke: MG.col.a('#ffe0a0', 0.6 * k * fadeL), width: 0.8 }); });
      // the lost empire glows silver and fades ("a country that lost everything")
      const ek = win(t, tLost - 0.6, tLiv - 0.2, 0.5, 0.8); if (ek > 0) for (const nm of EMPIRE) MG.geo.draw(ctx, pr, MG.geo.country(nm, '50'), { fill: MG.col.a('#d8dde6', 0.45 * ek), stroke: MG.col.a('#ffffff', 0.5 * ek), width: 1 });
      const es = MG.geo.country('Spain', '50'); MG.geo.draw(ctx, pr, es, { fill: MG.col.mix('#d68a30', '#ffcf6a', dawn), stroke: 'rgba(255,240,200,0.8)', width: 1.2 });
      const sp = pr([-3.7, 40.2]); if (sp) MG.fx.glow(ctx, sp[0], sp[1], 120 + 140 * dawn, '#ffd080', 0.25 + 0.35 * dawn);
      const lg = ctx.createRadialGradient(960 + R * 0.35, 540 - R * 0.35, R * 0.1, 960, 540, R * 1.05); lg.addColorStop(0, MG.col.a('#fff0d0', 0.18 * dawn)); lg.addColorStop(0.6, 'rgba(0,0,0,0)'); lg.addColorStop(1, `rgba(0,4,16,${0.65 - 0.3 * dawn})`); ctx.fillStyle = lg; ctx.fillRect(960 - R, 540 - R, R * 2, R * 2);
      ctx.restore();
      ctx.save(); ctx.strokeStyle = MG.col.a(MG.col.mix('#a0c8f0', '#ffd090', dawn), 0.5); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(960, 540, R, 0, TAU); ctx.stroke(); ctx.restore();
      // read-outs
      const cn = Math.min(200, Math.round(n)); const wk = prog(t, tWat - 0.2, tWat + 0.2) * fadeL;
      if (wk > 0) { ctx.save(); ctx.globalAlpha = wk; TX.draw(ctx, String(cn), 1780, 600, { size: 220, color: '#ffe0a8', align: 'right', shadow: SH(0.8, 30, 10) }); ctx.restore(); TX.kick(ctx, 'countries watch', 1780, 660, t, tWat, { size: 26, color: C.cal, align: 'right', out: { at: tSec - 0.6, dur: 0.4 } }); TX.kick(ctx, 'Real Madrid × Barcelona', 1780, 380, t, tWat - 0.2, { size: 20, color: 'rgba(250,244,232,0.7)', align: 'right', out: { at: tSec - 0.6, dur: 0.4 } }); }
      TX.lead(ctx, 'So what’s the', 150, 190, t, wt('so', 1632.48) - 0.05, { size: 60, color: C.cal, out: { at: tLost - 0.3, dur: 0.4 } });
      TX.big(ctx, 'secret?', 146, 320, t, tSec - 0.15, { size: 140, italic: true, color: '#ffe0a8', shadow: SH(0.8, 30, 10), out: { at: tLost - 0.3, style: 'blur', dur: 0.5 } });
      TX.lead(ctx, 'a country that lost', 150, 200, t, wt('country', 1634.32) - 0.05, { size: 58, color: 'rgba(250,244,232,0.85)', out: { at: tLiv - 0.2, style: 'drop', dur: 0.6 } });
      TX.big(ctx, 'everything', 146, 320, t, wt('everything', 1635.28) - 0.05, { size: 120, color: '#cfd6e2', out: { at: tLiv - 0.2, style: 'drop', dur: 0.7 } });
      TX.lead(ctx, 'living', 150, 200, t, tLiv - 0.05, { size: 60, color: C.cal });
      TX.big(ctx, 'better?', 146, 330, t, tBet - 0.05, { size: 150, color: '#ffd27a', shadow: SH(0.6, 30, 10) });
      TX.kick(ctx, 'than so many others', 152, 392, t, wt('many', 1637.56) - 0.3, { size: 22, color: C.cal });
    },
    post: (t) => ({ grade: t > 1635.5 ? 'golden' : 'night', grain: 0.045, vignette: 0.45, bloom: 0.12 * clamp((t - 1635.5) / 2), bloomThreshold: 0.78 }) });
  const WORLD1 = WORLD('s10_world', 1629.78, 1632.45, TR.pullOut(0, 0, 0.01)), SECRET = WORLD('s10_secret', 1632.45, 1634.95, null), QUESTION = WORLD('s10_question', 1634.95, T1, null);
  // crane up from the pitch: the stadium shrinks to a point of light on Spain
  WORLD1.transIn = (() => { const v = WLD_V(1629.78); const p = MG.geo.proj('ortho', { center: v.center, scale: v.scale, translate: [960, 540] })([-3.7, 40.4]); return TR.pullOut(p[0], p[1], 0.9, 4); })();

  // ================================================================== AUDIO — score & sound design (all quiet, under the VO)
  S10.audio = (A) => {
    const sfx = A.sfx;
    // ---- A · MEMORY: lament in D minor (strings, cello, sparse piano), thinning out for the graves
    A.music('lament', T0, 1546.5, { key: 'D3', bpm: 60, fadeIn: 1.6, fadeOut: 2.4, intensity: [[T0, 0.45], [1514, 0.62], [1524, 0.72], [1528.6, 0.55], [1531, 0.38], [1537.5, 0.32], [1540, 0.5], [1545, 0.42]], gain: 0.95 });
    A.drone(T0, 6, ['D2', 'A2'], { vel: 0.35, attack: 1.2, release: 3 });
    A.piano(wt('memory', 1511.33), 'D4', { vel: 0.35 }); A.piano(wt('memory', 1511.33) + 0.02, 'A3', { vel: 0.28 });
    // sinking through the strata: low rumble + one tick per decade
    sfx.downlifter(T0 + 0.1, { dur: 1.6, gain: 0.5 }); sfx.sub(T0 + 0.3, { gain: 0.35 }); sfx.amb('room', T0, 5.0, { gain: 0.8 });
    for (let k = 0; k < 5; k++) sfx.tick(lerp(1512.75, 1514.05, k / 4), { gain: 0.45, pan: -0.3 });
    sfx.thud(wte('ago', 1514.21) - 0.05, { gain: 0.35 }); A.mallet(wte('ago', 1514.21), 'A6', { kind: 'glock', vel: 0.18, bus: 'sfx' });
    // the spinning coin (Euler's disk: accelerating chatter, then the clatter)
    { let tt = COIN_T0 + 0.1, dt = 0.16; while (tt < COIN_FALL + 0.4) { A.drum(tt, 'tick', { vel: 0.12 + 0.12 * clamp((tt - COIN_T0) / 2.6), bus: 'sfx', pan: Math.sin(tt * 7) * 0.2, rate: 1.4 }); dt = Math.max(0.028, dt * 0.93); tt += dt; } A.mallet(COIN_FALL + 0.42, 'E7', { kind: 'glock', vel: 0.16, bus: 'sfx' }); }
    sfx.whoosh(COIN_END + 0.2, { dur: 0.8, gain: 0.35 }); sfx.click(wt('2019', 1518.45), { gain: 0.5 });
    // monument: mountain wind, faint picks, a deep swell under "500 feet"
    sfx.whoosh(1521.3, { dur: 0.9, gain: 0.4, pitch: 0.7 }); sfx.amb('wind', 1521.0, 8.0, { gain: 0.65 });
    for (const k of [0, 0.55, 1.1, 1.6, 2.2]) A.drum(1522.4 + k, 'woodblock', { p: 380 + k * 40, vel: 0.12, bus: 'sfx', verb: 0.5, pan: -0.4 });
    sfx.riser(wt('500', 1526.45), { dur: 1.6, gain: 0.35, tone: false }); sfx.sub(wt('500', 1526.45), { gain: 0.55 }); A.cello(wt('500', 1526.45), 3.5, ['D2'], { vel: 0.4, attack: 0.3 });
    // tomb slab: stone drag + settle
    sfx.slide(wt('removed', 1529.49) + 0.1, { dur: 0.9, gain: 1.0 }); sfx.thud(wt('removed', 1529.49) + 0.95, { gain: 0.35 }); sfx.amb('room', 1528.6, 2.2, { gain: 0.9 });
    // excavation: trowels & brushes, distant birds (sober)
    for (const k of [0.4, 1.1, 1.7, 2.3, 2.9]) sfx.paper(1530.8 + k, { dur: 0.3, gain: 0.45, pan: (k % 1) - 0.5 }); sfx.birds(1530.9, 3.4, { gain: 0.35, seed: 5 }); sfx.amb('wind', 1530.7, 4.0, { gain: 0.35 });
    // map of graves: soft pull-out, sparse ticks while the lights spread
    sfx.whoosh(1534.9, { dur: 1.0, gain: 0.3, pitch: 0.8 }); for (let k = 0; k < 9; k++) sfx.tick(lerp(1535.3, 1537.9, k / 8), { gain: 0.22, pan: Math.sin(k) * 0.5 });
    A.bell(wt('2,000', 1537.97), 'D5', { vel: 0.12 });
    // the cloth tug
    sfx.swish(1539.75, { dur: 0.6, gain: 0.7 }); sfx.swish(wt('wants', 1540.09) + 0.4, { dur: 0.7, gain: 0.8, pan: -0.5 }); sfx.swish(wt('right', 1542.41) + 0.3, { dur: 0.7, gain: 0.8, pan: 0.5 }); sfx.whoosh(1544.8, { dur: 0.8, gain: 0.3 });
    // parliament: tension pulse; one pop when the 3rd bloc lifts
    A.music('tension', 1543.6, 1551.6, { key: 'D3', bpm: 96, fadeIn: 1.5, fadeOut: 1.4, intensity: [[1543.6, 0.35], [1547, 0.5], [1550.5, 0.45]], gain: 0.85 });
    sfx.pop(wt('third-largest', 1546.73), { gain: 0.6, freq: 420 }); sfx.slide(wt('may', 1548.93), { dur: 0.5, gain: 0.6 });
    // ---- B · GEOPOLITICS: ambient night (harp, pad, celesta) — one long continuous shot
    sfx.whoosh(1551.25, { dur: 0.7, gain: 0.75, dir: -1 }); sfx.amb('space', 1551.0, 10.5, { gain: 0.6 });
    A.music('ambient', 1550.8, 1588.0, { key: 'D3', scale: 'dorian', bpm: 72, fadeIn: 1.6, fadeOut: 2.5, intensity: [[1550.8, 0.5], [1556, 0.62], [1561, 0.66], [1567.6, 0.5], [1572, 0.55], [1580, 0.5], [1584, 0.4], [1586, 0.2]], gain: 0.85 });
    A.harp(wt('quiet', 1554.89), 'A5', { vel: 0.3 }); A.harp(wt('quiet', 1554.89) + 0.5, 'D6', { vel: 0.22 });
    sfx.blip(wt('nato', 1556.49), { gain: 0.45, note: 'A5' }); sfx.blip(wt('european', 1557.21), { gain: 0.45, note: 'D6' });
    sfx.swish(wt('war', 1560.33) + 0.2, { dur: 0.25, gain: 0.5 });
    sfx.whoosh(1562.3, { dur: 0.8, gain: 0.35, pitch: 0.8 }); sfx.whoosh(1563.4, { dur: 1.0, gain: 0.45, pitch: 1.2 });
    sfx.pop(Math.max(wt('ceuta', 1563.13), 1563.6), { gain: 0.5 }); sfx.pop(Math.max(wt('melilla', 1563.85), 1563.9), { gain: 0.5, freq: 620 });
    // the fence at night: wind, floodlight hum, distant wire rattle
    sfx.whoosh(1567.7, { dur: 0.8, gain: 0.45 }); sfx.amb('wind', 1567.6, 4.8, { gain: 0.8 }); sfx.amb('hum', 1567.6, 4.8, { gain: 0.9 });
    for (const k of [0.6, 1.3, 2.1, 2.8, 3.6]) A.drum(1567.6 + k, 'shaker', { vel: 0.14, bus: 'sfx', pan: Math.sin(k * 3) * 0.6, verb: 0.3 });
    // the Atlantic: sea bed from the searchlight to the door
    sfx.whoosh(1572.4, { dur: 0.9, gain: 0.35, pitch: 0.6 }); sfx.amb('sea', 1572.2, 22.0, { gain: 0.8, fade: 2 });
    sfx.whoosh(1578.85, { dur: 0.9, gain: 0.3, pitch: 0.7 }); sfx.creak(1579.5, { gain: 0.6 }); sfx.creak(1580.9, { gain: 0.45, dur: 1.1 });
    for (let k = 0; k < 7; k++) sfx.tick(lerp(1583.4, 1584.4, k / 6), { gain: 0.2 }); A.bell(wt('record', 1585.57), 'A5', { vel: 0.12 });
    // deaths: near-silence — a dark drone and the sea, nothing else
    sfx.downlifter(1586.3, { dur: 2.2, gain: 0.35 });
    A.music('dread', 1585.8, 1595.0, { key: 'D2', intensity: 0.35, fadeIn: 2.0, fadeOut: 2.5, gain: 0.55 });
    // the door: slow creak, coins along the arc, a heavy (not slammed) close
    A.music('tension', 1593.6, 1600.6, { key: 'D3', bpm: 84, fadeIn: 1.8, fadeOut: 1.0, intensity: [[1593.6, 0.25], [1597, 0.42], [1600, 0.3]], gain: 0.8 });
    sfx.creak(wt('pays', 1596.32) + 0.8, { dur: 1.6, gain: 0.7 }); sfx.creak(1598.3, { dur: 1.2, gain: 0.55 }); sfx.coins(wt('pays', 1596.32) + 0.2, { n: 8, spread: 1.8, gain: 0.55 }); sfx.thud(wt('closed', 1599.04) + 0.35, { gain: 0.45 });
    // ---- C · GIBRALTAR: sneaky pizzicato, gulls, the macaque's snatch
    sfx.whoosh(1600.0, { dur: 0.7, gain: 0.5 }); A.music('sneaky', 1599.7, 1607.9, { key: 'D3', bpm: 118, fadeIn: 0.6, fadeOut: 1.2, intensity: 0.7, gain: 0.9 });
    sfx.birds(1600.2, 7.0, { gain: 0.55, seed: 9 }); sfx.amb('sea', 1599.9, 7.4, { gain: 0.45 });
    sfx.swish(wt('dispute', 1602.04), { gain: 0.5 }); sfx.pop(1603.6, { gain: 0.45, freq: 700 }); sfx.paper(wt('1713', 1604.72) - 0.3, { dur: 0.5, gain: 0.7 });
    sfx.swish(wt('never', 1606.2) + 0.05, { dur: 0.22, gain: 0.8 }); sfx.paper(wt('never', 1606.2) + 0.3, { dur: 0.3, gain: 0.6 }); A.pizz(wt('returned', 1606.8) + 0.3, 'D4', { vel: 0.6 }); A.pizz(wt('returned', 1606.8) + 0.45, 'A3', { vel: 0.6 });
    // ---- D · LATIN AMERICA: warm piano/pad + a Spanish-guitar motif
    sfx.whoosh(1607.5, { dur: 0.6, gain: 0.6, dir: 1 }); A.music('warm', 1607.2, 1622.2, { key: 'D3', bpm: 84, fadeIn: 1.0, fadeOut: 1.0, intensity: [[1607.2, 0.55], [1613, 0.68], [1618.8, 0.6], [1621.4, 0.4]], gain: 0.9 });
    { const mot = ['D4', 'F#4', 'A4', 'D5', 'C#5', 'A4', 'B4', 'F#4']; mot.forEach((n, i) => A.guitar(1608.6 + i * 0.36, n, { vel: 0.4, pan: 0.2 })); ['E4', 'G4', 'B4', 'E5', 'D5', 'B4', 'A4', 'D4'].forEach((n, i) => A.guitar(1614.4 + i * 0.36, n, { vel: 0.36, pan: -0.2 })); }
    for (let i = 0; i < 20; i++) sfx.tick(wt('twenty', 1610.98) + i * 0.065, { gain: 0.16, pan: -0.6 + i * 0.06 });
    for (const k of [0, 0.6, 1.2]) sfx.paper(1613.9 + k, { dur: 0.3, gain: 0.4 }); sfx.swell(1618.6, { dur: 2.0, gain: 0.6 });
    sfx.whoosh(1619.05, { dur: 0.7, gain: 0.45 }); A.bell(1619.5, 'D4', { vel: 0.22 }); A.bell(1620.7, 'A3', { vel: 0.18 }); sfx.amb('city', 1618.9, 4.8, { gain: 0.6 });
    // ---- E · FOOTBALL: bounces, stadium, the cups lighting one by one, El Clásico
    { const b = [0, 0.42, 0.78, 1.02, 1.18]; b.forEach((d, i) => sfx.thud(BALL_T + d, { gain: [0.7, 0.55, 0.4, 0.28, 0.18][i] })); }
    A.music('triumph', 1621.4, 1632.9, { key: 'D3', bpm: 120, fadeIn: 0.8, fadeOut: 1.0, intensity: [[1621.4, 0.5], [1624, 0.62], [1626, 0.78], [1630, 0.72], [1632.4, 0.35]], gain: 0.9 });
    sfx.amb('crowd', 1622.6, 10.0, { gain: 0.55, cheer: wt('fifteen', 1625.92) + 0.1, fade: 1.2 });
    sfx.click(1623.65, { gain: 0.7 }); for (let i = 0; i < 15; i++) A.drum(CUP_T(i), 'rim', { vel: 0.16 + i * 0.01, bus: 'sfx', pan: -0.5 + i / 14, verb: 0.2 });
    A.drum(wt('fifteen', 1625.92) + 0.02, 'crash', { vel: 0.16 }); A.bell(wt('fifteen', 1625.92), 'D6', { vel: 0.14 });
    sfx.whistleRef(wt('real', 1628.08) - 0.1, { gain: 0.45 }); sfx.whoosh(1629.95, { dur: 1.0, gain: 0.45, dir: -1 }); sfx.swell(wt('watch', 1630.0) + 0.6, { dur: 1.4, gain: 0.55 });
    // ---- the question: mystery music-box, then a riser into S11's light
    A.music('mystery', 1632.2, 1640.0, { key: 'D3', bpm: 100, fadeIn: 0.8, fadeOut: 1.6, intensity: [[1632.2, 0.5], [1636, 0.62], [1639, 0.5]], gain: 0.85 });
    A.glass(wt('lost', 1635.0), 3.0, ['D5', 'A5'], { vel: 0.3 }); sfx.riser(T1 + 0.15, { dur: 2.6, gain: 0.5 }); A.strings(1636.3, 3.6, ['D3', 'A3', 'F#4', 'D5'], { vel: 0.35, attack: 1.4, release: 1.6 });
  };

  // ------------------------------------------------------------------ registration
  const STUB = Q.get('s10stub') ? [{ id: 's10_stub', start: 1500, end: T0, draw(ctx, t) { MG.kit.paper(ctx, P.paper); MG.kit.sun(ctx, 1400, 360, 120, t, { rays: 0.5 }); MG.text.draw(ctx, 'S09 · Madrid', 200, 600, { font: MG.F.display, weight: 800, size: 140, color: P.ink }); ctx.fillStyle = P.pp; ctx.fillRect(200, 700, 900, 40); ctx.fillStyle = P.psoe; ctx.fillRect(200, 760, 700, 40); } }] : [];
  const SCENES = [...STUB, STRATA, COIN, LOCATE, MONUMENT, SLAB, DIG, GRAVES, CLOTH, HEMI, ...GEO, FENCE, CANARY, CAYUCO, RECORD, DEADLY, DOOR, GIBMAP, ROCK, LATAM1, LATAM2, KM0, CUPS, CLASICO, WORLD1, SECRET, QUESTION];
  MG.segment('S10', { start: T0, end: T1, scenes: SCENES, audio: S10.audio });
})();
