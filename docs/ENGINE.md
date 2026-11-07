# Engine reference (MG)

Everything is plain browser JavaScript on a global `MG`. Each frame is a **pure function of time t** (seconds on the
voice-over timeline): no `Math.random()`, no `Date`, no state that depends on previous frames (use `MG.rand/hash/noise`,
caches built in `init()` and `MG.follow` for physics-like follow-through). Frames are rendered out of order by several
browsers in parallel.

Files: `engine/util.js` (math, easing, keys, springs, noise, colour, VO timing) · `draw.js` (canvases, caches, textures,
paths, ink, volume shading, shadows, particles, smoke) · `text.js` (typography) · `camera.js` (2D cam, 2.5D depth stage,
perspective warp, Three.js bridge) · `geo.js` (maps) · `core.js` (segments, scenes, transitions, post) · `audio.js`
(procedural music + SFX) · `kit.js` (palette, motifs, map styles, interstitials, character toolkit) · `boot.js`.

## Segments & scenes (core.js)
```js
MG.segment('S03', {
  start: 351.14, end: 507.32,              // exact, given in docs/SEGMENTS.md
  scenes: [
    { id: 's03_columbus', start: 351.14, end: 359.9,
      init() { /* once: build caches, THREE scenes, pre-render static layers */ },
      draw(ctx, t, S) { /* t absolute seconds; S = {t0,t1,lt,dur,p,seg,id}; ctx is a fresh 1920×1080 2D context */ },
      transIn: { type: 'tear', dur: 0.8, dir: 'right' },   // transition FROM the previous scene (any segment)
      post: { grade: 'archival', grain: 0.06, vignette: 0.4 } },
  ],
  overlays: [],                              // optional scenes drawn on top of everything in their time range
  audio(A) { /* music + sfx, absolute times */ },
});
```
* Scenes must tile your range with no gaps: first `start` = segment start, last `end` = segment end.
* During a `transIn` window `[start, start+dur]` the previous scene is still drawn with `t > its end` — keep it alive.
* Paint the full background every frame (opaque). `ctx` is reset before `draw`.
* Errors inside `draw` are caught and logged (and paint a magenta error frame) — check `node tools/snap.js` output.
* `post` (object or `fn(t,S)`): `grade` (`neutral warm golden cool night archival bleach noir vivid retro heat`), `grain`
  (0.045), `vignette` (0.32), `bloom` (0..1), `bloomThreshold`, `halation`, `aberration` (≥0.0012 enables edge RGB split),
  `temp`, `tint`, `sat`, `contrast`, `lift`, `gamma`, `gain`, `fade` (0..1), `fadeColor` [r,g,b] 0..1, `letterbox` (0..0.25).
  Post blends automatically across transitions.

### Transitions `MG.transitions` (type names) and presets `MG.kit.T`
`cut fade blur whip push slide iris shape wipe tear ink zoom flash tiles split dip` — options per type:
`whip {dir:'left|right|up|down', smear}` · `iris {x,y,ring,ringW,close}` · `shape {path:(p)=>Path2D, stroke}` ·
`wipe {angle, band, bandW, band2}` · `tear {dir, paper, seed}` · `ink {scale, seed}` · `zoom {x,y,amount,from}` ·
`flash {color,x,y}` · `tiles {size,color}` · `split {vertical}` · `dip {color}` · all: `dur`, `ease`.
Custom: `transIn: { type: (ctx, A, B, p, o) => {...}, dur }` (A = previous frame canvas, B = next).
Presets: `MG.kit.T.sombra`, `MG.kit.T.sunIris(x,y)`, `.tiles`, `.tear`, `.whipL`, `.whipR`, `.rack`, `.flash`.

## Time & voice-over (util.js)
`MG.T('word', approxSec)` → start time of that spoken word nearest approx · `MG.Tend(...)` · `MG.phrase('half a billion', 51)`
→ `{s, e, words:[{w,s,e}]}` · `MG.wordsIn(a,b)` · `MG.speaking(t)` · `MG.words`, `MG.sentences`.
Exact sentence timings per segment: `docs/script/Sxx.md`.  **Sync visuals to the words, not to guesses.**

