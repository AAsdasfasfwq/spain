/* =====================================================================================================
   S04 · 507.32 → 681.58 · CIVIL WAR · FRANCO · AUTARKY · 1959 · THE SPANISH MIRACLE · THE CLOCK · SIESTA
   Visual plan (one hand, three worlds — every date lives ON an object in the scene, no cards, no slides)

   WORLD 1 — "WAR PRINT" (war state: newsprint bone, ink black, almagre red, stencil). Everything is printed matter
   that exists physically: a street wall of posters, newspapers, a propaganda poster, postage stamps, a ration book.
    507.3  S03's dark frame is covered by a POSTER PASTED OVER IT (real sheet swinging down onto the wall) — agrarian
           Spain: provinces hatched like ploughed fields, red low sun. "splits" → the poster is RIPPED in half.
    512.5  camera trucks left along the wall: REPUBLICANS / ANARCHISTS / COMMUNISTS posters slap on as spoken,
           a crowd of silhouettes (raised fists, caps, flags) passes out of focus in the foreground (parallax, DOF).
    516.3  whip right: THE CHURCH / THE MILITARY / LANDOWNERS / MONARCHISTS, the other crowd (peaked caps, saturno hat).
    520.9  pull back: a newspaper is pasted into the torn gap — masthead 1936; push into its printed map:
           the July-1936 zones flood (province level, contested provinces hatched, Canary inset). "CIVIL WAR".
    525.5  "Three years": papers 1937 / 1938 / 1939 slapped on top.  "Half a million dead": the 1939 page fills with
           500 black-bordered death notices (each = 1,000 lives) — sober, no motion tricks.
    528.7  GUERNICA: match-cut grid → roofs. A Basque town from above in low sun; bombers' SHADOWS sweep the roofs
           (no Picasso). 530.3 3D: the bombers themselves pass overhead against a sepia sky, sun behind them.
    531.3  smoke rises over the town; a timeline (26 APR 1937 ─ 1 SEP 1939) shows "before WWII even begins".
    534.3  smoke clears onto the poster map: the Republic is swallowed province by province in the order they fell
           → APRIL 1939. Franco's portrait (respectful historical caricature: short, jowls, thin moustache, cap)
           rises in front of red rays — the propaganda poster.
    538.3  pull back: the poster IS a postage stamp; 36 stamps print = 36 years, 1939 ─ 1975.
    543.5  "two lives": the sheet tears along its perforations, 20 | 16; the 16 flip into colourful tourism stamps.
    547.6  zoom into the grey block → engraved map: WALLS rise around Spain (autarky), ships bounce off.
    552.9  camera over the wall onto a kitchen table: ration book, empty plate, coupons torn off.  The book slides
           away: a statistics yearbook — GDP per person under the pre-war line.  Pull back: the yearbook lies on a
           map of Europe: Marshall-Plan ships sail past Spain to 16 recipients (West Germany clipped), who lift.
           Push to Spain: PARIAH.  Slide to a UN seating plan: 60 seats taken, Spain waits outside until 1955.
   WORLD 2 — "1960s TRAVEL POSTER" (miracle state: Shrikhand, halftone print, turquoise / coral / butter).
    568.1  back on the stamp sheet, track along 1955…1958 → the colourful 1959 stamp; dive into it: colour floods.
    572.0  match-cut on the sun: Franco's study, 60s flat style — three Opus Dei technocrats unroll the 1959 plan for
           the aging dictator, who nods; the plan unrolls over the camera → the walled map.
    579.2  the walls topple outward; foreign factories fly in; zoom to the coast — parasols pop along the costas.
    587.0  beach: banner planes tow SUNNY / CHEAP / SAFE.  crane up → rainy London & Hamburg, flight arcs (2 h).
    593.0  a jet passes the lens → arrivals-hall poster "SPAIN IS DIFFERENT"; German & British tourists pose.
    597.7  top-down beach fills with parasols and flag towels: MILLIONS.  sky: a skywriter writes "Spanish Miracle".
    603.8  3D: beach-hut striped growth columns on the sand: Spain 7 %, only Japan (red sun flag) taller.
    608.6  crane up → map: Andalusian farm-workers stream to coastal hotels (cranes) and Barcelona factories.
    615.1  dive into the Benidorm pin → 3D time-lapse: fishing beach, church dome, a forest of towers sprouts.
    619.6  a car crosses the lens → blueprint (plain type, no logos) SEAT · licence FIAT; it colours in.
    623.1  match-cut: the little 1960s car on the coast road, family + roof-rack; pull back: everyone has one.
    625.4  billboard by the road: AGRICULTURAL → a new poster pasted: INDUSTRIAL; wheat folds down, factories pop up.
   WORLD 3 — "SUN vs CLOCK" (the film's paper world, evening light, sneaky score).
    631.8  pull back: the road was a photo in a statistics yearbook on a café table; rack-focus to a wristwatch.
    637.1  match-cut watch → dining-room clock 10:00; pan to the window: the sun still setting at 10:30.
    642.6  the setting sun turns into a peseta with Franco's profile ("FRANCO.").
    643.7  the coin flips into a clock: 3D hotel-lobby clocks LONDON | MADRID | BERLIN, 1940 — Madrid jumps +1 h.
    649.9  pan to the lobby's wall map: accurate Mercator, Greenwich meridian, Madrid 3.7° W, solar bands vs zones.
    655.0  back to the clocks: the tear-off calendar runs 1940 → 2026, nobody moves the hand back.
    659.1  sunlight: a plaza sundial reads 11 while the town-hall clock says 12 — the sun disk vs the clock.
    662.9  the sundial rises into a 24-hour day dial: up in the dark, lunch 15:00, dinner 22:00; SIESTA? struck: MYTH.
    670.5  an apartment façade at four o'clock: six windows, only one blind comes down — 1 IN 6.
    673.9  the dial again: the long day sweeps from waking to dinner with one midday break.
    678.5  night. An empty, made bed, the general's cap on the chair, newspaper 20 NOV 1975; the lamp goes out;
           only the window glows (S05 can open its dawn from it). Score hushes, fades ≈683.
   Music: dread+march (war) → dread (Guernica) → march (Franco) → tension (autarky) → riser/hit (1959) → retro60s →
          sneaky (clocks, with a held breath on "Franco.") → hush.
   ===================================================================================================== */
