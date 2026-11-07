/* =====================================================================
   MG.geo — accurate maps (Natural Earth via world-atlas, Spain IGN via es-atlas,
   ETOPO/Natural-Earth shaded relief). Uses d3-geo projections drawn to canvas.

   Data:
     MG.geo.world110 / world50 : FeatureCollection of countries (properties.name)
     MG.geo.land50             : land Feature (coastlines)
     MG.geo.iberia10           : 10m-detail countries around Iberia / W-Med / N-Africa
     MG.geo.provinces          : 52 Spanish provinces + Ceuta/Melilla/Gibraltar (es-atlas, id = INE code)
     MG.geo.regions            : 17 autonomous communities + Ceuta, Melilla (+Gibraltar entry)
     MG.geo.cities, rivers, ranges, density (see data/geo_extra.js)
   ===================================================================== */
(function () {
  const MG = window.MG; const { clamp, lerp } = MG;
  const G = (MG.geo = {});
  const ALIAS = {
    'usa': 'United States of America', 'us': 'United States of America', 'united states': 'United States of America', 'america': 'United States of America',
    'uk': 'United Kingdom', 'britain': 'United Kingdom', 'great britain': 'United Kingdom', 'england': 'United Kingdom',
    'czech republic': 'Czechia', 'western sahara': 'W. Sahara', 'dominican republic': 'Dominican Rep.', 'bosnia': 'Bosnia and Herz.',
    'drc': 'Dem. Rep. Congo', 'ivory coast': "Côte d'Ivoire", 'south korea': 'South Korea', 'holland': 'Netherlands', 'the netherlands': 'Netherlands',
  };
  const REGION_EN = { 'Andalucía': 'Andalusia', 'Aragón': 'Aragon', 'Principado de Asturias': 'Asturias', 'Illes Balears': 'Balearic Islands', 'Cantabria': 'Cantabria', 'Castilla y León': 'Castile and León', 'Castilla-La Mancha': 'Castile-La Mancha', 'Cataluña/Catalunya': 'Catalonia', 'Comunitat Valenciana': 'Valencia', 'Extremadura': 'Extremadura', 'Galicia': 'Galicia', 'Comunidad de Madrid': 'Madrid', 'Región de Murcia': 'Murcia', 'Comunidad Foral de Navarra': 'Navarre', 'País Vasco/Euskadi': 'Basque Country', 'La Rioja': 'La Rioja', 'Ciudad Autónoma de Ceuta': 'Ceuta', 'Ciudad Autónoma de Melilla': 'Melilla', 'Canarias': 'Canary Islands' };
  G.REGION_EN = REGION_EN;

  G.init = () => {
    if (G._ok) return; const D = window.MG_DATA || {}; const tj = window.topojson;
    if (D.world110) G.world110 = tj.feature(D.world110, D.world110.objects.countries);
    if (D.world50) { G.world50 = tj.feature(D.world50, D.world50.objects.countries); G.borders50 = tj.mesh(D.world50, D.world50.objects.countries, (a, b) => a !== b); }
    if (D.land50) G.land50 = tj.feature(D.land50, D.land50.objects.land);
    if (D.iberia10) G.iberia10 = D.iberia10;
    if (D.spain) {
      const s = D.spain; G.provinces = tj.feature(s, s.objects.provinces); G.regionsAll = tj.feature(s, s.objects.autonomous_regions);
      G.regions = { type: 'FeatureCollection', features: G.regionsAll.features.filter((f) => !/Gibraltar/.test(f.properties.name)) };
      G.regions.features.forEach((f) => (f.properties.en = REGION_EN[f.properties.name] || f.properties.name));
      G.provinces.features.forEach((f) => (f.properties.short = f.properties.name.split('/').pop().replace(/\..*$/, '')));
      G.spainBorder = tj.feature(s, s.objects.border);
      G.provinceMesh = tj.mesh(s, s.objects.provinces, (a, b) => a !== b); G.regionMesh = tj.mesh(s, s.objects.autonomous_regions, (a, b) => a !== b);
    }
    G.cities = D.cities || {}; G.rivers = D.rivers || {}; G.ranges = D.ranges || {}; G.places = D.places || {}; G.density = D.density || {};
    G._ok = true;
  };
  const findIn = (fc, name) => { if (!fc) return null; const n = (ALIAS[name.toLowerCase()] || name).toLowerCase(); return fc.features.find((f) => f.properties.name.toLowerCase() === n) || fc.features.find((f) => f.properties.name.toLowerCase().startsWith(n)) || null; };
  /** country feature by name: res '110' | '50' | '10' (10 = only around Iberia/Europe/N.Africa) */
  G.country = (name, res = '50') => { G.init(); const fc = res === '110' ? G.world110 : res === '10' ? G.iberia10 : G.world50; const f = findIn(fc, name) || findIn(G.world50, name); if (!f) console.warn('[geo] country not found', name); return f; };
  G.countries = (names, res) => ({ type: 'FeatureCollection', features: names.map((n) => G.country(n, res)).filter(Boolean) });
  /** Spanish autonomous community by Spanish or English name (e.g. 'Catalonia', 'Basque Country', 'Galicia') */
  G.region = (name) => { G.init(); const n = name.toLowerCase(); return G.regions.features.find((f) => f.properties.en.toLowerCase() === n || f.properties.name.toLowerCase().includes(n)) || null; };
  /** province by INE id ('42') or name ('Soria') */
  G.province = (q) => { G.init(); const n = String(q).toLowerCase(); return G.provinces.features.find((f) => f.id === q || f.properties.name.toLowerCase().includes(n)) || null; };
  /** mainland + Balearics (no Canaries/Ceuta/Melilla) region list */
  G.peninsular = () => { G.init(); return { type: 'FeatureCollection', features: G.regions.features.filter((f) => !/Canarias|Ceuta|Melilla/.test(f.properties.name)) }; };

  // ---------- projections ----------
  /** make a d3 projection centred on screen. kind: mercator|equirect|ortho|natural|conic|spain|albers|azimuthal
   *  p: {center:[lon,lat], scale, rotate:[λ,φ,γ], translate:[x,y], clip} */
  G.proj = (kind = 'mercator', p = {}) => {
    const d3 = window.d3; let pr;
    switch (kind) {
      case 'ortho': pr = d3.geoOrthographic().clipAngle(90); break;
      case 'equirect': pr = d3.geoEquirectangular(); break;
      case 'natural': pr = d3.geoNaturalEarth1(); break;
      case 'conic': case 'spain': pr = d3.geoConicConformal().parallels([36, 43.5]); break;
      case 'albers': pr = d3.geoConicEqualArea().parallels([36, 43.5]); break;
      case 'azimuthal': pr = d3.geoAzimuthalEqualArea().clipAngle(150); break;
      default: pr = d3.geoMercator();
    }
    if (kind === 'ortho' || kind === 'azimuthal') { pr.rotate(p.rotate || [-(p.center ? p.center[0] : 0), -(p.center ? p.center[1] : 0), 0]); }
    else if (kind === 'conic' || kind === 'spain' || kind === 'albers') { const c = p.center || [-3.7, 40.2]; pr.rotate([-c[0], 0, 0]).center([0, c[1]]); }
    else { if (p.rotate) pr.rotate(p.rotate); pr.center(p.center || [0, 0]); }
    pr.scale(p.scale || 1000).translate(p.translate || [MG.W / 2, MG.H / 2]);
    if (p.precision) pr.precision(p.precision);
    return pr;
  };
  /** scale that makes `feature` fill box [x0,y0,x1,y1] for a fresh projection of `kind` (center at feature centroid) */
  G.fitParams = (kind, feature, box = [160, 120, MG.W - 160, MG.H - 120]) => { const d3 = window.d3; const c = d3.geoCentroid(feature); const pr = G.proj(kind, { center: c, scale: 1 }); pr.fitExtent([[box[0], box[1]], [box[2], box[3]]], feature); const tr = pr.translate(); const sc = pr.scale(); const cc = pr.invert([MG.W / 2, MG.H / 2]); return { center: kind === 'ortho' ? c : cc, scale: sc, rotate: kind === 'ortho' ? [-c[0], -c[1], 0] : undefined }; };
  /** animated map camera: keys [[time, {center:[lon,lat], scale, rotate?}], ...]; zoom interpolated in log space, centre along great circle */
  G.view = (t, keys) => {
    if (t <= keys[0][0]) return keys[0][1]; const last = keys[keys.length - 1]; if (t >= last[0]) return last[1];
    let i = 1; while (keys[i][0] < t) i++; const a = keys[i - 1], b = keys[i]; const e = MG.easeOf(b[2] || 'cam')(clamp((t - a[0]) / (b[0] - a[0])));
    const A = a[1], B = b[1]; const c = window.d3.geoInterpolate(A.center, B.center)(e); const s = Math.exp(lerp(Math.log(A.scale), Math.log(B.scale), e));
    const out = { center: c, scale: s }; if (A.rotate && B.rotate) out.rotate = A.rotate.map((v, k) => lerp(v, B.rotate[k], e)); else if (A.rotate || B.rotate) out.rotate = [-c[0], -c[1], 0];
    return out;
  };
  /** d3 geoPath bound to ctx */
  G.path = (ctx, pr) => window.d3.geoPath(pr, ctx);
  /** fill/stroke a feature (or FeatureCollection / geometry). style: {fill, stroke, width, alpha, dash, shadow:{blur,dx,dy,color}, blend} */
  G.draw = (ctx, pr, f, s = {}) => {
    if (!f) return; const path = G.path(ctx, pr); ctx.save(); if (s.alpha !== undefined) ctx.globalAlpha *= s.alpha; if (s.blend) ctx.globalCompositeOperation = s.blend;
    ctx.beginPath(); path(f);
    if (s.shadow) { ctx.shadowColor = s.shadow.color || 'rgba(20,10,5,0.35)'; ctx.shadowBlur = s.shadow.blur ?? 20; ctx.shadowOffsetX = s.shadow.dx ?? 0; ctx.shadowOffsetY = s.shadow.dy ?? 10; }
    if (s.fill) { ctx.fillStyle = s.fill; ctx.fill('evenodd'); }
    ctx.shadowColor = 'transparent';
    if (s.stroke) { ctx.strokeStyle = s.stroke; ctx.lineWidth = s.width || 1.5; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; if (s.dash) ctx.setLineDash(s.dash); ctx.stroke(); }
    ctx.restore();
  };
  /** clip ctx to a feature (call inside save/restore) */
  G.clip = (ctx, pr, f) => { const path = G.path(ctx, pr); ctx.beginPath(); path(f); ctx.clip('evenodd'); };
  /** projected Path2D of a feature (via SVG string) — handy for MG.fx.volume / MG.fx.shadow */
  G.path2d = (pr, f) => new Path2D(window.d3.geoPath(pr)(f) || '');
  /** screen bbox of a feature [x,y,w,h] */
  G.bbox = (pr, f) => { const b = window.d3.geoPath(pr).bounds(f); return [b[0][0], b[0][1], b[1][0] - b[0][0], b[1][1] - b[0][1]]; };
  /** extruded 2.5D slab: draws side walls (stacked offsets) then a lit top. depth in px, dir = extrusion direction (screen) */
  G.slab = (ctx, pr, f, s = {}) => {
    const depth = s.depth ?? 18, dir = s.dir || [0, 1], top = s.top || '#d9b477', side = s.side || MG.col.shade(top, 0.45); const p2 = G.path2d(pr, f);
    if (s.shadow !== false) { ctx.save(); ctx.translate(dir[0] * depth + (s.shadowDx ?? 14), dir[1] * depth + (s.shadowDy ?? 22)); ctx.filter = `blur(${s.shadowBlur ?? 18}px)`; ctx.fillStyle = s.shadowColor || 'rgba(25,12,6,0.35)'; ctx.fill(p2); ctx.restore(); }
    const n = Math.max(1, Math.ceil(depth / 1.5));
    for (let i = n; i >= 1; i--) { const k = i / n; ctx.save(); ctx.translate(dir[0] * depth * k, dir[1] * depth * k); ctx.fillStyle = MG.col.mix(side, MG.col.shade(side, 0.4), k * 0.6); ctx.fill(p2); ctx.restore(); }
    if (s.volume) MG.fx.volume(ctx, p2, G.bbox(pr, f), { color: top, shade: 0.18, hi: 0.18, soft: 0.25, ...s.volume });
    else { ctx.save(); ctx.fillStyle = top; ctx.fill(p2); ctx.restore(); }
    if (s.tex) { ctx.save(); ctx.clip(p2); MG.tex.over(ctx, s.tex, { alpha: s.texAlpha ?? 0.2 }); ctx.restore(); }
    if (s.stroke) { ctx.save(); ctx.strokeStyle = s.stroke; ctx.lineWidth = s.width || 1.5; ctx.lineJoin = 'round'; ctx.stroke(p2); ctx.restore(); }
    if (s.edge !== false) { ctx.save(); ctx.clip(p2); ctx.strokeStyle = s.edgeColor || 'rgba(255,248,230,0.55)'; ctx.lineWidth = 2.5; ctx.translate(-dir[0] * 1.2, -dir[1] * 1.2); ctx.stroke(p2); ctx.restore(); }
    return p2;
  };
  /** graticule lines */
  G.graticule = (ctx, pr, s = {}) => { const g = window.d3.geoGraticule().step(s.step || [10, 10]); G.draw(ctx, pr, g(), { stroke: s.color || 'rgba(30,40,60,0.12)', width: s.width || 1, dash: s.dash }); };
  /** sphere outline / ocean for globes */
  G.sphere = (ctx, pr, s = {}) => G.draw(ctx, pr, { type: 'Sphere' }, s);

  /** stylised globe (orthographic). o: {center:[lon,lat] (faces viewer), scale, x,y, ocean, land, border, light:[x,y], atmosphere color, countries:{name: fill}, relief:boolean, t}
   *  returns the projection for overlays (routes, labels). */
  G.globe = (ctx, o = {}) => {
    G.init(); const pr = G.proj('ortho', { rotate: o.rotate || [-(o.center || [0, 20])[0], -(o.center || [0, 20])[1], 0], scale: o.scale || 420, translate: [o.x ?? MG.W / 2, o.y ?? MG.H / 2] });
    const R = pr.scale(), cx = pr.translate()[0], cy = pr.translate()[1]; const L = o.light || [-0.45, -0.55];
    // atmosphere halo
    if (o.atmosphere !== false) { const g = ctx.createRadialGradient(cx, cy, R * 0.92, cx, cy, R * 1.28); g.addColorStop(0, MG.col.a(o.atmosphere || '#9cc8ff', 0.45)); g.addColorStop(1, MG.col.a(o.atmosphere || '#9cc8ff', 0)); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, R * 1.3, 0, MG.TAU); ctx.fill(); }
    G.sphere(ctx, pr, { fill: o.ocean || '#1f4e8c' });
    ctx.save(); G.clip(ctx, pr, { type: 'Sphere' });
    if (o.relief) { const img = MG.img(o.relief === true ? 'world_relief' : o.relief); if (img) G.raster(ctx, pr, img, [-180, -90, 180, 90], { grid: o.grid || 48, alpha: o.reliefAlpha ?? 1, onlyVisible: true }); }
    else G.draw(ctx, pr, G.land50 || G.world110, { fill: o.land || '#d9b477' });
    if (o.countries) for (const [n, c] of Object.entries(o.countries)) { const f = G.country(n, o.res || '50'); if (f) G.draw(ctx, pr, f, typeof c === 'string' ? { fill: c } : c); }
    if (o.border !== false) G.draw(ctx, pr, G.borders50, { stroke: o.border || 'rgba(40,25,15,0.25)', width: 0.8 });
    if (o.graticule) G.graticule(ctx, pr, { color: o.graticule });
    // terminator-ish lighting: radial light + dark limb
    const lg = ctx.createRadialGradient(cx + L[0] * R * 0.5, cy + L[1] * R * 0.5, R * 0.05, cx, cy, R * 1.05);
    lg.addColorStop(0, 'rgba(255,248,225,0.28)'); lg.addColorStop(0.55, 'rgba(255,248,225,0)'); lg.addColorStop(0.85, 'rgba(10,10,40,0.25)'); lg.addColorStop(1, 'rgba(5,5,25,0.6)');
    ctx.fillStyle = lg; ctx.fillRect(cx - R, cy - R, R * 2, R * 2);
    ctx.restore();
    ctx.save(); ctx.strokeStyle = MG.col.a(o.rim || '#cfe6ff', 0.55); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(cx, cy, R, 0, MG.TAU); ctx.stroke(); ctx.restore();
    return pr;
  };

  /** warp an equirectangular image (covering bbox [lon0,lat0,lon1,lat1]) into any projection */
  G.raster = (ctx, pr, img, bbox, o = {}) => {
    const [lon0, lat0, lon1, lat1] = bbox; const n = o.grid || 24;
    MG.persp.quad(ctx, img, (u, v) => { const lon = lon0 + u * (lon1 - lon0), lat = lat1 - v * (lat1 - lat0); if (o.onlyVisible) { const r = pr.rotate(); const d = window.d3.geoDistance([lon, lat], [-r[0], -r[1]]); if (d > Math.PI / 2 + 0.15) return null; } const p = pr([lon, lat]); return p && isFinite(p[0]) ? p : null; }, n, { alpha: o.alpha });
  };
  /** Iberian shaded relief (Natural Earth) drawn into projection. o: {alpha, clip: feature, grid} */
  G.IBERIA_BBOX = [-19, 26, 6, 45.5];
  G.relief = (ctx, pr, o = {}) => { const img = MG.img('iberia_shaded'); if (!img) return; ctx.save(); if (o.clip) G.clip(ctx, pr, o.clip); G.raster(ctx, pr, img, G.IBERIA_BBOX, { grid: o.grid || 28, alpha: o.alpha ?? 1 }); ctx.restore(); };
  /** height (0..1 normalised; ~0 = sea level, ~1 ≈ 2500 m+) sampled from the Iberia height raster */
  G.height = (lon, lat) => { const H = G._hdata(); if (!H) return 0; const [lon0, lat0, lon1, lat1] = G.IBERIA_BBOX; const x = clamp((lon - lon0) / (lon1 - lon0)) * (H.w - 1), y = clamp((lat1 - lat) / (lat1 - lat0)) * (H.h - 1); const i = Math.floor(x), j = Math.floor(y), fx = x - i, fy = y - j; const g = (a, b) => H.d[(Math.min(H.h - 1, b) * H.w + Math.min(H.w - 1, a))]; return lerp(lerp(g(i, j), g(i + 1, j), fx), lerp(g(i, j + 1), g(i + 1, j + 1), fx), fy) / 255; };
  G._hdata = () => { if (G._H) return G._H; const img = MG.img('iberia_height'); if (!img) return null; const c = MG.canvas(img.width, img.height); const x = c.getContext('2d'); x.drawImage(img, 0, 0); const d = x.getImageData(0, 0, c.width, c.height).data; const a = new Float32Array(c.width * c.height); for (let i = 0; i < a.length; i++) a[i] = d[i * 4]; G._H = { w: c.width, h: c.height, d: a }; return G._H; };
  /** elevation contour bands as GeoJSON MultiPolygons in lon/lat. thresholds 0..1. Cached. (sea is 0) */
  G.reliefBands = (thresholds = [0.12, 0.3, 0.45, 0.6, 0.75], smooth = 1) => {
    const key = thresholds.join(',') + ':' + smooth; G._bands = G._bands || {}; if (G._bands[key]) return G._bands[key];
    const H = G._hdata(); if (!H) return [];
    // optional box blur for smoother contours
    let d = H.d; if (smooth) { const out = new Float32Array(d.length); const r = smooth; for (let y = 0; y < H.h; y++) for (let x = 0; x < H.w; x++) { let s = 0, n = 0; for (let j = -r; j <= r; j++) for (let i = -r; i <= r; i++) { const xx = x + i, yy = y + j; if (xx < 0 || yy < 0 || xx >= H.w || yy >= H.h) continue; s += d[yy * H.w + xx]; n++; } out[y * H.w + x] = s / n; } d = out; }
    const vals = Array.from(d, (v) => v / 255); const cs = window.d3.contours().size([H.w, H.h]).thresholds(thresholds)(vals);
    const [lon0, lat0, lon1, lat1] = G.IBERIA_BBOX; const tx = (p) => [lon0 + (p[0] / H.w) * (lon1 - lon0), lat1 - (p[1] / H.h) * (lat1 - lat0)];
    const res = cs.map((c) => ({ type: 'Feature', properties: { value: c.value }, geometry: { type: 'MultiPolygon', coordinates: c.coordinates.map((poly) => poly.map((ring) => ring.map(tx).reverse())) } }));
    G._bands[key] = res; return res;
  };

  // ---------- overlays ----------
  /** project lon/lat → [x,y] (null if clipped) */
  G.pt = (pr, ll) => pr(ll);
  /** great-circle route between lon/lat points with progress. o: {color,width,dash,progress,lift (px arc height on flat maps), head (radius), headColor, arrow, alpha, glow}
   *  returns screen points of the drawn part. */
  G.route = (ctx, pr, a, b, o = {}) => {
    const n = o.n || 64; const ip = window.d3.geoInterpolate(a, b); const pts = []; const lift = o.lift || 0;
    for (let i = 0; i <= n; i++) { const u = i / n; const p = pr(ip(u)); if (!p || !isFinite(p[0])) continue; pts.push([p[0], p[1] - Math.sin(u * Math.PI) * lift]); }
    if (o.glow) { MG.fx.line(ctx, pts, { ...o, width: (o.width || 3) * 4, color: o.glow, alpha: 0.25, head: 0 }); }
    const end = MG.fx.line(ctx, pts, { color: o.color || '#c2362b', width: o.width || 3, dash: o.dash, dashOffset: o.dashOffset, progress: o.progress ?? 1, head: o.head, headColor: o.headColor, alpha: o.alpha });
    if (o.arrow && (o.progress ?? 1) > 0.02) MG.fx.arrowHead(ctx, MG.path.trim(pts, 0, o.progress ?? 1), o.arrow, o.color || '#c2362b');
    return { pts, end };
  };
  /** polyline in lon/lat (rivers, borders) with progress; smooth via spline */
  G.line = (ctx, pr, coords, o = {}) => { const pts = MG.path.spline(coords.map((c) => pr(c)).filter(Boolean), o.smooth ?? 6); return { pts, end: MG.fx.line(ctx, pts, o) }; };
  /** pin + label. o: {text, font,size,weight,color, dot, dotColor, dx, dy, align, halo, t, t0 (animate), leader:[dx,dy], pulse} */
  G.label = (ctx, pr, ll, o = {}) => {
    const p = pr(ll); if (!p) return; const t = o.t ?? 1, t0 = o.t0 ?? 0; const k = o.t0 !== undefined ? MG.prog(t, t0, t0 + 0.5) : 1; if (k <= 0) return p;
    ctx.save(); ctx.globalAlpha *= (o.alpha ?? 1) * k;
    if (o.pulse) { const u = ((t - t0) * 0.8) % 1; ctx.strokeStyle = o.dotColor || '#c2362b'; ctx.lineWidth = 2; ctx.globalAlpha *= 1 - u; ctx.beginPath(); ctx.arc(p[0], p[1], (o.dot || 6) + u * 28, 0, MG.TAU); ctx.stroke(); ctx.globalAlpha /= Math.max(0.001, 1 - u); }
    if (o.dot !== 0) { ctx.fillStyle = o.dotColor || '#c2362b'; ctx.beginPath(); ctx.arc(p[0], p[1], (o.dot || 6) * MG.ease.outBack(k), 0, MG.TAU); ctx.fill(); ctx.strokeStyle = o.dotRing || '#fff8ea'; ctx.lineWidth = 2; ctx.stroke(); }
    let lx = p[0] + (o.dx ?? 14), ly = p[1] + (o.dy ?? 6);
    if (o.leader) { const ex = p[0] + o.leader[0], ey = p[1] + o.leader[1]; ctx.strokeStyle = o.leaderColor || o.color || '#1d1a1f'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(lerp(p[0], ex, k), lerp(p[1], ey, k)); ctx.stroke(); lx = ex + (o.leader[0] >= 0 ? 8 : -8); ly = ey + 6; }
    if (o.text) MG.text.reveal(ctx, o.text, lx, ly, t, t0 + 0.1, { font: o.font || MG.F.grotesk, size: o.size || 26, weight: o.weight || 600, color: o.color || '#1d1a1f', align: o.align || (o.leader && o.leader[0] < 0 ? 'right' : 'left'), style: o.style || 'rise', by: 'word', stroke: o.halo, strokeW: o.haloW || 6, tracking: o.tracking });
    ctx.restore(); return p;
  };
  /** expanding ripple marker */
  G.pulse = (ctx, pr, ll, t, o = {}) => { const p = pr(ll); if (!p) return; for (let k = 0; k < (o.rings || 2); k++) { const u = MG.fract(t * (o.speed || 0.7) + k / (o.rings || 2)); ctx.save(); ctx.strokeStyle = o.color || '#c2362b'; ctx.globalAlpha = (1 - u) * (o.alpha ?? 0.8); ctx.lineWidth = o.width || 2; ctx.beginPath(); ctx.arc(p[0], p[1], (o.r0 || 6) + u * (o.r || 40), 0, MG.TAU); ctx.stroke(); ctx.restore(); } };
  /** choropleth: features + valueFn(f) → colour via ramp stops; style extra */
  G.choropleth = (ctx, pr, fc, valueFn, stops, s = {}) => { for (const f of fc.features) { const v = valueFn(f); if (v === null || v === undefined) continue; G.draw(ctx, pr, f, { fill: typeof v === 'string' ? v : MG.col.ramp(stops, v), stroke: s.stroke, width: s.width, alpha: s.alpha }); } };
  /** Canary Islands inset box (they are ~1000 km SW of the peninsula — always show them boxed, never "floating near Portugal") */
  G.canaryInset = (ctx, box, s = {}) => {
    G.init(); const can = G.region('Canary Islands'); const [x, y, w, h] = box; const pr = G.proj('mercator', { center: [-15.7, 28.4], scale: 1 }); pr.fitExtent([[x + 12, y + 12], [x + w - 12, y + h - 12]], can);
    ctx.save(); if (s.alpha !== undefined) ctx.globalAlpha *= s.alpha; ctx.strokeStyle = s.frame || 'rgba(30,25,20,0.45)'; ctx.lineWidth = 1.5; ctx.setLineDash([6, 5]); ctx.strokeRect(x, y, w, h); ctx.setLineDash([]);
    G.draw(ctx, pr, can, { fill: s.fill || '#d9b477', stroke: s.stroke, width: s.width });
    if (s.label !== false) MG.text.draw(ctx, s.label || 'CANARY ISLANDS', x + 10, y + h - 10, { font: MG.F.mono, size: 13, weight: 500, color: s.labelColor || 'rgba(30,25,20,0.7)', tracking: 0.12 });
    ctx.restore(); return pr;
  };
})();