## Math / animation
`MG.clamp lerp invLerp map(v,a,b,c,d,ease) smoothstep fract mod deg dist lerpAngle`
`MG.ease.{linear,inQuad…inOutQuint,inSine…,inExpo…,inCirc…,inBack,outBack,inOutBack,outElastic,outBounce,bezier(),backOut(s),steps(n)}`
and film presets `MG.ease.out / in / inOut / cam / snap / soft`.
`MG.prog(t,a,b,ease='out')` eased 0..1 · `MG.lin(t,a,b)` · `MG.win(t,a,b,inD,outD)` in-hold-out envelope ·
`MG.keys(t, [[time, value|array|{obj}, ease], ...])` keyframes · `MG.spring(dt,f,z)` analytic spring (overshoot) ·
`MG.springTo(t,t0,a,b,f,z)` · `MG.jiggle(t,t0,amp,f,decay)` · `MG.follow(key, targetFn, t, t0, k, d)` deterministic
spring follow (secondary motion) · `MG.wiggle(t,freq,amp,seed,oct)` · `MG.noise2/noise3/fbm` · `MG.rng(seed)()` ·
`MG.hash(n)`, `MG.rand(seed,i)`, `MG.range(seed,i,a,b)`.
Colour: `MG.col.a(hex,alpha)`, `.mix(a,b,t)`, `.lighten/.darken`, `.shade(hex,t)` (toward violet sombra), `.light(hex,t)` (toward warm light), `.ramp(stops,t)`, `.rgb`, `.hex`.

## Drawing (draw.js)
* `MG.canvas(w,h)`, `MG.cache(key,w,h,(ctx,w,h)=>{})` (build once!), `MG.blurred(canvas,px)` (cached blur),
  `MG.sprite(ctx,img,x,y,{scale,rot,alpha,blur,ax,ay,sx,sy,blend})`, `MG.scratch(i)` (shared buffers 0–7: **0,1,2,5,6,7
  are used by the engine — use 3 or 4 or your own MG.canvas**), `MG.reset(ctx)`.
* Textures: `MG.tex.paper(color,{seed,light,blotch,fiber})` full-frame paper · `MG.tex.grain/blotch/fibers/halftone/lines`
  tiles · `MG.tex.over(ctx,'grain|blotch|fibers|halftone|lines',{alpha,blend,color,scale,path})` material overlay inside
  the current clip · `MG.tex.pattern(ctx,tile)` · `MG.tex.puff()` smoke sprite.
* Paths (Path2D): `MG.path.rr circle ellipse poly smooth(pts,closed) blob(cx,cy,r,{n,irr,seed,t,sx,sy}) torn(x,y,w,h,{seed,amp,edges}) star`
  · polylines: `MG.path.along(pts,t)`→[x,y,angle] · `MG.path.trim(pts,t0,t1)` · `MG.path.spline(pts,perSeg)`.
* Strokes: `MG.fx.ink(ctx, pts, {width,color,taper:[a,b],wobble,seed,boil:t,pressure})` brush line ·
  `MG.fx.inkClosed` · `MG.fx.line(ctx,pts,{progress,from,color,width,dash,dashOffset,head,headColor})` draw-on line ·
  `MG.fx.arrowHead(ctx,pts,size,color)`.
* Volume & light: `MG.fx.volume(ctx, path, [x,y,w,h], {color, light:[lx,ly], shade, shadeColor, hi, hiColor, soft, cel,
  rim, rimW, outline, outlineW, tex, texAlpha, bounce})` — makes any 2D shape read as a lit 3D form ·
  `MG.fx.shadow(ctx,path,{dx,dy,blur,color})` · `MG.fx.contact(ctx,x,y,rx,ry,alpha)` ground shadow · `MG.fx.glow` ·
  `MG.fx.rays(ctx,x,y,{n,len,spread,dir,alpha,t})` god rays · `MG.fx.halftone(ctx,path,bbox,{spacing,angle,light})` ·
  `MG.fx.hatch(ctx,path,bbox,{spacing,angle,light})` engraving.
