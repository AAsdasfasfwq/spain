/* =====================================================================
   S01 · 0.00 → 174.63 · cold open · the big question · title · the peninsula
   (visual plan: see the BEAT LIST block below — kept in sync with the scenes)
   ===================================================================== */
(function () {
  const MG = window.MG; const P = MG.PAL; const F = MG.F; const { clamp, lerp } = MG;
  const W = 1920, H = 1080; const TAU = Math.PI * 2;
  const S1 = (MG.S01 = MG.S01 || {}); // local namespace (exposed for debugging / neighbours)
  const E = MG.ease;
  const pr01 = (t, a, b, e) => MG.prog(t, a, b, e);
  const ln = (t, a, b) => MG.lin(t, a, b);
  const K = (t, fr) => MG.keys(t, fr);
  const Tw = (w, a) => MG.T(w, a, 3);

  // ---------------------------------------------------------------- generic helpers
  S1.fill = (ctx, c) => { ctx.fillStyle = c; ctx.fillRect(0, 0, W, H); };
  /** marker stroke points: densified, hand-wobbled polyline from a list of control points */
  S1.handLine = (pts, seed = 1, wob = 3, per = 10) => { const sp = MG.path.spline(pts.length < 3 ? [pts[0], [lerp(pts[0][0], pts[1][0], 0.5), lerp(pts[0][1], pts[1][1], 0.5)], pts[1]] : pts, per); return sp.map((p, i) => [p[0] + MG.noise2(i * 0.15, seed) * wob, p[1] + MG.noise2(i * 0.15 + 30, seed) * wob]); };
  /** felt-marker stroke, drawn on with progress p (0..1) */
  S1.marker = (ctx, pts, p, o = {}) => {
    if (p <= 0) return; const sub = MG.path.trim(pts, 0, clamp(p)); if (sub.length < 2) return;
    const dense = []; for (let i = 0; i < sub.length - 1; i++) { const a = sub[i], b = sub[i + 1]; const n = Math.max(1, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 6)); for (let k = 0; k < n; k++) dense.push([lerp(a[0], b[0], k / n), lerp(a[1], b[1], k / n)]); } dense.push(sub[sub.length - 1]);
    if (dense.length < 3) return;
    ctx.save(); if (o.alpha !== undefined) ctx.globalAlpha *= o.alpha;
    MG.fx.ink(ctx, dense, { width: o.w || 16, color: o.color || P.rojo, taper: o.taper || [0.04, 0.12], wobble: 0.8, seed: o.seed || 3, boil: o.boil });
    ctx.globalAlpha *= 0.35; MG.fx.ink(ctx, dense.map((q) => [q[0] - 1.5, q[1] - (o.w || 16) * 0.18]), { width: (o.w || 16) * 0.28, color: o.hi || '#ffffff', taper: [0.2, 0.3], seed: (o.seed || 3) + 9 });
    ctx.restore();
  };
  /** hand-drawn ellipse loop (overshoots its start like a real marker circle) */
  S1.loopPts = (cx, cy, rx, ry, seed = 2, turns = 1.12, a0 = -2.6) => { const pts = []; const n = 90; for (let i = 0; i <= n; i++) { const u = i / n; const a = a0 + u * turns * TAU; const k = 1 + MG.noise2(u * 3, seed) * 0.05 + u * 0.06; pts.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]); } return pts; };
  /** text helpers (film typography) */
  S1.lead = (ctx, s, x, y, t, t0, o = {}) => MG.text.reveal(ctx, s, x, y, t, t0, { font: F.serif, italic: true, size: 56, color: P.ink, style: 'blur', by: 'word', stagger: 0.07, ...o });
  S1.key = (ctx, s, x, y, t, t0, o = {}) => MG.text.reveal(ctx, s, x, y, t, t0, { font: F.grotesk, weight: 800, size: 110, color: P.ink, style: 'rise', by: 'char', stagger: 0.025, tracking: -0.01, ...o });
  S1.mono = (ctx, s, x, y, t, t0, o = {}) => MG.text.reveal(ctx, s.toUpperCase(), x, y, t, t0, { font: F.mono, weight: 700, size: 22, tracking: 0.22, color: P.ink2, style: 'track', by: 'line', ...o });
  S1.num = (ctx, s, x, y, t, t0, o = {}) => MG.text.reveal(ctx, s, x, y, t, t0, { font: F.cond, weight: 900, size: 220, color: P.ink, style: 'rise', by: 'char', stagger: 0.05, ...o });
  /** a placeholder for beats not built yet (dev only) */
  S1.todo = (label) => (ctx, t, S) => { MG.kit.paper(ctx, P.paper2); MG.text.draw(ctx, label, 960, 540, { font: F.mono, size: 30, color: P.ink2, align: 'center' }); MG.text.draw(ctx, t.toFixed(2), 960, 600, { font: F.mono, size: 24, color: P.ink2, align: 'center' }); };

  // ---------------------------------------------------------------- people silhouettes (bespoke paths)
  /** draw a walking human silhouette into ctx, feet at (0,0), height ≈ h. kind: pack|case|cam|hat ; ph walk phase 0..1 */
  S1.walkerPath = (ctx, kind, ph, h = 1000) => {
    const s = h / 1000; ctx.save(); ctx.scale(s, s);
    const sw = Math.sin(ph * TAU); const leg = 0.34 * sw, arm = -0.38 * sw; const bob = -Math.abs(Math.cos(ph * TAU)) * 14;
    ctx.translate(0, bob);
    const limb = (x0, y0, len1, len2, a1, a2, w1, w2) => { const kx = x0 + Math.sin(a1) * len1, ky = y0 + Math.cos(a1) * len1; const ex = kx + Math.sin(a2) * len2, ey = ky + Math.cos(a2) * len2; MG.fx.ink(ctx, [[x0, y0], [lerp(x0, kx, 0.5), lerp(y0, ky, 0.5)], [kx, ky], [lerp(kx, ex, 0.5), lerp(ky, ey, 0.5)], [ex, ey]], { width: w1, color: ctx.fillStyle, taper: [0, 0], pressure: (u) => lerp(1, w2 / w1, u) }); return [ex, ey]; };
    // legs (back leg first)
    const hipY = -500; const f1 = limb(-14, hipY, 250, 250, -leg, -leg * 0.4 + (sw < 0 ? 0.25 : 0.05), 74, 44); const f2 = limb(16, hipY, 250, 250, leg, leg * 0.4 + (sw > 0 ? 0.25 : 0.05), 74, 44);
    for (const f of [f1, f2]) { ctx.beginPath(); ctx.ellipse(f[0] + 22, f[1] - 8, 50, 20, 0, 0, TAU); ctx.fill(); }
    // torso
    const torso = MG.path.smooth([[-92, -790], [-60, -820], [60, -822], [94, -792], [88, -640], [78, -520], [70, -470], [-66, -470], [-78, -530], [-90, -650]], true); ctx.fill(torso);
    // arms
    const hA = limb(-80, -780, 170, 160, -arm, -arm * 0.6 - 0.15, 52, 36); limb(84, -780, 170, 160, arm, arm * 0.6 - 0.12, 52, 36);
    // neck + head
    ctx.fillRect(-22, -860, 44, 60); ctx.beginPath(); ctx.ellipse(4, -912, 58, 72, 0.05, 0, TAU); ctx.fill();
    if (kind === 'pack') { ctx.fill(MG.path.smooth([[-96, -780], [-170, -760], [-190, -620], [-180, -520], [-110, -505], [-80, -600]], true)); ctx.beginPath(); ctx.ellipse(4, -955, 66, 34, 0.05, Math.PI, TAU); ctx.fill(); ctx.fillRect(4, -965, 110, 18); }
    if (kind === 'case') { // roller suitcase pulled behind
      ctx.save(); ctx.translate(hA[0], hA[1]); ctx.rotate(0.35); ctx.fillRect(-6, 0, 12, 170); ctx.restore(); const cx = hA[0] - 80, cy = hA[1] + 160; ctx.fill(MG.path.rr(cx - 95, cy, 170, 230, 18)); ctx.beginPath(); ctx.arc(cx - 70, cy + 240, 16, 0, TAU); ctx.arc(cx + 50, cy + 240, 16, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.ellipse(4, -950, 150, 26, -0.04, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.ellipse(4, -975, 64, 44, 0, Math.PI, TAU); ctx.fill(); }
    if (kind === 'cam') { ctx.fill(MG.path.rr(-30, -700, 72, 52, 10)); ctx.beginPath(); ctx.ellipse(10, -968, 60, 30, 0, Math.PI, TAU); ctx.fill(); }
    if (kind === 'hat') { ctx.beginPath(); ctx.ellipse(4, -955, 120, 22, 0.02, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.ellipse(4, -980, 60, 46, 0, Math.PI, TAU); ctx.fill(); ctx.fill(MG.path.smooth([[90, -760], [150, -700], [130, -560], [80, -600]], true)); }
    ctx.restore();
  };
  /** cached, pre-blurred foreground walker sprite */
  S1.walkerSprite = (kind, pose, h, color, blur) => { const c = MG.cache(`s1:walker:${kind}:${pose}:${h}:${color}`, h * 0.62, h * 1.12, (x, w, hh) => { x.translate(w * 0.5, hh - 10); x.fillStyle = color; S1.walkerPath(x, kind, pose / 4, h); }); return blur ? MG.blurred(c, blur) : c; };

  // ---------------------------------------------------------------- SPLIT-FLAP "ARRIVALS" BOARD
  const BD = { cols: 16, rows: 4, cw: 62, ch: 100, gx: 8, gy: 26, S: 2.6 };
  BD.w = BD.cols * BD.cw + (BD.cols - 1) * BD.gx; BD.h = BD.rows * BD.ch + (BD.rows - 1) * BD.gy;
  BD.x0 = 960 - BD.w / 2; BD.y0 = 575 - BD.h / 2;
  BD.cell = (r, c) => [BD.x0 + c * (BD.cw + BD.gx), BD.y0 + r * (BD.ch + BD.gy)];
  const FLAPCH = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?';
  /** one cached glyph tile per character (full cell, hi-res) */
  BD.glyph = (ch) => MG.cache(`s1:flap:${ch}`, BD.cw * BD.S, BD.ch * BD.S, (x, w, h) => {
    const S = BD.S; x.scale(S, S); const cw = BD.cw, chh = BD.ch;
    const g = x.createLinearGradient(0, 0, 0, chh); g.addColorStop(0, '#2C2929'); g.addColorStop(0.49, '#1A1818'); g.addColorStop(0.51, '#151314'); g.addColorStop(1, '#0E0C0D');
    x.fillStyle = g; x.fill(MG.path.rr(0, 0, cw, chh, 6));
    if (ch !== ' ') { MG.text.draw(x, ch, cw / 2, chh * 0.5 + 31, { font: F.cond, weight: 900, size: 86, color: '#F3EAD6', align: 'center' }); }
    const sh = x.createLinearGradient(0, 0, 0, chh); sh.addColorStop(0, 'rgba(255,240,215,0.10)'); sh.addColorStop(0.48, 'rgba(0,0,0,0)'); sh.addColorStop(0.52, 'rgba(0,0,0,0.22)'); sh.addColorStop(1, 'rgba(0,0,0,0.05)'); x.fillStyle = sh; x.fill(MG.path.rr(0, 0, cw, chh, 6));
    x.fillStyle = '#080606'; x.fillRect(0, chh / 2 - 1.4, cw, 2.8); x.fillStyle = 'rgba(255,235,200,0.10)'; x.fillRect(0, chh / 2 + 1.4, cw, 1);
    x.fillStyle = '#5a524c'; x.fillRect(-1, chh / 2 - 5, 4, 10); x.fillRect(cw - 3, chh / 2 - 5, 4, 10);
  });
  /** board content timeline: list of {row, text, t (settle of first char), stagger, start (cycling begins), d} */
  BD.events = [];
  {
    const ev = (row, text, t, o = {}) => BD.events.push({ row, text: text.padEnd(BD.cols, ' ').slice(0, BD.cols), t, st: o.st ?? 0.028, lead: o.lead ?? 0.32, d: o.d ?? 0.045, from: o.from ?? 0, to: o.to ?? BD.cols, hold: o.hold });
    // the question, word by word exactly as spoken
    const w = (q, a) => Tw(q, a);
    const rowWords = (row, words) => { let col = 0; let txt = ''.padEnd(BD.cols, ' '); const out = []; for (const [word, tt] of words) { out.push({ col, word, tt }); col += word.length + 1; } for (const o of out) { const line = ''.padEnd(o.col, ' ') + o.word; BD.events.push({ row, text: line.padEnd(BD.cols, ' '), t: o.tt, st: 0.03, lead: 0.26, d: 0.04, from: o.col, to: o.col + o.word.length }); } };
    rowWords(0, [['WHICH', w('Which', 0.16)], ['COUNTRY', w('country', 0.48)]]);
    rowWords(1, [['GETS', w('gets', 0.88)], ['THE', w('the', 1.12)], ['MOST', w('most', 1.36)]]);
    rowWords(2, [['TOURISTS', w('tourists', 1.84)]]);
    rowWords(3, [['IN', w('in', 2.28)], ['THE', w('the', 2.4)], ['WORLD?', w('world', 2.68)]]);
    // clear & ranking
    const tFr = w('France', 3.6);
    ev(0, '01 FRANCE', tFr + 0.02, { st: 0.022, lead: 0.36 }); ev(1, '02', tFr - 0.05, { st: 0.02, lead: 0.3 }); ev(2, '', tFr - 0.12, { st: 0.015, lead: 0.25 }); ev(3, '', tFr - 0.2, { st: 0.015, lead: 0.25 });
    const tUS = w('States', 8.72), tIt = w('Italy', 10.24), tCh = w('China', 13.36);
    ev(1, '02 UNITED STATES', tUS + 0.05, { st: 0.02, from: 3, lead: tUS - w('second', 7.4) - 0.1, d: 0.05 });
    ev(1, '02 ITALY', tIt + 0.06, { st: 0.022, from: 3, lead: 0.42, d: 0.042 });
    ev(1, '02 CHINA', tCh + 0.05, { st: 0.022, from: 3, lead: 0.42, d: 0.042 });
    ev(1, '02 ?', 40, { st: 0.0, from: 3, lead: 40 - (Tw('Wrong', 14.24) + 0.75), d: 0.05 }); // searching… (keeps spinning)
  }
  /** compute per-cell event lists once */
  BD.build = () => { if (BD.cells) return; BD.cells = []; for (let r = 0; r < BD.rows; r++) for (let c = 0; c < BD.cols; c++) { const list = []; let prev = ' '; for (const e of BD.events.filter((e) => e.row === r).sort((a, b) => a.t - b.t)) { if (c < e.from || c >= e.to) continue; const ch = e.text[c]; const settle = e.t + (c - e.from) * e.st; const start = settle - e.lead - MG.hash(r * 31 + c * 7 + e.t) * 0.08; list.push({ start, settle, ch, prev, d: e.d, seed: r * 100 + c + Math.floor(e.t * 10) * 1000 }); prev = ch; } BD.cells.push({ r, c, list }); } };
  /** state of a cell at t → {a (char leaving), b (char arriving), u flip progress or 1 when settled} */
  BD.state = (cell, t) => {
    let cur = ' ', ev = null; for (const e of cell.list) { if (t >= e.start) { ev = e; } }
    if (!ev) return { a: ' ', b: ' ', u: 1 };
    if (t >= ev.settle) return { a: ev.ch, b: ev.ch, u: 1 };
    const n = Math.max(1, Math.floor((ev.settle - ev.start) / ev.d)); const k = Math.floor((t - ev.start) / ev.d); const u = ((t - ev.start) / ev.d) - k;
    const seqc = (i) => (i < 0 ? ev.prev : i >= n - 1 ? ev.ch : FLAPCH[Math.floor(MG.hash(ev.seed + i * 3.7) * FLAPCH.length)]);
    cur = seqc(k - 1); return { a: cur, b: seqc(k), u };
  };
  /** draw a cell (world coords) */
  BD.drawCell = (ctx, x, y, st) => {
    const cw = BD.cw, chh = BD.ch, S = BD.S; const A = BD.glyph(st.a), B = BD.glyph(st.b);
    if (st.u >= 1 || st.a === st.b) { ctx.drawImage(B, x, y, cw, chh); return; }
    const u = st.u;
    // static: top of B, bottom of A
    ctx.drawImage(B, 0, 0, cw * S, (chh / 2) * S, x, y, cw, chh / 2);
    ctx.drawImage(A, 0, (chh / 2) * S, cw * S, (chh / 2) * S, x, y + chh / 2, cw, chh / 2);
    if (u < 0.5) { // A's top flap folding down toward the hinge
      const sy = Math.cos(u * Math.PI); const hh = (chh / 2) * sy; ctx.drawImage(A, 0, 0, cw * S, (chh / 2) * S, x, y + chh / 2 - hh, cw, hh);
      ctx.fillStyle = `rgba(0,0,0,${(1 - sy) * 0.55})`; ctx.fillRect(x, y + chh / 2 - hh, cw, hh);
    } else { // B's bottom flap unfolding below the hinge
      const sy = -Math.cos(u * Math.PI); const hh = (chh / 2) * sy; ctx.drawImage(B, 0, (chh / 2) * S, cw * S, (chh / 2) * S, x, y + chh / 2, cw, hh);
      ctx.fillStyle = `rgba(0,0,0,${(1 - sy) * 0.45})`; ctx.fillRect(x, y + chh / 2, cw, hh);
    }
  };
  /** clatter density (for audio): number of cells flipping at t */
  BD.activity = (t) => { BD.build(); let n = 0; for (const c of BD.cells) { const s = BD.state(c, t); if (s.u < 1 && s.a !== s.b) n++; } return n; };
  /** wall + housing, cached in world coords (2600×1500 world canvas around the board) */
  const WALL = { x: -340, y: -210, w: 2600, h: 1500 };
  BD.wall = () => MG.cache('s1:wall', WALL.w, WALL.h, (x, w, h) => {
    x.fillStyle = '#EDE2CC'; x.fillRect(0, 0, w, h); x.globalCompositeOperation = 'multiply'; x.globalAlpha = 0.14; x.fillStyle = x.createPattern(MG.tex.blotch(512, 3, 4, '#8a6f55'), 'repeat'); x.fillRect(0, 0, w, h); x.globalAlpha = 0.7; x.fillStyle = x.createPattern(MG.tex.fibers(512, 5, '#6b5440'), 'repeat'); x.fillRect(0, 0, w, h); x.globalAlpha = 1; x.globalCompositeOperation = 'source-over';
    x.translate(-WALL.x, -WALL.y);
    // plaster panel seams
    x.strokeStyle = 'rgba(120,95,70,0.18)'; x.lineWidth = 2; for (let i = -1; i < 6; i++) { x.beginPath(); x.moveTo(-340 + i * 520, -210); x.lineTo(-340 + i * 520, 1290); x.stroke(); }
    // board housing with drop shadow
    const bx = BD.x0 - 46, by = BD.y0 - 118, bw = BD.w + 92, bh = BD.h + 164;
    const house = MG.path.rr(bx, by, bw, bh, 14);
    x.save(); x.shadowColor = 'rgba(58,43,58,0.55)'; x.shadowBlur = 50; x.shadowOffsetX = 34; x.shadowOffsetY = 44; x.fillStyle = '#1a1617'; x.fill(house); x.restore();
    MG.fx.volume(x, house, [bx, by, bw, bh], { color: '#262122', shade: 0.35, hi: 0.18, hiColor: '#7a6a5c', soft: 0.4, tex: 'grain', texAlpha: 0.2 });
    x.strokeStyle = P.gold; x.lineWidth = 5; x.stroke(MG.path.rr(bx + 10, by + 10, bw - 20, bh - 20, 9)); x.strokeStyle = 'rgba(255,230,180,0.35)'; x.lineWidth = 1.5; x.stroke(MG.path.rr(bx + 14, by + 14, bw - 28, bh - 28, 7));
    // inner well
    x.fillStyle = '#0d0b0b'; x.fill(MG.path.rr(BD.x0 - 18, BD.y0 - 18, BD.w + 36, BD.h + 36, 8));
    // header
    MG.text.draw(x, 'INTERNATIONAL ARRIVALS', BD.x0 + 4, by + 66, { font: F.mono, weight: 700, size: 30, tracking: 0.28, color: P.sol });
    MG.text.draw(x, 'ARRIVÉES · LLEGADAS', BD.x0 + BD.w - 4, by + 66, { font: F.mono, weight: 400, size: 22, tracking: 0.2, color: 'rgba(242,163,58,0.55)', align: 'right' });
    for (let i = 0; i < 4; i++) { x.fillStyle = '#3a3230'; x.beginPath(); x.arc(bx + 26 + (i % 2) * (bw - 52), by + 26 + Math.floor(i / 2) * (bh - 52), 6, 0, TAU); x.fill(); }
  });
  /** window light: mullion shadows on the wall (world coords, cached multiply layer) */
  /** window light: tall window panes (light) separated by thin mullion/transom shadows, sheared (sun from the upper-left) */
  const PANES = (x, sk) => { const pane = (x0, wd, y0, y1) => { x.beginPath(); x.moveTo(x0 + y0 * sk, y0); x.lineTo(x0 + wd + y0 * sk, y0); x.lineTo(x0 + wd + y1 * sk, y1); x.lineTo(x0 + y1 * sk, y1); x.closePath(); x.fill(); }; for (let i = 0; i < 6; i++) { pane(-760 + i * 360, 326, -300, 384); pane(-760 + i * 360, 326, 410, 1500); } };
  BD.light = () => MG.cache('s1:wallLight', WALL.w, WALL.h, (x, w, h) => {
    x.fillStyle = 'rgba(78,60,104,0.52)'; x.fillRect(0, 0, w, h); x.globalCompositeOperation = 'destination-out'; x.filter = 'blur(10px)'; x.translate(-WALL.x, -WALL.y);
    x.fillStyle = '#000'; PANES(x, 0.58); x.filter = 'none';
  });
  BD.lightWarm = () => MG.cache('s1:wallLightW', WALL.w, WALL.h, (x, w, h) => { x.filter = 'blur(14px)'; x.translate(-WALL.x, -WALL.y); const g = x.createRadialGradient(200, 100, 50, 600, 500, 1700); g.addColorStop(0, 'rgba(255,200,120,0.62)'); g.addColorStop(1, 'rgba(255,170,90,0.22)'); x.fillStyle = g; PANES(x, 0.58); x.filter = 'none'; });

  // ---------------------------------------------------------------- postcards (Rome, Venice)
  S1.postcard = (kind) => MG.cache(`s1:pc:${kind}`, 440, 300, (x, w, h) => {
    x.fillStyle = '#FBF5E8'; x.fillRect(0, 0, w, h); const ix = 16, iy = 16, iw = w - 32, ih = h - 32; x.save(); x.beginPath(); x.rect(ix, iy, iw, ih); x.clip();
    if (kind === 'rome') {
      const g = x.createLinearGradient(0, iy, 0, iy + ih); g.addColorStop(0, '#F6C47A'); g.addColorStop(0.55, '#EE8F5A'); g.addColorStop(1, '#C8693F'); x.fillStyle = g; x.fillRect(ix, iy, iw, ih);
      MG.kit.sun(x, 330, 120, 34, 0, { corona: 0.5, halftone: 0 });
      // Colosseum: ellipse drum with 3 tiers of arches, broken top on the right
      const cx = 205, by = 236; x.fillStyle = '#8E4A2F';
      const drum = new Path2D(); drum.moveTo(60, by); drum.lineTo(60, 120); drum.quadraticCurveTo(110, 96, 205, 92); drum.lineTo(300, 96); drum.lineTo(312, 132); drum.lineTo(336, 150); drum.lineTo(350, 190); drum.lineTo(350, by); drum.closePath(); x.fill(drum);
      x.fillStyle = 'rgba(255,210,150,0.35)'; x.fillRect(60, 120, 130, 116);
      x.fillStyle = '#3B1F1A'; for (let tier = 0; tier < 3; tier++) { const y0 = 130 + tier * 36; for (let i = 0; i < 9; i++) { const ax = 70 + i * 31; if (tier === 0 && ax > 300) continue; if (tier === 0 && ax > 270) continue; x.beginPath(); x.moveTo(ax, y0 + 26); x.lineTo(ax, y0 + 10); x.arc(ax + 9, y0 + 10, 9, Math.PI, 0); x.lineTo(ax + 18, y0 + 26); x.closePath(); x.fill(); } }
      x.fillStyle = '#5c3a2a'; x.fillRect(ix, 236, iw, 50);
      // umbrella pine
      x.fillStyle = '#2f3a22'; x.fillRect(388, 150, 6, 90); x.beginPath(); x.ellipse(392, 146, 44, 18, 0, 0, TAU); x.fill();
      MG.text.draw(x, 'Roma', 30, 70, { font: F.retro, size: 46, color: '#FBF5E8', shadow: { blur: 0, dx: 2, dy: 3, color: 'rgba(80,30,20,0.6)' } });
    } else {
      const g = x.createLinearGradient(0, iy, 0, iy + ih); g.addColorStop(0, '#9CC3DE'); g.addColorStop(0.6, '#E9D9B8'); g.addColorStop(1, '#3A6E9E'); x.fillStyle = g; x.fillRect(ix, iy, iw, ih);
      // skyline: domes + campanile
      x.fillStyle = '#C8865E'; x.fillRect(40, 150, 360, 70); x.fillStyle = '#B5704C'; x.fillRect(250, 60, 30, 160); x.beginPath(); x.moveTo(244, 62); x.lineTo(265, 22); x.lineTo(286, 62); x.closePath(); x.fill();
      x.fillStyle = '#9E6A4E'; for (const [dx, r] of [[110, 34], [170, 26], [330, 30]]) { x.beginPath(); x.arc(dx, 150, r, Math.PI, 0); x.fill(); x.fillRect(dx - 2, 150 - r - 14, 4, 14); }
      x.fillStyle = 'rgba(255,240,220,0.55)'; for (let i = 0; i < 12; i++) x.fillRect(52 + i * 29, 172, 10, 16);
      // water
      const wg = x.createLinearGradient(0, 220, 0, h); wg.addColorStop(0, '#4D86B4'); wg.addColorStop(1, '#24496E'); x.fillStyle = wg; x.fillRect(ix, 220, iw, 80);
      x.strokeStyle = 'rgba(255,255,255,0.4)'; x.lineWidth = 2; for (let i = 0; i < 9; i++) { x.beginPath(); x.moveTo(30 + (i * 53) % 380, 236 + (i % 3) * 14); x.lineTo(60 + (i * 53) % 380, 236 + (i % 3) * 14); x.stroke(); }
      // gondola + gondolier
      x.fillStyle = '#141112'; x.beginPath(); x.moveTo(90, 246); x.quadraticCurveTo(200, 262, 330, 240); x.lineTo(344, 226); x.quadraticCurveTo(336, 246, 326, 250); x.quadraticCurveTo(200, 272, 96, 254); x.closePath(); x.fill();
      x.fillRect(268, 196, 9, 46); x.beginPath(); x.arc(272, 190, 8, 0, TAU); x.fill(); x.strokeStyle = '#141112'; x.lineWidth = 3; x.beginPath(); x.moveTo(250, 200); x.lineTo(300, 270); x.stroke();
      MG.text.draw(x, 'Venezia', 30, 70, { font: F.retro, size: 44, color: '#FBF5E8', shadow: { blur: 0, dx: 2, dy: 3, color: 'rgba(20,40,70,0.6)' } });
    }
    MG.tex.over(x, 'halftone', { alpha: 0.08, spacing: 5, radius: 1.4 }); MG.tex.over(x, 'grain', { alpha: 0.15 });
    x.restore(); MG.tex.over(x, 'fibers', { alpha: 0.5 });
  });

  /** foreground travellers crossing the frame (screen space, defocused) — schedule */
  const FG = [
    { kind: 'case', t0: -0.4, t1: 1.0, x0: 760, x1: 2400, y: 1250, h: 1300, blur: 22 },
    { kind: 'pack', t0: 2.6, t1: 4.6, x0: 2300, x1: -420, y: 1230, h: 1150, blur: 18 },
    { kind: 'hat', t0: 6.4, t1: 8.3, x0: -400, x1: 2300, y: 1260, h: 1250, blur: 20 },
    { kind: 'cam', t0: 11.6, t1: 13.4, x0: 2300, x1: -400, y: 1240, h: 1150, blur: 18 },
    { kind: 'case', t0: 14.6, t1: 16.4, x0: -420, x1: 2350, y: 1270, h: 1350, blur: 24 },
  ];
  S1.fgWalkers = (ctx, t, list, color = '#1E151B') => { for (const f of list) { if (t < f.t0 || t > f.t1) continue; const u = (t - f.t0) / (f.t1 - f.t0); const x = lerp(f.x0, f.x1, u); const pose = Math.floor((t * 2.4) % 1 * 4); const spr = S1.walkerSprite(f.kind, pose, f.h, color, f.blur); const flip = f.x1 < f.x0 ? -1 : 1; MG.sprite(ctx, spr, x, f.y, { ax: 0.5, ay: 1, sx: flip, alpha: 0.92 }); } };

  // board camera keys (world coords; zoom)
  const tQ = { which: 0.16, tourists: Tw('tourists', 1.84), world: Tw('world', 2.68), france: Tw('France', 3.6), right: Tw('right', 5.68), second: Tw('second', 7.4), us: Tw('States', 8.72), no: Tw('No', 9.44), italy: Tw('Italy', 10.24), rome: Tw('Rome', 10.88), venice: Tw('Venice', 11.28), not: Tw('Not', 12.16), china: Tw('China', 13.36), wrong: Tw('Wrong', 14.24), again: Tw('again', 14.68) };
  S1.tQ = tQ;
  const rowY = (r) => BD.y0 + r * (BD.ch + BD.gy) + BD.ch / 2; const colX = (c) => BD.x0 + c * (BD.cw + BD.gx) + BD.cw / 2;
  const boardCam = (t) => K(t, [
    [0, { x: colX(2.5), y: rowY(0.1), z: 3.3 }], [0.95, { x: colX(9.5), y: rowY(0.2), z: 3.0 }, 'inOutSine'], [1.55, { x: colX(6.5), y: rowY(1.4), z: 2.55 }, 'cam'],
    [2.2, { x: colX(6.0), y: rowY(2.1), z: 2.3 }, 'inOutSine'], [3.15, { x: 960, y: 540, z: 1.04 }, 'cam'], [3.55, { x: 960, y: 545, z: 1.02 }, 'soft'],
    [4.4, { x: colX(6.0), y: rowY(0.55), z: 1.62 }, 'cam'], [6.6, { x: colX(6.4), y: rowY(0.6), z: 1.72 }, 'soft'],
    [7.25, { x: colX(8.0), y: rowY(1.05), z: 1.9 }, 'cam'], [9.3, { x: colX(8.4), y: rowY(1.0), z: 2.05 }, 'soft'], [9.5, { x: colX(8.4), y: rowY(1.0), z: 2.2 }, 'snap'],
    [10.15, { x: colX(9.2), y: rowY(1.0), z: 1.5 }, 'cam'], [12.1, { x: colX(9.6), y: rowY(1.0), z: 1.56 }, 'soft'],
    [13.3, { x: colX(9.4), y: rowY(1.0), z: 1.6 }, 'soft'], [13.5, { x: colX(6.2), y: rowY(1.0), z: 2.6 }, 'snap'], [14.9, { x: colX(6.4), y: rowY(1.0), z: 2.75 }, 'soft'],
    [15.6, { x: colX(7.5), y: rowY(1.0), z: 7.5 }, 'inCubic'],
  ]);
  /** strike & circle marks: {pts, t0, dur, fade:[a,b], color, w, seed} in world coords */
  BD.marks = () => { if (BD._marks) return BD._marks; const y1 = rowY(1), x3 = BD.x0 + 3 * (BD.cw + BD.gx) - 20;
    const usEnd = BD.x0 + 16 * (BD.cw + BD.gx) - 10, itEnd = BD.x0 + 8 * (BD.cw + BD.gx) + 10, chEnd = BD.x0 + 8 * (BD.cw + BD.gx) + 10;
    BD._marks = [
      { pts: S1.loopPts(BD.x0 + 4.3 * (BD.cw + BD.gx), rowY(0), 360, 84, 5, 1.1, -2.9), t0: tQ.right - 0.08, dur: 0.5, fade: [13.0, 13.4], color: P.sol, w: 11, seed: 4 },
      { pts: S1.handLine([[x3, y1 + 10], [usEnd + 30, y1 - 16]], 3, 3), t0: tQ.no - 0.04, dur: 0.22, fade: [9.95, 10.2], color: P.rojo, w: 22, seed: 7 },
      { pts: S1.handLine([[x3, y1 - 30], [itEnd + 380, y1 + 10], [x3 + 40, y1 + 34], [itEnd + 420, y1 + 60]], 9, 2.5, 8), t0: tQ.not + 0.02, dur: 0.5, fade: [12.95, 13.25], color: P.rojo, w: 20, seed: 9 },
      { pts: S1.handLine([[x3 + 10, y1 - 34], [chEnd + 30, y1 + 30]], 11, 3), t0: tQ.wrong - 0.02, dur: 0.18, fade: [15.05, 15.3], color: P.rojo, w: 22, seed: 11 },
      { pts: S1.handLine([[x3 + 6, y1 + 34], [chEnd + 36, y1 - 28]], 12, 3), t0: tQ.again - 0.02, dur: 0.18, fade: [15.05, 15.3], color: P.rojo, w: 22, seed: 12 },
    ]; return BD._marks; };

  S1.boardScene = {
    id: 's01_board', start: 0, end: 15.45,
    init() { BD.build(); BD.wall(); BD.light(); BD.lightWarm(); FLAPCH.split('').concat([' ']).forEach((c) => BD.glyph(c)); S1.postcard('rome'); S1.postcard('venice'); },
    draw(ctx, t) {
      const cam = boardCam(t); const hh = MG.cam.handheld(t, 3.2, 11, 0.3); const sh = MG.cam.add(MG.cam.shake(t, tQ.no, 7, 7), MG.cam.shake(t, tQ.china, 9, 6), hh);
      ctx.fillStyle = '#E4D7BE'; ctx.fillRect(0, 0, W, H);
      ctx.save(); MG.cam.apply(ctx, { x: cam.x, y: cam.y, zoom: cam.z, dx: sh.dx, dy: sh.dy, rot: sh.rot });
      ctx.drawImage(BD.wall(), WALL.x, WALL.y);
      ctx.globalCompositeOperation = 'multiply'; ctx.drawImage(BD.light(), WALL.x, WALL.y); ctx.globalCompositeOperation = 'screen'; ctx.drawImage(BD.lightWarm(), WALL.x, WALL.y); ctx.globalCompositeOperation = 'source-over';
      // cells (the black board only catches a little of the window light)
      for (const c of BD.cells) { const [x, y] = BD.cell(c.r, c.c); BD.drawCell(ctx, x, y, BD.state(c, t)); }
      ctx.save(); ctx.beginPath(); ctx.rect(BD.x0 - 18, BD.y0 - 18, BD.w + 36, BD.h + 36); ctx.clip();
      ctx.globalAlpha = 0.5; ctx.globalCompositeOperation = 'multiply'; ctx.drawImage(BD.light(), WALL.x, WALL.y); ctx.globalAlpha = 0.1; ctx.globalCompositeOperation = 'screen'; ctx.drawImage(BD.lightWarm(), WALL.x, WALL.y); ctx.restore();
      // glass cover sheen
      { const g = ctx.createLinearGradient(BD.x0, BD.y0 - 40, BD.x0 + BD.w * 0.6, BD.y0 + BD.h); g.addColorStop(0, 'rgba(255,245,225,0.0)'); g.addColorStop(0.42, 'rgba(255,245,225,0.0)'); g.addColorStop(0.47, 'rgba(255,245,225,0.07)'); g.addColorStop(0.55, 'rgba(255,245,225,0.0)'); g.addColorStop(0.7, 'rgba(255,245,225,0.04)'); g.addColorStop(0.73, 'rgba(255,245,225,0.0)'); ctx.fillStyle = g; ctx.fillRect(BD.x0 - 18, BD.y0 - 18, BD.w + 36, BD.h + 36); }
      // marker marks on the glass
      for (const m of BD.marks()) { const p = ln(t, m.t0, m.t0 + m.dur); const fa = 1 - ln(t, m.fade[0], m.fade[1]); if (p <= 0 || fa <= 0) continue; S1.marker(ctx, m.pts, E.outCubic(p), { color: m.color, w: m.w, seed: m.seed, alpha: fa, boil: t }); }
      // postcards clipped beside the board (Rome, Venice) then dropping away
      const pcs = [{ k: 'rome', t0: tQ.rome - 0.12, x: BD.x0 + BD.w - 300, y: rowY(1) + 250, rot: -0.07 }, { k: 'venice', t0: tQ.venice - 0.1, x: BD.x0 + BD.w + 120, y: rowY(1) + 150, rot: 0.06 }];
      for (const [i, pc] of pcs.entries()) { const k = pr01(t, pc.t0, pc.t0 + 0.45); if (k <= 0) continue; const fall = Math.max(0, t - (tQ.not + 0.42 + i * 0.07)); if (fall > 1.4) continue;
        const x = lerp(pc.x + 900, pc.x, k) + fall * 120 * (i ? 1 : -0.6), y = pc.y + fall * fall * 1600 * 0.5, rot = pc.rot + (1 - k) * 0.3 + fall * (i ? 1.6 : -1.3);
        ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.shadowColor = 'rgba(40,25,30,0.45)'; ctx.shadowBlur = 22 + fall * 30; ctx.shadowOffsetX = 14 + fall * 40; ctx.shadowOffsetY = 18 + fall * 60; ctx.drawImage(S1.postcard(pc.k), -220, -150); ctx.restore();
        if (fall <= 0) { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.fillStyle = 'rgba(230,220,190,0.75)'; ctx.fillRect(-50, -168, 100, 34); ctx.restore(); }
        // the cards catch the same window light as the wall
        ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.beginPath(); ctx.rect(-220, -170, 440, 320); ctx.rotate(-rot); ctx.translate(-x, -y); ctx.clip(); ctx.globalAlpha = 0.8; ctx.globalCompositeOperation = 'multiply'; ctx.drawImage(BD.light(), WALL.x, WALL.y); ctx.globalAlpha = 0.6; ctx.globalCompositeOperation = 'screen'; ctx.drawImage(BD.lightWarm(), WALL.x, WALL.y); ctx.restore(); }
      ctx.restore();
      // dust in the light shafts
      MG.fx.particles(ctx, { n: 46, seed: 21, t, area: [0, 0, W, H], vel: [8, -6], velJitter: 0.8, life: 6, size: [1, 2.6], color: '#FFE9C4', alpha: 0.35, drift: 30, blend: 'screen' });
      // defocused travellers walking past (depth + "tourists")
      S1.fgWalkers(ctx, t, FG);
    },
    post: { grade: 'warm', vignette: 0.36, grain: 0.05 },
  };

  // ================================================================ CH2 · 15.45–34.0 · THE PLAIN (49M → 97M → SPAIN → €135B vs gas)
  /** paper-cut standee figure (front view), feet at (0,0), ~150 units tall. role 'res'|'vis', v variant */
  S1.figurePath = (x, role, v, col, shade) => {
    const P2 = (pts) => MG.path.smooth(pts, true, 0.45);
    const kid = role === 'res' && v === 3; const sc = kid ? 0.7 : 1; x.save(); x.scale(sc, sc);
    const parts = []; const add = (p, c) => parts.push([p, c]);
    const skirt = (role === 'res' && (v === 1 || v === 5)) || (role === 'vis' && v === 1);
    // legs
    add(P2([[-13, -86], [-3, -86], [-4, -4], [-16, -2], [-15, -40]]), col.legs); add(P2([[3, -86], [13, -86], [15, -40], [16, -2], [4, -4]]), col.legs);
    add(MG.path.ellipse(-10, -3, 9, 4), col.shoe); add(MG.path.ellipse(10, -3, 9, 4), col.shoe);
    // torso / dress
    if (skirt) add(P2([[-17, -122], [17, -122], [20, -96], [27, -50], [-27, -50], [-20, -96]]), col.top); else add(P2([[-19, -124], [19, -124], [20, -100], [16, -80], [-16, -80], [-20, -100]]), col.top);
    if (!skirt) add(P2([[-16, -86], [16, -86], [15, -74], [-15, -74]]), col.legs);
    // arms
    add(P2([[-22, -122], [-17, -120], [-19, -86], [-24, -76], [-28, -80], [-26, -100]]), col.top); add(P2([[22, -122], [17, -120], [19, -86], [24, -76], [28, -80], [26, -100]]), col.top);
    add(MG.path.circle(-26, -77, 4.5), col.skin); add(MG.path.circle(26, -77, 4.5), col.skin);
    // neck + head
    add(MG.path.rr(-5, -134, 10, 12, 3), col.skin); add(MG.path.ellipse(0, -146, 12, 14), col.skin);
    // hair / hats per variant
    if (role === 'res') {
      if (v === 0) add(P2([[-12, -150], [-8, -161], [6, -162], [12, -152], [9, -155], [-9, -154]]), col.hair);
      if (v === 1) { add(P2([[-13, -144], [-11, -160], [0, -163], [11, -160], [13, -144], [9, -152], [-9, -152]]), col.hair); add(MG.path.circle(0, -163, 6), col.hair); }
      if (v === 2) { add(P2([[-14, -152], [-10, -160], [10, -160], [14, -152]]), col.hair2); add(MG.path.rr(28, -84, 3.5, 84, 2), col.shoe); }
      if (v === 3) add(P2([[-12, -150], [-10, -160], [10, -160], [12, -150], [0, -156]]), col.hair);
      if (v === 4) { add(MG.path.ellipse(0, -158, 14, 6), col.hair); add(MG.path.circle(0, -162, 3), col.hair); }
      if (v === 5) { add(P2([[-13, -140], [-12, -160], [0, -164], [12, -160], [14, -132], [8, -150], [-8, -150]]), col.hair); add(MG.path.rr(24, -96, 14, 16, 4), col.acc); }
    } else {
      if (v === 0) { add(P2([[-24, -124], [-30, -118], [-32, -92], [-24, -88]]), col.acc); add(MG.path.ellipse(0, -156, 13, 6), col.acc); add(MG.path.rr(0, -159, 20, 4, 2), col.acc); }
      if (v === 1) { add(MG.path.ellipse(0, -154, 24, 5), col.acc); add(MG.path.ellipse(0, -158, 12, 8), col.acc); add(MG.path.rr(30, -56, 26, 50, 5), col.acc2); add(MG.path.rr(40, -92, 3, 36, 1), col.shoe); add(MG.path.circle(34, -3, 3), col.shoe); add(MG.path.circle(52, -3, 3), col.shoe); }
      if (v === 2) { add(P2([[-12, -150], [-8, -160], [8, -160], [12, -150]]), col.hair); add(MG.path.rr(-8, -112, 16, 12, 3), col.shoe); add(MG.path.circle(0, -106, 3.5), col.acc2); }
      if (v === 3) { add(P2([[-13, -142], [-12, -160], [0, -163], [12, -160], [14, -138]]), col.hair); add(MG.path.rr(-9, -150, 18, 5, 2), col.shoe); add(P2([[-30, -100], [-22, -104], [-20, -70], [-34, -70]]), col.acc2); }
    }
    for (const [p, c] of parts) { x.fillStyle = c; x.fill(p); }
    x.restore(); return parts;
  };
  const FIGCOL = {
    res: { top: '#1F4E8C', legs: '#14335F', shoe: '#1E1A1D', skin: '#D9A27C', hair: '#2B1F1D', hair2: '#C9C3BA', acc: '#B8322A', acc2: '#B8322A' },
    vis: { top: '#F2A33A', legs: '#3A6E9E', shoe: '#1E1A1D', skin: '#F0B996', hair: '#7A4B2A', hair2: '#C9C3BA', acc: '#C8693F', acc2: '#B8322A' },
  };
  /** cached figure sprite (2× res), paper-cut: white die-cut edge, cel shade on the right half, warm rim on the left */
  S1.figure = (role, v) => MG.cache(`s1:fig:${role}:${v}`, 180, 380, (x, w, h) => {
    x.translate(w / 2, h - 12); x.scale(2, 2);
    const off = MG.canvas(w, h); const o = off.getContext('2d'); o.translate(w / 2, h - 12); o.scale(2, 2); S1.figurePath(o, role, v, FIGCOL[role]);
    // die-cut white edge: dilate silhouette
    x.save(); x.setTransform(1, 0, 0, 1, 0, 0); for (let a = 0; a < 12; a++) { const dx = Math.cos(a / 12 * TAU) * 4, dy = Math.sin(a / 12 * TAU) * 4; x.drawImage(off, dx, dy); } x.globalCompositeOperation = 'source-in'; x.fillStyle = '#FBF4E6'; x.fillRect(0, 0, w, h); x.globalCompositeOperation = 'source-over'; x.drawImage(off, 0, 0);
    // cel shade: right half toward violet, rim light left
    x.globalCompositeOperation = 'source-atop'; x.fillStyle = 'rgba(42,26,52,0.32)'; x.fillRect(w / 2 + 4, 0, w, h); x.fillStyle = 'rgba(255,236,200,0.18)'; x.fillRect(0, 0, w / 2 - 14, h); x.globalCompositeOperation = 'source-over'; x.restore();
  });
  /** flat tinted silhouette for cast shadows */
  S1.tinted = (src, color, key) => MG.cache(`s1:tint:${key}:${color}`, src.width, src.height, (x) => { x.drawImage(src, 0, 0); x.globalCompositeOperation = 'source-in'; x.fillStyle = color; x.fillRect(0, 0, src.width, src.height); });
  /** draw a sprite as a billboard standing on the ground at world (X,0,Z) (feet = bottom centre). hW = world height. Optional lift (y). */
  S1.pj = (cam, x, y, z) => MG.persp.project([x, y, z], cam);
  S1.billboard = (ctx, cam, spr, X, Z, hW, o = {}) => { const p = S1.pj(cam, X, o.y || 0, Z); if (p[3] < 5) return null; const s = p[2] * hW / spr.height * (o.sc || 1); const sy = o.sy ?? 1; ctx.save(); ctx.globalAlpha *= o.alpha ?? 1; ctx.translate(p[0], p[1]); if (o.rot) ctx.rotate(o.rot); ctx.scale(s * (o.flip ? -1 : 1), s * sy); ctx.drawImage(spr, -spr.width / 2, -spr.height); ctx.restore(); return p; };
  /** cast shadow of a billboard onto the ground plane: dir = [dx,dz] world per unit height, len factor */
  S1.castShadow = (ctx, cam, sh, X, Z, hW, dir, o = {}) => { const y = o.y || 0; const a = S1.pj(cam, X, y, Z), b = S1.pj(cam, X + dir[0] * hW, y, Z + dir[1] * hW); if (a[3] < 5 || b[3] < 5) return; const s = a[2] * hW / sh.height * (o.sc || 1); const Hp = sh.height; const Vx = b[0] - a[0], Vy = b[1] - a[1]; ctx.save(); ctx.globalAlpha *= o.alpha ?? 0.5; ctx.transform(s, 0, -Vx / Hp, -Vy / Hp, a[0] - s * sh.width / 2 + Vx, a[1] + Vy); ctx.drawImage(sh, 0, 0); ctx.restore(); };
  /** standing type: text rendered as a thick paper standee (front face + extrusion), cached per string */
  S1.standee = (str, o = {}) => MG.cache(`s1:std:${str}:${o.font || F.cond}:${o.size || 300}:${o.color || P.ink}:${o.sub || ''}`, 1, 1, () => {}) && S1._standee(str, o);
  S1._stdCache = new Map();
  S1._standee = (str, o = {}) => { const key = [str, o.font, o.size, o.color, o.sub, o.weight, o.side].join('|'); let c = S1._stdCache.get(key); if (c) return c;
    const size = o.size || 300; const font = o.font || F.cond, weight = o.weight || 900; const tw = MG.text.width(null || MG.canvas(1, 1).getContext('2d'), str, { font, size, weight }); const subH = o.sub ? size * 0.22 : 0;
    const w = Math.ceil(tw + size * 0.2), h = Math.ceil(size * 1.05 + subH + size * 0.1); c = MG.canvas(w, h); const x = c.getContext('2d'); const by = size * 0.95;
    for (let k = 10; k >= 1; k--) MG.text.draw(x, str, w / 2 + k * 0.9, by + k * 1.1, { font, size, weight, color: o.side || MG.col.shade(o.color || P.ink, 0.45), align: 'center' });
    MG.text.draw(x, str, w / 2, by, { font, size, weight, color: o.color || P.ink, align: 'center' });
    if (o.sub) MG.text.draw(x, o.sub, w / 2, by + subH + size * 0.04, { font: F.mono, size: size * 0.16, weight: 700, color: o.color || P.ink, align: 'center', tracking: 0.25 });
    S1._stdCache.set(key, c); return c; };

  /** ground coords for Spain: conic projection → world X (east) / Z (north) */
  const PL = { scale: 11000, zc: 470 };
  PL.pr = () => PL._pr || (PL._pr = MG.geo.proj('spain', { center: [-3.6, 40.0], scale: PL.scale }));
  PL.toWorld = (ll) => { const p = PL.pr()(ll); return [p[0] - 960, PL.zc + (540 - p[1])]; };
  PL.spain = () => { if (PL._sp) return PL._sp; MG.geo.init(); const es = MG.geo.country('Spain', '10'); const polys = []; for (const poly of es.geometry.coordinates) { const ring = poly[0]; const lon = ring[0][0], lat = ring[0][1]; if (lat < 30) continue; const step = ring.length > 1000 ? 4 : 1; const pts = []; for (let i = 0; i < ring.length; i += step) pts.push(PL.toWorld(ring[i])); if (pts.length >= 3) polys.push(pts); } polys.sort((a, b) => b.length - a.length); PL._sp = polys; return polys; };
  PL.inside = (pt, poly) => { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const a = poly[i], b = poly[j]; if ((a[1] > pt[1]) !== (b[1] > pt[1]) && pt[0] < ((b[0] - a[0]) * (pt[1] - a[1])) / (b[1] - a[1]) + a[0]) c = !c; } return c; };
  /** figures: positions in blocks and their targets inside Spain */
  PL.figs = () => { if (PL._f) return PL._f; const out = [];
    for (let i = 0; i < 49; i++) { const c = i % 7, r = Math.floor(i / 7); out.push({ role: 'res', v: (i * 5 + r) % 6, X: -470 + (c - 3) * 66 + (MG.rand(3, i) - 0.5) * 14, Z: 300 + (r - 3) * 66 + (MG.rand(4, i) - 0.5) * 10, i, k: Math.hypot(c - 3, r - 3) }); }
    for (let j = 0; j < 97; j++) { const c = j % 14, r = Math.floor(j / 14); out.push({ role: 'vis', v: (j * 7 + r * 3) % 4, X: 330 + (c - 6.5) * 62 + (MG.rand(5, j) - 0.5) * 12, Z: 300 - (r - 3) * 66 + (MG.rand(6, j) - 0.5) * 10, j, k: r * 14 + c }); }
    // targets: spread inside the mainland polygon
    const main = PL.spain()[0]; const rng = MG.rng(77); const tg = []; let guard = 0; while (tg.length < out.length && guard++ < 20000) { const p = [-820 + rng() * 1640, -200 + rng() * 1400]; if (!PL.inside(p, main)) continue; if (tg.some((q) => Math.hypot(q[0] - p[0], q[1] - p[1]) < 62)) continue; tg.push(p); }
    const srcIdx = out.map((f, i) => i).sort((a, b) => out[a].X - out[b].X); const tIdx = tg.map((p, i) => i).sort((a, b) => tg[a][0] - tg[b][0]);
    srcIdx.forEach((si, n) => { const p = tg[tIdx[Math.min(n, tg.length - 1)]]; out[si].TX = p[0]; out[si].TZ = p[1]; });
    PL._f = out; return out; };
  const tP = { second: Tw('Second', 15.52), country: Tw('country', 17.0), n49: Tw('49', 17.52), res: Tw('residents', 18.72), welcomes: Tw('welcomes', 19.68), twice: Tw('twice', 20.6), visitors: Tw('visitors', 21.44), n97: Tw('97', 23.28), million97: Tw('million', 24.24), spain: Tw('Spain', 25.28), tourists: Tw('tourists', 26.56), e135: Tw('€135', 27.68), billion: Tw('billion', 28.32), year: Tw('year', 30.24), more: Tw('More', 30.96), russia: Tw('Russia', 31.36), exporting: Tw('exporting', 32.0), gas: Tw('gas', 32.96) };
  S1.tP = tP;
  /** landing time of visitor j */
  PL.land = (j) => lerp(tP.welcomes - 0.05, tP.n97 - 0.1, (j / 96) ** 0.9);
  PL.pop = (f) => tP.second + 0.15 + f.k * 0.22 + MG.rand(9, f.i) * 0.12;
  const TOWER = { X: 1280, Z: 380, r: 64, coin: 4.4, n: 135 }; const FLAME = { X: 1830, Z: 90 }; const SUN_AZ = 0.9;
  const plainCam = (t) => K(t, [
    [tP.second - 0.1, { x: -470, y: -230, z: -120, pitch: 0.52, yaw: 0.0, fov: 40 }], [tP.n49 - 0.2, { x: -430, y: -400, z: -560, pitch: 0.44, yaw: 0.02, fov: 40 }, 'cam'], [tP.welcomes - 0.4, { x: -380, y: -420, z: -620, pitch: 0.44, yaw: 0.02, fov: 40 }, 'soft'],
    [tP.visitors + 0.3, { x: 120, y: -560, z: -900, pitch: 0.44, yaw: -0.02, fov: 40 }, 'cam'], [tP.million97 - 0.15, { x: 90, y: -600, z: -980, pitch: 0.45, yaw: 0, fov: 40 }, 'soft'],
    [tP.spain + 0.35, { x: -760, y: -900, z: -1900, pitch: 0.215, yaw: 0.42, fov: 50 }, 'cam'], [tP.tourists + 0.4, { x: -700, y: -860, z: -1820, pitch: 0.21, yaw: 0.43, fov: 49 }, 'soft'],
    [tP.e135 + 0.4, { x: 700, y: -560, z: -720, pitch: 0.16, yaw: 0.5, fov: 42 }, 'cam'], [tP.more - 0.1, { x: 760, y: -570, z: -760, pitch: 0.15, yaw: 0.5, fov: 42 }, 'soft'],
    [tP.exporting, { x: 1010, y: -560, z: -900, pitch: 0.14, yaw: 0.5, fov: 44 }, 'cam'], [33.45, { x: 1040, y: -560, z: -930, pitch: 0.14, yaw: 0.5, fov: 44 }, 'soft'], [34.25, { x: 1000, y: -580, z: -930, pitch: -0.12, yaw: 0.78, fov: 44 }, 'inCubic'],
  ]);
  S1.plainScene = {
    id: 's01_plain', start: 15.45, end: 34.0, transIn: { type: 'zoom', dur: 0.55, x: 960, y: 540, amount: 3 },
    init() { PL.spain(); PL.figs(); for (const r of ['res', 'vis']) for (let v = 0; v < 6; v++) { const s = S1.figure(r, v); S1.tinted(s, '#3A2B4A', `${r}${v}`); } },
    draw(ctx, t) {
      const c0 = plainCam(t); const hh = MG.cam.handheld(t, 2.2, 31, 0.25); const shk = MG.cam.shake(t, tP.spain, 10, 5);
      const cam = { x: c0.x + hh.dx * 0.6, y: c0.y + hh.dy * 0.6, z: c0.z, pitch: c0.pitch, yaw: c0.yaw, roll: hh.rot + shk.rot, fov: c0.fov };
      const sunrise = pr01(t, tP.spain - 0.5, tP.spain + 1.2, 'outCubic'); const dawn = 1 - sunrise;
      // ---- sky / paper backdrop
      const far = (az, el) => S1.pj(cam, cam.x + Math.sin(az) * 1e6, -Math.tan(el) * 1e6, cam.z + Math.cos(az) * 1e6);
      const hz = far(cam.yaw, 0)[1];
      const skyTop = MG.col.mix('#C9CBDA', '#F4DDB4', sunrise), skyLow = MG.col.mix('#EBD9CF', '#FBC47C', sunrise);
      MG.fx.vgrad(ctx, [[0, skyTop], [clamp(hz / H, 0.05, 0.95), skyLow], [1, skyLow]]);
      // the sun disk rises in the east on "Spain."
      const sp = far(SUN_AZ, lerp(-0.09, 0.045, sunrise)); const sunX = sp[0], sunY = sp[1]; const sunR = 150;
      if (sunrise > 0) { MG.fx.glow(ctx, sunX, hz, 1000 * sunrise, '#FFC36B', 0.6 * sunrise); MG.kit.sun(ctx, sunX, sunY, sunR, t, { rays: 0.55 * sunrise, corona: 0.8 }); }
      // ---- ground
      ctx.save(); ctx.beginPath(); ctx.rect(0, hz, W, H - hz + 2); ctx.clip();
      const gNear = MG.col.mix('#D8CDC2', '#E7C08E', sunrise), gFar = MG.col.mix('#E9DED2', '#F6D3A0', sunrise);
      MG.fx.vgrad(ctx, [[0, gFar], [clamp(hz / H + 0.02, 0, 1), gFar], [1, gNear]]);
      MG.fx.glow(ctx, W * 0.42, H * 0.62, 900, '#FFF3DC', 0.35 * dawn); if (sunrise > 0) MG.fx.glow(ctx, sunX, hz + 10, 1300, '#FFD79A', 0.4 * sunrise);
      MG.tex.over(ctx, 'fibers', { alpha: 0.5 }); MG.tex.over(ctx, 'blotch', { alpha: 0.08, color: '#6b5440', scale: 2 });
      { const hg = ctx.createLinearGradient(0, hz, 0, hz + 160); hg.addColorStop(0, MG.col.a(skyLow, 0.9)); hg.addColorStop(1, MG.col.a(skyLow, 0)); ctx.fillStyle = hg; ctx.fillRect(0, hz, W, 160); }
      // ---- Spain: outline draws on, fill, then slab lift
      const polys = PL.spain(); const drawOn = pr01(t, tP.n97 + 0.2, tP.spain - 0.1, 'inOutCubic'); const fillK = pr01(t, tP.spain - 0.05, tP.spain + 0.4); const lift = 46 * pr01(t, tP.spain + 0.05, tP.spain + 0.8, 'outBack');
      const proj = (poly, y) => poly.map(([X, Z]) => { const p = S1.pj(cam, X, y, Z); return [p[0], p[1]]; });
      if (fillK > 0) {
        const pathAt = (y) => { const p = new Path2D(); for (const poly of polys) { const q = proj(poly, y); q.forEach((v, i) => (i ? p.lineTo(v[0], v[1]) : p.moveTo(v[0], v[1]))); p.closePath(); } return p; };
        const base = pathAt(0); ctx.save(); ctx.globalAlpha = fillK * 0.4; ctx.filter = 'blur(14px)'; ctx.translate(0, 18); ctx.fillStyle = 'rgba(60,30,40,0.7)'; ctx.fill(base); ctx.restore();
        const n = Math.ceil(lift / 4); for (let k = 0; k <= n; k++) { const y = -lift * k / Math.max(1, n); ctx.fillStyle = MG.col.mix('#7E3E2A', '#B8622F', k / Math.max(1, n)); ctx.globalAlpha = fillK; ctx.fill(pathAt(y)); }
        ctx.globalAlpha = fillK; const top = pathAt(-lift); const bb = [0, hz, W, H - hz];
        MG.fx.volume(ctx, top, bb, { color: P.sol, shadeColor: P.solDeep, shade: 0.3, hi: 0.35, hiColor: '#FFE2A8', soft: 0.3, tex: 'blotch', texAlpha: 0.25, texColor: P.solDeep, light: [-0.3, -0.9] });
        ctx.strokeStyle = 'rgba(255,240,210,0.8)'; ctx.lineWidth = 2; ctx.stroke(top); ctx.globalAlpha = 1;
      }
      if (drawOn > 0 && fillK < 1) { ctx.save(); ctx.globalAlpha = 1 - fillK; for (const [pi, poly] of polys.entries()) { const q = proj(poly, 0); if (pi === 0) MG.fx.line(ctx, q.concat([q[0]]), { progress: drawOn, color: P.ink, width: 3.2, dash: [14, 9], dashOffset: -t * 40 }); else if (drawOn > 0.9) MG.fx.line(ctx, q.concat([q[0]]), { color: P.ink, width: 2, dash: [8, 6] }); } ctx.restore(); }
      // ---- figures (pop-up / drop-in / run / ride the slab)
      const figs = PL.figs(); const shL = lerp(0.55, 2.2, sunrise); const shadowDir = [lerp(0.35, -Math.sin(SUN_AZ), sunrise) * shL, lerp(-0.3, -Math.cos(SUN_AZ), sunrise) * shL]; const shA = lerp(0.2, 0.4, sunrise);
      const runT0 = tP.million97 - 0.05, runT1 = tP.spain - 0.05;
      const st = []; for (const f of figs) { let X = f.X, Z = f.Z, y = 0, up = 1, a = 1, hop = 0;
        if (f.role === 'res') { up = pr01(t, PL.pop(f), PL.pop(f) + 0.35, 'outBack'); if (up <= 0) continue; }
        else { const tl = PL.land(f.j); const fall = 1 - ln(t, tl - 0.5, tl); if (fall >= 1) continue; y = -900 * fall * fall; a = clamp((1 - fall) * 3); }
        const r = ln(t, runT0 + MG.rand(8, f.i ?? f.j) * 0.2, runT1 - 0.05 + MG.rand(10, f.i ?? f.j) * 0.1); const re = E.inOutCubic(r); if (r > 0) { X = lerp(f.X, f.TX, re); Z = lerp(f.Z, f.TZ, re); hop = r < 1 ? Math.abs(Math.sin(r * 9 + (f.i ?? f.j))) * 22 : 0; }
        if (r >= 1) y -= lift; st.push({ f, X, Z, y: y - hop, up, a, onSlab: r >= 1 }); }
      st.sort((p, q) => q.Z - p.Z);
      for (const s of st) { if (s.y < -40 && !s.onSlab) continue; const spr = S1.figure(s.f.role, s.f.v); const sh = S1.tinted(spr, '#3A2B4A', `${s.f.role}${s.f.v}`); S1.castShadow(ctx, cam, sh, s.X, s.Z, 130 * s.up, shadowDir, { alpha: shA * s.a, y: s.onSlab ? -lift : 0 }); }
      for (const s of st) { const spr = S1.figure(s.f.role, s.f.v); const p = S1.pj(cam, s.X, 0, s.Z); if (s.y > -899 && !s.onSlab && s.f.role === 'vis') { const k = clamp(1 + s.y / 900); MG.fx.contact(ctx, p[0], p[1], 26 * p[2] * k, 7 * p[2] * k, 0.3 * k); }
        S1.billboard(ctx, cam, spr, s.X, s.Z, 130, { y: s.y, sy: s.up, alpha: s.a }); }
      // ---- empty 98th slot ("almost twice")
      { const k = pr01(t, tP.twice, tP.twice + 0.4) * (1 - ln(t, runT0, runT0 + 0.3)); if (k > 0) { const X = 330 + (13 - 6.5) * 62, Z = 300 - 3 * 66; ctx.save(); ctx.globalAlpha = k; const ring = []; for (let i = 0; i <= 28; i++) { const a = i / 28 * TAU; const p = S1.pj(cam, X + Math.cos(a) * 26, 0, Z + Math.sin(a) * 26); ring.push([p[0], p[1]]); } MG.fx.line(ctx, ring, { color: P.rojo, width: 3, dash: [7, 6] }); const q = S1.pj(cam, X, -150, Z); MG.fx.line(ctx, [[q[0], q[1]], [q[0], S1.pj(cam, X, -40, Z)[1]]], { color: P.rojo, width: 2, dash: [4, 5] }); S1.mono(ctx, 'almost ×2', q[0], q[1] - 14, t, tP.twice, { size: 26, color: P.rojo, align: 'center' }); ctx.restore(); } }
      // ---- standing numerals 49 / 97 (topple when everyone runs)
      const n97 = figs.filter((f) => f.role === 'vis' && t >= PL.land(f.j)).length;
      const standN = (str, sub, X, Z, t0, col) => { const up = pr01(t, t0, t0 + 0.45, 'outBack'); const fall = pr01(t, runT0 - 0.1, runT0 + 0.5, 'inCubic'); if (up <= 0 || fall >= 1) return; const spr = S1._standee(str, { size: 240, color: col, sub }); const h = 270; S1.castShadow(ctx, cam, S1.tinted(spr, '#3A2B4A', 'std' + str + sub), X, Z, h * up, shadowDir, { alpha: shA * (1 - fall) }); S1.billboard(ctx, cam, spr, X, Z, h, { sy: up * Math.cos(fall * Math.PI / 2), alpha: 1 - fall * 0.6 }); };
      standN('49', 'MILLION', -470, 640, tP.n49 - 0.1, '#14335F');
      if (n97 > 0) standN(String(t >= tP.n97 ? 97 : n97), 'MILLION', 330, 640, tP.welcomes + 0.2, P.solDeep);
      // ---- coin tower (€135 B) and the gas flame
      const coins = Math.floor(TOWER.n * ln(t, tP.e135 - 0.2, tP.billion + 1.0) ** 0.85);
      if (t > tP.tourists - 0.5) {
        const b = S1.pj(cam, TOWER.X, 0, TOWER.Z); const hT = coins * TOWER.coin; const tp = S1.pj(cam, TOWER.X, -hT, TOWER.Z);
        const rx = TOWER.r * b[2], ry = rx * clamp(Math.abs(Math.sin(cam.pitch + 0.12)) * 0.9 + 0.08, 0.1, 0.6);
        S1.castShadowRect(ctx, cam, TOWER.X, TOWER.Z, TOWER.r, hT, shadowDir, shA);
        if (coins > 0) { const g = ctx.createLinearGradient(b[0] - rx, 0, b[0] + rx, 0); g.addColorStop(0, '#FFE7A6'); g.addColorStop(0.22, '#E9B44C'); g.addColorStop(0.6, '#B97F22'); g.addColorStop(1, '#6E4514'); ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(b[0], b[1], rx, ry, 0, 0, Math.PI); ctx.lineTo(tp[0] - rx, tp[1]); ctx.ellipse(tp[0], tp[1], rx, ry, 0, Math.PI, 0, true); ctx.closePath(); ctx.fill();
          ctx.strokeStyle = 'rgba(80,45,10,0.45)'; ctx.lineWidth = 1; const step = Math.max(1, Math.ceil(3 / Math.max(0.5, (b[1] - tp[1]) / Math.max(1, coins) / 3))); for (let i = 1; i < coins; i += step) { const yy = lerp(b[1], tp[1], i / coins); ctx.beginPath(); ctx.ellipse(lerp(b[0], tp[0], i / coins), yy, rx, ry, 0, 0.05, Math.PI - 0.05); ctx.stroke(); }
          ctx.fillStyle = '#F7D27A'; ctx.beginPath(); ctx.ellipse(tp[0], tp[1], rx, ry, 0, 0, TAU); ctx.fill(); ctx.strokeStyle = '#A36A1C'; ctx.lineWidth = 2; ctx.stroke(); MG.text.draw(ctx, '€', tp[0], tp[1] + ry * 0.35, { font: F.display, weight: 900, size: ry * 1.3, color: 'rgba(140,90,20,0.6)', align: 'center', scale: 1 }); }
        // coins in flight
        for (let i = 0; i < 18; i++) { const tl = lerp(tP.e135 - 0.2, tP.billion + 1.0, i / 18) + MG.rand(12, i) * 0.06; const u = ln(t, tl - 0.55, tl); if (u <= 0 || u >= 1) continue; const yy = -hT - 900 * (1 - u) ** 2; const p = S1.pj(cam, TOWER.X + (MG.rand(13, i) - 0.5) * 30, yy, TOWER.Z); const spin = Math.abs(Math.cos((t + i) * 9)); ctx.fillStyle = '#F2C35A'; ctx.beginPath(); ctx.ellipse(p[0], p[1], rx * 0.95, Math.max(2, rx * 0.95 * spin), 0.3, 0, TAU); ctx.fill(); ctx.strokeStyle = '#9A6418'; ctx.lineWidth = 1.5; ctx.stroke(); }
      }
      if (t > tP.more - 0.6) { // pipeline from the east + burner + blue flame
        const fl = pr01(t, tP.russia, tP.exporting + 0.3, 'outCubic'); const hF = TOWER.n * TOWER.coin * 0.42 * fl;
        const pipeY = -34; const a = S1.pj(cam, FLAME.X, pipeY, FLAME.Z), b2 = S1.pj(cam, FLAME.X + 2600, pipeY, FLAME.Z + 300); const pr2 = 18 * a[2];
        ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = '#6F757C'; ctx.lineWidth = pr2 * 2; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b2[0], b2[1]); ctx.stroke(); ctx.strokeStyle = 'rgba(255,255,255,0.35)'; ctx.lineWidth = pr2 * 0.5; ctx.beginPath(); ctx.moveTo(a[0], a[1] - pr2 * 0.5); ctx.lineTo(b2[0], b2[1] - pr2 * 0.3); ctx.stroke(); ctx.restore();
        const nb = S1.pj(cam, FLAME.X, 0, FLAME.Z), nt = S1.pj(cam, FLAME.X, -70, FLAME.Z); const nw = 52 * nb[2]; const ng = ctx.createLinearGradient(nb[0] - nw, 0, nb[0] + nw, 0); ng.addColorStop(0, '#C9CED4'); ng.addColorStop(0.4, '#8C949C'); ng.addColorStop(1, '#4E555C'); ctx.fillStyle = ng; ctx.fillRect(nb[0] - nw, nt[1], nw * 2, nb[1] - nt[1]); ctx.fillStyle = '#5B6168'; ctx.fillRect(nb[0] - nw * 1.35, nt[1] - 6, nw * 2.7, 12);
        if (fl > 0) { const ft = S1.pj(cam, FLAME.X, -70 - hF, FLAME.Z); const fx = nt[0], fy = nt[1]; const fh = fy - ft[1]; ctx.save(); ctx.globalCompositeOperation = 'source-over';
          MG.fx.glow(ctx, fx, nb[1], 260 * nb[2] * fl, '#6FA8FF', 0.35); for (let L = 0; L < 3; L++) { const wv = [1.25, 0.8, 0.4][L], col = ['rgba(46,110,220,0.85)', 'rgba(110,190,255,0.85)', 'rgba(235,250,255,0.9)'][L]; const pts = []; const N = 14; for (let i = 0; i <= N; i++) { const u = i / N; const wob = MG.noise2(u * 3 - t * 6, L * 4) * 22 * u * nb[2]; pts.push([fx - nw * 0.9 * wv * Math.sin(Math.PI * (0.15 + 0.85 * (1 - u))) * (1 - u * 0.6) + wob, fy - fh * u * (0.9 + 0.1 * wv)]); } for (let i = N; i >= 0; i--) { const u = i / N; const wob = MG.noise2(u * 3 - t * 6, L * 4 + 9) * 22 * u * nb[2]; pts.push([fx + nw * 0.9 * wv * Math.sin(Math.PI * (0.15 + 0.85 * (1 - u))) * (1 - u * 0.6) + wob, fy - fh * u * (0.9 + 0.1 * wv)]); } ctx.fillStyle = col; ctx.fill(MG.path.smooth(pts, true)); }
          MG.fx.glow(ctx, fx, fy - fh * 0.4, fh * 0.9 + 40, '#7FB8FF', 0.35); ctx.restore(); }
        // comparison rule: dashed line at the flame's height reaching the tower
        if (fl > 0.6) { const k = pr01(t, tP.exporting + 0.2, tP.gas + 0.2); const ya = S1.pj(cam, FLAME.X, -70 - hF, FLAME.Z), yb = S1.pj(cam, TOWER.X, -70 - hF, TOWER.Z); ctx.save(); ctx.globalAlpha = 0.85; MG.fx.line(ctx, [[ya[0], ya[1]], [yb[0] - TOWER.r * yb[2] - 6, yb[1]]], { progress: k, color: '#2E6EDC', width: 2.5, dash: [9, 7] }); ctx.restore(); }
      }
      ctx.restore();
      // ---- typography (VO-synced, 1–3 words, anchored to the scene)
      const cA = 1 - pr01(t, tP.welcomes + 0.6, tP.welcomes + 1.0);
      if (cA > 0) { const p = S1.pj(cam, -470, -330, 640); ctx.save(); ctx.globalAlpha = cA; S1.lead(ctx, 'residents', p[0], p[1] - 10, t, tP.res - 0.05, { size: 58, align: 'center' }); ctx.restore(); }
      { const k = 1 - pr01(t, runT0 - 0.1, runT0 + 0.3); if (k > 0 && t > tP.visitors - 0.3) { const p = S1.pj(cam, 330, -335, 640); ctx.save(); ctx.globalAlpha = k; S1.lead(ctx, 'visitors', p[0], p[1] - 10, t, tP.visitors - 0.05, { size: 62, align: 'center' }); ctx.restore(); }
      }
      if (t < tP.welcomes + 1) { ctx.save(); ctx.globalAlpha = 1 - pr01(t, tP.welcomes + 0.5, tP.welcomes + 1); S1.mono(ctx, 'one figure = one million people', 140, 990, t, tP.n49 + 0.3, { size: 20, color: P.ink2 }); ctx.restore(); }
      // SPAIN.
      { const k = 1 - pr01(t, tP.tourists + 0.2, tP.tourists + 0.7); if (k > 0 && t > tP.spain - 0.2) { ctx.save(); ctx.globalAlpha = k; MG.text.reveal(ctx, 'SPAIN', 700, 250, t, tP.spain - 0.06, { font: F.display, weight: 900, size: 230, color: P.ink, align: 'center', style: 'drop', by: 'char', stagger: 0.04, dur: 0.45, tracking: 0.02, amount: 0.5 }); ctx.restore(); } }
      // €135 BILLION / a year
      if (t > tP.e135 - 0.2) { const p = S1.pj(cam, TOWER.X, -TOWER.n * TOWER.coin, TOWER.Z); const xr = p[0] - 120, y0 = clamp(p[1] + 120, 220, 520); const val = Math.round(135 * E.outCubic(ln(t, tP.e135 - 0.1, tP.billion + 0.6)));
        MG.text.draw(ctx, '€' + val, xr, y0, { font: F.cond, weight: 900, size: 200, color: P.ink, align: 'right', alpha: pr01(t, tP.e135 - 0.15, tP.e135 + 0.15) });
        S1.key(ctx, 'BILLION', xr - 4, y0 + 74, t, tP.billion - 0.05, { size: 70, align: 'right' }); S1.lead(ctx, 'a year', xr - 4, y0 + 138, t, tP.year - 0.1, { size: 52, align: 'right' }); }
      if (t > tP.russia - 0.2) { const p = S1.pj(cam, FLAME.X, 0, FLAME.Z); S1.mono(ctx, 'Russia', p[0], p[1] + 56, t, tP.russia, { size: 30, color: '#24496E', align: 'center' }); S1.mono(ctx, 'natural gas exports', p[0], p[1] + 92, t, tP.exporting, { size: 20, color: '#24496E', align: 'center' }); const q = S1.pj(cam, TOWER.X, -TOWER.n * TOWER.coin * 0.42 - 70, TOWER.Z); S1.lead(ctx, 'more than', q[0] + 140, q[1] - 26, t, tP.more - 0.05, { size: 54, color: P.ink }); }
      // final tilt toward the low sun → flare (motivates the cut to a sunny beach)
      const fl2 = pr01(t, 33.55, 34.0, 'inQuad'); if (fl2 > 0) { ctx.save(); ctx.globalCompositeOperation = 'screen'; MG.fx.glow(ctx, W / 2 - 120, H * 0.3, 2000 * fl2, '#FFE7B8', fl2); ctx.restore(); }
    },
    post: (t) => ({ grade: t < tP.spain - 0.4 ? 'cool' : 'golden', vignette: 0.34, grain: 0.05, bloom: 0.12 * pr01(t, tP.spain, tP.spain + 1), temp: lerp(-0.03, 0.05, pr01(t, tP.spain - 0.5, tP.spain + 1)) }),
  };
  /** box-ish cast shadow for the tower (a cylinder casting a long shadow along dir) */
  S1.castShadowRect = (ctx, cam, X, Z, r, h, dir, a) => { if (h <= 0) return; const L = h; const corners = [[X - r, Z], [X + r, Z], [X + r + dir[0] * L, Z + dir[1] * L], [X - r + dir[0] * L, Z + dir[1] * L]].map(([x, z]) => { const p = S1.pj(cam, x, 0, z); return [p[0], p[1]]; }); ctx.save(); ctx.globalAlpha = a; ctx.filter = 'blur(4px)'; ctx.fillStyle = '#3A2B4A'; ctx.beginPath(); corners.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.fill(); ctx.restore(); };

  // ================================================================ CH3 · 34.0–46.5 · BEACH POSTCARD → TORN → THE EMPIRE ON WHICH THE SUN NEVER SET
  const tE = { but: Tw('But', 34.08), much: Tw('much', 35.04), beaches: Tw('beaches', 35.68), five: Tw('Five', 36.64), ago: Tw('ago', 37.44), built: Tw('built', 38.12), first: Tw('first', 38.88), empire: Tw('empire', 39.28), sun: Tw('sun', 40.4), never: Tw('never', 40.8), set: Tw('set', 41.2), mexico: Tw('Mexico', 42.56), phil: Tw('Philippines', 43.44), neth: Tw('Netherlands', 44.64), arg: Tw('Argentina', 45.36), today: Tw('Today', 46.56) };
  S1.tE = tE;
  /** vintage beach postcard art (cached) */
  S1.beachCard = () => MG.cache('s1:beachcard', 1180, 780, (x, w, h) => {
    x.fillStyle = '#FBF4E4'; x.fillRect(0, 0, w, h); const ix = 34, iy = 34, iw = w - 68, ih = h - 68; x.save(); x.beginPath(); x.rect(ix, iy, iw, ih); x.clip();
    const sky = x.createLinearGradient(0, iy, 0, iy + ih * 0.5); sky.addColorStop(0, '#2FA7A0'); sky.addColorStop(1, '#BFE3D6'); x.fillStyle = sky; x.fillRect(ix, iy, iw, ih);
    MG.kit.sun(x, 860, 190, 92, 0, { rays: 0.7, corona: 0.6, halftone: 0.4 });
    // sea bands
    const seaY = iy + ih * 0.46; x.fillStyle = '#1F6FA0'; x.fillRect(ix, seaY, iw, ih * 0.2); x.fillStyle = '#2E8FBF'; x.fillRect(ix, seaY + ih * 0.07, iw, ih * 0.13);
    x.strokeStyle = 'rgba(255,255,255,0.55)'; x.lineWidth = 3; for (let i = 0; i < 26; i++) { const yy = seaY + 12 + (i % 5) * 22, xx = ix + ((i * 137) % iw); x.beginPath(); x.moveTo(xx, yy); x.quadraticCurveTo(xx + 18, yy - 6, xx + 36, yy); x.stroke(); }
    // sand
    const sandY = seaY + ih * 0.2; const sand = x.createLinearGradient(0, sandY, 0, iy + ih); sand.addColorStop(0, '#F3D49B'); sand.addColorStop(1, '#E2B06A'); x.fillStyle = sand; x.beginPath(); x.moveTo(ix, sandY + 20); x.quadraticCurveTo(w / 2, sandY - 18, ix + iw, sandY + 10); x.lineTo(ix + iw, iy + ih); x.lineTo(ix, iy + ih); x.closePath(); x.fill();
    x.fillStyle = 'rgba(255,255,255,0.7)'; x.beginPath(); x.moveTo(ix, sandY + 20); x.quadraticCurveTo(w / 2, sandY - 18, ix + iw, sandY + 10); x.quadraticCurveTo(w / 2, sandY + 2, ix, sandY + 34); x.closePath(); x.fill();
    // parasols (striped) with shadows
    const parasol = (px, py, r, c1, c2, tilt) => { x.save(); x.fillStyle = 'rgba(120,70,30,0.25)'; x.beginPath(); x.ellipse(px + r * 0.5, py + 210, r * 1.1, r * 0.25, 0, 0, TAU); x.fill(); x.strokeStyle = '#6b4a2a'; x.lineWidth = 6; x.beginPath(); x.moveTo(px, py); x.lineTo(px + tilt * 40, py + 210); x.stroke(); x.translate(px, py); x.rotate(tilt * 0.2); for (let i = 0; i < 6; i++) { const a0 = Math.PI + i * Math.PI / 6, a1 = a0 + Math.PI / 6; x.fillStyle = i % 2 ? c1 : c2; x.beginPath(); x.moveTo(0, 0); x.arc(0, 0, r, a0, a1); x.closePath(); x.fill(); } x.fillStyle = 'rgba(0,0,0,0.12)'; x.beginPath(); x.moveTo(0, 0); x.arc(0, 0, r, Math.PI * 1.5, Math.PI * 2); x.closePath(); x.fill(); x.restore(); };
    parasol(300, 470, 120, '#F0735A', '#FBF4E4', -0.3); parasol(640, 500, 100, '#F6D06F', '#1F4E8C', 0.2); parasol(920, 460, 130, '#B8322A', '#FBF4E4', 0.35);
    // towels
    x.save(); x.translate(470, 640); x.rotate(-0.1); x.fillStyle = '#2FA7A0'; x.fillRect(-90, -24, 180, 48); x.fillStyle = '#FBF4E4'; for (let i = 0; i < 4; i++) x.fillRect(-90 + i * 50, -24, 18, 48); x.restore();
    MG.text.draw(x, '¡España!', 80, 190, { font: F.retro, size: 120, color: '#FBF4E4', shadow: { blur: 0, dx: 5, dy: 6, color: 'rgba(20,60,80,0.55)' } });
    MG.text.draw(x, 'COSTA DEL SOL', 92, 250, { font: F.mono, weight: 700, size: 30, tracking: 0.3, color: '#FBF4E4' });
    MG.tex.over(x, 'halftone', { alpha: 0.07, spacing: 6, radius: 1.6 }); MG.tex.over(x, 'grain', { alpha: 0.2 });
    x.restore(); MG.tex.over(x, 'fibers', { alpha: 0.6 });
  });
  /** a jagged vertical tear line through the card (card-local coords) */
  const TEAR = (() => { const r = MG.rng(41); const pts = []; for (let i = 0; i <= 40; i++) { pts.push([590 + (r() - 0.5) * 34 + Math.sin(i * 0.9) * 14, -10 + i * 20]); } return pts; })();
  S1.cardHalf = (side) => MG.cache('s1:beachhalf:' + side, 1180, 780, (x, w, h) => { const p = new Path2D(); if (side === 'L') { p.moveTo(-10, -10); TEAR.forEach((q) => p.lineTo(q[0], q[1])); p.lineTo(-10, h + 10); } else { p.moveTo(w + 10, -10); TEAR.forEach((q) => p.lineTo(q[0], q[1])); p.lineTo(w + 10, h + 10); } p.closePath(); x.save(); x.clip(p); x.drawImage(S1.beachCard(), 0, 0); x.restore(); x.strokeStyle = '#FFFDF6'; x.lineWidth = 7; x.lineJoin = 'round'; x.beginPath(); TEAR.forEach((q, i) => (i ? x.lineTo(q[0], q[1]) : x.moveTo(q[0], q[1]))); x.stroke(); x.strokeStyle = 'rgba(180,160,120,0.5)'; x.lineWidth = 1.5; x.stroke(); });

  /** the Spanish empire c. 1600 drawn with modern borders as proxies (named in the VO: Mexico, Philippines, Netherlands, Argentina) */
  const EMPIRE = ['Spain', 'Mexico', 'Guatemala', 'Honduras', 'El Salvador', 'Nicaragua', 'Costa Rica', 'Panama', 'Cuba', 'Dominican Rep.', 'Puerto Rico', 'Colombia', 'Venezuela', 'Ecuador', 'Peru', 'Bolivia', 'Chile', 'Argentina', 'Paraguay', 'Uruguay', 'Philippines', 'Netherlands', 'Belgium', 'Luxembourg'];
  S1.empireFC = () => S1._efc || (S1._efc = MG.geo.countries(EMPIRE, '50'));
  /** parchment desk with engraving details (cached) */
  S1.parchment = () => MG.cache('s1:parch', W, H, (x) => {
    x.drawImage(MG.tex.paper(P.parchment, { seed: 6, light: 0.3, blotch: 0.14 }), 0, 0);
    x.strokeStyle = 'rgba(70,45,25,0.35)'; x.lineWidth = 2; x.strokeRect(60, 50, W - 120, H - 100); x.lineWidth = 0.8; x.strokeRect(72, 62, W - 144, H - 124);
    // compass rose (engraved) lower-left
    x.save(); x.translate(250, 850); x.strokeStyle = 'rgba(60,40,25,0.55)'; x.fillStyle = 'rgba(60,40,25,0.45)'; x.lineWidth = 1.2; for (let i = 0; i < 16; i++) { const a = i / 16 * TAU, L = i % 4 === 0 ? 120 : i % 2 ? 50 : 80; x.beginPath(); x.moveTo(0, 0); x.lineTo(Math.cos(a) * L, Math.sin(a) * L); x.stroke(); if (i % 4 === 0) { x.beginPath(); x.moveTo(Math.cos(a) * L, Math.sin(a) * L); x.lineTo(Math.cos(a + 0.18) * 26, Math.sin(a + 0.18) * 26); x.lineTo(Math.cos(a - 0.18) * 26, Math.sin(a - 0.18) * 26); x.closePath(); x.fill(); } } x.beginPath(); x.arc(0, 0, 60, 0, TAU); x.stroke(); x.beginPath(); x.arc(0, 0, 64, 0, TAU); x.stroke(); MG.text.draw(x, 'N', 0, -132, { font: F.old, size: 30, color: 'rgba(60,40,25,0.7)', align: 'center' }); x.restore();
    // rhumb lines
    x.strokeStyle = 'rgba(70,45,25,0.12)'; x.lineWidth = 1; for (let i = 0; i < 32; i++) { const a = i / 32 * TAU; x.beginPath(); x.moveTo(250, 850); x.lineTo(250 + Math.cos(a) * 2600, 850 + Math.sin(a) * 2600); x.stroke(); }
  });
  /** globe camera: center lon/lat + screen pos/scale over time */
  const GLOBE = { x: 1080, y: 560, s: 380 };
  const globeView = (t) => K(t, [[tE.five, { lon: -40, lat: 18, s: 380 }], [tE.sun - 0.2, { lon: -55, lat: 15, s: 390 }, 'soft'], [tE.mexico - 0.25, { lon: -100, lat: 18, s: 420 }, 'cam'], [tE.phil + 0.2, { lon: 168, lat: 12, s: 400 }, 'inOutCubic'], [tE.neth - 0.3, { lon: 160, lat: 10, s: 395 }, 'soft'], [tE.arg + 0.3, { lon: -35, lat: 5, s: 370 }, 'inOutCubic'], [46.6, { lon: -40, lat: 2, s: 365 }, 'soft']]);
  /** draw a great-circle arc on an orthographic projection, only its front side */
  S1.globeArc = (ctx, pr, a, b, p, o = {}) => { const ip = window.d3.geoInterpolate(a, b); const r = pr.rotate(); const c = [-r[0], -r[1]]; const n = 80; let seg = []; const segs = []; let head = null; for (let i = 0; i <= n * p; i++) { const u = i / n; const ll = ip(u); const vis = window.d3.geoDistance(ll, c) < Math.PI / 2 - 0.02; const q = pr(ll); const lift = Math.sin(u * Math.PI) * (o.lift || 0); if (vis) { const cx = pr.translate()[0], cy = pr.translate()[1]; const dx = q[0] - cx, dy = q[1] - cy, d = Math.hypot(dx, dy) || 1; seg.push([q[0] + dx / d * lift, q[1] + dy / d * lift]); head = seg[seg.length - 1]; } else if (seg.length) { segs.push(seg); seg = []; } } if (seg.length) segs.push(seg); for (const s2 of segs) if (s2.length > 1) MG.fx.line(ctx, s2, { color: o.color || P.rojo, width: o.width || 4, dash: o.dash }); if (head && p < 1) { ctx.fillStyle = o.color || P.rojo; ctx.beginPath(); ctx.arc(head[0], head[1], 7, 0, TAU); ctx.fill(); } return head; };
  S1.globeLabel = (ctx, pr, ll, text, t, t0, o = {}) => { const r = pr.rotate(); if (window.d3.geoDistance(ll, [-r[0], -r[1]]) > 1.35) return; const p = pr(ll); const k = pr01(t, t0, t0 + 0.4); if (k <= 0) return; ctx.save(); ctx.globalAlpha *= k; ctx.fillStyle = o.dot || P.rojo; ctx.beginPath(); ctx.arc(p[0], p[1], 7 * E.outBack(k), 0, TAU); ctx.fill(); ctx.strokeStyle = '#FFF6E2'; ctx.lineWidth = 2.5; ctx.stroke(); MG.text.reveal(ctx, text, p[0] + (o.dx ?? 16), p[1] + (o.dy ?? -14), t, t0 + 0.05, { font: F.old, size: o.size || 44, color: o.color || '#2A1C12', stroke: 'rgba(250,240,215,0.9)', strokeW: 8, align: o.align || 'left', style: 'rise', by: 'word' }); ctx.restore(); };

  S1.empireScene = {
    id: 's01_empire', start: 34.0, end: 46.5, transIn: { type: 'flash', dur: 0.5, color: '#FFF0C8', x: 1300, y: 200 },
    init() { S1.beachCard(); S1.cardHalf('L'); S1.cardHalf('R'); S1.parchment(); S1.empireFC(); },
    draw(ctx, t) {
      const hh = MG.cam.handheld(t, 2.5, 41, 0.3); ctx.save(); MG.cam.apply(ctx, { x: 960, y: 540, zoom: lerp(1.0, 1.04, ln(t, 34, 46.5)), dx: hh.dx, dy: hh.dy, rot: hh.rot });
      ctx.drawImage(S1.parchment(), 0, 0);
      // ---- the globe (engraved → painted); appears under the torn postcard
      const v = globeView(t); const live = pr01(t, tE.built - 0.3, tE.built + 0.6);
      const pr = MG.geo.proj('ortho', { rotate: [-v.lon, -v.lat, 0], scale: v.s, translate: [GLOBE.x, GLOBE.y] });
      const R = v.s, cx = GLOBE.x, cy = GLOBE.y;
      // subsolar longitude: the sun circles the globe quickly ("never set")
      const dSraw = K(t, [[tE.empire, 150], [tE.set + 0.5, -300, 'inOutSine'], [46.6, -345, 'linear']]); const lonS = v.lon + dSraw; const dS = MG.mod(dSraw + 180, 360) - 180; const sunFront = Math.cos(MG.deg(dS)) > 0; const showSun = pr01(t, tE.sun - 0.4, tE.sun + 0.2);
      const sunPos = [cx + Math.sin(MG.deg(dS)) * R * 1.38, cy - R * 0.8 + Math.cos(MG.deg(dS)) * R * 0.22]; const sunR = 46;
      if (showSun > 0 && !sunFront) MG.kit.sun(ctx, sunPos[0], sunPos[1], sunR * showSun, t, { corona: 0.5, rays: 0.4 });
      ctx.save(); MG.fx.shadow(ctx, MG.path.circle(cx, cy, R), { dx: 26, dy: 34, blur: 40, color: 'rgba(60,35,20,0.45)' }); ctx.restore();
      MG.geo.sphere(ctx, pr, { fill: MG.col.mix('#C9B48A', P.indigoNight, 0.55 + 0.25 * live) });
      ctx.save(); MG.geo.clip(ctx, pr, { type: 'Sphere' });
      if (live > 0.01) { ctx.globalAlpha = live; ctx.drawImage(MG.geo.sphereTex('world_relief', pr, {}), 0, 0); ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = MG.col.a('#E9D3A0', 0.55 * live); ctx.fillRect(cx - R, cy - R, R * 2, R * 2); ctx.globalCompositeOperation = 'source-over'; }
      MG.geo.draw(ctx, pr, MG.geo.land50, { fill: MG.col.a('#EADBB8', 1 - live * 0.85), stroke: 'rgba(60,40,25,0.7)', width: 1.2 });
      MG.geo.graticule(ctx, pr, { color: 'rgba(60,40,25,0.25)', step: [15, 15] });
      // empire territories ink in, one by one
      const fc = S1.empireFC(); fc.features.forEach((f, i) => { const k = pr01(t, tE.built + i * 0.045, tE.built + 0.4 + i * 0.045); if (k <= 0) return; MG.geo.draw(ctx, pr, f, { fill: MG.col.a(P.sol, 0.92 * k), stroke: MG.col.a('#7E3E1A', k), width: 1.2 }); });
      // night side
      if (showSun > 0) { const night = window.d3.geoCircle().center([lonS + 180, 0]).radius(90)(); ctx.globalAlpha = 0.62 * showSun; MG.geo.draw(ctx, pr, night, { fill: '#1B1F3B' }); ctx.globalAlpha = 1; }
      // limb shading & rim
      const lg = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R * 1.02); lg.addColorStop(0, 'rgba(255,245,220,0.25)'); lg.addColorStop(0.6, 'rgba(255,245,220,0)'); lg.addColorStop(1, 'rgba(30,20,40,0.45)'); ctx.fillStyle = lg; ctx.fillRect(cx - R, cy - R, R * 2, R * 2);
      ctx.restore();
      ctx.strokeStyle = 'rgba(60,40,25,0.8)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.stroke(); ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(cx, cy, R + 10, 0, TAU); ctx.stroke();
      if (showSun > 0 && sunFront) { MG.fx.glow(ctx, sunPos[0], sunPos[1], 200, '#FFD27A', 0.4 * showSun); MG.kit.sun(ctx, sunPos[0], sunPos[1], sunR * showSun, t, { corona: 0.6, rays: 0.5 }); }
      // the inscription around the globe
      if (t > tE.sun - 0.3) { const k = pr01(t, tE.sun - 0.25, tE.set + 0.2, 'linear'); const pts = []; for (let i = 0; i <= 120; i++) { const a = MG.deg(152) - (i / 120) * MG.deg(124); pts.push([cx + Math.cos(a) * (R + 26), cy + Math.sin(a) * (R + 26)]); } MG.text.onPath(ctx, 'THE SUN NEVER SET', pts, { font: F.roman, weight: 900, size: 54, color: '#2A1C12', offset: 0.5, reveal: k, tracking: 0.12, dy: 44 }); }
      if (t > tE.built - 0.1 && t < tE.sun + 0.4) { const r = pr.rotate(); if (window.d3.geoDistance([-3.7, 40.2], [-r[0], -r[1]]) < 1.4) { ctx.save(); ctx.globalAlpha = 1 - pr01(t, tE.sun, tE.sun + 0.4); MG.geo.pulse(ctx, pr, [-3.7, 40.2], t - tE.built, { color: P.rojo, r: 46, width: 3 }); ctx.restore(); } }
      // routes & names
      const tr = (a, b) => ln(t, a, b);
      const ACA = MG.geo.cities.Acapulco, MNL = MG.geo.cities.Manila, AMS = [4.9, 52.37], BA = MG.geo.cities.BuenosAires;
      if (t > tE.mexico - 0.2) S1.globeArc(ctx, pr, ACA, MNL, E.inOutSine(tr(tE.mexico + 0.05, tE.phil + 0.15)), { color: P.rojo, width: 4, dash: [12, 8], lift: 18 });
      if (t > tE.neth - 0.2) S1.globeArc(ctx, pr, AMS, BA, E.inOutSine(tr(tE.neth + 0.05, tE.arg + 0.45)), { color: P.rojo, width: 4, dash: [12, 8], lift: 18 });
      S1.globeLabel(ctx, pr, [-102, 23.5], 'Mexico', t, tE.mexico - 0.05);
      S1.globeLabel(ctx, pr, [122, 12.5], 'Philippines', t, tE.phil - 0.05, { align: 'right', dx: -16 });
      S1.globeLabel(ctx, pr, [5.3, 52.2], 'Netherlands', t, tE.neth - 0.05);
      S1.globeLabel(ctx, pr, [-64, -34], 'Argentina', t, tE.arg - 0.05);
      // cartouche: the year rolls back 500 years
      { const k = pr01(t, tE.five - 0.3, tE.five + 0.2); const out = 1 - pr01(t, tE.mexico - 0.6, tE.mexico - 0.2); if (k * out > 0 && t > tE.beaches) { ctx.save(); ctx.globalAlpha = k * out; const bx = 120, by = 150;
          ctx.strokeStyle = 'rgba(60,40,25,0.75)'; ctx.lineWidth = 2; ctx.fillStyle = 'rgba(244,232,205,0.9)'; const rib = new Path2D(); rib.moveTo(bx, by); rib.lineTo(bx + 420, by); rib.lineTo(bx + 400, by + 75); rib.lineTo(bx + 420, by + 150); rib.lineTo(bx, by + 150); rib.lineTo(bx + 20, by + 75); rib.closePath(); ctx.fill(rib); ctx.stroke(rib);
          const yr = Math.round(lerp(2025, 1525, E.inOutCubic(ln(t, tE.five, tE.ago + 0.3)))); ctx.beginPath(); ctx.rect(bx + 30, by + 8, 360, 134); ctx.clip();
          const digits = String(yr).split(''); digits.forEach((d, i) => { MG.text.draw(ctx, d, bx + 95 + i * 78, by + 120, { font: F.old, size: 130, color: '#2A1C12', align: 'center' }); });
          ctx.restore(); S1.lead(ctx, 'five hundred years ago', bx + 210, by + 205, t, tE.five, { size: 40, color: '#3B2A1C', align: 'center', alpha: out }); } }
      // ---- the postcard on top, torn in two on "much more than beaches"
      const tearT = tE.much + 0.05; const fly = ln(t, tearT + 0.16, tearT + 0.85);
      if (fly < 1) { const crack = pr01(t, tearT - 0.05, tearT + 0.16); const cxp = 960 - 590 + 0, cyp = 500 - 390; const push = 0.84 + 0.03 * ln(t, 34, tearT);
        for (const side of ['L', 'R']) { const sg = side === 'L' ? -1 : 1; const e = E.inCubic(fly); const dx = sg * (e * 1400 + crack * 10), dy = -e * 220 + e * e * 400, rot = -0.05 + sg * e * 0.6;
          ctx.save(); ctx.translate(960, 540); ctx.scale(push, push); ctx.translate(-960, -540); ctx.translate(cxp + 590 + dx, cyp + 390 + dy); ctx.rotate(rot); ctx.shadowColor = 'rgba(50,30,20,0.45)'; ctx.shadowBlur = 30 + e * 40; ctx.shadowOffsetX = 18 + e * 60; ctx.shadowOffsetY = 26 + e * 90; ctx.drawImage(crack > 0 ? S1.cardHalf(side) : S1.beachCard(), -590, -390); ctx.restore(); if (crack <= 0) break; } }
      ctx.restore();
      // "more than" kinetic note on the postcard beat
      if (t < tearT + 0.6) { ctx.save(); ctx.globalAlpha = 1 - pr01(t, tearT + 0.2, tearT + 0.6); S1.lead(ctx, 'much more than', 1080, 1000, t, tE.much - 0.1, { size: 64, align: 'right', color: P.ink }); S1.key(ctx, 'BEACHES', 1100, 1000, t, tE.beaches - 0.06, { size: 64, color: P.rojo, style: 'drop', by: 'char' }); ctx.restore(); }
    },
    post: (t) => ({ grade: t < tE.much + 0.4 ? 'warm' : 'archival', sat: t < tE.much + 0.4 ? 1.05 : 0.92, contrast: 1.06, vignette: 0.42, grain: 0.055 }),
  };

  // ================================================================ CH4 · 46.5–72.1 · WHAT SPAIN GAVE THE WORLD
  const tL = { today: Tw('Today', 46.56), spanish: Tw('Spanish', 47.44), native: Tw('native', 48.24), any: Tw('any', 49.4), language: Tw('language', 49.6), except: Tw('except', 50.08), chinese: Tw('Chinese', 50.56), half: Tw('Half', 51.6), billion: Tw('billion', 52.24), speak: Tw('speak', 53.04), gave: Tw('gave', 54.45), man: Tw('man', 55.2), dresses: Tw('dresses', 55.72), halfP: Tw('half', 56.24), planet: Tw('planet', 56.84), ranks: Tw('ranks', 57.52), ten: Tw('ten', 58.24), richest: Tw('richest', 58.64), earth: Tw('Earth', 59.68), worlds: Tw('world’s', 60.85), second: Tw('second-largest', 61.33), hs: Tw('high-speed', 62.21), network: Tw('network', 63.01), behind: Tw('behind', 63.73), china: Tw('China', 64.05), highest: Tw('highest', 65.45), life: Tw('life', 65.73), eu: Tw('European', 66.93), most: Tw('most', 69.01), decorated: Tw('decorated', 69.41), club: Tw('club', 70.37), history: Tw('history', 71.01) };
  S1.tL = tL;
  /** inflated speech-bubble balloon (paper, lit from upper-left), returns its path */
  S1.bubblePath = (x, y, r, tail = 1) => { const p = new Path2D(); const a0 = MG.deg(112), a1 = MG.deg(138); p.moveTo(x + Math.cos(a1) * r, y + Math.sin(a1) * r); p.arc(x, y, r, a1, a0 + TAU, false); const tx = x - r * 0.62 * tail, ty = y + r * (1 + 0.32 * tail); p.quadraticCurveTo(x + Math.cos(a0) * r * 0.98, y + r * 1.1, tx, ty); p.quadraticCurveTo(x - r * 0.42, y + r * 0.98, x + Math.cos(a1) * r, y + Math.sin(a1) * r); p.closePath(); return p; };
  S1.bubble = (ctx, x, y, r, color, label, o = {}) => { if (r < 2) return; const path = S1.bubblePath(x, y, r, o.tail ?? 1);
    MG.fx.shadow(ctx, path, { dx: r * 0.16, dy: r * 0.22, blur: r * 0.25, color: 'rgba(58,43,58,0.38)' });
    MG.fx.volume(ctx, path, [x - r, y - r, r * 2, r * 2.3], { color, shade: 0.42, hi: 0.5, hiColor: MG.col.light(color, 0.7), soft: 0.25, rim: 'rgba(255,248,230,0.7)', rimW: Math.max(2, r * 0.02), tex: 'blotch', texAlpha: 0.12 });
    // specular sheen
    ctx.save(); ctx.globalCompositeOperation = 'screen'; ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.beginPath(); ctx.ellipse(x - r * 0.42, y - r * 0.48, r * 0.22, r * 0.11, -0.7, 0, TAU); ctx.fill(); ctx.restore();
    if (label) { const sz = o.size || r * 0.27; MG.text.draw(ctx, label, x, y + sz * 0.34, { font: F.grotesk, weight: 800, size: sz, color: o.fg || P.cal, align: 'center', tracking: 0.02 }); }
    if (o.rank) MG.text.draw(ctx, o.rank, x, y - r * 0.36, { font: F.cond, weight: 900, size: r * 0.3, color: MG.col.a(o.fg || P.cal, 0.75), align: 'center' });
    return path; };
  const BUB = { sp: { x: 1180, y: 520, r: 222 }, zh: { x: 640, y: 500, r: 310 }, en: { x: 1590, y: 600, r: 197 } }; // radii ∝ √(native speakers): ≈940M / 485M / 380M
  S1.langScene = {
    id: 's01_langs', start: 46.5, end: 51.55,
    draw(ctx, t) {
      MG.kit.paper(ctx, P.cal, { light: 0.3 }); const hh = MG.cam.handheld(t, 2, 51); ctx.save(); MG.cam.apply(ctx, { x: 960, y: 540, zoom: lerp(1, 1.05, ln(t, 46.5, 51.6)), dx: hh.dx, dy: hh.dy });
      const bob = (s) => Math.sin(t * 1.3 + s) * 7 + MG.wiggle(t, 0.4, 4, s);
      // Spanish: the globe's circle becomes the Spanish balloon (match cut on the shape)
      const m = pr01(t, 46.5, 47.25, 'inOutCubic'); const sp = { x: lerp(1080, BUB.sp.x, m), y: lerp(560, BUB.sp.y, m) + bob(1) * m, r: lerp(365, BUB.sp.r, m) };
      const zh = pr01(t, tL.chinese - 0.15, tL.chinese + 0.5, 'outBack'), en = pr01(t, tL.any - 0.05, tL.any + 0.5, 'outBack');
      if (zh > 0) S1.bubble(ctx, BUB.zh.x, BUB.zh.y + bob(2), BUB.zh.r * zh, P.azulejo, 'CHINESE', { rank: '1', tail: 1 });
      if (en > 0) S1.bubble(ctx, BUB.en.x, BUB.en.y + bob(3), BUB.en.r * en, P.terracota, 'ENGLISH', { rank: '3', tail: 1 });
      S1.bubble(ctx, sp.x, sp.y, sp.r, MG.col.mix(P.indigoNight, P.sol, pr01(t, 46.5, 46.85)), m > 0.5 ? 'SPANISH' : '', { rank: t > tL.chinese ? '2' : '', tail: m, fg: P.ink });
      ctx.restore();
      S1.mono(ctx, 'native speakers', 140, 150, t, tL.native - 0.05, { size: 26, color: P.ink2 });
      S1.lead(ctx, 'more than any language', 140, 950, t, tL.native, { size: 56, out: { at: tL.except - 0.2, style: 'fade' } });
      S1.lead(ctx, 'except Chinese', 140, 950, t, tL.except, { size: 56 });
    },
    post: { grade: 'warm', vignette: 0.3, grain: 0.045 },
  };

  // ---- the Spanish-speaking globe → a hanger dresses half the planet → the clothes rail of the ten richest
  const HISP = ['Spain', 'Mexico', 'Guatemala', 'Honduras', 'El Salvador', 'Nicaragua', 'Costa Rica', 'Panama', 'Cuba', 'Dominican Rep.', 'Puerto Rico', 'Colombia', 'Venezuela', 'Ecuador', 'Peru', 'Bolivia', 'Chile', 'Argentina', 'Paraguay', 'Uruguay', 'Eq. Guinea'];
  S1.hispFC = () => S1._hfc || (S1._hfc = MG.geo.countries(HISP, '50'));
  S1.denim = () => MG.cache('s1:denim', 900, 900, (x, w, h) => { x.fillStyle = '#2E5E93'; x.fillRect(0, 0, w, h); const r = MG.rng(5); x.lineWidth = 1.6; for (let i = -h; i < w; i += 5) { x.strokeStyle = i % 10 ? 'rgba(20,40,80,0.35)' : 'rgba(190,215,240,0.22)'; x.beginPath(); x.moveTo(i, 0); x.lineTo(i + h * 0.6, h); x.stroke(); } for (let i = 0; i < 2600; i++) { x.fillStyle = `rgba(230,240,255,${r() * 0.12})`; x.fillRect(r() * w, r() * h, 1 + r() * 3, 1); } MG.tex.over(x, 'blotch', { alpha: 0.25, color: '#0e2240', scale: 3 }); });
  /** wooden hanger: hook at (0,0), shoulders spanning ±span at y≈hookLen */
  S1.hanger = (ctx, span, o = {}) => { const hy = o.hy || 150; ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = '#9EA4AA'; ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(0, hy - 30); ctx.lineTo(0, 40); ctx.arc(-26, 40, 26, 0, Math.PI * 1.15, true); ctx.stroke(); ctx.strokeStyle = 'rgba(255,255,255,0.6)'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(-3, hy - 34); ctx.lineTo(-3, 40); ctx.stroke();
    const bar = new Path2D(); bar.moveTo(-span, hy + span * 0.34); bar.quadraticCurveTo(0, hy - 26, span, hy + span * 0.34); bar.lineTo(span - 8, hy + span * 0.34 + 26); bar.quadraticCurveTo(0, hy + 14, -span + 8, hy + span * 0.34 + 26); bar.closePath();
    MG.fx.volume(ctx, bar, [-span, hy - 26, span * 2, span * 0.34 + 60], { color: '#B9824C', shade: 0.4, hi: 0.4, hiColor: '#F2C58E', soft: 0.2, outline: '#5a3a1e', outlineW: 2 });
    ctx.save(); ctx.clip(bar); ctx.strokeStyle = 'rgba(90,55,25,0.3)'; ctx.lineWidth = 1.3; for (let i = 0; i < 6; i++) { ctx.beginPath(); ctx.moveTo(-span, hy + span * 0.3 + i * 4); ctx.quadraticCurveTo(0, hy - 22 + i * 5, span, hy + span * 0.3 + i * 4); ctx.stroke(); } ctx.restore();
    ctx.fillStyle = '#6b6f74'; ctx.fillRect(-11, hy - 34, 22, 14); ctx.restore(); };
  /** suit jacket on a hanger (sprite, cached) */
  S1.jacket = (col, v) => MG.cache(`s1:jacket:${col}:${v}`, 640, 900, (x, w, h) => { x.translate(w / 2, 40); S1.hanger(x, 250, { hy: 150 });
    const body = MG.path.smooth([[-250, 238], [-170, 205], [-60, 190], [60, 190], [170, 205], [250, 238], [268, 420], [250, 820], [-250, 820], [-268, 420]], true, 0.4);
    const sl = (sg) => MG.path.smooth([[sg * 250, 238], [sg * 286, 300], [sg * 300, 560], [sg * 292, 800], [sg * 236, 806], [sg * 232, 560], [sg * 244, 330]], true, 0.4);
    for (const sg of [-1, 1]) MG.fx.volume(x, sl(sg), [sg > 0 ? 230 : -300, 238, 70, 570], { color: MG.col.shade(col, 0.12), shade: 0.45, hi: 0.2, soft: 0.3, outline: MG.col.shade(col, 0.6), outlineW: 2 });
    MG.fx.volume(x, body, [-268, 190, 536, 630], { color: col, shade: 0.42, hi: 0.25, soft: 0.25, outline: MG.col.shade(col, 0.6), outlineW: 2.5, tex: 'grain', texAlpha: 0.15 });
    // shirt V + lapels
    x.fillStyle = v % 2 ? '#F4EFE6' : '#D9E3EE'; x.beginPath(); x.moveTo(-60, 192); x.lineTo(0, 440); x.lineTo(60, 192); x.closePath(); x.fill();
    x.fillStyle = v % 3 === 0 ? P.rojoDeep : v % 3 === 1 ? '#3A2B3A' : '#1F4E8C'; x.beginPath(); x.moveTo(-14, 200); x.lineTo(14, 200); x.lineTo(22, 380); x.lineTo(0, 430); x.lineTo(-22, 380); x.closePath(); x.fill();
    const lap = (sg) => MG.path.poly([[sg * 60, 190], [sg * 110, 200], [sg * 70, 330], [sg * 120, 360], [sg * 8, 520], [sg * 0, 450]]); for (const sg of [-1, 1]) { x.fillStyle = MG.col.shade(col, 0.28); x.fill(lap(sg)); x.strokeStyle = MG.col.shade(col, 0.65); x.lineWidth = 2; x.stroke(lap(sg)); }
    x.fillStyle = MG.col.shade(col, 0.6); for (const yy of [560, 650]) { x.beginPath(); x.arc(16, yy, 9, 0, TAU); x.fill(); }
    x.strokeStyle = MG.col.shade(col, 0.55); x.lineWidth = 3; x.beginPath(); x.moveTo(-200, 640); x.lineTo(-90, 640); x.stroke(); x.beginPath(); x.moveTo(110, 300); x.lineTo(200, 296); x.stroke(); x.fillStyle = '#F4EFE6'; x.beginPath(); x.moveTo(130, 300); x.lineTo(150, 278); x.lineTo(170, 299); x.closePath(); x.fill(); });
  const RAIL = { sp: 400, ours: 6, hook: 96 }; // hook-top y of our hanger (world)
  const globeDress = (t) => ({ hang: pr01(t, tL.gave - 0.1, tL.man + 0.2, 'outCubic'), dress: pr01(t, tL.dresses - 0.05, tL.halfP + 0.2, 'inOutCubic'), seam: pr01(t, tL.halfP, tL.planet + 0.3), pull: pr01(t, tL.ranks - 0.3, tL.ten + 0.2, 'inOutCubic') });
  S1.speakScene = {
    id: 's01_speak', start: 51.55, end: 60.35,
    transIn: { type: 'shape', dur: 0.6, ease: 'inOutCubic', path: (p) => { const k = E.inCubic(p); const x = lerp(BUB.sp.x, 960, k), y = lerp(BUB.sp.y, 540, k), r = lerp(BUB.sp.r, 1500, k); return S1.bubblePath(x, y, r, 1 - k); }, stroke: P.sol, strokeW: 10, shadow: false },
    init() { S1.hispFC(); S1.denim(); for (let i = 0; i < 10; i++) S1.jacket(['#2B2F3A', '#1E2230', '#3B3236', '#454B55', '#252A36'][i % 5], i); },
    draw(ctx, t) {
      MG.kit.paper(ctx, P.cal, { light: 0.32 });
      const g = globeDress(t); const zoom = lerp(1, 0.44, g.pull); const camX = lerp(960, 960 + RAIL.sp * 0.9, pr01(t, tL.richest, 60.5, 'inCubic')); const hh = MG.cam.handheld(t, 2.4, 61);
      const swing = MG.jiggle(t, tL.man + 0.15, 0.06, 0.9, 1.6) + (g.pull > 0 ? MG.jiggle(t, tL.ranks, 0.04, 0.8, 1.8) : 0);
      ctx.save(); MG.cam.apply(ctx, { x: camX, y: lerp(540, 520, g.pull), zoom, dx: hh.dx, dy: hh.dy, rot: hh.rot });
      // rail + other hangers (enter as the camera pulls back)
      if (g.pull > 0) { ctx.save(); ctx.globalAlpha = clamp(g.pull * 2); const ry = RAIL.hook + 14; const rg = ctx.createLinearGradient(0, ry - 16, 0, ry + 16); rg.addColorStop(0, '#E8ECEF'); rg.addColorStop(0.45, '#9AA2AA'); rg.addColorStop(1, '#5D646B'); ctx.fillStyle = rg; ctx.fillRect(-3200, ry - 14, 9000, 28);
        for (let i = 0; i < 10; i++) { if (i === RAIL.ours) continue; const xx = 960 + (i - RAIL.ours) * RAIL.sp; const sw = Math.sin(t * 1.1 + i) * 0.015; const spr = S1.jacket(['#2B2F3A', '#1E2230', '#3B3236', '#454B55', '#252A36'][i % 5], i); ctx.save(); ctx.translate(xx, ry); ctx.rotate(sw); ctx.drawImage(spr, -320, -54); ctx.restore(); }
        // shop sign
        ctx.save(); ctx.translate(960 + 0.5 * RAIL.sp, ry - 300); ctx.strokeStyle = '#5D646B'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(-600, 120); ctx.lineTo(-600, 300); ctx.moveTo(600, 120); ctx.lineTo(600, 300); ctx.stroke(); ctx.fillStyle = '#1E1A1D'; ctx.fillRect(-900, -110, 1800, 220); ctx.strokeStyle = P.gold; ctx.lineWidth = 6; ctx.strokeRect(-878, -88, 1756, 176); MG.text.draw(ctx, 'TOP 10 · RICHEST PEOPLE ON EARTH', 0, 24, { font: F.mono, weight: 700, size: 62, tracking: 0.1, color: P.sol, align: 'center' }); ctx.restore(); ctx.restore(); }
      // our hanger + the planet
      const gx = 960, gy = 600, R = 330; const hookY = lerp(-700, RAIL.hook, g.hang);
      ctx.save(); ctx.translate(gx, hookY); ctx.rotate(swing); ctx.translate(-gx, -hookY);
      const v = { lon: lerp(-58, -48, ln(t, 51.5, 60.3)), lat: 4 }; const pr = MG.geo.proj('ortho', { rotate: [-v.lon, -v.lat, 0], scale: R, translate: [gx, gy] });
      MG.fx.shadow(ctx, MG.path.circle(gx, gy, R), { dx: 30, dy: 40, blur: 50, color: 'rgba(58,43,58,0.4)' });
      MG.geo.sphere(ctx, pr, { fill: '#3A6E9E' }); ctx.save(); MG.geo.clip(ctx, pr, { type: 'Sphere' }); ctx.drawImage(MG.geo.sphereTex('world_relief', pr, {}), 0, 0);
      MG.geo.draw(ctx, pr, S1.hispFC(), { fill: MG.col.a(P.sol, 0.88 * pr01(t, tL.half - 0.1, tL.billion + 0.3)), stroke: 'rgba(120,60,20,0.6)', width: 1 });
      // denim: dresses half the planet (left half), placket with buttons + stitching
      if (g.dress > 0) { const edge = (yy) => gx - R * 1.05 + (R * 1.05) * g.dress + Math.sin(yy * 0.02 + t * 2) * 6 * (1 - g.dress); const cl = new Path2D(); cl.moveTo(gx - R - 10, gy - R - 10); for (let yy = gy - R - 10; yy <= gy + R + 10; yy += 12) cl.lineTo(edge(yy), yy); cl.lineTo(gx - R - 10, gy + R + 10); cl.closePath();
        ctx.save(); ctx.clip(cl); ctx.drawImage(S1.denim(), gx - R - 60, gy - R - 60, R * 2 + 120, R * 2 + 120); ctx.strokeStyle = 'rgba(10,25,50,0.35)'; ctx.lineWidth = 10; for (let k = 0; k < 4; k++) { ctx.beginPath(); ctx.moveTo(gx - R + k * 70, gy - R * 0.9); ctx.quadraticCurveTo(gx - R * 0.6 + k * 60, gy, gx - R + 40 + k * 70, gy + R); ctx.stroke(); } ctx.restore();
        ctx.save(); ctx.strokeStyle = '#F2C35A'; ctx.lineWidth = 3; ctx.setLineDash([12, 9]); ctx.beginPath(); const sp2 = MG.path.trim(Array.from({ length: 40 }, (_, i) => { const yy = gy - R + i * (2 * R / 39); return [edge(yy) - 22, yy]; }), 0, g.seam); sp2.forEach((q, i) => (i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]))); ctx.stroke(); ctx.restore();
        ctx.fillStyle = 'rgba(10,25,50,0.4)'; ctx.fillRect(edge(gy) - 4, gy - R, 6, R * 2);
        for (let b = 0; b < 4; b++) { const k = pr01(t, tL.halfP + b * 0.12, tL.halfP + 0.25 + b * 0.12, 'outBack'); if (k <= 0) continue; const by = gy - R * 0.6 + b * R * 0.4; const bx = edge(by) - 44; ctx.save(); ctx.translate(bx, by); ctx.scale(k, k); ctx.fillStyle = '#E9E2D2'; ctx.beginPath(); ctx.arc(0, 0, 15, 0, TAU); ctx.fill(); ctx.strokeStyle = 'rgba(80,70,50,0.6)'; ctx.lineWidth = 2; ctx.stroke(); ctx.fillStyle = 'rgba(80,70,50,0.7)'; for (const [dx, dy] of [[-4, -4], [4, -4], [-4, 4], [4, 4]]) { ctx.beginPath(); ctx.arc(dx, dy, 2, 0, TAU); ctx.fill(); } ctx.restore(); } }
      const lg = ctx.createRadialGradient(gx - R * 0.35, gy - R * 0.4, R * 0.1, gx, gy, R * 1.02); lg.addColorStop(0, 'rgba(255,245,220,0.25)'); lg.addColorStop(0.6, 'rgba(255,245,220,0)'); lg.addColorStop(1, 'rgba(20,20,50,0.5)'); ctx.fillStyle = lg; ctx.fillRect(gx - R, gy - R, R * 2, R * 2); ctx.restore();
      ctx.strokeStyle = 'rgba(200,225,255,0.6)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(gx, gy, R, 0, TAU); ctx.stroke();
      if (g.hang > 0) { ctx.save(); ctx.translate(gx, hookY); S1.hanger(ctx, R * 0.78, { hy: gy - R - RAIL.hook - 14 }); ctx.restore(); }
      ctx.restore(); ctx.restore();
      // typography
      { const a = 1 - pr01(t, tL.gave - 0.3, tL.gave + 0.1); if (a > 0) { ctx.save(); ctx.globalAlpha = a; const n = Math.round(500 * E.outCubic(ln(t, tL.half, tL.billion + 0.6))); MG.text.draw(ctx, MG.text.count(0, 0, 1, n * 1e6, n * 1e6), 140, 250, { font: F.cond, weight: 900, size: 170, color: P.ink, alpha: pr01(t, tL.half - 0.1, tL.half + 0.2) }); S1.lead(ctx, 'people speak it', 146, 330, t, tL.speak - 0.1, { size: 56 }); ctx.restore(); } }
      { const a = 1 - pr01(t, tL.ranks - 0.2, tL.ranks + 0.2); if (a > 0) { ctx.save(); ctx.globalAlpha = a; S1.lead(ctx, 'a man who dresses', 140, 900, t, tL.man - 0.05, { size: 60 }); S1.key(ctx, 'HALF THE PLANET', 140, 990, t, tL.halfP - 0.05, { size: 86 }); ctx.restore(); } }
      if (t > tL.ranks - 0.1) { S1.lead(ctx, 'ranks among the', 140, 900, t, tL.ranks - 0.05, { size: 60 }); S1.key(ctx, 'TEN RICHEST', 140, 990, t, tL.ten - 0.05, { size: 86 }); S1.lead(ctx, 'on Earth', 700, 990, t, tL.earth - 0.1, { size: 60 }); }
    },
    post: { grade: 'warm', vignette: 0.3, grain: 0.045 },
  };

  // ---- high-speed rail: the clothes rail becomes a railway (whip along the rail), #2 behind China
  S1.trainSprite = (kind) => MG.cache('s1:train:' + kind, 2600, 300, (x, w, h) => {
    const china = kind === 'cn'; const body = china ? '#F4F1EA' : '#F7F3EA', stripe = china ? '#B8322A' : P.solDeep, stripe2 = china ? '#24408E' : P.rojo; const y0 = 70, hh = 170;
    const p = new Path2D(); p.moveTo(0, y0 + 10); p.lineTo(1900, y0 + 10); p.bezierCurveTo(2200, y0 + 14, 2420, y0 + 60, 2560, y0 + hh - 22); p.quadraticCurveTo(2585, y0 + hh - 2, 2520, y0 + hh); p.lineTo(0, y0 + hh); p.closePath();
    const g = x.createLinearGradient(0, y0, 0, y0 + hh); g.addColorStop(0, '#FFFFFF'); g.addColorStop(0.5, body); g.addColorStop(1, '#C9C4BA'); x.fillStyle = g; x.fill(p);
    x.save(); x.clip(p); x.fillStyle = stripe; x.fillRect(0, y0 + hh * 0.62, w, hh * 0.12); x.fillStyle = stripe2; x.fillRect(0, y0 + hh * 0.76, w, hh * 0.05);
    x.fillStyle = 'rgba(30,40,55,0.92)'; for (let i = 0; i < 26; i++) { const wx = 40 + i * 70; if (wx > 1860) break; x.fill(MG.path.rr(wx, y0 + 40, 48, 40, 8)); } x.fill(MG.path.smooth([[1960, y0 + 30], [2200, y0 + 40], [2380, y0 + 80], [2300, y0 + 96], [1980, y0 + 80]], true));
    x.fillStyle = 'rgba(255,255,255,0.25)'; x.fillRect(0, y0 + 16, w, 8); x.strokeStyle = 'rgba(60,60,70,0.4)'; x.lineWidth = 2; for (const dx of [620, 1260]) { x.beginPath(); x.moveTo(dx, y0 + 12); x.lineTo(dx, y0 + hh); x.stroke(); } x.restore();
    x.fillStyle = '#2b2b30'; x.fillRect(0, y0 + hh, 2500, 18); for (const bx of [160, 560, 820, 1220, 1480, 1880, 2180]) { x.beginPath(); x.arc(bx, y0 + hh + 20, 20, 0, TAU); x.arc(bx + 70, y0 + hh + 20, 20, 0, TAU); x.fill(); }
    x.strokeStyle = '#3a3a40'; x.lineWidth = 5; x.beginPath(); x.moveTo(1500, y0 + 10); x.lineTo(1540, y0 - 40); x.lineTo(1600, y0 - 52); x.stroke();
    if (!china) MG.text.draw(x, 'ESPAÑA', 1400, y0 + hh * 0.57, { font: F.grotesk, weight: 800, size: 34, color: P.ink2, tracking: 0.2 }); else MG.text.draw(x, 'CHINA', 1400, y0 + hh * 0.57, { font: F.grotesk, weight: 800, size: 34, color: '#24408E', tracking: 0.2 });
  });
  S1.hills = (seed, col, amp, base) => MG.cache(`s1:hills:${seed}:${col}`, 2400, 600, (x, w, h) => { x.fillStyle = col; x.beginPath(); x.moveTo(0, h); for (let i = 0; i <= w; i += 8) x.lineTo(i, base + MG.fbm(i * 0.0025 + seed, seed, 3) * amp - (seed === 3 && i > 900 && i < 1300 ? 60 : 0)); x.lineTo(w, h); x.closePath(); x.fill(); MG.tex.over(x, 'blotch', { alpha: 0.15, color: '#000', scale: 3 }); });
  S1.trainScene = {
    id: 's01_train', start: 60.35, end: 65.05, transIn: { type: 'whip', dur: 0.5, dir: 'left', smear: 220 },
    init() { S1.trainSprite('es'); S1.trainSprite('cn'); },
    draw(ctx, t) {
      const lt = t - 60.35; const pan = pr01(t, tL.behind - 0.25, tL.china + 0.45, 'inOutCubic'); const camX = pan * 1250; const hh = MG.cam.handheld(t, 2, 71); const rumble = Math.sin(t * 40) * 1.2;
      MG.fx.vgrad(ctx, [[0, '#F8C978'], [0.55, '#F2A33A'], [1, '#E07B24']]); MG.kit.sun(ctx, 1500 - camX * 0.05, 250, 110, t, { corona: 0.5, rays: 0.3 });
      const scroll = (spd, wd) => -MG.mod(lt * spd + camX, wd);
      for (const [seed, col, amp, base, spd, y] of [[3, '#E58A47', 160, 330, 40, 120], [5, '#C8693F', 120, 380, 120, 170], [8, '#9E4E2E', 90, 440, 380, 230]]) { const spr = S1.hills(seed, col, amp, base); const off = scroll(spd, spr.width); ctx.drawImage(spr, off, y); ctx.drawImage(spr, off + spr.width, y); }
      // olive rows (mid-ground)
      ctx.fillStyle = '#6F7A3A'; for (let i = 0; i < 40; i++) { const xx = MG.mod(i * 97 - lt * 700 - camX * 0.6, 2400) - 200; ctx.beginPath(); ctx.ellipse(xx, 720 + (i % 3) * 8, 30, 18, 0, 0, TAU); ctx.fill(); }
      // far track: China's train ahead
      ctx.save(); ctx.translate(0, hh.dy * 0.5); ctx.fillStyle = '#7E3E2A'; ctx.fillRect(0, 790, W, 14); const cs = 0.62; const cnX = 2350 - camX + Math.sin(lt * 0.7) * 10; ctx.save(); ctx.translate(cnX - 2600 * cs, 790 - 300 * cs + 10); ctx.scale(cs, cs); ctx.drawImage(S1.trainSprite('cn'), 0, 0); ctx.restore(); ctx.restore();
      // near track + ballast + our train
      ctx.fillStyle = '#5A3A2C'; ctx.fillRect(0, 990, W, 90); ctx.fillStyle = '#3B2A26'; for (let i = 0; i < 40; i++) { const xx = MG.mod(i * 60 - lt * 2400, 2400) - 100; ctx.fillRect(xx, 994, 26, 10); } const rg = ctx.createLinearGradient(0, 976, 0, 992); rg.addColorStop(0, '#E8ECEF'); rg.addColorStop(1, '#6B7178'); ctx.fillStyle = rg; ctx.fillRect(0, 978, W, 12);
      const esX = 1500 - camX * 0.55 + lerp(-1500, 0, E.outCubic(ln(t, 60.35, 61.1))); ctx.save(); ctx.translate(esX - 2600, 1000 - 300 + 12 + rumble); ctx.drawImage(S1.trainSprite('es'), 0, 0); ctx.restore();
      // catenary poles whizzing (foreground, blurred)
      { const xx = MG.mod(-lt * 4200, 6400) - 300; if (xx > -300 && xx < W + 100) { ctx.save(); ctx.filter = 'blur(10px)'; ctx.fillStyle = 'rgba(42,31,39,0.85)'; ctx.fillRect(xx, 0, 40, H); ctx.restore(); } }
      MG.fx.particles(ctx, { n: 30, seed: 9, t, area: [0, 0, W, 900], vel: [-2600, 0], velJitter: 0.3, life: 1.2, size: [1, 2], color: '#FFF3DC', alpha: 0.5, shape: 'streak', streak: 0.03 });
      // typography
      S1.mono(ctx, 'high-speed rail network', 140, 150, t, tL.hs - 0.05, { size: 26, color: P.ink });
      MG.text.reveal(ctx, '2', 140, 520, t, tL.second - 0.05, { font: F.cond, weight: 900, size: 400, color: P.ink, style: 'rise', by: 'char' }); MG.text.reveal(ctx, 'ND', 330, 300, t, tL.second + 0.05, { font: F.cond, weight: 900, size: 130, color: P.ink, style: 'rise', by: 'char' });
      S1.lead(ctx, 'largest in the world', 336, 380, t, tL.second + 0.25, { size: 54, out: { at: tL.behind - 0.3, style: 'fade' } });
      if (t > tL.behind - 0.2) { S1.lead(ctx, 'behind', 1500, 600, t, tL.behind - 0.05, { size: 60, align: 'right' }); S1.key(ctx, 'CHINA', 1520, 600, t, tL.china - 0.05, { size: 84, color: '#24408E' }); }
      // the tunnel portal swallows the frame at the end (foreground wipe by a real object)
      const tun = pr01(t, 64.55, 65.05, 'inCubic'); if (tun > 0) { const x0 = lerp(W + 50, -300, tun); ctx.fillStyle = '#120E0D'; ctx.fillRect(x0, 0, W + 400, H); ctx.fillStyle = '#8E8A84'; ctx.fillRect(x0 - 90, 0, 90, H); ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.fillRect(x0 - 20, 0, 20, H); }
    },
    post: { grade: 'warm', vignette: 0.28, grain: 0.04, sat: 1.06 },
  };

  // ---- life expectancy: EU countries as slabs, height ∝ life expectancy (Eurostat 2023, approx.)
  const LE = { Spain: 84.0, Italy: 83.8, Malta: 83.6, Sweden: 83.4, Luxembourg: 83.4, France: 83.1, Ireland: 82.6, Portugal: 82.5, Belgium: 82.5, Cyprus: 82.3, Netherlands: 82.2, Denmark: 81.9, Finland: 81.7, Austria: 81.6, Greece: 81.6, Slovenia: 81.5, Germany: 81.2, Czechia: 79.9, Estonia: 78.8, Poland: 78.6, Croatia: 78.6, Slovakia: 77.8, Hungary: 76.9, Lithuania: 76.7, Romania: 76.6, Latvia: 75.9, Bulgaria: 75.8 };
  S1.euScene = {
    id: 's01_eu', start: 65.05, end: 68.35,
    transIn: { type: 'shape', dur: 0.55, ease: 'outCubic', shadow: false, path: (p) => { const w = lerp(120, 3200, p), h = lerp(160, 3600, p); const x = 960, y = 640; const pa = new Path2D(); pa.moveTo(x - w / 2, y + h * 0.4); pa.lineTo(x - w / 2, y - h * 0.1); pa.arc(x, y - h * 0.1, w / 2, Math.PI, 0); pa.lineTo(x + w / 2, y + h * 0.4); pa.closePath(); return pa; } },
    init() { MG.geo.init(); this.pr = MG.geo.proj('conic', { center: [12, 50.5], scale: 1500 }); this.fs = Object.keys(LE).map((n) => ({ n, f: MG.geo.country(n, n === 'Malta' ? '50' : '110') })).filter((o) => o.f).map((o) => ({ ...o, c: this.pr(window.d3.geoCentroid(o.f)), p2: MG.geo.path2d(this.pr, o.f) })); this.fs.sort((a, b) => a.c[1] - b.c[1]);
      this.base = MG.cache('s1:euBase', W, H, (x) => { x.fillStyle = '#1F4E8C'; x.fillRect(0, 0, W, H); const g = x.createRadialGradient(800, 500, 100, 960, 540, 1300); g.addColorStop(0, 'rgba(255,255,255,0.12)'); g.addColorStop(1, 'rgba(0,10,40,0.3)'); x.fillStyle = g; x.fillRect(0, 0, W, H); MG.geo.draw(x, this.pr, MG.geo.land50, { fill: '#2B5C9B', stroke: 'rgba(180,205,235,0.25)', width: 1 }); MG.tex.over(x, 'grain', { alpha: 0.08, blend: 'overlay' }); }); },
    draw(ctx, t) {
      const hh = MG.cam.handheld(t, 2, 81); ctx.save(); MG.cam.apply(ctx, { x: lerp(980, 940, ln(t, 65, 68.4)), y: 560, zoom: lerp(1.06, 1.12, ln(t, 65, 68.4)), dx: hh.dx, dy: hh.dy });
      ctx.drawImage(this.base, 0, 0);
      for (const o of this.fs) { const k = pr01(t, tL.highest - 0.2 + (84 - LE[o.n]) * 0.04, tL.highest + 0.6 + (84 - LE[o.n]) * 0.04, 'outCubic'); const hgt = Math.max(2, (LE[o.n] - 74) * 15 * k); const es = o.n === 'Spain'; const top = es ? P.sol : '#F2E8D5', side = es ? '#9E4E1E' : '#8E9AB0';
        ctx.save(); ctx.translate(10, 14); ctx.fillStyle = 'rgba(5,15,40,0.35)'; ctx.fill(o.p2); ctx.restore();
        const n = Math.max(2, Math.ceil(hgt / 5)); for (let i = 0; i < n; i++) { const yy = -hgt * i / n; ctx.save(); ctx.translate(0, yy); ctx.fillStyle = MG.col.mix(MG.col.shade(side, 0.4), side, i / n); ctx.fill(o.p2); ctx.strokeStyle = ctx.fillStyle; ctx.lineWidth = 3; ctx.stroke(o.p2); ctx.restore(); }
        ctx.save(); ctx.translate(0, -hgt); ctx.fillStyle = top; ctx.fill(o.p2); ctx.strokeStyle = es ? '#7E3E1A' : 'rgba(40,50,80,0.5)'; ctx.lineWidth = 1.2; ctx.stroke(o.p2); ctx.restore(); }
      // Spain's height marker
      const es = this.fs.find((o) => o.n === 'Spain'); const k = pr01(t, tL.eu - 0.3, tL.eu + 0.3); if (es && k > 0) { const hgt = (LE.Spain - 74) * 15; const x = es.c[0], y = es.c[1] - hgt; ctx.save(); ctx.globalAlpha = k; ctx.strokeStyle = P.cal; ctx.lineWidth = 2; ctx.setLineDash([6, 6]); ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - 200, y - 150); ctx.lineTo(x - 300, y - 150); ctx.stroke(); ctx.restore(); MG.text.reveal(ctx, 'Nº1', x - 310, y - 120, t, tL.highest + 0.1, { font: F.cond, weight: 900, size: 190, color: P.sol, style: 'rise', by: 'char', align: 'right' }); }
      ctx.restore();
      S1.mono(ctx, 'life expectancy · EU', 140, 150, t, tL.highest - 0.1, { size: 26, color: P.cal });
      S1.lead(ctx, 'the highest in the', 1060, 880, t, tL.highest - 0.05, { size: 60, color: P.cal }); S1.key(ctx, 'EUROPEAN UNION', 1060, 975, t, tL.eu - 0.05, { size: 92, color: P.cal });
    },
    post: { grade: 'neutral', vignette: 0.32, grain: 0.04 },
  };

  // ---- the most decorated club in history: a real 3D silver trophy under a stadium spotlight
  S1.trophyScene = {
    id: 's01_trophy', start: 68.35, end: 72.15, transIn: { type: 'dip', dur: 0.5, color: '#0B0E1A' },
    init() {
      const T = THREE; const sc = (this.sc = new T.Scene()); sc.environment = MG.three.env();
      const cam = (this.cam = new T.PerspectiveCamera(30, 16 / 9, 0.1, 100));
      const prof = [[0.0, 0], [0.62, 0], [0.62, 0.08], [0.55, 0.1], [0.55, 0.22], [0.46, 0.25], [0.44, 0.34], [0.3, 0.38], [0.16, 0.5], [0.12, 0.7], [0.14, 0.9], [0.22, 1.02], [0.42, 1.2], [0.56, 1.45], [0.62, 1.75], [0.6, 2.0], [0.66, 2.08], [0.64, 2.12], [0.56, 2.06], [0.5, 1.8], [0.0, 1.8]].map(([r, y]) => new T.Vector2(r, y));
      const silver = new T.MeshStandardMaterial({ color: 0xd9dde2, metalness: 1, roughness: 0.16, envMapIntensity: 1.25 });
      const cup = new T.Mesh(new T.LatheGeometry(prof, 96), silver); const grp = (this.grp = new T.Group()); grp.add(cup);
      for (const sg of [-1, 1]) { const curve = new T.CatmullRomCurve3([new T.Vector3(sg * 0.56, 1.9, 0), new T.Vector3(sg * 1.15, 2.05, 0), new T.Vector3(sg * 1.3, 1.55, 0), new T.Vector3(sg * 1.0, 1.05, 0), new T.Vector3(sg * 0.42, 1.12, 0)]); grp.add(new T.Mesh(new T.TubeGeometry(curve, 64, 0.07, 16, false), silver)); }
      const plinth = new T.Mesh(new T.CylinderGeometry(0.95, 1.05, 0.5, 64), new T.MeshStandardMaterial({ color: 0x1a1d28, roughness: 0.4, metalness: 0.2 })); plinth.position.y = -0.25; grp.add(plinth); sc.add(grp);
      const key = new T.SpotLight(0xffe0b0, 120, 30, 0.5, 0.6); key.position.set(-3, 7, 4); key.target = cup; sc.add(key); const rim = new T.DirectionalLight(0x9fb8ff, 2.2); rim.position.set(3, 2, -4); sc.add(rim); sc.add(new T.AmbientLight(0x404a70, 0.6));
    },
    draw(ctx, t) {
      const lt = t - 68.35; MG.fx.vgrad(ctx, [[0, '#0B0E1A'], [0.6, '#151B33'], [1, '#0B0E1A']]);
      const spot = pr01(t, 68.45, 68.9, 'outCubic');
      // stadium floodlight beams + spotlight pool
      ctx.save(); ctx.globalCompositeOperation = 'screen'; ctx.globalAlpha = spot; MG.fx.rays(ctx, 760, -200, { n: 7, len: 1500, spread: 0.45, dir: Math.PI / 2 + 0.25, alpha: 0.1, t, color: '#FFE7C0', width: 0.06, seed: 5 }); ctx.restore();
      MG.fx.glow(ctx, 1180, 980, 700 * spot, '#FFD9A0', 0.35 * spot);
      this.grp.rotation.y = lt * 0.5 - 0.4; const d = lerp(9.2, 7.6, E.out(ln(t, 68.35, 72.2))); this.cam.position.set(Math.sin(0.2) * d, 2.2, Math.cos(0.2) * d); this.cam.lookAt(0, 1.05, 0); this.cam.setViewOffset(1920, 1080, -260, 0, 1920, 1080);
      const c = MG.three.render(this.sc, this.cam, { slot: 0, exposure: 1.1 }); ctx.save(); ctx.globalAlpha = spot; ctx.drawImage(c, 0, 0); ctx.restore();
      // paper confetti in saffron & cal, falling through the light
      MG.fx.particles(ctx, { n: 70, seed: 33, t, area: [500, -200, 1400, 200], vel: [20, 260], velJitter: 0.5, life: 3.2, size: [5, 11], colors: [P.sol, P.cal, P.solLight, '#FFFFFF'], alpha: 0.9 * spot, shape: 'square', rot: 5, drift: 60 });
      S1.lead(ctx, 'the most', 140, 420, t, tL.most - 0.05, { size: 66, color: P.cal }); S1.key(ctx, 'DECORATED', 140, 540, t, tL.decorated - 0.05, { size: 120, color: P.cal }); S1.key(ctx, 'CLUB', 140, 660, t, tL.club - 0.05, { size: 120, color: P.sol }); S1.lead(ctx, 'in history', 450, 660, t, tL.history - 0.05, { size: 66, color: P.cal });
    },
    post: { grade: 'cool', vignette: 0.45, grain: 0.05, bloom: 0.2, bloomThreshold: 0.75 },
  };

  // ================================================================ CH5 · 72.15–103.2 · "BUT IS EVERYTHING REALLY THAT SUNNY?" — the price, in the shade
  const tS = { but: Tw('But', 72.21), really: Tw('really', 73.17), sunny: Tw('sunny', 73.81), in2013: Tw('2013', 75.01), one4: Tw('one', 76.29), four: Tw('four', 76.81), unemployed: Tw('unemployed', 77.89), young: Tw('young', 79.33), one2: Tw('one', 80.53), two: Tw('two', 80.93), spainB: Tw('Spain', 81.89), lowest: Tw('lowest', 83.25), birth: Tw('birth', 83.73), entire: Tw('Entire', 84.77), provinces: Tw('provinces', 85.41), interior: Tw('interior', 86.41), emptying: Tw('emptying', 87.25), every: Tw('Every', 88.37), part: Tw('part', 89.89), breakT: Tw('break', 91.09), away: Tw('away', 91.33), youngP: Tw('Young', 92.21), rent: Tw('rent', 93.17), hometowns: Tw('hometowns', 94.09), because: Tw('because', 94.93), rented: Tw('rented', 96.29), tourists: Tw('tourists', 96.77), instead: Tw('instead', 97.53), fall: Tw('fall', 98.73), y2026: Tw('2026', 99.09), issue: Tw('issue', 101.09), brought: Tw('brought', 101.53), down: Tw('down', 101.89), government: Tw('government', 102.37) };
  S1.tS = tS;
  /** larger paper-cut people (front view, feet at 0,0, ~300 units tall): kind work0..3 | young0..1 */
  S1.personPath = (x, kind) => {
    const P2 = (pts) => MG.path.smooth(pts, true, 0.45); const parts = []; const add = (p, c) => parts.push([p, c]);
    const skin = { work0: '#C98E68', work1: '#E1AA84', work2: '#B97C5A', work3: '#EDB892', young0: '#D49A74', young1: '#9C6848' }[kind];
    const C = { work0: { top: '#F4EFE6', vest: '#1E1A1D', legs: '#2B2B33' }, work1: { top: '#6E7F8E', vest: '#F2A33A', legs: '#3E4A5A' }, work2: { top: '#E9E4DA', vest: '#4E5562', legs: '#3B414C' }, work3: { top: '#F4EFE6', vest: '#4E7A4A', legs: '#2C3442' }, young0: { top: '#1F4E8C', vest: '#1F4E8C', legs: '#3A6E9E' }, young1: { top: '#F0735A', vest: '#F0735A', legs: '#2B2B33' } }[kind];
    add(P2([[-26, -172], [-6, -172], [-8, -10], [-30, -6], [-30, -90]]), C.legs); add(P2([[6, -172], [26, -172], [30, -90], [30, -6], [8, -10]]), C.legs);
    add(P2([[-34, -8], [-6, -10], [-4, 2], [-38, 2]]), '#1E1A1D'); add(P2([[6, -10], [34, -8], [38, 2], [4, 2]]), '#1E1A1D');
    add(P2([[-40, -250], [40, -250], [44, -200], [34, -160], [-34, -160], [-44, -200]]), C.top);
    if (kind === 'young0') add(P2([[-42, -252], [42, -252], [46, -170], [-46, -170]]), C.top);
    add(P2([[-44, -248], [-34, -244], [-40, -168], [-48, -150], [-56, -156], [-52, -200]]), C.top); add(P2([[44, -248], [34, -244], [40, -168], [48, -150], [56, -156], [52, -200]]), C.top);
    add(MG.path.circle(-52, -150, 8), skin); add(MG.path.circle(52, -150, 8), skin);
    add(MG.path.rr(-9, -268, 18, 22, 6), skin); add(MG.path.ellipse(0, -292, 23, 28), skin);
    if (kind === 'work0') { add(P2([[-34, -246], [34, -246], [30, -170], [-30, -170]]), C.vest); add(MG.path.rr(-30, -176, 60, 130, 6), '#F4EFE6'); add(P2([[-10, -250], [0, -244], [10, -250], [10, -240], [0, -244], [-10, -240]]), '#1E1A1D'); add(MG.path.ellipse(64, -152, 34, 7), '#BFC3C9'); add(P2([[-20, -306], [-16, -322], [16, -322], [22, -306], [0, -312]]), '#2B1F1D'); }
    if (kind === 'work1') { add(P2([[-38, -248], [38, -248], [36, -164], [-36, -164]]), C.vest); add(MG.path.rr(-38, -215, 76, 7, 2), '#E9E4DA'); add(MG.path.rr(-38, -185, 76, 7, 2), '#E9E4DA'); add(MG.path.ellipse(0, -310, 30, 16), '#F6D06F'); add(MG.path.rr(-34, -304, 68, 8, 3), '#E0B44A'); }
    if (kind === 'work2') { add(P2([[-34, -248], [-6, -248], [0, -200], [-30, -165]]), C.vest); add(P2([[34, -248], [6, -248], [0, -200], [30, -165]]), C.vest); add(P2([[-5, -246], [5, -246], [7, -196], [0, -186], [-7, -196]]), P.rojoDeep); add(MG.path.rr(52, -148, 40, 30, 4), '#5a3a2a'); add(P2([[-21, -300], [-18, -320], [18, -320], [21, -300], [12, -312], [-12, -312]]), '#3B2A26'); }
    if (kind === 'work3') { add(P2([[-32, -232], [32, -232], [36, -150], [-36, -150]]), C.vest); add(P2([[-24, -304], [-20, -322], [20, -322], [24, -304]]), '#2B1F1D'); add(MG.path.rr(-26, -322, 52, 10, 4), C.vest); add(MG.path.circle(0, -334, 10), '#2B1F1D'); }
    if (kind === 'young0') { add(P2([[-44, -250], [-60, -240], [-66, -170], [-46, -166]]), '#14335F'); add(P2([[-26, -300], [-22, -326], [0, -332], [22, -326], [26, -300], [14, -316], [-14, -316]]), '#1E1A1D'); add(P2([[-26, -272], [-30, -300], [0, -316], [30, -300], [26, -272], [0, -282]]), '#183E70'); }
    if (kind === 'young1') { add(P2([[-24, -280], [-28, -320], [0, -334], [28, -320], [26, -272], [30, -250], [16, -270]]), '#1E1A1D'); add(MG.path.rr(-30, -305, 8, 22, 4), '#B8322A'); add(MG.path.rr(22, -305, 8, 22, 4), '#B8322A'); add(P2([[44, -230], [60, -226], [64, -150], [44, -150]]), '#E3CC9A'); }
    // faces: simple features for a 3D read
    add(MG.path.ellipse(-8, -294, 2.6, 3.4), '#1E1A1D'); add(MG.path.ellipse(9, -294, 2.6, 3.4), '#1E1A1D'); add(MG.path.rr(-6, -278, 13, 3, 1.5), 'rgba(90,30,30,0.6)');
    for (const [p, c] of parts) { x.fillStyle = c; x.fill(p); }
  };
  S1.person = (kind) => MG.cache('s1:person:' + kind, 300, 760, (x, w, h) => { const off = MG.canvas(w, h); const o = off.getContext('2d'); o.translate(w / 2, h - 16); o.scale(2, 2); S1.personPath(o, kind);
    for (let a = 0; a < 12; a++) x.drawImage(off, Math.cos(a / 12 * TAU) * 5, Math.sin(a / 12 * TAU) * 5); x.globalCompositeOperation = 'source-in'; x.fillStyle = '#FBF4E6'; x.fillRect(0, 0, w, h); x.globalCompositeOperation = 'source-over'; x.drawImage(off, 0, 0);
    x.globalCompositeOperation = 'source-atop'; x.fillStyle = 'rgba(42,26,52,0.3)'; x.fillRect(w / 2 + 8, 0, w, h); x.fillStyle = 'rgba(255,236,200,0.16)'; x.fillRect(0, 0, w / 2 - 20, h); x.globalCompositeOperation = 'source-over'; });

  // ---- the bullring (plaza de toros): SOL and SOMBRA are its seat sections
  const ARENA = { cx: 960, cy: 700, rx: 700, ry: 270, hb: 44, S: 2 };
  S1.arenaArt = (shade) => MG.cache('s1:arena:' + (shade ? 'sh' : 'lit'), W * ARENA.S, H * ARENA.S, (x) => { x.scale(ARENA.S, ARENA.S); const A = ARENA; const { cx, cy, rx, ry, hb } = A;
    const sh = (c) => (shade ? MG.col.shade(c, 0.52, '#2a1e3c') : c);
    // stands: outer tiers first
    for (let k = 7; k >= 1; k--) { const ey = cy - hb - 26 - k * 19, erx = rx + 46 + k * 60, ery = ry + 22 + k * 9; x.fillStyle = sh(k % 2 ? '#E9DCC4' : '#D8C6A6'); x.beginPath(); x.ellipse(cx, ey, erx, ery, 0, 0, TAU); x.fill(); x.strokeStyle = sh('rgba(110,80,60,0.35)'); x.lineWidth = 2; x.stroke(); }
    // arcade gallery at the top (neo-Mudéjar brick arches)
    { const ey = cy - hb - 26 - 8 * 19, erx = rx + 46 + 8 * 60, ery = ry + 22 + 8 * 9; x.save(); x.fillStyle = sh('#B5643E'); x.beginPath(); x.ellipse(cx, ey, erx, ery, 0, Math.PI, TAU); x.ellipse(cx, ey - 62, erx, ery, 0, TAU, Math.PI, true); x.closePath(); x.fill(); x.fillStyle = sh('#8E4A2F'); x.beginPath(); x.ellipse(cx, ey - 62, erx, ery, 0, Math.PI, TAU); x.ellipse(cx, ey - 74, erx, ery, 0, TAU, Math.PI, true); x.closePath(); x.fill(); x.restore();
      for (let i = 0; i <= 60; i++) { const a = Math.PI + (i / 60) * Math.PI; const px = cx + Math.cos(a) * erx, py = ey + Math.sin(a) * ery; const s2 = 0.35 + 0.65 * Math.abs(Math.sin(a)); x.fillStyle = sh('#3E2420'); x.beginPath(); x.moveTo(px - 12 * s2, py - 8); x.lineTo(px - 12 * s2, py - 40); x.arc(px, py - 40, 12 * s2, Math.PI, 0); x.lineTo(px + 12 * s2, py - 8); x.closePath(); x.fill(); } }
    // callejón + barrier (red planks with white rail)
    x.fillStyle = sh('#7E5A44'); x.beginPath(); x.ellipse(cx, cy - hb - 18, rx + 44, ry + 20, 0, 0, TAU); x.fill();
    x.fillStyle = sh('#A83A2C'); x.beginPath(); x.ellipse(cx, cy - hb, rx + 6, ry + 2, 0, 0, TAU); x.fill();
    x.save(); x.beginPath(); x.ellipse(cx, cy - hb, rx + 6, ry + 2, 0, 0, TAU); x.clip(); x.strokeStyle = sh('rgba(60,15,10,0.45)'); x.lineWidth = 2; for (let i = 0; i < 90; i++) { const a = Math.PI + i / 90 * Math.PI; const px = cx + Math.cos(a) * (rx + 6); x.beginPath(); x.moveTo(px, cy - hb + Math.sin(a) * (ry + 2)); x.lineTo(px, cy + Math.sin(a) * ry + 4); x.stroke(); } x.restore();
    x.strokeStyle = sh('#F4EFE6'); x.lineWidth = 5; x.beginPath(); x.ellipse(cx, cy - hb, rx + 6, ry + 2, 0, Math.PI, TAU); x.stroke();
    // section signs painted on the barrier: SOL (east / right) · SOMBRA (west / left)
    MG.text.draw(x, 'SOMBRA', cx - 330, cy - ry - 4, { font: F.grotesk, weight: 800, size: 30, color: sh('#F4EFE6'), align: 'center', tracking: 0.3 });
    MG.text.draw(x, 'SOL', cx + 330, cy - ry - 4, { font: F.grotesk, weight: 800, size: 30, color: sh('#F4EFE6'), align: 'center', tracking: 0.3 });
    // the sand
    const sg = x.createRadialGradient(cx - 120, cy - 60, 50, cx, cy, rx); sg.addColorStop(0, sh('#EBC88E')); sg.addColorStop(1, sh('#D9A866')); x.fillStyle = sg; x.beginPath(); x.ellipse(cx, cy, rx, ry, 0, 0, TAU); x.fill();
    x.save(); x.beginPath(); x.ellipse(cx, cy, rx, ry, 0, 0, TAU); x.clip(); MG.tex.over(x, 'grain', { alpha: 0.25 }); x.strokeStyle = sh('rgba(255,250,240,0.55)'); x.lineWidth = 3; for (const k of [0.62, 0.8]) { x.beginPath(); x.ellipse(cx, cy, rx * k, ry * k, 0, 0, TAU); x.stroke(); } x.strokeStyle = sh('rgba(140,90,40,0.18)'); x.lineWidth = 1.5; for (let i = 0; i < 40; i++) { x.beginPath(); x.ellipse(cx, cy, rx * (0.1 + i * 0.022), ry * (0.1 + i * 0.022), 0, 0.2 + i, 1.4 + i); x.stroke(); } x.restore();
    // near barrier edge + front row (bottom)
    x.fillStyle = sh('#A83A2C'); x.beginPath(); x.ellipse(cx, cy + 14, rx + 14, ry + 10, 0, 0.05, Math.PI - 0.05); x.ellipse(cx, cy, rx, ry, 0, Math.PI - 0.05, 0.05, true); x.closePath(); x.fill();
    if (!shade) { x.fillStyle = 'rgba(255,248,230,0.0)'; }
  });
  const arenaD = (t) => K(t, [[72.15, 110], [tS.really, 150], [tS.sunny + 0.6, 760, 'inOutCubic'], [tS.unemployed - 0.25, 770, 'soft'], [tS.unemployed + 0.25, 890, 'inOutCubic'], [tS.one2 - 0.2, 895, 'soft'], [tS.two + 0.25, 975, 'inOutCubic'], [82, 980, 'soft']]);
  const arenaCam = (t) => K(t, [[72.15, { x: 960, y: 540, z: 1.0 }], [tS.sunny, { x: 940, y: 545, z: 1.03 }, 'soft'], [tS.in2013 + 0.3, { x: 1060, y: 640, z: 1.45 }, 'cam'], [tS.unemployed + 0.6, { x: 1090, y: 640, z: 1.5 }, 'soft'], [tS.young + 0.2, { x: 1190, y: 650, z: 1.9 }, 'cam'], [82, { x: 1200, y: 648, z: 1.97 }, 'soft']]);
  const WORK = [['work1', 1080], ['work0', 1240], ['work2', 1400], ['work3', 1560]], YOUNG = [['young0', 1182], ['young1', 1352]]; const ARY = 760;
  S1.arenaScene = {
    id: 's01_arena', start: 72.15, end: 81.85, transIn: { type: 'blur', dur: 0.55, amount: 30 },
    init() { S1.arenaArt(false); S1.arenaArt(true); for (const k of ['work0', 'work1', 'work2', 'work3', 'young0', 'young1']) { S1.person(k); S1.tinted(S1.person(k), '#3A2B4A', 'p' + k); } },
    draw(ctx, t) {
      const A = ARENA; const d = arenaD(t); const c = arenaCam(t); const hh = MG.cam.handheld(t, 2.2, 91); const camo = { x: c.x, y: c.y, zoom: c.z, dx: hh.dx, dy: hh.dy, rot: hh.rot };
      // sky + the sun sinking behind the west stands
      MG.fx.vgrad(ctx, [[0, '#F6CF8E'], [1, '#F2A33A']]);
      ctx.save(); MG.cam.apply(ctx, camo); const sunY = lerp(70, 330, pr01(t, tS.really, tS.sunny + 0.8, 'inOutCubic')); MG.fx.glow(ctx, 420, sunY, 520, '#FFE2A8', 0.5); MG.kit.sun(ctx, 420, sunY, 110, t, { rays: 0.45, corona: 0.7 });
      ctx.drawImage(S1.arenaArt(false), 0, 0, W, H);
      ctx.restore();
      // shade pass through the shadow mask (stands west of the divide + crescent on the sand)
      const M = MG.scratch(3); const m = M.getContext('2d'); MG.reset(m); m.clearRect(0, 0, W, H); m.save(); MG.cam.apply(m, camo); m.filter = 'blur(3px)';
      const bx = A.cx + d / 2; m.fillStyle = '#000'; m.beginPath(); m.moveTo(-2000, -2000); m.lineTo(bx + 900 * 0.35, -2000); m.lineTo(bx + (A.cy - A.ry - (-2000)) * 0, A.cy - A.ry); m.lineTo(bx, 3000); m.lineTo(-2000, 3000); m.closePath();
      m.beginPath(); m.moveTo(-3000, -3000); m.lineTo(bx + 0.35 * (A.cy - A.ry + 3000), -3000); m.lineTo(bx, A.cy - A.ry); m.lineTo(bx, 4000); m.lineTo(-3000, 4000); m.closePath(); m.fill();
      m.globalCompositeOperation = 'destination-out'; m.beginPath(); m.ellipse(A.cx, A.cy, A.rx, A.ry, 0, 0, TAU); m.fill();
      m.globalCompositeOperation = 'source-over'; m.beginPath(); m.ellipse(A.cx, A.cy, A.rx, A.ry, 0, 0, TAU); m.fill();
      m.globalCompositeOperation = 'destination-out'; m.beginPath(); m.ellipse(A.cx + d, A.cy, A.rx, A.ry, 0, 0, TAU); m.fill(); m.restore();
      const Sb = MG.scratch(4); const sx = Sb.getContext('2d'); MG.reset(sx); sx.clearRect(0, 0, W, H); sx.save(); MG.cam.apply(sx, camo); sx.drawImage(S1.arenaArt(true), 0, 0, W, H); sx.restore(); sx.globalCompositeOperation = 'destination-in'; sx.drawImage(M, 0, 0); sx.globalCompositeOperation = 'source-over'; ctx.drawImage(Sb, 0, 0);
      // people standing on the sand
      const inShade = (px, py) => { const u = (px - A.cx - d) / A.rx, v = (py - A.cy) / A.ry; return u * u + v * v > 1; }; 
      ctx.save(); MG.cam.apply(ctx, camo);
      const drawP = (kind, px, py, up, idx) => { if (up <= 0.01) return; const spr = S1.person(kind); const sc = 0.5; const shd = inShade(px + 26, py); const part = !shd && inShade(px - 26, py);
        if (!shd) { const sh2 = S1.tinted(spr, '#3A2B4A', 'p' + kind); ctx.save(); ctx.globalAlpha = 0.32; ctx.translate(px, py); ctx.transform(sc, 0, -sc * 1.15 * up, -sc * 0.1 * up, 0, 0); ctx.drawImage(sh2, -spr.width / 2, -spr.height + 16); ctx.restore(); }
        ctx.save(); ctx.translate(px, py); ctx.scale(sc, sc * up); ctx.drawImage(spr, -spr.width / 2, -spr.height + 16); if (shd || part) { ctx.globalAlpha = shd ? 0.62 : 0.4; ctx.drawImage(S1.tinted(spr, '#2a1e3c', 'q' + kind), -spr.width / 2, -spr.height + 16); } ctx.restore(); };
      const wUp = pr01(t, tS.in2013 - 0.2, tS.in2013 + 0.4, 'outBack') * (1 - pr01(t, tS.young - 0.5, tS.young - 0.1, 'inCubic'));
      WORK.forEach(([k, px], i) => drawP(k, px, ARY, pr01(t, tS.one4 - 0.3 + i * 0.12, tS.one4 + 0.15 + i * 0.12, 'outBack') * (wUp > 0 ? 1 : 0) * (1 - pr01(t, tS.young - 0.5, tS.young - 0.1, 'inCubic')), i));
      YOUNG.forEach(([k, px], i) => drawP(k, px, ARY, pr01(t, tS.young - 0.15 + i * 0.12, tS.young + 0.3 + i * 0.12, 'outBack'), i));
      // "2013" painted in white on the sand (in the shade side)
      { const k = pr01(t, tS.in2013 - 0.1, tS.in2013 + 0.5, 'linear'); const a = 1 - pr01(t, tS.young - 0.5, tS.young - 0.1); if (k > 0 && a > 0) { ctx.save(); ctx.globalAlpha = a; ctx.translate(760, 840); ctx.transform(1, 0, -0.22, 0.52, 0, 0); ctx.beginPath(); ctx.rect(-300, -260, 600 * k, 320); ctx.clip(); MG.text.draw(ctx, '2013', 0, 0, { font: F.cond, weight: 900, size: 230, color: 'rgba(250,244,232,0.9)', align: 'center' }); ctx.restore(); } }
      ctx.restore();
      // typography
      { const a = 1 - pr01(t, tS.in2013 - 0.3, tS.in2013); if (a > 0) { ctx.save(); ctx.globalAlpha = a; S1.lead(ctx, 'but is everything really', 150, 840, t, tS.but - 0.05, { size: 62, color: P.cal }); S1.key(ctx, 'THAT SUNNY?', 150, 960, t, tS.sunny - 0.1, { size: 120, color: P.cal, font: F.display, weight: 900 }); ctx.restore(); } }
      { const a = 1 - pr01(t, tS.young - 0.4, tS.young - 0.1); if (a > 0 && t > tS.one4 - 0.2) { ctx.save(); ctx.globalAlpha = a; MG.text.reveal(ctx, '1 IN 4', 150, 300, t, tS.one4 - 0.05, { font: F.cond, weight: 900, size: 200, color: P.cal, style: 'rise', by: 'word', stagger: 0.18 }); S1.lead(ctx, 'unemployed', 156, 380, t, tS.unemployed - 0.05, { size: 60, color: P.cal }); ctx.restore(); } }
      if (t > tS.young - 0.2) { MG.text.reveal(ctx, '1 IN 2', 150, 300, t, tS.one2 - 0.05, { font: F.cond, weight: 900, size: 200, color: P.cal, style: 'rise', by: 'word', stagger: 0.18 }); S1.lead(ctx, 'young people', 156, 380, t, tS.young - 0.1, { size: 60, color: P.cal }); }
    },
    post: (t) => ({ grade: 'warm', vignette: 0.4, grain: 0.05, sat: lerp(1.05, 0.85, pr01(t, tS.really, tS.sunny + 0.8)), contrast: 1.06 }),
  };

  // ---- birth rate: an empty pram rolls down Spain's fertility curve (births per woman, INE)
  const TFR = [[1975, 2.8], [1978, 2.55], [1980, 2.22], [1983, 1.8], [1985, 1.64], [1988, 1.45], [1990, 1.36], [1993, 1.27], [1995, 1.17], [1998, 1.15], [2000, 1.22], [2003, 1.3], [2005, 1.33], [2008, 1.44], [2010, 1.37], [2013, 1.27], [2016, 1.34], [2018, 1.26], [2020, 1.19], [2023, 1.12]];
  const CH = { x0: 700, x1: 3400, yv: (v) => 1150 - v * 290 }; CH.xy = (yr) => lerp(CH.x0, CH.x1, (yr - 1975) / 48);
  CH.pts = () => CH._p || (CH._p = MG.path.spline(TFR.map(([y, v]) => [CH.xy(y), CH.yv(v)]), 10));
  S1.pram = () => MG.cache('s1:pram', 360, 330, (x, w, h) => { x.translate(40, 10);
    x.strokeStyle = '#3B3236'; x.lineWidth = 7; x.lineCap = 'round'; x.beginPath(); x.moveTo(250, 120); x.lineTo(300, 40); x.lineTo(320, 40); x.stroke();
    const body = MG.path.smooth([[20, 120], [260, 120], [250, 190], [200, 228], [70, 228], [26, 180]], true, 0.45); MG.fx.volume(x, body, [20, 120, 240, 108], { color: '#EDE3D0', shade: 0.4, hi: 0.3, outline: '#3B3236', outlineW: 3 });
    const hood = new Path2D(); hood.moveTo(30, 124); hood.bezierCurveTo(20, 20, 130, 0, 168, 120); hood.closePath(); MG.fx.volume(x, hood, [20, 10, 150, 115], { color: '#3A4E6E', shade: 0.45, hi: 0.25, outline: '#1E1A1D', outlineW: 3 }); x.strokeStyle = 'rgba(255,255,255,0.25)'; x.lineWidth = 2; for (const k of [0.35, 0.6, 0.85]) { x.beginPath(); x.moveTo(30 + 8 * k, 124); x.bezierCurveTo(30 + 20 * k, 30 + 60 * (1 - k), 120 * k + 40, 20 + 40 * (1 - k), 168 * k + 20, 120); x.stroke(); }
    x.strokeStyle = '#3B3236'; x.lineWidth = 4; x.beginPath(); x.moveTo(90, 228); x.lineTo(70, 262); x.moveTo(190, 228); x.lineTo(214, 262); x.stroke(); });
  S1.wheel = (ctx, x, y, r, rot) => { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.strokeStyle = '#3B3236'; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(0, 0, r, 0, TAU); ctx.stroke(); ctx.lineWidth = 2; for (let i = 0; i < 8; i++) { const a = i / 8 * TAU; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); ctx.stroke(); } ctx.fillStyle = '#3B3236'; ctx.beginPath(); ctx.arc(0, 0, 4, 0, TAU); ctx.fill(); ctx.restore(); };
  S1.birthScene = {
    id: 's01_birth', start: 81.85, end: 84.72,
    init() { CH.pts(); S1.pram(); this.bg = MG.cache('s1:chartbg', 4200, 1700, (x, w, h) => { x.fillStyle = '#D8D1CA'; x.fillRect(0, 0, w, h); MG.tex.over(x, 'fibers', { alpha: 0.6 }); const pts = CH.pts(); for (const [k, col] of [[60, '#B3A59A'], [26, '#9C8C80'], [0, '#857467']]) { x.fillStyle = col; x.beginPath(); x.moveTo(pts[0][0], h); pts.forEach((p) => x.lineTo(p[0], p[1] + k)); x.lineTo(pts[pts.length - 1][0], h); x.closePath(); x.fill(); }
      x.strokeStyle = 'rgba(30,26,29,0.18)'; x.lineWidth = 1.5; x.setLineDash([4, 8]); for (const v of [1, 2, 3]) { x.beginPath(); x.moveTo(0, CH.yv(v)); x.lineTo(w, CH.yv(v)); x.stroke(); } x.setLineDash([]);
      for (const yr of [1975, 1990, 2000, 2010, 2023]) MG.text.draw(x, String(yr), CH.xy(yr), 1110, { font: F.mono, weight: 700, size: 26, color: 'rgba(240,235,225,0.85)', align: 'center' }); MG.tex.over(x, 'grain', { alpha: 0.12 }); }); },
    draw(ctx, t) {
      const pts = CH.pts(); const u = E.inOutSine(ln(t, 81.95, 84.45)); const pos = MG.path.along(pts, u); const camX = clamp(pos[0] + 120, 960, 4200 - 960); const zoom = lerp(1, 0.6, pr01(t, 83.7, 84.72, 'inOutCubic')); const cx = lerp(camX, 2080, pr01(t, 83.7, 84.72, 'inOutCubic'));
      const hh = MG.cam.handheld(t, 2.5, 101); ctx.fillStyle = '#D8D1CA'; ctx.fillRect(0, 0, W, H); ctx.save(); MG.cam.apply(ctx, { x: cx, y: lerp(600, 700, pr01(t, 83.7, 84.72, 'inOutCubic')), zoom, dx: hh.dx, dy: hh.dy }); ctx.drawImage(this.bg, 0, 0);
      MG.fx.line(ctx, pts, { color: P.ink, width: 4, progress: 1 });
      // value labels
      MG.text.draw(ctx, '2.8', CH.xy(1975) - 40, CH.yv(2.8) - 150, { font: F.cond, weight: 900, size: 90, color: P.ink }); if (t > 83.2) MG.text.draw(ctx, '1.1', CH.xy(2023) - 260, CH.yv(1.12) - 190, { font: F.cond, weight: 900, size: 110, color: P.rojo, align: 'right', alpha: pr01(t, 83.2, 83.6) });
      // the pram rolling downhill (wheels turn with the distance)
      const ang = pos[2]; const dist = u * 3200; ctx.save(); ctx.translate(pos[0], pos[1]); ctx.rotate(ang); ctx.translate(0, -6); const spr = S1.pram(); ctx.drawImage(spr, -200, -spr.height + 46); S1.wheel(ctx, -95, 22, 34, dist / 34); S1.wheel(ctx, 25, 22, 34, dist / 34); ctx.restore();
      ctx.restore();
      S1.mono(ctx, 'children per woman · Spain', 1780, 150, t, 82.0, { size: 26, color: P.ink2, align: 'right' });
      S1.lead(ctx, "one of Europe's lowest", 140, 830, t, Tw('one', 82.53) - 0.05, { size: 60, color: P.ink }); S1.key(ctx, 'BIRTH RATES', 140, 940, t, tS.birth - 0.05, { size: 100, color: P.ink });
    },
    post: { grade: 'bleach', sat: 0.8, contrast: 1.08, vignette: 0.38, grain: 0.05 },
  };
  // ---- provinces emptying; then Catalonia cracks off
  const EMPTY = ['42', '44', '16', '49', '34', '05', '40', '09', '24', '37', '10', '22', '13'];
  S1.provScene = {
    id: 's01_prov', start: 84.72, end: 92.15, transIn: { type: 'whip', dur: 0.45, dir: 'up', smear: 160 },
    init() { MG.geo.init(); const pr = (this.pr = MG.kit.view('iberia')); this.provs = MG.geo.provinces.features.filter((f) => !/Canarias|Palmas|Tenerife/.test(f.properties.name) && f.id !== '35' && f.id !== '38').map((f) => ({ f, id: f.id, p2: MG.geo.path2d(pr, f), bb: MG.geo.bbox(pr, f), em: EMPTY.includes(f.id) }));
      const tj = window.topojson, S = window.MG_DATA.spain; this.catBorder = tj.mesh(S, S.objects.autonomous_regions, (a, b) => a !== b && (/Catalu/.test(a.properties.name) !== /Catalu/.test(b.properties.name)));
      this.cat = MG.geo.region('Catalonia'); this.cat2 = MG.geo.path2d(pr, this.cat); this.catProvs = ['08', '17', '25', '43'];
      this.crack = (() => { const lines = this.catBorder.coordinates; const out = []; for (const l of lines) { const pts = l.map((c) => pr(c)); out.push(pts); } return out; })();
      this.base = MG.cache('s1:provBase', W, H, (x) => { MG.kit.seaBg(x, '#9FB3C2'); for (const n of ['France', 'Portugal', 'Morocco', 'Algeria', 'Andorra', 'Gibraltar']) { const f = MG.geo.country(n, '10'); if (f) MG.geo.draw(x, pr, f, { fill: n === 'Portugal' ? '#E0D8CC' : '#D9D2C6', stroke: 'rgba(58,43,58,0.3)', width: 1 }); } MG.geo.draw(x, pr, MG.geo.country('Spain', '10'), { fill: '#EDE6DA', stroke: 'rgba(30,26,29,0.5)', width: 1.4, shadow: { blur: 16, dy: 8, color: 'rgba(40,20,30,0.25)' } }); MG.geo.canaryInset(x, [120, 820, 330, 190], { fill: '#C9A27E', label: 'CANARY ISLANDS' }); });
    },
    draw(ctx, t) {
      const hh = MG.cam.handheld(t, 2, 111); const push = pr01(t, tS.every, tS.away + 0.6, 'inOutCubic'); ctx.save(); MG.cam.apply(ctx, { x: lerp(960, 1110, push), y: lerp(540, 450, push), zoom: lerp(1, 1.5, push), dx: hh.dx, dy: hh.dy });
      ctx.drawImage(this.base, 0, 0);
      const brk = pr01(t, tS.breakT - 0.05, tS.away + 0.5, 'outCubic'); const off = [24 * brk, -16 * brk];
      if (brk > 0) { ctx.save(); ctx.fillStyle = '#2A1E2C'; ctx.fill(this.cat2); ctx.restore(); }
      for (const p of this.provs) { const isCat = this.catProvs.includes(p.id); ctx.save(); if (isCat) ctx.translate(off[0], off[1]); ctx.fillStyle = '#C9A27E'; if (!p.em) { ctx.fill(p.p2); } else {
          const k = pr01(t, tS.provinces - 0.1 + EMPTY.indexOf(p.id) * 0.13, tS.emptying + 0.5 + EMPTY.indexOf(p.id) * 0.06, 'inOutSine'); const lvl = lerp(1, 0.08, k); const [bx, by, bw, bh] = p.bb; const y = by + bh * (1 - lvl); ctx.save(); ctx.clip(p.p2); ctx.beginPath(); ctx.moveTo(bx - 4, by + bh + 4); for (let xx = bx - 4; xx <= bx + bw + 4; xx += 6) ctx.lineTo(xx, y + Math.sin(xx * 0.08 + t * 5) * 2.5 * k); ctx.lineTo(bx + bw + 4, by + bh + 4); ctx.closePath(); ctx.fill(); ctx.restore();
          if (k > 0.05) { ctx.save(); ctx.clip(p.p2); MG.tex.over(ctx, 'lines', { alpha: 0.32 * k, spacing: 7, color: '#8a7a6a', angle: 45 }); ctx.restore(); } }
        ctx.strokeStyle = 'rgba(58,43,58,0.35)'; ctx.lineWidth = 0.9; ctx.stroke(p.p2); ctx.restore(); }
      // crack + gap + dust
      if (t > tS.part - 0.2) { const k = pr01(t, tS.part - 0.1, tS.breakT, 'inOutCubic'); for (const l of this.crack) { const jag = l.map((p, i) => [p[0] + MG.noise2(i * 0.6, 3) * 3, p[1] + MG.noise2(i * 0.6, 9) * 3]); ctx.save(); if (brk > 0) { ctx.fillStyle = 'rgba(30,20,30,0.55)'; ctx.translate(off[0] * 0.5, off[1] * 0.5); } MG.fx.line(ctx, jag, { progress: k, color: P.ink, width: 3 + 3 * brk }); ctx.restore(); }
        if (brk > 0) { ctx.save(); ctx.translate(off[0], off[1]); ctx.strokeStyle = 'rgba(30,26,29,0.7)'; ctx.lineWidth = 1.8; ctx.stroke(this.cat2); ctx.restore(); const c = this.pr([0.9, 41.6]); MG.fx.particles(ctx, { n: 30, seed: 17, t: t - tS.breakT, area: [c[0] - 160, c[1] - 30, 120, 160], vel: [-30, -40], velJitter: 1, life: 1.4, size: [1.5, 4], color: '#8a7a6a', alpha: 0.7 * (1 - brk * 0.6), gravity: 30 }); } }
      // labels (≤3)
      const lab = (ll, txt, t0) => MG.geo.label(ctx, this.pr, ll, { text: txt, t, t0, dot: 0, size: 22, weight: 700, color: P.ink2, tracking: 0.15, dx: 0, dy: 0, align: 'center', halo: 'rgba(237,230,218,0.85)', haloW: 6 });
      if (push < 0.3) { ctx.save(); ctx.globalAlpha = 1 - push * 3; lab([-2.5, 41.75], 'SORIA', tS.interior); lab([-1.0, 40.55], 'TERUEL', tS.interior + 0.15); lab([-2.2, 39.95], 'CUENCA', tS.interior + 0.3); ctx.restore(); }
      if (brk > 0) { ctx.save(); ctx.translate(off[0], off[1]); lab([1.45, 41.85], 'CATALONIA', tS.away); ctx.restore(); }
      ctx.restore();
      { const a = 1 - pr01(t, tS.every - 0.3, tS.every); if (a > 0) { ctx.save(); ctx.globalAlpha = a; S1.key(ctx, 'ENTIRE PROVINCES', 140, 160, t, tS.entire - 0.05, { size: 84 }); S1.lead(ctx, 'emptying out', 146, 236, t, tS.emptying - 0.05, { size: 60 }); ctx.restore(); } }
      if (t > tS.every - 0.2) { S1.lead(ctx, 'every few years, some part', 140, 160, t, tS.every - 0.05, { size: 60 }); S1.key(ctx, 'WANTS TO BREAK AWAY', 140, 260, t, Tw('wants', 90.69) - 0.05, { size: 84, color: P.rojo }); }
    },
    post: { grade: 'cool', sat: 0.85, vignette: 0.36, grain: 0.045 },
  };

  // ---- "Young people can't rent apartments in their hometowns…" — a character moment
  const SKIN = '#D9A27C', INK = '#2A1A16';
  /** Lucía, 26, moving box in her arms. feet at (0,0). o: {look:[x,y], brow, mood, open, blink, slump, breath} */
  S1.lucia = (ctx, t, o = {}) => {
    const vol = (p, bb, col, extra = {}) => MG.fx.volume(ctx, p, bb, { color: col, shade: 0.42, hi: 0.22, soft: 0.22, outline: INK, outlineW: 3, light: [-0.7, -0.7], ...extra });
    const slump = o.slump || 0, br = o.breath || 0; ctx.save(); ctx.translate(0, slump * 8);
    // legs (jeans) + sneakers
    const legL = MG.path.smooth([[-62, -330], [-8, -330], [-14, -190], [-22, -24], [-60, -22], [-66, -190]], true, 0.4), legR = MG.path.smooth([[4, -330], [58, -330], [62, -190], [52, -22], [14, -20], [8, -190]], true, 0.4);
    vol(legL, [-66, -330, 58, 310], '#3A5F8E'); vol(legR, [4, -330, 58, 310], '#4470A0');
    ctx.strokeStyle = 'rgba(20,30,60,0.35)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-36, -300); ctx.quadraticCurveTo(-40, -180, -40, -30); ctx.stroke();
    for (const [x0, w] of [[-74, 66], [6, 72]]) { const sh = MG.path.smooth([[x0, -26], [x0 + w * 0.7, -30], [x0 + w, -12], [x0 + w, 2], [x0, 2]], true, 0.3); vol(sh, [x0, -30, w, 32], '#F4EFE6', { shade: 0.25 }); ctx.fillStyle = '#C9C3BA'; ctx.fillRect(x0 + 2, -6, w - 2, 6); }
    // hoodie (oversized, saffron)
    ctx.save(); ctx.translate(0, -br * 3); const hood = MG.path.smooth([[-112, -520], [-60, -548], [60, -548], [116, -522], [126, -420], [122, -300], [-118, -300], [-124, -420]], true, 0.38);
    vol(hood, [-124, -548, 250, 248], '#E3A13E', { tex: 'grain', texAlpha: 0.15 });
    ctx.fillStyle = '#C9862A'; ctx.beginPath(); ctx.ellipse(0, -548, 70, 20, 0, 0, TAU); ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 2.5; ctx.stroke();
    ctx.strokeStyle = '#F4EFE6'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-16, -540); ctx.lineTo(-20, -480); ctx.moveTo(18, -540); ctx.lineTo(22, -486); ctx.stroke();
    // the box (held at the waist) + its contents
    const bx = -40, by = -470; ctx.save(); ctx.translate(bx, by); const lamp = MG.path.poly([[30, -6], [90, -6], [104, -60], [18, -60]]); vol(lamp, [96, -70, 94, 60], '#F0735A', { shade: 0.3 });
    for (const [lx, ly, a, s2] of [[190, -6, 0.45, 0.8], [212, -14, 0.9, 0.7], [170, 0, 0.1, 0.65]]) { ctx.save(); ctx.translate(lx, ly); ctx.rotate(a); ctx.scale(s2, s2); const leaf = MG.path.smooth([[0, 0], [-40, -40], [-30, -100], [0, -120], [30, -100], [40, -40]], true, 0.5); vol(leaf, [-40, -120, 80, 120], '#4E7A4A', { shade: 0.35, outlineW: 2 }); ctx.strokeStyle = 'rgba(20,40,20,0.5)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -110); ctx.stroke(); ctx.restore(); }
    const box = MG.path.poly([[-30, 0], [230, 0], [222, 160], [-22, 160]]); vol(box, [-30, 0, 260, 160], '#C89B62', { shade: 0.35, hi: 0.15, tex: 'fibers', texAlpha: 0.4 });
    ctx.fillStyle = '#B5884F'; ctx.beginPath(); ctx.moveTo(-30, 0); ctx.lineTo(10, -26); ctx.lineTo(60, 0); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.fillStyle = 'rgba(240,230,210,0.7)'; ctx.fillRect(40, 60, 120, 26); MG.text.draw(ctx, 'COSAS', 100, 80, { font: F.marker, size: 22, color: INK, align: 'center' }); ctx.restore();
    // hands gripping the box sides
    for (const [hx, hy] of [[-78, -380], [196, -384]]) { const hp = MG.path.smooth([[hx - 16, hy - 26], [hx + 16, hy - 28], [hx + 20, hy + 10], [hx - 18, hy + 12]], true, 0.6); vol(hp, [hx - 20, hy - 28, 40, 40], SKIN, { shade: 0.3, outlineW: 2.5 }); }
    // sleeves
    const slL = MG.path.smooth([[-112, -515], [-80, -500], [-70, -400], [-64, -380], [-96, -366], [-130, -420]], true, 0.4), slR = MG.path.smooth([[112, -515], [140, -460], [200, -410], [190, -378], [150, -380], [96, -460]], true, 0.4); vol(slL, [-130, -515, 70, 150], '#D9952F'); vol(slR, [96, -515, 104, 140], '#E8AA4A');
    ctx.restore();
    // head (3/4 view to the right) with a little tilt and gaze
    const lk = o.look || [0.4, -0.2]; ctx.save(); ctx.translate(6 + lk[0] * 6, -580 - br * 3); ctx.rotate((o.tilt || 0) + lk[0] * 0.04);
    ctx.fillStyle = SKIN; ctx.fillRect(-18, -12, 36, 40); // neck
    ctx.fillStyle = '#3B2620'; ctx.fill(MG.path.blob(-10, -78, 92, { n: 16, irr: 0.12, seed: 4, sx: 1.0, sy: 1.02 })); // hair mass behind
    const face = MG.path.smooth([[-52, -100], [-20, -126], [34, -120], [62, -80], [60, -30], [36, 4], [4, 14], [-30, 0], [-54, -40]], true, 0.5); vol(face, [-56, -126, 120, 140], SKIN, { shade: 0.36, hi: 0.3, hiColor: '#F2C6A0', outlineW: 2.5 });
    ctx.fillStyle = 'rgba(220,110,90,0.25)'; ctx.beginPath(); ctx.ellipse(40, -34, 14, 9, 0, 0, TAU); ctx.ellipse(-26, -38, 11, 8, 0, 0, TAU); ctx.fill();
    // ear
    ctx.fillStyle = SKIN; ctx.beginPath(); ctx.ellipse(-52, -56, 10, 16, -0.2, 0, TAU); ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 2; ctx.stroke();
    // bun + curls on top
    for (const [cx, cy, r] of [[-6, -150, 40], [-40, -118, 26], [26, -126, 24], [50, -104, 18], [-58, -86, 20], [-30, -140, 22], [16, -144, 22]]) { ctx.fillStyle = '#3B2620'; ctx.beginPath(); ctx.arc(cx, cy, r, 0, TAU); ctx.fill(); ctx.strokeStyle = 'rgba(255,220,190,0.18)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(cx - r * 0.2, cy - r * 0.2, r * 0.6, 3.6, 5.2); ctx.stroke(); }
    ctx.fillStyle = '#3B2620'; ctx.beginPath(); ctx.arc(-4, -196, 34, 0, TAU); ctx.fill(); ctx.strokeStyle = '#C8322A'; ctx.lineWidth = 6; ctx.beginPath(); ctx.ellipse(-4, -168, 26, 8, 0, 0, TAU); ctx.stroke();
    // features
    const bl = o.blink || 0; const ey = -62; MG.kit.eye(ctx, -12, ey, { r: 13, w: 0.95, look: lk, blink: bl, skin: SKIN, iris: '#4A2E1E', sad: (o.brow || 0) < -0.3 }); MG.kit.eye(ctx, 34, ey, { r: 12, w: 0.85, look: lk, blink: bl, skin: SKIN, iris: '#4A2E1E', sad: (o.brow || 0) < -0.3 });
    const bw = o.brow || 0; MG.kit.brow(ctx, -12, ey - 24, { w: 30, raise: Math.max(0, bw) * 0.8, angle: bw < 0 ? 0.28 * -bw : -0.05, color: '#2B1A14', thick: 6 }); MG.kit.brow(ctx, 34, ey - 24, { w: 28, raise: Math.max(0, bw) * 0.8, angle: bw < 0 ? -0.28 * -bw : 0.05, color: '#2B1A14', thick: 6, flip: true });
    // glasses
    ctx.strokeStyle = '#2B1A14'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(-12, ey, 22, 0, TAU); ctx.moveTo(56, ey); ctx.arc(34, ey, 21, 0, TAU); ctx.moveTo(9, ey - 4); ctx.quadraticCurveTo(11, ey - 9, 13, ey - 4); ctx.moveTo(-34, ey - 4); ctx.lineTo(-50, ey - 10); ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(-12, ey, 16, 3.8, 4.4); ctx.arc(34, ey, 15, 3.8, 4.4); ctx.stroke();
    MG.fx.ink(ctx, [[24, -54], [34, -34], [26, -28]], { width: 3.5, color: '#9C5E42', taper: [0.3, 0.4] });
    MG.kit.mouth(ctx, 22, -10, { w: 30, mood: o.mood || 'neutral', open: o.open || 0, color: '#6A2A22' });
    ctx.restore(); ctx.restore();
  };
  /** tourist walking (side view, colour): kind 'm' | 'f'; ph walk phase; facing left */
  S1.tourist = (ctx, kind, ph) => {
    const sw = Math.sin(ph * TAU), bob = -Math.abs(Math.cos(ph * TAU)) * 10; ctx.save(); ctx.translate(0, bob); ctx.scale(-1, 1);
    const skin = kind === 'm' ? '#F0A58A' : '#F2B79C'; const leg = (a, col) => { const kx = Math.sin(a) * 180, ex = kx + Math.sin(a * 0.4) * 180; MG.fx.ink(ctx, [[0, -380], [kx * 0.5, -285], [kx, -190], [ex * 0.75 + kx * 0.25, -95], [ex, 0]], { width: kind === 'm' ? 40 : 30, color: col, taper: [0, 0.2] }); ctx.fillStyle = '#F4EFE6'; ctx.beginPath(); ctx.ellipse(ex + 16, -6, 30, 12, 0, 0, TAU); ctx.fill(); };
    leg(-0.32 * sw, kind === 'm' ? skin : skin); leg(0.32 * sw, kind === 'm' ? MG.col.shade(skin, 0.1) : MG.col.shade(skin, 0.1));
    if (kind === 'm') { ctx.fillStyle = '#E8D6A6'; ctx.fill(MG.path.smooth([[-50, -420], [50, -420], [56, -330], [-54, -330]], true)); }
    const body = kind === 'm' ? MG.path.smooth([[-56, -640], [40, -650], [62, -560], [58, -410], [-58, -400], [-66, -560]], true, 0.4) : MG.path.smooth([[-44, -640], [36, -650], [50, -560], [80, -330], [-80, -320], [-52, -560]], true, 0.4);
    MG.fx.volume(ctx, body, [-80, -650, 160, 330], { color: kind === 'm' ? '#2FA7A0' : '#F6D06F', shade: 0.35, hi: 0.2, outline: INK, outlineW: 3 });
    if (kind === 'm') { ctx.fillStyle = 'rgba(255,255,255,0.6)'; for (let i = 0; i < 9; i++) { ctx.beginPath(); ctx.arc(-40 + (i % 3) * 36, -610 + Math.floor(i / 3) * 70, 9, 0, TAU); ctx.fill(); } ctx.fillStyle = '#1E1A1D'; ctx.fill(MG.path.rr(30, -560, 40, 30, 6)); }
    // arm pulling the suitcase behind (to the right in our flipped space = left on screen)
    MG.fx.ink(ctx, [[-30, -620], [-80, -520], [-130, -450]], { width: 26, color: skin, taper: [0, 0.3] }); ctx.strokeStyle = '#3B3236'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(-132, -448); ctx.lineTo(-210, -230); ctx.stroke();
    MG.fx.volume(ctx, MG.path.rr(-330, -240, 150, 210, 18), [-330, -240, 150, 210], { color: kind === 'm' ? '#B8322A' : '#1F4E8C', shade: 0.4, hi: 0.25, outline: INK, outlineW: 3 }); ctx.fillStyle = '#1E1A1D'; ctx.beginPath(); ctx.arc(-300, -20, 16, 0, TAU); ctx.arc(-210, -20, 16, 0, TAU); ctx.fill();
    // head in profile
    ctx.fillStyle = skin; ctx.fillRect(-12, -690, 26, 50); const head = MG.path.smooth([[-46, -760], [10, -790], [52, -760], [66, -720], [56, -700], [44, -680], [0, -660], [-44, -690]], true, 0.5); MG.fx.volume(ctx, head, [-46, -790, 112, 130], { color: skin, shade: 0.35, outline: INK, outlineW: 2.5 });
    if (kind === 'm') { ctx.fillStyle = '#E8D6A6'; ctx.beginPath(); ctx.ellipse(6, -780, 92, 16, -0.05, 0, TAU); ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 2; ctx.stroke(); ctx.beginPath(); ctx.ellipse(0, -800, 50, 32, 0, Math.PI, TAU); ctx.fill(); ctx.stroke(); ctx.fillStyle = '#C8322A'; ctx.fillRect(-48, -790, 96, 8); }
    else { ctx.fillStyle = '#7A4B2A'; ctx.fill(MG.path.smooth([[-50, -770], [10, -800], [40, -770], [10, -740], [-30, -680], [-70, -640], [-80, -700]], true)); ctx.fillStyle = '#F0D9A0'; ctx.beginPath(); ctx.ellipse(0, -790, 110, 18, -0.08, 0, TAU); ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 2; ctx.stroke(); }
    ctx.fillStyle = '#1E1A1D'; ctx.fill(MG.path.rr(26, -744, 36, 16, 5)); MG.kit.mouth(ctx, 50, -690, { w: 20, mood: 'smile', open: 0.2 });
    ctx.restore();
  };
  S1.facade = () => MG.cache('s1:facade', W, H, (x) => {
    x.fillStyle = '#E2B47A'; x.fillRect(0, 0, W, H); MG.tex.over(x, 'blotch', { alpha: 0.25, color: '#8a5a30', scale: 3 }); MG.tex.over(x, 'fibers', { alpha: 0.5 });
    x.fillStyle = '#D9A86C'; x.fillRect(0, 352, W, 26); x.fillStyle = 'rgba(80,40,20,0.25)'; x.fillRect(0, 378, W, 8);
    // first-floor balcony doors with green shutters + iron balconies
    for (const bx of [160, 760, 1360]) { x.fillStyle = '#3E2A22'; x.fillRect(bx, 40, 300, 300); x.fillStyle = 'rgba(255,220,160,0.18)'; x.fillRect(bx + 20, 60, 260, 280); for (const sx of [bx - 6, bx + 230]) { x.fillStyle = '#3F6B4E'; x.fillRect(sx, 30, 76, 316); x.strokeStyle = 'rgba(20,40,25,0.5)'; x.lineWidth = 2; for (let yy = 40; yy < 340; yy += 12) { x.beginPath(); x.moveTo(sx + 6, yy); x.lineTo(sx + 70, yy); x.stroke(); } } x.fillStyle = '#B79A82'; x.fillRect(bx - 40, 300, 380, 22); }
    // ground floor: big wooden door + lockbox
    x.fillStyle = '#C79E6E'; x.fillRect(1060, 380, 420, 640); x.fillStyle = '#5A3626'; x.fillRect(1090, 420, 360, 600); x.fillStyle = '#6E4430'; x.fillRect(1100, 430, 165, 580); x.fillRect(1275, 430, 165, 580);
    for (const dx of [1100, 1275]) { x.fillStyle = 'rgba(40,60,70,0.85)'; x.fill(MG.path.rr(dx + 20, 460, 125, 220, 60)); x.strokeStyle = '#1E1A1D'; x.lineWidth = 3; for (let k = 0; k < 4; k++) { x.beginPath(); x.arc(dx + 82, 600, 20 + k * 14, Math.PI, 0); x.stroke(); } x.fillStyle = 'rgba(0,0,0,0.25)'; x.fillRect(dx + 20, 720, 125, 260); }
    x.fillStyle = '#C9A04A'; x.beginPath(); x.arc(1262, 760, 10, 0, TAU); x.arc(1288, 760, 10, 0, TAU); x.fill();
    x.fillStyle = '#1E1A1D'; x.fill(MG.path.rr(1500, 600, 64, 92, 8)); x.fillStyle = '#3B3236'; for (let i = 0; i < 9; i++) { x.fillRect(1510 + (i % 3) * 16, 616 + Math.floor(i / 3) * 16, 12, 12); } x.fillStyle = '#4E7A4A'; x.fillRect(1510, 668, 44, 10);
    // shop window left
    x.fillStyle = '#3E2A22'; x.fillRect(120, 470, 520, 400); x.fillStyle = 'rgba(160,190,200,0.35)'; x.fillRect(140, 490, 480, 360);
    // pavement
    x.fillStyle = '#9C948C'; x.fillRect(0, 1000, W, 80); x.strokeStyle = 'rgba(40,40,40,0.25)'; x.lineWidth = 2; for (let i = 0; i < 30; i++) { x.beginPath(); x.moveTo(i * 80, 1000); x.lineTo(i * 80 - 60, 1080); x.stroke(); }
  });
  S1.sign = () => MG.cache('s1:sealquila', 260, 120, (x, w, h) => { x.fillStyle = '#F6D06F'; x.fillRect(0, 0, w, h); x.strokeStyle = '#B8322A'; x.lineWidth = 6; x.strokeRect(6, 6, w - 12, h - 12); MG.text.draw(x, 'SE ALQUILA', w / 2, 72, { font: F.grotesk, weight: 800, size: 40, color: '#B8322A', align: 'center' }); MG.tex.over(x, 'fibers', { alpha: 0.5 }); });
  S1.towel = (i) => MG.cache('s1:towel' + i, 280, 230, (x, w, h) => { const cols = [['#2FA7A0', '#FBF4E6'], ['#F0735A', '#F6D06F'], ['#1F4E8C', '#FBF4E6']][i]; for (let k = 0; k < 7; k++) { x.fillStyle = cols[k % 2]; x.fillRect(k * 40, 0, 40, h); } MG.tex.over(x, 'fibers', { alpha: 0.6 }); x.fillStyle = 'rgba(0,0,0,0.12)'; x.fillRect(0, 0, w, 24); });
  S1.rentScene = {
    id: 's01_rent', start: 92.15, end: 98.15, transIn: { type: 'zoom', dur: 0.6, x: 1180, y: 300, amount: 4, from: 0.85 },
    init() { S1.facade(); S1.sign(); [0, 1, 2].forEach((i) => S1.towel(i)); },
    draw(ctx, t) {
      const z = lerp(1.0, 1.1, ln(t, 92.15, 97.3)) + 0.22 * pr01(t, 97.3, 98.1, 'inOutCubic'); const fx = lerp(960, 760, pr01(t, 97.3, 98.1, 'inOutCubic')), fy = lerp(560, 420, pr01(t, 97.3, 98.1, 'inOutCubic')); const hh = MG.cam.handheld(t, 2.4, 121);
      ctx.save(); MG.cam.apply(ctx, { x: fx, y: fy, zoom: z, dx: hh.dx, dy: hh.dy, rot: hh.rot });
      ctx.drawImage(S1.facade(), 0, 0);
      // door opens for the tourists (warm interior light)
      const open = pr01(t, 96.5, 96.9) * (1 - pr01(t, 97.55, 97.85, 'inCubic'));
      if (open > 0) { ctx.fillStyle = '#FFD99A'; ctx.fillRect(1275, 430, 165, 580); MG.fx.glow(ctx, 1360, 720, 300, '#FFD99A', 0.5 * open); ctx.fillStyle = '#6E4430'; ctx.fillRect(1275, 430, 165 * (1 - open * 0.8), 580); }
      // balcony signs → beach towels (tourist flats)
      [160, 760, 1360].forEach((bx, i) => { const tw = pr01(t, tS.because + 0.4 + i * 0.4, tS.because + 0.75 + i * 0.4, 'outBack'); ctx.save(); ctx.translate(bx + 150, 322); ctx.rotate(Math.sin(t * 1.3 + i) * 0.02); ctx.drawImage(S1.sign(), -130, 4); ctx.restore(); if (tw > 0) { ctx.save(); ctx.translate(bx + 150, 312); ctx.scale(1, tw); ctx.drawImage(S1.towel(i), -140, 0); ctx.restore(); }
        ctx.strokeStyle = '#1E1A1D'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(bx - 40, 250); ctx.lineTo(bx + 340, 250); ctx.stroke(); ctx.lineWidth = 2.5; for (let k = 0; k <= 12; k++) { ctx.beginPath(); ctx.moveTo(bx - 40 + k * 31.6, 250); ctx.lineTo(bx - 40 + k * 31.6, 300); ctx.stroke(); } });
      // sun falls only on the upper façade; the street is in shade
      ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = 'rgba(80,62,110,0.55)'; ctx.beginPath(); ctx.moveTo(-200, 460); ctx.lineTo(2200, 160); ctx.lineTo(2200, 1200); ctx.lineTo(-200, 1200); ctx.closePath(); ctx.fill(); ctx.restore();
      ctx.save(); ctx.globalCompositeOperation = 'screen'; ctx.fillStyle = 'rgba(255,190,110,0.18)'; ctx.beginPath(); ctx.moveTo(-200, -100); ctx.lineTo(2200, -100); ctx.lineTo(2200, 160); ctx.lineTo(-200, 460); ctx.closePath(); ctx.fill(); ctx.restore();
      // tourists roll in and go through the door
      const walk = (k, t0, t1, dx) => { const u = ln(t, t0, t1); if (u <= 0) return; const enter = pr01(t, 96.7 + dx * 0.0006, 97.4 + dx * 0.0004); const x = lerp(2250 + dx, 1380 + dx * 0.3, E.outCubic(u)); const a = 1 - enter; if (a <= 0) return; ctx.save(); ctx.globalAlpha = a; ctx.translate(x - enter * 60, 1006); ctx.scale(0.86 * (1 - enter * 0.15), 0.86 * (1 - enter * 0.15)); MG.fx.contact(ctx, 0, 0, 90, 16, 0.35); S1.tourist(ctx, k, u < 1 ? (t * 1.6) % 1 : 0.25); ctx.restore(); };
      walk('f', tS.because, 96.55, 260); walk('m', tS.because + 0.25, 96.6, 0);
      // Lucía
      const look = t < tS.because + 0.3 ? [0.5, -0.8] : t < 97.6 ? [0.95, -0.05] : [0.2, 0.5]; const brow = t < tS.because ? 0.35 : t < 96.4 ? 0 : -0.8; const mood = t < 96.4 ? 'neutral' : t < 97.2 ? 'o' : 'frown'; const op = t < 96.4 ? 0 : t < 97.2 ? 0.35 : 0;
      const lx = 700, ly = 1010; ctx.save(); ctx.translate(lx, ly); MG.fx.contact(ctx, 0, 0, 150, 22, 0.4); ctx.scale(0.98, 0.98);
      S1.lucia(ctx, t, { look, brow, mood, open: op, blink: MG.kit.blink(t, 7), slump: pr01(t, 97.5, 98.0), breath: Math.sin(t * 1.7), tilt: t > 97.6 ? -0.05 : 0.02 });
      ctx.restore(); ctx.restore();
      if (t > tS.rented - 0.3) { S1.lead(ctx, 'rented to tourists', 1780, 160, t, tS.rented - 0.05, { size: 60, color: P.cal, align: 'right' }); S1.key(ctx, 'INSTEAD', 1780, 250, t, tS.instead - 0.05, { size: 84, color: P.cal, align: 'right' }); }
      if (t > 97.85) { const k = pr01(t, 97.85, 98.15); MG.fx.particles(ctx, { n: 150, seed: 62, t: t + 3, area: [-200, -300, W + 600, H + 300], vel: [-700, 500], velJitter: 0.4, life: 2.2, size: [1.6, 3.2], alpha: k, drift: 80, shape: (c, x, y, s2, age, kk) => { c.save(); c.translate(x, y); c.rotate(age * 3 + kk); c.scale(s2, s2 * (0.5 + 0.5 * Math.abs(Math.sin(age * 4 + kk)))); c.drawImage(S1.leaf(Math.floor(MG.hash(kk) * 4)), -30, -30); c.restore(); } }); }
    },
    post: { grade: 'warm', sat: 0.92, vignette: 0.42, grain: 0.05 },
  };

  // ---- "…in the fall of 2026, that very issue brought down the government."
  S1.leaf = (i) => MG.cache('s1:leaf' + i, 60, 60, (x) => { const col = ['#C8693F', '#D9A13A', '#B8322A', '#8E4A2F'][i]; x.translate(30, 30); const p = MG.path.smooth([[0, -26], [10, -12], [24, -14], [16, 2], [22, 18], [4, 12], [0, 26], [-4, 12], [-22, 18], [-16, 2], [-24, -14], [-10, -12]], true, 0.3); x.fillStyle = col; x.fill(p); x.strokeStyle = 'rgba(60,20,10,0.5)'; x.lineWidth = 1.5; x.beginPath(); x.moveTo(0, -24); x.lineTo(0, 26); x.stroke(); });
  S1.leaves = (ctx, t, n, area, alpha, seed) => MG.fx.particles(ctx, { n, seed, t, area, vel: [-120, 220], velJitter: 0.6, life: 4, size: [0.7, 1.4], alpha, drift: 140, shape: (c, x, y, s, age, k) => { c.save(); c.translate(x, y); c.rotate(age * 2.4 + k); c.scale(s, s * (0.5 + 0.5 * Math.abs(Math.sin(age * 3 + k)))); c.drawImage(S1.leaf(Math.floor(MG.hash(k) * 4)), -30, -30); c.restore(); } });
  const COLS = 6; const PORT = { x0: 520, x1: 1400, base: 900, top: 460 };
  S1.column = () => MG.cache('s1:column', 120, 470, (x, w, h) => { const sh = MG.path.rr(22, 40, 76, 400, 4); MG.fx.volume(x, sh, [22, 40, 76, 400], { color: '#E6DFD0', shade: 0.5, shadeColor: '#6A5E7A', hi: 0.3, light: [-0.9, -0.3] }); x.strokeStyle = 'rgba(90,80,100,0.35)'; x.lineWidth = 2; for (let i = 1; i < 6; i++) { x.beginPath(); x.moveTo(22 + i * 12.7, 44); x.lineTo(22 + i * 12.7, 436); x.stroke(); }
    const cap = MG.path.smooth([[8, 40], [112, 40], [100, 14], [20, 14]], true, 0.2); MG.fx.volume(x, cap, [8, 0, 104, 40], { color: '#E6DFD0', shade: 0.5, shadeColor: '#6A5E7A' }); x.fillStyle = '#D9D0BE'; x.fillRect(0, 0, 120, 14); x.strokeStyle = 'rgba(90,80,100,0.5)'; x.lineWidth = 2; for (const sx of [24, 96]) { x.beginPath(); x.arc(sx, 26, 9, 0, TAU); x.stroke(); }
    x.fillStyle = '#D9D0BE'; x.fillRect(12, 440, 96, 18); x.fillRect(4, 456, 112, 14); });
  S1.govScene = {
    id: 's01_gov', start: 98.15, end: 103.2, transIn: { type: 'fade', dur: 0.45 },
    init() { S1.column(); [0, 1, 2, 3].forEach((i) => S1.leaf(i)); this.bg = MG.cache('s1:govbg', W, H, (x) => { MG.fx.vgrad(x, [[0, '#8C7E9A'], [0.7, '#C9A9A0'], [1, '#E2B88E']]); MG.tex.over(x, 'blotch', { alpha: 0.15, color: '#3a2b4a', scale: 2 }); x.fillStyle = '#6E6378'; x.fillRect(0, 930, W, 150); x.fillStyle = '#857A8E'; x.fillRect(PORT.x0 - 120, PORT.base + 30, PORT.x1 - PORT.x0 + 360, 22); x.fillStyle = '#7A6F84'; x.fillRect(PORT.x0 - 160, PORT.base + 52, PORT.x1 - PORT.x0 + 440, 22); }); },
    draw(ctx, t) {
      const shk = MG.cam.add(MG.cam.shake(t, tS.down + 0.15, 16, 4), MG.cam.handheld(t, 2.2, 131)); ctx.save(); MG.cam.apply(ctx, { x: 960, y: 560, zoom: lerp(1.02, 1.1, ln(t, 98.15, 103.2)), dx: shk.dx, dy: shk.dy, rot: shk.rot });
      ctx.drawImage(this.bg, 0, 0);
      // the moving box slides in: "that very issue"
      const bxT = pr01(t, tS.issue - 0.5, tS.issue + 0.1, 'inQuad'); const boxX = lerp(-300, PORT.x0 - 100, bxT);
      // columns topple like dominoes (left → right), pivoting on their bases
      const step = (PORT.x1 - PORT.x0) / (COLS - 1); const t0 = tS.issue + 0.12; const ang = (i) => { const ts = t0 + i * 0.13; return MG.deg(72) * E.inCubic(clamp((t - ts) / 0.45)) * (i < COLS - 1 ? 1 : 1); };
      const fallE = E.inCubic(clamp((t - (t0 + 0.3)) / 0.55));
      // entablature + pediment with the date engraved
      ctx.save(); ctx.translate(0, fallE * 520); ctx.rotate(fallE * 0.08); const ex0 = PORT.x0 - 90, ex1 = PORT.x1 + 90, ey = PORT.top - 14;
      MG.fx.volume(ctx, MG.path.rr(ex0, ey - 90, ex1 - ex0, 90, 2), [ex0, ey - 90, ex1 - ex0, 90], { color: '#E6DFD0', shade: 0.4, shadeColor: '#6A5E7A', hi: 0.2 });
      MG.text.draw(ctx, 'MMXXVI', (ex0 + ex1) / 2, ey - 28, { font: F.roman, weight: 900, size: 52, color: 'rgba(90,80,100,0.75)', align: 'center', tracking: 0.3 });
      const ped = MG.path.poly([[ex0 - 20, ey - 90], [(ex0 + ex1) / 2, ey - 300], [ex1 + 20, ey - 90]]); MG.fx.volume(ctx, ped, [ex0, ey - 300, ex1 - ex0, 210], { color: '#E6DFD0', shade: 0.45, shadeColor: '#6A5E7A', hi: 0.25 }); ctx.strokeStyle = 'rgba(90,80,100,0.5)'; ctx.lineWidth = 3; ctx.stroke(ped);
      MG.kit.sun(ctx, (ex0 + ex1) / 2, ey - 165, 46, t, { variant: 'flat', color: '#D9CDB8', deep: '#B9AC98', corona: 0, halftone: 0 });
      ctx.restore();
      for (let i = 0; i < COLS; i++) { const x = PORT.x0 + i * step; const a = ang(i); ctx.save(); ctx.translate(x + 52, PORT.base + 30); ctx.rotate(a); ctx.drawImage(S1.column(), -112, -470); ctx.restore(); }
      // the box
      if (bxT > 0) { ctx.save(); ctx.translate(boxX, PORT.base + 26); ctx.rotate(bxT < 1 ? 0 : -0.04); const bp = MG.path.poly([[-120, 0], [120, 0], [114, -150], [-114, -150]]); MG.fx.volume(ctx, bp, [-120, -150, 240, 150], { color: '#C89B62', shade: 0.35, tex: 'fibers', texAlpha: 0.4, outline: '#2A1A16', outlineW: 3 }); ctx.fillStyle = 'rgba(240,230,210,0.7)'; ctx.fillRect(-60, -96, 120, 30); MG.text.draw(ctx, 'COSAS', 0, -72, { font: F.marker, size: 26, color: '#2A1A16', align: 'center' }); ctx.restore(); }
      // dust: impacts, then a rolling cloud that fills the frame (carries us to the next shot)
      const dust = pr01(t, tS.down, 103.25, 'inQuad'); if (t > tS.issue + 0.3) MG.fx.smoke(ctx, 960, PORT.base, t, { n: 14 + Math.floor(dust * 16), seed: 7, spread: 1400 * (0.4 + dust), rise: 40, r: 180 + dust * 500, alpha: 0.35 + 0.55 * dust, color: '#D9CCC0', life: 5 });
      ctx.restore();
      S1.leaves(ctx, t, 26, [0, -200, W + 400, 300], 0.95, 61);
      if (t < 99.0) { const k = 1 - pr01(t, 98.55, 99.0); MG.fx.particles(ctx, { n: 150, seed: 62, t: t + 3, area: [-200, -300, W + 600, H + 300], vel: [-700, 500], velJitter: 0.4, life: 2.2, size: [1.6, 3.2], alpha: k, drift: 80, shape: (c, x, y, s2, age, kk) => { c.save(); c.translate(x, y); c.rotate(age * 3 + kk); c.scale(s2, s2 * (0.5 + 0.5 * Math.abs(Math.sin(age * 4 + kk)))); c.drawImage(S1.leaf(Math.floor(MG.hash(kk) * 4)), -30, -30); c.restore(); } }); }
      S1.lead(ctx, 'in the fall of', 140, 160, t, tS.fall - 0.25, { size: 60, color: P.ink }); MG.text.reveal(ctx, '2026', 140, 340, t, tS.y2026 - 0.05, { font: F.cond, weight: 900, size: 190, color: P.ink, style: 'rise', by: 'char' });
      if (t > tS.brought - 0.2) { S1.lead(ctx, 'brought down', 1780, 160, t, tS.brought - 0.05, { size: 60, color: P.ink, align: 'right' }); S1.key(ctx, 'THE GOVERNMENT', 1780, 250, t, tS.government - 0.05, { size: 84, color: P.rojo, align: 'right' }); }
      const wo = pr01(t, 102.7, 103.2); if (wo > 0) { ctx.fillStyle = `rgba(217,204,192,${wo})`; ctx.fillRect(0, 0, W, H); }
    },
    post: { grade: 'cool', sat: 0.85, vignette: 0.4, grain: 0.055 },
  };

  // ================================================================ CH6 · 103.2–113.2 · THE QUESTION + TITLE (on the sand of the bullring)
  const tT = { so: Tw('So', 103.25), lost: Tw('lost', 104.53), greatest: Tw('greatest', 105.41), empire: Tw('empire', 105.97), learn: Tw('learn', 106.77), live: Tw('live', 107.17), better: Tw('better', 107.57), than: Tw('than', 107.85), defeated: Tw('defeated', 109.01), and: Tw('And', 110.13), price: Tw('price', 110.85), lets: Tw('Let’s', 111.73), map: Tw('map', 112.53) };
  S1.tT = tT;
  /** a single standing letter sprite (thick paper/plaster standee) */
  S1.letterStd = (ch, font, color, side) => S1._standee(ch, { font, size: 320, color, side, weight: 900 });
  /** draw a standee at world (X,Z) tilted back by theta (0 upright … π/2 lying flat, top away from camera) */
  S1.standTilt = (ctx, cam, spr, X, Z, hW, theta, o = {}) => { const wW = hW * spr.width / spr.height; const b = S1.pj(cam, X, 0, Z), tp = S1.pj(cam, X, -Math.cos(theta) * hW, Z + Math.sin(theta) * hW), rt = S1.pj(cam, X + wW, 0, Z); if (b[3] < 5 || tp[3] < 5 || rt[3] < 5) return; const Ux = rt[0] - b[0], Uy = rt[1] - b[1], Vx = tp[0] - b[0], Vy = tp[1] - b[1]; ctx.save(); ctx.globalAlpha *= o.alpha ?? 1; ctx.transform(Ux / spr.width, Uy / spr.width, -Vx / spr.height, -Vy / spr.height, b[0] - Ux / 2 + Vx, b[1] - Uy / 2 + Vy); ctx.drawImage(spr, 0, 0); ctx.restore(); };
  const TW = { cz: 1150, R: 1350 }; // arena floor circle (world) centred at z = cz
  const titleCam = (t) => K(t, [[103.0, { x: -60, y: -175, z: -650, pitch: 0.05, yaw: 0.0 }], [tT.learn, { x: 0, y: -170, z: -560, pitch: 0.05, yaw: 0.01 }, 'soft'], [tT.and, { x: 40, y: -170, z: -470, pitch: 0.05, yaw: 0.0 }, 'soft'], [tT.lets, { x: 40, y: -180, z: -430, pitch: 0.055, yaw: 0 }, 'soft'], [112.5, { x: 40, y: -2300, z: 380, pitch: 1.5, yaw: 0 }, 'inOutCubic']]);
  S1.titleScene = {
    id: 's01_title', start: 103.2, end: 112.55, transIn: { type: 'fade', dur: 0.5 },
    init() { for (const c of 'EMPIRE') S1.letterStd(c, F.roman, '#D9B25A', '#7E5A1E'); for (const c of 'LIVEBTR') S1.letterStd(c, F.grotesk, P.cal, '#B5946A'); for (const c of 'SPAIN') S1.letterStd(c, F.display, P.cal, '#A9875E'); },
    draw(ctx, t) {
      const c0 = titleCam(t); const hh = MG.cam.handheld(t, 1.8, 141); const cam = { x: c0.x + hh.dx * 0.5, y: c0.y + hh.dy * 0.4, z: c0.z, pitch: c0.pitch, yaw: c0.yaw, roll: hh.rot, fov: 40 };
      const dusk = pr01(t, tT.lost, tT.empire + 0.6, 'inOutSine'); const glow2 = pr01(t, tT.learn, tT.better + 0.5);
      const far = (az, el) => S1.pj(cam, cam.x + Math.sin(az) * 1e6, -Math.tan(el) * 1e6, cam.z + Math.cos(az) * 1e6); const hz = far(0, 0)[1];
      // sky: sunset, deepening to violet, with a warm afterglow when "live better" rises
      const top = MG.col.mix(MG.col.mix('#F3B76E', '#5E4A7A', dusk), '#C9708A', glow2 * 0.35), low = MG.col.mix(MG.col.mix('#FFD58E', '#E58A5A', dusk), '#FFC07A', glow2 * 0.4);
      MG.fx.vgrad(ctx, [[0, top], [clamp(hz / H, 0.05, 0.98), low], [1, low]]);
      const sp = far(-0.38, lerp(0.07, -0.03, dusk) + 0.02 * glow2); MG.fx.glow(ctx, sp[0], sp[1], 700, '#FFC36B', 0.55); MG.kit.sun(ctx, sp[0], sp[1], 120, t, { rays: 0.4, corona: 0.8 });
      // the far stands & barrier (vertical layers at the arena edge), fading as the camera cranes up
      const wallA = 1 - pr01(t, 111.95, 112.25);
      const xdiv = K(t, [[103, -650], [tT.and, -560, 'soft'], [tT.price + 0.35, 250, 'inOutCubic'], [113, 280, 'soft']]); const divAt = (Z) => xdiv + 0.42 * (Z - 900);
      if (wallA > 0) { ctx.save(); ctx.globalAlpha = wallA; const zb = TW.cz + TW.R * 0.82; const quad = (x0, x1, y0, y1, z, col) => { const a = S1.pj(cam, x0, y0, z), b = S1.pj(cam, x1, y0, z), c = S1.pj(cam, x1, y1, z), d = S1.pj(cam, x0, y1, z); ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.lineTo(c[0], c[1]); ctx.lineTo(d[0], d[1]); ctx.closePath(); ctx.fill(); };
        for (let k = 12; k >= 0; k--) quad(-6000, 6000, -150 - k * 70, -150 - (k + 1) * 70, zb + 150 + k * 60, k % 2 ? '#E2D2B6' : '#CDB898');
        quad(-6000, 6000, -150 - 13 * 70, -150 - 13 * 70 - 140, zb + 150 + 13 * 60, '#B5643E');
        for (let i = -30; i <= 30; i++) { const z = zb + 150 + 13 * 60; const a = S1.pj(cam, i * 200, -150 - 13 * 70 - 20, z), b = S1.pj(cam, i * 200, -150 - 13 * 70 - 110, z); ctx.fillStyle = '#3E2420'; const w2 = 60 * a[2]; ctx.beginPath(); ctx.moveTo(a[0] - w2, a[1]); ctx.lineTo(b[0] - w2, b[1] + w2); ctx.arc(b[0], b[1] + w2, w2, Math.PI, 0); ctx.lineTo(a[0] + w2, a[1]); ctx.closePath(); ctx.fill(); }
        quad(-6000, 6000, 0, -150, zb, '#A83A2C'); quad(-6000, 6000, -140, -150, zb - 1, '#F4EFE6');
        for (const [txt, X] of [['SOMBRA', -900], ['SOL', 900]]) { const p = S1.pj(cam, X, -55, zb - 2); MG.text.draw(ctx, txt, p[0], p[1] + 20 * p[2], { font: F.grotesk, weight: 800, size: 64 * p[2], color: '#F4EFE6', align: 'center', tracking: 0.3 }); }
        // the stands in shade left of the divide
        const dz = zb + 300; const d0 = S1.pj(cam, divAt(zb), 0, zb), d1 = S1.pj(cam, divAt(dz) - 400, -1500, dz); ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = 'rgba(74,58,110,0.55)'; ctx.beginPath(); ctx.moveTo(-100, -100); ctx.lineTo(d1[0], -100); ctx.lineTo(d1[0], d1[1]); ctx.lineTo(d0[0], d0[1]); ctx.lineTo(d0[0], hz + 40); ctx.lineTo(-100, hz + 40); ctx.closePath(); ctx.fill(); ctx.restore(); ctx.restore(); }
      // sand floor (perspective) with painted circles
      ctx.save(); const ring = (r, n = 90) => { const pts = []; for (let i = 0; i <= n; i++) { const a = i / n * TAU; const p = S1.pj(cam, Math.cos(a) * r, 0, TW.cz + Math.sin(a) * r); if (p[3] > 5) pts.push([p[0], p[1]]); } return pts; };
      const floor = ring(TW.R, 120); if (pitchOK(cam)) { ctx.beginPath(); floor.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); } else { ctx.beginPath(); ctx.rect(0, hz, W, H); }
      const sg = ctx.createLinearGradient(0, hz, 0, H); sg.addColorStop(0, MG.col.mix('#E9C48A', '#B98C70', dusk * 0.6)); sg.addColorStop(1, MG.col.mix('#D9A866', '#9C7258', dusk * 0.6)); ctx.fillStyle = sg; ctx.fill(); ctx.clip(); MG.tex.over(ctx, 'grain', { alpha: 0.22 });
      for (const k of [0.45, 0.75]) MG.fx.line(ctx, ring(TW.R * k), { color: 'rgba(255,250,240,0.6)', width: 3 });
      // the sombra on the sand (shadow of the west stands): a hard diagonal divide
      { const pts = []; for (let Z = -900; Z <= 3200; Z += 100) { const p = S1.pj(cam, divAt(Z), 0, Z); if (p[3] > 5) pts.push([p[0], p[1]]); } if (pts.length > 1) { ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = 'rgba(74,58,110,0.62)'; ctx.beginPath(); ctx.moveTo(-3000, pts[0][1]); pts.forEach((p) => ctx.lineTo(p[0], p[1])); ctx.lineTo(-3000, pts[pts.length - 1][1]); ctx.closePath(); if (cam.pitch > 0.6) { ctx.beginPath(); const a = S1.pj(cam, divAt(-900), 0, -900), b = S1.pj(cam, divAt(3200), 0, 3200), c = S1.pj(cam, -6000, 0, 3200), d = S1.pj(cam, -6000, 0, -900); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.lineTo(c[0], c[1]); ctx.lineTo(d[0], d[1]); ctx.closePath(); } ctx.fill(); ctx.restore(); } }
      ctx.restore();
      // ---- the words standing on the sand
      const shadowDir = [0.35, -1.6]; const shadeTint = (X, Z) => X < divAt(Z);
      const word = (str, font, col, sideCol, X0, Z, h, gap, upAt, fallAt, fallDur, key, flatFrom) => { const sprs = str.split('').map((c) => (c === ' ' ? null : S1.letterStd(c, font, col, sideCol))); const ws = sprs.map((s2) => (s2 ? h * s2.width / s2.height * 0.78 : h * 0.35)); const total = ws.reduce((a, b) => a + b, 0) + gap * (str.length - 1); let x = X0 - total / 2; const items = [];
        str.split('').forEach((c, i) => { const w2 = ws[i]; const cx = x + w2 / 2; x += w2 + gap; if (!sprs[i]) return; const up = upAt === null ? 1 : pr01(t, upAt + i * 0.07, upAt + 0.5 + i * 0.07, 'outBack'); if (up <= 0) return; let th = (1 - up) * (Math.PI / 2); if (fallAt !== null) th = Math.max(th, (Math.PI / 2) * E.inCubic(clamp((t - fallAt - i * 0.09) / fallDur))); if (flatFrom !== null) th = Math.max(th, (Math.PI / 2) * pr01(t, flatFrom + i * 0.04, flatFrom + 0.5 + i * 0.04, 'inOutCubic')); items.push({ c, spr: sprs[i], X: cx, Z, th }); });
        for (const it of items) { if (it.th < 1.4 && !shadeTint(it.X, it.Z)) S1.castShadow(ctx, cam, S1.tinted(it.spr, '#3A2B4A', key + it.c + col), it.X, it.Z, h * Math.cos(it.th), shadowDir, { alpha: 0.35 * (1 - dusk * 0.5) }); }
        for (const it of items) { S1.standTilt(ctx, cam, it.spr, it.X, it.Z, h, it.th); }
        return items; };
      // EMPIRE topples on "lost"
      if (t < tT.and + 0.5) { ctx.save(); ctx.globalAlpha = 1 - pr01(t, tT.and, tT.and + 0.5); word('EMPIRE', F.roman, '#D9B25A', '#7E5A1E', 120, 1300, 300, 30, 103.25, tT.lost + 0.05, 0.55, 'em', null); ctx.restore(); }
      // LIVE BETTER rises in the afterglow
      if (t > tT.learn - 0.2 && t < tT.price + 0.6) { ctx.save(); ctx.globalAlpha = 1 - pr01(t, tT.price, tT.price + 0.5); word('LIVE BETTER', F.grotesk, P.cal, '#B5946A', 40, 820, 210, 16, tT.live - 0.15, null, 0, 'lb', null); ctx.restore(); }
      // SPAIN — the title, split by the divide (SOMBRA | SOL)
      let spainItems = []; if (t > tT.price - 0.1) spainItems = word('SPAIN', F.display, P.cal, '#A9875E', 60, 950, 360, 26, tT.price + 0.05, null, 0, 'sp', tT.lets + 0.15);
      // tint the shaded part of the standing words (screen-space divide line, extended upward)
      { const a = S1.pj(cam, divAt(700), 0, 700), b = S1.pj(cam, divAt(1300), 0, 1300); const dx = b[0] - a[0], dy = b[1] - a[1]; const k = -2000 / (dy || -1); ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = 'rgba(74,58,110,0.6)'; ctx.beginPath(); ctx.moveTo(-200, -200); ctx.lineTo(a[0] + dx * k, a[1] + dy * k); ctx.lineTo(a[0], a[1]); ctx.lineTo(a[0] - dx * 3, a[1] - dy * 3); ctx.lineTo(-200, H + 200); ctx.closePath(); ctx.clip(); ctx.beginPath(); ctx.rect(0, 0, W, Math.min(H, hz + 80 + (cam.pitch > 0.3 ? H : 0))); ctx.fill(); ctx.restore(); }
      // typography (VO-synced lead-ins, small)
      const L = (s2, y, t0, t1, o = {}) => { const a = 1 - pr01(t, t1, t1 + 0.35); if (t < t0 - 0.2 || a <= 0) return; ctx.save(); ctx.globalAlpha = a; S1.lead(ctx, s2, 960, y, t, t0, { size: 64, align: 'center', color: o.color || P.ink, ...o }); ctx.restore(); };
      L('so how did a country that lost', 170, tT.so, tT.learn - 0.3); L('the world’s greatest empire', 250, tT.greatest - 0.3, tT.learn - 0.3);
      L('learn to live better', 170, tT.learn, tT.and - 0.3); L('than those who defeated it?', 250, tT.than, tT.and - 0.3);
      L('and what’s', 200, tT.and, tT.lets - 0.2, { color: P.cal }); if (t > tT.price - 0.1 && t < tT.lets) { ctx.save(); ctx.globalAlpha = 1 - pr01(t, tT.lets - 0.3, tT.lets); S1.key(ctx, 'THE PRICE?', 960, 310, t, tT.price - 0.05, { size: 110, align: 'center', color: P.cal, font: F.display, weight: 900 }); ctx.restore(); }
      if (t > tT.price + 0.5) { ctx.save(); ctx.globalAlpha = 1 - pr01(t, 112.0, 112.3); S1.lead(ctx, 'the empire the world comes to', 960, 990, t, tT.price + 0.6, { size: 54, align: 'center', color: P.cal }); ctx.restore(); }
    },
    post: (t) => ({ grade: 'golden', vignette: 0.4, grain: 0.05, bloom: 0.15, contrast: 1.05 }),
  };
  function pitchOK(cam) { return cam.pitch > 0.35; }

  // ---------------------------------------------------------------- SEGMENT
  const scenes = [
    S1.boardScene,
    S1.plainScene,
    S1.empireScene,
    S1.langScene, S1.speakScene, S1.trainScene, S1.euScene, S1.trophyScene,
    S1.arenaScene,
    S1.birthScene, S1.provScene,
    S1.rentScene, S1.govScene,
    S1.titleScene,
    { id: 's01_todo5', start: 112.55, end: 113.2, draw: S1.todo('zoom to map') },
    { id: 's01_todo6', start: 113.2, end: 174.63, draw: S1.todo('the peninsula') },
  ];

  MG.segment('S01', {
    start: 0, end: 174.63, scenes,
    audio(A) {
      // ---- 0–15.5 quiz: mystery bed + split-flap clatter
      A.music('mystery', 0, 16.2, { key: 'E3', bpm: 100, intensity: [[0, 0.5], [6, 0.6], [15, 0.7]], fadeIn: 0.8, fadeOut: 1.2 });
      A.sfx.amb('room', 0, 16, { gain: 0.9 });
      for (let t = 0; t < 15.6; t += 1 / 30) { const n = BD.activity(t); if (n > 0) { const k = Math.min(1, n / 10); A.drum(t + MG.hash(t * 91) * 0.02, MG.hash(t * 13) > 0.5 ? 'tick' : 'tock', { vel: 0.18 + 0.22 * k, bus: 'sfx', pan: (MG.hash(t * 7) - 0.5) * 0.6, verb: 0.05, rate: 0.75 + MG.hash(t * 3) * 0.3 }); } }
      A.sfx.swish(tQ.right, { gain: 0.6 }); A.sfx.swish(tQ.no, { gain: 0.9 }); A.pizz(tQ.no, 'E2', { vel: 0.7 }); A.pizz(tQ.no + 0.12, 'Eb2', { vel: 0.6 });
      A.sfx.paper(tQ.rome, { gain: 0.8 }); A.sfx.paper(tQ.venice, { gain: 0.7 }); A.sfx.swish(tQ.not + 0.05, { gain: 0.8 }); A.sfx.swish(tQ.not + 0.3, { gain: 0.6 });
      A.sfx.swish(tQ.wrong, { gain: 0.9 }); A.sfx.swish(tQ.again, { gain: 0.9 }); A.pizz(tQ.again, 'D2', { vel: 0.7 }); A.pizz(tQ.again + 0.13, 'C#2', { vel: 0.6 });
      A.sfx.whoosh(15.5, { dur: 0.8, gain: 0.9 });
    },
  });
})();