(function () {
  'use strict';
  const MG = window.MG, P = MG.PAL, F = MG.F, E = MG.ease;
  const { clamp, lerp } = MG;
  const W = 1920, H = 1080, TAU = Math.PI * 2;
  const S4 = {}; MG._S4 = S4;
  const pg = (t, a, b, e) => MG.prog(t, a, b, e);
  const lin = (t, a, b) => MG.lin(t, a, b);
  const tw = (w, a) => MG.T(w, a, 3);
  const C = {
    bone: '#E6DFD0', news: '#E0D8C5', newsD: '#CBC0A7', ink: '#161415', ink2: '#2E2A28', grey: '#77706A', red: '#B8322A', redD: '#7E1F1B',
    plaster: '#D6CCB7', khaki: '#7C7562', skin: '#E2C2A0', skinD: '#9C705A',
    cream: '#F4E9D2', teal: '#2FA7A0', tealD: '#1E7C78', coral: '#F0735A', coralD: '#C9543F', butter: '#F6D06F', butterD: '#DDB04A',
    navy: '#22343C', sky: '#BFE3DF', sea: '#41A6B6', seaD: '#2B8193', sand: '#F2DAA8', pink: '#F6B6A4', white: '#FFF8EC',
  };
  S4.C = C;
  const rgba = (h, a) => MG.col.a(h, a);
  const mix = (a, b, k) => MG.col.mix(a, b, clamp(k));
  const txt = (ctx, s, x, y, o) => MG.text.draw(ctx, s, x, y, o);
  const mono = (ctx, s, x, y, o = {}) => MG.text.draw(ctx, String(s).toUpperCase(), x, y, { font: F.mono, size: o.size || 22, weight: o.weight || 500, tracking: o.tracking ?? 0.16, color: o.color || C.ink, align: o.align, alpha: o.alpha, stroke: o.stroke, strokeW: o.strokeW });
  const camT = (ctx, c) => { ctx.translate(W / 2 + (c.dx || 0), H / 2 + (c.dy || 0)); if (c.r) ctx.rotate(c.r); ctx.scale(c.z, c.z); ctx.translate(-c.x, -c.y); };
  /** log-space zoom keys: [[t,{x,y,z}],...] */
  const camKeys = (t, keys) => { const k = MG.keys(t, keys.map((q) => [q[0], { x: q[1].x, y: q[1].y, lz: Math.log(q[1].z), r: q[1].r || 0 }, q[2] || 'cam'])); return { x: k.x, y: k.y, z: Math.exp(k.lz), r: k.r }; };
  const hh = (t, a, s) => MG.cam.handheld(t, a, s);
  const scr3 = () => MG.scratch(3).getContext('2d');

  // ---------------------------------------------------------------- materials
  /** paper sheet sprite with torn edge, fibres, blotch; draw(x,w,h) paints content in local coords */
  S4.sheet = (key, w, h, o, draw) => { const pad = 14; return MG.cache('s4sh:' + key, w + pad * 2, h + pad * 2, (x) => {
    const path = MG.path.torn(pad, pad, w, h, { seed: o.seed || 3, amp: o.amp ?? 2.4, edges: o.edges || 'tblr', step: o.step || 12 });
    x.save(); x.fillStyle = o.paper || C.news; x.fill(path); x.clip(path); x.save(); x.translate(pad, pad); if (draw) draw(x, w, h); x.restore();
    MG.tex.over(x, 'blotch', { alpha: o.blotch ?? 0.2, color: o.blotchColor || '#5a4630', scale: 3, seed: (o.seed || 3) + 2 });
    MG.tex.over(x, 'fibers', { alpha: 0.55, color: '#2a1a10' });
    if (o.folds) { x.globalCompositeOperation = 'multiply'; for (const f of o.folds) { const g = f[0] === 'v' ? x.createLinearGradient(pad + f[1] * w - 8, 0, pad + f[1] * w + 8, 0) : x.createLinearGradient(0, pad + f[1] * h - 8, 0, pad + f[1] * h + 8); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(0.5, 'rgba(70,50,30,0.22)'); g.addColorStop(0.52, 'rgba(255,250,240,0.0)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(0, 0, w + pad * 2, h + pad * 2); } x.globalCompositeOperation = 'source-over'; }
    const g = x.createRadialGradient(pad + w * 0.45, pad + h * 0.4, Math.min(w, h) * 0.3, pad + w / 2, pad + h / 2, Math.hypot(w, h) * 0.62); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, `rgba(70,45,20,${o.age ?? 0.22})`); x.fillStyle = g; x.globalCompositeOperation = 'multiply'; x.fillRect(0, 0, w + pad * 2, h + pad * 2);
    x.restore(); }); };
  /** paste / unroll a sheet sprite from its top edge. (x,y) = top-centre, s = scale, k = 0..1 unrolled */
  S4.paste = (ctx, spr, x, y, s, k, o = {}) => {
    if (k <= 0.001) return; k = Math.min(1, k); const w = spr.width * s, h = spr.height * s, hv = h * k;
    ctx.save(); ctx.translate(x, y); if (o.rot) ctx.rotate(o.rot * (0.4 + 0.6 * k)); if (o.alpha !== undefined) ctx.globalAlpha *= o.alpha;
    ctx.shadowColor = o.shadowColor || 'rgba(25,14,8,0.42)'; ctx.shadowBlur = o.shadowBlur ?? 14; ctx.shadowOffsetX = o.sdx ?? 5; ctx.shadowOffsetY = o.sdy ?? 8;
    ctx.drawImage(spr, 0, 0, spr.width, Math.max(1, spr.height * k), -w / 2, 0, w, hv); ctx.shadowColor = 'transparent';
    if (k < 1) { const r = Math.max(3, 16 * s * (1 - k) + 4 * s); const g = ctx.createLinearGradient(0, hv - r, 0, hv + r); g.addColorStop(0, 'rgba(0,0,0,0.28)'); g.addColorStop(0.35, '#fffaf0'); g.addColorStop(0.7, o.paper || C.news); g.addColorStop(1, 'rgba(60,40,30,0.95)'); ctx.fillStyle = g; ctx.fillRect(-w / 2 + 6 * s, hv - r, w - 12 * s, r * 2); }
    else if (o.wet > 0) { ctx.globalCompositeOperation = 'screen'; const u = o.wet; const g = ctx.createLinearGradient(-w / 2 + (u * 2 - 0.6) * w, 0, -w / 2 + (u * 2 - 0.2) * w, h); g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(0.5, 'rgba(255,250,235,0.18)'); g.addColorStop(1, 'rgba(255,255,255,0)'); ctx.fillStyle = g; ctx.fillRect(-w / 2, 0, w, h); }
    ctx.restore();
  };
  /** spray-stencil word as a cached sprite (overspray haze + worn edges) */
  S4.sten = (str, size, color, o = {}) => {
    const font = o.font || F.stencil2, weight = o.weight || 900, tr = o.tracking ?? 0.02; const m = scr3(); const tw2 = MG.text.width(m, str, { font, size, weight, tracking: tr }); const pad = Math.ceil(size * 0.25);
    return MG.cache(`s4st:${str}:${size}:${color}:${font}:${weight}:${tr}:${o.wear ?? 0.4}`, tw2 + pad * 2, size * 1.15 + pad * 2, (x, w, h) => {
      const base = pad + size * 0.92; x.filter = `blur(${(size * 0.05).toFixed(1)}px)`; x.globalAlpha = o.haze ?? 0.3; txt(x, str, pad, base, { font, size, weight, tracking: tr, color }); x.filter = 'none'; x.globalAlpha = 1;
      txt(x, str, pad, base, { font, size, weight, tracking: tr, color });
      x.globalCompositeOperation = 'destination-out'; x.globalAlpha = o.wear ?? 0.4; x.fillStyle = x.createPattern(MG.tex.grain(256, 1, 17), 'repeat'); x.fillRect(0, 0, w, h);
      x.globalAlpha = (o.wear ?? 0.4) * 0.5; x.fillStyle = x.createPattern(MG.tex.blotch(512, 7, 9, '#000000', 2.4), 'repeat'); x.fillRect(0, 0, w, h); });
  };
  /** draw a cached word sprite with left→right spray reveal */
  S4.word = (ctx, spr, x, y, k, o = {}) => { if (k <= 0) return; ctx.save(); ctx.globalAlpha *= o.alpha ?? 1; const s = o.scale || 1; const ax = o.align === 'center' ? 0.5 : o.align === 'right' ? 1 : 0; const x0 = x - spr.width * s * ax, y0 = y - spr.height * s * 0.5; ctx.beginPath(); ctx.rect(x0 - 2, y0 - 2, spr.width * s * Math.min(1, k) + 4, spr.height * s + 4); ctx.clip(); if (o.rot) { ctx.translate(x, y); ctx.rotate(o.rot); ctx.translate(-x, -y); } ctx.drawImage(spr, x0, y0, spr.width * s, spr.height * s); ctx.restore(); };
  const hatchPat = (ctx, sp, w, col, ang) => MG.tex.pattern(ctx, MG.tex.lines(sp, w, col, ang));

  // ---------------------------------------------------------------- geo helpers
  MG.geo.init();
  const GEO = MG.geo;
  S4.prov = () => GEO.provinces.features.filter((f) => f.id !== '54');
  const ES10 = () => GEO.country('Spain', '10');
  const NEIGH = ['France', 'Portugal', 'Morocco', 'Algeria', 'Andorra', 'Gibraltar', 'Italy', 'Switzerland', 'United Kingdom', 'Belgium'];
  // July 1936 zones (province level; contested provinces hatched)
  const NAT36 = new Set(['15', '27', '32', '36', '24', '49', '37', '47', '34', '09', '42', '40', '05', '31', '01', '26', '10', '41', '11', '07', '35', '38', '51', '52']);
  const CONT36 = new Set(['22', '50', '44', '14', '18']);
  // order in which the Republic's provinces fell (0 = first … 1 = March 1939)
  const FALL = { '21': 0.04, '06': 0.08, '20': 0.12, '45': 0.15, '29': 0.22, '48': 0.3, '39': 0.34, '33': 0.38, '22': 0.48, '50': 0.48, '44': 0.5, '25': 0.55, '12': 0.6, '43': 0.7, '08': 0.74, '17': 0.78, '14': 0.84, '18': 0.84, '28': 0.9, '19': 0.9, '16': 0.92, '13': 0.92, '02': 0.94, '23': 0.94, '04': 0.96, '30': 0.96, '03': 0.98, '46': 0.98, men: 0.79 };
  /** war-print map of Spain zones. k36: 0..1 flood of the 1936 zones; kwin: 0..1 Nationalist conquest; lw = 1/zoom */
  S4.warMap = (ctx, pr, t, o = {}) => {
    const lw = o.lw || 1, k36 = o.k36 ?? 1, kwin = o.kwin ?? 0; const path = GEO.path(ctx, pr);
    // sea: engraved lines on newsprint
    if (o.sea !== false) { ctx.save(); ctx.fillStyle = o.seaColor || '#D3CCBA'; ctx.fillRect(o.box[0], o.box[1], o.box[2], o.box[3]); ctx.fillStyle = hatchPat(ctx, 7, 1, 'rgba(40,40,50,0.22)', 0); ctx.fillRect(o.box[0], o.box[1], o.box[2], o.box[3]); ctx.restore(); }
    for (const n of ['France', 'Portugal', 'Morocco', 'Algeria', 'Andorra', 'Gibraltar']) { const f = GEO.country(n, '10'); if (f) GEO.draw(ctx, pr, f, { fill: '#E9E2D2', stroke: 'rgba(22,20,21,0.5)', width: 1.1 * lw }); }
    const red = o.red || C.red, ink = o.ink || '#191617';
    const mx = pr([3.62, 39.95]); // Menorca split (Republican in 1936)
    for (const f of S4.prov()) {
      const id = f.id; let col = null, alpha = 1, hatch = false;
      const nat = NAT36.has(id), cont = CONT36.has(id);
      const d = o.delayFn ? o.delayFn(f) : 0; const k = clamp((k36 - d) / 0.25);
      if (k <= 0) col = '#EFE8D8'; else { col = nat ? ink : red; hatch = cont; alpha = k; }
      ctx.save(); ctx.beginPath(); path(f); ctx.fillStyle = '#EFE8D8'; ctx.fill(); ctx.globalAlpha = alpha; ctx.fillStyle = col; ctx.fill();
      if (hatch && k > 0) { ctx.clip(); ctx.fillStyle = MG.tex.pattern(ctx, MG.tex.lines(9, 4.5, ink, 45)); ctx.fill(); }
      if (!nat && kwin > 0) { const fk = clamp((kwin - (FALL[id] ?? 0.95)) / 0.06); if (fk > 0) { ctx.globalAlpha = fk; ctx.fillStyle = ink; ctx.beginPath(); path(f); ctx.fill(); } }
      if (id === '07' && k > 0) { ctx.globalAlpha = alpha; ctx.beginPath(); ctx.rect(mx[0], mx[1] - 400, 600, 800); ctx.clip(); ctx.beginPath(); path(f); ctx.fillStyle = red; ctx.fill(); const fk = clamp((kwin - FALL.men) / 0.06); if (fk > 0) { ctx.globalAlpha = fk; ctx.fillStyle = ink; ctx.fill(); } }
      ctx.restore();
    }
    // halftone print texture on the red spot colour + ink outlines
    ctx.save(); GEO.draw(ctx, pr, GEO.provinceMesh, { stroke: 'rgba(230,223,208,0.45)', width: 0.9 * lw }); GEO.draw(ctx, pr, ES10(), { stroke: ink, width: 1.6 * lw }); ctx.restore();
  };

  // ---------------------------------------------------------------- the war wall world
  const WALL = (S4.WALL = { w: 4700, h: 1500 });
  WALL.tex = () => MG.cache('s4:wallTex', 2200, 760, (x, w, h) => {
    const r = MG.rng(41); x.fillStyle = C.plaster; x.fillRect(0, 0, w, h);
    for (let i = 0; i < 70; i++) { x.fillStyle = r() < 0.5 ? 'rgba(255,250,238,0.14)' : 'rgba(80,62,44,0.08)'; x.fill(MG.path.blob(r() * w, r() * h * 0.8, 30 + r() * 140, { seed: i + 3, irr: 0.35, sx: 1 + r(), sy: 0.6 + r() * 0.6 })); }
    for (let i = 0; i < 55; i++) { const x0 = r() * w, ww = 4 + r() * 26, hh2 = 80 + r() * 380; const g = x.createLinearGradient(0, 0, 0, hh2); g.addColorStop(0, 'rgba(70,55,40,0.10)'); g.addColorStop(1, 'rgba(70,55,40,0)'); x.fillStyle = g; x.fillRect(x0, 0, ww, hh2); }
    // old poster scraps (faded)
    for (let i = 0; i < 26; i++) { const sx = r() * w, sy = 40 + r() * 520, sw = 40 + r() * 170, sh = 30 + r() * 150; const p = MG.path.torn(sx, sy, sw, sh, { seed: 90 + i, amp: 5, step: 7 }); x.save(); x.globalAlpha = 0.35 + r() * 0.35; x.fillStyle = [C.news, '#C9A86A', '#B06A5A', '#8C8579', C.news][i % 5]; x.fill(p); x.clip(p); x.globalAlpha *= 0.6; x.fillStyle = C.ink; if (r() < 0.6) txt(x, ['VIVA', 'UGT', 'CNT', 'POR', 'LA', 'FAI', 'ESPA', 'TRAB'][i % 8], sx + 8, sy + sh * 0.8, { font: F.stencil2, size: sh * 0.8, weight: 900 }); x.restore(); }
    // plinth
    x.fillStyle = '#A3967E'; x.fillRect(0, 600, w, h - 600); x.fillStyle = 'rgba(40,28,18,0.35)'; x.fillRect(0, 598, w, 5); x.fillStyle = 'rgba(255,248,230,0.25)'; x.fillRect(0, 604, w, 2);
    // exposed brick patches
    for (let i = 0; i < 6; i++) { const bx = r() * w, by = 120 + r() * 440, br = 22 + r() * 38; const bp = MG.path.blob(bx, by, br, { seed: 200 + i, irr: 0.45, sx: 1.4 }); x.save(); x.clip(bp); x.fillStyle = '#9A5C44'; x.fillRect(bx - 200, by - 200, 400, 400); x.strokeStyle = 'rgba(220,205,180,0.7)'; x.lineWidth = 2; for (let yy = by - 200; yy < by + 200; yy += 13) { x.beginPath(); x.moveTo(bx - 200, yy); x.lineTo(bx + 200, yy); x.stroke(); for (let xx = bx - 200 + ((yy / 13) % 2) * 16; xx < bx + 200; xx += 32) { x.beginPath(); x.moveTo(xx, yy); x.lineTo(xx, yy + 13); x.stroke(); } } x.restore(); x.strokeStyle = 'rgba(60,45,35,0.5)'; x.lineWidth = 2; x.stroke(bp); }
    // cracks & pock-marks
    x.strokeStyle = 'rgba(40,30,25,0.45)'; x.lineWidth = 1.2; for (let i = 0; i < 14; i++) { let px = r() * w, py = r() * 560; x.beginPath(); x.moveTo(px, py); for (let k = 0; k < 9; k++) { px += (r() - 0.5) * 40; py += 6 + r() * 22; x.lineTo(px, py); } x.stroke(); }
    for (let i = 0; i < 46; i++) { const px = r() * w, py = 60 + r() * 520, pr2 = 2 + r() * 4; x.fillStyle = 'rgba(40,30,25,0.6)'; x.beginPath(); x.arc(px, py, pr2, 0, TAU); x.fill(); x.strokeStyle = 'rgba(255,250,240,0.35)'; x.lineWidth = 1.5; x.beginPath(); x.arc(px - 1, py - 1, pr2 + 2, Math.PI * 0.9, Math.PI * 1.7); x.stroke(); }
    const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, 'rgba(60,45,30,0.12)'); g.addColorStop(0.5, 'rgba(60,45,30,0)'); g.addColorStop(0.78, 'rgba(60,45,30,0.15)'); g.addColorStop(1, 'rgba(30,20,12,0.45)'); x.fillStyle = g; x.fillRect(0, 0, w, h);
    MG.tex.over(x, 'blotch', { alpha: 0.3, color: '#4a3a28', scale: 3, seed: 5 }); MG.tex.over(x, 'fibers', { alpha: 0.6 }); MG.tex.over(x, 'grain', { alpha: 0.12 });
  });
  // poster 1 — agrarian Spain (fields patchwork), with tear halves
  WALL.p1 = () => S4.sheet('p1', 1000, 640, { seed: 11, paper: '#E7DFCB', folds: [['v', 0.5], ['h', 0.5]] }, (x, w, h) => {
    x.fillStyle = '#E7DFCB'; x.fillRect(0, 0, w, h);
    K_sunRed(x, 820, 170, 92);
    const pr = GEO.proj('spain', { center: [-3.4, 40.1], scale: 3150, translate: [w * 0.47, h * 0.57] });
    const path = GEO.path(x, pr); const r = MG.rng(7);
    for (const f of S4.prov()) { if (['35', '38', '51', '52'].includes(f.id)) continue; x.save(); x.beginPath(); path(f); x.clip(); const b = GEO.bbox(pr, f); const a = r() * Math.PI; const sp = 5 + r() * 3.5; x.strokeStyle = r() < 0.18 ? 'rgba(110,40,30,0.75)' : 'rgba(22,20,21,0.78)'; x.lineWidth = 1.1 + r() * 0.9; x.translate(b[0] + b[2] / 2, b[1] + b[3] / 2); x.rotate(a); const R = Math.hypot(b[2], b[3]); for (let v = -R; v < R; v += sp) { x.beginPath(); x.moveTo(-R, v); x.lineTo(R, v + Math.sin(v * 0.1) * 2); x.stroke(); } x.restore(); }
    GEO.draw(x, pr, GEO.provinceMesh, { stroke: '#E7DFCB', width: 2.4 }); GEO.draw(x, pr, ES10(), { stroke: C.ink, width: 2.2 });
    x.fillStyle = C.ink; x.fillRect(40, 40, 4, 120); txt(x, 'SPAIN', 58, 126, { font: F.stencil2, size: 104, weight: 900, color: C.ink, tracking: 0.04 });
    txt(x, '1930s', 64, 162, { font: F.mono, size: 26, weight: 700, color: C.redD, tracking: 0.3 });
    MG.tex.over(x, 'halftone', { alpha: 0.08, spacing: 6, radius: 1.6, color: '#000' });
  });
  function K_sunRed(x, cx, cy, r) { x.save(); x.fillStyle = C.red; x.beginPath(); x.arc(cx, cy, r, 0, TAU); x.fill(); x.fillStyle = MG.tex.pattern(x, MG.tex.halftone(7, 2.1, 'rgba(90,15,10,0.55)')); x.beginPath(); x.arc(cx, cy, r, 0.2, Math.PI * 1.2); x.fill(); x.strokeStyle = C.red; x.lineWidth = 5; for (let i = 0; i < 14; i++) { const a = Math.PI + (i / 13) * Math.PI; x.beginPath(); x.moveTo(cx + Math.cos(a) * (r + 14), cy + Math.sin(a) * (r + 14)); x.lineTo(cx + Math.cos(a) * (r + 46), cy + Math.sin(a) * (r + 46)); x.stroke(); } x.restore(); }
  WALL.tearPts = () => { if (WALL._tp) return WALL._tp; const r = MG.rng(23); const pts = []; for (let i = 0; i <= 40; i++) { const v = i / 40; pts.push([514 + Math.sin(v * 9) * 18 + (r() - 0.5) * 22 + (v - 0.5) * 30, v * 668]); } return (WALL._tp = pts); };
  WALL.half = (side) => { const src = WALL.p1(); return MG.cache('s4:p1half' + side, src.width, src.height, (x, w, h) => { const pts = WALL.tearPts(); x.save(); x.beginPath(); if (side < 0) { x.moveTo(0, 0); pts.forEach((p) => x.lineTo(p[0], p[1])); x.lineTo(0, h); } else { x.moveTo(w, 0); pts.forEach((p) => x.lineTo(p[0], p[1])); x.lineTo(w, h); } x.closePath(); x.clip(); x.drawImage(src, 0, 0); x.restore(); x.strokeStyle = '#FBF6EA'; x.lineWidth = 4; x.beginPath(); pts.forEach((p, i) => (i ? x.lineTo(p[0], p[1]) : x.moveTo(p[0], p[1]))); x.stroke(); }); };
  // camp posters
  const posterDefs = [
    { id: 'rep', w: 560, h: 760, x: 650, y: 190, rot: -0.025, word: 'REPUBLICANS', at: ['Republicans', 512.48] },
    { id: 'ana', w: 540, h: 700, x: 1190, y: 270, rot: 0.03, word: 'ANARCHISTS', at: ['anarchists', 513.15] },
    { id: 'com', w: 560, h: 740, x: 1720, y: 175, rot: -0.018, word: 'COMMUNISTS', at: ['Communists', 514.2] },
    { id: 'chu', w: 540, h: 740, x: 2700, y: 185, rot: 0.02, word: 'THE CHURCH', at: ['Church', 516.55] },
    { id: 'mil', w: 540, h: 700, x: 3220, y: 265, rot: -0.03, word: 'THE MILITARY', at: ['military', 517.15] },
    { id: 'lan', w: 520, h: 720, x: 3730, y: 180, rot: 0.025, word: 'LANDOWNERS', at: ['landowners', 518.12] },
    { id: 'mon', w: 540, h: 740, x: 4250, y: 250, rot: -0.02, word: 'MONARCHISTS', at: ['monarchists', 518.91] },
  ];
  WALL.posters = posterDefs.map((d) => ({ ...d, t0: tw(d.at[0], d.at[1]) - 0.12 }));
  WALL.poster = (d) => S4.sheet('wp:' + d.id, d.w, d.h, { seed: d.id.length * 7 + d.w, paper: '#E4DBC6', folds: [['h', 0.5]] }, (x, w, h) => {
    const ink = C.ink, red = C.red; const sz = Math.min(88, (w - 120) / (d.word.length * 0.5));
    const word = (col, y) => { const spr = S4.sten(d.word, sz, col, { wear: 0.35 }); x.drawImage(spr, w / 2 - spr.width / 2, y - spr.height / 2); };
    if (d.id === 'rep') { x.fillStyle = '#E4DBC6'; x.fillRect(0, 0, w, h); x.save(); x.translate(w / 2, h * 0.42); x.rotate(-0.42); [[red, -150], ['#E0AE36', -50], ['#5B3A6E', 50]].forEach(([c, y]) => { x.fillStyle = c; x.fillRect(-w, y, w * 2, 100); }); x.restore(); x.fillStyle = MG.tex.pattern(x, MG.tex.halftone(8, 2.2, 'rgba(0,0,0,0.22)')); x.fillRect(0, h * 0.6, w, h); word(ink, h - 110); txt(x, '1931', w / 2, 92, { font: F.mono, size: 30, weight: 700, color: ink, align: 'center', tracking: 0.4 }); }
    if (d.id === 'ana') { x.fillStyle = red; x.beginPath(); x.moveTo(0, 0); x.lineTo(w, 0); x.lineTo(0, h); x.fill(); x.fillStyle = ink; x.beginPath(); x.moveTo(w, 0); x.lineTo(w, h); x.lineTo(0, h); x.fill(); word('#E9E1CE', h - 120); x.fillStyle = MG.tex.pattern(x, MG.tex.halftone(9, 2.4, 'rgba(255,240,220,0.18)')); x.fillRect(0, 0, w, h * 0.5); }
    if (d.id === 'com') { x.fillStyle = red; x.fillRect(0, 0, w, h); x.fillStyle = '#E9E1CE'; x.fill(MG.path.star(w / 2, h * 0.4, 190, 76, 5)); x.fillStyle = 'rgba(0,0,0,0.25)'; x.fill(MG.path.poly([[w / 2, h * 0.4], [w / 2 + 180, h * 0.4 - 60], [w / 2 + 110, h * 0.4 + 150]])); word(ink, h - 110); }
    if (d.id === 'chu') { x.fillStyle = ink; x.fillRect(0, 0, w, h); x.fillStyle = '#E9E1CE'; const cx = w / 2; x.fillRect(cx - 70, 150, 140, 330); x.beginPath(); x.moveTo(cx - 90, 160); x.lineTo(cx, 70); x.lineTo(cx + 90, 160); x.fill(); x.fillRect(cx - 9, 20, 18, 70); x.fillRect(cx - 30, 38, 60, 16); x.fillStyle = ink; x.beginPath(); x.arc(cx, 260, 34, Math.PI, 0); x.rect(cx - 34, 260, 68, 60); x.fill(); x.fillStyle = '#E9E1CE'; x.fillRect(0, 480, w, 14); word('#E9E1CE', h - 120); }
    if (d.id === 'mil') { x.fillStyle = '#8B8471'; x.fillRect(0, 0, w, h); x.save(); x.translate(w / 2, 300); x.fillStyle = ink; x.beginPath(); x.ellipse(0, -30, 190, 70, 0, Math.PI, 0); x.lineTo(150, 40); x.lineTo(-150, 40); x.closePath(); x.fill(); x.fillStyle = '#C9A04A'; x.fillRect(-150, 10, 300, 30); x.fillStyle = ink; x.beginPath(); x.moveTo(-160, 40); x.quadraticCurveTo(-60, 120, 120, 50); x.lineTo(150, 40); x.closePath(); x.fill(); x.fillStyle = '#C9A04A'; x.beginPath(); x.ellipse(0, -10, 26, 34, 0, 0, TAU); x.fill(); x.restore(); x.strokeStyle = ink; x.lineWidth = 10; x.beginPath(); x.moveTo(90, 520); x.lineTo(w - 90, 380); x.moveTo(w - 90, 520); x.lineTo(90, 380); x.stroke(); word(ink, h - 105); }
    if (d.id === 'lan') { x.fillStyle = '#E4DBC6'; x.fillRect(0, 0, w, h); x.fillStyle = '#C9A04A'; x.fillRect(0, 330, w, 220); x.strokeStyle = ink; x.lineWidth = 3; for (let i = 0; i < 22; i++) { x.beginPath(); x.moveTo(i * 26, 330); x.lineTo(i * 26 - 40, 550); x.stroke(); } x.fillStyle = ink; for (let i = 0; i < 9; i++) { x.fillRect(30 + i * 60, 270, 9, 110); } x.fillRect(20, 290, w - 40, 7); x.fillRect(20, 330, w - 40, 7); x.beginPath(); x.moveTo(w * 0.62, 270); x.lineTo(w * 0.62 + 90, 200); x.lineTo(w * 0.62 + 180, 270); x.fill(); x.fillRect(w * 0.62 + 20, 270, 140, 60); word(ink, h - 110); }
    if (d.id === 'mon') { [[red, 0], ['#E0AE36', h * 0.25], [red, h * 0.75]].forEach(([c, y], i) => { x.fillStyle = c; x.fillRect(0, y, w, i === 1 ? h * 0.5 : h * 0.25); }); x.save(); x.translate(w / 2, 300); x.fillStyle = ink; x.beginPath(); x.moveTo(-130, 60); x.lineTo(-150, -70); x.lineTo(-75, -10); x.lineTo(0, -110); x.lineTo(75, -10); x.lineTo(150, -70); x.lineTo(130, 60); x.closePath(); x.fill(); x.fillRect(-135, 60, 270, 34); x.fillStyle = '#E0AE36'; for (let i = -2; i <= 2; i++) { x.beginPath(); x.arc(i * 52, 77, 9, 0, TAU); x.fill(); } x.restore(); word(ink, h - 110); }
    MG.tex.over(x, 'grain', { alpha: 0.12 });
  });
  // foreground crowd silhouettes (two camps)
  WALL.crowd = (side) => MG.cache('s4:crowd' + side, 2300, 520, (x, w, h) => {
    const r = MG.rng(side < 0 ? 61 : 73); const n = 26;
    const ink = '#0F0D0C';
    for (let i = 0; i < n; i++) {
      const cx = 40 + (i / (n - 1)) * (w - 80) + (r() - 0.5) * 40, hgt = 0.8 + r() * 0.35, sw = 120 * hgt, top = 150 + r() * 90; const hr = 34 * hgt; const hy = top + hr;
      x.fillStyle = ink;
      // raised fist / flag poles (left) or caps (right)
      if (side < 0 && r() < 0.45) { const ax = cx + (r() < 0.5 ? -1 : 1) * sw * 0.32, ay = hy + hr * 1.4; const fx = ax + (r() - 0.5) * 30, fy = top - 20 - r() * 45; x.beginPath(); x.moveTo(ax - 13, ay); x.lineTo(fx - 10, fy + 30); x.lineTo(fx + 10, fy + 30); x.lineTo(ax + 13, ay); x.fill(); x.beginPath(); x.roundRect(fx - 17, fy - 8, 34, 40, 10); x.fill(); }
      if (false) { const px = cx + 30; x.fillRect(px, top - 170, 5, 210); x.save(); x.translate(px + 5, top - 168); const fw = 150, fh = 90; if (side < 0) { const rr = r() < 0.5; if (rr) { [[C.red, 0], ['#E0AE36', 30], ['#5B3A6E', 60]].forEach(([c, y]) => { x.fillStyle = c; x.fillRect(0, y, fw, 30); }); } else { x.fillStyle = C.red; x.beginPath(); x.moveTo(0, 0); x.lineTo(fw, 0); x.lineTo(0, fh); x.fill(); x.fillStyle = ink; x.beginPath(); x.moveTo(fw, 0); x.lineTo(fw, fh); x.lineTo(0, fh); x.fill(); } } else { [[C.red, 0], ['#E0AE36', 22], [C.red, 67]].forEach(([c, y], k) => { x.fillStyle = c; x.fillRect(0, y, fw, k === 1 ? 45 : 23); }); } x.restore(); x.fillStyle = ink; }
      // body
      x.beginPath(); x.moveTo(cx - sw, h + 10); x.bezierCurveTo(cx - sw, hy + hr * 1.6, cx - sw * 0.55, hy + hr * 1.05, cx - hr * 0.55, hy + hr * 0.85); x.lineTo(cx + hr * 0.55, hy + hr * 0.85); x.bezierCurveTo(cx + sw * 0.55, hy + hr * 1.05, cx + sw, hy + hr * 1.6, cx + sw, h + 10); x.closePath(); x.fill();
      x.beginPath(); x.ellipse(cx, hy, hr * 0.86, hr, 0, 0, TAU); x.fill();
      const ht = r();
      if (side < 0) { if (ht < 0.35) { x.beginPath(); x.ellipse(cx + 6, hy - hr * 0.55, hr * 1.05, hr * 0.42, -0.08, 0, TAU); x.fill(); x.fillRect(cx - hr * 0.9, hy - hr * 0.5, hr * 2.2, hr * 0.25); } else if (ht < 0.6) { x.beginPath(); x.ellipse(cx, hy - hr * 0.62, hr * 1.05, hr * 0.5, 0.15, 0, TAU); x.fill(); } else if (ht < 0.75) { x.beginPath(); x.moveTo(cx - hr * 1.1, hy + hr * 0.6); x.quadraticCurveTo(cx, hy - hr * 2.2, cx + hr * 1.1, hy + hr * 0.6); x.fill(); } }
      else { if (ht < 0.4) { x.beginPath(); x.moveTo(cx - hr * 0.95, hy - hr * 0.35); x.lineTo(cx - hr * 1.15, hy - hr * 1.15); x.quadraticCurveTo(cx, hy - hr * 1.55, cx + hr * 1.15, hy - hr * 1.15); x.lineTo(cx + hr * 0.95, hy - hr * 0.35); x.fill(); x.beginPath(); x.ellipse(cx - hr * 0.4, hy - hr * 0.32, hr * 0.95, hr * 0.22, 0.1, 0, TAU); x.fill(); } else if (ht < 0.55) { x.beginPath(); x.ellipse(cx, hy - hr * 0.6, hr * 1.9, hr * 0.28, 0, 0, TAU); x.fill(); x.beginPath(); x.ellipse(cx, hy - hr * 0.85, hr * 0.9, hr * 0.5, 0, 0, TAU); x.fill(); } else if (ht < 0.72) { x.fillRect(cx - hr * 0.8, hy - hr * 2.1, hr * 1.6, hr * 1.6); x.beginPath(); x.ellipse(cx, hy - hr * 0.5, hr * 1.4, hr * 0.22, 0, 0, TAU); x.fill(); } else if (ht < 0.85) { x.fillStyle = '#5E1712'; x.beginPath(); x.ellipse(cx + 8, hy - hr * 0.6, hr * 1.1, hr * 0.45, -0.12, 0, TAU); x.fill(); x.fillStyle = ink; } }
    }
    // rim light from the upper-left (warm edge)
    x.globalCompositeOperation = 'source-atop'; x.fillStyle = 'rgba(200,170,130,0.16)'; x.fillRect(0, 0, w, h * 0.45); x.globalCompositeOperation = 'source-over';
  });
  // newspapers
  const PAPER = { x: 2200, y: 160, w: 760, h: 1010 };
  WALL.paperBase = (key, year, o = {}) => S4.sheet('np:' + key, PAPER.w, PAPER.h, { seed: 31 + year, paper: C.news, folds: [['h', 0.5], ['v', 0.5]], age: 0.28 }, (x, w, h) => {
    x.fillStyle = C.news; x.fillRect(0, 0, w, h); const ink = '#1d1a1a';
    x.fillStyle = ink; x.fillRect(30, 28, w - 60, 5); x.fillRect(30, 40, w - 60, 2);
    txt(x, o.kicker || 'MADRID · DAILY', 30, 74, { font: F.mono, size: 18, weight: 700, color: ink, tracking: 0.25 }); txt(x, o.no || 'No. 11.204', w - 30, 74, { font: F.mono, size: 18, weight: 500, color: ink, tracking: 0.12, align: 'right' });
    if (o.bigYear) txt(x, String(year), w / 2, 410, { font: F.cond, size: 380, weight: 900, color: ink, align: 'center', tracking: -0.02 });
    else txt(x, String(year), w / 2, 232, { font: F.cond, size: 190, weight: 900, color: ink, align: 'center', tracking: -0.01 });
    x.fillRect(30, o.bigYear ? 444 : 262, w - 60, 3);
    const cols = 4, cw = (w - 60 - 3 * 18) / cols; const y0 = o.bigYear ? 470 : 890; const r = MG.rng(year);
    for (let c = 0; c < cols; c++) for (let yy = y0; yy < h - 34; yy += 13) { const ln = cw * (0.6 + r() * 0.4); x.fillStyle = 'rgba(30,26,26,0.42)'; x.fillRect(30 + c * (cw + 18), yy, yy % 91 < 13 ? ln * 0.5 : ln, 5); }
    if (o.bigYear) { x.fillStyle = 'rgba(30,26,26,0.6)'; x.fillRect(30, 470, w * 0.55, 230); x.fillStyle = MG.tex.pattern(x, MG.tex.halftone(6, 2.3, 'rgba(230,220,200,0.6)')); x.fillRect(30, 470, w * 0.55, 230); }
    MG.tex.over(x, 'grain', { alpha: 0.1 });
  });

  /** draw the wall world under camera c */
  WALL.eave = () => MG.cache('s4:eave', 1200, 260, (x, w, h) => { x.fillStyle = '#2A221D'; x.fillRect(0, 0, w, h); for (let i = 0; i < w; i += 46) { x.fillStyle = i % 92 ? '#3A2E26' : '#33281F'; x.fillRect(i, 150, 40, 70); x.fillStyle = 'rgba(0,0,0,0.5)'; x.fillRect(i + 40, 150, 6, 70); } x.fillStyle = '#4A3B30'; x.fillRect(0, 140, w, 12); const g = x.createLinearGradient(0, 210, 0, h); g.addColorStop(0, 'rgba(20,14,10,0.9)'); g.addColorStop(1, 'rgba(20,14,10,0)'); x.fillStyle = g; x.fillRect(0, 210, w, 50); MG.tex.over(x, 'grain', { alpha: 0.2 }); });
  WALL.draw = (ctx, t, c, o = {}) => {
    ctx.save(); camT(ctx, c);
    ctx.drawImage(WALL.tex(), 0, 0, WALL.w, WALL.h);
    ctx.drawImage(WALL.eave(), -200, -230, WALL.w + 400, 260);
    // central agrarian poster & its tear (drawn first: the new posters are pasted over the old)
    const p1 = WALL.p1(), p1x = 2200 - p1.width / 2, p1y = 316;
    const tt = tw('splits', 510.19); const kt = clamp((t - tt) / 1.25);
    if (kt <= 0) { S4.paste(ctx, p1, 2200, p1y, 1, 1, { shadowBlur: 12 * c.z }); }
    else {
      for (const side of [-1, 1]) {
        const hs = WALL.half(side); const piv = side < 0 ? p1x : p1x + p1.width; const e1 = E.outCubic(clamp(kt / 0.35)); const fall = E.inQuad(clamp((kt - 0.3) / 0.7));
        // stub that stays glued at the outer edge
        ctx.save(); ctx.beginPath(); ctx.rect(side < 0 ? p1x - 10 : piv - 70, p1y - 10, 80, p1.height + 20); ctx.clip(); ctx.drawImage(hs, p1x, p1y); ctx.restore();
        if (fall >= 1) continue;
        ctx.save(); ctx.translate(piv + side * e1 * 40, p1y + fall * 900); ctx.rotate(side * (e1 * 0.06 + fall * 0.5)); ctx.scale(1 - e1 * 0.18 - fall * 0.3, 1 - fall * 0.2); ctx.translate(-piv, -p1y);
        ctx.globalAlpha = 1 - fall * 0.6; ctx.shadowColor = 'rgba(20,10,5,0.5)'; ctx.shadowBlur = 18 + e1 * 24; ctx.shadowOffsetX = side * 14 * e1; ctx.shadowOffsetY = 14 + fall * 30; ctx.drawImage(hs, p1x, p1y); ctx.restore();
      }
    }
    // camp posters
    for (const d of WALL.posters) { const k = MG.ease.outCubic(clamp((t - d.t0) / 0.42)); if (k <= 0) continue; const spr = WALL.poster(d); const s = d.w / (spr.width - 28); S4.paste(ctx, spr, d.x, d.y, s, k, { rot: d.rot, wet: clamp((t - d.t0 - 0.45) / 0.9), shadowBlur: 10 * c.z }); }
    if (o.after) o.after(ctx, t, c);
    ctx.restore();
    // foreground crowds (parallax 1.35, out of focus) — the two camps
    if ((o.crowd ?? 1) > 0.01) { for (const side of [-1, 1]) { const t0 = side < 0 ? tw('Republicans', 512.48) - 0.7 : tw('Church', 516.55) - 0.9; const k = E.outCubic(clamp((t - t0) / 1.1)); if (k <= 0) continue; const spr = MG.blurred(WALL.crowd(side), 6); const pad = spr._pad || 0; ctx.save(); ctx.globalAlpha = (o.crowd ?? 1); const cz = c.z * 1.35; ctx.translate(W / 2 + (c.dx || 0) * 1.5, H / 2 + (c.dy || 0) * 1.5); ctx.scale(cz, cz); ctx.translate(-c.x, -c.y); const cx0 = side < 0 ? 0 : 2420; const bob = Math.sin(t * 2.2 + side) * 5 + MG.wiggle(t, 0.8, 4, side + 3); const sc = 1.22; ctx.translate(cx0, 700 + (1 - k) * 320 + bob); ctx.scale(sc, sc); ctx.drawImage(spr, -pad, -pad); ctx.restore(); } }
  };

  // ---------------------------------------------------------------- transitions (content-motivated)
  /** a real poster sheet swings down from the top and is pasted over the previous frame */
  S4.trPaste = (ctx, A, B, p) => {
    ctx.drawImage(A, 0, 0);
    const e = p < 0.86 ? Math.pow(p / 0.86, 1.7) * 1.0 : 1; const settle = p > 0.86 ? Math.sin((p - 0.86) / 0.14 * Math.PI) * 0.012 : 0;
    const th0 = (1 - e) * 1.5 + settle; const N = 72, D = 1700; let y = 0, z = 0; const pts = [];
    for (let i = 0; i <= N; i++) { pts.push([y, z]); const v = i / N; const th = th0 * (0.75 + 0.6 * v); y += (H / N) * Math.cos(th); z -= (H / N) * Math.sin(th); }
    const scr = (q) => { const s = D / (D + q[1]); return [540 + (q[0] - 540) * s, s]; };
    const bottom = scr(pts[N]); const reach = clamp(bottom[0] / H);
    ctx.save(); const g = ctx.createLinearGradient(0, 0, 0, Math.max(10, bottom[0] + 160)); g.addColorStop(0, 'rgba(10,6,4,0.55)'); g.addColorStop(1, 'rgba(10,6,4,0)'); ctx.globalAlpha = 0.9 * Math.min(1, e * 2); ctx.fillStyle = g; ctx.fillRect(0, 0, W, Math.max(10, bottom[0] + 160)); ctx.restore();
    for (let i = 0; i < N; i++) { const a = scr(pts[i]), b = scr(pts[i + 1]); if (b[0] <= a[0] + 0.05) continue; const s = (a[1] + b[1]) / 2; const th = th0 * (0.75 + 0.6 * (i / N)); ctx.drawImage(B, 0, (i / N) * H, W, H / N + 0.5, 960 - 960 * s, a[0], 1920 * s, b[0] - a[0] + 0.8); const sh = Math.sin(th) * 0.55; if (sh > 0.01) { ctx.fillStyle = `rgba(20,12,6,${sh.toFixed(3)})`; ctx.fillRect(960 - 960 * s, a[0], 1920 * s, b[0] - a[0] + 0.8); } }
    if (reach < 0.995) { ctx.fillStyle = 'rgba(255,250,236,0.8)'; const s = bottom[1]; ctx.fillRect(960 - 960 * s, bottom[0] - 2, 1920 * s, 3); }
  };
  /** smoke / ash drifting over the frame (in-scene foreground) */
  S4.smokeOver = (ctx, t, k, o = {}) => { if (k <= 0.01) return; ctx.save(); ctx.globalAlpha = k; const spr = MG.tex.puff(96, o.seed || 5, o.color || '#2a2522'); for (let i = 0; i < (o.n || 18); i++) { const sx = (MG.rand(9, i) * 2400 - 240 + t * (o.wind ?? 60) * (0.5 + MG.rand(9, i + 4))) % 2400 - 240; const sy = MG.rand(9, i + 9) * 1200 - 60 - t * 12; MG.sprite(ctx, spr, sx, sy, { scale: 5 + MG.rand(9, i + 2) * 6, alpha: 0.55, rot: i + t * 0.05 }); } ctx.restore(); };

  // ---------------------------------------------------------------- scenes
  const SC = [];
  // 1 · THE WALL — poster pasted over S03, ripped in two, the two camps
  SC.push({ id: 's04_wall', start: 507.32, end: 520.80,
    transIn: { type: S4.trPaste, dur: 1.0, ease: 'linear' },
    init() { WALL.tex(); WALL.p1(); WALL.half(-1); WALL.half(1); WALL.posters.forEach(WALL.poster); MG.blurred(WALL.crowd(-1), 7); MG.blurred(WALL.crowd(1), 7); },
    cam(t) { const ts = tw('splits', 510.19), tr = tw('Republicans', 512.48), tc = tw('Church', 516.55);
      return camKeys(t, [[507.32, { x: 2200, y: 650, z: 1.95 }], [508.5, { x: 2200, y: 650, z: 1.88 }], [510.3, { x: 2200, y: 640, z: 1.32 }], [ts + 0.6, { x: 2180, y: 640, z: 1.22 }], [tr - 0.85, { x: 2160, y: 640, z: 1.2 }], [tr - 0.2, { x: 1120, y: 610, z: 1.06 }, 'inOutQuart'], [tc - 0.75, { x: 1330, y: 600, z: 1.04 }, 'inOutSine'], [tc - 0.2, { x: 3180, y: 600, z: 1.04 }, 'inOutQuart'], [519.9, { x: 3760, y: 610, z: 1.07 }, 'inOutSine'], [520.8, { x: 2200, y: 690, z: 0.8 }, 'inOutCubic']]); },
    draw(ctx, t) {
      const c = this.cam(t); const h = hh(t, 3, 4); c.dx = h.dx; c.dy = h.dy; c.r = h.rot;
      // whip blur during the long truck right
      const tc = tw('Church', 516.55), tr2 = tw('Republicans', 512.48); const wb = Math.max(Math.sin(clamp((t - (tc - 0.75)) / 0.55) * Math.PI), Math.sin(clamp((t - (tr2 - 0.85)) / 0.65) * Math.PI));
      if (wb > 0.05) ctx.filter = `blur(${(wb * 9).toFixed(1)}px)`;
      WALL.draw(ctx, t, c, { crowd: 1 - pg(t, 519.9, 520.6) });
      ctx.filter = 'none';
      // light: a hard diagonal shadow from a building off-frame (sol y sombra) across the wall
      ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = 'rgba(58,43,58,0.16)'; ctx.translate(W * 0.86 + Math.sin(t * 0.1) * 20, 0); ctx.rotate(0.38); ctx.fillRect(0, -300, 2000, 2400); ctx.restore();
    },
    post: { grade: 'archival', sat: 0.85, contrast: 1.12, vignette: 0.42, grain: 0.05 } });

  // 2 · NEWSPAPER 1936 → map → three years → half a million
  const NEWS = { t36: tw('1936', 521.03), tErupt: tw('erupts', 523.15), tCivil: tw('civil', 524.27), tThree: tw('Three', 525.55), tHalf: tw('Half', 526.91) };
  SC.push({ id: 's04_news', start: 520.80, end: 528.70,
    init() { WALL.paperBase('1936', 1936, { kicker: 'MADRID · JULY' }); [1937, 1938, 1939].forEach((y) => WALL.paperBase('y' + y, y, { bigYear: true, kicker: y === 1939 ? 'BURGOS · APRIL' : 'EDICIÓN DE GUERRA' })); },
    cam(t) { return camKeys(t, [[520.8, { x: 2200, y: 690, z: 0.8 }], [521.25, { x: 2200, y: 680, z: 0.82 }], [522.7, { x: 2200, y: 690, z: 1.3 }, 'cam'], [NEWS.tThree - 0.15, { x: 2200, y: 700, z: 1.36 }], [NEWS.tThree + 0.25, { x: 2190, y: 680, z: 1.08 }, 'out'], [NEWS.tHalf, { x: 2200, y: 690, z: 1.06 }], [528.7, { x: 2200, y: 790, z: 1.1 }]]); },
    draw(ctx, t) {
      const c = this.cam(t); const h = hh(t, 2.5, 6); c.dx = h.dx; c.dy = h.dy; c.r = h.rot;
      const kPaste = E.outCubic(clamp((t - 520.95) / 0.5));
      WALL.draw(ctx, t, c, { crowd: 0, after: (ctx2, t2, cc) => {
        const base = WALL.paperBase('1936', 1936, { kicker: 'MADRID · JULY' }); const s = PAPER.w / (base.width - 28);
        S4.paste(ctx2, base, PAPER.x, PAPER.y, s, kPaste, { shadowBlur: 14 * cc.z, wet: clamp((t2 - 521.5) / 0.9) });
        if (kPaste >= 1) {
          // printed map on the paper
          const box = [PAPER.x - PAPER.w / 2 + 30, PAPER.y + 372, PAPER.w - 60, 500];
          ctx2.save(); ctx2.beginPath(); ctx2.rect(box[0], box[1], box[2], box[3]); ctx2.clip();
          const pr = GEO.proj('spain', { center: [-3.5, 39.9], scale: 2250, translate: [box[0] + box[2] * 0.52, box[1] + box[3] * 0.52] });
          const k36 = clamp((t2 - NEWS.tErupt) / 1.1); const mad = [-3.7, 40.4], bur = [-3.7, 42.34];
          S4.warMap(ctx2, pr, t2, { box, lw: 1 / cc.z, k36, delayFn: (f) => { const cc2 = window.d3.geoCentroid(f); const o2 = NAT36.has(f.id) ? bur : mad; return window.d3.geoDistance(cc2, o2) * 2.2; } });
          GEO.canaryInset(ctx2, [box[0] + 10, box[1] + box[3] - 112, 170, 100], { fill: k36 > 0.6 ? '#191617' : '#EFE8D8', frame: 'rgba(22,20,21,0.6)', label: 'CANARY IS.', labelColor: 'rgba(22,20,21,0.8)' });
          const la = clamp((t2 - NEWS.tErupt - 0.7) / 0.4);
          if (la > 0) { const pN = pr([-5.4, 41.9]), pR = pr([-1.9, 39.2]); mono(ctx2, 'NATIONALISTS', pN[0], pN[1], { size: 19, weight: 700, color: '#EFE8D8', align: 'center', alpha: la, tracking: 0.14 }); mono(ctx2, 'REPUBLICANS', pR[0], pR[1], { size: 19, weight: 700, color: '#F3E9D4', align: 'center', alpha: la, tracking: 0.14 }); }
          ctx2.restore();
          ctx2.strokeStyle = '#1d1a1a'; ctx2.lineWidth = 2; ctx2.strokeRect(box[0], box[1], box[2], box[3]);
          // headline
          const kh = E.outCubic(clamp((t2 - NEWS.tCivil + 0.05) / 0.35)); if (kh > 0) { const spr = S4.sten('CIVIL WAR', 92, '#1d1a1a', { wear: 0.25, font: F.stencil2 }); ctx2.save(); ctx2.globalAlpha = kh; const sc = 1 + (1 - kh) * 0.25; ctx2.translate(PAPER.x, PAPER.y + 318); ctx2.scale(sc, sc); ctx2.drawImage(spr, -spr.width / 2, -spr.height / 2); ctx2.restore(); }
        }
        // three years: papers slapped on
        [1937, 1938, 1939].forEach((y, i) => { const t0 = NEWS.tThree + 0.05 + i * 0.36; const k = E.outQuart(clamp((t2 - t0) / 0.26)); if (k <= 0) return; const spr = WALL.paperBase('y' + y, y, { bigYear: true, kicker: y === 1939 ? 'BURGOS · APRIL' : 'EDICIÓN DE GUERRA' }); const s = PAPER.w / (spr.width - 28); const rot = [-0.035, 0.03, -0.012][i]; const dx = [-26, 22, 0][i]; S4.paste(ctx2, spr, PAPER.x + dx, PAPER.y - 6 + i * 4, s, k, { rot, shadowBlur: 18 * cc.z, sdy: 12 }); });
        // half a million: 500 notices, each = 1,000 lives
        const kh2 = clamp((t2 - NEWS.tHalf + 0.05) / 1.25);
        if (kh2 > 0) {
          const x0 = PAPER.x - PAPER.w / 2 + 34, y0 = PAPER.y + 466, cols = 25, rows = 20, cw = (PAPER.w - 68) / cols, ch = 19.5; ctx2.save(); ctx2.translate(0, 6); ctx2.rotate(-0.012 * 0);
          ctx2.fillStyle = C.news; ctx2.fillRect(x0 - 6, y0 - 8, cols * cw + 12, rows * ch + 14);
          for (let r = 0; r < rows; r++) for (let q = 0; q < cols; q++) { const i = r * cols + q; const k = clamp((kh2 * 1.15 - (i / 500)) / 0.15); if (k <= 0) continue; const bx = x0 + q * cw + 2, by = y0 + r * ch + 2; ctx2.globalAlpha = k; ctx2.strokeStyle = '#141212'; ctx2.lineWidth = 2.2; ctx2.strokeRect(bx, by, cw - 4, ch - 4); ctx2.fillStyle = 'rgba(20,18,18,0.35)'; ctx2.fillRect(bx + 5, by + 5, (cw - 14) * (0.5 + MG.rand(3, i) * 0.5), 2.5); ctx2.fillRect(bx + 5, by + 10, (cw - 14) * 0.6, 2); }
          ctx2.restore();
          const kl = E.outCubic(clamp((t2 - NEWS.tHalf - 0.3) / 0.5));
          if (kl > 0) { ctx2.save(); ctx2.globalAlpha = kl; ctx2.fillStyle = C.news; ctx2.fillRect(PAPER.x - PAPER.w / 2 + 34, PAPER.y + 466 + rows * ch + 14, PAPER.w - 68, 70); txt(ctx2, '500,000', PAPER.x - PAPER.w / 2 + 34, PAPER.y + 466 + rows * ch + 74, { font: F.cond, size: 66, weight: 900, color: '#141212' }); mono(ctx2, 'DEAD  ·  EACH  ▢  = 1,000 LIVES', PAPER.x + PAPER.w / 2 - 34, PAPER.y + 466 + rows * ch + 64, { size: 17, weight: 700, color: '#141212', align: 'right', tracking: 0.12 }); ctx2.restore(); }
        }
      } });
    },
    post: { grade: 'archival', sat: 0.85, contrast: 1.12, vignette: 0.42, grain: 0.05 } });

  // ---------------------------------------------------------------- shared: tilted ground plane (pitch only, exact per strip)
  /** draw img as a plane tilted away (top farther). o:{cx,cy,w,h,pitch,D,n}. returns projector (u,v)→[x,y,s] */
  S4.tilt = (ctx, img, o) => {
    const N = o.n || 90, D = o.D || 1600, cp = Math.cos(o.pitch), sp = Math.sin(o.pitch);
    const P = (v) => { const yy = (v - 0.5) * o.h; const z3 = -yy * sp; const s = D / (D + z3); return [o.cy + yy * cp * s, s]; };
    if (img) { ctx.save(); if (o.alpha !== undefined) ctx.globalAlpha *= o.alpha; for (let i = 0; i < N; i++) { const a = P(i / N), b = P((i + 1) / N); if (b[0] - a[0] < 0.05) continue; const s = (a[1] + b[1]) / 2; ctx.drawImage(img, 0, (i / N) * img.height, img.width, img.height / N + 0.6, o.cx - o.w * s / 2, a[0], o.w * s, b[0] - a[0] + 0.8); } ctx.restore(); }
    return (u, v) => { const q = P(v); return [o.cx + (u - 0.5) * o.w * q[1], q[0], q[1]]; };
  };

  // ---------------------------------------------------------------- GUERNICA (top-down town in low sun)
  S4.town = () => MG.cache('s4:town', 2400, 1500, (x, w, h) => {
    const r = MG.rng(1937);
    x.fillStyle = '#A9A68A'; x.fillRect(0, 0, w, h);
    // field patchwork
    for (let i = 0; i < 160; i++) { const fx = r() * w, fy = r() * h, fw = 80 + r() * 260, fh = 60 + r() * 200; x.save(); x.translate(fx, fy); x.rotate((r() - 0.5) * 0.5); x.fillStyle = ['#9FA084', '#B4AF92', '#8F8E72', '#A39D7E', '#BDB79A'][i % 5]; x.fillRect(-fw / 2, -fh / 2, fw, fh); x.strokeStyle = 'rgba(50,50,35,0.35)'; x.lineWidth = 2; x.strokeRect(-fw / 2, -fh / 2, fw, fh); if (i % 3 === 0) { x.strokeStyle = 'rgba(60,60,40,0.18)'; x.lineWidth = 1.5; for (let k = -fw / 2; k < fw / 2; k += 9) { x.beginPath(); x.moveTo(k, -fh / 2); x.lineTo(k, fh / 2); x.stroke(); } } x.restore(); }
    // river Oka (east side) & road
    const riv = [[1780, -20], [1720, 300], [1800, 560], [1700, 840], [1760, 1120], [1690, 1520]]; const rp = MG.path.spline(riv, 10);
    x.lineCap = 'round'; x.lineJoin = 'round'; x.strokeStyle = '#596469'; x.lineWidth = 64; x.beginPath(); rp.forEach((p, i) => (i ? x.lineTo(p[0], p[1]) : x.moveTo(p[0], p[1]))); x.stroke(); x.strokeStyle = '#7C878A'; x.lineWidth = 40; x.stroke(); x.strokeStyle = 'rgba(230,225,210,0.25)'; x.lineWidth = 3; x.stroke();
    x.strokeStyle = '#D9D2BE'; x.lineWidth = 18; x.beginPath(); x.moveTo(-20, 900); x.bezierCurveTo(500, 860, 800, 820, 1100, 760); x.bezierCurveTo(1400, 700, 1700, 690, 2420, 620); x.stroke(); x.beginPath(); x.moveTo(1080, -20); x.bezierCurveTo(1100, 300, 1060, 500, 1100, 760); x.bezierCurveTo(1140, 1000, 1080, 1250, 1120, 1520); x.stroke();
    // hedges / trees
    for (let i = 0; i < 260; i++) { const tx = r() * w, ty = r() * h; if (Math.hypot(tx - 1100, (ty - 760) * 1.3) < 520) continue; const tr = 8 + r() * 12; x.fillStyle = 'rgba(30,25,20,0.35)'; x.beginPath(); x.ellipse(tx + tr * 0.7, ty + tr * 0.6, tr, tr * 0.8, 0, 0, TAU); x.fill(); x.fillStyle = ['#4F5642', '#5C6249', '#444B39'][i % 3]; x.beginPath(); x.arc(tx, ty, tr, 0, TAU); x.fill(); x.fillStyle = 'rgba(220,220,190,0.18)'; x.beginPath(); x.arc(tx - tr * 0.3, ty - tr * 0.3, tr * 0.5, 0, TAU); x.fill(); }
    // town: blocks of gabled houses with long cast shadows
    const houses = [];
    for (let gy = -6; gy <= 6; gy++) for (let gx = -7; gx <= 7; gx++) {
      const bx = 1100 + gx * 118 + (gy % 2) * 20, by = 760 + gy * 92; const d = Math.hypot(bx - 1100, (by - 760) * 1.25) + (r() - 0.5) * 120; if (d > 560) continue; if (Math.abs(gx) <= 0 && Math.abs(gy) <= 0) continue; // plaza
      if (gx === -1 && gy === 0) continue;
      let cx = bx - 46; while (cx < bx + 46) { const hw = 18 + r() * 22; const hd = 32 + r() * 22; const top = r() < 0.5; houses.push([cx + hw / 2, by + (top ? -hd / 2 - 4 : hd / 2 + 4), hw, hd]); cx += hw + 1; }
    }
    // shadows first
    x.fillStyle = 'rgba(35,25,35,0.42)'; for (const q of houses) x.fillRect(q[0] - q[2] / 2 + 9, q[1] - q[3] / 2 + 11, q[2], q[3]);
    for (const q of houses) { const [hx, hy, hw, hd] = q; const tone = r() * 0.25; x.fillStyle = mix('#B9543C', '#9C4632', tone); x.fillRect(hx - hw / 2, hy - hd / 2, hw / 2, hd); x.fillStyle = mix('#7E3427', '#6A2A20', tone); x.fillRect(hx, hy - hd / 2, hw / 2, hd); x.strokeStyle = 'rgba(40,20,15,0.6)'; x.lineWidth = 1; x.strokeRect(hx - hw / 2, hy - hd / 2, hw, hd); x.strokeStyle = 'rgba(255,230,200,0.35)'; x.beginPath(); x.moveTo(hx, hy - hd / 2); x.lineTo(hx, hy + hd / 2); x.stroke(); if (r() < 0.25) { x.fillStyle = '#E8E0CC'; x.fillRect(hx - hw / 2 - 2, hy - hd / 2, 3, hd); } }
    // plaza with trees + church (Santa María) with tower
    x.fillStyle = '#CFC6AF'; x.fillRect(1040, 715, 120, 90); for (let i = 0; i < 6; i++) { const tx = 1052 + (i % 3) * 46, ty = 728 + Math.floor(i / 3) * 62; x.fillStyle = 'rgba(30,25,20,0.4)'; x.beginPath(); x.arc(tx + 7, ty + 7, 13, 0, TAU); x.fill(); x.fillStyle = '#56603F'; x.beginPath(); x.arc(tx, ty, 13, 0, TAU); x.fill(); }
    x.fillStyle = 'rgba(35,25,35,0.45)'; x.fillRect(902 + 18, 660 + 22, 110, 190); x.fillRect(930 + 30, 610 + 30, 54, 54);
    x.fillStyle = '#C8BFA8'; x.fillRect(902, 660, 110, 190); x.fillStyle = '#9C9480'; x.fillRect(957, 660, 55, 190); x.fillStyle = '#B9B19A'; x.fillRect(930, 610, 54, 54); x.fillStyle = '#7E776A'; x.beginPath(); x.moveTo(930, 610); x.lineTo(957, 637); x.lineTo(930, 664); x.fill(); x.strokeStyle = 'rgba(40,30,25,0.6)'; x.lineWidth = 2; x.strokeRect(902, 660, 110, 190); x.strokeRect(930, 610, 54, 54);
    // the oak of Guernica (Casa de Juntas) on its green to the west
    x.fillStyle = '#B8B596'; x.beginPath(); x.ellipse(760, 640, 70, 52, 0, 0, TAU); x.fill(); x.fillStyle = 'rgba(30,25,20,0.45)'; x.beginPath(); x.arc(772, 652, 30, 0, TAU); x.fill(); x.fillStyle = '#3F4A33'; x.beginPath(); x.arc(760, 640, 30, 0, TAU); x.fill(); x.fillStyle = 'rgba(200,210,170,0.3)'; x.beginPath(); x.arc(750, 630, 14, 0, TAU); x.fill();
    MG.tex.over(x, 'blotch', { alpha: 0.25, color: '#2b2a20', scale: 3, seed: 8 }); MG.tex.over(x, 'grain', { alpha: 0.12 });
  });
  /** bomber seen from above (He 111-like): fuselage, elliptical wings, engines, tailplane */
  S4.planeTop = (ctx, x, y, L, ang, col) => { ctx.save(); ctx.translate(x, y); ctx.rotate(ang); ctx.fillStyle = col; const sp = L * 1.38; ctx.beginPath(); ctx.ellipse(0, 0, L * 0.5, L * 0.07, 0, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.moveTo(L * 0.16, 0); ctx.bezierCurveTo(L * 0.15, -sp * 0.28, L * 0.06, -sp * 0.5, -L * 0.02, -sp * 0.5); ctx.bezierCurveTo(-L * 0.1, -sp * 0.45, -L * 0.1, -sp * 0.15, -L * 0.1, 0); ctx.bezierCurveTo(-L * 0.1, sp * 0.15, -L * 0.1, sp * 0.45, -L * 0.02, sp * 0.5); ctx.bezierCurveTo(L * 0.06, sp * 0.5, L * 0.15, sp * 0.28, L * 0.16, 0); ctx.fill(); for (const s of [-1, 1]) { ctx.beginPath(); ctx.ellipse(L * 0.16, s * sp * 0.19, L * 0.12, L * 0.035, 0, 0, TAU); ctx.fill(); } ctx.beginPath(); ctx.moveTo(-L * 0.36, 0); ctx.lineTo(-L * 0.42, -L * 0.24); ctx.lineTo(-L * 0.5, -L * 0.22); ctx.lineTo(-L * 0.49, 0); ctx.lineTo(-L * 0.5, L * 0.22); ctx.lineTo(-L * 0.42, L * 0.24); ctx.closePath(); ctx.fill(); ctx.restore(); };
  /** small locator: Spain outline with a dot (real geodata) */
  S4.locator = (ctx, x, y, w, h, ll, o = {}) => { const es = ES10(); const pr = GEO.proj('spain', { center: [-3.6, 40.0], scale: 1 }); pr.fitExtent([[x, y], [x + w, y + h]], { type: 'FeatureCollection', features: GEO.peninsular().features }); ctx.save(); ctx.globalAlpha *= o.alpha ?? 1; GEO.draw(ctx, pr, GEO.country('Portugal', '10'), { fill: o.land2 || 'rgba(230,223,208,0.25)', stroke: o.stroke || 'rgba(230,223,208,0.6)', width: 1 }); GEO.draw(ctx, pr, GEO.country('France', '10'), { fill: o.land2 || 'rgba(230,223,208,0.25)', stroke: o.stroke || 'rgba(230,223,208,0.6)', width: 1 }); GEO.draw(ctx, pr, GEO.peninsular(), { fill: o.land || 'rgba(230,223,208,0.85)', stroke: o.stroke || 'rgba(230,223,208,0.9)', width: 1.2 }); const p = pr(ll); ctx.fillStyle = o.dot || C.red; ctx.beginPath(); ctx.arc(p[0], p[1], o.r || 7, 0, TAU); ctx.fill(); ctx.strokeStyle = o.ring || '#fff'; ctx.lineWidth = 2; ctx.stroke(); if (o.pulse !== undefined) { const u = MG.fract(o.pulse); ctx.globalAlpha *= 1 - u; ctx.strokeStyle = o.dot || C.red; ctx.beginPath(); ctx.arc(p[0], p[1], 8 + u * 26, 0, TAU); ctx.stroke(); } ctx.restore(); return p; };

  const GU = { t: tw('Guernica', 528.79), tB: tw('bombed', 529.79), tG: tw('German', 530.43), tBefore: tw('before', 531.39), tWWII: tw('World', 531.79), tBegins: tw('begins', 533.0) };
  // 3 · GUERNICA from above, bombers' shadows over the roofs
  SC.push({ id: 's04_guernica', start: 528.70, end: 530.30, transIn: { type: 'zoom', dur: 0.55, x: 960, y: 620, amount: 1.6, from: 0.7 },
    init() { S4.town(); },
    draw(ctx, t) {
      const lt = t - 528.7; const z = 0.92 + lt * 0.06, rot = -0.08 + lt * 0.012; const h = hh(t, 2, 9);
      ctx.fillStyle = '#A9A68A'; ctx.fillRect(0, 0, W, H);
      ctx.save(); ctx.translate(W / 2 + h.dx, H / 2 + h.dy); ctx.rotate(rot); ctx.scale(z, z); ctx.translate(-1120, -760); ctx.drawImage(S4.town(), 0, 0);
      // bombers' shadows (sun upper-left → shadows offset down-right), three V-formations sweeping the town
      ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.filter = 'blur(5px)';
      const fl = [[0, 0], [-150, -120], [-150, 120], [-330, -40], [-330, 210], [-480, -160], [-500, 100]];
      fl.forEach((o, i) => { const u = (t - GU.tB + 0.75 - i * 0.05) * 860; if (u < -900) return; const px = -200 + u + o[0], py = 420 + u * 0.36 + o[1]; S4.planeTop(ctx, px, py, 150, 0.36, 'rgba(40,28,48,0.55)'); });
      ctx.restore(); ctx.restore();
      // haze + light falloff
      const g = ctx.createLinearGradient(0, 0, W, H); g.addColorStop(0, 'rgba(255,240,215,0.12)'); g.addColorStop(1, 'rgba(30,20,25,0.35)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      // label: place + date (lower-third, sober)
      const k = E.outCubic(clamp((t - GU.t + 0.1) / 0.5));
      if (k > 0) { ctx.save(); ctx.globalAlpha = k; ctx.fillStyle = 'rgba(18,15,14,0.72)'; ctx.fillRect(120, 820, 560, 150); S4.locator(ctx, 138, 834, 140, 120, MG.geo.cities.Guernica, { pulse: (t - GU.t) * 0.9, land: 'rgba(230,223,208,0.8)' }); txt(ctx, 'GUERNICA', 300, 900, { font: F.stencil2, size: 64, weight: 900, color: C.bone, tracking: 0.04 }); mono(ctx, 'BASQUE COUNTRY · 26 APRIL 1937', 302, 940, { size: 17, color: '#D8CDB4', tracking: 0.14 }); ctx.restore(); }
    },
    post: { grade: 'archival', sat: 0.75, contrast: 1.14, vignette: 0.5, grain: 0.055 } });

  // 4 · 3D — the bombers pass overhead (looking up), sun behind them
  SC.push({ id: 's04_bombers', start: 530.30, end: 531.30,
    init() {
      const T = THREE, U = THREE_ADDONS.BufferGeometryUtils; const sc = new T.Scene(); this.sc = sc; this.cam = new T.PerspectiveCamera(46, 16 / 9, 0.5, 900);
      sc.add(new T.HemisphereLight(0xe9e1d0, 0x4a4038, 1.6)); const dl = new T.DirectionalLight(0xfff2dc, 1.1); dl.position.set(-30, -60, 20); sc.add(dl);
      const prof = [[0.01, 0], [0.7, 0.6], [1.05, 1.6], [1.2, 3.5], [1.15, 7], [0.85, 11], [0.45, 15], [0.2, 16.4]].map((q) => new T.Vector2(q[0], q[1]));
      const fus = new T.LatheGeometry(prof, 14); fus.rotateX(Math.PI / 2); fus.translate(0, 0, -8);
      const wingS = new T.Shape(); wingS.moveTo(-11.3, 0.2); wingS.bezierCurveTo(-8, 2.6, -2, 3.0, 0, 3.0); wingS.bezierCurveTo(2, 3.0, 8, 2.6, 11.3, 0.2); wingS.bezierCurveTo(8, -0.6, 2, -1.1, 0, -1.1); wingS.bezierCurveTo(-2, -1.1, -8, -0.6, -11.3, 0.2);
      const wing = new T.ExtrudeGeometry(wingS, { depth: 0.32, bevelEnabled: false }); wing.rotateX(-Math.PI / 2); wing.translate(0, 0, -3.5);
      const tailS = new T.Shape(); tailS.moveTo(-4.2, 0); tailS.lineTo(-3.6, 1.3); tailS.lineTo(3.6, 1.3); tailS.lineTo(4.2, 0); tailS.lineTo(0, -0.6); tailS.closePath();
      const tail = new T.ExtrudeGeometry(tailS, { depth: 0.2, bevelEnabled: false }); tail.rotateX(-Math.PI / 2); tail.translate(0, 0.4, 6.8);
      const finS = new T.Shape(); finS.moveTo(0, 0); finS.lineTo(1.8, 0); finS.lineTo(1.3, 2.6); finS.lineTo(0.3, 2.6); finS.closePath(); const fin = new T.ExtrudeGeometry(finS, { depth: 0.18, bevelEnabled: false }); fin.rotateY(-Math.PI / 2); fin.translate(0.09, 0.5, 6.4);
      const nac = []; for (const sx of [-4.1, 4.1]) { const n = new T.CylinderGeometry(0.62, 0.48, 4.2, 10); n.rotateX(Math.PI / 2); n.translate(sx, -0.25, -4.4); nac.push(n); }
      const parts = [fus, wing, tail, fin, ...nac].map((g) => (g.index ? g.toNonIndexed() : g)); parts.forEach((g) => { for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k); });
      const geo = U.mergeGeometries(parts); geo.computeVertexNormals();
      const mat = new T.MeshStandardMaterial({ color: 0x3b3934, roughness: 0.75, metalness: 0.15 });
      const prop = new T.MeshBasicMaterial({ color: 0x1a1816, transparent: true, opacity: 0.22, side: T.DoubleSide }); const pg2 = new T.CircleGeometry(1.7, 20);
      this.planes = []; const form = [[0, 56, 0], [-19, 60, -14], [19, 60, -14], [-36, 84, -30], [32, 86, -32], [-8, 104, -52], [22, 108, -56]];
      for (const f of form) { const g = new T.Group(); g.add(new T.Mesh(geo, mat)); for (const sx of [-4.1, 4.1]) { const pm = new T.Mesh(pg2, prop); pm.position.set(sx, -0.25, -6.6); g.add(pm); } g.userData.f = f; sc.add(g); this.planes.push(g); }
      this.sky = MG.cache('s4:bsky', W, H, (x, w, h) => { const g = x.createRadialGradient(1220, 330, 60, 960, 540, 1300); g.addColorStop(0, '#E9E1CF'); g.addColorStop(0.5, '#C6BCA6'); g.addColorStop(1, '#8F8674'); x.fillStyle = g; x.fillRect(0, 0, w, h); for (let i = 0; i < 7; i++) MG.sprite(x, MG.tex.puff(128, 30 + i, '#f3ecdc'), 200 + MG.rand(4, i) * 1500, 120 + MG.rand(5, i) * 800, { scale: 6 + MG.rand(6, i) * 4, alpha: 0.35, sy: 0.5 }); MG.tex.over(x, 'grain', { alpha: 0.1 }); });
    },
    draw(ctx, t) {
      const lt = t - 530.3; ctx.drawImage(this.sky, 0, 0);
      // pale sun behind haze (the film's sun disk, here a cold threat)
      MG.kit.sun(ctx, 1220, 330, 120, t, { color: '#E9DCC0', deep: '#BDAE90', corona: 0.5, halftone: 0.2 });
      const sh = MG.cam.shake(t, 530.3, 3, 0.5, 9, 3);
      this.cam.position.set(0, 0, 0); this.cam.up.set(0.12, 0, 1); this.cam.lookAt(0, 50, 12);
      for (const g of this.planes) { const [fx, fy, fz] = g.userData.f; g.position.set(fx - 3, fy, fz - 26 + lt * 66); g.rotation.set(0, 0, Math.sin(lt * 2 + fx) * 0.05); }
      const c = MG.three.render(this.sc, this.cam, { slot: 0, clearAlpha: 0 });
      ctx.save(); ctx.translate(sh.dx, sh.dy); ctx.drawImage(c, 0, 0); ctx.restore();
      MG.tex.over(ctx, 'halftone', { alpha: 0.07, spacing: 7, radius: 2, color: '#000' });
      mono(ctx, 'GERMAN AIRCRAFT · LEGION CONDOR', 140, 980, { size: 18, color: '#2B2624', tracking: 0.2, alpha: clamp((t - GU.tG) / 0.3) });
    },
    post: { grade: 'archival', sat: 0.7, contrast: 1.15, vignette: 0.5, grain: 0.06 } });

  // 5 · smoke over the town + "before World War II even begins"
  SC.push({ id: 's04_smoke', start: 531.30, end: 534.30,
    draw(ctx, t) {
      const lt = t - 531.3; ctx.fillStyle = '#8E897A'; ctx.fillRect(0, 0, W, H);
      const sky = ctx.createLinearGradient(0, 0, 0, 420); sky.addColorStop(0, '#6E665C'); sky.addColorStop(1, '#B3AA97'); ctx.fillStyle = sky; ctx.fillRect(0, 0, W, 430);
      MG.kit.sun(ctx, 520, 210, 64, t, { color: '#C97A52', deep: '#8C4630', corona: 0.2, halftone: 0.3 });
      const proj = S4.tilt(ctx, S4.town(), { cx: 960 + lt * 10, cy: 760, w: 2400 * 1.05, h: 1500 * 1.05, pitch: 1.08, D: 1250, n: 110 });
      { const hz = proj(0.5, 0)[1]; const hl = MG.cache('s4:bhills', W, 300, (x, w, h) => { const r = MG.rng(5); [['#7F7A6C', 0.15], ['#6C685C', 0.45]].forEach(([c, k], j) => { x.fillStyle = c; x.beginPath(); x.moveTo(0, h); for (let xx = 0; xx <= w; xx += 30) x.lineTo(xx, h * (0.25 + k * 0.6) - Math.sin(xx * 0.004 + j * 2) * 60 - Math.sin(xx * 0.013 + j) * 18 - r() * 6); x.lineTo(w, h); x.fill(); }); }); ctx.drawImage(hl, 0, hz - 230); const fg2 = ctx.createLinearGradient(0, hz - 60, 0, hz + 160); fg2.addColorStop(0, 'rgba(150,142,126,0.0)'); fg2.addColorStop(0.35, 'rgba(150,142,126,0.75)'); fg2.addColorStop(1, 'rgba(150,142,126,0)'); ctx.fillStyle = fg2; ctx.fillRect(0, hz - 60, W, 220); }
      // smoke columns from the centre of town
      const srcs = [[0.46, 0.5], [0.4, 0.46], [0.52, 0.56], [0.43, 0.58], [0.55, 0.45], [0.36, 0.53]];
      ctx.save(); srcs.forEach((q, i) => { const p = proj(q[0], q[1]); MG.fx.smoke(ctx, p[0], p[1] - 40, t + i * 3, { n: 12, seed: 40 + i, spread: 50, rise: 110, r: 110 * p[2], alpha: 0.55 * clamp(lt / 0.8 + 0.4), wind: 28, color: i % 2 ? '#3a3430' : '#57504a', life: 5 }); }); ctx.restore();
      MG.fx.particles(ctx, { n: 70, seed: 12, t, area: [0, 0, W, H], vel: [30, 14], velJitter: 0.6, life: 6, size: [1, 3], color: '#2a2420', alpha: 0.5, drift: 30 });
      ctx.fillStyle = 'rgba(30,22,20,0.28)'; ctx.fillRect(0, 0, W, H);
      // timeline (lower third): 26 APR 1937 ──── 1 SEP 1939
      const y = 900, x0 = 300, x1 = 1620; const k0 = E.outCubic(clamp((t - GU.tBefore + 0.1) / 0.4)), kl = E.inOutCubic(clamp((t - GU.tWWII + 0.1) / 1.2)), k1 = E.outCubic(clamp((t - GU.tBegins + 0.05) / 0.4));
      if (k0 > 0) { ctx.save(); ctx.globalAlpha = k0; ctx.fillStyle = 'rgba(14,12,11,0.6)'; ctx.fillRect(0, y - 90, W, 190); ctx.strokeStyle = C.bone; ctx.lineWidth = 3; ctx.setLineDash([2, 9]); ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(lerp(x0, x1, kl), y); ctx.stroke(); ctx.setLineDash([]); ctx.fillStyle = C.red; ctx.beginPath(); ctx.arc(x0, y, 12, 0, TAU); ctx.fill(); mono(ctx, '26 APR 1937', x0, y - 30, { size: 22, weight: 700, color: C.bone, align: 'center' }); mono(ctx, 'GUERNICA', x0, y + 44, { size: 18, color: '#CFC4AE', align: 'center' });
        // year ticks
        [1938, 1939].forEach((yy, i) => { const xx = lerp(x0, x1, (yy - 1937.32) / (1939.67 - 1937.32)); if (kl > (xx - x0) / (x1 - x0)) { ctx.fillStyle = '#CFC4AE'; ctx.fillRect(xx - 1, y - 10, 2, 20); mono(ctx, String(yy), xx, y + 44, { size: 16, color: '#A69C88', align: 'center' }); } });
        if (k1 > 0) { ctx.globalAlpha = k0 * k1; ctx.strokeStyle = C.bone; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x1, y, 14, 0, TAU); ctx.stroke(); mono(ctx, '1 SEP 1939', x1, y - 30, { size: 22, weight: 700, color: C.bone, align: 'center' }); mono(ctx, 'WORLD WAR II BEGINS', x1, y + 44, { size: 18, color: '#CFC4AE', align: 'center' }); }
        ctx.restore(); }
      S4.smokeOver(ctx, t, pg(t, 533.6, 534.6, 'inOutSine'), { n: 16, seed: 7, color: '#2c2724' });
    },
    post: { grade: 'archival', sat: 0.6, contrast: 1.12, vignette: 0.55, grain: 0.06 } });
  // ---------------------------------------------------------------- FRANCO (respectful historical caricature, 3/4 bust, 1939)
  S4.franco = () => MG.cache('s4:franco', 1000, 1200, (x) => {
    const ink = '#141112', skin = '#E0BD9A', skinD = '#966650', uni = '#77715C', uniD = '#3F3B31', bone = '#EEE6D4', gold = '#C9A04A', red = C.red; const L = [-0.62, -0.78];
    x.lineJoin = 'round'; x.lineCap = 'round';
    const vol = (path, bb, o) => MG.fx.volume(x, path, bb, { light: L, cel: true, outline: ink, outlineW: 5, ...o });
    // tunic: broad, square shoulders
    const torso = MG.path.smooth([[30, 1215], [50, 1010], [100, 890], [220, 826], [380, 796], [470, 792], [570, 794], [710, 812], [840, 856], [930, 940], [965, 1215]], true);
    vol(torso, [30, 792, 935, 423], { color: uni, shadeColor: uniD, shade: 0.8, hi: 0.22, rim: '#E6DCC4', rimW: 6, tex: 'grain', texAlpha: 0.25, shadeOffset: 0.14 });
    x.strokeStyle = 'rgba(30,28,22,0.55)'; x.lineWidth = 4; x.beginPath(); x.moveTo(150, 880); x.quadraticCurveTo(200, 860, 250, 850); x.moveTo(760, 850); x.quadraticCurveTo(820, 870, 880, 905); x.stroke();
    x.fillStyle = 'rgba(30,28,22,0.3)'; x.fill(MG.path.smooth([[240, 960], [380, 950], [372, 990], [250, 996]], true)); x.fill(MG.path.smooth([[648, 968], [810, 975], [800, 1015], [655, 1010]], true));
    x.fillStyle = bone; x.fill(MG.path.poly([[404, 796], [540, 796], [492, 1040], [462, 1040]]));
    vol(MG.path.poly([[456, 830], [492, 830], [504, 1070], [478, 1110], [450, 1070]]), [450, 830, 54, 280], { color: '#2a2524', shade: 0.4, hi: 0.2, outlineW: 3 });
    x.fillStyle = '#1e1a19'; x.beginPath(); x.moveTo(450, 812); x.lineTo(500, 812); x.lineTo(492, 846); x.lineTo(460, 846); x.closePath(); x.fill();
    [[[400, 790], [462, 822], [440, 872], [380, 812]], [[544, 790], [488, 822], [514, 874], [572, 816]]].forEach((c) => { const pth = MG.path.poly(c); x.fillStyle = bone; x.fill(pth); x.strokeStyle = ink; x.lineWidth = 3; x.stroke(pth); });
    vol(MG.path.smooth([[290, 826], [398, 796], [464, 1040], [404, 1170], [318, 990]], true), [290, 796, 174, 374], { color: '#888269', shadeColor: uniD, shade: 0.45, hi: 0.3, outlineW: 4 });
    vol(MG.path.smooth([[548, 796], [672, 836], [628, 1000], [552, 1170], [492, 1040]], true), [492, 796, 180, 374], { color: '#5F5A49', shadeColor: '#2E2B24', shade: 0.45, hi: 0.08, outlineW: 4 });
    [[664, 890], [664, 916]].forEach(([rx, ry], j) => { for (let i = 0; i < 3; i++) { x.fillStyle = [red, gold, red, '#2C4E7A', gold, '#2C4E7A'][j * 3 + i]; x.fillRect(rx + i * 34, ry, 32, 20); } x.strokeStyle = ink; x.lineWidth = 2; x.strokeRect(rx, ry, 102, 20); });
    [[612, 1030], [588, 1140]].forEach(([bx, by]) => vol(MG.path.circle(bx, by, 12), [bx - 12, by - 12, 24, 24], { color: gold, shade: 0.5, hi: 0.6, outlineW: 2.5 }));
    x.save(); x.translate(352, 864); x.rotate(-0.5); x.fillStyle = gold; x.fillRect(-26, -4, 52, 8); x.rotate(1); x.fillRect(-26, -4, 52, 8); x.restore(); x.save(); x.translate(604, 866); x.rotate(0.5); x.fillStyle = '#8C7232'; x.fillRect(-24, -4, 48, 8); x.rotate(-1); x.fillRect(-24, -4, 48, 8); x.restore();
    // short, thick neck
    const neck = MG.path.poly([[386, 630], [596, 630], [606, 800], [492, 826], [380, 800]]); vol(neck, [380, 630, 226, 196], { color: skin, shadeColor: skinD, shade: 0.75, hi: 0.1, outline: null });
    x.save(); x.clip(neck); x.fillStyle = 'rgba(90,50,40,0.55)'; x.beginPath(); x.ellipse(495, 680, 150, 70, 0, 0, TAU); x.fill(); x.restore();
    const ear = MG.path.smooth([[650, 456], [690, 440], [712, 478], [704, 546], [672, 574], [652, 552]], true); vol(ear, [650, 440, 62, 134], { color: skin, shadeColor: skinD, shade: 0.6, outlineW: 4 });
    x.strokeStyle = 'rgba(100,60,45,0.85)'; x.lineWidth = 3.5; x.beginPath(); x.moveTo(682, 466); x.quadraticCurveTo(698, 500, 676, 546); x.stroke();
    // round, fleshy head
    const head = MG.path.smooth([[354, 392], [334, 470], [338, 548], [360, 614], [404, 664], [468, 694], [542, 686], [604, 650], [644, 592], [664, 506], [664, 424], [640, 372], [500, 356]], true);
    vol(head, [334, 356, 330, 338], { color: skin, shadeColor: skinD, shade: 0.72, hi: 0.35, hiColor: '#F6E2C6', rim: '#FFF1DA', rimW: 5, shadeOffset: 0.2, tex: 'grain', texAlpha: 0.15 });
    MG.fx.halftone(x, head, [334, 356, 330, 338], { spacing: 9, color: 'rgba(95,48,36,0.36)', cut: 0.52, amount: 1.45, light: L });
    x.fillStyle = '#1f1916'; x.fill(MG.path.smooth([[628, 404], [660, 410], [662, 466], [646, 478], [632, 444]], true)); x.fill(MG.path.smooth([[356, 404], [372, 402], [368, 446], [354, 452]], true));
    // folds: double chin, jowl, nasolabial, brow furrow
    x.strokeStyle = 'rgba(110,60,45,0.85)'; x.lineWidth = 4.5; x.beginPath(); x.moveTo(414, 676); x.quadraticCurveTo(480, 730, 576, 688); x.stroke();
    x.strokeStyle = 'rgba(110,60,45,0.55)'; x.lineWidth = 3.5; x.beginPath(); x.moveTo(600, 606); x.quadraticCurveTo(586, 652, 540, 668); x.moveTo(440, 566); x.quadraticCurveTo(480, 604, 474, 640); x.moveTo(350, 572); x.quadraticCurveTo(364, 610, 384, 626); x.moveTo(438, 452); x.lineTo(444, 474); x.stroke();
    // visor shadow across the upper face
    x.save(); x.clip(head); const vs = x.createLinearGradient(0, 420, 0, 505); vs.addColorStop(0, 'rgba(60,28,26,0.66)'); vs.addColorStop(1, 'rgba(60,28,26,0)'); x.fillStyle = vs; x.fillRect(320, 410, 360, 100); x.restore();
    // heavy-lidded, hooded eyes
    const eye = (cx, cy, w, h, lidCol) => { const p = new Path2D(); p.moveTo(cx - w, cy); p.quadraticCurveTo(cx - w * 0.1, cy - h * 1.35, cx + w, cy - h * 0.15); p.quadraticCurveTo(cx + w * 0.1, cy + h * 1.05, cx - w, cy); x.fillStyle = '#EFE3D2'; x.fill(p); x.save(); x.clip(p); x.fillStyle = '#3A281E'; x.beginPath(); x.arc(cx - w * 0.22, cy - h * 0.05, h * 1.05, 0, TAU); x.fill(); x.fillStyle = '#120c0a'; x.beginPath(); x.arc(cx - w * 0.22, cy - h * 0.05, h * 0.55, 0, TAU); x.fill(); x.fillStyle = 'rgba(255,255,255,0.85)'; x.beginPath(); x.arc(cx - w * 0.32, cy - h * 0.4, h * 0.25, 0, TAU); x.fill(); x.fillStyle = 'rgba(60,30,25,0.45)'; x.fillRect(cx - w, cy - h * 2, w * 2, h * 1.35); x.restore();
      const lid = new Path2D(); lid.moveTo(cx - w - 3, cy + 1); lid.quadraticCurveTo(cx - w * 0.1, cy - h * 0.75, cx + w + 3, cy - h * 0.1); lid.quadraticCurveTo(cx + w * 0.4, cy - h * 2.3, cx - w * 0.2, cy - h * 2.0); lid.quadraticCurveTo(cx - w * 0.8, cy - h * 1.6, cx - w - 3, cy + 1); x.fillStyle = lidCol; x.fill(lid);
      x.strokeStyle = '#1c1412'; x.lineWidth = 4.5; x.beginPath(); x.moveTo(cx - w - 2, cy + 1); x.quadraticCurveTo(cx - w * 0.1, cy - h * 0.75, cx + w + 2, cy - h * 0.1); x.stroke();
      x.strokeStyle = 'rgba(100,55,42,0.7)'; x.lineWidth = 3; x.beginPath(); x.moveTo(cx - w * 0.8, cy + h * 1.0); x.quadraticCurveTo(cx, cy + h * 1.8, cx + w * 0.8, cy + h * 0.9); x.stroke(); };
    eye(386, 490, 21, 9, '#B88A6E'); eye(512, 488, 28, 11, '#C99B7C');
    MG.fx.ink(x, [[350, 464], [372, 458], [398, 456], [414, 460]], { width: 15, color: '#1d1714', taper: [0.25, 0.5] });
    MG.fx.ink(x, [[468, 462], [500, 455], [534, 455], [564, 462]], { width: 17, color: '#1d1714', taper: [0.5, 0.3] });
    // nose
    x.strokeStyle = 'rgba(70,38,30,0.75)'; x.lineWidth = 3.5; x.beginPath(); x.moveTo(430, 486); x.quadraticCurveTo(404, 532, 370, 564); x.stroke();
    x.fillStyle = 'rgba(90,50,40,0.32)'; x.beginPath(); x.ellipse(440, 560, 32, 26, 0.3, 0, TAU); x.fill();
    x.fillStyle = '#EAC8A6'; x.beginPath(); x.ellipse(382, 566, 23, 18, 0, 0, TAU); x.fill(); x.strokeStyle = 'rgba(70,38,30,0.8)'; x.lineWidth = 3; x.beginPath(); x.ellipse(382, 566, 23, 18, 0, 0.2, Math.PI * 0.9); x.stroke();
    x.fillStyle = '#4a2a22'; x.beginPath(); x.ellipse(408, 579, 9, 5, 0.2, 0, TAU); x.fill(); x.strokeStyle = 'rgba(70,38,30,0.8)'; x.beginPath(); x.arc(424, 568, 14, -0.2, 1.8); x.stroke();
    // thin moustache, tight down-turned mouth
    x.fillStyle = '#1a1412'; x.fill(MG.path.smooth([[374, 597], [402, 589], [436, 590], [462, 597], [474, 607], [454, 610], [420, 606], [392, 609], [376, 607]], true));
    x.strokeStyle = '#3a1a17'; x.lineWidth = 4; x.beginPath(); x.moveTo(390, 630); x.quadraticCurveTo(424, 632, 462, 628); x.stroke(); x.strokeStyle = 'rgba(255,232,210,0.45)'; x.lineWidth = 3; x.beginPath(); x.moveTo(400, 642); x.quadraticCurveTo(424, 646, 450, 640); x.stroke();
    // general's peaked cap
    vol(MG.path.smooth([[300, 352], [320, 258], [424, 204], [566, 198], [690, 238], [722, 316], [700, 368], [524, 352], [362, 370]], true), [300, 198, 422, 172], { color: '#7E7862', shadeColor: '#45412F', shade: 0.6, hi: 0.35, outlineW: 5 });
    const band = MG.path.smooth([[320, 338], [504, 320], [680, 336], [700, 370], [676, 412], [504, 396], [338, 412], [318, 376]], true); vol(band, [318, 320, 382, 92], { color: '#2C2925', shade: 0.4, hi: 0.15, outlineW: 4 });
    x.save(); x.clip(band); x.fillStyle = gold; for (let i = 0; i < 22; i++) { const u = i / 21; const bx = lerp(334, 686, u), by = 366 - Math.sin(u * Math.PI) * 12; x.save(); x.translate(bx, by); x.rotate(i % 2 ? 0.7 : -0.7); x.beginPath(); x.ellipse(0, 0, 13, 6, 0, 0, TAU); x.fill(); x.restore(); } x.restore();
    vol(MG.path.smooth([[414, 312], [450, 288], [484, 312], [474, 352], [450, 364], [424, 352]], true), [414, 288, 70, 76], { color: gold, shade: 0.45, hi: 0.6, outlineW: 3 });
    x.fillStyle = C.redD; x.beginPath(); x.arc(449, 330, 11, 0, TAU); x.fill();
    vol(MG.path.smooth([[298, 394], [424, 408], [566, 414], [618, 406], [570, 444], [424, 456], [316, 440], [280, 418]], true), [280, 394, 338, 62], { color: '#1A1716', shade: 0.3, hi: 0.55, hiColor: '#9a948a', outlineW: 4 });
  });
  S4.francoTint = (tint) => MG.cache('s4:francoT:' + tint, 1000, 1200, (x, w, h) => { const src = S4.franco(); x.filter = 'grayscale(1) contrast(1.35) brightness(1.12)'; x.drawImage(src, 0, 0); x.filter = 'none'; x.globalCompositeOperation = 'multiply'; x.fillStyle = tint; x.fillRect(0, 0, w, h); x.globalCompositeOperation = 'source-atop'; x.fillStyle = MG.tex.pattern(x, MG.tex.lines(5, 1.2, 'rgba(0,0,0,0.28)', 0)); x.fillRect(0, 0, w, h); x.globalCompositeOperation = 'destination-in'; x.drawImage(src, 0, 0); });

  // ---------------------------------------------------------------- STAMPS (36 years; two lives)
  const GREYS = ['#56604F', '#5E4A3E', '#4C5363', '#6A4A4A'];
  const TOUR = ['sun', 'parasol', 'castle', 'boat'];
  /** 1960s tourism-stamp artwork in stamp-local coords (22..278 × 22..338); t animates, bloom 0..1 brightens */
  S4.tourArt = (x, d, t, bloom) => {
    const bgc = { sun: C.butter, parasol: C.sand, castle: C.sky, boat: C.teal }[d]; x.fillStyle = bgc; x.fillRect(-400, -400, 1100, 1200);
    if (d === 'sun') { const g = x.createLinearGradient(0, 22, 0, 222); g.addColorStop(0, C.white); g.addColorStop(1, mix(C.butter, '#FFE08A', bloom)); x.fillStyle = g; x.fillRect(-400, -400, 1100, 622); if (bloom > 0) { x.save(); x.translate(150, 150); x.rotate(t * 0.05); x.fillStyle = rgba('#FFFFFF', 0.35 * bloom); for (let k = 0; k < 16; k++) { x.beginPath(); x.moveTo(0, 0); x.arc(0, 0, 700, (k / 16) * TAU, (k / 16) * TAU + TAU / 32); x.closePath(); x.fill(); } x.restore(); }
      MG.kit.sun(x, 150, 150, 64, t, { color: C.coral, deep: C.coralD, corona: 0, halftone: 0.6 }); x.fillStyle = C.teal; x.fillRect(-400, 222, 1100, 600); x.strokeStyle = C.white; x.lineWidth = 4; for (let k = 0; k < 8; k++) { x.beginPath(); for (let u = -400; u <= 700; u += 8) x.lineTo(u, 240 + k * 22 + Math.sin(u * 0.08 + k + t * 2.2) * 4); x.stroke(); }
      x.fillStyle = C.white; const bx = 80 + Math.sin(t * 0.8) * 3; x.beginPath(); x.moveTo(bx, 230); x.lineTo(bx, 170); x.lineTo(bx + 38, 230); x.fill(); x.fillStyle = C.navy; x.fillRect(bx - 12, 230, 54, 7); }
    if (d === 'parasol') { x.fillStyle = C.teal; x.fillRect(-400, -400, 1100, 512); x.fillStyle = C.navy; x.fillRect(146, 150, 6, 150); for (let k = 0; k < 6; k++) { x.fillStyle = k % 2 ? C.white : C.coral; x.beginPath(); x.moveTo(150, 150); x.arc(150, 150, 100, Math.PI + k * Math.PI / 6, Math.PI + (k + 1) * Math.PI / 6); x.fill(); } x.fillStyle = C.coral; x.fillRect(60, 280, 90, 30); x.fillStyle = C.white; x.fillRect(60, 290, 90, 8); }
    if (d === 'castle') { MG.kit.sun(x, 220, 90, 34, t, { color: C.butter, deep: C.butterD, corona: 0, halftone: 0.3 }); x.fillStyle = C.tealD; x.beginPath(); x.moveTo(22, 330); x.quadraticCurveTo(150, 170, 278, 330); x.fill(); x.fillStyle = C.white; x.fillRect(90, 160, 120, 90); for (let k = 0; k < 6; k++) x.fillRect(90 + k * 22, 148, 12, 14); x.fillRect(130, 110, 40, 60); x.fillStyle = C.navy; x.fillRect(142, 200, 16, 50); }
    if (d === 'boat') { MG.kit.sun(x, 90, 90, 36, t, { color: C.butter, deep: C.butterD, corona: 0, halftone: 0.3 }); x.fillStyle = C.seaD; x.fillRect(22, 240, 256, 100); x.fillStyle = C.coral; x.beginPath(); x.moveTo(70, 240); x.lineTo(230, 240); x.lineTo(205, 275); x.lineTo(95, 275); x.fill(); x.fillStyle = C.white; x.beginPath(); x.moveTo(150, 90); x.lineTo(150, 236); x.lineTo(232, 230); x.closePath(); x.fill(); x.fillStyle = C.navy; x.fillRect(148, 90, 4, 150); }
  };
  S4.stamp = (i, kind, res = 1) => MG.cache(`s4:stamp:${i}:${kind}:${res}`, 300 * res, 360 * res, (x) => {
    x.scale(res, res); const yr = 1939 + i; x.fillStyle = '#F4EFE3'; x.fillRect(0, 0, 300, 360);
    if (kind === 'grey') { const tint = GREYS[i % 4]; x.fillStyle = tint; x.fillRect(22, 22, 256, 316); x.fillStyle = mix(tint, '#F4EFE3', 0.82); x.fillRect(32, 58, 236, 234); x.save(); x.beginPath(); x.rect(32, 58, 236, 234); x.clip(); x.drawImage(S4.francoTint(tint), 230, 175, 620, 615, 32, 58, 236, 234); x.restore(); x.strokeStyle = '#F4EFE3'; x.lineWidth = 2; x.strokeRect(29, 55, 242, 240);
      txt(x, 'ESPAÑA', 150, 47, { font: F.roman, size: 26, weight: 700, color: '#F4EFE3', align: 'center', tracking: 0.12 }); txt(x, '1 PTA', 36, 324, { font: F.roman, size: 22, weight: 700, color: '#F4EFE3' }); txt(x, String(yr), 264, 324, { font: F.mono, size: 18, weight: 700, color: '#F4EFE3', align: 'right' }); }
    else { const d = TOUR[i % 4]; x.save(); x.beginPath(); x.rect(22, 22, 256, 316); x.clip(); S4.tourArt(x, d, 0, 0);
      MG.tex.over(x, 'halftone', { alpha: 0.12, spacing: 6, radius: 1.7, color: C.navy }); x.restore();
      txt(x, 'ESPAÑA', 150, 62, { font: F.retro, size: 30, color: C.white, align: 'center', stroke: C.navy, strokeW: 5 }); txt(x, '1 PTA', 36, 324, { font: F.retro, size: 22, color: C.white, stroke: C.navy, strokeW: 4 }); txt(x, String(yr), 264, 324, { font: F.mono, size: 18, weight: 700, color: C.navy, align: 'right' }); }
    MG.tex.over(x, 'grain', { alpha: 0.12 });
    x.globalCompositeOperation = 'destination-out'; for (let q = 0; q <= 300; q += 15) { x.beginPath(); x.arc(q, 0, 6, 0, TAU); x.arc(q, 360, 6, 0, TAU); x.fill(); } for (let q = 15; q < 360; q += 15) { x.beginPath(); x.arc(0, q, 6, 0, TAU); x.arc(300, q, 6, 0, TAU); x.fill(); }
  });
  const STP = { w: 300, h: 360, px: 318, py: 378 };
  S4.stampPos = (i) => { const col = i % 6, row = Math.floor(i / 6); return [-954 + col * STP.px, -1134 + row * STP.py]; };
  /** draw the sheet: o {printed(i)→0..1, split 0..1, flip(i)→0..1, dim} */
  S4.sheetDraw = (ctx, t, o = {}) => {
    const sp = E.inOutCubic(clamp(o.split || 0));
    for (let i = 0; i < 36; i++) {
      const k = o.printed ? o.printed(i) : 1; if (k <= 0) continue; let [sx, sy] = S4.stampPos(i); const right = i >= 20; sx += (right ? 150 : -150) * sp; sy += (right ? 60 : -60) * sp;
      const f = right && o.flip ? o.flip(i) : 0; const sxk = Math.abs(Math.cos(f * Math.PI)); const spr = f < 0.5 ? S4.stamp(i, 'grey', i === 0 ? 3 : 1) : S4.stamp(i, 'tour');
      ctx.save(); ctx.translate(sx + STP.w / 2, sy + STP.h / 2); const pop = 1 + (1 - E.outCubic(k)) * 0.12; ctx.scale(pop * Math.max(0.02, sxk), pop); ctx.rotate(MG.range(5, i, -0.012, 0.012)); ctx.globalAlpha = clamp(k * 2);
      ctx.shadowColor = 'rgba(30,20,12,0.35)'; ctx.shadowBlur = 10; ctx.shadowOffsetX = 4; ctx.shadowOffsetY = 6; ctx.drawImage(spr, -STP.w / 2, -STP.h / 2, STP.w, STP.h); ctx.shadowColor = 'transparent';
      if (!right && o.dim) { ctx.fillStyle = `rgba(40,30,30,${0.22 * o.dim})`; ctx.fillRect(-STP.w / 2 + 6, -STP.h / 2 + 6, STP.w - 12, STP.h - 12); }
      ctx.restore();
    }
  };
  S4.desk = (ctx, col = '#2C2522') => { ctx.drawImage(MG.cache('s4:desk:' + col, W, H, (x, w, h) => { x.fillStyle = col; x.fillRect(0, 0, w, h); const r = MG.rng(3); x.strokeStyle = 'rgba(255,230,200,0.05)'; for (let i = 0; i < 160; i++) { x.lineWidth = 1 + r() * 3; const y = r() * h; x.beginPath(); x.moveTo(0, y); for (let xx = 0; xx <= w; xx += 40) x.lineTo(xx, y + Math.sin(xx * 0.004 + i) * 12); x.stroke(); } MG.tex.over(x, 'blotch', { alpha: 0.35, color: '#000', scale: 3 }); const g = x.createRadialGradient(w * 0.4, h * 0.35, 100, w * 0.5, h * 0.5, w * 0.75); g.addColorStop(0, 'rgba(255,220,170,0.16)'); g.addColorStop(1, 'rgba(0,0,0,0.5)'); x.fillStyle = g; x.fillRect(0, 0, w, h); }), 0, 0); };

  // 6 · the military wins → Franco's poster
  const FR = { tWins: tw('wins', 535.08), tLed: tw('led', 535.88), tGen: tw('General', 536.27), tFr: tw('Franco', 537.32) };
  SC.push({ id: 's04_franco', start: 534.30, end: 538.30, transIn: { type: 'fade', dur: 0.6 },
    init() { S4.franco(); },
    draw(ctx, t) {
      const c = camKeys(t, [[534.3, { x: 520, y: 400, z: 1.5 }], [535.6, { x: 560, y: 420, z: 1.42 }], [536.4, { x: 960, y: 540, z: 1.0 }], [537.75, { x: 990, y: 545, z: 1.05 }], [538.32, { x: 1157, y: 560, z: 1.85 }, 'inCubic']]);
      const h = hh(t, 2, 12); c.dx = h.dx; c.dy = h.dy;
      MG.kit.paper(ctx, '#3A332E', { seed: 4, light: 0.2 });
      ctx.save(); camT(ctx, c);
      ctx.drawImage(MG.cache('s4:posterFr', 2600, 1700, (x, w, h2) => { x.fillStyle = '#E4DBC6'; x.fillRect(0, 0, w, h2); MG.tex.over(x, 'fibers', { alpha: 0.6 }); MG.tex.over(x, 'blotch', { alpha: 0.18, color: '#5a4630', scale: 3 }); }), -340, -310);
      // rays behind the leader (propaganda) — they open with his name
      const kr = E.outCubic(clamp((t - FR.tLed) / 0.9));
      if (kr > 0) { ctx.save(); ctx.translate(1180, 520); ctx.rotate(t * 0.02); ctx.fillStyle = rgba(C.red, 0.85 * kr); for (let i = 0; i < 18; i++) { const a = (i / 18) * TAU; ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, 1400 * kr, a, a + TAU / 36); ctx.closePath(); ctx.fill(); } ctx.restore(); }
      // the map: the Republic swallowed province by province, in the order it fell
      const box = [110, 110, 820, 640]; ctx.save(); ctx.beginPath(); ctx.rect(box[0], box[1], box[2], box[3]); ctx.clip();
      const pr = GEO.proj('spain', { center: [-3.6, 40.0], scale: 3000, translate: [box[0] + box[2] * 0.52, box[1] + box[3] * 0.5] });
      S4.warMap(ctx, pr, t, { box, lw: 1 / c.z, k36: 1, kwin: clamp((t - (FR.tWins - 0.55)) / 1.2), seaColor: '#D9D1BE' });
      ctx.restore(); ctx.strokeStyle = C.ink; ctx.lineWidth = 3; ctx.strokeRect(box[0], box[1], box[2], box[3]);
      GEO.canaryInset(ctx, [box[0] + 12, box[1] + box[3] - 122, 180, 108], { fill: '#191617', frame: 'rgba(22,20,21,0.6)', label: 'CANARY IS.', labelColor: 'rgba(22,20,21,0.8)' });
      const kd = E.outCubic(clamp((t - FR.tWins - 0.3) / 0.5)); if (kd > 0) { ctx.save(); ctx.globalAlpha = kd; ctx.fillStyle = C.ink; ctx.fillRect(box[0], box[1] + box[3] + 14, 330, 46); mono(ctx, '1 APRIL 1939 · END OF WAR', box[0] + 14, box[1] + box[3] + 45, { size: 18, weight: 700, color: C.bone }); ctx.restore(); }
      // portrait rises
      const kp = E.outCubic(clamp((t - FR.tLed + 0.1) / 0.85)); if (kp > 0) { const spr = S4.franco(); ctx.save(); ctx.shadowColor = 'rgba(20,10,5,0.45)'; ctx.shadowBlur = 30; ctx.shadowOffsetX = -14; ctx.shadowOffsetY = 10; const s = 0.78; ctx.drawImage(spr, 1180 - 500 * s, 1090 - 1200 * s + (1 - kp) * 520, 1000 * s, 1200 * s); ctx.restore(); }
      // name
      const kn = clamp((t - FR.tGen + 0.05) / 0.4); if (kn > 0) { ctx.save(); ctx.globalAlpha = kn; ctx.fillStyle = C.ink; ctx.fillRect(110, 848, 640, 150); mono(ctx, 'GENERAL', 136, 892, { size: 22, weight: 700, color: '#D8CDB4', tracking: 0.4 }); const sp2 = S4.sten('FRANCISCO FRANCO', 70, C.bone, { wear: 0.2 }); S4.word(ctx, sp2, 122, 948, clamp((t - FR.tGen - 0.1) / 0.6) * 1.05); ctx.restore(); }
      ctx.restore();
      S4.smokeOver(ctx, t, 1 - pg(t, 534.3, 535.3, 'inOutSine'), { n: 16, seed: 7, color: '#2c2724' });
    },
    post: { grade: 'archival', sat: 0.85, contrast: 1.12, vignette: 0.45, grain: 0.05 } });

  // 7 · the poster is a stamp: 36 years → two lives
  const ST = { t36: tw('36', 539.32), t75: tw('1975.', 541.72), tTwo: tw('two', 545.39), tLives: tw('different', 546.51), tUnder: tw('Under', 543.55) };
  SC.push({ id: 's04_stamps', start: 538.30, end: 547.55,
    init() { for (let i = 0; i < 36; i++) { S4.stamp(i, 'grey', i === 0 ? 3 : 1); if (i >= 20) S4.stamp(i, 'tour'); } },
    draw(ctx, t) {
      const f0 = S4.stampPos(0); const fx = f0[0] + 32 + (470 - 230) * (236 / 620), fy = f0[1] + 58 + (520 - 175) * (234 / 615);
      const c = camKeys(t, [[538.3, { x: fx, y: fy, z: 3.6 }], [538.55, { x: fx + 10, y: fy + 6, z: 3.3 }], [539.4, { x: 760, y: 0, z: 0.43 }, 'cam'], [543.55, { x: 740, y: 10, z: 0.44 }], [544.8, { x: 0, y: 40, z: 0.41 }], [547.6, { x: -40, y: 20, z: 0.43 }]]);
      const h = hh(t, 2, 14); c.dx = h.dx; c.dy = h.dy;
      S4.desk(ctx, '#2E2724');
      ctx.save(); camT(ctx, c);
      const split = clamp((t - (ST.tUnder + 0.35)) / 0.9);
      S4.sheetDraw(ctx, t, { printed: (i) => (i === 0 ? 1 : clamp((t - 538.62 - i * 0.022) / 0.14)), split, flip: (i) => clamp((t - (ST.tTwo - 0.1) - (i - 20) * 0.075) / 0.35), dim: clamp((t - ST.tTwo) / 0.8) });
      // counter & range (world, right of the sheet)
      const n = Math.round(clamp((t - 538.62) / (36 * 0.022)) * 35) + 1; const kc = clamp((t - 538.85) / 0.3) * (1 - clamp((t - ST.tUnder) / 0.4));
      if (kc > 0) { ctx.save(); ctx.globalAlpha = kc; txt(ctx, String(n), 1180, 150, { font: F.cond, size: 560, weight: 900, color: C.bone, tracking: -0.02 }); txt(ctx, 'YEARS', 1196, 330, { font: F.stencil2, size: 150, weight: 900, color: C.red, tracking: 0.04 }); const kl = E.inOutCubic(clamp((t - 540.6) / 1.1)); ctx.strokeStyle = C.bone; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(1196, 470); ctx.lineTo(1196 + 760 * kl, 470); ctx.stroke(); txt(ctx, '1939', 1196, 560, { font: F.mono, size: 64, weight: 700, color: C.bone }); if (t > ST.t75 - 0.1) txt(ctx, '1975', 1956, 560, { font: F.mono, size: 64, weight: 700, color: C.bone, align: 'right', alpha: clamp((t - ST.t75 + 0.1) / 0.3) }); ctx.restore(); }
      // two lives: labels at the sides
      const kL = E.outCubic(clamp((t - (ST.tUnder + 1.2)) / 0.6));
      if (kL > 0) { ctx.save(); ctx.globalAlpha = kL; txt(ctx, '1939–1959', -1170, -420, { font: F.cond, size: 120, weight: 800, color: '#CFC6B4', align: 'right' }); mono(ctx, '20 YEARS', -1176, -318, { size: 56, weight: 700, color: '#BDB4A2', align: 'right' }); txt(ctx, '1959–1975', 1170, 640, { font: F.retro, size: 104, color: C.butter }); mono(ctx, '16 YEARS', 1176, 732, { size: 56, weight: 700, color: C.sky }); ctx.restore(); }
      ctx.restore();
      // sol y sombra inside the frame: the first life falls into shade, the second into sun
      const ks = E.inOutCubic(clamp((t - ST.tTwo + 0.2) / 1.2)); if (ks > 0) { ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.globalAlpha = 0.5 * ks; ctx.fillStyle = C.ink; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(lerp(-200, 1180, ks), 0); ctx.lineTo(lerp(-600, 760, ks), H); ctx.lineTo(0, H); ctx.fill(); ctx.restore(); ctx.save(); ctx.globalCompositeOperation = 'screen'; ctx.globalAlpha = 0.18 * ks; const g = ctx.createRadialGradient(1500, 700, 50, 1500, 700, 900); g.addColorStop(0, '#FFD89A'); g.addColorStop(1, 'rgba(255,216,154,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); ctx.restore(); }
    },
    post: (t) => ({ grade: 'archival', sat: lerp(0.8, 1.0, clamp((t - 545) / 1.5)), contrast: 1.1, vignette: 0.45, grain: 0.05 }) });
  // ---------------------------------------------------------------- AUTARKY (walls around the map)
  /** Spain's polygons as screen polylines (no Canaries / Ceuta / Melilla) */
  S4.esRings = (pr, step = 3) => { const g = ES10().geometry; const polys = g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates]; const out = []; for (const poly of polys) { const ring = poly[0]; if (ring.length < 20) continue; if (ring[0][1] < 36.05) continue; const pts = []; const st = ring.length > 300 ? step : 1; for (let i = 0; i < ring.length; i += st) { const q = pr(ring[i]); if (q) pts.push(q); } out.push(pts); } return out; };
  /** stacked stone wall along rings. hgt px (world), o: {col, top, lw} */
  S4.walls = (ctx, rings, hgt, o = {}) => { if (hgt <= 0.3) return; const n = Math.max(2, Math.ceil(hgt / 2.2)); const lw = o.lw || 8; ctx.save(); ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    const pathR = (dy) => { ctx.beginPath(); for (const r of rings) { r.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1] + dy) : ctx.moveTo(p[0], p[1] + dy))); ctx.closePath(); } };
    ctx.strokeStyle = 'rgba(25,18,12,0.35)'; ctx.lineWidth = lw * 1.6; ctx.filter = 'blur(4px)'; ctx.translate(hgt * 0.5, hgt * 0.3); pathR(0); ctx.stroke(); ctx.translate(-hgt * 0.5, -hgt * 0.3); ctx.filter = 'none';
    for (let k = 0; k <= n; k++) { const u = k / n; ctx.strokeStyle = mix(o.col || '#6E675A', o.top || '#A79F8E', u); ctx.lineWidth = lw; pathR(-u * hgt); ctx.stroke(); if (k === Math.floor(n / 2)) { ctx.strokeStyle = 'rgba(30,22,16,0.4)'; ctx.lineWidth = 1.2; ctx.setLineDash([6, 5]); ctx.stroke(); ctx.setLineDash([]); } }
    ctx.strokeStyle = o.cap || '#CFC7B5'; ctx.lineWidth = lw * 0.55; pathR(-hgt - 1); ctx.stroke(); ctx.strokeStyle = o.cren || '#5E574B'; ctx.lineWidth = lw * 0.9; ctx.setLineDash([lw * 1.1, lw * 1.0]); pathR(-hgt - lw * 0.55); ctx.stroke(); ctx.setLineDash([]); ctx.restore(); };
  S4.ship = (ctx, x, y, ang, L, col, wake) => { ctx.save(); ctx.translate(x, y); ctx.rotate(ang); if (wake > 0) { ctx.strokeStyle = `rgba(255,255,255,${0.55 * wake})`; ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(-L * 0.45, -L * 0.12); ctx.lineTo(-L * 2.2, -L * 0.6); ctx.moveTo(-L * 0.45, L * 0.12); ctx.lineTo(-L * 2.2, L * 0.6); ctx.stroke(); } ctx.fillStyle = 'rgba(20,14,10,0.3)'; ctx.beginPath(); ctx.ellipse(3, 3, L * 0.5, L * 0.16, 0, 0, TAU); ctx.fill(); ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(L * 0.5, 0); ctx.quadraticCurveTo(L * 0.25, -L * 0.17, -L * 0.45, -L * 0.15); ctx.lineTo(-L * 0.45, L * 0.15); ctx.quadraticCurveTo(L * 0.25, L * 0.17, L * 0.5, 0); ctx.fill(); ctx.fillStyle = 'rgba(255,248,230,0.85)'; ctx.fillRect(-L * 0.2, -L * 0.07, L * 0.25, L * 0.14); ctx.restore(); };
  const AUT = { tBuild: tw('builds', 549.24), tDesign: tw('designed', 550.72), tHome: tw('home.', 552.2) };
  SC.push({ id: 's04_autarky', start: 547.55, end: 552.85, transIn: { type: 'zoom', dur: 0.6, x: 913, y: 342, amount: 1.8, from: 0.75 },
    init() { this.pr = GEO.proj('spain', { center: [-3.4, 40.05], scale: 5400, translate: [980, 560] }); this.rings = S4.esRings(this.pr);
      this.base = MG.cache('s4:autBase', W, H, (x) => { const pr = this.pr; x.fillStyle = '#B8B4A6'; x.fillRect(0, 0, W, H); x.fillStyle = hatchPat(x, 6, 1, 'rgba(40,40,52,0.22)', 0); x.fillRect(0, 0, W, H);
        for (const n of NEIGH) { const f = GEO.country(n, '10'); if (f) GEO.draw(x, pr, f, { fill: '#CFC8B5', stroke: 'rgba(30,26,29,0.45)', width: 1.2 }); }
        const es = ES10(); GEO.draw(x, pr, es, { fill: '#DDD4C0' }); x.save(); GEO.clip(x, pr, es); x.fillStyle = hatchPat(x, 5, 1, 'rgba(50,38,26,0.2)', 35); x.fillRect(0, 0, W, H); x.globalAlpha = 0.35; x.globalCompositeOperation = 'multiply'; GEO.relief(x, pr, { alpha: 1 }); x.restore();
        GEO.draw(x, pr, GEO.provinceMesh, { stroke: 'rgba(50,40,30,0.25)', width: 0.8 }); GEO.draw(x, pr, es, { stroke: 'rgba(25,20,18,0.85)', width: 1.6 });
        GEO.canaryInset(x, [110, 830, 250, 150], { fill: '#DDD4C0', frame: 'rgba(30,25,20,0.55)', labelColor: 'rgba(30,25,20,0.8)' });
        MG.tex.over(x, 'blotch', { alpha: 0.25, color: '#3a3026', scale: 3, seed: 21 }); MG.tex.over(x, 'grain', { alpha: 0.1 }); });
      this.ships = [[[4.6, 41.0], [2.3, 41.32]], [[1.9, 39.0], [-0.22, 39.43]], [[-8.6, 35.7], [-6.38, 36.55]], [[-11.2, 44.3], [-8.5, 43.4]], [[-2.6, 44.9], [-2.95, 43.45]], [[-4.0, 35.6], [-4.42, 36.66]], [[-1.0, 37.0], [-0.9, 37.58]]].map((q) => [this.pr(q[0]), this.pr(q[1])]);
      this.truck = [this.pr([2.0, 43.6]), this.pr([2.86, 42.5])]; },
    draw(ctx, t) {
      const lt = t - 547.55; const z = 1.0 + lt * 0.03; const h = hh(t, 2, 15); ctx.fillStyle = '#B8B4A6'; ctx.fillRect(0, 0, W, H);
      ctx.save(); ctx.translate(W / 2 + h.dx, H / 2 + h.dy); ctx.rotate(h.rot - 0.01 + lt * 0.002); ctx.scale(z, z); ctx.translate(-960 - lt * 6, -540); ctx.drawImage(this.base, 0, 0);
      const kw = E.outCubic(clamp((t - AUT.tBuild + 0.2) / 1.1)); const hg = 30 * kw;
      // ships & a lorry turned back at the walls
      this.ships.forEach((q, i) => { const t0 = AUT.tDesign - 0.4 + i * 0.16; const tt = t - t0; if (tt < 0) return; const ang = Math.atan2(q[1][1] - q[0][1], q[1][0] - q[0][0]); let u, back = false; if (tt < 0.85) u = E.inOutSine(tt / 0.85); else { back = true; u = 1 - 0.55 * E.outCubic(clamp((tt - 0.85) / 1.3)); } const px = lerp(q[0][0], q[1][0], u * 0.9), py = lerp(q[0][1], q[1][1], u * 0.9); S4.ship(ctx, px, py, back ? ang + Math.PI : ang, 30, '#3E3A36', 1); if (tt > 0.85 && tt < 1.5) { const k = (tt - 0.85) / 0.65; ctx.strokeStyle = `rgba(255,255,255,${0.7 * (1 - k)})`; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(q[0][0] + (q[1][0] - q[0][0]) * 0.92, q[0][1] + (q[1][1] - q[0][1]) * 0.92, 6 + k * 22, 0, TAU); ctx.stroke(); } });
      { const tt = t - (AUT.tDesign + 0.3); if (tt > 0) { const u = tt < 0.8 ? E.inOutSine(tt / 0.8) : 1 - 0.5 * E.outCubic(clamp((tt - 0.8) / 1.2)); const px = lerp(this.truck[0][0], this.truck[1][0], u * 0.9), py = lerp(this.truck[0][1], this.truck[1][1], u * 0.9); ctx.save(); ctx.translate(px, py); ctx.rotate(Math.atan2(this.truck[1][1] - this.truck[0][1], this.truck[1][0] - this.truck[0][0])); ctx.fillStyle = 'rgba(20,14,10,0.3)'; ctx.fillRect(-12, -5, 28, 13); ctx.fillStyle = '#4A4038'; ctx.fillRect(-14, -7, 22, 14); ctx.fillStyle = '#6B5E50'; ctx.fillRect(8, -6, 8, 12); ctx.restore(); } }
      S4.walls(ctx, this.rings, hg, { lw: 8 });
      ctx.restore();
      // title on the map
      const ka = clamp((t - AUT.tBuild) / 0.7); if (ka > 0) { const spr = S4.sten('AUTARKY', 120, '#1A1716', { wear: 0.3 }); S4.word(ctx, spr, 130, 170, ka * 1.05); mono(ctx, '1939 – 1959 · A CLOSED ECONOMY', 140, 252, { size: 22, weight: 700, color: '#2A2522', alpha: clamp((t - AUT.tBuild - 0.5) / 0.5) }); }
    },
    post: { grade: 'archival', sat: 0.7, contrast: 1.1, vignette: 0.45, grain: 0.05 } });

  // ---------------------------------------------------------------- THE TABLE: ration book → yearbook → Europe map → pariah → UN
  const TB = { tRes: tw('result?', 553.43), tHunger: tw('Hunger', 553.96), tRation: tw('rationing', 554.67), tGDP: tw('GDP', 555.72), tLower: tw('lower', 556.43), tRest: tw('rest', 558.55), tMarshall: tw('Marshall', 559.55), tBoom: tw('boom.', 561.08), tPariah: tw('pariah', 563.05), tBarred: tw('barred', 563.82), tUN: tw('United', 565.08), t55: tw('1955.', 566.43) };
  const RECIP = ['Austria', 'Belgium', 'Denmark', 'France', 'Greece', 'Iceland', 'Ireland', 'Italy', 'Luxembourg', 'Netherlands', 'Norway', 'Portugal', 'Sweden', 'Turkey', 'United Kingdom'];
  const BLOC = ['Russia', 'Ukraine', 'Belarus', 'Moldova', 'Lithuania', 'Latvia', 'Estonia', 'Georgia', 'Armenia', 'Azerbaijan', 'Kazakhstan', 'Poland', 'Czechia', 'Slovakia', 'Hungary', 'Romania', 'Bulgaria', 'Albania'];
  const WGER = [[5.5, 55.6], [10.95, 54.05], [10.75, 53.65], [10.6, 53.37], [11.45, 53.05], [11.0, 52.85], [10.95, 52.25], [10.6, 51.8], [10.15, 51.4], [10.0, 50.9], [10.05, 50.55], [10.8, 50.35], [11.95, 50.33], [12.2, 50.25], [13.5, 48.9], [14, 46.5], [5, 46.5]];
  const TBL = { map: [0, 0, 3200, 2300], book: [200, 1440, 1000, 680], un: [3480, 480, 960, 1260] };
  S4.tablePr = () => { if (S4._tpr) return S4._tpr; const pr = GEO.proj('conic', { center: [12, 52], scale: 1 }); pr.fitExtent([[60, 90], [3140, 2240]], { type: 'MultiPoint', coordinates: [[-24, 36], [44, 36], [-24, 66], [44, 68], [10, 71.5], [8, 33.5]] }); return (S4._tpr = pr); };
  const wgClip = (ctx, pr) => { ctx.beginPath(); WGER.forEach((q, i) => { const p = pr(q); i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]); }); ctx.closePath(); ctx.clip(); };
  S4.tableMap = () => MG.cache('s4:tableMap', 3200, 2300, (x, w, h) => {
    const pr = S4.tablePr(); x.fillStyle = '#E6DECA'; x.fillRect(0, 0, w, h); x.fillStyle = '#C5CBC6'; x.fillRect(40, 40, w - 80, h - 80); x.fillStyle = hatchPat(x, 9, 1.2, 'rgba(40,60,80,0.12)', 0); x.fillRect(40, 40, w - 80, h - 80);
    x.save(); x.beginPath(); x.rect(40, 40, w - 80, h - 80); x.clip();
    GEO.draw(x, pr, GEO.world50, { fill: '#DCD3BE', stroke: 'rgba(40,32,28,0.45)', width: 2 });
    for (const n of BLOC) { const f = GEO.country(n, '50'); if (f) GEO.draw(x, pr, f, { fill: '#A39C8E' }); }
    const de = GEO.country('Germany', '50'); GEO.draw(x, pr, de, { fill: '#A39C8E' }); x.save(); wgClip(x, pr); GEO.draw(x, pr, de, { fill: '#DCD3BE' }); x.restore();
    x.save(); x.globalAlpha = 0.35; for (const n of BLOC) { const f = GEO.country(n, '50'); if (f) { x.save(); GEO.clip(x, pr, f); x.fillStyle = hatchPat(x, 10, 2, 'rgba(40,32,28,0.5)', 45); x.fillRect(0, 0, w, h); x.restore(); } } x.restore();
    GEO.draw(x, pr, GEO.borders50, { stroke: 'rgba(40,32,28,0.5)', width: 2 }); GEO.graticule(x, pr, { step: [10, 10], color: 'rgba(40,50,70,0.12)', width: 2 });
    x.restore(); x.strokeStyle = 'rgba(40,32,28,0.7)'; x.lineWidth = 6; x.strokeRect(40, 40, w - 80, h - 80); x.lineWidth = 2; x.strokeRect(56, 56, w - 112, h - 112);
    x.fillStyle = '#E6DECA'; x.fillRect(2380, 70, 760, 150); x.strokeStyle = 'rgba(40,32,28,0.7)'; x.lineWidth = 3; x.strokeRect(2380, 70, 760, 150); txt(x, 'EUROPE', 2410, 170, { font: F.old, size: 96, color: '#2A2420' }); txt(x, '1948', 3110, 170, { font: F.cond, size: 96, weight: 800, color: '#2A2420', align: 'right' });
    MG.tex.over(x, 'blotch', { alpha: 0.22, color: '#4a3a26', scale: 3, seed: 31 }); MG.tex.over(x, 'fibers', { alpha: 0.5 });
    x.strokeStyle = 'rgba(60,45,30,0.18)'; x.lineWidth = 4; [w / 3, w * 2 / 3].forEach((xx) => { x.beginPath(); x.moveTo(xx, 0); x.lineTo(xx, h); x.stroke(); }); x.beginPath(); x.moveTo(0, h / 2); x.lineTo(w, h / 2); x.stroke();
  });
  S4.ration = () => S4.sheet('ration', 600, 420, { seed: 51, paper: '#D9CDAE', age: 0.35, folds: [['v', 0.5]] }, (x, w, h) => {
    x.fillStyle = '#D9CDAE'; x.fillRect(0, 0, w, h); x.fillStyle = 'rgba(60,40,20,0.18)'; x.fillRect(w / 2 - 3, 0, 6, h);
    txt(x, 'CARTILLA DE', 30, 70, { font: F.roman, size: 30, weight: 700, color: '#3A2A1E' }); txt(x, 'RACIONAMIENTO', 30, 108, { font: F.roman, size: 32, weight: 900, color: '#3A2A1E' }); x.fillStyle = '#7E1F1B'; x.fillRect(30, 124, 240, 4);
    txt(x, '1939', 30, 196, { font: F.cond, size: 72, weight: 900, color: '#7E1F1B' }); mono(x, 'FAMILIA · 4 PERSONAS', 32, 236, { size: 15, color: '#3A2A1E' });
    x.strokeStyle = 'rgba(58,42,30,0.6)'; x.lineWidth = 2; x.strokeRect(160, 260, 110, 130); x.fillStyle = 'rgba(58,42,30,0.15)'; x.fillRect(166, 266, 98, 118); for (let i = 0; i < 5; i++) { x.fillStyle = 'rgba(58,42,30,0.35)'; x.fillRect(30, 280 + i * 22, 110 - i * 8, 5); }
    x.save(); x.translate(214, 330); x.rotate(-0.3); x.strokeStyle = 'rgba(120,30,30,0.55)'; x.lineWidth = 4; x.beginPath(); x.arc(0, 0, 44, 0, TAU); x.stroke(); x.restore();
    x.setLineDash([3, 4]); x.strokeStyle = 'rgba(58,42,30,0.55)'; x.lineWidth = 1.5; for (let c = 0; c <= 4; c++) { x.beginPath(); x.moveTo(w / 2 + 20 + c * 65, 40); x.lineTo(w / 2 + 20 + c * 65, h - 30); x.stroke(); } for (let r = 0; r <= 4; r++) { x.beginPath(); x.moveTo(w / 2 + 20, 40 + r * 87); x.lineTo(w / 2 + 280, 40 + r * 87); x.stroke(); } x.setLineDash([]);
  });
  const COUP = ['PAN', 'ACEITE', 'AZÚCAR', 'ARROZ', 'PAN', 'LEGUMB.', 'CAFÉ', 'JABÓN', 'PAN', 'ACEITE', 'AZÚCAR', 'ARROZ', 'PAN', 'CARNE', 'LECHE', 'PAN'];
  S4.coupon = (i) => MG.cache('s4:coupon' + i, 64, 86, (x, w, h) => { x.fillStyle = '#E8DDC0'; x.fillRect(1, 1, w - 2, h - 2); x.strokeStyle = 'rgba(58,42,30,0.6)'; x.lineWidth = 1.5; x.strokeRect(4, 4, w - 8, h - 8); txt(x, COUP[i], w / 2, 36, { font: F.mono, size: COUP[i].length > 5 ? 10 : 12, weight: 700, color: '#3A2A1E', align: 'center' }); txt(x, String((i % 4) + 1), w / 2, 70, { font: F.cond, size: 30, weight: 800, color: '#7E1F1B', align: 'center' }); MG.tex.over(x, 'grain', { alpha: 0.1 }); });
  S4.gdpData = [[1935, 100], [1936, 86], [1937, 82], [1938, 79], [1939, 80], [1940, 82], [1941, 79], [1942, 81], [1943, 83], [1944, 85], [1945, 78], [1946, 81], [1947, 82], [1948, 82], [1949, 80], [1950, 84]];
  S4.yearbook = () => S4.sheet('yearbook', 1000, 680, { seed: 61, paper: '#ECE5D3', age: 0.25, folds: [['v', 0.5]] }, (x, w, h) => {
    x.fillStyle = '#ECE5D3'; x.fillRect(0, 0, w, h); const g = x.createLinearGradient(w / 2 - 50, 0, w / 2 + 50, 0); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(0.5, 'rgba(60,40,20,0.28)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(w / 2 - 50, 0, 100, h);
    mono(x, 'ANUARIO ESTADÍSTICO · 1951', 40, 52, { size: 15, color: '#3A332C' }); x.fillStyle = '#3A332C'; x.fillRect(40, 62, 420, 2); for (let r = 0; r < 26; r++) { x.fillStyle = 'rgba(40,34,28,0.35)'; x.fillRect(40, 100 + r * 20, r % 7 === 6 ? 200 : 400 - (r * 37) % 60, 5); }
    mono(x, 'TABLA 4', w / 2 + 40, 52, { size: 15, color: '#3A332C' }); txt(x, 'GDP PER PERSON', w / 2 + 40, 104, { font: F.grotesk, size: 34, weight: 800, color: '#221C18' }); mono(x, 'INDEX · 1935 = 100', w / 2 + 40, 132, { size: 13, color: '#5A5048' });
  });
  S4.gdpChart = (ctx, x0, y0, w, h, k, lw) => { // chart in the yearbook's right page
    const xs = (yr) => x0 + ((yr - 1935) / 15) * w, ys = (v) => y0 + h - ((v - 70) / 35) * h;
    ctx.save(); ctx.strokeStyle = 'rgba(40,34,28,0.7)'; ctx.lineWidth = 1.5 * lw; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x0, y0 + h); ctx.lineTo(x0 + w, y0 + h); ctx.stroke();
    [1935, 1940, 1945, 1950].forEach((yr) => { ctx.beginPath(); ctx.moveTo(xs(yr), y0 + h); ctx.lineTo(xs(yr), y0 + h + 8); ctx.stroke(); mono(ctx, String(yr), xs(yr), y0 + h + 30, { size: 15, color: '#3A332C', align: 'center' }); });
    ctx.setLineDash([8, 6]); ctx.strokeStyle = '#221C18'; ctx.lineWidth = 2 * lw; ctx.beginPath(); ctx.moveTo(x0, ys(100)); ctx.lineTo(x0 + w, ys(100)); ctx.stroke(); ctx.setLineDash([]); mono(ctx, 'PRE-WAR LEVEL', x0 + w, ys(100) - 12, { size: 14, weight: 700, color: '#221C18', align: 'right' });
    const pts = S4.gdpData.map((d) => [xs(d[0]), ys(d[1])]); const sub = MG.path.trim(pts, 0, k); if (sub.length > 1) { ctx.save(); ctx.beginPath(); ctx.moveTo(sub[0][0], ys(100)); sub.forEach((p) => ctx.lineTo(p[0], p[1])); ctx.lineTo(sub[sub.length - 1][0], ys(100)); ctx.closePath(); ctx.fillStyle = MG.tex.pattern(ctx, MG.tex.lines(7, 2, 'rgba(184,50,42,0.7)', 45)); ctx.fill(); ctx.restore(); ctx.strokeStyle = C.red; ctx.lineWidth = 4 * lw; ctx.lineJoin = 'round'; ctx.beginPath(); sub.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); const e = sub[sub.length - 1]; ctx.fillStyle = C.red; ctx.beginPath(); ctx.arc(e[0], e[1], 6 * lw, 0, TAU); ctx.fill(); }
    ctx.restore(); };
  S4.plate = (ctx, x, y, r) => { ctx.save(); MG.fx.contact(ctx, x + r * 0.12, y + r * 0.14, r * 1.05, r * 0.98, 0.45); const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.1, x, y, r); g.addColorStop(0, '#F4F0E6'); g.addColorStop(0.8, '#D9D2C3'); g.addColorStop(1, '#A89F8E'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.strokeStyle = 'rgba(80,60,40,0.35)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y, r * 0.68, 0, TAU); ctx.stroke(); ctx.strokeStyle = 'rgba(60,90,120,0.35)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, y, r * 0.9, 0, TAU); ctx.stroke(); ctx.fillStyle = '#B8874E'; ctx.beginPath(); ctx.ellipse(x + r * 0.1, y + r * 0.05, r * 0.2, r * 0.09, 0.4, 0, TAU); ctx.fill(); ctx.fillStyle = '#E3C48E'; ctx.beginPath(); ctx.ellipse(x + r * 0.06, y + r * 0.02, r * 0.13, r * 0.05, 0.4, 0, TAU); ctx.fill(); ctx.fillStyle = '#9C7244'; for (let i = 0; i < 7; i++) { ctx.beginPath(); ctx.arc(x + MG.range(8, i, -r * 0.4, r * 0.4), y + MG.range(9, i, -r * 0.35, r * 0.35), 2 + MG.rand(3, i) * 2, 0, TAU); ctx.fill(); } ctx.fillStyle = '#A8A49A'; ctx.save(); ctx.translate(x + r * 1.25, y); ctx.rotate(1.45); ctx.fillRect(-4, -r * 0.7, 8, r * 1.0); ctx.beginPath(); ctx.ellipse(0, -r * 0.8, r * 0.13, r * 0.2, 0, 0, TAU); ctx.fill(); ctx.restore(); ctx.restore(); };
  // UN seats
  S4.unSeats = () => { if (S4._un) return S4._un; const [ux, uy, uw, uh] = TBL.un; const cx = ux + uw / 2, cy = uy + 800; const rows = [[200, 14], [260, 18], [320, 20], [380, 24]]; const seats = []; rows.forEach(([r, n]) => { for (let i = 0; i < n; i++) { const a = Math.PI * (0.97 - 0.94 * (i / (n - 1))); seats.push({ x: cx + Math.cos(a) * r, y: cy - Math.sin(a) * r, a }); } }); seats.sort((p, q) => q.a - p.a); const nw = new Set(); for (let k = 0; k < 16; k++) nw.add(Math.min(75, Math.round((k + 0.5) * 76 / 16))); seats.forEach((st, i) => { st.isNew = nw.has(i); }); const news = seats.filter((st) => st.isNew); news.forEach((st, k) => { st.k = k; }); S4._un = { seats, news, spain: news[12], cx, cy }; return S4._un; };
  S4.unDoc = () => S4.sheet('undoc', TBL.un[2], TBL.un[3], { seed: 71, paper: '#EDE7D8', age: 0.2 }, (x, w, h) => { x.fillStyle = '#EDE7D8'; x.fillRect(0, 0, w, h); mono(x, 'UNITED NATIONS', 50, 80, { size: 34, weight: 800, color: '#1F2A36', tracking: 0.2 }); mono(x, 'GENERAL ASSEMBLY · SEATING PLAN', 50, 118, { size: 18, color: '#3B4652' }); x.fillStyle = '#1F2A36'; x.fillRect(50, 134, w - 100, 3); x.strokeStyle = 'rgba(31,42,54,0.35)'; x.lineWidth = 2; [170, 230, 290, 350, 410].forEach((r) => { x.beginPath(); x.arc(w / 2, 800, r, Math.PI, 0); x.stroke(); }); x.fillStyle = '#C9C2B2'; x.fillRect(w / 2 - 110, 800, 220, 50); mono(x, 'PODIUM', w / 2, 834, { size: 16, color: '#3B4652', align: 'center' }); for (let r = 0; r < 8; r++) { x.fillStyle = 'rgba(31,42,54,0.25)'; x.fillRect(50, 940 + r * 26, 520 - (r * 53) % 140, 6); } });

  SC.push({ id: 's04_table', start: 552.85, end: 568.10, transIn: { type: 'push', dur: 0.6, dir: 'up' },
    init() { S4.tableMap(); S4.ration(); S4.yearbook(); S4.unDoc(); for (let i = 0; i < 16; i++) S4.coupon(i); const pr = S4.tablePr(); this.pr = pr; this.es = pr([-3.9, 40.0]);
      const R = (pts) => MG.path.spline(pts.map((q) => pr(q)), 6); const MED = [[-30, 37.5], [-14, 36.2], [-6.0, 35.95], [-1, 36.4], [5, 37.6], [10.5, 38.0]];
      this.routes = [R([[-32, 50.6], [-12, 50.2], [-5, 49.9], [-1.3, 50.6]]), R([[-32, 48.2], [-10, 48.4], [-3, 49.7], [0.1, 49.5]]), R([[-32, 51.8], [-12, 51.1], [-3, 50.4], [2, 51.2], [4.2, 51.95]]), R([[-32, 54.2], [-14, 56.2], [0, 56.2], [6.5, 54.4], [8.6, 53.6]]), R([[-32, 57.5], [-12, 59.2], [3, 59.4], [10.6, 59.6]]), R([[-32, 61.5], [-24, 63.6], [-22.2, 64.1]]), R([[-32, 52.6], [-14, 51.6], [-8.3, 51.85]]), R([[-32, 39.4], [-14, 38.9], [-9.3, 38.65]]), R([...MED, [13, 40.0], [14.2, 40.75]]), R([...MED, [15.5, 36.6], [21, 36.5], [23.6, 37.9]]), R([...MED, [15.5, 36.4], [22, 36.2], [25.8, 38.8], [26.4, 40.15], [29, 41.0]]), R([...MED, [15.6, 36.6], [18.6, 39.8], [16, 42.6], [13.7, 45.6]])];
      this.recip = RECIP.map((n) => GEO.country(n, '50')).filter(Boolean); this.de = GEO.country('Germany', '50'); this.esF = GEO.country('Spain', '50'); },
    cam(t) { const [ex, ey] = this.es || [0, 0]; return camKeys(t, [[552.85, { x: 960, y: 1700, z: 1.75 }], [TB.tHunger - 0.2, { x: 880, y: 1720, z: 1.5 }], [555.45, { x: 870, y: 1735, z: 1.42 }], [556.35, { x: 948, y: 1790, z: 1.55 }], [TB.tRest - 0.15, { x: 952, y: 1795, z: 1.6 }], [559.45, { x: 1600, y: 1150, z: 0.47 }, 'cam'], [561.75, { x: 1610, y: 1140, z: 0.5 }], [563.0, { x: ex + 40, y: ey - 20, z: 1.15 }, 'cam'], [564.6, { x: ex + 70, y: ey - 10, z: 1.22 }], [565.1, { x: 3960, y: 1110, z: 0.92 }, 'inOutQuart'], [568.1, { x: 3960, y: 1120, z: 1.0 }]]); },
    draw(ctx, t) {
      const c = this.cam(t); const h = hh(t, 2.5, 16); c.dx = h.dx; c.dy = h.dy; c.r = h.rot; const lw = 1 / c.z; const pr = this.pr;
      const wb = Math.sin(clamp((t - 564.6) / 0.5) * Math.PI); if (wb > 0.05) ctx.filter = `blur(${(wb * 10).toFixed(1)}px)`;
      ctx.save(); camT(ctx, c);
      // wooden table
      ctx.fillStyle = MG.tex.pattern(ctx, MG.cache('s4:woodTile', 1024, 1024, (x, w, hh2) => { x.fillStyle = '#3A2B22'; x.fillRect(0, 0, w, hh2); const r = MG.rng(9); for (let i = 0; i < 120; i++) { const y = r() * hh2; x.strokeStyle = `rgba(${r() < 0.5 ? '255,220,180' : '20,10,5'},${0.04 + r() * 0.05})`; x.lineWidth = 1 + r() * 4; x.beginPath(); x.moveTo(0, y); for (let xx = 0; xx <= w; xx += 32) x.lineTo(xx, y + Math.sin((xx / w) * TAU * 2 + i) * 6); x.stroke(); } for (let i = 0; i < 4; i++) { x.strokeStyle = 'rgba(10,5,2,0.5)'; x.lineWidth = 3; x.beginPath(); x.moveTo(0, i * 256 + 2); x.lineTo(w, i * 256 + 2); x.stroke(); } MG.tex.over(x, 'grain', { alpha: 0.15 }); }));
      ctx.fillRect(-3000, -2000, 10000, 7000);
      // map sheet
      ctx.save(); ctx.shadowColor = 'rgba(10,5,2,0.5)'; ctx.shadowBlur = 40; ctx.shadowOffsetX = 18; ctx.shadowOffsetY = 26; ctx.drawImage(S4.tableMap(), 0, 0); ctx.restore();
      // recipients light up and lift (boom); Spain stays flat and grey
      const kr = E.outCubic(clamp((t - TB.tMarshall + 0.2) / 0.8)), kb = E.outCubic(clamp((t - TB.tBoom + 0.55) / 0.9));
      if (kr > 0) { ctx.save(); ctx.beginPath(); ctx.rect(40, 40, 3120, 2220); ctx.clip(); const fc = { type: 'FeatureCollection', features: this.recip }; const dep = 12 * kb; const drawR = (fill, dy) => { ctx.save(); ctx.translate(0, dy); GEO.draw(ctx, pr, fc, { fill }); ctx.save(); wgClip(ctx, pr); GEO.draw(ctx, pr, this.de, { fill }); ctx.restore(); ctx.restore(); };
        if (dep > 0.5) { drawR('rgba(60,35,10,0.35)', 6); for (let k = 3; k >= 1; k--) drawR(mix('#B07830', '#8A5A20', k / 3), -dep * (1 - k / 4)); }
        ctx.globalAlpha = kr; drawR(mix('#E9C27A', '#F2A33A', kb), -dep); ctx.globalAlpha = 1; ctx.save(); ctx.translate(0, -dep); GEO.draw(ctx, pr, GEO.borders50, { stroke: 'rgba(80,50,20,0.45)', width: 1.5 }); ctx.restore(); ctx.restore(); }
      // Spain: grey, hatched; pariah: darker, cordoned
      { const kp = E.outCubic(clamp((t - TB.tPariah + 0.3) / 0.7)); ctx.save(); GEO.draw(ctx, pr, this.esF, { fill: mix('#B9B1A1', '#6C645A', kp), stroke: 'rgba(30,24,20,0.8)', width: 2.5 }); ctx.save(); GEO.clip(ctx, pr, this.esF); ctx.fillStyle = hatchPat(ctx, 8, 2, 'rgba(30,24,20,0.35)', -45); ctx.fillRect(0, 0, 3200, 2300); ctx.restore();
        if (kp > 0) { const [ex, ey] = this.es; ctx.strokeStyle = C.red; ctx.lineWidth = 5; ctx.setLineDash([18, 12]); ctx.lineDashOffset = -t * 30; ctx.beginPath(); ctx.ellipse(ex - 10, ey + 10, 310, 260, -0.1, -Math.PI / 2, -Math.PI / 2 + TAU * kp); ctx.stroke(); ctx.setLineDash([]); const spr = S4.sten('PARIAH', 120, C.red, { wear: 0.35 }); ctx.save(); ctx.globalAlpha = clamp((t - TB.tPariah) / 0.3); ctx.translate(ex - 360, ey - 330); ctx.rotate(-0.08); ctx.drawImage(spr, -spr.width / 2, -spr.height / 2); ctx.restore(); }
        ctx.restore(); }
      // Marshall Plan ships (bypassing Spain, through Gibraltar to Italy, Greece, Turkey, Austria)
      if (t > TB.tRest - 0.2) { this.routes.forEach((pts, i) => { const t0 = TB.tRest - 0.1 + i * 0.07; const k = E.inOutCubic(clamp((t - t0) / 1.1)); if (k <= 0) return; MG.fx.line(ctx, pts, { progress: k, color: 'rgba(31,78,140,0.75)', width: 3.5, dash: [10, 9] }); if (k >= 1) for (let s2 = 0; s2 < 2; s2++) { const u = MG.fract((t - t0) / 3.2 + s2 * 0.5 + i * 0.13); const p = MG.path.along(pts, u); S4.ship(ctx, p[0], p[1], p[2], 30, '#1F4E8C', 0.8); } }); }
      if (kr > 0) { ctx.save(); ctx.globalAlpha = kr; ctx.fillStyle = '#1F2A36'; ctx.fillRect(120, 110, 820, 150); txt(ctx, 'MARSHALL PLAN', 150, 200, { font: F.stencil2, size: 82, weight: 900, color: '#F2E8D5' }); mono(ctx, '1948 – 1952 · US AID TO 16 COUNTRIES', 152, 240, { size: 22, color: '#C9D4DE' }); ctx.restore(); }
      // yearbook + chart
      const [bx, by] = TBL.book; const yb = S4.yearbook(); ctx.save(); ctx.translate(bx, by); ctx.rotate(-0.025); ctx.shadowColor = 'rgba(10,5,2,0.5)'; ctx.shadowBlur = 24; ctx.shadowOffsetX = 12; ctx.shadowOffsetY = 18; ctx.drawImage(yb, -14, -14); ctx.shadowColor = 'transparent';
      S4.gdpChart(ctx, 548, 200, 400, 380, clamp((t - TB.tGDP + 0.1) / 1.7), Math.max(0.6, lw)); ctx.restore();
      // plate (hunger) & ration book, coupons torn off; then both pushed away
      const away = E.inCubic(clamp((t - 555.45) / 0.75));
      { const kin = E.outCubic(clamp((t - (TB.tHunger - 0.55)) / 0.6)); const px = lerp(-200, 560, kin) - away * 900, py = 1820 + away * 600; S4.plate(ctx, px, py, 150); }
      { const rb = S4.ration(); const rx = 960 + away * 1300, ry = 1730 + away * 500; ctx.save(); ctx.translate(rx, ry); ctx.rotate(-0.04 + away * 0.3); ctx.shadowColor = 'rgba(10,5,2,0.55)'; ctx.shadowBlur = 20; ctx.shadowOffsetX = 10; ctx.shadowOffsetY = 16; ctx.drawImage(rb, -rb.width / 2, -rb.height / 2); ctx.shadowColor = 'transparent';
        for (let i = 0; i < 16; i++) { const cx2 = 20 + (i % 4) * 65 + 32.5, cy2 = -170 + Math.floor(i / 4) * 87 + 43; const tt = t - (TB.tRation - 0.05) - [0, 3, 6, 9, 12, 1, 4, 7, 10, 13, 2, 5, 8, 11, 14, 15][i] * 0.07; const cp = S4.coupon(i); if (tt <= 0) { ctx.drawImage(cp, cx2 - 32, cy2 - 43); continue; } if (tt > 1.4) continue; const e = E.inCubic(clamp(tt / 1.2)); ctx.save(); ctx.translate(cx2 + e * 900, cy2 - Math.sin(e * Math.PI) * 80 - e * 300); ctx.rotate(e * (MG.rand(4, i) - 0.3) * 2.5); const sc2 = 1 + Math.sin(clamp(tt / 0.25) * Math.PI / 2) * 0.12; ctx.scale(sc2, sc2); ctx.shadowColor = 'rgba(10,5,2,0.4)'; ctx.shadowBlur = 12; ctx.shadowOffsetY = 10; ctx.drawImage(cp, -32, -43); ctx.restore(); }
        ctx.restore(); }
      // UN seating plan
      { const ud = S4.unDoc(); const [ux, uy] = TBL.un; ctx.save(); ctx.shadowColor = 'rgba(10,5,2,0.5)'; ctx.shadowBlur = 30; ctx.shadowOffsetX = 14; ctx.shadowOffsetY = 20; ctx.drawImage(ud, ux - 14, uy - 14); ctx.restore();
        const U = S4.unSeats(); const k55 = clamp((t - (TB.t55 - 0.05)) / 0.9);
        for (const st of U.seats) { if (st === U.spain) continue; if (!st.isNew) { ctx.fillStyle = '#1F2A36'; ctx.beginPath(); ctx.arc(st.x, st.y, 15, 0, TAU); ctx.fill(); } else { const kk = clamp((k55 * 16 - st.k) / 2.5); ctx.strokeStyle = 'rgba(31,42,54,0.5)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(st.x, st.y, 14, 0, TAU); ctx.stroke(); if (kk > 0) { ctx.fillStyle = '#4F6B88'; ctx.beginPath(); ctx.arc(st.x, st.y, 15 * E.outBack(kk), 0, TAU); ctx.fill(); } } }
        const sp = U.spain; const ks = E.inOutCubic(clamp((t - (TB.t55 - 0.15)) / 0.7)); const ox = ux + 820, oy = uy + 1060; const sx = lerp(ox, sp.x, ks), sy = lerp(oy, sp.y, ks) - Math.sin(ks * Math.PI) * 160;
        ctx.strokeStyle = 'rgba(31,42,54,0.5)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(sp.x, sp.y, 14, 0, TAU); ctx.stroke(); ctx.fillStyle = C.red; ctx.beginPath(); ctx.arc(sx, sy, 17, 0, TAU); ctx.fill(); ctx.strokeStyle = '#fff'; ctx.lineWidth = 3; ctx.stroke(); mono(ctx, 'SPAIN', sx, sy + 46, { size: 22, weight: 800, color: C.red, align: 'center' });
        if (ks < 0.05) { ctx.strokeStyle = 'rgba(184,50,42,0.6)'; ctx.lineWidth = 3; ctx.setLineDash([8, 8]); ctx.beginPath(); ctx.moveTo(ox - 60, oy - 60); ctx.lineTo(ox + 60, oy - 60); ctx.stroke(); ctx.setLineDash([]); }
        const yr = Math.round(lerp(1946, 1955, clamp((t - TB.tUN + 0.4) / (TB.t55 - TB.tUN + 0.4)))); txt(ctx, String(yr), ux + 900, uy + 120, { font: F.cond, size: 120, weight: 900, color: yr === 1955 ? C.red : '#1F2A36', align: 'right' }); }
      ctx.restore(); ctx.filter = 'none';
      // spoken key words, stencilled at the edge of frame
      const words = [['HUNGER', TB.tHunger], ['RATIONING', TB.tRation]]; words.forEach(([wd, t0], i) => { const k = clamp((t - t0 + 0.05) / 0.45) * (1 - clamp((t - 555.5) / 0.4)); if (k <= 0) return; const spr = S4.sten(wd, 96, C.bone, { wear: 0.3 }); S4.word(ctx, spr, 120, 150 + i * 110, k * 1.05); });
      // a single lamp, warm, from the upper-left
      ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.drawImage(MG.cache('s4:lamp', W, H, (x, w, h2) => { const g = x.createRadialGradient(w * 0.35, h2 * 0.3, 100, w * 0.5, h2 * 0.5, w * 0.8); g.addColorStop(0, '#FFFFFF'); g.addColorStop(1, '#7A6A5A'); x.fillStyle = g; x.fillRect(0, 0, w, h2); }), 0, 0); ctx.restore();
    },
    post: (t) => ({ grade: 'archival', sat: lerp(0.7, 0.85, clamp((t - 558.5) / 1)), contrast: 1.1, vignette: 0.42, grain: 0.05 }) });

  // ---------------------------------------------------------------- 1959: back on the stamp sheet → dive into the first colourful stamp
  const S59 = { t59: tw('1959,', 568.99), tChanges: tw('everything', 570.51) };
  S4.stampLive = (ctx, i, t, bloom) => { const [sx, sy] = S4.stampPos(i); const X = sx + 150, Y = sy + 60; ctx.save(); ctx.translate(X + 150, Y + 180); ctx.rotate(MG.range(5, i, -0.012, 0.012)); ctx.translate(-150, -180); ctx.fillStyle = '#F4EFE3'; ctx.fillRect(0, 0, 300, 360); ctx.save(); ctx.beginPath(); ctx.rect(22, 22, 256, 316); ctx.clip(); S4.tourArt(ctx, TOUR[i % 4], t, bloom); ctx.restore(); txt(ctx, 'ESPAÑA', 150, 62, { font: F.retro, size: 30, color: C.white, align: 'center', stroke: C.navy, strokeW: 5, alpha: 1 - bloom }); txt(ctx, String(1939 + i), 264, 324, { font: F.mono, size: 18, weight: 700, color: C.navy, align: 'right', alpha: 1 - bloom }); ctx.restore(); };
  SC.push({ id: 's04_stamp59', start: 568.10, end: 571.95,
    draw(ctx, t) {
      const P18 = S4.stampPos(18), P19 = S4.stampPos(19), P20 = S4.stampPos(20); const c18 = [P18[0] - 150 + 150, P18[1] - 60 + 180], c19 = [P19[0] - 150 + 150, P19[1] - 60 + 180], c20 = [P20[0] + 150 + 150, P20[1] + 60 + 150];
      const c = camKeys(t, [[568.1, { x: c18[0] - 40, y: c18[1], z: 1.45 }], [568.65, { x: c19[0], y: c19[1], z: 1.5 }, 'inOutSine'], [S59.t59 + 0.1, { x: c20[0], y: c20[1] + 20, z: 1.6 }, 'inOutCubic'], [S59.tChanges - 0.1, { x: c20[0], y: c20[1], z: 2.6 }, 'inOutSine'], [S59.tChanges + 0.55, { x: c20[0], y: c20[1], z: 9.5 }, 'inCubic'], [571.95, { x: c20[0], y: c20[1] - 6, z: 10.5 }]]);
      const h = hh(t, 2, 18); c.dx = h.dx * (1 - clamp((t - S59.tChanges) / 0.4)); c.dy = h.dy * (1 - clamp((t - S59.tChanges) / 0.4));
      S4.desk(ctx, '#2E2724'); ctx.save(); camT(ctx, c);
      S4.sheetDraw(ctx, t, { split: 1, flip: () => 1, dim: 1 });
      const bloom = E.outCubic(clamp((t - S59.tChanges) / 0.9)); if (c.z > 1.9) S4.stampLive(ctx, 20, t, bloom);
      ctx.restore();
      // the grey world drains away as the sun arrives
      if (bloom > 0) { ctx.save(); ctx.globalCompositeOperation = 'screen'; ctx.globalAlpha = 0.25 * Math.sin(bloom * Math.PI); ctx.fillStyle = '#FFF2C8'; ctx.fillRect(0, 0, W, H); ctx.restore(); }
    },
    post: (t) => { const k = E.inOutCubic(clamp((t - (S59.tChanges - 0.2)) / 0.9)); return { grade: k > 0.5 ? 'retro' : 'archival', sat: lerp(0.75, 1.08, k), contrast: lerp(1.1, 1.0, k), vignette: lerp(0.45, 0.3, k), grain: 0.045, temp: lerp(0, 0.04, k) }; } });
  // ---- temporary filler for the rest of the segment (replaced chapter by chapter)
  SC.push({ id: 's04_todo', start: SC[SC.length - 1].end, end: 681.58, draw(ctx, t) { MG.kit.paper(ctx, C.bone); mono(ctx, 'S04 · ' + t.toFixed(1), 960, 540, { align: 'center', size: 40 }); } });

  // ================================================================= AUDIO
  MG.segment('S04', {
    start: 507.32, end: 681.58, scenes: SC,
    audio(A) {
      A.music('dread', 507.32, 535.5, { key: 'C2', intensity: 0.45, fadeIn: 1.5, fadeOut: 2.5, gain: 0.8 });
      A.music('march', 511.6, 526.6, { key: 'C3', bpm: 92, intensity: [[511.6, 0.25], [516, 0.45], [524.5, 0.6], [526.4, 0.2]], fadeIn: 2, fadeOut: 0.8, gain: 0.8 });
      A.sfx.paper(507.9, { dur: 0.5, gain: 0.8 }); A.sfx.thud(508.25, { gain: 0.35 });
      A.sfx.paper(510.2, { dur: 0.9, gain: 1 });
      for (const d of WALL.posters) A.sfx.paper(d.t0 + 0.05, { dur: 0.3, gain: 0.55 });
      A.sfx.whoosh(516.1, { dur: 0.6, gain: 0.5, dir: 1 });
      A.sfx.paper(521.0, { dur: 0.5, gain: 0.7 });
      A.sfx.impact(NEWS.tErupt, { size: 0.35, gain: 0.5 });
      [0, 0.36, 0.72].forEach((d) => A.sfx.stamp(NEWS.tThree + 0.12 + d, { gain: 0.45 }));
    },
  });
})();