* Particles (stateless): `MG.fx.particles(ctx,{n,seed,t,area:[x,y,w,h],vel:[vx,vy],velJitter,life,size:[a,b],color|colors,
  alpha,gravity,drift,shape:'dot|streak|square|puff|spark'|fn,blend,grow})` · `MG.fx.smoke(ctx,x,y,t,{n,seed,spread,rise,r,alpha,wind,color})`.
* Backgrounds: `MG.fx.vgrad(ctx,stops)`, `MG.fx.rgrad(ctx,cx,cy,r,stops)`, `MG.fx.fill(ctx,c)`, `MG.kit.paper(ctx,color)`, `MG.kit.night(ctx,base,{x,y,r,light})`.

## Typography (text.js)
`MG.F.*` families (see BRIEF §5). `MG.text.set(ctx,{font,size,weight,italic,tracking,stretch})` ·
`MG.text.draw(ctx,str,x,y,{font,size,weight,italic,color,align,stroke,strokeW,alpha,shadow,rot,scale,tracking})` ·
`MG.text.width(ctx,str,o)` · `MG.text.fit(ctx,str,maxW,o)` ·
`MG.text.reveal(ctx,str,x,y,t,t0,{...font, align, color, style, by:'char|word|line', stagger, dur, ease, out:{at,style,dur}, stroke, shadow, center, reverse})`
styles: `rise fade blur drop track split flip type wipe scale slide wave` ·
`MG.text.spoken(ctx, MG.phrase('they made their mark', 120).words, x, y, t, {...})` words appear exactly when spoken ·
`MG.text.count(t,t0,t1,from,to,{decimals,prefix,suffix,sep})` · `MG.text.onPath(ctx,str,pts,{offset,reveal,halo,upright})` ·
`MG.text.block` (avoid).  Tracking: values < 2 are em (0.2 = 0.2em), otherwise px.

## Camera & depth (camera.js)
`MG.cam.apply(ctx,{x,y,zoom,rot,dx,dy})` · `MG.cam.handheld(t,amp,seed)` · `MG.cam.shake(t,t0,amp,decay)` · `MG.cam.add(...)`.
2.5D: `MG.depth.stage(ctx, cam{x,y,z,focal,focus,aperture,maxBlur,rot,dx,dy}, layers[{z, draw(ctx,scale,blur) | sprite,x,y, alpha, blur, fog:[color,a]}])`
— parallax + depth-of-field from real depth; pre-render static layers as sprites (`MG.cache`) for speed ·
`MG.depth.project(cam,x,y,z)`. Perspective: `MG.persp.project([x,y,z], cam{x,y,z,yaw,pitch,roll,fov})`,
`MG.persp.quad(ctx,img,corners|fn,div)`, `MG.persp.ground(ctx,img,{w,h,x,z,y},cam)` (e.g. a map lying on a table).
Three.js: `THREE`, `THREE_ADDONS.{RoomEnvironment,RoundedBoxGeometry,ConvexGeometry,SVGLoader,BufferGeometryUtils,SimplexNoise}`;
build scenes in `init()`, then per frame set transforms from t and `const c = MG.three.render(scene, camera, {slot, clear, clearAlpha, exposure})`
→ 1920×1080 canvas to `ctx.drawImage(c,0,0)`. `MG.three.env()` PBR environment, `MG.three.canvasTexture(canvas)`,
`MG.three.imageTexture('world_relief'|'bluemarble'|'iberia_shaded')`. Rendering is software GL in headless Chrome:
keep 3D scenes lean (≤ ~200k triangles, no shadow maps unless essential, MeshStandard/Physical materials with real
colours + roughness, textures from canvases for detail). Use slots 0–3 for your own renders (4 is used by the globe).

