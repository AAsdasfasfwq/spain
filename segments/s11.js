/* S11 — PLAN (placeholder, rewritten at the end) */
(function () {
  const MG = window.MG; const P = MG.PAL; const F = MG.F; const { clamp, lerp } = MG;
  const S11 = {}; // local helpers / engine workarounds live here
  const W = MG.W, H = MG.H;
  const Tw = (w, a) => MG.T(w, a, 4);
  const TEw = (w, a) => MG.Tend(w, a, 4);
  const pg = MG.prog, ln = MG.lin;
  const C = {
    sky0: '#FCEBC6', sky1: '#F8D49C', sky2: '#F2B27C', sky3: '#E08E78', rose: '#D97B72', violet: '#7B4A7A', plum: '#3B2140', plumDeep: '#24152A',
    cream: '#FBF1DC', linen: '#F1E3C8', ink: P.ink, sol: P.sol, solDeep: P.solDeep, solLight: P.solLight, cobalt: P.azulejo,
  };
  S11.C = C;

  // ---------------------------------------------------------------- generic helpers
  const ease = MG.ease;
  S11.spokenAt = {}; // phrase cache
  S11.ph = (txt, approx) => { const k = txt + '@' + approx; if (!S11.spokenAt[k]) S11.spokenAt[k] = MG.phrase(txt, approx, 4); return S11.spokenAt[k]; };
  /** words of a phrase appear exactly when spoken */
  S11.say = (ctx, t, txt, approx, x, y, o = {}) => MG.text.spoken(ctx, S11.ph(txt, approx).words, x, y, t, { style: 'rise', lead: 0.06, ...o });
  /** small tracked mono kicker with a tick line */
  S11.kicker = (ctx, t, t0, str, x, y, o = {}) => {
    const k = pg(t, t0, t0 + 0.5); if (k <= 0) return; ctx.save(); ctx.globalAlpha *= (o.alpha ?? 1);
    ctx.fillStyle = o.color || C.ink; ctx.fillRect(x, y - 9, 26 * k, 3);
    MG.text.reveal(ctx, str, x + 38, y, t, t0 + 0.05, { font: F.mono, weight: 600, size: o.size || 22, tracking: 0.22, color: o.color || C.ink, style: 'track', by: 'line', align: 'left' });
    ctx.restore();
  };
  /** soft out-of-window envelope for overlays */
  S11.env = (t, a, b, i = 0.35, o = 0.3) => MG.win(t, a, b, i, o);
  S11.rgba = (hex, a) => MG.col.a(hex, a);
  /** cached vertical gradient sky */
  S11.sky = (ctx, stops, key) => { const c = MG.cache('s11sky:' + key, W, H, (x, w, h) => { const g = x.createLinearGradient(0, 0, 0, h); stops.forEach(([p, c]) => g.addColorStop(p, c)); x.fillStyle = g; x.fillRect(0, 0, w, h); MG.tex.over(x, 'blotch', { alpha: 0.07, color: '#7a3a2a', scale: 3 }); MG.tex.over(x, 'fibers', { alpha: 0.35 }); }); ctx.drawImage(c, 0, 0); };
  /** paper-cut cloud strip (cached sprite) */
  S11.cloud = (w, h, seed, top, bot) => MG.cache(`s11cloud:${w}:${h}:${seed}:${top}:${bot}`, w + 40, h + 40, (x) => { const r = MG.rng(seed); const pts = []; const n = 9; for (let i = 0; i <= n; i++) pts.push([20 + (i / n) * w, 20 + h * 0.55 - (Math.sin((i / n) * Math.PI) * h * 0.45) * (0.6 + r() * 0.5)]); pts.push([20 + w, 20 + h * 0.62]); for (let i = n; i >= 0; i--) pts.push([20 + (i / n) * w, 20 + h * 0.7 + r() * 4]); const p = MG.path.smooth(pts, true, 0.4); const g = x.createLinearGradient(0, 20, 0, 20 + h); g.addColorStop(0, top); g.addColorStop(1, bot); x.fillStyle = g; x.fill(p); x.save(); x.clip(p); MG.tex.over(x, 'fibers', { alpha: 0.5 }); x.restore(); });

  // ---------------------------------------------------------------- handoff transition: a real sunrise washes over S10
  /** golden light rises from the new scene's sun position, burns over the previous frame, then the new scene dawns through it */
  S11.sunrise = (ctx, A, B, p, o) => {
    const sx = o.sx ?? 900, sy = o.sy ?? 640;
    ctx.drawImage(A, 0, 0);
    const k = MG.smoothstep(0, 0.55, p), fall = 1 - MG.smoothstep(0.55, 1, p);
    ctx.save(); ctx.globalCompositeOperation = 'screen';
    const R = 300 + 2200 * k; const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, R);
    g.addColorStop(0, `rgba(255,232,180,${0.95 * k})`); g.addColorStop(0.35, `rgba(255,186,110,${0.7 * k})`); g.addColorStop(1, 'rgba(255,140,70,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); ctx.restore();
    // new scene emerges from the light, outward from the sun
    const q = MG.ease.inOutCubic(clamp((p - 0.18) / 0.82)); if (q <= 0) return;
    const S = MG.scratch(3); const x = S.getContext('2d'); x.setTransform(1, 0, 0, 1, 0, 0); x.globalCompositeOperation = 'source-over'; x.clearRect(0, 0, W, H); x.drawImage(B, 0, 0);
    x.globalCompositeOperation = 'destination-in'; const r = 60 + q * 2400; const m = x.createRadialGradient(sx, sy, r * 0.55, sx, sy, r); m.addColorStop(0, 'rgba(0,0,0,1)'); m.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = m; x.fillRect(0, 0, W, H); x.globalCompositeOperation = 'source-over';
    ctx.drawImage(S, 0, 0);
    if (fall > 0) { ctx.save(); ctx.globalCompositeOperation = 'screen'; ctx.globalAlpha = 0.45 * fall * k; ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); ctx.restore(); }
  };
  /** dissolve with matched scale/offset (match cut helper): A and B blend while both are scaled about (x,y) */
  S11.matchDissolve = (ctx, A, B, p, o) => {
    const x = o.x ?? 960, y = o.y ?? 540; const e = MG.ease.inOutCubic(p);
    const sa = lerp(1, o.aTo ?? 1.15, e), sb = lerp(o.bFrom ?? 0.88, 1, e);
    ctx.save(); ctx.translate(x, y); ctx.scale(sa, sa); ctx.translate(-x, -y); ctx.drawImage(A, 0, 0); ctx.restore();
    ctx.save(); ctx.globalAlpha = MG.smoothstep(0.1, 0.9, p); ctx.translate(x, y); ctx.scale(sb, sb); ctx.translate(-x, -y); ctx.drawImage(B, 0, 0); ctx.restore();
  };

  // ---------------------------------------------------------------- THREE helpers
  const TH = () => window.THREE;
  S11.tex = (canvas, o = {}) => { const tx = MG.three.canvasTexture(canvas); if (o.repeat) { tx.wrapS = tx.wrapT = TH().RepeatWrapping; tx.repeat.set(o.repeat[0], o.repeat[1]); } return tx; };
  /** linen / paper tile used for the table world (shared by the 3D diorama and the 2D table → seamless match) */
  S11.linenTile = () => MG.cache('s11:linen', 512, 512, (x, w, h) => {
    x.fillStyle = C.linen; x.fillRect(0, 0, w, h); const r = MG.rng(41);
    for (let i = 0; i < h; i += 3) { x.fillStyle = `rgba(120,90,60,${0.05 + r() * 0.05})`; x.fillRect(0, i, w, 1); }
    for (let i = 0; i < w; i += 3) { x.fillStyle = `rgba(255,250,235,${0.06 + r() * 0.06})`; x.fillRect(i, 0, 1, h); }
    MG.tex.over(x, 'blotch', { alpha: 0.08, color: '#8a5a3a', scale: 2, seed: 4 }); MG.tex.over(x, 'fibers', { alpha: 0.5, seed: 6 });
  });
  /** project a feature to a THREE.Shape list. filter(ring lonlat) keeps rings; width = target width in world units */
  S11.shapes = (feature, center, width, filter = () => true, eps = 0.004) => {
    const T = TH(); const pr = MG.geo.proj('azimuthal', { center, scale: 1, translate: [0, 0] }); const g = feature.geometry; const polys = g.type === 'Polygon' ? [g.coordinates] : g.coordinates;
    const rings = polys.filter((p) => filter(p[0])).map((p) => p[0].map((ll) => pr(ll)));
    let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9; rings.forEach((r) => r.forEach(([x, y]) => { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }));
    const k = width / (x1 - x0), cx = (x0 + x1) / 2, cy = (y0 + y1) / 2; const out = []; const flat = [];
    for (const r of rings) { const pts = []; let last = null; for (const [x, y] of r) { const X = (x - cx) * k, Y = -(y - cy) * k; if (!last || Math.hypot(X - last[0], Y - last[1]) > eps * width) { pts.push([X, Y]); last = [X, Y]; } } if (pts.length > 4) { out.push(new T.Shape(pts.map(([a, b]) => new T.Vector2(a, b)))); flat.push(pts); } }
    return { shapes: out, rings: flat, w: width, h: (y1 - y0) * k };
  };
  /** flat ground decal (soft shadow) from a 2D draw function in world units (cx,cz centre, size) */
  S11.decal = (key, sizeX, sizeZ, drawFn, blur = 18, res = 256) => {
    const T = TH(); const c = MG.cache('s11decal:' + key, res, Math.round(res * sizeZ / sizeX), (x, w, h) => { const tmp = MG.canvas(w, h); const y = tmp.getContext('2d'); y.translate(w / 2, h / 2); y.scale(w / sizeX, h / sizeZ); y.fillStyle = '#000'; drawFn(y); x.filter = `blur(${blur}px)`; x.drawImage(tmp, 0, 0); x.filter = 'none'; });
    const m = new T.MeshBasicMaterial({ map: S11.tex(c), color: 0x3b2140, transparent: true, opacity: 0.55, depthWrite: false });
    const mesh = new T.Mesh(new T.PlaneGeometry(sizeX, sizeZ), m); mesh.rotation.x = -Math.PI / 2; mesh.renderOrder = 1; return mesh;
  };
  S11.v3 = (a) => new (TH().Vector3)(a[0], a[1], a[2]);
  S11.toScreen = (cam, p) => { const v = S11.v3(p).project(cam); return [(v.x * 0.5 + 0.5) * W, (-v.y * 0.5 + 0.5) * H, v.z]; };

  // =====================================================================================================
  // CHARACTER TOOLKIT (bespoke paths, cel shading + rim, IK arms, head turns that slide features)
  // =====================================================================================================
  /** two-bone IK: shoulder S, target T, lengths a,b, bend sign → elbow point */
  S11.ik = (S, Tg, a, b, bend = 1) => { const dx = Tg[0] - S[0], dy = Tg[1] - S[1]; let d = Math.hypot(dx, dy); const dd = Math.min(d, a + b - 0.01); const ang = Math.atan2(dy, dx); const c = clamp((a * a + dd * dd - b * b) / (2 * a * dd), -1, 1); const e = ang - bend * Math.acos(c); return [S[0] + Math.cos(e) * a, S[1] + Math.sin(e) * a]; };
  /** draw a limb (two segments) as a cel-shaded sleeve/skin tube */
  S11.limb = (ctx, pts, w0, w1, col, o = {}) => { const ol = o.outline || '#2a1a16'; const sm = MG.path.spline(pts, 6); ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; MG.fx.ink(ctx, sm, { width: w0 + 5, color: ol, taper: [0, 0], pressure: (u) => lerp(1, (w1 + 5) / (w0 + 5), u) }); MG.fx.ink(ctx, sm, { width: w0, color: col, taper: [0, 0], pressure: (u) => lerp(1, w1 / w0, u) }); MG.fx.ink(ctx, sm.map(([x, y]) => [x + w0 * 0.18, y + w0 * 0.12]), { width: w0 * 0.35, color: MG.col.a(MG.col.shade(col, 0.5), 0.45), taper: [0.1, 0.2], pressure: (u) => lerp(1, w1 / w0, u) }); if (o.rim) MG.fx.ink(ctx, sm.map(([x, y]) => [x - w0 * 0.3, y - w0 * 0.2]), { width: w0 * 0.14, color: o.rim, alpha: 0.7, taper: [0.2, 0.3] }); ctx.restore(); };
  /** caricature person, upper body seated/standing. origin = hip centre. Returns head centre (for overlays). See fields below. */
  S11.person = (ctx, o, t) => {
    const U = 100 * (o.s || 1); const skin = o.skin || '#E2A77F', ol = '#2a1a16'; const L = o.light || [-0.6, -0.8]; const rim = o.rim || null; const turn = o.turn || 0;
    const w = o.wide || 1, br = o.breath ?? 1 + Math.sin(t * 1.7 + (o.seed || 0)) * 0.012;
    ctx.save(); ctx.translate(o.x, o.y); if (o.lean) ctx.rotate(o.lean); if (o.flip) ctx.scale(-1, 1);
    const sh = [[-0.46 * w * U, -1.1 * U * br], [0.46 * w * U, -1.1 * U * br]]; // shoulders
    const vol = (p, bb, col, extra = {}) => MG.fx.volume(ctx, p, bb, { color: col, cel: true, shade: 0.42, shadeColor: MG.col.shade(col, 0.48), hi: 0.2, light: L, rim, rimW: U * 0.035, outline: ol, outlineW: Math.max(2, U * 0.03), ...extra });
    // arms behind (back arm drawn first)
    const arm = (i, front) => { const A = o.arms && o.arms[i]; if (!A || !!A.front !== front) return; const S = sh[i]; const tg = [A.hand[0] * U, A.hand[1] * U]; const E = S11.ik(S, tg, 0.62 * U, 0.58 * U, A.bend ?? (i ? -1 : 1)); const sc = A.sleeve || o.shirt; const short = o.shortSleeve; const mid = [lerp(S[0], E[0], 0.5), lerp(S[1], E[1], 0.5)];
      if (short) { S11.limb(ctx, [S, mid], U * 0.24, U * 0.2, sc, { rim }); S11.limb(ctx, [mid, E, tg], U * 0.17, U * 0.13, skin, { rim }); } else S11.limb(ctx, [S, E, tg], U * 0.24, U * 0.18, sc, { rim });
      const ang = Math.atan2(tg[1] - E[1], tg[0] - E[0]) - Math.PI / 2; MG.kit.hand(ctx, tg[0], tg[1], { pose: A.pose || 'open', angle: A.angle ?? ang, s: U * 0.0068, skin, flip: A.flip }); if (A.prop) A.prop(ctx, tg, ang, U); };
    if (o.backProp) o.backProp(ctx, U);
    arm(0, false); arm(1, false);
    // hair behind head (long hair)
    const hx = turn * 0.06 * U + (o.headDx || 0) * U, hy = -1.86 * U * br + (o.headDy || 0) * U; const HU = U * (o.head || 1);
    if (o.hair && o.hair.style === 'long') { ctx.save(); const hp = MG.path.smooth([[hx - 0.52 * HU, hy - 0.2 * HU], [hx - 0.48 * HU, hy + 0.6 * HU], [hx - 0.62 * HU, hy + 1.05 * HU], [hx - 0.2 * HU, hy + 0.95 * HU], [hx + 0.2 * HU, hy + 0.95 * HU], [hx + 0.62 * HU, hy + 1.05 * HU], [hx + 0.48 * HU, hy + 0.6 * HU], [hx + 0.52 * HU, hy - 0.2 * HU], [hx, hy - 0.62 * HU]], true); vol(hp, [hx - 0.65 * HU, hy - 0.62 * HU, 1.3 * HU, 1.7 * HU], o.hair.color); ctx.restore(); }
    // torso
    const bw = o.belly ? 0.5 : 0.37;
    const tor = MG.path.smooth([[-0.38 * U, 0.02 * U], [-bw * U * w, -0.48 * U], [-0.43 * U * w, -0.92 * U * br], [-0.52 * U * w, -1.08 * U * br], [-0.47 * U * w, -1.17 * U * br], [-0.24 * U, -1.25 * U * br], [-0.12 * U, -1.31 * U * br], [0.12 * U, -1.31 * U * br], [0.24 * U, -1.25 * U * br], [0.47 * U * w, -1.17 * U * br], [0.52 * U * w, -1.08 * U * br], [0.43 * U * w, -0.92 * U * br], [bw * U * w, -0.48 * U], [0.38 * U, 0.02 * U]], true, 0.32);
    vol(tor, [-0.56 * U * w, -1.32 * U, 1.12 * U * w, 1.34 * U], o.shirt, { tex: 'fibers', texAlpha: 0.4 });
    if (o.pattern) { ctx.save(); ctx.clip(tor); o.pattern(ctx, U); ctx.restore(); }
    if (o.cardigan) { ctx.save(); ctx.clip(tor); const cg = MG.path.poly([[-0.6 * U * w, 0.05 * U], [-0.6 * U * w, -1.3 * U], [-0.12 * U, -1.3 * U], [-0.05 * U, -0.5 * U], [-0.12 * U, 0.05 * U]]); vol(cg, [-0.6 * U, -1.3 * U, 0.6 * U, 1.35 * U], o.cardigan); ctx.scale(-1, 1); vol(cg, [-0.6 * U, -1.3 * U, 0.6 * U, 1.35 * U], o.cardigan); ctx.restore(); }
    // neck + collar shadow
    ctx.fillStyle = MG.col.shade(skin, 0.18); ctx.fillRect(hx * 0.5 - 0.12 * U, -1.46 * U * br, 0.24 * U, 0.22 * U); ctx.fillStyle = MG.col.a('#3a1a20', 0.25); ctx.fillRect(hx * 0.5 - 0.12 * U, -1.36 * U * br, 0.24 * U, 0.06 * U);
    if (o.collar) { ctx.fillStyle = o.collar; ctx.strokeStyle = ol; ctx.lineWidth = 2; for (const sgn of [-1, 1]) { ctx.beginPath(); ctx.moveTo(sgn * 0.04 * U, -1.24 * U); ctx.lineTo(sgn * 0.2 * U, -1.33 * U); ctx.lineTo(sgn * 0.16 * U, -1.14 * U); ctx.closePath(); ctx.fill(); ctx.stroke(); } }
    // head
    const jw = o.jaw ?? 0.3, chin = o.chin ?? 0.5; const hpts = [[0, -0.54], [0.36, -0.44], [0.45, -0.12], [0.42, 0.14], [jw, 0.4], [0.1, chin], [-0.1, chin], [-jw, 0.4], [-0.42, 0.14], [-0.45, -0.12], [-0.36, -0.44]].map(([a, b]) => [hx + a * HU, hy + b * HU]);
    const head = MG.path.smooth(hpts, true, 0.5);
    // ears
    const earX = (sgn) => hx + sgn * 0.44 * HU - turn * 0.1 * HU; for (const sgn of [-1, 1]) { if (sgn * turn > 0.55) continue; const e = MG.path.ellipse(earX(sgn), hy + 0.04 * HU, 0.09 * HU, 0.14 * HU); vol(e, [earX(sgn) - 0.1 * HU, hy - 0.12 * HU, 0.2 * HU, 0.3 * HU], skin); if (o.earring) { ctx.fillStyle = '#E2B24A'; ctx.beginPath(); ctx.arc(earX(sgn), hy + 0.2 * HU, 0.035 * HU, 0, MG.TAU); ctx.fill(); } }
    vol(head, [hx - 0.46 * HU, hy - 0.55 * HU, 0.92 * HU, 1.1 * HU], skin, { shade: 0.32, hi: 0.18 });
    // cheeks blush
    ctx.save(); ctx.clip(head); for (const sgn of [-1, 1]) MG.fx.glow(ctx, hx + (sgn * 0.26 + turn * 0.1) * HU, hy + 0.18 * HU, 0.14 * HU, '#E46A5A', 0.28, 'source-over'); ctx.restore();
    const fx = (dx) => hx + (dx + turn * 0.16) * HU; // feature x with turn
    // wrinkles (elders)
    if (o.age) { ctx.save(); ctx.globalAlpha = 0.45 * o.age; for (const sgn of [-1, 1]) { MG.fx.ink(ctx, [[fx(sgn * 0.12), hy + 0.2 * HU], [fx(sgn * 0.16), hy + 0.3 * HU], [fx(sgn * 0.14), hy + 0.38 * HU]], { width: HU * 0.02, color: '#7a3a2a', taper: [0.3, 0.3] }); MG.fx.ink(ctx, [[fx(sgn * 0.3), hy - 0.04 * HU], [fx(sgn * 0.36), hy - 0.01 * HU]], { width: HU * 0.015, color: '#7a3a2a' }); } MG.fx.ink(ctx, [[fx(-0.14), hy - 0.27 * HU], [fx(0.14), hy - 0.27 * HU]], { width: HU * 0.012, color: '#7a3a2a' }); ctx.restore(); }
    // eyes, brows
    const blink = MG.kit.blink(t, o.seed || 3); const look = o.look || [turn * 0.6, 0];
    for (const sgn of [-1, 1]) { const ex = fx(sgn * 0.17) + sgn * turn * -0.03 * HU; const rr = HU * 0.068 * (o.eyeS || 1) * (1 - Math.abs(turn) * (sgn * turn > 0 ? 0.0 : 0.25)); MG.kit.eye(ctx, ex, hy - 0.02 * HU, { r: rr, look, blink: Math.max(blink, o.squint || 0), lid: o.lid ?? 0.18, w: 1.25, skin, iris: o.iris || '#4A2E1C' }); MG.kit.brow(ctx, ex, hy - 0.16 * HU, { w: HU * 0.2, raise: (o.brows || 0) + (sgn > 0 ? (o.browR || 0) : (o.browL || 0)), color: o.browColor || (o.hair && o.hair.color) || '#2a1a16', thick: HU * (o.browW || 0.045), flip: sgn > 0 }); }
    if (o.glasses) { ctx.save(); ctx.strokeStyle = o.glasses; ctx.lineWidth = HU * 0.018; for (const sgn of [-1, 1]) { ctx.beginPath(); ctx.arc(fx(sgn * 0.17), hy - 0.02 * HU, HU * 0.12, 0, MG.TAU); ctx.stroke(); } ctx.beginPath(); ctx.moveTo(fx(-0.05), hy - 0.03 * HU); ctx.lineTo(fx(0.05), hy - 0.03 * HU); ctx.stroke(); ctx.restore(); }
    // nose (caricature, shaded)
    { const nx = fx(0.05 * Math.sign(turn || 0.001) + turn * 0.08), ny = hy + 0.12 * HU, ns = HU * (o.nose || 1); const np = MG.path.smooth([[nx - 0.03 * ns, ny - 0.16 * ns], [nx + 0.06 * ns + turn * 0.05 * ns, ny + 0.02 * ns], [nx + 0.08 * ns, ny + 0.1 * ns], [nx, ny + 0.13 * ns], [nx - 0.08 * ns, ny + 0.1 * ns], [nx - 0.06 * ns, ny + 0.03 * ns]], true, 0.5); vol(np, [nx - 0.1 * ns, ny - 0.16 * ns, 0.2 * ns, 0.3 * ns], MG.col.mix(skin, '#D9806A', 0.25), { outlineW: Math.max(1.5, U * 0.02) }); }
    if (o.mustache) { const mx = fx(0.02), my = hy + 0.27 * HU; const mp = MG.path.smooth([[mx - 0.2 * HU, my + 0.04 * HU], [mx - 0.08 * HU, my - 0.04 * HU], [mx, my - 0.02 * HU], [mx + 0.08 * HU, my - 0.04 * HU], [mx + 0.2 * HU, my + 0.04 * HU], [mx + 0.1 * HU, my + 0.05 * HU], [mx, my + 0.03 * HU], [mx - 0.1 * HU, my + 0.05 * HU]], true); ctx.fillStyle = o.mustache; ctx.fill(mp); }
    MG.kit.mouth(ctx, fx(0.02), hy + (o.mustache ? 0.35 : 0.31) * HU, { w: HU * (o.mouthW || 0.26), mood: o.mood || 'smile', open: o.open || 0, rot: o.mouthRot || 0 });
    if (o.beard) { ctx.save(); ctx.clip(head); ctx.fillStyle = o.beard; ctx.globalAlpha = 0.92; ctx.beginPath(); ctx.moveTo(hx - 0.46 * HU, hy + 0.05 * HU); ctx.quadraticCurveTo(hx - 0.4 * HU, hy + 0.62 * HU, hx, hy + 0.6 * HU); ctx.quadraticCurveTo(hx + 0.4 * HU, hy + 0.62 * HU, hx + 0.46 * HU, hy + 0.05 * HU); ctx.lineTo(hx + 0.3 * HU, hy + 0.2 * HU); ctx.quadraticCurveTo(fx(0.02), hy + 0.44 * HU, hx - 0.3 * HU, hy + 0.2 * HU); ctx.closePath(); ctx.fill(); ctx.restore(); MG.kit.mouth(ctx, fx(0.02), hy + 0.33 * HU, { w: HU * 0.22, mood: o.mood || 'smile', open: o.open || 0 }); }
    // hair on top
    const hs = o.hair && o.hair.style, hc = o.hair && o.hair.color;
    if (hs === 'bun' || hs === 'short' || hs === 'long' || hs === 'pigtails') { const top = MG.path.smooth([[hx - 0.47 * HU, hy + 0.0 * HU], [hx - 0.45 * HU, hy - 0.36 * HU], [hx - 0.2 * HU, hy - 0.6 * HU], [hx + 0.2 * HU, hy - 0.6 * HU], [hx + 0.45 * HU, hy - 0.36 * HU], [hx + 0.47 * HU, hy + 0.0 * HU], [hx + 0.38 * HU, hy - 0.22 * HU], [fx(0.15), hy - 0.33 * HU], [fx(-0.1), hy - 0.26 * HU], [hx - 0.38 * HU, hy - 0.2 * HU]], true, 0.45); vol(top, [hx - 0.48 * HU, hy - 0.6 * HU, 0.96 * HU, 0.62 * HU], hc, { hi: 0.3 });
      if (hs === 'bun') { const b = MG.path.circle(hx - turn * 0.25 * HU, hy - 0.62 * HU, 0.2 * HU); vol(b, [hx - 0.3 * HU, hy - 0.84 * HU, 0.44 * HU, 0.44 * HU], hc, { hi: 0.35 }); }
      if (hs === 'pigtails') for (const sgn of [-1, 1]) { const b = MG.path.ellipse(hx + sgn * 0.56 * HU, hy + 0.05 * HU, 0.14 * HU, 0.22 * HU, sgn * 0.3); vol(b, [hx + sgn * 0.56 * HU - 0.15 * HU, hy - 0.17 * HU, 0.3 * HU, 0.44 * HU], hc); ctx.fillStyle = o.ribbon || '#C8423B'; ctx.beginPath(); ctx.arc(hx + sgn * 0.46 * HU, hy - 0.08 * HU, 0.06 * HU, 0, MG.TAU); ctx.fill(); } }
    if (hs === 'bald') { for (const sgn of [-1, 1]) { const f = MG.path.smooth([[hx + sgn * 0.47 * HU, hy + 0.08 * HU], [hx + sgn * 0.5 * HU, hy - 0.2 * HU], [hx + sgn * 0.36 * HU, hy - 0.36 * HU], [hx + sgn * 0.38 * HU, hy - 0.14 * HU], [hx + sgn * 0.42 * HU, hy + 0.04 * HU]], true); vol(f, [hx - 0.5 * HU, hy - 0.4 * HU, HU, 0.5 * HU], hc); } ctx.save(); ctx.clip(head); ctx.globalCompositeOperation = 'screen'; MG.fx.glow(ctx, hx - 0.15 * HU, hy - 0.42 * HU, 0.22 * HU, '#ffffff', 0.35); ctx.restore(); }
    if (hs === 'cap') { const c = MG.path.smooth([[hx - 0.5 * HU, hy - 0.18 * HU], [hx - 0.46 * HU, hy - 0.5 * HU], [hx, hy - 0.66 * HU], [hx + 0.5 * HU, hy - 0.52 * HU], [hx + 0.62 * HU + turn * 0.2 * HU, hy - 0.22 * HU], [hx + 0.2 * HU, hy - 0.24 * HU]], true, 0.4); vol(c, [hx - 0.5 * HU, hy - 0.66 * HU, 1.2 * HU, 0.5 * HU], o.capColor || '#5A5048', { tex: 'fibers', texAlpha: 0.6 }); }
    if (o.prop) o.prop(ctx, U, [hx, hy]);
    arm(0, true); arm(1, true);
    ctx.restore();
    return [o.x + hx * (o.flip ? -1 : 1), o.y + hy];
  };
  /** seated legs on a bench/chair (side-ish view): knees forward. o: {x,y (hip), s, trousers, shoe, dir} */
  S11.legs = (ctx, o, t) => { const U = 100 * (o.s || 1); const d = o.dir || 1; ctx.save(); ctx.translate(o.x, o.y); ctx.scale(d, 1); const k = o.kick || 0; for (const [ox, ph] of [[-0.18, 0], [0.18, 1.7]]) { const sw = Math.sin(t * (o.swing || 0) + ph) * (o.swingAmp || 0); const hip = [ox * U, 0], knee = [ox * U + 0.55 * U, 0.05 * U], foot = [knee[0] + Math.sin(sw) * 0.4 * U + k * 0.1 * U, knee[1] + Math.cos(sw) * 0.55 * U]; S11.limb(ctx, [hip, knee], U * 0.3, U * 0.26, o.trousers || '#3E4A5A'); S11.limb(ctx, [knee, foot], U * 0.24, U * 0.2, o.trousers || '#3E4A5A'); const sh = MG.path.ellipse(foot[0] + 0.1 * U, foot[1] + 0.04 * U, 0.17 * U, 0.08 * U); MG.fx.volume(ctx, sh, [foot[0] - 0.1 * U, foot[1] - 0.05 * U, 0.4 * U, 0.2 * U], { color: o.shoe || '#2A1E1E', cel: true, outline: '#1a1010' }); } ctx.restore(); };

  // =====================================================================================================
  // SCENE 1 — 3D tabletop diorama: sunrise over Spain → life tape to 84 → EU stars → 2040 podium
  // =====================================================================================================
  const tLet = 1638.69, tTop = Tw('top.', 1641.81), tLife = Tw('life', 1642.85), t84 = Tw('eighty-four', 1644.29), tHigh = Tw('highest', 1646.13), tEU = Tw('european', 1646.85);
  const tBy = Tw('by', 1648.05), t2040 = Tw('2040', 1648.21), tProj = Tw('projected', 1649.33), tFirst = Tw('first', 1650.29), tWorld = Tw('world.', 1651.01), tWhy = Tw('why', 1652.05);
  const YU = 0.1; // world units per year on the life tape
  const TAPE_X0 = -0.8, TAPE_Z = 0.3, SPZ = TAPE_Z - 0.62;
  const NUM_X = TAPE_X0 + 0.8 + YU * 84 + 2.75, NUM_Z = -0.75;
  const POD_X = 16.6, POD_Z = -0.7;
  const SUN3 = [34, 0, -89];
  const LSH = [-0.89, 2.34]; // ground shadow displacement per unit height (low sun behind-right)
  S11.deskSpainX = (t) => TAPE_X0 + 0.8 + YU * 84 * MG.ease.inOutCubic(clamp((t - (tLife + 0.05)) / (t84 + 0.5 - tLife)));
  const deskScene = {
    id: 's11_desk', start: 1638.53, end: 1652.25,
    transIn: { type: S11.sunrise, dur: 1.2, ease: 'linear', sx: 1330, sy: 640 },
    post: { grade: 'golden', vignette: 0.3, bloom: 0.1, bloomThreshold: 0.82 },
    init() {
      const T = TH(); const sc = (this.sc = new T.Scene()); const cam = (this.cam = new T.PerspectiveCamera(30, 16 / 9, 0.1, 400));
      sc.add(new T.HemisphereLight(0xffe2b8, 0x7b4a7a, 1.05));
      const key = new T.DirectionalLight(0xffc98a, 2.3); key.position.set(3.4, 3.8, -8.9); sc.add(key);
      const fill = new T.DirectionalLight(0xffd6c8, 0.85); fill.position.set(-5, 4, 7); sc.add(fill);
      // table: linen top with a cobalt double stripe near the far edge (shared with the 2D lunch table)
      const gt = S11.tex(S11.linenTile(), { repeat: [24, 9] });
      const table = new T.Mesh(new T.BoxGeometry(60, 0.4, 22), [new T.MeshStandardMaterial({ color: 0xd9c4a0, roughness: 1 }), new T.MeshStandardMaterial({ color: 0xd9c4a0, roughness: 1 }), new T.MeshStandardMaterial({ map: gt, roughness: 1 }), new T.MeshStandardMaterial({ color: 0xb59a78 }), new T.MeshStandardMaterial({ color: 0xc9ae8a, roughness: 1 }), new T.MeshStandardMaterial({ color: 0xc9ae8a })]);
      table.position.set(8, -0.2, 3.5); sc.add(table);
      const stripeM = new T.MeshStandardMaterial({ color: 0x1f4e8c, roughness: 1 });
      for (const z of [-6.55, -6.85]) { const s2 = new T.Mesh(new T.PlaneGeometry(60, z < -6.6 ? 0.07 : 0.16), stripeM); s2.rotation.x = -Math.PI / 2; s2.position.set(8, 0.002, z); sc.add(s2); }
      // ---- Spain slab (mainland + Balearics; Canaries shown as a 2D inset)
      const es = MG.geo.country('Spain', '10');
      const sp = S11.shapes(es, [-3.5, 40.0], 1.55, (ring) => { const m = ring.reduce((a, c) => [a[0] + c[0], a[1] + c[1]], [0, 0]).map((v) => v / ring.length); return m[1] > 35.95 && m[0] > -10; }, 0.0025);
      this.spRings = sp.rings;
      const topTex = S11.tex(MG.cache('s11:slabtop', 256, 256, (x, w, h) => { x.fillStyle = '#F2A33A'; x.fillRect(0, 0, w, h); MG.tex.over(x, 'blotch', { alpha: 0.25, color: '#C8621E', scale: 2, seed: 9 }); MG.tex.over(x, 'fibers', { alpha: 0.7 }); }), { repeat: [0.9, 0.9] });
      const geo = new T.ExtrudeGeometry(sp.shapes, { depth: 0.14, bevelEnabled: true, bevelThickness: 0.025, bevelSize: 0.012, bevelSegments: 1 });
      const slab = new T.Mesh(geo, [new T.MeshStandardMaterial({ map: topTex, roughness: 0.62, metalness: 0 }), new T.MeshStandardMaterial({ color: 0xa8481c, roughness: 0.8 })]);
      slab.rotation.x = -Math.PI / 2; const slabG = (this.slab = new T.Group()); slabG.add(slab); slab.position.y = 0.025; sc.add(slabG);
      const decalSlab = (this.decalSlab = S11.decal('slab', 3.4, 3.4, (x) => { x.beginPath(); for (const r of sp.rings) { r.forEach(([a, b], i) => (i ? x.lineTo(a, -b) : x.moveTo(a, -b))); x.closePath(); } x.fill(); }, 8)); sc.add(decalSlab);
      // ---- tape: 0 at the brass tab, unrolled under Spain's trail; Spain rides the 84-year head
      const L = YU * 84; this.tapeL = L;
      const tc = MG.cache('s11:tape', 4096, 160, (x, w, h) => {
        const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, '#E9B53E'); g.addColorStop(0.12, '#F6CC5A'); g.addColorStop(0.88, '#F3C350'); g.addColorStop(1, '#D9A033'); x.fillStyle = g; x.fillRect(0, 0, w, h);
        MG.tex.over(x, 'fibers', { alpha: 0.5 }); x.fillStyle = 'rgba(120,70,10,0.5)'; x.fillRect(0, 6, w, 2); x.fillRect(0, h - 8, w, 2);
        const px = w / 84; x.fillStyle = '#1E1A1D';
        for (let i = 0; i <= 84; i++) { const X = i * px; const L2 = i % 10 === 0 ? 62 : i % 5 === 0 ? 44 : 26; x.fillRect(X - 1.5, 8, 3, L2); x.fillRect(X - 1.5, h - 8 - L2 * 0.55, 3, L2 * 0.55); for (let k = 1; k < 4; k++) { if (i < 84) x.fillRect(X + (k * px) / 4 - 0.7, 8, 1.4, 12); } }
        MG.text.set(x, { font: F.cond, weight: 800, size: 54 }); x.textBaseline = 'middle';
        for (let i = 5; i < 84; i += 5) { const s = String(i); const tw2 = x.measureText(s).width; x.fillStyle = i % 10 ? 'rgba(30,26,29,0.75)' : '#1E1A1D'; x.fillText(s, i * px - tw2 / 2, h * 0.6); }
        x.fillStyle = '#B8322A'; MG.text.set(x, { font: F.cond, weight: 900, size: 60 }); x.textBaseline = 'middle'; x.fillText('84', w - 76, h * 0.6);
      });
      const tg = new T.PlaneGeometry(L, 0.3, 168, 1); tg.translate(L / 2, 0, 0);
      const tape = (this.tape = new T.Mesh(tg, new T.MeshStandardMaterial({ map: S11.tex(tc), roughness: 0.75 }))); tape.rotation.x = -Math.PI / 2; tape.position.set(TAPE_X0, 0.006, TAPE_Z); sc.add(tape);
      const tab = new T.Mesh(new T.BoxGeometry(0.06, 0.07, 0.34), new T.MeshStandardMaterial({ color: 0xb88a3a, metalness: 0.85, roughness: 0.3 })); tab.position.set(TAPE_X0 - 0.03, 0.035, TAPE_Z); sc.add(tab);
      const td = S11.decal('tape', 10, 1.2, (x) => { x.fillRect(-4.2, -0.15, 8.4, 0.3); }, 3); td.position.set(TAPE_X0 + 4.2 - 0.05, 0.003, TAPE_Z + 0.06); td.material.opacity = 0.25; sc.add(td); this.tapeDecal = td;
      // ---- 84 standing paper-cut numerals (+ thickness layer) and a long cast shadow
      const numC = MG.cache('s11:num84', 1024, 760, (x, w, h) => { x.fillStyle = '#1E1A1D'; MG.text.set(x, { font: F.cond, weight: 900, size: 700 }); x.textBaseline = 'alphabetic'; const s = '84'; const tw2 = x.measureText(s).width; x.fillText(s, (w - tw2) / 2, 610); MG.text.set(x, { font: F.mono, weight: 700, size: 78, tracking: 0.3 }); const s2 = 'YEARS'; const t2 = x.measureText(s2).width; x.fillText(s2, (w - t2) / 2, 740); });
      const numTex = S11.tex(numC); const nW = 1.7, nH = nW * 760 / 1024; this.nW = nW; this.nH = nH;
      const numG = new T.PlaneGeometry(nW, nH); numG.translate(0, nH / 2, 0);
      const num = (this.num = new T.Group()); const nFront = new T.Mesh(numG, new T.MeshStandardMaterial({ map: numTex, transparent: true, alphaTest: 0.5, side: T.DoubleSide, roughness: 0.9, color: 0xffffff }));
      const nBack = new T.Mesh(numG, new T.MeshBasicMaterial({ map: numTex, transparent: true, alphaTest: 0.5, color: 0x2a1622 })); nBack.position.set(0.03, 0, -0.035);
      num.add(nBack); num.add(nFront); num.position.set(NUM_X, 0, NUM_Z); num.rotation.y = -0.22; sc.add(num);
      const shG = new T.BufferGeometry(); this.numShadowG = shG; const shM = new T.MeshBasicMaterial({ map: numTex, transparent: true, color: 0x3b2140, opacity: 0.3, depthWrite: false }); const sh = (this.numShadow = new T.Mesh(shG, shM)); sh.renderOrder = 1; sc.add(sh);
      shG.setAttribute('position', new T.Float32BufferAttribute(new Float32Array(12), 3)); shG.setAttribute('uv', new T.Float32BufferAttribute([0, 0, 1, 0, 1, 1, 0, 1], 2)); shG.setIndex([0, 1, 2, 0, 2, 3]);
      // ---- 12 EU stars (gold) circling the 84
      const st = new T.Shape(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i / 10) * MG.TAU; const r = i % 2 ? 0.062 : 0.155; const fn = i ? 'lineTo' : 'moveTo'; st[fn](Math.cos(a) * r, -Math.sin(a) * r); } st.closePath();
      const sg = new T.ExtrudeGeometry(st, { depth: 0.03, bevelEnabled: true, bevelThickness: 0.01, bevelSize: 0.008, bevelSegments: 1 }); sg.center();
      const sm = new T.MeshStandardMaterial({ color: 0xf2bd45, metalness: 0.55, roughness: 0.32, emissive: 0xc07a10, emissiveIntensity: 0.55 });
      this.stars = []; this.starSh = []; for (let i = 0; i < 12; i++) { const m = new T.Mesh(sg, sm); sc.add(m); this.stars.push(m); const d = S11.decal('star', 1.2, 1.2, (x) => { x.beginPath(); x.ellipse(0, 0.06, 0.11, 0.2, 0, 0, 7); x.fill(); }, 5); d.material.opacity = 0.26; sc.add(d); this.starSh.push(d); }
      // ---- podium (3 steps) + world contenders
      const podTex = S11.tex(MG.cache('s11:podtex', 256, 256, (x, w, h) => { x.fillStyle = '#F4E8D2'; x.fillRect(0, 0, w, h); MG.tex.over(x, 'fibers', { alpha: 0.8 }); MG.tex.over(x, 'blotch', { alpha: 0.06, scale: 2 }); }), { repeat: [1, 1] });
      const podM = new T.MeshStandardMaterial({ map: podTex, roughness: 0.92 });
      const steps = (this.steps = [{ n: 1, x: 0, h: 1.05 }, { n: 2, x: -1.62, h: 0.72 }, { n: 3, x: 1.62, h: 0.48 }]);
      const RB = window.THREE_ADDONS.RoundedBoxGeometry;
      for (const s of steps) {
        const b = new T.Mesh(new RB(1.6, s.h, 1.4, 3, 0.05), podM); b.position.set(POD_X + s.x, s.h / 2, POD_Z); sc.add(b);
        const nc = MG.cache('s11:podnum' + s.n, 256, 256, (x, w, h) => { x.fillStyle = s.n === 1 ? '#B8322A' : '#1E1A1D'; MG.text.set(x, { font: F.cond, weight: 900, size: 230 }); x.textBaseline = 'middle'; const tw2 = x.measureText(String(s.n)).width; x.fillText(String(s.n), (w - tw2) / 2, h * 0.55); });
        const np = new T.Mesh(new T.PlaneGeometry(0.52, 0.52), new T.MeshStandardMaterial({ map: S11.tex(nc), transparent: true, alphaTest: 0.4, roughness: 0.9 })); np.position.set(POD_X + s.x, Math.min(s.h * 0.52, s.h - 0.28), POD_Z + 0.702); sc.add(np);
        const d = S11.decal('step' + s.n, 8.5, 8.5, (x) => { const hx = LSH[0] * s.h, hz = LSH[1] * s.h; x.beginPath(); x.moveTo(-0.8, -0.7); x.lineTo(0.8, -0.7); x.lineTo(0.8, 0.7); x.lineTo(0.8 + hx, 0.7 + hz); x.lineTo(-0.8 + hx, 0.7 + hz); x.lineTo(-0.8 + hx, -0.7 + hz); x.closePath(); x.fill(); }, 9); d.position.set(POD_X + s.x, 0.004, POD_Z); d.material.opacity = 0.4; sc.add(d);
      }
      this.boardC = MG.canvas(1024, 420); this.boardTex = S11.tex(this.boardC); this.boardKey = '';
      const board = new T.Mesh(new T.PlaneGeometry(3.4, 3.4 * 420 / 1024), new T.MeshStandardMaterial({ map: this.boardTex, roughness: 0.8 })); board.position.set(POD_X, 2.55, POD_Z - 1.6); sc.add(board);
      const legs = new T.MeshStandardMaterial({ color: 0x2b1d26, roughness: 0.6, metalness: 0.4 }); for (const lx of [-1.4, 1.4]) { const l = new T.Mesh(new T.CylinderGeometry(0.035, 0.035, 2.0, 8), legs); l.position.set(POD_X + lx, 1.0, POD_Z - 1.62); sc.add(l); }
      const mk = (name, center, wdt, filt, col) => { const f = MG.geo.country(name, '50'); const s = S11.shapes(f, center, wdt, filt, 0.004); const g = new T.ExtrudeGeometry(s.shapes, { depth: 0.12, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.01, bevelSegments: 1 }); const m = new T.Mesh(g, [new T.MeshStandardMaterial({ color: col, roughness: 0.7 }), new T.MeshStandardMaterial({ color: MG.col.shade(col, 0.45), roughness: 0.8 })]); m.rotation.x = -Math.PI / 2; m.position.y = 0.02; const gr = new T.Group(); gr.add(m); sc.add(gr); const dc = S11.decal('tok' + name, 3.2, 3.2, (x) => { x.beginPath(); for (const r of s.rings) { r.forEach(([a, b], i) => (i ? x.lineTo(a, -b) : x.moveTo(a, -b))); x.closePath(); } x.fill(); }, 8); sc.add(dc); return { g: gr, d: dc }; };
      this.jp = mk('Japan', [137, 37], 1.35, (ring) => ring.length > 60, '#EADCC8');
      this.ch = mk('Switzerland', [8.2, 46.8], 1.15, () => true, '#E3D3BC');
      this.sg = mk('Singapore', [103.8, 1.35], 0.95, () => true, '#EBDFCB');
      this.renderBoard('2016', 0, -1);
    },
    renderBoard(str, flipK, flipIdx) {
      const key = str + ':' + flipK.toFixed(2) + ':' + flipIdx; if (key === this.boardKey) return; this.boardKey = key;
      const x = this.boardC.getContext('2d'); const w = 1024, h = 420; x.fillStyle = '#2B1D26'; x.fillRect(0, 0, w, h); MG.tex.over(x, 'grain', { alpha: 0.12, blend: 'overlay' });
      MG.text.draw(x, 'LIFE EXPECTANCY · WORLD RANK', w / 2, 64, { font: F.mono, weight: 600, size: 34, tracking: 0.18, color: '#E9C27A', align: 'center' });
      const cw = 190, ch = 270, gap = 22, x0 = (w - (cw * 4 + gap * 3)) / 2, y0 = 104;
      for (let i = 0; i < 4; i++) {
        const cx = x0 + i * (cw + gap); x.fillStyle = '#3E2B37'; x.fillRect(cx, y0, cw, ch);
        x.save(); x.beginPath(); x.rect(cx, y0, cw, ch); x.clip(); MG.text.set(x, { font: F.cond, weight: 900, size: 250 }); x.textBaseline = 'middle'; x.fillStyle = '#FBF1DC'; const ch2 = str[i]; const tw2 = x.measureText(ch2).width; x.fillText(ch2, cx + (cw - tw2) / 2, y0 + ch / 2 + 12); x.restore();
        x.fillStyle = 'rgba(0,0,0,0.45)'; x.fillRect(cx, y0 + ch / 2 - 2, cw, 4);
        if (i >= flipIdx && flipIdx >= 0 && flipK > 0 && flipK < 1) { const fh = (ch / 2) * Math.abs(Math.cos(flipK * Math.PI)); x.fillStyle = '#4A3442'; if (flipK < 0.5) x.fillRect(cx, y0 + ch / 2 - fh, cw, fh); else x.fillRect(cx, y0 + ch / 2, cw, fh); }
      }
      this.boardTex.needsUpdate = true;
    },
    draw(ctx, t) {
      const T = TH(); const cam = this.cam;
      const hop = (t0, t1, from, to, hgt) => { const u = clamp((t - t0) / (t1 - t0)); const e = MG.ease.inOutSine(u); return [lerp(from[0], to[0], e), lerp(from[1], to[1], u) + Math.sin(u * Math.PI) * hgt, lerp(from[2], to[2], e), u]; };
      const xHead = S11.deskSpainX(t);
      // Spain rides the tape head to 84, then hops to the podium (#4 on the table) → #1
      let sp = [xHead, 0, SPZ], spSq = 0, spBase = 0;
      const ground4 = [POD_X - 3.05, 0, POD_Z + 0.35], top1 = [POD_X, 1.05, POD_Z];
      if (t > t84 + 0.5 && t < tBy) spSq = MG.jiggle(t, t84 + 0.5, 0.22, 3, 6);
      if (t > tBy - 0.15) { const h1 = hop(tBy - 0.15, tBy + 0.55, [TAPE_X0 + 0.8 + YU * 84, 0, SPZ], ground4, 0.9); sp = h1; if (h1[3] >= 1) spSq = MG.jiggle(t, tBy + 0.55, 0.25, 3, 7); }
      if (t > tFirst - 0.6) { const h2 = hop(tFirst - 0.6, tFirst, ground4, top1, 1.35); sp = h2; if (h2[3] >= 1) { spSq = MG.jiggle(t, tFirst, 0.35, 2.6, 5); spBase = 1.05; } }
      this.slab.position.set(sp[0], sp[1], sp[2]); this.slab.scale.set(1 + spSq * 0.25, Math.max(0.3, 1 - spSq * 0.6), 1 + spSq * 0.25);
      this.slab.rotation.y = t > tBy - 0.15 && t < tBy + 0.55 ? Math.sin(clamp((t - (tBy - 0.15)) / 0.7) * Math.PI) * 0.35 : 0;
      const air = Math.max(0, sp[1] - spBase); this.decalSlab.position.set(sp[0] + LSH[0] * (air + 0.12) * 0.6, spBase + 0.005, sp[2] + LSH[1] * (air + 0.12) * 0.6); this.decalSlab.material.opacity = 0.62 * (1 - clamp(air * 0.4));
      // tape reveal
      const unrolled = clamp((xHead - 0.8 - TAPE_X0) / this.tapeL); this.tape.geometry.setDrawRange(0, Math.ceil(unrolled * 168) * 6);
      this.tapeDecal.scale.x = Math.max(0.001, unrolled); this.tapeDecal.position.x = TAPE_X0 + 4.2 * unrolled; this.tapeDecal.visible = unrolled > 0.01;
      // 84 numerals stand up (paper-cut, hinged at the base)
      const nk = MG.spring(t - (t84 + 0.3), 1.5, 0.55); this.num.scale.set(1, Math.max(0.001, nk), 1); this.num.visible = nk > 0.002;
      { const n = this.num; const w2 = this.nW / 2; const h2 = this.nH * Math.max(0.001, nk); const c = Math.cos(n.rotation.y), s = Math.sin(n.rotation.y); const bx = n.position.x, bz = n.position.z;
        const pa = this.numShadowG.attributes.position.array; const P2 = (dx, hh) => [bx + dx * c + LSH[0] * hh, 0.006, bz - dx * s + LSH[1] * hh]; [P2(-w2, 0), P2(w2, 0), P2(w2, h2), P2(-w2, h2)].forEach((v, i) => { pa[i * 3] = v[0]; pa[i * 3 + 1] = v[1]; pa[i * 3 + 2] = v[2]; }); this.numShadowG.attributes.position.needsUpdate = true; this.numShadow.visible = this.num.visible; }
      // EU stars ring (behind the numerals, like the flag)
      const ringC = [NUM_X, 0, NUM_Z + 0.35];
      this.stars.forEach((m, i) => { const k = pg(t, tHigh - 0.15 + i * 0.06, tHigh + 0.4 + i * 0.06, 'outBack'); const a = -Math.PI / 2 + (i / 12) * MG.TAU + (t - tHigh) * 0.08; const R = 1.3; const hop2 = Math.max(0, Math.sin(clamp((t - (tHigh - 0.15 + i * 0.06)) / 0.45) * Math.PI)) * 0.35; m.position.set(ringC[0] + Math.cos(a) * R * 1.12, 0.16 * k + hop2, ringC[2] + Math.sin(a) * R * 0.78); m.scale.setScalar(Math.max(0.001, k)); m.rotation.set(0, -0.22 + Math.sin((t - tHigh) * 1.1 + i) * 0.35, 0); m.visible = k > 0.001; this.starSh[i].position.set(m.position.x + LSH[0] * 0.07, 0.006, m.position.z + LSH[1] * 0.07); this.starSh[i].visible = m.visible; this.starSh[i].scale.setScalar(Math.max(0.001, k)); });
      // contenders: 2016 (1 Japan · 2 Switzerland · 3 Singapore · 4 Spain) → 2040 (1 Spain · 2 Japan · 3 Singapore · 4 Switzerland)  [IHME forecast]
      const S1 = [POD_X, 1.05, POD_Z], S2 = [POD_X - 1.62, 0.72, POD_Z], S3 = [POD_X + 1.62, 0.48, POD_Z], OFF = [POD_X + 3.3, 0, POD_Z + 0.4];
      const place = (tok, pos, base, sq = 0) => { tok.g.position.set(pos[0], pos[1], pos[2]); tok.g.scale.set(1 + sq * 0.2, Math.max(0.3, 1 - sq * 0.5), 1 + sq * 0.2); const air2 = Math.max(0, pos[1] - base); tok.d.position.set(pos[0] + LSH[0] * (air2 + 0.1) * 0.6, base + 0.005, pos[2] + LSH[1] * (air2 + 0.1) * 0.6); tok.d.material.opacity = 0.58 * (1 - clamp(air2 * 0.4)); };
      let jp = S1, ch = S2, jsq = 0, csq = 0, jb = 1.05, cb = 0.72;
      if (t > tFirst - 1.25) { const h = hop(tFirst - 1.25, tFirst - 0.55, S2, OFF, 0.6); ch = h; cb = h[3] >= 1 ? 0 : 0.72 * (1 - h[3]); if (h[3] >= 1) csq = MG.jiggle(t, tFirst - 0.55, 0.3, 3, 6); if (h[3] > 0.5) cb = 0; }
      if (t > tFirst - 0.9) { const h = hop(tFirst - 0.9, tFirst - 0.25, S1, S2, 0.75); jp = h; if (h[3] > 0.5) jb = 0.72; if (h[3] >= 1) jsq = MG.jiggle(t, tFirst - 0.25, 0.3, 3, 6); }
      place(this.jp, jp, jb, jsq); place(this.ch, ch, cb, csq); place(this.sg, S3, 0.48);
      { const u = clamp((t - (t2040 + 0.05)) / 0.75); const yr = u <= 0 ? 2016 : Math.round(lerp(2016, 2040, MG.ease.inOutSine(u))); const fk = u > 0 && u < 1 ? MG.fract(u * 6) : 0; this.renderBoard(String(yr), fk, u > 0 && u < 1 ? 2 : -1); }
      // ---------- camera (one continuous move across the table)
      const NX = NUM_X;
      const K = [
        [1638.53, [-1.75, 0.5, 4.25, -0.55, 0.42, -1.0]],
        [tTop + 0.4, [-1.35, 0.95, 3.95, -0.45, 0.3, -0.9], 'inOutSine'],
        [tLife + 0.2, [-0.7, 1.05, 3.85, 0.4, 0.3, -0.5], 'inOutSine'],
        [t84 + 0.45, [NX - 4.1, 1.45, 4.1, NX - 2.0, 0.45, -0.5], 'inOutCubic'],
        [tHigh - 0.2, [NX - 2.6, 1.55, 5.1, NX - 1.0, 0.85, -0.6], 'inOutSine'],
        [tEU + 0.7, [NX - 2.2, 1.75, 5.9, NX - 0.8, 0.95, -0.6], 'inOutSine'],
        [tBy + 0.55, [POD_X - 1.2, 2.0, 7.1, POD_X - 0.9, 1.05, POD_Z - 0.8], 'inOutCubic'],
        [tFirst + 0.1, [POD_X - 0.5, 2.05, 6.4, POD_X - 0.4, 1.15, POD_Z - 0.8], 'inOutSine'],
        [tWorld + 0.35, [POD_X - 0.2, 2.25, 5.3, POD_X - 0.2, 1.3, POD_Z - 0.7], 'inOutSine'],
        [1652.25, [POD_X - 0.2, 6.6, 3.85, POD_X - 0.2, 0, 3.2], 'inOutCubic'],
      ];
      const k = MG.keys(t, K); const hh = MG.cam.handheld(t, 0.01, 5, 0.3);
      cam.position.set(k[0] + hh.dx, k[1] + hh.dy, k[2]); cam.lookAt(k[3], k[4], k[5] - 0.001); cam.updateMatrixWorld();
      // ---------- 2D backdrop: dawn sky, the sun rising out of the sea, glitter
      S11.sky(ctx, [[0, '#E4A07F'], [0.36, '#F2BE8C'], [0.6, '#F8D8A6'], [1, '#FBE6BC']], 'desk');
      const fwd = [k[3] - k[0], 0, k[5] - k[2]]; const fl = Math.hypot(fwd[0], fwd[2]) || 1;
      const hz = S11.toScreen(cam, [k[0] + fwd[0] / fl * 3000, -6, k[2] + fwd[2] / fl * 3000]); const horizonY = hz[1];
      const rise = MG.ease.out(clamp((t - 1638.3) / (tTop + 0.4 - 1638.3)));
      const sunW = [SUN3[0], lerp(-5.5, 6.2, rise) + Math.max(0, t - tTop - 0.4) * 0.25, SUN3[2]];
      const sp2 = S11.toScreen(cam, sunW); const sr = 132;
      const yaw = Math.atan2(fwd[0], -fwd[2]);
      const clouds = [[-0.35, -250, 520, 64, 3], [0.15, -330, 380, 48, 5], [0.45, -180, 640, 74, 7], [-0.7, -380, 420, 56, 8], [0.85, -290, 500, 60, 11]];
      for (const [ax, dy, cw, chh, sd] of clouds) { const cx = W / 2 + (ax - yaw) * 1500 + (t - 1640) * 5; const spr = S11.cloud(cw, chh, sd, '#FDE7C4', '#EFAE8C'); if (cx > -700 && cx < W + 700) MG.sprite(ctx, spr, cx, horizonY + dy, { alpha: 0.8 }); }
      if (sp2[2] < 1) { MG.fx.glow(ctx, sp2[0], sp2[1], sr * 4.4, '#FFE2A8', 0.6); MG.kit.sun(ctx, sp2[0], sp2[1], sr, t, { corona: 0.9, halftone: 0.35 }); }
      // sea below the horizon (drawn over the sun's lower part → it rises out of the water)
      { const g = ctx.createLinearGradient(0, horizonY, 0, H); g.addColorStop(0, '#F3C58E'); g.addColorStop(0.25, '#E6A684'); g.addColorStop(1, '#B9787F'); ctx.fillStyle = g; ctx.fillRect(0, horizonY, W, H - horizonY);
        ctx.save(); ctx.globalCompositeOperation = 'screen'; for (let i = 0; i < 46; i++) { const yy = horizonY + 3 + Math.pow(MG.rand(7, i), 1.6) * 140; const spread = 20 + (yy - horizonY) * 1.3; const xx = sp2[0] + (MG.rand(9, i) - 0.5) * spread + Math.sin(t * 2 + i) * 6; const len = 10 + MG.rand(11, i) * 40; ctx.globalAlpha = (0.35 + 0.5 * MG.rand(13, i)) * (0.6 + 0.4 * Math.sin(t * 3.1 + i * 1.7)); ctx.fillStyle = '#FFE9B8'; ctx.fillRect(xx - len / 2, yy, len, 1.6 + (yy - horizonY) * 0.012); } ctx.restore();
        ctx.fillStyle = 'rgba(255,236,190,0.6)'; ctx.fillRect(0, horizonY - 1, W, 1.5); }
      const c3 = MG.three.render(this.sc, cam, { slot: 0, toneMapping: T.NoToneMapping });
      ctx.drawImage(c3, 0, 0);
      if (sp2[2] < 1 && t < tLife + 1.5) MG.fx.glow(ctx, sp2[0], sp2[1] + 10, sr * 2.0, '#FFD79A', 0.22 * (1 - clamp((t - tLife) / 1.5)));
      // ---------- 2D overlays anchored to the 3D world
      if (t < tLife + 0.15) { ctx.save(); ctx.globalAlpha = clamp((tLife + 0.15 - t) / 0.35);
        S11.say(ctx, t, 'where Spain really does', 1639.73, 150, 250, { font: F.serif, italic: true, size: 66, color: C.plum });
        S11.say(ctx, t, 'come out on top.', 1641.33, 146, 362, { font: F.display, weight: 800, size: 112, color: C.ink, style: 'rise' });
        ctx.restore(); }
      if (t < tLife + 0.2) MG.geo.canaryInset(ctx, [150, 850, 230, 118], { fill: '#E8A548', label: 'CANARY ISLANDS', alpha: 0.85 * clamp((tLife + 0.2 - t) / 0.4) * pg(t, 1639.0, 1639.8) });
      if (t > tLife - 0.1 && t < tBy + 0.4) { ctx.save(); ctx.globalAlpha = S11.env(t, tLife - 0.1, tBy + 0.4, 0.3, 0.35); S11.kicker(ctx, t, tLife, 'LIFE EXPECTANCY · SPAIN', 150, 140, { color: C.plum, size: 24 }); ctx.restore(); }
      if (t > tLife && t < t84 + 0.55) { const yrs = Math.min(84, Math.floor(unrolled * 84 + 0.0001)); const hp = S11.toScreen(cam, [TAPE_X0 + unrolled * this.tapeL, 0.62, TAPE_Z]); ctx.save(); ctx.globalAlpha = S11.env(t, tLife, t84 + 0.55, 0.2, 0.25); MG.text.draw(ctx, String(yrs), hp[0], hp[1] - 30, { font: F.cond, weight: 900, size: 96, color: C.ink, align: 'center', stroke: '#FBF1DC', strokeW: 10 }); ctx.restore(); }
      if (t > tHigh - 0.2 && t < tBy + 0.3) { const a = S11.env(t, tHigh - 0.2, tBy + 0.3, 0.35, 0.3); const p0 = S11.toScreen(cam, [NUM_X, this.nH + 0.42, NUM_Z]); ctx.save(); ctx.globalAlpha = a; MG.text.reveal(ctx, 'HIGHEST IN THE EU', p0[0], Math.max(150, p0[1]), t, tHigh, { font: F.grotesk, weight: 800, size: 50, tracking: 0.06, color: C.plum, align: 'center', style: 'rise', by: 'word', stagger: 0.07 }); ctx.restore(); }
      if (t > tBy + 0.2) { ctx.save(); ctx.globalAlpha = S11.env(t, tBy + 0.2, 1652.0, 0.3, 0.4);
        const lab = (g, name, hgt, col) => { const p = S11.toScreen(cam, [g.position.x, g.position.y + hgt, g.position.z]); MG.text.draw(ctx, name, p[0], p[1], { font: F.grotesk, weight: 800, size: 34, tracking: 0.08, color: col || C.ink, align: 'center', stroke: '#FBF1DC', strokeW: 8 }); };
        lab(this.jp.g, 'JAPAN', 0.42); lab(this.ch.g, 'SWITZERLAND', 0.42); lab(this.sg.g, 'SINGAPORE', 0.42); lab(this.slab, 'SPAIN', 0.5, P.rojoDeep);
        S11.kicker(ctx, t, tProj - 0.1, 'FORECAST · IHME', 150, 140, { color: C.plum, size: 24 });
        ctx.restore(); }
    },
  };

  // =====================================================================================================
  // SCENE 2 — top-down lunch table: "Why?" (an olive-oil question mark) → food → oil → sunshine → healthcare → 30 years of organ donation
  // =====================================================================================================
  const tFood = Tw('mediterranean', 1653.01), tOil = Tw('olive', 1654.45), tSun = Tw('sunshine.', 1655.41), tFree = Tw('free', 1656.53), tCare = Tw('healthcare', 1656.77), tBest = Tw('best', 1658.21), tPlanet = Tw('planet.', 1658.85);
  const tOrg = Tw('organ', 1661.33), tThirty = Tw('thirty', 1662.53), tRun = Tw('running.', 1663.25), tLed = Tw('led', 1660.53);
  /** lit paper/food sprite helper: draws fn into a cached canvas of size w×h, centred */
  S11.spr = (key, w, h, fn) => MG.cache('s11spr:' + key, w, h, (x, ww, hh) => { x.translate(ww / 2, hh / 2); fn(x, ww, hh); });
  S11.heartPath = (s = 1) => { const p = new Path2D(); p.moveTo(0, 0.32 * s); p.bezierCurveTo(-0.08 * s, 0.22 * s, -0.5 * s, -0.02 * s, -0.5 * s, -0.28 * s); p.bezierCurveTo(-0.5 * s, -0.52 * s, -0.22 * s, -0.64 * s, 0, -0.4 * s); p.bezierCurveTo(0.22 * s, -0.64 * s, 0.5 * s, -0.52 * s, 0.5 * s, -0.28 * s); p.bezierCurveTo(0.5 * s, -0.02 * s, 0.08 * s, 0.22 * s, 0, 0.32 * s); p.closePath(); return p; };
  const tableScene = {
    id: 's11_table', start: 1652.25, end: 1664.0,
    transIn: { type: S11.matchDissolve, dur: 0.4, x: 960, y: 540, aTo: 1.08, bFrom: 0.94 },
    post: { grade: 'warm', vignette: 0.34 },
    init() {
      const L = [-0.6, -0.8];
      // linen world (large, static) with cobalt border stripes
      if (0) MG.cache('s11:tableworld', 8, 8, (x, w, h) => {
        x.fillStyle = MG.tex.pattern(x, S11.linenTile()); x.fillRect(0, 0, w, h);
        x.fillStyle = '#1F4E8C'; x.globalAlpha = 0.9; x.fillRect(0, 120, w, 26); x.fillRect(0, 160, w, 9); x.fillRect(0, h - 170, w, 9); x.fillRect(0, h - 146, w, 26); x.globalAlpha = 1;
        MG.tex.over(x, 'blotch', { alpha: 0.1, color: '#7a5030', scale: 3, seed: 12 });
        const g = x.createRadialGradient(w * 0.35, h * 0.35, 100, w * 0.5, h * 0.5, w * 0.7); g.addColorStop(0, 'rgba(255,248,230,0.25)'); g.addColorStop(1, 'rgba(60,30,20,0.25)'); x.fillStyle = g; x.fillRect(0, 0, w, h);
      });
      // plate (terracotta glaze, ochre rim, cobalt line)
      this.plate = S11.spr('plate', 560, 560, (x) => {
        const R = 250; const rim = MG.path.circle(0, 0, R); MG.fx.volume(x, rim, [-R, -R, R * 2, R * 2], { color: '#E3B567', shade: 0.35, hi: 0.5, light: L, tex: 'blotch', texAlpha: 0.15 });
        x.strokeStyle = '#1F4E8C'; x.lineWidth = 5; x.beginPath(); x.arc(0, 0, R - 20, 0, MG.TAU); x.stroke(); x.lineWidth = 2; x.beginPath(); x.arc(0, 0, R - 32, 0, MG.TAU); x.stroke();
        for (let i = 0; i < 24; i++) { const a = (i / 24) * MG.TAU; x.fillStyle = '#1F4E8C'; x.beginPath(); x.arc(Math.cos(a) * (R - 26), Math.sin(a) * (R - 26), 3.2, 0, MG.TAU); x.fill(); }
        const well = MG.path.circle(0, 0, R * 0.74); x.save(); MG.fx.volume(x, well, [-R * 0.74, -R * 0.74, R * 1.48, R * 1.48], { color: '#C9683C', shade: 0.25, light: [0.6, 0.8], hi: 0.18, tex: 'blotch', texAlpha: 0.2, texColor: '#7a2a10' }); x.restore();
        x.save(); x.globalCompositeOperation = 'screen'; const g = x.createRadialGradient(-90, -110, 0, -90, -110, 150); g.addColorStop(0, 'rgba(255,240,210,0.55)'); g.addColorStop(1, 'rgba(255,240,210,0)'); x.fillStyle = g; x.beginPath(); x.ellipse(-80, -105, 120, 46, -0.6, 0, MG.TAU); x.fill(); x.restore();
      });
      const breadS = (seed) => S11.spr('bread' + seed, 300, 220, (x) => { const r = MG.rng(seed); const pts = []; for (let i = 0; i < 14; i++) { const a = (i / 14) * MG.TAU; const rr = 1 + (r() - 0.5) * 0.12; pts.push([Math.cos(a) * 120 * rr, Math.sin(a) * 80 * rr]); } const p = MG.path.smooth(pts, true); MG.fx.volume(x, p, [-125, -85, 250, 170], { color: '#B8743A', shade: 0.4, hi: 0.3, light: L }); x.save(); x.scale(0.86, 0.82); const pi = MG.path.smooth(pts, true); MG.fx.volume(x, pi, [-125, -85, 250, 170], { color: '#E8C48A', shade: 0.15, hi: 0.2, light: L }); x.clip(pi); for (let i = 0; i < 70; i++) { x.fillStyle = `rgba(150,95,45,${0.25 + r() * 0.3})`; x.beginPath(); x.ellipse((r() - 0.5) * 220, (r() - 0.5) * 150, 2 + r() * 6, 1.5 + r() * 4, r() * 3, 0, MG.TAU); x.fill(); } for (let i = 0; i < 26; i++) { x.fillStyle = `rgba(${170 + r() * 40},${40 + r() * 20},${30},${0.35 + r() * 0.3})`; x.beginPath(); x.ellipse((r() - 0.5) * 200, (r() - 0.5) * 120, 10 + r() * 22, 6 + r() * 14, r() * 3, 0, MG.TAU); x.fill(); } x.restore(); });
      this.bread = [breadS(3), breadS(8)];
      this.tomato = S11.spr('tomato', 180, 180, (x) => { const p = MG.path.circle(0, 0, 70); MG.fx.volume(x, p, [-70, -70, 140, 140], { color: '#C93A2A', shade: 0.35, hi: 0.4, light: L }); x.fillStyle = '#E5604A'; x.beginPath(); x.arc(0, 0, 58, 0, MG.TAU); x.fill(); x.fillStyle = '#F08A6A'; for (let i = 0; i < 5; i++) { const a = (i / 5) * MG.TAU + 0.3; x.beginPath(); x.ellipse(Math.cos(a) * 30, Math.sin(a) * 30, 18, 11, a, 0, MG.TAU); x.fill(); x.fillStyle = '#F6D07A'; for (let k = 0; k < 4; k++) { x.beginPath(); x.ellipse(Math.cos(a) * (24 + k * 4), Math.sin(a) * (24 + k * 4), 3, 2, a, 0, MG.TAU); x.fill(); } x.fillStyle = '#F08A6A'; } x.fillStyle = '#C93A2A'; x.beginPath(); x.arc(0, 0, 9, 0, MG.TAU); x.fill(); });
      const olive = (col, k) => S11.spr('olive' + k, 70, 60, (x) => { const p = MG.path.ellipse(0, 0, 24, 17); MG.fx.volume(x, p, [-24, -17, 48, 34], { color: col, shade: 0.5, hi: 0.6, hiColor: '#ffffff', light: L }); });
      this.olives = [olive('#7E8C3A', 'g'), olive('#2C2230', 'b'), olive('#93A048', 'g2')];
      this.cheese = S11.spr('cheese', 260, 200, (x) => { const p = MG.path.poly([[-110, 60], [110, 70], [-20, -80]]); MG.fx.volume(x, p, [-110, -80, 220, 150], { color: '#F0D490', shade: 0.25, hi: 0.3, light: L }); x.save(); x.clip(p); const r = MG.rng(4); for (let i = 0; i < 9; i++) { x.fillStyle = 'rgba(190,150,70,0.45)'; x.beginPath(); x.arc((r() - 0.5) * 120, 20 + (r() - 0.5) * 60, 3 + r() * 5, 0, MG.TAU); x.fill(); } x.restore(); x.strokeStyle = '#8A6A2A'; x.lineWidth = 12; x.beginPath(); x.moveTo(-110, 60); x.lineTo(110, 70); x.stroke(); x.strokeStyle = '#5a4220'; x.lineWidth = 2; x.beginPath(); for (let i = 0; i <= 22; i++) { const u = i / 22; x.lineTo(lerp(-108, 108, u), lerp(60, 70, u) + (i % 2 ? -4 : 4)); } x.stroke(); });
      this.sardine = S11.spr('sardine', 340, 110, (x) => { const p = new Path2D(); p.moveTo(-150, 0); p.bezierCurveTo(-110, -36, 60, -40, 120, -6); p.lineTo(160, -30); p.lineTo(150, 0); p.lineTo(160, 30); p.lineTo(120, 6); p.bezierCurveTo(60, 40, -110, 36, -150, 0); p.closePath(); x.save(); const g = x.createLinearGradient(0, -36, 0, 36); g.addColorStop(0, '#3E5A70'); g.addColorStop(0.45, '#9FB3BE'); g.addColorStop(1, '#D8DCD6'); x.fillStyle = g; x.fill(p); x.clip(p); x.strokeStyle = 'rgba(40,30,20,0.55)'; x.lineWidth = 7; for (let i = -3; i <= 3; i++) { x.beginPath(); x.moveTo(i * 40 - 20, -40); x.lineTo(i * 40 + 20, 40); x.stroke(); } x.restore(); x.fillStyle = '#F4EEE0'; x.beginPath(); x.arc(-122, -6, 7, 0, MG.TAU); x.fill(); x.fillStyle = '#111'; x.beginPath(); x.arc(-122, -6, 3.5, 0, MG.TAU); x.fill(); x.strokeStyle = 'rgba(30,26,29,0.6)'; x.lineWidth = 2; x.stroke(p); });
      this.sprig = S11.spr('sprig', 420, 260, (x) => { const stem = [[-190, 90], [-90, 40], [0, 0], [100, -40], [190, -95]]; MG.fx.ink(x, MG.path.spline(stem, 8), { width: 6, color: '#6B5A3A', taper: [0.1, 0.9] }); const r = MG.rng(5); for (let i = 0; i < 9; i++) { const u = 0.08 + i / 10; const [px, py, a] = MG.path.along(MG.path.spline(stem, 8), u); const side = i % 2 ? 1 : -1; x.save(); x.translate(px, py); x.rotate(a + side * 0.7); const lp = MG.path.ellipse(34, 0, 36, 8); x.fillStyle = side > 0 ? '#5E6B33' : '#8E9A6A'; x.fill(lp); x.strokeStyle = 'rgba(255,255,240,0.35)'; x.lineWidth = 1.2; x.beginPath(); x.moveTo(2, 0); x.lineTo(66, 0); x.stroke(); x.restore(); } for (const [ox, oy] of [[-40, 34], [60, -6], [130, -40]]) { const p = MG.path.ellipse(ox, oy, 16, 12); MG.fx.volume(x, p, [ox - 16, oy - 12, 32, 24], { color: '#4A5A2A', shade: 0.5, hi: 0.6, hiColor: '#fff', light: L }); } });
      this.glass = S11.spr('glass', 300, 300, (x) => { x.strokeStyle = 'rgba(255,255,255,0.7)'; x.lineWidth = 4; x.beginPath(); x.arc(0, 0, 120, 0, MG.TAU); x.stroke(); x.fillStyle = 'rgba(255,255,255,0.12)'; x.beginPath(); x.arc(0, 0, 120, 0, MG.TAU); x.fill(); const w = MG.path.circle(6, 6, 96); x.save(); const g = x.createRadialGradient(-20, -20, 10, 6, 6, 100); g.addColorStop(0, '#9A1E2E'); g.addColorStop(1, '#4A0A18'); x.fillStyle = g; x.fill(w); x.restore(); x.strokeStyle = 'rgba(255,220,220,0.4)'; x.lineWidth = 3; x.beginPath(); x.arc(6, 6, 96, -2.6, -1.2); x.stroke(); });
      this.cruet = S11.spr('cruet', 260, 260, (x) => { x.fillStyle = 'rgba(255,255,255,0.25)'; x.beginPath(); x.arc(0, 0, 86, 0, MG.TAU); x.fill(); x.strokeStyle = 'rgba(255,255,255,0.75)'; x.lineWidth = 4; x.stroke(); const g = x.createRadialGradient(-20, -20, 6, 0, 0, 80); g.addColorStop(0, '#F7D35A'); g.addColorStop(1, '#B8860F'); x.fillStyle = g; x.beginPath(); x.arc(0, 0, 74, 0, MG.TAU); x.fill(); x.fillStyle = 'rgba(255,255,255,0.6)'; x.beginPath(); x.ellipse(-28, -30, 26, 12, -0.7, 0, MG.TAU); x.fill(); x.strokeStyle = '#C9C2B2'; x.lineWidth = 16; x.lineCap = 'round'; x.beginPath(); x.moveTo(40, -40); x.lineTo(110, -110); x.stroke(); x.strokeStyle = '#8A8478'; x.lineWidth = 6; x.stroke(); });
      // globe (top-down, Spain up) and the stethoscope chest piece (the film's silver disk)
      this.globeC = MG.cache('s11:tglobe', 520, 520, (x, w, h) => { const pr = MG.geo.globe(x, { center: [-4, 40], scale: 220, x: w / 2, y: h / 2, ocean: '#2E5F96', land: '#E8D7B2', countries: { Spain: '#F2A33A' }, atmosphere: '#F7E3C0', border: 'rgba(60,40,30,0.35)' }); this.globePr = pr; });
      this.globeSpain = [260 + 0, 260 + 0];
      { const pr = MG.geo.proj('ortho', { rotate: [4, -40, 0], scale: 220, translate: [260, 260] }); this.globeSpain = pr([-3.7, 40.2]); }
      this.heart = S11.spr('pheart', 150, 150, (x) => { const p = S11.heartPath(120); MG.fx.volume(x, p, [-60, -78, 120, 120], { color: '#C8322A', shade: 0.38, hi: 0.35, light: L, tex: 'fibers', texAlpha: 0.5 }); x.strokeStyle = 'rgba(80,10,10,0.35)'; x.lineWidth = 2; x.beginPath(); x.moveTo(0, -46); x.lineTo(0, 36); x.stroke(); });
      this.leaves = MG.cache('s11:dapple', 1200, 760, (x, w, h) => { const b = MG.tex.blotch(512, 5, 33, '#000000', 3.2); x.fillStyle = x.createPattern(b, 'repeat'); x.fillRect(0, 0, w, h); const tmp = MG.canvas(w, h); const y = tmp.getContext('2d'); y.filter = 'blur(10px)'; y.drawImage(x.canvas, 0, 0); x.clearRect(0, 0, w, h); x.drawImage(tmp, 0, 0); });
      if (0) MG.cache('s11:vineleaves0', 8, 8, (x, w, h) => { const r = MG.rng(21); x.fillStyle = '#000'; for (let i = 0; i < 46; i++) { const cx = r() * w, cy = r() * h, s = 70 + r() * 110, a = r() * MG.TAU; x.save(); x.translate(cx, cy); x.rotate(a); x.beginPath(); for (let k = 0; k <= 10; k++) { const ang = (k / 10) * MG.TAU; const lobe = 1 + 0.35 * Math.cos(ang * 5); x.lineTo(Math.cos(ang) * s * lobe * 0.6, Math.sin(ang) * s * lobe * 0.55); } x.closePath(); x.fill(); x.restore(); } const tmp = MG.canvas(w, h); const y = tmp.getContext('2d'); y.filter = 'blur(14px)'; y.drawImage(x.canvas, 0, 0); x.clearRect(0, 0, w, h); x.drawImage(tmp, 0, 0); });
    },
    draw(ctx, t) {
      const L = [-0.6, -0.8];
      // ---------- camera (one continuous overhead move)
      const GX = 1240, GY = 70; // globe centre (world)
      const cam = MG.keys(t, [
        [1652.25, [40, 40, 1.22, -0.06]],
        [tFood + 0.2, [10, 20, 1.12, -0.04], 'inOutSine'],
        [tOil + 0.3, [80, 50, 1.22, -0.02], 'inOutCubic'],
        [tSun + 0.3, [-20, 10, 0.96, 0.0], 'inOutSine'],
        [tCare - 0.05, [GX - 60, GY + 20, 1.12, 0.02], 'inOutCubic'],
        [tPlanet + 0.2, [GX - 40, GY + 10, 1.02, 0.03], 'inOutSine'],
        [tOrg + 0.1, [GX + 40, GY + 20, 0.74, 0.05], 'inOutCubic'],
        [tRun + 0.2, [GX + 60, GY + 20, 0.7, 0.07], 'inOutSine'],
        [1664.0, [GX - 40, GY - 160, 1.6, 0.09], 'inCubic'],
      ]);
      const hh = MG.cam.handheld(t, 3, 21, 0.3);
      ctx.save(); MG.cam.apply(ctx, { x: cam[0], y: cam[1], zoom: cam[2], rot: cam[3] + hh.rot, dx: hh.dx, dy: hh.dy });
      ctx.fillStyle = MG.tex.pattern(ctx, S11.linenTile()); ctx.fillRect(-2600, -1900, 7400, 4200);
      ctx.fillStyle = 'rgba(31,78,140,0.9)'; ctx.fillRect(-2600, -860, 7400, 26); ctx.fillRect(-2600, -820, 7400, 9); ctx.fillRect(-2600, 1020, 7400, 9); ctx.fillRect(-2600, 1044, 7400, 26);
      const drop = (t0, dur = 0.35) => { const u = clamp((t - t0) / dur); return { k: u, s: 1 + (1 - MG.ease.out(u)) * 0.35, a: clamp(u * 3), off: (1 - MG.ease.out(u)) * 30 }; };
      const sh = (x, y, rx, ry, a = 0.3, h = 10) => MG.fx.contact(ctx, x + h * 0.9, y + h * 1.2, rx, ry, a, '#3a2030');
      const item = (spr, x, y, rot, t0, o = {}) => { const d = drop(t0, o.dur || 0.32); if (d.k <= 0) return; const h = (o.h ?? 12) * d.s; sh(x, y, spr.width * 0.36 * d.s, spr.height * 0.32 * d.s, 0.32 * d.a, h + d.off); MG.sprite(ctx, spr, x, y, { rot, scale: (o.s || 1) * d.s, alpha: d.a }); };
      // wine glass (sun in it later) & sprig
      sh(-560, -330, 120, 120, 0.22, 14); MG.sprite(ctx, this.glass, -560, -330, {});
      { const sunK = pg(t, tSun, tSun + 0.6); MG.kit.sun(ctx, -575, -345, 26 + 10 * sunK, t, { corona: 0.2 + 0.7 * sunK, halftone: 0, rays: 0.0 }); }
      item(this.sprig, 420, 300, -0.4, tOil + 0.15, { h: 6 });
      // plate
      sh(0, 0, 250, 250, 0.38, 16); MG.sprite(ctx, this.plate, 0, 0, {});
      // "Why?" — an olive-oil question mark drizzled on the empty plate
      { const qk = pg(t, 1652.22, 1652.78, 'inOutSine'); const qp = [[-95, -95], [-70, -150], [0, -172], [78, -138], [84, -64], [22, -18], [2, 42]]; const pts = MG.path.spline(qp, 10); if (qk > 0) { const sub = MG.path.trim(pts, 0, qk); if (sub.length > 1) { MG.fx.ink(ctx, sub, { width: 36, color: '#B98A12', taper: [0.05, 0.05] }); MG.fx.ink(ctx, sub.map(([a, b]) => [a - 4, b - 5]), { width: 11, color: 'rgba(255,240,170,0.75)', taper: [0.2, 0.2] }); } }
        const dk = pg(t, 1652.72, 1652.98, 'outBack'); if (dk > 0) { MG.fx.volume(ctx, MG.path.ellipse(2, 105, 24 * dk, 20 * dk), [-22, 85, 48, 40], { color: '#C89416', shade: 0.3, hi: 0.8, hiColor: '#fff6cc', light: L }); } }
      // food lands on the plate on "Mediterranean food"
      item(this.bread[0], -60, 40, 0.3, tFood + 0.0); item(this.bread[1], 70, -40, -0.5, tFood + 0.12);
      item(this.tomato, -120, -110, 0, tFood + 0.22, { s: 0.75 }); item(this.tomato, 130, 110, 1, tFood + 0.3, { s: 0.7 });
      item(this.cheese, 120, 70, 2.4, tFood + 0.38, { s: 0.6 });
      item(this.sardine, -20, 140, -0.15, tFood + 0.46, { s: 0.62 }); item(this.sardine, 10, 170, -0.08, tFood + 0.52, { s: 0.6 });
      for (let i = 0; i < 7; i++) item(this.olives[i % 3], -150 + MG.rand(3, i) * 80, 40 + MG.rand(4, i) * 80, MG.rand(5, i) * 3, tFood + 0.55 + i * 0.04, { h: 4 });
      // olive oil: the cruet glides in and drizzles over the bread
      { const ok = clamp((t - tOil) / 1.0); const zz = []; for (let i = 0; i <= 40; i++) { const u = i / 40; zz.push([lerp(-150, 170, u), -30 + Math.sin(u * 22) * 55 + u * 20]); }
        if (ok > 0) { const sub = MG.path.trim(zz, 0, MG.ease.inOutSine(ok)); if (sub.length > 1) { ctx.save(); ctx.globalAlpha = 0.9; MG.fx.ink(ctx, sub, { width: 11, color: '#C5961A', taper: [0.02, 0.02] }); MG.fx.ink(ctx, sub.map(([a, b]) => [a - 2, b - 2]), { width: 3.5, color: 'rgba(255,246,190,0.8)', taper: [0.1, 0.1] }); ctx.restore(); } }
        const enter = pg(t, tOil - 0.45, tOil, 'out'), leave = pg(t, tOil + 1.05, tOil + 1.5, 'in'); if (enter > 0 && leave < 1) { const head = ok > 0 ? MG.path.along(zz, MG.ease.inOutSine(ok)) : zz[0]; const cx = lerp(560, head[0] - 70, enter) + leave * 520, cy = lerp(-420, head[1] - 110, enter) - leave * 300; sh(cx, cy, 90, 90, 0.25, 70); MG.sprite(ctx, this.cruet, cx, cy, { rot: -0.15, scale: 1.05 }); } }
      // globe + stethoscope (healthcare) — the chest piece is the film's silver disk
      sh(GX, GY, 220, 220, 0.4, 22); MG.sprite(ctx, this.globeC, GX, GY, {});
      const gs = [GX - 260 + this.globeSpain[0], GY - 260 + this.globeSpain[1]];
      { const k = pg(t, tFree - 0.2, tCare + 0.15, 'inOutCubic'); const cp = [lerp(GX + 650, gs[0], k), lerp(GY - 520, gs[1], k)];
        const Y = [GX + 300, GY + 330]; // Y-junction
        const tube = MG.path.spline([Y, [GX + 330, GY + 160], [GX + 300, GY - 80], [GX + 170, GY - 250], [cp[0] + 120, cp[1] - 150], [cp[0] + 40, cp[1] - 60], cp], 10);
        const app = pg(t, tFree - 0.7, tFree - 0.1);
        ctx.save(); ctx.globalAlpha = app; ctx.shadowColor = 'rgba(40,20,30,0.35)'; ctx.shadowBlur = 14; ctx.shadowOffsetX = 10; ctx.shadowOffsetY = 14;
        const ear = (s2) => MG.path.spline([Y, [Y[0] + 40 + s2 * 60, Y[1] + 90], [Y[0] + 120 + s2 * 90, Y[1] + 150], [Y[0] + 210 + s2 * 70, Y[1] + 150 + s2 * 40]], 8);
        for (const s2 of [-1, 1]) { MG.fx.ink(ctx, ear(s2), { width: 10, color: '#A9AEB6', taper: [0, 0] }); }
        MG.fx.ink(ctx, tube, { width: 18, color: '#2A1E2A', taper: [0, 0] }); ctx.shadowColor = 'transparent';
        for (const s2 of [-1, 1]) { const e = ear(s2); MG.fx.ink(ctx, e.map(([a, b]) => [a - 2, b - 2]), { width: 3, color: 'rgba(255,255,255,0.6)', taper: [0.1, 0.1] }); const tip = e[e.length - 1]; ctx.fillStyle = '#2A1E2A'; ctx.beginPath(); ctx.arc(tip[0], tip[1], 13, 0, MG.TAU); ctx.fill(); }
        MG.fx.ink(ctx, tube.map(([a, b]) => [a - 3, b - 4]), { width: 4, color: 'rgba(255,230,230,0.25)', taper: [0.1, 0.1] });
        ctx.fillStyle = '#7d8189'; ctx.beginPath(); ctx.arc(Y[0], Y[1], 14, 0, MG.TAU); ctx.fill();
        ctx.restore();
          if (k > 0) { MG.fx.contact(ctx, cp[0] + 12, cp[1] + 16, 62, 62, 0.35); MG.kit.sun(ctx, cp[0], cp[1], 52, t, { variant: 'coin' }); ctx.fillStyle = 'rgba(30,26,29,0.25)'; ctx.beginPath(); ctx.arc(cp[0], cp[1], 30, 0, MG.TAU); ctx.fill(); }
          // heartbeat ripples while listening
          if (t > tCare + 0.15) for (let i = 0; i < 3; i++) { const ph = MG.fract((t - tCare) * 1.1 - i / 3); ctx.save(); ctx.strokeStyle = MG.col.a('#C8322A', (1 - ph) * 0.5); ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(gs[0], gs[1], 60 + ph * 120, 0, MG.TAU); ctx.stroke(); ctx.restore(); } }
      // 30 paper hearts circle the globe — one per year Spain has led the world (ONT)
      const n30 = Math.floor(clamp((t - (tOrg - 0.4)) / (tRun + 0.1 - (tOrg - 0.4))) * 30 + 0.0001);
      for (let i = 0; i < 30; i++) { const t0 = tOrg - 0.4 + (i / 30) * (tRun + 0.1 - (tOrg - 0.4)); const k = pg(t, t0, t0 + 0.3, 'outBack'); if (k <= 0) continue; const a = -Math.PI / 2 + (i / 30) * MG.TAU; const R = 360; const hx = GX + Math.cos(a) * R, hy = GY + Math.sin(a) * R; MG.fx.contact(ctx, hx + 8, hy + 12, 34 * k, 30 * k, 0.28); MG.sprite(ctx, this.heart, hx, hy, { rot: a + Math.PI / 2, scale: 0.55 * k * (1 + 0.04 * Math.sin(t * 7 - i * 0.3)) }); }
      // the tally lives on a paper tag on the table
      if (t > tOrg - 0.5) { const k = pg(t, tOrg - 0.5, tOrg); const tx = GX + 470, ty = GY + 300; ctx.save(); ctx.globalAlpha = k; ctx.translate(tx, ty); ctx.rotate(-0.08); const card = MG.path.torn(-150, -90, 300, 180, { seed: 7, amp: 4 }); MG.fx.shadow(ctx, card, { dx: 10, dy: 14, blur: 18, color: 'rgba(40,20,30,0.35)' }); ctx.fillStyle = '#FBF1DC'; ctx.fill(card); MG.text.draw(ctx, String(Math.max(1, n30)), 0, 40, { font: F.cond, weight: 900, size: 150, color: '#B8322A', align: 'center' }); MG.text.draw(ctx, 'YEARS RUNNING', 0, 78, { font: F.mono, weight: 700, size: 22, tracking: 0.2, color: C.ink, align: 'center' }); ctx.restore(); }
      // vine-leaf shade drifting across the table; it parts on "Sunshine"
      { const part = MG.ease.inOutCubic(clamp((t - tSun + 0.1) / 0.9)); ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.globalAlpha = 0.42 * (1 - part * 0.9); const ox = -1600 + Math.sin(t * 0.4) * 30 - part * 1400, oy = -1000 + Math.cos(t * 0.33) * 20; ctx.drawImage(this.leaves, ox, oy, 2400, 1520); ctx.drawImage(this.leaves, ox + 2400, oy, 2400, 1520); ctx.restore(); }
      ctx.restore();
      // warm sunlight flood on "Sunshine" (screen-space light from upper-left)
      { const sk = S11.env(t, tSun - 0.1, 1664.2, 0.6, 0.1); if (sk > 0) { ctx.save(); ctx.globalCompositeOperation = 'soft-light'; ctx.globalAlpha = 0.55 * sk; const g = ctx.createRadialGradient(200, 80, 0, 300, 160, 1600); g.addColorStop(0, '#FFE6A8'); g.addColorStop(1, 'rgba(255,200,120,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); ctx.restore(); MG.fx.rays(ctx, -120, -160, { n: 7, len: 1900, spread: 0.5, dir: 0.75, alpha: 0.07 * sk, t, seed: 3 }); } }
      // ---------- words as spoken (stacked, lower left, on the tablecloth)
      const tx = 150; ctx.save();
      const col = (a, b) => S11.env(t, a, b, 0.25, 0.3);
      ctx.globalAlpha = col(tFood - 0.1, tCare - 0.3);
      S11.say(ctx, t, 'Mediterranean food.', tFood, tx, 800, { font: F.display, weight: 800, size: 64, color: C.ink, stroke: '#F6EAD3', strokeW: 10 });
      S11.say(ctx, t, 'Olive oil.', tOil, tx, 880, { font: F.display, weight: 800, size: 64, color: '#7A5A0E', stroke: '#F6EAD3', strokeW: 10 });
      S11.say(ctx, t, 'Sunshine.', tSun, tx, 960, { font: F.display, weight: 800, size: 64, color: P.solDeep, stroke: '#F6EAD3', strokeW: 10 });
      ctx.globalAlpha = col(tFree - 0.1, tLed - 0.1);
      S11.say(ctx, t, 'Free healthcare', tFree, tx, 880, { font: F.display, weight: 800, size: 70, color: C.ink, stroke: '#F6EAD3', strokeW: 10 });
      S11.say(ctx, t, 'among the best on the planet', 1657.85, tx + 4, 950, { font: F.serif, italic: true, size: 50, color: C.plum, stroke: '#F6EAD3', strokeW: 8 });
      ctx.globalAlpha = col(tLed - 0.2, 1664.3);
      S11.kicker(ctx, t, tLed - 0.2, 'WORLD LEADER · ORGAN DONATION', tx, 140, { color: C.plum, size: 24 });
      ctx.restore();
    },
  };

  // =====================================================================================================
  // SCENE 3 — Europe at night (safest) → a real dawn sweeps west (most accepting) → NL 2001 · BE 2003 · ES 2005, the rings land on Madrid
  // =====================================================================================================
  const tSafe = Tw('safest', 1664.93), tAcc = Tw('accepting.', 1667.73), tLegal = Tw('legalized', 1669.25), t2005 = Tw('2005,', 1671.01), tThird = Tw('third', 1672.53), tSo = Tw('so.', 1674.29);
  const AMS = [4.9041, 52.3676], BRU = [4.3517, 50.8503], MAD = [-3.7038, 40.4168];
  /** two interlocked gold wedding rings (2D with volume). r = outer radius */
  S11.rings = (ctx, x, y, r, t, k = 1) => {
    if (k <= 0) return; const R = r * k, w = R * 0.2; const ring = (cx, cy) => { const p = new Path2D(); p.arc(cx, cy, R, 0, MG.TAU); p.arc(cx, cy, R - w, 0, MG.TAU, true); return p; };
    const draw = (cx, cy, clip) => { const p = ring(cx, cy); ctx.save(); if (clip) { ctx.beginPath(); ctx.rect(clip[0], clip[1], clip[2], clip[3]); ctx.clip(); } const g = ctx.createLinearGradient(cx - R, cy - R, cx + R, cy + R); g.addColorStop(0, '#FFE9A6'); g.addColorStop(0.35, '#E6B347'); g.addColorStop(0.7, '#A8741E'); g.addColorStop(1, '#F2CF72'); ctx.fillStyle = g; ctx.fill(p, 'evenodd'); ctx.strokeStyle = 'rgba(90,50,10,0.55)'; ctx.lineWidth = Math.max(1, R * 0.025); ctx.stroke(p); ctx.strokeStyle = 'rgba(255,250,220,0.8)'; ctx.lineWidth = Math.max(1, R * 0.03); ctx.beginPath(); ctx.arc(cx, cy, R - w * 0.35, -2.6, -1.4); ctx.stroke(); ctx.restore(); };
    ctx.save(); ctx.shadowColor = 'rgba(30,15,20,0.4)'; ctx.shadowBlur = R * 0.3; ctx.shadowOffsetX = R * 0.12; ctx.shadowOffsetY = R * 0.18; ctx.fillStyle = 'rgba(0,0,0,0.01)'; ctx.fill(ring(x - R * 0.42, y)); ctx.fill(ring(x + R * 0.42, y)); ctx.restore();
    draw(x - R * 0.42, y); draw(x + R * 0.42, y); draw(x - R * 0.42, y, [x - R * 0.42 + R * 0.55, y - R * 1.2, R, R * 1.2]);
  };
  const europeScene = {
    id: 's11_europe', start: 1664.0, end: 1675.0,
    transIn: { type: 'zoom', dur: 0.55, x: 960, y: 420, amount: 1.6, from: 0.82 },
    post: (t) => ({ grade: t < tAcc - 0.8 ? 'night' : 'warm', vignette: 0.38, bloom: t < tAcc - 0.8 ? 0.18 : 0.05, bloomThreshold: 0.75 }),
    init() {
      MG.geo.init(); const d3 = window.d3;
      const box = [-26, 33, 32, 62];
      this.eu = MG.geo.world50.features.filter((f) => { const c = d3.geoCentroid(f); return c[0] > box[0] && c[0] < box[2] && c[1] > box[1] && c[1] < box[3] && f.properties.name !== 'Spain'; });
      const es0 = MG.geo.country('Spain', '10'); const g0 = es0.geometry; const polys = (g0.type === 'Polygon' ? [g0.coordinates] : g0.coordinates).filter((p) => { const r = p[0]; const m = r.reduce((a, c) => [a[0] + c[0], a[1] + c[1]], [0, 0]).map((q) => q / r.length); return m[1] > 35.95 && m[0] > -10; }); this.es = { type: 'Feature', properties: { name: 'Spain' }, geometry: { type: 'MultiPolygon', coordinates: polys } }; this.nl = MG.geo.country('Netherlands', '50'); this.be = MG.geo.country('Belgium', '50');
      // city lights: Spain (warm, dense) & others (cool, sparse)
      const r = MG.rng(77); this.esLights = []; const cities = ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Bilbao', 'Malaga', 'Zaragoza', 'Murcia', 'Palma', 'Alicante', 'Valladolid', 'Granada', 'Cordoba', 'ACoruna', 'Vigo', 'Oviedo', 'Santander', 'SanSebastian', 'Pamplona', 'Salamanca', 'Toledo', 'Cadiz', 'Almeria', 'Badajoz', 'Burgos', 'Leon', 'Tarragona', 'Girona', 'Huelva', 'Logrono'];
      for (const c of cities) { const ll = MG.geo.cities[c]; if (!ll) continue; this.esLights.push({ ll, s: c === 'Madrid' || c === 'Barcelona' ? 1.6 : 0.8 + r() * 0.5 }); for (let i = 0; i < 5; i++) { const p = [ll[0] + (r() - 0.5) * 0.9, ll[1] + (r() - 0.5) * 0.7]; if (d3.geoContains(this.es, p)) this.esLights.push({ ll: p, s: 0.35 + r() * 0.4 }); } }
      for (let i = 0; i < 70; i++) { const p = [-9.2 + r() * 12.5, 36.1 + r() * 7.6]; if (d3.geoContains(this.es, p)) this.esLights.push({ ll: p, s: 0.25 + r() * 0.35 }); }
      this.otherLights = ['Lisbon', 'Porto', 'Paris', 'London', 'Brussels', 'Amsterdam', 'Berlin', 'Hamburg', 'Munich', 'Frankfurt', 'Rome', 'Milan', 'Marseille', 'Toulouse', 'Stockholm', 'Venice', 'Genoa', 'Antwerp', 'Rabat', 'Casablanca', 'Algiers', 'Tunis'].map((c) => MG.geo.cities[c]).filter(Boolean);
    },
    draw(ctx, t) {
      const d3 = window.d3;
      const v = MG.geo.view(t, [[1664.0, { center: [7, 49], scale: 1120 }], [tSafe + 0.3, { center: [4, 47], scale: 1240 }, 'inOutSine'], [tAcc - 0.4, { center: [2.0, 45.5], scale: 1320 }, 'inOutSine'], [tLegal + 0.2, { center: [3.0, 46.6], scale: 1500 }, 'inOutCubic'], [tThird - 0.2, { center: [1.2, 45.2], scale: 1580 }, 'inOutSine'], [tSo + 0.05, { center: [-2.6, 41.6], scale: 2300 }, 'inOutSine'], [1675.0, { center: [-3.7, 41.2], scale: 4200 }, 'inCubic']]);
      const pr = MG.geo.proj('conic', { center: v.center, scale: v.scale });
      // day map base
      MG.kit.seaBg(ctx, '#9FBFD8');
      for (const f of this.eu) MG.geo.draw(ctx, pr, f, { fill: '#E6D8BC', stroke: 'rgba(58,43,58,0.35)', width: 1 });
      const lift = 10 + 6 * pg(t, tSafe - 0.3, tSafe + 0.4);
      const esP = MG.geo.slab(ctx, pr, this.es, { depth: lift, top: '#F2A33A', side: '#9A4A1E', shadowDy: lift * 1.4, tex: 'blotch', texAlpha: 0.14, stroke: 'rgba(30,26,29,0.5)', width: 1.2 });
      // rainbow paper strips laid across Spain on "most accepting"
      { const rk = clamp((t - (tAcc - 0.9)) / 1.0); if (rk > 0) { const bb = MG.geo.bbox(pr, this.es); const cols = ['#C8423B', '#E0873A', '#E9C46A', '#5E8F52', '#3A6EA5', '#7B4A8A']; ctx.save(); ctx.clip(esP); for (let i = 0; i < 6; i++) { const u = MG.ease.inOutCubic(clamp(rk * 1.6 - i * 0.12)); if (u <= 0) continue; const y0 = bb[1] + (i / 6) * bb[3], hh = bb[3] / 6 + 1; const w = bb[2] * 1.1 * u; ctx.fillStyle = cols[i]; const p = MG.path.torn(bb[0] - 10, y0, w, hh, { seed: 30 + i, amp: 2.5, edges: 'r' }); ctx.globalAlpha = 0.92; ctx.fill(p); } ctx.globalAlpha = 1; MG.tex.over(ctx, 'fibers', { alpha: 0.7 }); ctx.restore(); ctx.save(); ctx.strokeStyle = 'rgba(30,26,29,0.5)'; ctx.lineWidth = 1.2; ctx.stroke(esP); ctx.restore(); } }
      // night: a real terminator line, retreating west as dawn comes ("most accepting")
      const dawn = MG.ease.inOutSine(clamp((t - (tAcc - 1.5)) / 1.6));
      const edgeX = lerp(-400, W + 700, 1 - dawn); // night covers x < edgeX
      if (edgeX > -300) {
        ctx.save(); const g = ctx.createLinearGradient(edgeX - 260, 0, edgeX + 260, 0); g.addColorStop(0, 'rgba(28,24,62,0.78)'); g.addColorStop(1, 'rgba(28,24,62,0)'); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = 'rgba(28,24,62,0.78)'; ctx.fillRect(0, 0, Math.max(0, edgeX - 260), H); ctx.fillStyle = g; ctx.fillRect(edgeX - 260, 0, 520, H); ctx.restore();
        // dawn glow along the terminator
        ctx.save(); ctx.globalCompositeOperation = 'screen'; const g2 = ctx.createLinearGradient(edgeX - 80, 0, edgeX + 420, 0); g2.addColorStop(0, 'rgba(255,170,110,0)'); g2.addColorStop(0.3, `rgba(255,170,110,${0.35 * Math.sin(dawn * Math.PI)})`); g2.addColorStop(1, 'rgba(255,170,110,0)'); ctx.fillStyle = g2; ctx.fillRect(edgeX - 80, 0, 500, H); ctx.restore();
        // lights
        const nightAt = (x) => clamp((edgeX - x) / 260 + 0.5);
        ctx.save(); ctx.globalCompositeOperation = 'screen';
        for (const ll of this.otherLights) { const p = pr(ll); if (!p) continue; const a = nightAt(p[0]) * 0.55; if (a <= 0.02) continue; MG.fx.glow(ctx, p[0], p[1], 16, '#CFE0FF', a * 0.7); ctx.fillStyle = `rgba(230,240,255,${a})`; ctx.fillRect(p[0] - 1.5, p[1] - 1.5, 3, 3); }
        this.esLights.forEach((L, i) => { const p = pr(L.ll); if (!p) return; const on = pg(t, 1664.1 + MG.rand(5, i) * 0.9, 1664.4 + MG.rand(5, i) * 0.9); const a = nightAt(p[0]) * on * (0.75 + 0.25 * Math.sin(t * 3 + i)); if (a <= 0.02) return; MG.fx.glow(ctx, p[0], p[1] - lift, 14 * L.s, '#FFB85A', a * 0.4); ctx.fillStyle = `rgba(255,226,160,${a})`; ctx.beginPath(); ctx.arc(p[0], p[1] - lift, 1.6 * L.s, 0, MG.TAU); ctx.fill(); });
        ctx.restore();
      }
      // 1-2-3: Netherlands 2001 → Belgium 2003 → Spain 2005
      const pin = (ll, n, t0, label, year, off) => { const p = pr(ll); const k = pg(t, t0, t0 + 0.45, 'outBack'); if (k <= 0) return p; const isES = n === 3; const yy = p[1] - (isES ? lift : 0);
        ctx.save(); MG.fx.contact(ctx, p[0] + 6, yy + 6, 20 * k, 9 * k, 0.4);
        const R = (isES ? 26 : 19) * k; ctx.fillStyle = isES ? P.rojo : C.ink; ctx.beginPath(); ctx.arc(p[0], yy - R * 1.4, R, 0, MG.TAU); ctx.fill(); ctx.beginPath(); ctx.moveTo(p[0] - R * 0.55, yy - R * 1.05); ctx.lineTo(p[0], yy); ctx.lineTo(p[0] + R * 0.55, yy - R * 1.05); ctx.fill();
        MG.text.draw(ctx, String(n), p[0], yy - R * 1.4 + R * 0.45, { font: F.cond, weight: 900, size: R * 1.3, color: '#FBF1DC', align: 'center' });
        const a2 = clamp((t - t0 - 0.1) / 0.3); ctx.globalAlpha = a2; const ex = p[0] + off[0], ey = yy - R * 1.4 + off[1]; ctx.strokeStyle = 'rgba(30,26,29,0.6)'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(p[0] + Math.sign(off[0]) * R, yy - R * 1.4); ctx.lineTo(ex, ey); ctx.stroke();
        const al = off[0] > 0 ? 'left' : 'right', lx = ex + Math.sign(off[0]) * 10;
        if (isES) { MG.text.draw(ctx, label, lx, ey - 4, { font: F.grotesk, weight: 800, size: 40, tracking: 0.08, color: C.ink, align: al, stroke: '#F3EAD8', strokeW: 8 }); MG.text.draw(ctx, year, lx, ey + 96, { font: F.cond, weight: 900, size: 110, color: P.rojoDeep, align: al, stroke: '#F3EAD8', strokeW: 12 }); }
        else { const w1 = MG.text.draw(ctx, label, lx, ey + 10, { font: F.grotesk, weight: 800, size: 30, tracking: 0.08, color: C.ink, align: al, stroke: '#F3EAD8', strokeW: 7 }); MG.text.draw(ctx, year, lx + (off[0] > 0 ? w1 + 14 : -w1 - 14), ey + 12, { font: F.cond, weight: 900, size: 40, color: P.rojoDeep, align: al, stroke: '#F3EAD8', strokeW: 7 }); }
        ctx.restore(); return p; };
      const tNL = tLegal + 0.2, tBE = tLegal + 0.75;
      const dash = (a, b, t0) => { const k = pg(t, t0, t0 + 0.5, 'inOutSine'); if (k > 0) MG.geo.route(ctx, pr, a, b, { progress: k, color: 'rgba(30,26,29,0.65)', width: 3, dash: [8, 9], lift: 40 }); };
      dash(AMS, BRU, tNL + 0.25); dash(BRU, MAD, tBE + 0.3);
      if (t > tNL - 0.1) MG.geo.draw(ctx, pr, this.nl, { fill: MG.col.a('#E0873A', 0.5 * pg(t, tNL, tNL + 0.4)), stroke: 'rgba(30,26,29,0.5)', width: 1.2 });
      if (t > tBE - 0.1) MG.geo.draw(ctx, pr, this.be, { fill: MG.col.a('#E0873A', 0.5 * pg(t, tBE, tBE + 0.4)), stroke: 'rgba(30,26,29,0.5)', width: 1.2 });
      pin(AMS, 1, tNL, 'NETHERLANDS', '2001', [70, -46]); pin(BRU, 2, tBE, 'BELGIUM', '2003', [90, 30]); pin(MAD, 3, t2005 - 0.1, 'SPAIN', '2005', [-150, -10]);
      // the rings drop onto Madrid
      { const mp = pr(MAD); const k = pg(t, t2005 + 0.05, t2005 + 0.6, 'outBack'); const fall = (1 - MG.ease.out(clamp((t - t2005 - 0.05) / 0.5))) * 160; const c2 = MG.ease.inOutCubic(clamp((t - tSo) / (1675.0 - tSo))); const R0 = 40 * (v.scale / 1560); const R = lerp(R0, 150, c2); const rx = lerp(mp[0] + 95, 960 + 0.42 * R, c2), ry = lerp(mp[1] - lift - 95 - fall, 540, c2); S11.rings(ctx, rx, ry, R, t, k); S11.ringsAt = [960, 540, R]; }
      // the "third" beat: the 1-2-3 numerals pulse in order
      if (t > tThird - 0.1) { const k = S11.env(t, tThird - 0.1, 1675.2, 0.3, 0.2); ctx.save(); ctx.globalAlpha = k; MG.text.reveal(ctx, 'the 3rd country in the world', 150, 960, t, tThird - 0.05, { font: F.serif, italic: true, size: 58, color: C.ink, style: 'rise', by: 'word', stagger: 0.06, stroke: '#F3EAD8', strokeW: 8 }); ctx.restore(); }
      MG.geo.canaryInset(ctx, [1600, 870, 220, 110], { fill: '#F2A33A', label: 'CANARY ISLANDS', alpha: 0.9 * (1 - pg(t, tSo, tSo + 0.4)), frame: t < tAcc - 0.8 ? 'rgba(255,240,220,0.5)' : 'rgba(30,25,20,0.45)', labelColor: t < tAcc - 0.8 ? 'rgba(255,240,220,0.75)' : 'rgba(30,25,20,0.7)' });
      // words
      ctx.save(); ctx.globalAlpha = S11.env(t, 1664.0, 1666.38, 0.3, 0.3);
      S11.say(ctx, t, "It's one of Europe's", 1664.05, 150, 880, { font: F.serif, italic: true, size: 58, color: '#FBF1DC' });
      S11.say(ctx, t, 'safest countries.', 1664.93, 146, 975, { font: F.display, weight: 800, size: 90, color: '#FFE3A8' });
      ctx.restore();
      ctx.save(); ctx.globalAlpha = S11.env(t, tAcc - 1.4, tLegal + 0.1, 0.3, 0.35);
      S11.say(ctx, t, 'And one of its most', 1666.37, 150, 880, { font: F.serif, italic: true, size: 58, color: C.ink });
      S11.say(ctx, t, 'accepting.', 1667.73, 146, 975, { font: F.display, weight: 800, size: 90, color: '#3A6EA5' });
      ctx.restore();
    },
  };

  // =====================================================================================================
  // SCENE 4 — through the ring: a paper-cut baroque church at golden hour; the Franco peseta rises behind it like a dark sun
  // =====================================================================================================
  const tCath = Tw('catholic', 1675.25), tDecades = Tw('decades', 1676.61), tDict = Tw('dictator', 1677.57), tRuling = Tw('ruling', 1678.37), tChurch = Tw('church.', 1679.73);
  /** porthole transition through the wedding ring: the camera flies into the ring's hole */
  S11.ringPortal = (ctx, A, B, p, o) => {
    const x = o.x ?? 960, y = o.y ?? 540, R0 = o.r ?? 150; const e = MG.ease.inOutCubic(p);
    ctx.save(); ctx.translate(x, y); const sa = 1 + e * 2.4; ctx.scale(sa, sa); ctx.translate(-x, -y); ctx.drawImage(A, 0, 0); ctx.restore();
    const R = R0 * 0.78 * (1 + e * 9); ctx.save(); ctx.beginPath(); ctx.arc(x, y, R, 0, MG.TAU); ctx.clip(); const sb = lerp(1.25, 1, e); ctx.translate(x, y); ctx.scale(sb, sb); ctx.translate(-x, -y); ctx.drawImage(B, 0, 0); ctx.restore();
    if (p < 0.98) { ctx.save(); const w = R * 0.26; const g = ctx.createRadialGradient(x, y, R, x, y, R + w); g.addColorStop(0, '#A8741E'); g.addColorStop(0.4, '#FFE3A0'); g.addColorStop(1, '#C99335'); ctx.strokeStyle = g; ctx.lineWidth = w; ctx.globalAlpha = 1 - MG.smoothstep(0.75, 1, p); ctx.beginPath(); ctx.arc(x, y, R + w / 2, 0, MG.TAU); ctx.stroke(); ctx.restore(); }
  };
  S11.profile = () => { const pts = [[-20, 58], [-27, 34], [-37, 8], [-37, -22], [-24, -44], [-2, -52], [16, -47], [26, -34], [29, -21], [31, -14], [29.5, -9], [32, -6], [40.5, 4.5], [33.5, 8.5], [35, 12.5], [33.5, 15.5], [34.5, 18.5], [32.5, 21.5], [31.5, 27], [27, 32.5], [21.5, 36.5], [18.5, 46], [17, 58]]; return pts; };
  const churchScene = {
    id: 's11_church', start: 1675.0, end: 1680.75,
    transIn: { type: S11.ringPortal, dur: 0.6, ease: 'linear', x: 960, y: 540, r: 150 },
    post: (t) => { const k = pg(t, tDict - 0.3, tDict + 0.8); return { grade: 'golden', vignette: 0.36 + 0.14 * k, sat: 1 - 0.38 * k, temp: -0.02 * k, contrast: 1 + 0.06 * k }; },
    init() {
      const L = [-0.6, -0.8];
      // church façade (paper-cut, 2 layers) in local coords, ground at y=0
      this.church = MG.cache('s11:church', 900, 1060, (x, w, h) => {
        x.translate(w / 2, h - 40);
        const sil = new Path2D(); const tower = (x0) => { sil.rect(x0, -690, 160, 690); sil.moveTo(x0 - 6, -690); sil.lineTo(x0 + 166, -690); sil.lineTo(x0 + 166, -706); sil.lineTo(x0 - 6, -706); sil.closePath(); sil.moveTo(x0 + 10, -706); sil.bezierCurveTo(x0 + 10, -790, x0 + 150, -790, x0 + 150, -706); sil.closePath(); sil.rect(x0 + 66, -812, 28, 40); sil.rect(x0 + 77, -866, 6, 56); sil.rect(x0 + 64, -850, 32, 6); };
        tower(-370); tower(210);
        sil.rect(-212, -440, 424, 440); sil.moveTo(-212, -440); sil.bezierCurveTo(-200, -520, -90, -520, -60, -560); sil.bezierCurveTo(-40, -600, 40, -600, 60, -560); sil.bezierCurveTo(90, -520, 200, -520, 212, -440); sil.closePath(); sil.rect(-6, -690, 12, 110); sil.rect(-34, -660, 68, 11);
        const g = x.createLinearGradient(-370, 0, 370, 0); g.addColorStop(0, '#E7B98A'); g.addColorStop(0.5, '#C98E7A'); g.addColorStop(1, '#8C5A6A'); x.fillStyle = g; x.fill(sil); x.save(); x.clip(sil); MG.tex.over(x, 'fibers', { alpha: 0.8 }); MG.tex.over(x, 'blotch', { alpha: 0.12, color: '#5a2a3a', scale: 2 });
        // relief: cornices, pilasters, belfry openings, portal, rose window (darker cuts = interior)
        x.fillStyle = 'rgba(60,25,40,0.22)'; for (const y0 of [-440, -300, -690]) x.fillRect(-380, y0, 760, 10); for (const px of [-212, -130, 120, 202, -370, -210, 210, 370]) x.fillRect(px - 5, -690, 10, 690);
        x.fillStyle = '#3B2140'; const arch = (cx, cy, aw, ah) => { x.beginPath(); x.moveTo(cx - aw / 2, cy); x.lineTo(cx - aw / 2, cy - ah + aw / 2); x.arc(cx, cy - ah + aw / 2, aw / 2, Math.PI, 0); x.lineTo(cx + aw / 2, cy); x.closePath(); x.fill(); };
        arch(0, 0, 130, 250); for (const cx of [-290, 290]) { arch(cx, -520, 70, 130); arch(cx, -300, 46, 90); arch(cx, -120, 46, 90); }
        x.beginPath(); x.arc(0, -350, 52, 0, MG.TAU); x.fill(); x.strokeStyle = '#E7B98A'; x.lineWidth = 4; for (let i = 0; i < 8; i++) { const a = (i / 8) * MG.TAU; x.beginPath(); x.moveTo(0, -350); x.lineTo(Math.cos(a) * 50, -350 + Math.sin(a) * 50); x.stroke(); }
        x.restore();
        x.strokeStyle = 'rgba(255,230,190,0.75)'; x.lineWidth = 4; x.save(); x.clip(sil); x.translate(5, 3); x.stroke(sil); x.restore();
      });
      this.bell = S11.spr('bell', 80, 90, (x) => { const p = new Path2D(); p.moveTo(-22, 26); p.bezierCurveTo(-22, -10, -14, -30, 0, -30); p.bezierCurveTo(14, -30, 22, -10, 22, 26); p.quadraticCurveTo(0, 32, -22, 26); p.closePath(); MG.fx.volume(x, p, [-24, -30, 48, 60], { color: '#C9A04A', shade: 0.45, hi: 0.5, light: [-0.6, -0.8] }); });
      const ridge = (seed, base, amp, col, dark) => MG.cache('s11:ridge' + seed, 2400, 700, (x, w, h) => { const r = MG.rng(seed); const pts = [[0, h]]; for (let i = 0; i <= 24; i++) pts.push([(i / 24) * w, h - base - amp * (0.5 + 0.5 * Math.sin(i * 0.7 + seed)) - r() * amp * 0.4]); pts.push([w, h]); const p = MG.path.smooth(pts, true, 0.3); const g = x.createLinearGradient(0, h - base - amp, 0, h); g.addColorStop(0, col); g.addColorStop(1, dark); x.fillStyle = g; x.fill(p); x.save(); x.clip(p); MG.tex.over(x, 'fibers', { alpha: 0.6 }); x.restore(); });
      this.hillsFar = ridge(3, 260, 120, '#C98A8F', '#9A6478'); this.hillsMid = ridge(7, 150, 70, '#9A5E6E', '#6A3A50');
      this.town = MG.cache('s11:town', 2600, 420, (x, w, h) => { const r = MG.rng(12); let px = 0; while (px < w) { const bw = 70 + r() * 120, bh = 90 + r() * 170; x.fillStyle = r() < 0.5 ? '#B77462' : '#A8676A'; x.fillRect(px, h - bh, bw, bh); x.fillStyle = '#8A4A44'; x.beginPath(); x.moveTo(px - 6, h - bh); x.lineTo(px + bw / 2, h - bh - 26 - r() * 10); x.lineTo(px + bw + 6, h - bh); x.fill(); x.fillStyle = 'rgba(40,15,25,0.55)'; for (let j = 0; j < 3; j++) for (let i = 0; i < 3; i++) if (r() < 0.6) x.fillRect(px + 12 + i * (bw - 24) / 3, h - bh + 26 + j * 46, 12, 22); px += bw + 4; } MG.tex.over(x, 'fibers', { alpha: 0.6 }); });
      this.cypress = S11.spr('cypress', 160, 640, (x) => { const p = new Path2D(); p.moveTo(0, -300); p.bezierCurveTo(40, -200, 62, 40, 50, 260); p.lineTo(-50, 260); p.bezierCurveTo(-62, 40, -40, -200, 0, -300); p.closePath(); MG.fx.volume(x, p, [-62, -300, 124, 560], { color: '#3E4A2E', shade: 0.5, hi: 0.25, hiColor: '#D9B477', light: [-0.9, -0.3], tex: 'blotch', texAlpha: 0.3 }); x.fillStyle = '#3a2a20'; x.fillRect(-6, 255, 12, 50); });
      // Franco-era peseta (aluminium-bronze): engraved profile + legend "FRANCISCO FRANCO CAUDILLO DE ESPAÑA POR LA G. DE DIOS"
      this.coin = MG.cache('s11:peseta', 760, 760, (x, w, h) => {
        const R = 340, cx = w / 2, cy = h / 2; const disk = MG.path.circle(cx, cy, R);
        MG.fx.volume(x, disk, [cx - R, cy - R, R * 2, R * 2], { color: '#B89A58', shade: 0.45, hi: 0.45, hiColor: '#F2E2A8', light: [-0.6, -0.8], tex: 'grain', texAlpha: 0.35 });
        x.strokeStyle = 'rgba(60,40,10,0.55)'; x.lineWidth = 6; x.beginPath(); x.arc(cx, cy, R - 14, 0, MG.TAU); x.stroke(); x.lineWidth = 2; x.beginPath(); x.arc(cx, cy, R - 70, 0, MG.TAU); x.stroke();
        for (let i = 0; i < 120; i++) { const a = (i / 120) * MG.TAU; x.strokeStyle = 'rgba(70,45,10,0.35)'; x.lineWidth = 2; x.beginPath(); x.moveTo(cx + Math.cos(a) * (R - 6), cy + Math.sin(a) * (R - 6)); x.lineTo(cx + Math.cos(a) * (R - 1), cy + Math.sin(a) * (R - 1)); x.stroke(); }
        const k = 3.5; const pts = S11.profile().map(([a, b]) => [cx + a * k - 10, cy + b * k + 10]); const pp = MG.path.smooth(pts, true, 0.35);
        x.save(); x.shadowColor = 'rgba(50,30,5,0.6)'; x.shadowBlur = 6; x.shadowOffsetX = 5; x.shadowOffsetY = 6; x.fillStyle = '#C9AE6E'; x.fill(pp); x.restore();
        MG.fx.volume(x, pp, [cx - 150, cy - 190, 300, 400], { color: '#CBB06F', shade: 0.4, hi: 0.5, hiColor: '#FFF0B8', light: [-0.6, -0.8] });
        MG.fx.hatch(x, pp, [cx - 150, cy - 190, 300, 400], { spacing: 7, angle: -30, light: [-0.7, -0.7], color: 'rgba(70,45,10,0.35)', threshold: 0.1 });
        x.strokeStyle = 'rgba(70,45,10,0.6)'; x.lineWidth = 3; x.stroke(pp); x.beginPath(); x.ellipse(cx - 28, cy - 5, 16, 24, 0.1, 0, MG.TAU); x.stroke(); x.beginPath(); x.moveTo(cx - 90, cy - 70); x.quadraticCurveTo(cx - 40, cy - 150, cx + 40, cy - 150); x.stroke();
        const ring = []; for (let i = 0; i <= 120; i++) { const a = MG.deg(-215) + (i / 120) * MG.deg(250); ring.push([cx + Math.cos(a) * (R - 44), cy + Math.sin(a) * (R - 44)]); }
        MG.text.onPath(x, 'FRANCISCO FRANCO CAUDILLO DE ESPAÑA POR LA G. DE DIOS', ring, { font: F.roman, weight: 700, size: 34, color: '#5A4216', offset: 0.5, spacing: 1.5 });
        MG.text.draw(x, '1966', cx, cy + R - 92, { font: F.roman, weight: 700, size: 30, color: '#5A4216', align: 'center' });
      });
    },
    draw(ctx, t) {
      const dk = pg(t, tDict - 0.3, tDict + 1.0, 'inOutSine');
      const cam = MG.keys(t, [[1675.0, [960, 600, 1.0]], [tDict, [1000, 580, 1.05], 'inOutSine'], [tChurch, [1080, 520, 1.1], 'inOutSine'], [1680.75, [1527, 307, 1.55], 'inCubic']]);
      const hh = MG.cam.handheld(t, 2.5, 31, 0.3);
      // sky: rose-gold, bruising toward violet under the dictatorship
      S11.sky(ctx, [[0, '#E9A27F'], [0.5, '#F4C493'], [1, '#F8DDB0']], 'church');
      if (dk > 0) { ctx.save(); ctx.globalAlpha = dk * 0.75; S11.sky(ctx, [[0, '#4A2E48'], [0.6, '#7A5A62'], [1, '#9C8270']], 'church2'); ctx.restore(); }
      const layer = (z, fn) => { ctx.save(); const s = lerp(1, cam[2], z); ctx.translate(W / 2 + hh.dx * z, H / 2 + hh.dy * z); ctx.scale(s, s); ctx.translate(-W / 2 - (cam[0] - 960) * z, -(cam[1] - 540) * z - H / 2); fn(); ctx.restore(); };
      // the coin rises behind the church like a dark sun
      layer(0.6, () => { const rk = MG.ease.out(clamp((t - (tDict - 0.4)) / 1.6)); const cy = lerp(1000, 400, rk); if (rk > 0) { MG.fx.glow(ctx, 1300, cy, 520, dk > 0.5 ? '#C8A060' : '#FFD79A', 0.25 * rk); MG.sprite(ctx, this.coin, 1300, cy, { scale: 0.9, rot: (1 - rk) * 0.25, alpha: clamp(rk * 2) }); } });
      layer(0.5, () => { MG.sprite(ctx, this.hillsFar, 1100, 840, { ay: 1, alpha: 1 }); });
      layer(0.7, () => { MG.sprite(ctx, this.hillsMid, 1100, 900, { ay: 1 }); MG.sprite(ctx, this.town, 1100, 930, { ay: 1, scale: 0.9 }); });
      // church (centre), long shadow to the right
      layer(1.0, () => { ctx.save(); ctx.globalAlpha = 0.35; ctx.fillStyle = '#3B2140'; ctx.beginPath(); ctx.moveTo(390, 1000); ctx.lineTo(1130, 1000); ctx.lineTo(1700, 1080); ctx.lineTo(500, 1080); ctx.fill(); ctx.restore();
        ctx.fillStyle = '#6E4458'; ctx.fillRect(-600, 990, 3400, 200); MG.sprite(ctx, this.church, 760, 1000, { ay: 1, scale: 0.92 });
        const sw = Math.sin((t - tCath) * 5.2) * Math.exp(-Math.max(0, t - tCath) * 0.7) * 0.5 * (t > tCath ? 1 : 0); MG.sprite(ctx, this.bell, 760 + 290 * 0.92, 1000 - 0.92 * 470, { rot: sw, ay: 0.1 });
        if (dk > 0) { ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.globalAlpha = dk * 0.45; ctx.fillStyle = '#3B2A3A'; ctx.fillRect(-600, 0, 3400, 1200); ctx.restore(); } });
      layer(1.35, () => { MG.sprite(ctx, this.cypress, 180, 900, { scale: 1.15 }); MG.sprite(ctx, this.cypress, 1760, 940, { scale: 1.3 }); MG.sprite(ctx, this.cypress, 1180, 980, { scale: 0.9 }); });
      // words
      ctx.save(); ctx.globalAlpha = S11.env(t, tCath - 0.2, 1680.6, 0.3, 0.3);
      S11.say(ctx, t, 'A Catholic country', 1675.09, 150, 200, { font: F.serif, italic: true, size: 74, color: dk > 0.5 ? '#F1E3C8' : C.plum });
      ctx.restore();
      if (t > tDecades - 0.1) { ctx.save(); ctx.globalAlpha = S11.env(t, tDecades - 0.1, 1680.6, 0.35, 0.3); MG.text.reveal(ctx, '1939 — 1975', 150, 285, t, tDecades - 0.05, { font: F.roman, weight: 700, size: 50, tracking: 0.12, color: dk > 0.5 ? '#E2CFA0' : C.ink, style: 'fade', by: 'word' }); ctx.restore(); }
      if (t > tRuling) { ctx.save(); ctx.globalAlpha = S11.env(t, tRuling, 1680.6, 0.4, 0.3); MG.text.reveal(ctx, '“BY THE GRACE OF GOD”', 150, 345, t, tRuling + 0.5, { font: F.mono, weight: 600, size: 26, tracking: 0.18, color: '#E2CFA0', style: 'track', by: 'line' }); ctx.restore(); }
    },
  };

  // =====================================================================================================
  // SCENE 5 — the coin becomes the bullring: SOL and SOMBRA, the film's divide at its source. "An unusual choice."
  // =====================================================================================================
  const tUnus = Tw('unusual', 1682.65), tChoice = Tw('choice.', 1683.25);
  const bullScene = {
    id: 's11_bullring', start: 1680.75, end: 1684.2,
    transIn: { type: S11.matchDissolve, dur: 0.45, x: 960, y: 540, aTo: 1.1, bFrom: 0.92 },
    post: { grade: 'golden', vignette: 0.4 },
    init() {
      const R0 = 860; this.R0 = R0;
      this.ring = MG.cache('s11:bullring', 1840, 1840, (x, w, h) => {
        const cx = w / 2, cy = h / 2; const r = MG.rng(5);
        // roof (terracotta tiles)
        x.fillStyle = '#B9653F'; x.beginPath(); x.arc(cx, cy, R0, 0, MG.TAU); x.fill(); x.strokeStyle = 'rgba(80,30,20,0.35)'; x.lineWidth = 2; for (let i = 0; i < 260; i++) { const a = (i / 260) * MG.TAU; x.beginPath(); x.moveTo(cx + Math.cos(a) * 770, cy + Math.sin(a) * 770); x.lineTo(cx + Math.cos(a) * R0, cy + Math.sin(a) * R0); x.stroke(); }
        // gallery with arches
        x.fillStyle = '#EFE3CC'; x.beginPath(); x.arc(cx, cy, 772, 0, MG.TAU); x.fill(); x.fillStyle = '#7A3A30'; for (let i = 0; i < 96; i++) { const a = (i / 96) * MG.TAU; x.save(); x.translate(cx + Math.cos(a) * 735, cy + Math.sin(a) * 735); x.rotate(a + Math.PI / 2); x.beginPath(); x.moveTo(-14, 18); x.lineTo(-14, -2); x.arc(0, -2, 14, Math.PI, 0); x.lineTo(14, 18); x.fill(); x.restore(); }
        // stone stands (tendidos): steps
        for (let k = 0; k < 13; k++) { const rr = 700 - k * 19; x.fillStyle = k % 2 ? '#E9DEC8' : '#DCCFB6'; x.beginPath(); x.arc(cx, cy, rr, 0, MG.TAU); x.fill(); }
        x.strokeStyle = 'rgba(60,40,30,0.5)'; x.lineWidth = 6; for (let i = 0; i < 10; i++) { const a = (i / 10) * MG.TAU + 0.31; x.beginPath(); x.moveTo(cx + Math.cos(a) * 460, cy + Math.sin(a) * 460); x.lineTo(cx + Math.cos(a) * 705, cy + Math.sin(a) * 705); x.stroke(); }
        // painted section names on the stands
        const lab = (str, a) => { x.save(); x.translate(cx + Math.cos(a) * 600, cy + Math.sin(a) * 600); x.rotate(a + Math.PI / 2); MG.text.draw(x, str, 0, 22, { font: F.grotesk, weight: 800, size: 76, tracking: 0.18, color: 'rgba(126,31,27,0.85)', align: 'center' }); x.restore(); };
        lab('SOMBRA', Math.PI * 1.0); lab('SOL', 0); lab('SOL Y SOMBRA', -Math.PI / 2); lab('SOL Y SOMBRA', Math.PI / 2);
        // callejón + barrera (red wooden fence)
        x.fillStyle = '#B79A70'; x.beginPath(); x.arc(cx, cy, 462, 0, MG.TAU); x.fill(); x.fillStyle = '#8E2A22'; x.beginPath(); x.arc(cx, cy, 440, 0, MG.TAU); x.fill(); x.fillStyle = '#B23A2E'; x.beginPath(); x.arc(cx, cy, 434, 0, MG.TAU); x.fill();
        // arena sand with rake marks and the two painted circles
        const g = x.createRadialGradient(cx - 120, cy - 120, 50, cx, cy, 430); g.addColorStop(0, '#E9C98E'); g.addColorStop(1, '#D3A868'); x.fillStyle = g; x.beginPath(); x.arc(cx, cy, 422, 0, MG.TAU); x.fill();
        x.save(); x.beginPath(); x.arc(cx, cy, 422, 0, MG.TAU); x.clip(); for (let i = 0; i < 900; i++) { x.fillStyle = `rgba(${r() < 0.5 ? '120,80,40' : '255,240,210'},${0.08 + r() * 0.12})`; const a = r() * MG.TAU, d = Math.sqrt(r()) * 420; x.fillRect(cx + Math.cos(a) * d, cy + Math.sin(a) * d, 2 + r() * 6, 1.5); } x.strokeStyle = 'rgba(255,250,240,0.6)'; x.lineWidth = 4; for (const rr of [330, 300]) { x.beginPath(); x.arc(cx, cy, rr, 0, MG.TAU); x.stroke(); } MG.tex.over(x, 'grain', { alpha: 0.15 }); x.restore();
        // gates
        for (const a of [0.5, 2.1, 3.7, 5.2]) { x.fillStyle = '#5A1A16'; x.save(); x.translate(cx + Math.cos(a) * 437, cy + Math.sin(a) * 437); x.rotate(a); x.fillRect(-8, -24, 16, 48); x.restore(); }
        MG.tex.over(x, 'fibers', { alpha: 0.4 });
      });
      this.plaza = MG.cache('s11:plaza', 1024, 1024, (x, w, h) => { x.fillStyle = '#D7B98A'; x.fillRect(0, 0, w, h); const r = MG.rng(9); for (let j = 0; j < h; j += 32) for (let i = 0; i < w; i += 64) { x.fillStyle = `rgba(${r() < 0.5 ? '150,110,70' : '240,220,190'},${0.08 + r() * 0.1})`; x.fillRect(i + (j / 32 % 2) * 32, j, 62, 30); } x.strokeStyle = 'rgba(120,90,60,0.25)'; x.lineWidth = 2; for (let j = 0; j < h; j += 32) { x.beginPath(); x.moveTo(0, j); x.lineTo(w, j); x.stroke(); } MG.tex.over(x, 'fibers', { alpha: 0.5 }); });
    },
    draw(ctx, t) {
      // start: arena matches the coin on screen (r≈407), then the camera rises to reveal SOL / SOMBRA and drifts into the shade
      const k = MG.keys(t, [[1680.75, [960, 540, 407 / 422, -0.35]], [tUnus - 0.2, [1130, 560, 0.43, -0.12], 'inOutCubic'], [tChoice + 0.25, [1180, 560, 0.41, -0.06], 'inOutSine'], [1684.2, [900, 560, 0.62, -0.02], 'inCubic']]);
      const [cx, cy, sc, rot] = k;
      ctx.fillStyle = MG.tex.pattern(ctx, this.plaza); ctx.save(); ctx.translate(cx, cy); ctx.rotate(rot); ctx.scale(sc * 1.8, sc * 1.8); ctx.fillRect(-1600, -1600, 3200, 3200); ctx.restore();
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(rot); ctx.scale(sc, sc);
      ctx.save(); ctx.shadowColor = 'rgba(40,20,30,0.45)'; ctx.shadowBlur = 60 * sc; ctx.shadowOffsetX = 40; ctx.shadowOffsetY = 50; ctx.fillStyle = '#B9653F'; ctx.beginPath(); ctx.arc(0, 0, this.R0, 0, MG.TAU); ctx.fill(); ctx.restore();
      ctx.drawImage(this.ring, -920, -920);
      // the shade: the west stands throw their shadow across the ring (sun low in the east-southeast)
      const d = 380; const lit = new Path2D(); lit.arc(d, -60, this.R0 * 0.98, 0, MG.TAU);
      ctx.save(); const sh = new Path2D(); sh.arc(0, 0, this.R0 + 2, 0, MG.TAU); ctx.clip(sh); ctx.beginPath(); ctx.rect(-1200, -1200, 2400, 2400); ctx.arc(d, -60, this.R0 * 0.98, 0, MG.TAU, true); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = 'rgba(70,46,90,0.62)'; ctx.fill('evenodd'); ctx.restore();
      ctx.save(); ctx.clip(sh); ctx.globalCompositeOperation = 'screen'; ctx.globalAlpha = 0.25; const g = ctx.createRadialGradient(d + 200, -200, 50, d, -60, this.R0); g.addColorStop(0, '#FFE2A8'); g.addColorStop(1, 'rgba(255,200,140,0)'); ctx.fillStyle = g; ctx.fill(lit); ctx.restore();
      ctx.restore();
      // words
      ctx.save(); ctx.globalAlpha = S11.env(t, 1680.9, 1684.3, 0.3, 0.25);
      S11.say(ctx, t, 'So the Spanish seem to have made', 1680.85, 150, 860, { font: F.serif, italic: true, size: 56, color: C.plum, stroke: 'rgba(251,241,220,0.6)', strokeW: 8 });
      S11.say(ctx, t, 'an unusual choice.', 1682.45, 146, 965, { font: F.display, weight: 800, size: 100, color: C.ink, stroke: 'rgba(251,241,220,0.6)', strokeW: 10 });
      ctx.restore();
    },
  };

  // =====================================================================================================
  // SCENE 6 — into the shade: one tracking shot along a whitewashed alley wall. Five "nots" are objects on the wall
  // (ship in a bottle · leaking pipe · shop sign ABIERTO→CERRADO · tug-of-war between windows · azulejo map losing two tiles),
  // the words are painted on the wall and struck through. Then the sun clears the rooftops: two old men on a bench.
  // =====================================================================================================
  const tPower = Tw('power', 1685.41), tAgain = Tw('again.', 1685.89), tEcon = Tw('economy', 1686.77), tEff = Tw('efficient.', 1688.13), tJobs = Tw('jobs', 1689.01), tArent = Tw("aren't", 1689.49), tSecure = Tw('secure.', 1690.13);
  const tPol = Tw('politicians', 1691.25), tFight = Tw('fight.', 1692.05), tReg = Tw('regions', 1693.21), tLeave = Tw('leave.', 1693.97), tBut = Tw('but', 1694.82), tLonger = Tw('longer', 1695.54), tElse = Tw('everyone', 1696.26);
  const VX = [900, 2500, 4100, 5700, 7300, 8950];
  const alleyScene = {
    id: 's11_alley', start: 1684.2, end: 1697.45,
    transIn: { type: 'zoom', dur: 0.55, x: 700, y: 560, amount: 1.4, from: 0.9 },
    post: (t) => { const k = pg(t, tBut - 0.1, tBut + 0.8); return { grade: k > 0.5 ? 'golden' : 'cool', vignette: 0.38 - 0.08 * k, sat: 0.9 + 0.15 * k, temp: -0.03 + 0.06 * k }; },
    init() {
      const L = [-0.6, -0.8];
      this.wall = MG.cache('s11:calwall', 1024, 1024, (x, w, h) => { x.fillStyle = '#F1E9DA'; x.fillRect(0, 0, w, h); MG.tex.over(x, 'blotch', { alpha: 0.22, color: '#9A8A70', scale: 3, seed: 3 }); MG.tex.over(x, 'fibers', { alpha: 0.6 }); const r = MG.rng(8); for (let i = 0; i < 60; i++) { x.strokeStyle = `rgba(120,100,80,${0.05 + r() * 0.08})`; x.lineWidth = 1; x.beginPath(); const px = r() * w, py = r() * h; x.moveTo(px, py); x.lineTo(px + (r() - 0.5) * 60, py + r() * 40); x.stroke(); } });
      this.floor = MG.cache('s11:alleyfloor', 512, 256, (x, w, h) => { x.fillStyle = '#B9805E'; x.fillRect(0, 0, w, h); x.strokeStyle = 'rgba(70,40,30,0.4)'; x.lineWidth = 2; for (let i = 0; i < w; i += 64) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, h); x.stroke(); } for (let j = 0; j < h; j += 64) { x.beginPath(); x.moveTo(0, j); x.lineTo(w, j); x.stroke(); } MG.tex.over(x, 'blotch', { alpha: 0.2, color: '#5a2a1a', scale: 2 }); });
      // V1 ship in a bottle (Cross of Burgundy on the mainsail)
      this.bottle = S11.spr('bottle', 620, 280, (x) => {
        const body = MG.path.rr(-250, -80, 400, 160, 70); const neck = MG.path.rr(140, -34, 110, 68, 22);
        x.save(); x.clip(body); const sea = x.createLinearGradient(0, 20, 0, 80); sea.addColorStop(0, '#3A6E9E'); sea.addColorStop(1, '#24496E'); x.fillStyle = sea; x.fillRect(-250, 30, 400, 60); x.restore();
        x.fillStyle = 'rgba(200,230,230,0.16)'; x.fill(body); x.fill(neck); x.strokeStyle = 'rgba(255,255,255,0.75)'; x.lineWidth = 4; x.stroke(body); x.stroke(neck);
        x.fillStyle = '#8A5A3A'; x.fillRect(236, -26, 40, 52); x.fillStyle = 'rgba(255,255,255,0.6)'; x.beginPath(); x.ellipse(-80, -58, 140, 10, 0, 0, MG.TAU); x.fill();
      });
      this.ship = S11.spr('galleon', 340, 240, (x) => {
        const hull = new Path2D(); hull.moveTo(-130, 40); hull.lineTo(120, 40); hull.lineTo(150, 0); hull.lineTo(100, 10); hull.lineTo(-90, 10); hull.lineTo(-120, -30); hull.lineTo(-150, -30); hull.closePath(); MG.fx.volume(x, hull, [-150, -30, 300, 70], { color: '#7A4A2A', cel: true, outline: '#2a1a12', light: L }); x.fillStyle = '#C9A04A'; x.fillRect(-120, 16, 230, 4);
        for (const [mx, mh, sw] of [[-60, 150, 70], [10, 180, 86], [80, 130, 60]]) { x.fillStyle = '#4A2E1E'; x.fillRect(mx - 3, 10 - mh, 6, mh); for (let k = 0; k < 2; k++) { const sy = 10 - mh + 20 + k * (mh * 0.42); const sp = MG.path.smooth([[mx - sw / 2, sy], [mx + sw / 2, sy], [mx + sw / 2 + 6, sy + mh * 0.36], [mx - sw / 2 - 6, sy + mh * 0.36]], true, 0.2); MG.fx.volume(x, sp, [mx - sw / 2 - 6, sy, sw + 12, mh * 0.36], { color: '#F1E6CF', cel: true, outline: '#5a4a3a', outlineW: 1.5, light: L }); if (mx === 10 && k === 0) { x.save(); x.clip(sp); x.strokeStyle = '#B8322A'; x.lineWidth = 7; x.beginPath(); x.moveTo(mx - sw / 2, sy); x.lineTo(mx + sw / 2, sy + mh * 0.36); x.moveTo(mx + sw / 2, sy); x.lineTo(mx - sw / 2, sy + mh * 0.36); x.stroke(); x.restore(); } } x.fillStyle = '#B8322A'; x.beginPath(); x.moveTo(mx + 3, 10 - mh); x.lineTo(mx + 28, 10 - mh + 7); x.lineTo(mx + 3, 10 - mh + 14); x.fill(); }
      });
      // V3 hanging sign (two faces)
      const signFace = (txt, col, key) => S11.spr(key, 300, 130, (x) => { const p = MG.path.rr(-130, -50, 260, 100, 10); MG.fx.volume(x, p, [-130, -50, 260, 100], { color: col, cel: true, outline: '#2a1a12', light: L, tex: 'fibers', texAlpha: 0.5 }); MG.text.draw(x, txt, 0, 18, { font: F.grotesk, weight: 800, size: 46, tracking: 0.12, color: '#FBF1DC', align: 'center' }); });
      this.signA = signFace('ABIERTO', '#3E7A52', 'signA'); this.signB = signFace('CERRADO', '#A8322A', 'signB');
      // V5 azulejo map of Spain (regions painted in cobalt), Catalonia + Basque Country as loose ceramic pieces
      MG.geo.init(); const pen = MG.geo.peninsular(); const prm = MG.geo.fitParams('conic', pen, [960 - 320, 540 - 225, 960 + 320, 540 + 225]); this.azPr = MG.geo.proj('conic', { center: prm.center, scale: prm.scale, translate: [0, 0] });
      const cat = MG.geo.region('Catalonia'), bas = MG.geo.region('Basque Country'); this.loose = [cat, bas];
      this.azulejo = S11.spr('azulejo', 820, 620, (x) => { const pr = this.azPr; x.fillStyle = '#F6F1E6'; x.fillRect(-380, -280, 760, 560); x.strokeStyle = 'rgba(31,78,140,0.35)'; x.lineWidth = 2; for (let i = -380; i <= 380; i += 76) { x.beginPath(); x.moveTo(i, -280); x.lineTo(i, 280); x.stroke(); } for (let j = -280; j <= 280; j += 70) { x.beginPath(); x.moveTo(-380, j); x.lineTo(380, j); x.stroke(); }
        for (const f of pen.features) { if (f === cat || f === bas) { MG.geo.draw(x, pr, f, { fill: 'rgba(31,78,140,0.08)', stroke: 'rgba(31,78,140,0.25)', width: 1.5, dash: [4, 4] }); continue; } MG.geo.draw(x, pr, f, { fill: 'rgba(31,78,140,0.22)', stroke: '#1F4E8C', width: 2.2 }); }
        x.strokeStyle = '#1F4E8C'; x.lineWidth = 10; x.strokeRect(-380, -280, 760, 560); x.lineWidth = 3; x.strokeRect(-366, -266, 732, 532); MG.geo.canaryInset(x, [-360, 170, 170, 84], { fill: 'rgba(31,78,140,0.35)', frame: '#1F4E8C', label: 'CANARIAS', labelColor: '#1F4E8C' }); MG.tex.over(x, 'grain', { alpha: 0.12 }); });
      this.piece = (f) => S11.spr('az:' + f.properties.en, 420, 360, (x) => { const pr = this.azPr; const c = window.d3.geoPath(pr).centroid(f); x.translate(-c[0], -c[1]); MG.geo.draw(x, pr, f, { fill: '#F6F1E6', stroke: '#1F4E8C', width: 3, shadow: { blur: 0, dy: 0 } }); MG.geo.draw(x, pr, f, { fill: 'rgba(31,78,140,0.3)' }); });
      this.pieceC = this.loose.map((f) => window.d3.geoPath(this.azPr).centroid(f));
      this.lamp = MG.cache('s11:lampfg', 220, 1300, (x, w, h) => { x.fillStyle = '#1E1620'; x.fillRect(w / 2 - 14, 200, 28, h - 200); x.beginPath(); x.moveTo(w / 2 - 70, 200); x.lineTo(w / 2 + 70, 200); x.lineTo(w / 2 + 40, 60); x.lineTo(w / 2 - 40, 60); x.closePath(); x.fill(); x.fillStyle = '#E9C27A'; x.fillRect(w / 2 - 34, 90, 68, 90); });
      this.lampB = MG.blurred(this.lamp, 9);
      this.geranium = S11.spr('geranium', 220, 200, (x) => { const pot = MG.path.poly([[-60, 0], [60, 0], [44, 80], [-44, 80]]); MG.fx.volume(x, pot, [-60, 0, 120, 80], { color: '#C8693F', cel: true, outline: '#4a2a1a', light: L }); const r = MG.rng(4); for (let i = 0; i < 14; i++) { const lp = MG.path.blob(-70 + r() * 140, -10 - r() * 60, 22, { seed: i, irr: 0.3 }); x.fillStyle = r() < 0.5 ? '#4E7A4A' : '#3E6A3A'; x.fill(lp); } for (let i = 0; i < 9; i++) { const fx2 = -60 + r() * 120, fy = -40 - r() * 60; for (let k = 0; k < 5; k++) { x.fillStyle = '#D7303A'; x.beginPath(); x.arc(fx2 + Math.cos(k * 1.26) * 7, fy + Math.sin(k * 1.26) * 7, 6, 0, MG.TAU); x.fill(); } } });
    },
    draw(ctx, t) {
      const L = [-0.6, -0.8];
      // ---------- camera track (fast whips between vignettes, synced to "Their …")
      const stops = [[1684.2, VX[0] - 260], [1686.25, VX[0]], [tEcon - 0.05, VX[1]], [tJobs - 0.2, VX[1] + 30], [tJobs + 0.15, VX[2]], [tPol - 0.25, VX[2] + 30], [tPol + 0.1, VX[3]], [tReg - 0.35, VX[3] + 30], [tReg + 0.05, VX[4]], [tBut - 0.15, VX[4] + 40], [tBut + 0.6, VX[5]], [1697.45, VX[5] + 40]];
      const K = []; stops.forEach(([tt, x], i) => K.push([tt, x, i % 2 === 0 ? 'inOutCubic' : 'inOutSine']));
      const camX = MG.keys(t, K); const camX2 = MG.keys(t + 1 / 30, K); const vel = (camX2 - camX) * 30;
      const zoom = MG.keys(t, [[1684.2, 1.06], [tBut - 0.2, 1.0], [tBut + 0.6, 1.08], [1697.45, 1.2]]);
      const hh = MG.cam.handheld(t, 3, 41, 0.35);
      const sunK = MG.ease.inOutCubic(clamp((t - (tBut - 0.25)) / 1.0));
      const drawWorld = (c) => {
        c.save(); c.translate(W / 2 + hh.dx, H / 2 + hh.dy); c.scale(zoom, zoom); c.translate(-camX, -560);
        const x0 = camX - 1200, x1 = camX + 1200;
        c.fillStyle = MG.tex.pattern(c, this.wall); c.fillRect(x0, -200, x1 - x0, 1080);
        c.fillStyle = MG.tex.pattern(c, this.floor); c.fillRect(x0, 860, x1 - x0, 500); c.fillStyle = 'rgba(40,20,20,0.35)'; c.fillRect(x0, 860, x1 - x0, 10);
        // wall plinth (painted band)
        c.fillStyle = '#C9B48A'; c.fillRect(x0, 780, x1 - x0, 80); c.fillStyle = 'rgba(0,0,0,0.12)'; c.fillRect(x0, 780, x1 - x0, 5);
        const paint = (str, vx, t0, tStrike, size = 74) => { if (t < t0 - 0.05) return; const ww = MG.text.width(c, str, { font: F.marker, size }); MG.text.reveal(c, str, vx - ww / 2, 740, t, t0, { font: F.marker, size, color: '#3B2140', style: 'wipe', by: 'line', dur: 0.4 }); if (tStrike) { const k = pg(t, tStrike, tStrike + 0.3, 'out'); if (k > 0) { const pts = []; for (let i = 0; i <= 12; i++) pts.push([vx - ww / 2 - 20 + (ww + 40) * (i / 12) * k, 714 + Math.sin(i * 1.3) * 3 - i * 1.2]); MG.fx.ink(c, pts, { width: 14, color: '#B8322A', taper: [0.05, 0.3], wobble: 2, seed: 3 }); } } };
        const near = (vx) => Math.abs(camX - vx) < 1500;
        // V1 ship in a bottle in a niche
        if (near(VX[0])) { const vx = VX[0]; const n = new Path2D(); n.moveTo(vx - 290, 640); n.lineTo(vx - 290, 330); n.arc(vx, 330, 290, Math.PI, 0); n.lineTo(vx + 290, 640); n.closePath(); c.save(); c.clip(n); const g = c.createLinearGradient(0, 40, 0, 640); g.addColorStop(0, '#B8A890'); g.addColorStop(1, '#8A7A6A'); c.fillStyle = g; c.fillRect(vx - 300, 30, 600, 620); c.restore(); c.strokeStyle = 'rgba(80,60,40,0.4)'; c.lineWidth = 6; c.stroke(n); c.fillStyle = '#7A5A3A'; c.fillRect(vx - 300, 600, 600, 26);
          MG.fx.contact(c, vx, 600, 230, 18, 0.4); const rock = Math.sin(t * 1.4) * 0.03 + MG.jiggle(t, tAgain, 0.06, 1.2, 1.5); c.save(); c.translate(vx - 30, 500); c.save(); c.beginPath(); c.roundRect(-250, -80, 400, 160, 70); c.clip(); MG.sprite(c, this.ship, -55, -18 + Math.sin(t * 1.3) * 3, { rot: rock, scale: 1.02 }); c.restore(); MG.sprite(c, this.bottle, 0, 0, {}); c.restore();
          paint('GREAT POWER', vx, tPower - 0.25, tAgain + 0.05); }
        // V2 leaking pipe → coins drip into a bucket
        if (near(VX[1])) { const vx = VX[1]; c.save(); const pipe = MG.path.rr(vx - 900, 330, 1800, 46, 23); MG.fx.volume(c, pipe, [vx - 900, 330, 1800, 46], { color: '#B87333', shade: 0.45, hi: 0.6, light: L, size: 60 }); for (const bx of [vx - 600, vx + 500]) { c.fillStyle = '#5a4a3a'; c.fillRect(bx - 10, 320, 20, 66); } const joint = MG.path.rr(vx - 40, 318, 80, 70, 10); MG.fx.volume(c, joint, [vx - 40, 318, 80, 70], { color: '#9A5A2A', shade: 0.45, hi: 0.5, light: L, outline: '#4a2a12' });
          const gx = vx - 330; const gp = MG.path.circle(gx, 300, 46); MG.fx.volume(c, gp, [gx - 46, 254, 92, 92], { color: '#E8E1D0', shade: 0.3, light: L, outline: '#4a3a2a', outlineW: 4 }); const na = -2.2 + Math.sin(t * 9) * 0.25 + pg(t, tEff - 0.3, tEff + 0.2) * 1.6; c.strokeStyle = '#B8322A'; c.lineWidth = 4; c.beginPath(); c.moveTo(gx, 300); c.lineTo(gx + Math.cos(na) * 34, 300 + Math.sin(na) * 34); c.stroke(); c.fillStyle = '#2a1a12'; c.fillRect(gx - 4, 346, 8, 0);
          const bucket = MG.path.poly([[vx - 95, 700], [vx + 95, 700], [vx + 75, 860], [vx - 75, 860]]); MG.fx.volume(c, bucket, [vx - 95, 700, 190, 160], { color: '#9AA0A6', shade: 0.4, hi: 0.5, light: L, outline: '#3a3a40' }); c.strokeStyle = '#5a5e66'; c.lineWidth = 4; c.beginPath(); c.ellipse(vx, 700, 95, 18, 0, 0, MG.TAU); c.stroke(); c.beginPath(); c.arc(vx, 700, 100, Math.PI * 1.05, Math.PI * 1.95); c.stroke();
          for (let i = 0; i < 18; i++) { const t0 = 1685.9 + i * 0.2; const age = t - t0; if (age < 0) continue; const y = 392 + 0.5 * 1900 * age * age; if (y > 712) continue; const flip = Math.abs(Math.cos(age * 14 + i)); c.save(); c.translate(vx + Math.sin(i) * 6, y); c.scale(1, Math.max(0.15, flip)); c.fillStyle = '#E2B24A'; c.beginPath(); c.arc(0, 0, 15, 0, MG.TAU); c.fill(); c.strokeStyle = '#8A6A1A'; c.lineWidth = 2.5; c.stroke(); c.restore(); }
          c.restore(); paint('MOST EFFICIENT', vx, tEcon + 0.2, tEff + 0.05, 66); }
        // V3 shop door with a hanging sign that flips ABIERTO → CERRADO
        if (near(VX[2])) { const vx = VX[2]; c.fillStyle = '#B8A890'; c.fillRect(vx - 210, 200, 420, 590); const door = MG.path.rr(vx - 180, 230, 360, 560, 6); MG.fx.volume(c, door, [vx - 180, 230, 360, 560], { color: '#2F6A55', cel: true, light: L, outline: '#16302a', tex: 'fibers', texAlpha: 0.5 }); c.strokeStyle = 'rgba(10,30,25,0.5)'; c.lineWidth = 6; c.strokeRect(vx - 140, 270, 280, 210); c.strokeRect(vx - 140, 520, 280, 230); c.fillStyle = 'rgba(160,200,210,0.5)'; c.fillRect(vx - 128, 282, 256, 186); c.fillStyle = '#C9A04A'; c.beginPath(); c.arc(vx + 135, 560, 12, 0, MG.TAU); c.fill();
          const tile = MG.path.rr(vx - 120, 150, 240, 46, 4); c.fillStyle = '#F6F1E6'; c.fill(tile); c.strokeStyle = '#1F4E8C'; c.lineWidth = 3; c.stroke(tile); MG.text.draw(c, 'MAYO – OCTUBRE', vx, 182, { font: F.grotesk, weight: 700, size: 26, tracking: 0.1, color: '#1F4E8C', align: 'center' });
          const fl = MG.ease.inOutCubic(clamp((t - (tArent - 0.15)) / 0.5)); const ang = fl * Math.PI + MG.jiggle(t, tArent + 0.35, 0.25, 2, 4); const sw = Math.sin(t * 2.2) * 0.04 + MG.jiggle(t, tArent - 0.1, 0.12, 1.6, 2.5);
          c.save(); c.translate(vx, 300); c.rotate(sw); c.strokeStyle = '#3a2a1a'; c.lineWidth = 3; c.beginPath(); c.moveTo(0, 0); c.lineTo(-90, 70); c.moveTo(0, 0); c.lineTo(90, 70); c.stroke(); c.fillStyle = '#2a1a12'; c.beginPath(); c.arc(0, 0, 6, 0, MG.TAU); c.fill(); const sx = Math.cos(ang); MG.fx.contact(c, 10, 160, 130, 18, 0.25); c.translate(0, 115); c.scale(Math.max(0.02, Math.abs(sx)), 1); MG.sprite(c, sx >= 0 ? this.signA : this.signB, 0, 0, {}); c.restore();
          paint('MOST SECURE', vx, tJobs + 0.15, tSecure + 0.05); }
        // V4 tug of war between two windows (party colours on the sleeves)
        if (near(VX[3])) { const vx = VX[3]; const win = (wx) => { c.fillStyle = '#3B2A30'; c.fillRect(wx - 110, 180, 220, 300); c.fillStyle = '#5E8F52'; for (const s2 of [-1, 1]) { const sh2 = MG.path.rr(wx + s2 * 110 + (s2 > 0 ? 0 : -90), 176, 90, 308, 4); MG.fx.volume(c, sh2, [wx + s2 * 110 - 90, 176, 180, 308], { color: '#4E7A4A', cel: true, outline: '#1e2e1a', light: L }); c.strokeStyle = 'rgba(20,40,20,0.5)'; c.lineWidth = 3; for (let k = 0; k < 9; k++) { c.beginPath(); c.moveTo(wx + s2 * 110 + (s2 > 0 ? 8 : -82), 200 + k * 31); c.lineTo(wx + s2 * 110 + (s2 > 0 ? 82 : -8), 200 + k * 31); c.stroke(); } } c.fillStyle = '#C9B48A'; c.fillRect(wx - 130, 480, 260, 22); };
          win(vx - 470); win(vx + 470); const tug = Math.sin((t - tPol) * 5.5) * 26 * pg(t, tPol - 0.2, tPol + 0.2) + MG.wiggle(t, 3, 10, 7); const ky = 420 + Math.abs(Math.sin(t * 9)) * 4;
          const hl = [vx - 300 + tug, 410], hr = [vx + 300 + tug, 410]; const rope = MG.path.spline([[vx - 520, 405], hl, [vx + tug, ky], hr, [vx + 520, 405]], 10); MG.fx.ink(c, rope, { width: 16, color: '#C9A46A', taper: [0, 0] }); MG.fx.ink(c, rope.map(([a, b]) => [a, b + 4]), { width: 4, color: 'rgba(90,60,30,0.6)', taper: [0, 0] });
          c.fillStyle = '#B8322A'; c.beginPath(); c.moveTo(vx + tug, ky); c.lineTo(vx + tug - 16, ky + 46); c.lineTo(vx + tug + 16, ky + 46); c.fill();
          S11.limb(c, [[vx - 480, 360], [vx - 400 + tug * 0.5, 400], hl], 52, 40, '#C8423B'); MG.kit.hand(c, hl[0] + 10, hl[1], { pose: 'fist', angle: -1.57, s: 1.3, skin: '#E2A77F' });
          S11.limb(c, [[vx + 480, 360], [vx + 400 + tug * 0.5, 400], hr], 52, 40, '#2D7FC0'); MG.kit.hand(c, hr[0] - 10, hr[1], { pose: 'fist', angle: 1.57, s: 1.3, skin: '#E0A276', flip: true });
          paint('POLITICIANS FIGHT', vx, tPol - 0.1, null, 70); }
        // V5 azulejo map: Catalonia and the Basque Country come loose
        if (near(VX[4])) { const vx = VX[4]; MG.fx.shadow(c, MG.path.rr(vx - 380, 150, 760, 560, 4), { dx: 8, dy: 12, blur: 16 }); MG.sprite(c, this.azulejo, vx, 430, {});
          this.loose.forEach((f, i) => { const k = MG.ease.inOutCubic(clamp((t - (tLeave - 0.35 + i * 0.12)) / 0.7)); const c0 = this.pieceC[i]; const dx = (i ? -60 : 90) * k, dy = (i ? -70 : -20) * k + Math.sin(k * Math.PI) * -20; const rot = (i ? -0.25 : 0.3) * k + MG.jiggle(t, tLeave - 0.35 + i * 0.12, 0.05, 6, 6); const px = vx + c0[0] + dx, py = 430 + c0[1] + dy; MG.fx.contact(c, px + 18 * k + 4, py + 26 * k + 4, 70, 50, 0.18 + 0.25 * k); MG.sprite(c, this.piece(f), px, py, { rot }); });
          paint('REGIONS WANT TO LEAVE', vx, tReg - 0.15, null, 62); }
        // V6 two old men on a bench in the sun
        if (near(VX[5])) { const vx = VX[5];
          { const dw = MG.path.rr(vx - 150, 180, 300, 330, 6); c.fillStyle = '#B8A890'; c.fillRect(vx - 175, 160, 350, 360); MG.fx.volume(c, dw, [vx - 150, 180, 300, 330], { color: '#2F5A7A', cel: true, outline: '#14283a', light: L, tex: 'fibers', texAlpha: 0.4 }); c.strokeStyle = 'rgba(10,20,30,0.45)'; c.lineWidth = 4; for (let k = 0; k < 10; k++) { c.beginPath(); c.moveTo(vx - 140, 196 + k * 31); c.lineTo(vx + 140, 196 + k * 31); c.stroke(); } c.fillStyle = '#1E1620'; c.fillRect(vx - 190, 512, 380, 12); for (let k = 0; k < 12; k++) c.fillRect(vx - 185 + k * 33, 470, 5, 44); c.fillRect(vx - 190, 466, 380, 8); }
          { const cy2 = 858, cx2 = vx + 520; const body = MG.path.ellipse(cx2, cy2 - 26, 70, 30); MG.fx.volume(c, body, [cx2 - 70, cy2 - 56, 140, 60], { color: '#D98A3A', cel: true, outline: '#4a2a12', light: L }); const hd = MG.path.circle(cx2 - 66, cy2 - 34, 26); MG.fx.volume(c, hd, [cx2 - 92, cy2 - 60, 52, 52], { color: '#D98A3A', cel: true, outline: '#4a2a12', light: L }); c.fillStyle = '#D98A3A'; c.strokeStyle = '#4a2a12'; c.lineWidth = 3; for (const s2 of [-1, 1]) { c.beginPath(); c.moveTo(cx2 - 66 + s2 * 8, cy2 - 56); c.lineTo(cx2 - 66 + s2 * 22, cy2 - 76); c.lineTo(cx2 - 66 + s2 * 24, cy2 - 50); c.fill(); c.stroke(); } MG.fx.ink(c, [[cx2 - 76, cy2 - 36], [cx2 - 70, cy2 - 34]], { width: 3, color: '#2a1a10' }); MG.fx.ink(c, [[cx2 - 60, cy2 - 36], [cx2 - 54, cy2 - 34]], { width: 3, color: '#2a1a10' }); const tail = MG.path.spline([[cx2 + 66, cy2 - 20], [cx2 + 110, cy2 - 6], [cx2 + 96 + Math.sin(t * 2) * 14, cy2 + 10]], 8); MG.fx.ink(c, tail, { width: 16, color: '#D98A3A', taper: [0, 0.7] }); MG.fx.contact(c, cx2, cy2, 110, 12, 0.3); }
          MG.sprite(c, this.geranium, vx - 560, 470, { scale: 1.0 }); MG.sprite(c, this.geranium, vx + 430, 330, { scale: 1.0 });
          c.fillStyle = '#6A4A32'; for (const lx of [vx - 330, vx + 330]) c.fillRect(lx - 14, 700, 28, 165); const seat = MG.path.rr(vx - 380, 680, 760, 34, 6); MG.fx.volume(c, seat, [vx - 380, 680, 760, 34], { color: '#8A5E3C', cel: true, outline: '#3a2414', light: L }); const back = MG.path.rr(vx - 380, 540, 760, 30, 6); MG.fx.volume(c, back, [vx - 380, 540, 760, 30], { color: '#8A5E3C', cel: true, outline: '#3a2414', light: L }); c.fillRect(vx - 360, 560, 18, 120); c.fillRect(vx + 342, 560, 18, 120);
          MG.fx.contact(c, vx, 870, 420, 26, 0.35);
          const laugh = Math.max(0, Math.sin((t - tLonger) * 7)) * pg(t, tLonger, tLonger + 0.2) * (1 - pg(t, tElse + 0.6, tElse + 1.2));
          const rimS = sunK > 0.5 ? '#FFE2A8' : null;
          S11.legs(c, { x: vx - 150, y: 690, s: 1.25, trousers: '#4A4238', shoe: '#2A1E1E', dir: 1 }, t);
          S11.person(c, { x: vx - 150, y: 690, s: 1.25, skin: '#C98A64', shirt: '#E9E2D2', cardigan: '#7A6A52', hair: { style: 'cap', color: '#EDEAE4' }, capColor: '#4E4A44', mustache: '#EFEAE2', age: 1, nose: 1.35, jaw: 0.33, turn: 0.35, mood: 'grin', open: 0.25 + laugh * 0.5, headDy: -laugh * 0.05, seed: 13, rim: rimS, arms: [{ hand: [0.55, -0.15], pose: 'fist', bend: 1, prop: (cc, tg) => { cc.strokeStyle = '#4A2E1E'; cc.lineWidth = 9; cc.lineCap = 'round'; cc.beginPath(); cc.moveTo(tg[0], tg[1] - 40); cc.lineTo(tg[0] + 40, tg[1] + 150); cc.stroke(); } }, { hand: [0.78, -0.35], pose: 'open', front: true }] }, t);
          S11.legs(c, { x: vx + 170, y: 690, s: 1.25, trousers: '#3E4A5A', shoe: '#3a2a20', dir: -1 }, t);
          S11.person(c, { x: vx + 170, y: 690, s: 1.25, skin: '#D9A07A', shirt: '#9CB4C8', collar: '#B9CCDC', hair: { style: 'bald', color: '#E8E4DE' }, glasses: '#2a2020', age: 1, nose: 1.2, belly: true, turn: -0.4, mood: 'grin', open: 0.2 + laugh * 0.6, headDy: -laugh * 0.07, seed: 17, rim: rimS, arms: [{ hand: [-0.75, -0.55], pose: 'open', front: true, angle: 2.4 }, { hand: [0.4, -0.2], pose: 'open' }] }, t);
        }
        // the rooftop shadow across the wall (sun/shade divide). Recedes when the sun breaks through.
        const edgeY = (x) => lerp(-40, 1500, sunK) + 260 - (x - camX) * 0.18 + ((x / 70) % 1 < 0.5 ? 0 : 14);
        c.save(); c.globalCompositeOperation = 'multiply'; c.fillStyle = 'rgba(92,80,128,0.62)'; c.beginPath(); c.moveTo(x0, 1400); for (let x = x0; x <= x1; x += 35) c.lineTo(x, edgeY(x)); c.lineTo(x1, 1400); c.closePath(); c.fill(); c.restore();
        c.save(); c.globalCompositeOperation = 'screen'; c.fillStyle = 'rgba(255,200,130,0.28)'; c.beginPath(); c.moveTo(x0, -300); for (let x = x0; x <= x1; x += 35) c.lineTo(x, edgeY(x)); c.lineTo(x1, -300); c.closePath(); c.fill(); c.restore();
        // FG lamp posts (parallax, out of focus)
        for (const lx of [1700, 3300, 4900, 6500, 8100]) { const sx = (lx - camX) * 1.7 + camX; if (Math.abs(sx - camX) < 1400) MG.sprite(c, this.lampB, sx, 1000, { ay: 1, scale: 1.15, alpha: 0.95 }); }
        c.restore();
      };
      if (Math.abs(vel) > 1800) { const S = MG.scratch(3); const x = S.getContext('2d'); x.setTransform(1, 0, 0, 1, 0, 0); x.globalCompositeOperation = 'source-over'; x.globalAlpha = 1; drawWorld(x); ctx.fillStyle = '#6E6480'; ctx.fillRect(0, 0, W, H); const n = 5, sm = clamp(Math.abs(vel) / 30 * 0.9, 0, 120); for (let i = 0; i < n; i++) { ctx.globalAlpha = i === 0 ? 1 : 0.45; ctx.drawImage(S, (i / (n - 1) - 0.5) * sm * Math.sign(vel), 0); } ctx.globalAlpha = 1; }
      else drawWorld(ctx);
      // sunlight flood
      if (sunK > 0) { ctx.save(); ctx.globalCompositeOperation = 'soft-light'; ctx.globalAlpha = 0.5 * sunK; const g = ctx.createRadialGradient(1500, 100, 0, 1400, 200, 1500); g.addColorStop(0, '#FFE2A0'); g.addColorStop(1, 'rgba(255,190,110,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); ctx.restore(); }
      // the positive line
      if (t > tBut - 0.1) { ctx.save(); ctx.globalAlpha = S11.env(t, tBut - 0.1, 1697.6, 0.3, 0.2); S11.say(ctx, t, 'But they live', 1694.82, 150, 170, { font: F.serif, italic: true, size: 64, color: C.plum, stroke: 'rgba(255,245,225,0.7)', strokeW: 8 }); S11.say(ctx, t, 'longer than everyone else.', 1695.54, 146, 270, { font: F.display, weight: 800, size: 88, color: C.ink, stroke: 'rgba(255,245,225,0.7)', strokeW: 10 }); ctx.restore(); }
    },
  };

  // =====================================================================================================
  // SCENE 7 — a waiter passes in front of the lens: a 3D paella on a night terrace table, steam, string-light bokeh.
  // The camera rises to top-down: the pan becomes the clock face (match cut).
  // =====================================================================================================
  const tEat = Tw('eat', 1697.78), tExc = Tw('exceptionally', 1697.94);
  /** foreground wipe by a real object: a waiter's dark, out-of-focus body crosses the lens */
  S11.waiterWipe = (ctx, A, B, p, o) => {
    const dir = o.dir || 1; const e = MG.ease.inOutCubic(p); const cx = lerp(-700, W + 700, dir > 0 ? e : 1 - e);
    const S = MG.scratch(3); const x = S.getContext('2d'); x.setTransform(1, 0, 0, 1, 0, 0); x.globalCompositeOperation = 'source-over'; x.clearRect(0, 0, W, H); x.drawImage(B, 0, 0);
    x.globalCompositeOperation = 'destination-in'; const g = x.createLinearGradient(cx - 250 * dir, 0, cx + 250 * dir, 0); g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(0, 0, W, H); x.globalCompositeOperation = 'source-over';
    ctx.drawImage(A, 0, 0); ctx.drawImage(S, 0, 0);
    // the waiter: blurred dark torso + white apron edge + an arm carrying a tray
    ctx.save(); ctx.filter = 'blur(26px)'; ctx.fillStyle = o.color || '#1A1216'; ctx.beginPath(); ctx.ellipse(cx, 560, 430, 900, dir * 0.08, 0, MG.TAU); ctx.fill(); ctx.fillStyle = 'rgba(240,230,215,0.55)'; ctx.beginPath(); ctx.ellipse(cx + 160 * dir, 900, 120, 400, dir * 0.1, 0, MG.TAU); ctx.fill(); ctx.fillStyle = '#2A1E22'; ctx.fillRect(cx - 120, 120, 620, 70); ctx.restore();
  };
  const paellaScene = {
    id: 's11_paella', start: 1697.45, end: 1699.62,
    transIn: { type: S11.waiterWipe, dur: 0.6, ease: 'linear', dir: 1 },
    post: { grade: 'warm', vignette: 0.42, bloom: 0.16, bloomThreshold: 0.8 },
    init() {
      const T = TH(); const sc = (this.sc = new T.Scene()); this.cam = new T.PerspectiveCamera(34, 16 / 9, 0.1, 100);
      sc.add(new T.HemisphereLight(0xffd7a8, 0x2a1830, 0.45));
      const key = new T.DirectionalLight(0xffc27a, 1.7); key.position.set(-4, 7, 3); sc.add(key);
      const rim = new T.DirectionalLight(0x8aa8ff, 0.8); rim.position.set(3, 3, -6); sc.add(rim);
      const pl = new T.PointLight(0xffa850, 9, 12, 2); pl.position.set(1.5, 2.2, 2.5); sc.add(pl);
      this.envTex = MG.three.env();
      const cloth = S11.tex(MG.cache('s11:nightcloth', 512, 512, (x, w, h) => { x.fillStyle = '#D9C8AE'; x.fillRect(0, 0, w, h); x.fillStyle = 'rgba(184,50,42,0.22)'; for (let i = 0; i < w; i += 64) { x.fillRect(i, 0, 32, h); x.fillRect(0, i, w, 32); } MG.tex.over(x, 'fibers', { alpha: 0.6 }); }), { repeat: [6, 6] });
      const table = new T.Mesh(new T.CircleGeometry(7, 64), new T.MeshStandardMaterial({ map: cloth, roughness: 0.95 })); table.rotation.x = -Math.PI / 2; sc.add(table);
      const prof = [[0, 0], [2.2, 0], [2.43, 0.3], [2.53, 0.35], [2.55, 0.31], [2.45, 0.28], [2.24, 0.035], [0, 0.035]].map(([a, b]) => new T.Vector2(a, b));
      const pan = new T.Mesh(new T.LatheGeometry(prof, 72), new T.MeshStandardMaterial({ color: 0x2b2a2e, metalness: 0.85, roughness: 0.38, side: T.DoubleSide })); pan.position.y = 0.02; sc.add(pan);
      for (const sx of [-1, 1]) { const h2 = new T.Mesh(new T.TorusGeometry(0.34, 0.055, 10, 28), pan.material); h2.position.set(sx * 2.85, 0.3, 0); h2.rotation.x = Math.PI / 2 - 0.25; sc.add(h2); }
      const rice = MG.cache('s11:paellatex', 1536, 1536, (x, w, h) => {
        const cx = w / 2, cy = h / 2, R = w / 2; const r = MG.rng(17);
        const g = x.createRadialGradient(cx, cy, 0, cx, cy, R); g.addColorStop(0, '#E8A030'); g.addColorStop(0.8, '#D9861E'); g.addColorStop(0.93, '#A8561A'); g.addColorStop(1, '#6A2E10'); x.fillStyle = g; x.fillRect(0, 0, w, h);
        for (let i = 0; i < 26000; i++) { const a = r() * MG.TAU, d = Math.sqrt(r()) * R * 0.98; const px = cx + Math.cos(a) * d, py = cy + Math.sin(a) * d; x.fillStyle = r() < 0.5 ? `rgba(255,${190 + r() * 30},${90 + r() * 40},0.45)` : `rgba(${150 + r() * 40},${80 + r() * 30},20,0.4)`; x.beginPath(); x.ellipse(px, py, 5 + r() * 3, 2.6, r() * 3, 0, MG.TAU); x.fill(); }
        for (let i = 0; i < 90; i++) { const a = r() * MG.TAU, d = Math.sqrt(r()) * R * 0.85; x.fillStyle = '#6E9A3A'; x.beginPath(); x.arc(cx + Math.cos(a) * d, cy + Math.sin(a) * d, 9, 0, MG.TAU); x.fill(); x.fillStyle = 'rgba(255,255,255,0.4)'; x.beginPath(); x.arc(cx + Math.cos(a) * d - 3, cy + Math.sin(a) * d - 3, 3, 0, MG.TAU); x.fill(); }
        for (let i = 0; i < 16; i++) { const a = r() * MG.TAU, d = 0.2 * R + r() * 0.6 * R; x.save(); x.translate(cx + Math.cos(a) * d, cy + Math.sin(a) * d); x.rotate(r() * 3); x.fillStyle = '#C8322A'; x.fillRect(-60, -9, 120, 18); x.fillStyle = 'rgba(255,200,180,0.4)'; x.fillRect(-58, -7, 116, 5); x.restore(); }
        MG.tex.over(x, 'blotch', { alpha: 0.18, color: '#6a2a0a', scale: 3 });
      });
      const rm = new T.Mesh(new T.CircleGeometry(2.3, 72), new T.MeshStandardMaterial({ map: S11.tex(rice), roughness: 0.8 })); rm.rotation.x = -Math.PI / 2; rm.position.y = 0.13; sc.add(rm);
      // prawns (curved tubes), mussels, lemon wedges — a seafood paella
      const prM = new T.MeshStandardMaterial({ color: 0xd8401c, roughness: 0.4, emissive: 0x501000, emissiveIntensity: 0.35 });
      for (let i = 0; i < 7; i++) { const a = (i / 7) * MG.TAU + 0.3, d = 1.45; const pts = []; for (let k = 0; k <= 10; k++) { const u = k / 10; const ang = u * 2.6; pts.push(new T.Vector3(Math.cos(ang) * 0.28, 0.07 * Math.sin(u * Math.PI), Math.sin(ang) * 0.28)); } const cu = new T.CatmullRomCurve3(pts); const g = new T.TubeGeometry(cu, 20, 0.1, 8, false); const m = new T.Mesh(g, prM); m.position.set(Math.cos(a) * d, 0.2, Math.sin(a) * d); m.rotation.y = -a; sc.add(m); }
      const muM = new T.MeshStandardMaterial({ color: 0x1c1a26, metalness: 0.3, roughness: 0.3 }); const muIn = new T.MeshStandardMaterial({ color: 0xe8a050, roughness: 0.6 });
      for (let i = 0; i < 9; i++) { const a = (i / 9) * MG.TAU, d = 0.75 + (i % 2) * 0.5; const g = new T.SphereGeometry(0.22, 14, 8, 0, MG.TAU, 0, Math.PI / 2); const m = new T.Mesh(g, muM); m.scale.set(1.5, 0.5, 0.85); m.rotation.z = Math.PI; m.position.set(Math.cos(a) * d, 0.2, Math.sin(a) * d); m.rotation.y = a; sc.add(m); const ins = new T.Mesh(new T.CircleGeometry(0.17, 14), muIn); ins.scale.set(1.4, 0.8, 1); ins.rotation.x = -Math.PI / 2; ins.position.set(Math.cos(a) * d, 0.215, Math.sin(a) * d); ins.rotation.z = a; sc.add(ins); }
      const leM = new T.MeshStandardMaterial({ color: 0xf2d24a, roughness: 0.5 });
      for (const [a, d] of [[0.9, 0.35], [3.6, 0.5]]) { const g = new T.CylinderGeometry(0.42, 0.42, 0.2, 16, 1, false, 0, Math.PI); const m = new T.Mesh(g, leM); m.rotation.z = Math.PI / 2; m.rotation.y = a; m.position.set(Math.cos(a) * d, 0.24, Math.sin(a) * d); sc.add(m); }
      // wine glass + bread nearby
      const glass = new T.Mesh(new T.CylinderGeometry(0.42, 0.3, 0.9, 24, 1, true), new T.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.22, roughness: 0.05, metalness: 0.2, side: T.DoubleSide })); glass.position.set(3.6, 1.2, -1.6); sc.add(glass);
      const wine = new T.Mesh(new T.CylinderGeometry(0.36, 0.3, 0.42, 24), new T.MeshStandardMaterial({ color: 0x6a0a1c, roughness: 0.2 })); wine.position.set(3.6, 0.98, -1.6); sc.add(wine);
      const stem = new T.Mesh(new T.CylinderGeometry(0.04, 0.04, 0.75, 8), glass.material); stem.position.set(3.6, 0.38, -1.6); sc.add(stem);
      this.bokeh = MG.cache('s11:bokeh', W, H, (x, w, h) => { const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, '#1C1220'); g.addColorStop(1, '#3A2232'); x.fillStyle = g; x.fillRect(0, 0, w, h); const r = MG.rng(5); for (let i = 0; i < 70; i++) { const px = r() * w, py = r() * h * 0.7, rr = 18 + r() * 46; const gg = x.createRadialGradient(px, py, rr * 0.6, px, py, rr); const c = r() < 0.7 ? '255,190,110' : '255,150,90'; gg.addColorStop(0, `rgba(${c},${0.25 + r() * 0.35})`); gg.addColorStop(0.85, `rgba(${c},${0.2 + r() * 0.2})`); gg.addColorStop(1, `rgba(${c},0)`); x.fillStyle = gg; x.beginPath(); x.arc(px, py, rr, 0, MG.TAU); x.fill(); } });
    },
    draw(ctx, t) {
      const T = TH(); const cam = this.cam; const u = MG.ease.inOutCubic(clamp((t - 1697.45) / (1699.62 - 1697.45)));
      const ang = lerp(0.62, 1.5707, MG.ease.inOutSine(clamp((t - 1698.0) / 1.62))); const rot = lerp(-0.5, 0.25, u); const dist = lerp(9.5, 9.2, u);
      cam.position.set(Math.sin(rot) * Math.cos(ang) * dist, Math.sin(ang) * dist, Math.cos(rot) * Math.cos(ang) * dist + 0.0001); cam.up.set(-Math.sin(rot), 0, -Math.cos(rot)); if (ang < 1.5) cam.up.set(0, 1, 0); cam.lookAt(0, 0.1, 0); cam.updateMatrixWorld();
      ctx.drawImage(this.bokeh, -Math.sin(rot) * 120, (ang - 0.62) * -500);
      const c3 = MG.three.render(this.sc, cam, { slot: 1, toneMapping: T.ACESFilmicToneMapping, exposure: 0.95 }); ctx.drawImage(c3, 0, 0);
      // steam
      MG.fx.smoke(ctx, 960, 600, t, { n: 9, seed: 7, spread: 700, rise: 60, r: 150, alpha: 0.12, color: '#FFF4E4', life: 3.5 });
      ctx.save(); ctx.globalAlpha = S11.env(t, tEat - 0.25, 1699.75, 0.3, 0.25);
      S11.say(ctx, t, 'They eat', 1697.54, 150, 860, { font: F.serif, italic: true, size: 64, color: '#FBE6BC', stroke: 'rgba(36,18,28,0.75)', strokeW: 10 });
      S11.say(ctx, t, 'exceptionally well.', 1697.94, 146, 965, { font: F.display, weight: 800, size: 96, color: '#FFF1D6', stroke: 'rgba(36,18,28,0.75)', strokeW: 12 });
      ctx.restore();
    },
  };

  // =====================================================================================================
  // placeholder scenes (filled in below)
  // =====================================================================================================
  const ph = (id, a, b, label) => ({ id, start: a, end: b, draw(ctx, t) { MG.kit.paper(ctx, '#E9CFA8'); MG.text.draw(ctx, label, 960, 540, { font: F.mono, size: 40, align: 'center', color: C.plum }); } });

  MG.segment('S11', {
    start: 1638.53, end: 1750.0,
    scenes: [
      deskScene,
      tableScene,
      europeScene,
      churchScene,
      bullScene,
      alleyScene,
      paellaScene,
      ph('s11_street', 1699.62, 1706.05, 'STREET'),
      ph('s11_saying', 1706.05, 1713.0, 'SAYING'),
      ph('s11_retire', 1713.0, 1716.55, 'RETIREES MAP'),
      ph('s11_beach', 1716.55, 1723.85, 'BEACH'),
      ph('s11_empire', 1723.85, 1733.0, 'EMPIRE'),
      ph('s11_globe', 1733.0, 1736.1, 'GLOBE'),
      ph('s11_coast', 1736.1, 1750.0, 'COAST'),
    ],
    audio(A) {},
  });
})();
