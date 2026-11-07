/* =====================================================================
   MG.cam — 2D camera, handheld shake, 2.5D depth stage (parallax + DOF),
   perspective image warping, and the Three.js bridge (MG.three).
   ===================================================================== */
(function () {
  const MG = window.MG; const { clamp, lerp } = MG;
  MG.cam = {};
  /** apply a 2D camera: world point (x,y) appears at screen centre; zoom>1 = closer. */
  MG.cam.apply = (ctx, c) => { const cx = c.cx ?? MG.W / 2, cy = c.cy ?? MG.H / 2; ctx.translate(cx + (c.dx || 0), cy + (c.dy || 0)); if (c.rot) ctx.rotate(c.rot); const z = c.zoom ?? 1; ctx.scale(z, z); ctx.translate(-(c.x ?? MG.W / 2), -(c.y ?? MG.H / 2)); };
  /** handheld micro-motion: returns {dx,dy,rot} ; amp in px */
  MG.cam.handheld = (t, amp = 4, seed = 1, freq = 0.35) => ({ dx: MG.wiggle(t, freq, amp, seed, 3), dy: MG.wiggle(t, freq * 0.9, amp * 0.75, seed + 3, 3), rot: MG.wiggle(t, freq * 0.6, amp * 0.0007, seed + 7, 2) });
  /** impact shake that decays: t0 trigger */
  MG.cam.shake = (t, t0, amp = 14, decay = 6, freq = 18, seed = 2) => { if (t < t0) return { dx: 0, dy: 0, rot: 0 }; const k = Math.exp(-(t - t0) * decay) * amp; return { dx: MG.noise2((t - t0) * freq, seed) * k, dy: MG.noise2((t - t0) * freq, seed + 5) * k, rot: MG.noise2((t - t0) * freq, seed + 9) * k * 0.002 }; };
  /** combine camera offsets */
  MG.cam.add = (...cs) => cs.reduce((a, c) => ({ dx: (a.dx || 0) + (c.dx || 0), dy: (a.dy || 0) + (c.dy || 0), rot: (a.rot || 0) + (c.rot || 0) }), {});

  /** 2.5D depth stage. Layers are flat planes at depth z (world units; camera looks down +z).
   *  cam: {x, y, z, focal=1000, focus (z of sharp plane), aperture (blur px per unit 1/z diff ×1000), rot, dx, dy}
   *  layers: [{z, draw(ctx), sprite?:canvas (pre-rendered, origin at ax,ay), x,y (world pos of sprite), ax, ay, alpha, blur(override), fog:[color, amount]}]
   *  Layer content is drawn in world units; at z the scale is focal/(z-cam.z). */
  MG.depth = {};
  MG.depth.stage = (ctx, cam, layers) => {
    const f = cam.focal ?? 1000, cz = cam.z ?? 0; const sorted = layers.filter((l) => l.z - cz > 1).sort((a, b) => b.z - a.z);
    for (const L of sorted) {
      const d = L.z - cz; const s = f / d; let blur = 0;
      if (L.blur !== undefined) blur = L.blur; else if (cam.focus !== undefined) blur = Math.min(cam.maxBlur ?? 22, Math.abs(1 / d - 1 / (cam.focus - cz)) * (cam.aperture ?? 0) * 1000);
      const xf = (c) => { c.translate(MG.W / 2 + (cam.dx || 0), MG.H / 2 + (cam.dy || 0)); if (cam.rot) c.rotate(cam.rot); c.scale(s, s); c.translate(-(cam.x || 0), -(cam.y || 0)); };
      if (L.draw && !L.sprite && blur > 0.6 && !L.direct) {
        // blurred draw layer: render it sharp into an offscreen buffer, then blur that one bitmap (a canvas filter on every
        // individual fill/drawImage of the layer costs one full blur pass per call)
        const B = MG.scratch(8); const bx = B.getContext('2d'); MG.reset(bx); bx.clearRect(0, 0, MG.W, MG.H); bx.save(); xf(bx); L.draw(bx, s, blur); bx.restore(); MG.reset(bx);
        ctx.save(); if (L.alpha !== undefined) ctx.globalAlpha *= L.alpha; ctx.filter = `blur(${(blur).toFixed(1)}px)`; ctx.drawImage(B, 0, 0); ctx.restore();
      } else {
        ctx.save(); xf(ctx);
        if (L.alpha !== undefined) ctx.globalAlpha *= L.alpha;
        if (L.sprite) { MG.sprite(ctx, L.sprite, L.x || 0, L.y || 0, { ax: L.ax ?? 0.5, ay: L.ay ?? 0.5, blur: blur > 0.5 ? blur / s : 0, scale: L.scale || 1 }); }
        else if (L.draw) { if (blur > 0.6) ctx.filter = `blur(${(blur).toFixed(1)}px)`; L.draw(ctx, s, blur); }
        ctx.restore();
      }
      if (L.fog) { ctx.save(); ctx.globalAlpha = L.fog[1]; ctx.fillStyle = L.fog[0]; ctx.fillRect(0, 0, MG.W, MG.H); ctx.restore(); }
    }
  };
  /** project a world point into screen space for a depth-stage camera */
  MG.depth.project = (cam, x, y, z) => { const f = cam.focal ?? 1000, d = z - (cam.z ?? 0); const s = f / d; return [MG.W / 2 + (cam.dx || 0) + (x - (cam.x || 0)) * s, MG.H / 2 + (cam.dy || 0) + (y - (cam.y || 0)) * s, s]; };

  // ---------- perspective helpers ----------
  MG.persp = {};
  /** simple 3D point projection: cam {x,y,z, yaw, pitch, roll, fov(deg)} ; returns [sx,sy,scale,depth] */
  MG.persp.project = (p, cam) => {
    let x = p[0] - (cam.x || 0), y = p[1] - (cam.y || 0), z = p[2] - (cam.z || 0);
    const cy = Math.cos(cam.yaw || 0), sy = Math.sin(cam.yaw || 0); [x, z] = [x * cy - z * sy, x * sy + z * cy];
    const cp = Math.cos(cam.pitch || 0), sp = Math.sin(cam.pitch || 0); [y, z] = [y * cp - z * sp, y * sp + z * cp];
    const cr = Math.cos(cam.roll || 0), sr = Math.sin(cam.roll || 0); [x, y] = [x * cr - y * sr, x * sr + y * cr];
    const f = (MG.H / 2) / Math.tan(MG.deg((cam.fov || 40) / 2)); const s = f / Math.max(1e-3, z);
    return [MG.W / 2 + x * s, MG.H / 2 + y * s, s, z];
  };
  /** draw image onto an arbitrary quad (TL,TR,BR,BL screen points) via subdivided affine triangles */
  MG.persp.quad = (ctx, img, q, div = 10, o = {}) => {
    const W = img.width, H = img.height; const P = (u, v) => { // bilinear in screen space is wrong for perspective; caller should pass a function for exact mapping
      if (typeof q === 'function') return q(u, v);
      const top = [lerp(q[0][0], q[1][0], u), lerp(q[0][1], q[1][1], u)], bot = [lerp(q[3][0], q[2][0], u), lerp(q[3][1], q[2][1], u)]; return [lerp(top[0], bot[0], v), lerp(top[1], bot[1], v)]; };
    ctx.save(); if (o.alpha !== undefined) ctx.globalAlpha *= o.alpha;
    const tri = (s0, s1, s2, d0, d1, d2) => { // affine map of source triangle (image px) onto dest triangle (screen)
      const sx1 = s1[0] - s0[0], sy1 = s1[1] - s0[1], sx2 = s2[0] - s0[0], sy2 = s2[1] - s0[1];
      const dx1 = d1[0] - d0[0], dy1 = d1[1] - d0[1], dx2 = d2[0] - d0[0], dy2 = d2[1] - d0[1];
      const det = sx1 * sy2 - sx2 * sy1; if (Math.abs(det) < 1e-9) return;
      const a = (dx1 * sy2 - dx2 * sy1) / det, c = (dx2 * sx1 - dx1 * sx2) / det, b = (dy1 * sy2 - dy2 * sy1) / det, d = (dy2 * sx1 - dy1 * sx2) / det;
      const e = d0[0] - (a * s0[0] + c * s0[1]), f = d0[1] - (b * s0[0] + d * s0[1]);
      const cxm = (d0[0] + d1[0] + d2[0]) / 3, cym = (d0[1] + d1[1] + d2[1]) / 3; const ex = (p) => { const vx = p[0] - cxm, vy = p[1] - cym, L = Math.hypot(vx, vy) || 1; return [p[0] + (vx / L) * 0.9, p[1] + (vy / L) * 0.9]; };
      const A = ex(d0), B = ex(d1), C = ex(d2);
      ctx.save(); ctx.beginPath(); ctx.moveTo(A[0], A[1]); ctx.lineTo(B[0], B[1]); ctx.lineTo(C[0], C[1]); ctx.closePath(); ctx.clip(); ctx.transform(a, b, c, d, e, f); ctx.drawImage(img, 0, 0); ctx.restore();
    };
    for (let j = 0; j < div; j++) for (let i = 0; i < div; i++) {
      const u0 = i / div, u1 = (i + 1) / div, v0 = j / div, v1 = (j + 1) / div;
      const p00 = P(u0, v0), p10 = P(u1, v0), p11 = P(u1, v1), p01 = P(u0, v1); if (!p00 || !p10 || !p11 || !p01) continue;
      tri([u0 * W, v0 * H], [u1 * W, v0 * H], [u1 * W, v1 * H], p00, p10, p11); tri([u0 * W, v0 * H], [u1 * W, v1 * H], [u0 * W, v1 * H], p00, p11, p01);
    }
    ctx.restore();
  };
  /** draw a flat canvas lying on the ground plane (y=0 world, XZ plane) under a 3D camera — e.g. a tilted map.
   *  plane: {w, h, x, z} world size/centre; cam for MG.persp.project */
  MG.persp.ground = (ctx, img, plane, cam, div = 14, o = {}) => {
    const w = plane.w, h = plane.h, x0 = (plane.x || 0) - w / 2, z0 = (plane.z || 0) - h / 2, y = plane.y || 0;
    MG.persp.quad(ctx, img, (u, v) => { const p = MG.persp.project([x0 + u * w, y, z0 + (1 - v) * h], cam); return p[3] > 1 ? [p[0], p[1]] : null; }, div, o);
  };

  // ---------- Three.js bridge ----------
  MG.three = {
    _r: null, _snap: [],
    ready: () => !!window.THREE,
    /** shared WebGLRenderer (1920×1080). */
    renderer() {
      if (this._r) return this._r; const T = window.THREE; if (!T) throw new Error('THREE not loaded yet');
      const r = new T.WebGLRenderer({ antialias: false, alpha: true, preserveDrawingBuffer: true, powerPreference: 'high-performance' });
      r.setPixelRatio(1); r.setSize(MG.W, MG.H, false); r.outputColorSpace = T.SRGBColorSpace; r.toneMapping = T.ACESFilmicToneMapping; r.toneMappingExposure = 1.0; r.shadowMap.enabled = false; r.shadowMap.type = T.PCFShadowMap; // enable per scene only if really needed (slow in software GL)
      this._r = r; return r;
    },
    /** PMREM room environment for nice PBR reflections (cached) */
    env() { if (this._env) return this._env; const T = window.THREE; const r = this.renderer(); const pm = new T.PMREMGenerator(r); this._env = pm.fromScene(new window.THREE_ADDONS.RoomEnvironment(), 0.04).texture; return this._env; },
    /** render scene/camera and return a 2D canvas copy (slot keeps two overlapping 3D scenes apart) */
    render(scene, camera, o = {}) {
      const r = this.renderer(); const slot = o.slot || 0; const w = o.w || MG.W, h = o.h || MG.H;
      const sz = r.getSize(new window.THREE.Vector2()); if (sz.x !== w || sz.y !== h) r.setSize(w, h, false);
      if (camera.isPerspectiveCamera && Math.abs(camera.aspect - w / h) > 1e-4) { camera.aspect = w / h; camera.updateProjectionMatrix(); }
      r.setClearColor(o.clear ?? 0x000000, o.clearAlpha ?? 0); if (o.exposure) r.toneMappingExposure = o.exposure; else r.toneMappingExposure = 1;
      r.toneMapping = o.toneMapping ?? window.THREE.ACESFilmicToneMapping;
      r.render(scene, camera);
      let c = this._snap[slot]; if (!c || c.width !== w || c.height !== h) c = this._snap[slot] = MG.canvas(w, h);
      const x = c.getContext('2d'); x.clearRect(0, 0, w, h); x.drawImage(r.domElement, 0, 0); return c;
    },
    /** texture from a 2D canvas (call tex.needsUpdate=true after redrawing) */
    canvasTexture(canvas) { const T = window.THREE; const tx = new T.CanvasTexture(canvas); tx.colorSpace = T.SRGBColorSpace; tx.anisotropy = 8; return tx; },
    /** load an image texture synchronously from a preloaded MG.img */
    imageTexture(name) { const T = window.THREE; const tx = new T.Texture(MG.img(name)); tx.colorSpace = T.SRGBColorSpace; tx.needsUpdate = true; tx.anisotropy = 8; return tx; },
  };
})();