## Maps (geo.js) — see BRIEF §10
`MG.geo.country(name,res='50'|'110'|'10')` (aliases: USA, UK, Britain…) · `MG.geo.countries([...])` · `MG.geo.region('Catalonia')`
(17 communities + Ceuta, Melilla; `.properties.en`) · `MG.geo.province('Soria'|'42')` · `MG.geo.regions`, `.provinces`,
`.peninsular()`, `.regionMesh`, `.provinceMesh`, `.world50`, `.world110`, `.land50`, `.borders50`, `.iberia10` ·
data: `MG.geo.cities.Madrid` … (see data/geo_extra.js), `MG.geo.rivers.{Tagus,Ebro,Guadalquivir,Douro,Guadiana}`,
`MG.geo.ranges.{Pyrenees,Cantabrian,SistemaCentral,SistemaIberico,SierraMorena,Baetic}`, `MG.geo.places`, `MG.geo.density[id]`.
Projection: `MG.geo.proj(kind,{center,scale,rotate,translate})` kinds `mercator equirect ortho natural conic spain albers azimuthal`;
`MG.kit.view('iberia'|'iberiaWide'|'spainTight'|'westMed'|'europe'|'atlantic'|'world', overrides)`; `MG.geo.fitParams(kind, feature, box)`;
camera flights `MG.geo.view(t, [[time,{center,scale,rotate?},ease], …])` then `MG.geo.proj(kind, v)`.
Draw: `MG.geo.draw(ctx,pr,feature,{fill,stroke,width,alpha,dash,shadow,blend})` · `MG.geo.clip` · `MG.geo.path2d(pr,f)` ·
`MG.geo.bbox` · `MG.geo.slab(ctx,pr,f,{depth,top,side,dir,tex,stroke,volume})` 2.5D extruded country · `MG.geo.graticule` ·
`MG.geo.globe(ctx,{center,scale,x,y,relief:true|'bluemarble',countries:{Spain:'#..'},atmosphere,ocean,land,border})` → projection ·
`MG.geo.relief(ctx,pr,{alpha,clip})` Iberian shaded relief · `MG.geo.reliefBands([thresholds])` elevation contour polygons
(stack them as paper layers) · `MG.geo.height(lon,lat)` · `MG.geo.raster(ctx,pr,img,bbox)` · overlays:
`MG.geo.route(ctx,pr,[lon,lat],[lon,lat],{progress,color,width,dash,lift,head,arrow,glow})` · `MG.geo.line(ctx,pr,coords,{progress,...})` ·
`MG.geo.label(ctx,pr,ll,{text,t,t0,dot,dotColor,dx,dy,leader:[dx,dy],pulse,halo,size,font})` · `MG.geo.pulse` ·
`MG.geo.choropleth(ctx,pr,fc,valueFn,stops)` · `MG.geo.canaryInset(ctx,[x,y,w,h],{fill,label})`.
Kit: `MG.kit.iberiaMap(ctx,{view,lift,relief,regions,provinces,spain,sea,portugal})` standard base map · `MG.kit.seaBg` · `MG.kit.map` tokens.

## Kit (kit.js)
Palette `MG.PAL`, states `MG.STATES`. Motifs: `MG.kit.sun(ctx,x,y,r,t,{variant:'sun|coin|clock|flat',rays,corona,halftone,hour,ring})`,
`MG.kit.solSombra(ctx,pos,{angle,alpha})`. Interstitials (CLIENT: `MG.kit.numberCard` is BANNED; avoid slide-like cards): 
`MG.kit.dateCard(ctx,t,t0,year,{sub,state})`, `MG.kit.chapter(ctx,t,t0,title,{kicker,state})`, `MG.kit.tag(ctx,t,t0,name,{sub,x,y})`,
`MG.kit.card(ctx,x,y,w,h,{seed,rot,color,draw})` torn paper card. Characters: `MG.kit.eye(ctx,x,y,{r,look,blink,lid,angry,sad,iris,skin})`,
`MG.kit.brow`, `MG.kit.mouth(ctx,x,y,{w,mood,open})`, `MG.kit.hand(ctx,x,y,{pose,angle,s,skin,flip})`, `MG.kit.blink(t,seed)`,
`MG.kit.squash(k)`, `MG.kit.twos(t)`, `MG.kit.alive(t,seed)`. These are building blocks — design the characters yourself.

