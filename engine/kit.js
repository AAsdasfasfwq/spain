/* =====================================================================
   MG.kit — the film's shared visual identity: palette, recurring motifs,
   standard map views & styles, typographic interstitials, characters toolkit.
   Use these so 11 segments made by 11 hands look like ONE film.
   ===================================================================== */
(function () {
  const MG = window.MG; const { clamp, lerp } = MG;
  // ---------- palette ("SOL Y SOMBRA") ----------
  const P = (MG.PAL = {
    paper: '#F2E8D5', paper2: '#E8D9BC', paperDark: '#D9C7A5', cal: '#FAF4E8',
    ink: '#1E1A1D', ink2: '#3B3236', sombra: '#3A2B3A', sombraDeep: '#241A26',
    sol: '#F2A33A', solDeep: '#E07B24', solLight: '#F8C978',
    rojo: '#B8322A', rojoDeep: '#7E1F1B', terracota: '#C8693F', ochre: '#D9B477', sand: '#E3CC9A',
    azulejo: '#1F4E8C', azulejoDeep: '#14335F', sky: '#8DB6D9', sea: '#3A6E9E', seaDeep: '#24496E', seaLight: '#A9C6DE',
    oliva: '#6F7A3A', olivaLight: '#A9B26A', green: '#4E7A4A',
    silver: '#BFC3C9', gold: '#C9A04A', bone: '#E6DFD0', concrete: '#8C8A86',
    // era accents
    andalusTeal: '#0F4C4A', andalusGold: '#D4A84B', indigoNight: '#1B1F3B', parchment: '#E9DBB9', storm: '#59606B',
    retroTeal: '#2FA7A0', retroCoral: '#F0735A', retroButter: '#F6D06F', euBlue: '#24408E', heatOrange: '#F08A3C', waterBlue: '#49A6E0',
    nightSea: '#0F2238', earth: '#2A2320', candle: '#F5B85A',
    psoe: '#C8423B', pp: '#2D7FC0', vox: '#5E9E45',
  });
  /** chapter colour states (bg, fg, accent, accent2, shade) — see docs/BRIEF.md */
  MG.STATES = {
    hook: { bg: P.paper, fg: P.ink, a: P.sol, b: P.azulejo, shade: P.sombra },
    land: { bg: P.paper2, fg: P.ink, a: P.terracota, b: P.sea, shade: P.sombra },
    andalus: { bg: P.indigoNight, fg: P.cal, a: P.andalusGold, b: P.andalusTeal, shade: '#0b0f22' },
    empire: { bg: P.parchment, fg: P.ink, a: P.silver, b: P.indigoNight, shade: '#2a2230' },
    decline: { bg: '#D8CDB6', fg: P.ink, a: P.storm, b: P.rojoDeep, shade: '#2b2a2c' },
    war: { bg: P.bone, fg: '#111012', a: P.rojo, b: '#111012', shade: '#000' },
    miracle: { bg: '#F4E9D2', fg: '#22343C', a: P.retroCoral, b: P.retroTeal, c: P.retroButter, shade: '#29414a' },
    europe: { bg: P.cal, fg: P.ink, a: P.euBlue, b: P.sol, shade: P.sombra },
    economy: { bg: P.cal, fg: P.ink, a: P.sol, b: P.azulejo, shade: P.sombra },
    crisis: { bg: '#CFCBC4', fg: '#1d1d1f', a: P.rojo, b: P.concrete, shade: '#2c2f36' },
    summer: { bg: '#F7E3C4', fg: P.ink, a: P.heatOrange, b: P.waterBlue, shade: '#5a2d1f' },
    politics: { bg: P.paper, fg: P.ink, a: P.rojo, b: P.azulejo, shade: P.sombra },
    memory: { bg: P.earth, fg: P.bone, a: P.candle, b: '#6b5a4c', shade: '#120e0c' },
    border: { bg: P.nightSea, fg: P.cal, a: P.sol, b: P.seaLight, shade: '#081320' },
    finale: { bg: '#F4D9B0', fg: P.ink, a: P.solDeep, b: '#7B4A7A', shade: '#3b2140' },
  };
  MG.kit = {};
  const K = MG.kit;

  // ---------- recurring motif: the SUN DISK ----------
  /** The film's signature sun: textured saffron disk with halftone terminator, soft corona and slow ray breathing.
   *  o: {color, deep, rays (0..1), corona (0..1), halftone (0..1), rot, ring (stroke colour), variant:'sun'|'coin'|'clock'|'flat', t} */
  K.sun = (ctx, x, y, r, t = 0, o = {}) => {
    if (r <= 0.5) return; const c = o.color || P.sol, d = o.deep || P.solDeep; const v = o.variant || 'sun';
    ctx.save();
    if ((o.corona ?? 0.6) > 0 && v === 'sun') MG.fx.glow(ctx, x, y, r * 2.6, P.solLight, 0.28 * (o.corona ?? 0.6));
    if ((o.rays ?? 0) > 0) { const n = 18; ctx.save(); ctx.translate(x, y); ctx.rotate((o.rot || 0) + t * 0.05); ctx.fillStyle = MG.col.a(o.rayColor || c, 0.85 * o.rays); for (let i = 0; i < n; i++) { const a = (i / n) * MG.TAU; const L = r * (1.25 + 0.12 * Math.sin(t * 1.3 + i * 1.7)) * (0.6 + 0.4 * o.rays); ctx.beginPath(); ctx.moveTo(Math.cos(a - 0.07) * r * 1.06, Math.sin(a - 0.07) * r * 1.06); ctx.lineTo(Math.cos(a) * (r + L * 0.45), Math.sin(a) * (r + L * 0.45)); ctx.lineTo(Math.cos(a + 0.07) * r * 1.06, Math.sin(a + 0.07) * r * 1.06); ctx.closePath(); ctx.fill(); } ctx.restore(); }
    const disk = MG.path.circle(x, y, r);
    if (v === 'coin') { MG.fx.volume(ctx, disk, [x - r, y - r, r * 2, r * 2], { color: o.color || P.silver, shade: 0.5, hi: 0.55, rim: '#ffffff', rimW: r * 0.04, tex: 'grain', texAlpha: 0.25 }); ctx.strokeStyle = MG.col.a(P.ink, 0.35); ctx.lineWidth = r * 0.03; ctx.beginPath(); ctx.arc(x, y, r * 0.86, 0, MG.TAU); ctx.stroke(); }
    else {
      MG.fx.volume(ctx, disk, [x - r, y - r, r * 2, r * 2], { color: c, shadeColor: d, shade: v === 'flat' ? 0 : 0.55, hi: 0.4, hiColor: '#FFE2A8', soft: 0.3, tex: 'blotch', texAlpha: 0.22, texColor: d });
      if ((o.halftone ?? 0.6) > 0 && v !== 'flat') MG.fx.halftone(ctx, disk, [x - r, y - r, r * 2, r * 2], { spacing: Math.max(5, r * 0.07), color: MG.col.a(d, 0.55 * (o.halftone ?? 0.6)), cut: 0.45, amount: 1.3, light: [-0.6, -0.8] });
    }
    if (v === 'clock') { ctx.strokeStyle = MG.col.a(P.ink, 0.8); ctx.lineCap = 'round'; for (let i = 0; i < 12; i++) { const a = (i / 12) * MG.TAU; ctx.lineWidth = i % 3 ? r * 0.02 : r * 0.04; ctx.beginPath(); ctx.moveTo(x + Math.cos(a) * r * 0.78, y + Math.sin(a) * r * 0.78); ctx.lineTo(x + Math.cos(a) * r * 0.9, y + Math.sin(a) * r * 0.9); ctx.stroke(); } const hr = o.hour ?? 10.5, mn = (hr % 1) * 60; const ha = ((hr % 12) / 12) * MG.TAU - Math.PI / 2, ma = (mn / 60) * MG.TAU - Math.PI / 2; ctx.lineWidth = r * 0.06; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(ha) * r * 0.5, y + Math.sin(ha) * r * 0.5); ctx.stroke(); ctx.lineWidth = r * 0.035; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(ma) * r * 0.75, y + Math.sin(ma) * r * 0.75); ctx.stroke(); ctx.fillStyle = P.ink; ctx.beginPath(); ctx.arc(x, y, r * 0.05, 0, MG.TAU); ctx.fill(); }
    if (o.ring) { ctx.strokeStyle = o.ring; ctx.lineWidth = o.ringW || 3; ctx.beginPath(); ctx.arc(x, y, r + (o.ringGap || 10), 0, MG.TAU); ctx.stroke(); }
    ctx.restore();
  };
  /** "sol y sombra" diagonal light split overlay: a hard-edged warm shadow band across the frame (the bullring divide).
   *  pos 0..1 slides the divide; angle deg; alpha of shadow */
  K.solSombra = (ctx, pos = 0.5, o = {}) => { const ang = MG.deg(o.angle ?? -62); ctx.save(); ctx.translate(lerp(-300, MG.W + 300, pos), MG.H / 2); ctx.rotate(ang); ctx.fillStyle = MG.col.a(o.color || P.sombra, o.alpha ?? 0.32); ctx.globalCompositeOperation = o.blend || 'multiply'; ctx.fillRect(0, -2000, 4000, 4000); ctx.restore(); };
  /** transition preset using the shadow divide (pass as transIn: MG.kit.T.sombra) */
  K.T = {};
  K.T.sombra = { type: 'wipe', dur: 0.7, angle: -62 + 90, band: P.sombra, bandW: 70, band2: P.sol, ease: 'inOutCubic' };
  K.T.sunIris = (x = 960, y = 540) => ({ type: 'iris', dur: 0.75, x, y, ring: P.sol, ringW: 22, ease: 'inOutCubic' });
  K.T.tiles = { type: 'tiles', dur: 0.9, size: 135, color: P.azulejo };
  K.T.tear = { type: 'tear', dur: 0.8, dir: 'right' };
  K.T.whipL = { type: 'whip', dur: 0.45, dir: 'left' };
  K.T.whipR = { type: 'whip', dur: 0.45, dir: 'right' };
  K.T.rack = { type: 'blur', dur: 0.7 };
  K.T.flash = { type: 'flash', dur: 0.5 };

  // ---------- backgrounds ----------
  /** standard paper ground with optional colour; light falloff + fibres */
  K.paper = (ctx, color = P.paper, o = {}) => ctx.drawImage(MG.tex.paper(color, { seed: o.seed || 1, light: o.light ?? 0.25, blotch: o.blotch ?? 0.08 }), 0, 0);
  /** dark ground with warm/cool light pool (for night/memory scenes) */
  K.night = (ctx, base = P.indigoNight, o = {}) => { ctx.fillStyle = base; ctx.fillRect(0, 0, MG.W, MG.H); const g = ctx.createRadialGradient(o.x ?? 1000, o.y ?? 420, 0, o.x ?? 1000, o.y ?? 420, o.r ?? 1100); g.addColorStop(0, MG.col.a(o.light || '#3a3f6b', 0.85)); g.addColorStop(1, MG.col.a(base, 0)); ctx.fillStyle = g; ctx.fillRect(0, 0, MG.W, MG.H); MG.tex.over(ctx, 'blotch', { alpha: 0.12, color: '#000', scale: 3 }); };

  // ---------- standard map views & styles ----------
  /** shared camera presets (use with MG.geo.proj(kind, view)) so adjacent segments can match-cut on maps */
  K.views = {
    iberia: { kind: 'spain', center: [-3.6, 40.0], scale: 6900 },          // whole peninsula + Balearics, fills frame
    iberiaWide: { kind: 'spain', center: [-3.0, 39.2], scale: 4300 },      // + N.Africa coast, France south
    spainTight: { kind: 'spain', center: [-3.7, 40.2], scale: 8400 },
    westMed: { kind: 'spain', center: [-2.0, 38.5], scale: 3000 },
    europe: { kind: 'conic', center: [6, 48], scale: 1350 },
    atlantic: { kind: 'natural', center: [-35, 22], scale: 520 },
    world: { kind: 'natural', center: [10, 10], scale: 300 },
  };
  K.view = (name, over = {}) => { const v = { ...K.views[name], ...over }; return MG.geo.proj(v.kind, v); };
  /** map style tokens */
  K.map = {
    sea: P.seaLight, seaDeep: P.sea, land: '#E9DCC0', landOther: '#E3D6BB', border: 'rgba(58,43,58,0.35)', coast: 'rgba(30,26,29,0.55)',
    spain: P.sol, spainDeep: P.solDeep, highlight: P.rojo, label: P.ink, labelMuted: 'rgba(30,26,29,0.55)',
  };
  /** draw the standard sea: flat colour + soft depth gradient + fine wave lines (cached) */
  K.seaBg = (ctx, color = K.map.sea, o = {}) => { const c = MG.cache(`sea:${color}:${o.lines ?? 1}`, MG.W, MG.H, (x, w, h) => { x.fillStyle = color; x.fillRect(0, 0, w, h); const g = x.createRadialGradient(w * 0.45, h * 0.4, 100, w * 0.5, h * 0.5, w * 0.8); g.addColorStop(0, 'rgba(255,255,255,0.18)'); g.addColorStop(1, 'rgba(10,30,60,0.22)'); x.fillStyle = g; x.fillRect(0, 0, w, h); if (o.lines ?? 1) { x.strokeStyle = 'rgba(255,255,255,0.13)'; x.lineWidth = 1.2; for (let yy = 8; yy < h; yy += 14) { x.beginPath(); for (let xx = 0; xx <= w; xx += 12) x.lineTo(xx, yy + Math.sin(xx * 0.013 + yy * 0.7) * 2.2); x.stroke(); } } MG.tex.over(x, 'grain', { alpha: 0.08, blend: 'overlay' }); }); ctx.drawImage(c, 0, 0); };
  /** standard Iberia base map: sea, neighbours, Spain (optionally lifted as slab), Portugal muted. returns projection.
   *  o: {view (name|params), spain: colour, lift (px slab depth), relief (alpha 0..1), regions (bool), provinces(bool), labels(bool), t} */
  K.iberiaMap = (ctx, o = {}) => {
    MG.geo.init(); const pr = o.proj || (typeof o.view === 'object' ? MG.geo.proj(o.view.kind || 'spain', o.view) : K.view(o.view || 'iberia'));
    K.seaBg(ctx, o.sea || K.map.sea);
    const neigh = ['France', 'Portugal', 'Morocco', 'Algeria', 'Andorra', 'Italy', 'Switzerland', 'Tunisia', 'Gibraltar', 'United Kingdom', 'Belgium', 'Germany', 'W. Sahara', 'Mauritania'];
    for (const n of neigh) { const f = MG.geo.country(n, '10'); if (f) MG.geo.draw(ctx, pr, f, { fill: n === 'Portugal' ? (o.portugal || '#E6D7B8') : K.map.landOther, stroke: K.map.border, width: 1 }); }
    const es = MG.geo.country('Spain', '10');
    if (o.lift) MG.geo.slab(ctx, pr, es, { depth: o.lift, top: o.spain || K.map.spain, side: MG.col.shade(o.spain || K.map.spain, 0.5), shadowDy: o.lift * 1.2, tex: 'blotch', texAlpha: 0.15, stroke: K.map.coast, width: 1.2 });
    else MG.geo.draw(ctx, pr, es, { fill: o.spain || K.map.spain, stroke: K.map.coast, width: 1.3, shadow: o.shadow === false ? null : { blur: 18, dy: 8, color: 'rgba(40,20,10,0.25)' } });
    if (o.relief) { ctx.save(); MG.geo.clip(ctx, pr, es); ctx.globalAlpha = o.relief; ctx.globalCompositeOperation = 'multiply'; MG.geo.relief(ctx, pr, { alpha: 1 }); ctx.restore(); }
    if (o.regions) MG.geo.draw(ctx, pr, MG.geo.regionMesh, { stroke: 'rgba(58,43,58,0.45)', width: 1.1 });
    if (o.provinces) MG.geo.draw(ctx, pr, MG.geo.provinceMesh, { stroke: 'rgba(58,43,58,0.25)', width: 0.7 });
    return pr;
  };

  // ---------- typographic interstitials ----------
  /** big year / date card (time jumps). o: {sub, bg, fg, accent, font} ; animates in from t0, returns progress */
  K.dateCard = (ctx, t, t0, year, o = {}) => {
    const S = o.state || MG.STATES.hook; ctx.fillStyle = o.bg || S.bg; ctx.fillRect(0, 0, MG.W, MG.H); K.paper(ctx, o.bg || S.bg, { light: 0.2 });
    const p = MG.prog(t, t0, t0 + 0.9); const str = String(year);
    MG.text.reveal(ctx, str, 960, 640, t, t0, { font: o.font || MG.F.cond, weight: 900, size: o.size || 380, color: o.fg || S.fg, align: 'center', style: 'rise', by: 'char', stagger: 0.06, dur: 0.6, tracking: -0.01 });
    const w = MG.text.width(ctx, str, { font: o.font || MG.F.cond, weight: 900, size: o.size || 380 }); ctx.fillStyle = o.accent || S.a; ctx.fillRect(960 - w / 2, 690, w * MG.prog(t, t0 + 0.3, t0 + 1.1), 10);
    if (o.sub) MG.text.reveal(ctx, o.sub, 960, 770, t, t0 + 0.45, { font: MG.F.serif, italic: true, size: 54, color: o.fg || S.fg, align: 'center', style: 'blur', by: 'word' });
    return p;
  };
  /** chapter card: small mono kicker + big display title. o: {kicker:'PART II', title, state} */
  K.chapter = (ctx, t, t0, title, o = {}) => {
    const S = o.state || MG.STATES.hook; K.paper(ctx, S.bg, { light: 0.25 });
    MG.text.reveal(ctx, (o.kicker || '').toUpperCase(), 960, 420, t, t0, { font: MG.F.mono, weight: 500, size: 24, tracking: 0.35, color: S.a, align: 'center', style: 'track', by: 'line' });
    MG.text.reveal(ctx, title, 960, 600, t, t0 + 0.2, { font: MG.F.display, weight: 800, size: o.size || 150, color: S.fg, align: 'center', style: 'rise', by: 'word', stagger: 0.09 });
    K.sun(ctx, 960, 760, 18 * MG.prog(t, t0 + 0.5, t0 + 1.0, 'outBack'), t, { corona: 0.2, halftone: 0 });
  };
  /** small name tag / lower label for people & places. o: {sub, x, y, align, color, bg} */
  K.tag = (ctx, t, t0, name, o = {}) => {
    const x = o.x ?? 140, y = o.y ?? 900; const k = MG.prog(t, t0, t0 + 0.5); if (k <= 0) return;
    ctx.save(); ctx.globalAlpha *= o.alpha ?? 1; const w = MG.text.width(ctx, name, { font: MG.F.grotesk, weight: 700, size: o.size || 44 }) + 36;
    ctx.fillStyle = o.bg || P.ink; ctx.fillRect(x, y - (o.size || 44) - 14, w * k, (o.size || 44) + 30);
    MG.text.reveal(ctx, name, x + 18, y, t, t0 + 0.12, { font: MG.F.grotesk, weight: 700, size: o.size || 44, color: o.color || P.cal, style: 'rise', by: 'word' });
    if (o.sub) MG.text.reveal(ctx, o.sub.toUpperCase(), x + 2, y + 46, t, t0 + 0.3, { font: MG.F.mono, weight: 500, size: 20, tracking: 0.18, color: o.subColor || P.ink2, style: 'fade', by: 'line' });
    ctx.restore();
  };
  /** torn paper card with drop shadow (editorial collage piece). returns Path2D */
  K.card = (ctx, x, y, w, h, o = {}) => { const p = MG.path.torn(x, y, w, h, { seed: o.seed || 3, amp: o.amp ?? 3, edges: o.edges || 'tblr' }); ctx.save(); if (o.rot) { ctx.translate(x + w / 2, y + h / 2); ctx.rotate(o.rot); ctx.translate(-(x + w / 2), -(y + h / 2)); } MG.fx.shadow(ctx, p, { dx: o.sdx ?? 8, dy: o.sdy ?? 14, blur: o.sblur ?? 22, color: 'rgba(40,20,10,0.32)' }); ctx.fillStyle = o.color || P.cal; ctx.fill(p); ctx.clip(p); MG.tex.over(ctx, 'fibers', { alpha: 0.6 }); if (o.draw) o.draw(ctx); ctx.restore(); return p; };

  // ---------- characters toolkit ----------
  /** Expressive eye. o: {r, look:[-1..1,-1..1], blink 0..1, iris colour, lid (0 open … 1 half-lidded), angry, sad, outline} */
  K.eye = (ctx, x, y, o = {}) => {
    const r = o.r || 18, bl = clamp(o.blink || 0), lid = clamp(o.lid || 0); const lk = o.look || [0, 0];
    ctx.save(); const w = r * (o.w || 1.15), h = r * (1 - bl * 0.95);
    const shape = MG.path.ellipse(x, y, w, Math.max(0.6, h), o.tilt || 0);
    ctx.fillStyle = o.sclera || '#FBF6EE'; ctx.fill(shape); ctx.save(); ctx.clip(shape);
    const ir = r * (o.irisScale || 0.62); const ix = x + lk[0] * w * 0.38, iy = y + lk[1] * r * 0.32;
    ctx.fillStyle = o.iris || '#5B3A22'; ctx.beginPath(); ctx.arc(ix, iy, ir, 0, MG.TAU); ctx.fill();
    ctx.fillStyle = '#120c0a'; ctx.beginPath(); ctx.arc(ix, iy, ir * (o.pupil || 0.55), 0, MG.TAU); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.95)'; ctx.beginPath(); ctx.arc(ix - ir * 0.35, iy - ir * 0.4, ir * 0.28, 0, MG.TAU); ctx.fill(); ctx.beginPath(); ctx.arc(ix + ir * 0.3, iy + ir * 0.3, ir * 0.1, 0, MG.TAU); ctx.fill();
    // upper lid shadow + lid
    ctx.fillStyle = 'rgba(60,30,30,0.22)'; ctx.fillRect(x - w, y - r, w * 2, r * 0.45);
    if (lid > 0 || o.angry || o.sad) { ctx.fillStyle = o.skin || '#E2A77F'; ctx.beginPath(); const a = o.angry ? 0.45 : o.sad ? -0.4 : 0; ctx.moveTo(x - w * 1.2, y - r * 1.2); ctx.lineTo(x + w * 1.2, y - r * 1.2); ctx.lineTo(x + w * 1.2, y - r + r * 2 * lid * 0.5 + (o.angry ? -r * 0.1 : r * 0.5 * Math.max(0, a)) + r * 0.25 * (o.angry ? 1 : 0)); ctx.lineTo(x - w * 1.2, y - r + r * 2 * lid * 0.5 + (o.sad ? r * 0.55 : 0) - (o.angry ? r * 0.05 : 0)); ctx.closePath(); ctx.fill(); }
    ctx.restore();
    ctx.strokeStyle = o.outline || '#2a1a16'; ctx.lineWidth = Math.max(1.5, r * 0.12); ctx.lineCap = 'round';
    ctx.beginPath(); ctx.ellipse(x, y, w, Math.max(0.6, h), o.tilt || 0, Math.PI * 1.05, Math.PI * 1.95); ctx.stroke(); // upper lash line
    ctx.lineWidth = Math.max(1, r * 0.06); ctx.globalAlpha = 0.6; ctx.beginPath(); ctx.ellipse(x, y, w, Math.max(0.6, h), o.tilt || 0, Math.PI * 0.15, Math.PI * 0.85); ctx.stroke();
    ctx.restore();
  };
  /** eyebrow as tapered ink stroke. raise (-1..1), angle (rad), w */
  K.brow = (ctx, x, y, o = {}) => { const w = o.w || 40, a = o.angle || 0, ry = (o.raise || 0) * -w * 0.35; const pts = []; for (let i = 0; i <= 8; i++) { const u = i / 8 - 0.5; pts.push([x + u * w * Math.cos(a), y + ry + u * w * Math.sin(a) - Math.sin((u + 0.5) * Math.PI) * w * (o.arch ?? 0.12)]); } MG.fx.ink(ctx, o.flip ? pts.reverse() : pts, { width: o.thick || w * 0.2, color: o.color || '#2a1a16', taper: [0.1, 0.6] }); };
  /** mouth shapes: mood 'neutral'|'smile'|'grin'|'frown'|'o'|'smirk'|'shout'|'flat' ; open 0..1 ; w */
  K.mouth = (ctx, x, y, o = {}) => {
    const w = o.w || 50, op = clamp(o.open || 0), m = o.mood || 'neutral'; const curve = { neutral: 0.05, smile: 0.35, grin: 0.45, frown: -0.3, o: 0, smirk: 0.2, shout: -0.05, flat: 0 }[m] ?? 0; const ink = o.color || '#3a1a17';
    ctx.save(); ctx.translate(x, y); if (o.rot) ctx.rotate(o.rot);
    const h = w * (0.08 + op * (m === 'o' ? 0.6 : m === 'shout' ? 0.75 : 0.45));
    if (op > 0.05 || m === 'grin' || m === 'o' || m === 'shout') {
      const p = new Path2D(); const sk = m === 'smirk' ? 0.25 : 0; const lw = m === 'o' ? w * 0.32 : w / 2;
      p.moveTo(-lw, -curve * w * 0.4 + sk * w * 0.2); p.quadraticCurveTo(0, -curve * w * 0.1 - h * 0.25, lw, -curve * w * 0.4 - sk * w * 0.3); p.quadraticCurveTo(0, h * 1.6 - curve * w * 0.0, -lw, -curve * w * 0.4 + sk * w * 0.2); p.closePath();
      ctx.fillStyle = '#4a1414'; ctx.fill(p); ctx.save(); ctx.clip(p); ctx.fillStyle = '#F4EFE6'; ctx.fillRect(-lw, -curve * w * 0.5 - h * 0.4, lw * 2, h * 0.55); ctx.fillStyle = '#C85A5A'; ctx.beginPath(); ctx.ellipse(0, h * 1.15, lw * 0.6, h * 0.5, 0, 0, MG.TAU); ctx.fill(); ctx.restore();
      ctx.strokeStyle = ink; ctx.lineWidth = Math.max(2, w * 0.06); ctx.lineJoin = 'round'; ctx.stroke(p);
    } else { const pts = []; for (let i = 0; i <= 10; i++) { const u = i / 10 - 0.5; pts.push([u * w, -Math.cos(u * Math.PI) * curve * w * 0.4 + (m === 'smirk' ? -u * w * 0.25 : 0)]); } MG.fx.ink(ctx, pts, { width: Math.max(2.5, w * 0.08), color: ink, taper: [0.25, 0.25] }); }
    ctx.restore();
  };
  /** generic blink signal: returns 0..1 lid closure at time t (natural random blinks, seedable) */
  K.blink = (t, seed = 1) => { const period = 3.2 + MG.hash(seed) * 2; const ph = MG.fract(t / period + MG.hash(seed + 1)); const k = ph * period; return k < 0.07 ? k / 0.07 : k < 0.14 ? 1 - (k - 0.07) / 0.07 : 0; };
  /** hand: pose 'open'|'point'|'fist'|'wave'|'thumb'; x,y = wrist, angle rad, s scale. skin, outline */
  K.hand = (ctx, x, y, o = {}) => {
    const s = o.s || 1, a = o.angle || 0, pose = o.pose || 'open', skin = o.skin || '#E2A77F', ol = o.outline || '#2a1a16';
    ctx.save(); ctx.translate(x, y); ctx.rotate(a); ctx.scale(s * (o.flip ? -1 : 1), s);
    const palm = MG.path.smooth([[-14, 0], [14, -2], [20, 26], [12, 44], [-12, 44], [-20, 22]], true);
    const fingers = []; const F = (bx, by, len, ang, w = 9) => { const pts = []; for (let i = 0; i <= 6; i++) { const u = i / 6; pts.push([bx + Math.sin(ang) * len * u, by + Math.cos(ang) * len * u]); } fingers.push({ pts, w }); };
    if (pose === 'open' || pose === 'wave') { F(-11, 40, 30, -0.25); F(-3, 44, 36, -0.05); F(5, 44, 34, 0.08); F(12, 40, 27, 0.25, 8); F(-18, 18, 24, -1.0, 9); }
    else if (pose === 'point') { F(-3, 44, 40, 0); F(5, 42, 12, 0.3); F(12, 38, 10, 0.4, 8); F(-11, 38, 10, -0.2); F(-18, 18, 20, -0.9); }
    else if (pose === 'thumb') { F(-20, 10, 30, -2.6, 10); F(-6, 40, 10, 0); F(3, 42, 10, 0); F(11, 38, 9, 0); }
    else { F(-8, 40, 10, -0.2); F(0, 43, 11, 0); F(8, 41, 10, 0.2); F(-18, 22, 16, -1.4); }
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    for (const f of fingers) { ctx.strokeStyle = ol; ctx.lineWidth = f.w + 4.5; ctx.beginPath(); f.pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); }
    ctx.fillStyle = skin; ctx.strokeStyle = ol; ctx.lineWidth = 4.5; ctx.stroke(palm); ctx.fill(palm);
    for (const f of fingers) { ctx.strokeStyle = skin; ctx.lineWidth = f.w; ctx.beginPath(); f.pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); }
    ctx.fillStyle = MG.col.a('#7a3a2a', 0.18); ctx.beginPath(); ctx.ellipse(4, 24, 12, 14, 0, 0, MG.TAU); ctx.fill();
    ctx.restore();
  };
  /** squash & stretch helper for bouncy body parts: returns [sx, sy] preserving volume */
  K.squash = (k) => [1 / Math.sqrt(Math.max(0.2, 1 + k)), 1 + k];
  /** animate-on-twos time (12 fps stepping) for hand-drawn boil & paper-cut motion */
  K.twos = (t) => Math.floor(t * 12) / 12;
  /** idle "alive" offsets for a character: {bob, sway, breath} */
  K.alive = (t, seed = 1) => ({ bob: Math.sin(t * 2.1 + seed) * 2 + MG.wiggle(t, 0.5, 1.5, seed), sway: MG.wiggle(t, 0.3, 0.03, seed + 4), breath: 1 + Math.sin(t * 1.6 + seed) * 0.012 });
})();
