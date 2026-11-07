#!/usr/bin/env node
/* Collect every display string the film draws (EN authoring timeline), with scene id + time, and the ones still
   missing a French translation.
     node tools/i18n_collect.js --from 0 --to 1750 --step 0.3 --out /tmp/strings.json [--only s05]
   Output: { seen: [{s, n, scene, t}], missing: [...] } */
const fs = require('fs'); const path = require('path');
const { serve, launchBrowser } = require('./server');
const ROOT = path.resolve(__dirname, '..');
const argv = process.argv.slice(2); const arg = (k, d) => { const i = argv.indexOf('--' + k); return i < 0 ? d : argv[i + 1]; };
(async () => {
  const from = parseFloat(arg('from', '0')), to = parseFloat(arg('to', '1750')), step = parseFloat(arg('step', '0.3')); const only = arg('only');
  const { srv, port } = await serve(ROOT); const B = await launchBrowser({}); const page = await B.newPage();
  await page.goto(`http://127.0.0.1:${port}/index.html${only ? '?only=' + only : ''}`, { waitUntil: 'load', timeout: 180000 });
  await page.evaluate(() => window.MG_BOOT);
  const r = await page.evaluate(([a, b, st]) => { MG.i18nCollect = true; let n = 0; for (let t = a; t <= b; t += st) { try { MG.composeFrame(t); } catch (e) { } n++; } return { n, ...MG.i18nReport() }; }, [from, to, step]);
  fs.writeFileSync(arg('out', path.join(ROOT, 'build', 'strings.json')), JSON.stringify(r, null, 0));
  console.log(`frames ${r.n} · strings seen ${r.seen.length} · missing ${r.missing.length}`);
  await B.close(); srv.close(); process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });
