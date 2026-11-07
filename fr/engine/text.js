/* =====================================================================
   MG.text — typography & kinetic type on canvas.
   Families (all bundled, see assets/fonts/fonts.css):
     MG.F.display  'Fraunces'        editorial display serif (100–900, italic)
     MG.F.serif    'Instrument Serif' elegant italic lead-ins (400 + italic)
     MG.F.grotesk  'Bricolage'        characterful grotesk (200–800, stretch 75–100%)
     MG.F.cond     'Big Shoulders'    condensed numerals / dates (300–900)
     MG.F.mono     'JetBrains Mono'   data labels, coordinates (400–800)
     MG.F.wide     'Unbounded'        wide tech display (200–900)
     MG.F.old      'IM Fell' / MG.F.oldSC 'IM Fell SC'  old-print, maps of empire
     MG.F.roman    'Cinzel'           imperial inscriptions (400–900)
     MG.F.stencil  'Saira Stencil'  / MG.F.stencil2 'Big Shoulders Stencil' (700/900) war posters
     MG.F.retro    'Shrikhand'        1960s travel posters
     MG.F.marker   'Permanent Marker' protest signs, annotations
     MG.F.brush    'Caveat Brush'     handwritten notes
     MG.F.fashion  'Bodoni Moda'      fashion editorial (400–900, italic)
     MG.F.heat     'Climate Crisis'   melting heat display
     MG.F.news     'Abril Fatface'    newspaper headlines
     MG.F.arabic   'Amiri'            Arabic script / classical
   ===================================================================== */
