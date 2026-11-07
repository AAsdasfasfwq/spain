# SPAIN — a motion-design documentary (29 min, 1920×1080, 30 fps)

The whole film is code: every frame is drawn in the browser (Canvas 2D + Three.js), the score and sound design are
synthesised with the Web Audio API, and `render.js` captures it frame-by-frame with Puppeteer and mixes it under the
voice-over with FFmpeg.

## Render it

Requirements: **Node.js 18+**, **FFmpeg** in `PATH`, ~10 GB free disk.

```bash
npm install
```

```bash
node render.js --workers 6
```

Result: `build/spain_1080p30.mp4` (H.264 CRF 18 + AAC 320 k, loudness ≈ −15 LUFS, true peak ≤ −1 dBTP).

* `--workers N` — parallel headless browsers (use ≈ CPU cores − 1). Rendering is resumable: finished 20-second chunks are
  kept in `build/parts/`, audio stems in `build/audio/`; just run the command again after an interruption.
* `--from 300 --to 420` — render only a time range (seconds) → `build/range_300-420.mp4`.
* `--audio-only` — rebuild only the music/SFX stems and the final mix (`build/mix.wav`).
* `--video-only` — picture only.
* `--bed-gain -2` — music + SFX level under the narration in dB (default 0; the bed is side-chain ducked under the voice).
* `--crf 20` — smaller file (≈2 GB); `--png` — lossless frame capture (slower); `--gpu` — try hardware GL in Chrome.
* `--force` — ignore cached chunks / stems.

Typical speed on a modern 8-core CPU with 7 workers: 15–30 frames/s → ~30–60 minutes for the full film.

## Preview in a browser

```bash
node render.js --preview
```

Open the printed URL (`http://localhost:8080/index.html?preview=1`). Space = play/pause (voice-over plays in sync),
←/→ = frame step, Shift+←/→ = 5 s. Tick "music/SFX" to hear the generated bed of the current segment.
`&only=s03` loads a single segment; `&t=351` starts at a time. Real-time playback depends on your machine; the
final render is always frame-exact.

## Project layout

| path | what |
|---|---|
| `index.html` | the film page (loads libraries, data, engine, segments) |
| `engine/` | the motion engine: timeline, transitions, post-processing, drawing/material toolkit, typography, 2.5D camera, maps, Three.js bridge, procedural audio, film kit |
| `segments/s01.js … s11.js` | the 11 slices of the film (each ≈2–3 min, authored independently on the shared engine) |
| `data/` | voice-over word timings, Natural Earth world maps, IGN Spain provinces/regions, curated cities/rivers/ranges/densities |
| `assets/` | voice-over, original JSON script, bundled OFL fonts, Natural Earth relief textures |
| `docs/` | creative brief, engine reference, segment plan, per-segment timed script |
| `tools/` | review tools (`snap.js` stills/contact sheets/audio checks) and the static server |
| `render.js` | the Puppeteer renderer + audio mixer |

## Credits / licences
Fonts: SIL Open Font License (via Fontsource). Maps: Natural Earth (public domain) via world-atlas (ISC); Spain: IGN via
es-atlas (MIT). Relief textures: Natural Earth / NASA Blue Marble (public domain) via basemap-data. Libraries: three.js
(MIT), d3-geo / d3-array / d3-contour (ISC), topojson-client (ISC).
