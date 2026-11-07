# SPAIN — creative brief & art direction ("SOL Y SOMBRA")

A 29-minute documentary / pop-science YouTube film (1920×1080, 30 fps) about Spain: how the country that lost the
world's greatest empire learned to live better than many of the countries that defeated it — and what it costs.
Every frame is drawn in code (Canvas 2D + Three.js). There is NO stock footage, NO photos, NO external images except the
bundled Natural-Earth relief textures.

## 1. The idea in one paragraph (motion thesis)
In a Spanish bullring the seats are sold as **SOL** (the sunny side) and **SOMBRA** (the shade). The film is built on that
divide. Its visual world is a sun-baked editorial paper world lit by ONE low warm sun from the upper-left: every object
casts a long, violet-tinted shadow; light and shade are the film's grammar. The recurring hero object is **the sun disk** —
a textured saffron disk (`MG.kit.sun`) that keeps transforming: sun → silver peso coin → clock face (Franco's time zone) →
solar panel → olive → football → spotlight → setting sun at the end. A hard diagonal light/shadow line ("the bullring
divide", `MG.kit.solSombra`, `MG.kit.T.sombra`) is the signature wipe. Light vs shade tells the story INSIDE the
scenes (the economy's pillars glow in sun, the problems fall into shade) — never as separate slides. Callbacks tie the film: the
empire's silver routes (S03) return reversed as bank interest (S06) and finally as the world's tourists flying *in* (S11);
"more rock than water" (S02) returns in the drought (S07); the 1940 clock (S04) returns as "dinner at ten" (S11).

## 2. Audience, tone
Curious adults on YouTube, desktop + phone. Tone: confident, warm, wry; serious when the story is serious (civil war,
ETA, migrants' deaths, unmarked graves — no jokes, no bounce there). Authority with a smile.

## 3. What we learned from the references (grammar, not copying)
* **Reels (motion-graphics refs 1–4):** text appears *word by word exactly as it is spoken*; a serif italic lead-in
  ("watch how", "to become a global") over a heavy grotesk key word ("SUPREME", "BRAND"); real objects with real contact
  shadows on paper grounds; circular frames with thin dotted rings; thin connector lines; whole-frame colour-field switches
  (green / red) on emphasis; strike-through marker on wrong answers (TOMORROW / SOMEDAY → NOW); grain + vignette always on;
  pace = a new visual idea every 1.5–3 s; the camera never fully stops.
* **Showreels (animation refs 2–4):** depth everywhere — foreground elements out of focus, characters with cel shading +
  rim light, layered dioramas, isometric cut-aways, light shafts, smoke, chunky expressive caricature characters, rich
  lighting per scene, bold style switching between pieces while each piece is internally consistent.
* Transfer: one idea per beat, text = 1–5 words, objects not icons, depth by layers + shadow + DOF, constant subtle life.

## 4. Colour system (see `MG.PAL`, `MG.STATES` in engine/kit.js)
Base: lime-wash paper `#F2E8D5`, warm ink `#1E1A1D`, **sol** saffron `#F2A33A`/`#E07B24`, **sombra** violet-brown `#3A2B3A`,
almagre red `#B8322A`, azulejo cobalt `#1F4E8C`, sea `#3A6E9E`/`#A9C6DE`, olive `#6F7A3A`, terracotta `#C8693F`, silver, gold.
Shadows are tinted violet (`MG.col.shade`), highlights warm (`MG.col.light`) — never pure black/white shading.
Chapter states (bg / fg / accents) — related, not identical:

| state | used for | feel |
|---|---|---|
| `hook` | cold open, positives | bright paper + saffron + cobalt |
| `land` | geography | sand, terracotta, olive, sea |
| `andalus` | 711–1492 | indigo night, teal, gold, lantern amber, zellige geometry |
| `empire` | 1492–1600 | parchment, old-map engraving (hatching), silver, indigo oceans |
| `decline` | Dutch disease → 1898 | desaturated parchment, storm grey, sepia |
| `war` | 1936–1959 | newsprint bone, black, almagre red, stencil — black is allowed HERE |
| `miracle` | 1959–1975 | 1960s travel-poster pastels: turquoise, coral, butter, halftone print |
| `europe` | Transition → 1992 | EU blue + saffron stars + cal white |
| `economy` | pillars | clean cal + ink + saffron + cobalt, isometric 2.5D |
| `crisis` | 2008 | concrete grey, cold shadows, warning red |
| `summer` | housing, tourists | hot orange, water-gun blue |
| `politics` | regions, parties | paper + muted party colours |
| `memory` | Franco's legacy, graves | dark earth, candle amber, bone |
| `border` | geopolitics, migration | night sea navy, coast lights, amber routes |
| `finale` | top numbers → end | golden hour: saffron → rose → violet |

Never a whole sequence of plain black / grey / white backgrounds. Black only where it earns it (war, blackout, memory).

## 5. Typography (all bundled; see `MG.F`)
* Statements: **Fraunces** 700–900 · lead-ins: *Instrument Serif italic* · key nouns / labels: **Bricolage** 600–800 ·
  big numbers & dates: **Big Shoulders** 800–900 · data labels / coordinates / kickers: **JetBrains Mono** (UPPERCASE, tracked).
* Era accents (use only in their era): IM Fell (empire maps), Cinzel (royal inscriptions), Amiri (Arabic), Saira Stencil /
  Big Shoulders Stencil (war posters), Shrikhand (1960s posters), Abril Fatface (newspaper headlines), Bodoni Moda (fashion),
  Unbounded (tech / energy), Permanent Marker (protest signs, strike-throughs), Caveat Brush (hand notes), Climate Crisis (heat).
* Text economy: titles, numbers, names, places, dates, short quotes. **Never paragraphs, never explanations on screen.**
  Max ~5 words per beat (a number + its unit + a 2-word label is fine). Important text ≥ 40 px; labels ≥ 22 px.
* Typography is staged in space: masks, rises, tracking, depth, perspective, text on paths, kinetic sync with the VO
  (`MG.text.spoken`).

## 6. Motion language (one hand for the whole film)
* Easing: `MG.ease.out` (0.22,1,0.36,1) for entrances/landings; `MG.ease.in` for exits; `MG.ease.cam` for camera.
  Overshoot (`outBack`) only in playful beats — never on serious data, war, death.
* Base unit 0.4 s (12 frames): enters 0.4–0.6 s, big moves 0.8–1.2 s, micro 0.2 s. Word stagger 0.05–0.09 s, chars 0.02–0.03 s.
* Hold discipline: after a key reveal, ≥ 0.3 s of (near) stillness for reading — but the frame never freezes: keep a slow
  camera drift, breathing light, particles, boil.
* Hand-drawn / paper-cut elements animate **on twos** (`MG.kit.twos(t)`, 12 fps steps) with line boil; camera, data and
  3D stay smooth 30 fps.
* Camera is alive: handheld micro-drift (`MG.cam.handheld`, 2–4 px) in illustrative scenes; deliberate push-in / pull-out /
  track / crane / orbit / foreground pass-through to *reveal* — never an endless slow zoom; never the same move twice in a row.
* Every move has a job: reveal, focus, connect, compare, transform, explain, change scale / place / time / mood.

## 7. Composition
One clear focal point per frame; negative space; FG / MG / BG layers; directional light; leading lines; scale contrast.
Safe area: keep text & key info inside x 120…1800, y 90…990. Do not overload: if a beat needs a number + a chart + a
character, split it into 2–3 beats.

## 8. Transitions (library: `MG.transitions`, presets `MG.kit.T`)
**CLIENT RULE: no slide-like interstitials.** No full-screen title / number / date cards on flat or split colour
backgrounds, no flat diagonal colour-band wipes (`MG.kit.numberCard` is BANNED; `MG.kit.dateCard` / `MG.kit.chapter`
avoided). Topic changes and dates live INSIDE the visual world (engraved, standing in the scene, on objects, on the map,
perspective type) and are reached by content-motivated, spatial transitions. Graphic wipes / iris / tiles / split / tear
are allowed only when they are a real object or camera move in the scene, not decoration.
Meaningful, varied, never the same one 3× in a row. Family: match cut / object morph (best), camera move / pass-through, foreground wipe by a real object,, whip pan (energetic lists), paper tear (archival / history), azulejo tiles (Andalusia /
identity), rack-focus blur (calm), zoom-through, light flash, shape-mask (e.g. Spain silhouette), split, dip, hard cut on
the beat. Object → infographic, infographic → physical scene, map → real environment, typography → scene.

## 9. Graphics mix (whole film)
2D ≈ 50 % · 2.5D ≈ 35 % · 3D ≈ 15 %. Motion-design / infographics / maps / kinetic type ≥ 60 % of runtime;
character mini-scenes ≤ ~20 % (short, punchy, where a human moment explains better than a chart).

## 10. Maps — the most important information layer (STRICT)
* Only real geodata (`MG.geo`: Natural Earth world 110m/50m/10m, IGN Spain provinces/regions, Natural Earth relief).
  Never hand-draw country outlines. Rivers / ranges / cities from `MG.geo.rivers / ranges / cities` (accurate).
* Projections: Spain / Europe close-ups `spain` (conic conformal); world `natural` or the globe (`MG.geo.globe`, Three.js
  relief texture). Routes = great circles (`MG.geo.route`, optional `lift` arc on flat maps).
* Style (`MG.kit.map`): Spain saffron (or the chapter accent), neighbours muted paper, sea `seaLight` with fine wave lines,
  coast ink line, borders violet-grey. Highlights in almagre red. Labels: Bricolage 600, uppercase tracked for regions;
  numbers in JetBrains Mono; IM Fell on historical maps. Halo (stroke) labels over busy relief.
* Show the Canary Islands in an inset box whenever the whole country / its 17 regions is shown (`MG.geo.canaryInset`).
  Ceuta & Melilla are on the African coast (they are Spain). Gibraltar is British.
* Explain with motion: lift a country as a 2.5D slab (`MG.geo.slab`), push borders, draw routes with moving heads,
  pulse cities, compare sizes at TRUE scale (same projection scale), measure distances with a ruler line + label (km & miles
  when the VO uses miles), choropleths with a 3–5 step legend, flows as particles along paths, fly the camera with
  `MG.geo.view` (log-zoom, great-circle pan). Max ~6 labels at once. Every label must be correct.

## 11. Characters (fewer, but excellent)
Caricatured, memorable, specific silhouettes (Philip II's Habsburg jaw + black ruff; Isabella; Columbus; Franco; Juan
Carlos; the 1981 tricorn-hat officer; Amancio Ortega; a 30-year-old engineer living with his mum; Barcelona protesters;
German retirees…). Built from bespoke paths — NEVER circles/capsules/sticks. Cel shading (2 tones) + rim light + variable
ink outline (`MG.fx.volume`, `MG.fx.ink`), expressive eyes/brows/mouth (`MG.kit.eye/brow/mouth`), hands with poses,
cloth & hair as shaped masses. Animate like cartoons: anticipation, squash & stretch, overlapping action, secondary motion
(`MG.follow`), head turns that slide features for a 3D read, blinks (`MG.kit.blink`), weight shifts; on twos with boil.
Real people: respectful caricature (no mockery of victims; dictators shown as historical figures, not as jokes).
Stage characters in 2.5D sets with FG/MG/BG and light — not a cut-out sliding horizontally on a flat card.

## 12. Sound & music (see docs/ENGINE.md §Audio)
Music almost always present and **changing with the story** (flamenco, Andalusí oud, epic orchestra, tension, dread,
sneaky pizzicato, 1960s lounge, electronic pulse, warm piano, ambient harp, march, lament, hopeful, triumph, rumba
fiesta, mystery, heat drone…). It sits UNDER the narrator: render.js side-chain-ducks the bed under the VO and limits it,
but write it quiet anyway. SFX: tactile and sparse — whoosh only on big camera moves / whips; ticks for counters; paper for
collage; impacts only on true story peaks; risers into reveals; ambiences for places. No harsh peaks.

## 13. Hard NO list
stick figures · capsule / sphere / box people · generic SVG icons (lightbulbs, gears, dollar bills, checkmarks, clouds,
arrows-as-icons) · endless cards / identical rectangles with text · white untextured 3D models · empty Three.js voids ·
one object centred on an empty background without reason · text instead of visualisation · paragraphs · constant black
background · random particles · heavy glow/bloom · cheap gradients / purple-cyan / neon / glassmorphism · same transition
or zoom over and over · endless orbit · 10 ideas in one frame · decorative motion without a job · visual mush.

## 14. Per-scene self-check (do it on stills!)
Meaning (why this image on this line?) · Composition (one focal point?) · Legibility (readable in 1–2 s on a phone?) ·
Motion (does it tell?) · Style (professional? on-brief?) · Overload (what can be removed?) · AI-flavour (template-y? redo).