## Audio (audio.js) — `audio(A)` in your segment, absolute seconds, rendered offline for [start, end+6s]
* Music styles: `A.music(style, t0, t1, {key, bpm, intensity: n | fn(t) | [[t,v],...], gain, seed, fadeIn, fadeOut, prog})`
  styles: `flamenco andalusi epic tension dread sneaky retro60s pulse warm ambient march lament hopeful triumph fiesta mystery heat sting`
  (calibrated: intensity 0.7 ≈ −28 LUFS). Overlap cues by 1–2 s with fades for smooth mood changes; change music on story turns.
* Instruments (compose your own motifs!): `A.guitar/oud/harp/pizz(t, note, {vel,pan,dur,bend})`, `A.strum(t, notes[], {dir,spread,vel})`,
  `A.piano(t,note,{vel})`, `A.mallet(t,note,{kind:'marimba|vibes|celesta|musicbox|bell|glock|kalimba'})`, `A.bell`,
  `A.drum(t, kind, {vel,pan,p,rate})` kinds `kick kick808 snare brush clap hat ohat shaker rim tom cajon cajonSlap castanet doum tek frame timpani taiko tambourine triangle woodblock cowbell crash gong tick tock`,
  sustained `A.strings/cello/pad/brass/horn/choir/organ/accordion/flute/whistle/clarinet/bass/synthbass/lead/drone/glass(t, dur, notes, {vel,attack,release,pan,cutoff,glide,swell})`.
  Theory: `A.midi('E3')`, `A.hz`, `A.scale(root,name,oct)`, `A.chord(root,quality,inv)`, `A.deg(root,scale,n)`; scales
  `major minor dorian phrygian phrygDom hijaz harmMinor lydian mixolydian pentMinor pentMajor wholeTone blues chromatic`.
  Sequencing: `A.grid(t0,t1,bpm,div,fn)`, `A.pattern(t0,t1,bpm,div,'x..x',fn)`, `A.bars(t0,t1,bpm,beats,fn(barStart,i,beatLen))`, `A.level(spec,t)`.
* SFX `A.sfx.*`: `whoosh(t,{dur,dir,gain,pitch})` (peaks AT t) `swish` `impact(t,{size})` `sub` `boom` `tonal(t,notes)`
  `riser(t,{dur})` (ends AT t) `swell` `downlifter` `click tick tock pop blip chime ding` `paper slide stamp thud typekey shutter`
  `coins register heartbeat clock(t,{dur,bpm})` `amb(kind,t,dur,{gain})` kinds `wind sea crowd rain fire city room cicadas hum space`
  `birds(t,dur)` `train(t,dur)` `plane(t,dur)` `explosion thunder spray splash powerDown creak cannon churchBell glitch cheer whistleRef sizzle(t,dur)`.
* Levels: keep `gain` ≤ 1 for music; SFX gain 0.5–1 typical; big hits only at real peaks. Check with
  `node tools/snap.js --only s03 --audio S03 --out <dir>` → integrated loudness should be ≈ −30…−25 LUFS, true peak < −6 dBFS.

## Review tools
```
node tools/snap.js --only s03 --times 352,355.5 --out DIR          # stills (PNG) — look at them!
node tools/snap.js --only s03 --range 351 507 2 --sheet --out DIR  # contact sheet every 2 s
node tools/snap.js --only s03 --strip 380 0.1 12 --out DIR         # motion strip (12 frames, 0.1 s apart)
node tools/snap.js --only s03 --audio S03 --out DIR                # WAV + loudness + spectrum/wave PNG
node tools/snap.js --only s03 --validate --times 351.2 --out DIR   # coverage gaps report
```
`--only s02,s03` loads neighbours (to check a handoff). Scene errors and console warnings are printed — fix them all.