(function () {
  const MG = window.MG; const { clamp, lerp } = MG;
  MG.F = { display: 'Fraunces', serif: 'Instrument Serif', grotesk: 'Bricolage', cond: 'Big Shoulders', mono: 'JetBrains Mono', wide: 'Unbounded', old: 'IM Fell', oldSC: 'IM Fell SC', roman: 'Cinzel', stencil: 'Saira Stencil', stencil2: 'Big Shoulders Stencil', retro: 'Shrikhand', marker: 'Permanent Marker', brush: 'Caveat Brush', fashion: 'Bodoni Moda', heat: 'Climate Crisis', news: 'Abril Fatface', arabic: 'Amiri' };
  MG.FONT_LOADS = [
    '400 20px Fraunces', '700 20px Fraunces', '900 20px Fraunces', 'italic 400 20px Fraunces', 'italic 700 20px Fraunces',
    '400 20px "Instrument Serif"', 'italic 400 20px "Instrument Serif"', '400 20px Bricolage', '800 20px Bricolage',
    '400 20px "Big Shoulders"', '900 20px "Big Shoulders"', '400 20px "JetBrains Mono"', '700 20px "JetBrains Mono"', '400 20px Unbounded', '800 20px Unbounded',
    '400 20px "IM Fell"', 'italic 400 20px "IM Fell"', '400 20px "IM Fell SC"', '400 20px Cinzel', '900 20px Cinzel', '400 20px "Saira Stencil"', '900 20px "Big Shoulders Stencil"',
    '400 20px Shrikhand', '400 20px "Permanent Marker"', '400 20px "Caveat Brush"', '400 20px "Bodoni Moda"', 'italic 400 20px "Bodoni Moda"', '900 20px "Bodoni Moda"', '400 20px "Climate Crisis"', '400 20px "Abril Fatface"', '400 20px Amiri', '700 20px Amiri',
  ];

  /** set ctx font. o: {font (family), size, weight, italic, tracking (px or em if <1? use em: 'tracking' in em), stretch ('75%'..), caps} */
  MG.text = {};
  MG.text.set = (ctx, o = {}) => {
    const fam = o.font || MG.F.grotesk; const sz = o.size || 48; const w = o.weight || 400;
    ctx.font = `${o.italic ? 'italic ' : ''}${w} ${sz}px ${/\s/.test(fam) ? '"' + fam + '"' : fam}`;
    ctx.fontStretch = o.stretch || 'normal';
    ctx.letterSpacing = o.tracking ? (Math.abs(o.tracking) < 2 ? `${o.tracking * sz}px` : `${o.tracking}px`) : '0px';
    ctx.textBaseline = o.baseline || 'alphabetic'; ctx.textAlign = 'left';
    ctx.fontKerning = 'normal';
  };
  MG.text.width = (ctx, str, o) => { ctx.save(); MG.text.set(ctx, o); const w = ctx.measureText(str).width; ctx.restore(); return w; };
  /** fit font size so str fits in maxW */
  MG.text.fit = (ctx, str, maxW, o = {}) => { const s0 = o.size || 100; const w = MG.text.width(ctx, str, { ...o, size: s0 }); return w > maxW ? (s0 * maxW) / w : s0; };
  /** draw a single line. o adds: x align ('left'|'center'|'right'), color, stroke, strokeW, alpha, shadow:{blur,dx,dy,color}, rot, scale */
  MG.text.draw = (ctx, str, x, y, o = {}) => {
    ctx.save(); MG.text.set(ctx, o); const w = ctx.measureText(str).width; const ax = o.align === 'center' ? 0.5 : o.align === 'right' ? 1 : 0;
    ctx.translate(x, y); if (o.rot) ctx.rotate(o.rot); if (o.scale) ctx.scale(o.scale, o.scale);
    if (o.alpha !== undefined) ctx.globalAlpha *= o.alpha;
    if (o.shadow) { ctx.shadowColor = o.shadow.color || 'rgba(0,0,0,0.35)'; ctx.shadowBlur = o.shadow.blur ?? 12; ctx.shadowOffsetX = o.shadow.dx ?? 0; ctx.shadowOffsetY = o.shadow.dy ?? 6; }
    if (o.stroke) { ctx.lineJoin = 'round'; ctx.strokeStyle = o.stroke; ctx.lineWidth = o.strokeW || 6; ctx.strokeText(str, -w * ax, 0); ctx.shadowColor = 'transparent'; }
    if (o.color !== null) { ctx.fillStyle = o.fill || o.color || '#1d1a1f'; ctx.fillText(str, -w * ax, 0); }
    ctx.restore(); return w;
  };

  /** split text into units with x offsets (char|word) */
  function layout(ctx, str, o, by) {
    MG.text.set(ctx, o); const units = []; const tracking = ctx.letterSpacing;
    if (by === 'word') { const parts = str.split(/(\s+)/); let x = 0; for (const p of parts) { const w = ctx.measureText(p).width; if (p.trim()) units.push({ s: p, x, w }); x += w; } return { units, total: ctx.measureText(str).width, tracking }; }
    if (by === 'line') { return { units: [{ s: str, x: 0, w: ctx.measureText(str).width }], total: ctx.measureText(str).width }; }
    // chars: measure cumulative prefix widths for correct kerning
    let prev = 0; for (let i = 0; i < str.length; i++) { const wPrefix = ctx.measureText(str.slice(0, i + 1)).width; const ch = str[i]; if (ch !== ' ') units.push({ s: ch, x: prev, w: wPrefix - prev }); prev = wPrefix; }
    return { units, total: ctx.measureText(str).width };
  }

  /** Kinetic reveal of one line.
   *  t: time; t0: start; o: font opts + {align, color, style, by:'char'|'word'|'line', stagger, dur, ease, out:{at, style, dur, stagger}, seed, amount}
   *  styles: 'rise' (masked rise), 'fade', 'blur', 'drop' (stamp from big), 'track' (tracking in), 'split' (assemble from scattered),
   *          'flip' (per-unit 3D flip), 'type' (typewriter), 'wipe' (mask wipe L→R), 'scale' (pop from 0), 'slide' (from left), 'wave'
   *  returns {w, x0} for layout chaining */
  MG.text.reveal = (ctx, str, x, y, t, t0, o = {}) => {
    const by = o.by || (['type', 'flip', 'split', 'drop', 'wave'].includes(o.style) ? 'char' : 'word');
    ctx.save(); const L = layout(ctx, str, o, by);
    const ax = o.align === 'center' ? 0.5 : o.align === 'right' ? 1 : 0; const x0 = x - L.total * ax;
    const style = o.style || 'rise', dur = o.dur ?? (style === 'type' ? 0.04 : 0.55), st = o.stagger ?? (by === 'char' ? 0.025 : 0.08);
    const ease = MG.easeOf(o.ease || 'out'); const size = o.size || 48; const seed = o.seed || 7; const amt = o.amount ?? 1;
    const outO = o.out; const n = L.units.length;
    if (o.alpha !== undefined) ctx.globalAlpha *= o.alpha;
    ctx.fillStyle = o.color || '#1d1a1f';
    if (o.shadow) { ctx.shadowColor = o.shadow.color || 'rgba(0,0,0,0.3)'; ctx.shadowBlur = o.shadow.blur ?? 10; ctx.shadowOffsetY = o.shadow.dy ?? 5; ctx.shadowOffsetX = o.shadow.dx ?? 0; }
    for (let i = 0; i < n; i++) {
      const u = L.units[i]; const order = o.reverse ? n - 1 - i : o.center ? Math.abs(i - (n - 1) / 2) : i;
      let p = ease(clamp((t - t0 - order * st) / dur)); if (style === 'type') p = t - t0 - order * st >= 0 ? 1 : 0;
      let q = 1; // out factor
      if (outO) { const ost = outO.stagger ?? st * 0.6; const od = outO.dur ?? 0.35; q = 1 - MG.easeOf(outO.ease || 'in')(clamp((t - outO.at - order * ost) / od)); }
      if (p <= 0 || q <= 0) continue;
      const ux = x0 + u.x, cxu = ux + u.w / 2; let dx = 0, dy = 0, sc = 1, rot = 0, al = 1, blur = 0, sx = 1, sy = 1, clipRise = false;
      switch (style) {
        case 'rise': dy = (1 - p) * size * 0.9 * amt; clipRise = true; break;
        case 'fade': al = p; dy = (1 - p) * size * 0.15; break;
        case 'blur': al = p; blur = (1 - p) * size * 0.25; sc = 1 + (1 - p) * 0.25; break;
        case 'drop': sc = 1 + (1 - p) * 2.2 * amt; al = clamp(p * 2); rot = (1 - p) * (MG.rand(seed, i) - 0.5) * 0.6; break;
        case 'track': dx = (u.x + u.w / 2 - L.total / 2) * (1 - p) * 0.6 * amt; al = p; break;
        case 'split': { const a = MG.rand(seed, i) * MG.TAU, r = size * (1.5 + MG.rand(seed, i + 50) * 2) * amt; dx = Math.cos(a) * r * (1 - p); dy = Math.sin(a) * r * (1 - p); rot = (MG.rand(seed, i + 9) - 0.5) * 2 * (1 - p); al = clamp(p * 1.5); break; }
        case 'flip': sy = Math.max(0.001, Math.abs(Math.cos((1 - p) * Math.PI / 2))); al = clamp(p * 2); dy = (1 - p) * -size * 0.2; break;
        case 'type': break;
        case 'wipe': break;
        case 'scale': sc = MG.ease.outBack(clamp((t - t0 - order * st) / dur)); al = clamp(p * 3); break;
        case 'slide': dx = -(1 - p) * size * 1.2 * amt; al = p; break;
        case 'wave': dy = Math.sin((t - t0) * 6 - i * 0.5) * size * 0.05 * amt + (1 - p) * size * 0.6; al = p; break;
      }
      if (outO) { const os = outO.style || 'fade'; if (os === 'fade') al *= q; else if (os === 'rise') { dy -= (1 - q) * size * 0.9; clipRise = true; } else if (os === 'blur') { al *= q; blur += (1 - q) * size * 0.2; } else if (os === 'drop') { dy += (1 - q) * size * 0.8; al *= q; } else if (os === 'scale') { sc *= q; } }
      ctx.save();
      if (clipRise) { ctx.beginPath(); ctx.rect(ux - size, y - size * 1.15, u.w + size * 2, size * 1.45); ctx.clip(); }
      if (style === 'wipe') { ctx.beginPath(); ctx.rect(ux - 2, y - size * 1.2, (u.w + 4) * p, size * 1.6); ctx.clip(); }
      ctx.globalAlpha *= al; if (blur > 0.3) ctx.filter = `blur(${blur.toFixed(1)}px)`;
      ctx.translate(cxu + dx, y + dy); if (rot) ctx.rotate(rot); if (sc !== 1 || sx !== 1 || sy !== 1) ctx.scale(sc * sx, sc * sy);
      MG.text.set(ctx, o); ctx.fillStyle = o.color || '#1d1a1f';
      if (o.stroke) { ctx.lineJoin = 'round'; ctx.strokeStyle = o.stroke; ctx.lineWidth = o.strokeW || 6; ctx.strokeText(u.s, -u.w / 2, 0); }
      if (o.color !== null) ctx.fillText(u.s, -u.w / 2, 0);
      ctx.restore();
    }
    ctx.restore(); return { w: L.total, x0 };
  };

  /** words appear exactly when the narrator says them. words: from MG.phrase(...).words or [{w,s}] ; o like reveal (+ lead: seconds early) */
  MG.text.spoken = (ctx, words, x, y, t, o = {}) => {
    ctx.save(); MG.text.set(ctx, o); const sp = ctx.measureText(' ').width; const ws = words.map((w) => ({ ...w, w2: ctx.measureText(w.w).width })); ctx.restore();
    const total = ws.reduce((a, w) => a + w.w2, 0) + sp * (ws.length - 1);
    const ax = o.align === 'center' ? 0.5 : o.align === 'right' ? 1 : 0; let cx = x - total * ax; const lead = o.lead ?? 0.08;
    for (const w of ws) { MG.text.reveal(ctx, w.w, cx, y, t, w.s - lead, { ...o, align: 'left', by: o.by || 'word', stagger: o.stagger ?? 0.02 }); cx += w.w2 + sp; }
    return total;
  };
  /** formatted counter string */
  MG.text.count = (t, t0, t1, from, to, o = {}) => { const p = MG.easeOf(o.ease || 'outCubic')(clamp((t - t0) / (t1 - t0))); const v = lerp(from, to, p); const d = o.decimals || 0; let s = v.toFixed(d); if (o.sep !== false) { const [i, f] = s.split('.'); s = i.replace(/\B(?=(\d{3})+(?!\d))/g, o.sep || ',') + (f ? '.' + f : ''); } return (o.prefix || '') + s + (o.suffix || ''); };
  /** text along a polyline (map labels on rivers/ranges). offset 0..1 start fraction */
  MG.text.onPath = (ctx, str, pts, o = {}) => {
    ctx.save(); MG.text.set(ctx, o); ctx.fillStyle = o.color || '#1d1a1f'; if (o.alpha !== undefined) ctx.globalAlpha *= o.alpha;
    let L = 0; for (let i = 1; i < pts.length; i++) L += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
    const total = ctx.measureText(str).width; let s = (o.offset ?? 0.5) * L - total / 2; const reveal = o.reveal ?? 1;
    for (let i = 0; i < str.length; i++) { const ch = str[i]; const w = ctx.measureText(ch).width; if (i / str.length > reveal) break; const [px, py, a] = MG.path.along(pts, (s + w / 2) / L); ctx.save(); ctx.translate(px, py); ctx.rotate(a + (Math.abs(a) > Math.PI / 2 && o.upright ? Math.PI : 0)); if (o.halo) { ctx.strokeStyle = o.halo; ctx.lineWidth = o.haloW || 4; ctx.strokeText(ch, -w / 2, (o.dy || 0)); } ctx.fillText(ch, -w / 2, (o.dy || 0)); ctx.restore(); s += w + (o.spacing || 0); }
    ctx.restore();
  };
  /** multi-line block with simple wrapping (use sparingly — this film avoids paragraphs) */
  MG.text.block = (ctx, str, x, y, maxW, o = {}) => { ctx.save(); MG.text.set(ctx, o); const words = str.split(' '); const lines = []; let cur = ''; for (const w of words) { const test = cur ? cur + ' ' + w : w; if (ctx.measureText(test).width > maxW && cur) { lines.push(cur); cur = w; } else cur = test; } if (cur) lines.push(cur); ctx.restore(); const lh = (o.lineHeight || 1.15) * (o.size || 48); lines.forEach((l, i) => MG.text.draw(ctx, l, x, y + i * lh, o)); return lines.length * lh; };
})();
