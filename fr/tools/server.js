// Tiny static file server for the project (no dependencies).
const http = require('http');
const fs = require('fs');
const path = require('path');
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.woff2': 'font/woff2', '.woff': 'font/woff', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.svg': 'image/svg+xml' };
function serve(root, port = 0) {
  return new Promise((resolve) => {
    const srv = http.createServer((req, res) => {
      try {
        const u = decodeURIComponent(new URL(req.url, 'http://x').pathname);
        let p = path.normalize(path.join(root, u));
        if (!p.startsWith(path.resolve(root))) { res.writeHead(403); return res.end(); }
        if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, 'index.html');
        if (!fs.existsSync(p)) { res.writeHead(404); return res.end('not found'); }
        const stat = fs.statSync(p); const type = TYPES[path.extname(p).toLowerCase()] || 'application/octet-stream';
        const range = req.headers.range;
        if (range) { const m = /bytes=(\d*)-(\d*)/.exec(range); const s = m[1] ? +m[1] : 0, e = m[2] ? +m[2] : stat.size - 1; res.writeHead(206, { 'Content-Type': type, 'Content-Range': `bytes ${s}-${e}/${stat.size}`, 'Accept-Ranges': 'bytes', 'Content-Length': e - s + 1 }); return fs.createReadStream(p, { start: s, end: e }).pipe(res); }
        res.writeHead(200, { 'Content-Type': type, 'Content-Length': stat.size, 'Cache-Control': 'no-cache', 'Accept-Ranges': 'bytes' });
        fs.createReadStream(p).pipe(res);
      } catch (e) { res.writeHead(500); res.end(String(e)); }
    });
    srv.listen(port, '127.0.0.1', () => resolve({ srv, port: srv.address().port }));
  });
}
/** launch a headless Chromium via puppeteer (preferred) or playwright (fallback). */
async function launchBrowser(opts = {}) {
  const args = ['--no-sandbox', '--disable-dev-shm-usage', '--autoplay-policy=no-user-gesture-required', '--disable-background-timer-throttling', '--disable-renderer-backgrounding', '--font-render-hinting=none', '--force-color-profile=srgb', '--hide-scrollbars', '--disable-accelerated-2d-canvas', '--disable-gpu-compositing'];
  if (opts.gpu) args.push('--enable-gpu', '--ignore-gpu-blocklist', '--use-angle=default');
  else args.push('--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--use-gl=angle');
  if (process.env.MG_CHROME_ARGS) args.push(...process.env.MG_CHROME_ARGS.split(' ').filter(Boolean));
  if (opts.extraArgs) args.push(...opts.extraArgs);
  let lib = null, kind = null;
  try { lib = require('puppeteer'); kind = 'puppeteer'; } catch (e) { }
  if (!lib) { try { lib = require('playwright'); kind = 'playwright'; } catch (e) { } }
  if (!lib) throw new Error('Install puppeteer:  npm i puppeteer   (or playwright)');
  if (kind === 'puppeteer') {
    const browser = await lib.launch({ headless: opts.headless ?? true, args, protocolTimeout: 0, defaultViewport: { width: 1920, height: 1080, deviceScaleFactor: 1 }, executablePath: opts.executablePath || process.env.CHROME_PATH || undefined });
    return { kind, browser, newPage: async () => { const p = await browser.newPage(); await p.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 }); return p; }, close: () => browser.close() };
  }
  const browser = await lib.chromium.launch({ headless: true, args, executablePath: opts.executablePath || process.env.CHROME_PATH || undefined });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  return { kind, browser, newPage: () => context.newPage(), close: () => browser.close() };
}
module.exports = { serve, launchBrowser };
