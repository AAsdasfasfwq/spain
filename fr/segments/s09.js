/* =====================================================================
   S09 · 1345.48 → 1509.97 · "A country that keeps threatening to come apart" + party politics
   Author: S09 designer.  State: politics (paper + muted party colours), memory (ETA), crisis.

   MOTION THESIS — one paper world, three recurring physical devices:
     (1) THE MAP AS PUZZLE: Spain's 17 IGN regions are cut paper slabs on the page of the 1978
         constitution; they crack, lift apart, reassemble, stack into layers, get stitched, erased,
         pulled apart and strapped together.
     (2) THE HEMICYCLE: the Congress (350 seats) as an evolving 3D object (Three.js, instanced chairs):
         pendulum era → fragmentation → four elections → coalition of 179 → collapse.
     (3) LIGHT & SHADOW: one low warm sun from the upper-left; ETA = candlelight in the dark; the sun disk
         returns as a pendulum bob, a coin cut into fifths and finally the ball that rolls up Spain's
         growth line while Madrid argues below.
   No title/date slides (client): every date lives inside an object (page, ballot box, chalk on a cell
   wall, newspaper, calendar, the hemicycle floor). Transitions are spatial and content-motivated.

   BEAT MAP (s = VO seconds)                                            approach  · transition in
   A  1345.5 crack   S08's last frame shatters along jagged cracks → the map page   2.5D · custom crack
      1346.0 cracks run along the regional borders, "PROBLEM 04" printed on the page
      1348.4 "come apart": 19 pieces lift apart (2.5D slabs, shadows, tint emerges)
      1349.9 "seventeen": pieces fly home one by one, counter 1→17, Canary inset, +2 cities
      1352.9 "parliament": 17 mini hemicycles pop on the regional capitals
      1354.8 map tilts isometric; LANGUAGE / POLICE / TAX layers rise on the words
      1358.4 camera tracks the north coast: Catalonia "Hola", Basque Country "Kaixo", Galicia "Ola"
      1362.4 pull back: the map is a page of the 1978 constitution (book on a desk)
      1364.9 Article 2 highlighted (autonomy) · "except" red underline (indissoluble unity)
      1367.0 Catalonia tries to slide off the page — stitches hold, it snaps back
   B  1368.3 ETA (memory): Basque outline in the dark, 1968–2010 ruler, "ETA"      2D    · zoom-through
      1373.5 850 votive candles light up, counter 850                               2.5D  · rack focus
      1377.1 the letters ETA dissolve into ash, "2018" on the floor
   C  1379.7 dawn pan east to Catalonia (senyera on the region)                     2.5D  · camera pan
      1381.7 ballot box on the map, 1·10·2017 · "illegal" tape from Madrid
      1387.0 police shields pass the lens → school wall: voters, police only as shadows (characters)
      1390.1 Parlament hemicycle 135: 70 yes / 10 no / 2 blank / 53 empty, REPÚBLICA  3D   · camera tilt
      1393.1 the chamber shrinks into Barcelona: route to Brussels, clock-sun          2D    · zoom-out
      1396.3 prison bars (2019) → lift (2021) → wall falls (2024) → Congress seats     2.5D  · whip south
      1403.2 bar TV pull-back: the barman shrugs "That's Spanish politics for you"     char  · screen pull-back
   D  1405.2 the coin on the counter → sun-coin cut in fifths, 1/5 = Catalonia      2D    · match cut
      1409.4 GDP-per-person choropleth, money flows south, Catalonia closes the tap   map
      1412.1 seismograph under the map: a spike every ~10 years
   E  1416.1 Catalan seats → pull back to the whole Congress (3D)                   3D    · morph
      1419.2 sun-pendulum swings, majorities flip PSOE/PP 1982-1996-2004-2011
      1423.7 2008 Congress: PSOE 169 / PP 154 labelled
      1427.0 the chamber flattens into a diagram, Britain & the US slide in       2D    · match
      1430.9 a newspaper drops onto the desk: 2008, unemployment line, 6.2 M          2.5D  · object wipe
      1435.7 push into the photo: Puerta del Sol fills with people (15-M 2011)
      1437.9 coloured dots rise from the square into the hemicycle; two-party breaks  3D
      1442.6 four elections as printed seat strips on the desk, 176 line never reached 2.5D
   F  1449.8 Pedro Sánchez at the tribune (caricature)                                char
      1453.0 coalition 179 lights up in the hemicycle, Catalan & Basque labelled       3D
      1459.1 the negotiating table: amnesty, tax concession, regional powers          2.5D
      1465.4 budget 2023 gathering dust while the desk calendar flips to 2026
   G  1470.0 pan to the other end of the spectrum: green seats spread (Vox)           3D
      1473.8 map unrolls: region borders erased, border fortified, one "united Spain" 2D map · object wipe
      1480.5 tug of war: ropes pull the pieces apart / a strap forces them together
   H  1486.3 October 2026: the coalition seats topple                              3D
      1490.7 wall calendar torn to November, 29 circled
      1494.1 governments ribbon 1977→2026 never green; ghost chair at the cabinet table
      1500.9 crane up: Spain's growth line vs Germany, the sun rolls up the line,
             tiny Congress arguing below — "doesn't much care who's in charge in Madrid" (alive +1.2 s)
   MUSIC  tension → dread (ETA) → tension (2017) → sneaky (politics for you) → warm (pendulum) →
          tension (2008/fragmentation) → sneaky (coalition prices) → march-lite (Vox) → tension
          (collapse) → sneaky outro (fade done ≈1511.5).
   ===================================================================== */
