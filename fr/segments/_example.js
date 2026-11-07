MG.segment('EXAMPLE', { // API demo — load with ?only=_example (not part of the film)
  start: 0, end: 30,
  scenes: [
    { id: 'map', start: 0, end: 6, draw(ctx, t, S) {
        const pr = MG.kit.iberiaMap(ctx, { view: 'iberia', lift: 14 * MG.prog(t, 0.5, 2), relief: 0.6 });
        MG.geo.line(ctx, pr, MG.geo.rivers.Tagus, { color: MG.PAL.sea, width: 4, progress: MG.prog(t, 1, 3) });
        MG.geo.line(ctx, pr, MG.geo.ranges.Pyrenees, { color: MG.PAL.rojoDeep, width: 6, progress: MG.prog(t, 1, 3), dash:[2,10] });
        MG.geo.label(ctx, pr, MG.geo.cities.Madrid, { text: 'MADRID', t, t0: 1.2, pulse: true });
        MG.text.reveal(ctx, 'More rock than water', 140, 160, t, 0.3, { font: MG.F.display, weight: 800, size: 84, color: MG.PAL.ink });
        MG.geo.canaryInset(ctx, [80, 820, 300, 180]);
      }, post: { grade: 'warm' } },
    { id: 'sun', start: 6, end: 12, transIn: MG.kit.T.sunIris(960, 540), draw(ctx, t, S) {
        MG.kit.paper(ctx, MG.PAL.paper);
        MG.kit.sun(ctx, 960, 520, 200 + 10 * Math.sin(t), t, { rays: 0.7 });
        MG.kit.sun(ctx, 1500, 700, 90, t, { variant: 'coin' });
        MG.kit.sun(ctx, 420, 700, 110, t, { variant: 'clock', hour: 10.5 + t * 0.1 });
        MG.text.spoken(ctx, MG.phrase('Which country gets the most tourists', 1).words, 960, 900, t - 6 + 0.16, { font: MG.F.grotesk, weight: 800, size: 64, align: 'center', color: MG.PAL.ink });
        // character face test
        const x = 1500, y = 300; const blink = MG.kit.blink(t, 3);
        MG.fx.volume(ctx, MG.path.blob(x, y, 90, { seed: 2, irr: 0.08, sy: 1.15 }), [x - 100, y - 110, 200, 220], { color: '#E2A77F', shade: 0.5, rim: '#FFE7C2', rimW: 4, outline: '#2a1a16' });
        MG.kit.eye(ctx, x - 32, y - 10, { r: 20, look: [Math.sin(t), 0.2], blink, skin: '#E2A77F' }); MG.kit.eye(ctx, x + 32, y - 10, { r: 20, look: [Math.sin(t), 0.2], blink, skin: '#E2A77F' });
        MG.kit.brow(ctx, x - 32, y - 42, { w: 44, raise: Math.sin(t * 2) * 0.5 }); MG.kit.brow(ctx, x + 32, y - 42, { w: 44, raise: Math.sin(t * 2) * 0.5, flip: true });
        MG.kit.mouth(ctx, x, y + 45, { w: 56, mood: 'smile', open: 0.5 + 0.5 * Math.sin(t * 3) });
        MG.kit.hand(ctx, 1650, 420, { pose: 'point', angle: -2.4, s: 1.4 });
      }, post: { grade: 'golden', bloom: 0.2 } },
    { id: 'globe', start: 12, end: 18, transIn: MG.kit.T.tiles, draw(ctx, t) {
        MG.kit.night(ctx, MG.PAL.indigoNight);
        const pr = MG.geo.globe(ctx, { center: [-40 + t * 5, 20], scale: 380, relief: true, countries: { Spain: MG.PAL.sol, Mexico: MG.PAL.solDeep, Philippines: MG.PAL.solDeep } });
        MG.geo.route(ctx, pr, MG.geo.cities.Seville, MG.geo.cities.Veracruz, { progress: MG.prog(t, 13, 16), color: MG.PAL.silver, width: 3, head: 6, dash: [10, 8] });
      } },
    { id: 'three', start: 18, end: 24, transIn: MG.kit.T.whipL,
      init() { const T = THREE; this.sc = new T.Scene(); this.cam = new T.PerspectiveCamera(35, 16/9, 0.1, 100); this.cam.position.set(0, 1.2, 6); this.cam.lookAt(0,0,0); this.sc.environment = MG.three.env(); const m = new T.Mesh(new THREE_ADDONS.RoundedBoxGeometry(1.6,1.6,1.6,4,0.15), new T.MeshStandardMaterial({ color: 0xc8693f, roughness: 0.6 })); this.m = m; this.sc.add(m); const l = new T.DirectionalLight(0xfff0d0, 2.5); l.position.set(-3,4,3); this.sc.add(l); },
      draw(ctx, t) { MG.kit.paper(ctx, MG.PAL.paper2); this.m.rotation.y = t * 0.6; this.m.rotation.x = 0.3; const c = MG.three.render(this.sc, this.cam); ctx.drawImage(c, 0, 0); } },
    { id: 'bands', start: 24, end: 30, transIn: MG.kit.T.sombra, draw(ctx, t) {
        const pr = MG.kit.view('iberia'); MG.kit.seaBg(ctx);
        const es = MG.geo.country('Spain','10'); MG.geo.draw(ctx, pr, es, { fill: MG.PAL.oliva });
        const bands = MG.geo.reliefBands([0.15, 0.3, 0.45, 0.6, 0.75]);
        ctx.save(); MG.geo.clip(ctx, pr, es);
        bands.forEach((b, i) => { const k = MG.prog(t, 24.3 + i * 0.25, 25 + i * 0.25); ctx.save(); ctx.translate(0, -i * 6 * k); MG.geo.draw(ctx, pr, b, { fill: MG.col.ramp([MG.PAL.olivaLight, MG.PAL.sand, MG.PAL.terracota, MG.PAL.rojoDeep], i / 4), shadow: { blur: 10, dy: 6 * k, color: 'rgba(40,20,10,0.35)' }, alpha: k }); ctx.restore(); });
        ctx.restore();
      } },
  ],
  audio(A) {
    A.music('ambient', 0, 6, { key: 'D3' });
    A.music('flamenco', 6, 12, { intensity: 0.8 });
    A.music('epic', 12, 18, { intensity: 0.8 });
    A.music('pulse', 18, 24, { intensity: 0.8 });
    A.music('andalusi', 24, 30, { intensity: 0.8 });
    A.sfx.whoosh(6); A.sfx.impact(12); A.sfx.whoosh(18, { dir: -1 }); A.sfx.riser(24); A.sfx.coins(14); A.sfx.pop(3);
  },
});
