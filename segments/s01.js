(function(){
const MG = window.MG;
MG.segment('S01', { start: 0, end: 174.63, scenes: [
 { id: 'a', start: 0, end: 10, draw(ctx, t) { MG.kit.iberiaMap(ctx, { view: 'iberia', relief: 0.75, lift: 14 }); } },
 { id: 'b', start: 10, end: 20, draw(ctx, t) { MG.kit.iberiaMap(ctx, { view: { kind: 'spain', center: [-3.6, 40.0], scale: 6900 + t * 10 }, relief: 0.75, lift: 14 }); } },
 { id: 'c', start: 20, end: 30, draw(ctx, t) { MG.kit.night(ctx); MG.geo.globe(ctx, { center: [t * 5, 20], scale: 420, relief: true, countries: { Spain: '#F2A33A', Mexico: '#F2A33A' } }); } },
 { id: 'd', start: 30, end: 40, draw(ctx, t) { MG.kit.paper(ctx); MG.kit.sun(ctx, 960, 540, 200, t, { rays: 0.6 }); } },
 { id: 'e', start: 40, end: 174.63, draw(ctx, t) { MG.kit.paper(ctx); } },
]});
})();
