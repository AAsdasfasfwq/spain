/* =====================================================================================================
   MG i18n — French version layer (loaded after the engine, before the segments)

   1) TIME WARP. The animation timeline of every segment is authored against the English voice-over
      (data/words.js, seconds "EN"). The French voice-over (data/words_fr.js) is aligned to it sentence by
      sentence + word anchors (data/align.js, built by tools/align_build.py). The OUTPUT timeline is French:
      MG.renderFrame(tFr) renders the English-timed film at MG.toEn(tFr); audio cues are re-timed with MG.toOut.
   2) TEXT. Every string that reaches MG.text.* is translated through MG.I18N (i18n/*.js, EN → FR), numbers get
      French typography (5 500 · 1,1 · 12 % · 135 €). Untranslated strings are recorded in MG.i18nMissing.
      "Spoken" captions are re-synced to the French narrator's own words.
   ===================================================================================================== */
(function () {
  'use strict';
  const MG = window.MG; const { clamp, lerp } = MG;
  // ---------------------------------------------------------------- 1 · time warp
  const AL = window.MG_ALIGN || [[0, 0], [1, 1]]; const AE = AL.map((p) => p[0]), AF = AL.map((p) => p[1]);
  const interp = (xs, ys, t) => { const n = xs.length; if (t <= xs[0]) return ys[0] + (t - xs[0]); if (t >= xs[n - 1]) return ys[n - 1] + (t - xs[n - 1]);
    let lo = 0, hi = n - 1; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (xs[m] <= t) lo = m; else hi = m; } const u = (t - xs[lo]) / (xs[hi] - xs[lo] || 1); return ys[lo] + u * (ys[hi] - ys[lo]); };
  /** English (authoring) seconds → French (output) seconds */
  MG.toOut = (t) => interp(AE, AF, t);
  /** French (output) seconds → English (authoring) seconds */
  MG.toEn = (t) => interp(AF, AE, t);
  MG.LANG = 'fr';
  MG.VO_DURATION_OUT = window.MG_VO_DURATION_FR || MG.toOut(MG.VO_DURATION);
  MG.DURATION_OUT = Math.ceil(MG.toOut(MG.DURATION) * 30) / 30;
  const renderEn = MG.renderFrame; MG.renderFrame = (tOut) => renderEn(MG.toEn(tOut));
  const infoEn = MG.info; MG.info = () => { const i = infoEn(); return { ...i, duration: MG.DURATION_OUT, vo: MG.VO_DURATION_OUT, lang: 'fr', segments: i.segments.map((s) => ({ ...s, start: MG.toOut(s.start), end: MG.toOut(s.end), startEn: s.start, endEn: s.end })) }; };

  // French narrator's words (output time)
  const normW = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/^(l|d|qu|j|n|s|c|m|t)['’]/, '').replace(/[^a-z0-9&]/g, '');
  MG.wordsFr = (window.MG_WORDS_FR || []).map(([w, s, e]) => ({ w, s, e, n: normW(w) }));

  // ---------------------------------------------------------------- 2 · text
  MG.I18N = MG.I18N || {}; const LC = new Map(); let lcBuilt = 0;
  const OUTS = new Set();
  /** register translations (called by i18n/*.js) */
  MG.I18N_SEG = {};
  /** register translations (called by i18n/*.js). seg: optional segment id → the entries win inside that segment */
  const typo = (v) => (typeof v === 'string' ? v.replace(/ ([?!:;»])/g, '\u202f$1').replace(/« /g, '«\u202f') : v); // French thin no-break spaces
  MG.i18n = (dict, seg) => { const tgt = seg ? (MG.I18N_SEG[seg] = MG.I18N_SEG[seg] || {}) : MG.I18N; for (const k in dict) { const v = typo(dict[k]); tgt[k] = v; OUTS.add(v); if (seg && MG.I18N[k] === undefined) MG.I18N[k] = v; } lcBuilt = 0; };
  const buildLC = () => { if (lcBuilt === Object.keys(MG.I18N).length) return; LC.clear(); for (const k in MG.I18N) LC.set(k.trim().toLowerCase(), MG.I18N[k]); lcBuilt = Object.keys(MG.I18N).length; };
  const NNBSP = ' ';
  /** French number typography inside a string (English source conventions → French) */
  MG.frNum = (s) => {
    let r = s.replace(/(\d),(?=\d{3}(?!\d))/g, '$1' + NNBSP); // 5,500 → 5 500 (repeat-safe via lookahead)
    while (/(\d),(?=\d{3}(?!\d))/.test(r)) r = r.replace(/(\d),(?=\d{3}(?!\d))/g, '$1' + NNBSP);
    r = r.replace(/(\d)\.(\d)/g, '$1,$2'); // 1.1 → 1,1
    r = r.replace(/(\d)\s?%/g, '$1' + NNBSP + '%'); // 12% → 12 %
    r = r.replace(/([−\-+≈~]?)€\s?([\d ,]+)/g, '$1$2' + NNBSP + '€').replace(/([−\-+≈~]?)\$\s?([\d ,]+)/g, '$1$2' + NNBSP + '$');
    return r;
  };
  /** pattern rules for animated counters (strings built on the fly) */
  const RULES = [[/^\+(\d+) YEARS$/, (m, n) => '+' + n + (+n < 2 ? ' AN' : ' ANS')], [/^(\d+) H (\d\d)$/, '$1 h $2']];
  MG.i18nRules = RULES;
  const applyCase = (src, dst) => (src === src.toUpperCase() && /[A-Z]/.test(src) ? dst.toUpperCase() : dst);
  MG.i18nMissing = new Map(); MG.i18nSeen = new Map(); MG.i18nCollect = false;
  const note = (map, s) => { const sc = MG.current && MG.current.scene ? MG.current.scene.id : '?'; const t = MG.current ? MG.current.t : 0; const e = map.get(s); if (e) e.n++; else map.set(s, { n: 1, scene: sc, t: +t.toFixed(2) }); };
  /** translate one display string (EN → FR) */
  MG.tr = (s) => {
    if (typeof s !== 'string') { if (typeof s === 'number') return MG.frNum(String(s)); return s; }
    if (!s) return s;
    if (MG.i18nCollect) note(MG.i18nSeen, s);
    const scn = MG.current && MG.current.scene ? MG.current.scene : null; const SC = scn && MG.I18N_SEG[scn.id];
    if (SC) { const v1 = SC[s] ?? SC[s.trim()]; if (v1 !== undefined) return SC[s] !== undefined ? v1 : s.replace(s.trim(), v1); }
    const sid = scn ? scn.seg : null; const SD = sid && MG.I18N_SEG[sid];
    if (SD) { const v0 = SD[s] ?? SD[s.trim()]; if (v0 !== undefined) return SD[s] !== undefined ? v0 : s.replace(s.trim(), v0); }
    const v = MG.I18N[s]; if (v !== undefined) return v;
    if (OUTS.has(s)) return s; // already French (drawn twice)
    if (!/[A-Za-z]/.test(s)) return MG.frNum(s);
    if (/^[≈~+\-−\s]*[\d.,\s]+\s?(mm|km|KM|M|h|H|m|kg|t|°C|°|ha|MW|GW)\.?$/.test(s.trim())) return MG.frNum(s);
    const t = s.trim(); if (MG.I18N[t] !== undefined) return s.replace(t, MG.I18N[t]);
    buildLC(); const lo = LC.get(t.toLowerCase()); if (lo !== undefined) return s.replace(t, applyCase(t, lo));
    if (t.length <= 1) return s;
    for (const [re, rep] of RULES) if (re.test(t)) return s.replace(t, t.replace(re, rep));
    note(MG.i18nMissing, s); return MG.frNum(s);
  };
  const TX = MG.text; const D0 = TX.draw, R0 = TX.reveal, W0 = TX.width, F0 = TX.fit, P0 = TX.onPath, B0 = TX.block, S0 = TX.spoken;
  TX.draw = (ctx, str, x, y, o) => D0(ctx, MG.tr(str), x, y, o);
  TX.reveal = (ctx, str, x, y, t, t0, o) => R0(ctx, MG.tr(str), x, y, t, t0, o);
  TX.width = (ctx, str, o) => W0(ctx, MG.tr(str), o);
  TX.fit = (ctx, str, maxW, o) => F0(ctx, MG.tr(str), maxW, o);
  TX.onPath = (ctx, str, pts, o) => P0(ctx, MG.tr(str), pts, o);
  TX.block = (ctx, str, x, y, maxW, o) => B0(ctx, MG.tr(str), x, y, maxW, o);
  TX.raw = { draw: D0, reveal: R0, width: W0 };
  /** counters: French separators */
  const C0 = TX.count; TX.count = (t, t0, t1, from, to, o = {}) => MG.frNum(C0(t, t0, t1, from, to, { ...o, sep: ',' }));

  // spoken captions: the French line is revealed word by word on the French narrator's own timing
  const spokenCache = new Map();
  const frTimed = (fr, s0, s1) => {
    const key = fr + '@' + s0.toFixed(2); if (spokenCache.has(key)) return spokenCache.get(key);
    const parts = fr.split(/\s+/).filter(Boolean); const np = parts.map(normW); const fo = MG.toOut(s0); let best = -1, bd = 1e9;
    const W = MG.wordsFr; for (let i = 0; i < W.length; i++) { if (Math.abs(W[i].s - fo) > 8) continue; let ok = 0, j = i; for (let k = 0; k < np.length && j < W.length; k++) { if (!np[k]) { ok++; continue; } let found = false; for (let jj = j; jj < Math.min(W.length, j + 3); jj++) if (W[jj].n === np[k]) { j = jj + 1; found = true; break; } if (found) ok++; } if (ok >= Math.ceil(np.length * 0.6)) { const d = Math.abs(W[i].s - fo); if (d < bd) { bd = d; best = i; } } }
    let out;
    if (best >= 0) { let j = best; out = parts.map((p, k) => { const n = np[k]; let s = null; for (let jj = j; jj < Math.min(W.length, j + 4); jj++) if (W[jj].n === n) { s = W[jj].s; j = jj + 1; break; } return { w: p, sOut: s }; });
      // fill gaps by interpolation
      let lastS = MG.toOut(s0); out.forEach((o, k) => { if (o.sOut === null) { let nx = null; for (let q = k + 1; q < out.length; q++) if (out[q].sOut !== null) { nx = out[q].sOut; break; } o.sOut = nx === null ? lastS + 0.25 : lerp(lastS, nx, 0.5); } lastS = o.sOut; });
      out = out.map((o) => ({ w: o.w, s: MG.toEn(o.sOut) }));
    } else { const n = parts.length; out = parts.map((p, k) => ({ w: p, s: lerp(s0, s1, n > 1 ? k / (n - 1) : 0) })); }
    spokenCache.set(key, out); return out;
  };
  TX.spoken = (ctx, words, x, y, t, o = {}) => {
    if (!words || !words.length) return 0; const en = words.map((w) => w.w).join(' ');
    const fr = MG.tr(en); if (fr === en && !MG.I18N[en]) return S0(ctx, words, x, y, t, o);
    const s1 = words[words.length - 1].e ?? words[words.length - 1].s + 0.3; const ws = frTimed(fr, words[0].s, s1);
    // draw with the untranslated primitive (avoid re-translating single French words)
    ctx.save(); MG.text.set(ctx, o); const sp = ctx.measureText(' ').width; const m = ws.map((w) => ({ ...w, w2: ctx.measureText(w.w).width })); ctx.restore();
    const total = m.reduce((a, w) => a + w.w2, 0) + sp * (m.length - 1); const ax = o.align === 'center' ? 0.5 : o.align === 'right' ? 1 : 0; let cx = x - total * ax; const lead = o.lead ?? 0.08;
    for (const w of m) { R0(ctx, w.w, cx, y, t, w.s - lead, { ...o, align: 'left', by: o.by || 'word', stagger: o.stagger ?? 0.02 }); cx += w.w2 + sp; }
    return total;
  };
  /** report helper for tools/i18n_collect.js */
  MG.i18nReport = () => ({ missing: [...MG.i18nMissing.entries()].map(([s, v]) => ({ s, ...v })), seen: [...MG.i18nSeen.entries()].map(([s, v]) => ({ s, ...v })) });
})();