(function () {
  const MG = window.MG; const P = MG.PAL; const { clamp, lerp } = MG;
  const prog = MG.prog, lin = MG.lin, keys = MG.keys;
  const S9 = {};
  const TW = (w, a) => MG.T(w, a, 4);

  // ---------------- type helpers ----------------
  S9.kick = (ctx, s, x, y, t, t0, o = {}) => MG.text.reveal(ctx, s.toUpperCase(), x, y, t, t0, { font: MG.F.mono, weight: 700, size: o.size || 22, tracking: o.tracking ?? 0.22, color: o.color || P.ink2, align: o.align || 'left', style: o.style || 'fade', by: 'line', dur: 0.4, alpha: o.alpha, out: o.out, stroke: o.stroke, strokeW: o.strokeW });
  S9.word = (ctx, s, x, y, t, t0, o = {}) => MG.text.reveal(ctx, s, x, y, t, t0, { font: o.font || MG.F.display, weight: o.weight || 800, size: o.size || 90, italic: o.italic, color: o.color || P.ink, align: o.align || 'left', style: o.style || 'rise', by: o.by || 'word', stagger: o.stagger ?? 0.06, dur: o.dur ?? 0.55, tracking: o.tracking, alpha: o.alpha, out: o.out, shadow: o.shadow, stroke: o.stroke, strokeW: o.strokeW });
  S9.shadowCol = 'rgba(48,26,44,1)';

  // ---------------- world map system (projection P0 = "page" world, camera = 2D similarity) ----------------
  S9.C0 = [-3.3, 39.6]; S9.SC0 = 5200;
  S9.P0 = () => S9._p0 || (S9._p0 = MG.geo.proj('spain', { center: S9.C0, scale: S9.SC0 }));
  S9.camProj = (c) => MG.geo.proj('spain', { center: S9.C0, scale: S9.SC0 * c.z, translate: [960 + (960 - c.x) * c.z, 540 + (540 - c.y) * c.z] });
  S9.applyCam = (ctx, c) => { ctx.translate(960 + (c.dx || 0), 540 + (c.dy || 0)); if (c.rot) ctx.rotate(c.rot); ctx.scale(c.z, c.z * (c.k || 1)); if (c.th) ctx.rotate(c.th); ctx.translate(-c.x, -c.y); };
  S9.toScreen = (c, x, y) => { let X = x - c.x, Y = y - c.y; if (c.th) { const cs = Math.cos(c.th), sn = Math.sin(c.th); [X, Y] = [X * cs - Y * sn, X * sn + Y * cs]; } X *= c.z; Y *= c.z * (c.k || 1); if (c.rot) { const cs = Math.cos(c.rot), sn = Math.sin(c.rot); [X, Y] = [X * cs - Y * sn, X * sn + Y * cs]; } return [960 + (c.dx || 0) + X, 540 + (c.dy || 0) + Y]; };
  S9.CAN_BOX = [150, 770, 330, 190];
  S9.PAGE = [-60, -120, 2040, 1260];       // right page (the printed map) in world units
  S9.LPAGE = [-2100, -120, 2040, 1260];    // left page (Article 2)
  S9.TINT = { Galicia: P.olivaLight, Asturias: P.terracota, Cantabria: P.ochre, 'Basque Country': P.sol, Navarre: '#D99A7E', 'La Rioja': P.olivaLight, Aragon: P.ochre, Catalonia: P.sol, 'Castile and León': '#E7C47E', Madrid: P.terracota, 'Castile-La Mancha': '#9DB5A4', Extremadura: P.ochre, Andalusia: '#D99A7E', Murcia: P.terracota, Valencia: '#E7C47E', 'Balearic Islands': '#D99A7E', 'Canary Islands': P.terracota, Ceuta: P.solDeep, Melilla: P.solDeep };
  S9.CAPITAL = { Andalusia: [-5.9845, 37.3891], Aragon: [-0.8891, 41.6488], Asturias: [-5.8448, 43.3614], 'Balearic Islands': [2.6502, 39.5696], 'Canary Islands': [-16.2518, 28.4636], Cantabria: [-3.8044, 43.4623], 'Castile and León': [-4.7245, 41.6523], 'Castile-La Mancha': [-4.0273, 39.8628], Catalonia: [2.1734, 41.3851], Valencia: [-0.3763, 39.4699], Extremadura: [-6.3436, 38.9161], Galicia: [-8.5448, 42.8782], Madrid: [-3.7038, 40.4168], Murcia: [-0.9862, 37.6057], Navarre: [-1.6432, 42.8125], 'Basque Country': [-2.6727, 42.8467], 'La Rioja': [-2.4446, 42.4627] };
  S9.ORDER = ['Galicia', 'Asturias', 'Cantabria', 'Basque Country', 'Navarre', 'La Rioja', 'Aragon', 'Catalonia', 'Castile and León', 'Madrid', 'Castile-La Mancha', 'Valencia', 'Extremadura', 'Andalusia', 'Murcia', 'Balearic Islands', 'Canary Islands', 'Ceuta', 'Melilla'];
  S9.regions = () => {
    if (S9._reg) return S9._reg; MG.geo.init(); const P0 = S9.P0(); const out = [];
    for (const f of MG.geo.regions.features) {
      const en = f.properties.en; let pr = P0;
      if (en === 'Canary Islands') { const [x, y, w, h] = S9.CAN_BOX; pr = MG.geo.proj('mercator', { center: [-15.7, 28.4], scale: 1 }); pr.fitExtent([[x + 16, y + 14], [x + w - 16, y + h - 34]], f); }
      const path = MG.geo.path2d(pr, f); const bb = MG.geo.bbox(pr, f); const c = pr(window.d3.geoCentroid(f));
      out.push({ en, f, pr, path, bb, cx: c[0], cy: c[1], tint: S9.TINT[en] || P.sand, cap: S9.CAPITAL[en] ? pr(S9.CAPITAL[en]) : c, i: S9.ORDER.indexOf(en) });
    }
    out.sort((a, b) => a.cy - b.cy); S9._reg = out; S9.REG = Object.fromEntries(out.map((r) => [r.en, r]));
    return out;
  };
  /** cached 2.5D paper slab sprite of one region (world units → res px) */
  S9.slab = (r, color, res = 2, depth = 7) => {
    const pad = 8; const [bx, by, bw, bh] = r.bb; const key = `s9slab:${r.en}:${color}:${res}:${depth}`;
    const c = MG.cache(key, (bw + pad * 2) * res, (bh + pad * 2 + depth) * res, (x) => {
      x.scale(res, res); x.translate(pad - bx, pad - by);
      const side = MG.col.shade(color, 0.42);
      for (let i = depth; i >= 0.5; i -= 0.5) { x.save(); x.translate(0, i); x.fillStyle = MG.col.mix(side, MG.col.shade(side, 0.35), i / depth); x.fill(r.path); x.restore(); }
      MG.fx.volume(x, r.path, r.bb, { color, shade: 0.14, shadeColor: MG.col.shade(color, 0.3), hi: 0.2, hiColor: '#FFF1D2', soft: 0.4, size: Math.min(200, Math.max(bw, bh)), tex: 'fibers', texAlpha: 0.55 });
      x.save(); x.clip(r.path); MG.tex.over(x, 'blotch', { alpha: 0.1, color: MG.col.shade(color, 0.5), scale: 3 }); x.strokeStyle = 'rgba(255,247,228,0.6)'; x.lineWidth = 1.6; x.translate(-0.9, -0.9); x.stroke(r.path); x.restore();
      x.strokeStyle = 'rgba(40,26,36,0.55)'; x.lineWidth = 0.8; x.lineJoin = 'round'; x.stroke(r.path);
    });
    return { c, ox: bx - pad, oy: by - pad, w: c.width / res, h: c.height / res };
  };
  S9.slabShadow = (r) => { const pad = 18; const [bx, by, bw, bh] = r.bb; const c = MG.cache(`s9slabsh:${r.en}`, bw + pad * 2, bh + pad * 2, (x) => { x.translate(pad - bx, pad - by); x.filter = 'blur(3px)'; x.fillStyle = S9.shadowCol; x.fill(r.path); }); return { c, ox: bx - pad, oy: by - pad }; };
  /** draw a region piece in world coords. o: {dx,dy,lift,rot,sc,alpha,color,res} */
  S9.piece = (ctx, r, o = {}) => {
    const s = S9.slab(r, o.color || r.tint, o.res || 2, o.depth ?? 7); const lift = o.lift || 0;
    ctx.save(); ctx.translate(r.cx + (o.dx || 0), r.cy + (o.dy || 0) - lift); if (o.rot) ctx.rotate(o.rot); const sc = (o.sc || 1) * (1 + lift * 0.0016); if (sc !== 1) ctx.scale(sc, sc); ctx.translate(-r.cx, -r.cy);
    if (o.alpha !== undefined) ctx.globalAlpha *= o.alpha; ctx.drawImage(s.c, s.ox, s.oy, s.w, s.h); ctx.restore();
  };
  S9.pieceShadow = (ctx, r, o = {}) => {
    const lift = o.lift || 0; if ((o.alpha ?? 1) <= 0.01) return; const sh = S9.slabShadow(r); const bl = Math.min(14, lift * 0.18);
    const img = bl > 0.8 ? MG.blurred(sh.c, bl) : sh.c; const pad = img._pad || 0;
    ctx.save(); ctx.globalAlpha *= (o.alpha ?? 1) * clamp(0.34 - lift * 0.0015, 0.12, 0.34);
    ctx.translate(r.cx + (o.dx || 0) + 3 + lift * 0.55, r.cy + (o.dy || 0) + 5 + lift * 0.85); if (o.rot) ctx.rotate(o.rot); ctx.translate(-r.cx, -r.cy);
    ctx.drawImage(img, sh.ox - pad, sh.oy - pad); ctx.restore();
  };
  /** the printed map page: tinted sea, neighbours, graticule, scale bar (cached, world coords) */
  S9.page = () => {
    const [px, py, pw, ph] = S9.PAGE; const res = 1.25;
    return MG.cache('s9page', pw * res, ph * res, (x) => {
      x.scale(res, res); x.translate(-px, -py); const P0 = S9.P0();
      x.fillStyle = '#BCD0DE'; x.fillRect(px, py, pw, ph);
      const g = x.createRadialGradient(900, 420, 100, 960, 540, 1400); g.addColorStop(0, 'rgba(255,255,255,0.22)'); g.addColorStop(1, 'rgba(30,60,90,0.18)'); x.fillStyle = g; x.fillRect(px, py, pw, ph);
      x.strokeStyle = 'rgba(255,255,255,0.16)'; x.lineWidth = 1.1; for (let yy = py + 6; yy < py + ph; yy += 13) { x.beginPath(); for (let xx = px; xx <= px + pw; xx += 14) x.lineTo(xx, yy + Math.sin(xx * 0.012 + yy * 0.7) * 2); x.stroke(); }
      MG.geo.graticule(x, P0, { step: [2, 2], color: 'rgba(40,60,90,0.10)', width: 1 });
      for (const n of ['France', 'Portugal', 'Morocco', 'Algeria', 'Andorra', 'Italy', 'Gibraltar', 'Tunisia']) { const f = MG.geo.country(n, '10'); if (f) MG.geo.draw(x, P0, f, { fill: n === 'Portugal' ? '#D9D2C4' : '#DFD8CA', stroke: 'rgba(58,43,58,0.32)', width: 1 }); }
      // Gibraltar is British: keep it in neighbour colour (drawn above)
      x.save(); x.globalCompositeOperation = 'multiply'; x.fillStyle = x.createPattern(MG.tex.fibers(512, 11, '#5a4a3a'), 'repeat'); x.globalAlpha = 0.9; x.fillRect(px, py, pw, ph); x.restore();
      // Canary inset frame
      const [cx, cy, cw, ch] = S9.CAN_BOX; x.save(); x.fillStyle = 'rgba(255,255,255,0.12)'; x.fillRect(cx, cy, cw, ch); x.strokeStyle = 'rgba(30,25,20,0.5)'; x.lineWidth = 1.5; x.setLineDash([7, 5]); x.strokeRect(cx, cy, cw, ch); x.restore();
      MG.text.draw(x, 'CANARY ISLANDS', cx + 14, cy + ch - 14, { font: MG.F.mono, size: 15, weight: 700, color: 'rgba(30,25,20,0.65)', tracking: 0.14 });
      // scale bar 200 km
      const kmpx = S9.SC0 / 6371; const L = 200 * kmpx; const sx = 1560, sy = 1000; x.fillStyle = '#2a2226'; x.fillRect(sx, sy, L / 2, 6); x.strokeStyle = '#2a2226'; x.lineWidth = 1.5; x.strokeRect(sx, sy, L, 6);
      MG.text.draw(x, '0', sx - 4, sy - 10, { font: MG.F.mono, size: 15, weight: 700, color: '#2a2226' }); MG.text.draw(x, '200 KM', sx + L - 30, sy - 10, { font: MG.F.mono, size: 15, weight: 700, color: '#2a2226' });
      // spine darkening (left edge of the right page)
      const sg = x.createLinearGradient(px, 0, px + 160, 0); sg.addColorStop(0, 'rgba(40,25,20,0.32)'); sg.addColorStop(1, 'rgba(40,25,20,0)'); x.fillStyle = sg; x.fillRect(px, py, 160, ph);
    });
  };
  S9.drawPage = (ctx) => { const [px, py, pw, ph] = S9.PAGE; ctx.drawImage(S9.page(), px, py, pw, ph); };

  // ---------------- Chapter A: the map world (1345.48 → 1368.34) ----------------
  const A_ = {};
  A_.come = 1348.44; A_.spain = TW('Spain', 1349.88); A_.each = TW('Each', 1352.92); A_.some = TW('Some', 1354.76);
  A_.lang = TW('language', 1355.56); A_.pol = TW('police', 1356.28); A_.tax = TW('tax', 1357.24);
  A_.cat = TW('Catalonia', 1358.42); A_.bas = TW('Basque', 1359.78); A_.gal = TW('Galicia', 1361.22);
  A_.y1978 = TW('1978', 1362.54); A_.almost = TW('almost', 1364.9); A_.except = TW('except', 1366.18); A_.leave = TW('leave', 1367.3);
  A_.land = (i) => 1349.98 + i * 0.128;   // landing time of piece i (ORDER index)
  /** exploded offset of a region */
  A_.ex = (r) => { if (r.en === 'Canary Islands') return { dx: -40, dy: 46, rot: -0.06, lift: 30 }; const cx = 965, cy = 560; let vx = r.cx - cx, vy = r.cy - cy; const d = Math.hypot(vx, vy) || 1; vx /= d; vy /= d; const k = 34 + d * 0.2 + MG.rand(91, r.i) * 16; return { dx: vx * k, dy: vy * k * 0.9, rot: (MG.rand(92, r.i) - 0.5) * 0.2, lift: 26 + MG.rand(93, r.i) * 18 }; };
  A_.cam = (t) => {
    const R = S9.REG, c = R.Catalonia, b = R['Basque Country'], g = R.Galicia;
    const k = keys(t, [
      [1345.48, [962, 538, 1.09]], [1348.3, [960, 545, 1.02], 'inOutSine'], [1349.4, [962, 546, 0.985], 'cam'], [1350.0, [962, 546, 0.985]],
      [1352.5, [966, 545, 1.0], 'inOut'], [1354.7, [980, 548, 1.03], 'inOutSine'], [1358.05, [980, 548, 1.03]],
      [1358.8, [c.cx - 40, c.cy - 20, 2.25], 'cam'], [1359.6, [c.cx - 70, c.cy - 22, 2.3], 'inOutSine'],
      [1360.3, [b.cx + 30, b.cy - 28, 2.35], 'cam'], [1361.0, [b.cx, b.cy - 28, 2.38], 'inOutSine'],
      [1361.7, [g.cx + 70, g.cy - 30, 2.4], 'cam'], [1362.4, [g.cx + 45, g.cy - 30, 2.45], 'inOutSine'],
      [1363.75, [-60, 560, 0.43], 'cam'], [1364.5, [-1000, 600, 0.74], 'cam'], [1366.4, [-985, 600, 0.77], 'inOutSine'],
      [1367.05, [c.cx - 170, c.cy + 20, 1.38], 'cam'], [1368.34, [c.cx - 200, c.cy + 18, 1.45], 'inOutSine'], [1369.6, [c.cx - 230, c.cy + 16, 1.5], 'inOutSine'],
    ]);
    return { x: k[0], y: k[1], z: k[2] };
  };
  A_.iso = (t) => keys(t, [[A_.some, 0], [A_.some + 0.75, 1, 'inOutCubic'], [1358.02, 1], [1358.62, 0, 'inOutCubic']]);
  A_.layerH = (t, i) => { const t0 = [A_.lang, A_.pol, A_.tax][i] - 0.12; return prog(t, t0, t0 + 0.55, 'out') * (1 - prog(t, 1357.95, 1358.35, 'inOutCubic')); };
  /** flat layer sheets for the iso stack (world rect) */
  A_.SHEET = [110, 50, 1460, 930];
  A_.sheet = (kind) => {
    const [sx, sy, sw, sh] = A_.SHEET; const res = 0.8;
    return MG.cache('s9sheet:' + kind, sw * res, sh * res, (x) => {
      x.scale(res, res); x.translate(-sx, -sy); const regs = S9.regions();
      const hi = { lang: [['Catalonia', 'Basque Country', 'Galicia'], P.azulejo], pol: [['Catalonia', 'Basque Country'], P.rojo], tax: [['Basque Country', 'Navarre'], P.gold] }[kind];
      if (kind === 'dark') { for (const r of regs) { if (r.en === 'Canary Islands') continue; x.fillStyle = 'rgba(60,40,50,1)'; x.fill(r.path); } return; }
      for (const r of regs) {
        if (r.en === 'Canary Islands') continue;
        let col = kind === 'base' ? r.tint : '#F1E9D8'; let on = false; if (hi && hi[0].includes(r.en)) { col = hi[1]; on = true; }
        x.save(); x.globalAlpha = kind === 'base' || on ? 1 : 0.9; x.fillStyle = col; x.fill(r.path); x.restore();
        x.save(); x.clip(r.path); MG.tex.over(x, 'fibers', { alpha: 0.6 }); if (on) MG.tex.over(x, 'lines', { alpha: 0.12, spacing: 7, color: '#ffffff', angle: 35 }); x.restore();
        x.strokeStyle = on ? 'rgba(255,248,235,0.85)' : 'rgba(58,43,58,0.4)'; x.lineWidth = on ? 1.6 : 1; x.stroke(r.path);
      }
    });
  };
  A_.drawSheet = (ctx, kind, alpha = 1) => { const [sx, sy, sw, sh] = A_.SHEET; ctx.save(); ctx.globalAlpha *= alpha; ctx.drawImage(A_.sheet(kind), sx, sy, sw, sh); ctx.restore(); };
  A_.miniParl = () => MG.cache('s9miniparl', 120, 84, (x) => {
    x.translate(60, 62); x.fillStyle = 'rgba(40,22,36,0.35)'; x.beginPath(); x.ellipse(3, 8, 50, 14, 0, 0, MG.TAU); x.fill();
    x.fillStyle = '#F6EFE2'; x.beginPath(); x.ellipse(0, 2, 48, 13, 0, 0, MG.TAU); x.fill(); x.strokeStyle = 'rgba(40,26,36,0.6)'; x.lineWidth = 1.5; x.stroke();
    const cols = [P.psoe, P.pp, P.ochre, P.vox, P.azulejo, P.rojoDeep]; let k = 0;
    for (let row = 0; row < 3; row++) { const R = 17 + row * 9, n = 7 + row * 3; for (let i = 0; i < n; i++) { const a = Math.PI + (i + 0.5) / n * Math.PI; const xx = Math.cos(a) * R, yy = Math.sin(a) * R * 0.62 - 4; x.fillStyle = cols[Math.floor(MG.hash(k++ * 3.7) * cols.length)]; x.beginPath(); x.arc(xx, yy, 3.4, 0, MG.TAU); x.fill(); x.fillStyle = 'rgba(255,255,255,0.45)'; x.beginPath(); x.arc(xx - 1, yy - 1.2, 1.2, 0, MG.TAU); x.fill(); } }
    x.fillStyle = '#2a2226'; x.fillRect(-5, 0, 10, 5);
  });
  /** the Catalonia–Aragon/Valencia border (stitch line) in world coords */
  A_.stitchLine = () => {
    if (A_._st) return A_._st; const s = window.MG_DATA.spain; const tj = window.topojson; const P0 = S9.P0();
    const m = tj.mesh(s, s.objects.autonomous_regions, (a, b) => { const n = [a.properties.name, b.properties.name].join('|'); return a !== b && /Catalu/.test(n) && /(Arag|Valencia)/.test(n); });
    const lines = (m.type === 'MultiLineString' ? m.coordinates : [m.coordinates]).map((l) => l.map((p) => P0(p)));
    lines.sort((a, b) => b.length - a.length); let pts = lines[0]; if (lines[1]) { const a = lines[0], b = lines[1]; const d = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]); if (d(a[a.length - 1], b[0]) < 6) pts = a.concat(b); else if (d(b[b.length - 1], a[0]) < 6) pts = b.concat(a); }
    // resample every 15 px
    const out = []; let acc = 0; for (let i = 1; i < pts.length; i++) { const sx = pts[i][0] - pts[i - 1][0], sy = pts[i][1] - pts[i - 1][1]; const L = Math.hypot(sx, sy); let u = acc; while (u < L) { const px = pts[i - 1][0] + sx * u / L, py = pts[i - 1][1] + sy * u / L; let nx = -sy / L, ny = sx / L; if (nx > 0) { nx = -nx; ny = -ny; } out.push([px, py, nx, ny]); u += 15; } acc = u - L; }
    A_._st = out; return out;
  };
  A_.leftPage = () => {
    const [lx, ly, lw, lh] = S9.LPAGE; const res = 1;
    return MG.cache('s9lpage', lw * res, lh * res, (x) => {
      x.scale(res, res); x.translate(-lx, -ly);
      x.fillStyle = '#F5EEDF'; x.fillRect(lx, ly, lw, lh);
      x.save(); x.globalCompositeOperation = 'multiply'; x.fillStyle = x.createPattern(MG.tex.fibers(512, 13, '#5a4a3a'), 'repeat'); x.fillRect(lx, ly, lw, lh); x.globalAlpha = 0.07; x.fillStyle = x.createPattern(MG.tex.blotch(512, 3, 5, '#7a5a3a'), 'repeat'); x.fillRect(lx, ly, lw, lh); x.restore();
      const cx = lx + lw / 2; const ink = '#2A2024';
      MG.text.draw(x, 'CONSTITUCIÓN ESPAÑOLA', cx, ly + 170, { font: MG.F.display, size: 62, weight: 600, color: ink, align: 'center', tracking: 0.16 });
      x.fillStyle = P.rojoDeep; x.fillRect(cx - 300, ly + 205, 600, 4);
      MG.text.draw(x, '1978', cx, ly + 520, { font: MG.F.cond, size: 300, weight: 900, color: P.rojoDeep, align: 'center', tracking: 0.02 });
      MG.text.draw(x, 'TÍTULO PRELIMINAR', cx, ly + 610, { font: MG.F.mono, size: 26, weight: 700, color: 'rgba(42,32,36,0.7)', align: 'center', tracking: 0.3 });
      MG.text.draw(x, 'Artículo 2', lx + 190, ly + 735, { font: MG.F.display, size: 66, weight: 700, italic: true, color: ink });
      A_.ART.forEach((l, i) => MG.text.draw(x, l, lx + 190, ly + 830 + i * 64, { font: MG.F.display, size: 46, weight: 400, color: ink }));
      const sg = x.createLinearGradient(lx + lw - 200, 0, lx + lw, 0); sg.addColorStop(0, 'rgba(40,25,20,0)'); sg.addColorStop(1, 'rgba(40,25,20,0.34)'); x.fillStyle = sg; x.fillRect(lx + lw - 200, ly, 200, lh);
      MG.text.draw(x, '— 2 —', cx, ly + lh - 50, { font: MG.F.display, size: 30, weight: 400, color: 'rgba(42,32,36,0.6)', align: 'center' });
    });
  };
  A_.ART = ['La Constitución se fundamenta en la indisoluble unidad', 'de la Nación española, patria común e indivisible de', 'todos los españoles, y reconoce y garantiza el derecho', 'a la autonomía de las nacionalidades y regiones que la', 'integran y la solidaridad entre todas ellas.'];
  /** span of a substring on a given Article line (world coords) */
  A_.span = (line, str) => { const [lx, ly] = S9.LPAGE; const s = A_.ART[line]; const i = s.indexOf(str); const ctx = MG.scratch(3).getContext('2d'); const o = { font: MG.F.display, size: 46, weight: 400 }; const x0 = lx + 190 + MG.text.width(ctx, s.slice(0, i), o); const w = MG.text.width(ctx, str, o); return [x0, ly + 830 + line * 64, w]; };
  A_.desk = () => MG.cache('s9desk', 2400, 1400, (x, w, h) => {
    x.fillStyle = '#5E4134'; x.fillRect(0, 0, w, h); const r = MG.rng(17);
    for (let i = 0; i < 260; i++) { const y = r() * h; x.strokeStyle = MG.col.a(r() > 0.5 ? '#3E2A22' : '#7A5644', 0.12 + r() * 0.2); x.lineWidth = 0.6 + r() * 2.2; x.beginPath(); for (let xx = 0; xx <= w; xx += 30) x.lineTo(xx, y + Math.sin(xx * 0.004 + i) * 8 + MG.noise2(xx * 0.003, i) * 14); x.stroke(); }
    const g = x.createRadialGradient(w * 0.38, h * 0.32, 50, w * 0.5, h * 0.5, w * 0.75); g.addColorStop(0, 'rgba(255,214,160,0.25)'); g.addColorStop(1, 'rgba(20,10,20,0.45)'); x.fillStyle = g; x.fillRect(0, 0, w, h);
    MG.tex.over(x, 'grain', { alpha: 0.08, blend: 'overlay' });
  });
  A_.DESK = [-4300, -2200, 8500, 4950];

  A_.draw = function (ctx, t) {
    const regs = S9.regions(); const R = S9.REG;
    const cam = A_.cam(t); const iso = A_.iso(t);
    // iso camera blend
    const c = { ...cam }; if (iso > 0) { const e = iso; c.x = lerp(cam.x, 900, e); c.y = lerp(cam.y, 520, e); c.z = lerp(cam.z, 0.64, e); c.k = lerp(1, 0.47, e); c.th = lerp(0, 0.1, e); c.dx = lerp(0, 150, e); c.dy = lerp(0, 300, e); }
    c.dx = (c.dx || 0) + MG.wiggle(t, 0.25, 2.2, 5); c.dy = (c.dy || 0) + MG.wiggle(t, 0.22, 1.8, 6);
    // background: desk (only when the camera is far)
    if (cam.z < 0.97 && iso < 0.01) { ctx.save(); S9.applyCam(ctx, c); const [dx, dy, dw, dh] = A_.DESK; ctx.drawImage(A_.desk(), dx, dy, dw, dh); A_.book(ctx, t); ctx.restore(); }
    else MG.fx.fill(ctx, '#BCD0DE');
    ctx.save(); S9.applyCam(ctx, c);
    if (iso < 0.02) S9.drawPage(ctx);
    else { // iso: the page becomes a pale table, sheets float
      ctx.restore(); MG.kit.paper(ctx, '#E9DFCB', { light: 0.3 }); ctx.save(); S9.applyCam(ctx, c);
    }
    // sombra diagonal across the page (film grammar), very soft
    ctx.restore();
    ctx.save(); S9.applyCam(ctx, c);

    if (iso < 0.02) A_.drawPieces(ctx, t, regs, R, cam);
    else A_.drawIso(ctx, t, c, iso);
    ctx.restore();
    if (iso > 0.02) A_.isoLabels(ctx, t, c, iso);
    A_.hud(ctx, t, cam, iso);
    A_.northText(ctx, t, c);
    // end: lights going down toward ETA
    const dim = prog(t, 1367.95, 1369.4, 'inOutSine'); if (dim > 0) { ctx.save(); ctx.globalAlpha = dim * 0.62; ctx.fillStyle = '#120D10'; ctx.fillRect(0, 0, 1920, 1080); ctx.restore(); }
  };
  /** the book around the two pages (cover, page stack, left page) — world coords */
  A_.book = (ctx, t) => {
    const [lx, ly, lw, lh] = S9.LPAGE; const x0 = lx - 30, y0 = ly - 34, w = lw * 2 + 60, h = lh + 68;
    ctx.save(); ctx.fillStyle = 'rgba(30,14,20,0.5)'; ctx.filter = 'blur(40px)'; ctx.fillRect(x0 + 70, y0 + 110, w, h); ctx.filter = 'none'; ctx.restore();
    ctx.fillStyle = P.rojoDeep; ctx.beginPath(); ctx.roundRect(x0, y0, w, h, 18); ctx.fill();
    ctx.save(); ctx.clip(); MG.tex.over(ctx, 'blotch', { alpha: 0.25, color: '#000', scale: 3 }); ctx.restore();
    ctx.strokeStyle = P.gold; ctx.lineWidth = 5; ctx.beginPath(); ctx.roundRect(x0 + 10, y0 + 10, w - 20, h - 20, 12); ctx.stroke();
    // page stacks (thickness on the outer edges)
    for (let i = 6; i >= 1; i--) { ctx.fillStyle = i % 2 ? '#E7DCC6' : '#D8CBB0'; ctx.fillRect(lx - i * 3, ly + i * 3.5, lw, lh); ctx.fillRect(S9.PAGE[0] + i * 3, ly + i * 3.5, S9.PAGE[2], lh); }
    ctx.drawImage(A_.leftPage(), lx, ly, lw, lh);
    // highlights on Article 2 + handwritten glosses
    const hA = prog(t, A_.almost, A_.almost + 0.7, 'inOutSine');
    if (hA > 0) { const s1 = A_.span(2, 'reconoce y garantiza el derecho'), s2 = A_.span(3, 'a la autonomía'); ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = MG.col.a(P.sol, 0.75); const L1 = s1[2], L2 = s2[2], tot = L1 + L2; const k = hA * tot; ctx.fillRect(s1[0] - 6, s1[1] - 40, Math.min(L1, k) + 12, 54); if (k > L1) ctx.fillRect(s2[0] - 6, s2[1] - 40, (k - L1) + 12, 54); ctx.restore();
      MG.text.reveal(ctx, 'self-rule — almost everything', S9.LPAGE[0] + 1080, S9.LPAGE[1] + 1205, t, A_.almost + 0.35, { font: MG.F.brush, size: 64, color: P.solDeep, style: 'wipe', by: 'line', dur: 0.8, rot: -0.02 }); }
    const hE = prog(t, A_.except - 0.05, A_.except + 0.45, 'inOutSine');
    if (hE > 0) { const s1 = A_.span(0, 'indisoluble unidad'); ctx.save(); const pts = []; for (let i = 0; i <= 20; i++) pts.push([s1[0] - 4 + (s1[2] + 8) * (i / 20) * hE, s1[1] + 14 + Math.sin(i * 0.9) * 2.5]); MG.fx.ink(ctx, pts, { width: 9, color: P.rojo, taper: [0.05, 0.3] }); ctx.restore();
      MG.text.reveal(ctx, 'but: indissoluble unity', s1[0] + 40, s1[1] - 82, t, A_.except + 0.2, { font: MG.F.brush, size: 58, color: P.rojo, style: 'wipe', by: 'line', dur: 0.6 }); }
  };
  A_.pieceState = (r, t) => {
    // returns {dx,dy,lift,rot,tintK}
    const e = A_.ex(r); const out = prog(t, A_.come + (r.i % 5) * 0.04, A_.come + 0.85 + (r.i % 5) * 0.04, 'out'); const L = A_.land(r.i < 17 ? r.i : r.i + 1.4);
    const back = prog(t, L - 0.55, L, 'inOutCubic'); const k = out * (1 - back); const hop = Math.sin(back * Math.PI) * 34 * (back < 1 ? 1 : 0);
    const drift = out * (1 - back) * MG.wiggle(t, 0.5, 4, r.i);
    return { dx: e.dx * k, dy: e.dy * k + drift, lift: e.lift * k + hop, rot: e.rot * k, tintK: prog(t, A_.come + 0.2, A_.come + 1.0, 'inOutSine'), landed: t >= L, L, settle: MG.jiggle(t, L, 0.014, 5, 8) };
  };
  A_.drawPieces = (ctx, t, regs, R, cam) => {
    const st = regs.map((r) => [r, A_.pieceState(r, t)]);
    // the north track: lifted focus region + veil
    const focus = t > 1358.3 && t < 1362.9 ? (t < A_.bas - 0.15 ? 'Catalonia' : t < A_.gal - 0.15 ? 'Basque Country' : 'Galicia') : null;
    const fUp = focus ? prog(t, { Catalonia: A_.cat - 0.05, 'Basque Country': A_.bas - 0.15, Galicia: A_.gal - 0.15 }[focus], { Catalonia: A_.cat + 0.5, 'Basque Country': A_.bas + 0.4, Galicia: A_.gal + 0.4 }[focus], 'out') * (1 - prog(t, 1362.45, 1363.0, 'inOutSine')) : 0;
    const res = cam.z > 1.5 ? 3 : 2;
    // leave attempt (Catalonia)
    const lv = A_.leaveState(t);
    for (const [r, s] of st) { const lift = s.lift + (r.en === focus ? fUp * 16 : 0) + (r.en === 'Catalonia' ? lv.lift : 0); S9.pieceShadow(ctx, r, { dx: s.dx + (r.en === 'Catalonia' ? lv.dx : 0), dy: s.dy, lift, rot: s.rot, alpha: 1 }); }
    // pieces: grounded first (north→south), then flying ones
    const order = st.slice().sort((a, b) => (a[1].lift > 1 ? 1 : 0) - (b[1].lift > 1 ? 1 : 0) || a[1].lift - b[1].lift || a[0].cy - b[0].cy);
    if (focus && fUp > 0) { /* veil drawn after grounded pieces */ }
    let veiled = false;
    for (const [r, s] of order) {
      const isF = r.en === focus;
      if (isF && !veiled && fUp > 0) { veiled = true; ctx.save(); ctx.globalAlpha = 0.22 * fUp; ctx.fillStyle = P.sombra; ctx.fillRect(-500, -500, 3000, 2200); ctx.restore(); }
      const o = { dx: s.dx + (r.en === 'Catalonia' ? lv.dx : 0), dy: s.dy, lift: s.lift + (isF ? fUp * 16 : 0) + (r.en === 'Catalonia' ? lv.lift : 0), rot: s.rot + (r.en === 'Catalonia' ? lv.rot : 0), sc: 1 + s.settle, res };
      if (s.tintK < 1) S9.piece(ctx, r, { ...o, color: P.sol, res: 2 });
      if (s.tintK > 0) S9.piece(ctx, r, { ...o, alpha: s.tintK });
    }
    // draw the focus piece again on top of the veil if it was not last
    // cracks along the regional borders (before the pieces separate)
    const cr = prog(t, 1345.9, A_.come, 'inOutSine') * (1 - lin(t, A_.come, A_.come + 0.12));
    if (cr > 0) { const path = MG.geo.path(ctx, S9.P0()); ctx.save(); ctx.lineCap = 'round'; ctx.setLineDash([cr * 420, 2000]); ctx.beginPath(); path(MG.geo.regionMesh); ctx.strokeStyle = 'rgba(255,240,215,0.7)'; ctx.lineWidth = 3.4; ctx.stroke(); ctx.translate(0.8, 1.2); ctx.strokeStyle = 'rgba(40,20,30,0.85)'; ctx.lineWidth = 1.7; ctx.stroke(); ctx.restore(); }
    // mini parliaments on the capitals
    const mp = A_.miniParl();
    for (const r of regs) { if (r.i >= 17) continue; const tp = A_.each + 0.05 + r.i * 0.045; const k = prog(t, tp, tp + 0.35, 'outBack') * (1 - prog(t, A_.some + 0.1, A_.some + 0.5, 'in')); if (k <= 0.01) continue; const [x, y] = r.cap; MG.sprite(ctx, mp, x, y - 14 * k, { scale: 0.66 * k, alpha: Math.min(1, k * 1.5), ay: 0.74 }); }
    // stitches holding Catalonia
    if (t > A_.except && t < 1369.6) A_.drawStitches(ctx, t, lv);
    // Ceuta / Melilla rings
    const cc = prog(t, 1352.25, 1352.7) * (1 - prog(t, A_.some, A_.some + 0.4));
    if (cc > 0) for (const n of ['Ceuta', 'Melilla']) { const r = R[n]; ctx.save(); ctx.globalAlpha = cc; ctx.strokeStyle = P.rojo; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(r.cx, r.cy, 9 + 14 * (1 - cc), 0, MG.TAU); ctx.stroke(); ctx.restore(); }
    // printed title block on the page (PROBLEM 04)
    A_.titleBlock(ctx, t);
  };
  A_.leaveState = (t) => {
    const t0 = A_.leave - 0.32; const pull = prog(t, t0, t0 + 0.55, 'out'); const tremble = pull * (1 - lin(t, t0 + 0.6, t0 + 0.75)) * Math.sin(t * 70) * 1.2;
    const snap = t > t0 + 0.75 ? MG.springTo(t, t0 + 0.75, 1, 0, 3.2, 0.5) : 1; const k = pull * snap;
    return { dx: 64 * k + tremble, lift: 12 * k, rot: 0.03 * k, k, pull };
  };
  A_.drawStitches = (ctx, t, lv) => {
    const pts = A_.stitchLine(); const appear = prog(t, A_.except, A_.except + 0.6);
    ctx.save(); ctx.lineCap = 'round';
    pts.forEach((p, i) => { if (i / pts.length > appear) return; const [x, y, nx, ny] = p; const ax = x + nx * 7, ay = y + ny * 7; const bx = x - nx * 7 + lv.dx, by = y - ny * 7 - lv.lift * 0.6; const tens = lv.k;
      ctx.strokeStyle = MG.col.a('#7E1F1B', 0.9); ctx.lineWidth = 2.6 - tens * 0.8; ctx.beginPath(); ctx.moveTo(ax, ay + (i % 2 ? -4 : 4)); ctx.lineTo(bx, by + (i % 2 ? 4 : -4)); ctx.stroke();
      ctx.fillStyle = '#3a1a17'; ctx.beginPath(); ctx.arc(ax, ay + (i % 2 ? -4 : 4), 1.6, 0, MG.TAU); ctx.fill(); });
    ctx.restore();
    // margin note
    const R = S9.REG.Catalonia; const nx = R.cx + 160, ny = R.cy - 150;
    MG.text.reveal(ctx, 'the right to leave?', nx, ny, t, A_.leave - 0.35, { font: MG.F.brush, size: 46, color: P.ink2, style: 'wipe', by: 'line', dur: 0.5 });
    const sk = prog(t, A_.leave + 0.45, A_.leave + 0.75, 'out'); if (sk > 0) { const w = MG.text.width(ctx, 'the right to leave?', { font: MG.F.brush, size: 46 }); const pts2 = []; for (let i = 0; i <= 12; i++) pts2.push([nx - 6 + (w + 12) * (i / 12) * sk, ny - 14 + (i / 12) * 4]); MG.fx.ink(ctx, pts2, { width: 7, color: P.rojo, taper: [0.05, 0.2] }); }
  };
  A_.titleBlock = (ctx, t) => {
    const a = 1 - prog(t, 1349.25, 1349.75, 'in'); if (a <= 0) return;
    ctx.save(); ctx.globalAlpha *= a; const x = 150, y = 150;
    S9.kick(ctx, 'Problem 04 / 05', x, y, t, TW('fourth', 1345.72) - 0.1, { color: P.sombra, size: 22 });
    ctx.fillStyle = P.sombra; ctx.fillRect(x, y + 16, 240 * prog(t, 1345.9, 1346.6), 3);
    const sp = prog(t, A_.come + 0.1, A_.come + 1.0, 'out');
    ctx.save(); ctx.translate(-sp * 26, -sp * 10); ctx.rotate(-sp * 0.05); S9.word(ctx, 'Coming', x, y + 110, t, TW('threatening', 1347.8), { size: 86, italic: true, weight: 700, color: P.ink }); ctx.restore();
    ctx.save(); ctx.translate(sp * 40, sp * 22); ctx.rotate(sp * 0.07); S9.word(ctx, 'apart', x + 300, y + 110, t, A_.come - 0.05, { size: 86, italic: true, weight: 700, color: P.rojo }); ctx.restore();
    ctx.restore();
  };
  A_.GAP = 205;
  A_.drawIso = (ctx, t, c, iso) => {
    // base sheet + rising layers; offsets are applied in SCREEN space (true vertical lift)
    const [sx, sy, sw, sh] = A_.SHEET; const dark = A_.sheet('dark'); const darkB = MG.blurred(dark, 8);
    const m = ctx.getTransform(); const at = (up, fn) => { ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, -up); ctx.transform(m.a, m.b, m.c, m.d, m.e, m.f); fn(); ctx.restore(); };
    const H = [A_.layerH(t, 0), A_.layerH(t, 1), A_.layerH(t, 2)]; const pad = darkB._pad || 0;
    const blurImg = (alpha) => { ctx.globalAlpha *= alpha; ctx.drawImage(darkB, sx - pad / 0.8, sy - pad / 0.8, (darkB.width) / 0.8, (darkB.height) / 0.8); };
    at(-16, () => blurImg(0.22 * iso)); at(-8, () => ctx.drawImage(dark, sx, sy, sw, sh)); at(0, () => A_.drawSheet(ctx, 'base'));
    const kinds = ['lang', 'pol', 'tax'];
    for (let i = 0; i < 3; i++) { const h = H[i]; if (h <= 0.005) continue; const up = (i + 1) * A_.GAP * h; const below = i * A_.GAP * h;
      at(below + 6, () => blurImg(0.16 * h));
      at(up - 7, () => { ctx.globalAlpha *= Math.min(1, h * 2.2); ctx.drawImage(dark, sx, sy, sw, sh); });
      at(up, () => A_.drawSheet(ctx, kinds[i], Math.min(1, h * 2.2) * 0.97)); }
  };
  A_.isoLabels = (ctx, t, c, iso) => {
    const H = [A_.layerH(t, 0), A_.layerH(t, 1), A_.layerH(t, 2)]; const fade = 1 - prog(t, 1357.9, 1358.15, 'in');
    const g = S9.REG.Galicia; const anchor = S9.toScreen(c, g.bb[0] + 12, g.cy);
    const L = [['LANGUAGE', 'CATALAN · BASQUE · GALICIAN', P.azulejo, A_.lang], ['POLICE', "MOSSOS D'ESQUADRA · ERTZAINTZA", P.rojo, A_.pol], ['TAX SYSTEM', 'BASQUE COUNTRY · NAVARRE', P.gold, A_.tax]];
    for (let i = 0; i < 3; i++) { const h = H[i]; if (h <= 0.02) continue; const y = anchor[1] - (i + 1) * A_.GAP * h; const x = 130; ctx.save(); ctx.globalAlpha = Math.min(1, h * 1.6) * iso * fade;
      const x1 = x + 440; ctx.strokeStyle = MG.col.a(L[i][2], 0.85); ctx.lineWidth = 2; ctx.setLineDash([2, 7]); ctx.beginPath(); ctx.moveTo(x1, y - 14); ctx.lineTo(anchor[0] - 8, y - 14); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = L[i][2]; ctx.beginPath(); ctx.arc(anchor[0] - 8, y - 14, 6, 0, MG.TAU); ctx.fill();
      S9.word(ctx, L[i][0], x, y, t, L[i][3] - 0.05, { font: MG.F.grotesk, size: 50, weight: 800, color: L[i][2], tracking: 0.03, by: 'line', style: 'rise' });
      S9.kick(ctx, L[i][1], x + 2, y + 36, t, L[i][3] + 0.15, { size: 19, color: P.ink2, tracking: 0.12 });
      ctx.restore(); }
  };
  A_.hud = (ctx, t, cam, iso) => {
    // counter 1→17 + labels (screen space)
    const a = prog(t, 1349.9, 1350.2) * (1 - prog(t, A_.some - 0.05, A_.some + 0.3, 'in'));
    if (a <= 0.01) return; let n = 0; for (let i = 0; i < 17; i++) if (t >= A_.land(i)) n++;
    ctx.save(); ctx.globalAlpha *= a; const x = 150, y = 420;
    const bump = MG.jiggle(t, A_.land(Math.max(0, n - 1)), 0.05, 6, 10);
    ctx.save(); ctx.translate(x, y); ctx.scale(1 + bump, 1 + bump); MG.text.draw(ctx, String(Math.max(1, n)), 0, 0, { font: MG.F.cond, size: 250, weight: 900, color: P.ink }); ctx.restore();
    S9.kick(ctx, 'Autonomous regions', x + 6, y + 44, t, TW('autonomous', 1351.32) - 0.1, { size: 22, color: P.ink });
    const parl = prog(t, A_.each, A_.each + 0.4);
    S9.kick(ctx, '17 parliaments', x + 6, y + 80, t, TW('parliament', 1353.72) - 0.2, { size: 22, color: P.rojo });
    S9.kick(ctx, '+ 2 autonomous cities', x + 6, y + 116 + 0 * parl, t, 1352.2, { size: 18, color: P.ink2 });
    S9.kick(ctx, 'Ceuta · Melilla', x + 6, y + 142, t, 1352.35, { size: 18, color: P.ink2 });
    ctx.restore();
  };
  A_.northText = (ctx, t, c) => {
    if (t < 1358.2 || t > 1363.2) return; const R = S9.REG;
    const items = [['Catalonia', '“hello” in Catalan', 'Hola', A_.cat, [150, -250]], ['Basque Country', '“hello” in Basque', 'Kaixo', A_.bas, [-260, -250]], ['Galicia', '“hello” in Galician', 'Ola', A_.gal, [-560, -190]]];
    const out = 1362.45;
    items.forEach(([en, kick, word, t0, off], i) => {
      const nextT = i < 2 ? items[i + 1][3] - 0.25 : out; const vis = prog(t, t0 - 0.1, t0 + 0.3) * (1 - prog(t, nextT, nextT + 0.25, 'in')); if (vis <= 0.01) return;
      const r = R[en]; const [lx, ly] = S9.toScreen(c, r.cx, r.cy); const px = lx + off[0], py = ly + off[1];
      ctx.save(); ctx.globalAlpha *= vis;
      MG.text.draw(ctx, en.toUpperCase(), lx, ly + 12, { font: MG.F.grotesk, size: 34, weight: 800, color: P.ink, align: 'center', tracking: 0.12, stroke: 'rgba(250,244,232,0.85)', strokeW: 7 });
      S9.kick(ctx, kick, px + 4, py - 142, t, t0, { size: 22, color: P.sombra, style: 'track' });
      S9.word(ctx, word, px, py, t, t0 + 0.08, { size: 176, italic: true, weight: 800, color: P.ink, by: 'char', stagger: 0.04, shadow: { color: 'rgba(40,20,30,0.25)', blur: 18, dy: 10 } });
      ctx.restore();
    });
  };

  S9.basqueScreen = () => { S9.regions(); const c = A_.cam(1368.34); const r = S9.REG['Basque Country']; return S9.toScreen(c, r.cx, r.cy); };
  // ---------------- custom transition: S08's last frame shatters ----------------
  S9.shards = (() => { const cx = 960, cy = 560; const N = 7; const r = MG.rng(4242); const rays = []; for (let i = 0; i < N; i++) { const a = -Math.PI / 2 + (i / N) * MG.TAU + (r() - 0.5) * 0.5; const pts = [[cx, cy]]; for (let k = 1; k <= 14; k++) { const d = k * 170; const j = (r() - 0.5) * 60; pts.push([cx + Math.cos(a) * d - Math.sin(a) * j, cy + Math.sin(a) * d + Math.cos(a) * j]); } rays.push({ a, pts }); } const sh = []; for (let i = 0; i < N; i++) { const A = rays[i], B = rays[(i + 1) % N]; let am = (A.a + B.a) / 2; if (i === N - 1) am += Math.PI; sh.push({ poly: A.pts.concat(B.pts.slice().reverse()), a: am, d: r(), rot: (r() - 0.5) }); } return { rays, sh, cx, cy }; })();
  S9.crack = (ctx, A, B, p) => {
    const S = S9.shards; const crackP = clamp(p / 0.32); const fall = MG.ease.inQuad(clamp((p - 0.22) / 0.78));
    ctx.drawImage(B, 0, 0);
    for (const s of S.sh) {
      const f = clamp((fall - s.d * 0.18) / 0.82); const dist = f * (260 + s.d * 260); const dx = Math.cos(s.a) * dist, dy = Math.sin(s.a) * dist + f * f * 520; const rot = f * s.rot * 0.9; const sc = 1 - f * 0.16;
      const path = MG.path.poly(s.poly);
      ctx.save(); ctx.translate(S.cx + dx, S.cy + dy); ctx.rotate(rot); ctx.scale(sc, sc); ctx.translate(-S.cx, -S.cy);
      ctx.save(); ctx.shadowColor = 'rgba(20,10,15,0.55)'; ctx.shadowBlur = 30 + f * 40; ctx.shadowOffsetX = 10 + f * 30; ctx.shadowOffsetY = 16 + f * 60; ctx.fillStyle = '#1a1416'; ctx.fill(path); ctx.restore();
      ctx.save(); ctx.clip(path); ctx.drawImage(A, 0, 0); ctx.fillStyle = `rgba(10,6,8,${f * 0.35})`; ctx.fillRect(0, 0, 1920, 1080); ctx.restore();
      ctx.strokeStyle = `rgba(255,240,215,${0.55 * (1 - f)})`; ctx.lineWidth = 2; ctx.stroke(path);
      ctx.restore();
    }
    if (crackP < 1) for (const r of S.rays) { const pts = MG.path.trim(r.pts, 0, MG.ease.outCubic(crackP)); ctx.save(); ctx.strokeStyle = 'rgba(255,238,210,0.85)'; ctx.lineWidth = 2.4; ctx.beginPath(); pts.forEach((q, i) => (i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]))); ctx.stroke(); ctx.restore(); }
  };

  // ---------------- Chapter B: ETA (1368.34 → 1379.70), memory state, one continuous tilt ----------------
  const B_ = {};
  B_.forty = TW('forty', 1368.58); B_.eta = TW('ETA', 1370.74); B_.terr = TW('terrorizes', 1371.66); B_.kill = TW('killing', 1373.54); B_.n850 = TW('850', 1373.98);
  B_.diss = TW('dissolution', 1377.1); B_.y2018 = TW('2018', 1378.02);
  B_.F = 1484; // focal length (fov 40°)
  B_.cam = (t) => { const k = keys(t, [[1368.34, [0, -560, 30, 1.5708]], [B_.terr - 0.1, [0, -540, 10, 1.5708], 'inOutSine'], [1373.7, [0, -235, -950, 0.23], 'inOutCubic'], [1379.7, [0, -222, -800, 0.215], 'inOutSine'], [1381, [0, -220, -770, 0.21], 'inOutSine']]); return { x: k[0], y: k[1], z: k[2], pitch: k[3] }; };
  B_.proj = (c, X, Y, Z) => { const x = X - c.x, y = Y - c.y, z = Z - c.z; const cp = Math.cos(c.pitch), sp = Math.sin(c.pitch); const y2 = y * cp - z * sp, z2 = y * sp + z * cp; if (z2 < 5) return null; const s = B_.F / z2; return [960 + x * s, 540 + y2 * s, s]; };
  B_.basque = () => { if (B_._b) return B_._b; MG.geo.init(); const P0 = S9.P0(); const r = S9.REG['Basque Country']; const S = 2.2;
    const toF = (ll) => { const p = P0(ll); return [(p[0] - r.cx) * S, -(p[1] - r.cy) * S]; };
    const rings = []; for (const id of ['01', '20', '48']) { const f = MG.geo.provinces.features.find((q) => q.id === id); const g = f.geometry; const polys = g.type === 'Polygon' ? [g.coordinates] : g.coordinates; for (const poly of polys) { const ring = poly[0]; if (ring.length < 20) continue; rings.push(ring.map(toF)); } }
    B_._b = rings; return rings; };
  B_.candle = () => MG.cache('s9candle', 64, 128, (x) => {
    // votive glass (seen slightly from above) + flame + halo, drawn for additive use; base at (32,112)
    const g = x.createRadialGradient(32, 56, 0, 32, 56, 30); g.addColorStop(0, 'rgba(255,196,110,0.32)'); g.addColorStop(0.5, 'rgba(255,150,60,0.07)'); g.addColorStop(1, 'rgba(255,120,40,0)'); x.fillStyle = g; x.fillRect(0, 20, 64, 64);
    x.fillStyle = 'rgba(214,120,52,0.85)'; x.beginPath(); x.moveTo(18, 78); x.lineTo(46, 78); x.lineTo(44, 112); x.quadraticCurveTo(32, 117, 20, 112); x.closePath(); x.fill();
    x.fillStyle = 'rgba(255,214,150,0.55)'; x.beginPath(); x.ellipse(32, 78, 14, 4, 0, 0, MG.TAU); x.fill();
    const fg = x.createLinearGradient(0, 46, 0, 76); fg.addColorStop(0, 'rgba(255,250,225,1)'); fg.addColorStop(0.6, 'rgba(255,200,95,1)'); fg.addColorStop(1, 'rgba(240,120,40,0.9)'); x.fillStyle = fg; x.beginPath(); x.moveTo(32, 46); x.bezierCurveTo(38, 58, 39, 68, 32, 75); x.bezierCurveTo(25, 68, 26, 58, 32, 46); x.fill();
  });
  B_.unlit = () => MG.cache('s9candle0', 64, 128, (x) => { x.fillStyle = 'rgba(120,96,80,0.55)'; x.beginPath(); x.moveTo(18, 78); x.lineTo(46, 78); x.lineTo(44, 112); x.quadraticCurveTo(32, 117, 20, 112); x.closePath(); x.fill(); x.fillStyle = 'rgba(160,140,120,0.35)'; x.beginPath(); x.ellipse(32, 78, 14, 4, 0, 0, MG.TAU); x.fill(); });
  B_.field = () => { if (B_._f) return B_._f; const out = []; const r = MG.rng(850); for (let j = 0; j < 25; j++) for (let i = 0; i < 34; i++) { const X = -680 + i * 40 + (j % 2) * 20 + (r() - 0.5) * 26, Z = -560 + j * 40 + (r() - 0.5) * 26; out.push({ X, Z, d: Math.hypot(X * 0.6, Z + 900) + r() * 160, ph: r() * 10, s: 0.8 + r() * 0.4 }); } const sorted = out.slice().sort((a, b) => a.d - b.d); sorted.forEach((c, i) => (c.order = i)); out.sort((a, b) => b.Z - a.Z); B_._f = out; return out; };
  B_.lightT = (c) => B_.kill + 0.05 + 2.1 * Math.pow(c.order / 849, 0.85);
  B_.letters = () => { if (B_._L) return B_._L; const c = MG.canvas(900, 260); const x = c.getContext('2d'); MG.text.draw(x, 'ETA', 450, 215, { font: MG.F.cond, size: 250, weight: 900, color: '#E6DFD0', align: 'center', tracking: 0.12 }); const d = x.getImageData(0, 0, 900, 260).data; const pts = []; for (let yy = 0; yy < 260; yy += 4) for (let xx = 0; xx < 900; xx += 4) if (d[(yy * 900 + xx) * 4 + 3] > 140) pts.push([xx, yy, MG.hash(xx * 0.37 + yy * 1.13)]); B_._L = { c, pts }; return B_._L; };
  B_.draw = function (ctx, t) {
    const c = B_.cam(t);
    ctx.fillStyle = '#17110F'; ctx.fillRect(0, 0, 1920, 1080);
    // warm candle-light pool on the floor (grows as candles light)
    const lit = clamp((t - B_.kill) / 2.2); const pool = B_.proj(c, 0, 0, -120);
    if (pool) MG.fx.glow(ctx, pool[0], pool[1], 900 + 400 * lit, '#C9722F', 0.05 + 0.32 * lit, 'screen');
    MG.tex.over(ctx, 'blotch', { alpha: 0.35, color: '#000', scale: 3 });
    // floor grid (faint stone joints) for spatial read during the tilt
    ctx.save(); ctx.strokeStyle = 'rgba(230,200,160,0.05)'; ctx.lineWidth = 1; for (let Z = -900; Z <= 900; Z += 120) { const a = B_.proj(c, -1400, 0, Z), b = B_.proj(c, 1400, 0, Z); if (a && b) { ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); } } ctx.restore();
    // Basque provinces as ember lines (fade as the field lights)
    const mapA = (1 - prog(t, B_.terr + 0.6, B_.kill + 0.5, 'inOutSine')) * prog(t, 1368.4, 1369.2);
    if (mapA > 0.01) { ctx.save(); ctx.globalAlpha = mapA; ctx.lineJoin = 'round';
      for (const ring of B_.basque()) { ctx.beginPath(); let ok = false; for (const [X, Z] of ring) { const p = B_.proj(c, X, 0, Z); if (!p) continue; if (!ok) { ctx.moveTo(p[0], p[1]); ok = true; } else ctx.lineTo(p[0], p[1]); } ctx.closePath(); ctx.fillStyle = 'rgba(120,70,40,0.16)'; ctx.fill(); ctx.strokeStyle = 'rgba(245,184,90,0.75)'; ctx.lineWidth = 2.2; ctx.shadowColor = 'rgba(245,150,60,0.8)'; ctx.shadowBlur = 12; ctx.stroke(); ctx.shadowBlur = 0; }
      const lp = B_.proj(c, 0, 0, -300); if (lp) S9.kick(ctx, 'Basque Country', lp[0], lp[1] + 30, t, 1368.9, { size: 20, color: 'rgba(230,223,208,0.75)', align: 'center', tracking: 0.3 });
      ctx.restore(); }
    // ruler 1968 → 2010 (screen space, bottom) during the top-down part
    const rA = prog(t, B_.forty - 0.1, B_.forty + 0.4) * (1 - prog(t, B_.terr + 0.2, B_.terr + 0.8, 'in'));
    if (rA > 0.01) { ctx.save(); ctx.globalAlpha = rA; const x0 = 420, x1 = 1500, y = 940; const pr = prog(t, B_.forty, B_.forty + 1.6, 'inOutSine'); ctx.strokeStyle = 'rgba(240,226,200,0.95)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(lerp(x0, x1, pr), y); ctx.stroke();
      for (let yr = 1968; yr <= 2010; yr++) { const u = (yr - 1968) / 42; if (u > pr) break; const X = lerp(x0, x1, u); const big = yr % 10 === 0 || yr === 1968; ctx.beginPath(); ctx.moveTo(X, y); ctx.lineTo(X, y - (big ? 26 : 11)); ctx.stroke(); }
      MG.text.draw(ctx, '1968', x0, y + 48, { font: MG.F.mono, size: 30, weight: 700, color: P.bone, align: 'center' }); if (pr > 0.98) MG.text.draw(ctx, '2010', x1, y + 48, { font: MG.F.mono, size: 30, weight: 700, color: P.bone, align: 'center' });
      const hx = lerp(x0, x1, pr); ctx.fillStyle = P.candle; ctx.beginPath(); ctx.arc(hx, y, 5, 0, MG.TAU); ctx.fill(); ctx.restore(); }
    // candle field
    const F = B_.field(); const lit1 = B_.candle(), unlit = B_.unlit(); const fieldA = clamp((1.15 - c.pitch) / 0.5);
    if (fieldA > 0.01) { ctx.save();
      for (const cd of F) { const p = B_.proj(c, cd.X, 0, cd.Z); if (!p || p[1] < -50 || p[1] > 1200 || p[0] < -80 || p[0] > 2000) continue; const sc = p[2] * 0.62 * cd.s; const on = t >= B_.lightT(cd); const blur = Math.min(3, Math.abs(1 / (cd.Z - c.z) - 1 / 650) * 900);
        if (!on) continue;
        const ign = clamp((t - B_.lightT(cd)) / 0.25); const fl = 1 + 0.07 * MG.noise2(t * 5 + cd.ph, cd.ph) * ign; ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = (0.35 + 0.4 * ign) * (1 - blur * 0.15) * clamp(1.5 - (cd.Z - c.z) / 1500, 0.35, 1);
        ctx.drawImage(lit1, p[0] - 32 * sc * fl, p[1] - 112 * sc * fl + (fl - 1) * 30 * sc, 64 * sc * fl, 128 * sc * fl); }
      ctx.restore(); }
    // counter 850
    const nA = prog(t, B_.n850 - 0.25, B_.n850 + 0.2) * (1 - prog(t, B_.diss - 0.6, B_.diss - 0.1, 'in'));
    if (nA > 0.01) { let n = 0; for (const cd of F) if (t >= B_.lightT(cd)) n++; ctx.save(); ctx.globalAlpha = nA; MG.text.draw(ctx, String(n), 960, 352, { font: MG.F.display, size: 130, weight: 300, color: P.bone, align: 'center' }); S9.kick(ctx, 'lives', 960, 398, t, B_.n850, { size: 22, color: 'rgba(230,223,208,0.7)', align: 'center', tracking: 0.5 }); ctx.restore(); }
    // ETA letters → dissolve into ash
    const L = B_.letters(); const eA = prog(t, B_.eta - 0.08, B_.eta + 0.5); const ey = lerp(250, 130, prog(t, B_.terr - 0.2, 1372.5, 'inOutSine')); const es = lerp(1, 0.62, prog(t, B_.terr - 0.2, 1372.5, 'inOutSine'));
    if (eA > 0.01) { const sweep = prog(t, B_.diss - 0.05, B_.diss + 1.4, 'inOutSine'); ctx.save(); ctx.globalAlpha = eA; ctx.translate(960, ey); ctx.scale(es, es); ctx.translate(-450, -150);
      if (sweep < 1) { ctx.save(); ctx.beginPath(); ctx.rect(900 * sweep - 6, 0, 900, 260); ctx.clip(); ctx.drawImage(L.c, 0, 0); ctx.restore(); }
      if (sweep > 0) { ctx.fillStyle = P.bone; for (const [px, py, h] of L.pts) { const td = px / 900 - sweep; if (td > 0) continue; const age = Math.min(2.5, -td * 1.4 + (t - B_.diss) * 0.15); const dx = age * (60 + h * 120) + MG.noise2(px * 0.02, age + h) * 30 * age, dy = -age * (40 + h * 110) + MG.noise2(py * 0.02 + 9, age) * 26 * age; const a = clamp(1 - age / 2.2) * (0.5 + 0.5 * h); if (a <= 0.02) continue; ctx.globalAlpha = eA * a; ctx.fillRect(px + dx, py + dy, 3 - age * 0.6, 3 - age * 0.6); } }
      ctx.restore(); }
    // 2018
    const yA = prog(t, B_.y2018 - 0.15, B_.y2018 + 0.6); if (yA > 0.01) { ctx.save(); ctx.globalAlpha = yA; S9.word(ctx, '2018', 960, 230, t, B_.y2018 - 0.15, { font: MG.F.cond, size: 150, weight: 900, color: P.bone, align: 'center', by: 'char', style: 'fade', stagger: 0.07, dur: 0.9, tracking: 0.08 }); S9.kick(ctx, 'ETA announces its dissolution', 960, 285, t, B_.y2018 + 0.3, { size: 20, color: 'rgba(230,223,208,0.7)', align: 'center', tracking: 0.3 }); ctx.restore(); }
    // dawn at the very end (handoff to Catalonia): warm light creeping from the right
    const dawn = prog(t, 1379.3, 1380.6, 'inOutSine'); if (dawn > 0) { ctx.save(); ctx.globalCompositeOperation = 'screen'; const g = ctx.createLinearGradient(1920, 0, 600, 0); g.addColorStop(0, `rgba(242,163,58,${0.5 * dawn})`); g.addColorStop(1, 'rgba(242,163,58,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, 1920, 1080); ctx.restore(); }
  };

  // ---------------- 3D chamber (Congress 350 / Parlament 135), Three.js instanced chairs ----------------
  S9.PC = { psoe: P.psoe, pp: P.pp, vox: P.vox, up: '#6E4A7E', sumar: '#B9558A', cs: '#E07B39', erc: '#E9B13C', junts: '#2FA7A0', pnv: '#4E8A62', bildu: '#93B565', bng: '#7FAFD0', cc: '#DCCB62', upn: '#5574A6', oth: '#A89F94', ap: '#3E6FA3', yes: P.sol, no: '#6F7F96', blank: '#EDE6D8', absent: '#CFC6B8', dim: '#CFC6B8', ucd: '#8E9A6A' };
  S9.RES = {
    1977: [['psoe', 118], ['oth', 67], ['ucd', 165]], 1982: [['psoe', 202], ['oth', 41], ['ap', 107]], 1996: [['psoe', 141], ['oth', 53], ['pp', 156]], 2004: [['psoe', 164], ['oth', 38], ['pp', 148]],
    2008: [['psoe', 169], ['oth', 27], ['pp', 154]], 2011: [['psoe', 110], ['oth', 54], ['pp', 186]],
    2015: [['up', 69], ['oth', 2], ['erc', 9], ['bildu', 2], ['psoe', 90], ['pnv', 6], ['junts', 8], ['cc', 1], ['cs', 40], ['pp', 123]],
    2016: [['up', 71], ['erc', 9], ['bildu', 2], ['psoe', 85], ['pnv', 5], ['junts', 8], ['cc', 1], ['cs', 32], ['pp', 137]],
    20194: [['up', 42], ['erc', 15], ['bildu', 4], ['psoe', 123], ['oth', 2], ['pnv', 6], ['junts', 7], ['cc', 2], ['cs', 57], ['upn', 2], ['pp', 66], ['vox', 24]],
    201911: [['oth', 5], ['up', 35], ['erc', 13], ['bildu', 5], ['bng', 1], ['psoe', 120], ['oth', 2], ['pnv', 6], ['junts', 8], ['cc', 2], ['cs', 10], ['upn', 2], ['pp', 89], ['vox', 52]],
    2023: [['sumar', 31], ['erc', 7], ['bildu', 6], ['bng', 1], ['psoe', 121], ['pnv', 5], ['junts', 7], ['cc', 1], ['upn', 1], ['pp', 137], ['vox', 33]],
    parl2017: [['yes', 70], ['no', 10], ['blank', 2], ['absent', 53]],
  };
  S9.COALITION = { psoe: 1, sumar: 1, erc: 1, bildu: 1, bng: 1, pnv: 1, junts: 1, cc: 1 };
  S9.layout = (N, rows, r0, dr, h) => { const radii = Array.from({ length: rows }, (_, i) => r0 + i * dr); const sumR = radii.reduce((a, b) => a + b, 0); const ns = radii.map((r) => Math.round((N * r) / sumR)); let diff = N - ns.reduce((a, b) => a + b, 0); let k = rows - 1; while (diff) { ns[k] += Math.sign(diff); diff -= Math.sign(diff); k = (k - 1 + rows) % rows; }
    const seats = []; radii.forEach((R, i) => { const n = ns[i]; for (let j = 0; j < n; j++) { const a = Math.PI - ((j + 0.5) / n) * Math.PI; seats.push({ row: i, a, R, x: R * Math.cos(a), z: -R * Math.sin(a), y: i * h }); } }); seats.sort((p, q) => q.a - p.a || p.row - q.row); seats.forEach((s, i) => (s.i = i)); return seats; };
  S9.assign = (seats, res) => { const out = []; for (const [k, n] of res) for (let i = 0; i < n; i++) out.push(k); while (out.length < seats.length) out.push('oth'); return out; };
  S9.chamber = (kind) => {
    S9._ch = S9._ch || {}; if (S9._ch[kind]) return S9._ch[kind];
    const T = THREE; const big = kind === 'congreso'; const N = big ? 350 : 135; const rows = big ? 10 : 7; const r0 = big ? 3.0 : 2.6, dr = 0.56, h = 0.17;
    const seats = S9.layout(N, rows, r0, dr, h); const sc = new T.Scene();
    sc.add(new T.HemisphereLight(0xfff1dc, 0x4a3448, 1.15)); const dl = new T.DirectionalLight(0xffe7c4, 2.3); dl.position.set(-7, 11, 8); sc.add(dl); const fl = new T.DirectionalLight(0xb8c8ff, 0.45); fl.position.set(6, 4, -6); sc.add(fl);
    const BU = THREE_ADDONS.BufferGeometryUtils; const RB = THREE_ADDONS.RoundedBoxGeometry;
    const cushion = new RB(0.34, 0.09, 0.3, 2, 0.03); cushion.translate(0, 0.2, 0.02); const back = new RB(0.34, 0.3, 0.07, 2, 0.03); back.translate(0, 0.37, -0.13); const leg = new T.CylinderGeometry(0.035, 0.05, 0.18, 8); leg.translate(0, 0.08, 0);
    const geo = BU.mergeGeometries([cushion.toNonIndexed(), back.toNonIndexed(), leg.toNonIndexed()]);
    const mesh = new T.InstancedMesh(geo, new T.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, metalness: 0.02 }), N); mesh.instanceMatrix.setUsage(T.DynamicDrawUsage);
    const c0 = new T.Color(1, 1, 1); for (let i = 0; i < N; i++) mesh.setColorAt(i, c0); sc.add(mesh);
    const wood = new T.MeshStandardMaterial({ color: 0x9a6a48, roughness: 0.7 }); const wood2 = new T.MeshStandardMaterial({ color: 0x7c5238, roughness: 0.65 });
    for (let i = 0; i < rows; i++) { const R = r0 + i * dr; const shp = new T.Shape(); shp.absarc(0, 0, R + dr * 0.5, 0, Math.PI, false); shp.absarc(0, 0, R - dr * 0.5, Math.PI, 0, true); const g = new T.ExtrudeGeometry(shp, { depth: i * h + 0.1, bevelEnabled: false, curveSegments: 48 }); const m = new T.Mesh(g, i % 2 ? wood : wood2); m.rotation.x = -Math.PI / 2; sc.add(m);
      const desk = new T.Shape(); desk.absarc(0, 0, R + 0.2, 0, Math.PI, false); desk.absarc(0, 0, R + 0.12, Math.PI, 0, true); const dg = new T.ExtrudeGeometry(desk, { depth: 0.2, bevelEnabled: false, curveSegments: 48 }); const dm = new T.Mesh(dg, wood2); dm.rotation.x = -Math.PI / 2; dm.position.y = i * h + 0.3; if (i > 0) sc.add(dm); }
    const floorTex = MG.three.canvasTexture(MG.cache('s9floor', 512, 512, (x, w) => { x.fillStyle = '#d6c4a2'; x.fillRect(0, 0, w, w); x.strokeStyle = 'rgba(90,60,40,0.25)'; x.lineWidth = 2; for (let i = 0; i <= w; i += 64) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, w); x.stroke(); x.beginPath(); x.moveTo(0, i); x.lineTo(w, i); x.stroke(); } MG.tex.over(x, 'blotch', { alpha: 0.25, color: '#6b4a30', scale: 3 }); }));
    floorTex.wrapS = floorTex.wrapT = T.RepeatWrapping; floorTex.repeat.set(10, 10);
    const floor = new T.Mesh(new T.PlaneGeometry(40, 40), new T.MeshStandardMaterial({ map: floorTex, roughness: 0.85 })); floor.rotation.x = -Math.PI / 2; floor.position.y = -0.01; sc.add(floor);
    const carpet = new T.Mesh(new T.CircleGeometry(r0 - dr * 0.5, 64, 0, Math.PI), new T.MeshStandardMaterial({ color: big ? 0x8e2f2a : 0x6c2a2e, roughness: 0.95 })); carpet.rotation.x = -Math.PI / 2; carpet.position.y = 0.005; sc.add(carpet);
    const Rw = r0 + rows * dr + 0.4; const wall = new T.Mesh(new T.CylinderGeometry(Rw, Rw, 3.2, 64, 1, true, -Math.PI / 2, Math.PI), new T.MeshStandardMaterial({ map: MG.three.canvasTexture(MG.cache('s9wall', 1024, 256, (x, w, hh) => { x.fillStyle = '#e8dcc4'; x.fillRect(0, 0, w, hh); for (let i = 0; i < 16; i++) { const xx = (i + 0.5) * w / 16; x.fillStyle = 'rgba(150,120,80,0.35)'; x.fillRect(xx - 10, 0, 20, hh); x.fillStyle = 'rgba(255,250,235,0.5)'; x.fillRect(xx - 10, 0, 4, hh); } x.fillStyle = '#b08a4a'; x.fillRect(0, 0, w, 18); x.fillRect(0, hh - 30, w, 30); })), side: T.BackSide, roughness: 0.8 }));
    wall.position.y = 1.6; wall.rotation.y = Math.PI; sc.add(wall);
    const trib = new T.Mesh(new RB(1.0, 0.75, 0.45, 2, 0.05), wood2); trib.position.set(0, 0.37, 0.7); sc.add(trib);
    
    // floor text plane (canvas)
    const tc = MG.canvas(1024, 256); const tt = MG.three.canvasTexture(tc); const tp = new T.Mesh(new T.PlaneGeometry(4.4, 1.1), new T.MeshBasicMaterial({ map: tt, transparent: true, depthWrite: false })); tp.rotation.x = -Math.PI / 2; tp.position.set(0, 0.02, -1.05); sc.add(tp);
    const cam = new T.PerspectiveCamera(30, 16 / 9, 0.1, 120);
    const ch = { kind, N, seats, sc, mesh, cam, tc, tt, tp, textKey: null, d: new T.Object3D(), col: new T.Color(), v: new T.Vector3() };
    S9._ch[kind] = ch; return ch;
  };
  /** render the chamber. o: {seat(i,s)→{color,dy,rx,rz,s,dx,dz}, cam:{pos,look,fov}, text:{key,draw(x,w,h)}, slot, exposure} */
  S9.chamberDraw = (ctx, kind, o) => {
    const ch = S9.chamber(kind); const { d, col } = ch;
    for (let i = 0; i < ch.N; i++) { const s = ch.seats[i]; const st = o.seat(i, s) || {}; d.position.set(s.x + (st.dx || 0), s.y + 0.1 + (st.dy || 0), s.z + (st.dz || 0)); d.rotation.set(st.rx || 0, s.a - Math.PI / 2 + (st.ry || 0), st.rz || 0, 'YXZ'); const k = st.s ?? 1; d.scale.set(k, k, k); d.updateMatrix(); ch.mesh.setMatrixAt(i, d.matrix); col.set(st.color || '#bbbbbb'); ch.mesh.setColorAt(i, col); }
    ch.mesh.instanceMatrix.needsUpdate = true; ch.mesh.instanceColor.needsUpdate = true;
    const tk = o.text ? o.text.key : ''; if (tk !== ch.textKey) { const x = ch.tc.getContext('2d'); x.clearRect(0, 0, 1024, 256); if (o.text) o.text.draw(x, 1024, 256); ch.tt.needsUpdate = true; ch.textKey = tk; } ch.tp.visible = !!o.text; if (o.text && o.text.alpha !== undefined) ch.tp.material.opacity = o.text.alpha;
    ch.cam.fov = o.cam.fov || 30; ch.cam.position.set(...o.cam.pos); ch.cam.lookAt(...o.cam.look); ch.cam.updateProjectionMatrix();
    const c = MG.three.render(ch.sc, ch.cam, { slot: o.slot || 0, exposure: o.exposure || 1.05 }); ctx.drawImage(c, 0, 0); return ch;
  };
  S9.chamberPt = (kind, p) => { const ch = S9.chamber(kind); ch.v.set(p[0], p[1], p[2]).project(ch.cam); return [(ch.v.x * 0.5 + 0.5) * 1920, (-ch.v.y * 0.5 + 0.5) * 1080]; };
  /** seat centroid of a party block (3D) */
  S9.blockPt = (kind, parties, res) => { const ch = S9.chamber(kind); const as = S9.assign(ch.seats, res); let x = 0, y = 0, z = 0, n = 0; ch.seats.forEach((s, i) => { if (parties.includes(as[i])) { x += s.x; y += s.y; z += s.z; n++; } }); return n ? [x / n, y / n + 0.45, z / n] : [0, 0, 0]; };
  S9.backdrop = (ctx, col = '#E6D9C0') => { MG.kit.paper(ctx, col, { light: 0.35 }); };

  // ---------------- characters (bespoke, frontal, cel-shaded) ----------------
  S9.OL = '#2a1a16';
  S9.limb = (ctx, pts, w0, w1, color, o = {}) => { const ip = MG.path.spline(pts, 8); MG.fx.ink(ctx, ip, { width: w0 + 7, color: S9.OL, taper: [0, 0], pressure: (u) => lerp(1, (w1 + 7) / (w0 + 7), u) }); MG.fx.ink(ctx, ip, { width: w0, color, taper: [0, 0], pressure: (u) => lerp(1, w1 / w0, u) }); if (o.shade) MG.fx.ink(ctx, ip.map((p) => [p[0] + w0 * 0.22, p[1]]), { width: w0 * 0.35, color: MG.col.a(o.shade, 0.5), taper: [0.1, 0.1], pressure: (u) => lerp(1, w1 / w0, u) }); };
  /** frontal person. x,y feet; s scale (1 ≈ 600 px tall). sp: spec, po: pose */
  S9.person = (ctx, x, y, s, sp, po = {}) => {
    const sk = sp.skin || '#E2A77F', skS = MG.col.shade(sk, 0.28); const L = [-0.55, -0.83];
    ctx.save(); ctx.translate(x, y); ctx.rotate(po.lean || 0); ctx.scale(s * (sp.w || 1), s);
    const top = sp.top, topS = MG.col.shade(top, 0.35); const bot = sp.bottom || '#3a3a48';
    // legs
    if (sp.skirt) { MG.fx.volume(ctx, MG.path.smooth([[-60, -260], [60, -260], [74, -130], [-74, -130]], true), [-74, -260, 148, 130], { color: bot, cel: true, shade: 0.4, outline: S9.OL, outlineW: 3.5 }); S9.limb(ctx, [[-28, -135], [-26, -60], [-24, -12]], 22, 17, sp.tights || '#6b5a52'); S9.limb(ctx, [[28, -135], [26, -60], [24, -12]], 22, 17, sp.tights || '#6b5a52'); }
    else { S9.limb(ctx, [[-34, -255], [-36, -130], [-32, -14]], 46, 34, bot, { shade: MG.col.shade(bot, 0.4) }); S9.limb(ctx, [[34, -255], [36, -130], [32, -14]], 46, 34, bot, { shade: MG.col.shade(bot, 0.4) }); }
    for (const sx of [-1, 1]) { const sh = MG.path.ellipse(sx * 38, -6, 34, 14); ctx.fillStyle = sp.shoes || '#2b2324'; ctx.fill(sh); ctx.strokeStyle = S9.OL; ctx.lineWidth = 3; ctx.stroke(sh); }
    // arms (behind torso at shoulders) — raised, palms out
    const fl = po.flinch || 0; const down = po.arms === 'down'; const arms = [-1, 1].map((sx) => { const sh = [sx * 66, -418]; if (down) return { sx, sh, el: [sx * 84, -320], wr: [sx * 26, -262] }; if (po.arms === 'shrug') { const k = po.shrug || 0; return { sx, sh: [sx * 66, -418 - 14 * k], el: [sx * lerp(84, 104, k), lerp(-320, -316, k)], wr: [sx * lerp(30, 196, k), lerp(-262, -352, k)] }; } const el = [sx * lerp(128, 96, fl), lerp(-462, -478, fl)]; const wr = [sx * lerp(118, 70, fl), lerp(-602, -585, fl) + (po.armDrop || 0)]; return { sx, sh, el, wr }; });
    const shr = po.arms === 'shrug'; if (!down && !shr) for (const a of arms) S9.limb(ctx, [a.sh, a.el, a.wr], 38, 30, top, { shade: topS });
    // torso
    const tor = MG.path.smooth([[-80, -428], [-40, -446], [40, -446], [80, -428], [70, -330], [64, -250], [-64, -250], [-70, -330]], true);
    MG.fx.volume(ctx, tor, [-80, -446, 160, 196], { color: top, light: L, cel: true, shade: 0.42, shadeColor: topS, hi: 0.25, rim: '#FFE6C0', rimW: 3, outline: S9.OL, outlineW: 4, tex: 'fibers', texAlpha: 0.4 });
    if (sp.collar) { ctx.fillStyle = sp.collar; ctx.beginPath(); ctx.moveTo(-30, -444); ctx.lineTo(0, -404); ctx.lineTo(30, -444); ctx.lineTo(14, -446); ctx.lineTo(0, -428); ctx.lineTo(-14, -446); ctx.closePath(); ctx.fill(); ctx.strokeStyle = S9.OL; ctx.lineWidth = 2.5; ctx.stroke(); }
    if (sp.suit) { ctx.save(); ctx.clip(tor); ctx.fillStyle = sp.shirt || '#F4F0E8'; ctx.beginPath(); ctx.moveTo(-34, -446); ctx.lineTo(34, -446); ctx.lineTo(0, -330); ctx.closePath(); ctx.fill(); ctx.fillStyle = sp.tie || '#7E1F1B'; ctx.beginPath(); ctx.moveTo(-8, -436); ctx.lineTo(8, -436); ctx.lineTo(12, -350); ctx.lineTo(0, -334); ctx.lineTo(-12, -350); ctx.closePath(); ctx.fill(); ctx.fillStyle = MG.col.shade(sp.suit, 0.25); for (const ex of [-1, 1]) { ctx.beginPath(); ctx.moveTo(ex * 36, -446); ctx.lineTo(ex * 6, -330); ctx.lineTo(ex * 20, -390); ctx.lineTo(ex * 52, -420); ctx.closePath(); ctx.fill(); } ctx.restore(); ctx.strokeStyle = S9.OL; ctx.lineWidth = 3; ctx.stroke(tor); }
    if (sp.vest) { ctx.save(); ctx.clip(tor); ctx.fillStyle = sp.vest; for (const ex of [-1, 1]) { ctx.beginPath(); ctx.moveTo(ex * 90, -440); ctx.lineTo(ex * 26, -440); ctx.lineTo(ex * 6, -340); ctx.lineTo(ex * 8, -240); ctx.lineTo(ex * 90, -240); ctx.closePath(); ctx.fill(); } ctx.restore(); ctx.strokeStyle = S9.OL; ctx.lineWidth = 3; ctx.stroke(tor); ctx.fillStyle = '#E9E2D2'; for (let b = 0; b < 3; b++) { ctx.beginPath(); ctx.arc(10, -360 + b * 34, 4, 0, MG.TAU); ctx.fill(); } }
    if (sp.bow) { ctx.fillStyle = sp.bow; ctx.beginPath(); ctx.moveTo(0, -436); ctx.lineTo(-22, -448); ctx.lineTo(-22, -424); ctx.closePath(); ctx.moveTo(0, -436); ctx.lineTo(22, -448); ctx.lineTo(22, -424); ctx.closePath(); ctx.fill(); }
    if (sp.zip) { ctx.strokeStyle = MG.col.shade(top, 0.5); ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(0, -420); ctx.lineTo(0, -255); ctx.stroke(); }
    // hands
    if (down) { for (const a of arms) S9.limb(ctx, [a.sh, a.el, a.wr], 36, 30, top, { shade: topS }); for (const a of arms) MG.kit.hand(ctx, a.wr[0] - a.sx * 6, a.wr[1] - 4, { pose: 'fist', angle: -a.sx * 1.2, s: 1.05, skin: sk, outline: S9.OL, flip: a.sx > 0 }); }
    else if (shr) { for (const a of arms) S9.limb(ctx, [a.sh, a.el, a.wr], 38, 31, sp.sleeve || top, { shade: topS }); for (const a of arms) MG.kit.hand(ctx, a.wr[0] + a.sx * 4, a.wr[1] - 2, { pose: 'open', angle: -a.sx * (1.25 + 0.3 * (po.shrug || 0)), s: 1.12, skin: sk, outline: S9.OL, flip: a.sx < 0 }); }
    else for (const a of arms) MG.kit.hand(ctx, a.wr[0], a.wr[1] + 6, { pose: 'open', angle: Math.PI + a.sx * 0.12, s: 1.15, skin: sk, outline: S9.OL, flip: a.sx > 0 });
    // neck + head
    ctx.fillStyle = skS; ctx.fillRect(-16, -470, 32, 34);
    const hx = (po.turn || 0) * 10, hy = -520 + (po.arms === 'shrug' ? 10 * (po.shrug || 0) : 0); ctx.save(); ctx.translate(hx * 0.4, 0); ctx.rotate((po.tilt || 0));
    if (sp.hair === 'long') { ctx.fillStyle = sp.hairC; ctx.beginPath(); ctx.moveTo(-58, hy - 30); ctx.bezierCurveTo(-72, hy + 40, -70, hy + 100, -52, hy + 118); ctx.lineTo(52, hy + 118); ctx.bezierCurveTo(70, hy + 100, 72, hy + 40, 58, hy - 30); ctx.closePath(); ctx.fill(); ctx.strokeStyle = S9.OL; ctx.lineWidth = 3; ctx.stroke(); }
    const head = MG.path.smooth([[0, hy - 66], [44, hy - 50], [52, hy - 6], [42, hy + 40], [sp.jaw || 18, hy + 64], [-(sp.jaw || 18), hy + 64], [-42, hy + 40], [-52, hy - 6], [-44, hy - 50]], true);
    for (const ex of [-1, 1]) { const ear = MG.path.ellipse(ex * 52, hy + 4, 10, 16); ctx.fillStyle = sk; ctx.fill(ear); ctx.strokeStyle = S9.OL; ctx.lineWidth = 2.5; ctx.stroke(ear); }
    MG.fx.volume(ctx, head, [-52, hy - 66, 104, 130], { color: sk, light: L, cel: true, shade: 0.32, shadeColor: skS, hi: 0.2, rim: '#FFE9CC', rimW: 3, outline: S9.OL, outlineW: 3.5 });
    // hair
    ctx.fillStyle = sp.hairC || '#3a2a22'; ctx.strokeStyle = S9.OL; ctx.lineWidth = 3;
    if (sp.hair === 'bun') { const hp = MG.path.smooth([[-50, hy - 10], [-46, hy - 52], [0, hy - 72], [46, hy - 52], [50, hy - 10], [30, hy - 40], [-30, hy - 40]], true); ctx.fill(hp); ctx.stroke(hp); const bun = MG.path.circle(0, hy - 80, 22); ctx.fill(bun); ctx.stroke(bun); }
    else if (sp.hair === 'bald') { for (const ex of [-1, 1]) { const hp = MG.path.smooth([[ex * 52, hy - 4], [ex * 50, hy - 34], [ex * 38, hy - 44], [ex * 44, hy - 14]], true); ctx.fill(hp); ctx.stroke(hp); } ctx.fillStyle = 'rgba(255,240,220,0.45)'; ctx.beginPath(); ctx.ellipse(-14, hy - 52, 14, 6, -0.3, 0, MG.TAU); ctx.fill(); }
    else if (sp.hair === 'short') { const hp = MG.path.smooth([[-52, hy - 4], [-50, hy - 50], [-10, hy - 74], [40, hy - 64], [54, hy - 24], [52, hy - 4], [36, hy - 38], [0, hy - 46], [-36, hy - 36]], true); ctx.fill(hp); ctx.stroke(hp); }
    else if (sp.hair === 'swept') { const hp = MG.path.smooth([[-54, hy + 4], [-58, hy - 44], [-34, hy - 82], [8, hy - 92], [50, hy - 76], [62, hy - 40], [54, hy + 2], [44, hy - 34], [14, hy - 52], [-16, hy - 50], [-40, hy - 30]], true); ctx.fill(hp); ctx.stroke(hp); ctx.fillStyle = 'rgba(200,196,190,0.55)'; for (const ex of [-1, 1]) { ctx.beginPath(); ctx.ellipse(ex * 50, hy - 8, 6, 16, ex * 0.2, 0, MG.TAU); ctx.fill(); } ctx.strokeStyle = 'rgba(255,240,220,0.25)'; ctx.lineWidth = 3; for (let i = 0; i < 4; i++) { ctx.beginPath(); ctx.moveTo(-30 + i * 18, hy - 78 + i * 2); ctx.quadraticCurveTo(-10 + i * 18, hy - 88, 10 + i * 18, hy - 70); ctx.stroke(); } }
    else if (sp.hair === 'long') { const hp = MG.path.smooth([[-54, hy + 10], [-50, hy - 50], [0, hy - 72], [50, hy - 50], [54, hy + 10], [30, hy - 36], [-8, hy - 46], [-34, hy - 30]], true); ctx.fill(hp); ctx.stroke(hp); }
    // face
    const lk = po.look || [0.4, 0]; const bl = po.blink || 0; const fx = (po.turn || 0) * 8;
    for (const ex of [-1, 1]) MG.kit.eye(ctx, fx + ex * 20, hy + 2, { r: 10, w: 1.05, look: lk, blink: bl, skin: sk, sad: po.sad, iris: sp.iris || '#4a3020' });
    for (const ex of [-1, 1]) MG.kit.brow(ctx, fx + ex * 20, hy - 18, { w: 26, raise: po.brow ?? 0.5, angle: ex * (po.browTilt ?? -0.25), flip: ex > 0, color: sp.browC || sp.hairC || '#3a2a22' });
    if (sp.glasses) { ctx.strokeStyle = '#2a2226'; ctx.lineWidth = 2.5; for (const ex of [-1, 1]) { ctx.beginPath(); ctx.roundRect(fx + ex * 20 - 15, hy - 10, 30, 22, 7); ctx.stroke(); } ctx.beginPath(); ctx.moveTo(fx - 5, hy); ctx.lineTo(fx + 5, hy); ctx.stroke(); }
    MG.fx.ink(ctx, [[fx + 2, hy + 8], [fx + 6, hy + 22], [fx, hy + 26]], { width: 3, color: MG.col.shade(sk, 0.5), taper: [0.2, 0.4] });
    if (sp.moustache) { ctx.fillStyle = sp.hairC; ctx.beginPath(); ctx.moveTo(fx - 18, hy + 38); ctx.quadraticCurveTo(fx, hy + 26, fx + 18, hy + 38); ctx.quadraticCurveTo(fx, hy + 33, fx - 18, hy + 38); ctx.fill(); }
    if (sp.beard) { ctx.fillStyle = MG.col.a(sp.hairC, 0.85); ctx.beginPath(); ctx.moveTo(-44, hy + 20); ctx.quadraticCurveTo(-36, hy + 70, 0, hy + 74); ctx.quadraticCurveTo(36, hy + 70, 44, hy + 20); ctx.quadraticCurveTo(20, hy + 48, 0, hy + 46); ctx.quadraticCurveTo(-20, hy + 48, -44, hy + 20); ctx.fill(); }
    MG.kit.mouth(ctx, fx, hy + 42, { w: 22, mood: po.mood || 'o', open: po.open ?? 0.3 });
    ctx.fillStyle = 'rgba(220,90,80,0.16)'; for (const ex of [-1, 1]) { ctx.beginPath(); ctx.ellipse(fx + ex * 30, hy + 24, 10, 6, 0, 0, MG.TAU); ctx.fill(); }
    ctx.restore(); ctx.restore();
  };

  // ---------------- Chapter C: Catalonia 2017 (1379.70 → 1403.15) ----------------
  const C_ = {};
  C_.cat = TW('Catalonia', 1380.26); C_.y2017 = TW('2017', 1381.7); C_.ref = TW('referendum', 1384.02); C_.madrid = TW('Madrid', 1384.78); C_.illegal = TW('illegal', 1385.7);
  C_.police = TW('Police', 1387.06); C_.beat = TW('beat', 1387.38); C_.parl = TW('parliament', 1390.82); C_.repub = TW('republic', 1391.94);
  C_.within = TW('Within', 1393.14); C_.flee = TW('flee', 1394.74); C_.belg = TW('Belgium', 1395.14);
  C_.stay = TW('stay', 1396.66); C_.impr = TW('imprisoned', 1397.22); C_.pard = TW('pardoned', 1398.38); C_.amn = TW('amnesty', 1399.62); C_.votes = TW('votes', 1401.62); C_.parl2 = TW('parliament', 1402.1);
  C_.senyera = () => { const r = S9.REG.Catalonia; const pad = 8, res = 2.5, depth = 8; const [bx, by, bw, bh] = r.bb;
    const c = MG.cache('s9senyera', (bw + pad * 2) * res, (bh + pad * 2 + depth) * res, (x) => { x.scale(res, res); x.translate(pad - bx, pad - by);
      for (let i = depth; i >= 0.5; i -= 0.5) { x.save(); x.translate(0, i); x.fillStyle = MG.col.mix('#8a5a1a', '#5a3410', i / depth); x.fill(r.path); x.restore(); }
      x.save(); x.clip(r.path); for (let k = 0; k < 9; k++) { x.fillStyle = k % 2 ? P.rojo : '#F2B33A'; x.fillRect(bx - 2, by + (k / 9) * bh, bw + 4, bh / 9 + 1); }
      MG.tex.over(x, 'fibers', { alpha: 0.6 }); MG.tex.over(x, 'blotch', { alpha: 0.15, color: '#5a2a10', scale: 3 }); const g = x.createLinearGradient(bx, by, bx + bw, by + bh); g.addColorStop(0, 'rgba(255,240,210,0.3)'); g.addColorStop(1, 'rgba(60,20,30,0.2)'); x.fillStyle = g; x.fillRect(bx, by, bw, bh); x.restore();
      x.strokeStyle = 'rgba(40,26,36,0.6)'; x.lineWidth = 1; x.stroke(r.path); });
    return { c, ox: bx - pad, oy: by - pad, w: c.width / res, h: c.height / res }; };
  C_.cam = (t) => { const r = S9.REG.Catalonia, m = S9.P0()(MG.geo.cities.Madrid); const k = keys(t, [[1379.7, [r.cx - 60, r.cy + 10, 1.75]], [1381.5, [r.cx - 10, r.cy, 2.05], 'inOutSine'], [1382.1, [r.cx, r.cy + 30, 2.3], 'cam'], [1384.5, [r.cx + 10, r.cy + 30, 2.4], 'inOutSine'], [1385.4, [(r.cx + m[0]) / 2 + 60, (r.cy + m[1]) / 2 + 10, 1.25], 'cam'], [1387.4, [(r.cx + m[0]) / 2 + 80, (r.cy + m[1]) / 2 + 10, 1.3], 'inOutSine']]); return { x: k[0], y: k[1], z: k[2] }; };
  C_.box = (ctx, x, y, s, t) => { // ballot box standing on the map, base centre at x,y (world); s world scale
    const up = prog(t, C_.y2017 - 0.05, C_.y2017 + 0.45, 'out'); if (up <= 0) return; const sq = MG.spring(t - (C_.y2017 - 0.05), 2.4, 0.55);
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s * Math.max(0.02, sq));
    MG.fx.contact(ctx, 10, 2, 78, 16, 0.4); const W = 120, H = 104, D = 34;
    // body (translucent white plastic)
    const front = MG.path.rr(-W / 2, -H, W, H, 6); ctx.fillStyle = 'rgba(244,244,238,0.94)'; ctx.fill(front);
    const g = ctx.createLinearGradient(-W / 2, 0, W / 2, 0); g.addColorStop(0, 'rgba(255,255,255,0.5)'); g.addColorStop(0.7, 'rgba(180,186,196,0.15)'); g.addColorStop(1, 'rgba(120,130,150,0.35)'); ctx.fillStyle = g; ctx.fill(front);
    ctx.strokeStyle = 'rgba(60,60,70,0.6)'; ctx.lineWidth = 1.5; ctx.stroke(front);
    // top lid in perspective
    const lid = MG.path.poly([[-W / 2, -H], [-W / 2 + D * 0.7, -H - D * 0.6], [W / 2 + D * 0.7, -H - D * 0.6], [W / 2, -H]]); ctx.fillStyle = '#2E3A4A'; ctx.fill(lid); ctx.strokeStyle = 'rgba(20,20,30,0.7)'; ctx.stroke(lid);
    const side = MG.path.poly([[W / 2, -H], [W / 2 + D * 0.7, -H - D * 0.6], [W / 2 + D * 0.7, -D * 0.6], [W / 2, 0]]); ctx.fillStyle = 'rgba(200,204,212,0.92)'; ctx.fill(side); ctx.stroke(side);
    ctx.fillStyle = '#0f141c'; ctx.beginPath(); ctx.ellipse(D * 0.35, -H - D * 0.3, 26, 3.5, 0, 0, MG.TAU); ctx.fill();
    // label
    ctx.fillStyle = '#FBF7EE'; ctx.fillRect(-42, -74, 84, 40); ctx.strokeStyle = 'rgba(40,30,30,0.5)'; ctx.lineWidth = 1; ctx.strokeRect(-42, -74, 84, 40);
    MG.text.draw(ctx, 'REFERÈNDUM', 0, -60, { font: MG.F.mono, size: 9.5, weight: 700, color: P.ink, align: 'center', tracking: 0.08 }); MG.text.draw(ctx, '1·10·2017', 0, -42, { font: MG.F.cond, size: 17, weight: 900, color: P.rojoDeep, align: 'center' });
    ctx.restore();
    // ballots dropping into the slot
    for (let i = 0; i < 3; i++) { const t0 = C_.y2017 + 0.9 + i * 0.42; const u = prog(t, t0, t0 + 0.5, 'inQuad'); if (u <= 0 || u >= 1) continue; ctx.save(); ctx.translate(x + D * 0.35 * s, y - (H + D * 0.3) * s - (1 - u) * 160 * s); ctx.rotate((1 - u) * (i - 1) * 0.6); ctx.beginPath(); ctx.rect(-40 * s, -200 * s, 80 * s, 200 * s); ctx.clip(); ctx.fillStyle = '#FFFDF6'; ctx.fillRect(-16 * s, -30 * s, 32 * s, 30 * s); ctx.strokeStyle = 'rgba(40,30,30,0.5)'; ctx.lineWidth = 0.8 * s; ctx.strokeRect(-16 * s, -30 * s, 32 * s, 30 * s); ctx.fillStyle = 'rgba(40,30,30,0.5)'; for (let l = 0; l < 3; l++) ctx.fillRect(-11 * s, (-24 + l * 7) * s, 22 * s, 1.5 * s); ctx.restore(); }
  };
  C_.tape = (ctx, x, y, s, t) => { const u = prog(t, C_.illegal - 0.05, C_.illegal + 0.3, 'snap'); if (u <= 0) return; ctx.save(); ctx.translate(x, y - 60 * s); ctx.rotate(-0.32); ctx.scale(s, s); const L = 360 * u; ctx.fillStyle = 'rgba(30,10,10,0.25)'; ctx.fillRect(-180 + 4, -15 + 6, L, 30); ctx.fillStyle = P.rojo; ctx.fillRect(-180, -15, L, 30); ctx.save(); ctx.beginPath(); ctx.rect(-180, -15, L, 30); ctx.clip(); MG.text.draw(ctx, 'ILLEGAL · ILLEGAL · ILLEGAL', -172, 8, { font: MG.F.cond, size: 22, weight: 900, color: '#FBF3E6', tracking: 0.08 }); ctx.restore(); ctx.restore(); };
  C_.drawCat = function (ctx, t) {
    const regs = S9.regions(); const R = S9.REG; const c = C_.cam(t); c.dx = MG.wiggle(t, 0.3, 2.5, 21); c.dy = MG.wiggle(t, 0.27, 2, 22);
    MG.fx.fill(ctx, '#BCD0DE'); ctx.save(); S9.applyCam(ctx, c); S9.drawPage(ctx);
    const res = c.z > 1.5 ? 3 : 2; const cat = R.Catalonia; const up = prog(t, C_.cat - 0.15, C_.cat + 0.45, 'out'); const lift = 6 + 10 * up;
    for (const r of regs) if (r !== cat) S9.pieceShadow(ctx, r, {}); for (const r of regs) if (r !== cat) S9.piece(ctx, r, { res });
    ctx.save(); ctx.globalAlpha = 0.18 * up; ctx.fillStyle = P.sombra; ctx.fillRect(-500, -500, 3000, 2200); ctx.restore();
    S9.pieceShadow(ctx, cat, { lift }); S9.piece(ctx, cat, { lift, res }); const sy = C_.senyera(); ctx.save(); ctx.globalAlpha = up; ctx.translate(0, -lift); ctx.translate(cat.cx, cat.cy); ctx.scale(1 + lift * 0.0016, 1 + lift * 0.0016); ctx.translate(-cat.cx, -cat.cy); ctx.drawImage(sy.c, sy.ox, sy.oy, sy.w, sy.h); ctx.restore();
    // Madrid pin + red line to the box (world)
    const m = S9.P0()(MG.geo.cities.Madrid); const bx = cat.cx + 6, by = cat.cy + 30 - lift;
    const ml = prog(t, C_.madrid - 0.05, C_.madrid + 0.6, 'inOutSine'); if (ml > 0) { ctx.save(); ctx.fillStyle = P.rojoDeep; ctx.beginPath(); ctx.arc(m[0], m[1], 6, 0, MG.TAU); ctx.fill(); ctx.strokeStyle = '#FBF3E6'; ctx.lineWidth = 2; ctx.stroke(); const pts = []; for (let i = 0; i <= 40; i++) { const u = i / 40; pts.push([lerp(m[0], bx - 40, u), lerp(m[1], by - 70, u) - Math.sin(u * Math.PI) * 60]); } MG.fx.line(ctx, pts, { progress: ml, color: P.rojo, width: 3, dash: [9, 7], head: 5 }); ctx.restore();
      MG.text.draw(ctx, 'MADRID', m[0] - 12, m[1] + 30, { font: MG.F.grotesk, size: 24, weight: 800, color: P.ink, align: 'center', tracking: 0.12, stroke: 'rgba(250,244,232,0.85)', strokeW: 6, alpha: ml }); }
    C_.box(ctx, bx, by, 0.85, t); C_.tape(ctx, bx, by, 0.85, t);
    ctx.restore();
    // labels (screen)
    const [lx, ly] = S9.toScreen(c, cat.cx - 40, cat.cy + 70); const la = up * (1 - prog(t, C_.y2017 - 0.2, C_.y2017 + 0.2, 'in'));
    if (la > 0) { ctx.save(); ctx.globalAlpha = la; MG.text.draw(ctx, 'CATALONIA', lx, ly, { font: MG.F.grotesk, size: 40, weight: 800, color: P.ink, align: 'center', tracking: 0.12, stroke: 'rgba(250,244,232,0.9)', strokeW: 8 }); S9.kick(ctx, 'Catalunya', lx, ly + 34, t, C_.cat, { size: 20, align: 'center', color: P.ink2, stroke: 'rgba(250,244,232,0.9)', strokeW: 6 }); ctx.restore(); }
    const ia = prog(t, C_.ref - 0.1, C_.ref + 0.3) * (1 - prog(t, 1386.9, 1387.2)); if (ia > 0) { ctx.save(); ctx.globalAlpha = ia; S9.kick(ctx, 'Independence referendum', 140, 150, t, C_.ref - 0.1, { size: 24, color: P.ink }); ctx.restore(); }
  };
  // foreground wipe: riot shields pass the lens (right → left)
  C_.shields = () => MG.cache('s9shields', 1300, 1080, (x) => { x.filter = 'blur(9px)'; const dark = '#120E13';
    for (let i = 0; i < 3; i++) { const cx = 230 + i * 400; x.fillStyle = dark; x.beginPath(); x.roundRect(cx - 200, 260 - i * 30, 400, 900, 40); x.fill(); x.beginPath(); x.arc(cx, 190 - i * 30, 150, Math.PI, 0); x.lineTo(cx + 170, 260 - i * 30); x.lineTo(cx - 170, 260 - i * 30); x.fill(); x.fillStyle = 'rgba(160,170,190,0.12)'; x.fillRect(cx - 120, 150 - i * 30, 240, 46); x.fillStyle = 'rgba(200,210,230,0.08)'; x.fillRect(cx - 180, 300 - i * 30, 26, 760); }
    x.fillStyle = dark; x.fillRect(150, 520, 1000, 560); });
  C_.shieldWipe = (ctx, A, B, p) => { const X = lerp(1950, -1350, MG.ease.inOutSine(p)); ctx.drawImage(A, 0, 0); ctx.save(); ctx.beginPath(); ctx.rect(X + 650, 0, 3000, 1080); ctx.clip(); ctx.drawImage(B, 0, 0); ctx.restore(); ctx.drawImage(C_.shields(), X, 0); };
  // school facade (polling station)
  C_.facade = () => MG.cache('s9facade', 1920, 1080, (x, w, h) => {
    x.fillStyle = '#D9B98C'; x.fillRect(0, 0, w, h); MG.tex.over(x, 'blotch', { alpha: 0.35, color: '#7a5030', scale: 4 }); MG.tex.over(x, 'fibers', { alpha: 0.8 });
    x.fillStyle = '#9C8B78'; x.fillRect(0, 760, w, 160); x.strokeStyle = 'rgba(60,40,30,0.35)'; x.lineWidth = 2; for (let i = 0; i < w; i += 160) { x.strokeRect(i, 760, 160, 80); x.strokeRect(i + 80, 840, 160, 80); }
    x.fillStyle = '#7E7166'; x.fillRect(0, 920, w, 160); MG.tex.over(x, 'grain', { alpha: 0.2 });
    // door with arch
    x.fillStyle = '#3B2A22'; x.beginPath(); x.moveTo(760, 920); x.lineTo(760, 330); x.arc(960, 330, 200, Math.PI, 0); x.lineTo(1160, 920); x.closePath(); x.fill();
    x.fillStyle = '#5C3F2E'; x.fillRect(780, 330, 180, 590); x.fillRect(964, 330, 176, 590); x.strokeStyle = 'rgba(20,10,8,0.5)'; x.lineWidth = 3; for (const dx of [800, 984]) { x.strokeRect(dx, 360, 140, 240); x.strokeRect(dx, 630, 140, 260); }
    x.fillStyle = 'rgba(255,214,150,0.5)'; x.fillRect(958, 330, 8, 590);
    x.strokeStyle = '#BFA27A'; x.lineWidth = 22; x.beginPath(); x.moveTo(750, 920); x.lineTo(750, 330); x.arc(960, 330, 210, Math.PI, 0); x.lineTo(1170, 920); x.stroke();
    // windows
    for (const wx of [240, 1520]) { x.fillStyle = '#2E2A30'; x.fillRect(wx, 300, 200, 300); x.fillStyle = 'rgba(160,180,200,0.25)'; x.fillRect(wx + 10, 310, 180, 280); x.strokeStyle = '#4a4040'; x.lineWidth = 6; for (let i = 0; i < 6; i++) { x.beginPath(); x.moveTo(wx + 16 + i * 34, 300); x.lineTo(wx + 16 + i * 34, 600); x.stroke(); } x.fillStyle = '#BFA27A'; x.fillRect(wx - 20, 600, 240, 22); }
    // sign on the wall
    x.save(); x.translate(1260, 470); x.rotate(0.03); x.fillStyle = 'rgba(30,20,10,0.25)'; x.fillRect(6, 8, 210, 150); x.fillStyle = '#FBF8F0'; x.fillRect(0, 0, 210, 150); x.fillStyle = 'rgba(220,210,180,0.8)'; x.fillRect(80, -10, 50, 20); MG.text.draw(x, 'COL·LEGI', 105, 60, { font: MG.F.grotesk, size: 34, weight: 800, color: P.ink, align: 'center' }); MG.text.draw(x, 'ELECTORAL', 105, 100, { font: MG.F.grotesk, size: 34, weight: 800, color: P.ink, align: 'center' }); MG.text.draw(x, '1 · 10 · 2017', 105, 132, { font: MG.F.mono, size: 16, weight: 700, color: P.rojoDeep, align: 'center' }); x.restore();
  });
  C_.riotShadow = (ctx, x, y, s, baton) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const body = new Path2D(); body.moveTo(-70, -600); body.bezierCurveTo(-74, -690, 74, -690, 72, -600); body.lineTo(86, -592); body.lineTo(86, -566); body.lineTo(48, -560); body.lineTo(44, -530);
    body.bezierCurveTo(120, -526, 150, -500, 150, -440); body.lineTo(140, -240); body.lineTo(110, -230); body.lineTo(100, 0); body.lineTo(-100, 0); body.lineTo(-110, -230); body.lineTo(-140, -240); body.lineTo(-150, -440); body.bezierCurveTo(-150, -500, -120, -526, -44, -530); body.lineTo(-46, -560); body.lineTo(-72, -566); body.closePath(); ctx.fill(body);
    ctx.fill(MG.path.rr(-190, -500, 200, 470, 22)); // shield
    ctx.save(); ctx.translate(120, -470); ctx.rotate(-2.4 + baton * 1.9); ctx.fill(MG.path.rr(-20, -18, 150, 40, 18)); ctx.translate(140, 0); ctx.fill(MG.path.rr(-6, -8, 230, 18, 9)); ctx.restore();
    ctx.restore(); };
  C_.drawPolice = function (ctx, t) {
    const tw = MG.kit.twos(t); const push = prog(t, 1387.06, 1390.2, 'inOutSine'); const sh = MG.cam.handheld(t, 4, 31);
    ctx.save(); ctx.translate(960 + sh.dx, 540 + sh.dy); ctx.scale(1.02 + push * 0.06, 1.02 + push * 0.06); ctx.translate(-960, -560);
    ctx.drawImage(C_.facade(), 0, 0);
    // raking warm light from the left
    ctx.save(); ctx.globalCompositeOperation = 'soft-light'; const g = ctx.createLinearGradient(0, 0, 1920, 0); g.addColorStop(0, 'rgba(255,200,130,0.8)'); g.addColorStop(1, 'rgba(40,30,60,0.6)'); ctx.fillStyle = g; ctx.fillRect(0, 0, 1920, 1080); ctx.restore();
    // police: only their shadows, advancing across the wall
    const adv = prog(t, 1386.7, 1389.4, 'inOutSine'); const bat = prog(t, C_.beat - 0.35, C_.beat + 0.05, 'out') - prog(t, C_.beat + 0.1, C_.beat + 0.3, 'in') * 0.9 + prog(t, C_.beat + 0.9, C_.beat + 1.3, 'out') * 0.8 - prog(t, C_.beat + 1.35, C_.beat + 1.5, 'in') * 0.7;
    ctx.save(); ctx.fillStyle = 'rgba(30,16,36,0.6)'; ctx.filter = 'blur(2.5px)';
    C_.riotShadow(ctx, lerp(2250, 1640, adv), 920, 1.3, 0.15); C_.riotShadow(ctx, lerp(1980, 1330, adv), 905, 1.22, bat); C_.riotShadow(ctx, lerp(2500, 1880, adv), 935, 1.4, bat * 0.7);
    ctx.restore();
    // voters (their own shadows + figures)
    const fl = prog(tw, C_.beat + 0.05, C_.beat + 0.35, 'out'); const V = [
      [600, 1000, 0.95, { skin: '#E8B48C', top: '#4E7A74', bottom: '#5A4E4A', skirt: true, tights: '#5a4a44', hair: 'bun', hairC: '#CFCBC6', browC: '#9a948e', glasses: true, collar: '#EDE4D3' }, { sad: true, brow: 0.7, mood: 'frown', open: 0.1 }],
      [880, 1015, 1.02, { skin: '#D69A72', top: '#3D5A80', bottom: '#2F3542', hair: 'bald', hairC: '#3a2a22', moustache: true, collar: '#F1EBDD', w: 1.1 }, { brow: 0.4, mood: 'o', open: 0.4 }],
      [1150, 1005, 0.96, { skin: '#F0C4A0', top: P.sol, bottom: '#283044', hair: 'long', hairC: '#2E1E18', zip: true }, { brow: 0.6, sad: true, mood: 'o', open: 0.3 }],
    ];
    ctx.save(); ctx.fillStyle = 'rgba(40,20,40,0.35)'; ctx.filter = 'blur(10px)'; for (const v of V) { ctx.beginPath(); ctx.ellipse(v[0] + 90, v[1] - 300, 120 * v[2], 300 * v[2], 0.12, 0, MG.TAU); ctx.fill(); } ctx.restore();
    V.forEach((v, i) => { const b = MG.kit.blink(t, 40 + i); const breath = Math.sin(tw * 2.4 + i) * 0.006; const f = fl * (i === 1 ? 1 : 0.7);
      S9.person(ctx, v[0], v[1], v[2] * (1 + breath), v[3], { ...v[4], flinch: f, lean: -0.05 * f, turn: -f * 1.2 + 0.3, look: [0.9 - f * 1.6, -0.1], blink: Math.max(b, f * 0.7), armDrop: Math.sin(tw * 9 + i) * 2 * (1 - f) }); });
    ctx.restore();
    const lab = prog(t, C_.police + 0.2, C_.police + 0.6) * (1 - prog(t, 1389.8, 1390.05)); if (lab > 0) { ctx.save(); ctx.globalAlpha = lab; S9.kick(ctx, 'Polling station · 1 October 2017', 150, 140, t, C_.police + 0.2, { size: 22, color: P.cal, stroke: 'rgba(30,20,20,0.6)', strokeW: 5 }); ctx.restore(); }
  };
  C_.drawParl = function (ctx, t) {
    S9.backdrop(ctx, '#DCCFB6'); const res = S9.RES.parl2017; const ch = S9.chamber('parlament'); const as = S9.assign(ch.seats, res);
    const reveal = prog(t, C_.parl - 0.3, C_.repub + 0.1, 'inOutSine');
    const camT = prog(t, 1389.6, 1393.8, 'inOutSine'); const cam = { pos: [lerp(-3.0, 1.6, camT), lerp(12.5, 9.6, camT), lerp(10.5, 11.0, camT)], look: [0, 0, -2.3], fov: 34 };
    S9.chamberDraw(ctx, 'parlament', { cam, seat: (i, s) => { const k = as[i]; const d = clamp((reveal * 1.25 - (1 - s.a / Math.PI) * 0.25)); let col = S9.PC.dim; if (k === 'absent') col = MG.col.mix(S9.PC.dim, '#B8AF9F', d); else col = MG.col.mix(S9.PC.dim, S9.PC[k], d); return { color: col, s: k === 'absent' ? 1 - 0.12 * d : 1, dy: k === 'yes' ? 0.06 * d : 0 }; },
      text: { key: 'rep', draw: (x, w, h) => { MG.text.draw(x, 'REPÚBLICA', w / 2, 170, { font: MG.F.display, size: 150, weight: 800, color: 'rgba(250,240,220,0.92)', align: 'center', tracking: 0.04 }); MG.text.draw(x, '27 · 10 · 2017', w / 2, 236, { font: MG.F.mono, size: 40, weight: 700, color: 'rgba(250,240,220,0.8)', align: 'center', tracking: 0.2 }); }, alpha: prog(t, C_.repub - 0.1, C_.repub + 0.5) } });
    // tallies
    const ta = prog(t, C_.repub - 0.2, C_.repub + 0.3); if (ta > 0) { ctx.save(); ctx.globalAlpha = ta; const items = [['70', 'YES', P.solDeep], ['10', 'NO', '#55657C'], ['2', 'BLANK', '#9A907C'], ['53', 'WALKED OUT', '#7C7368']]; let x = 150; ctx.fillStyle = 'rgba(250,244,232,0.82)'; ctx.fillRect(120, 70, 760, 170); items.forEach(([n, l, c], i) => { MG.text.draw(ctx, n, x, 180, { font: MG.F.cond, size: 100, weight: 900, color: c }); S9.kick(ctx, l, x + 2, 216, t, C_.repub + i * 0.08, { size: 18, color: P.ink }); x += 175; }); ctx.restore(); }
    S9.kick(ctx, "Parlament de Catalunya · 27 October 2017", 150, 990, t, C_.parl - 0.2, { size: 24, color: P.ink });
  };
  // zoom-out transition: the chamber shrinks into Barcelona on the Europe map
  C_.EU = { kind: 'conic', center: [3.2, 46.0], scale: 3100 };
  C_.euProj = () => C_._eu || (C_._eu = MG.geo.proj('conic', C_.EU));
  C_.bcnScreen = () => C_.euProj()(MG.geo.cities.Barcelona);
  C_.zoomOut = (ctx, A, B, p) => { const [bx, by] = C_.bcnScreen(); const e = MG.ease.inOutCubic(p); const s = lerp(1, 0.012, e); ctx.drawImage(B, 0, 0); ctx.save(); ctx.globalAlpha = 1 - MG.smoothstep(0.75, 1, p); ctx.translate(lerp(960, bx, e), lerp(540, by, e)); ctx.scale(s, s); ctx.translate(-960, -540); ctx.shadowColor = 'rgba(20,10,20,0.5)'; ctx.shadowBlur = 60; ctx.drawImage(A, 0, 0); ctx.restore(); };
  C_.euMap = () => MG.cache('s9eu', 1920, 1080, (x) => { const pr = C_.euProj(); MG.kit.seaBg(x); for (const f of MG.geo.world50.features) { const n = f.properties.name; MG.geo.draw(x, pr, f, { fill: n === 'Spain' ? P.sol : n === 'Belgium' ? P.terracota : '#E2DACB', stroke: 'rgba(58,43,58,0.35)', width: 1 }); } MG.geo.graticule(x, pr, { step: [5, 5], color: 'rgba(30,50,80,0.1)' }); MG.tex.over(x, 'fibers', { alpha: 0.7 }); });
  C_.drawFlee = function (ctx, t) {
    const pr = C_.euProj(); const push = prog(t, 1393.1, 1396.6, 'inOutSine'); const sh = MG.cam.handheld(t, 2, 41);
    ctx.save(); ctx.translate(960 + sh.dx, 540 + sh.dy); const z = 1 + push * 0.08; ctx.scale(z, z); ctx.translate(-960, -540 + push * 20); ctx.drawImage(C_.euMap(), 0, 0);
    const bcn = MG.geo.cities.Barcelona, bru = MG.geo.cities.Brussels; const rp = prog(t, C_.flee - 0.4, C_.belg + 0.5, 'inOutCubic');
    const r = MG.geo.route(ctx, pr, bcn, bru, { progress: rp, color: P.rojoDeep, width: 4, dash: [12, 8], lift: 90 });
    if (rp > 0.01 && rp < 1) { const [hx, hy] = MG.path.along(r.pts, rp); ctx.fillStyle = P.ink; for (let k = 0; k < 5; k++) { ctx.beginPath(); ctx.arc(hx + (k - 2) * 7, hy - Math.abs(k - 2) * 4, 4.5, 0, MG.TAU); ctx.fill(); } }
    MG.geo.label(ctx, pr, bcn, { text: 'BARCELONA', t, t0: 1393.2, dx: -170, dy: 30, size: 28, weight: 800, color: P.ink, halo: 'rgba(250,244,232,0.9)', dotColor: P.rojoDeep });
    MG.geo.label(ctx, pr, bru, { text: 'BRUSSELS', t, t0: C_.belg - 0.1, dx: 16, dy: -12, size: 30, weight: 800, color: P.ink, halo: 'rgba(250,244,232,0.9)', dotColor: P.rojoDeep, pulse: true });
    const be = pr([4.6, 50.55]); MG.text.draw(ctx, 'BELGIUM', be[0] + 40, be[1] + 46, { font: MG.F.mono, size: 20, weight: 700, color: P.rojoDeep, tracking: 0.2, alpha: prog(t, C_.belg, C_.belg + 0.4) });
    ctx.restore();
    // the sun becomes a clock: "within hours"
    const [bx, by] = pr(bcn); const ck = prog(t, C_.within - 0.1, C_.within + 0.4, 'out') * (1 - prog(t, 1396.0, 1396.4, 'in'));
    if (ck > 0.01) { MG.kit.sun(ctx, bx + 120, by - 130, 54 * ck, t, { variant: 'clock', hour: 22 + (t - C_.within) * 2.4, corona: 0.2 }); S9.kick(ctx, 'within hours', bx + 190, by - 120, t, C_.within + 0.2, { size: 20, color: P.ink }); }
  };
  // prison → pardon → amnesty → votes
  C_.cellWall = () => MG.cache('s9cell', 1920, 1080, (x, w, h) => { x.fillStyle = '#7E7686'; x.fillRect(0, 0, w, h); const r = MG.rng(9); for (let j = 0; j < 14; j++) for (let i = 0; i < 12; i++) { const bx = i * 170 + (j % 2) * 85 - 40, by = j * 78; x.fillStyle = MG.col.mix('#857C8C', '#6C6474', r()); x.fillRect(bx + 3, by + 3, 164, 72); } MG.tex.over(x, 'blotch', { alpha: 0.4, color: '#2a2030', scale: 3 }); MG.tex.over(x, 'grain', { alpha: 0.25 }); x.fillStyle = '#4A4452'; x.fillRect(0, 860, w, 220); MG.tex.over(x, 'fibers', { alpha: 0.5 }); x.fillStyle = '#5a4840'; x.fillRect(560, 700, 800, 30); x.fillRect(600, 730, 26, 140); x.fillRect(1294, 730, 26, 140);
    x.fillStyle = '#1E1A24'; x.fillRect(300, 120, 260, 200); x.fillStyle = 'rgba(255,230,190,0.85)'; x.fillRect(310, 130, 240, 180); x.fillStyle = '#1E1A24'; for (let i = 0; i < 5; i++) x.fillRect(320 + i * 50, 120, 14, 200); });
  C_.drawPrison = function (ctx, t) {
    const tw = MG.kit.twos(t);
    // stage behind: the Congress (2023), revealed when the wall falls
    const fall = prog(t, C_.amn - 0.2, C_.amn + 0.7, 'inCubic'); const ch = S9.chamber('congreso'); const as = S9.assign(ch.seats, S9.RES[2023]);
    if (fall > 0.01) { S9.backdrop(ctx, '#DCCFB6'); const vt = prog(t, C_.votes - 0.6, C_.votes + 0.4, 'inOutSine'); const ct = prog(t, C_.amn + 0.3, 1403.6, 'inOutSine');
      S9.chamberDraw(ctx, 'congreso', { cam: { pos: [lerp(1.0, 0.2, ct), lerp(15.5, 17.5, ct), lerp(14.0, 15.2, ct)], look: [0, 0, -3.6], fov: 36 }, seat: (i, s) => { const k = as[i]; const cat = k === 'erc' || k === 'junts'; const coal = S9.COALITION[k]; let col = S9.PC.dim; if (coal && !cat) col = MG.col.mix(S9.PC.dim, S9.PC[k], 0.55); if (cat) col = MG.col.mix(S9.PC.dim, S9.PC[k], vt); return { color: col, dy: cat ? 0.12 * vt : 0 }; } });
      const vA = prog(t, C_.votes - 0.3, C_.votes + 0.3); if (vA > 0) { const pE = S9.chamberPt('congreso', S9.blockPt('congreso', ['erc'], S9.RES[2023])), pJ = S9.chamberPt('congreso', S9.blockPt('congreso', ['junts'], S9.RES[2023])); ctx.save(); ctx.globalAlpha = vA; for (const [p, n, c] of [[pE, 'ERC · 7', S9.PC.erc], [pJ, 'JUNTS · 7', S9.PC.junts]]) { ctx.strokeStyle = P.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(p[0], p[1] - 10); ctx.lineTo(p[0], p[1] - 90); ctx.stroke(); MG.text.draw(ctx, n, p[0], p[1] - 104, { font: MG.F.grotesk, size: 38, weight: 800, color: P.ink, align: 'center', stroke: 'rgba(250,244,232,0.9)', strokeW: 7 }); } ctx.restore(); S9.kick(ctx, 'Catalan votes in Congress', 150, 980, t, C_.votes - 0.3, { size: 22, color: P.ink }); } }
    if (fall >= 0.999) return;
    // the cell (a paper-theatre flat) tipping backwards
    ctx.save(); const hinge = 1010; ctx.translate(0, hinge); ctx.scale(1, Math.max(0.001, Math.cos(fall * Math.PI / 2))); ctx.translate(0, -hinge);
    ctx.globalAlpha = 1 - MG.smoothstep(0.85, 1, fall); const sh = MG.cam.handheld(t, 2.5, 51);
    ctx.save(); ctx.translate(sh.dx, sh.dy); ctx.drawImage(C_.cellWall(), 0, 0);
    // light shaft from the window (bars)
    ctx.save(); ctx.globalCompositeOperation = 'screen'; ctx.fillStyle = 'rgba(255,220,170,0.16)'; ctx.beginPath(); ctx.moveTo(310, 130); ctx.lineTo(550, 130); ctx.lineTo(1300, 1000); ctx.lineTo(700, 1000); ctx.closePath(); ctx.fill(); ctx.restore();
    // chalk dates on the wall
    const chalk = (s, x, y, t0) => MG.text.reveal(ctx, s, x, y, t, t0, { font: MG.F.brush, size: 74, color: 'rgba(240,236,228,0.85)', style: 'wipe', by: 'line', dur: 0.45 });
    chalk('2019', 1450, 300, C_.impr + 0.15); chalk('2021', 1450, 400, C_.pard + 0.1); if (t > C_.pard + 0.2) { ctx.save(); ctx.strokeStyle = 'rgba(240,236,228,0.8)'; ctx.lineWidth = 6; const k = prog(t, C_.pard + 0.2, C_.pard + 0.5); ctx.beginPath(); ctx.moveTo(1440, 270); ctx.lineTo(1440 + 170 * k, 290 - 30 * k); ctx.stroke(); ctx.restore(); }
    for (let i = 0; i < 9; i++) if (t > C_.impr + 0.3 + i * 0.05) { ctx.strokeStyle = 'rgba(240,236,228,0.6)'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(1460 + i * 18, 470); ctx.lineTo(1464 + i * 18, 530); ctx.stroke(); }
    // seated man (frontal, head bowed → looks up at the pardon)
    const look = prog(tw, C_.pard + 0.1, C_.pard + 0.5, 'out');
    ctx.save(); ctx.translate(960, 0); ctx.save(); ctx.beginPath(); ctx.rect(-400, 0, 800, 735); ctx.clip(); S9.person(ctx, 0, 1000, 0.98, { skin: '#E2A77F', top: '#2F3542', bottom: '#2F3542', hair: 'short', hairC: '#4a3a30', collar: '#F1EBDD' }, { arms: 'down', tilt: lerp(0.05, 0, look), look: [0, lerp(0.8, -0.1, look)], blink: lerp(0.6, 0, look) + MG.kit.blink(t, 77), brow: lerp(-0.2, 0.4, look), mood: 'flat', open: 0 }); ctx.restore(); ctx.restore();
    ctx.fillStyle = '#5a4840'; ctx.fillRect(560, 700, 800, 34);
    ctx.restore();
    // the gate: bars slam down (imprisoned), lift (pardoned)
    const down = prog(t, C_.impr - 0.1, C_.impr + 0.12, 'inQuad'); const upB = prog(t, C_.pard - 0.05, C_.pard + 0.6, 'inOutCubic'); const gy = lerp(-1100, 0, down) - upB * 1150 + (down >= 1 && upB <= 0 ? MG.jiggle(t, C_.impr + 0.12, 10, 7, 9) : 0);
    if (gy > -1080) { ctx.save(); ctx.translate(0, gy); for (let i = 0; i < 13; i++) { const x = 90 + i * 145; const g = ctx.createLinearGradient(x - 16, 0, x + 16, 0); g.addColorStop(0, '#2A2630'); g.addColorStop(0.35, '#8E8A98'); g.addColorStop(0.5, '#C9C6D2'); g.addColorStop(1, '#25222B'); ctx.fillStyle = g; ctx.fillRect(x - 16, -60, 32, 1180); } ctx.fillStyle = '#3A3642'; ctx.fillRect(0, 90, 1920, 34); ctx.fillRect(0, 980, 1920, 34); ctx.restore(); }
    // the BOE page (amnesty law) flies across
    const bo = prog(t, C_.amn - 0.55, C_.amn + 0.25, 'out'); if (bo > 0 && fall < 0.6) { ctx.save(); ctx.translate(lerp(-500, 1240, bo), lerp(700, 560, bo)); ctx.rotate(lerp(-0.5, -0.06, bo)); ctx.fillStyle = 'rgba(20,10,10,0.3)'; ctx.fillRect(14, 18, 420, 560); ctx.fillStyle = '#FBF8F1'; ctx.fillRect(0, 0, 420, 560); MG.text.draw(ctx, 'BOE', 30, 70, { font: MG.F.display, size: 60, weight: 900, color: P.ink }); ctx.fillStyle = P.ink; ctx.fillRect(30, 90, 360, 3); MG.text.draw(ctx, 'Ley Orgánica 1/2024', 30, 150, { font: MG.F.display, size: 30, weight: 700, color: P.ink }); MG.text.draw(ctx, 'de amnistía', 30, 190, { font: MG.F.display, size: 30, weight: 400, italic: true, color: P.ink }); ctx.fillStyle = 'rgba(30,26,29,0.35)'; for (let l = 0; l < 12; l++) ctx.fillRect(30, 240 + l * 24, 360 - (l % 3) * 40, 6); MG.text.draw(ctx, '2024', 300, 530, { font: MG.F.cond, size: 60, weight: 900, color: P.rojoDeep }); ctx.restore(); }
    ctx.restore();
    const la = prog(t, C_.stay - 0.1, C_.stay + 0.3) * (1 - prog(t, C_.amn - 0.3, C_.amn)); if (la > 0) { ctx.save(); ctx.globalAlpha = la; S9.kick(ctx, 'Those who stay', 150, 980, t, C_.stay - 0.1, { size: 22, color: P.cal }); ctx.restore(); }
    const words = [['imprisoned', C_.impr], ['pardoned', C_.pard], ['amnesty', C_.amn]];
    words.forEach(([w, t0], i) => { const a = prog(t, t0 - 0.05, t0 + 0.2) * (1 - prog(t, C_.votes - 0.5, C_.votes - 0.2)); if (a <= 0) return; ctx.save(); ctx.globalAlpha = a; S9.word(ctx, w, 150, 520 + i * 92, t, t0 - 0.05, { font: MG.F.display, size: 72, italic: true, weight: 700, color: i === 2 ? P.sol : P.cal, shadow: { color: 'rgba(0,0,0,0.4)', blur: 14, dy: 6 } }); ctx.restore(); });
  };

  // ---------------- C6: bar TV pull-back ("That's Spanish politics for you") ----------------
  const D_ = {};
  D_.thats = TW('That’s', 1403.18); D_.forYou = TW('for', 1404.34);
  D_.TV = [150, 120, 640, 360];
  D_.tvShot = () => MG.cache('s9tvshot', 960, 540, (x) => { const prison = scenes.find((q) => q.id === 's09_prison'); const c = MG.canvas(1920, 1080); const cx = c.getContext('2d'); try { prison.draw(cx, 1403.1); } catch (e) { cx.fillStyle = '#ccc'; cx.fillRect(0, 0, 1920, 1080); } x.drawImage(c, 0, 0, 960, 540); });
  D_.barBg = () => MG.cache('s9bar', 1920, 1080, (x, w, h) => {
    x.fillStyle = '#EADCC0'; x.fillRect(0, 0, w, h); MG.tex.over(x, 'blotch', { alpha: 0.25, color: '#8a6a40', scale: 3 });
    // azulejo band
    const ty = 560, ts = 64; for (let j = 0; j < 5; j++) for (let i = 0; i < 31; i++) { const X = i * ts, Y = ty + j * ts; x.fillStyle = '#F4EFE4'; x.fillRect(X + 1, Y + 1, ts - 2, ts - 2); x.strokeStyle = P.azulejo; x.lineWidth = 3; x.beginPath(); x.arc(X + ts / 2, Y + ts / 2, 16, 0, MG.TAU); x.stroke(); x.fillStyle = P.azulejo; for (const [a, b] of [[0, 0], [ts, 0], [0, ts], [ts, ts]]) { x.beginPath(); x.arc(X + a, Y + b, 12, 0, MG.TAU); x.fill(); } x.fillStyle = P.sol; x.beginPath(); x.arc(X + ts / 2, Y + ts / 2, 6, 0, MG.TAU); x.fill(); }
    MG.tex.over(x, 'grain', { alpha: 0.12 });
    // shelf with bottles
    x.fillStyle = '#6B4632'; x.fillRect(980, 300, 900, 22); const r = MG.rng(5); for (let i = 0; i < 16; i++) { const bx = 1000 + i * 54 + r() * 10, bh = 130 + r() * 70; const cols = ['#3E5A3A', '#6A2A22', '#C9A04A', '#2F3A4A', '#8A5A2A']; x.fillStyle = cols[i % 5]; x.beginPath(); x.moveTo(bx, 300); x.lineTo(bx, 300 - bh * 0.6); x.quadraticCurveTo(bx, 300 - bh * 0.75, bx + 12, 300 - bh * 0.8); x.lineTo(bx + 12, 300 - bh); x.lineTo(bx + 22, 300 - bh); x.lineTo(bx + 22, 300 - bh * 0.8); x.quadraticCurveTo(bx + 34, 300 - bh * 0.75, bx + 34, 300 - bh * 0.6); x.lineTo(bx + 34, 300); x.closePath(); x.fill(); x.fillStyle = 'rgba(255,255,255,0.3)'; x.fillRect(bx + 5, 300 - bh * 0.55, 5, bh * 0.45); x.fillStyle = '#F2E8D5'; x.fillRect(bx + 4, 300 - bh * 0.4, 26, 30); }
    // hanging jamón
    x.save(); x.translate(1760, 60); x.strokeStyle = '#4a3020'; x.lineWidth = 3; x.beginPath(); x.moveTo(0, -60); x.lineTo(0, 20); x.stroke(); const ham = MG.path.smooth([[0, 20], [24, 40], [56, 160], [60, 300], [28, 360], [-20, 340], [-36, 220], [-24, 90], [-8, 40]], true); MG.fx.volume(x, ham, [-36, 20, 96, 340], { color: '#9A3A2A', shade: 0.5, hi: 0.3, outline: '#3a1a14', outlineW: 3 }); x.fillStyle = '#E9D2B0'; x.beginPath(); x.ellipse(-2, 32, 10, 14, 0, 0, MG.TAU); x.fill(); x.restore();
    // TV bracket + frame
    const [tx, ty2, tw, th] = D_.TV; x.fillStyle = '#2a2428'; x.fillRect(tx + tw / 2 - 20, 0, 40, ty2); x.fillStyle = '#1C1A1E'; x.beginPath(); x.roundRect(tx - 18, ty2 - 18, tw + 36, th + 36, 14); x.fill(); x.fillStyle = 'rgba(255,255,255,0.08)'; x.fillRect(tx - 10, ty2 - 10, tw + 20, 6);
  });
  D_.counter = () => MG.cache('s9counter', 1920, 360, (x, w, h) => { x.fillStyle = '#7A4A30'; x.fillRect(0, 40, w, h - 40); const g = x.createLinearGradient(0, 0, 0, 60); g.addColorStop(0, '#B07850'); g.addColorStop(1, '#8A5A3A'); x.fillStyle = g; x.fillRect(0, 0, w, 60); x.fillStyle = 'rgba(255,230,190,0.35)'; x.fillRect(0, 2, w, 5); x.strokeStyle = 'rgba(40,20,10,0.25)'; x.lineWidth = 2; for (let i = 0; i < 18; i++) { x.beginPath(); x.moveTo(0, 90 + i * 15); x.bezierCurveTo(600, 80 + i * 15 + Math.sin(i) * 8, 1300, 100 + i * 15, w, 90 + i * 15); x.stroke(); } MG.tex.over(x, 'grain', { alpha: 0.15 }); });
  D_.tvPull = (ctx, A, B, p) => { const [tx, ty, tw, th] = D_.TV; const e = MG.ease.inOutCubic(p); ctx.drawImage(B, 0, 0); ctx.save(); ctx.translate(lerp(0, tx, e), lerp(0, ty, e)); ctx.scale(lerp(1, tw / 1920, e), lerp(1, th / 1080, e)); ctx.drawImage(A, 0, 0); ctx.restore(); };
  D_.drawBar = function (ctx, t) {
    const tw = MG.kit.twos(t); const sh = MG.cam.handheld(t, 3, 61); const push = prog(t, 1403.15, 1405.6, 'inOutSine');
    ctx.save(); ctx.translate(960 + sh.dx, 540 + sh.dy); const z = 1 + push * 0.05; ctx.scale(z, z); ctx.translate(-960 + push * 30, -540);
    ctx.drawImage(D_.barBg(), 0, 0); const [tx, ty, tW, tH] = D_.TV; ctx.drawImage(D_.tvShot(), tx, ty, tW, tH); ctx.fillStyle = 'rgba(160,200,255,0.06)'; ctx.fillRect(tx, ty, tW, tH); ctx.save(); ctx.globalCompositeOperation = 'screen'; const gl = ctx.createLinearGradient(tx, ty, tx + tW, ty + tH); gl.addColorStop(0, 'rgba(255,255,255,0.12)'); gl.addColorStop(0.4, 'rgba(255,255,255,0)'); ctx.fillStyle = gl; ctx.fillRect(tx, ty, tW, tH); ctx.restore();
    // barman
    const sk = prog(tw, D_.thats + 0.35, D_.thats + 0.75, 'out') * (1 - prog(tw, 1405.0, 1405.5, 'in') * 0.6); const look = prog(tw, D_.forYou - 0.2, D_.forYou + 0.1);
    S9.person(ctx, 1260, 1290, 1.72, { skin: '#D9A07A', top: '#F4F0E6', sleeve: '#F4F0E6', vest: '#22202A', bow: '#7E1F1B', bottom: '#22202A', hair: 'short', hairC: '#2C2420', moustache: true, w: 1.12, jaw: 24 }, { arms: 'shrug', shrug: sk, look: [lerp(-0.8, 0, look), lerp(-0.4, 0, look)], brow: lerp(0.1, 1.0, sk), browTilt: 0.15, mood: 'smirk', open: 0, turn: lerp(-1.2, 0, look), blink: MG.kit.blink(t, 9) });
    // towel on the shoulder
    ctx.fillStyle = '#E7E2D6'; ctx.beginPath(); ctx.moveTo(1118, 560); ctx.lineTo(1186, 572); ctx.lineTo(1170, 740); ctx.lineTo(1112, 728); ctx.closePath(); ctx.fill(); ctx.strokeStyle = '#7a9ab8'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(1116, 640); ctx.lineTo(1178, 650); ctx.stroke();
    ctx.drawImage(D_.counter(), 0, 820);
    // coffee + the coin (it starts spinning → match cut to the sun-coin)
    ctx.save(); ctx.translate(0, 60); MG.fx.contact(ctx, 700, 805, 70, 14, 0.35); ctx.fillStyle = '#F6F1E7'; ctx.beginPath(); ctx.ellipse(700, 800, 66, 16, 0, 0, MG.TAU); ctx.fill(); ctx.fillStyle = '#F8F4EC'; ctx.beginPath(); ctx.moveTo(660, 800); ctx.lineTo(668, 740); ctx.lineTo(732, 740); ctx.lineTo(740, 800); ctx.closePath(); ctx.fill(); ctx.fillStyle = '#6A3E24'; ctx.beginPath(); ctx.ellipse(700, 742, 32, 7, 0, 0, MG.TAU); ctx.fill(); ctx.restore();
    const spin = prog(t, 1404.55, 1405.3); const ang = spin * 26; const cw = Math.abs(Math.cos(ang)) * 26 + 3; MG.fx.contact(ctx, 880, 872, 34, 8, 0.4); ctx.save(); ctx.translate(880, 850 - Math.abs(Math.sin(ang)) * 6 * spin); ctx.scale(cw / 26, 1); MG.kit.sun(ctx, 0, 0, 26, t, { variant: 'coin', color: P.gold }); ctx.restore();
    ctx.restore();
  };
  // ---------------- Chapter D: money (1405.15 → 1416.08) ----------------
  D_.rich = TW('richest', 1406.02); D_.fifth = TW('fifth', 1407.78); D_.gdp = TW('GDP', 1408.42); D_.doesnt = TW('doesn’t', 1409.46); D_.subs = TW('subsidize', 1410.14); D_.south = TW('south', 1411.22);
  D_.every = TW('every', 1412.26); D_.ten = TW('ten', 1412.58); D_.rem = TW('remembers', 1415.14);
  D_.CLASS = { Madrid: 2, 'Basque Country': 2, Navarre: 2, Catalonia: 2, Aragon: 2, 'Balearic Islands': 2, 'La Rioja': 2, 'Castile and León': 1, Cantabria: 1, Galicia: 1, Asturias: 1, Valencia: 1, Murcia: 0, 'Castile-La Mancha': 0, 'Canary Islands': 0, Andalusia: 0, Extremadura: 0, Ceuta: 0, Melilla: 0 };
  D_.CC = ['#EFD09A', '#E2A04C', '#B8432A'];
  D_.SOUTH = ['Andalusia', 'Extremadura', 'Castile-La Mancha', 'Murcia'];
  D_.cam = (t) => { const k = keys(t, [[1405.15, [980, 520, 1.0]], [1409.0, [975, 540, 1.02], 'inOutSine'], [D_.every - 0.1, [980, 545, 1.04], 'inOutSine'], [D_.every + 0.7, [980, 650, 1.0], 'cam'], [1416.5, [985, 660, 1.02], 'inOutSine']]); return { x: k[0], y: k[1], z: k[2] }; };
  D_.coin = (ctx, t, x, y, r, rot) => {
    // the sun disk as a coin with Spain embossed, cut into fifths
    MG.fx.contact(ctx, x + 18, y + r * 0.95, r * 1.05, r * 0.22, 0.35);
    MG.kit.sun(ctx, x, y, r, t, { variant: 'coin', color: '#E7B04E' });
    const P0 = S9.P0(); const sc = r / 520; ctx.save(); ctx.translate(x, y); ctx.scale(sc, sc); ctx.translate(-965, -545); const es = MG.geo.country('Spain', '50');
    const pth = MG.geo.path2d(P0, MG.geo.peninsular()); ctx.save(); ctx.translate(-4, -5); ctx.fillStyle = 'rgba(255,236,190,0.55)'; ctx.fill(pth); ctx.restore(); ctx.fillStyle = 'rgba(120,70,20,0.45)'; ctx.fill(pth); ctx.restore();
    if (t > D_.fifth + 0.15) { ctx.save(); const pth = new Path2D(); pth.moveTo(x, y); pth.arc(x, y, r * 0.99, rot, rot + MG.TAU / 5); pth.closePath(); ctx.fillStyle = 'rgba(70,40,30,0.55)'; ctx.fill(pth); ctx.restore(); }
    const cut = prog(t, D_.fifth - 0.1, D_.fifth + 0.3); if (cut > 0) { ctx.save(); ctx.strokeStyle = 'rgba(60,30,10,0.7)'; ctx.lineWidth = 3; for (let i = 0; i < 5; i++) { const a = rot + (i / 5) * MG.TAU; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a) * r * 0.99 * cut, y + Math.sin(a) * r * 0.99 * cut); ctx.stroke(); } ctx.restore(); }
  };
  D_.wedge = (ctx, t, x, y, r, rot, out) => { // the Catalonia fifth, lifted out with the senyera
    const a0 = rot, a1 = rot + MG.TAU / 5; const am = (a0 + a1) / 2; const dx = Math.cos(am) * out * r * 0.35, dy = Math.sin(am) * out * r * 0.35 - out * 18;
    const pth = new Path2D(); pth.moveTo(x + dx, y + dy); pth.arc(x + dx, y + dy, r, a0, a1); pth.closePath();
    ctx.save(); MG.fx.shadow(ctx, pth, { dx: 14, dy: 22 + out * 20, blur: 24, color: 'rgba(40,20,30,0.4)' }); ctx.clip(pth); for (let k = 0; k < 9; k++) { ctx.fillStyle = k % 2 ? P.rojo : '#F2B33A'; ctx.fillRect(x + dx - r, y + dy - r + (k / 9) * 2 * r, 2 * r, (2 * r) / 9 + 1); } MG.tex.over(ctx, 'fibers', { alpha: 0.6 }); const g = ctx.createRadialGradient(x + dx - r * 0.4, y + dy - r * 0.4, 0, x + dx, y + dy, r); g.addColorStop(0, 'rgba(255,245,220,0.35)'); g.addColorStop(1, 'rgba(60,20,20,0.25)'); ctx.fillStyle = g; ctx.fillRect(x + dx - r, y + dy - r, 2 * r, 2 * r); ctx.restore();
    ctx.save(); ctx.strokeStyle = 'rgba(60,20,10,0.8)'; ctx.lineWidth = 3; ctx.stroke(pth); ctx.restore();
    return [x + dx + Math.cos(am) * r * 0.55, y + dy + Math.sin(am) * r * 0.55];
  };
  D_.pipes = () => { if (D_._pp) return D_._pp; const R = S9.REG; const c = R.Catalonia; const src = [c.cx - 10, c.cy + 40]; D_._pp = D_.SOUTH.map((n, i) => { const d = R[n]; const dst = [d.cx, d.cy]; const mid = [(src[0] + dst[0]) / 2 + 40 - i * 20, (src[1] + dst[1]) / 2 - 90 + i * 25]; const pts = []; for (let k = 0; k <= 40; k++) { const u = k / 40; pts.push([(1 - u) * (1 - u) * src[0] + 2 * u * (1 - u) * mid[0] + u * u * dst[0], (1 - u) * (1 - u) * src[1] + 2 * u * (1 - u) * mid[1] + u * u * dst[1]]); } return { n, pts }; }); return D_._pp; };
  D_.seis = (ctx, t, top, cam) => { // seismograph strip under the map (world coords)
    const x0 = 200, x1 = 1720, y0 = top, H = 260; ctx.save(); ctx.fillStyle = 'rgba(40,20,30,0.3)'; ctx.fillRect(x0 + 14, y0 + 20, x1 - x0, H); ctx.fillStyle = '#FBF7EC'; ctx.fillRect(x0, y0, x1 - x0, H); MG.tex.over(ctx, 'fibers', { alpha: 0.5 });
    for (const rx of [x0, x1]) { const g = ctx.createLinearGradient(rx - 30, 0, rx + 30, 0); g.addColorStop(0, '#5a4a44'); g.addColorStop(0.45, '#D8CFC2'); g.addColorStop(1, '#4a3c36'); ctx.fillStyle = g; ctx.fillRect(rx - 30, y0 - 22, 60, H + 44); }
    MG.text.draw(ctx, 'CATALONIA', x0 + 46, y0 + 40, { font: MG.F.mono, size: 22, weight: 700, color: P.rojo, tracking: 0.25 });
    const scroll = (t - D_.every) * 220; ctx.beginPath(); ctx.rect(x0 + 30, y0, x1 - x0 - 60, H); ctx.clip();
    ctx.strokeStyle = 'rgba(184,50,42,0.18)'; ctx.lineWidth = 1; for (let gx = x0 - (scroll % 40); gx < x1; gx += 40) { ctx.beginPath(); ctx.moveTo(gx, y0); ctx.lineTo(gx, y0 + H); ctx.stroke(); } for (let gy = y0 + 23; gy < y0 + H; gy += 23) { ctx.beginPath(); ctx.moveTo(x0, gy); ctx.lineTo(x1, gy); ctx.stroke(); }
    const pen = 1500; const yc = y0 + H / 2; const spikes = [0.6, 1.95, 3.15]; const sp = (u) => { let v = MG.fbm(u * 6, 3.3, 3) * 6; for (const s0 of spikes) { const d = u - s0; v += Math.exp(-d * d * 220) * Math.sin(d * 110) * 95; } const d2 = u - 3.95; v += Math.exp(-d2 * d2 * 100) * Math.sin(d2 * 90) * 150; return v; };
    const tr = (t - D_.every) * 1.0; ctx.strokeStyle = P.ink; ctx.lineWidth = 2.4; ctx.beginPath(); for (let px = x0; px <= pen; px += 3) { const u = tr - (pen - px) / 220; if (u < -0.3) { ctx.moveTo(px, yc); continue; } ctx.lineTo(px, yc - clamp(sp(u), -118, 118)); } ctx.stroke();
    // decade brackets between spikes
    const sx = (s0) => pen - (tr - s0) * 220; const b1 = sx(spikes[0]), b2 = sx(spikes[1]); if (tr > spikes[1] + 0.1 && b1 > x0) { ctx.strokeStyle = P.rojo; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(b1, y0 + 30); ctx.lineTo(b1, y0 + 18); ctx.lineTo(b2, y0 + 18); ctx.lineTo(b2, y0 + 30); ctx.stroke(); MG.text.draw(ctx, '≈ 10 YEARS', (b1 + b2) / 2, y0 + 50, { font: MG.F.mono, size: 20, weight: 700, color: P.rojo, align: 'center', tracking: 0.12 }); }
    ctx.restore();
    // stylus arm
    const yv = yc - clamp(sp(tr), -100, 100); ctx.save(); ctx.strokeStyle = '#3B3236'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(pen + 220, y0 - 60); ctx.lineTo(pen, yv); ctx.stroke(); ctx.fillStyle = P.rojo; ctx.beginPath(); ctx.arc(pen, yv, 7, 0, MG.TAU); ctx.fill(); ctx.fillStyle = '#3B3236'; ctx.beginPath(); ctx.arc(pen + 220, y0 - 60, 14, 0, MG.TAU); ctx.fill(); ctx.restore();
    return sp(tr);
  };
  D_.drawMoney = function (ctx, t) {
    const regs = S9.regions(); const R = S9.REG; const c = D_.cam(t);
    const mapIn = prog(t, D_.gdp + 0.2, D_.doesnt + 0.2, 'inOutCubic');
    // seismograph shake on spikes
    let shake = 0; if (t > D_.every) { const tr = t - D_.every; for (const s0 of [0.6, 1.95, 3.15, 3.95]) shake += Math.exp(-Math.pow((tr - s0) * 6, 2)) * (s0 > 3.9 ? 14 : 5); }
    c.dx = MG.wiggle(t, 0.3, 2, 71) + MG.noise2(t * 30, 3) * shake; c.dy = MG.wiggle(t, 0.27, 2, 72) + MG.noise2(t * 30, 9) * shake;
    MG.fx.fill(ctx, '#BCD0DE'); ctx.save(); S9.applyCam(ctx, c); S9.drawPage(ctx);
    if (mapIn > 0) { ctx.save(); ctx.globalAlpha = mapIn;
      for (const r of regs) S9.pieceShadow(ctx, r, {}); for (const r of regs) { const cls = D_.CLASS[r.en] ?? 1; const catJ = r.en === 'Catalonia' ? Math.exp(-Math.pow(Math.max(0, shake - 3), 1) * 0) * shake * 1.6 : 0; S9.piece(ctx, r, { color: D_.CC[cls], lift: catJ }); }
      ctx.restore();
      // pipes Catalonia → south, coins travelling; the valve closes on "doesn't want"
      const pA = prog(t, D_.doesnt - 0.5, D_.doesnt, 'out'); const close = prog(t, D_.subs + 0.25, D_.subs + 0.75, 'inOutCubic');
      if (pA > 0) for (const [i, pp] of D_.pipes().entries()) { const pts = pp.pts; ctx.save(); ctx.globalAlpha = pA; ctx.lineCap = 'round'; ctx.strokeStyle = 'rgba(40,26,36,0.55)'; ctx.lineWidth = 16; ctx.beginPath(); pts.forEach((q, k) => (k ? ctx.lineTo(q[0], q[1] + 4) : ctx.moveTo(q[0], q[1] + 4))); ctx.stroke(); ctx.strokeStyle = '#D8D2C6'; ctx.lineWidth = 12; ctx.beginPath(); pts.forEach((q, k) => (k ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]))); ctx.stroke(); ctx.strokeStyle = 'rgba(255,255,255,0.6)'; ctx.lineWidth = 3; ctx.beginPath(); pts.forEach((q, k) => (k ? ctx.lineTo(q[0] - 2, q[1] - 3) : ctx.moveTo(q[0] - 2, q[1] - 3))); ctx.stroke();
          const n = 7; for (let k = 0; k < n; k++) { const ph = MG.fract((t - D_.doesnt) * 0.7 + k / n + i * 0.13); const birth = D_.doesnt + (k / n + i * 0.13) / 0.7; const stopT = D_.subs + 0.5; const u = t < stopT ? ph : Math.min(1, ph + (t - stopT) * 0.7); if (t - birth < 0 && ph > (t - D_.doesnt + 0.0) * 0.7) continue; const alive = t < stopT || (ph < 1 && (t - stopT) * 0.7 + ph < 1); if (!alive) continue; const [qx, qy] = MG.path.along(pts, u); MG.kit.sun(ctx, qx, qy - 2, 6.5, t, { variant: 'coin', color: P.gold }); }
          ctx.restore(); }
      if (pA > 0) { const v = [R.Catalonia.cx - 10, R.Catalonia.cy + 40]; ctx.save(); ctx.translate(v[0], v[1]); ctx.globalAlpha = pA; ctx.fillStyle = 'rgba(40,20,30,0.3)'; ctx.beginPath(); ctx.arc(4, 6, 24, 0, MG.TAU); ctx.fill(); ctx.rotate(close * Math.PI * 1.5); ctx.strokeStyle = P.rojoDeep; ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(0, 0, 20, 0, MG.TAU); ctx.stroke(); for (let k = 0; k < 4; k++) { ctx.rotate(Math.PI / 2); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(20, 0); ctx.stroke(); } ctx.fillStyle = P.rojo; ctx.beginPath(); ctx.arc(0, 0, 6, 0, MG.TAU); ctx.fill(); ctx.restore(); }
      // labels
      const s0 = R.Andalusia; const la = prog(t, D_.south - 0.2, D_.south + 0.2); if (la > 0) MG.text.draw(ctx, 'POORER SOUTH', s0.cx + 40, s0.cy + 18, { font: MG.F.grotesk, size: 30, weight: 800, color: P.ink, align: 'center', tracking: 0.14, alpha: la, stroke: 'rgba(250,244,232,0.85)', strokeW: 7 });
    }
    ctx.restore();
    if (t > D_.every - 0.2) D_.seis(ctx, t, lerp(1120, 770, prog(t, D_.every - 0.2, D_.every + 0.5, 'out')), c);
    // the coin (screen space): big at first, then shrinks to the legend corner as the map takes over
    const k = prog(t, D_.gdp + 0.2, D_.doesnt + 0.2, 'inOutCubic'); const cx = lerp(960, 260, k), cy = lerp(520, 300, k), cr = lerp(300, 110, k); const rot = -Math.PI / 2 - MG.TAU / 10 + lerp(0.25, 0, prog(t, 1405.15, 1406.3, 'out'));
    const sp = prog(t, 1405.15, 1405.7, 'out'); const cw = lerp(0.15, 1, sp);
    if (k < 1 || true) { ctx.save(); ctx.translate(cx, cy); ctx.scale(cw, 1); ctx.translate(-cx, -cy); D_.coin(ctx, t, cx, cy, cr, rot); const out = prog(t, D_.fifth + 0.15, D_.fifth + 0.6, 'out'); const fly = prog(t, 1408.55, 1409.3, 'inOutCubic'); if (t > D_.fifth - 0.05 && fly < 1) { const am = rot + MG.TAU / 10; const wc = [cx + Math.cos(am) * cr * 0.5, cy + Math.sin(am) * cr * 0.5]; const tg = S9.toScreen(D_.cam(t), S9.REG.Catalonia.cx, S9.REG.Catalonia.cy); ctx.save(); ctx.globalAlpha *= 1 - MG.smoothstep(0.8, 1, fly); ctx.translate(lerp(wc[0], tg[0], fly), lerp(wc[1], tg[1], fly) - Math.sin(fly * Math.PI) * 120); ctx.scale(lerp(1, 0.28, fly) / cw, lerp(1, 0.28, fly)); ctx.rotate(fly * 0.8); ctx.translate(-wc[0], -wc[1]); const lab = D_.wedge(ctx, t, cx, cy, cr, rot, out); ctx.restore(); const la = prog(t, D_.fifth + 0.35, D_.fifth + 0.7) * (1 - prog(t, 1408.4, 1408.7)); if (la > 0) { const lab = [cx + Math.cos(rot + MG.TAU / 10) * cr * 0.9, cy + Math.sin(rot + MG.TAU / 10) * cr * 0.9 - 60]; ctx.save(); ctx.globalAlpha = la; MG.text.draw(ctx, '⅕', lab[0] + 150, lab[1] - 10, { font: MG.F.display, size: 150, weight: 800, color: P.ink }); S9.kick(ctx, "of Spain's GDP", lab[0] + 152, lab[1] + 30, t, D_.fifth + 0.4, { size: 22, color: P.ink }); S9.kick(ctx, 'Catalonia', lab[0] + 152, lab[1] + 60, t, D_.fifth + 0.5, { size: 22, color: P.rojo }); ctx.restore(); } } ctx.restore(); }
    const ra = prog(t, D_.rich - 0.1, D_.rich + 0.3) * (1 - prog(t, D_.fifth - 0.2, D_.fifth)); if (ra > 0) { ctx.save(); ctx.globalAlpha = ra; S9.word(ctx, 'one of the richest regions', 960, 960, t, D_.rich - 0.1, { font: MG.F.serif, italic: true, weight: 400, size: 64, align: 'center', color: P.ink }); ctx.restore(); }
    // legend
    const lg = prog(t, D_.doesnt, D_.doesnt + 0.4) * (1 - prog(t, D_.every, D_.every + 0.4)); if (lg > 0) { ctx.save(); ctx.globalAlpha = lg; const x = 1480, y = 170; S9.kick(ctx, 'GDP per person', x, y, t, D_.doesnt, { size: 22, color: P.ink }); ['higher', 'middle', 'lower'].forEach((l, i) => { ctx.fillStyle = D_.CC[2 - i]; ctx.fillRect(x, y + 22 + i * 40, 46, 28); ctx.strokeStyle = 'rgba(40,26,36,0.5)'; ctx.strokeRect(x, y + 22 + i * 40, 46, 28); S9.kick(ctx, l, x + 60, y + 44 + i * 40, t, D_.doesnt + 0.1 * i, { size: 20, color: P.ink2 }); }); ctx.restore(); }
  };

  // ---------------- Chapter E: the political picture (1416.08 → 1449.76) ----------------
  const E_ = {};
  E_.but = TW('But', 1416.08); E_.picture = TW('picture', 1418.08); E_.forty = TW('forty', 1419.44); E_.soc = TW('Socialists', 1423.92); E_.pp = TW('People’s', 1425.68);
  E_.fam = TW('familiar', 1427.08); E_.brit = TW('Britain', 1428.68); E_.us = TW('United', 1429.32);
  E_.then = TW('Then', 1430.88); E_.y2008 = TW('2008', 1431.68); E_.mill = TW('Millions', 1433.68); E_.jobs = TW('jobs', 1434.88); E_.young = TW('Young', 1435.68); E_.squares = TW('squares', 1436.76);
  E_.newp = TW('New', 1437.88); E_.emerge = TW('emerge', 1438.52); E_.breaks = TW('breaks', 1441.48); E_.result = TW('result', 1442.72);
  E_.four = TW('Four', 1443.8); E_.nobody = TW('nobody', 1447.6); E_.gov = TW('government', 1449.24);
  E_.ERAS = [[1977, 1982, 'ucd'], [1982, 1996, 'psoe'], [1996, 2004, 'pp'], [2004, 2011, 'psoe'], [2011, 2018, 'pp']];
  E_.year = (t) => lerp(1977, 2018, prog(t, E_.forty - 0.05, 1423.5, 'linear'));
  E_.resAt = (y) => (y < 1982 ? 1977 : y < 1996 ? 1982 : y < 2004 ? 1996 : y < 2008 ? 2004 : y < 2011 ? 2008 : 2011);
  E_.flipT = { 1982: 0, 1996: 0, 2004: 0, 2008: 0, 2011: 0 };
  E_.drawCongress1 = function (ctx, t) {
    S9.backdrop(ctx, '#E3D5BB'); const ch = S9.chamber('congreso');
    const pull = prog(t, 1416.1, E_.picture + 0.6, 'cam'); const settle = prog(t, 1423.4, 1427.2, 'inOutSine');
    const catPt = S9.blockPt('congreso', ['erc', 'junts'], S9.RES[2023]);
    const cam = { pos: [lerp(catPt[0] + 0.6, 0, pull) + Math.sin(t * 0.2) * 0.3 * settle, lerp(2.2, 12.8, pull) - settle * 0.8, lerp(catPt[2] + 2.6, 15.5, pull) - settle * 0.6], look: [lerp(catPt[0], 0, pull), lerp(0.4, 0.8, pull), lerp(catPt[2], -3.4, pull)], fov: lerp(30, 36, pull) };
    const y = E_.year(t); const hist = t > E_.forty - 0.1; const curRes = t > E_.soc - 0.2 ? 2008 : E_.resAt(y);
    const a23 = S9.assign(ch.seats, S9.RES[2023]); const asg = {}; for (const k of [1977, 1982, 1996, 2004, 2008, 2011]) asg[k] = S9.assign(ch.seats, S9.RES[k]);
    // time at which each result became current (for the flip wave)
    const startYear = { 1977: 1977, 1982: 1982, 1996: 1996, 2004: 2004, 2008: 2008, 2011: 2011 }; const yearT = (yr) => lerp(E_.forty - 0.05, 1423.5, (yr - 1977) / 41);
    S9.chamberDraw(ctx, 'congreso', { cam, seat: (i, s) => {
      if (!hist) { const k = a23[i]; const cat = k === 'erc' || k === 'junts'; const dimK = prog(t, 1416.6, 1418.4, 'inOutSine'); return { color: cat ? MG.col.mix(S9.PC[k], S9.PC.dim, dimK * 0.85) : MG.col.mix(MG.col.mix(S9.PC[k], S9.PC.dim, 0.55), S9.PC.dim, dimK) }; }
      const k = asg[curRes][i]; const t0 = curRes === 2008 ? E_.soc - 0.2 : yearT(startYear[curRes]); const w = clamp((t - t0 - (1 - s.a / Math.PI) * 0.35) / 0.22); const prevRes = { 1977: null, 1982: 1977, 1996: 1982, 2004: 1996, 2008: 2004, 2011: 2004 }[curRes];
      const pk = prevRes ? asg[prevRes][i] : null; const col = w < 0.5 && pk ? S9.PC[pk] : S9.PC[k]; const intro = prog(t, E_.forty - 0.1, E_.forty + 0.4);
      return { color: MG.col.mix(S9.PC.dim, col, intro), rx: Math.sin(w * Math.PI) * 1.2, dy: Math.sin(w * Math.PI) * 0.15 }; },
      text: { key: 'cong', draw: (x, w, h) => { MG.text.draw(x, 'CONGRESO', w / 2, 150, { font: MG.F.display, size: 130, weight: 800, color: 'rgba(250,240,220,0.85)', align: 'center', tracking: 0.08 }); MG.text.draw(x, '350 SEATS', w / 2, 222, { font: MG.F.mono, size: 40, weight: 700, color: 'rgba(250,240,220,0.75)', align: 'center', tracking: 0.3 }); }, alpha: prog(t, 1417.4, 1418.4) } });
    // label for the opening beat
    const pa = prog(t, E_.picture - 0.2, E_.picture + 0.2) * (1 - prog(t, E_.forty - 0.3, E_.forty)); if (pa > 0) { ctx.save(); ctx.globalAlpha = pa; S9.kick(ctx, 'Congress of Deputies · Madrid', 150, 990, t, E_.picture - 0.2, { size: 24, color: P.ink }); ctx.restore(); }
    // the sun pendulum
    const pA = prog(t, E_.forty - 0.35, E_.forty + 0.1); if (pA > 0) {
      const target = (tt) => { const yy = E_.year(tt); const era = E_.ERAS.find((e) => yy >= e[0] && yy < e[1]) || E_.ERAS[4]; const base = era[2] === 'psoe' ? -0.42 : era[2] === 'pp' ? 0.42 : 0; return tt > 1423.6 ? Math.sin((tt - 1423.6) * 2.2) * 0.3 * Math.exp(-(tt - 1423.6) * 0.15) : base; };
      const ang = MG.follow('s9pend', target, t, E_.forty - 0.4, 60, 3.2); const px = 960, py = -60, L = 520; const bx = px + Math.sin(ang) * L, by = py + Math.cos(ang) * L;
      ctx.save(); ctx.globalAlpha = pA; ctx.strokeStyle = '#6B5A3A'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(bx, by); ctx.stroke(); ctx.strokeStyle = 'rgba(255,240,200,0.6)'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(px - 1.5, py); ctx.lineTo(bx - 1.5, by); ctx.stroke();
      MG.fx.contact(ctx, bx + 40, by + 70, 60, 14, 0.15); MG.kit.sun(ctx, bx, by, 46, t, { corona: 0.35, rays: 0.25 }); ctx.restore();
      // era ribbon
      const x0 = 260, x1 = 1660, ry = 1000; const yy = E_.year(t); const u = (yy - 1977) / 41; ctx.save(); ctx.globalAlpha = pA * (1 - prog(t, E_.soc - 0.3, E_.soc + 0.2) * 0.0);
      ctx.fillStyle = 'rgba(250,244,232,0.85)'; ctx.fillRect(x0 - 20, ry - 46, x1 - x0 + 40, 96);
      for (const [a, b, k] of E_.ERAS) { const ua = (a - 1977) / 41, ub = (b - 1977) / 41; if (ua > u) break; ctx.fillStyle = S9.PC[k]; ctx.fillRect(lerp(x0, x1, ua), ry - 14, (Math.min(ub, u) - ua) * (x1 - x0), 22); }
      for (const yr of [1977, 1982, 1996, 2004, 2011, 2018]) { const uu = (yr - 1977) / 41; if (uu > u + 0.001) continue; MG.text.draw(ctx, String(yr), lerp(x0, x1, uu), ry + 38, { font: MG.F.mono, size: 20, weight: 700, color: P.ink2, align: 'center' }); }
      const names = [[1982, 1996, 'PSOE'], [1996, 2004, 'PP'], [2004, 2011, 'PSOE'], [2011, 2018, 'PP']]; for (const [a, b, n] of names) { if ((a + 1 - 1977) / 41 > u) continue; MG.text.draw(ctx, n, lerp(x0, x1, ((a + b) / 2 - 1977) / 41), ry - 22, { font: MG.F.grotesk, size: 20, weight: 800, color: P.ink, align: 'center', tracking: 0.1 }); }
      ctx.fillStyle = P.ink; ctx.fillRect(lerp(x0, x1, u) - 1.5, ry - 30, 3, 50); ctx.restore(); }
    // labels: PSOE / PP (2008 chamber)
    const lab = (parties, txt, sub, t0, off) => { const a = prog(t, t0 - 0.1, t0 + 0.3); if (a <= 0) return; const p3 = S9.blockPt('congreso', parties, S9.RES[2008]); const sp = S9.chamberPt('congreso', p3); ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = P.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(sp[0], sp[1]); ctx.lineTo(sp[0] + off, sp[1] - 150); ctx.stroke(); ctx.fillStyle = P.ink; ctx.beginPath(); ctx.arc(sp[0], sp[1], 6, 0, MG.TAU); ctx.fill(); MG.text.draw(ctx, txt, sp[0] + off, sp[1] - 166, { font: MG.F.grotesk, size: 48, weight: 800, color: S9.PC[parties[0]], align: 'center', stroke: 'rgba(250,244,232,0.9)', strokeW: 9 }); S9.kick(ctx, sub, sp[0] + off, sp[1] - 222, t, t0, { size: 20, color: P.ink, align: 'center', stroke: 'rgba(250,244,232,0.9)', strokeW: 6 }); ctx.restore(); };
    lab(['psoe'], 'PSOE', 'the Socialists', E_.soc, -120); lab(['pp'], 'PP', "People's Party", E_.pp, 120);
  };
  // 2D seat diagrams: Spain / Britain / US
  E_.dots = (ctx, pts, colors, r, t, t0) => { for (let i = 0; i < pts.length; i++) { const k = prog(t, t0 + (i / pts.length) * 0.5, t0 + (i / pts.length) * 0.5 + 0.25, 'out'); if (k <= 0) continue; ctx.fillStyle = colors[i]; ctx.beginPath(); ctx.arc(pts[i][0], pts[i][1], r * k, 0, MG.TAU); ctx.fill(); } };
  E_.hemi2d = (cx, cy, N, rows, R0, dR) => { const seats = S9.layout(N, rows, R0, dR, 0); return seats.map((s) => [cx + s.x, cy + s.z]); };
  E_.drawFamiliar = function (ctx, t) {
    MG.kit.paper(ctx, '#EFE6D3', { light: 0.3 }); const sh = MG.cam.handheld(t, 2, 81); ctx.save(); ctx.translate(sh.dx, sh.dy);
    const cards = [[330, 'SPAIN', E_.fam - 0.4, 'Spain'], [960, 'BRITAIN', E_.brit - 0.15, 'United Kingdom'], [1590, 'UNITED STATES', E_.us - 0.15, 'USA']];
    for (const [cx, name, t0, geo] of cards) { const k = prog(t, t0, t0 + 0.5, 'out'); if (k <= 0) continue; ctx.save(); ctx.globalAlpha = k; ctx.translate(0, (1 - k) * 40);
      const card = MG.path.rr(cx - 270, 250, 540, 600, 10); MG.fx.shadow(ctx, card, { dx: 10, dy: 18, blur: 26, color: 'rgba(40,20,20,0.25)' }); ctx.fillStyle = '#FBF7EE'; ctx.fill(card); ctx.save(); ctx.clip(card); MG.tex.over(ctx, 'fibers', { alpha: 0.6 }); ctx.restore();
      // silhouette
      const f = MG.geo.country(geo, '50'); let pr; if (geo === 'USA') pr = window.d3.geoAlbersUsa(); else pr = MG.geo.proj('conic', { center: window.d3.geoCentroid(f), scale: 1 }); pr.fitExtent([[cx - 110, 290], [cx + 110, 450]], f); MG.geo.draw(ctx, pr, f, { fill: '#D8CBB0', stroke: 'rgba(40,26,36,0.5)', width: 1 });
      MG.text.draw(ctx, name, cx, 800, { font: MG.F.grotesk, size: 36, weight: 800, color: P.ink, align: 'center', tracking: 0.1 });
      ctx.restore(); }
    // diagrams
    const sp = prog(t, E_.fam - 0.4, E_.fam + 0.1); if (sp > 0) { const pts = E_.hemi2d(330, 700, 350, 10, 90, 15); const as = S9.assign(S9.layout(350, 10, 90, 15, 0), S9.RES[2008]); E_.dots(ctx, pts, as.map((k) => S9.PC[k]), 5, t, E_.fam - 0.4); MG.text.draw(ctx, 'PSOE · PP', 330, 760, { font: MG.F.mono, size: 18, weight: 700, color: P.ink2, align: 'center', tracking: 0.12 }); }
    { const t0 = E_.brit - 0.1; const pts = [], cols = []; for (let side = 0; side < 2; side++) for (let rr = 0; rr < 5; rr++) for (let i = 0; i < 26; i++) { pts.push([960 - 190 + i * 15, side ? 565 + rr * 15 : 655 - rr * 15 + 70]); cols.push(side ? P.psoe : P.pp); } if (t > t0) { E_.dots(ctx, pts, cols, 5, t, t0); MG.text.draw(ctx, 'LABOUR · CONSERVATIVES', 960, 790 - 30, { font: MG.F.mono, size: 18, weight: 700, color: P.ink2, align: 'center', tracking: 0.12, alpha: prog(t, t0 + 0.3, t0 + 0.6) }); } }
    { const t0 = E_.us - 0.1; const pts = E_.hemi2d(1590, 700, 435, 11, 80, 14); const cols = pts.map((_, i) => (i < 215 ? P.pp : P.psoe)); if (t > t0) { E_.dots(ctx, pts, cols, 4.5, t, t0); MG.text.draw(ctx, 'DEMOCRATS · REPUBLICANS', 1590, 760, { font: MG.F.mono, size: 18, weight: 700, color: P.ink2, align: 'center', tracking: 0.12, alpha: prog(t, t0 + 0.3, t0 + 0.6) }); } }
    S9.word(ctx, 'two parties, taking turns', 960, 170, t, E_.fam, { font: MG.F.serif, italic: true, weight: 400, size: 60, align: 'center', color: P.ink });
    ctx.restore();
  };
  // newspaper 2008 → Puerta del Sol
  E_.paper = () => MG.cache('s9news', 1700, 1100, (x, w, h) => {
    x.fillStyle = '#F1EBDD'; x.fillRect(0, 0, w, h); MG.tex.over(x, 'fibers', { alpha: 0.8 }); MG.tex.over(x, 'blotch', { alpha: 0.1, color: '#6a5a3a', scale: 3 });
    const ink = '#1C1A1C'; MG.text.draw(x, 'LA CRÓNICA', w / 2, 120, { font: MG.F.news, size: 110, color: ink, align: 'center' }); x.fillStyle = ink; x.fillRect(60, 146, w - 120, 4); x.fillRect(60, 196, w - 120, 2);
    MG.text.draw(x, 'MADRID', 70, 182, { font: MG.F.mono, size: 22, weight: 700, color: ink, tracking: 0.2 }); MG.text.draw(x, '2008', w - 70, 182, { font: MG.F.mono, size: 22, weight: 700, color: ink, align: 'right', tracking: 0.2 });
    MG.text.draw(x, 'THE CRASH', 70, 330, { font: MG.F.news, size: 150, color: ink });
    MG.text.draw(x, 'The boom is over: banks, builders and jobs go under', 72, 390, { font: MG.F.display, size: 34, weight: 400, italic: true, color: ink });
    x.fillStyle = 'rgba(28,26,28,0.55)'; for (let c = 0; c < 2; c++) for (let l = 0; l < 22; l++) x.fillRect(70 + c * 380, 440 + l * 26, 340 - (l % 4) * 18, 6);
    // chart frame
    x.strokeStyle = ink; x.lineWidth = 2; x.strokeRect(850, 430, 780, 300); MG.text.draw(x, 'UNEMPLOYED', 870, 470, { font: MG.F.mono, size: 20, weight: 700, color: ink, tracking: 0.2 });
    // photo frame (Puerta del Sol, halftone)
    x.strokeRect(850, 760, 780, 300);
  });
  E_.PHOTO = [850, 760, 780, 300]; E_.CHART = [850, 430, 780, 300];
  E_.UNEMP = [[2007, 1.83], [2008, 2.59], [2009, 4.15], [2010, 4.63], [2011, 5.01], [2012, 5.81], [2013, 6.28]];
  E_.plaza = (ctx, t, X, Y, W, H, live) => { // Puerta del Sol plan (top-down) inside a rect; live 0..1 animates the crowd
    ctx.save(); ctx.beginPath(); ctx.rect(X, Y, W, H); ctx.clip(); ctx.fillStyle = '#CFC3AE'; ctx.fillRect(X, Y, W, H);
    const cx = X + W / 2, cy = Y + H * 0.62, R = W * 0.36;
    const blocks = ['#B49E86', '#A89078', '#BBA58A']; const r = MG.rng(15); for (let i = 0; i < 22; i++) { const a = Math.PI + (i / 22) * Math.PI; const bx = cx + Math.cos(a) * R * 1.35, by = cy + Math.sin(a) * R * 1.15; ctx.save(); ctx.translate(bx, by); ctx.rotate(a + Math.PI / 2); ctx.fillStyle = blocks[i % 3]; ctx.fillRect(-W * 0.05, -H * 0.12, W * 0.085, H * 0.22); ctx.restore(); }
    ctx.fillStyle = '#B9A68E'; ctx.fillRect(cx - W * 0.2, cy + H * 0.06, W * 0.4, H * 0.3); // Casa de Correos
    MG.kit.sun(ctx, cx, cy + H * 0.12, Math.max(4, H * 0.05), t, { variant: 'clock', hour: 20.3, corona: 0, halftone: 0 });
    ctx.fillStyle = '#E2D7C2'; ctx.beginPath(); ctx.ellipse(cx, cy, R, R * 0.62, 0, Math.PI, 0); ctx.closePath(); ctx.fill();
    // crowd
    const n = 1400; const rr = MG.rng(2011); const fill = live; ctx.fillStyle = '#2C2630';
    for (let i = 0; i < n; i++) { const a = Math.PI + rr() * Math.PI, d = Math.sqrt(rr()); const tx = cx + Math.cos(a) * R * d * 0.98, ty = cy + Math.sin(a) * R * 0.6 * d; const st = rr(); const arr = clamp((fill * 1.3 - st * 0.9) / 0.4); if (arr <= 0) continue; const sa = Math.PI + Math.floor(rr() * 8) / 7 * Math.PI; const sx = cx + Math.cos(sa) * R * 1.7, sy = cy + Math.sin(sa) * R * 1.4; const e = MG.ease.outCubic(arr); const px = lerp(sx, tx, e), py = lerp(sy, ty, e); const c = rr(); ctx.fillStyle = c < 0.07 ? '#6E4A7E' : c < 0.12 ? '#E07B39' : c < 0.5 ? '#2C2630' : '#4a3a44'; ctx.fillRect(px - 2.2, py - 2.2, 4.4, 4.4); }
    // tents
    for (let i = 0; i < 18; i++) { const a = Math.PI + MG.rand(31, i) * Math.PI, d = 0.3 + MG.rand(32, i) * 0.55; const tx = cx + Math.cos(a) * R * d, ty = cy + Math.sin(a) * R * 0.6 * d; const k = clamp((fill - 0.4 - MG.rand(33, i) * 0.4) / 0.2); if (k <= 0) continue; ctx.fillStyle = ['#E9E2D0', P.azulejo, P.sol][i % 3]; ctx.beginPath(); ctx.moveTo(tx - 9 * k, ty + 6); ctx.lineTo(tx, ty - 8 * k); ctx.lineTo(tx + 9 * k, ty + 6); ctx.closePath(); ctx.fill(); }
    ctx.restore(); };
  E_.drawNews = function (ctx, t) {
    // desk
    ctx.drawImage(A_.desk(), 0, 0, 1920, 1080);
    const push = prog(t, E_.young - 0.3, E_.young + 0.7, 'inOutCubic'); const [px, py, pw, ph] = E_.PHOTO;
    const sh = MG.cam.handheld(t, 2.5, 91); const z0 = 1.02 + prog(t, 1430.9, E_.young, 'inOutSine') * 0.05;
    const targetZ = 1920 / pw * 1.02; const z = Math.exp(lerp(Math.log(z0), Math.log(targetZ), push));
    const fx = lerp(850, px + pw / 2, push), fy = lerp(560, py + ph / 2, push);
    ctx.save(); ctx.translate(960 + sh.dx, 540 + sh.dy); ctx.scale(z * 0.9, z * 0.9); ctx.rotate(lerp(-0.025, 0, push)); ctx.translate(-fx, -fy);
    const card = MG.path.rr(0, 0, 1700, 1100, 2); MG.fx.shadow(ctx, card, { dx: 16, dy: 26, blur: 40, color: 'rgba(20,10,10,0.45)' }); ctx.drawImage(E_.paper(), 0, 0);
    // unemployment line (draws on "millions")
    const [cx0, cy0, cw, chh] = E_.CHART; const lp = prog(t, E_.mill - 0.2, E_.jobs + 0.4, 'inOutSine'); const pts = E_.UNEMP.map(([y, v]) => [cx0 + 50 + (y - 2007) / 6 * (cw - 120), cy0 + chh - 40 - (v / 7) * (chh - 90)]);
    ctx.strokeStyle = 'rgba(28,26,28,0.25)'; ctx.lineWidth = 1; for (let v = 0; v <= 6; v += 2) { const yy = cy0 + chh - 40 - (v / 7) * (chh - 90); ctx.beginPath(); ctx.moveTo(cx0 + 40, yy); ctx.lineTo(cx0 + cw - 60, yy); ctx.stroke(); }
    E_.UNEMP.forEach(([y], i) => { if (i % 2 === 0) MG.text.draw(ctx, String(y), pts[i][0], cy0 + chh - 12, { font: MG.F.mono, size: 16, weight: 700, color: 'rgba(28,26,28,0.7)', align: 'center' }); });
    MG.fx.line(ctx, MG.path.spline(pts, 8), { progress: lp, color: P.rojo, width: 6, head: 7 });
    if (lp > 0.95) { MG.text.draw(ctx, '6 MILLION+', pts[6][0] - 12, pts[6][1] + 52, { font: MG.F.cond, size: 58, weight: 900, color: P.rojo, align: 'right', alpha: prog(t, E_.jobs + 0.3, E_.jobs + 0.6) }); MG.text.draw(ctx, 'UNEMPLOYED, 2013', pts[6][0] - 12, pts[6][1] + 78, { font: MG.F.mono, size: 16, weight: 700, color: P.ink, align: 'right', alpha: prog(t, E_.jobs + 0.3, E_.jobs + 0.6) }); }
    // the photo: halftone print that comes alive
    const live = prog(t, E_.young, E_.squares + 0.9, 'inOutSine'); E_.plaza(ctx, t, px, py, pw, ph, 0.55 + live * 0.45);
    ctx.save(); ctx.globalAlpha = 1 - push; ctx.beginPath(); ctx.rect(px, py, pw, ph); ctx.clip(); MG.tex.over(ctx, 'halftone', { alpha: 0.35, spacing: 6, radius: 2, color: '#000' }); ctx.globalCompositeOperation = 'saturation'; ctx.fillStyle = '#888'; ctx.fillRect(px, py, pw, ph); ctx.restore();
    ctx.restore();
    const la = prog(t, E_.squares - 0.2, E_.squares + 0.2); if (la > 0) { ctx.save(); ctx.globalAlpha = la; S9.kick(ctx, 'Puerta del Sol · Madrid · May 2011', 150, 990, t, E_.squares - 0.2, { size: 24, color: P.cal, stroke: 'rgba(20,10,10,0.6)', strokeW: 6 }); S9.word(ctx, '15-M', 150, 930, t, E_.squares - 0.1, { font: MG.F.marker, size: 80, weight: 400, color: P.cal, shadow: { color: 'rgba(0,0,0,0.4)', blur: 12, dy: 6 } }); ctx.restore(); }
  };
  // new parties rise into the chamber, two-party system breaks
  E_.drawBreak = function (ctx, t) {
    S9.backdrop(ctx, '#E3D5BB'); const ch = S9.chamber('congreso'); const a11 = S9.assign(ch.seats, S9.RES[2011]), a15 = S9.assign(ch.seats, S9.RES[2015]);
    const camT = prog(t, 1437.85, 1443.7, 'inOutSine'); const cam = { pos: [lerp(-1.5, 1.0, camT), lerp(14.5, 12.0, camT), lerp(14.0, 13.0, camT)], look: [0, 0.3, -3.3], fov: 36 };
    const land = (i, s) => E_.emerge - 0.2 + (1 - s.a / Math.PI) * 1.2 + MG.rand(77, i) * 0.4;
    const brk = prog(t, E_.breaks - 0.2, E_.breaks + 0.5, 'out');
    const groupDir = (k) => { const order = ['up', 'oth', 'erc', 'bildu', 'psoe', 'pnv', 'junts', 'cc', 'cs', 'pp']; return order.indexOf(k); };
    S9.chamberDraw(ctx, 'congreso', { cam, seat: (i, s) => { const lt = land(i, s); const k = t >= lt ? a15[i] : a11[i]; const jump = MG.jiggle(t, lt, 0.12, 3, 7); const g = groupDir(a15[i]); const spread = brk * (g - 4.5) * 0.07; const shake = brk * (1 - prog(t, E_.breaks + 0.3, E_.breaks + 1.2)) * MG.noise2(i * 0.3, t * 14) * 0.05;
      return { color: S9.PC[k], dy: Math.abs(jump) + shake, dx: Math.cos(s.a) * Math.abs(spread) * 1.2 + spread * 0.6, dz: -Math.sin(s.a) * Math.abs(spread) * 1.2 }; } });
    // labels for the new parties
    const lab = (parties, txt, t0, off) => { const a = prog(t, t0 - 0.1, t0 + 0.3) * (1 - prog(t, E_.result - 0.3, E_.result)); if (a <= 0) return; const sp = S9.chamberPt('congreso', S9.blockPt('congreso', parties, S9.RES[2015])); ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = P.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(sp[0], sp[1]); ctx.lineTo(sp[0] + off, sp[1] - 130); ctx.stroke(); MG.text.draw(ctx, txt, sp[0] + off, sp[1] - 146, { font: MG.F.grotesk, size: 40, weight: 800, color: S9.PC[parties[0]], align: 'center', stroke: 'rgba(250,244,232,0.9)', strokeW: 8 }); ctx.restore(); };
    lab(['up'], 'PODEMOS', E_.emerge + 0.1, -60); lab(['cs'], 'CIUDADANOS', E_.emerge + 0.6, 80);
    S9.kick(ctx, '2015', 150, 990, t, E_.emerge, { size: 26, color: P.ink });
    const q = prog(t, E_.result - 0.1, E_.result + 0.3); if (q > 0) { ctx.save(); ctx.globalAlpha = q; S9.word(ctx, 'The result?', 960, 190, t, E_.result - 0.1, { font: MG.F.serif, italic: true, weight: 400, size: 80, align: 'center', color: P.ink }); ctx.restore(); }
  };
  // four elections as printed seat strips, 176 never reached
  E_.STRIPS = [['20·12·2015', 2015], ['26·06·2016', 2016], ['28·04·2019', 20194], ['10·11·2019', 201911]];
  E_.drawFour = function (ctx, t) {
    MG.kit.paper(ctx, '#EDE3CF', { light: 0.3 }); const sh = MG.cam.handheld(t, 2, 95); const push = prog(t, 1443.7, 1450.2, 'inOutSine');
    ctx.save(); ctx.translate(960 + sh.dx, 540 + sh.dy); ctx.scale(1 + push * 0.05, 1 + push * 0.05); ctx.translate(-960, -540);
    const X0 = 420, W = 1320, sc = W / 350; const tD = [E_.four + 0.05, E_.four + 0.7, E_.four + 1.35, E_.four + 2.0];
    E_.STRIPS.forEach(([date, key], i) => { const k = prog(t, tD[i] - 0.25, tD[i] + 0.15, 'inQuad'); if (k <= 0) return; const y = 300 + i * 150; const drop = (1 - k) * -120; const rot = (1 - k) * (i % 2 ? 0.05 : -0.05) + (i - 1.5) * 0.004;
      ctx.save(); ctx.translate(960, y + drop); ctx.rotate(rot); ctx.scale(1 + (1 - k) * 0.06, 1 + (1 - k) * 0.06); ctx.translate(-960, -y);
      const strip = MG.path.torn(X0 - 300, y - 52, W + 330, 104, { seed: 40 + i, amp: 2, edges: 'lr' }); MG.fx.shadow(ctx, strip, { dx: 8, dy: 12 + (1 - k) * 30, blur: 18 + (1 - k) * 20, color: 'rgba(40,20,20,0.3)' }); ctx.fillStyle = '#FBF7EE'; ctx.fill(strip); ctx.save(); ctx.clip(strip); MG.tex.over(ctx, 'fibers', { alpha: 0.6 }); ctx.restore();
      MG.text.draw(ctx, date, X0 - 270, y + 10, { font: MG.F.mono, size: 26, weight: 700, color: P.ink, tracking: 0.06 });
      const res = S9.RES[key].slice().sort((a, b) => b[1] - a[1]); let x = X0; res.forEach(([p, n], j) => { ctx.fillStyle = S9.PC[p]; ctx.fillRect(x, y - 30, n * sc - 1.5, 60); if (j === 0) { ctx.save(); ctx.fillStyle = 'rgba(255,255,255,0.18)'; ctx.fillRect(x, y - 30, n * sc - 1.5, 10); ctx.restore(); MG.text.draw(ctx, `${p.toUpperCase()} ${n}`, x + 14, y + 12, { font: MG.F.grotesk, size: 30, weight: 800, color: '#FBF7EE', tracking: 0.04 }); } x += n * sc; });
      ctx.restore(); });
    // majority line
    const ml = prog(t, E_.nobody - 0.4, E_.nobody + 0.3, 'out'); if (ml > 0) { const xm = X0 + 176 * sc; ctx.save(); ctx.strokeStyle = P.ink; ctx.lineWidth = 3; ctx.setLineDash([10, 8]); ctx.beginPath(); ctx.moveTo(xm, 210); ctx.lineTo(xm, 210 + 660 * ml); ctx.stroke(); ctx.setLineDash([]); MG.text.draw(ctx, '176', xm, 190, { font: MG.F.cond, size: 54, weight: 900, color: P.ink, align: 'center', alpha: ml }); S9.kick(ctx, 'majority', xm, 150, t, E_.nobody - 0.2, { size: 18, align: 'center', color: P.ink2 });
      E_.STRIPS.forEach(([d, key], i) => { const res = S9.RES[key].slice().sort((a, b) => b[1] - a[1]); const n = res[0][1]; const y = 300 + i * 150; const gk = prog(t, E_.nobody + 0.1 + i * 0.15, E_.nobody + 0.5 + i * 0.15, 'out'); if (gk <= 0) return; const xa = X0 + n * sc, xb = X0 + 176 * sc; ctx.fillStyle = MG.col.a(P.rojo, 0.2); ctx.fillRect(xa, y - 42, (xb - xa) * gk, 84); ctx.strokeStyle = P.rojo; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(xa, y - 42); ctx.lineTo(xa, y + 42); ctx.stroke(); MG.text.draw(ctx, `−${176 - n}`, (xa + xb) / 2, y - 50, { font: MG.F.cond, size: 34, weight: 900, color: P.rojo, align: 'center', alpha: gk }); }); ctx.restore(); }
    ctx.restore();
    S9.kick(ctx, '4 elections in 4 years', 150, 140, t, E_.four - 0.05, { size: 26, color: P.ink });
  };

  // ---------------- Chapter F: Sánchez, the coalition, the price, the budget (1449.76 → 1470.0) ----------------
  const F_ = {};
  F_.pedro = TW('Pedro', 1449.76); F_.pm = TW('prime', 1450.88); F_.held = TW('held', 1452.96); F_.coal = TW('coalition', 1453.76); F_.half = TW('half', 1454.64); F_.cat = TW('Catalan', 1456.74); F_.bas = TW('Basque', 1457.56);
  F_.every = TW('Every', 1459.12); F_.price = TW('price', 1460.76); F_.amn = TW('amnesty', 1461.44); F_.tax = TW('tax', 1462.52); F_.reg = TW('regional', 1464.0);
  F_.country = TW('country', 1465.64); F_.budget = TW('budget', 1467.47); F_.y2023 = TW('2023', 1468.12);
  F_.bokeh = () => MG.cache('s9bokeh', 1920, 1080, (x) => { const c = MG.canvas(1920, 1080); const cx = c.getContext('2d'); S9.backdrop(cx, '#D8C8AA'); const ch = S9.chamber('congreso'); const as = S9.assign(ch.seats, S9.RES[2023]); S9.chamberDraw(cx, 'congreso', { cam: { pos: [0, 1.6, 1.2], look: [0, 1.1, -6], fov: 40 }, seat: (i) => ({ color: MG.col.mix(S9.PC[as[i]], '#8a3a30', 0.35) }), slot: 3 }); x.filter = 'blur(14px)'; x.drawImage(c, 0, 0); x.filter = 'none'; x.fillStyle = 'rgba(60,20,20,0.18)'; x.fillRect(0, 0, 1920, 1080); });
  F_.drawSanchez = function (ctx, t) {
    const tw = MG.kit.twos(t); const push = prog(t, 1449.76, 1453.2, 'inOutSine'); const sh = MG.cam.handheld(t, 3, 101);
    ctx.save(); ctx.translate(960 + sh.dx * 0.5, 540 + sh.dy * 0.5); ctx.scale(1.04 + push * 0.04, 1.04 + push * 0.04); ctx.translate(-960 - push * 20, -540); ctx.drawImage(F_.bokeh(), 0, 0); ctx.restore();
    ctx.save(); ctx.translate(960 + sh.dx, 540 + sh.dy); const z = 1 + push * 0.07; ctx.scale(z, z); ctx.translate(-960, -540);
    MG.fx.glow(ctx, 760, 300, 900, '#FFE2B0', 0.18);
    const gest = prog(tw, F_.pm - 0.2, F_.pm + 0.25, 'out') * (1 - prog(tw, F_.held - 0.3, F_.held + 0.1, 'in')); const nod = Math.sin(tw * 2.2) * 0.012 + gest * 0.02;
    S9.person(ctx, 960, 1460, 1.92, { skin: '#D6A27E', top: '#232B45', suit: '#232B45', shirt: '#F3F0EA', tie: '#5A1F24', bottom: '#232B45', hair: 'swept', hairC: '#2A2220', browC: '#1E1816', jaw: 22, w: 1.02, iris: '#3A2A1E' }, { arms: 'down', tilt: nod, turn: lerp(-0.2, 0.3, gest), look: [lerp(-0.3, 0.1, gest), 0], blink: MG.kit.blink(t, 13), brow: 0.25 + gest * 0.3, browTilt: -0.1, mood: 'smile', open: gest * 0.2 });
    // lectern (tribune) with microphones and nameplate
    const lec = MG.path.poly([[620, 860], [1300, 860], [1360, 1090], [560, 1090]]); MG.fx.volume(ctx, lec, [560, 860, 800, 230], { color: '#8A5A3A', shade: 0.35, hi: 0.3, outline: '#3a2014', outlineW: 3, tex: 'fibers', texAlpha: 0.5 });
    ctx.fillStyle = '#A97A52'; ctx.fillRect(600, 846, 720, 22); ctx.fillStyle = 'rgba(255,230,190,0.4)'; ctx.fillRect(600, 846, 720, 4);
    for (const mx of [880, 1040]) { ctx.strokeStyle = '#1E1C20'; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(mx, 850); ctx.quadraticCurveTo(mx + (mx < 960 ? 10 : -10), 760, mx + (mx < 960 ? 30 : -30), 720); ctx.stroke(); ctx.fillStyle = '#26242A'; ctx.beginPath(); ctx.ellipse(mx + (mx < 960 ? 34 : -34), 712, 12, 16, 0.3, 0, MG.TAU); ctx.fill(); }
    // hands on the lectern edge + gesturing right hand
    MG.kit.hand(ctx, 720, 850, { pose: 'fist', angle: -0.3, s: 1.8, skin: '#D6A27E' });
    if (gest > 0.02) MG.kit.hand(ctx, lerp(1200, 1260, gest), lerp(860, 640, gest), { pose: 'open', angle: Math.PI + lerp(0.4, -0.1, gest), s: 1.9, skin: '#D6A27E', flip: true }); else MG.kit.hand(ctx, 1200, 850, { pose: 'fist', angle: 0.3, s: 1.8, skin: '#D6A27E', flip: true });
    const plate = MG.path.rr(760, 930, 400, 110, 8); ctx.fillStyle = '#C9A04A'; ctx.fill(plate); ctx.strokeStyle = '#6a4a1a'; ctx.lineWidth = 3; ctx.stroke(plate); ctx.fillStyle = 'rgba(255,245,210,0.35)'; ctx.fillRect(770, 936, 380, 10);
    MG.text.reveal(ctx, 'PEDRO SÁNCHEZ', 960, 985, t, F_.pedro - 0.05, { font: MG.F.grotesk, size: 40, weight: 800, color: '#2A1C10', align: 'center', style: 'rise', by: 'word', tracking: 0.06 });
    MG.text.reveal(ctx, 'PRIME MINISTER SINCE 2018', 960, 1022, t, F_.pm - 0.05, { font: MG.F.mono, size: 20, weight: 700, color: '#3A2A14', align: 'center', style: 'fade', by: 'line', tracking: 0.18 });
    ctx.restore();
  };
  F_.drawCoalition = function (ctx, t) {
    S9.backdrop(ctx, '#E3D5BB'); const ch = S9.chamber('congreso'); const as = S9.assign(ch.seats, S9.RES[2023]);
    const ORD = ['psoe', 'sumar', 'erc', 'junts', 'bildu', 'pnv', 'bng', 'cc']; const T0 = { psoe: F_.held, sumar: F_.coal, erc: F_.half, junts: F_.half + 0.18, bildu: F_.half + 0.36, pnv: F_.half + 0.54, bng: F_.half + 0.7, cc: F_.half + 0.82 };
    const camT = prog(t, 1452.6, 1459.4, 'inOutSine'); const cam = { pos: [lerp(-4.5, 2.0, camT), lerp(11.5, 13.5, camT), lerp(12.0, 14.5, camT)], look: [lerp(-1.2, 0, camT), 0.3, -3.4], fov: 36 };
    S9.chamberDraw(ctx, 'congreso', { cam, seat: (i, s) => { const k = as[i]; const t0 = T0[k]; if (t0 === undefined) return { color: MG.col.mix(S9.PC[k], S9.PC.dim, 0.75) }; const on = prog(t, t0 + (1 - s.a / Math.PI) * 0.1, t0 + 0.25 + (1 - s.a / Math.PI) * 0.1, 'out'); return { color: MG.col.mix(S9.PC.dim, S9.PC[k], on), dy: on * 0.1 + MG.jiggle(t, t0 + 0.2, 0.05, 4, 8) }; } });
    // tally
    let n = 0; for (const k of ORD) { const res = S9.RES[2023].filter((r) => r[0] === k).reduce((a, r) => a + r[1], 0); n += res * prog(t, T0[k], T0[k] + 0.3); }
    ctx.save(); const x = 150, y = 190; MG.text.draw(ctx, String(Math.round(n)), x, y, { font: MG.F.cond, size: 130, weight: 900, color: P.ink, alpha: prog(t, F_.held, F_.held + 0.3) }); const bw = 520; ctx.globalAlpha = prog(t, F_.held, F_.held + 0.3); ctx.fillStyle = 'rgba(40,26,36,0.15)'; ctx.fillRect(x, y + 24, bw, 14); ctx.fillStyle = P.psoe; ctx.fillRect(x, y + 24, bw * n / 350, 14); ctx.fillStyle = P.ink; ctx.fillRect(x + bw * 176 / 350 - 1.5, y + 14, 3, 34); S9.kick(ctx, 'votes for Sánchez · 176 needed', x, y + 74, t, F_.held + 0.1, { size: 20, color: P.ink }); ctx.restore();
    const lab = (parties, txt, t0, off, oy = 150) => { const a = prog(t, t0 - 0.1, t0 + 0.3); if (a <= 0) return; const sp = S9.chamberPt('congreso', S9.blockPt('congreso', parties, S9.RES[2023])); ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = P.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(sp[0], sp[1]); ctx.lineTo(sp[0] + off, sp[1] - oy); ctx.stroke(); ctx.fillStyle = P.ink; ctx.beginPath(); ctx.arc(sp[0], sp[1], 5, 0, MG.TAU); ctx.fill(); MG.text.draw(ctx, txt, sp[0] + off, sp[1] - oy - 14, { font: MG.F.grotesk, size: 34, weight: 800, color: S9.PC[parties[0]], align: 'center', stroke: 'rgba(250,244,232,0.92)', strokeW: 8 }); ctx.restore(); };
    lab(['psoe'], 'PSOE', F_.held, -40, 120); lab(['sumar'], 'SUMAR', F_.coal, -80, 90);
    lab(['erc'], 'ERC', F_.cat, -60, 200); lab(['junts'], 'JUNTS', F_.cat + 0.15, 40, 210);
    lab(['pnv'], 'PNV', F_.bas, 60, 160); lab(['bildu'], 'EH BILDU', F_.bas + 0.15, -40, 250);
    const ca = prog(t, F_.cat - 0.1, F_.cat + 0.3); if (ca > 0) S9.kick(ctx, 'Catalan nationalists', 1460, 900, t, F_.cat - 0.1, { size: 22, color: S9.PC.erc, align: 'left' }); if (t > F_.bas - 0.1) S9.kick(ctx, 'Basque nationalists', 1460, 940, t, F_.bas - 0.1, { size: 22, color: S9.PC.pnv });
  };
  // the bargaining table: votes as chips; amnesty, tax, regional powers slide across
  F_.table = () => MG.cache('s9table', 2600, 1080, (x, w, h) => { x.fillStyle = '#4E3326'; x.fillRect(0, 0, w, h); const r = MG.rng(23); for (let i = 0; i < 220; i++) { const y = r() * h; x.strokeStyle = MG.col.a(r() > 0.5 ? '#2E1E16' : '#6E4A38', 0.18 + r() * 0.2); x.lineWidth = 0.8 + r() * 2.5; x.beginPath(); for (let xx = 0; xx <= w; xx += 40) x.lineTo(xx, y + Math.sin(xx * 0.003 + i) * 10 + MG.noise2(xx * 0.002, i) * 16); x.stroke(); } x.fillStyle = '#2F4A3A'; x.fillRect(180, 120, w - 360, h - 240); MG.tex.over(x, 'grain', { alpha: 0.3 }); MG.tex.over(x, 'blotch', { alpha: 0.2, color: '#0a1a10', scale: 3 }); x.strokeStyle = '#C9A04A'; x.lineWidth = 4; x.strokeRect(196, 136, w - 392, h - 272); const g = x.createRadialGradient(w * 0.45, h * 0.4, 100, w * 0.5, h * 0.5, w * 0.6); g.addColorStop(0, 'rgba(255,220,160,0.18)'); g.addColorStop(1, 'rgba(0,0,0,0.35)'); x.fillStyle = g; x.fillRect(0, 0, w, h); });
  F_.chip = (ctx, x, y, col, n, lift = 0) => { for (let i = 0; i < n; i++) { const yy = y - i * 9 - lift; ctx.fillStyle = MG.col.shade(col, 0.4); ctx.beginPath(); ctx.ellipse(x, yy + 5, 34, 13, 0, 0, MG.TAU); ctx.fill(); ctx.fillStyle = col; ctx.beginPath(); ctx.ellipse(x, yy, 34, 13, 0, 0, MG.TAU); ctx.fill(); ctx.strokeStyle = 'rgba(255,250,235,0.75)'; ctx.lineWidth = 3; ctx.setLineDash([6, 6]); ctx.beginPath(); ctx.ellipse(x, yy, 26, 9, 0, 0, MG.TAU); ctx.stroke(); ctx.setLineDash([]); } };
  F_.drawTable = function (ctx, t) {
    // camera pans across the table: chips (right) → government side (left, budget)
    const pan = prog(t, F_.country - 0.4, F_.country + 0.7, 'cam'); const sh = MG.cam.handheld(t, 2.5, 111); const camX = lerp(0, -560, pan);
    ctx.save(); ctx.translate(sh.dx - camX, sh.dy); ctx.drawImage(F_.table(), -900, 0);
    // party chip stacks (votes)
    const stacks = [['ERC', S9.PC.erc, 7, 1180, 420], ['JUNTS', S9.PC.junts, 7, 1380, 380], ['EH BILDU', S9.PC.bildu, 6, 1250, 660], ['PNV', S9.PC.pnv, 5, 1460, 620]];
    const back = prog(t, F_.reg + 0.6, F_.reg + 1.3, 'inOutCubic');
    for (const [n, c, k, x, y] of stacks) { const xx = lerp(x, x - 520, back), yy = y; MG.fx.contact(ctx, xx + 8, yy + 14, 48, 16, 0.5); F_.chip(ctx, xx, yy, c, k); MG.text.draw(ctx, n, xx, yy + 60, { font: MG.F.mono, size: 20, weight: 700, color: '#F2E8D5', align: 'center', tracking: 0.1 }); }
    // the three prices slide from the government side
    const slide = (t0) => prog(t, t0 - 0.15, t0 + 0.45, 'out');
    { const k = slide(F_.amn); if (k > 0) { ctx.save(); ctx.translate(lerp(300, 980, k), lerp(380, 300, k)); ctx.rotate(lerp(-0.3, -0.08, k)); ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.fillRect(10, 14, 220, 290); ctx.fillStyle = '#FBF8F1'; ctx.fillRect(0, 0, 220, 290); MG.text.draw(ctx, 'BOE', 18, 44, { font: MG.F.display, size: 36, weight: 900, color: P.ink }); ctx.fillStyle = P.ink; ctx.fillRect(18, 56, 184, 2); MG.text.draw(ctx, 'AMNISTÍA', 18, 100, { font: MG.F.grotesk, size: 30, weight: 800, color: P.rojoDeep }); ctx.fillStyle = 'rgba(30,26,29,0.35)'; for (let l = 0; l < 7; l++) ctx.fillRect(18, 124 + l * 18, 180 - (l % 3) * 30, 5); ctx.restore(); MG.text.draw(ctx, 'AN AMNESTY', lerp(300, 1090, k), 650, { font: MG.F.mono, size: 22, weight: 700, color: '#F2E8D5', align: 'center', tracking: 0.16, alpha: k }); } }
    { const k = slide(F_.tax); if (k > 0) { const x = lerp(300, 1020, k), y = lerp(760, 820, k); for (let i = 0; i < 8; i++) { MG.fx.contact(ctx, x + 6, y + 10, 40, 12, 0.08); MG.kit.sun(ctx, x, y - i * 10, 32, t, { variant: 'coin', color: P.gold }); } MG.text.draw(ctx, 'A TAX CONCESSION', x, y + 70, { font: MG.F.mono, size: 22, weight: 700, color: '#F2E8D5', align: 'center', tracking: 0.16, alpha: k }); } }
    { const k = slide(F_.reg); if (k > 0) { const r = S9.REG.Catalonia; const sp = S9.slab(r, P.sol, 2, 7); const x = lerp(300, 1600, k), y = lerp(860, 880, k); ctx.save(); ctx.translate(x, y); ctx.rotate(lerp(0.4, 0.05, k)); ctx.scale(1.25, 1.25); ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.filter = 'blur(6px)'; ctx.fillRect(-60, -40, 140, 110); ctx.filter = 'none'; ctx.drawImage(sp.c, -sp.w / 2, -sp.h / 2, sp.w, sp.h); ctx.restore(); MG.text.draw(ctx, 'MORE REGIONAL POWERS', x, y + 120, { font: MG.F.mono, size: 22, weight: 700, color: '#F2E8D5', align: 'center', tracking: 0.16, alpha: k }); } }
    // government side: the 2023 budget, gathering dust; flip calendar 2024 → 2026
    const bx = -460, by = 300; const bk = MG.path.rr(bx, by, 380, 480, 10); MG.fx.shadow(ctx, bk, { dx: 16, dy: 22, blur: 26, color: 'rgba(0,0,0,0.5)' }); ctx.fillStyle = '#7E1F1B'; ctx.fill(bk); ctx.save(); ctx.clip(bk); MG.tex.over(ctx, 'blotch', { alpha: 0.3, color: '#000', scale: 3 }); ctx.fillStyle = '#C9A04A'; ctx.fillRect(bx, by + 40, 380, 6); ctx.fillRect(bx, by + 430, 380, 6); ctx.restore();
    MG.text.draw(ctx, 'PRESUPUESTOS', bx + 190, by + 140, { font: MG.F.display, size: 40, weight: 700, color: '#F0D9A0', align: 'center', tracking: 0.06 }); MG.text.draw(ctx, 'GENERALES DEL ESTADO', bx + 190, by + 180, { font: MG.F.mono, size: 18, weight: 700, color: '#F0D9A0', align: 'center', tracking: 0.12 }); MG.text.draw(ctx, '2023', bx + 190, by + 330, { font: MG.F.cond, size: 130, weight: 900, color: '#F0D9A0', align: 'center' });
    const dust = prog(t, F_.budget - 0.5, 1470.5, 'linear'); if (dust > 0) { ctx.save(); ctx.clip(bk); ctx.fillStyle = `rgba(205,196,180,${0.5 * dust})`; ctx.fillRect(bx, by, 380, 480); MG.tex.over(ctx, 'grain', { alpha: 0.35 * dust, blend: 'screen', color: '#fff' }); ctx.restore(); MG.fx.particles(ctx, { n: 50, seed: 3, t, area: [bx - 40, by - 300, 460, 400], vel: [4, 30], life: 6, size: [1, 2.5], color: '#E8DDC8', alpha: 0.5 * dust, drift: 20 });
      if (dust > 0.6) { const k = (dust - 0.6) / 0.4; ctx.save(); ctx.strokeStyle = `rgba(240,236,228,${0.7 * k})`; ctx.lineWidth = 1.2; const cx = bx + 380, cy = by; for (let i = 0; i < 6; i++) { const a = Math.PI / 2 + (i / 5) * (Math.PI / 2); ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(a) * 110 * k, cy + Math.sin(a) * 110 * k); ctx.stroke(); } for (let r = 20; r < 110 * k; r += 20) { ctx.beginPath(); ctx.arc(cx, cy, r, Math.PI / 2, Math.PI); ctx.stroke(); } ctx.restore(); } }
    // flip calendar
    const cx = 80, cy = 560; const yrs = ['2023', '2024', '2025', '2026']; const flips = [F_.budget - 0.2, F_.budget + 0.55, F_.budget + 1.3]; let idx = 0; flips.forEach((f) => { if (t > f + 0.18) idx++; });
    ctx.save(); ctx.translate(cx, cy); MG.fx.contact(ctx, 10, 150, 130, 22, 0.5); ctx.fillStyle = '#2A2228'; ctx.beginPath(); ctx.moveTo(-120, 150); ctx.lineTo(-90, -110); ctx.lineTo(90, -110); ctx.lineTo(120, 150); ctx.closePath(); ctx.fill(); ctx.fillStyle = '#FBF7EE'; ctx.fillRect(-100, -90, 200, 220); ctx.fillStyle = P.rojo; ctx.fillRect(-100, -90, 200, 46); MG.text.draw(ctx, 'AÑO', 0, -58, { font: MG.F.mono, size: 22, weight: 700, color: '#FBF7EE', align: 'center', tracking: 0.3 }); MG.text.draw(ctx, yrs[idx], 0, 80, { font: MG.F.cond, size: 96, weight: 900, color: P.ink, align: 'center' });
    for (const f of flips) { const u = prog(t, f, f + 0.2, 'in'); if (u > 0 && u < 1) { ctx.save(); ctx.scale(1, Math.cos(u * Math.PI / 2)); ctx.translate(0, -u * 20); ctx.fillStyle = '#EFE8DA'; ctx.fillRect(-100, -44, 200, 174); ctx.restore(); } }
    ctx.restore();
    ctx.restore();
    const ka = prog(t, F_.every - 0.1, F_.every + 0.3) * (1 - prog(t, F_.country - 0.3, F_.country)); if (ka > 0) { ctx.save(); ctx.globalAlpha = ka; S9.word(ctx, 'every vote has a price', 960, 160, t, F_.every - 0.1, { font: MG.F.serif, italic: true, weight: 400, size: 66, align: 'center', color: '#F2E8D5', shadow: { color: 'rgba(0,0,0,0.5)', blur: 14, dy: 6 } }); ctx.restore(); }
    const na = prog(t, F_.budget - 0.2, F_.budget + 0.2); if (na > 0) { ctx.save(); ctx.globalAlpha = na; S9.kick(ctx, 'no new budget since 2023', 150, 990, t, F_.budget - 0.2, { size: 26, color: '#F2E8D5' }); ctx.restore(); }
  };

  // ---------------- Chapter G: the other end of the spectrum (1470.0 → 1486.29) ----------------
  const G_ = {};
  G_.mean = TW('Meanwhile', 1470.02); G_.spec = TW('spectrum', 1471.15); G_.vox = TW('Vox', 1471.99); G_.gain = TW('gaining', 1472.63);
  G_.abol = TW('abolish', 1474.41); G_.close = TW('close', 1476.49); G_.restore = TW('restore', 1478.01); G_.united = TW('united', 1478.49);
  G_.one = TW('One', 1480.53); G_.pulls = TW('pulls', 1481.17); G_.other = TW('other', 1483.33); G_.force = TW('force', 1484.29); G_.together = TW('together', 1484.93);
  G_.drawSpectrum = function (ctx, t) {
    S9.backdrop(ctx, '#E3D5BB'); const ch = S9.chamber('congreso'); const as = S9.assign(ch.seats, S9.RES[2023]);
    const tr = prog(t, 1469.6, 1473.6, 'inOutCubic'); const cam = { pos: [lerp(-6.5, 6.0, tr), lerp(6.5, 7.5, tr), lerp(7.5, 6.5, tr)], look: [lerp(-4.5, 4.6, tr), 0.4, lerp(-2.6, -2.8, tr)], fov: 38 };
    const spread = prog(t, G_.gain - 0.2, 1474.2, 'inOutSine');
    S9.chamberDraw(ctx, 'congreso', { cam, seat: (i, s) => { const k = as[i]; const fromRight = 1 - (i / 349); let col = MG.col.mix(S9.PC[k], S9.PC.dim, 0.55); let dy = 0; if (k === 'vox') { const on = prog(t, G_.vox - 0.1 + (s.a) * 0.3, G_.vox + 0.3 + s.a * 0.3); col = MG.col.mix(col, S9.PC.vox, on); dy = on * 0.08; } else if (k === 'pp' && fromRight < 0.095 + 0.07 * spread && i > 300) { const g = clamp((0.095 + 0.07 * spread - fromRight) / 0.02); col = MG.col.mix(col, S9.PC.vox, g * 0.85); dy = g * 0.06; } return { color: col, dy }; } });
    const la = prog(t, G_.vox - 0.1, G_.vox + 0.3); if (la > 0) { const sp = S9.chamberPt('congreso', S9.blockPt('congreso', ['vox'], S9.RES[2023])); ctx.save(); ctx.globalAlpha = la; ctx.strokeStyle = P.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(sp[0], sp[1]); ctx.lineTo(sp[0] - 60, sp[1] - 170); ctx.stroke(); MG.text.draw(ctx, 'VOX', sp[0] - 60, sp[1] - 186, { font: MG.F.grotesk, size: 64, weight: 800, color: S9.PC.vox, align: 'center', stroke: 'rgba(250,244,232,0.92)', strokeW: 10 }); S9.kick(ctx, 'far right', sp[0] - 60, sp[1] - 252, t, G_.vox + 0.1, { size: 20, align: 'center', color: P.ink, stroke: 'rgba(250,244,232,0.9)', strokeW: 6 }); ctx.restore(); }
    // spectrum ruler
    const ra = prog(t, G_.spec - 0.6, G_.spec); if (ra > 0) { ctx.save(); ctx.globalAlpha = ra; const y = 980; const g = ctx.createLinearGradient(240, 0, 1680, 0); g.addColorStop(0, P.psoe); g.addColorStop(0.5, '#CFC6B8'); g.addColorStop(1, P.vox); ctx.fillStyle = g; ctx.fillRect(240, y - 6, 1440, 12); MG.text.draw(ctx, 'LEFT', 240, y - 22, { font: MG.F.mono, size: 20, weight: 700, color: P.ink, tracking: 0.2 }); MG.text.draw(ctx, 'RIGHT', 1680, y - 22, { font: MG.F.mono, size: 20, weight: 700, color: P.ink, align: 'right', tracking: 0.2 }); const hx = lerp(300, 1640, tr); ctx.fillStyle = P.ink; ctx.beginPath(); ctx.moveTo(hx, y - 12); ctx.lineTo(hx - 10, y - 30); ctx.lineTo(hx + 10, y - 30); ctx.closePath(); ctx.fill(); ctx.restore(); }
  };
  // map: eraser abolishes the regions, the border is fortified, one "united Spain"; then the tug of war
  G_.spainSlab = (color) => { const P0 = S9.P0(); const f = MG.geo.country('Spain', '10'); const key = 's9spain:' + color; const r = G_._sr || (G_._sr = { en: 'SpainWhole', path: MG.geo.path2d(P0, f), bb: MG.geo.bbox(P0, MG.geo.peninsular()) }); r.bb = MG.geo.bbox(P0, MG.geo.peninsular()); r.cx = r.bb[0] + r.bb[2] / 2; r.cy = r.bb[1] + r.bb[3] / 2; return r; };
  G_.landBorder = () => { if (G_._lb) return G_._lb; const D = window.MG_DATA; const tj = window.topojson; const P0 = S9.P0(); const ok = ['France', 'Portugal', 'Andorra', 'Morocco', 'Gibraltar']; const m = tj.mesh(D.world50, D.world50.objects.countries, (a, b) => { if (a === b) return false; const na = a.properties.name, nb = b.properties.name; return (na === 'Spain' && ok.includes(nb)) || (nb === 'Spain' && ok.includes(na)); }); const ls = (m.type === 'MultiLineString' ? m.coordinates : [m.coordinates]).map((l) => l.map((q) => P0(q))); G_._lb = ls; return ls; };
  G_.ERASE = (() => { const pts = []; for (let i = 0; i <= 6; i++) { const y = 230 + i * 110; pts.push([i % 2 ? 1480 : 560, y]); pts.push([i % 2 ? 560 : 1480, y + 55]); } return pts; })();
  G_.eraseT = (r) => { const pts = G_.ERASE; let best = 0, bd = 1e9; const N = 300; for (let k = 0; k <= N; k++) { const [x, y] = MG.path.along(pts, k / N); const d = Math.hypot(x - r.cx, y - r.cy); if (d < bd) { bd = d; best = k / N; } } return best; };
  G_.UNI = '#D6A659';
  G_.cam = (t) => { const k = keys(t, [[1473.78, [985, 548, 1.02]], [G_.restore, [985, 548, 1.04], 'inOutSine'], [G_.one, [990, 545, 0.98], 'inOutSine'], [1486.4, [990, 548, 1.0], 'inOutSine']]); return { x: k[0], y: k[1], z: k[2] }; };
  G_.drawVox = function (ctx, t) {
    const regs = S9.regions(); const R = S9.REG; const c = G_.cam(t); c.dx = MG.wiggle(t, 0.3, 2, 121); c.dy = MG.wiggle(t, 0.27, 2, 122);
    // forces: rope pull (apart) and strap squeeze (together)
    const pull = prog(t, G_.pulls - 0.2, G_.pulls + 0.9, 'inOutCubic'); const squeeze = prog(t, G_.force - 0.2, G_.together + 0.6, 'inOutCubic'); const snap = prog(t, 1486.05, 1486.25);
    const crack = prog(t, G_.one - 0.1, G_.one + 0.4); // the united slab breaks back into regions
    const shake = (pull * (1 - squeeze * 0.4) + squeeze) * 0.5 * (t > G_.together ? 2 : 1); c.dx += MG.noise2(t * 25, 1) * shake * 3; c.dy += MG.noise2(t * 25, 5) * shake * 3;
    MG.fx.fill(ctx, '#BCD0DE'); ctx.save(); S9.applyCam(ctx, c); S9.drawPage(ctx);
    const united = prog(t, G_.restore - 0.1, G_.restore + 0.6, 'out') * (1 - crack); const lift = 22 * united;
    // uniform whole-Spain slab beneath
    const sr = G_.spainSlab(); const er = (r) => prog(t, G_.abol - 0.15 + G_.eraseT(r) * 1.9, G_.abol + 0.1 + G_.eraseT(r) * 1.9);
    if (t > G_.abol - 0.2 && crack < 1) { ctx.save(); ctx.globalAlpha = 1 - crack; ctx.translate(0, -lift); if (lift > 1) MG.fx.shadow(ctx, sr.path, { dx: 10 + lift * 0.5, dy: 16 + lift, blur: 18 + lift, color: 'rgba(40,20,30,0.35)' }); for (let i = 6; i >= 1; i--) { ctx.save(); ctx.translate(0, i); ctx.fillStyle = MG.col.shade(G_.UNI, 0.45); ctx.fill(sr.path); ctx.restore(); } ctx.fillStyle = MG.col.mix(G_.UNI, P.sol, united); ctx.fill(sr.path); ctx.save(); ctx.clip(sr.path); MG.tex.over(ctx, 'fibers', { alpha: 0.6 }); MG.tex.over(ctx, 'blotch', { alpha: 0.1, color: '#5a3a10', scale: 3 }); ctx.restore(); ctx.restore(); }
    // region pieces (fade where erased; come back when the slab cracks)
    const ropeR = { Catalonia: [1.0, -0.35], 'Basque Country': [0.1, -1.0] };
    for (const r of regs) { const e = r.en === 'Canary Islands' ? 0 : er(r); const vis = Math.max(1 - e, crack); if (vis <= 0.01) continue; const ex = A_.ex(r); const rp = ropeR[r.en]; const amt = (rp ? 1.6 : 0.55) * pull * (1 - squeeze * 0.92) - squeeze * 0.06; const off = { dx: ex.dx * amt, dy: ex.dy * amt, lift: Math.max(0, ex.lift * 0.5 * amt), rot: ex.rot * amt }; const tr = squeeze * (t > G_.together ? Math.sin(t * 40 + r.i) * 0.8 : 0); S9.pieceShadow(ctx, r, { ...off, alpha: vis }); S9.piece(ctx, r, { ...off, dx: off.dx + tr, alpha: vis, sc: 1 - squeeze * 0.012 }); }
    // eraser + crumbs
    const ep = prog(t, G_.abol - 0.15, G_.abol + 1.95, 'linear'); if (ep > 0 && ep < 1) { const [ex2, ey2, ea] = MG.path.along(G_.ERASE, ep); for (let k = 0; k < 26; k++) { const u = ep - k * 0.004; if (u < 0) break; const [qx, qy] = MG.path.along(G_.ERASE, u); ctx.fillStyle = 'rgba(230,180,190,0.8)'; ctx.fillRect(qx + MG.rand(5, k) * 30 - 15, qy + MG.rand(6, k) * 30 - 15, 4, 3); } ctx.save(); ctx.translate(ex2, ey2); ctx.rotate(ea * 0.15 - 0.3); ctx.fillStyle = 'rgba(40,20,30,0.3)'; ctx.fillRect(-46, -24 + 14, 100, 56); const er2 = MG.path.rr(-50, -30, 100, 56, 8); MG.fx.volume(ctx, er2, [-50, -30, 100, 56], { color: '#F2B9C0', shade: 0.3, hi: 0.4, outline: '#6a3a40', outlineW: 2 }); ctx.fillStyle = P.azulejo; ctx.fillRect(10, -30, 40, 56); ctx.restore(); }
    // fortified border (land borders as a fence) + thick coast line
    const bp = prog(t, G_.close - 0.1, G_.close + 1.0, 'inOutSine'); if (bp > 0) { ctx.save(); ctx.translate(0, -lift); const path = MG.geo.path(ctx, S9.P0()); ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.setLineDash([bp * 2600, 9000]); ctx.beginPath(); path(MG.geo.country('Spain', '10')); ctx.strokeStyle = 'rgba(30,22,28,0.75)'; ctx.lineWidth = 4; ctx.stroke(); ctx.setLineDash([]);
      for (const L of G_.landBorder()) { const sub = MG.path.trim(L, 0, bp); if (sub.length < 2) continue; ctx.strokeStyle = '#2A2226'; ctx.lineWidth = 8; ctx.beginPath(); sub.forEach((q, i) => (i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]))); ctx.stroke(); let acc = 0; for (let i = 1; i < sub.length; i++) { const dx = sub[i][0] - sub[i - 1][0], dy = sub[i][1] - sub[i - 1][1]; acc += Math.hypot(dx, dy); if (acc > 14) { acc = 0; const n = Math.hypot(dx, dy) || 1; ctx.strokeStyle = '#2A2226'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(sub[i][0] - dy / n * 9, sub[i][1] + dx / n * 9); ctx.lineTo(sub[i][0] + dy / n * 9, sub[i][1] - dx / n * 9); ctx.stroke(); } } }
      ctx.restore(); }
    // ropes (one side pulls apart)
    if (pull > 0.01) for (const [n, dir] of Object.entries(ropeR)) { const r = R[n]; const ex = A_.ex(r); const amt = 1.6 * pull * (1 - squeeze * 0.92); const ax = r.cx + ex.dx * amt + dir[0] * 40, ay = r.cy + ex.dy * amt + dir[1] * 40 - ex.lift * 0.5 * amt; const bx = ax + dir[0] * 900, by = ay + dir[1] * 900; ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = 'rgba(40,20,20,0.35)'; ctx.lineWidth = 12; ctx.beginPath(); ctx.moveTo(ax + 6, ay + 10); ctx.lineTo(bx + 6, by + 10); ctx.stroke(); ctx.strokeStyle = '#B48A52'; ctx.lineWidth = 10; ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke(); ctx.strokeStyle = '#7A5A30'; ctx.lineWidth = 3; ctx.setLineDash([8, 8]); ctx.lineDashOffset = -t * 40 * (1 - squeeze); ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke(); ctx.restore(); ctx.fillStyle = '#7A5A30'; ctx.beginPath(); ctx.arc(ax, ay, 9, 0, MG.TAU); ctx.fill(); }
    // strap (the other forces it together)
    if (squeeze > 0.01 && snap < 1) { const bb = sr.bb; const cx = bb[0] + bb[2] / 2 + 20, cy = bb[1] + bb[3] / 2 + 10; const k = lerp(1.45, 0.98, squeeze); const rx = bb[2] / 2 * k, ry = bb[3] / 2 * k * 1.02; ctx.save(); ctx.globalAlpha = Math.min(1, squeeze * 3) * (1 - snap); ctx.strokeStyle = 'rgba(30,15,10,0.35)'; ctx.lineWidth = 34; ctx.beginPath(); ctx.ellipse(cx + 8, cy + 14, rx, ry, 0, 0, MG.TAU); ctx.stroke(); ctx.strokeStyle = '#6B4026'; ctx.lineWidth = 30; ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, MG.TAU); ctx.stroke(); ctx.strokeStyle = 'rgba(255,220,170,0.5)'; ctx.lineWidth = 2; ctx.setLineDash([10, 8]); ctx.beginPath(); ctx.ellipse(cx, cy, rx - 9, ry - 9, 0, 0, MG.TAU); ctx.stroke(); ctx.beginPath(); ctx.ellipse(cx, cy, rx + 9, ry + 9, 0, 0, MG.TAU); ctx.stroke(); ctx.setLineDash([]); const bx = cx + rx, by = cy; ctx.fillStyle = '#C9A04A'; ctx.fillRect(bx - 26, by - 34, 52, 68); ctx.fillStyle = '#6B4026'; ctx.fillRect(bx - 14, by - 22, 28, 44); ctx.restore(); }
    ctx.restore();
    // typography
    const ua = united; if (ua > 0.01) { ctx.save(); ctx.globalAlpha = ua; S9.word(ctx, '“united Spain”', 990, 560, t, G_.united - 0.05, { font: MG.F.display, italic: true, size: 120, weight: 800, align: 'center', color: '#FBF3E2', shadow: { color: 'rgba(40,20,20,0.5)', blur: 20, dy: 10 } }); ctx.restore(); }
    const lab = (s, t0, t1, x, y, col) => { const a = prog(t, t0 - 0.05, t0 + 0.25) * (1 - prog(t, t1, t1 + 0.3)); if (a > 0) { ctx.save(); ctx.globalAlpha = a; S9.kick(ctx, s, x, y, t, t0 - 0.05, { size: 26, color: col }); ctx.restore(); } };
    lab('abolish regional autonomy', G_.abol, G_.close - 0.1, 150, 150, P.ink); lab('close the borders', G_.close, G_.restore - 0.1, 150, 150, P.ink);
    lab('one side pulls it apart', G_.pulls - 0.3, G_.other - 0.3, 150, 150, P.rojo); lab('the other forces it together', G_.other - 0.1, 1486.4, 150, 150, '#6B4026');
  };
  // unroll transition: a paper map rolls across the frame (object wipe)
  G_.unroll = (ctx, A, B, p) => { const X = lerp(1960, -60, MG.ease.inOutCubic(p)); ctx.drawImage(A, 0, 0); ctx.save(); ctx.beginPath(); ctx.rect(X, 0, 2000, 1080); ctx.clip(); ctx.drawImage(B, 0, 0); ctx.restore(); ctx.save(); ctx.fillStyle = 'rgba(20,10,10,0.35)'; ctx.filter = 'blur(14px)'; ctx.fillRect(X - 60, 0, 60, 1080); ctx.filter = 'none'; const g = ctx.createLinearGradient(X - 46, 0, X + 46, 0); g.addColorStop(0, '#CDBB98'); g.addColorStop(0.45, '#F6EEDC'); g.addColorStop(0.7, '#E3D3B2'); g.addColorStop(1, '#9C8762'); ctx.fillStyle = g; ctx.fillRect(X - 46, -10, 92, 1100); ctx.restore(); };

  // ---------------- Chapter H: collapse → election → polls → growth (1486.29 → 1509.97) ----------------
  const H_ = {};
  H_.oct = TW('October', 1486.61); H_.whole = TW('whole', 1488.57); H_.coll = TW('collapses', 1489.33); H_.calls = TW('calls', 1491.29); H_.nov = TW('November', 1492.41); H_.d29 = TW('29', 1492.77);
  H_.polls = TW('Polls', 1494.05); H_.first = TW('first', 1495.69); H_.dem = TW('democracy', 1496.45); H_.far = TW('far-right', 1498.29); H_.enter = TW('enter', 1499.41);
  H_.yet = TW('yet', 1501.17); H_.econ = TW('economy', 1503.09); H_.growing = TW('growing', 1504.05); H_.ger = TW('Germany’s', 1505.09); H_.app = TW('Apparently', 1506.21); H_.charge = TW('charge', 1508.29); H_.madrid = TW('Madrid', 1508.69);
  H_.drawCollapse = function (ctx, t) {
    S9.backdrop(ctx, '#DDCFB4'); const ch = S9.chamber('congreso'); const as = S9.assign(ch.seats, S9.RES[2023]);
    const camT = prog(t, 1486.29, 1490.9, 'inOutSine'); const sh = MG.cam.shake(t, H_.coll + 0.15, 0.25, 3); const cam = { pos: [lerp(3.5, 2.0, camT) + sh.dx * 0.02, lerp(5.5, 4.2, camT) + sh.dy * 0.02, lerp(9.5, 8.6, camT)], look: [0, 0.5, -3.2], fov: 40 };
    const fallT = (s, i) => H_.coll - 0.15 + Math.abs(s.a - Math.PI / 2) * 0.32 + MG.rand(55, i) * 0.18;
    S9.chamberDraw(ctx, 'congreso', { cam, seat: (i, s) => { const k = as[i]; if (!S9.COALITION[k]) return { color: MG.col.mix(S9.PC[k], S9.PC.dim, 0.6) }; const tf = fallT(s, i); const trem = prog(t, H_.whole - 0.3, tf) * Math.sin(t * 30 + i) * 0.04; const f = prog(t, tf, tf + 0.45, 'inQuad'); const bounce = t > tf + 0.45 ? MG.jiggle(t, tf + 0.45, 0.08, 4, 9) : 0; return { color: MG.col.mix(S9.PC[k], '#6a5a50', f * 0.45), rx: f * 1.45 + bounce + trem, dy: -f * 0.12 + Math.abs(bounce) * 0.2, dz: f * 0.08 }; },
      text: { key: 'oct26', draw: (x, w, h) => { MG.text.draw(x, 'OCTOBER', w / 2, 150, { font: MG.F.display, size: 130, weight: 800, color: 'rgba(250,240,220,0.9)', align: 'center', tracking: 0.06 }); MG.text.draw(x, '2026', w / 2, 232, { font: MG.F.cond, size: 80, weight: 900, color: 'rgba(250,240,220,0.85)', align: 'center', tracking: 0.2 }); }, alpha: prog(t, H_.oct - 0.2, H_.oct + 0.4) } });
    // dust puffs where the seats land
    if (t > H_.coll) { const spr = MG.tex.puff(64, 4, '#E8DCC6'); for (let j = 0; j < 22; j++) { const i = Math.floor(MG.rand(66, j) * 179); const s = ch.seats.filter((q, ii) => S9.COALITION[as[ii]])[i]; if (!s) continue; const tf = H_.coll - 0.15 + Math.abs(s.a - Math.PI / 2) * 0.32 + 0.4; const age = t - tf; if (age < 0 || age > 2) continue; const p = S9.chamberPt('congreso', [s.x, s.y + 0.15, s.z]); MG.sprite(ctx, spr, p[0], p[1] - age * 20, { scale: 0.8 + age * 1.4, alpha: 0.45 * (1 - age / 2) }); } }
    const la = prog(t, H_.whole - 0.1, H_.whole + 0.3); if (la > 0) { ctx.save(); ctx.globalAlpha = la; S9.kick(ctx, 'the whole arrangement', 150, 150, t, H_.whole - 0.1, { size: 26, color: P.ink }); ctx.restore(); }
  };
  H_.calPage = (month, year, firstDow, days, mark) => MG.cache(`s9cal:${month}:${mark ? 1 : 0}`, 760, 900, (x, w, h) => { x.fillStyle = '#FBF8F1'; x.fillRect(0, 0, w, h); MG.tex.over(x, 'fibers', { alpha: 0.7 }); x.fillStyle = month === 'OCTOBER' ? '#5A6B7E' : P.rojo; x.fillRect(0, 0, w, 170); MG.text.draw(x, month, 50, 110, { font: MG.F.display, size: 84, weight: 800, color: '#FBF8F1' }); MG.text.draw(x, String(year), w - 50, 110, { font: MG.F.cond, size: 70, weight: 900, color: '#FBF8F1', align: 'right' });
    const dn = MG.LANG === 'fr' ? ['L', 'M', 'M', 'J', 'V', 'S', 'D'] : ['M', 'T', 'W', 'T', 'F', 'S', 'S']; const cw = (w - 80) / 7; dn.forEach((d, i) => MG.text.draw(x, d, 40 + cw * (i + 0.5), 230, { font: MG.F.mono, size: 26, weight: 700, color: i >= 5 ? P.rojo : P.ink2, align: 'center' }));
    for (let d = 1; d <= days; d++) { const cell = firstDow + d - 1; const col = cell % 7, row = Math.floor(cell / 7); const cx = 40 + cw * (col + 0.5), cy = 310 + row * 100; MG.text.draw(x, String(d), cx, cy, { font: MG.F.cond, size: 54, weight: 800, color: col >= 5 ? P.rojo : P.ink, align: 'center' }); x.strokeStyle = 'rgba(40,30,30,0.12)'; x.strokeRect(cx - cw / 2, cy - 64, cw, 100); } });
  H_.drawCalendar = function (ctx, t) {
    ctx.fillStyle = '#D9C7A5'; ctx.fillRect(0, 0, 1920, 1080); MG.kit.paper(ctx, '#DCCBAA', { light: 0.35 }); const sh = MG.cam.handheld(t, 3, 131); const push = prog(t, 1490.4, 1494.3, 'inOutSine');
    ctx.save(); ctx.translate(960 + sh.dx, 540 + sh.dy); const z = 0.92 + push * 0.12; ctx.scale(z, z); ctx.translate(-960 - push * 60, -500 - push * 40);
    const X = 580, Y = 110; MG.fx.contact(ctx, X + 400, Y + 920, 420, 30, 0.35); ctx.fillStyle = 'rgba(40,20,20,0.35)'; ctx.filter = 'blur(16px)'; ctx.fillRect(X + 24, Y + 30, 760, 900); ctx.filter = 'none';
    ctx.fillStyle = '#3A3236'; ctx.beginPath(); ctx.arc(X + 380, Y - 30, 9, 0, MG.TAU); ctx.fill(); ctx.strokeStyle = '#3A3236'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(X + 380, Y - 30); ctx.lineTo(X + 300, Y); ctx.moveTo(X + 380, Y - 30); ctx.lineTo(X + 460, Y); ctx.stroke();
    ctx.drawImage(H_.calPage('NOVEMBER', 2026, 6, 30), X, Y);
    // marker: circle the 29th + note
    const cw = (760 - 80) / 7; const cell = 6 + 29 - 1; const mx = X + 40 + cw * ((cell % 7) + 0.5), my = Y + 310 + Math.floor(cell / 7) * 100 - 18; const mk = prog(t, H_.d29 - 0.1, H_.d29 + 0.45, 'inOutSine');
    if (mk > 0) { const pts = []; for (let i = 0; i <= 40 * mk; i++) { const a = -1.2 + (i / 40) * MG.TAU * 1.08; pts.push([mx + Math.cos(a) * 58 * (1 + i * 0.002), my + Math.sin(a) * 44]); } if (pts.length > 2) MG.fx.ink(ctx, pts, { width: 9, color: P.rojo, taper: [0.1, 0.2], wobble: 1.5, seed: 4 }); }
    MG.text.reveal(ctx, 'ELECTION', mx - 330, my + 130, t, H_.d29 + 0.3, { font: MG.F.marker, size: 66, color: P.rojo, style: 'wipe', by: 'line', dur: 0.5 });
    // October page torn off (rips upward, flies away)
    const tear = prog(t, H_.calls - 0.2, H_.calls + 0.6, 'inCubic'); if (tear < 1) { ctx.save(); ctx.translate(X + 380, Y); ctx.rotate(-tear * 0.9); ctx.translate(tear * -300, -tear * 500); ctx.scale(1, 1 - tear * 0.3); ctx.translate(-(X + 380), -Y); ctx.shadowColor = 'rgba(30,15,10,0.35)'; ctx.shadowBlur = 20 + tear * 30; ctx.shadowOffsetY = 10 + tear * 30; ctx.drawImage(H_.calPage('OCTOBER', 2026, 3, 31), X, Y); ctx.restore(); }
    ctx.restore();
    S9.kick(ctx, 'Sánchez calls an election', 150, 990, t, H_.calls - 0.1, { size: 26, color: P.ink });
  };
  H_.GOV = [[1977, 1982, 'ucd', 'UCD'], [1982, 1996, 'psoe', 'PSOE'], [1996, 2004, 'pp', 'PP'], [2004, 2011, 'psoe', 'PSOE'], [2011, 2018, 'pp', 'PP'], [2018, 2026, 'psoe', 'PSOE']];
  H_.cabinet = () => MG.cache('s9cabinet', 1920, 1080, (x) => { x.drawImage(F_.table(), -300, 0); });
  H_.drawPolls = function (ctx, t) {
    const pan = prog(t, H_.far - 1.2, H_.far - 0.2, 'cam'); const sh = MG.cam.handheld(t, 2, 141);
    MG.kit.paper(ctx, '#EDE3CF', { light: 0.3 }); ctx.save(); ctx.translate(sh.dx, sh.dy - pan * 1080);
    // page 1: governments 1977 → 2026, never far right
    const x0 = 200, x1 = 1720, y = 520; const rp = prog(t, H_.polls - 0.1, H_.dem + 0.2, 'inOutSine'); const yr = lerp(1977, 2026, rp); const X = (v) => lerp(x0, x1, (v - 1977) / 49);
    ctx.fillStyle = 'rgba(40,26,36,0.12)'; ctx.fillRect(x0, y - 40, x1 - x0, 80);
    for (const [a, b, k, n] of H_.GOV) { if (a > yr) break; ctx.fillStyle = S9.PC[k]; ctx.fillRect(X(a), y - 40, X(Math.min(b, yr)) - X(a), 80); if (yr > (a + b) / 2) MG.text.draw(ctx, n, X((a + b) / 2), y + 12, { font: MG.F.grotesk, size: 28, weight: 800, color: '#FBF7EE', align: 'center', tracking: 0.06 }); }
    if (yr > 2020) { ctx.save(); ctx.fillStyle = 'rgba(185,85,138,0.9)'; ctx.fillRect(X(2020), y + 40, X(Math.min(2026, yr)) - X(2020), 14); ctx.restore(); MG.text.draw(ctx, '+ coalition partners', X(2020), y + 84, { font: MG.F.mono, size: 18, weight: 700, color: P.ink2, alpha: prog(t, H_.dem, H_.dem + 0.3) }); }
    for (const v of [1977, 1982, 1996, 2004, 2011, 2018, 2026]) if (v <= yr + 0.01) MG.text.draw(ctx, String(v), X(v), y - 58, { font: MG.F.mono, size: 22, weight: 700, color: P.ink, align: 'center' });
    if (rp >= 1) { const g = prog(t, H_.dem + 0.2, H_.dem + 0.7); ctx.save(); ctx.globalAlpha = g; ctx.strokeStyle = S9.PC.vox; ctx.lineWidth = 3; ctx.setLineDash([8, 6]); ctx.strokeRect(x1 + 6, y - 40, 110, 80); ctx.setLineDash([]); MG.text.draw(ctx, '?', x1 + 61, y + 22, { font: MG.F.display, size: 64, weight: 800, color: S9.PC.vox, align: 'center' }); ctx.restore(); }
    S9.kick(ctx, 'Who has governed Spain since democracy returned', x0, 330, t, H_.polls, { size: 26, color: P.ink });
    S9.word(ctx, 'never the far right', x0, 760, t, H_.first - 0.1, { font: MG.F.serif, italic: true, weight: 400, size: 72, color: P.ink });
    // page 2 (below): the cabinet table and a ghost chair
    ctx.translate(0, 1080); ctx.drawImage(H_.cabinet(), 0, 0);
    const cx = 960, cy = 540, rx = 520, ry = 250; ctx.save(); ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.beginPath(); ctx.ellipse(cx + 16, cy + 26, rx, ry, 0, 0, MG.TAU); ctx.fill(); const tb = MG.path.ellipse(cx, cy, rx, ry); MG.fx.volume(ctx, tb, [cx - rx, cy - ry, rx * 2, ry * 2], { color: '#6E4632', shade: 0.25, hi: 0.3, outline: '#2a160e', outlineW: 3, tex: 'fibers', texAlpha: 0.4 }); ctx.restore();
    const N = 22; for (let i = 0; i < N; i++) { const a = (i / N) * MG.TAU; const px = cx + Math.cos(a) * (rx + 70), py = cy + Math.sin(a) * (ry + 60); const ghost = i === 15; ctx.save(); ctx.translate(px, py); ctx.rotate(a + Math.PI / 2); if (ghost) { const gk = prog(t, H_.far - 0.1, H_.far + 0.4); const pulse = 0.6 + 0.4 * Math.sin((t - H_.enter) * 6); ctx.globalAlpha = gk * (t > H_.enter ? pulse : 1); ctx.strokeStyle = S9.PC.vox; ctx.lineWidth = 4; ctx.setLineDash([8, 6]); ctx.strokeRect(-34, -30, 68, 60); ctx.strokeRect(-34, 30, 68, 16); ctx.setLineDash([]); ctx.fillStyle = MG.col.a(S9.PC.vox, 0.18); ctx.fillRect(-34, -30, 68, 60); } else { ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.fillRect(-30, -24, 68, 60); ctx.fillStyle = '#2E2A2C'; ctx.fillRect(-34, -30, 68, 60); ctx.fillStyle = '#4A4448'; ctx.fillRect(-34, 30, 68, 16); ctx.fillStyle = 'rgba(255,255,255,0.12)'; ctx.fillRect(-30, -26, 60, 6); } ctx.restore(); }
    MG.text.draw(ctx, 'COUNCIL OF MINISTERS', cx, cy + 12, { font: MG.F.mono, size: 24, weight: 700, color: 'rgba(250,240,220,0.75)', align: 'center', tracking: 0.3 });
    const ga = prog(t, H_.far, H_.far + 0.4); if (ga > 0) { const a = (15 / N) * MG.TAU; const px = cx + Math.cos(a) * (rx + 70), py = cy + Math.sin(a) * (ry + 60); ctx.save(); ctx.globalAlpha = ga; ctx.strokeStyle = '#F2E8D5'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(px + 30, py - 50); ctx.lineTo(px + 120, py - 150); ctx.stroke(); MG.text.draw(ctx, 'a far-right party', px + 130, py - 160, { font: MG.F.serif, italic: true, size: 56, color: '#F2E8D5' }); S9.kick(ctx, 'could enter the government', px + 132, py - 116, t, H_.enter - 0.1, { size: 22, color: '#BFD9A8' }); ctx.restore(); }
    ctx.restore();
  };
  // growth: Spain vs Germany, the sun rolls up Spain's line; Madrid argues below
  H_.IDX = { es: [[2022, 100], [2023, 102.7], [2024, 106.3], [2025, 109.3]], de: [[2022, 100], [2023, 99.3], [2024, 99.0], [2025, 99.2]] };
  H_.cortes = () => MG.cache('s9cortes', 900, 520, (x) => { // Palacio de las Cortes (paper cut)
    const st = '#EADCC0', sd = '#C9B48E'; x.fillStyle = 'rgba(40,20,20,0.25)'; x.fillRect(40, 470, 840, 30); x.fillStyle = sd; x.fillRect(80, 160, 740, 300); x.fillStyle = st; x.fillRect(90, 170, 720, 280); MG.tex.over(x, 'fibers', { alpha: 0.6 });
    for (let i = 0; i < 9; i++) { x.fillStyle = 'rgba(80,60,40,0.35)'; x.fillRect(110 + i * 80, 210, 36, 60); }
    x.fillStyle = st; x.beginPath(); x.moveTo(250, 170); x.lineTo(450, 70); x.lineTo(650, 170); x.closePath(); x.fill(); x.strokeStyle = sd; x.lineWidth = 6; x.stroke(); x.fillStyle = 'rgba(120,90,60,0.4)'; x.beginPath(); x.moveTo(300, 160); x.lineTo(450, 95); x.lineTo(600, 160); x.closePath(); x.fill();
    for (let i = 0; i < 6; i++) { const cx = 280 + i * 68; const g = x.createLinearGradient(cx - 14, 0, cx + 14, 0); g.addColorStop(0, '#CDBB98'); g.addColorStop(0.4, '#F6EEDC'); g.addColorStop(1, '#B5A07A'); x.fillStyle = g; x.fillRect(cx - 14, 180, 28, 250); x.fillStyle = sd; x.fillRect(cx - 20, 176, 40, 10); }
    for (let i = 0; i < 4; i++) { x.fillStyle = i % 2 ? '#D8C7A4' : '#E3D3B2'; x.fillRect(220 - i * 20, 430 + i * 12, 460 + i * 40, 12); }
    for (const lx of [150, 750]) { x.fillStyle = '#8A7A60'; x.fillRect(lx - 50, 390, 100, 80); x.fillStyle = '#5A4630'; x.beginPath(); x.ellipse(lx, 378, 46, 16, 0, 0, MG.TAU); x.fill(); x.beginPath(); x.arc(lx + (lx < 450 ? 30 : -30), 352, 18, 0, MG.TAU); x.fill(); x.fillRect(lx - 40, 360, 80, 20); }
  });
  H_.drawGrowth = function (ctx, t) {
    MG.fx.vgrad(ctx, ['#F4D9B0', '#F2E6CF']); MG.tex.over(ctx, 'fibers', { alpha: 0.5 });
    const crane = prog(t, H_.app - 0.4, 1510.6, 'inOutSine'); const sh = MG.cam.handheld(t, 2, 151);
    ctx.save(); ctx.translate(960 + sh.dx, 540 + sh.dy); const z = lerp(1, 0.78, crane); ctx.scale(z, z); ctx.translate(-960 + crane * 40, -540 + crane * 120);
    const x0 = 300, x1 = 1560, y0 = 820, y1 = 220; const X = (y) => lerp(x0, x1, (y - 2022) / 3), Y = (v) => lerp(y0, y1, (v - 97) / 14);
    ctx.strokeStyle = 'rgba(40,26,36,0.18)'; ctx.lineWidth = 1.5; for (let v = 98; v <= 110; v += 4) { ctx.beginPath(); ctx.moveTo(x0, Y(v)); ctx.lineTo(x1 + 60, Y(v)); ctx.stroke(); }
    for (const yy of [2022, 2023, 2024, 2025]) MG.text.draw(ctx, String(yy), X(yy), y0 + 50, { font: MG.F.mono, size: 22, weight: 700, color: P.ink2, align: 'center' });
    S9.kick(ctx, 'Economic output, 2022 = 100', x0, y1 - 40, t, 1500.9, { size: 20, color: P.ink2 });
    const lp = prog(t, H_.econ - 0.4, H_.ger + 0.3, 'inOutSine'); const es = MG.path.spline(H_.IDX.es.map(([y, v]) => [X(y), Y(v)]), 12), de = MG.path.spline(H_.IDX.de.map(([y, v]) => [X(y), Y(v)]), 12);
    MG.fx.line(ctx, de, { progress: lp, color: '#6C6A70', width: 6 }); MG.fx.line(ctx, es, { progress: lp, color: P.solDeep, width: 8 });
    const [ex, ey] = MG.path.along(es, lp), [dx, dy] = MG.path.along(de, lp);
    if (lp > 0.02) { MG.text.draw(ctx, 'GERMANY', dx + 26, dy + 34, { font: MG.F.grotesk, size: 34, weight: 800, color: '#5C5A60', alpha: prog(t, H_.ger - 0.2, H_.ger + 0.2) }); }
    // the sun rolls up Spain's line (and keeps going after the data ends)
    const after = prog(t, H_.ger + 0.3, 1511.3, 'linear'); const ang = (lp + after) * 9; const sx = ex + after * 420, sy = ey - after * 260 - 40;
    if (lp > 0.01) { if (after > 0) { ctx.save(); ctx.setLineDash([4, 10]); ctx.strokeStyle = MG.col.a(P.solDeep, 0.6); ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(ex, ey); ctx.lineTo(sx, sy + 40); ctx.stroke(); ctx.restore(); } MG.kit.sun(ctx, sx, sy, 40, t, { rot: ang, rays: 0.35, corona: 0.4 }); MG.text.draw(ctx, 'SPAIN', sx - 60, sy - 60, { font: MG.F.grotesk, size: 40, weight: 800, color: P.solDeep, align: 'right', alpha: prog(t, H_.econ, H_.econ + 0.3) }); }
    // Madrid below: the Congress arguing
    const ca = prog(t, H_.app - 0.2, H_.app + 0.5); if (ca > 0) { ctx.save(); ctx.globalAlpha = ca; const bx = 360, by = 900; ctx.drawImage(H_.cortes(), bx, by, 540, 312); for (let i = 0; i < 6; i++) { const ph = t * 6 + i * 1.7; const qx = bx + 80 + i * 75, qy = by + 30 - Math.abs(Math.sin(ph)) * 30; ctx.strokeStyle = P.ink; ctx.lineWidth = 3; ctx.beginPath(); for (let k = 0; k < 6; k++) ctx.lineTo(qx + k * 8, qy - (k % 2) * 14); ctx.stroke(); } MG.text.draw(ctx, '!?', bx + 300, by - 30 - Math.abs(Math.sin(t * 5)) * 12, { font: MG.F.marker, size: 54, color: P.rojo }); MG.text.draw(ctx, 'MADRID', bx + 270, by + 360, { font: MG.F.grotesk, size: 30, weight: 800, color: P.ink, align: 'center', tracking: 0.2 }); ctx.restore(); }
    ctx.restore();
    const wa = prog(t, H_.yet - 0.2, H_.yet + 0.2) * (1 - prog(t, H_.econ - 0.2, H_.econ)); if (wa > 0) { ctx.save(); ctx.globalAlpha = wa; S9.word(ctx, 'And yet…', 960, 540, t, H_.yet - 0.2, { font: MG.F.serif, italic: true, weight: 400, size: 110, align: 'center', color: P.ink }); ctx.restore(); }
  };

  // ===================================================================== scenes
  const scenes = [];
  scenes.push({ id: 's09_map', start: 1345.48, end: 1368.34, transIn: { type: S9.crack, dur: 1.15, ease: 'linear' },
    init() { S9.regions(); }, draw(ctx, t) { A_.draw(ctx, t); }, post: { grade: 'warm', grain: 0.045, vignette: 0.3 } });

  scenes.push({ id: 's09_eta', start: 1368.34, end: 1379.7, transIn: { type: 'zoom', dur: 0.9, x: S9.basqueScreen()[0], y: S9.basqueScreen()[1], amount: 1.6, from: 0.85 },
    draw(ctx, t) { B_.draw(ctx, t); }, post: { grade: 'night', grain: 0.06, vignette: 0.5, temp: 0.04 } });
  scenes.push({ id: 's09_cat', start: 1379.7, end: 1387.06, transIn: { type: 'push', dir: 'left', dur: 0.9, ease: 'inOutCubic' }, draw(ctx, t) { C_.drawCat(ctx, t); }, post: { grade: 'warm', grain: 0.045, vignette: 0.32 } });
  scenes.push({ id: 's09_police', start: 1387.06, end: 1390.05, transIn: { type: C_.shieldWipe, dur: 0.7, ease: 'linear' }, draw(ctx, t) { C_.drawPolice(ctx, t); }, post: { grade: 'cool', sat: 0.82, grain: 0.06, vignette: 0.45, contrast: 1.06 } });
  scenes.push({ id: 's09_parlament', start: 1390.05, end: 1393.1, transIn: { type: 'push', dir: 'down', dur: 0.7, ease: 'inOutCubic' }, draw(ctx, t) { C_.drawParl(ctx, t); }, post: { grade: 'warm', grain: 0.045, vignette: 0.35 } });
  scenes.push({ id: 's09_flee', start: 1393.1, end: 1396.25, transIn: { type: C_.zoomOut, dur: 0.8, ease: 'linear' }, draw(ctx, t) { C_.drawFlee(ctx, t); }, post: { grade: 'warm', grain: 0.045, vignette: 0.3 } });
  scenes.push({ id: 's09_prison', start: 1396.25, end: 1403.15, transIn: { type: 'whip', dir: 'up', dur: 0.5 }, draw(ctx, t) { C_.drawPrison(ctx, t); }, post: (t) => ({ grade: t < C_.amn + 0.3 ? 'cool' : 'warm', grain: 0.05, vignette: 0.42 }) });
  scenes.push({ id: 's09_bar', start: 1403.15, end: 1405.15, transIn: { type: D_.tvPull, dur: 0.75, ease: 'linear' }, draw(ctx, t) { D_.drawBar(ctx, t); }, post: { grade: 'golden', grain: 0.05, vignette: 0.38 } });
  scenes.push({ id: 's09_money', start: 1405.15, end: 1416.08, draw(ctx, t) { D_.drawMoney(ctx, t); }, post: { grade: 'warm', grain: 0.045, vignette: 0.3 } });
  scenes.push({ id: 's09_congress', start: 1416.08, end: 1427.0, transIn: { type: 'zoom', dur: 0.7, x: 1330, y: 360, amount: 2.4, from: 0.9 }, draw(ctx, t) { E_.drawCongress1(ctx, t); }, post: { grade: 'warm', grain: 0.045, vignette: 0.35 } });
  scenes.push({ id: 's09_familiar', start: 1427.0, end: 1430.88, transIn: { type: 'blur', dur: 0.55 }, draw(ctx, t) { E_.drawFamiliar(ctx, t); }, post: { grade: 'warm', grain: 0.045, vignette: 0.3 } });
  scenes.push({ id: 's09_news', start: 1430.88, end: 1437.88, transIn: { type: 'slide', dir: 'down', dur: 0.55, ease: 'inQuad' }, draw(ctx, t) { E_.drawNews(ctx, t); }, post: (t) => ({ grade: t < E_.young ? 'archival' : 'warm', grain: 0.06, vignette: 0.38, sat: t < E_.young ? 0.9 : 1 }) });
  scenes.push({ id: 's09_break', start: 1437.88, end: 1443.75, transIn: { type: 'zoom', dur: 0.6, x: 960, y: 640, amount: 1.8, from: 0.88 }, draw(ctx, t) { E_.drawBreak(ctx, t); }, post: { grade: 'warm', grain: 0.045, vignette: 0.35 } });
  scenes.push({ id: 's09_four', start: 1443.75, end: 1449.76, transIn: { type: 'tear', dur: 0.6, dir: 'left', seed: 9 }, draw(ctx, t) { E_.drawFour(ctx, t); }, post: { grade: 'warm', grain: 0.045, vignette: 0.3 } });
  scenes.push({ id: 's09_sanchez', start: 1449.76, end: 1452.96, transIn: { type: 'shape', dur: 0.7, ease: 'inOutCubic', path: (p) => { const x0 = 1300, y0 = 760, w0 = 420, h0 = 60; const e = p; return MG.path.rr(lerp(x0, -10, e), lerp(y0, -10, e), lerp(w0, 1940, e), lerp(h0, 1100, e), 6); } }, draw(ctx, t) { F_.drawSanchez(ctx, t); }, post: { grade: 'golden', grain: 0.05, vignette: 0.42 } });
  scenes.push({ id: 's09_coalition', start: 1452.96, end: 1459.12, draw(ctx, t) { F_.drawCoalition(ctx, t); }, post: { grade: 'warm', grain: 0.045, vignette: 0.35 } });
  scenes.push({ id: 's09_table', start: 1459.12, end: 1470.0, transIn: { type: 'blur', dur: 0.5 }, draw(ctx, t) { F_.drawTable(ctx, t); }, post: { grade: 'golden', grain: 0.05, vignette: 0.45 } });
  scenes.push({ id: 's09_spectrum', start: 1470.0, end: 1473.78, transIn: { type: 'whip', dir: 'left', dur: 0.5 }, draw(ctx, t) { G_.drawSpectrum(ctx, t); }, post: { grade: 'warm', grain: 0.045, vignette: 0.36 } });
  scenes.push({ id: 's09_vox', start: 1473.78, end: 1486.29, transIn: { type: G_.unroll, dur: 0.8, ease: 'linear' }, draw(ctx, t) { G_.drawVox(ctx, t); }, post: (t) => ({ grade: 'warm', grain: 0.045, vignette: 0.32 + prog(t, 1483, 1486.2) * 0.15 }) });
  scenes.push({ id: 's09_collapse', start: 1486.29, end: 1490.6, draw(ctx, t) { H_.drawCollapse(ctx, t); }, post: { grade: 'cool', grain: 0.05, vignette: 0.42, sat: 0.9 } });
  scenes.push({ id: 's09_calendar', start: 1490.6, end: 1494.0, transIn: { type: 'push', dir: 'up', dur: 0.6, ease: 'inOutCubic' }, draw(ctx, t) { H_.drawCalendar(ctx, t); }, post: { grade: 'warm', grain: 0.045, vignette: 0.35 } });
  scenes.push({ id: 's09_polls', start: 1494.0, end: 1500.85, transIn: { type: 'blur', dur: 0.5 }, draw(ctx, t) { H_.drawPolls(ctx, t); }, post: (t) => ({ grade: t < H_.far - 0.6 ? 'warm' : 'golden', grain: 0.045, vignette: 0.35 + prog(t, H_.far - 1, H_.far) * 0.1 }) });
  scenes.push({ id: 's09_growth', start: 1500.85, end: 1509.97, transIn: { type: 'push', dir: 'down', dur: 0.7, ease: 'inOutCubic' }, draw(ctx, t) { H_.drawGrowth(ctx, t); }, post: { grade: 'golden', grain: 0.045, vignette: 0.3 } });

  MG.segment('S09', {
    start: 1345.48, end: 1509.97, scenes,
    audio(A) {
      A.music('tension', 1345.48, 1369.0, { key: 'D3', bpm: 92, fadeIn: 1.5, fadeOut: 1.5, intensity: [[1345.5, 0.45], [1349.8, 0.6], [1358.3, 0.55], [1362.4, 0.5], [1366.5, 0.62]] });
    },
  });
  window.S9 = S9; S9.A = A_;
})();
