# ESPAGNE — French version (≈26 min, 1920×1080, 30 fps)

The same film as the English one in the repository root — same engine, same scenes, same score — re-timed to the
French voice-over (`assets/voiceover.mp3`, 25 min 55 s) and with every on-screen text adapted into French.
This folder is self-contained: it does not read anything from the English project.

## Render it

Requirements: **Node.js 18+**, **FFmpeg** in `PATH`, ~10 GB free disk.

```bash
cd fr
```

```bash
npm install
```

```bash
node render.js --workers 6
```

Result: `fr/build/espagne_fr_1080p30.mp4`. All options of the English renderer work the same way
(`--from/--to` in French seconds, `--audio-only`, `--video-only`, `--bed-gain`, `--crf`, `--png`, `--force`);
rendering is resumable (chunks in `build/parts/`, stems in `build/audio/`). The French cut is ≈11 % shorter
(46,800 frames), so expect ≈35–55 minutes on an 8-core machine.

Preview: `node render.js --preview`, then open the printed URL (`…/index.html?preview=1`); `&t=` is in French seconds.

## How the French version works

**Timing.** The animation of every segment is still authored against the English narration (`data/words.js`).
`tools/align_build.py` aligns the English and French scripts sentence by sentence and word by word (numbers, names,
key nouns) and writes `data/align.js` — a monotonic table of `[english s, french s]` anchors — plus the French word
timings `data/words_fr.js`. `engine/i18n.js` turns that table into a time warp:

* `MG.renderFrame(tFr)` draws the English-timed film at `MG.toEn(tFr)`, so every reveal, camera move and cut lands on
  the French words it illustrates (each scene stretches or compresses with its sentence);
* music and sound effects are scheduled through `MG.toOut` (`engine/audio.js`), so hits follow the French voice while
  the music itself keeps a steady tempo;
* "spoken" captions (lines revealed word by word as they are said) are re-synced to the French narrator's own words.

Rebuild the alignment after changing a script: `python3 tools/align_build.py` (report in `tools/align_report.txt`).

**Text.** Every string drawn through `MG.text.*` is translated at draw time from the dictionaries in `i18n/`:
`s01.js … s11.js`, one per segment, with optional per-scene overrides (`MG.i18n({...}, 's06_wind')`) for words whose
translation depends on the picture. Translations follow the French narration, not the English wording: units are
metric only (km, m, hectares), currencies and numbers use French typography (`5 500`, `1,1`, `12 %`, `135 €`,
`1 700 milliards $`), dates and weekdays are French, Spanish words on signs and documents stay Spanish.
A few drawings that spell words letter by letter (rock letters, standing type, the feet/metres ruler, calendars) are
adapted directly in `segments/`; these places are marked with `MG.LANG === 'fr'` or `MG.tr(...)`.

## Checking the translation

```bash
node tools/i18n_collect.js --from 0 --to 1750 --step 0.25 --out build/strings.json
```

Lists every string the film draws (English timeline) and the ones still without a French translation (`missing`).

```bash
node tools/i18n_layout.js --from 0 --to 1750 --step 0.33 --out build/layout.json
```

Reports French strings that leave the frame or run into another label where the English did not.
Stills and contact sheets: `node tools/snap.js --range 300 360 2 --sheet --out build/snaps` (French seconds).
