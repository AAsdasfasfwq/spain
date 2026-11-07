/* =====================================================================
   S05 · 681.58 → 858.37 · "A NEW DAWN → THE ECONOMY → TOURISM → FASHION"
   Author: S05 designer. Chapter states europe → economy → summer → fashion.

   VISUAL PLAN (script → blocks → scenes → beats). Client rule: NO slide-like cards,
   every date lives inside the world, every transition is motivated (object / camera / light).

   A · THE TRANSITION (hopeful)
    01 dawn        681.58  S04's dim frame is washed by a real sunrise (custom light-bleed from the sun
                           on the horizon). Layered paper Meseta, the night shadow retreats across the plain.
                           "very few countries · have managed" set in the sky.
    02 chosen      686.40  camera tilts down from the dawn sky into a palace room: Juan Carlos (caricature,
                           army uniform) in window light; Franco's portrait half in shade behind him;
                           rack-focus to the portrait on "Franco", a gold thread → "SUCCESSOR". Name tag.
    03 turn        691.10  cut on action: the king's gloved hand flips the Spain slab like a card —
                           shadow side → sun side ("turn Spain into a democracy"); a ruler 1975→1978 with
                           three hops; "3 YEARS".
    04 parties     695.45  the three hop-arcs match into the hemicycle's arcs: 350 seats ink in, party by party
                           (1977 result, left→right); "including the Communists": PCE block lights red.
    05 charter     699.50  rack-focus down to the presidential table: the 1978 Constitution, pen signs;
                           "the Transition" rises off the page as pop-up paper letters.
    06 model       703.70  the page turns over onto an architect's blueprint: a paper bridge maquette from a
                           shaded cliff to a sunlit one, title block "MODEL 1975—1978"; one small red drop.
   B · 23-F (tension)
    07 storm       709.17  hard cut, night hemicycle: door bursts, tricorn silhouettes stream in; "1981"
                           stands in the gallery in perspective, lit by the door light.
    08 tejero      711.90  the officer (tricorn, moustache) on the rostrum, pistol raised; shot into the ceiling.
    09 clock       713.40  tilt up along the raised pistol to the chamber clock (sun-disk clock): hands spin
                           backwards, the date window rolls 1981 → 1975 → 1939; shadow creeps back.
    10 tv          715.17  dip into a 1981 living room at night: wooden TV warms up, the king in uniform,
                           family silhouettes; "NO." ; the CRT collapses to a dot (= the coup collapses) and
                           that dot becomes the next morning's sun through the window.
   C · EUROPE'S FAST TRACK (hopeful → triumph)
    11 europe      722.13  the dot of light flies out over a Europe map: a fast track to Brussels; the 10
                           members of 1985 (W. Germany only, GDR hatched), "1986" set on the Atlantic;
                           12 gold stars gather around Spain; funding streams in (particles).
    12 infra       730.75  camera dives into Spain: roads draw, bridges stand, airports blink, rails —
                           each on its word.
    13 bcn92       735.31  flash of the Olympic flame: Montjuïc at night, the archer's arrow lights the cauldron,
                           Calatrava's tower; "BARCELONA 1992" on the stadium.
    14 expo92      739.50  whip: Seville at dusk, Alamillo bridge, "EXPO '92".
    15 ave         741.79  the AVE nose sweeps through frame as a foreground wipe → 3D high-speed train (Three.js).
    16 aveMap      745.55  crane up onto the map: Madrid → Seville drawn by the train.
    17 network     747.55  network grows 1992 → 2025, counter "≈2,500 MI"; pull out to a globe: 1 China · 2 Spain.
    19 madBcn      754.67  dive back: Madrid → Barcelona (true route), ruler ≈375 mi / ≈600 km, stopwatch 2 h 30.
   D · WHAT PAYS THE BILLS (pulse)
    20 coin        760.43  rack-focus: the map is lying on a bar counter; a euro coin spins (3D) — "pays the bills?"
    21 gdp         765.51  cut on the coin's clink: 3D prism map of the eurozone, height = GDP: DE, FR, IT, ES 4th,
                           "$1.7 TRILLION".
    22 growth      773.20  pan to a paper chart: 3 years of growth, Spain climbs, Germany stands still.
   E · PILLAR 1 · TOURISM (retro bossa)
    23 beach       781.31  Spain's line-head (a sun disk) is pushed into and becomes a beach umbrella seen from above;
                           lounger "01"; one of 8 panels = 12.5 % ("12–13 %"); a tyre (German cars) with a thinner slice.
    25 balearics   790.55  crane up: the Balearics, 1 M residents (dots) vs 16 M visitors streaming in by plane.
    26 sixteen     796.70  push into Palma: one local on his chair, 16 tourists arrive; "every year" — the sun arcs.
   F · PILLAR 2 · FASHION (warm → pulse)
    27 tailor      801.38  a bolt of fabric sweeps across camera (real foreground wipe) into a tailor's shop; tag "Nº 02";
                           Amancio Ortega (grey hair, navy blazer, no tie) steps into the light.
    28 childhood   805.60  zoom into an old photo → paper diorama pan: railway father → tracks become a tape measure,
                           "13" → the tailor's table.
    29 coruna      811.62  the pan continues onto a map: A Coruña, a paper storefront pops up, "1975" on its plaque.
    30 inditex     816.02  push through the shop window into today: a rail, four hangers slide in on their names.
    31 stores      822.82  whip: world at dusk, shop lights switch on: "5,500+ STORES · ≈100 COUNTRIES".
    32 seesaw      827.22  spotlight opens on a seesaw: Ortega vs Arnault, a share chart tips it, sun-disk "No.1" medal.
    33 idea        836.98  "FAST FASHION": letters hang from a moving clothes rail.
    34 weeks       840.34  tilt down to a tailor's tape: 26 weeks (6 months) vs 2 weeks.
    35 runway      845.38  catwalk → 14-day counter → the same dress on a mall rail.
    36 nearby      849.33  pattern paper map: tailor's pins in Spain, Portugal, Morocco; threads run to Arteixo.
    37 copy        855.49  the "model" (dress form) is cloned into an endless moving row → handoff (keeps moving left).

   Mix ≈ 2D 50 % (maps, charts, type) · 2.5D 35 % (depth sets, parallax, slabs) · 3D 15 % (AVE, coin, GDP prisms, globe).
   Music: hopeful (G) → tension (coup) → hopeful (D, Europe) → triumph (1992) → pulse (economy) → retro60s bossa
   (tourism) → warm piano (Ortega's past) → pulse (fashion) with a sneaky rivalry layer → fade ≈ 859.9.
   ===================================================================== */
(function () {
  const MG = window.MG; if (!MG) return;
  const { clamp, lerp } = MG; const P = MG.PAL; const F = MG.F; const W = MG.W, H = MG.H;
  const S5 = (MG._S5 = {});
  const E = MG.ease;
  const pr = (t, a, b, e) => MG.prog(t, a, b, e);
  const li = (t, a, b) => MG.lin(t, a, b);
  const T = (w, a) => MG.T(w, a, 3);
  const TE = (w, a) => MG.Tend(w, a, 3);
  const PH = (s, a) => MG.phrase(s, a, 3);
  const A = (c, a) => MG.col.a(c, a);
  const mix = (a, b, t) => MG.col.mix(a, b, clamp(t));
  const tw = (t) => MG.kit.twos(t);

  /* ---------------- typography helpers ---------------- */
  S5.kick = (ctx, s, x, y, t, t0, o = {}) => MG.text.reveal(ctx, s.toUpperCase(), x, y, t, t0, { font: F.mono, weight: 600, size: o.size || 24, tracking: o.tracking ?? 0.22, color: o.color || P.ink, align: o.align || 'left', style: o.style || 'track', by: 'line', dur: 0.6, alpha: o.alpha, out: o.out, stroke: o.stroke, strokeW: o.strokeW });
  S5.lead = (ctx, s, x, y, t, t0, o = {}) => MG.text.reveal(ctx, s, x, y, t, t0, { font: F.serif, italic: true, size: o.size || 56, color: o.color || P.ink2, align: o.align || 'left', style: o.style || 'blur', by: 'word', stagger: o.stagger ?? 0.07, alpha: o.alpha, out: o.out, shadow: o.shadow });
  S5.key = (ctx, s, x, y, t, t0, o = {}) => MG.text.reveal(ctx, s, x, y, t, t0, { font: o.font || F.grotesk, weight: o.weight || 800, size: o.size || 96, color: o.color || P.ink, align: o.align || 'left', style: o.style || 'rise', by: o.by || 'word', stagger: o.stagger ?? 0.07, tracking: o.tracking ?? -0.01, alpha: o.alpha, out: o.out, shadow: o.shadow, stroke: o.stroke, strokeW: o.strokeW });
  S5.num = (ctx, s, x, y, t, t0, o = {}) => MG.text.reveal(ctx, s, x, y, t, t0, { font: F.cond, weight: 900, size: o.size || 200, color: o.color || P.ink, align: o.align || 'left', style: o.style || 'rise', by: 'char', stagger: o.stagger ?? 0.05, dur: 0.55, tracking: o.tracking ?? -0.01, alpha: o.alpha, out: o.out, shadow: o.shadow });
  S5.spoken = (ctx, text, approx, x, y, t, o = {}) => MG.text.spoken(ctx, PH(text, approx).words, x, y, t, { font: o.font || F.grotesk, weight: o.weight || 800, size: o.size || 80, color: o.color || P.ink, align: o.align || 'left', style: o.style || 'rise', italic: o.italic, tracking: o.tracking, lead: o.lead ?? 0.06, alpha: o.alpha, out: o.out, shadow: o.shadow, stroke: o.stroke, strokeW: o.strokeW });
  /** perspective type standing in a scene: draws text with a long violet cast shadow on the ground */
  S5.standType = (ctx, str, x, y, o = {}) => {
    const size = o.size || 160; ctx.save();
    if (o.shadow !== false) { ctx.save(); ctx.translate(x, y); ctx.transform(1, 0, o.skew ?? -1.1, o.sq ?? 0.28, 0, 0); ctx.globalAlpha *= o.shadowA ?? 0.45; MG.text.draw(ctx, str, 0, 0, { font: o.font || F.cond, weight: o.weight || 900, size, color: o.shadowColor || P.sombraDeep, align: o.align || 'center', tracking: o.tracking }); ctx.restore(); }
    // extruded body (thickness toward the viewer)
    const d = o.depth ?? 8; for (let i = d; i >= 1; i--) MG.text.draw(ctx, str, x + i * 0.35, y + i * 0.6, { font: o.font || F.cond, weight: o.weight || 900, size, color: mix(o.side || '#8a6a4a', '#2a1a20', i / d * 0.5), align: o.align || 'center', tracking: o.tracking, alpha: o.alpha });
    MG.text.draw(ctx, str, x, y, { font: o.font || F.cond, weight: o.weight || 900, size, color: o.color || P.cal, align: o.align || 'center', tracking: o.tracking, alpha: o.alpha });
    ctx.restore();
  };

  /* ---------------- shape helpers ---------------- */
  /** smooth closed shape from points with cel volume + ink outline. pts in local coords */
  S5.form = (ctx, pts, o = {}) => {
    const p = o.poly ? MG.path.poly(pts) : MG.path.smooth(pts, true, o.tension ?? 0.5); let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9; for (const q of pts) { x0 = Math.min(x0, q[0]); y0 = Math.min(y0, q[1]); x1 = Math.max(x1, q[0]); y1 = Math.max(y1, q[1]); }
    if (o.flat) { ctx.fillStyle = o.color; ctx.fill(p); }
    else MG.fx.volume(ctx, p, [x0, y0, x1 - x0, y1 - y0], { color: o.color || '#c8693f', light: o.light || [-0.6, -0.8], shade: o.shade ?? 0.5, shadeColor: o.shadeColor, hi: o.hi ?? 0.25, hiColor: o.hiColor, cel: o.cel ?? true, rim: o.rim, rimW: o.rimW || 3, rimA: o.rimA, tex: o.tex, texAlpha: o.texAlpha, shadeOffset: o.shadeOffset, soft: o.soft });
    if (o.outline !== false) { ctx.save(); ctx.strokeStyle = o.outline || '#2a1a16'; ctx.lineWidth = o.ow || 3; ctx.lineJoin = 'round'; ctx.stroke(p); ctx.restore(); }
    return p;
  };
  S5.bbox = (pts) => { let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9; for (const q of pts) { x0 = Math.min(x0, q[0]); y0 = Math.min(y0, q[1]); x1 = Math.max(x1, q[0]); y1 = Math.max(y1, q[1]); } return [x0, y0, x1 - x0, y1 - y0]; };
  /** ink line with boil */
  S5.ink = (ctx, pts, w, c, t, o = {}) => MG.fx.ink(ctx, pts, { width: w, color: c || '#2a1a16', taper: o.taper || [0.3, 0.3], wobble: o.wobble ?? 0.8, seed: o.seed || 3, boil: t, alpha: o.alpha });
  /** sky gradient */
  S5.sky = (ctx, stops, y0 = 0, y1 = H) => MG.fx.vgrad(ctx, stops, 0, y0, W, y1 - y0);
  /** parallax ridge sprite: noise silhouette */
  S5.ridge = (key, w, h, o) => MG.cache('s5ridge:' + key, w, h, (x) => {
    const pts = [[0, h]]; const n = 120; for (let i = 0; i <= n; i++) { const u = i / n; const yy = h * (o.base ?? 0.5) - (MG.fbm(u * (o.freq || 3) + (o.seed || 1) * 7.3, (o.seed || 1) * 3.1, 4) * (o.amp ?? 0.35) * h) - Math.sin(u * Math.PI * (o.hump || 1)) * (o.lift || 0) * h; pts.push([u * w, yy]); } pts.push([w, h]);
    const p = MG.path.poly(pts); const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, o.top); g.addColorStop(1, o.bot || o.top); x.fillStyle = g; x.fill(p);
    x.save(); x.clip(p); MG.tex.over(x, 'blotch', { alpha: 0.25, color: o.tex || '#000', scale: 3, seed: o.seed }); MG.tex.over(x, 'fibers', { alpha: 0.5 }); x.restore();
    if (o.rim) { x.save(); x.strokeStyle = o.rim; x.lineWidth = 3; x.beginPath(); pts.slice(1, -1).forEach((q, i) => (i ? x.lineTo(q[0], q[1]) : x.moveTo(q[0], q[1]))); x.stroke(); x.restore(); }
  });
  /** soft long cast-shadow polygon from a base segment toward a direction */
  S5.cast = (ctx, x0, y0, x1, y1, dx, dy, a = 0.35, c = P.sombraDeep) => { ctx.save(); ctx.fillStyle = A(c, a); ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.lineTo(x1 + dx, y1 + dy); ctx.lineTo(x0 + dx, y0 + dy); ctx.closePath(); ctx.fill(); ctx.restore(); };
  /** stylised 5-point EU star */
  S5.star = (ctx, x, y, r, c = '#F4C430', rot = 0) => { if (r <= 0.3) return; const p = MG.path.star(x, y, r, r * 0.42, 5, -Math.PI / 2 + rot); ctx.save(); ctx.fillStyle = c; ctx.fill(p); ctx.restore(); };

  /* ---------------- camera helper ---------------- */
  /** apply a 2D camera from keyframes {x,y,zoom,rot}; plus handheld */
  S5.cam = (ctx, t, keys, hh = 3, seed = 5) => { const c = MG.keys(t, keys); const h = MG.cam.handheld(t, hh, seed); MG.cam.apply(ctx, { x: c.x, y: c.y, zoom: c.zoom, rot: (c.rot || 0) + h.rot, dx: h.dx, dy: h.dy }); return c; };

  /* ---------------- custom transitions (all content-motivated) ---------------- */
  /** dawn light bleeding from the sun on the horizon (S04 dim frame → sunrise) */
  S5.trDawn = (sx, sy) => (ctx, Afr, B, p) => {
    ctx.drawImage(Afr, 0, 0);
    const m = MG.scratch(3); const x = m.getContext('2d'); MG.reset(x); x.clearRect(0, 0, W, H);
    const R = 2300 * E.inQuad(p) + 60 * p; const g = x.createRadialGradient(sx, sy, 0, sx, sy, Math.max(1, R)); g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(0.72, 'rgba(0,0,0,1)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g; x.fillRect(0, 0, W, H); x.globalCompositeOperation = 'source-in'; x.drawImage(B, 0, 0); x.globalCompositeOperation = 'source-over';
    ctx.drawImage(m, 0, 0);
    const k = Math.sin(p * Math.PI); MG.fx.glow(ctx, sx, sy, 300 + R * 0.5, '#FFD08A', 0.5 * k);
  };
  /** camera zoom-through toward a point (A grows and blurs into (x,y); B settles from smaller scale around the same point) */
  S5.trPush = (x, y, amt = 2.4, from = 0.55) => (ctx, Afr, B, p) => {
    const sa = 1 + E.inCubic(p) * amt; const sb = lerp(from, 1, E.outCubic(p));
    ctx.save(); ctx.translate(x, y); ctx.scale(sa, sa); ctx.translate(-x, -y); if (p > 0.15) ctx.filter = `blur(${(p * 10).toFixed(1)}px)`; ctx.drawImage(Afr, 0, 0); ctx.restore();
    // B is revealed through a soft circular portal growing from the target point (no visible frame edges)
    const m = MG.scratch(3); const mx = m.getContext('2d'); MG.reset(mx); mx.clearRect(0, 0, W, H); const R = 40 + 2400 * E.inQuad(clamp(p * 1.1));
    const g = mx.createRadialGradient(x, y, 0, x, y, R); g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(0.65, 'rgba(0,0,0,1)'); g.addColorStop(1, 'rgba(0,0,0,0)'); mx.fillStyle = g; mx.fillRect(0, 0, W, H);
    mx.globalCompositeOperation = 'source-in'; mx.translate(x, y); mx.scale(sb, sb); mx.translate(-x, -y); if (p < 0.85) mx.filter = `blur(${((1 - p) * 6).toFixed(1)}px)`; mx.drawImage(B, 0, 0); MG.reset(mx);
    ctx.save(); ctx.globalAlpha = MG.smoothstep(0.05, 0.5, p); ctx.drawImage(m, 0, 0); ctx.restore();
  };
  /** camera pull-out: A shrinks into (x,y) inside B (B was "around" A) */
  S5.trPull = (x, y, to = 0.18) => (ctx, Afr, B, p) => {
    const sb = lerp(2.2, 1, E.outCubic(p)); ctx.save(); ctx.translate(x, y); ctx.scale(sb, sb); ctx.translate(-x, -y); if (p < 0.8) ctx.filter = `blur(${((1 - p) * 6).toFixed(1)}px)`; ctx.drawImage(B, 0, 0); ctx.restore();
    const sa = lerp(1, to, E.inOutCubic(p)); ctx.save(); ctx.globalAlpha = 1 - MG.smoothstep(0.35, 0.9, p); ctx.translate(x, y); ctx.scale(sa, sa); ctx.translate(-x, -y); ctx.drawImage(Afr, 0, 0); ctx.restore();
  };
  /** page turn: A is a page that lifts and folds over to the left revealing B */
  S5.trPage = (ctx, Afr, B, p) => {
    ctx.drawImage(B, 0, 0); const e = E.inOutCubic(p); const fx = lerp(W + 40, -W * 0.15, e); // fold line x
    ctx.save(); ctx.beginPath(); ctx.rect(0, 0, Math.max(0, fx), H); ctx.clip(); ctx.drawImage(Afr, 0, 0); ctx.restore();
    // shadow on B near the fold
    const g = ctx.createLinearGradient(fx, 0, fx + 160, 0); g.addColorStop(0, 'rgba(30,15,20,0.35)'); g.addColorStop(1, 'rgba(30,15,20,0)'); ctx.fillStyle = g; ctx.fillRect(fx, 0, 160, H);
    // the turning flap (back of the page) folding over
    const fw = Math.min(W - fx, (W + 40 - fx) * 0.5); if (fw > 2) { ctx.save(); const gg = ctx.createLinearGradient(fx - fw, 0, fx, 0); gg.addColorStop(0, '#efe5cf'); gg.addColorStop(0.7, '#e2d4b4'); gg.addColorStop(1, '#c9b68e'); ctx.fillStyle = gg; ctx.shadowColor = 'rgba(30,15,10,0.4)'; ctx.shadowBlur = 40; ctx.shadowOffsetX = -10; ctx.beginPath(); ctx.moveTo(fx, 0); ctx.lineTo(fx - fw, -20); ctx.lineTo(fx - fw * 0.92, H + 20); ctx.lineTo(fx, H); ctx.closePath(); ctx.fill(); ctx.restore(); }
  };
  /** foreground object wipe: a dark vertical object (train / fabric) sweeps across, revealing B behind it. drawObj(ctx, xEdge, p) */
  S5.trSweep = (drawObj, dir = -1) => (ctx, Afr, B, p) => {
    const e = E.inOutCubic(p); const edge = dir < 0 ? lerp(W + 200, -900, e) : lerp(-200, W + 900, e);
    ctx.drawImage(Afr, 0, 0); ctx.save(); ctx.beginPath(); if (dir < 0) ctx.rect(edge + 400, 0, W, H); else ctx.rect(0, 0, Math.max(0, edge - 400), H); ctx.clip(); ctx.drawImage(B, 0, 0); ctx.restore();
    drawObj(ctx, edge, p);
  };
  /** spotlight opening on a point (a real stage light) */
  S5.trSpot = (x, y) => (ctx, Afr, B, p) => {
    ctx.drawImage(Afr, 0, 0); ctx.fillStyle = `rgba(10,8,12,${Math.min(1, p * 2.2) * 0.85})`; ctx.fillRect(0, 0, W, H);
    const r = 40 + 2300 * E.inCubic(clamp((p - 0.25) / 0.75)); const m = MG.scratch(3); const x2 = m.getContext('2d'); MG.reset(x2); x2.clearRect(0, 0, W, H);
    const g = x2.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(0.8, 'rgba(0,0,0,1)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x2.fillStyle = g; x2.fillRect(0, 0, W, H); x2.globalCompositeOperation = 'source-in'; x2.drawImage(B, 0, 0); x2.globalCompositeOperation = 'source-over';
    ctx.drawImage(m, 0, 0); MG.fx.glow(ctx, x, y, r * 0.6 + 80, '#FFE3B0', 0.35 * Math.sin(p * Math.PI));
  };

  /** mouth: MG.kit.mouth draws CLOSED smiles upside-down (engine bug: closed-line curve sign is inverted) —
   *  so closed mouths are drawn here; open mouths use the kit. */
  S5.mouth = (ctx, x, y, o = {}) => {
    if ((o.open || 0) > 0.05 || o.mood === 'o' || o.mood === 'shout' || o.mood === 'grin') return MG.kit.mouth(ctx, x, y, o);
    const w = o.w || 50; const c = { neutral: 0.04, smile: 0.3, frown: -0.28, smirk: 0.18, flat: 0 }[o.mood || 'neutral'] ?? 0;
    ctx.save(); ctx.translate(x, y); if (o.rot) ctx.rotate(o.rot);
    // corners up for positive c: y = c·w·0.42·(cos(uπ) − 1) → 0 at the centre, negative (up) at the corners
    const pts = []; for (let i = 0; i <= 12; i++) { const u = i / 12 - 0.5; pts.push([u * w, c * w * 0.42 * (Math.cos(u * Math.PI) - 1) + (o.mood === 'smirk' ? -u * w * 0.22 : 0)]); }
    MG.fx.ink(ctx, pts, { width: Math.max(2.5, w * 0.075), color: o.color || '#3a1a17', taper: [0.3, 0.3] }); ctx.restore();
  };

  /* =====================================================================
     CHARACTERS (bespoke paths, cel shading, rim light, ink outline, on twos)
     ===================================================================== */
  const SKIN = '#E3A882', SKIN_D = '#B9765A', OL = '#2a1a16';
  /** Juan Carlos I (c. 1975–81): long face, Bourbon nose, strong cleft chin, dark hair swept back, army uniform.
   *  (x,y) = head centre, s scale. o: {look:[x,y], talk 0..1, smile, blink, brow, uniform:true, light, rim} */
  S5.jc = (ctx, x, y, s, t, o = {}) => {
    const tt = tw(t); const al = MG.kit.alive(tt, 11); const L = o.light || [-0.7, -0.7]; const rim = o.rim || '#FFE2B0';
    ctx.save(); ctx.translate(x, y + al.bob * 0.6); ctx.scale(s, s); ctx.rotate(al.sway * 0.6 + (o.tilt || 0));
    // --- torso / uniform
    const U = o.uniformColor || '#4F4A33', UD = '#2E2B1E';
    const torso = [[-300, 600], [-296, 400], [-282, 300], [-246, 252], [-150, 222], [-60, 196], [60, 198], [150, 224], [248, 256], [286, 304], [300, 404], [306, 600]];
    S5.form(ctx, torso, { color: U, shadeColor: UD, light: L, shade: 0.55, rim, rimW: 5, ow: 4, tension: 0.35 });
    // sleeves seams + shoulder boards
    S5.ink(ctx, [[-230, 262], [-246, 380], [-238, 600]], 3, A('#1a1810', 0.6), tt, { wobble: 0.4 }); S5.ink(ctx, [[236, 264], [252, 380], [246, 600]], 3, A('#1a1810', 0.6), tt, { wobble: 0.4 });
    for (const sx of [-1, 1]) { const q = [[sx * 120, 222], [sx * 250, 258], [sx * 262, 286], [sx * 132, 252]]; S5.form(ctx, q, { poly: true, color: '#3c3826', shade: 0.3, light: L, ow: 2.5 }); }
    // shirt + tie V
    S5.form(ctx, [[-52, 186], [52, 188], [24, 300], [0, 330], [-22, 300]], { color: '#EDE6D6', shade: 0.25, light: L, ow: 3 });
    S5.form(ctx, [[-12, 200], [14, 200], [20, 300], [2, 332], [-16, 300]], { color: '#2b2a24', shade: 0.2, light: L, ow: 2.5, hi: 0.15 });
    // lapels
    S5.form(ctx, [[-60, 186], [-24, 300], [-2, 342], [-60, 360], [-150, 250]], { color: mix(U, '#000', 0.08), shadeColor: UD, light: L, shade: 0.4, ow: 3 });
    S5.form(ctx, [[60, 188], [26, 300], [4, 342], [62, 360], [150, 252]], { color: mix(U, '#000', 0.12), shadeColor: UD, light: L, shade: 0.5, ow: 3 });
    // gold collar embroidery + medals + buttons
    ctx.save(); ctx.strokeStyle = '#D8B15A'; ctx.lineWidth = 5; ctx.lineCap = 'round';
    for (const sx of [-1, 1]) { ctx.beginPath(); ctx.moveTo(sx * 70, 200); ctx.quadraticCurveTo(sx * 105, 215, sx * 128, 245); ctx.stroke(); for (let i = 0; i < 4; i++) { ctx.beginPath(); ctx.arc(sx * (84 + i * 12), 212 + i * 9, 4, 0, MG.TAU); ctx.stroke(); } }
    ctx.restore();
    const ribbons = ['#B8322A', '#F2C14E', '#1F4E8C', '#6F7A3A', '#B8322A', '#E6DFD0'];
    for (let i = 0; i < 6; i++) { const rx = -150 + (i % 3) * 30, ry = 300 + Math.floor(i / 3) * 16; ctx.fillStyle = ribbons[i]; ctx.fillRect(rx, ry, 28, 13); ctx.fillStyle = 'rgba(0,0,0,0.25)'; ctx.fillRect(rx, ry + 9, 28, 4); ctx.strokeStyle = OL; ctx.lineWidth = 1.5; ctx.strokeRect(rx, ry, 28, 13); }
    for (let i = 0; i < 3; i++) { const by = 380 + i * 60; MG.fx.volume(ctx, MG.path.circle(70, by, 9), [61, by - 9, 18, 18], { color: '#D8B15A', shade: 0.4, hi: 0.6, cel: true }); }
    // star insignia on the shoulder board
    S5.star(ctx, 190, 285, 13, '#D8B15A', 0.2); S5.star(ctx, -180, 285, 13, '#D8B15A', -0.2);
    ctx.save(); ctx.translate(0, 40); ctx.scale(1.14, 1.14); ctx.translate(0, -40);
    // --- neck
    S5.form(ctx, [[-46, 120], [44, 122], [52, 196], [0, 214], [-54, 194]], { color: SKIN_D, shade: 0.3, light: L, ow: 3, hi: 0.1 });
    // --- ears
    S5.form(ctx, [[76, -8], [100, -22], [112, 10], [100, 48], [80, 44]], { color: SKIN, shadeColor: SKIN_D, light: L, shade: 0.45, ow: 3 });
    // --- head
    const head = [[-6, -150], [-66, -122], [-92, -60], [-96, 0], [-90, 52], [-70, 104], [-40, 142], [-6, 156], [26, 150], [56, 122], [80, 70], [92, 6], [90, -64], [62, -124]];
    S5.form(ctx, head, { color: SKIN, shadeColor: SKIN_D, light: L, shade: 0.5, rim, rimW: 5, ow: 4, hi: 0.3 });
    // cheek shading & cleft chin
    ctx.fillStyle = A('#C8574A', 0.16); ctx.beginPath(); ctx.ellipse(-58, 52, 22, 14, 0, 0, MG.TAU); ctx.fill();
    S5.ink(ctx, [[-14, 136], [-12, 148]], 3, A(OL, 0.7), tt, { wobble: 0 });
    // --- hair (dark, swept back, receding temples)
    const hair = [[-74, -66], [-80, -104], [-52, -144], [-4, -166], [46, -160], [84, -126], [104, -70], [102, -18], [92, 8], [84, -34], [72, -78], [44, -104], [8, -112], [-26, -110], [-52, -96], [-64, -74]];
    S5.form(ctx, hair, { color: '#3B2B22', shadeColor: '#1d1410', light: L, shade: 0.5, hi: 0.35, hiColor: '#7a5a44', rim: '#c99a6a', rimW: 4, ow: 3.5 });
    ctx.save(); ctx.strokeStyle = A('#7a5a44', 0.7); ctx.lineWidth = 2.2; for (let i = 0; i < 6; i++) { ctx.beginPath(); ctx.moveTo(-50 + i * 18, -112 + i * 2); ctx.quadraticCurveTo(-10 + i * 20, -150 + i * 3, 50 + i * 9, -140 + i * 10); ctx.stroke(); } ctx.restore();
    // --- brows, eyes
    const look = o.look || [-0.25, 0.05]; const bl = o.blink ?? MG.kit.blink(tt, 31);
    MG.kit.brow(ctx, -50, -46, { w: 46, raise: o.brow ?? 0.05, angle: 0.12, thick: 11, color: '#2a1d16' });
    MG.kit.brow(ctx, 22, -48, { w: 42, raise: o.brow ?? 0.05, angle: -0.08, thick: 10, color: '#2a1d16', flip: true });
    MG.kit.eye(ctx, -48, -16, { r: 13, look, blink: bl, skin: SKIN, lid: o.lid ?? 0.32, iris: '#4a3326', irisScale: 0.72 });
    MG.kit.eye(ctx, 20, -18, { r: 12, look, blink: bl, skin: SKIN, lid: o.lid ?? 0.32, iris: '#4a3326', w: 1.05, irisScale: 0.72 });
    // --- nose (big, forward-left)
    const nose = [[-18, -30], [-34, 6], [-58, 40], [-62, 56], [-44, 64], [-26, 58], [-8, 52], [-2, 30]];
    S5.form(ctx, nose, { color: SKIN, shadeColor: SKIN_D, light: L, shade: 0.55, ow: 3, hi: 0.35 });
    ctx.fillStyle = A('#5a2a22', 0.55); ctx.beginPath(); ctx.ellipse(-40, 58, 6, 3.5, 0.3, 0, MG.TAU); ctx.fill();
    // --- mouth
    const talk = o.talk || 0; const op = talk > 0 ? clamp(0.15 + 0.6 * Math.abs(MG.noise2(tt * 6.5, 3.3))) * talk : 0;
    S5.mouth(ctx, -22, 96, { w: 62, mood: o.mood || 'smile', open: op, color: '#4a1f1a', rot: -0.06 });
    // smile lines
    S5.ink(ctx, [[-62, 74], [-58, 92], [-52, 104]], 2.4, A(OL, 0.45), tt, { wobble: 0.5 });
    ctx.restore();
    ctx.restore();
  };

  /** Francisco Franco as a dim oil portrait in a gilt frame (historical figure, not a joke). draws inside [x,y,w,h] */
  S5.francoPortrait = (key, w, h) => MG.cache('s5franco:' + key, w, h, (x) => {
    // gilt frame
    const fr = 34; x.fillStyle = '#7a5a2a'; x.fillRect(0, 0, w, h); MG.fx.volume(x, MG.path.rr(0, 0, w, h, 6), [0, 0, w, h], { color: '#B28A3E', shade: 0.45, hi: 0.5, cel: false, tex: 'grain', texAlpha: 0.3 });
    x.strokeStyle = '#5a3f1a'; x.lineWidth = 3; x.strokeRect(fr * 0.45, fr * 0.45, w - fr * 0.9, h - fr * 0.9); x.strokeStyle = '#E0C37A'; x.lineWidth = 2; x.strokeRect(fr * 0.25, fr * 0.25, w - fr * 0.5, h - fr * 0.5);
    // canvas
    const cx0 = fr, cy0 = fr, cw = w - fr * 2, ch = h - fr * 2; const g = x.createRadialGradient(cx0 + cw * 0.45, cy0 + ch * 0.35, 20, cx0 + cw / 2, cy0 + ch / 2, ch); g.addColorStop(0, '#5a4a3a'); g.addColorStop(1, '#1f1814'); x.fillStyle = g; x.fillRect(cx0, cy0, cw, ch);
    x.save(); x.beginPath(); x.rect(cx0, cy0, cw, ch); x.clip(); x.translate(cx0 + cw / 2, cy0 + ch * 0.42); const k = cw / 300;
    x.scale(k, k);
    // uniform bust with sash
    S5.form(x, [[-150, 260], [-140, 140], [-90, 95], [-30, 80], [40, 82], [100, 100], [148, 150], [150, 260]], { color: '#3c3a2a', shadeColor: '#15130c', shade: 0.6, ow: 2, outline: '#120c08', cel: false });
    x.fillStyle = '#8a2a24'; x.beginPath(); x.moveTo(-100, 110); x.lineTo(-70, 100); x.lineTo(130, 260); x.lineTo(90, 262); x.closePath(); x.fill();
    // head: bald crown, mustache, heavy jowls
    S5.form(x, [[0, -88], [-46, -70], [-58, -20], [-56, 30], [-36, 66], [0, 80], [36, 66], [56, 28], [58, -22], [44, -72]], { color: '#C89A78', shadeColor: '#5a3a2a', shade: 0.6, ow: 2, outline: '#120c08', cel: false, hi: 0.25 });
    x.fillStyle = '#8f8a82'; x.beginPath(); x.ellipse(-55, -30, 8, 20, 0.15, 0, MG.TAU); x.ellipse(56, -30, 8, 20, -0.15, 0, MG.TAU); x.fill(); // grey sides
    x.fillStyle = '#4a3a30'; x.beginPath(); x.ellipse(0, 36, 20, 6, 0, 0, MG.TAU); x.fill(); // moustache
    x.fillStyle = 'rgba(90,50,40,0.35)'; x.beginPath(); x.ellipse(-20, -8, 11, 7, 0, 0, MG.TAU); x.ellipse(20, -8, 11, 7, 0, 0, MG.TAU); x.fill();
    x.fillStyle = '#2a1f18'; x.beginPath(); x.ellipse(-20, -8, 4, 3, 0, 0, MG.TAU); x.ellipse(20, -8, 4, 3, 0, 0, MG.TAU); x.fill();
    x.strokeStyle = '#6a5a50'; x.lineWidth = 3; x.beginPath(); x.moveTo(-30, -20); x.quadraticCurveTo(-20, -25, -9, -21); x.moveTo(9, -21); x.quadraticCurveTo(20, -25, 30, -20); x.stroke();
    x.strokeStyle = 'rgba(90,50,40,0.5)'; x.lineWidth = 2; x.beginPath(); x.moveTo(-3, -6); x.quadraticCurveTo(-8, 14, 0, 18); x.stroke();
    x.restore();
    // varnish / craquelure
    x.save(); x.beginPath(); x.rect(cx0, cy0, cw, ch); x.clip(); MG.tex.over(x, 'blotch', { alpha: 0.35, color: '#2a1a10', scale: 2 }); MG.tex.over(x, 'lines', { alpha: 0.08, spacing: 5, angle: 35 }); x.fillStyle = 'rgba(200,150,80,0.08)'; x.fillRect(cx0, cy0, cw, ch); x.restore();
  });

  /** Guardia Civil tricorn ("tricornio"): black patent leather, flat back panel standing up behind the crown,
   *  visor dipping in front. Front view. (x,y) = brim centre */
  S5.tricorn = (ctx, x, y, s, o = {}) => {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const panel = new Path2D(); panel.moveTo(-62, -8); panel.bezierCurveTo(-70, -36, -84, -62, -92, -80); panel.quadraticCurveTo(-40, -58, 0, -60); panel.quadraticCurveTo(40, -58, 92, -80); panel.bezierCurveTo(84, -62, 70, -36, 62, -8); panel.closePath();
    const crown = new Path2D(); crown.moveTo(-74, 4); crown.bezierCurveTo(-74, -28, -44, -46, 0, -48); crown.bezierCurveTo(44, -46, 74, -28, 74, 4); crown.closePath();
    const brim = new Path2D(); brim.moveTo(-80, 2); brim.quadraticCurveTo(0, -12, 80, 2); brim.quadraticCurveTo(40, 26, 0, 28); brim.quadraticCurveTo(-40, 26, -80, 2); brim.closePath();
    if (o.sil) { ctx.fillStyle = o.sil; ctx.fill(panel); ctx.fill(crown); ctx.fill(brim); ctx.restore(); return; }
    const vol = (p, bb, c) => { MG.fx.volume(ctx, p, bb, { color: c, shadeColor: '#000', shade: 0.45, hi: 0.55, hiColor: '#8a8c9c', light: o.light || [0.5, -0.8], cel: true }); ctx.strokeStyle = '#000'; ctx.lineWidth = 3; ctx.stroke(p); };
    vol(panel, [-92, -82, 184, 76], '#151418'); vol(crown, [-74, -48, 148, 52], '#1a181d'); vol(brim, [-80, -12, 160, 40], '#0f0e12');
    ctx.strokeStyle = 'rgba(255,255,255,0.55)'; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(26, -40); ctx.quadraticCurveTo(50, -32, 58, -12); ctx.stroke(); ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(50, -66); ctx.lineTo(80, -76); ctx.stroke();
    ctx.restore();
  };
  /** silhouette of an armed Guardia Civil walking (night storming shot). phase drives the gait */
  S5.guardSil = (ctx, x, y, s, ph, c = '#0d0b10') => {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = c; ctx.strokeStyle = c; ctx.lineCap = 'round';
    const sw = Math.sin(ph) * 22; ctx.lineWidth = 26; ctx.beginPath(); ctx.moveTo(0, -150); ctx.lineTo(-sw * 0.5, -70); ctx.lineTo(-sw, 0); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0, -150); ctx.lineTo(sw * 0.5, -70); ctx.lineTo(sw, 0); ctx.stroke();
    ctx.fill(MG.path.smooth([[-34, -150], [-40, -250], [-26, -300], [24, -302], [40, -250], [34, -150], [0, -140]], true)); // coat
    ctx.beginPath(); ctx.ellipse(0, -330, 22, 26, 0, 0, MG.TAU); ctx.fill(); // head
    S5.tricorn(ctx, 0, -344, 0.42, { sil: c });
    ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(-10, -270); ctx.lineTo(46, -220); ctx.lineTo(90, -250); ctx.stroke(); ctx.fillRect(40, -262, 70, 12); ctx.fillRect(62, -252, 10, 26); // submachine gun
    ctx.restore();
  };
  /** Lt-Col. Tejero caricature: tricorn, heavy black moustache, Guardia Civil green, pistol raised. (x,y) head centre */
  S5.tejero = (ctx, x, y, s, t, o = {}) => {
    const tt = tw(t); const L = o.light || [0.55, -0.8]; const rim = o.rim || '#FFE2B0'; const G = '#4C5A36', GD = '#283019';
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    // torso
    S5.form(ctx, [[-290, 620], [-284, 380], [-250, 280], [-150, 225], [-50, 200], [60, 202], [160, 230], [250, 290], [280, 390], [290, 620]], { color: G, shadeColor: GD, shade: 0.55, light: L, rim, rimW: 5, ow: 4, tension: 0.35 });
    S5.form(ctx, [[-50, 200], [50, 202], [20, 290], [-22, 292]], { color: '#D9D2B8', shade: 0.25, light: L, ow: 3 }); S5.form(ctx, [[-10, 214], [12, 214], [16, 300], [-14, 300]], { color: '#2E3320', shade: 0.2, light: L, ow: 2.5 });
    ctx.save(); ctx.strokeStyle = '#3a2a1a'; ctx.lineWidth = 16; ctx.beginPath(); ctx.moveTo(-170, 240); ctx.lineTo(150, 600); ctx.stroke(); ctx.strokeStyle = 'rgba(255,220,170,0.25)'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(-172, 232); ctx.lineTo(146, 590); ctx.stroke(); ctx.restore(); // leather cross-strap
    for (const sx of [-1, 1]) { S5.form(ctx, [[sx * 60, 205], [sx * 140, 240], [sx * 110, 300], [sx * 40, 250]], { color: mix(G, '#000', 0.12), shade: 0.4, light: L, ow: 3 }); }
    // raised arm (his right → our left), pistol pointing up
    const raise = o.raise ?? 1; const sh = [-230, 300]; const el = [lerp(-250, -330, raise), lerp(470, 120, raise)]; const wr = [lerp(-200, -300, raise), lerp(560, -140, raise)];
    MG.fx.ink(ctx, [sh, el], { width: 92, color: GD, taper: [0, 0] }); MG.fx.ink(ctx, [sh, el], { width: 82, color: G, taper: [0, 0] }); MG.fx.ink(ctx, [el, wr], { width: 76, color: GD, taper: [0, 0.1] }); MG.fx.ink(ctx, [el, wr], { width: 66, color: G, taper: [0, 0.1] });
    const kick = o.recoil || 0;
    ctx.save(); ctx.translate(wr[0], wr[1] - kick * 18); ctx.rotate(-0.3 - kick * 0.25);
    const slide = MG.path.poly([[-16, -24], [16, -24], [17, -168], [12, -176], [-15, -176]]); MG.fx.volume(ctx, slide, [-16, -176, 34, 152], { color: '#222228', shadeColor: '#000', shade: 0.4, hi: 0.5, hiColor: '#9a9aaa', light: L, cel: true }); ctx.strokeStyle = '#000'; ctx.lineWidth = 2.5; ctx.stroke(slide);
    ctx.strokeStyle = '#4a4a55'; ctx.lineWidth = 2; for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.moveTo(-10, -40 - i * 7); ctx.lineTo(10, -40 - i * 7); ctx.stroke(); }
    ctx.strokeStyle = '#18181c'; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(16, -40); ctx.quadraticCurveTo(46, -50, 40, -84); ctx.lineTo(16, -86); ctx.stroke(); // trigger guard
    const fist = MG.path.smooth([[-44, -36], [30, -46], [48, -4], [34, 40], [-30, 46], [-50, 4]], true);
    MG.fx.volume(ctx, fist, [-50, -46, 98, 92], { color: SKIN, shadeColor: SKIN_D, shade: 0.5, cel: true, light: L, rim: '#FFE2B0', rimW: 3 }); ctx.strokeStyle = OL; ctx.lineWidth = 3; ctx.stroke(fist);
    for (let i = 0; i < 3; i++) S5.ink(ctx, [[-40, -16 + i * 18], [-10, -20 + i * 18]], 3, A(OL, 0.7), tt, { wobble: 0 });
    S5.ink(ctx, [[22, -30], [34, 0], [24, 26]], 3, A(OL, 0.6), tt, { wobble: 0 });
    if (o.flash > 0) { ctx.save(); ctx.globalCompositeOperation = 'lighter'; const f = o.flash; ctx.fillStyle = A('#FFF2C0', f); ctx.fill(MG.path.star(0, -200, 70 * f + 20, 18, 7, -Math.PI / 2)); MG.fx.glow(ctx, 0, -200, 200, '#FFD080', 0.7 * f, 'lighter'); ctx.restore(); }
    ctx.restore();
    // neck + head (square jaw)
    S5.form(ctx, [[-56, 110], [56, 110], [60, 210], [-60, 210]], { color: SKIN_D, shade: 0.4, light: L, ow: 3, hi: 0.1 });
    S5.form(ctx, [[96, -10], [118, -24], [124, 14], [112, 50], [94, 46]], { color: SKIN, shadeColor: SKIN_D, light: L, shade: 0.45, ow: 3 });
    S5.form(ctx, [[-96, -10], [-118, -24], [-124, 14], [-112, 50], [-94, 46]], { color: SKIN, shadeColor: SKIN_D, light: L, shade: 0.45, ow: 3 });
    S5.form(ctx, [[0, -120], [-78, -100], [-104, -40], [-104, 40], [-92, 112], [-50, 150], [0, 160], [50, 150], [92, 112], [104, 40], [104, -40], [78, -100]], { color: SKIN, shadeColor: SKIN_D, shade: 0.5, light: L, rim, rimW: 5, ow: 4, hi: 0.25, tension: 0.4 });
    ctx.fillStyle = A('#3a2a28', 0.25); ctx.beginPath(); ctx.ellipse(0, 120, 70, 36, 0, 0, MG.TAU); ctx.fill(); // stubble
    // furious brows + narrowed eyes
    MG.kit.brow(ctx, -42, -40, { w: 56, angle: 0.32, thick: 16, color: '#141010', raise: -0.2 }); MG.kit.brow(ctx, 42, -40, { w: 56, angle: -0.32, thick: 16, color: '#141010', raise: -0.2, flip: true });
    MG.kit.eye(ctx, -40, -8, { r: 12, look: [0.15, 0], blink: 0, skin: SKIN, angry: true, lid: 0.6, iris: '#2a1a12', irisScale: 0.8 }); MG.kit.eye(ctx, 40, -8, { r: 12, look: [0.15, 0], blink: 0, skin: SKIN, angry: true, lid: 0.6, iris: '#2a1a12', irisScale: 0.8 });
    S5.ink(ctx, [[-14, -52], [-6, -34]], 3, A(OL, 0.6), tt, { wobble: 0 }); S5.ink(ctx, [[14, -52], [6, -34]], 3, A(OL, 0.6), tt, { wobble: 0 }); S5.ink(ctx, [[-40, -78], [0, -84], [40, -78]], 2.5, A(OL, 0.35), tt, { wobble: 0.5 });
    S5.ink(ctx, [[-26, 44], [-44, 80], [-40, 110]], 3, A(OL, 0.5), tt, { wobble: 0 }); S5.ink(ctx, [[26, 44], [44, 80], [40, 110]], 3, A(OL, 0.5), tt, { wobble: 0 });
    S5.form(ctx, [[-8, -16], [-20, 34], [-16, 50], [0, 56], [18, 50], [20, 34], [8, -16]], { color: SKIN, shadeColor: SKIN_D, shade: 0.5, light: L, ow: 3, hi: 0.3 });
    // shouting mouth + heavy moustache
    { const op = o.shout ?? 0.8; const m = new Path2D(); m.moveTo(-32, 104); m.quadraticCurveTo(0, 86, 32, 104); m.lineTo(26, 108 + 40 * op); m.quadraticCurveTo(0, 116 + 44 * op, -26, 108 + 40 * op); m.closePath(); ctx.fillStyle = '#3a0f0c'; ctx.fill(m); ctx.save(); ctx.clip(m); ctx.fillStyle = '#F1EADF'; ctx.fillRect(-34, 88, 68, 14); ctx.fillStyle = '#B5524A'; ctx.beginPath(); ctx.ellipse(0, 112 + 40 * op, 20, 12, 0, 0, MG.TAU); ctx.fill(); ctx.restore(); ctx.strokeStyle = OL; ctx.lineWidth = 3.5; ctx.stroke(m); }
    S5.form(ctx, [[-86, 92], [-60, 62], [-20, 58], [0, 66], [20, 58], [60, 62], [86, 92], [56, 82], [20, 84], [0, 80], [-20, 84], [-56, 82]], { color: '#18110e', shade: 0.2, hi: 0.3, hiColor: '#5a4a40', light: L, ow: 2.5, outline: '#000' });
    // tricorn
    S5.tricorn(ctx, 0, -92, 1.5, { light: L });
    ctx.restore();
  };

  /** small tourist (front 3/4, ~150 px tall at s=1): sunhat, sunglasses, loud shirt, shorts, sunburn. v = variant 0..7 */
  S5.tourist = (ctx, x, y, s, t, v, o = {}) => {
    const shirts = ['#E8644A', '#49A6E0', '#F2C14E', '#6FBF8A', '#E86FA8', '#F08A3C', '#7A6FD8', '#F4F0E6']; const shorts = ['#2E4A7A', '#C8A36A', '#3A3A44', '#E9E0CC', '#4E7A4A'];
    const sk = mix('#F1B79A', '#E8836A', (v % 3) / 2); const sh = shirts[v % 8], so = shorts[(v * 3) % 5]; const walk = o.walk || 0; const ph = tw(t) * 9 + v * 1.7;
    ctx.save(); ctx.translate(x, y); ctx.scale(s * (o.flip ? -1 : 1), s);
    MG.fx.contact(ctx, 0, 0, 40, 9, 0.35);
    const lg = walk ? Math.sin(ph) * 14 : 0; for (const sgn of [-1, 1]) { MG.fx.ink(ctx, [[sgn * 10, -62], [sgn * 12 + lg * sgn, -4]], { width: 13, color: sk, taper: [0, 0] }); ctx.fillStyle = '#2a2226'; ctx.beginPath(); ctx.ellipse(sgn * 12 + lg * sgn + 4, -2, 10, 5, 0, 0, MG.TAU); ctx.fill(); }
    S5.form(ctx, [[-24, -86], [24, -86], [26, -52], [-26, -52]], { poly: true, color: so, shade: 0.35, ow: 2.5 });
    S5.form(ctx, [[-28, -138], [28, -138], [34, -118], [26, -84], [-26, -84], [-34, -118]], { color: sh, shade: 0.4, hi: 0.3, ow: 2.5 });
    if (v % 2) { ctx.fillStyle = A('#ffffff', 0.55); for (let i = 0; i < 6; i++) { ctx.beginPath(); ctx.arc(-16 + (i % 3) * 16, -128 + Math.floor(i / 3) * 18, 4, 0, MG.TAU); ctx.fill(); } }
    const sw = walk ? Math.sin(ph + Math.PI) * 0.35 : 0.1; for (const sgn of [-1, 1]) MG.fx.ink(ctx, [[sgn * 28, -132], [sgn * (38 + 6), -100 + sw * 20 * sgn]], { width: 10, color: sk, taper: [0, 0.2] });
    if (v % 3 === 0) { ctx.fillStyle = '#1E1A1D'; ctx.fillRect(-12, -116, 22, 14); ctx.fillStyle = '#8a8a99'; ctx.beginPath(); ctx.arc(-1, -109, 4, 0, MG.TAU); ctx.fill(); ctx.strokeStyle = '#1E1A1D'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-22, -136); ctx.lineTo(-12, -112); ctx.moveTo(20, -136); ctx.lineTo(10, -112); ctx.stroke(); }
    S5.form(ctx, [[-20, -176], [20, -176], [24, -152], [12, -138], [-12, -138], [-24, -152]], { color: sk, shadeColor: '#B9665A', shade: 0.4, ow: 2.5 });
    ctx.fillStyle = '#1E1A1D'; ctx.fillRect(-17, -162, 14, 7); ctx.fillRect(3, -162, 14, 7); ctx.fillRect(-3, -160, 6, 2);
    S5.mouth(ctx, 0, -146, { w: 14, mood: v % 4 === 1 ? 'o' : 'smile', open: v % 4 === 1 ? 0.4 : 0 });
    const hat = v % 4 === 3 ? '#F2E3B0' : v % 4 === 2 ? '#E8644A' : '#EBD9A8'; S5.form(ctx, [[-40, -172], [-20, -190], [0, -194], [20, -190], [40, -172], [0, -166]], { color: hat, shade: 0.3, hi: 0.3, ow: 2.5 }); S5.form(ctx, [[-18, -178], [-14, -198], [14, -198], [18, -178]], { color: hat, shade: 0.35, ow: 2.5 });
    if (o.suitcase) { const sx2 = 34; S5.form(ctx, [[sx2, -60], [sx2 + 34, -60], [sx2 + 34, -4], [sx2, -4]], { poly: true, color: ['#E86F5A', '#49A6E0', '#2E2A30'][v % 3], shade: 0.35, hi: 0.3, ow: 2.5 }); ctx.strokeStyle = '#2a2226'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(sx2 + 17, -60); ctx.lineTo(sx2 + 17, -84); ctx.stroke(); }
    ctx.restore();
  };
  /** the local: elderly Mallorcan on his chair, flat cap, arms crossed, unimpressed */
  S5.local = (ctx, x, y, s, t, o = {}) => {
    const tt = tw(t); ctx.save(); ctx.translate(x, y); ctx.scale(s, s); MG.fx.contact(ctx, 0, 4, 90, 16, 0.4);
    ctx.strokeStyle = '#5a3a22'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(-44, 0); ctx.lineTo(-40, -96); ctx.moveTo(44, 0); ctx.lineTo(40, -96); ctx.moveTo(-36, 0); ctx.lineTo(-30, -96); ctx.stroke(); ctx.fillStyle = '#C8A36A'; ctx.fillRect(-50, -104, 100, 14); // chair
    S5.form(ctx, [[-48, -230], [-44, -280], [-30, -300], [-40, -300]], { color: '#5a3a22', ow: 2 });
    for (const sgn of [-1, 1]) { MG.fx.ink(ctx, [[sgn * 18, -110], [sgn * 30, -60], [sgn * 26, -6]], { width: 24, color: '#3a3438', taper: [0, 0] }); ctx.fillStyle = '#1a1416'; ctx.beginPath(); ctx.ellipse(sgn * 30, -4, 18, 8, 0, 0, MG.TAU); ctx.fill(); }
    S5.form(ctx, [[-46, -230], [46, -230], [52, -120], [-52, -120]], { color: '#F1ECE2', shade: 0.35, hi: 0.2, ow: 3 });
    MG.fx.ink(ctx, [[-44, -200], [20, -170], [44, -196]], { width: 26, color: '#F1ECE2', taper: [0.1, 0.1] }); MG.fx.ink(ctx, [[44, -200], [-20, -168], [-44, -192]], { width: 26, color: '#E6E0D4', taper: [0.1, 0.1] }); ctx.strokeStyle = OL; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-40, -186); ctx.quadraticCurveTo(0, -164, 40, -186); ctx.stroke(); // crossed arms
    S5.form(ctx, [[-30, -300], [30, -300], [36, -262], [20, -232], [-20, -232], [-36, -262]], { color: '#C98C6A', shadeColor: '#8a5a44', shade: 0.45, ow: 3, rim: '#FFE2B0' });
    MG.kit.brow(ctx, -14, -276, { w: 18, angle: 0.3, thick: 5, color: '#E8E0D8' }); MG.kit.brow(ctx, 14, -276, { w: 18, angle: -0.3, thick: 5, color: '#E8E0D8', flip: true });
    MG.kit.eye(ctx, -12, -266, { r: 6, look: o.look || [0.6, 0], blink: MG.kit.blink(tt, 61), skin: '#C98C6A', lid: 0.55 }); MG.kit.eye(ctx, 12, -266, { r: 6, look: o.look || [0.6, 0], blink: MG.kit.blink(tt, 61), skin: '#C98C6A', lid: 0.55 });
    S5.form(ctx, [[-4, -266], [-12, -248], [0, -244], [10, -250]], { color: '#C98C6A', shade: 0.5, ow: 2 }); ctx.fillStyle = '#E8E0D8'; ctx.beginPath(); ctx.ellipse(0, -238, 16, 5, 0, 0, MG.TAU); ctx.fill();
    S5.mouth(ctx, 0, -232, { w: 18, mood: 'frown' });
    S5.form(ctx, [[-38, -292], [-30, -314], [10, -318], [40, -304], [44, -292]], { color: '#4a4044', shade: 0.4, hi: 0.2, ow: 3 }); ctx.fillStyle = '#3a3034'; ctx.fillRect(18, -298, 32, 8); // flat cap
    ctx.restore();
  };

  /* =====================================================================
     MAP HELPERS
     ===================================================================== */
  S5.spainProj = (cx, cy, scale) => MG.geo.proj('spain', { center: [-3.6, 40.0], scale, translate: [cx, cy] });
  /** cached Spain (peninsula+Balearics) silhouette path at origin for card-like animation */
  /** Spain without the Canaries (they always go in their own inset box) */
  S5.spainMain = () => { if (S5._spm) return S5._spm; const es = MG.geo.country('Spain', '10'); const g = es.geometry; const polys = g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates]; S5._spm = { type: 'Feature', properties: { name: 'Spain' }, geometry: { type: 'MultiPolygon', coordinates: polys.filter((pl) => pl[0][0][1] > 33) } }; return S5._spm; };
  S5.spainPath = (scale) => { const k = 's5sp' + scale; if (S5[k]) return S5[k]; const pr = S5.spainProj(0, 0, scale); const es = S5.spainMain(); S5[k] = { p: MG.geo.path2d(pr, es), bb: MG.geo.bbox(pr, es), pr }; return S5[k]; };

  /** East Germany (GDR, not an EC member in 1986): Germany clipped east of the inner-German border.
   *  Border digitised through well-known crossing points (accurate to a few km at this scale). */
  S5.GDR_LINE = [[10.93, 54.10], [10.92, 53.95], [10.80, 53.75], [10.92, 53.60], [10.78, 53.50], [10.64, 53.38], [10.85, 53.25], [11.05, 53.15], [11.30, 53.10], [11.57, 53.04], [11.45, 52.96], [11.25, 52.91], [11.05, 52.88], [10.93, 52.83], [10.80, 52.74], [10.93, 52.62], [10.96, 52.45], [11.03, 52.30], [11.06, 52.21], [10.97, 52.10], [10.86, 52.02], [10.70, 51.95], [10.62, 51.87], [10.57, 51.80], [10.65, 51.72], [10.645, 51.58], [10.45, 51.55], [10.30, 51.49], [10.10, 51.40], [10.02, 51.35], [10.05, 51.25], [10.20, 51.18], [10.15, 51.00], [10.00, 50.84], [9.97, 50.73], [10.07, 50.60], [10.37, 50.48], [10.60, 50.35], [10.85, 50.38], [11.15, 50.35], [11.30, 50.42], [11.45, 50.52], [11.62, 50.40], [11.85, 50.40], [11.95, 50.42], [12.10, 50.32]];
  S5.gdr = () => { if (S5._gdr) return S5._gdr; const ring = [...S5.GDR_LINE, [12.5, 50.15], [16.5, 50.0], [16.5, 55.2], [10.93, 55.2], S5.GDR_LINE[0]]; S5._gdr = { type: 'Feature', geometry: { type: 'Polygon', coordinates: [ring.slice().reverse()] } }; return S5._gdr; };
  S5.EC10 = ['Belgium', 'France', 'Germany', 'Italy', 'Luxembourg', 'Netherlands', 'Denmark', 'Ireland', 'United Kingdom', 'Greece'];
  S5.CAP = { Belgium: [4.35, 50.85], France: [2.35, 48.86], Germany: [7.10, 50.73], Italy: [12.50, 41.90], Luxembourg: [6.13, 49.61], Netherlands: [4.90, 52.37], Denmark: [12.57, 55.68], Ireland: [-6.26, 53.35], 'United Kingdom': [-0.13, 51.51], Greece: [23.73, 37.98], Spain: [-3.70, 40.42], Portugal: [-9.14, 38.72] };
  /** Spain's main motorways (autovías) as station polylines (lon,lat) */
  S5.ROADS = [
    [[-3.70, 40.42], [-3.69, 41.0], [-3.70, 42.34], [-2.67, 42.85], [-1.98, 43.32]],
    [[-3.70, 40.42], [-3.17, 40.63], [-1.64, 41.35], [-0.88, 41.66], [0.62, 41.62], [2.17, 41.39]],
    [[-3.70, 40.42], [-2.75, 40.10], [-1.85, 39.65], [-0.38, 39.47]],
    [[-3.70, 40.42], [-3.60, 40.03], [-3.48, 38.90], [-3.79, 38.27], [-4.78, 37.88], [-5.98, 37.39], [-6.29, 36.53]],
    [[-3.70, 40.42], [-4.83, 39.96], [-5.80, 39.72], [-6.34, 38.92], [-6.97, 38.88]],
    [[-3.70, 40.42], [-4.10, 40.94], [-5.10, 41.50], [-5.57, 42.60], [-6.60, 42.55], [-7.56, 43.01], [-8.41, 43.36]],
    [[2.17, 41.39], [1.24, 41.12], [0.52, 40.81], [-0.04, 39.99], [-0.38, 39.47], [-0.48, 38.35], [-1.13, 37.99], [-2.46, 36.84], [-3.60, 36.75], [-4.42, 36.72]],
    [[-1.98, 43.32], [-2.93, 43.26], [-3.80, 43.46], [-5.66, 43.54], [-5.84, 43.36]],
    [[-5.66, 43.54], [-5.57, 42.60], [-5.66, 40.97], [-6.37, 39.47], [-6.34, 38.92], [-5.98, 37.39]],
  ];
  S5.BRIDGES = [[-4.83, 39.96], [-4.78, 37.88], [-0.88, 41.66], [-6.0, 37.40], [-8.41, 43.36 - 0.3]];
  S5.AIRPORTS = [[-3.57, 40.49], [2.08, 41.30], [2.74, 39.55], [-4.50, 36.68], [-0.56, 38.28], [-5.90, 37.42], [-2.91, 43.30], [-0.48, 39.49]];
  /** high-speed lines (as of 2025) through their stations; first entry = Madrid–Seville 1992 */
  S5.HSR = [
    { y: 1992, pts: [[-3.69, 40.41], [-3.85, 39.97], [-3.93, 38.98], [-4.11, 38.69], [-4.79, 37.89], [-5.98, 37.39]] },
    { y: 2003, pts: [[-3.69, 40.41], [-3.10, 40.57], [-1.64, 41.35], [-0.91, 41.66], [0.63, 41.62]] },
    { y: 2005, pts: [[-3.85, 39.97], [-4.03, 39.86]] },
    { y: 2005, pts: [[-0.91, 41.66], [-0.41, 42.14]] },
    { y: 2007, pts: [[-4.79, 37.89], [-4.77, 37.39], [-4.56, 37.02], [-4.43, 36.71]] },
    { y: 2007, pts: [[-3.69, 40.41], [-3.90, 40.70], [-4.10, 40.94], [-4.73, 41.65]] },
    { y: 2008, pts: [[0.63, 41.62], [1.20, 41.19], [2.14, 41.38]] },
    { y: 2010, pts: [[-3.69, 40.41], [-2.55, 40.05], [-2.14, 40.07], [-1.91, 39.56], [-1.10, 39.49], [-0.38, 39.47]] },
    { y: 2011, pts: [[-8.72, 42.24], [-8.54, 42.88], [-8.41, 43.36]] },
    { y: 2013, pts: [[2.14, 41.38], [2.82, 41.98], [2.95, 42.27], [2.87, 42.45]] },
    { y: 2013, pts: [[-1.91, 39.56], [-1.86, 38.99], [-0.86, 38.63], [-0.49, 38.34]] },
    { y: 2015, pts: [[-4.73, 41.65], [-4.53, 42.01], [-5.57, 42.60]] },
    { y: 2015, pts: [[-4.68, 41.29], [-5.75, 41.50]] },
    { y: 2018, pts: [[-0.38, 39.47], [-0.04, 39.98]] },
    { y: 2019, pts: [[-4.56, 37.02], [-4.15, 37.17], [-3.60, 37.18]] },
    { y: 2021, pts: [[-5.75, 41.50], [-6.60, 42.00], [-7.86, 42.34], [-8.54, 42.88]] },
    { y: 2022, pts: [[-4.53, 42.01], [-3.70, 42.34]] },
    { y: 2022, pts: [[-0.73, 38.38], [-0.70, 38.27], [-0.94, 38.08], [-1.13, 37.99]] },
    { y: 2022, pts: [[-6.09, 40.03], [-6.37, 39.47], [-6.34, 38.92], [-6.97, 38.88]] },
    { y: 2023, pts: [[-5.57, 42.60], [-5.62, 42.80], [-5.83, 43.16], [-5.84, 43.36]] },
  ];
  /** draw a polyline (lon/lat) projected, with progress, as an ink road with casing */
  S5.roadLine = (ctx, pr, ll, k, o = {}) => { if (k <= 0) return null; const pts = ll.map((c) => pr(c)); const sub = MG.path.trim(pts, 0, k); if (sub.length < 2) return null; ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = o.casing || 'rgba(40,25,20,0.55)'; ctx.lineWidth = (o.w || 5) + 3; ctx.beginPath(); sub.forEach((q, i) => (i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]))); ctx.stroke(); ctx.strokeStyle = o.color || '#FFF6E2'; ctx.lineWidth = o.w || 5; ctx.stroke(); if (o.dash) { ctx.setLineDash(o.dash); ctx.strokeStyle = o.dashColor || '#222'; ctx.lineWidth = (o.w || 5) * 0.6; ctx.stroke(); } ctx.restore(); return sub[sub.length - 1]; };
  /** a small paper bridge prop (arched, 2.5D) */
  S5.bridgeProp = () => MG.cache('s5bridgeProp', 120, 70, (x, w, h) => { const p = new Path2D(); p.rect(6, 22, 108, 40); for (let i = 0; i < 3; i++) { const a0 = 12 + i * 34, a1 = a0 + 28; p.moveTo(a0, 64); p.lineTo(a0, 46); p.ellipse(a0 + 14, 46, 14, 14, 0, Math.PI, 0); p.lineTo(a1, 64); p.closePath(); } x.save(); x.translate(4, 6); x.fillStyle = 'rgba(30,15,10,0.35)'; x.fill(p, 'evenodd'); x.restore(); x.fillStyle = '#FFF4DC'; x.fill(p, 'evenodd'); x.strokeStyle = '#2a1a16'; x.lineWidth = 2; x.stroke(p); x.fillStyle = '#B8322A'; x.fillRect(4, 14, 112, 8); x.strokeRect(4, 14, 112, 8); });
  /** a small plane silhouette (top view) */
  S5.plane = (ctx, x, y, s, a, c = '#FBF6EE') => { ctx.save(); ctx.translate(x, y); ctx.rotate(a); ctx.scale(s, s); ctx.fillStyle = c; ctx.strokeStyle = 'rgba(30,20,20,0.6)'; ctx.lineWidth = 1.2 / s; const p = new Path2D(); p.moveTo(14, 0); p.quadraticCurveTo(12, -2, 4, -2); p.lineTo(-2, -12); p.lineTo(-5, -12); p.lineTo(-2, -2); p.lineTo(-9, -2); p.lineTo(-12, -6); p.lineTo(-14, -6); p.lineTo(-12, 0); p.lineTo(-14, 6); p.lineTo(-12, 6); p.lineTo(-9, 2); p.lineTo(-2, 2); p.lineTo(-5, 12); p.lineTo(-2, 12); p.lineTo(4, 2); p.quadraticCurveTo(12, 2, 14, 0); p.closePath(); ctx.fill(p); ctx.stroke(p); ctx.restore(); };

  /* =====================================================================
     SCENES
     ===================================================================== */
  const scenes = [];
  const add = (s) => { scenes.push(s); return s; };

  /* ---------- 01 · DAWN ------------------------------------------------ */
  const DAWN = { sx: 1230, sy0: 820, sy1: 470 };
  add({
    id: 's05_dawn', start: 681.58,
    transIn: { type: S5.trDawn(DAWN.sx, 740), dur: 1.5, ease: 'linear' },
    init() {
      this.far = S5.ridge('far', 2400, 520, { top: '#8E7FA6', bot: '#B79BA8', freq: 2.4, amp: 0.32, base: 0.62, seed: 4 });
      this.mid = S5.ridge('mid', 2400, 520, { top: '#7A6175', bot: '#9C7B78', freq: 3.6, amp: 0.22, base: 0.6, seed: 9, lift: 0.05 });
      this.near = S5.ridge('near', 2400, 420, { top: '#6A4F5A', bot: '#53404a', freq: 2.0, amp: 0.12, base: 0.38, seed: 13 });
      // village + fields sprite (white houses, church tower, olive dots) — on the mid plain
      this.village = MG.cache('s5village', 900, 300, (x, w, h) => {
        const r = MG.rng(21);
        for (let i = 0; i < 26; i++) { const bx = 120 + r() * 640, bw = 40 + r() * 50, bh = 30 + r() * 34, by = 220 - r() * 40; x.fillStyle = 'rgba(70,40,70,0.3)'; x.beginPath(); x.moveTo(bx, by); x.lineTo(bx - bh * 1.8, by + 8); x.lineTo(bx - bh * 1.8 + bw * 0.6, by + 16); x.lineTo(bx + bw, by); x.closePath(); x.fill(); const p = MG.path.poly([[bx, by], [bx + bw, by], [bx + bw, by - bh], [bx + bw * 0.5, by - bh - 14], [bx, by - bh]]); x.fillStyle = '#F4ECDD'; x.fill(p); x.fillStyle = 'rgba(70,50,70,0.35)'; x.fillRect(bx + bw * 0.55, by - bh, bw * 0.45, bh); x.fillStyle = '#B5583A'; x.beginPath(); x.moveTo(bx - 3, by - bh); x.lineTo(bx + bw * 0.5, by - bh - 14); x.lineTo(bx + bw + 3, by - bh); x.closePath(); x.fill(); x.fillStyle = 'rgba(40,25,30,0.55)'; x.fillRect(bx + bw * 0.25, by - bh * 0.55, 6, 9); }
        // church tower
        x.fillStyle = '#EFE5D2'; x.fillRect(430, 60, 46, 140); x.fillStyle = 'rgba(70,50,70,0.35)'; x.fillRect(456, 60, 20, 140); x.fillStyle = '#B5583A'; x.beginPath(); x.moveTo(424, 62); x.lineTo(453, 18); x.lineTo(482, 62); x.closePath(); x.fill(); x.fillStyle = '#3a2a30'; x.beginPath(); x.arc(453, 88, 9, Math.PI, 0); x.lineTo(462, 104); x.lineTo(444, 104); x.fill();
        for (let i = 0; i < 70; i++) { const ox = r() * w, oy = 230 + r() * 60; MG.fx.volume(x, MG.path.blob(ox, oy, 7 + r() * 5, { seed: i }), [ox - 12, oy - 12, 24, 24], { color: '#5E6A38', shade: 0.5, hi: 0.2, cel: true }); }
      });
      this.fields = MG.cache('s5fields2', 2400, 420, (x, w, h) => {
        const edge = []; for (let i = 0; i <= 80; i++) { const u = i / 80; edge.push([u * w, 34 + MG.fbm(u * 5 + 3, 1.7, 3) * 26 + Math.sin(u * 7) * 6]); } const clip = MG.path.poly([...edge, [w, h], [0, h]]); x.save(); x.clip(clip);
        const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, '#C49A72'); g.addColorStop(0.4, '#A87A58'); g.addColorStop(1, '#7E5444'); x.fillStyle = g; x.fillRect(0, 0, w, h);
        x.strokeStyle = 'rgba(70,40,40,0.25)'; x.lineWidth = 2; for (let i = 0; i < 70; i++) { const u = i / 70; x.beginPath(); x.moveTo(w * 0.5 + (u - 0.5) * 300, 0); x.lineTo(w * 0.5 + (u - 0.5) * 5200, h); x.stroke(); }
        MG.tex.over(x, 'blotch', { alpha: 0.3, color: '#3a2020', scale: 3 }); MG.tex.over(x, 'fibers', { alpha: 0.6 });
        const r = MG.rng(5); for (let i = 0; i < 110; i++) { const yy = 40 + Math.pow(r(), 1.6) * (h - 40); const s = 4 + yy / h * 22; const xx = r() * w; x.fillStyle = 'rgba(60,30,50,0.28)'; x.beginPath(); x.ellipse(xx - s * 1.6, yy + s * 0.5, s * 2.2, s * 0.35, 0, 0, MG.TAU); x.fill(); MG.fx.volume(x, MG.path.blob(xx, yy, s, { seed: i + 3 }), [xx - s, yy - s, s * 2, s * 2], { color: '#56603A', shade: 0.55, hi: 0.25, hiColor: '#C9C27A', cel: true, light: [0.7, -0.6] }); }
        // a white dirt road winding to the village
        x.strokeStyle = 'rgba(240,215,175,0.85)'; x.lineCap = 'round'; for (let k = 0; k < 2; k++) { x.lineWidth = k ? 6 : 14; x.globalAlpha = k ? 0.5 : 1; x.beginPath(); x.moveTo(1180, 30); x.bezierCurveTo(1100, 140, 1420, 220, 1250, h + 20); x.stroke(); } x.globalAlpha = 1;
        x.restore();
      });
      this.grass = MG.cache('s5grass', 2400, 260, (x, w, h) => { const r = MG.rng(17); x.fillStyle = '#2a1d24'; x.fillRect(0, 150, w, h - 150); for (let i = 0; i < 900; i++) { const gx = r() * w, gh = 40 + r() * 120, lean = (r() - 0.4) * 40; x.strokeStyle = r() < 0.5 ? '#2a1d24' : '#3a2a28'; x.lineWidth = 2 + r() * 4; x.beginPath(); x.moveTo(gx, h); x.quadraticCurveTo(gx + lean * 0.3, h - gh * 0.6, gx + lean, h - gh); x.stroke(); } for (let i = 0; i < 40; i++) { const gx = r() * w, gy = 70 + r() * 60; x.fillStyle = '#3a2a28'; x.beginPath(); x.ellipse(gx, gy, 5, 9, r(), 0, MG.TAU); x.fill(); } });
      this.olive = MG.cache('s5olive', 760, 900, (x, w, h) => {
        x.save(); x.strokeStyle = '#2E2226'; x.lineCap = 'round';
        const trunk = [[380, 900], [372, 760], [350, 640], [372, 540], [340, 430]]; MG.fx.ink(x, trunk, { width: 70, color: '#3a2a2a', taper: [0, 0.6] }); MG.fx.ink(x, [[360, 600], [470, 470], [540, 380]], { width: 34, color: '#3a2a2a', taper: [0, 0.7] }); MG.fx.ink(x, [[352, 520], [230, 420], [170, 330]], { width: 30, color: '#3a2a2a', taper: [0, 0.7] });
        x.restore(); const r = MG.rng(8); for (let i = 0; i < 46; i++) { const a = r() * MG.TAU, d = Math.sqrt(r()); const bx = 360 + Math.cos(a) * d * 300, by = 330 + Math.sin(a) * d * 190; const s = 40 + r() * 50; MG.fx.volume(x, MG.path.blob(bx, by, s, { seed: i + 30, irr: 0.25 }), [bx - s, by - s, s * 2, s * 2], { color: '#46502E', shadeColor: '#1f2216', shade: 0.6, hi: 0.25, hiColor: '#9aa65a', cel: true }); }
      });
    },
    draw(ctx, t, S) {
      const t0 = 681.58; const u = li(t, t0 + 0.2, 686.0); const rise = E.inOutSine(u);
      const sy = lerp(DAWN.sy0, DAWN.sy1, E.outCubic(li(t, t0, 686.6)));
      // sky: night violet → dawn
      const top = mix('#2A2340', '#7E6E9C', rise), midc = mix('#4A3550', '#E59A7A', rise), hor = mix('#6A4458', '#FFD39A', rise);
      S5.sky(ctx, [[0, top], [0.55, midc], [0.78, hor], [1, hor]], 0, 780);
      ctx.fillStyle = hor; ctx.fillRect(0, 760, W, H - 760);
      // stars fading
      ctx.save(); for (let i = 0; i < 70; i++) { const a = (1 - rise) * 0.8 * MG.rand(3, i); if (a < 0.02) continue; ctx.fillStyle = A('#fff6e0', a); ctx.beginPath(); ctx.arc(MG.rand(4, i) * W, MG.rand(5, i) * 420, 1 + MG.rand(6, i) * 1.4, 0, MG.TAU); ctx.fill(); } ctx.restore();
      // camera: slow crane up with parallax
      const cy = lerp(40, -30, E.inOutSine(li(t, t0, 687))); const hh = MG.cam.handheld(t, 2.5, 7);
      const layer = (img, x, y, k, o = {}) => MG.sprite(ctx, img, x + hh.dx * k, y + cy * k + hh.dy * k, { ax: 0, ay: 0, ...o });
      // sun + rays
      MG.fx.rays(ctx, DAWN.sx, sy, { n: 11, len: 1500, spread: 2.4, dir: -Math.PI / 2, alpha: 0.12 * rise, t, color: '#FFE1A8' });
      MG.kit.sun(ctx, DAWN.sx + hh.dx * 0.1, sy + cy * 0.1, 92, t, { corona: 0.9 * (0.4 + rise), rays: 0.25 + 0.35 * rise, halftone: 0.5 });
      // ridges (lit by the dawn: overlay warm wash)
      layer(this.far, -240, 330, 0.25); layer(this.mid, -240, 420, 0.45);
      // fields & village
      // morning mist between the ridges
      ctx.save(); const mg = ctx.createLinearGradient(0, 560, 0, 720); mg.addColorStop(0, A('#FFE6C8', 0)); mg.addColorStop(0.5, A('#FFE6C8', 0.35 * rise + 0.08)); mg.addColorStop(1, A('#FFE6C8', 0)); ctx.fillStyle = mg; ctx.fillRect(0, 560 + cy * 0.5, W, 160); ctx.restore();
      layer(this.fields, -240, 650, 0.7); layer(this.village, 470, 440, 0.6);
      // birds crossing the dawn sky (on twos)
      { const tb = tw(t); ctx.save(); ctx.strokeStyle = A('#3a2a3a', 0.7); ctx.lineWidth = 2.2; ctx.lineCap = 'round'; for (let i = 0; i < 7; i++) { const bx = 760 + (tb - t0) * 55 + i * 34 + MG.rand(31, i) * 40, by = 430 + MG.rand(32, i) * 50 + Math.sin(tb * 2 + i) * 4; const f = Math.sin(tb * 9 + i * 1.7) * 6; ctx.beginPath(); ctx.moveTo(bx - 9, by - f); ctx.quadraticCurveTo(bx - 4, by - 3, bx, by); ctx.quadraticCurveTo(bx + 4, by - 3, bx + 9, by - f); ctx.stroke(); } ctx.restore(); }
      // warm light wash sweeps across from the sun (the night shadow retreats)
      const edge = lerp(W + 400, -600, E.inOutCubic(li(t, t0 + 0.6, 686.2)));
      ctx.save(); ctx.globalCompositeOperation = 'multiply'; const sg = ctx.createLinearGradient(edge - 260, 0, edge + 260, 0); sg.addColorStop(0, 'rgba(58,43,70,0.62)'); sg.addColorStop(1, 'rgba(58,43,70,0)'); ctx.fillStyle = sg; ctx.fillRect(0, 300, W, H); ctx.restore();
      ctx.save(); ctx.globalCompositeOperation = 'soft-light'; ctx.globalAlpha = 0.55 * rise; ctx.fillStyle = '#FFB066'; ctx.fillRect(0, 0, W, H); ctx.restore();
      // foreground olive tree (out of focus, parallax)
      MG.sprite(ctx, this.grass, -240 + hh.dx * 1.8, 860 + cy * 1.5 + hh.dy * 1.6, { ax: 0, ay: 0, blur: 5 });
      MG.sprite(ctx, this.olive, -160 + hh.dx * 1.6, 230 + cy * 1.3 + hh.dy * 1.4, { ax: 0, ay: 0, scale: 1.05, blur: 6 });
      // type in the sky (spoken)
      S5.spoken(ctx, 'something very few countries', 683.5, 150, 214, t, { font: F.serif, italic: true, weight: 400, size: 62, color: A('#FFF3DE', 0.92), style: 'blur' });
      S5.spoken(ctx, 'have managed.', 685.18, 146, 330, t, { font: F.display, weight: 800, size: 118, color: '#FFF3DE', style: 'rise' });
    },
    post: { grade: 'golden', vignette: 0.42, bloom: 0.12, halation: 0.1 },
  });

  /* ---------- 02 · CHOSEN SUCCESSOR ------------------------------------ */
  add({
    id: 's05_chosen', start: 686.40,
    transIn: { type: 'push', dir: 'up', dur: 0.7, ease: 'inOutCubic' },
    init() {
      this.wall = MG.cache('s5wall', W + 200, H + 200, (x, w, h) => {
        x.fillStyle = '#7B2E2A'; x.fillRect(0, 0, w, h); // damask red wall
        x.save(); x.globalAlpha = 0.18; x.fillStyle = '#E8B86A'; for (let j = 0; j < 14; j++) for (let i = 0; i < 22; i++) { const cx = i * 100 + (j % 2) * 50, cy = j * 90; x.beginPath(); x.ellipse(cx, cy, 16, 30, 0, 0, MG.TAU); x.fill(); x.beginPath(); x.moveTo(cx, cy - 44); x.lineTo(cx + 10, cy - 30); x.lineTo(cx, cy - 22); x.lineTo(cx - 10, cy - 30); x.fill(); } x.restore();
        MG.tex.over(x, 'blotch', { alpha: 0.35, color: '#2a0d0d', scale: 3 }); MG.tex.over(x, 'fibers', { alpha: 0.6 });
        // wainscot
        x.fillStyle = '#4a2a1e'; x.fillRect(0, h - 300, w, 300); x.fillStyle = 'rgba(255,220,160,0.12)'; x.fillRect(0, h - 300, w, 8);
        for (let i = 0; i < 12; i++) { x.strokeStyle = 'rgba(20,10,5,0.4)'; x.lineWidth = 3; x.strokeRect(30 + i * 190, h - 260, 150, 200); }
      });
      this.portrait = S5.francoPortrait('a', 440, 560);
    },
    draw(ctx, t, S) {
      const t0 = S.t0; const tJ = T('King', 686.54), tF = T('Franco', 688.30), tS = T('successor', 690.29);
      const hh = MG.cam.handheld(t, 2.5, 9); const dolly = lerp(0, -40, E.inOutSine(li(t, t0, 691.2)));
      // rack focus: JC sharp → portrait sharp at "Franco" → JC sharp at "successor"
      const fP = pr(t, tF - 0.1, tF + 0.5, 'inOutCubic') * (1 - pr(t, tS - 0.3, tS + 0.3, 'inOutCubic'));
      const bgBlur = lerp(7, 0, fP), fgBlur = lerp(0, 6, fP);
      ctx.save(); ctx.translate(hh.dx * 0.4 + dolly * 0.4, hh.dy * 0.4);
      MG.sprite(ctx, this.wall, -100, -100, { ax: 0, ay: 0, blur: bgBlur * 0.8 });
      MG.sprite(ctx, this.portrait, 520, 400, { blur: bgBlur, scale: 0.95 });
      // window light: sol/sombra diagonal across the wall — the portrait falls into shade
      ctx.save(); ctx.globalCompositeOperation = 'soft-light'; ctx.fillStyle = A('#FFD9A0', 0.7); ctx.beginPath(); ctx.moveTo(700, 0); ctx.lineTo(W + 200, 0); ctx.lineTo(W + 200, H); ctx.lineTo(1150, H); ctx.closePath(); ctx.fill(); ctx.restore();
      ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = A('#3A2B4A', 0.55); ctx.beginPath(); ctx.moveTo(-200, 0); ctx.lineTo(700, 0); ctx.lineTo(1150, H); ctx.lineTo(-200, H); ctx.closePath(); ctx.fill(); ctx.restore();
      ctx.restore();
      // gold thread from portrait to JC ("successor")
      const kL = pr(t, tF + 0.6, tS + 0.2, 'inOutCubic');
      if (kL > 0) { const pts = []; for (let i = 0; i <= 40; i++) { const u = i / 40; pts.push([lerp(640, 1180, u) + dolly * 0.4, lerp(330, 300, u) - Math.sin(u * Math.PI) * 110]); } MG.fx.line(ctx, pts, { progress: kL, color: '#E8C36A', width: 4, dash: [2, 10], head: 8, headColor: '#FFE2A0' }); }
      S5.kick(ctx, 'Franco', 520 + dolly * 0.4, 730, t, tF, { color: A('#F2E8D5', 0.85), align: 'center', size: 22 });
      if (t > tS - 0.1) S5.kick(ctx, 'his chosen successor', 900, 205, t, tS - 0.05, { color: '#F7DC9C', align: 'center', size: 22 });
      // JC
      const bust = (c) => S5.jc(c, 1270 + dolly, 470, 1.18, t, { look: t > tF && t < tS ? [-0.7, -0.15] : [-0.35, 0.05], brow: t > tF && t < tS ? 0.3 : 0.05, light: [-0.75, -0.6], rim: '#FFE7B8' });
      if (fgBlur > 0.6) { const c = MG.scratch(4); const x = c.getContext('2d'); MG.reset(x); x.clearRect(0, 0, W, H); bust(x); ctx.save(); ctx.filter = `blur(${fgBlur.toFixed(1)}px)`; ctx.drawImage(c, 0, 0); ctx.restore(); } else bust(ctx);
      // name tag
      MG.kit.tag(ctx, t, tJ + 0.1, 'Juan Carlos I', { x: 1380, y: 900, sub: 'King of Spain · 1975', size: 46, bg: P.ink, color: P.cal, subColor: '#F2E8D5' });
    },
    post: { grade: 'warm', vignette: 0.45, grain: 0.05 },
  });

  /* ---------- 03 · TURN SPAIN INTO A DEMOCRACY (3 years) --------------- */
  add({
    id: 's05_turn', start: 691.10,
    init() {
      this.table = MG.cache('s5table', W + 200, H + 200, (x, w, h) => { const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, '#E9DCC0'); g.addColorStop(1, '#D9C7A5'); x.fillStyle = g; x.fillRect(0, 0, w, h); MG.tex.over(x, 'blotch', { alpha: 0.18, color: '#6a4a2a', scale: 3 }); MG.tex.over(x, 'fibers', { alpha: 0.9 }); });
    },
    draw(ctx, t, S) {
      const t0 = S.t0; const tTurn = T('turn', 691.50), tDem = T('democracy', 692.53), tThree = T('three', 693.89), tYears = T('years', 694.38), tJust = T('just', 693.58);
      const hh = MG.cam.handheld(t, 2, 12); ctx.save(); const zoom = lerp(1.06, 1, E.out(li(t, t0, t0 + 1.4))); MG.cam.apply(ctx, { x: lerp(820, 960, E.inOutSine(li(t, t0, 695.5))), y: 540, zoom, dx: hh.dx, dy: hh.dy, rot: hh.rot });
      MG.sprite(ctx, this.table, -100, -100, { ax: 0, ay: 0 });
      // window shadow (sombra) lying on the table slides away as the card turns
      const sh = pr(t, tTurn, tTurn + 1.4, 'inOutCubic');
      ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = A('#3A2B4A', 0.42 * (1 - sh)); ctx.beginPath(); ctx.moveTo(-200, -100); ctx.lineTo(lerp(1400, -500, sh), -100); ctx.lineTo(lerp(800, -1100, sh), H + 100); ctx.lineTo(-200, H + 100); ctx.closePath(); ctx.fill(); ctx.restore();
      // the Spain card flip
      const sp = S5.spainPath(3200); const [bx, by, bw, bh] = sp.bb; const cx = 640, cy = 500;
      const fk = pr(t, tTurn - 0.15, tTurn + 0.75, 'inOutCubic'); const ang = fk * Math.PI; const sx = Math.max(0.02, Math.abs(Math.cos(ang))); const back = ang > Math.PI / 2; const lift = Math.sin(ang) * 80;
      MG.fx.contact(ctx, cx + 20, cy + bh * 0.48 + 20, bw * 0.48 * sx + 40, 46, 0.3 - lift / 500);
      ctx.save(); ctx.translate(cx, cy - lift); ctx.scale(sx, 1); ctx.rotate(Math.sin(ang) * 0.05); ctx.translate(-(bx + bw / 2), -(by + bh / 2));
      for (let i = 10; i >= 1; i--) { ctx.save(); ctx.translate(0, i * 1.7); ctx.fillStyle = mix(back ? P.solDeep : '#3b2d40', '#1b1226', i / 12); ctx.fill(sp.p); ctx.restore(); }
      if (!back) { MG.fx.volume(ctx, sp.p, sp.bb, { color: '#5C4A63', shadeColor: '#2a1f30', shade: 0.4, hi: 0.15, tex: 'blotch', texAlpha: 0.3 }); MG.fx.halftone(ctx, sp.p, sp.bb, { spacing: 9, color: 'rgba(20,10,25,0.35)', cut: 0.2 }); ctx.strokeStyle = A(P.cal, 0.35); ctx.lineWidth = 2; ctx.stroke(sp.p); }
      else { MG.fx.volume(ctx, sp.p, sp.bb, { color: P.sol, shadeColor: P.solDeep, shade: 0.45, hi: 0.45, hiColor: '#FFE2A8', tex: 'blotch', texAlpha: 0.2 }); MG.fx.halftone(ctx, sp.p, sp.bb, { spacing: 10, color: A(P.solDeep, 0.35), cut: 0.45 }); ctx.strokeStyle = A(P.ink, 0.6); ctx.lineWidth = 2; ctx.stroke(sp.p); }
      ctx.restore();
      // Canary Islands tile riding beside the card (always boxed)
      { ctx.save(); const k = Math.max(0.02, sx); ctx.translate(cx - 300, cy + 250 - lift * 0.6); ctx.scale(k, 1); MG.fx.shadow(ctx, MG.path.rr(-95, -48, 190, 96, 4), { dx: 6, dy: 10, blur: 14, color: 'rgba(40,20,10,0.25)', fill: '#E9DCC0' }); MG.geo.canaryInset(ctx, [-95, -48, 190, 96], { fill: back ? P.sol : '#5C4A63', label: 'CANARIES', frame: A(P.ink, 0.45) }); ctx.restore(); }
      if (back) { const m = sp.pr(MG.geo.cities.Madrid); S5.key(ctx, 'DEMOCRACY', cx + (m[0] - bx - bw / 2) * sx, cy - lift + (m[1] - by - bh / 2) + 18, t, Math.max(tDem - 0.05, tTurn + 0.65), { size: 50, color: P.ink, align: 'center', tracking: 0.1, weight: 800 }); }
      // the king's hand (army sleeve, gold cuff) pushing the edge over
      const hk = pr(t, t0, tTurn - 0.1) * (1 - pr(t, tTurn + 0.55, tTurn + 1.2, 'in'));
      if (hk > 0.01) {
        const hx = lerp(1700, cx + bw * 0.5 * sx + 10, hk) - (back ? 300 * pr(t, tTurn + 0.15, tTurn + 0.6) : 0), hy = cy + 40 - lift * 0.9;
        const sl = [[hx + 30, hy - 46], [hx + 300, hy - 92], [W + 300, hy - 150], [W + 300, hy + 140], [hx + 300, hy + 92], [hx + 40, hy + 48]];
        S5.form(ctx, sl, { color: '#4F4A33', shadeColor: '#2E2B1E', shade: 0.5, rim: '#FFE2B0', ow: 4 });
        ctx.save(); ctx.strokeStyle = '#D8B15A'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(hx + 74, hy - 52); ctx.lineTo(hx + 84, hy + 54); ctx.stroke(); ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(hx + 96, hy - 56); ctx.lineTo(hx + 106, hy + 58); ctx.stroke(); ctx.restore();
        MG.kit.hand(ctx, hx + 36, hy + 2, { pose: 'open', angle: Math.PI / 2 + 0.2, s: 1.45, skin: SKIN });
      }
      // right column: "in just 3 years" + a ruler 1975 → 1978 with three hops
      const X0 = 1080, DX = 210; const X = (i) => X0 + i * DX, Y = 870;
      const kT = pr(t, tDem - 0.2, tDem + 0.5);
      if (kT > 0) {
        ctx.save(); ctx.globalAlpha = kT; ctx.strokeStyle = A(P.ink, 0.75); ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(X(0) - 40, Y); ctx.lineTo(X(0) - 40 + (X(3) - X(0) + 80) * kT, Y); ctx.stroke();
        for (let i = 0; i <= 36; i++) { const xx = X(0) + i * DX / 12; if (xx > X(0) - 40 + (X(3) - X(0) + 80) * kT) break; ctx.lineWidth = i % 12 ? 1.5 : 3; ctx.beginPath(); ctx.moveTo(xx, Y); ctx.lineTo(xx, Y + (i % 12 ? 10 : 18)); ctx.stroke(); }
        [1975, 1976, 1977, 1978].forEach((yv, i) => MG.text.draw(ctx, String(yv), X(i), Y + 54, { font: F.mono, size: 30, weight: 600, color: P.ink, align: 'center', tracking: 0.06 }));
        ctx.restore();
        for (let i = 0; i < 3; i++) { const a0 = tThree - 0.4 + i * 0.3; const kh = pr(t, a0, a0 + 0.45, 'inOutCubic'); if (kh <= 0) continue; const pts = []; for (let j = 0; j <= 30; j++) { const u = j / 30; pts.push([lerp(X(i), X(i + 1), u), Y - 8 - Math.sin(u * Math.PI) * 120]); } MG.fx.line(ctx, pts, { progress: kh, color: P.solDeep, width: 7, head: 10 }); if (kh >= 1) { MG.fx.contact(ctx, X(i + 1), Y, 18, 5, 0.4); } }
      }
      S5.lead(ctx, 'in just', 1086, 380, t, tJust - 0.08, { size: 60 });
      S5.num(ctx, '3', 1080, 690, t, tThree - 0.05, { size: 360, color: P.ink });
      S5.key(ctx, 'years', 1250, 690, t, tYears - 0.08, { size: 120, font: F.display, weight: 800 });
      ctx.restore();
    },
    post: { grade: 'warm', vignette: 0.34 },
  });

  /* ---------- 04 · ALL PARTIES LEGAL (hemicycle 1977) ------------------- */
  // 1977 election (first free vote after legalisation): seats left→right of the chamber diagram
  const PARTIES77 = [['PCE', 20, '#9E1F1A'], ['PSP', 6, '#D9826A'], ['PSOE', 118, '#C8574A'], ['REG', 25, '#8E9A5A'], ['UCD', 165, '#E3A24A'], ['AP', 16, '#3E6FA8']];
  S5.hemi = () => {
    if (S5._hemi) return S5._hemi; const rows = 10; const seats = []; let total = 0; const R0 = 300, R1 = 980; const radii = []; for (let r = 0; r < rows; r++) radii.push(lerp(R0, R1, r / (rows - 1)));
    const sum = radii.reduce((a, b) => a + b, 0); const counts = radii.map((R) => Math.round(350 * R / sum)); let diff = 350 - counts.reduce((a, b) => a + b, 0); counts[rows - 1] += diff;
    radii.forEach((R, r) => { const n = counts[r]; for (let i = 0; i < n; i++) { const a = Math.PI + (0.06 + 0.88 * (n === 1 ? 0.5 : i / (n - 1))) * Math.PI; seats.push({ r, a, R }); } });
    seats.sort((a, b) => a.a - b.a || a.r - b.r); let k = 0; for (const [nm, n, c] of PARTIES77) for (let i = 0; i < n; i++) { seats[k].party = nm; seats[k].col = c; seats[k].ord = k; k++; }
    S5._hemi = { seats, rows }; return S5._hemi;
  };
  S5.hemiPos = (s, cx, cy) => { const tier = s.r * 26; return [cx + Math.cos(s.a) * s.R, cy + Math.sin(s.a) * s.R * 0.46 - tier, lerp(1.25, 0.72, s.r / 9)]; };
  S5.drawHemi = (ctx, t, cx, cy, o = {}) => {
    const { seats } = S5.hemi();
    // tiers (wood + red velvet bands)
    for (let r = 9; r >= 0; r--) { const R = lerp(300, 980, r / 9) + 40, tier = r * 26; ctx.save(); ctx.beginPath(); ctx.ellipse(cx, cy - tier + 18, R, R * 0.46, 0, Math.PI, MG.TAU); ctx.ellipse(cx, cy - tier + 18, R - 78, (R - 78) * 0.46, 0, MG.TAU, Math.PI, true); ctx.closePath(); ctx.fillStyle = mix(o.wood || '#6B3F28', '#2a160e', (9 - r) / 18); ctx.fill(); ctx.strokeStyle = A('#F2C98A', 0.25 * (o.light ?? 1)); ctx.lineWidth = 2; ctx.stroke(); ctx.restore(); }
    for (const s of seats) {
      const [x, y, k] = S5.hemiPos(s, cx, cy); const fill = o.fill ? o.fill(s) : null; const w = 25 * k, h = 19 * k;
      ctx.fillStyle = o.velvet || '#7E2620'; ctx.beginPath(); ctx.roundRect(x - w / 2, y - h, w, h, 4 * k); ctx.fill(); ctx.strokeStyle = 'rgba(20,6,4,0.5)'; ctx.lineWidth = 1.2; ctx.stroke();
      if (fill) { ctx.fillStyle = fill; ctx.beginPath(); ctx.roundRect(x - w / 2 + 1.5, y - h + 1.5, w - 3, h - 4, 3 * k); ctx.fill(); ctx.fillStyle = 'rgba(255,240,210,0.35)'; ctx.fillRect(x - w / 2 + 3, y - h + 2.5, w - 6, 2.5 * k); }
      ctx.fillStyle = 'rgba(20,8,6,0.45)'; ctx.fillRect(x - w / 2, y - 2 * k, w, 2.5 * k);
    }
  };
  add({
    id: 's05_parties', start: 695.45,
    transIn: { type: S5.trPush(1220, 800, 1.8, 0.7), dur: 0.6 },
    draw(ctx, t, S) {
      const t0 = S.t0; const tAll = T('All', 695.53), tLeg = T('legalized', 696.77), tCom = T('Communists', 698.38), tInc = T('including', 697.89);
      // room
      S5.sky(ctx, [[0, '#3a1f1a'], [0.5, '#5a2f22'], [1, '#2a1610']]);
      ctx.save(); ctx.globalCompositeOperation = 'screen'; MG.fx.rays(ctx, 960, -80, { n: 7, len: 1300, spread: 1.4, dir: Math.PI / 2, alpha: 0.08, t, color: '#FFDFA8' }); ctx.restore();
      const push = pr(t, tInc - 0.2, tCom + 0.6, 'inOutCubic'); const zoom = lerp(1.0, 1.32, push); const fx = lerp(960, 640, push), fy = lerp(560, 470, push);
      const hh = MG.cam.handheld(t, 2.5, 14); ctx.save(); MG.cam.apply(ctx, { x: fx, y: fy, zoom, dx: hh.dx, dy: hh.dy, rot: hh.rot });
      const { seats } = S5.hemi(); const n = seats.length; const kFill = (s) => pr(t, tAll + 0.1 + (s.ord / n) * 1.7, tAll + 0.45 + (s.ord / n) * 1.7);
      const hl = pr(t, tCom - 0.25, tCom + 0.25);
      S5.drawHemi(ctx, t, 960, 1020, { fill: (s) => { const k = kFill(s); if (k <= 0) return null; let c = s.col; if (hl > 0) c = s.party === 'PCE' ? mix(c, '#E0362C', hl) : mix(c, '#5a4040', hl * 0.65); return A(c, k); } });
      // rostrum
      ctx.fillStyle = '#4a2a1a'; ctx.beginPath(); ctx.roundRect(860, 930, 200, 120, 8); ctx.fill(); ctx.fillStyle = 'rgba(255,220,160,0.2)'; ctx.fillRect(860, 930, 200, 6);
      // PCE label + leader
      if (hl > 0) { const pc = seats.filter((s) => s.party === 'PCE').map((s) => S5.hemiPos(s, 960, 1020)); let mx = 0, my = 0; pc.forEach((q) => { mx += q[0]; my += q[1]; }); mx /= pc.length; my /= pc.length; ctx.save(); ctx.globalAlpha = hl; ctx.strokeStyle = '#F7E9D0'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(mx, my - 20); ctx.lineTo(mx + 40, my - 150); ctx.lineTo(mx + 120, my - 150); ctx.stroke(); ctx.restore();
        S5.key(ctx, 'Communists', mx + 130, my - 136, t, tCom - 0.1, { size: 62, color: '#F7E9D0', weight: 800 }); S5.kick(ctx, 'PCE · legal from April 1977', mx + 134, my - 96, t, tCom + 0.15, { color: '#F2C98A', size: 20 }); }
      ctx.restore();
      // spoken kinetic type (top-left, fixed)
      S5.lead(ctx, 'all political', 150, 170, t, tAll - 0.05, { size: 54, color: '#F2E3C8' });
      S5.key(ctx, 'parties legal', 146, 262, t, T('parties', 696.22) - 0.05, { size: 92, color: '#FBF2E2', out: { at: tCom - 0.3, style: 'fade', dur: 0.3 } });
      S5.kick(ctx, 'Congress of Deputies · 350 seats · June 1977', 150, 320, t, tLeg, { color: A('#F2C98A', 0.9), size: 20, out: { at: tCom - 0.3, dur: 0.3 } });
    },
    post: { grade: 'warm', vignette: 0.5, bloom: 0.1 },
  });

  /* ---------- 05 · THE CONSTITUTION · "the Transition" ----------------- */
  add({
    id: 's05_charter', start: 699.50,
    transIn: { type: 'blur', dur: 0.6, amount: 18 },
    init() {
      this.desk = MG.cache('s5desk', W + 200, H + 200, (x, w, h) => { const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, '#5a3220'); g.addColorStop(1, '#3a1e12'); x.fillStyle = g; x.fillRect(0, 0, w, h); x.strokeStyle = 'rgba(255,200,150,0.06)'; x.lineWidth = 2; for (let i = 0; i < 120; i++) { x.beginPath(); const yy = i * 11 + Math.sin(i) * 4; x.moveTo(0, yy); for (let xx = 0; xx <= w; xx += 40) x.lineTo(xx, yy + Math.sin(xx * 0.004 + i) * 6); x.stroke(); } MG.tex.over(x, 'blotch', { alpha: 0.3, color: '#000', scale: 3 }); });
      this.book = MG.cache('s5book', 1400, 860, (x, w, h) => {
        const pg = (sx) => { const p = new Path2D(); const x0 = sx < 0 ? 40 : w / 2, x1 = sx < 0 ? w / 2 : w - 40; p.moveTo(x0, 60 + (sx < 0 ? 18 : 0)); p.quadraticCurveTo((x0 + x1) / 2, 40, x1, 60 + (sx > 0 ? 18 : 0)); p.lineTo(x1, h - 50 + (sx > 0 ? 10 : 0)); p.quadraticCurveTo((x0 + x1) / 2, h - 70, x0, h - 50 + (sx < 0 ? 10 : 0)); p.closePath(); return p; };
        x.fillStyle = '#5a1f1a'; x.beginPath(); x.roundRect(10, 30, w - 20, h - 40, 14); x.fill(); // cover edge
        for (const sx of [-1, 1]) { const p = pg(sx); MG.fx.volume(x, p, [40, 40, w - 80, h - 80], { color: '#F4ECD8', shade: 0.25, hi: 0.2, cel: false, tex: 'fibers', texAlpha: 0.5, light: [sx * 0.5, -0.8] }); }
        const g = x.createLinearGradient(w / 2 - 60, 0, w / 2 + 60, 0); g.addColorStop(0, 'rgba(60,30,20,0)'); g.addColorStop(0.5, 'rgba(60,30,20,0.35)'); g.addColorStop(1, 'rgba(60,30,20,0)'); x.fillStyle = g; x.fillRect(w / 2 - 60, 40, 120, h - 80);
        MG.text.draw(x, 'CONSTITUCIÓN', w * 0.27, 190, { font: F.roman, weight: 700, size: 54, color: '#2a1a16', align: 'center', tracking: 0.08 });
        MG.text.draw(x, 'ESPAÑOLA', w * 0.27, 250, { font: F.roman, weight: 700, size: 40, color: '#2a1a16', align: 'center', tracking: 0.2 });
        x.strokeStyle = '#8a2a24'; x.lineWidth = 2; x.beginPath(); x.moveTo(w * 0.27 - 120, 285); x.lineTo(w * 0.27 + 120, 285); x.stroke();
        MG.text.draw(x, '1978', w * 0.27, 350, { font: F.roman, weight: 900, size: 46, color: '#8a2a24', align: 'center', tracking: 0.15 });
        const r = MG.rng(4); x.fillStyle = 'rgba(40,30,25,0.45)'; for (let i = 0; i < 16; i++) { const L = 340 + r() * 120; x.fillRect(w * 0.27 - 230, 410 + i * 22, Math.min(460, L), 5); }
        for (let i = 0; i < 22; i++) { const L = 380 + r() * 120; x.fillRect(w * 0.73 - 240, 120 + i * 22, Math.min(480, L), 5); }
      });
    },
    draw(ctx, t, S) {
      const t0 = S.t0; const tCon = T('constitution', 700.17), tWr = T('written', 700.77), tCall = T('call', 701.74), tTr = T('Transition', 702.46);
      const hh = MG.cam.handheld(t, 2, 21); const z = lerp(1.0, 1.08, E.inOutSine(li(t, t0, 703.8)));
      ctx.save(); MG.cam.apply(ctx, { x: 960, y: lerp(560, 520, li(t, t0, 703.8)), zoom: z, dx: hh.dx, dy: hh.dy, rot: hh.rot - 0.02 });
      MG.sprite(ctx, this.desk, -100, -100, { ax: 0, ay: 0 });
      MG.fx.contact(ctx, 960, 900, 760, 70, 0.5);
      MG.sprite(ctx, this.book, 960, 560, { scale: 1 });
      // the signature being written on the right page
      const sig = []; for (let i = 0; i <= 80; i++) { const u = i / 80; sig.push([1120 + u * 360, 860 - 40 + Math.sin(u * 22) * 14 * (1 - u * 0.3) - u * 30 + Math.sin(u * 7) * 10]); }
      const kS = pr(t, tWr - 0.3, tWr + 0.7, 'inOutSine'); if (kS > 0) MG.fx.line(ctx, sig, { progress: kS, color: '#1a1a3a', width: 3.5 });
      const pen = MG.path.along(sig, kS); const penA = kS < 1 ? 1 : 1 - pr(t, tWr + 0.8, tWr + 1.2);
      if (penA > 0.01) { ctx.save(); ctx.globalAlpha = penA; ctx.translate(pen[0], pen[1] - 8 - (1 - pr(t, t0, tWr - 0.3)) * 120); ctx.rotate(-0.75); MG.fx.contact(ctx, 60, 30, 120, 16, 0.3); MG.fx.volume(ctx, MG.path.rr(0, -12, 320, 24, 12), [0, -12, 320, 24], { color: '#1d1d26', shade: 0.4, hi: 0.5, cel: true }); ctx.fillStyle = '#D8B15A'; ctx.fillRect(110, -12, 10, 24); ctx.fillStyle = '#C9C9CF'; ctx.beginPath(); ctx.moveTo(0, -8); ctx.lineTo(-38, 0); ctx.lineTo(0, 8); ctx.closePath(); ctx.fill(); ctx.restore(); }
      // pop-up letters: "the Transition" rising off the right page
      const word = 'Transition'; const fs = 120; const wx = 1330, wy = 640;
      MG.text.set(ctx, { font: F.display, weight: 800, size: fs }); const tot = ctx.measureText(word).width; let cx = wx - tot / 2;
      for (let i = 0; i < word.length; i++) {
        const ch = word[i]; const cw = ctx.measureText(ch).width; const k = pr(t, tTr - 0.15 + i * 0.045, tTr + 0.4 + i * 0.045, 'outBack'); if (k > 0) {
          const hgt = k; ctx.save(); ctx.translate(cx + cw / 2, wy);
          // cast shadow on the page
          ctx.save(); ctx.transform(1, 0, -0.9, 0.3 * hgt, 0, 0); MG.text.draw(ctx, ch, 0, 0, { font: F.display, weight: 800, size: fs, color: 'rgba(60,40,50,0.35)', align: 'center' }); ctx.restore();
          ctx.scale(1, hgt); for (let d = 6; d >= 1; d--) MG.text.draw(ctx, ch, d * 0.4, -d * 0.2 + d * 0.9, { font: F.display, weight: 800, size: fs, color: mix('#C9A46A', '#6a4a30', d / 6), align: 'center' });
          MG.text.draw(ctx, ch, 0, 0, { font: F.display, weight: 800, size: fs, color: P.azulejo, align: 'center' }); ctx.restore();
        } cx += cw;
      }
      MG.text.reveal(ctx, 'the', wx - tot / 2 - 6, wy - 112, t, tTr - 0.4, { font: F.serif, italic: true, size: 64, color: '#3B3236', style: 'blur' });
      ctx.restore();
      S5.kick(ctx, 'a new constitution · 1978', 150, 140, t, tCon - 0.1, { color: '#F2E3C8', size: 22, out: { at: tCall, dur: 0.4 } });
      S5.kick(ctx, 'they call it', 150, 140, t, tCall, { color: '#F2E3C8', size: 22 });
    },
    post: { grade: 'warm', vignette: 0.45, grain: 0.05 },
  });

  /* ---------- 06 · A MODEL WITH LITTLE BLOODSHED ----------------------- */
  add({
    id: 's05_model', start: 703.70,
    transIn: { type: S5.trPage, dur: 0.8 },
    init() {
      this.blue = MG.cache('s5blue', W + 240, H + 240, (x, w, h) => {
        x.fillStyle = '#1F4E8C'; x.fillRect(0, 0, w, h); MG.tex.over(x, 'blotch', { alpha: 0.35, color: '#0a1f40', scale: 3 }); x.strokeStyle = 'rgba(220,235,255,0.13)'; x.lineWidth = 1; for (let i = 0; i < w; i += 40) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, h); x.stroke(); } for (let j = 0; j < h; j += 40) { x.beginPath(); x.moveTo(0, j); x.lineTo(w, j); x.stroke(); }
        x.strokeStyle = 'rgba(220,235,255,0.28)'; x.lineWidth = 2; for (let i = 0; i < w; i += 200) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, h); x.stroke(); } for (let j = 0; j < h; j += 200) { x.beginPath(); x.moveTo(0, j); x.lineTo(w, j); x.stroke(); }
        MG.tex.over(x, 'fibers', { alpha: 0.4, color: '#000' });
      });
    },
    draw(ctx, t, S) {
      const t0 = S.t0; const tStud = T('studied', 704.29), tMod = T('model', 704.93), tDict = T('dictatorship', 705.93), tLit = T('little', 707.74), tBlood = T('bloodshed', 707.98);
      const orbit = E.inOutSine(li(t, t0, 709.4)); const hh = MG.cam.handheld(t, 2, 23);
      ctx.save(); MG.cam.apply(ctx, { x: lerp(940, 1000, orbit), y: 540, zoom: lerp(1.0, 1.06, orbit), dx: hh.dx, dy: hh.dy, rot: hh.rot + lerp(-0.015, 0.01, orbit) });
      MG.sprite(ctx, this.blue, -120, -120, { ax: 0, ay: 0 });
      // drafting lines being drawn ("studied")
      const kD = pr(t, tStud - 0.2, tStud + 1.0, 'inOutSine');
      const dim = (x0, y0, x1, y1, lab, k) => { if (k <= 0) return; ctx.save(); ctx.strokeStyle = 'rgba(230,240,255,0.75)'; ctx.lineWidth = 2; const xx = lerp(x0, x1, k), yy = lerp(y0, y1, k); ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(xx, yy); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x0, y0 - 10); ctx.lineTo(x0, y0 + 10); ctx.stroke(); if (k > 0.98) { ctx.beginPath(); ctx.moveTo(x1, y1 - 10); ctx.lineTo(x1, y1 + 10); ctx.stroke(); } ctx.restore(); if (lab && k > 0.6) MG.text.draw(ctx, lab, (x0 + x1) / 2, y0 - 16, { font: F.mono, size: 20, color: 'rgba(230,240,255,0.9)', align: 'center', tracking: 0.12, alpha: (k - 0.6) / 0.4 }); };
      dim(640, 470, 1280, 470, 'SPAN 1975 — 1978', kD);
      if (kD > 0) { ctx.save(); ctx.strokeStyle = 'rgba(230,240,255,0.5)'; ctx.lineWidth = 1.5; ctx.setLineDash([6, 6]); ctx.beginPath(); ctx.arc(960, 900, 420, Math.PI * 1.15, Math.PI * (1.15 + 0.7 * kD)); ctx.stroke(); ctx.restore(); }
      // two paper plateaus (2.5D slabs with strata): shade side vs sun side
      const plateau = (x0, x1, top, face, faceD, lit) => { const yT = 610, yB = 930; ctx.save(); ctx.fillStyle = 'rgba(5,15,40,0.35)'; ctx.filter = 'blur(12px)'; ctx.fillRect(x0 + 16, yT + 26, x1 - x0, yB - yT); ctx.restore();
        S5.form(ctx, [[x0, yT], [x1, yT], [x1, yB], [x0, yB]], { poly: true, color: face, shadeColor: faceD, shade: lit ? 0.2 : 0.5, hi: lit ? 0.3 : 0.05, cel: false, outline: 'rgba(15,15,30,0.55)', ow: 2, tex: 'fibers', texAlpha: 0.7 });
        ctx.save(); ctx.strokeStyle = A(faceD, 0.5); ctx.lineWidth = 3; for (let i = 1; i < 4; i++) { ctx.beginPath(); for (let xx = x0; xx <= x1; xx += 12) { const yy = yT + i * 72 + Math.sin(xx * 0.02 + i) * 5; xx === x0 ? ctx.moveTo(xx, yy) : ctx.lineTo(xx, yy); } ctx.stroke(); } ctx.restore();
        S5.form(ctx, [[x0 - 10, yT - 22], [x1 + 10, yT - 22], [x1, yT], [x0, yT]], { poly: true, color: top, shade: 0.1, hi: lit ? 0.5 : 0.1, hiColor: '#FFF0C8', cel: false, outline: 'rgba(15,15,30,0.55)', ow: 2 }); };
      plateau(120, 640, '#7B6A86', '#5C4A63', '#2f2436', false); plateau(1280, 1800, '#FFD98A', '#F2C26A', '#B8752E', true);
      // the paper viaduct, built left → right as the model takes shape
      const kB = pr(t, tMod - 0.4, tMod + 1.3, 'inOutCubic');
      if (kB > 0) {
        const x0 = 630, x1 = 1290, yD = 590, yB = 930; const xEnd = lerp(x0, x1, kB);
        const br = new Path2D(); br.rect(x0, yD, x1 - x0, yB - yD); const n = 3, sw = (x1 - x0) / n, pw = 34;
        for (let i = 0; i < n; i++) { const a0 = x0 + i * sw + (i ? pw / 2 : 10), a1 = x0 + (i + 1) * sw - (i < n - 1 ? pw / 2 : 10); const am = (a0 + a1) / 2, ar = (a1 - a0) / 2; br.moveTo(a0, yB + 2); br.lineTo(a0, yD + 70 + ar * 0.62); br.ellipse(am, yD + 70 + ar * 0.62, ar, ar * 0.62, 0, Math.PI, 0); br.lineTo(a1, yB + 2); br.closePath(); }
        ctx.save(); ctx.beginPath(); ctx.rect(0, 0, xEnd, H); ctx.clip();
        ctx.save(); ctx.translate(18, 24); ctx.filter = 'blur(10px)'; ctx.fillStyle = 'rgba(5,15,40,0.4)'; ctx.fill(br, 'evenodd'); ctx.restore();
        const g = ctx.createLinearGradient(x0, 0, x1, 0); g.addColorStop(0, '#B9AECB'); g.addColorStop(0.5, '#F2EAD8'); g.addColorStop(1, '#FFF1CC'); ctx.fillStyle = g; ctx.fill(br, 'evenodd');
        ctx.save(); ctx.clip(br, 'evenodd'); MG.tex.over(ctx, 'fibers', { alpha: 0.7 }); ctx.restore();
        ctx.strokeStyle = 'rgba(20,20,40,0.55)'; ctx.lineWidth = 2; ctx.stroke(br);
        ctx.fillStyle = '#FFF8E6'; ctx.fillRect(x0 - 8, yD - 16, x1 - x0 + 16, 16); ctx.strokeRect(x0 - 8, yD - 16, x1 - x0 + 16, 16);
        ctx.restore();
        // Spain crossing the deck: shade → sun
        if (kB > 0.15) { const sp = S5.spainPath(420); const k = pr(t, tDict - 0.2, tBlood + 0.9, 'inOutSine'); const px = lerp(x0 - 80, x1 + 90, k); const bob = Math.abs(Math.sin(k * 26)) * 6; ctx.save(); ctx.translate(px - sp.bb[0] - sp.bb[2] / 2, yD - 18 - bob - sp.bb[1] - sp.bb[3]); MG.fx.contact(ctx, sp.bb[0] + sp.bb[2] / 2, sp.bb[1] + sp.bb[3] + 12 + bob, sp.bb[2] * 0.4, 6, 0.35); MG.fx.volume(ctx, sp.p, sp.bb, { color: mix('#8E7FA6', P.sol, k), shadeColor: mix('#3a2b4a', P.solDeep, k), shade: 0.4, hi: 0.35 }); ctx.strokeStyle = A(P.ink, 0.5); ctx.lineWidth = 1.5; ctx.stroke(sp.p); ctx.restore(); }
      }
      S5.kick(ctx, 'dictatorship', 380, 572, t, tDict - 0.1, { color: '#EAE0F4', align: 'center', size: 24 });
      S5.kick(ctx, 'democracy', 1540, 572, t, tDict + 0.45, { color: '#FFE2A8', align: 'center', size: 24 });
      // light: the right side in sun, the left in shade (sol / sombra inside the scene)
      ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = 'rgba(40,30,70,0.32)'; ctx.beginPath(); ctx.moveTo(-200, -200); ctx.lineTo(820, -200); ctx.lineTo(560, H + 200); ctx.lineTo(-200, H + 200); ctx.closePath(); ctx.fill(); ctx.restore();
      ctx.save(); ctx.globalCompositeOperation = 'soft-light'; ctx.fillStyle = 'rgba(255,214,150,0.55)'; ctx.beginPath(); ctx.moveTo(820, -200); ctx.lineTo(W + 300, -200); ctx.lineTo(W + 300, H + 200); ctx.lineTo(560, H + 200); ctx.closePath(); ctx.fill(); ctx.restore();
      // a single small red drop on the blueprint (sober)
      const kR = pr(t, tLit - 0.1, tBlood + 0.3, 'linear'); if (kR > 0) { const fall = E.inQuad(clamp(kR / 0.55)); const yy = lerp(560, 868, fall); const spread = clamp((kR - 0.55) / 0.45); ctx.save(); ctx.fillStyle = '#B8322A'; if (spread <= 0) { ctx.beginPath(); ctx.ellipse(1000, yy, 6, 9, 0, 0, MG.TAU); ctx.fill(); } else { ctx.beginPath(); ctx.ellipse(1000, 872, 7 + E.out(spread) * 9, 4 + E.out(spread) * 4, 0, 0, MG.TAU); ctx.fill(); } ctx.restore(); }
      ctx.restore();
      // architect's title block (integrated type)
      const kt = pr(t, tMod - 0.1, tMod + 0.5); if (kt > 0) { ctx.save(); ctx.globalAlpha = kt; ctx.strokeStyle = 'rgba(230,240,255,0.8)'; ctx.lineWidth = 2; ctx.strokeRect(1320, 820, 480, 170); ctx.beginPath(); ctx.moveTo(1320, 880); ctx.lineTo(1800, 880); ctx.moveTo(1572, 880); ctx.lineTo(1572, 990); ctx.stroke(); ctx.restore();
        MG.text.draw(ctx, 'THE SPANISH TRANSITION', 1340, 862, { font: F.mono, size: 20, weight: 600, color: '#E6F0FF', tracking: 0.16, alpha: kt });
        S5.key(ctx, 'MODEL', 1342, 962, t, tMod, { size: MG.LANG === 'fr' ? 50 : 60, color: '#FFFFFF', tracking: MG.LANG === 'fr' ? 0.04 : 0.1 }); MG.text.draw(ctx, '1975—1978', 1676, 952, { font: F.cond, weight: 800, size: 46, color: '#FFE2A8', align: 'center', alpha: kt }); }
      S5.lead(ctx, 'with very little bloodshed', 150, 170, t, tLit - 0.4, { size: 52, color: '#E6F0FF' });
    },
    post: { grade: 'cool', vignette: 0.4, sat: 0.95 },
  });

  /* ---------- 07 · 23-F · STORMING (night hemicycle) ------------------ */
  S5.chamber = (ctx, t, o = {}) => {
    // back wall: walnut panelling + red drapes + presidency table on a dais + rostrum; floor carpet; foreground benches
    const c = MG.cache('s5chamber', W + 300, H + 300, (x, w, h) => {
      x.fillStyle = '#2a1712'; x.fillRect(0, 0, w, h);
      for (let i = 0; i < 16; i++) { const px = i * 150 - 20; x.fillStyle = i % 2 ? '#3a2016' : '#341c14'; x.fillRect(px, 40, 150, 560); x.strokeStyle = 'rgba(220,170,100,0.18)'; x.lineWidth = 3; x.strokeRect(px + 18, 80, 114, 470); }
      for (const dx of [260, w - 520]) { for (let k = 0; k < 6; k++) { x.fillStyle = k % 2 ? '#6E1E1A' : '#7E2620'; x.beginPath(); x.moveTo(dx + k * 44, 0); x.quadraticCurveTo(dx + k * 44 + 22, 330, dx + k * 44 - 6, 620); x.lineTo(dx + k * 44 + 50, 620); x.quadraticCurveTo(dx + k * 44 + 60, 300, dx + k * 44 + 44, 0); x.fill(); } }
      MG.fx.volume(x, MG.path.circle(w / 2, 210, 96), [w / 2 - 96, 114, 192, 192], { color: '#B8913E', shade: 0.5, hi: 0.6, cel: false }); // clock rim (face drawn live)
      // dais + presidency table
      x.fillStyle = '#4a2a1a'; x.fillRect(200, 560, w - 400, 120); x.fillStyle = '#5e3622'; x.fillRect(260, 520, w - 520, 60); x.fillStyle = 'rgba(255,210,150,0.18)'; x.fillRect(260, 520, w - 520, 6);
      // floor
      const g = x.createLinearGradient(0, 680, 0, h); g.addColorStop(0, '#5a1c18'); g.addColorStop(1, '#3a100e'); x.fillStyle = g; x.fillRect(0, 680, w, h - 680);
      x.fillStyle = 'rgba(0,0,0,0.25)'; x.beginPath(); x.ellipse(w / 2, 880, 700, 150, 0, 0, MG.TAU); x.fill();
      MG.tex.over(x, 'blotch', { alpha: 0.35, color: '#000', scale: 3 }); MG.tex.over(x, 'fibers', { alpha: 0.5 });
    });
    const rostrum = MG.cache('s5rostrum', 420, 330, (x, w, h) => { S5.form(x, [[10, 30], [w - 10, 30], [w - 30, h], [30, h]], { poly: true, color: '#5a3220', shadeColor: '#2a160e', shade: 0.5, hi: 0.25, cel: false, outline: '#120806', ow: 3, tex: 'grain', texAlpha: 0.3 }); x.fillStyle = '#6e3e26'; x.fillRect(0, 10, w, 30); x.strokeStyle = 'rgba(230,180,110,0.25)'; x.lineWidth = 3; for (let i = 0; i < 3; i++) x.strokeRect(50 + i * 110, 80, 90, 200); x.strokeStyle = '#1a1a1a'; x.lineWidth = 4; x.beginPath(); x.moveTo(170, 10); x.quadraticCurveTo(160, -40, 190, -70); x.moveTo(250, 10); x.quadraticCurveTo(262, -40, 236, -70); x.stroke(); });
    const benches = MG.cache('s5benches', W + 300, 420, (x, w, h) => { for (let r = 0; r < 3; r++) { const yy = 120 + r * 120; x.fillStyle = '#5a1a16'; x.beginPath(); x.ellipse(w / 2, yy + 900, 1500 + r * 160, 900, 0, Math.PI * 1.25, Math.PI * 1.75); x.lineTo(w, h); x.lineTo(0, h); x.fill(); x.fillStyle = '#3a120e'; for (let i = 0; i < 18; i++) { const bx = i * 130 + (r % 2) * 60; x.beginPath(); x.roundRect(bx, yy - 40 + Math.abs(i - 9) * 4, 100, 90, 14); x.fill(); } } });
    return { c, rostrum, benches };
  };
  add({
    id: 's05_storm', start: 709.17,
    draw(ctx, t, S) {
      const t0 = S.t0; const tArm = T('armed', 710.75), tOff = T('officers', 711.41), t81 = T('1981', 709.38);
      const R = S5.chamber(ctx, t); const hh = MG.cam.handheld(t, 3, 41); const z = lerp(1.0, 1.06, li(t, t0, 712));
      ctx.save(); MG.cam.apply(ctx, { x: 960, y: 520, zoom: z, dx: hh.dx, dy: hh.dy, rot: hh.rot });
      MG.sprite(ctx, R.c, -150, -150, { ax: 0, ay: 0 });
      MG.kit.sun(ctx, 960, 60, 80, t, { variant: 'clock', hour: 6.38 + (t - 709) / 3600, corona: 0, halftone: 0.3 });
      // the door on the right bursts open: a wedge of light across the floor
      const kd = pr(t, tArm - 0.25, tArm + 0.3, 'snap'); const doorX = 1640, doorY = 330;
      ctx.save(); ctx.fillStyle = '#120a08'; ctx.fillRect(doorX, doorY, 160, 360); if (kd > 0) { ctx.fillStyle = A('#FFE0A8', 0.9 * kd); ctx.fillRect(doorX + 160 * (1 - kd), doorY, 160 * kd, 360); } ctx.restore();
      if (kd > 0) { ctx.save(); ctx.globalCompositeOperation = 'screen'; ctx.fillStyle = A('#FFCF8A', 0.28 * kd); ctx.beginPath(); ctx.moveTo(doorX, doorY + 360); ctx.lineTo(doorX + 160, doorY + 360); ctx.lineTo(1300, H + 100); ctx.lineTo(-100, H + 100); ctx.closePath(); ctx.fill(); ctx.restore(); }
      // "1981" standing in the chamber, raked by the door light
      S5.standType(ctx, '1981', 700, 700, { size: 250, color: mix('#6a4a3a', '#F7E3C0', 0.35 + 0.65 * kd), side: '#3a2216', shadowA: 0.5 * (0.3 + 0.7 * kd), skew: -1.8, sq: 0.2, alpha: pr(t, t81 - 0.25, t81 + 0.35) });
      MG.sprite(ctx, R.rostrum, 960, 740, { ay: 0.1 });
      // tricorn silhouettes stream in from the door
      for (let i = 0; i < 7; i++) { const st = tArm + 0.05 + i * 0.22; const k = li(t, st, st + 2.2); if (k <= 0) continue; const gx = lerp(doorX + 70, 1180 - i * 70, E.out(k)), gy = lerp(doorY + 360, 900 + (i % 2) * 40, E.out(k)); const sc = lerp(0.95, 1.25 + (i % 2) * 0.1, k); S5.guardSil(ctx, gx, gy, sc, (t - st) * 9 + i); MG.fx.contact(ctx, gx, gy, 60 * sc, 10, 0.5); S5.cast(ctx, gx - 20, gy, gx + 20, gy, -260, 40, 0.3, '#000'); }
      MG.sprite(ctx, R.benches, -150, 700, { ax: 0, ay: 0, blur: 5 });
      ctx.restore();
      S5.lead(ctx, 'armed officers', 150, 160, t, tOff - 0.25, { size: 60, color: '#F2E3C8' });
    },
    post: { grade: 'night', vignette: 0.6, contrast: 1.08, grain: 0.06 },
  });

  /* ---------- 08 · THE OFFICER ON THE ROSTRUM -------------------------- */
  add({
    id: 's05_tejero', start: 711.90,
    draw(ctx, t, S) {
      const t0 = S.t0; const tShot = T('parliament', 712.50) + 0.08; const R = S5.chamber(ctx, t);
      const shk = MG.cam.shake(t, tShot, 16, 5); const hh = MG.cam.handheld(t, 3.5, 43);
      ctx.save(); MG.cam.apply(ctx, { x: 960, y: lerp(420, 380, li(t, t0, 713.4)), zoom: 1.9, dx: hh.dx + shk.dx, dy: hh.dy + shk.dy, rot: hh.rot + shk.rot });
      MG.sprite(ctx, R.c, -150, -150, { ax: 0, ay: 0, blur: 3 });
      MG.kit.sun(ctx, 960, 60, 80, t, { variant: 'clock', hour: 6.38, corona: 0, halftone: 0.3 });
      ctx.restore();
      S5.key(ctx, 'storm parliament', 150, 780, t, T('storm', 712.17) - 0.1, { size: 84, color: '#FBF2E2' });
      ctx.save(); ctx.translate(shk.dx, shk.dy);
      const fl = Math.max(0, 1 - (t - tShot) / 0.12) * (t >= tShot ? 1 : 0);
      const rec = t >= tShot ? Math.exp(-(t - tShot) * 8) : 0;
      S5.tejero(ctx, 1180 + hh.dx * 1.4, 470 + hh.dy, 1.12, t, { raise: pr(t, t0 - 0.2, t0 + 0.35, 'out'), flash: fl, recoil: rec, shout: 0.6 + 0.3 * Math.abs(Math.sin(t * 7)) });
      // rostrum edge + microphones in the foreground
      ctx.fillStyle = '#4a2a1a'; ctx.fillRect(730, 900, 900, 200); ctx.fillStyle = 'rgba(255,210,150,0.2)'; ctx.fillRect(730, 900, 900, 8); ctx.strokeStyle = '#121212'; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(1070, 905); ctx.quadraticCurveTo(1050, 820, 1100, 760); ctx.stroke(); ctx.fillStyle = '#1a1a1a'; ctx.beginPath(); ctx.ellipse(1104, 752, 16, 22, -0.4, 0, MG.TAU); ctx.fill();
      // plaster dust falling after the shot
      if (t > tShot) MG.fx.particles(ctx, { n: 70, seed: 5, t: t - tShot, area: [300, -40, 1100, 60], vel: [0, 170], velJitter: 0.5, life: 3, size: [1, 3.5], color: '#E9DCC8', alpha: 0.7 * clamp(1.5 - (t - tShot) * 0.5), gravity: 60 });
      if (fl > 0) { ctx.save(); ctx.globalCompositeOperation = 'screen'; ctx.fillStyle = A('#FFE8C0', 0.35 * fl); ctx.fillRect(0, 0, W, H); ctx.restore(); }
      ctx.restore();
      MG.kit.tag(ctx, t, t0 + 0.25, 'Antonio Tejero', { x: 140, y: 930, sub: 'Lt-Col., Guardia Civil · 23 Feb 1981', size: 40, bg: '#120c0c', color: '#F2E8D5', subColor: '#E0CBA8' });
    },
    post: { grade: 'night', vignette: 0.58, contrast: 1.1, grain: 0.06 },
  });

  /* ---------- 09 · TURN BACK THE CLOCK --------------------------------- */
  add({
    id: 's05_clock', start: 713.40,
    transIn: { type: 'push', dir: 'down', dur: 0.45, ease: 'inOutCubic' },
    draw(ctx, t, S) {
      const t0 = S.t0; const tBack = T('back', 713.89), tClock = T('clock', 714.34);
      ctx.fillStyle = '#2a1712'; ctx.fillRect(0, 0, W, H);
      for (let i = 0; i < 14; i++) { ctx.fillStyle = i % 2 ? '#3a2016' : '#341c14'; ctx.fillRect(i * 150 - 40, 0, 150, H); ctx.strokeStyle = 'rgba(220,170,100,0.14)'; ctx.lineWidth = 3; ctx.strokeRect(i * 150 - 22, 60, 114, H - 120); }
      MG.tex.over(ctx, 'blotch', { alpha: 0.3, color: '#000', scale: 3 });
      const hh = MG.cam.handheld(t, 3, 45); const cx = 1230 + hh.dx, cy = 540 + hh.dy;
      // hands spin backwards, accelerating
      const sp = li(t, tBack - 0.2, 715.3); const back = 6.38 - (sp * sp * 30); // hours: 18:23, when the coup began, spinning back
      MG.fx.shadow(ctx, MG.path.circle(cx, cy, 330), { dx: 24, dy: 30, blur: 40, color: 'rgba(0,0,0,0.55)' });
      MG.fx.volume(ctx, MG.path.circle(cx, cy, 350), [cx - 350, cy - 350, 700, 700], { color: '#B8913E', shade: 0.5, hi: 0.6, cel: false, tex: 'grain', texAlpha: 0.3 });
      MG.kit.sun(ctx, cx, cy, 300, t, { variant: 'clock', hour: MG.mod(back, 12), corona: 0, halftone: 0.4 });
      // date window rolling back 1981 → 1975 → …
      const yrs = [1981, 1980, 1979, 1978, 1977, 1976, 1975, 1974, 1970, 1960, 1950, 1939]; const yk = pr(t, tBack, 715.4, 'inCubic') * (yrs.length - 1);
      ctx.save(); ctx.beginPath(); ctx.rect(cx - 110, cy + 120, 220, 84); ctx.clip(); ctx.fillStyle = '#F4ECD8'; ctx.fillRect(cx - 110, cy + 120, 220, 84);
      for (let i = 0; i < yrs.length; i++) { const yy = cy + 190 + (i - yk) * 84; if (yy < cy + 90 || yy > cy + 300) continue; MG.text.draw(ctx, String(yrs[i]), cx, yy, { font: F.cond, weight: 900, size: 76, color: '#2a1a16', align: 'center' }); }
      ctx.restore(); ctx.strokeStyle = '#2a1a16'; ctx.lineWidth = 4; ctx.strokeRect(cx - 110, cy + 120, 220, 84);
      // motion blur arcs of the spinning hands
      const vel = 2 * sp * 30; if (vel > 4) { ctx.save(); ctx.strokeStyle = A('#2a1a16', clamp(vel / 60) * 0.35); ctx.lineWidth = 20; const a = (MG.mod(back, 12) / 12) * MG.TAU - Math.PI / 2; ctx.beginPath(); ctx.arc(cx, cy, 150, a, a + Math.min(2.4, vel * 0.03)); ctx.stroke(); ctx.restore(); }
      // the shadow creeps back over the wall
      const sh = pr(t, tBack - 0.1, 715.5, 'inOutSine'); ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = A('#241A26', 0.75); ctx.beginPath(); ctx.moveTo(-300, -100); ctx.lineTo(lerp(-300, 1400, sh), -100); ctx.lineTo(lerp(-900, 800, sh), H + 100); ctx.lineTo(-300, H + 100); ctx.closePath(); ctx.fill(); ctx.restore();
      S5.lead(ctx, 'try to', 150, 150, t, T('try', 713.17) - 0.2, { size: 56, color: '#F2E3C8' });
      S5.key(ctx, 'turn back the clock', 146, 250, t, T('turn', 713.58) - 0.1, { size: 84, color: '#FBF2E2' });
    },
    post: { grade: 'night', vignette: 0.6, contrast: 1.08 },
  });

  /* ---------- 10 · THE KING ON TV SAYS NO → THE COUP COLLAPSES ---------- */
  S5.tvBuf = null;
  S5.drawTvContent = (t, o) => {
    if (!S5.tvBuf) S5.tvBuf = MG.canvas(720, 540); const c = S5.tvBuf; const x = c.getContext('2d'); MG.reset(x);
    // studio: flag (stripes only) softly out of focus, desk
    x.fillStyle = '#C8402E'; x.fillRect(0, 0, 720, 540); x.fillStyle = '#E9B840'; x.fillRect(0, 150, 720, 220); x.fillStyle = 'rgba(30,20,20,0.35)'; x.fillRect(0, 0, 720, 540);
    x.save(); x.translate(-30 * o.push, -40 * o.push); const k = lerp(0.62, 0.95, o.push); S5.jc(x, 360 + 30 * o.push, 230 + 40 * o.push, k, t, { talk: o.talk, mood: o.mood || 'neutral', look: [0, 0.05], brow: -0.15, lid: 0.25, light: [-0.4, -0.8], rim: '#FFF0D0' }); x.restore();
    x.fillStyle = '#3a2418'; x.fillRect(0, 470, 720, 70); x.fillStyle = 'rgba(255,220,170,0.25)'; x.fillRect(0, 470, 720, 4);
    // CRT: scanlines + flicker + vignette
    x.fillStyle = 'rgba(0,0,0,0.22)'; for (let yy = 0; yy < 540; yy += 4) x.fillRect(0, yy, 720, 2);
    x.globalCompositeOperation = 'screen'; x.fillStyle = A('#9ab8ff', 0.08 + 0.04 * MG.noise2(t * 20, 1)); x.fillRect(0, 0, 720, 540); x.globalCompositeOperation = 'source-over';
    const g = x.createRadialGradient(360, 270, 150, 360, 270, 460); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,0.6)'); x.fillStyle = g; x.fillRect(0, 0, 720, 540);
    return c;
  };
  add({
    id: 's05_tv', start: 715.17,
    transIn: { type: 'dip', color: '#07060a', dur: 0.5 },
    init() {
      this.room = MG.cache('s5room', W + 200, H + 200, (x, w, h) => {
        x.fillStyle = '#1b1820'; x.fillRect(0, 0, w, h);
        // wallpaper stripes 1970s + window (night city) on the left
        for (let i = 0; i < 40; i++) { x.fillStyle = i % 2 ? 'rgba(80,60,50,0.25)' : 'rgba(40,30,30,0.2)'; x.fillRect(i * 60, 0, 30, h); }
        x.fillStyle = '#0f1530'; x.fillRect(150, 160, 420, 520); for (let i = 0; i < 30; i++) { const bx = 160 + MG.rand(7, i) * 380, bh = 60 + MG.rand(8, i) * 200; x.fillStyle = '#080b1a'; x.fillRect(bx, 680 - bh, 40, bh); for (let j = 0; j < 6; j++) if (MG.rand(9, i * 7 + j) > 0.7) { x.fillStyle = '#E8C070'; x.fillRect(bx + 8 + (j % 2) * 16, 690 - bh + Math.floor(j / 2) * 24, 6, 9); } }
        x.strokeStyle = '#2a2026'; x.lineWidth = 16; x.strokeRect(150, 160, 420, 520); x.beginPath(); x.moveTo(360, 160); x.lineTo(360, 680); x.moveTo(150, 420); x.lineTo(570, 420); x.stroke();
        // floor + sideboard
        x.fillStyle = '#231a18'; x.fillRect(0, 860, w, h - 860); x.fillStyle = '#3a2418'; x.fillRect(900, 760, 820, 120); x.fillStyle = 'rgba(255,220,170,0.15)'; x.fillRect(900, 760, 820, 5);
        MG.tex.over(x, 'blotch', { alpha: 0.3, color: '#000', scale: 3 });
      });
      this.tv = MG.cache('s5tvset', 760, 640, (x, w, h) => {
        S5.form(x, [[20, 40], [w - 20, 40], [w - 10, h - 90], [10, h - 90]], { poly: true, color: '#6B4226', shadeColor: '#2e1a10', shade: 0.5, hi: 0.35, cel: false, outline: '#120806', ow: 3, tex: 'grain', texAlpha: 0.35 });
        x.fillStyle = '#1a1410'; x.beginPath(); x.roundRect(50, 70, 520, 420, 60); x.fill();
        x.fillStyle = '#2a201a'; x.fillRect(600, 80, 120, 400); for (let i = 0; i < 2; i++) { MG.fx.volume(x, MG.path.circle(660, 150 + i * 110, 34), [626, 116 + i * 110, 68, 68], { color: '#B8B0A0', shade: 0.5, hi: 0.6, cel: true }); x.fillStyle = '#222'; x.fillRect(656, 120 + i * 110, 8, 30); }
        x.fillStyle = '#c8b898'; for (let i = 0; i < 9; i++) x.fillRect(616, 380 + i * 10, 88, 3);
        x.fillStyle = '#2e1a10'; x.fillRect(60, h - 90, 40, 80); x.fillRect(w - 100, h - 90, 40, 80);
        x.strokeStyle = '#9a9a9a'; x.lineWidth = 5; x.beginPath(); x.moveTo(380, 40); x.lineTo(250, -0); x.moveTo(380, 40); x.lineTo(520, 0); x.stroke();
      });
    },
    draw(ctx, t, S) {
      const t0 = S.t0; const tUni = T('uniform', 717.17), tNo = T('no', 718.53), tColl = T('collapses', 719.89), tOver = T('overnight', 720.77), tSays = T('says', 718.25);
      const hh = MG.cam.handheld(t, 2.5, 51); const push = pr(t, t0, tNo, 'inOutSine') * 0.7 + pr(t, tNo, tNo + 0.25, 'snap') * 0.3;
      const zoom = lerp(1.0, 1.32, push) * (1 - pr(t, tColl, 722.2, 'inOutSine') * 0.18); const fx = lerp(960, 1180, push), fy = lerp(540, 470, push);
      const shk = MG.cam.shake(t, tNo + 0.02, 10, 6);
      ctx.save(); MG.cam.apply(ctx, { x: fx, y: fy, zoom, dx: hh.dx + shk.dx, dy: hh.dy + shk.dy, rot: hh.rot });
      MG.sprite(ctx, this.room, -100, -100, { ax: 0, ay: 0 });
      // dawn through the window after "overnight"
      const dawn = pr(t, tOver - 0.2, 722.6, 'inOutSine');
      if (dawn > 0) { ctx.save(); ctx.beginPath(); ctx.rect(58, 68, 404, 504); ctx.clip(); const g = ctx.createLinearGradient(0, 60, 0, 580); g.addColorStop(0, mix('#0f1530', '#F4B880', dawn)); g.addColorStop(1, mix('#0f1530', '#FFE2A8', dawn)); ctx.globalAlpha = dawn; ctx.fillStyle = g; ctx.fillRect(58, 68, 404, 504); MG.kit.sun(ctx, 300, lerp(640, 470, dawn), 60, t, { corona: 0.8, rays: 0.3 }); ctx.restore(); ctx.save(); ctx.globalCompositeOperation = 'screen'; ctx.fillStyle = A('#FFC890', 0.25 * dawn); ctx.beginPath(); ctx.moveTo(60, 70); ctx.lineTo(460, 70); ctx.lineTo(1400, H + 100); ctx.lineTo(400, H + 100); ctx.closePath(); ctx.fill(); ctx.restore(); }
      // TV set + screen content + CRT power on/off
      const tvx = 1180, tvy = 520; MG.sprite(ctx, this.tv, tvx, tvy);
      const on = pr(t, t0 + 0.05, t0 + 0.55, 'out'); const off = pr(t, tColl - 0.05, tColl + 0.5, 'inOutCubic'); const sx0 = tvx - 380 + 50, sy0 = tvy - 320 + 70; const SW = 520, SH = 420;
      const content = S5.drawTvContent(t, { push: pr(t, tUni - 0.3, tUni + 0.6, 'inOutCubic'), talk: t > T('goes', 715.62) && t < 719.4 ? 1 : 0 });
      ctx.save(); ctx.beginPath(); ctx.roundRect(sx0, sy0, SW, SH, 60); ctx.clip(); ctx.fillStyle = '#0c0d10'; ctx.fillRect(sx0, sy0, SW, SH);
      const vy = SH * (on < 1 ? on : 1 - off * 0.995), vx = SW * (off < 0.6 ? 1 : 1 - (off - 0.6) / 0.4 * 0.99);
      if (on > 0 && vy > 1) { ctx.globalAlpha = on < 1 ? on : 1; ctx.drawImage(content, sx0 + (SW - vx) / 2, sy0 + (SH - vy) / 2, vx, vy); if (off > 0) { ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = A('#E8F0FF', off * 0.9); ctx.fillRect(sx0 + (SW - vx) / 2, sy0 + (SH - vy) / 2, vx, vy); } }
      ctx.restore();
      const dot = off > 0.85 ? 1 - pr(t, tColl + 0.5, tOver + 1.4) * 0.7 : 0; if (dot > 0) { MG.fx.glow(ctx, sx0 + SW / 2, sy0 + SH / 2, 60, '#E8F0FF', 0.9 * dot, 'lighter'); ctx.fillStyle = A('#FFFFFF', dot); ctx.beginPath(); ctx.arc(sx0 + SW / 2, sy0 + SH / 2, 5, 0, MG.TAU); ctx.fill(); }
      // TV glow on the room (blue) while on
      const glowA = on * (1 - off); if (glowA > 0) { ctx.save(); ctx.globalCompositeOperation = 'screen'; MG.fx.glow(ctx, sx0 + SW / 2, sy0 + SH / 2, 900, '#7FA0E8', 0.32 * glowA * (0.9 + 0.1 * MG.noise2(t * 12, 4))); ctx.restore(); }
      // family on the sofa (silhouettes from behind, rim-lit by the screen)
      ctx.save();
      const sofa = MG.path.smooth([[120, H + 60], [140, 930], [260, 880], [900, 880], [1020, 930], [1040, H + 60]], true); ctx.fillStyle = '#17100f'; ctx.fill(sofa);
      const glowB = on * (1 - off);
      const person = (px, py, sc, hair) => { ctx.save(); ctx.translate(px, py); ctx.scale(sc, sc); ctx.fillStyle = '#0a090d';
        const body = MG.path.smooth([[-150, 260], [-140, 40], [-80, -10], [-40, -30], [40, -30], [80, -10], [140, 40], [150, 260]], true); ctx.fill(body);
        const head = MG.path.smooth([[0, -210], [-56, -186], [-66, -120], [-50, -60], [-22, -40], [22, -40], [50, -60], [66, -120], [56, -186]], true); ctx.fill(head);
        if (hair === 'bun') { ctx.beginPath(); ctx.ellipse(6, -224, 34, 28, 0, 0, MG.TAU); ctx.fill(); }
        if (hair === 'curls') for (let i = 0; i < 7; i++) { ctx.beginPath(); ctx.arc(-50 + i * 17, -196 + Math.sin(i) * 6, 18, 0, MG.TAU); ctx.fill(); }
        ctx.beginPath(); ctx.ellipse(-64, -120, 10, 18, 0, 0, MG.TAU); ctx.ellipse(64, -120, 10, 18, 0, 0, MG.TAU); ctx.fill();
        if (glowB > 0) { ctx.strokeStyle = A('#A8C4FF', 0.6 * glowB); ctx.lineWidth = 5; ctx.save(); ctx.clip(head); ctx.translate(-6, 4); ctx.stroke(head); ctx.restore(); ctx.save(); ctx.clip(body); ctx.translate(-6, 6); ctx.stroke(body); ctx.restore(); }
        ctx.restore(); };
      person(360, 990, 0.85, 'curls'); person(600, 960, 1.0, 'short'); person(810, 1000, 0.7, 'bun');
      ctx.restore();
      ctx.restore();
      // "NO." — the king's answer, standing in the dark room, lit by the screen
      const kNo = pr(t, tNo - 0.06, tNo + 0.18, 'snap'), outNo = pr(t, tColl - 0.5, tColl - 0.1, 'in');
      if (kNo > 0 && outNo < 1) { const sc = lerp(1.6, 1, kNo); ctx.save(); ctx.globalAlpha = kNo * (1 - outNo); ctx.translate(400, 640); ctx.scale(sc, sc); MG.text.draw(ctx, 'NO.', 6, 14, { font: F.display, weight: 900, size: 300, color: 'rgba(0,0,0,0.6)', align: 'center' }); MG.text.draw(ctx, 'NO.', 0, 0, { font: F.display, weight: 900, size: 300, color: '#F7EEDD', align: 'center' }); ctx.restore(); }
      S5.lead(ctx, 'the king goes on live television', 150, 150, t, T('king', 715.34) - 0.1, { size: 52, color: '#E9E3F2', out: { at: tSays - 0.1, dur: 0.3 } });
      S5.key(ctx, 'in uniform', 146, 240, t, tUni - 0.1, { size: 80, color: '#F7EEDD', out: { at: tSays - 0.1, dur: 0.3 } });
      S5.key(ctx, 'the coup collapses', 150, 200, t, T('coup', 719.58) - 0.05, { size: 80, color: '#F7EEDD', out: { at: tOver + 0.6, dur: 0.4 } });
      S5.lead(ctx, 'overnight', 154, 290, t, tOver - 0.1, { size: 64, color: '#FFE2B8' });
    },
    post: (t) => ({ grade: 'night', vignette: 0.62, contrast: 1.06, temp: MG.lerp(-0.06, 0.06, MG.prog(t, 720.6, 722.3)), grain: 0.06, halation: 0.08 }),
  });

  /* ---------- 11 · EUROPE'S FAST TRACK · EC 1986 · STARS · FUNDING ---- */
  add({
    id: 's05_europe', start: 722.13,
    transIn: { type: S5.trPush(884, 551, 3.2, 0.3), dur: 0.8 },
    draw(ctx, t, S) {
      MG.geo.init(); const t0 = S.t0; const tFast = T('fast', 723.34), t86 = T('1986', 725.17), tJoin = T('joins', 726.46), tCom = T('Community', 727.34), tFund = T('funding', 728.93), tPour = T('pours', 729.50);
      const v = MG.geo.view(t, [[t0, { center: [-3.0, 40.6], scale: 5200 }], [t0 + 1.9, { center: [3.5, 47.0], scale: 1500 }, 'cam'], [tJoin - 0.2, { center: [3.0, 46.5], scale: 1560 }, 'inOutSine'], [tCom + 0.9, { center: [-0.5, 43.2], scale: 2500 }, 'cam'], [730.8, { center: [-1.0, 42.8], scale: 2650 }, 'inOutSine']]);
      const hh = MG.cam.handheld(t, 2, 61); const pr2 = MG.geo.proj('conic', { center: v.center, scale: v.scale, translate: [960 + hh.dx, 540 + hh.dy] });
      // sea: EU blue paper with fine waves
      MG.kit.seaBg(ctx, '#2B4A92');
      ctx.save(); ctx.globalAlpha = 0.18; MG.geo.graticule(ctx, pr2, { color: '#BFD0FF', step: [5, 5] }); ctx.restore();
      const land = MG.geo.world50 ? null : null;
      const neigh = ['Portugal', 'Spain', 'France', 'Germany', 'Italy', 'Belgium', 'Netherlands', 'Luxembourg', 'Denmark', 'Ireland', 'United Kingdom', 'Greece', 'Switzerland', 'Austria', 'Poland', 'Czechia', 'Slovakia', 'Hungary', 'Slovenia', 'Croatia', 'Bosnia and Herz.', 'Serbia', 'Montenegro', 'Albania', 'Macedonia', 'Kosovo', 'Bulgaria', 'Romania', 'Moldova', 'Ukraine', 'Belarus', 'Lithuania', 'Latvia', 'Estonia', 'Russia', 'Finland', 'Sweden', 'Norway', 'Iceland', 'Morocco', 'Algeria', 'Tunisia', 'Libya', 'Turkey', 'Cyprus', 'Malta', 'Andorra', 'Liechtenstein'];
      const kJ = pr(t, tJoin - 0.1, tJoin + 0.6, 'inOutCubic');
      for (const n of neigh) { const f = MG.geo.country(n, '50'); if (!f) continue; const mem = S5.EC10.includes(n); const joining = n === 'Spain' || n === 'Portugal'; const base = '#CFC6B4';
        const fill = mem ? '#F6F0E2' : joining ? mix(base, n === 'Spain' ? P.sol : '#F6F0E2', kJ) : base; MG.geo.draw(ctx, pr2, f, { fill, stroke: 'rgba(30,30,60,0.35)', width: 0.9 }); }
      // GDR hatched (not a member)
      { const de = MG.geo.country('Germany', '50'); ctx.save(); MG.geo.clip(ctx, pr2, de); MG.geo.clip(ctx, pr2, S5.gdr()); ctx.fillStyle = '#CFC6B4'; ctx.fillRect(0, 0, W, H); MG.tex.over(ctx, 'lines', { alpha: 0.35, spacing: 6, angle: 45, color: '#5a5070' }); ctx.restore();
        MG.geo.line(ctx, pr2, S5.GDR_LINE, { color: 'rgba(60,40,70,0.7)', width: 1.4, dash: [4, 3], smooth: 2 }); }
      // Spain lifts as a slab when it joins
      if (kJ > 0) { const es = S5.spainMain(); MG.geo.slab(ctx, pr2, es, { depth: 10 * kJ, top: P.sol, side: P.solDeep, shadowDy: 12 * kJ, stroke: 'rgba(30,26,29,0.6)', width: 1 }); }
      // fast track: a rail line racing from Madrid to Brussels
      const kF = pr(t, tFast - 0.35, tFast + 0.75, 'inOutCubic'); const route = []; const ip = window.d3.geoInterpolate(S5.CAP.Spain, S5.CAP.Belgium); for (let i = 0; i <= 50; i++) route.push(pr2(ip(i / 50)));
      if (kF > 0) { const sub = MG.path.trim(route, 0, kF); ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = A('#1a1a3a', 0.6); ctx.lineWidth = 9; ctx.beginPath(); sub.forEach((q, i) => (i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]))); ctx.stroke(); ctx.strokeStyle = '#FFD86A'; ctx.lineWidth = 4; ctx.stroke(); ctx.setLineDash([3, 9]); ctx.strokeStyle = '#1a1a3a'; ctx.lineWidth = 8; ctx.globalAlpha = 0.5; ctx.stroke(); ctx.restore(); if (kF < 1) { const h = sub[sub.length - 1]; MG.fx.glow(ctx, h[0], h[1], 60, '#FFE6A0', 0.9, 'screen'); } }
      // capitals
      const kC = pr(t, t86 - 0.3, t86 + 0.4);
      // 12 stars: one per member (1986) flying in to ring Spain
      const sp0 = pr2([-3.4, 40.0]); const ringR = 0.115 * v.scale + 30;
      const kS = pr(t, tCom - 0.5, tCom + 0.9, 'inOutCubic'); const mem12 = [...S5.EC10, 'Spain', 'Portugal'];
      mem12.forEach((n, i) => { const c0 = pr2(S5.CAP[n]); const a = -Math.PI / 2 + (i / 12) * MG.TAU; const tx = sp0[0] + Math.cos(a) * ringR, ty = sp0[1] + Math.sin(a) * ringR; const k = clamp(kS * 1.25 - i * 0.02);
        const x = lerp(c0[0], tx, E.inOutCubic(k)), y = lerp(c0[1], ty, E.inOutCubic(k)) - Math.sin(k * Math.PI) * 60; const r = lerp(8, 21, k) * kC; if (r > 0.5) { ctx.save(); ctx.shadowColor = 'rgba(10,10,40,0.5)'; ctx.shadowBlur = 6; ctx.shadowOffsetY = 3; S5.star(ctx, x, y, r, '#F4C430', 0); ctx.restore(); } });
      // funding pours in: gold particles stream Brussels → Spain
      const kP = pr(t, tFund - 0.3, tFund + 0.3); if (kP > 0) { const a = pr2(S5.CAP.Belgium); const N = 70; for (let i = 0; i < N; i++) { const u = MG.fract(MG.rand(71, i) + (t - tFund) * 0.55); const ln = MG.rand(72, i) * 0.4 - 0.2; const pt = MG.path.along(route, u); const off = Math.sin(u * Math.PI) * 50 * ln; const px = pt[0] + Math.sin(pt[2]) * off, py = pt[1] - Math.cos(pt[2]) * off; ctx.fillStyle = A('#FFD86A', kP * Math.sin(u * Math.PI)); ctx.beginPath(); ctx.arc(px, py, 2.2 + MG.rand(73, i) * 2.5, 0, MG.TAU); ctx.fill(); }
        const glowS = pr(t, tPour, tPour + 1.2); MG.fx.glow(ctx, sp0[0], sp0[1], 260, '#FFD27A', 0.35 * glowS, 'screen'); }
      // labels (≤ 6): Brussels, Spain, Portugal, GDR; the year as a cartouche on the Atlantic
      MG.geo.label(ctx, pr2, S5.CAP.Belgium, { text: 'BRUSSELS', t, t0: tFast + 0.3, size: 20, font: F.mono, weight: 600, color: '#1a1a3a', dotColor: '#1a1a3a', halo: 'rgba(246,240,226,0.9)', haloW: 6, dx: 12, dy: -10 });
      if (kJ > 0.5) { MG.geo.label(ctx, pr2, [-4.3, 39.6], { text: 'SPAIN', t, t0: tJoin + 0.2, size: 24, weight: 800, color: P.ink, dot: 0, dx: -30, dy: 8, tracking: 0.12 }); MG.geo.label(ctx, pr2, [-8.1, 39.6], { text: 'PORTUGAL', t, t0: tJoin + 0.3, size: 15, weight: 700, color: P.ink, dot: 0, dx: -36, dy: 50, tracking: 0.1 }); }
      MG.geo.label(ctx, pr2, [12.6, 52.1], { text: 'GDR', t, t0: t86 + 0.6, size: 15, font: F.mono, weight: 600, color: '#3a3050', dot: 0, dx: -14, dy: 0, alpha: 0.85 });
      { const a = pr2([-21, 44.5]), b = pr2([-11, 44.5]); const ang = Math.atan2(b[1] - a[1], b[0] - a[0]); const c = pr2([-16, 45.3]); const k = pr(t, t86 - 0.15, t86 + 0.5); if (k > 0) { ctx.save(); ctx.translate(c[0], c[1]); ctx.rotate(ang); MG.text.reveal(ctx, '1986', 0, 0, t, t86 - 0.15, { font: F.cond, weight: 900, size: 170, color: '#F6F0E2', align: 'center', style: 'rise', by: 'char', stagger: 0.05 }); MG.text.draw(ctx, 'EUROPEAN COMMUNITY', 0, 46, { font: F.mono, size: 22, weight: 600, color: '#F4C430', align: 'center', tracking: 0.25, alpha: pr(t, tCom - 0.2, tCom + 0.3) }); ctx.restore(); } }
      S5.lead(ctx, "Spain's", 150, 150, t, T('Spain', 722.86) - 0.1, { size: 56, color: '#E8EEFF', out: { at: t86 - 0.4, dur: 0.3 } });
      S5.key(ctx, 'fast track into Europe', 146, 240, t, tFast - 0.1, { size: 80, color: '#FBF6EE', out: { at: t86 - 0.4, dur: 0.3 } });
      S5.lead(ctx, 'European funding', 150, 150, t, T('European', 728.38) - 0.1, { size: 56, color: '#E8EEFF' });
      S5.key(ctx, 'pours in', 146, 240, t, tPour - 0.1, { size: 80, color: '#FFD86A' });
    },
    post: { grade: 'neutral', vignette: 0.42, sat: 1.02 },
  });

  /* ---------- 12 · ROADS · BRIDGES · AIRPORTS · TRAINS ------------------ */
  add({
    id: 's05_infra', start: 730.75,
    transIn: { type: S5.trPush(840, 700, 2.6, 0.4), dur: 0.7 },
    draw(ctx, t, S) {
      const t0 = S.t0; const tRo = T('roads', 732.22), tBr = T('bridges', 732.98), tAi = T('airports', 733.62), tTr = T('trains', 734.38), tHun = T('Hundreds', 730.86), tBil = T('billions', 731.41);
      const hh = MG.cam.handheld(t, 2, 63); const sc = lerp(6300, 6900, E.inOutSine(li(t, t0, 735.4)));
      const pr2 = MG.geo.proj('spain', { center: [-3.3, 40.0], scale: sc, translate: [1000 + hh.dx, 560 + hh.dy] });
      MG.kit.iberiaMap(ctx, { proj: pr2, relief: 0.45, lift: 12, spain: '#F2B65A' });
      // funding still raining in as gold specks landing
      MG.fx.particles(ctx, { n: 50, seed: 81, t: t - t0, area: [500, -60, 1100, 80], vel: [10, 260], velJitter: 0.4, life: 2.6, size: [1.5, 3.5], color: '#FFD86A', alpha: 0.8 * (1 - pr(t, tRo, tRo + 1)) });
      // roads (autovías) grow out of Madrid
      S5.ROADS.forEach((r, i) => S5.roadLine(ctx, pr2, r, pr(t, tRo - 0.2 + i * 0.07, tRo + 0.9 + i * 0.07, 'inOutSine'), { w: 6.5, color: '#FFF6E2' }));
      // bridges stand up at river crossings
      Object.values(MG.geo.rivers).forEach((rv) => MG.geo.line(ctx, pr2, rv, { color: A(P.sea, 0.55 * pr(t, tBr - 0.4, tBr)), width: 2.5 }));
      S5.BRIDGES.forEach((b, i) => { const k = pr(t, tBr - 0.05 + i * 0.08, tBr + 0.4 + i * 0.08, 'outBack'); if (k <= 0) return; const q = pr2(b); MG.sprite(ctx, S5.bridgeProp(), q[0], q[1] - 4, { scale: 0.8 * k, ay: 0.85 }); });
      // airports: runway marks + a plane taking off
      S5.AIRPORTS.forEach((a, i) => { const k = pr(t, tAi - 0.05 + i * 0.06, tAi + 0.35 + i * 0.06, 'outBack'); if (k <= 0) return; const q = pr2(a); ctx.save(); ctx.translate(q[0], q[1]); ctx.rotate(-0.5); ctx.scale(k, k); ctx.fillStyle = '#2a2226'; ctx.fillRect(-16, -3.5, 32, 7); ctx.fillStyle = '#FFF6E2'; for (let j = -12; j < 14; j += 7) ctx.fillRect(j, -0.8, 4, 1.6); ctx.restore(); const u = MG.fract((t - tAi) * 0.4 + i * 0.37); if (t > tAi + 0.3) S5.plane(ctx, q[0] + Math.cos(-0.5) * u * 120, q[1] + Math.sin(-0.5) * u * 120 - u * 20, 0.9 + u * 0.5, -0.5, A('#FFFFFF', 1)); });
      // trains: the first rail lines (dashed)
      [S5.HSR[0], S5.HSR[1]].forEach((l, i) => S5.roadLine(ctx, pr2, l.pts, pr(t, tTr - 0.1 + i * 0.15, tTr + 0.7 + i * 0.15, 'inOutSine'), { w: 5, color: '#1E1A1D', casing: 'rgba(255,246,226,0.9)', dash: [6, 6], dashColor: '#FFF6E2' }));
      MG.geo.label(ctx, pr2, MG.geo.cities.Madrid, { text: 'MADRID', t, t0: t0 + 0.2, size: 22, weight: 700, color: P.ink, dotColor: P.rojo, halo: 'rgba(250,244,232,0.85)', haloW: 6 });
      // legend (map key) — each entry appears on its spoken word
      const items = [['roads', tRo], ['bridges', tBr], ['airports', tAi], ['trains', tTr]]; const lx = 1440, ly = 600;
      const kL = pr(t, tRo - 0.3, tRo + 0.1); if (kL > 0) { ctx.save(); ctx.globalAlpha = kL; MG.fx.shadow(ctx, MG.path.rr(lx - 30, ly - 70, 400, 380, 6), { dx: 6, dy: 10, blur: 18, color: 'rgba(30,20,10,0.3)', fill: '#FAF4E8' }); ctx.fillStyle = '#FAF4E8'; ctx.fill(MG.path.rr(lx - 30, ly - 70, 400, 380, 6)); MG.tex.over(ctx, 'fibers', { alpha: 0.5, path: MG.path.rr(lx - 30, ly - 70, 400, 380, 6) }); MG.text.draw(ctx, 'FUNDED BY EUROPE', lx, ly - 26, { font: F.mono, size: 22, weight: 600, color: P.ink2, tracking: 0.2 }); ctx.restore(); }
      items.forEach(([w, tw0], i) => { const k = pr(t, tw0 - 0.08, tw0 + 0.3); if (k <= 0) return; const y = ly + 44 + i * 70; ctx.save(); ctx.globalAlpha = k; if (i === 0) { ctx.strokeStyle = 'rgba(40,25,20,0.55)'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(lx, y - 8); ctx.lineTo(lx + 56, y - 8); ctx.stroke(); ctx.strokeStyle = '#FFF6E2'; ctx.lineWidth = 5; ctx.stroke(); } if (i === 1) MG.sprite(ctx, S5.bridgeProp(), lx + 28, y - 4, { scale: 0.42, ay: 0.85 }); if (i === 2) S5.plane(ctx, lx + 28, y - 8, 1.3, -0.4, '#FBF6EE'); if (i === 3) { ctx.strokeStyle = '#1E1A1D'; ctx.lineWidth = 6; ctx.setLineDash([6, 6]); ctx.beginPath(); ctx.moveTo(lx, y - 8); ctx.lineTo(lx + 56, y - 8); ctx.stroke(); } ctx.restore(); S5.key(ctx, w, lx + 84, y + 4, t, tw0 - 0.08, { size: 44, weight: 700, style: 'rise' }); });
      MG.geo.canaryInset(ctx, [140, 820, 260, 150], { fill: '#F2B65A', frame: 'rgba(30,25,20,0.45)' });
      S5.lead(ctx, 'hundreds of', 150, 150, t, tHun - 0.1, { size: 56 });
      S5.key(ctx, 'billions', 146, 250, t, tBil - 0.1, { size: 100, color: P.ink });
    },
    post: { grade: 'warm', vignette: 0.36 },
  });

  /* ---------- 13 · BARCELONA 1992 · THE ARROW LIGHTS THE CAULDRON ----- */
  add({
    id: 's05_bcn92', start: 735.31,
    transIn: { type: 'flash', dur: 0.55, color: '#FFE2A8', x: 1100, y: 320 },
    init() {
      this.bg = MG.cache('s5bcnbg', W + 200, H + 200, (x, w, h) => {
        const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, '#0C1230'); g.addColorStop(0.55, '#26244E'); g.addColorStop(0.82, '#5A3A5E'); g.addColorStop(1, '#2a1a2a'); x.fillStyle = g; x.fillRect(0, 0, w, h);
        const r = MG.rng(3); for (let i = 0; i < 55; i++) { x.fillStyle = A('#FFF6E0', 0.25 + r() * 0.5); x.beginPath(); x.arc(r() * w, r() * h * 0.45, 0.7 + r() * 1.2, 0, MG.TAU); x.fill(); }
        // city lights below Montjuïc
        for (let i = 0; i < 900; i++) { const yy = h - 260 + Math.pow(r(), 0.7) * 260; x.fillStyle = A(r() < 0.8 ? '#F7C873' : '#FFF2D8', 0.35 + r() * 0.5); x.fillRect(r() * w, yy, 2, 2); }
        // Montjuïc hill
        const hill = []; for (let i = 0; i <= 60; i++) { const u = i / 60; hill.push([u * w, h - 300 - Math.sin(u * Math.PI) * 180 - MG.fbm(u * 4, 2, 3) * 40]); } x.fillStyle = '#120d1e'; x.fill(MG.path.poly([...hill, [w, h], [0, h]]));
        MG.tex.over(x, 'blotch', { alpha: 0.2, color: '#000', scale: 3 });
      });
      this.stadium = MG.cache('s5stadium', 1300, 520, (x, w, h) => {
        // neoclassical facade with the central gate & two towers
        x.fillStyle = '#2a2238'; x.fillRect(60, 250, w - 120, 270); x.fillStyle = '#3a3048'; x.fillRect(60, 240, w - 120, 22);
        for (let i = 0; i < 22; i++) { const ax = 90 + i * 52; x.fillStyle = '#18121f'; x.beginPath(); x.moveTo(ax, 520); x.lineTo(ax, 330); x.arc(ax + 18, 330, 18, Math.PI, 0); x.lineTo(ax + 36, 520); x.fill(); }
        for (const tx of [470, 760]) { x.fillStyle = '#332a42'; x.fillRect(tx, 120, 80, 400); x.fillStyle = '#3e344e'; x.fillRect(tx - 10, 110, 100, 18); x.fillStyle = '#18121f'; x.beginPath(); x.moveTo(tx + 20, 520); x.lineTo(tx + 20, 300); x.arc(tx + 40, 300, 20, Math.PI, 0); x.lineTo(tx + 60, 520); x.fill(); x.fillStyle = '#2a2238'; x.beginPath(); x.moveTo(tx + 10, 110); x.quadraticCurveTo(tx + 40, 60, tx + 70, 110); x.fill(); }
        x.fillStyle = '#3a3048'; x.fillRect(550, 200, 210, 60);
        // stadium bowl glow above the rim + floodlight masts
        const gl = x.createLinearGradient(0, 120, 0, 250); gl.addColorStop(0, 'rgba(255,200,130,0)'); gl.addColorStop(1, 'rgba(255,200,130,0.35)'); x.fillStyle = gl; x.fillRect(60, 120, w - 120, 130);
        for (const fx3 of [110, w - 140]) { x.fillStyle = '#2a2238'; x.fillRect(fx3, 40, 14, 210); x.fillStyle = '#FFF0D0'; for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) x.fillRect(fx3 - 16 + i * 12, 30 + j * 10, 9, 7); }
      });
    },
    draw(ctx, t, S) {
      const t0 = S.t0; const t92 = T('1992', 735.55), tBcn = T('Barcelona', 737.07), tOly = T('Olympics', 738.31), tHosts = T('hosts', 737.79);
      const hh = MG.cam.handheld(t, 2.5, 71); const crane = E.inOutSine(li(t, t0, 739.6));
      const follow = pr(t, T('Barcelona', 737.07) - 0.5, T('hosts', 737.79) + 0.3, 'inOutSine'); ctx.save(); MG.cam.apply(ctx, { x: lerp(900, 1200, follow), y: lerp(640, 470, follow) - crane * 10, zoom: lerp(1.12, 1.04, crane), dx: hh.dx, dy: hh.dy, rot: hh.rot });
      MG.sprite(ctx, this.bg, -100, -100, { ax: 0, ay: 0 });
      // Calatrava's Montjuïc tower (white curved mast with its ring)
      ctx.save(); ctx.translate(430, 760); ctx.rotate(-0.28); ctx.fillStyle = '#E9E4DA'; ctx.beginPath(); ctx.moveTo(-10, 0); ctx.quadraticCurveTo(-18, -280, 6, -560); ctx.lineTo(14, -560); ctx.quadraticCurveTo(4, -280, 12, 0); ctx.closePath(); ctx.fill(); ctx.strokeStyle = '#E9E4DA'; ctx.lineWidth = 12; ctx.beginPath(); ctx.arc(-6, -190, 80, Math.PI * 0.55, Math.PI * 1.75); ctx.stroke(); ctx.fillStyle = '#E9E4DA'; ctx.beginPath(); ctx.ellipse(0, -190, 26, 14, 0.2, 0, MG.TAU); ctx.fill(); ctx.restore();
      // stadium + the cauldron on its rim
      const ign = pr(t, tHosts + 0.12, tHosts + 0.5, 'snap'); const sx = 1300, sy = 860;
      MG.sprite(ctx, this.stadium, sx - 650, sy - 520, { ax: 0, ay: 0 });
      if (ign > 0) { ctx.save(); ctx.globalCompositeOperation = 'screen'; ctx.fillStyle = A('#FF9A4A', 0.25 * ign); ctx.fillRect(sx - 590, sy - 280, 1180, 280); ctx.restore(); }
      const cx = 1610, cy = 360; ctx.fillStyle = '#2a2238'; ctx.beginPath(); ctx.moveTo(cx - 14, sy - 270); ctx.lineTo(cx - 6, cy + 30); ctx.lineTo(cx + 6, cy + 30); ctx.lineTo(cx + 14, sy - 270); ctx.fill();
      S5.form(ctx, [[cx - 54, cy], [cx + 54, cy], [cx + 30, cy + 34], [cx - 30, cy + 34]], { poly: true, color: '#4a4058', shade: 0.4, hi: 0.3, cel: true, outline: '#0e0a14', ow: 2 });
      // frieze: BARCELONA 1992 (integrated in the facade)
      const kF = pr(t, t92 - 0.2, t92 + 0.4); if (kF > 0) { MG.text.reveal(ctx, 'BARCELONA', sx - 140, sy - 284, t, t92 - 0.1, { font: F.roman, weight: 700, size: 40, color: mix('#B9AECB', '#FFE2A8', ign), tracking: 0.35, align: 'right', style: 'fade', by: 'char', stagger: 0.03 }); MG.text.reveal(ctx, '1992', sx + 90, sy - 284, t, t92, { font: F.roman, weight: 900, size: 40, color: mix('#B9AECB', '#FFE2A8', ign), tracking: 0.35, align: 'left', style: 'fade', by: 'char', stagger: 0.05 }); }
      // flashbulbs in the crowd
      for (let i = 0; i < 40; i++) { const ph = MG.fract(t * 0.7 + MG.rand(97, i)); if (ph > 0.06) continue; ctx.fillStyle = A('#FFFFFF', 1 - ph / 0.06); ctx.beginPath(); ctx.arc(sx - 560 + MG.rand(98, i) * 1120, sy - 280 - MG.rand(99, i) * 40, 2.5, 0, MG.TAU); ctx.fill(); }
      // the archer (silhouette, foreground) and the flaming arrow
      const ax = 820, ay = 990; ctx.save(); ctx.fillStyle = '#07060c'; ctx.beginPath(); ctx.moveTo(500, H + 60); ctx.lineTo(560, 1000); ctx.lineTo(1080, 1000); ctx.lineTo(1140, H + 60); ctx.fill(); ctx.translate(ax, ay); ctx.fillStyle = '#07060c'; ctx.strokeStyle = '#07060c'; ctx.lineCap = 'round';
      ctx.lineWidth = 18; ctx.beginPath(); ctx.moveTo(-14, 0); ctx.lineTo(-30, -120); ctx.moveTo(14, 0); ctx.lineTo(26, -120); ctx.stroke(); ctx.fill(MG.path.smooth([[-30, -120], [-26, -230], [0, -250], [26, -230], [28, -120]], true)); ctx.beginPath(); ctx.arc(0, -276, 22, 0, MG.TAU); ctx.fill();
      ctx.lineWidth = 12; ctx.beginPath(); ctx.moveTo(-10, -236); ctx.lineTo(60, -300); ctx.moveTo(10, -236); ctx.lineTo(-40, -270); ctx.stroke(); ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(70, -300, 70, -2.2, 0.6); ctx.stroke(); ctx.restore();
      // arrow flight (bezier) with fire trail
      const tA0 = tBcn - 0.5, tA1 = tHosts + 0.12; const ka = li(t, tA0, tA1); const P0 = [ax + 70, ay - 300], P1 = [1200, -60], P2 = [cx, cy - 6];
      const bz = (u) => [(1 - u) * (1 - u) * P0[0] + 2 * (1 - u) * u * P1[0] + u * u * P2[0], (1 - u) * (1 - u) * P0[1] + 2 * (1 - u) * u * P1[1] + u * u * P2[1]];
      if (ka > 0 && ka < 1) { const pts = []; for (let i = 0; i <= 30; i++) pts.push(bz(Math.max(0, ka - 0.25) + (i / 30) * Math.min(0.25, ka))); MG.fx.line(ctx, pts, { color: A('#FF9A4A', 0.5), width: 8 }); MG.fx.line(ctx, pts, { color: '#FFE2A8', width: 3 }); const h = bz(ka); MG.fx.glow(ctx, h[0], h[1], 70, '#FFB060', 0.9, 'screen'); MG.fx.particles(ctx, { n: 26, seed: 91, t: t * 3, area: [h[0] - 20, h[1] - 10, 40, 20], vel: [0, 40], life: 0.6, size: [1, 3], color: '#FFC870', alpha: 0.8, blend: 'lighter' }); }
      // the cauldron fire
      if (ign > 0) { const tt = tw(t); MG.fx.glow(ctx, cx, cy - 40, 420 * ign, '#FF9A3A', 0.55, 'screen'); for (let i = 0; i < 9; i++) { const ph = tt * 7 + i * 1.3; const fx2 = cx + (i - 4) * 9 + Math.sin(ph) * 6, fh = (90 + 70 * MG.noise2(tt * 3, i)) * ign; ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = A(i % 3 ? '#FF8A2A' : '#FFD070', 0.55); ctx.beginPath(); ctx.moveTo(fx2 - 16, cy); ctx.quadraticCurveTo(fx2 - 20, cy - fh * 0.5, fx2 + Math.sin(ph * 1.3) * 10, cy - fh); ctx.quadraticCurveTo(fx2 + 20, cy - fh * 0.5, fx2 + 16, cy); ctx.fill(); ctx.restore(); }
        MG.fx.particles(ctx, { n: 40, seed: 93, t, area: [cx - 40, cy - 80, 80, 40], vel: [0, -80], velJitter: 0.8, life: 1.6, size: [1, 3], color: '#FFC870', alpha: 0.8, blend: 'lighter', drift: 30 }); }
      // fireworks after "Olympics"
      for (let k = 0; k < 4; k++) { const tb = tOly + 0.1 + k * 0.32; const u = li(t, tb, tb + 1.3); if (u <= 0 || u >= 1) continue; const bxp = [700, 1100, 900, 1350][k], byp = [200, 160, 260, 220][k]; const col = ['#FFD86A', '#F2735A', '#FFF2D8', '#7FD0E8'][k]; ctx.save(); ctx.globalCompositeOperation = 'lighter'; for (let i = 0; i < 26; i++) { const a = (i / 26) * MG.TAU; const r = E.outCubic(u) * 120; ctx.fillStyle = A(col, (1 - u) * 0.9); ctx.beginPath(); ctx.arc(bxp + Math.cos(a) * r, byp + Math.sin(a) * r + u * u * 40, 2.6, 0, MG.TAU); ctx.fill(); } ctx.restore(); }
      ctx.restore();
      S5.lead(ctx, 'In 1992,', 150, 150, t, t92 - 0.2, { size: 58, color: '#E8E2F2' });
      S5.key(ctx, 'Barcelona hosts the Olympics', 146, 250, t, tBcn - 0.1, { size: 78, color: '#FFF3DE' });
    },
    post: { grade: 'night', vignette: 0.5, bloom: 0.22, halation: 0.12 },
  });

  /* ---------- 14 · SEVILLE · EXPO '92 · THE ALAMILLO BRIDGE ------------- */
  add({
    id: 's05_expo92', start: 739.50,
    transIn: { type: 'whip', dir: 'left', dur: 0.45 },
    init() {
      this.sky = MG.cache('s5sevsky', W + 300, H, (x, w, h) => { const g = x.createLinearGradient(0, 0, 0, h * 0.62); g.addColorStop(0, '#2E2E62'); g.addColorStop(0.45, '#8E5A7E'); g.addColorStop(0.8, '#E88A6A'); g.addColorStop(1, '#F7C07A'); x.fillStyle = g; x.fillRect(0, 0, w, h); MG.tex.over(x, 'blotch', { alpha: 0.15, color: '#000', scale: 3 }); });
      this.skyline = MG.cache('s5expo', W + 300, 260, (x, w, h) => { x.fillStyle = '#3a2440'; const r = MG.rng(12); for (let i = 0; i < 30; i++) { const bx = r() * w, bw = 60 + r() * 140, bh = 30 + r() * 90; x.fillRect(bx, h - bh, bw, bh); } x.beginPath(); x.arc(560, h - 70, 60, Math.PI, 0); x.fill(); x.fillRect(820, h - 210, 18, 210); x.fillRect(800, h - 230, 58, 30); for (let i = 0; i < 9; i++) { x.strokeStyle = '#3a2440'; x.lineWidth = 3; x.beginPath(); x.moveTo(800, h - 200 + i * 22); x.lineTo(858, h - 178 + i * 22); x.stroke(); } x.fillRect(0, h - 40, w, 40); x.strokeStyle = '#3a2440'; x.lineWidth = 6; x.beginPath(); x.moveTo(0, h - 120); for (let xx = 0; xx <= w; xx += 40) x.lineTo(xx, h - 120 + Math.sin(xx * 0.004) * 10); x.stroke(); for (let xx = 30; xx < w; xx += 160) x.fillRect(xx, h - 120, 8, 80); });
    },
    draw(ctx, t, S) {
      const t0 = S.t0; const tSev = T('Seville', 739.51), tFair = T('Fair', 740.91);
      const hh = MG.cam.handheld(t, 2, 73); const tr = E.inOutSine(li(t, t0, 742.2));
      const camx = lerp(-120, 60, tr);
      MG.sprite(ctx, this.sky, -150 - camx * 0.2, 0, { ax: 0, ay: 0 });
      MG.kit.sun(ctx, 520 - camx * 0.2, 650, 70, t, { corona: 0.7, halftone: 0.3 });
      MG.sprite(ctx, this.skyline, -150 - camx * 0.5 + hh.dx * 0.5, 410, { ax: 0, ay: 0 });
      // river
      const ry = 670; ctx.fillStyle = '#5A4670'; ctx.fillRect(0, ry, W, H - ry); const rg = ctx.createLinearGradient(0, ry, 0, H); rg.addColorStop(0, 'rgba(247,192,122,0.55)'); rg.addColorStop(1, 'rgba(40,30,70,0.2)'); ctx.fillStyle = rg; ctx.fillRect(0, ry, W, H - ry);
      // Alamillo bridge: inclined pylon (58°) + harp of 13 cable pairs, deck across the river
      const ox = -camx + hh.dx, oy = hh.dy;
      const drawBridge = (refl) => {
        ctx.save(); if (refl) { ctx.translate(0, ry * 2 + 10); ctx.scale(1, -1); ctx.globalAlpha = 0.35; }
        const d0 = [300 + ox, 640 + oy], d1 = [1380 + ox, 640 + oy]; const base = [1380 + ox, 650 + oy]; const ang = MG.deg(58); const Lp = 640; const top = [base[0] + Math.cos(ang) * Lp, base[1] - Math.sin(ang) * Lp];
        ctx.strokeStyle = refl ? '#E8D8C8' : '#FBF2E6'; ctx.lineWidth = 1.6; for (let i = 0; i < 13; i++) { const u = 0.32 + (i / 12) * 0.66; const pp = [lerp(base[0], top[0], u), lerp(base[1], top[1], u)]; const dx2 = lerp(d1[0] - 40, d0[0] + 140, i / 12); ctx.beginPath(); ctx.moveTo(pp[0], pp[1]); ctx.lineTo(dx2, d0[1]); ctx.stroke(); ctx.beginPath(); ctx.moveTo(pp[0] + 6, pp[1] + 4); ctx.lineTo(dx2 + 10, d0[1] + 4); ctx.stroke(); }
        const py = MG.path.poly([[base[0] - 26, base[1] + 10], [base[0] + 30, base[1] + 10], [top[0] + 10, top[1] + 6], [top[0] - 14, top[1] - 4]]); MG.fx.volume(ctx, py, [base[0] - 26, top[1] - 4, top[0] - base[0] + 60, base[1] - top[1] + 14], { color: '#F4ECDE', shade: 0.45, hi: 0.4, cel: true, light: [-0.8, -0.5], rim: '#FFD8A0', rimW: 3 });
        ctx.fillStyle = '#EDE2D2'; ctx.fillRect(d0[0], d0[1] - 10, d1[0] - d0[0] + 40, 16); ctx.fillStyle = 'rgba(50,30,60,0.4)'; ctx.fillRect(d0[0], d0[1] + 4, d1[0] - d0[0] + 40, 6);
        ctx.restore();
      };
      drawBridge(true); ctx.fillStyle = 'rgba(255,230,200,0.15)'; for (let i = 0; i < 26; i++) { const yy = ry + 14 + i * 16; ctx.fillRect(0, yy + Math.sin(t * 2 + i) * 2, W, 1.5); }
      drawBridge(false);
      // banks
      ctx.fillStyle = '#2a1c30'; ctx.beginPath(); ctx.moveTo(-10, 650); ctx.lineTo(320 + ox, 646 + oy); ctx.lineTo(300 + ox, 700); ctx.lineTo(-10, 720); ctx.fill(); ctx.beginPath(); ctx.moveTo(1360 + ox, 650 + oy); ctx.lineTo(W + 10, 640); ctx.lineTo(W + 10, 720); ctx.lineTo(1380 + ox, 700); ctx.fill();
      S5.kick(ctx, 'Seville · World’s Fair', 150, 150, t, tSev - 0.1, { color: '#FFE6C8', size: 24 });
      S5.key(ctx, 'EXPO ’92', 146, 270, t, tFair - 0.5, { size: 120, color: '#FFF3DE', font: F.display, weight: 800 });
    },
    post: { grade: 'golden', vignette: 0.42, bloom: 0.1 },
  });

  /* ---------- 15 · THE FIRST AVE (3D) ----------------------------------- */
  S5.aveSweep = (ctx, edge, p) => { // 2D white train nose sweeping through the foreground (foreground wipe)
    ctx.save(); ctx.translate(edge, 0); ctx.filter = 'blur(6px)';
    const body = new Path2D(); body.moveTo(0, 620); body.bezierCurveTo(60, 300, 260, 180, 600, 150); body.lineTo(2600, 150); body.lineTo(2600, 1200); body.lineTo(0, 1200); body.closePath();
    ctx.fillStyle = '#F3EFE6'; ctx.fill(body); ctx.fillStyle = '#1F2E5A'; ctx.beginPath(); ctx.moveTo(200, 360); ctx.bezierCurveTo(320, 250, 480, 230, 700, 226); ctx.lineTo(2600, 226); ctx.lineTo(2600, 420); ctx.lineTo(260, 420); ctx.closePath(); ctx.fill(); ctx.fillStyle = P.sol; ctx.fillRect(220, 450, 2400, 14);
    ctx.restore();
  };
  add({
    id: 's05_ave', start: 741.79,
    transIn: { type: S5.trSweep(S5.aveSweep, -1), dur: 0.7, ease: 'linear' },
    init() {
      const T3 = THREE; const sc = new T3.Scene(); this.sc = sc;
      const skyC = MG.canvas(16, 512); const sx = skyC.getContext('2d'); const g = sx.createLinearGradient(0, 0, 0, 512); g.addColorStop(0, '#6F94BC'); g.addColorStop(0.5, '#E8B98A'); g.addColorStop(0.62, '#F6D6A4'); g.addColorStop(1, '#F6D6A4'); sx.fillStyle = g; sx.fillRect(0, 0, 16, 512); this.sky2d = MG.cache('s5aveSky', W, H, (x, w, h) => { x.drawImage(skyC, 0, 0, w, h); MG.tex.over(x, 'blotch', { alpha: 0.08, color: '#7a5a40', scale: 3 }); }); // sky painted in 2D (a 3D background quad costs ~130 ms in software GL)
      sc.fog = new T3.Fog(0xEFCB9C, 40, 520);
      this.cam = new T3.PerspectiveCamera(30, 16 / 9, 0.5, 900);
      sc.add(new T3.HemisphereLight(0xFFE8C8, 0x7a5a40, 1.25)); const sun = new T3.DirectionalLight(0xFFD49A, 2.8); sun.position.set(-80, 60, -40); sc.add(sun);
      // ground: olive groves & red earth (canvas texture)
      const gc = MG.canvas(256, 256); const gx = gc.getContext('2d'); gx.fillStyle = '#C98B5A'; gx.fillRect(0, 0, 256, 256); const r = MG.rng(4); for (let i = 0; i < 1200; i++) { gx.fillStyle = A(r() < 0.5 ? '#B5774A' : '#D9A06A', 0.5); gx.fillRect(r() * 256, r() * 256, 2, 2); } for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) { const cx2 = 32 + i * 64 + (j % 2) * 10, cy2 = 32 + j * 64; gx.fillStyle = 'rgba(60,40,20,0.35)'; gx.beginPath(); gx.ellipse(cx2 + 6, cy2 + 6, 16, 10, 0, 0, MG.TAU); gx.fill(); gx.fillStyle = '#5E6A38'; gx.beginPath(); gx.arc(cx2, cy2, 14, 0, MG.TAU); gx.fill(); gx.fillStyle = '#7E8A4A'; gx.beginPath(); gx.arc(cx2 - 4, cy2 - 4, 7, 0, MG.TAU); gx.fill(); }
      const gt = MG.three.canvasTexture(gc); gt.wrapS = gt.wrapT = T3.RepeatWrapping; gt.repeat.set(60, 300);
      const ground = new T3.Mesh(new T3.PlaneGeometry(900, 6000), new T3.MeshBasicMaterial({ map: gt, color: 0xF2E2CC })); ground.rotation.x = -Math.PI / 2; ground.position.z = -2000; sc.add(ground);
      // ballast bed, rails, sleepers, catenary masts
      const bed = new T3.Mesh(new T3.BoxGeometry(6.5, 0.5, 6000), new T3.MeshLambertMaterial({ color: 0x9a8a78 })); bed.position.set(0, 0.25, -2000); sc.add(bed);
      for (const x of [-0.72, 0.72]) { const rail = new T3.Mesh(new T3.BoxGeometry(0.08, 0.16, 6000), new T3.MeshLambertMaterial({ color: 0xB8B4B0, emissive: 0x302820 })); rail.position.set(x, 0.62, -2000); sc.add(rail); }
      const slp = new T3.InstancedMesh(new T3.BoxGeometry(2.6, 0.12, 0.26), new T3.MeshLambertMaterial({ color: 0x6a6460 }), 900); const m4 = new T3.Matrix4(); for (let i = 0; i < 900; i++) { m4.makeTranslation(0, 0.52, 40 - i * 0.65 * 1.0); slp.setMatrixAt(i, m4); } sc.add(slp);
      const masts = new T3.InstancedMesh(new T3.BoxGeometry(0.28, 7.5, 0.28), new T3.MeshLambertMaterial({ color: 0x6a6a72 }), 120); const arms = new T3.InstancedMesh(new T3.BoxGeometry(3.6, 0.12, 0.12), new T3.MeshLambertMaterial({ color: 0x5a5a62 }), 120);
      for (let i = 0; i < 120; i++) { m4.makeTranslation(-4.2, 3.75, 60 - i * 50); masts.setMatrixAt(i, m4); m4.makeTranslation(-2.5, 6.9, 60 - i * 50); arms.setMatrixAt(i, m4); } sc.add(masts); sc.add(arms);
      const wire = new T3.Mesh(new T3.BoxGeometry(0.03, 0.03, 6000), new T3.MeshBasicMaterial({ color: 0x3a3a40 })); wire.position.set(0, 6.6, -2000); sc.add(wire);
      // the train: lofted power car (nose) + 2 coaches, vertex-coloured livery (white, navy window band, saffron pinstripe)
      const col = (x, y, zn, cab) => { const white = [0.95, 0.93, 0.89], navy = [0.12, 0.18, 0.36], sol = [0.95, 0.64, 0.23], dark = [0.08, 0.09, 0.12], skirt = [0.55, 0.56, 0.6];
        if (y < 0.95) return skirt; if (cab && zn < 6.2 && zn > 2.0 && y > 2.05) return dark; if (y > 2.15 && y < 2.85 && (!cab || zn > 6.6)) return navy; if (y > 1.86 && y < 1.98) return sol; return white; };
      const loft = (len, nz, nu, prof, cab, win) => { const pos = [], cl = [], idx = []; for (let i = 0; i <= nz; i++) { const zf = i / nz; const zn = zf * len; const q = prof(zn); for (let j = 0; j <= nu; j++) { const a = (j / nu) * Math.PI * 2; const c = Math.cos(a), s2 = Math.sin(a); const ex = 2 / 5; const x = Math.sign(c) * Math.pow(Math.abs(c), ex) * q.w; const y = q.y0 + q.h / 2 + Math.sign(s2) * Math.pow(Math.abs(s2), ex) * q.h / 2; pos.push(x, y, -zn); let cc = col(x, y, zn, cab); if (win && cc[2] > 0.3 && cc[0] < 0.2 && (zn % 2.3) < 0.32) cc = [0.95, 0.93, 0.89]; cl.push(...cc); } }
        for (let i = 0; i < nz; i++) for (let j = 0; j < nu; j++) { const a0 = i * (nu + 1) + j, b0 = a0 + nu + 1; idx.push(a0, b0, a0 + 1, b0, b0 + 1, a0 + 1); }
        const g2 = new T3.BufferGeometry(); g2.setAttribute('position', new T3.Float32BufferAttribute(pos, 3)); g2.setAttribute('color', new T3.Float32BufferAttribute(cl, 3)); g2.setIndex(idx); g2.computeVertexNormals(); return g2; };
      const mat = new T3.MeshPhongMaterial({ vertexColors: true, shininess: 70, specular: 0x8a7a6a });
      const nose = (zn) => { if (zn < 8) { const u = zn / 8; return { w: 1.45 * (0.14 + 0.86 * Math.pow(u, 0.55)), h: 3.3 * (0.22 + 0.78 * Math.pow(u, 0.75)), y0: 0.62 }; } return { w: 1.45, h: 3.3, y0: 0.62 }; };
      this.train = new T3.Group(); const pc = new T3.Mesh(loft(22, 70, 40, nose, true, false), mat); this.train.add(pc);
      for (let k = 0; k < 3; k++) { const c = new T3.Mesh(loft(18.7, 90, 40, () => ({ w: 1.45, h: 3.3, y0: 0.62 }), false, true), mat); c.position.z = -(22.6 + k * 19.3); this.train.add(c); }
      sc.add(this.train);
    },
    draw(ctx, t, S) {
      const t0 = S.t0; const tAve = T('AVE', 743.63);
      const v = 83; // ≈300 km/h in m/s
      const Zn = -400 + (t - t0) * v; this.train.position.set(0, 0, Zn);
      // car-mount: the camera rides ahead of the nose, dollying in and swinging to the side; the world streams past
      const rel = MG.keys(t, [[t0, [2.6, 1.05, 30]], [743.3, [4.4, 1.45, 15], 'inOutSine'], [745.6, [5.4, 2.0, 9.5], 'inOutSine']]);
      const lk = MG.keys(t, [[t0, [0, 1.7, -4]], [745.6, [0, 1.9, -7]]]);
      const hh = MG.cam.handheld(t, 1, 77);
      this.cam.position.set(rel[0] + hh.dx * 0.02, rel[1] + hh.dy * 0.015 + Math.sin(t * 31) * 0.01, Zn + rel[2]); this.cam.lookAt(lk[0], lk[1], Zn + lk[2]); this.cam.fov = lerp(26, 34, E.inOutSine(li(t, t0, 745.6))); this.cam.updateProjectionMatrix();
      ctx.drawImage(this.sky2d, 0, 0); const c = MG.three.render(this.sc, this.cam, { slot: 0, exposure: 1.05, w: 1440, h: 810, clearAlpha: 0 }); ctx.drawImage(c, 0, 0, W, H);
      const lock = 1;
      MG.fx.glow(ctx, 260, 300, 520, '#FFE2A8', 0.35, 'screen');
      // speed streaks while tracking
      if (lock > 0.3) MG.fx.particles(ctx, { n: 36, seed: 95, t, area: [0, 640, W, 440], vel: [2600, 0], velJitter: 0.3, life: 0.6, size: [1, 2.4], color: '#FFF1DA', alpha: 0.35 * lock, shape: 'streak', streak: 0.06 });
      S5.kick(ctx, 'Madrid — Seville · April 1992', 150, 150, t, tAve - 0.5, { color: '#2a1a16', size: 24 });
      S5.key(ctx, 'AVE', 146, 290, t, tAve - 0.1, { size: 160, color: '#FBF6EE', font: F.wide, weight: 800, shadow: { blur: 14, dy: 6, color: 'rgba(40,20,10,0.35)' } });
      S5.lead(ctx, 'high-speed', 152, 360, t, T('high-speed', 744.27) - 0.05, { size: 60, color: '#FBF6EE', shadow: { blur: 10, dy: 4, color: 'rgba(40,20,10,0.35)' } });
    },
    post: { grade: 'golden', vignette: 0.36 },
  });

  /* ---------- 16–19 · THE HIGH-SPEED MAP ------------------------------- */
  const NETV = { center: [-6.3, 40.1], scale: 6100 };
  S5.netProj = (t, hh) => MG.geo.proj('spain', { center: NETV.center, scale: NETV.scale, translate: [960 + (hh ? hh.dx : 0), 540 + (hh ? hh.dy : 0)] });
  /** top view of a little AVE (moving head on the map) */
  S5.trainHead = (ctx, x, y, ang, s = 1) => { ctx.save(); ctx.translate(x, y); ctx.rotate(ang); ctx.scale(s, s); MG.fx.contact(ctx, -10, 4, 40, 8, 0.35); ctx.fillStyle = '#FBF6EE'; ctx.strokeStyle = '#1E1A1D'; ctx.lineWidth = 2; const p = new Path2D(); p.moveTo(22, 0); p.bezierCurveTo(18, -7, 8, -8, -2, -8); p.lineTo(-46, -8); p.lineTo(-46, 8); p.lineTo(-2, 8); p.bezierCurveTo(8, 8, 18, 7, 22, 0); p.closePath(); ctx.fill(p); ctx.stroke(p); ctx.fillStyle = '#1F2E5A'; ctx.fillRect(-44, -3, 50, 6); ctx.fillStyle = P.sol; ctx.fillRect(-44, 4, 48, 2); ctx.restore(); };
  S5.hsrLine = (ctx, pr2, pts, k, o = {}) => S5.roadLine(ctx, pr2, pts, k, { w: o.w || 6, color: o.color || P.rojo, casing: o.casing || 'rgba(250,244,232,0.95)' });
  add({
    id: 's05_aveMap', start: 745.55,
    transIn: { type: S5.trPull(1172, 506, 0.12), dur: 0.7 },
    draw(ctx, t, S) {
      const t0 = S.t0; const tMad = T('Madrid', 745.75), tSev = T('Seville', 746.51);
      const hh = MG.cam.handheld(t, 2, 81); const pr2 = S5.netProj(t, hh);
      MG.kit.iberiaMap(ctx, { proj: pr2, relief: 0.5, lift: 12 });
      const L = S5.HSR[0].pts; const k = pr(t, tMad - 0.15, tSev + 0.45, 'inOutSine'); const head = S5.hsrLine(ctx, pr2, L, k, { w: 8 });
      if (head && k < 1) { const sub = MG.path.trim(L.map((c) => pr2(c)), 0, k); const a = sub.length > 1 ? Math.atan2(sub[sub.length - 1][1] - sub[sub.length - 2][1], sub[sub.length - 1][0] - sub[sub.length - 2][0]) : 0; S5.trainHead(ctx, head[0], head[1], a, 1.3); }
      MG.geo.label(ctx, pr2, MG.geo.cities.Madrid, { text: 'MADRID', t, t0: tMad - 0.1, size: 30, weight: 800, color: P.ink, dotColor: P.rojo, halo: 'rgba(250,244,232,0.9)', haloW: 7, dx: 16, dy: -10 });
      MG.geo.label(ctx, pr2, MG.geo.cities.Seville, { text: 'SEVILLE', t, t0: tSev - 0.1, size: 30, weight: 800, color: P.ink, dotColor: P.rojo, halo: 'rgba(250,244,232,0.9)', haloW: 7, dx: -150, dy: 34 });
      MG.geo.label(ctx, pr2, [-4.79, 37.89], { text: 'CÓRDOBA', t, t0: tSev - 0.35, size: 18, weight: 600, color: P.ink2, dotColor: P.ink, dot: 4, halo: 'rgba(250,244,232,0.85)', haloW: 6 });
      MG.geo.label(ctx, pr2, [-3.93, 38.98], { text: 'CIUDAD REAL', t, t0: tMad + 0.3, size: 18, weight: 600, color: P.ink2, dotColor: P.ink, dot: 4, halo: 'rgba(250,244,232,0.85)', haloW: 6 });
      S5.kick(ctx, 'the first line · 1992', 150, 350, t, t0 + 0.2, { size: 24, color: P.ink });
      S5.key(ctx, 'Madrid — Seville', 146, 440, t, tMad - 0.1, { size: 70, font: F.display, weight: 800 });
      MG.geo.canaryInset(ctx, [140, 830, 250, 140], { fill: K_SPAIN, frame: 'rgba(30,25,20,0.45)' });
    },
    post: { grade: 'warm', vignette: 0.34 },
  });
  const K_SPAIN = MG.kit.map.spain;
  add({
    id: 's05_network', start: 747.55,
    draw(ctx, t, S) {
      const t0 = S.t0; const tNum = T('2,500', 750.31), tMi = T('miles', 750.99);
      const hh = MG.cam.handheld(t, 2, 83); const pr2 = S5.netProj(t, hh);
      MG.kit.iberiaMap(ctx, { proj: pr2, relief: 0.5, lift: 12 });
      const yr = lerp(1992, 2025, pr(t, t0 + 0.2, tMi + 0.6, 'inOutSine'));
      S5.HSR.forEach((l, i) => { const k = i === 0 ? 1 : clamp((yr - l.y + 1.2) / 1.6); S5.hsrLine(ctx, pr2, l.pts, E.inOutSine(k), { w: i === 0 ? 9 : 7 }); });
      MG.geo.label(ctx, pr2, MG.geo.cities.Madrid, { text: 'MADRID', size: 24, weight: 800, color: P.ink, dotColor: P.rojo, halo: 'rgba(250,244,232,0.9)', haloW: 7, dx: 16, dy: -10 });
      // year ticker (map legend)
      ctx.save(); MG.text.draw(ctx, String(Math.floor(yr)), 1790, 980, { font: F.mono, size: 40, weight: 700, color: P.ink, align: 'right', tracking: 0.06 }); MG.text.draw(ctx, 'HIGH-SPEED LINES OPEN', 1790, 930, { font: F.mono, size: 18, weight: 600, color: P.ink2, align: 'right', tracking: 0.2 }); ctx.restore();
      // counter on the Atlantic
      const km = Math.round(lerp(471, 4000, pr(t, t0 + 0.2, tMi + 0.6, 'inOutSine')) / 10) * 10; const mi = Math.round(km * 0.621371 / 10) * 10;
      S5.lead(ctx, 'the network has grown to', 150, 330, t, T('grown', 749.39) - 0.4, { size: 46, color: P.ink2 });
      const kN = pr(t, tNum - 0.4, tNum); if (kN > 0) { MG.text.draw(ctx, '≈' + (pr(t, tNum - 0.4, tMi + 0.6) >= 1 ? '4,000' : Math.round(mi * 1.6).toLocaleString('en-US')), 140, 520, { font: F.cond, weight: 900, size: 210, color: P.ink, alpha: kN }); MG.text.draw(ctx, 'MILES', 150, 590, { font: F.grotesk, weight: 800, size: 56, color: P.rojo, alpha: kN, tracking: 0.1 }); if (MG.LANG !== 'fr') MG.text.draw(ctx, '≈ ' + (pr(t, tNum - 0.4, tMi + 0.6) >= 1 ? '4,000' : km.toLocaleString('en-US')) + ' KM', 154, 640, { font: F.mono, weight: 600, size: 26, color: P.ink2, alpha: kN, tracking: 0.1 }); }
      MG.geo.canaryInset(ctx, [140, 830, 250, 140], { fill: K_SPAIN, frame: 'rgba(30,25,20,0.45)' });
    },
    post: { grade: 'warm', vignette: 0.34 },
  });
  add({
    id: 's05_second', start: 752.35,
    transIn: { type: S5.trPull(694, 445, 0.16), dur: 0.65 },
    draw(ctx, t, S) {
      const t0 = S.t0; const tSec = T('second-largest', 752.59), tW = T('world', 753.71);
      MG.kit.night(ctx, '#141a36', { x: 960, y: 500, r: 1100, light: '#2c3a6e' });
      const rot = lerp(50, 44, E.inOutSine(li(t, t0, 755))); const sc2 = lerp(470, 440, E.out(li(t, t0, 754.6)));
      const prg = MG.geo.globe(ctx, { center: [rot, 33], scale: sc2, x: 960, y: 560, relief: true, countries: { Spain: P.sol, China: P.rojo }, border: 'rgba(30,20,10,0.25)', atmosphere: '#9cc8ff' });
      const lab = (ll, num, name, t1, col, dx, dy) => { const q = prg(ll); if (!q) return; const k = pr(t, t1, t1 + 0.45); if (k <= 0) return; ctx.save(); ctx.globalAlpha = k; ctx.strokeStyle = '#F6F0E2'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(q[0], q[1]); ctx.lineTo(q[0] + dx * k, q[1] + dy * k); ctx.stroke(); ctx.fillStyle = col; ctx.beginPath(); ctx.arc(q[0], q[1], 8, 0, MG.TAU); ctx.fill(); ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke(); ctx.restore(); const tx = q[0] + dx + (dx < 0 ? -14 : 14); MG.text.draw(ctx, num, tx, q[1] + dy + 30, { font: F.cond, weight: 900, size: 120, color: col, align: dx < 0 ? 'right' : 'left', alpha: k }); MG.text.draw(ctx, name, tx + (dx < 0 ? -84 : 84), q[1] + dy + 24, { font: F.grotesk, weight: 800, size: 40, color: '#F6F0E2', align: dx < 0 ? 'right' : 'left', alpha: k, tracking: 0.08 }); };
      lab([104, 34], '1', 'CHINA', tSec - 0.3, P.rojo, 140, -170);
      lab([-3.7, 40.2], '2', 'SPAIN', tSec + 0.05, P.sol, -150, -170);
      S5.kick(ctx, 'longest high-speed rail networks', 960, 1010, t, tW - 0.4, { size: 22, color: '#E8EEFF', align: 'center' });
    },
    post: { grade: 'neutral', vignette: 0.45 },
  });
  add({
    id: 's05_madBcn', start: 754.67,
    transIn: { type: S5.trPush(694, 445, 3.0, 0.3), dur: 0.7 },
    draw(ctx, t, S) {
      const t0 = S.t0; const tBcn = T('Barcelona', 755.15), t375 = T('375', 756.51), tTakes = T('takes', 758.35), tHours = T('hours', 759.39);
      const hh = MG.cam.handheld(t, 2, 85); const z = lerp(6900, 7600, E.inOutSine(li(t, t0, 760.5)));
      const pr2 = MG.geo.proj('spain', { center: [-1.0, 40.6], scale: z, translate: [960 + hh.dx, 560 + hh.dy] });
      MG.kit.iberiaMap(ctx, { proj: pr2, relief: 0.5, lift: 12 });
      S5.HSR.forEach((l) => S5.hsrLine(ctx, pr2, l.pts, 1, { w: 4, color: A(P.rojo, 0.35), casing: 'rgba(250,244,232,0.4)' }));
      const route = [[-3.69, 40.41], [-3.10, 40.57], [-1.64, 41.35], [-0.91, 41.66], [0.63, 41.62], [1.20, 41.19], [2.14, 41.38]];
      const kR = pr(t, t0 + 0.1, tBcn + 0.5, 'inOutSine'); S5.hsrLine(ctx, pr2, route, kR, { w: 10 });
      // the train runs the line while the stopwatch runs to 2 h 30
      const kT = pr(t, tTakes - 0.6, tHours + 0.3, 'inOutSine'); const rp = route.map((c) => pr2(c));
      if (kR >= 1) { const h = MG.path.along(rp, kT); S5.trainHead(ctx, h[0], h[1], h[2], 1.6); }
      // ruler parallel to the route (offset north): ≈375 mi / ≈600 km
      const kM = pr(t, t375 - 0.5, t375 + 0.3); if (kM > 0) { const a = pr2([-3.69, 40.41]), b = pr2([2.14, 41.38]); const ang = Math.atan2(b[1] - a[1], b[0] - a[0]); const nx = Math.sin(ang) * 1, ny = -Math.cos(ang); const off = 150; const A0 = [a[0] + nx * off, a[1] + ny * off], B0 = [b[0] + nx * off, b[1] + ny * off]; const Bk = [lerp(A0[0], B0[0], kM), lerp(A0[1], B0[1], kM)];
        ctx.save(); ctx.strokeStyle = P.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(A0[0], A0[1]); ctx.lineTo(Bk[0], Bk[1]); ctx.stroke(); for (let i = 0; i <= 20; i++) { const u = i / 20; if (u > kM) break; const px = lerp(A0[0], B0[0], u), py = lerp(A0[1], B0[1], u); const L = i % 5 ? 8 : 16; ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px - nx * L, py - ny * L); ctx.stroke(); } ctx.setLineDash([4, 6]); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(A0[0], A0[1]); ctx.moveTo(b[0], b[1]); ctx.lineTo(B0[0], B0[1]); ctx.stroke(); ctx.restore();
        const mid = [(A0[0] + B0[0]) / 2 + nx * 30, (A0[1] + B0[1]) / 2 + ny * 30]; ctx.save(); ctx.translate(mid[0], mid[1]); ctx.rotate(ang); MG.text.draw(ctx, '≈ 375 MI', 0, 0, { font: F.cond, weight: 900, size: 76, color: P.ink, align: 'center', alpha: kM, stroke: 'rgba(250,244,232,0.85)', strokeW: 10 }); MG.text.draw(ctx, '≈ 600 KM', 0, 36, { font: F.mono, weight: 600, size: 24, color: P.ink2, align: 'center', alpha: kM, tracking: 0.12, stroke: 'rgba(250,244,232,0.85)', strokeW: 6 }); ctx.restore(); }
      // stopwatch (sun-disk clock face) on the Mediterranean
      const kW = pr(t, tTakes - 0.7, tTakes - 0.2, 'outBack'); if (kW > 0.002) { const cx = 1610, cy = 650, R = 120 * kW; const hrs = 2.5 * kT; MG.fx.shadow(ctx, MG.path.circle(cx, cy, R), { dx: 10, dy: 16, blur: 22, color: 'rgba(20,30,50,0.35)' }); MG.kit.sun(ctx, cx, cy, R, t, { variant: 'flat', corona: 0, halftone: 0 }); ctx.save(); ctx.fillStyle = A(P.solDeep, 0.85); ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, R * 0.86, -Math.PI / 2, -Math.PI / 2 + (hrs / 3) * MG.TAU); ctx.closePath(); ctx.fill(); ctx.restore(); ctx.strokeStyle = P.ink; ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(cx, cy, R, 0, MG.TAU); ctx.stroke(); ctx.fillStyle = P.ink; ctx.fillRect(cx - 14, cy - R - 26, 28, 18);
        const hh2 = Math.floor(hrs), mm = Math.floor((hrs - hh2) * 60); MG.text.draw(ctx, `${hh2} H ${String(mm).padStart(2, '0')}`, cx, cy + 22, { font: F.cond, weight: 900, size: 64, color: P.ink, align: 'center', alpha: kW }); }
      MG.geo.label(ctx, pr2, MG.geo.cities.Madrid, { text: 'MADRID', t, t0: t0 + 0.1, size: 30, weight: 800, color: P.ink, dotColor: P.rojo, halo: 'rgba(250,244,232,0.9)', haloW: 7, dx: -150, dy: 40 });
      MG.geo.label(ctx, pr2, MG.geo.cities.Barcelona, { text: 'BARCELONA', t, t0: tBcn - 0.1, size: 30, weight: 800, color: P.ink, dotColor: P.rojo, halo: 'rgba(250,244,232,0.9)', haloW: 7, dx: 16, dy: 40 });
      MG.geo.label(ctx, pr2, [-0.91, 41.66], { text: 'ZARAGOZA', t, t0: tBcn + 0.3, size: 18, weight: 600, color: P.ink2, dotColor: P.ink, dot: 4, halo: 'rgba(250,244,232,0.85)', haloW: 6, dx: 10, dy: 26 });
    },
    post: { grade: 'warm', vignette: 0.34 },
  });

  /* ---------- 20 · WHAT PAYS THE BILLS? (3D coin on a bar counter) ----- */
  add({
    id: 's05_coin', start: 760.43,
    transIn: { type: 'blur', dur: 0.8, amount: 22 },
    init() {
      const T3 = THREE; const sc = new T3.Scene(); this.sc = sc; this.cam = new T3.PerspectiveCamera(28, 16 / 9, 0.1, 100);
      sc.add(new T3.HemisphereLight(0xFFF0DC, 0x6a5a50, 0.9)); const key = new T3.DirectionalLight(0xFFE0B0, 2.6); key.position.set(-3, 5, 2); sc.add(key); const rim = new T3.DirectionalLight(0xA8C0FF, 0.8); rim.position.set(3, 2, -3); sc.add(rim);
      // faces: sun-disk relief + € + ring of 12 stars (no national portrait)
      const face = (silverCentre) => { const c = MG.canvas(512, 512); const x = c.getContext('2d'); const ring = silverCentre ? '#D6A94A' : '#D8D8DC', mid = silverCentre ? '#D8D8DC' : '#D6A94A'; x.fillStyle = ring; x.fillRect(0, 0, 512, 512); x.fillStyle = mid; x.beginPath(); x.arc(256, 256, 170, 0, MG.TAU); x.fill(); x.strokeStyle = 'rgba(0,0,0,0.35)'; x.lineWidth = 6; x.beginPath(); x.arc(256, 256, 170, 0, MG.TAU); x.stroke();
        for (let i = 0; i < 12; i++) { const a = (i / 12) * MG.TAU; S5.star(x, 256 + Math.cos(a) * 212, 256 + Math.sin(a) * 212, 17, 'rgba(60,40,10,0.55)'); }
        x.save(); x.translate(256, 256); for (let i = 0; i < 18; i++) { x.rotate(MG.TAU / 18); x.fillStyle = 'rgba(80,50,10,0.35)'; x.beginPath(); x.moveTo(-8, -96); x.lineTo(0, -150); x.lineTo(8, -96); x.fill(); } x.restore();
        x.fillStyle = 'rgba(80,50,10,0.3)'; x.beginPath(); x.arc(256, 256, 84, 0, MG.TAU); x.fill(); MG.text.draw(x, '€', 256, 300, { font: F.display, weight: 900, size: 140, color: 'rgba(40,25,5,0.75)', align: 'center' });
        MG.tex.over(x, 'grain', { alpha: 0.3 }); return MG.three.canvasTexture(c); };
      const edge = new T3.MeshStandardMaterial({ color: 0xD8B868, metalness: 1, roughness: 0.32, envMap: MG.three.env() });
      const top = new T3.MeshStandardMaterial({ map: face(false), metalness: 0.85, roughness: 0.35, envMap: MG.three.env() }); const bot = new T3.MeshStandardMaterial({ map: face(true), metalness: 0.85, roughness: 0.35, envMap: MG.three.env() });
      this.coin = new T3.Mesh(new T3.CylinderGeometry(1, 1, 0.09, 72, 1), [edge, top, bot]); sc.add(this.coin);
      this.shadow = new T3.Mesh(new T3.CircleGeometry(1.15, 40), new T3.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.35 })); this.shadow.rotation.x = -Math.PI / 2; this.shadow.position.y = 0.002; sc.add(this.shadow);
      // the counter (zinc) + the map lying on it, painted once
      this.counter = MG.cache('s5zinc', W, H, (x, w, h) => { const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, '#3a3236'); g.addColorStop(0.42, '#5a5458'); g.addColorStop(1, '#8E8A88'); x.fillStyle = g; x.fillRect(0, 0, w, h); x.globalAlpha = 0.25; for (let i = 0; i < 300; i++) { x.strokeStyle = i % 2 ? '#c8c4c0' : '#3a3436'; x.lineWidth = 1; const yy = 440 + Math.random.call ? 440 + (i / 300) * 640 : 0; x.beginPath(); x.moveTo(0, yy); x.lineTo(w, yy + MG.rand(5, i) * 6); x.stroke(); } x.globalAlpha = 1; MG.tex.over(x, 'blotch', { alpha: 0.25, color: '#000', scale: 3 });
        // bar background: bottles & warm lights out of focus
        for (let i = 0; i < 14; i++) { const bx = 80 + i * 135, bh = 120 + MG.rand(7, i) * 90; x.fillStyle = ['#3a5a3a', '#6a3a2a', '#2a3a5a', '#7a6a3a'][i % 4]; x.fillRect(bx, 400 - bh, 46, bh); x.fillRect(bx + 16, 400 - bh - 40, 14, 40); } x.filter = 'blur(10px)'; x.drawImage(x.canvas, 0, 0); x.filter = 'none'; for (let i = 0; i < 9; i++) MG.fx.glow(x, 120 + i * 220, 120 + MG.rand(8, i) * 120, 90, '#FFC880', 0.5); });
    },
    draw(ctx, t, S) {
      const t0 = S.t0; const tAll = T('All', 760.43), tPays = T('pays', 763.27), tBills = T('bills', 763.75), tToday = T('today', 764.67);
      ctx.drawImage(this.counter, 0, 0);
      // the Madrid–Barcelona map lies flat on the counter (out of focus)
      { const m = MG.cache('s5mapOnBar', 960, 540, (x) => { x.scale(0.5, 0.5); const pr2 = MG.geo.proj('spain', { center: [-1.0, 40.6], scale: 7600, translate: [960, 560] }); MG.kit.iberiaMap(x, { proj: pr2, relief: 0.5, lift: 12 }); S5.HSR.forEach((l) => S5.hsrLine(x, pr2, l.pts, 1, { w: 4, color: A(P.rojo, 0.35), casing: 'rgba(250,244,232,0.4)' })); S5.hsrLine(x, pr2, [[-3.69, 40.41], [-3.10, 40.57], [-1.64, 41.35], [-0.91, 41.66], [0.63, 41.62], [1.20, 41.19], [2.14, 41.38]], 1, { w: 10 }); });
        const cam2 = { x: 0, y: -2.2, z: -6.2, pitch: -0.62, fov: 40 }; ctx.save(); ctx.filter = 'blur(6px)'; MG.persp.ground(ctx, m, { w: 9.6, h: 5.4, x: -1.2, z: 1.6, y: 0 }, cam2, 10); ctx.restore(); }
      // coin dynamics: spinning on its edge → wobbling → lands flat on "today"
      const tLand = tToday + 0.05; const u = clamp((t - t0) / (tLand - t0)); const alpha = t >= tLand ? Math.PI / 2 : lerp(0.08, Math.PI / 2, Math.pow(u, 3.2)); const phi = (t - t0) * lerp(9, 30, u * u) + 1.0;
      const n = new THREE.Vector3(Math.cos(alpha) * Math.cos(phi), Math.sin(alpha), Math.cos(alpha) * Math.sin(phi)).normalize();
      this.coin.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), n); const bounce = t > tLand ? Math.abs(Math.sin((t - tLand) * 26)) * Math.exp(-(t - tLand) * 7) * 0.08 : 0;
      this.coin.position.set(0.9, Math.cos(alpha) * 1 + Math.sin(alpha) * 0.045 + bounce, 0.6); this.shadow.position.set(0.9 - Math.cos(phi) * 0.2 * Math.cos(alpha), 0.003, 0.6 - Math.sin(phi) * 0.2 * Math.cos(alpha)); this.shadow.scale.set(lerp(0.5, 1, Math.sin(alpha)), lerp(0.5, 1, Math.sin(alpha)), 1);
      const dol = E.inOutSine(li(t, t0, 765.6)); this.cam.position.set(lerp(-0.6, 0.2, dol), lerp(2.6, 3.4, dol), lerp(7.2, 5.6, dol)); this.cam.lookAt(0.6, 0.5, 0.4);
      const c = MG.three.render(this.sc, this.cam, { slot: 1, w: 1440, h: 810, clearAlpha: 0 }); ctx.drawImage(c, 0, 0, W, H);
      S5.lead(ctx, 'All right, you might say.', 150, 170, t, tAll - 0.05, { size: 58, color: '#F2E8D5', out: { at: T('But', 762.35) - 0.2, dur: 0.3 } });
      S5.lead(ctx, 'but what actually', 150, 170, t, T('what', 762.63) - 0.1, { size: 58, color: '#F2E8D5' });
      S5.key(ctx, 'pays the bills?', 146, 270, t, tPays - 0.1, { size: 104, color: '#FFF3DE' });
      S5.kick(ctx, 'Spain · today', 152, 330, t, tToday - 0.1, { size: 24, color: '#F2C98A' });
    },
    post: { grade: 'warm', vignette: 0.5 },
  });

  /* ---------- 21 · EUROZONE #4 (3D prism map: height = GDP) ------------ */
  const GDP = { Germany: 4.66, France: 3.16, Italy: 2.37, Spain: 1.73, Netherlands: 1.23, Belgium: 0.66, Ireland: 0.58, Austria: 0.52, Portugal: 0.31, Finland: 0.30, Greece: 0.25, Slovakia: 0.14, Bulgaria: 0.11, Croatia: 0.09, Luxembourg: 0.09, Lithuania: 0.08, Slovenia: 0.07, Latvia: 0.04, Estonia: 0.04, Cyprus: 0.035, Malta: 0.025 }; // nominal GDP, $ trillion (2024); eurozone = 21 members in 2026
  add({
    id: 's05_gdp', start: 765.51,
    init() {
      const T3 = THREE; MG.geo.init(); const sc = new T3.Scene(); this.sc = sc; this.cam = new T3.PerspectiveCamera(17, 16 / 9, 20, 12000);
      sc.add(new T3.HemisphereLight(0xFFF2E0, 0x5a4a5a, 1.0)); const sun = new T3.DirectionalLight(0xFFE2B8, 2.0); sun.position.set(-600, 900, 500); sc.add(sun);
      const pr2 = MG.geo.proj('conic', { center: [8, 47], scale: 1500, translate: [0, 0] }); this.pr2 = pr2; const d3p = window.d3.geoPath(pr2);
      const shapesOf = (f) => { const g = f.geometry; const polys = g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates]; const out = []; for (const pl of polys) { const ring = pl[0].map((c) => pr2(c)).filter(Boolean); if (ring.length < 4) continue; let area = 0; for (let i = 0; i < ring.length; i++) { const a = ring[i], b = ring[(i + 1) % ring.length]; area += a[0] * b[1] - b[0] * a[1]; } if (Math.abs(area) < 40) continue; const sh = new T3.Shape(ring.map((q) => new T3.Vector2(q[0], -q[1]))); out.push(sh); } return out; };
      const land = ['France', 'Spain', 'Portugal', 'Italy', 'Germany', 'Belgium', 'Netherlands', 'Luxembourg', 'Switzerland', 'Austria', 'Denmark', 'United Kingdom', 'Ireland', 'Poland', 'Czechia', 'Slovakia', 'Hungary', 'Slovenia', 'Croatia', 'Bosnia and Herz.', 'Serbia', 'Montenegro', 'Albania', 'Macedonia', 'Kosovo', 'Greece', 'Bulgaria', 'Romania', 'Moldova', 'Ukraine', 'Belarus', 'Lithuania', 'Latvia', 'Estonia', 'Sweden', 'Norway', 'Finland', 'Morocco', 'Algeria', 'Tunisia', 'Turkey', 'Cyprus', 'Malta', 'Libya', 'Russia'];
      this.prisms = {}; this.tops = {};
      for (const n of land) { const f = n === 'Spain' ? S5.spainMain() : MG.geo.country(n, '50'); if (!f) continue; const shp = shapesOf(f); if (!shp.length) continue; const ez = GDP[n] !== undefined; const hgt = ez ? Math.max(4, GDP[n] * 72) : 2;
        const col = n === 'Spain' ? 0xF2A33A : ['Germany', 'France', 'Italy'].includes(n) ? 0x3A5FA8 : ez ? 0x9FB3D8 : 0xD9CFBC;
        const geo = new T3.ExtrudeGeometry(shp, { depth: hgt, bevelEnabled: false, curveSegments: 1 }); geo.rotateX(-Math.PI / 2); const cTop = new T3.Color(col).lerp(new T3.Color(0xFFF4DC), 0.08), cSide = new T3.Color(col).multiplyScalar(0.72); const m = new T3.Mesh(geo, [new T3.MeshLambertMaterial({ color: cTop }), new T3.MeshLambertMaterial({ color: cSide })]); m.userData = { n, hgt }; sc.add(m); this.prisms[n] = m;
        if (ez) { const c = window.d3.geoCentroid(n === 'France' ? { type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[ -4.5, 42.5], [8, 42.5], [8, 51], [-4.5, 51], [-4.5, 42.5]]] } } : n === 'Spain' ? S5.spainMain() : f); this.tops[n] = { ll: c, h: hgt }; } }
      // sea + edge lines
      const sea = new T3.Mesh(new T3.PlaneGeometry(6000, 6000), new T3.MeshBasicMaterial({ color: 0xA9C6DE })); sea.rotation.x = -Math.PI / 2; sea.position.y = -1; sc.add(sea);
      this.grow = 0;
    },
    draw(ctx, t, S) {
      const t0 = S.t0; const tFour = T('fourth-largest', 766.67), tDE = T('Germany', 768.67), tFR = T('France', 769.07), tIT = T('Italy', 769.71), tT = T('$1.7', 770.83);
      // prisms rise (staggered by size) as the camera cranes in
      const kG = pr(t, t0 - 0.1, t0 + 1.2, 'out');
      for (const [n, m] of Object.entries(this.prisms)) { const ez = GDP[n] !== undefined; let k = ez ? clamp(kG * 1.3 - (1 - GDP[n] / 4.66) * 0.3) : 1; if (n === 'Spain') k = Math.max(k * 0.98, 0); m.scale.y = Math.max(0.02, E.out(k)); }
      const cp = MG.keys(t, [[t0, [-900, 2900, 3300]], [tFour, [-700, 2500, 2900], 'inOutSine'], [tIT + 0.3, [-420, 2300, 2700], 'inOutSine'], [773.3, [-760, 1900, 2300], 'inOutSine']]);
      const lk = MG.keys(t, [[t0, [-160, 40, 60]], [tIT + 0.3, [-120, 60, 40], 'inOutSine'], [773.3, [-360, 40, 220], 'inOutSine']]);
      const hh = MG.cam.handheld(t, 2, 87); this.cam.position.set(cp[0] + hh.dx * 2, cp[1] + hh.dy * 2, cp[2]); this.cam.lookAt(lk[0], lk[1], lk[2]);
      MG.kit.seaBg(ctx, '#A9C6DE');
      const c = MG.three.render(this.sc, this.cam, { slot: 2, w: 1440, h: 810, clearAlpha: 0 }); ctx.drawImage(c, 0, 0, W, H);
      // labels pinned to prism tops (projected 3D → 2D)
      const v = new THREE.Vector3(); const pin = (n, num, name, t1, o = {}) => { const tp = this.tops[n]; if (!tp) return; const q = this.pr2(tp.ll); const m = this.prisms[n]; v.set(q[0], tp.h * m.scale.y + 18, q[1]); v.project(this.cam); const sx = (v.x * 0.5 + 0.5) * W, sy = (-v.y * 0.5 + 0.5) * H; const k = pr(t, t1 - 0.1, t1 + 0.35); if (k <= 0) return;
        ctx.save(); ctx.globalAlpha = k; ctx.strokeStyle = o.c || P.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(sx, sy - 70 * k); ctx.stroke(); ctx.fillStyle = o.c || P.ink; ctx.beginPath(); ctx.arc(sx, sy, 6, 0, MG.TAU); ctx.fill(); ctx.restore();
        MG.text.draw(ctx, num, sx - 8, sy - 84, { font: F.cond, weight: 900, size: o.big ? 120 : 96, color: o.c || P.ink, align: 'right', alpha: k, stroke: 'rgba(250,244,232,0.8)', strokeW: 8 }); MG.text.draw(ctx, name, sx + 4, sy - 90, { font: F.grotesk, weight: 800, size: o.big ? 44 : 34, color: P.ink, alpha: k, tracking: 0.06, stroke: 'rgba(250,244,232,0.85)', strokeW: 8 }); if (o.sub) MG.text.draw(ctx, o.sub, sx + 6, sy - 46, { font: F.cond, weight: 900, size: 64, color: P.solDeep, alpha: pr(t, tT - 0.1, tT + 0.3), stroke: 'rgba(250,244,232,0.9)', strokeW: 8 }); };
      pin('Germany', '1', 'GERMANY', tDE); pin('France', '2', 'FRANCE', tFR); pin('Italy', '3', 'ITALY', tIT); pin('Spain', '4', 'SPAIN', tFour - 0.2, { big: true, c: P.solDeep });
      { const k = pr(t, tT - 0.15, tT + 0.35); if (k > 0) { MG.text.draw(ctx, '$1.7', 1500, 860, { font: F.cond, weight: 900, size: 190, color: P.solDeep, align: 'right', alpha: k, stroke: 'rgba(250,244,232,0.85)', strokeW: 10 }); MG.text.draw(ctx, 'TRILLION', 1520, 800, { font: F.grotesk, weight: 800, size: 54, color: P.ink, alpha: k, tracking: 0.08 }); MG.text.draw(ctx, 'GDP · 2024', 1524, 850, { font: F.mono, weight: 600, size: 22, color: P.ink2, alpha: k, tracking: 0.16 }); } }
      S5.kick(ctx, 'eurozone · GDP (height)', 150, 150, t, t0 + 0.2, { size: 24, color: P.ink2 });
      S5.lead(ctx, "the eurozone's", 150, 230, t, T('eurozone', 765.83) - 0.1, { size: 56 });
      S5.key(ctx, 'fourth-largest economy', 146, 320, t, tFour - 0.1, { size: 76 });
    },
    post: { grade: 'neutral', vignette: 0.32 },
  });

  /* ---------- 22 · GROWING WHILE GERMANY STANDS STILL ------------------ */
  // real GDP index (2022 = 100), approx. from national statistics: Spain +2.7 / +3.2 / +2.9 %; Germany −0.3 / −0.2 / +0.2 %; France ≈ +1.1 / +1.1 / +0.8 %; Italy ≈ +0.7 / +0.7 / +0.5 %
  const GROW = { Spain: [100, 102.7, 106.0, 109.1], France: [100, 101.1, 102.2, 103.0], Italy: [100, 100.7, 101.4, 101.9], Germany: [100, 99.7, 99.5, 99.7] };
  S5.growXY = (i, v) => [300 + i * 420, 860 - (v - 98) * 52];
  add({
    id: 's05_growth', start: 773.20,
    transIn: { type: 'push', dir: 'left', dur: 0.6, ease: 'inOutCubic' },
    draw(ctx, t, S) {
      const t0 = S.t0; const tYrs = T('years', 774.19), tGrow = T('growing', 775.03), tGer = T('Germany', 778.99), tStill = T('still', 780.27);
      MG.kit.paper(ctx, '#FAF4E8', { light: 0.25 });
      const hh = MG.cam.handheld(t, 2, 89);
      const kc2 = E.inOutSine(li(t, T('growing', 775.03) - 0.4, 781.3)); const fx = lerp(820, 1240, kc2), fy = lerp(700, 520, kc2), z = lerp(1.0, 1.12, Math.sin(kc2 * Math.PI) * 0.6 + kc2 * 0.4);
      ctx.save(); MG.cam.apply(ctx, { x: fx, y: fy, zoom: z, dx: hh.dx, dy: hh.dy, rot: hh.rot });
      // grid + years (2022 → 2025)
      ctx.strokeStyle = 'rgba(30,26,29,0.12)'; ctx.lineWidth = 1.5; for (let v = 98; v <= 110; v += 2) { const y = S5.growXY(0, v)[1]; ctx.beginPath(); ctx.moveTo(260, y); ctx.lineTo(1620, y); ctx.stroke(); }
      [2022, 2023, 2024, 2025].forEach((yv, i) => { const [x] = S5.growXY(i, 100); MG.text.draw(ctx, String(yv), x, 950, { font: F.mono, size: 26, weight: 600, color: P.ink2, align: 'center', tracking: 0.06, alpha: pr(t, t0 + i * 0.1, t0 + 0.4 + i * 0.1) }); });
      const kL = pr(t, tGrow - 0.4, tStill - 0.3, 'inOutSine');
      const drawLine = (name, col, w, kk, o = {}) => { const pts = []; const vals = GROW[name]; for (let i = 0; i <= 30; i++) { const u = (i / 30) * 3; const a = Math.floor(Math.min(2.999, u)); const f = u - a; const v = lerp(vals[a], vals[a + 1], f); pts.push(S5.growXY(u, v)); }
        const sub = MG.path.trim(pts, 0, kk); if (sub.length < 2) return null; ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.translate(6, 10); ctx.strokeStyle = 'rgba(60,40,50,0.18)'; ctx.lineWidth = w + 2; ctx.beginPath(); sub.forEach((q, i) => (i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]))); ctx.stroke(); ctx.translate(-6, -10); ctx.strokeStyle = col; ctx.lineWidth = w; ctx.stroke(); ctx.restore(); return sub[sub.length - 1]; };
      // sun-warmed area under Spain's line
      { const vals = GROW.Spain; const pts = []; for (let i = 0; i <= 30; i++) { const u = (i / 30) * 3 * kL; const a = Math.floor(Math.min(2.999, u)); const f = u - a; pts.push(S5.growXY(u, lerp(vals[a], vals[a + 1], f))); } if (kL > 0.02) { const base = S5.growXY(0, 100)[1]; const ar = MG.path.poly([...pts, [pts[pts.length - 1][0], base], [pts[0][0], base]]); const g = ctx.createLinearGradient(0, 280, 0, base); g.addColorStop(0, A(P.sol, 0.45)); g.addColorStop(1, A(P.sol, 0.05)); ctx.fillStyle = g; ctx.fill(ar); MG.fx.halftone(ctx, ar, [260, 260, 1400, base - 260], { spacing: 12, color: A(P.solDeep, 0.25), cut: 0.3 }); } }
      const hF = drawLine('France', '#9FB3D8', 6, kL), hI = drawLine('Italy', '#B7C49A', 6, kL);
      const hG = drawLine('Germany', '#5A5658', 9, kL); const hS = drawLine('Spain', P.sol, 14, kL);
      const tag = (h, name, col, dy = 0) => { if (!h) return; MG.text.draw(ctx, name, h[0] + 30, h[1] + 10 + dy, { font: F.grotesk, weight: 800, size: 28, color: col, tracking: 0.06 }); };
      if (kL > 0.05) { tag(hF, 'FRANCE', '#6E86B8', -8); tag(hI, 'ITALY', '#7E8C5E', 14); tag(hG, 'GERMANY', '#3B3638', 30); }
      // Spain's line-head is the sun disk (it becomes the beach umbrella in the next shot)
      if (hS) { MG.kit.sun(ctx, hS[0], hS[1], 30, t, { corona: 0.5, halftone: 0.4 }); MG.text.draw(ctx, 'SPAIN', hS[0] + 48, hS[1] - 10, { font: F.grotesk, weight: 800, size: 40, color: P.solDeep, tracking: 0.06 }); }
      // Germany standing still: a flat ruler line + label
      const kGs = pr(t, tGer - 0.2, tStill + 0.2); if (kGs > 0 && hG) { ctx.save(); ctx.globalAlpha = kGs; ctx.setLineDash([8, 8]); ctx.strokeStyle = '#3B3638'; ctx.lineWidth = 2; const y = S5.growXY(0, 100)[1]; ctx.beginPath(); ctx.moveTo(260, y); ctx.lineTo(1620, y); ctx.stroke(); ctx.restore(); S5.lead(ctx, 'standing still', hG[0] + 34, hG[1] + 82, t, tStill - 0.4, { size: 44, color: '#3B3638' }); }
      ctx.restore();
      S5.kick(ctx, 'real GDP · 2022 = 100 · big EU economies', 150, 130, t, t0 + 0.2, { size: 22, color: P.ink2 });
      S5.lead(ctx, 'for the past 3 years', 150, 210, t, T('past', 773.55) - 0.1, { size: 56 });
      S5.key(ctx, 'growing faster', 146, 310, t, T('growing', 775.03) - 0.1, { size: 92 });
    },
    post: { grade: 'neutral', vignette: 0.3 },
  });

  /* ---------- 23 · PILLAR 1 · TOURISM — the beach umbrella is the pie ---- */
  S5.sand = () => MG.cache('s5sand', W + 400, H + 400, (x, w, h) => { x.fillStyle = '#EED3A2'; x.fillRect(0, 0, w, h); const r = MG.rng(41); for (let i = 0; i < 9000; i++) { x.fillStyle = A(r() < 0.5 ? '#D9B47A' : '#FFF0D0', 0.35); x.fillRect(r() * w, r() * h, 1.5, 1.5); } x.strokeStyle = 'rgba(170,120,70,0.16)'; x.lineWidth = 3; for (let j = 0; j < 40; j++) { x.beginPath(); for (let i = 0; i <= w; i += 30) x.lineTo(i, j * 40 + Math.sin(i * 0.01 + j) * 8); x.stroke(); }
    for (let i = 0; i < 26; i++) { const fx = 200 + i * 70, fy = 1200 - i * 44 + Math.sin(i) * 20; x.fillStyle = 'rgba(150,100,60,0.22)'; x.beginPath(); x.ellipse(fx + (i % 2) * 22, fy, 9, 16, 0.6, 0, MG.TAU); x.fill(); } MG.tex.over(x, 'blotch', { alpha: 0.15, color: '#8a5a2a', scale: 3 }); });
  S5.umbrella = (ctx, x, y, r, open, t, o = {}) => {
    const n = 8; const rot = o.rot || 0; const R = r * open; if (R < 2) return;
    ctx.save(); ctx.translate(x + R * 0.28, y + R * 0.34); ctx.globalAlpha = 0.28; ctx.fillStyle = '#5a2f2a'; ctx.filter = 'blur(10px)'; ctx.beginPath(); for (let i = 0; i < n; i++) { const a = rot + (i / n) * MG.TAU; ctx.lineTo(Math.cos(a) * R, Math.sin(a) * R); } ctx.closePath(); ctx.fill(); ctx.restore();
    for (let i = 0; i < n; i++) { const a0 = rot + (i / n) * MG.TAU, a1 = rot + ((i + 1) / n) * MG.TAU; const p = new Path2D(); p.moveTo(x, y); p.lineTo(x + Math.cos(a0) * R, y + Math.sin(a0) * R); p.quadraticCurveTo(x + Math.cos((a0 + a1) / 2) * R * 1.06, y + Math.sin((a0 + a1) / 2) * R * 1.06, x + Math.cos(a1) * R, y + Math.sin(a1) * R); p.closePath();
      const hl = o.hl === i ? o.hlK || 0 : 0; const base = i % 2 ? '#FBF6EA' : P.azulejo; const col = mix(base, P.sol, hl); const lit = clamp(0.5 + 0.5 * Math.cos((a0 + a1) / 2 + 2.2));
      ctx.fillStyle = mix(col, MG.col.shade(col, 0.35), 1 - lit); ctx.fill(p); ctx.strokeStyle = 'rgba(30,20,30,0.45)'; ctx.lineWidth = 2; ctx.stroke(p); if (hl > 0) { ctx.save(); ctx.clip(p); MG.tex.over(ctx, 'blotch', { alpha: 0.2 * hl, color: P.solDeep }); ctx.restore(); } }
    ctx.strokeStyle = 'rgba(30,20,30,0.25)'; ctx.lineWidth = 1.5; for (let i = 0; i < n; i++) { const a = rot + (i / n) * MG.TAU; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a) * R, y + Math.sin(a) * R); ctx.stroke(); }
    MG.fx.volume(ctx, MG.path.circle(x, y, R * 0.06 + 4), [x - R * 0.06 - 4, y - R * 0.06 - 4, R * 0.12 + 8, R * 0.12 + 8], { color: '#D8B15A', shade: 0.4, hi: 0.6, cel: true });
  };
  add({
    id: 's05_beach', start: 781.31,
    transIn: { type: S5.trPush(1295, 297, 2.4, 0.4), dur: 0.7 },
    draw(ctx, t, S) {
      const t0 = S.t0; const tTour = T('tourism', 782.03), tObv = T('Obviously', 782.91), t12 = T('12', 784.91), tEcon = T('economy', 786.51), tAuto = T('auto', 788.51), tGer = T('Germany', 789.99), tBig = T('bigger', 787.66);
      const hh = MG.cam.handheld(t, 2, 101); const rot = lerp(-0.04, 0.03, li(t, t0, 790.6)); const z = lerp(1.08, 0.94, E.inOutSine(li(t, t0, 790.6)));
      ctx.save(); MG.cam.apply(ctx, { x: lerp(900, 1010, E.inOutSine(li(t, tBig - 0.6, tAuto + 0.4))), y: 560, zoom: z, rot: rot + hh.rot, dx: hh.dx, dy: hh.dy });
      MG.sprite(ctx, S5.sand(), -200, -200, { ax: 0, ay: 0 });
      // sea + foam at the top (waves washing in)
      const sw = (xx) => 120 + Math.sin(xx * 0.004 + t * 0.9) * 26 + Math.sin(xx * 0.011 - t * 1.4) * 10 + Math.sin(t * 0.8) * 14;
      ctx.save(); const sea = new Path2D(); sea.moveTo(-300, -300); sea.lineTo(W + 300, -300); for (let xx = W + 300; xx >= -300; xx -= 30) sea.lineTo(xx, sw(xx)); sea.closePath(); const g = ctx.createLinearGradient(0, -300, 0, 160); g.addColorStop(0, '#2C7FA8'); g.addColorStop(1, '#6FC4C8'); ctx.fillStyle = g; ctx.fill(sea); ctx.strokeStyle = 'rgba(255,255,255,0.85)'; ctx.lineWidth = 9; ctx.beginPath(); for (let xx = -300; xx <= W + 300; xx += 30) ctx.lineTo(xx, sw(xx)); ctx.stroke(); ctx.strokeStyle = 'rgba(255,255,255,0.35)'; ctx.lineWidth = 3; ctx.beginPath(); for (let xx = -300; xx <= W + 300; xx += 30) ctx.lineTo(xx, sw(xx) - 30 - Math.sin(xx * 0.02 + t) * 6); ctx.stroke(); ctx.restore();
      // loungers: one painted "01" (the integrated numeral of pillar 1)
      const lounger = (lx, ly, num, ang) => { ctx.save(); ctx.translate(lx, ly); ctx.rotate(ang); ctx.save(); ctx.translate(18, 22); ctx.fillStyle = 'rgba(90,50,40,0.25)'; ctx.fillRect(-60, -150, 120, 300); ctx.restore(); S5.form(ctx, [[-60, -150], [60, -150], [60, 150], [-60, 150]], { poly: true, color: '#F4F0E6', shade: 0.15, hi: 0.2, ow: 2.5, cel: false }); ctx.strokeStyle = 'rgba(31,78,140,0.55)'; ctx.lineWidth = 8; for (let i = -130; i < 150; i += 26) { ctx.beginPath(); ctx.moveTo(-52, i); ctx.lineTo(52, i); ctx.stroke(); } MG.text.draw(ctx, num, 0, 120, { font: F.stencil2 || F.cond, weight: 900, size: 64, color: P.rojo, align: 'center' }); ctx.fillStyle = '#E8644A'; ctx.fillRect(-46, -140, 92, 60); ctx.restore(); };
      lounger(1340, 640, '01', -0.12); lounger(1500, 660, '02', -0.12);
      // the umbrella: opens on "Obviously"; one of 8 panels (12.5 %) turns saffron = tourism's share
      const open = 0.25 + 0.75 * MG.ease.outBack(pr(t, tObv - 0.25, tObv + 0.4, 'linear')); const kH = pr(t, t12 - 0.2, t12 + 0.5);
      S5.umbrella(ctx, 820, 600, 300, open, t, { rot: -Math.PI / 2 - 0.0, hl: 0, hlK: kH });
      // pie ring + label
      if (kH > 0) { ctx.save(); ctx.globalAlpha = kH; ctx.strokeStyle = P.ink; ctx.lineWidth = 2.5; ctx.setLineDash([3, 7]); ctx.beginPath(); ctx.arc(820, 600, 340, 0, MG.TAU); ctx.stroke(); ctx.setLineDash([]); ctx.lineWidth = 6; ctx.strokeStyle = P.solDeep; ctx.beginPath(); ctx.arc(820, 600, 340, -Math.PI / 2, -Math.PI / 2 + MG.TAU / 8); ctx.stroke(); ctx.restore(); }
      // German cars: a tyre rolls in and falls flat; its rim carries a thinner slice (≈5 %)
      const kT = pr(t, tAuto - 0.9, tAuto + 0.1, 'out'); if (kT > 0) { const tx = lerp(2300, 1500, kT), ty = 330; const spin = (1 - kT) * 14; ctx.save(); ctx.translate(tx, ty); ctx.rotate(spin); ctx.save(); ctx.translate(16, 20); ctx.fillStyle = 'rgba(70,40,30,0.3)'; ctx.filter = 'blur(8px)'; ctx.beginPath(); ctx.arc(0, 0, 150, 0, MG.TAU); ctx.fill(); ctx.restore();
        ctx.fillStyle = '#1F1D22'; ctx.beginPath(); ctx.arc(0, 0, 150, 0, MG.TAU); ctx.fill(); ctx.strokeStyle = '#3a383e'; ctx.lineWidth = 3; for (let i = 0; i < 48; i++) { const a = (i / 48) * MG.TAU; ctx.beginPath(); ctx.moveTo(Math.cos(a) * 128, Math.sin(a) * 128); ctx.lineTo(Math.cos(a + 0.05) * 148, Math.sin(a + 0.05) * 148); ctx.stroke(); }
        MG.fx.volume(ctx, MG.path.circle(0, 0, 100), [-100, -100, 200, 200], { color: '#C9CDD4', shade: 0.45, hi: 0.6, cel: true }); ctx.fillStyle = '#7d828c'; for (let i = 0; i < 5; i++) { ctx.save(); ctx.rotate((i / 5) * MG.TAU); ctx.beginPath(); ctx.moveTo(-14, -20); ctx.lineTo(14, -20); ctx.lineTo(26, -92); ctx.lineTo(-26, -92); ctx.closePath(); ctx.fill(); ctx.restore(); }
        const kw = pr(t, tAuto + 0.15, tAuto + 0.6); if (kw > 0) { ctx.fillStyle = A('#5A7FB8', 0.9 * kw); ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, 100, -Math.PI / 2 - spin, -Math.PI / 2 - spin + MG.TAU * 0.05); ctx.closePath(); ctx.fill(); } ctx.restore(); }
      ctx.restore();
      // type
      S5.lead(ctx, 'First,', 150, 150, t, T('First', 781.31) - 0.05, { size: 60, color: '#F6FBFF', shadow: { blur: 8, dy: 3, color: 'rgba(10,40,60,0.35)' } });
      S5.key(ctx, 'tourism.', 146, 250, t, tTour - 0.05, { size: 110, color: '#FFFFFF', font: F.display, weight: 900, shadow: { blur: 10, dy: 4, color: 'rgba(10,40,60,0.35)' } });
      S5.lead(ctx, 'Obviously.', Math.max(560, 170 + MG.text.width(ctx, 'tourism.', { size: 110, font: F.display, weight: 900 })), 250, t, tObv - 0.05, { size: 56, color: '#FFF3DE', out: { at: t12 - 0.4, dur: 0.3 } });
      const kN = pr(t, t12 - 0.1, t12 + 0.4); if (kN > 0) { MG.text.draw(ctx, '12–13%', 1240, 900, { font: F.cond, weight: 900, size: 180, color: P.solDeep, alpha: kN, stroke: 'rgba(255,248,232,0.8)', strokeW: 10 }); MG.text.draw(ctx, 'OF THE ECONOMY · TOURISM', 1248, 950, { font: F.mono, size: 24, weight: 700, color: P.ink, alpha: pr(t, tEcon - 0.2, tEcon + 0.3), tracking: 0.14 }); }
      if (kT > 0.6) { MG.text.draw(ctx, 'GERMANY · CAR INDUSTRY', 1700, 540, { font: F.mono, size: 22, weight: 700, color: P.ink, align: 'right', alpha: pr(t, tGer - 0.4, tGer), tracking: 0.12 }); MG.text.draw(ctx, 'a smaller slice', 1700, 590, { font: F.serif, italic: true, size: 44, color: P.ink2, align: 'right', alpha: pr(t, tGer - 0.2, tGer + 0.3) }); }
    },
    post: { grade: 'warm', vignette: 0.3, temp: 0.05 },
  });

  /* ---------- 25 · THE BALEARICS: 1 M RESIDENTS · 16 M VISITORS --------- */
  add({
    id: 's05_balearics', start: 790.55,
    transIn: { type: S5.trPull(960, 560, 0.08), dur: 0.8 },
    draw(ctx, t, S) {
      MG.geo.init(); const t0 = S.t0; const tIsl = T('Islands', 791.30), tMil = T('million', 792.18), tRes = T('residents', 792.59), t16 = T('16', 793.95), tVis = T('visitors', 795.14), tYear = T('year', 795.71);
      const hh = MG.cam.handheld(t, 2, 103); const sc2 = lerp(30000, 33000, E.inOutSine(li(t, t0, 796.8)));
      const pr2 = MG.geo.proj('spain', { center: [2.75, 39.35], scale: sc2, translate: [1000 + hh.dx, 560 + hh.dy] });
      MG.kit.seaBg(ctx, '#7FB6D2'); ctx.save(); ctx.globalAlpha = 0.25; MG.geo.graticule(ctx, pr2, { color: '#FFFFFF', step: [0.5, 0.5] }); ctx.restore();
      const bal = MG.geo.region('Balearic Islands'); MG.geo.slab(ctx, pr2, bal, { depth: 14, top: '#F2B65A', side: '#B8752E', shadowDy: 18, stroke: 'rgba(30,26,29,0.6)', width: 1.4 });
      ctx.save(); MG.geo.clip(ctx, pr2, bal); ctx.globalAlpha = 0.5; ctx.globalCompositeOperation = 'multiply'; MG.geo.relief(ctx, pr2, { alpha: 1 }); ctx.restore();
      // 1 M residents = 10 dots (100,000 each), mostly Mallorca/Palma
      const res = [[2.65, 39.58], [2.70, 39.60], [2.62, 39.62], [2.92, 39.70], [3.10, 39.57], [2.88, 39.45], [3.25, 39.75], [1.43, 38.92], [1.30, 38.98], [4.12, 39.92]];
      const kR = pr(t, tRes - 0.3, tRes + 0.6); res.forEach((c, i) => { const k = clamp(kR * 1.6 - i * 0.06); if (k <= 0) return; const q = pr2(c); ctx.fillStyle = P.ink; ctx.beginPath(); ctx.arc(q[0], q[1], 11 * E.outBack(k), 0, MG.TAU); ctx.fill(); ctx.strokeStyle = '#FBF6EE'; ctx.lineWidth = 2.5; ctx.stroke(); });
      // 16 M visitors: planes stream in from the north; 160 saffron dots (16 per resident dot) settle along the coasts
      const air = [[2.74, 39.55], [1.37, 38.87], [4.22, 39.86]]; const kV = pr(t, t16 - 0.4, tYear + 0.8, 'linear');
      if (kV > 0) { for (let i = 0; i < 18; i++) { const u = MG.fract(MG.rand(111, i) + (t - t16) * 0.45); if (t < t16 - 0.4 + MG.rand(112, i) * 0.8) continue; const a = air[i % 3]; const from = [a[0] + (MG.rand(113, i) - 0.5) * 3, a[1] + 1.6]; const pa = pr2(from), pb = pr2(a); const x2 = lerp(pa[0], pb[0], u), y2 = lerp(pa[1], pb[1], u) - Math.sin(u * Math.PI) * 40; S5.plane(ctx, x2, y2, 1.4 - u * 0.4, Math.atan2(pb[1] - pa[1], pb[0] - pa[0]), A('#FFFFFF', Math.min(1, (1 - u) * 4))); }
        for (let i = 0; i < 160; i++) { const k = clamp(kV * 1.4 - (i / 160) * 0.9); if (k <= 0) continue; const a = res[i % 10]; const ang = MG.rand(114, i) * MG.TAU, rr = 0.04 + MG.rand(115, i) * 0.13; const q = pr2([a[0] + Math.cos(ang) * rr * 1.3, a[1] + Math.sin(ang) * rr]); ctx.fillStyle = A(P.solDeep, k); ctx.beginPath(); ctx.arc(q[0], q[1], 4.2, 0, MG.TAU); ctx.fill(); } }
      MG.geo.label(ctx, pr2, [2.65, 39.57], { text: 'PALMA', t, t0: tIsl, size: 22, weight: 700, color: P.ink, dot: 0, dx: -100, dy: 34, halo: 'rgba(250,244,232,0.85)', haloW: 6 });
      S5.kick(ctx, 'Balearic Islands', 150, 140, t, T('Balearic', 790.75) - 0.1, { size: 26, color: P.ink });
      const kM = pr(t, tMil - 0.2, tMil + 0.3); if (kM > 0) { MG.text.draw(ctx, '1 M', 150, 330, { font: F.cond, weight: 900, size: 150, color: P.ink, alpha: kM }); MG.text.draw(ctx, 'RESIDENTS', 156, 380, { font: F.mono, weight: 700, size: 26, color: P.ink, alpha: pr(t, tRes - 0.1, tRes + 0.3), tracking: 0.16 }); }
      const kS = pr(t, t16 - 0.2, t16 + 0.3); if (kS > 0) { MG.text.draw(ctx, '16 M', 150, 590, { font: F.cond, weight: 900, size: 150, color: P.solDeep, alpha: kS }); MG.text.draw(ctx, 'VISITORS · A YEAR', 156, 640, { font: F.mono, weight: 700, size: 26, color: P.ink, alpha: pr(t, tVis - 0.1, tVis + 0.3), tracking: 0.16 }); }
      ctx.save(); ctx.globalAlpha = kR; ctx.fillStyle = P.ink; ctx.beginPath(); ctx.arc(170, 720, 10, 0, MG.TAU); ctx.fill(); MG.text.draw(ctx, '= 100,000 PEOPLE', 196, 728, { font: F.mono, size: 20, weight: 600, color: P.ink2, tracking: 0.1 }); ctx.restore();
    },
    post: { grade: 'warm', vignette: 0.32 },
  });

  /* ---------- 26 · SIXTEEN TOURISTS FOR EVERY LOCAL · EVERY YEAR -------- */
  add({
    id: 's05_sixteen', start: 796.70,
    transIn: { type: S5.trPush(960, 520, 2.2, 0.5), dur: 0.7 },
    init() {
      this.street = MG.cache('s5street', W + 240, H + 200, (x, w, h) => {
        x.fillStyle = '#EFE6D6'; x.fillRect(0, 0, w, 640); MG.tex.over(x, 'blotch', { alpha: 0.2, color: '#8a6a4a', scale: 3 }); MG.tex.over(x, 'fibers', { alpha: 0.8 });
        const door = (dx) => { x.fillStyle = '#3E6B4A'; x.fillRect(dx, 250, 190, 390); x.strokeStyle = '#2a4a32'; x.lineWidth = 4; for (let i = 0; i < 14; i++) { x.beginPath(); x.moveTo(dx + 10, 270 + i * 26); x.lineTo(dx + 180, 270 + i * 26); x.stroke(); } x.fillStyle = '#C8A36A'; x.fillRect(dx - 16, 236, 222, 16); };
        door(300); door(1500); x.fillStyle = '#3E6B4A'; x.fillRect(880, 260, 260, 220); x.strokeStyle = '#2a4a32'; x.lineWidth = 4; for (let i = 0; i < 8; i++) { x.beginPath(); x.moveTo(890, 276 + i * 24); x.lineTo(1130, 276 + i * 24); x.stroke(); } x.fillStyle = '#C8A36A'; x.fillRect(864, 480, 292, 14);
        for (let i = 0; i < 5; i++) { const px = 900 + i * 56; x.fillStyle = '#B5583A'; x.fillRect(px, 458, 36, 26); x.fillStyle = '#5E8A48'; x.beginPath(); x.arc(px + 18, 448, 22, 0, MG.TAU); x.fill(); x.fillStyle = '#E8644A'; x.beginPath(); x.arc(px + 10, 440, 6, 0, MG.TAU); x.arc(px + 26, 446, 6, 0, MG.TAU); x.fill(); }
        x.fillStyle = '#C9B89A'; x.fillRect(0, 640, w, h - 640); for (let j = 0; j < 14; j++) for (let i = 0; i < 40; i++) { const yy = 650 + j * 34 + j * j * 1.5, xx = i * 70 + (j % 2) * 35; x.fillStyle = MG.rand(j, i) > 0.5 ? '#BBA888' : '#D2C2A2'; x.beginPath(); x.ellipse(xx, yy, 32 + j, 14 + j * 0.6, 0, 0, MG.TAU); x.fill(); }
        const g = x.createLinearGradient(0, 600, 0, 720); g.addColorStop(0, 'rgba(60,40,40,0.35)'); g.addColorStop(1, 'rgba(60,40,40,0)'); x.fillStyle = g; x.fillRect(0, 600, w, 120);
      });
    },
    draw(ctx, t, S) {
      const t0 = S.t0; const tSix = T('Sixteen', 796.75), tLoc = T('local', 798.66), tEvery = T('Every', 799.71), tYear = T('year', 800.11);
      const hh = MG.cam.handheld(t, 2.5, 105); const z = lerp(1.0, 1.05, li(t, t0, 801.4));
      ctx.save(); MG.cam.apply(ctx, { x: 960, y: 560, zoom: z, dx: hh.dx, dy: hh.dy, rot: hh.rot });
      MG.sprite(ctx, this.street, -120, -100, { ax: 0, ay: 0 });
      // "every year": the sun sweeps across, shadows swing, a new wave of tourists replaces the last
      const yk = pr(t, tEvery - 0.1, tYear + 0.7, 'inOutSine'); const shA = lerp(-0.9, 0.9, yk);
      if (yk > 0 && yk < 1) { ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = A('#3A2B4A', 0.25 * Math.sin(yk * Math.PI)); ctx.fillRect(0, 0, W, H); ctx.restore(); }
      // the local in front of his door
      S5.local(ctx, 960, 900, 1.25, t, { look: [Math.sin(t * 1.3) * 0.8, 0.1] });
      // 16 tourists arrive and crowd around him
      const spots = []; for (let i = 0; i < 16; i++) { const ring = i < 7 ? 0 : 1; const k = ring ? (i - 7) / 8 : i / 6; const a = Math.PI * (0.05 + 0.9 * k); const R = ring ? 560 : 360; spots.push([960 - Math.cos(a) * R * 1.25, 880 - Math.sin(a) * R * 0.22 + (ring ? -40 : 30)]); }
      spots.sort((a, b) => a[1] - b[1]);
      const wave = Math.floor(clamp(yk * 2.999)); // 0..2
      spots.forEach((sp, i) => { const st = tSix - 0.6 + i * 0.09; const k = pr(t, st, st + 0.9, 'out'); if (k <= 0) return; const fromX = sp[0] < 960 ? -200 : W + 200; const xx = lerp(fromX, sp[0], k), yy = sp[1]; const walking = k < 0.98; S5.tourist(ctx, xx, yy, 0.95 + (yy - 700) / 900, t, (i + wave * 5) % 8, { walk: walking, flip: sp[0] > 960, suitcase: i % 3 === 0 }); });
      ctx.restore();
      // ratio type
      const kN = pr(t, tSix - 0.1, tSix + 0.4); if (kN > 0) { MG.text.draw(ctx, '16', 150, 300, { font: F.cond, weight: 900, size: 230, color: P.solDeep, alpha: kN, stroke: 'rgba(250,244,232,0.8)', strokeW: 10 }); MG.text.draw(ctx, 'TOURISTS', 156, 352, { font: F.mono, weight: 700, size: 26, color: P.ink, alpha: kN, tracking: 0.18 }); }
      const kL = pr(t, tLoc - 0.15, tLoc + 0.3); if (kL > 0) { MG.text.draw(ctx, ':1', 360, 300, { font: F.cond, weight: 900, size: 230, color: P.ink, alpha: kL, stroke: 'rgba(250,244,232,0.8)', strokeW: 10 }); MG.text.draw(ctx, 'LOCAL', 380, 352, { font: F.mono, weight: 700, size: 26, color: P.ink, alpha: kL, tracking: 0.18 }); }
      const kE = pr(t, tEvery - 0.1, tEvery + 0.3); if (kE > 0) { const yr = 2023 + Math.min(2, Math.floor(yk * 3)); MG.text.draw(ctx, 'every year', 1770, 220, { font: F.serif, italic: true, size: 64, color: P.ink, align: 'right', alpha: kE }); MG.text.draw(ctx, String(yr), 1770, 300, { font: F.mono, weight: 700, size: 44, color: P.solDeep, align: 'right', alpha: kE, tracking: 0.1 }); }
      // sun disk crossing the sky strip on "every year"
      if (yk > 0 && yk < 1) MG.kit.sun(ctx, lerp(260, 1660, yk), 130 - Math.sin(yk * Math.PI) * 60, 40, t, { corona: 0.5 });
    },
    post: { grade: 'warm', vignette: 0.34, temp: 0.05 },
  });

  /* =====================================================================
     F · PILLAR 2 · FASHION (801.38 → 858.37) — warm piano (Ortega's past) → pulse (fashion), sneaky rivalry layer
     ===================================================================== */
  const tFash = T('fashion.', 802.35), tMeet = T('Meet', 803.54), tAman = T('Amancio', 803.95);
  const tRail = T('railroad', 806.35), tDrops = T('drops', 807.87), t13 = T('thirteen', 808.90), tAppr = T('apprentice.', 810.50);
  const t1975 = T('1975,', 811.78), tOpens = T('opens', 813.38), tCor = T('Coruña.', 814.94);
  const tInd = T('Inditex,', 817.66), tBrands = [T('Zara,', 818.90), T('Bershka,', 819.62), T('Massimo', 820.46), T('Pull&Bear.', 821.54)];
  const t5500 = T('5,500', 823.30), tHund = T('hundred', 825.70);
  const tMoves = T('moves', 828.34), tRich = T('richest', 831.30), tShares = T('shares', 833.22), tBern = T('Bernard', 834.66), tDoing = T('doing.', 836.02);
  const tIdea = T('idea?', 837.70), tFast = T('Fast', 838.82);
  const tTwo = T('two', 842.18), tSixM = T('six', 844.02);
  const tRunw = T('runway,', 845.86), t14 = T('fourteen', 846.74), tHang = T('hanging', 848.18);
  const tHalf = T('Half', 849.33), tSp = T('Spain,', 851.73), tPt = T('Portugal,', 852.37), tMa = T('Morocco,', 853.21);
  const tEvery2 = T('Everyone', 855.49), tCopy = T('copy', 857.01);
  /** executive caricature (origin = feet, ≈ 640·s tall). o: {suit, skin, hair, wide, long (face), tie, mood, look, arm:'hang'|'wave'|'point'|'up', walk, flip, sit} */
  S5.exec = (ctx, x, y, s, t, o = {}) => {
    const tt = tw(t); const skin = o.skin || '#E0A887', sd = MG.col.shade(skin, 0.3), suit = o.suit || '#1F3354', w = o.wide || 1, Lf = o.long || 1;
    ctx.save(); ctx.translate(x, y); ctx.scale(s * (o.flip ? -1 : 1), s); if (!o.noShadow) MG.fx.contact(ctx, 0, 4, 120, 18, 0.4);
    const wk = o.walk ? Math.sin(tt * 8) : 0;
    if (!o.sit) for (const sg of [-1, 1]) { const sw = wk * sg * 16; S5.form(ctx, [[sg * 14 - 26, -300], [sg * 14 + 26, -300], [sg * 30 + sw + 20, -16], [sg * 30 + sw - 20, -16]], { poly: true, color: o.trousers || MG.col.shade(suit, 0.1), shade: 0.35, ow: 3 }); S5.form(ctx, [[sg * 30 + sw - 26, -20], [sg * 30 + sw + 34, -20], [sg * 30 + sw + 38, 0], [sg * 30 + sw - 26, 0]], { color: '#211A1C', shade: 0.3, ow: 2.5 }); }
    ctx.translate(0, Math.sin(t * 1.6 + (o.seed || 0)) * 2 - (o.walk ? Math.abs(wk) * 6 : 0));
    const arm = (sg, mode) => { const S = [sg * 92 * w, -505]; let E, Hd; if (mode === 'wave' && sg > 0) { const a = Math.sin(t * 9) * 0.25; E = [sg * 150 * w, -600]; Hd = [sg * (170 + a * 60) * w, -720]; } else if (mode === 'point' && sg > 0) { E = [sg * 170 * w, -470]; Hd = [sg * 250 * w, -500]; } else if (mode === 'up') { E = [sg * 150 * w, -610]; Hd = [sg * 150 * w, -720]; } else { E = [sg * 112 * w, -410]; Hd = [sg * 104 * w, -320]; }
      MG.fx.ink(ctx, [S, E, Hd], { width: 54, color: '#1a1416', taper: [0, 0] }); MG.fx.ink(ctx, [S, E, Hd], { width: 46, color: suit, taper: [0, 0] }); ctx.fillStyle = '#F4F1EA'; ctx.beginPath(); ctx.arc(Hd[0], Hd[1], 22, 0, MG.TAU); ctx.fill(); S5.form(ctx, [[Hd[0] - 20, Hd[1]], [Hd[0] + 20, Hd[1]], [Hd[0] + 22, Hd[1] + 30], [Hd[0], Hd[1] + 40], [Hd[0] - 22, Hd[1] + 30]], { color: skin, shadeColor: sd, shade: 0.4, ow: 2.5 }); };
    arm(-1, o.armL || 'hang');
    S5.form(ctx, [[-96 * w, -525], [96 * w, -525], [110 * w, -420], [102 * w, -290], [-102 * w, -290], [-110 * w, -420]], { color: suit, shade: 0.45, hi: 0.18, rim: o.rim || '#7FA6D8', ow: 3.5 });
    S5.form(ctx, [[-36, -527], [36, -527], [0, o.tie ? -400 : -440]], { poly: true, color: '#F4F1EA', shade: 0.2, ow: 2.5 });
    if (o.tie) S5.form(ctx, [[-10, -520], [10, -520], [14, -420], [0, -400], [-14, -420]], { poly: true, color: o.tie, shade: 0.3, ow: 2 });
    for (const sg of [-1, 1]) S5.form(ctx, [[sg * 38, -527], [sg * 8, o.tie ? -400 : -440], [sg * 30, -380], [sg * 64 * w, -505]], { poly: true, color: MG.col.light(suit, 0.08), shade: 0.3, ow: 2.5 });
    arm(1, o.armR || 'hang');
    // head
    ctx.fillStyle = sd; ctx.fillRect(-24, -560, 48, 40);
    const hy = -612; const hp = [[-60 * w, hy - 6], [-56 * w, hy - 64 * Lf], [-28, hy - 92 * Lf], [28, hy - 92 * Lf], [56 * w, hy - 64 * Lf], [60 * w, hy - 6], [50 * w, hy + 40], [22, hy + 70 * Lf], [-22, hy + 70 * Lf], [-50 * w, hy + 40]];
    for (const sg of [-1, 1]) S5.form(ctx, [[sg * 58 * w, hy - 20], [sg * 74 * w, hy - 26], [sg * 74 * w, hy + 10], [sg * 58 * w, hy + 16]], { color: skin, shadeColor: sd, shade: 0.4, ow: 2.5 });
    S5.form(ctx, hp, { color: skin, shadeColor: sd, shade: 0.42, hi: 0.18, rim: '#FFE2C0', ow: 3 });
    const lk = o.look || [0.2, 0]; const bl = MG.kit.blink(tt, o.seed || 7);
    for (const sg of [-1, 1]) MG.kit.eye(ctx, sg * 22, hy - 6, { r: 8, look: lk, blink: bl, skin, lid: o.lid ?? 0.2 });
    for (const sg of [-1, 1]) MG.kit.brow(ctx, sg * 22, hy - 26, { w: 26, angle: sg * (o.browA ?? 0.12), thick: 6, color: MG.col.shade(o.hair || '#C9C6C2', 0.25), flip: sg > 0 });
    S5.form(ctx, [[-2, hy - 6], [-14, hy + 26], [0, hy + 32], [12, hy + 24]], { color: skin, shadeColor: sd, shade: 0.5, ow: 2.5 });
    S5.mouth(ctx, 0, hy + 46 * Lf, { w: 34, mood: o.mood || 'smile', open: o.open || 0 });
    MG.fx.ink(ctx, [[-30, hy + 30], [-34, hy + 46]], { width: 2.5, color: A('#6a3a2a', 0.5), taper: [0.3, 0.3] }); MG.fx.ink(ctx, [[30, hy + 30], [34, hy + 46]], { width: 2.5, color: A('#6a3a2a', 0.5), taper: [0.3, 0.3] });
    const hc = o.hair || '#C9C6C2'; S5.form(ctx, o.part ? [[-62 * w, hy - 20], [-60 * w, hy - 70 * Lf], [-30, hy - 104 * Lf], [24, hy - 104 * Lf], [58 * w, hy - 74 * Lf], [62 * w, hy - 22], [50 * w, hy - 56 * Lf], [-8, hy - 84 * Lf], [-46 * w, hy - 60 * Lf]] : [[-64 * w, hy - 18], [-62 * w, hy - 66 * Lf], [-36, hy - 98 * Lf], [10, hy - 108 * Lf], [50 * w, hy - 92 * Lf], [66 * w, hy - 56], [64 * w, hy - 18], [52 * w, hy - 50], [20, hy - 74 * Lf], [-30, hy - 70 * Lf], [-54 * w, hy - 46]], { color: hc, shade: 0.35, hi: 0.3, ow: 3 });
    ctx.restore();
  };
  S5.ortega = (ctx, x, y, s, t, o = {}) => S5.exec(ctx, x, y, s, t, { suit: '#1F3354', hair: '#CFCAC4', wide: 1.08, long: 1, seed: 11, ...o });
  S5.arnault = (ctx, x, y, s, t, o = {}) => S5.exec(ctx, x, y, s, t, { suit: '#2B2B33', hair: '#E4E0DA', wide: 0.9, long: 1.14, tie: '#4A2A3A', part: true, mood: 'smirk', seed: 13, rim: '#B8B8C8', skin: '#E6B394', browA: -0.05, ...o });
  /** tailor's shop (cached): shelves of fabric bolts, a mirror, a cutting table */
  S5.shop = () => MG.cache('s5shop', W + 300, H, (x, w, h) => {
    x.fillStyle = '#5A3A2C'; x.fillRect(0, 0, w, h); MG.tex.over(x, 'fibers', { alpha: 0.5 });
    const cols = ['#C8423B', '#1F4E8C', '#E9B949', '#2FA7A0', '#F4EEE2', '#8E6FA6', '#3B3236', '#E86F5A', '#6F7A3A'];
    for (let sh = 0; sh < 4; sh++) { const sy = 120 + sh * 170; x.fillStyle = '#7A5038'; x.fillRect(0, sy + 120, w, 20); x.fillStyle = 'rgba(0,0,0,0.3)'; x.fillRect(0, sy + 140, w, 8); for (let i = 0; i < 26; i++) { const bx = 30 + i * 84 + (sh % 2) * 40, c = cols[(i * 7 + sh * 3) % cols.length]; S5.form(x, [[bx - 34, sy + 120], [bx - 34, sy + 30], [bx + 34, sy + 30], [bx + 34, sy + 120]], { poly: true, color: c, shade: 0.4, hi: 0.25, ow: 2 }); x.fillStyle = MG.col.shade(c, 0.2); x.beginPath(); x.ellipse(bx, sy + 30, 34, 10, 0, 0, MG.TAU); x.fill(); x.strokeStyle = 'rgba(30,20,20,0.5)'; x.lineWidth = 2; x.stroke(); } }
    x.fillStyle = '#3a2620'; x.fillRect(0, 820, w, h - 820); for (let i = 0; i < 30; i++) { x.fillStyle = i % 2 ? '#4a3026' : '#422a22'; x.fillRect(i * 80, 820, 80, h - 820); }
    const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, 'rgba(20,10,10,0.35)'); g.addColorStop(0.5, 'rgba(20,10,10,0)'); g.addColorStop(1, 'rgba(20,10,10,0.45)'); x.fillStyle = g; x.fillRect(0, 0, w, h);
  });
  S5.dressForm = (ctx, x, y, s, col = '#E9DCC4', dress) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.strokeStyle = '#3a2a22'; ctx.lineWidth = 10; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -260); ctx.moveTo(-70, 0); ctx.lineTo(70, 0); ctx.stroke(); S5.form(ctx, [[-60, -520], [60, -520], [74, -460], [52, -380], [70, -270], [-70, -270], [-52, -380], [-74, -460]], { color: col, shade: 0.4, hi: 0.3, ow: 3 }); S5.form(ctx, [[-14, -540], [14, -540], [14, -516], [-14, -516]], { poly: true, color: '#3a2a22', ow: 2 });
    if (dress) { S5.form(ctx, [[-62, -500], [62, -500], [56, -400], [120, -150], [-120, -150], [-56, -400]], { color: dress, shade: 0.42, hi: 0.25, ow: 3 }); ctx.fillStyle = A('#ffffff', 0.25); for (let i = 0; i < 9; i++) { ctx.beginPath(); ctx.arc(-70 + (i % 3) * 70, -420 + Math.floor(i / 3) * 90, 9, 0, MG.TAU); ctx.fill(); } }
    ctx.restore(); };
  S5.bolt = (ctx, x, y, r, len, ang, col) => { ctx.save(); ctx.translate(x, y); ctx.rotate(ang); S5.form(ctx, [[-len / 2, -r], [len / 2, -r], [len / 2, r], [-len / 2, r]], { poly: true, color: col, shade: 0.45, hi: 0.3, ow: 3 }); ctx.fillStyle = MG.col.shade(col, 0.25); ctx.beginPath(); ctx.ellipse(len / 2, 0, r * 0.35, r, 0, 0, MG.TAU); ctx.fill(); ctx.strokeStyle = '#2a1a16'; ctx.lineWidth = 3; ctx.stroke(); ctx.restore(); };
  // ---------- 27 · tailor: "Second, fashion. Meet Amancio Ortega." ----------
  add({ id: 's05_tailor', start: 801.38,
    transIn: { type: S5.trSweep((ctx, edge) => { ctx.save(); ctx.filter = 'blur(3px)'; S5.bolt(ctx, edge + 200, 540, 330, 900, 1.45, '#C8423B'); ctx.restore(); }, -1), dur: 0.8, ease: 'linear' },
    draw(ctx, t) {
      const c = S5.cam(ctx, t, [[801.38, { x: 1010, y: 560, zoom: 1.0 }], [tMeet, { x: 980, y: 560, zoom: 1.04 }, 'inOutSine'], [805.6, { x: 990, y: 600, zoom: 1.16 }, 'inOutSine']], 2, 71); void c;
      MG.sprite(ctx, S5.shop(), -150, 0, { ax: 0, ay: 0 });
      S5.dressForm(ctx, 330, 900, 1.05, '#E9DCC4', '#F2A33A');
      // the "Nº 02" clothing tag swings in on "fashion"
      const tg = pr(t, tFash - 0.3, tFash + 0.2, 'outBack'); if (tg > 0) { ctx.save(); ctx.translate(1510, 140); ctx.rotate(Math.sin(t * 2.2) * 0.08 + (1 - tg) * 0.8); S5.ink(ctx, [[0, -160], [0, 0]], 3, '#2a1a16', t); S5.form(ctx, [[-90, 0], [90, 0], [90, 230], [-90, 230]], { poly: true, color: '#F4EEE2', shade: 0.2, ow: 3 }); ctx.fillStyle = '#5A3A2C'; ctx.beginPath(); ctx.arc(0, 26, 9, 0, MG.TAU); ctx.fill(); MG.text.draw(ctx, 'Nº', 0, 96, { font: F.mono, weight: 700, size: 30, color: P.ink2, align: 'center' }); MG.text.draw(ctx, '02', 0, 196, { font: F.cond, weight: 900, size: 110, color: P.rojo, align: 'center' }); ctx.restore(); }
      // spotlight pool; Ortega steps into it on "Meet"
      const sk = pr(t, tMeet - 0.5, tMeet + 0.2); ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = A('#2a1a20', 0.45 * sk); ctx.fillRect(-300, -100, W + 600, H + 200); ctx.restore(); if (sk > 0) { MG.fx.glow(ctx, 1000, 560, 620, '#FFE6B8', 0.35 * sk); ctx.save(); ctx.globalAlpha = 0.25 * sk; ctx.fillStyle = '#FFE6B8'; ctx.beginPath(); ctx.ellipse(1000, 905, 260, 46, 0, 0, MG.TAU); ctx.fill(); ctx.restore(); }
      const wk = pr(t, tMeet - 0.9, tAman + 0.1, 'outSine'); S5.ortega(ctx, lerp(1500, 1000, wk), 905, 0.95, t, { walk: wk > 0 && wk < 1, mood: 'smile', look: wk < 1 ? [-0.6, 0] : [0, 0.05], armR: t > tAman + 0.2 && t < tAman + 1.4 ? 'wave' : 'hang' });
      ctx.restore();
      const nk = pr(t, tAman - 0.05, tAman + 0.4, 'outBack'); if (nk > 0) { ctx.save(); ctx.translate(1240, 700); ctx.scale(nk, nk); S5.form(ctx, [[0, -46], [420, -46], [420, 40], [0, 40]], { poly: true, color: '#F4EEE2', shade: 0.15, ow: 3 }); MG.text.draw(ctx, 'AMANCIO ORTEGA', 210, 12, { font: F.grotesk, weight: 800, size: 40, color: P.ink, align: 'center', tracking: 0.04 }); ctx.restore(); }
      S5.kick(ctx, 'pillar 2 · fashion', 120, 120, t, tFash - 0.1, { color: '#F4EEE2' });
    }, post: { grade: 'warm', vignette: 0.42 } });
  // ---------- 28 · childhood: railroad father → tracks become a tape measure → apprentice at 13 ----------
  add({ id: 's05_childhood', start: 805.60,
    transIn: { type: S5.trPush(330, 560, 2.4, 0.5), dur: 0.7 },
    draw(ctx, t) {
      const cx = MG.keys(t, [[805.6, 700], [tDrops - 0.2, 900, 'inOutSine'], [t13 + 0.2, 1700, 'inOutCubic'], [811.62, 1900, 'inOutSine']]); const hh = MG.cam.handheld(t, 1.5, 72);
      MG.fx.vgrad(ctx, [[0, '#E9D6B0'], [1, '#C9A97A']]); MG.tex.over(ctx, 'blotch', { alpha: 0.3, color: '#7a5a3a', scale: 3 });
      ctx.save(); ctx.translate(-cx + 960 + hh.dx, hh.dy);
      // paper hills
      ctx.fillStyle = '#C7A577'; ctx.beginPath(); ctx.moveTo(-400, 720); for (let x = -400; x <= 3400; x += 80) ctx.lineTo(x, 640 + Math.sin(x * 0.004) * 50); ctx.lineTo(3400, 1100); ctx.lineTo(-400, 1100); ctx.fill();
      // the rails → a tailor's tape measure (unrolls along the same line)
      const morph = pr(t, tDrops - 0.2, t13 - 0.1, 'inOutSine');
      for (let x = -400; x < 3400; x += 46) { ctx.fillStyle = A('#5a3a22', 1 - morph); ctx.fillRect(x, 800, 24, 34); }
      ctx.fillStyle = A('#4a4448', 1 - morph); ctx.fillRect(-400, 798, 3800, 8); ctx.fillRect(-400, 826, 3800, 8);
      if (morph > 0) { ctx.save(); ctx.globalAlpha = morph; ctx.fillStyle = '#F2C230'; ctx.fillRect(-400, 790, 3800, 52); ctx.strokeStyle = '#2a1a16'; ctx.lineWidth = 2; ctx.strokeRect(-400, 790, 3800, 52); ctx.fillStyle = '#2a1a16'; for (let k = 0; k < 160; k++) { const x = -400 + k * 24; ctx.fillRect(x, 790, 2, k % 5 ? 12 : 22); if (k % 5 === 0) MG.text.draw(ctx, String(k / 5), x + 4, 834, { font: F.mono, weight: 700, size: 18, color: '#2a1a16' }); } ctx.restore(); }
      // the father and the steam engine (paper cut-outs)
      ctx.save(); ctx.translate(380, 800); S5.form(ctx, [[0, -230], [360, -230], [380, -40], [0, -40]], { poly: true, color: '#3B3236', shade: 0.4, ow: 3 }); S5.form(ctx, [[260, -330], [340, -330], [340, -230], [260, -230]], { poly: true, color: '#3B3236', shade: 0.3, ow: 3 }); S5.form(ctx, [[30, -300], [80, -300], [80, -230], [30, -230]], { poly: true, color: '#2a2428', ow: 3 }); for (const wx of [70, 190, 310]) { ctx.fillStyle = '#C8423B'; ctx.beginPath(); ctx.arc(wx, -34, 40, 0, MG.TAU); ctx.fill(); ctx.strokeStyle = '#2a1a16'; ctx.lineWidth = 4; ctx.stroke(); }
        for (let i = 0; i < 5; i++) { const u = MG.fract(t * 0.6 + i / 5); ctx.fillStyle = A('#F4EEE2', 0.7 * (1 - u)); ctx.beginPath(); ctx.arc(55 - u * 60, -310 - u * 160, 24 + u * 40, 0, MG.TAU); ctx.fill(); } ctx.restore();
      ctx.save(); ctx.translate(820, 790); S5.form(ctx, [[-40, -260], [40, -260], [50, -120], [-50, -120]], { color: '#2D4A6E', shade: 0.4, ow: 3 }); S5.form(ctx, [[-24, -120], [24, -120], [28, 0], [-28, 0]], { poly: true, color: '#3a3438', ow: 3 }); S5.form(ctx, [[-28, -320], [28, -320], [32, -270], [-32, -270]], { color: '#D9A07A', shade: 0.4, ow: 3 }); S5.form(ctx, [[-36, -326], [36, -326], [44, -312], [-44, -312]], { poly: true, color: '#2D4A6E', ow: 2.5 }); MG.fx.ink(ctx, [[-10, -290], [10, -290]], { width: 6, color: '#3a2a22' }); ctx.restore();
      // the boy: 13, then at the tailor's table
      const bx = lerp(980, 1700, pr(t, tDrops - 0.1, t13 + 0.4, 'inOutSine')); ctx.save(); ctx.translate(bx, 790); S5.form(ctx, [[-26, -170], [26, -170], [32, -80], [-32, -80]], { color: '#F4EEE2', shade: 0.35, ow: 3 }); S5.form(ctx, [[-18, -80], [18, -80], [20, 0], [-20, 0]], { poly: true, color: '#4E5872', ow: 3 }); S5.form(ctx, [[-22, -222], [22, -222], [26, -182], [-26, -182]], { color: '#E3A882', shade: 0.4, ow: 3 }); S5.form(ctx, [[-24, -226], [24, -226], [20, -206], [-20, -206]], { poly: true, color: '#2a1e18', ow: 2 }); MG.kit.eye(ctx, -8, -200, { r: 4, look: [0.6, 0], skin: '#E3A882' }); MG.kit.eye(ctx, 8, -200, { r: 4, look: [0.6, 0], skin: '#E3A882' }); ctx.restore();
      const k13 = pr(t, t13 - 0.2, t13 + 0.3, 'outBack'); if (k13 > 0) { ctx.save(); ctx.translate(bx, 470); ctx.scale(k13, k13); ctx.fillStyle = '#2a1a16'; ctx.beginPath(); ctx.moveTo(0, 60); ctx.lineTo(-12, 30); ctx.lineTo(12, 30); ctx.fill(); MG.text.draw(ctx, '13', 0, 20, { font: F.cond, weight: 900, size: 120, color: P.rojo, align: 'center', stroke: '#F4EEE2', strokeW: 6 }); ctx.restore(); }
      // tailor's table (apprentice): cloth, chalk, scissors
      ctx.save(); ctx.translate(2050, 790); S5.form(ctx, [[-260, -150], [260, -150], [260, -120], [-260, -120]], { poly: true, color: '#8a5a38', shade: 0.3, ow: 3 }); for (const lx of [-230, 230]) S5.form(ctx, [[lx - 12, -120], [lx + 12, -120], [lx + 12, 0], [lx - 12, 0]], { poly: true, color: '#6a4028', ow: 2.5 }); S5.form(ctx, [[-200, -170], [160, -170], [180, -150], [-180, -150]], { poly: true, color: '#1F4E8C', shade: 0.3, ow: 2.5 }); const sn = Math.max(0, Math.sin(t * 10)) * 0.4 * pr(t, tAppr - 0.6, tAppr); ctx.save(); ctx.translate(60, -176); for (const sg of [-1, 1]) { ctx.save(); ctx.rotate(sg * sn); S5.form(ctx, [[0, -4], [-90, -4], [-96, 0], [0, 4]], { poly: true, color: '#C9CED6', ow: 2 }); ctx.restore(); } ctx.restore(); ctx.restore();
      ctx.restore();
      S5.lead(ctx, 'railroad worker', 380, 230, t, tRail - 0.1, { color: '#2a1608', size: 64 }); S5.lead(ctx, "tailor's apprentice", 1500, 230, t, tAppr - 0.45, { color: '#2a1608', size: 64 });
      ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = 'rgba(200,160,110,0.35)'; ctx.fillRect(0, 0, W, H); ctx.restore();
    }, post: { grade: 'archival', vignette: 0.46 } });
  // ---------- 29 · A Coruña 1975: the first store pops up on the map ----------
  add({ id: 's05_coruna', start: 811.62,
    transIn: { type: 'push', dir: 'left', dur: 0.7, ease: 'inOutCubic' },
    draw(ctx, t) {
      const COR = [-8.41, 43.36]; const z = pr(t, 811.62, tOpens + 0.3, 'inOutCubic'); const scale = Math.exp(lerp(Math.log(3600), Math.log(14000), z)); const cen = [lerp(-3.6, -7.9, z), lerp(40.0, 42.9, z)];
      const prj = MG.geo.proj('spain', { center: cen, scale, translate: [960, 560] });
      MG.kit.seaBg(ctx, '#9FB9CC'); for (const n of ['Portugal', 'France']) MG.geo.draw(ctx, prj, MG.geo.country(n, '10'), { fill: '#E6DCC8', stroke: 'rgba(60,40,30,0.3)', width: 1.2 }); MG.geo.slab(ctx, prj, MG.geo.country('Spain', '10'), { depth: 14, top: '#E9B949', side: '#B9821E', stroke: 'rgba(60,30,10,0.5)', width: 1.5 });
      const p = prj(COR); const pk = pr(t, tOpens - 0.3, tOpens + 0.2, 'outBounce'); if (pk > 0) { ctx.save(); ctx.translate(p[0], p[1]); MG.fx.contact(ctx, 0, 6, 120, 18, 0.4); ctx.scale(1, pk); S5.form(ctx, [[-110, -170], [110, -170], [110, 0], [-110, 0]], { poly: true, color: '#F4EEE2', shade: 0.25, ow: 3 }); S5.form(ctx, [[-90, -110], [-10, -110], [-10, 0], [-90, 0]], { poly: true, color: '#3a4a5a', ow: 2.5 }); ctx.fillStyle = '#F3C67A'; ctx.fillRect(10, -110, 80, 80); for (let k = 0; k < 7; k++) { ctx.fillStyle = k % 2 ? '#F4EEE2' : '#2a2428'; ctx.beginPath(); ctx.moveTo(-120 + k * 34, -170); ctx.lineTo(-86 + k * 34, -170); ctx.lineTo(-90 + k * 34, -130); ctx.lineTo(-116 + k * 34, -130); ctx.fill(); } S5.form(ctx, [[-90, -230], [90, -230], [90, -178], [-90, -178]], { poly: true, color: '#2a2428', ow: 2.5 }); MG.text.draw(ctx, 'ZARA', 0, -190, { font: F.fashion, weight: 400, size: 44, color: '#F4EEE2', align: 'center', tracking: 0.12 }); ctx.restore(); }
      const yk = pr(t, t1975 - 0.1, t1975 + 0.4, 'outBack'); if (yk > 0 && p) { ctx.save(); ctx.translate(p[0] + 170, p[1] - 60); ctx.scale(yk, yk); S5.form(ctx, [[-90, -50], [90, -50], [90, 40], [-90, 40]], { poly: true, color: '#C9A04A', shade: 0.3, hi: 0.3, ow: 3 }); MG.text.draw(ctx, '1975', 0, 22, { font: F.roman, weight: 900, size: 58, color: '#3a2412', align: 'center' }); ctx.restore(); }
      if (p) MG.text.reveal(ctx, 'A CORUÑA', p[0] - 140, p[1] + 70, t, tCor - 0.2, { font: F.grotesk, weight: 800, size: 46, color: P.ink, align: 'right', tracking: 0.06, stroke: 'rgba(250,244,232,0.9)', strokeW: 8, style: 'rise', by: 'line' });
    }, post: { grade: 'warm', vignette: 0.34 } });
  // ---------- 30 · Inditex today: four hangers slide in on their names ----------
  S5.garment = (ctx, k, col) => { if (k === 0) S5.form(ctx, [[-70, 0], [70, 0], [110, 60], [80, 80], [70, 60], [70, 300], [-70, 300], [-70, 60], [-80, 80], [-110, 60]], { poly: true, color: col, shade: 0.4, hi: 0.25, ow: 3 }); else if (k === 1) S5.form(ctx, [[-50, 0], [50, 0], [60, 120], [110, 330], [-110, 330], [-60, 120]], { color: col, shade: 0.4, hi: 0.25, ow: 3 }); else if (k === 2) { S5.form(ctx, [[-80, 0], [80, 0], [120, 70], [96, 300], [-96, 300], [-120, 70]], { color: col, shade: 0.42, hi: 0.2, ow: 3 }); S5.form(ctx, [[-20, 0], [20, 0], [0, 120]], { poly: true, color: '#F4EEE2', ow: 2 }); } else { S5.form(ctx, [[-80, 0], [80, 0], [130, 80], [100, 120], [86, 100], [86, 290], [-86, 290], [-86, 100], [-100, 120], [-130, 80]], { color: col, shade: 0.4, hi: 0.25, ow: 3 }); S5.form(ctx, [[-36, -10], [36, -10], [30, 40], [-30, 40]], { color: MG.col.shade(col, 0.2), ow: 2 }); } };
  add({ id: 's05_inditex', start: 816.02,
    transIn: { type: 'zoom', dur: 0.6, x: 1050, y: 470, amount: 2.6, from: 0.7 },
    draw(ctx, t) {
      const pan = lerp(0, 220, pr(t, 816.02, 822.82, 'inOutSine')); const hh = MG.cam.handheld(t, 1.5, 73);
      MG.fx.vgrad(ctx, [[0, '#EFE9DF'], [1, '#DCD2C2']]); ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = A(P.sombra, 0.08); for (let i = 0; i < 8; i++) { ctx.beginPath(); ctx.moveTo(i * 320 - pan * 0.5, 0); ctx.lineTo(i * 320 + 120 - pan * 0.5, 0); ctx.lineTo(i * 320 - 500 - pan * 0.5, H); ctx.lineTo(i * 320 - 620 - pan * 0.5, H); ctx.fill(); } ctx.restore();
      ctx.save(); ctx.translate(-pan + hh.dx, hh.dy);
      ctx.strokeStyle = '#8a8f99'; ctx.lineWidth = 14; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(180, 320); ctx.lineTo(2100, 320); ctx.moveTo(200, 320); ctx.lineTo(200, 1000); ctx.moveTo(2080, 320); ctx.lineTo(2080, 1000); ctx.stroke(); ctx.strokeStyle = 'rgba(255,255,255,0.7)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(180, 315); ctx.lineTo(2100, 315); ctx.stroke();
      const hk = pr(t, tInd - 0.3, tInd + 0.3, 'outBack'); if (hk > 0) { ctx.save(); ctx.translate(1140, 230); ctx.scale(hk, hk); S5.form(ctx, [[-260, -50], [260, -50], [260, 50], [-260, 50]], { poly: true, color: '#1E1A1D', shade: 0.2, ow: 3 }); MG.text.draw(ctx, 'INDITEX', 0, 24, { font: F.wide, weight: 800, size: 64, color: '#F4EEE2', align: 'center', tracking: 0.12 }); ctx.restore(); }
      const names = ['ZARA', 'BERSHKA', 'MASSIMO DUTTI', 'PULL&BEAR'], cols = ['#1E1A1D', '#C8423B', '#8a6a4a', '#2FA7A0'];
      names.forEach((n, i) => { const t0 = tBrands[i] - 0.35; const k = pr(t, t0, t0 + 0.55, 'outBack'); if (k <= 0) return; const x = lerp(2500, 520 + i * 420, k); const sw = Math.sin((t - t0) * 6) * 0.12 * Math.exp(-(t - t0) * 2); ctx.save(); ctx.translate(x, 320); ctx.rotate(sw); ctx.strokeStyle = '#5a5a60'; ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(0, -10, 16, Math.PI, 0); ctx.moveTo(0, 6); ctx.lineTo(0, 40); ctx.moveTo(-110, 80); ctx.lineTo(0, 40); ctx.lineTo(110, 80); ctx.stroke(); ctx.translate(0, 70); S5.garment(ctx, i, cols[i]); ctx.save(); ctx.translate(60, 140); ctx.rotate(0.15); S5.form(ctx, [[0, 0], [190, 0], [190, 70], [0, 70]], { poly: true, color: '#F4EEE2', shade: 0.15, ow: 2.5 }); MG.text.draw(ctx, n, 95, 46, { font: F.grotesk, weight: 800, size: n.length > 9 ? 24 : 32, color: P.ink, align: 'center', tracking: 0.04 }); ctx.restore(); ctx.restore(); });
      ctx.restore();
      S5.kick(ctx, 'today', 120, 120, t, 816.1);
    }, post: { grade: 'neutral', vignette: 0.3 } });
  // ---------- 31 · 5,500+ stores in ~100 countries: the shop lights come on at dusk ----------
  S5.storeDots = () => { if (S5._sd) return S5._sd; MG.geo.init(); const fs = (MG.geo.world110 || MG.geo.world50).features.filter((f) => !/Antarctica|Greenland/.test(f.properties.name)); const d3 = window.d3; const out = []; fs.forEach((f, i) => { if (MG.hash(i * 3.3) > 0.62 && !/Spain|France|Italy|Germany|Mexico|United States|China|Portugal|United Kingdom|Russia|Japan|Brazil|Turkey|Poland/.test(f.properties.name)) return; const c = d3.geoCentroid(f); const n = /Spain/.test(f.properties.name) ? 18 : /France|Italy|Mexico|Portugal|China|Russia|Germany|United States/.test(f.properties.name) ? 6 : 2; for (let k = 0; k < n; k++) { const ll = [c[0] + (MG.hash(i * 7 + k) - 0.5) * 5, c[1] + (MG.hash(i * 11 + k) - 0.5) * 3.5]; if (d3.geoContains(f, ll) || k === 0) out.push({ ll: d3.geoContains(f, ll) ? ll : c, h: MG.hash(i * 5.1 + k * 1.3) }); } }); S5._sd = out; return out; };
  add({ id: 's05_stores', start: 822.82,
    transIn: { type: 'whip', dir: 'left', dur: 0.45 },
    draw(ctx, t) {
      const prj = MG.geo.proj('natural', { rotate: [-12, 0], center: [0, 12], scale: lerp(330, 350, pr(t, 822.82, 827.22, 'inOutSine')), translate: [960, 560] }); const dusk = pr(t, 822.82, 823.6);
      MG.fx.vgrad(ctx, [[0, MG.col.mix('#5A6A8A', '#141A36', dusk)], [1, MG.col.mix('#8A7A8A', '#2A2448', dusk)]]); MG.geo.draw(ctx, prj, { type: 'Sphere' }, { fill: MG.col.mix('#3E6A92', '#1A2448', dusk) });
      MG.geo.draw(ctx, prj, MG.geo.land50 || MG.geo.world110, { fill: MG.col.mix('#D9CDB4', '#2E3456', dusk), stroke: 'rgba(160,180,220,0.3)', width: 1 }); MG.geo.draw(ctx, prj, MG.geo.country('Spain'), { fill: MG.col.mix('#E9B949', '#5a4a3a', dusk * 0.6) });
      const D = S5.storeDots(); ctx.save(); ctx.globalCompositeOperation = 'screen'; let on = 0; for (const d of D) { const t0 = t5500 - 0.4 + d.h * 2.4; const k = pr(t, t0, t0 + 0.25); if (k <= 0) continue; on++; const p = prj(d.ll); if (!p) continue; const fl = 0.8 + 0.2 * Math.sin(t * 5 + d.h * 30); MG.fx.glow(ctx, p[0], p[1], 16, '#FFC870', 0.9 * k * fl); ctx.fillStyle = '#FFF1CC'; ctx.fillRect(p[0] - 1.5, p[1] - 1.5, 3, 3); } ctx.restore();
      const n = Math.round(lerp(0, 5500, pr(t, t5500 - 0.4, t5500 + 1.4, 'outCubic'))); if (t > t5500 - 0.4) { MG.text.draw(ctx, n.toLocaleString('en-US') + (n >= 5500 ? '+' : ''), 150, 900, { font: F.cond, weight: 900, size: 150, color: '#FFE3A8' }); MG.text.reveal(ctx, 'STORES', 160, 960, t, t5500 + 0.2, { font: F.mono, weight: 700, size: 34, color: '#F4EEE2', tracking: 0.3, style: 'track', by: 'line' }); }
      MG.text.reveal(ctx, '≈100 COUNTRIES', 1780, 960, t, tHund - 0.2, { font: F.mono, weight: 700, size: 40, color: '#FFE3A8', align: 'right', tracking: 0.22, style: 'track', by: 'line' }); void on;
    }, post: { grade: 'night', vignette: 0.36 } });
  // ---------- 32 · seesaw: Ortega vs Arnault, a share chart tips it ----------
  add({ id: 's05_seesaw', start: 827.22,
    transIn: { type: S5.trSpot(960, 560), dur: 0.8, ease: 'linear' },
    draw(ctx, t) {
      MG.fx.vgrad(ctx, [[0, '#231C2A'], [1, '#3A2C38']]); MG.fx.glow(ctx, 960, 620, 900, '#FFE6B8', 0.28);
      // the share chart behind (LVMH): rises & falls → tips the seesaw
      const ck = pr(t, tShares - 0.3, tShares + 0.6); const share = (u) => Math.sin(u * 9.5 + 0.6) * 0.55 + Math.sin(u * 23) * 0.18; const uNow = clamp((t - (tShares - 0.3)) / (836.98 - tShares + 0.3));
      if (ck > 0) { ctx.save(); ctx.globalAlpha = ck; ctx.strokeStyle = 'rgba(244,238,226,0.25)'; ctx.lineWidth = 1.5; for (let g = 0; g < 5; g++) { ctx.beginPath(); ctx.moveTo(360, 160 + g * 50); ctx.lineTo(1560, 160 + g * 50); ctx.stroke(); } const pts = []; for (let i = 0; i <= 60; i++) { const u = i / 60 * uNow; pts.push([360 + u * 1200, 260 - share(u) * 90]); } MG.fx.ink(ctx, pts, { width: 5, color: '#E9B949', taper: [0, 0] }); const lp = pts[pts.length - 1]; ctx.fillStyle = '#FFF1CC'; ctx.beginPath(); ctx.arc(lp[0], lp[1], 7, 0, MG.TAU); ctx.fill(); MG.text.draw(ctx, 'ARNAULT’S COMPANY · SHARES', 360, 130, { font: F.mono, weight: 700, size: 24, color: '#F4EEE2', tracking: 0.2 }); ctx.restore(); }
      // tilt: before shares, a slow rocking; after, follows the chart (Arnault up when shares rise)
      const rock = Math.sin((t - 827.2) * 1.8) * 0.12 * pr(t, tMoves - 0.3, tMoves + 0.3); const fol = t > tShares ? -share(uNow) * 0.2 : 0; const ang = MG.follow('s5saw', (q) => (q > tShares ? -share(clamp((q - (tShares - 0.3)) / (836.98 - tShares + 0.3))) * 0.2 : Math.sin((q - 827.2) * 1.8) * 0.12 * pr(q, tMoves - 0.3, tMoves + 0.3)), t, 827.22, 30, 8); void rock; void fol;
      const fx = 960, fy = 900; ctx.save(); ctx.fillStyle = '#5a3a2a'; ctx.beginPath(); ctx.moveTo(fx - 70, fy + 120); ctx.lineTo(fx + 70, fy + 120); ctx.lineTo(fx, fy); ctx.fill(); ctx.strokeStyle = '#2a1a16'; ctx.lineWidth = 3; ctx.stroke(); ctx.restore(); MG.fx.contact(ctx, fx, fy + 124, 700, 30, 0.45);
      ctx.save(); ctx.translate(fx, fy); ctx.rotate(ang); S5.form(ctx, [[-640, -16], [640, -16], [640, 16], [-640, 16]], { poly: true, color: '#C9A27A', shade: 0.35, hi: 0.3, ow: 3 }); ctx.restore();
      const end = (sg) => [fx + Math.cos(ang) * 560 * sg, fy + Math.sin(ang) * 560 * sg];
      const L = end(-1), R = end(1); const arnOn = pr(t, tBern - 0.5, tBern, 'outBack');
      S5.ortega(ctx, L[0], L[1] - 14, 0.62, t, { noShadow: true, mood: ang > 0.03 ? 'smile' : 'neutral', look: [0.7, -0.2], armR: ang > 0.05 ? 'up' : 'hang' });
      if (arnOn > 0.01) { ctx.save(); S5.arnault(ctx, R[0], R[1] - 14 - (1 - Math.min(1, arnOn)) * 420, 0.62, t, { noShadow: true, flip: true, look: [0.7, -0.2], armR: ang < -0.05 ? 'up' : 'hang', mood: ang < -0.03 ? 'smile' : 'smirk' }); ctx.restore(); }
      // the No.1 medal (sun disk) floats over whoever is higher
      const hiSide = arnOn > 0.6 ? (L[1] < R[1] ? L : R) : L; const mk = pr(t, tMoves - 0.2, tMoves + 0.3); if (mk > 0) { const px = hiSide[0], py = hiSide[1] - 560; ctx.save(); ctx.globalAlpha = mk; MG.kit.sun(ctx, px, py, 46, t, { corona: 0.6 }); MG.text.draw(ctx, 'Nº1', px, py + 14, { font: F.cond, weight: 900, size: 40, color: '#3a2412', align: 'center' }); ctx.restore(); }
      MG.text.reveal(ctx, 'ORTEGA', L[0], L[1] + 80, t, 827.3, { font: F.grotesk, weight: 800, size: 40, color: '#F4EEE2', align: 'center', tracking: 0.08, style: 'rise', by: 'line' });
      if (arnOn > 0.01) MG.text.reveal(ctx, 'ARNAULT', R[0], R[1] + 80, t, tBern - 0.1, { font: F.grotesk, weight: 800, size: 40, color: '#F4EEE2', align: 'center', tracking: 0.08, style: 'rise', by: 'line' });
      MG.text.reveal(ctx, "Europe's richest", 960, 1040, t, tRich - 0.3, { font: F.serif, italic: true, size: 52, color: '#FFE3A8', align: 'center', style: 'rise', by: 'word' });
    }, post: { grade: 'warm', vignette: 0.45 } });
  // ---------- 33 · "Fast fashion": letters on hangers race in on a moving rail ----------
  add({ id: 's05_idea', start: 836.98,
    transIn: { type: 'whip', dir: 'left', dur: 0.4 },
    draw(ctx, t) {
      MG.fx.vgrad(ctx, [[0, '#F4EEE2'], [1, '#E2D6C2']]); const v = 1 - pr(t, tFast - 0.6, tFast + 0.2, 'outCubic'); const off = (t - 836.98) * 2600 * v + (v < 1 ? 0 : 0);
      ctx.strokeStyle = '#8a8f99'; ctx.lineWidth = 12; ctx.beginPath(); ctx.moveTo(-20, 330); ctx.lineTo(W + 20, 330); ctx.stroke();
      if (v > 0.05) { ctx.save(); ctx.globalAlpha = 0.5 * v; for (let i = 0; i < 18; i++) { const x = MG.mod(i * 160 - off, W + 200) - 100; ctx.strokeStyle = '#5a5a60'; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(x, 330); ctx.lineTo(x, 380); ctx.moveTo(x - 60, 410); ctx.lineTo(x, 380); ctx.lineTo(x + 60, 410); ctx.stroke(); } ctx.restore(); }
      const word = MG.tr('FAST FASHION'); const kk = pr(t, tFast - 0.6, tFast + 0.2, 'outCubic');
      if (kk > 0) for (let i = 0; i < word.length; i++) { const ch = word[i]; if (ch === ' ') continue; const tx = 240 + i * 124; const x = lerp(tx + 2200, tx, kk); const sw = Math.sin((t - tFast) * 7 + i) * 0.1 * Math.exp(-Math.max(0, t - tFast) * 2) * (kk >= 1 ? 1 : 0); ctx.save(); ctx.translate(x, 330); ctx.rotate(sw); ctx.strokeStyle = '#5a5a60'; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(0, -8, 12, Math.PI, 0); ctx.moveTo(0, 4); ctx.lineTo(0, 40); ctx.moveTo(-52, 64); ctx.lineTo(0, 40); ctx.lineTo(52, 64); ctx.stroke(); ctx.fillStyle = 'rgba(40,20,30,0.25)'; MG.text.draw(ctx, ch, 10, 250, { font: F.cond, weight: 900, size: 230, color: 'rgba(40,20,30,0.22)', align: 'center' }); MG.text.draw(ctx, ch, 0, 240, { font: F.cond, weight: 900, size: 230, color: i < 4 ? P.rojo : P.ink, align: 'center' }); ctx.restore(); }
      MG.text.reveal(ctx, 'his big idea?', 960, 900, t, tIdea - 0.6, { font: F.serif, italic: true, size: 64, color: P.ink2, align: 'center', style: 'rise', by: 'word' });
    }, post: { grade: 'neutral', vignette: 0.3 } });
  // ---------- 34 · two weeks instead of six months: the tailor's tape as a timeline ----------
  add({ id: 's05_weeks', start: 840.34,
    transIn: { type: 'push', dir: 'up', dur: 0.6, ease: 'inOutCubic' },
    draw(ctx, t) {
      MG.fx.vgrad(ctx, [[0, '#EFE6D6'], [1, '#DCCFB8']]); MG.tex.over(ctx, 'fibers', { alpha: 0.5 }); const un = pr(t, 840.34, 841.2, 'outCubic'); const X0 = 150, PX = 62; // px per week
      ctx.save(); ctx.beginPath(); ctx.rect(0, 0, X0 + un * 1700, H); ctx.clip(); ctx.fillStyle = '#F2C230'; ctx.fillRect(X0, 520, 26 * PX + 60, 90); ctx.strokeStyle = '#2a1a16'; ctx.lineWidth = 3; ctx.strokeRect(X0, 520, 26 * PX + 60, 90); for (let w = 0; w <= 26; w++) { const x = X0 + 20 + w * PX; ctx.fillStyle = '#2a1a16'; ctx.fillRect(x - 1.5, 520, 3, w % 2 ? 18 : 34); if (w % 2 === 0) MG.text.draw(ctx, String(w), x, 594, { font: F.mono, weight: 700, size: 24, color: '#2a1a16', align: 'center' }); } MG.text.draw(ctx, 'WEEKS', X0 + 26 * PX + 50, 650, { font: F.mono, weight: 700, size: 22, color: P.ink2, align: 'right', tracking: 0.2 }); ctx.restore();
      ctx.fillStyle = '#C9C2B2'; ctx.beginPath(); ctx.arc(X0 - 10, 565, 70, 0, MG.TAU); ctx.fill(); ctx.strokeStyle = '#2a1a16'; ctx.lineWidth = 3; ctx.stroke();
      // fast: a garment tag zips to week 2
      const fk = pr(t, tTwo - 0.25, tTwo + 0.15, 'outBack'); if (fk > 0) { const x = lerp(X0 + 20, X0 + 20 + 2 * PX, fk); ctx.save(); ctx.translate(x, 500); S5.ink(ctx, [[0, 0], [0, -80]], 3, '#2a1a16', t); S5.form(ctx, [[-70, -230], [70, -230], [70, -80], [-70, -80]], { poly: true, color: P.rojo, shade: 0.3, ow: 3 }); MG.text.draw(ctx, '2', 0, -126, { font: F.cond, weight: 900, size: 100, color: '#F4EEE2', align: 'center' }); ctx.restore(); MG.text.reveal(ctx, 'WEEKS', X0 + 20 + 2 * PX + 90, 360, t, tTwo, { font: F.cond, weight: 900, size: 64, color: P.rojo, style: 'rise', by: 'line' }); MG.text.reveal(ctx, 'ZARA', X0 + 20 + 2 * PX + 90, 420, t, tTwo + 0.15, { font: F.mono, weight: 700, size: 28, color: P.ink2, tracking: 0.25, style: 'track', by: 'line' }); }
      // the usual: a slow marker crawls all the way to 26 weeks
      const sk = pr(t, tTwo + 0.3, tSixM + 0.3, 'inOutSine'); if (sk > 0) { const x = lerp(X0 + 20, X0 + 20 + 26 * PX, sk); ctx.save(); ctx.translate(x, 630); S5.ink(ctx, [[0, 0], [0, 70]], 3, '#2a1a16', t); S5.form(ctx, [[-70, 70], [70, 70], [70, 200], [-70, 200]], { poly: true, color: '#8a8f99', shade: 0.3, ow: 3 }); MG.text.draw(ctx, '26', 0, 165, { font: F.cond, weight: 900, size: 80, color: '#F4EEE2', align: 'center' }); ctx.restore(); S5.ink(ctx, [[X0 + 20, 660], [x, 660]], 4, A('#5a5a60', 0.6), t); }
      MG.text.reveal(ctx, '6 MONTHS · THE USUAL', X0 + 20 + 26 * PX - 10, 900, t, tSixM - 0.1, { font: F.mono, weight: 700, size: 32, color: P.ink2, align: 'right', tracking: 0.18, style: 'track', by: 'line' });
    }, post: { grade: 'neutral', vignette: 0.3 } });
  // ---------- 35 · runway → 14 days → the mall: the same dress travels with the camera ----------
  add({ id: 's05_runway', start: 845.38,
    transIn: { type: 'whip', dir: 'left', dur: 0.4 },
    draw(ctx, t) {
      const cx = MG.keys(t, [[845.38, 0], [t14 - 0.3, 60, 'inOutSine'], [t14 + 0.2, 1500, 'inOutCubic'], [tHang - 0.3, 1600, 'linear'], [tHang + 0.2, 3000, 'inOutCubic'], [849.33, 3080, 'linear']]);
      ctx.save(); ctx.translate(-cx, 0);
      // zone 1: the runway (dark, flash bulbs)
      ctx.fillStyle = '#1E1A22'; ctx.fillRect(-200, 0, 1800, H); ctx.fillStyle = '#3a3440'; ctx.beginPath(); ctx.moveTo(760, 300); ctx.lineTo(1160, 300); ctx.lineTo(1500, H); ctx.lineTo(420, H); ctx.fill(); MG.fx.glow(ctx, 960, 360, 520, '#FFE6B8', 0.3); for (let i = 0; i < 10; i++) { const on = MG.hash(Math.floor(t * 8) + i * 7) > 0.8; if (on) MG.fx.glow(ctx, i % 2 ? 300 + i * 30 : 1500 - i * 30, 620 + (i % 3) * 60, 60, '#FFFFFF', 0.9); }
      // zone 2: the calendar (14 days flip)
      ctx.fillStyle = '#EFE6D6'; ctx.fillRect(1600, 0, 1500, H); const dk = Math.floor(lerp(1, 14, pr(t, t14 - 0.2, t14 + 1.0))); ctx.save(); ctx.translate(2420, 420); S5.form(ctx, [[-170, -200], [170, -200], [170, 200], [-170, 200]], { poly: true, color: '#F4EEE2', shade: 0.15, ow: 3 }); ctx.fillStyle = P.rojo; ctx.fillRect(-170, -200, 340, 80); MG.text.draw(ctx, 'DAY', 0, -142, { font: F.mono, weight: 700, size: 34, color: '#F4EEE2', align: 'center', tracking: 0.3 }); MG.text.draw(ctx, String(dk), 0, 120, { font: F.cond, weight: 900, size: 220, color: P.ink, align: 'center' }); ctx.restore();
      // zone 3: the mall rail
      ctx.fillStyle = '#E6DCCB'; ctx.fillRect(3100, 0, 1900, H); ctx.strokeStyle = '#8a8f99'; ctx.lineWidth = 12; ctx.beginPath(); ctx.moveTo(3200, 300); ctx.lineTo(4900, 300); ctx.stroke(); for (let i = 0; i < 9; i++) { const x = 3300 + i * 190; if (Math.abs(x - 4040) < 120) continue; ctx.save(); ctx.translate(x, 300); ctx.strokeStyle = '#5a5a60'; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, 30); ctx.moveTo(-70, 56); ctx.lineTo(0, 30); ctx.lineTo(70, 56); ctx.stroke(); ctx.translate(0, 56); ctx.globalAlpha = 0.7; S5.garment(ctx, i % 4, ['#C8C2B8', '#8DB6D9', '#3B3236', '#E86F5A'][i % 4]); ctx.restore(); } MG.text.draw(ctx, 'MALL', 3300, 180, { font: F.wide, weight: 800, size: 54, color: A(P.ink, 0.4), tracking: 0.3 });
      // the dress: worn on the runway → carried through the calendar → hanging on the rail
      const ph1 = pr(t, t14 - 0.3, t14 + 0.2), ph2 = pr(t, tHang - 0.3, tHang + 0.2); const dx = lerp(lerp(960, 2420 + 0, ph1), 4040, ph2); const dy = lerp(lerp(760, 430, ph1), 356, ph2);
      if (ph1 < 0.02) { const wk = Math.sin(t * 9); const mz = lerp(0.8, 1.05, pr(t, 845.38, t14)); ctx.save(); ctx.translate(960, 980); ctx.scale(mz, mz); ctx.fillStyle = '#D9A07A'; for (const sg of [-1, 1]) ctx.fillRect(sg * 18 - 8 + wk * sg * 6, -180, 16, 180); ctx.translate(0, -560); S5.garment(ctx, 1, '#E9B949'); ctx.fillStyle = '#D9A07A'; ctx.beginPath(); ctx.arc(0, -60, 44, 0, MG.TAU); ctx.fill(); ctx.fillStyle = '#2a1e18'; ctx.beginPath(); ctx.arc(0, -78, 44, Math.PI, 0); ctx.fill(); ctx.restore(); }
      else { ctx.save(); ctx.translate(dx, dy); ctx.rotate(Math.sin(t * 3) * 0.05 * (1 - ph2)); ctx.strokeStyle = '#5a5a60'; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(0, -56); ctx.lineTo(0, -26); ctx.moveTo(-70, 0); ctx.lineTo(0, -26); ctx.lineTo(70, 0); ctx.stroke(); S5.garment(ctx, 1, '#E9B949'); if (ph2 > 0.8) { ctx.save(); ctx.translate(80, 150); ctx.rotate(0.2); S5.form(ctx, [[0, 0], [130, 0], [130, 60], [0, 60]], { poly: true, color: '#F4EEE2', ow: 2.5 }); MG.text.draw(ctx, '€29.95', 65, 42, { font: F.mono, weight: 700, size: 26, color: P.ink, align: 'center' }); ctx.restore(); } ctx.restore(); }
      ctx.restore();
      { const ra = 1 - pr(t, t14 - 0.3, t14); if (ra > 0) { ctx.save(); ctx.globalAlpha = ra; MG.text.reveal(ctx, 'RUNWAY', 120, 140, t, tRunw - 0.4, { font: F.wide, weight: 800, size: 54, color: '#F4EEE2', tracking: 0.3, style: 'track', by: 'line' }); ctx.restore(); } }
    }, post: { grade: 'neutral', vignette: 0.34 } });
  // ---------- 36 · half the production stays close: pins on a sewing-pattern map, threads to Arteixo ----------
  add({ id: 's05_nearby', start: 849.33,
    transIn: { type: 'zoom', dur: 0.6, x: 4040 - 3080, y: 520, amount: 2.4, from: 0.7 },
    draw(ctx, t) {
      const prj = MG.geo.proj('conic', { center: [-5.5, 38.0], scale: lerp(3300, 3500, pr(t, 849.33, 855.49, 'inOutSine')), translate: [960, 560] });
      MG.fx.vgrad(ctx, [[0, '#EDE4D0'], [1, '#E2D6BE']]); MG.tex.over(ctx, 'fibers', { alpha: 0.6 }); ctx.save(); ctx.strokeStyle = 'rgba(160,120,80,0.25)'; ctx.lineWidth = 1; for (let g = 0; g < W; g += 40) { ctx.beginPath(); ctx.moveTo(g, 0); ctx.lineTo(g, H); ctx.stroke(); } for (let g = 0; g < H; g += 40) { ctx.beginPath(); ctx.moveTo(0, g); ctx.lineTo(W, g); ctx.stroke(); } ctx.restore();
      for (const n of ['Spain', 'Portugal', 'Morocco', 'France', 'Algeria']) { const f = MG.geo.country(n, '10'); if (!f) continue; const hl = /Spain|Portugal|Morocco/.test(n); MG.geo.draw(ctx, prj, f, { fill: hl ? 'rgba(242,163,58,0.38)' : 'rgba(122,74,42,0.06)', stroke: hl ? '#6a3a1a' : 'rgba(122,74,42,0.45)', width: hl ? 3 : 1.4 }); }
      ctx.save(); ctx.setLineDash([12, 8]); MG.geo.draw(ctx, prj, MG.geo.country('Spain', '10'), { stroke: 'rgba(122,74,42,0.6)', width: 1 }); ctx.restore();
      const ART = [-8.51, 43.30]; const ap = prj(ART); ctx.fillStyle = P.ink; ctx.beginPath(); ctx.arc(ap[0], ap[1], 9, 0, MG.TAU); ctx.fill(); MG.text.draw(ctx, 'ARTEIXO', ap[0] + 18, ap[1] - 12, { font: F.mono, weight: 700, size: 26, color: P.ink, tracking: 0.15 }); MG.text.draw(ctx, 'HQ', ap[0] + 18, ap[1] + 18, { font: F.mono, size: 20, color: P.ink2, tracking: 0.2 });
      const PINS = [[tSp, [[-3.7, 40.4], [-0.4, 39.5], [2.2, 41.4], [-5.9, 37.4], [-1.1, 37.9], [-4.4, 41.6]], '#C8423B'], [tPt, [[-8.6, 41.2], [-8.4, 40.2], [-9.1, 38.7]], '#2FA7A0'], [tMa, [[-5.8, 35.75], [-7.6, 33.6], [-6.8, 34.0], [-5.0, 34.0]], '#1F4E8C']];
      PINS.forEach(([t0, list, col], g) => list.forEach((ll, i) => { const k = pr(t, t0 - 0.2 + i * 0.08, t0 + 0.2 + i * 0.08, 'outBounce'); if (k <= 0) return; const p = prj(ll); const th = pr(t, t0 + 0.2 + i * 0.08, t0 + 0.9 + i * 0.08, 'inOutSine'); if (th > 0) { const mx = (p[0] + ap[0]) / 2 - 40, my = Math.min(p[1], ap[1]) - 60; const pts = []; for (let q = 0; q <= 24; q++) { const u = q / 24 * th; pts.push([(1 - u) * (1 - u) * p[0] + 2 * (1 - u) * u * mx + u * u * ap[0], (1 - u) * (1 - u) * p[1] + 2 * (1 - u) * u * my + u * u * ap[1]]); } S5.ink(ctx, pts, 2.5, col, t, { taper: [0, 0] }); } const dy = (1 - k) * -80; ctx.save(); ctx.translate(p[0], p[1] + dy); S5.ink(ctx, [[0, 0], [10, -46]], 3, '#8a8f99', t, { taper: [0, 0] }); ctx.fillStyle = col; ctx.beginPath(); ctx.arc(10, -50, 12, 0, MG.TAU); ctx.fill(); ctx.strokeStyle = '#2a1a16'; ctx.lineWidth = 2; ctx.stroke(); ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.beginPath(); ctx.arc(6, -54, 4, 0, MG.TAU); ctx.fill(); ctx.restore(); }));
      const lb = (ll, s, t0) => { const p = prj(ll); MG.text.reveal(ctx, s, p[0], p[1], t, t0, { font: F.grotesk, weight: 800, size: 40, color: P.ink, align: 'center', tracking: 0.08, stroke: 'rgba(240,232,214,0.9)', strokeW: 8, style: 'rise', by: 'line' }); };
      lb([-3.0, 39.2], 'SPAIN', tSp - 0.1); lb([-7.9, 39.6], 'PORTUGAL', tPt - 0.1); lb([-6.3, 32.6], 'MOROCCO', tMa - 0.1);
      const hk = pr(t, tHalf - 0.1, tHalf + 0.4, 'outBack'); if (hk > 0) { ctx.save(); ctx.translate(1600, 260); ctx.scale(hk, hk); MG.kit.sun(ctx, 0, 0, 90, t, { corona: 0.3, halftone: 0.3 }); ctx.save(); ctx.beginPath(); ctx.rect(0, -100, 100, 200); ctx.clip(); ctx.fillStyle = A('#EDE4D0', 0.85); ctx.beginPath(); ctx.arc(0, 0, 92, 0, MG.TAU); ctx.fill(); ctx.restore(); ctx.strokeStyle = '#2a1a16'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(0, 0, 90, 0, MG.TAU); ctx.moveTo(0, -90); ctx.lineTo(0, 90); ctx.stroke(); ctx.restore(); MG.text.reveal(ctx, 'HALF THE PRODUCTION', 1600, 410, t, tHalf + 0.1, { font: F.mono, weight: 700, size: MG.LANG === 'fr' ? 21 : 26, color: P.ink, align: 'center', tracking: 0.18, style: 'track', by: 'line' }); MG.text.reveal(ctx, 'stays close by', 1600, 460, t, TE('by,', 850.85) - 0.2, { font: F.serif, italic: true, size: 44, color: P.ink2, align: 'center', style: 'rise', by: 'word' }); }
    }, post: { grade: 'warm', vignette: 0.3 } });
  // ---------- 37 · everyone else copies the model: the dress form clones into an endless moving row ----------
  add({ id: 's05_copy', start: 855.49,
    transIn: { type: 'push', dir: 'left', dur: 0.6, ease: 'inOutCubic' },
    draw(ctx, t) {
      MG.fx.vgrad(ctx, [[0, '#F1ECE2'], [1, '#DED4C4']]); ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = A(P.sombra, 0.1); ctx.fillRect(0, 860, W, 220); ctx.restore();
      const n = Math.floor(lerp(1, 14, pr(t, tEvery2 - 0.1, tCopy + 0.6, 'in'))); const run = Math.max(0, t - (tCopy - 0.2)) * 900 * pr(t, tCopy - 0.2, tCopy + 0.6, 'in');
      for (let i = n - 1; i >= 0; i--) { const x = 960 + i * 260 - run; if (x < -300 || x > W + 300) continue; const ghost = i > 0 ? 0.88 : 1; ctx.save(); ctx.globalAlpha = ghost; MG.fx.contact(ctx, x, 905, 120, 16, 0.35); S5.dressForm(ctx, x, 900, 0.95, i ? '#E1D4BC' : '#E9DCC4', i ? ['#E9B949', '#C8423B', '#1F4E8C', '#2FA7A0'][i % 4] : '#E9B949'); ctx.restore(); }
      MG.text.reveal(ctx, 'COPY', 1700, 200, t, tCopy - 0.1, { font: F.wide, weight: 800, size: 72, color: A(P.ink, 0.85), align: 'right', tracking: 0.3, style: 'track', by: 'line' }); MG.text.reveal(ctx, 'that model', 1700, 260, t, T('model.', 857.65) - 0.2, { font: F.serif, italic: true, size: 48, color: P.ink2, align: 'right', style: 'rise', by: 'word' });
    }, post: { grade: 'neutral', vignette: 0.3 } });

  /*@@SCENES@@*/

  // ---------- finalise scene tiling ----------
  const SEG_END = 858.37;
  for (let i = 0; i < scenes.length; i++) scenes[i].end = i + 1 < scenes.length ? scenes[i + 1].start : SEG_END;

  MG.segment('S05', {
    start: 681.58, end: SEG_END, scenes,
    audio(A) { S5.audio(A); },
  });

  /* =====================================================================
     AUDIO
     ===================================================================== */
  S5.audio = (A) => {
    // A · hopeful dawn (G major) — fades in from S04's hush
    A.music('hopeful', 681.58, 710.0, { key: 'G3', bpm: 84, intensity: [[681.6, 0.35], [686.5, 0.5], [700, 0.62], [709, 0.5]], fadeIn: 1.6, fadeOut: 1.4 });
    // dawn motif: rising piano + harp as the sun clears the horizon
    ['G4', 'B4', 'D5', 'G5'].forEach((n, i) => A.piano(682.2 + i * 0.32, n, { vel: 0.34 }));
    A.sfx.swell(683.2, { dur: 2, gain: 0.5 });
    A.sfx.paper(T('turn', 691.5) - 0.05, { gain: 0.6 }); A.sfx.thud(T('turn', 691.5) + 0.7, { gain: 0.35 });
    A.sfx.tick(T('three', 693.89) - 0.2, { gain: 0.6 }); A.sfx.tick(T('three', 693.89) + 0.12, { gain: 0.6 }); A.sfx.tick(T('three', 693.89) + 0.44, { gain: 0.6 });
    A.sfx.swish(T('parties', 696.22), { gain: 0.5 });
    A.sfx.paper(703.7, { dur: 0.6, gain: 0.7 });
    // B · 23-F tension
    A.music('tension', 708.6, 721.8, { key: 'G2', bpm: 96, intensity: [[708.6, 0.4], [711, 0.75], [714.5, 0.9], [718.4, 0.85], [719.5, 0.35], [721.5, 0.1]], fadeIn: 1.0, fadeOut: 1.6 });
    A.drum(709.2, 'timpani', { p: 49, vel: 0.5 }); A.sfx.creak(T('armed', 710.75) - 0.3, { gain: 0.9 }); A.sfx.thud(T('armed', 710.75) - 0.05, { gain: 0.8 });
    A.sfx.amb('crowd', 710.6, 2.2, { gain: 0.25 });
    for (let i = 0; i < 7; i++) A.drum(T('armed', 710.75) + 0.2 + i * 0.22, 'cajon', { vel: 0.22, pan: 0.4 - i * 0.08 });
    A.sfx.impact(T('parliament', 712.5) + 0.08, { size: 0.35, gain: 0.55 }); A.drum(T('parliament', 712.5) + 0.08, 'snare', { vel: 0.35, verb: 0.5 });
    A.sfx.whoosh(713.62, { dur: 0.5, gain: 0.5, dir: -1 }); A.sfx.clock(713.6, { dur: 1.6, bpm: 300, gain: 0.7 });
    A.sfx.downlifter(714.4, { dur: 1.2, gain: 0.6 });
    A.sfx.amb('hum', 715.2, 4.6, { gain: 0.6 });
    A.sfx.tonal(T('no', 718.53), ['G1', 'D2', 'G2', 'Bb2'], { gain: 0.55, dur: 2 });
    A.sfx.powerDown(T('collapses', 719.89), { gain: 0.7 });
    A.sfx.birds(721.0, 1.8, { gain: 0.6 });
    // C · Europe — hopeful again (D major), building to the 1992 triumph
    A.music('hopeful', 720.8, 736.2, { key: 'D3', bpm: 100, intensity: [[720.8, 0.3], [722.5, 0.6], [726.5, 0.75], [735.5, 0.8]], fadeIn: 1.5, fadeOut: 1.2 });
    A.sfx.whoosh(T('fast', 723.34) + 0.2, { dur: 0.9, gain: 0.6, dir: 1 });
    for (let i = 0; i < 12; i++) A.mallet(T('Community', 727.34) - 0.3 + i * 0.09, ['D6', 'F#6', 'A6', 'D7'][i % 4], { kind: 'glock', vel: 0.22, pan: (i / 11 - 0.5) * 0.8 });
    A.sfx.coins(T('funding', 728.93), { n: 14, spread: 1.6, gain: 0.5 });
    A.sfx.whoosh(730.95, { dur: 0.7, gain: 0.5, dir: -1 });
    [['roads', 732.22], ['bridges', 732.98], ['airports', 733.62], ['trains', 734.38]].forEach(([w, a], i) => A.sfx.pop(T(w, a), { freq: 480 + i * 90, gain: 0.7 }));
    // 1992 — triumph
    A.music('triumph', 735.0, 748.2, { key: 'D3', bpm: 112, intensity: [[735, 0.45], [737.9, 0.8], [741.7, 0.7], [747.5, 0.55]], fadeIn: 0.8, fadeOut: 1.4 });
    A.sfx.riser(T('hosts', 737.79) + 0.12, { dur: 1.4, gain: 0.5, tone: false }); A.sfx.whoosh(T('hosts', 737.79), { dur: 1.2, gain: 0.45, pitch: 1.3 });
    A.sfx.impact(T('hosts', 737.79) + 0.14, { size: 0.5, gain: 0.5 }); A.sfx.amb('fire', 737.9, 1.8, { gain: 0.8 }); A.sfx.cheer(738.2, { dur: 2.2, gain: 0.35 });
    A.sfx.whoosh(739.5, { dur: 0.5, gain: 0.55, dir: -1 });
    A.sfx.whoosh(741.95, { dur: 0.7, gain: 0.7, dir: -1, pitch: 0.8 }); A.sfx.train(741.8, 3.8, { gain: 0.5, bpm: 220 }); A.sfx.whoosh(743.45, { dur: 1.1, gain: 0.8, pitch: 0.7 });
    // D · pulse (network, economy)
    A.music('pulse', 746.8, 781.9, { key: 'A2', bpm: 118, intensity: [[746.8, 0.35], [748.5, 0.6], [754.5, 0.7], [759.8, 0.65], [760.6, 0.22], [764.8, 0.3], [765.6, 0.65], [773.2, 0.78], [781.0, 0.6]], fadeIn: 1.5, fadeOut: 1.4 });
    A.sfx.whoosh(745.6, { dur: 0.6, gain: 0.5 });
    for (let i = 0; i < 14; i++) A.sfx.tick(748.0 + i * 0.22, { gain: 0.35 });
    A.sfx.whoosh(752.4, { dur: 0.7, gain: 0.55, dir: 1, pitch: 0.7 }); A.sfx.chime(T('second-largest', 752.59) + 0.1, { note: 'E6', gain: 0.6 });
    A.sfx.whoosh(754.75, { dur: 0.7, gain: 0.5, dir: -1 });
    A.sfx.clock(T('takes', 758.35) - 0.5, { dur: 1.8, bpm: 240, gain: 0.5 }); A.sfx.ding(T('hours', 759.39) + 0.3, { note: 'A6', gain: 0.7 });
    // the coin: a spinning ring that speeds up, then a clink as it lands
    { const t0 = 760.43, tl = T('today', 764.67) + 0.05; for (let x = t0 + 0.2; x < tl; x += lerp(0.16, 0.04, (x - t0) / (tl - t0))) A.drum(x, 'tick', { vel: 0.12 + 0.12 * (x - t0) / (tl - t0), bus: 'sfx', rate: 1.6, verb: 0.05 }); A.mallet(tl, 'E7', { kind: 'bell', vel: 0.3, bus: 'sfx' }); A.mallet(tl + 0.09, 'B6', { kind: 'glock', vel: 0.2, bus: 'sfx' }); }
    A.sfx.thud(765.55, { gain: 0.5 }); A.sfx.swell(766.6, { dur: 1.2, gain: 0.4 });
    [['Germany', 768.67], ['France', 769.07], ['Italy', 769.71]].forEach(([w, a]) => A.sfx.pop(T(w, a), { freq: 400, gain: 0.6 })); A.sfx.chime(T('$1.7', 770.83), { note: 'C#6', gain: 0.6 });
    A.sfx.slide(773.2, { dur: 0.5, gain: 0.8 });
    // E · tourism — retro bossa, beach and sea
    A.music('retro60s', 780.9, 801.9, { key: 'F3', bpm: 124, intensity: [[780.9, 0.45], [783, 0.7], [796.5, 0.75], [801.5, 0.4]], fadeIn: 1.0, fadeOut: 1.0 });
    A.sfx.amb('sea', 781.4, 9.2, { gain: 0.8 }); A.sfx.pop(T('Obviously', 782.91), { freq: 300, gain: 0.8 }); A.sfx.swish(T('Obviously', 782.91) + 0.05, { gain: 0.6 });
    A.sfx.chime(T('12', 784.91), { note: 'F6', gain: 0.6 }); A.sfx.slide(T('auto', 788.51) - 0.8, { dur: 0.7, gain: 0.9 }); A.sfx.thud(T('auto', 788.51) + 0.1, { gain: 0.5 });
    A.sfx.whoosh(790.6, { dur: 0.8, gain: 0.5, dir: 1, pitch: 1.2 }); A.sfx.plane(793.6, 3.2, { gain: 0.8 });
    for (let i = 0; i < 10; i++) A.sfx.tick(T('residents', 792.59) - 0.2 + i * 0.06, { gain: 0.45 });
    for (let i = 0; i < 16; i++) A.sfx.tick(T('Sixteen', 796.75) - 0.5 + i * 0.09, { gain: 0.4, pan: (i % 2 ? 0.4 : -0.4) });
    A.sfx.amb('city', 796.7, 4.7, { gain: 0.5 }); A.sfx.whoosh(T('Every', 799.71) + 0.3, { dur: 1.0, gain: 0.4 });
    // F · fashion — warm piano for Ortega's past, then pulse with a sneaky rivalry layer
    A.music('warm', 801.2, 816.4, { key: 'D3', bpm: 84, intensity: [[801.2, 0.35], [803.9, 0.5], [808.9, 0.55], [811.8, 0.5], [816, 0.4]], fadeIn: 0.8, fadeOut: 1.0 });
    A.sfx.whoosh(801.4, { dur: 0.8, gain: 0.5, dir: -1 }); A.sfx.swish(T('fashion.', 802.35) - 0.2, { gain: 0.4 }); A.sfx.click(T('Meet', 803.54) - 0.45, { gain: 0.7 }); A.sfx.pop(T('Amancio', 803.95), { freq: 520, gain: 0.45 });
    A.sfx.whoosh(805.6, { dur: 0.6, gain: 0.4 }); A.sfx.train(806.2, 2.2, { gain: 0.35, bpm: 140 }); A.sfx.ding(T('thirteen', 808.90), { note: 'C6', gain: 0.4 }); for (let i = 0; i < 4; i++) A.sfx.click(810.2 + i * 0.16, { gain: 0.35 });
    A.sfx.whoosh(811.6, { dur: 0.6, gain: 0.4, dir: -1 }); A.sfx.stamp(T('1975,', 811.78) + 0.1, { gain: 0.45 }); A.sfx.pop(T('opens', 813.38), { freq: 400, gain: 0.5 }); A.sfx.chime(T('Coruña.', 814.94), { note: 'A6', gain: 0.45 });
    A.music('pulse', 815.8, 859.6, { key: 'A2', bpm: 118, intensity: [[815.8, 0.4], [818.9, 0.6], [822.8, 0.7], [827.2, 0.45], [833.2, 0.55], [837, 0.7], [840.3, 0.65], [845.4, 0.75], [849.3, 0.6], [855.5, 0.7], [858.6, 0.4]], fadeIn: 0.6, fadeOut: 1.4 });
    A.sfx.whoosh(816.0, { dur: 0.6, gain: 0.4 }); A.sfx.thud(T('Inditex,', 817.66), { gain: 0.35 }); for (const [w, a] of [['Zara,', 818.90], ['Bershka,', 819.62], ['Massimo', 820.46], ['Pull&Bear.', 821.54]]) { A.sfx.slide(T(w, a) - 0.35, { gain: 0.35 }); A.sfx.tock(T(w, a) + 0.15, { gain: 0.35 }); }
    A.sfx.whoosh(822.8, { dur: 0.45, gain: 0.45 }); for (let i = 0; i < 18; i++) A.sfx.blip(822.9 + 0.4 + i * 0.13, { note: ['E6', 'G6', 'B6'][i % 3], gain: 0.12 }); A.sfx.chime(T('hundred', 825.70) + 0.3, { note: 'E6', gain: 0.4 });
    A.music('sneaky', 827.1, 837.2, { key: 'A2', bpm: 108, intensity: [[827.1, 0.35], [831, 0.45], [834.6, 0.55], [836.9, 0.3]], fadeIn: 0.5, fadeOut: 0.6, gain: 0.7 }); A.sfx.click(827.25, { gain: 0.6 }); A.sfx.creak(828.5, { gain: 0.4 }); A.sfx.creak(830.2, { gain: 0.35 }); A.sfx.creak(835.4, { gain: 0.4 }); A.sfx.pop(T('Bernard', 834.66) - 0.3, { freq: 300, gain: 0.45 });
    A.sfx.whoosh(836.95, { dur: 0.4, gain: 0.45 }); for (let i = 0; i < 12; i++) A.sfx.tick(837.0 + i * 0.12, { gain: 0.25 }); A.sfx.thud(T('Fast', 838.82) + 0.2, { gain: 0.45 }); A.sfx.chime(T('fashion.', 839.30) + 0.1, { note: 'A6', gain: 0.4 });
    A.sfx.slide(840.4, { dur: 0.8, gain: 0.45 }); A.sfx.whoosh(T('two', 842.18) - 0.2, { dur: 0.35, gain: 0.45, pitch: 1.6 }); A.sfx.ding(T('two', 842.18) + 0.2, { note: 'E6', gain: 0.4 }); A.sfx.slide(842.6, { dur: 1.6, gain: 0.2 });
    A.sfx.whoosh(845.4, { dur: 0.4, gain: 0.4 }); for (let i = 0; i < 5; i++) A.sfx.shutter(845.6 + i * 0.22, { gain: 0.35 }); A.sfx.whoosh(T('fourteen', 846.74) - 0.2, { dur: 0.5, gain: 0.35 }); for (let i = 0; i < 13; i++) A.sfx.paper(846.6 + i * 0.08, { dur: 0.07, gain: 0.25 }); A.sfx.whoosh(T('hanging', 848.18) - 0.2, { dur: 0.5, gain: 0.35 }); A.sfx.tock(T('hanging', 848.18) + 0.25, { gain: 0.4 });
    A.sfx.whoosh(849.3, { dur: 0.6, gain: 0.35 }); for (const [w, a] of [['Spain,', 851.73], ['Portugal,', 852.37], ['Morocco,', 853.21]]) A.sfx.pop(T(w, a), { freq: 600, gain: 0.4 }); A.sfx.swish(854.0, { gain: 0.3 });
    A.sfx.whoosh(855.5, { dur: 0.6, gain: 0.4 }); for (let i = 0; i < 6; i++) A.sfx.swish(T('copy', 857.01) - 0.4 + i * 0.18, { gain: 0.2 });
  };
})();
