#!/usr/bin/env node
/* Layout check for the French version: finds on-screen strings whose French text leaves the frame or runs into
   another string, in places where the English original did neither (EN authoring timeline).
     node tools/i18n_layout.js --from 0 --to 1750 --step 0.25 --out /tmp/layout.json [--only s05]
   Also lists strings that still have no French translation (kind "missing").
   Approximate by design: text boxes are measured in device space from the current transform (rotation ignored),
   drawn only when visible (alpha, reveal start, "out" end). Review the reported times with tools/snap.js. */
const fs = require('fs'); const path = require('path');
const { serve, launchBrowser } = require('./server');
const ROOT = path.resolve(__dirname, '..');
const argv = process.argv.slice(2); const arg = (k, d) => { const i = argv.indexOf('--' + k); return i < 0 ? d : argv[i + 1]; };
(async () => {
  const from = parseFloat(arg('from', '0')), to = parseFloat(arg('to', '1750')), step = parseFloat(arg('step', '0.25')); const only = arg('only');
  const { srv, port } = await serve(ROOT); const B = await launchBrowser({}); const page = await B.newPage();
  await page.goto(`http://127.0.0.1:${port}/index.html${only ? '?only=' + only : ''}`, { waitUntil: 'load', timeout: 180000 });
  await page.evaluate(() => window.MG_BOOT);
  const r = await page.evaluate(([a, b, st]) => {
    MG.i18nCollect = true; const TX = MG.text, RAW = TX.raw; let boxes = []; let tNow = 0;
    const rec = (ctx, en, x, y, o = {}, t0) => {
      if (typeof en !== 'string' || !en.trim() || !ctx || !ctx.canvas || ctx.canvas.width !== MG.W || ctx.canvas.height !== MG.H) return;
      if (ctx.globalAlpha < 0.06 || (o.alpha !== undefined && o.alpha < 0.06)) return;
      if (t0 !== undefined && tNow < t0 + 0.05) return;
      if (o.out && tNow > o.out.at + (o.out.dur || 0.3) * 0.5) return;
      const fr = MG.tr(en);
      const m = ctx.getTransform(); if (Math.abs(m.b) > 0.05 || Math.abs(m.c) > 0.05) return; // rotated/skewed text: skip
      const size = o.size || 40; const ax = o.align === 'center' ? 0.5 : o.align === 'right' ? 1 : 0;
      const box = (w) => { const X0 = x - ax * w, X1 = x + (1 - ax) * w; return [m.a * X0 + m.e, m.a * X1 + m.e, m.d * (y - size * 0.78) + m.f, m.d * (y + size * 0.2) + m.f]; };
      boxes.push({ en, fr, e: box(RAW.width(ctx, en, o)), f: box(RAW.width(ctx, fr, o)) });
    };
    const D = TX.draw, R = TX.reveal, S = TX.spoken;
    TX.draw = (ctx, s, x, y, o) => { rec(ctx, s, x, y, o); return D(ctx, s, x, y, o); };
    TX.reveal = (ctx, s, x, y, t, t0, o) => { rec(ctx, s, x, y, o, t0); return R(ctx, s, x, y, t, t0, o); };
    TX.spoken = (ctx, words, x, y, t, o = {}) => { if (words && words.length) rec(ctx, words.map((w) => w.w).join(' '), x, y, o, words[0].s); return S(ctx, words, x, y, t, o); };
    const hit = (p, q, pad = 2) => p[0] < q[1] - pad && q[0] < p[1] - pad && p[2] < q[3] - pad && q[2] < p[3] - pad;
    const out = new Map(); const add = (k, v) => { if (!out.has(k)) out.set(k, v); else out.get(k).n++; };
    for (let t = a; t <= b; t += st) {
      boxes = []; tNow = t; try { MG.composeFrame(t); } catch (e) { }
      const sc = MG.current && MG.current.scene ? MG.current.scene.id : '?';
      for (const bx of boxes) {
        const offF = bx.f[1] > MG.W + 4 || bx.f[0] < -4, offE = bx.e[1] > MG.W + 4 || bx.e[0] < -4;
        if (offF && !offE && bx.fr !== bx.en) add('off|' + bx.en, { kind: 'offscreen', scene: sc, t: +t.toFixed(2), en: bx.en, fr: bx.fr, x0: Math.round(bx.f[0]), x1: Math.round(bx.f[1]), n: 1 });
      }
      for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
        const p = boxes[i], q = boxes[j]; if (p.en === q.en || p.fr === q.fr || (p.fr === p.en && q.fr === q.en)) continue;
        if (hit(p.f, q.f) && !hit(p.e, q.e, -6)) add('ov|' + [p.en, q.en].sort().join('|'), { kind: 'overlap', scene: sc, t: +t.toFixed(2), a: p.fr, b: q.fr, n: 1 });
      }
    }
    for (const m of MG.i18nReport().missing) out.set('miss|' + m.s, { kind: 'missing', scene: m.scene, t: m.t, fr: m.s, x0: 0, x1: 0, n: m.n });
    return [...out.values()];
  }, [from, to, step]);
  fs.writeFileSync(arg('out', path.join(ROOT, 'build', 'layout.json')), JSON.stringify(r, null, 1));
  console.log(`issues ${r.length}`); for (const x of r) console.log(x.kind.padEnd(9), String(x.t).padStart(8), x.scene.padEnd(18), x.kind === 'overlap' ? `${x.a}  ✕  ${x.b}` : `${x.fr}  [${x.x0}…${x.x1}]`, `(${x.n})`);
  await B.close(); srv.close(); process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });
