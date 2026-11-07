/* =====================================================================
   MG.audio — procedural score + sound design, rendered OFFLINE per segment
   (OfflineAudioContext, 48 kHz stereo) so it is 100% deterministic and
   frame-accurate. render.js mixes every segment WAV under the voice-over
   with side-chain ducking + limiting (see render.js / docs/AUDIO.md).

   In a segment:   audio(A) { ... }   — all times are ABSOLUTE seconds.

   LEVEL RULES (this bed sits UNDER narration):
     • music cues default to gain 1 → peaks ≈ −20 dBFS. Never exceed gain 1.6.
     • SFX accents default ≈ −18…−14 dBFS. Big hits (impact/boom) only on real story peaks.
     • No harsh highs: everything passes a gentle master low-pass shelf.
   ===================================================================== */
(function () {
  const MG = window.MG; const { clamp, lerp } = MG;
  const SR = 48000; const AU = (MG.audio = { SR, TAIL: 6 });

  // ---------- pitch helpers ----------
  const NOTE = { C: 0, 'C#': 1, Db: 1, D: 2, 'D#': 3, Eb: 3, E: 4, F: 5, 'F#': 6, Gb: 6, G: 7, 'G#': 8, Ab: 8, A: 9, 'A#': 10, Bb: 10, B: 11 };
  const midi = (n) => { if (typeof n === 'number') return n; const m = /^([A-G][#b]?)(-?\d)$/.exec(n); if (!m) throw new Error('bad note ' + n); return NOTE[m[1]] + (parseInt(m[2]) + 1) * 12; };
  const hz = (m) => 440 * Math.pow(2, (midi(m) - 69) / 12);
  const SCALES = { major: [0, 2, 4, 5, 7, 9, 11], minor: [0, 2, 3, 5, 7, 8, 10], dorian: [0, 2, 3, 5, 7, 9, 10], phrygian: [0, 1, 3, 5, 7, 8, 10], phrygDom: [0, 1, 4, 5, 7, 8, 10], hijaz: [0, 1, 4, 5, 7, 8, 10], harmMinor: [0, 2, 3, 5, 7, 8, 11], lydian: [0, 2, 4, 6, 7, 9, 11], mixolydian: [0, 2, 4, 5, 7, 9, 10], pentMinor: [0, 3, 5, 7, 10], pentMajor: [0, 2, 4, 7, 9], wholeTone: [0, 2, 4, 6, 8, 10], blues: [0, 3, 5, 6, 7, 10], chromatic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] };
  const CHORDS = { maj: [0, 4, 7], min: [0, 3, 7], dim: [0, 3, 6], aug: [0, 4, 8], sus2: [0, 2, 7], sus4: [0, 5, 7], maj7: [0, 4, 7, 11], min7: [0, 3, 7, 10], dom7: [0, 4, 7, 10], m7b5: [0, 3, 6, 10], dim7: [0, 3, 6, 9], add9: [0, 4, 7, 14], min9: [0, 3, 7, 10, 14], maj9: [0, 4, 7, 11, 14], '5': [0, 7, 12], min6: [0, 3, 7, 9], '6': [0, 4, 7, 9], b9: [0, 4, 7, 10, 13] };
  AU.midi = midi; AU.hz = hz; AU.SCALES = SCALES; AU.CHORDS = CHORDS;
  /** scale degrees → midi list. scale('E3','phrygDom',2) */
  AU.scale = (root, name = 'minor', oct = 1) => { const r = midi(root); const s = SCALES[name]; const out = []; for (let o = 0; o < oct; o++) for (const d of s) out.push(r + d + 12 * o); out.push(r + 12 * oct); return out; };
  /** degree n (0-based, may exceed scale length) of a scale */
  AU.deg = (root, name, n) => { const s = SCALES[name]; const r = midi(root); const o = Math.floor(n / s.length); return r + s[MG.mod(n, s.length)] + 12 * o; };
  /** chord('A3','min') → midis ; inversion: rotate up */
  AU.chord = (root, q = 'maj', inv = 0) => { const r = midi(root); let c = CHORDS[q].map((x) => r + x); for (let i = 0; i < inv; i++) { const x = c.shift(); c.push(x + 12); } return c; };

  // ---------- small DSP in JS (buffer synthesis, cached) ----------
  const bufCache = new Map();
  const mkBuf = (L, R) => { const b = new AudioBuffer({ length: L.length, sampleRate: SR, numberOfChannels: 2 }); b.copyToChannel(L, 0); b.copyToChannel(R || L, 1); return b; };
  const cached = (key, fn) => { let b = bufCache.get(key); if (!b) { b = fn(); bufCache.set(key, b); } return b; };
  const rngF = (seed) => MG.rng(seed);
  /** one-pole lowpass in-place */
  const lp1 = (x, fc) => { const a = Math.exp(-2 * Math.PI * fc / SR); let y = 0; for (let i = 0; i < x.length; i++) { y = (1 - a) * x[i] + a * y; x[i] = y; } return x; };
  const hp1 = (x, fc) => { const a = Math.exp(-2 * Math.PI * fc / SR); let y = 0, px = 0; for (let i = 0; i < x.length; i++) { y = a * (y + x[i] - px); px = x[i]; x[i] = y; } return x; };
  /** RBJ biquad in-place: type 'lp'|'hp'|'bp'|'peak' */
  const biquad = (x, type, f, Q = 0.707, gainDb = 0) => {
    const w = 2 * Math.PI * f / SR, cs = Math.cos(w), sn = Math.sin(w), al = sn / (2 * Q), A = Math.pow(10, gainDb / 40); let b0, b1, b2, a0, a1, a2;
    if (type === 'lp') { b0 = (1 - cs) / 2; b1 = 1 - cs; b2 = b0; a0 = 1 + al; a1 = -2 * cs; a2 = 1 - al; }
    else if (type === 'hp') { b0 = (1 + cs) / 2; b1 = -(1 + cs); b2 = b0; a0 = 1 + al; a1 = -2 * cs; a2 = 1 - al; }
    else if (type === 'bp') { b0 = al; b1 = 0; b2 = -al; a0 = 1 + al; a1 = -2 * cs; a2 = 1 - al; }
    else { b0 = 1 + al * A; b1 = -2 * cs; b2 = 1 - al * A; a0 = 1 + al / A; a1 = -2 * cs; a2 = 1 - al / A; }
    let x1 = 0, x2 = 0, y1 = 0, y2 = 0; for (let i = 0; i < x.length; i++) { const xi = x[i]; const y = (b0 * xi + b1 * x1 + b2 * x2 - a1 * y1 - a2 * y2) / a0; x2 = x1; x1 = xi; y2 = y1; y1 = y; x[i] = y; } return x;
  };
  const norm = (x, peak = 0.9) => { let m = 0; for (let i = 0; i < x.length; i++) m = Math.max(m, Math.abs(x[i])); if (m > 0) { const k = peak / m; for (let i = 0; i < x.length; i++) x[i] *= k; } return x; };
  const env = (x, a, d) => { const A = Math.floor(a * SR); for (let i = 0; i < x.length; i++) { const t = i / SR; x[i] *= (i < A ? i / A : 1) * Math.exp(-(t) / d); } return x; };
  const noise = (n, seed = 1) => { const r = rngF(seed); const x = new Float32Array(n); for (let i = 0; i < n; i++) x[i] = r() * 2 - 1; return x; };

  /** Karplus–Strong plucked string. kind: guitar|oud|harp|pizz|bass */
  function pluck(m, kind = 'guitar', durS, seed = 1) {
    const f = hz(m); const prm = { guitar: { dec: 3.2, bright: 0.55, pos: 0.18 }, oud: { dec: 1.8, bright: 0.8, pos: 0.1 }, harp: { dec: 4.5, bright: 0.45, pos: 0.3 }, pizz: { dec: 0.45, bright: 0.4, pos: 0.25 }, bass: { dec: 2.2, bright: 0.35, pos: 0.2 } }[kind];
    const dur = durS || Math.min(5, prm.dec * 1.4); const n = Math.floor(dur * SR); const out = new Float32Array(n);
    const D = SR / f; const N = Math.floor(D); const frac = D - N; const line = new Float32Array(N + 2);
    const r = rngF(seed + m * 13); for (let i = 0; i < N + 2; i++) line[i] = r() * 2 - 1;
    // pick-position comb + brightness pre-filter on the excitation
    lp1(line, 800 + prm.bright * 7000); const pp = Math.max(1, Math.floor(N * prm.pos)); for (let i = N + 1; i >= pp; i--) line[i] -= line[i - pp] * 0.6;
    const loss = Math.pow(0.001, 1 / (prm.dec * f)); // T60 = dec seconds
    let idx = 0, prev = 0; const blend = 0.5 - prm.bright * 0.25;
    for (let i = 0; i < n; i++) {
      const a = line[idx], b = line[(idx + 1) % (N + 1)]; const s = a + (b - a) * frac; // fractional read
      const y = (s * (1 - blend) + prev * blend) * loss; prev = s; line[idx] = y; out[i] = s; idx = (idx + 1) % (N + 1);
    }
    if (kind === 'guitar') { biquad(out, 'peak', 110, 1.2, 4); biquad(out, 'peak', 240, 1.0, 3); biquad(out, 'lp', 5200, 0.7); }
    if (kind === 'oud') { biquad(out, 'peak', 1300, 1.4, 5); biquad(out, 'peak', 160, 1, 3); biquad(out, 'lp', 6500, 0.7); }
    if (kind === 'pizz') { biquad(out, 'lp', 2600, 0.7); biquad(out, 'peak', 300, 1, 3); }
    if (kind === 'bass') { biquad(out, 'lp', 1400, 0.7); }
    env(out, 0.002, 99); const fl = Math.floor(0.04 * SR); for (let i = 0; i < fl; i++) out[n - 1 - i] *= i / fl;
    return norm(out, 0.8);
  }
  /** additive piano-ish tone with inharmonicity */
  function piano(m, vel = 0.7) {
    const f = hz(m); const dur = clamp(5.5 - (m - 48) * 0.06, 1.5, 6); const n = Math.floor(dur * SR); const out = new Float32Array(n); const B = 0.0004;
    for (let k = 1; k <= 12; k++) { const fk = f * k * Math.sqrt(1 + B * k * k); if (fk > 14000) break; const amp = (1 / Math.pow(k, 1.1 + (1 - vel) * 0.8)) * (k === 1 ? 1 : 0.9); const dec = dur / (1 + k * 0.55); const ph = MG.hash(m * 7 + k) * MG.TAU; for (let i = 0; i < n; i++) { const t = i / SR; out[i] += amp * Math.sin(MG.TAU * fk * t + ph) * Math.exp(-t / dec * 2.2); } }
    // double-decay (prompt + aftersound) & hammer
    const hn = noise(Math.floor(0.02 * SR), m); lp1(hn, 2500 + vel * 3000); for (let i = 0; i < hn.length; i++) out[i] += hn[i] * 0.15 * vel * (1 - i / hn.length);
    env(out, 0.002, 99); const fl = Math.floor(0.05 * SR); for (let i = 0; i < fl; i++) out[n - 1 - i] *= i / fl;
    return norm(out, 0.75);
  }
  /** mallets & bells. kind: marimba|vibes|celesta|musicbox|bell|glock|kalimba */
  function mallet(m, kind = 'marimba') {
    const f = hz(m); const P = { marimba: { p: [[1, 1, 0.9], [3.93, 0.25, 0.25], [9.2, 0.08, 0.08]], dur: 1.6 }, vibes: { p: [[1, 1, 3], [4, 0.2, 0.8], [10, 0.05, 0.2]], dur: 3.5 }, celesta: { p: [[1, 1, 1.2], [2, 0.3, 0.6], [3, 0.12, 0.3], [4.1, 0.05, 0.2]], dur: 2 }, musicbox: { p: [[1, 1, 1.4], [3.0, 0.35, 0.4], [5.2, 0.1, 0.2], [7.1, 0.05, 0.1]], dur: 2.2 }, bell: { p: [[0.5, 0.5, 6], [1, 1, 4], [1.19, 0.6, 3], [1.56, 0.5, 2.5], [2, 0.5, 2], [2.66, 0.3, 1.2], [3.01, 0.25, 1], [4.1, 0.15, 0.6]], dur: 6 }, glock: { p: [[1, 1, 1.6], [2.76, 0.4, 0.5], [5.4, 0.2, 0.25]], dur: 2.2 }, kalimba: { p: [[1, 1, 1], [5.3, 0.2, 0.15], [8.9, 0.05, 0.05]], dur: 1.6 } }[kind];
    const n = Math.floor(P.dur * SR); const out = new Float32Array(n);
    for (const [r, a, d] of P.p) { const fk = f * r; if (fk > 16000) continue; for (let i = 0; i < n; i++) { const t = i / SR; out[i] += a * Math.sin(MG.TAU * fk * t) * Math.exp(-t / d); } }
    if (kind === 'vibes') for (let i = 0; i < n; i++) out[i] *= 1 - 0.35 * (0.5 + 0.5 * Math.sin(MG.TAU * 5.2 * i / SR));
    env(out, 0.001, 99); const fl = Math.floor(0.03 * SR); for (let i = 0; i < fl; i++) out[n - 1 - i] *= i / fl; return norm(out, 0.7);
  }
  // ---- drums ----
  function drum(kind, p = 0) {
    const r = rngF(1000 + p * 7 + kind.length); let n, out;
    const sine = (f0, f1, dur, decay, sweep = 0.05) => { n = Math.floor(dur * SR); out = new Float32Array(n); let ph = 0; for (let i = 0; i < n; i++) { const t = i / SR; const f = f1 + (f0 - f1) * Math.exp(-t / sweep); ph += MG.TAU * f / SR; out[i] = Math.sin(ph) * Math.exp(-t / decay); } return out; };
    const nz = (dur, decay, lp, hp) => { const x = noise(Math.floor(dur * SR), 77 + p + kind.length * 3); if (lp) biquad(x, 'lp', lp, 0.8); if (hp) biquad(x, 'hp', hp, 0.8); for (let i = 0; i < x.length; i++) x[i] *= Math.exp(-(i / SR) / decay); return x; };
    const add = (a, b, k = 1) => { for (let i = 0; i < Math.min(a.length, b.length); i++) a[i] += b[i] * k; return a; };
    switch (kind) {
      case 'kick': out = sine(150, 48, 0.6, 0.18, 0.035); add(out, nz(0.01, 0.003, 4000), 0.3); break;
      case 'kick808': out = sine(120, 42, 1.4, 0.5, 0.05); break;
      case 'snare': out = add(sine(220, 180, 0.25, 0.06), nz(0.3, 0.09, 9000, 900), 0.9); break;
      case 'brush': out = nz(0.35, 0.12, 6000, 1500); break;
      case 'clap': { out = new Float32Array(Math.floor(0.35 * SR)); for (const d of [0, 0.011, 0.022, 0.034]) { const b = nz(0.25, d === 0.034 ? 0.08 : 0.012, 5000, 900); for (let i = 0; i < b.length && i + d * SR < out.length; i++) out[i + Math.floor(d * SR)] += b[i]; } break; }
      case 'hat': out = nz(0.08, 0.018, 0, 7000); break;
      case 'ohat': out = nz(0.5, 0.16, 0, 6500); break;
      case 'shaker': { out = nz(0.14, 0.05, 0, 5000); const A = Math.floor(0.03 * SR); for (let i = 0; i < A; i++) out[i] *= i / A; break; }
      case 'rim': out = add(sine(1700, 1600, 0.05, 0.012), nz(0.03, 0.006, 6000, 1500), 0.4); break;
      case 'tom': out = sine(p || 140, (p || 140) * 0.7, 0.6, 0.2, 0.08); break;
      case 'cajon': out = add(sine(110, 70, 0.4, 0.13, 0.03), nz(0.12, 0.03, 1800), 0.25); break;
      case 'cajonSlap': out = add(sine(320, 240, 0.2, 0.05), nz(0.25, 0.07, 7000, 1000), 0.8); for (let i = 0; i < out.length; i++) out[i] += (r() * 2 - 1) * 0.2 * Math.exp(-i / SR / 0.06) * (Math.sin(i * 0.9) > 0 ? 1 : 0.3); break;
      case 'castanet': { out = new Float32Array(Math.floor(0.12 * SR)); for (const d of [0, 0.018]) { const b = add(sine(2600, 2200, 0.05, 0.006), nz(0.04, 0.004, 8000, 1800), 0.6); for (let i = 0; i < b.length; i++) out[i + Math.floor(d * SR)] += b[i] * (d ? 0.7 : 1); } break; }
      case 'doum': out = add(sine(95, 75, 0.7, 0.25, 0.02), nz(0.02, 0.005, 1500), 0.3); break;
      case 'tek': out = add(sine(900, 700, 0.12, 0.03), nz(0.06, 0.012, 7000, 1200), 0.7); break;
      case 'frame': out = add(sine(75, 60, 0.9, 0.35, 0.03), nz(0.15, 0.06, 900), 0.3); break;
      case 'timpani': { const f = p || 87; out = sine(f * 1.05, f, 2.2, 0.8, 0.05); add(out, sine(f * 1.5, f * 1.5, 2, 0.5), 0.3); add(out, nz(0.05, 0.01, 1200), 0.4); break; }
      case 'taiko': out = add(sine(80, 50, 1.6, 0.45, 0.04), nz(0.08, 0.02, 1200), 0.5); break;
      case 'tambourine': { out = nz(0.3, 0.09, 0, 5000); const jing = mallet(96, 'glock'); add(out, jing, 0.15); break; }
      case 'triangle': out = mallet(100, 'bell'); break;
      case 'woodblock': out = add(sine(p || 1200, (p || 1200) * 0.95, 0.15, 0.03), nz(0.02, 0.003, 5000, 800), 0.3); break;
      case 'cowbell': { n = Math.floor(0.5 * SR); out = new Float32Array(n); for (let i = 0; i < n; i++) { const t = i / SR; out[i] = (Math.sign(Math.sin(MG.TAU * 545 * t)) + Math.sign(Math.sin(MG.TAU * 815 * t))) * 0.3 * Math.exp(-t / 0.08); } biquad(out, 'bp', 800, 1.2); break; }
      case 'crash': out = nz(3, 0.9, 12000, 3000); break;
      case 'gong': { n = Math.floor(6 * SR); out = new Float32Array(n); for (const [fr, a, d] of [[62, 1, 3], [91, 0.7, 2.5], [130, 0.5, 2.2], [188, 0.4, 1.8], [270, 0.3, 1.4], [420, 0.2, 1]]) for (let i = 0; i < n; i++) { const t = i / SR; out[i] += a * Math.sin(MG.TAU * fr * t * (1 + 0.003 * Math.exp(-t))) * Math.exp(-t / d) * Math.min(1, t * 20); } break; }
      case 'tick': out = add(sine(3200, 3000, 0.03, 0.004), nz(0.01, 0.002, 9000, 2500), 0.4); break;
      case 'tock': out = add(sine(1800, 1700, 0.04, 0.007), nz(0.01, 0.002, 5000, 1500), 0.4); break;
      default: out = nz(0.1, 0.02);
    }
    return norm(out, 0.85);
  }
  /** impulse response for reverbs (stereo, darkening tail) */
  function impulse(dur, decay, seed, dark = 4000) {
    const n = Math.floor(dur * SR); const L = noise(n, seed), R = noise(n, seed + 1);
    for (const x of [L, R]) { let y = 0; for (let i = 0; i < n; i++) { const t = i / SR; const fc = dark * Math.exp(-t * 1.2) + 300; const a = Math.exp(-2 * Math.PI * fc / SR); y = (1 - a) * x[i] + a * y; x[i] = y * Math.pow(1 - i / n, decay) * (i < 200 ? i / 200 : 1); } }
    return mkBuf(L, R);
  }

  // ---------- the A-API factory (one per segment render) ----------
  function makeAPI(ac, seg, t0, t1) {
    const dur = t1 - t0; const A = { ac, seg, t0, t1, SR, midi, hz, scale: AU.scale, chord: AU.chord, deg: AU.deg, SCALES, CHORDS, T: MG.T, phrase: MG.phrase, words: MG.wordsIn };
    const L = (t) => t - t0; // absolute → local
    const inRange = (t, len = 0) => t + len >= t0 - 0.01 && t <= t1;
    A.inRange = inRange;
    // master chain
    const master = ac.createGain(); master.gain.value = 1;
    const tone = ac.createBiquadFilter(); tone.type = 'highshelf'; tone.frequency.value = 7500; tone.gain.value = -3;
    const lowcut = ac.createBiquadFilter(); lowcut.type = 'highpass'; lowcut.frequency.value = 28;
    const comp = ac.createDynamicsCompressor(); comp.threshold.value = -16; comp.ratio.value = 2.5; comp.attack.value = 0.01; comp.release.value = 0.25; comp.knee.value = 8;
    const lim = ac.createDynamicsCompressor(); lim.threshold.value = -6; lim.ratio.value = 20; lim.attack.value = 0.002; lim.release.value = 0.1; lim.knee.value = 0;
    master.connect(lowcut); lowcut.connect(tone); tone.connect(comp); comp.connect(lim); lim.connect(ac.destination);
    const verbL = ac.createConvolver(); verbL.buffer = cached('ir:hall', () => impulse(3.2, 2.2, 5, 5000)); const verbS = ac.createConvolver(); verbS.buffer = cached('ir:room', () => impulse(1.1, 2.8, 9, 7000));
    const vlg = ac.createGain(); vlg.gain.value = 0.55; const vsg = ac.createGain(); vsg.gain.value = 0.5; verbL.connect(vlg); vlg.connect(master); verbS.connect(vsg); vsg.connect(master);
    const bus = {}; for (const [k, g] of [['music', 0.5], ['sfx', 0.62], ['amb', 0.45]]) { bus[k] = ac.createGain(); bus[k].gain.value = g; bus[k].connect(master); }
    A.bus = bus; A.master = master;
    /** connect a node to a bus with pan / gain / reverb sends; returns the gain node */
    A.out = (node, o = {}) => { const g = ac.createGain(); g.gain.value = o.gain ?? 1; let n = node; if (o.pan) { const p = ac.createStereoPanner(); p.pan.value = clamp(o.pan, -1, 1); n.connect(p); n = p; } n.connect(g); g.connect(bus[o.bus || 'music']); const v = o.verb ?? 0.18; if (v > 0) { const s = ac.createGain(); s.gain.value = v; g.connect(s); s.connect(o.room ? verbS : verbL); } return g; };
    /** play an AudioBuffer at absolute time t. o: {gain,pan,rate,bus,verb,room,fadeIn,fadeOut,dur,offset,filter:{type,freq,Q}} */
    A.play = (buffer, t, o = {}) => {
      const len = (o.dur ?? buffer.duration / (o.rate || 1)); if (!inRange(t, len)) return null; let lt = L(t); let off = o.offset || 0; if (lt < 0) { off += -lt * (o.rate || 1); lt = 0; }
      const src = ac.createBufferSource(); src.buffer = buffer; if (o.rate) src.playbackRate.value = o.rate; if (o.detune) src.detune.value = o.detune;
      let n = src; if (o.filter) { const f = ac.createBiquadFilter(); f.type = o.filter.type || 'lowpass'; f.frequency.value = o.filter.freq || 2000; f.Q.value = o.filter.Q || 0.7; n.connect(f); n = f; }
      const g = ac.createGain(); const G = o.gain ?? 1; const fi = o.fadeIn || 0, fo = o.fadeOut || 0;
      if (fi) { g.gain.setValueAtTime(0, lt); g.gain.linearRampToValueAtTime(G, lt + fi); } else g.gain.setValueAtTime(G, lt);
      if (o.dur !== undefined) { const end = lt + o.dur; g.gain.setValueAtTime(G, Math.max(lt + fi, end - Math.max(0.02, fo))); g.gain.linearRampToValueAtTime(0, end); }
      n.connect(g); A.out(g, o); src.start(lt, off); if (o.dur !== undefined) src.stop(lt + o.dur + 0.05); return src;
    };
    A.buffer = (key, fn) => cached(key, () => { const x = fn(); return Array.isArray(x) ? mkBuf(x[0], x[1]) : mkBuf(x); });

    // ---------- instruments (buffer based) ----------
    /** plucked strings: kind guitar|oud|harp|pizz|bass. o: vel, pan, dur, verb, bend (semitones at attack) */
    A.pluck = (t, note, o = {}) => { const m = midi(note); const kind = o.kind || 'guitar'; const b = cached(`pl:${kind}:${m}`, () => mkBuf(pluck(m, kind))); const src = A.play(b, t, { gain: 0.42 * (o.vel ?? 0.8), pan: o.pan, verb: o.verb ?? 0.2, dur: o.dur, fadeOut: 0.08, bus: o.bus }); if (src && o.bend) { const lt = Math.max(0, L(t)); src.detune.setValueAtTime(o.bend * 100, lt); src.detune.exponentialRampToValueAtTime ? src.detune.linearRampToValueAtTime(0, lt + (o.bendTime || 0.06)) : 0; } return src; };
    A.guitar = (t, n, o = {}) => A.pluck(t, n, { ...o, kind: 'guitar' });
    A.oud = (t, n, o = {}) => A.pluck(t, n, { bend: -0.4, ...o, kind: 'oud' });
    A.harp = (t, n, o = {}) => A.pluck(t, n, { verb: 0.35, ...o, kind: 'harp' });
    A.pizz = (t, n, o = {}) => A.pluck(t, n, { verb: 0.25, ...o, kind: 'pizz' });
    /** strum a chord (rasgueado-ish): notes low→high, spread seconds, dir 'down'|'up' */
    A.strum = (t, notes, o = {}) => { const sp = o.spread ?? 0.018; const ns = o.dir === 'up' ? [...notes].reverse() : notes; ns.forEach((n, i) => A.pluck(t + i * sp * (1 + MG.hash(t * 10 + i) * 0.3), n, { ...o, vel: (o.vel ?? 0.7) * (0.8 + 0.2 * MG.hash(i + t)), pan: (o.pan || 0) + (i / ns.length - 0.5) * 0.3 })); };
    A.piano = (t, note, o = {}) => { const m = midi(note); const v = o.vel ?? 0.7; const vb = v > 0.75 ? 2 : v > 0.45 ? 1 : 0; const b = cached(`pn:${m}:${vb}`, () => mkBuf(piano(m, [0.35, 0.6, 0.9][vb]))); return A.play(b, t, { gain: 0.38 * v, pan: o.pan ?? (m - 60) / 60, verb: o.verb ?? 0.25, dur: o.dur, fadeOut: o.dur ? 0.25 : 0, bus: o.bus }); };
    A.mallet = (t, note, o = {}) => { const m = midi(note); const k = o.kind || 'marimba'; const b = cached(`ml:${k}:${m}`, () => mkBuf(mallet(m, k))); return A.play(b, t, { gain: 0.36 * (o.vel ?? 0.7), pan: o.pan, verb: o.verb ?? 0.25, dur: o.dur, fadeOut: 0.1, bus: o.bus }); };
    A.bell = (t, note, o = {}) => A.mallet(t, note, { kind: 'bell', verb: 0.4, ...o });
    /** drums: kick kick808 snare brush clap hat ohat shaker rim tom cajon cajonSlap castanet doum tek frame timpani taiko tambourine triangle woodblock cowbell crash gong tick tock */
    A.drum = (t, kind, o = {}) => { const b = cached(`dr:${kind}:${o.p || 0}`, () => mkBuf(drum(kind, o.p || 0))); return A.play(b, t, { gain: 0.5 * (o.vel ?? 0.8), pan: o.pan, verb: o.verb ?? 0.12, room: o.room ?? true, rate: o.rate, bus: o.bus || 'music', dur: o.dur }); };

    // ---------- instruments (oscillator based, sustained) ----------
    const envGain = (lt, len, a, r, peak, s = 1) => { const g = ac.createGain(); g.gain.setValueAtTime(0, lt); g.gain.linearRampToValueAtTime(peak, lt + a); g.gain.setValueAtTime(peak * s, Math.max(lt + a, lt + len - r)); g.gain.linearRampToValueAtTime(0, lt + len); return g; };
    const osc = (type, f, lt, len, det = 0) => { const o = ac.createOscillator(); o.type = type; o.frequency.value = f; o.detune.value = det; o.start(lt); o.stop(lt + len + 0.05); return o; };
    const vib = (target, lt, len, rate = 5.2, depth = 8, delay = 0.35) => { const l = ac.createOscillator(); l.frequency.value = rate; const g = ac.createGain(); g.gain.setValueAtTime(0, lt); g.gain.linearRampToValueAtTime(depth, lt + delay + 0.4); l.connect(g); g.connect(target); l.start(lt); l.stop(lt + len + 0.05); };
    /** sustained voice: kind strings|pad|brass|choir|organ|accordion|flute|whistle|bass|synthbass|lead|drone|cello|horn|clarinet
     *  A.voice(t, dur, notes[], {kind, vel, attack, release, pan, cutoff, verb}) */
    A.voice = (t, len, notes, o = {}) => {
      if (!inRange(t, len)) return; let lt = L(t); if (lt < 0) { len += lt; lt = 0; } if (len <= 0.02) return;
      const kind = o.kind || 'strings'; const ns = (Array.isArray(notes) ? notes : [notes]).map(midi); const v = o.vel ?? 0.6;
      const P = {
        strings: { a: 0.6, r: 0.9, wav: 'sawtooth', det: [-7, 0, 6], cut: 1700 + v * 1800, q: 0.6, g: 0.07, vib: [5, 6] },
        cello: { a: 0.25, r: 0.6, wav: 'sawtooth', det: [-4, 3], cut: 1100 + v * 900, q: 1.2, g: 0.11, vib: [5.5, 12] },
        pad: { a: 1.5, r: 2.0, wav: 'sawtooth', det: [-12, -4, 5, 13], cut: 900 + v * 900, q: 0.8, g: 0.05, vib: [0.3, 4] },
        brass: { a: 0.07, r: 0.35, wav: 'sawtooth', det: [-5, 5], cut: 900 + v * 2200, q: 1.1, g: 0.09, fenv: true, vib: [5, 5] },
        horn: { a: 0.18, r: 0.5, wav: 'sawtooth', det: [-3, 3], cut: 700 + v * 900, q: 0.9, g: 0.1, vib: [4.8, 4] },
        choir: { a: 0.9, r: 1.3, wav: 'sawtooth', det: [-9, 0, 8], cut: 0, q: 0, g: 0.09, formant: [700, 1150, 2800], vib: [5, 9] },
        organ: { a: 0.03, r: 0.12, wav: 'organ', det: [0], cut: 5000, q: 0.5, g: 0.06, trem: 6.3 },
        accordion: { a: 0.08, r: 0.18, wav: 'square', det: [-8, 9], cut: 2600, q: 0.7, g: 0.045, trem: 5.5, bp: 1400 },
        flute: { a: 0.08, r: 0.2, wav: 'sine', det: [0], cut: 6000, q: 0.5, g: 0.16, breath: 0.08, vib: [5.2, 11] },
        whistle: { a: 0.03, r: 0.1, wav: 'sine', det: [0], cut: 8000, q: 0.5, g: 0.14, breath: 0.03, vib: [6, 22] },
        clarinet: { a: 0.05, r: 0.15, wav: 'square', det: [0], cut: 1600, q: 0.8, g: 0.06, vib: [5, 5] },
        bass: { a: 0.01, r: 0.08, wav: 'triangle', det: [0], cut: 900, q: 0.7, g: 0.22, sub: true },
        synthbass: { a: 0.005, r: 0.06, wav: 'sawtooth', det: [-4, 4], cut: 300 + v * 700, q: 3, g: 0.11, fenv: true },
        lead: { a: 0.02, r: 0.15, wav: 'square', det: [-6, 6], cut: 2200, q: 1.5, g: 0.05, vib: [5.5, 8] },
        drone: { a: 2.5, r: 3, wav: 'sawtooth', det: [-6, 0, 7], cut: 380 + v * 300, q: 2.2, g: 0.06, lfoCut: true },
        glass: { a: 1.2, r: 1.8, wav: 'sine', det: [0, 1202], cut: 9000, q: 0.5, g: 0.06, vib: [0.4, 3] },
      }[kind];
      const a = o.attack ?? P.a, r = o.release ?? P.r; const out = envGain(lt, len, Math.min(a, len * 0.5), Math.min(r, len * 0.5), P.g * v * (o.gain ?? 1) / Math.sqrt(ns.length), o.sustain ?? 1);
      let filt = null; if (P.formant) { // formant bank
        const sum = ac.createGain(); for (const [i, ff] of P.formant.entries()) { const bp = ac.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = ff * (o.vowel ? o.vowel[i] || 1 : 1); bp.Q.value = 6; const gg = ac.createGain(); gg.gain.value = [1, 0.6, 0.25][i]; sum.connect(bp); bp.connect(gg); gg.connect(out); } filt = sum;
      } else { const f = ac.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = o.cutoff ?? P.cut; f.Q.value = P.q; if (P.fenv) { f.frequency.setValueAtTime((o.cutoff ?? P.cut) * 0.35, lt); f.frequency.linearRampToValueAtTime(o.cutoff ?? P.cut, lt + 0.06 + a); f.frequency.exponentialRampToValueAtTime(Math.max(120, (o.cutoff ?? P.cut) * 0.55), lt + Math.max(0.2, len * 0.7)); } if (P.lfoCut) { const l = ac.createOscillator(); l.frequency.value = 0.07 + MG.hash(t) * 0.05; const lg = ac.createGain(); lg.gain.value = (o.cutoff ?? P.cut) * 0.5; l.connect(lg); lg.connect(f.frequency); l.start(lt); l.stop(lt + len + 0.1); } if (P.bp) { const b2 = ac.createBiquadFilter(); b2.type = 'peaking'; b2.frequency.value = P.bp; b2.gain.value = 6; f.connect(b2); b2.connect(out); } else f.connect(out); filt = f; }
      for (const m of ns) {
        const f0 = hz(m) * (o.octave ? Math.pow(2, o.octave) : 1);
        for (const d of P.det) {
          let src; if (P.wav === 'organ') { src = ac.createGain(); for (const [h, aa] of [[1, 1], [2, 0.6], [3, 0.35], [4, 0.25], [6, 0.12], [8, 0.1]]) { const s = osc('sine', f0 * h, lt, len); const gg = ac.createGain(); gg.gain.value = aa * 0.4; s.connect(gg); gg.connect(src); } }
          else { src = osc(P.wav, f0, lt, len, d + (MG.hash(m * 3 + d) - 0.5) * 4); if (P.vib) vib(src.detune, lt, len, P.vib[0] * (0.95 + MG.hash(m + d) * 0.1), P.vib[1], 0.3); if (o.glide) { src.frequency.setValueAtTime(f0 * Math.pow(2, o.glide / 12), lt); src.frequency.exponentialRampToValueAtTime(f0, lt + (o.glideTime || 0.12)); } }
          src.connect(filt);
        }
        if (P.sub) { const s = osc('sine', f0 / 2, lt, len); const gg = ac.createGain(); gg.gain.value = 0.6; s.connect(gg); gg.connect(out); }
        if (P.breath) { const nb = ac.createBufferSource(); nb.buffer = cached('noise2s', () => mkBuf(noise(SR * 2, 3), noise(SR * 2, 4))); nb.loop = true; const bp = ac.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = f0 * 2; bp.Q.value = 3; const gg = ac.createGain(); gg.gain.value = P.breath; nb.connect(bp); bp.connect(gg); gg.connect(out); nb.start(lt); nb.stop(lt + len + 0.05); }
      }
      if (P.trem) { const tr = ac.createGain(); const l = ac.createOscillator(); l.frequency.value = P.trem; const lg = ac.createGain(); lg.gain.value = 0.25; l.connect(lg); lg.connect(tr.gain); tr.gain.value = 0.8; out.connect(tr); l.start(lt); l.stop(lt + len + 0.05); A.out(tr, { pan: o.pan, verb: o.verb ?? 0.25, bus: o.bus }); }
      else A.out(out, { pan: o.pan, verb: o.verb ?? 0.3, bus: o.bus });
      if (o.swell) { out.gain.cancelScheduledValues(lt); out.gain.setValueAtTime(0.0001, lt); out.gain.linearRampToValueAtTime(P.g * v * (o.gain ?? 1) / Math.sqrt(ns.length), lt + len * 0.92); out.gain.linearRampToValueAtTime(0, lt + len); }
    };
    // sugar
    for (const k of ['strings', 'cello', 'pad', 'brass', 'horn', 'choir', 'organ', 'accordion', 'flute', 'whistle', 'clarinet', 'bass', 'synthbass', 'lead', 'drone', 'glass']) A[k] = (t, len, notes, o = {}) => A.voice(t, len, notes, { ...o, kind: k });

    // ---------- sequencing ----------
    /** call fn for every step of a grid: steps per beat `div`; fn(time, stepIndex, beatIndex, barIndex) */
    A.grid = (ts, te, bpm, div, fn, o = {}) => { const st = 60 / bpm / div; const sw = o.swing || 0; let i = 0; for (let t = ts; t < te - 1e-6; t += st, i++) { const tt = t + (i % 2 ? sw * st : 0); if (tt >= Math.max(ts, t0 - 1) && tt <= Math.min(te, t1)) fn(tt, i, Math.floor(i / div), Math.floor(i / div / (o.beats || 4))); } };
    /** pattern string 'x..x..x.' over a grid; fn(time, char, index) for non-'.' chars */
    A.pattern = (ts, te, bpm, div, pat, fn, o) => A.grid(ts, te, bpm, div, (t, i, b, bar) => { const c = pat[i % pat.length]; if (c !== '.' && c !== ' ' && c !== '-') fn(t, c, i, bar); }, o);
    /** bar-wise helper: fn(barStart, barIndex, beatLen) */
    A.bars = (ts, te, bpm, beats, fn) => { const bl = (60 / bpm) * beats; let i = 0; for (let t = ts; t < te - 0.01; t += bl, i++) if (t + bl >= t0 - 1 && t <= t1) fn(t, i, 60 / bpm); };
    /** intensity helper: number | fn(t) | [[t,v],...] keyframes */
    A.level = (spec, t) => typeof spec === 'function' ? spec(t) : Array.isArray(spec) ? MG.keys(t, spec.map((k) => [k[0], k[1], 'inOutSine'])) : spec ?? 1;

    // ---------- SFX ----------
    const sfx = (A.sfx = {});
    const nb = (dur, seed) => cached(`nz:${dur}:${seed}`, () => mkBuf(noise(Math.floor(dur * SR), seed), noise(Math.floor(dur * SR), seed + 1)));
    /** noise with automated band-pass sweep. f:[[relTime, freq],...] g:[[relTime, gain],...] */
    const sweepNoise = (t, len, fK, gK, o = {}) => {
      if (!inRange(t, len)) return; const lt = L(t); const src = ac.createBufferSource(); src.buffer = nb(4, o.seed || 21); src.loop = true;
      const f = ac.createBiquadFilter(); f.type = o.type || 'bandpass'; f.Q.value = o.Q ?? 1.1; fK.forEach(([rt, fr], i) => (i ? f.frequency.exponentialRampToValueAtTime(fr, Math.max(0, lt + rt * len)) : f.frequency.setValueAtTime(fr, Math.max(0, lt))));
      const g = ac.createGain(); g.gain.setValueAtTime(0, Math.max(0, lt)); gK.forEach(([rt, gv]) => g.gain.linearRampToValueAtTime(gv, Math.max(0, lt + rt * len)));
      src.connect(f); f.connect(g); let n = g; if (o.pan) { const p = ac.createStereoPanner(); if (Array.isArray(o.pan)) { p.pan.setValueAtTime(o.pan[0], Math.max(0, lt)); p.pan.linearRampToValueAtTime(o.pan[1], lt + len); } else p.pan.value = o.pan; g.connect(p); n = p; }
      A.out(n, { bus: o.bus || 'sfx', verb: o.verb ?? 0.15, gain: 1 }); src.start(Math.max(0, lt), (o.seed || 0) % 3); src.stop(lt + len + 0.05);
    };
    /** airy whoosh (camera moves / whip pans). o: {dur, gain, dir:-1|1 pan travel, pitch: 1 normal} */
    sfx.whoosh = (t, o = {}) => { const d = o.dur || 0.7, gn = 0.16 * (o.gain ?? 1), p = o.pitch || 1; sweepNoise(t - d * 0.6, d, [[0, 300 * p], [0.62, 2400 * p], [1, 600 * p]], [[0.6, gn], [1, 0]], { Q: 0.9, pan: [-(o.dir ?? 1) * 0.6, (o.dir ?? 1) * 0.6], seed: 31 + Math.floor(t * 7) % 50 }); };
    /** short high swish (text / small element) */
    sfx.swish = (t, o = {}) => { const d = o.dur || 0.28; sweepNoise(t - d * 0.5, d, [[0, 1500], [0.5, 6000], [1, 3000]], [[0.5, 0.09 * (o.gain ?? 1)], [1, 0]], { Q: 1.6, pan: o.pan, seed: 41 + Math.floor(t * 13) % 40 }); };
    /** low cinematic impact; size 0..1 */
    sfx.impact = (t, o = {}) => { const s = o.size ?? 0.6, gn = (o.gain ?? 1); const b = A.buffer(`imp:${Math.round(s * 10)}`, () => { const n = Math.floor((1.5 + s * 2) * SR); const x = new Float32Array(n); let ph = 0; for (let i = 0; i < n; i++) { const tt = i / SR; const f = 38 + 70 * Math.exp(-tt / 0.08); ph += MG.TAU * f / SR; x[i] = Math.tanh(Math.sin(ph) * 1.6) * Math.exp(-tt / (0.35 + s * 0.5)); } const nz = noise(Math.floor(0.25 * SR), 7); lp1(nz, 1800); for (let i = 0; i < nz.length; i++) x[i] += nz[i] * 0.5 * Math.exp(-i / SR / 0.05); return norm(x, 0.9); }); A.play(b, t, { gain: 0.3 * gn, bus: 'sfx', verb: 0.35 }); };
    /** sub drop / boom (scale changes, reveals) */
    sfx.sub = (t, o = {}) => { const b = A.buffer('sub', () => { const n = Math.floor(2.4 * SR); const x = new Float32Array(n); let ph = 0; for (let i = 0; i < n; i++) { const tt = i / SR; ph += MG.TAU * (30 + 32 * Math.exp(-tt / 0.4)) / SR; x[i] = Math.sin(ph) * Math.exp(-tt / 0.9) * Math.min(1, tt * 60); } return norm(x, 0.9); }); A.play(b, t, { gain: 0.3 * (o.gain ?? 1), bus: 'sfx', verb: 0.05 }); };
    sfx.boom = (t, o = {}) => { sfx.impact(t, { size: 1, gain: o.gain ?? 1 }); sfx.sub(t, { gain: (o.gain ?? 1) * 0.8 }); };
    /** tonal hit: chord stab through hall (dramatic reveal) */
    sfx.tonal = (t, notes = ['A2', 'E3', 'A3', 'C4'], o = {}) => { A.voice(t, o.dur || 2.5, notes, { kind: 'brass', vel: 0.55 * (o.gain ?? 1), attack: 0.01, release: 1.8, verb: 0.6, bus: 'sfx' }); A.voice(t, (o.dur || 2.5) + 1, notes, { kind: 'strings', vel: 0.5 * (o.gain ?? 1), attack: 0.02, release: 2.2, verb: 0.6, bus: 'sfx' }); sfx.impact(t, { size: 0.4, gain: 0.6 * (o.gain ?? 1) }); };
    /** riser into a hit at time t (starts t-dur) */
    sfx.riser = (t, o = {}) => { const d = o.dur || 2.5, gn = 0.16 * (o.gain ?? 1); sweepNoise(t - d, d, [[0, 400], [1, 7000]], [[0.1, gn * 0.2], [0.97, gn], [1, 0]], { type: 'bandpass', Q: 1.5, seed: 61 }); if (o.tone !== false) { const lt = L(t - d); if (lt >= 0 && t <= t1) { const s = osc('sawtooth', 110, lt, d); s.frequency.setValueAtTime(110, lt); s.frequency.exponentialRampToValueAtTime(440, lt + d); const f = ac.createBiquadFilter(); f.type = 'lowpass'; f.frequency.setValueAtTime(300, lt); f.frequency.exponentialRampToValueAtTime(3000, lt + d); const g = ac.createGain(); g.gain.setValueAtTime(0, lt); g.gain.linearRampToValueAtTime(0.035 * (o.gain ?? 1), lt + d * 0.95); g.gain.linearRampToValueAtTime(0, lt + d); s.connect(f); f.connect(g); A.out(g, { bus: 'sfx', verb: 0.3 }); } } };
    /** reverse swell into t */
    sfx.swell = (t, o = {}) => { const d = o.dur || 1.6; sweepNoise(t - d, d, [[0, 2500], [1, 9000]], [[0, 0], [0.95, 0.12 * (o.gain ?? 1)], [1, 0]], { type: 'highpass', Q: 0.5, seed: 71, verb: 0.4 }); };
    sfx.downlifter = (t, o = {}) => { const d = o.dur || 1.8; sweepNoise(t, d, [[0, 6000], [1, 200]], [[0.02, 0.12 * (o.gain ?? 1)], [1, 0]], { Q: 1.2, seed: 81, verb: 0.3 }); };
    /** UI click / tick / pop / blip */
    sfx.click = (t, o = {}) => A.drum(t, 'rim', { vel: 0.35 * (o.gain ?? 1), bus: 'sfx', pan: o.pan, verb: 0.05 });
    sfx.tick = (t, o = {}) => A.drum(t, 'tick', { vel: 0.3 * (o.gain ?? 1), bus: 'sfx', pan: o.pan, verb: 0.05 });
    sfx.tock = (t, o = {}) => A.drum(t, 'tock', { vel: 0.3 * (o.gain ?? 1), bus: 'sfx', pan: o.pan, verb: 0.05 });
    sfx.pop = (t, o = {}) => { const f = o.freq || 520; const b = A.buffer(`pop:${f}`, () => { const n = Math.floor(0.15 * SR); const x = new Float32Array(n); let ph = 0; for (let i = 0; i < n; i++) { const tt = i / SR; ph += MG.TAU * (f * (1 + 1.5 * Math.exp(-tt / 0.012))) / SR; x[i] = Math.sin(ph) * Math.exp(-tt / 0.04); } return norm(x, 0.8); }); A.play(b, t, { gain: 0.2 * (o.gain ?? 1), bus: 'sfx', pan: o.pan, verb: 0.1 }); };
    sfx.blip = (t, o = {}) => A.mallet(t, o.note || 'E6', { kind: 'kalimba', vel: 0.35 * (o.gain ?? 1), bus: 'sfx', pan: o.pan, verb: 0.15 });
    sfx.chime = (t, o = {}) => A.mallet(t, o.note || 'A5', { kind: 'celesta', vel: 0.4 * (o.gain ?? 1), bus: 'sfx', pan: o.pan, verb: 0.4 });
    sfx.ding = (t, o = {}) => A.bell(t, o.note || 'C6', { vel: 0.25 * (o.gain ?? 1), bus: 'sfx' });
    /** paper: rustle / slide / stamp / tape */
    sfx.paper = (t, o = {}) => { const d = o.dur || 0.4; const b = A.buffer(`paper:${d}`, () => { const n = Math.floor(d * SR); const x = noise(n, 91); const r = MG.rng(5); let e = 0; for (let i = 0; i < n; i++) { if (r() < 0.004) e = 0.4 + r() * 0.6; e *= 0.9993; x[i] *= e * Math.sin(Math.PI * i / n); } biquad(x, 'bp', 3200, 0.7); return norm(x, 0.7); }); A.play(b, t, { gain: 0.25 * (o.gain ?? 1), bus: 'sfx', pan: o.pan, verb: 0.08, room: true }); };
    sfx.slide = (t, o = {}) => { const d = o.dur || 0.35; sweepNoise(t, d, [[0, 2500], [1, 1400]], [[0.2, 0.08 * (o.gain ?? 1)], [1, 0]], { Q: 0.8, seed: 101, pan: o.pan }); };
    sfx.stamp = (t, o = {}) => { A.drum(t, 'kick', { vel: 0.45 * (o.gain ?? 1), bus: 'sfx', verb: 0.1 }); sfx.paper(t + 0.005, { dur: 0.15, gain: 0.7 * (o.gain ?? 1) }); };
    sfx.thud = (t, o = {}) => A.drum(t, 'cajon', { vel: 0.5 * (o.gain ?? 1), bus: 'sfx', verb: 0.1 });
    sfx.typekey = (t, o = {}) => { A.drum(t, 'tick', { vel: 0.25 * (o.gain ?? 1), bus: 'sfx', rate: 0.6 + MG.hash(t) * 0.3 }); A.drum(t + 0.008, 'woodblock', { p: 2000, vel: 0.1 * (o.gain ?? 1), bus: 'sfx' }); };
    sfx.shutter = (t, o = {}) => { sfx.click(t, o); sfx.slide(t + 0.02, { dur: 0.06, gain: 0.8 }); sfx.click(t + 0.08, o); };
    /** coins / silver: n clinks over spread seconds */
    sfx.coins = (t, o = {}) => { const n = o.n || 8, sp = o.spread || 0.6; for (let i = 0; i < n; i++) { const tt = t + MG.hash(i * 3.1 + t) * sp; const m = 84 + Math.floor(MG.hash(i + 9 + t) * 14); A.mallet(tt, m, { kind: 'glock', vel: 0.25 * (o.gain ?? 1) * (0.5 + MG.hash(i)), bus: 'sfx', pan: (MG.hash(i + 2) - 0.5) * 0.8, verb: 0.15 }); } };
    sfx.register = (t, o = {}) => { A.bell(t + 0.08, 'E6', { vel: 0.3 * (o.gain ?? 1), bus: 'sfx' }); sfx.coins(t + 0.12, { n: 5, spread: 0.3, gain: 0.7 * (o.gain ?? 1) }); A.drum(t, 'woodblock', { p: 700, vel: 0.3, bus: 'sfx' }); };
    sfx.heartbeat = (t, o = {}) => { const n = o.n || 4, bpm = o.bpm || 60; for (let i = 0; i < n; i++) { const tt = t + i * 60 / bpm; A.drum(tt, 'kick808', { vel: 0.4 * (o.gain ?? 1), bus: 'sfx', rate: 0.8, verb: 0.05 }); A.drum(tt + 0.2, 'kick808', { vel: 0.28 * (o.gain ?? 1), bus: 'sfx', rate: 0.75, verb: 0.05 }); } };
    sfx.clock = (t, o = {}) => { const d = o.dur || 4, bpm = o.bpm || 60; let i = 0; for (let tt = t; tt < t + d; tt += 60 / bpm, i++) (i % 2 ? sfx.tock : sfx.tick)(tt, { gain: o.gain ?? 1, pan: i % 2 ? 0.15 : -0.15 }); };
    /** ambiences: wind / sea / crowd / rain / fire / city / cicadas / room. dur seconds, gain ≈0.5–1 */
    sfx.amb = (kind, t, dur, o = {}) => {
      if (!inRange(t, dur)) return; let lt = L(t); let len = dur; if (lt < 0) { len += lt; lt = 0; } const G = o.gain ?? 1; const fi = Math.min(o.fade ?? 1.2, len / 2);
      const src = ac.createBufferSource(); src.buffer = nb(6, 200 + kind.length); src.loop = true; const g = ac.createGain(); g.gain.setValueAtTime(0, lt); g.gain.linearRampToValueAtTime(G, lt + fi); g.gain.setValueAtTime(G, lt + len - fi); g.gain.linearRampToValueAtTime(0, lt + len);
      let chain = src; const F = (type, f, q = 0.7) => { const b = ac.createBiquadFilter(); b.type = type; b.frequency.value = f; b.Q.value = q; chain.connect(b); chain = b; return b; };
      const lfo = (target, rate, depth, base) => { const l = ac.createOscillator(); l.frequency.value = rate; const lg = ac.createGain(); lg.gain.value = depth; l.connect(lg); lg.connect(target); if (base !== undefined) target.value = base; l.start(lt); l.stop(lt + len + 0.1); };
      let lvl = 0.1;
      if (kind === 'wind') { const f = F('bandpass', 500, 0.8); lfo(f.frequency, 0.08, 300, 550); lvl = 0.22; }
      else if (kind === 'sea') { F('lowpass', 900); const am = ac.createGain(); chain.connect(am); chain = am; lfo(am.gain, 0.11, 0.45, 0.55); lvl = 0.2; }
      else if (kind === 'crowd') { F('bandpass', 700, 0.6); const f2 = F('peaking', 1800, 1); f2.gain.value = 4; const am = ac.createGain(); chain.connect(am); chain = am; lfo(am.gain, 3.3, 0.15, 0.85); lvl = 0.16; }
      else if (kind === 'rain') { F('highpass', 1200); F('lowpass', 8000); lvl = 0.1; }
      else if (kind === 'fire') { F('lowpass', 2000); const am = ac.createGain(); chain.connect(am); chain = am; lfo(am.gain, 7.1, 0.4, 0.6); lvl = 0.12; }
      else if (kind === 'city') { F('lowpass', 500); lvl = 0.22; }
      else if (kind === 'room') { F('lowpass', 300); lvl = 0.08; }
      else if (kind === 'cicadas') { F('bandpass', 5200, 3); const am = ac.createGain(); chain.connect(am); chain = am; lfo(am.gain, 38, 0.5, 0.5); const am2 = ac.createGain(); chain.connect(am2); chain = am2; lfo(am2.gain, 0.4, 0.4, 0.6); lvl = 0.06; }
      else if (kind === 'hum') { const o2 = osc('sawtooth', 50, lt, len); const f = ac.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 400; o2.connect(f); const hl = ac.createGain(); hl.gain.value = 0.06; f.connect(hl); hl.connect(g); lvl = 0.02; }
      else if (kind === 'space') { F('lowpass', 300); lvl = 0.12; }
      const lv = ac.createGain(); lv.gain.value = lvl; chain.connect(lv); lv.connect(g); A.out(g, { bus: 'amb', verb: o.verb ?? 0.2, pan: o.pan }); src.start(lt, (t * 1.7) % 5); src.stop(lt + len + 0.1);
      if (kind === 'crowd' && o.cheer) { /* cheer swell at o.cheer (abs) */ const tc = L(o.cheer); g.gain.setValueAtTime(G, Math.max(lt, tc - 0.2)); g.gain.linearRampToValueAtTime(G * 2.6, tc + 0.4); g.gain.linearRampToValueAtTime(G, tc + 2.5); }
    };
    sfx.birds = (t, dur, o = {}) => { const r = MG.rng(o.seed || 3); for (let tt = t; tt < t + dur; tt += 0.3 + r() * 1.6) { const n = 2 + Math.floor(r() * 4); const f0 = 2500 + r() * 2500; for (let k = 0; k < n; k++) { const ts = tt + k * 0.09; if (!inRange(ts, 0.1)) continue; const lt = L(ts); if (lt < 0) continue; const s = osc('sine', f0, lt, 0.07); s.frequency.setValueAtTime(f0, lt); s.frequency.exponentialRampToValueAtTime(f0 * (1.3 + r() * 0.4), lt + 0.05); const g = envGain(lt, 0.07, 0.01, 0.04, 0.03 * (o.gain ?? 1)); s.connect(g); A.out(g, { bus: 'amb', pan: r() - 0.5, verb: 0.3 }); } } };
    sfx.train = (t, dur, o = {}) => { sfx.amb('city', t, dur, { gain: 1.4 * (o.gain ?? 1) }); const bpm = o.bpm || 130; A.pattern(t, t + dur, bpm, 2, 'x.x.....', (tt) => { A.drum(tt, 'woodblock', { p: 320, vel: 0.22 * (o.gain ?? 1), bus: 'sfx', verb: 0.05 }); A.drum(tt + 0.07, 'woodblock', { p: 280, vel: 0.16 * (o.gain ?? 1), bus: 'sfx' }); }); };
    sfx.plane = (t, dur, o = {}) => { if (!inRange(t, dur)) return; const lt = Math.max(0, L(t)); for (const d of [0, 7, -9, 14]) { const s = osc('sawtooth', 62, lt, dur, d * 10); s.frequency.setValueAtTime(70, lt); s.frequency.linearRampToValueAtTime(56, lt + dur); const f = ac.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 450; const g = ac.createGain(); g.gain.setValueAtTime(0, lt); g.gain.linearRampToValueAtTime(0.03 * (o.gain ?? 1), lt + dur * 0.5); g.gain.linearRampToValueAtTime(0, lt + dur); s.connect(f); f.connect(g); A.out(g, { bus: 'sfx', verb: 0.4, pan: d / 20 }); } };
    sfx.explosion = (t, o = {}) => { sfx.boom(t, { gain: 0.8 * (o.gain ?? 1) }); sweepNoise(t, 2.5, [[0, 1500], [1, 120]], [[0.02, 0.25 * (o.gain ?? 1)], [1, 0]], { type: 'lowpass', Q: 0.5, seed: 111, verb: 0.6 }); };
    sfx.thunder = (t, o = {}) => { sweepNoise(t, 4, [[0, 800], [0.2, 300], [1, 80]], [[0.03, 0.22 * (o.gain ?? 1)], [0.3, 0.12 * (o.gain ?? 1)], [1, 0]], { type: 'lowpass', Q: 0.4, seed: 121, verb: 0.7 }); sfx.sub(t, { gain: 0.5 * (o.gain ?? 1) }); };
    sfx.spray = (t, o = {}) => { const d = o.dur || 0.8; sweepNoise(t, d, [[0, 5000], [1, 4000]], [[0.05, 0.12 * (o.gain ?? 1)], [0.8, 0.1 * (o.gain ?? 1)], [1, 0]], { type: 'highpass', Q: 0.6, seed: 131, pan: o.pan }); };
    sfx.splash = (t, o = {}) => { sweepNoise(t, 0.9, [[0, 3000], [1, 600]], [[0.02, 0.2 * (o.gain ?? 1)], [1, 0]], { Q: 0.6, seed: 141 }); sfx.thud(t, { gain: 0.4 }); };
    sfx.powerDown = (t, o = {}) => { if (!inRange(t, 2)) return; const lt = Math.max(0, L(t)); const d = o.dur || 1.6; const s = osc('sawtooth', 120, lt, d); s.frequency.setValueAtTime(120, lt); s.frequency.exponentialRampToValueAtTime(18, lt + d); const f = ac.createBiquadFilter(); f.type = 'lowpass'; f.frequency.setValueAtTime(2500, lt); f.frequency.exponentialRampToValueAtTime(100, lt + d); const g = ac.createGain(); g.gain.setValueAtTime(0.08 * (o.gain ?? 1), lt); g.gain.linearRampToValueAtTime(0, lt + d); s.connect(f); f.connect(g); A.out(g, { bus: 'sfx', verb: 0.3 }); sfx.click(t, { gain: 1.2 }); };
    sfx.creak = (t, o = {}) => { if (!inRange(t, 1)) return; const lt = Math.max(0, L(t)); const d = o.dur || 0.9; const s = osc('sawtooth', 90, lt, d); s.frequency.setValueAtTime(80, lt); s.frequency.linearRampToValueAtTime(130, lt + d * 0.6); s.frequency.linearRampToValueAtTime(95, lt + d); const f = ac.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 900; f.Q.value = 8; const g = envGain(lt, d, 0.1, 0.3, 0.05 * (o.gain ?? 1)); s.connect(f); f.connect(g); A.out(g, { bus: 'sfx', verb: 0.2 }); };
    sfx.cannon = (t, o = {}) => { sfx.impact(t, { size: 0.8, gain: 0.8 * (o.gain ?? 1) }); sweepNoise(t, 1.8, [[0, 2000], [1, 150]], [[0.01, 0.2 * (o.gain ?? 1)], [1, 0]], { type: 'lowpass', seed: 151, verb: 0.7 }); };
    sfx.churchBell = (t, o = {}) => A.bell(t, o.note || 'G3', { vel: 0.5 * (o.gain ?? 1), bus: 'sfx', verb: 0.6 });
    sfx.glitch = (t, o = {}) => { const r = MG.rng(Math.floor(t * 100)); for (let i = 0; i < (o.n || 6); i++) sfx.blip(t + i * 0.035, { note: 70 + Math.floor(r() * 24), gain: 0.4 * (o.gain ?? 1) }); };
    sfx.cheer = (t, o = {}) => sfx.amb('crowd', t - 0.5, o.dur || 4, { gain: 2.2 * (o.gain ?? 1), fade: 0.6 });
    sfx.whistleRef = (t, o = {}) => { A.whistle(t, 0.5, 'B6', { vel: 0.5 * (o.gain ?? 1), bus: 'sfx' }); };
    sfx.sizzle = (t, dur, o = {}) => sweepNoise(t, dur, [[0, 6000], [1, 7000]], [[0.2, 0.05 * (o.gain ?? 1)], [0.8, 0.05 * (o.gain ?? 1)], [1, 0]], { type: 'highpass', seed: 161 });

    // ---------- music cue library ----------
    A.music = (style, ts, te, o = {}) => { const fn = AU.STYLES[style]; if (!fn) { console.warn('unknown music style', style); return; } if (te < t0 - 1 || ts > t1) return; fn(A, ts, te, { ...o, gain: (o.gain ?? 1) * (AU.CAL[style] ?? 1) }); };
    return A;
  }

  // ---------- music styles: (A, ts, te, o) ----------
  // common opts: key (root note), bpm, intensity (0..1 | fn | keys), gain, seed, fadeIn, fadeOut, hits:[abs times] (accent on downbeat-ish)
  /** loudness calibration: every style at intensity 0.7 ≈ −28 LUFS (measured) */
  AU.CAL = { flamenco: 0.52, andalusi: 0.65, epic: 0.62, tension: 0.43, dread: 0.62, sneaky: 2.16, retro60s: 0.55, pulse: 0.76, warm: 0.87, ambient: 1.24, march: 0.79, lament: 0.91, hopeful: 0.49, triumph: 0.56, fiesta: 0.69, mystery: 0.89, heat: 1.15, sting: 0.6 };
  const S = (AU.STYLES = {});
  const I = (A, o, t) => clamp(A.level(o.intensity ?? 0.6, t)) * fadeEnv(o, t);
  const fadeEnv = (o, t) => { const fi = o.fadeIn ?? 1.5, fo = o.fadeOut ?? 2; let k = 1; if (o._ts !== undefined) { if (fi > 0) k = Math.min(k, clamp((t - o._ts) / fi)); if (fo > 0) k = Math.min(k, clamp((o._te - t) / fo)); } return k; };
  const prep = (o, ts, te) => ({ gain: 1, ...o, _ts: ts, _te: te });

  /** flamenco: phrygian-dominant rasgueado + palmas + cajón (energetic Spanish identity) */
  S.flamenco = (A, ts, te, o) => { o = prep(o, ts, te); const bpm = o.bpm || 112, key = A.midi(o.key || 'E3'); const prog = [[key + 5, 'maj'], [key + 3, 'maj'], [key + 1, 'maj'], [key, 'maj']]; // Am-G-F-E (andalusian) relative to E
    A.bars(ts, te, bpm, 4, (bt, bi, b) => { const k = I(A, o, bt); if (k <= 0.01) return; const [r, q] = prog[bi % 4]; const ch = A.chord(r - 12, q).concat(A.chord(r, q)); const pat = k > 0.6 ? [0, 0.5, 1, 1.5, 2, 2.75, 3, 3.5] : [0, 1.5, 2, 3]; pat.forEach((p, i) => A.strum(bt + p * b, ch, { vel: (0.35 + 0.45 * k) * o.gain * (i === 0 ? 1.1 : 0.85), dir: i % 2 ? 'up' : 'down', spread: i === 0 ? 0.03 : 0.012, pan: -0.15 }));
      if (k > 0.35) [0.5, 1.5, 2.5, 3.5].forEach((p) => A.drum(bt + p * b, 'clap', { vel: 0.3 * k * o.gain, pan: 0.3 }));
      if (k > 0.25) { A.drum(bt, 'cajon', { vel: 0.6 * k * o.gain }); A.drum(bt + 2 * b, 'cajon', { vel: 0.5 * k * o.gain }); A.drum(bt + 1.5 * b, 'cajonSlap', { vel: 0.35 * k * o.gain }); A.drum(bt + 3 * b, 'cajonSlap', { vel: 0.4 * k * o.gain }); }
      if (k > 0.7) for (let s = 0; s < 8; s++) if (MG.hash(bi * 8 + s) > 0.55) A.drum(bt + s * b / 2, 'castanet', { vel: 0.2 * k * o.gain, pan: 0.5 });
      if (k > 0.5 && bi % 2 === 1) { const sc = A.scale(A.midi(o.key || 'E3') + 12, 'phrygDom', 2); for (let n = 0; n < 6; n++) A.guitar(bt + 2 * b + n * b / 3, sc[Math.floor(MG.hash(bi * 17 + n) * 8)], { vel: 0.45 * k * o.gain, pan: 0.2 }); }
      A.bass(bt, b * 1.9, r - 24, { vel: 0.5 * k * o.gain }); A.bass(bt + 2 * b, b * 1.9, r - 24, { vel: 0.4 * k * o.gain }); }); };

  /** andalusi: oud improvisation in hijaz + darbuka + drone + ney-like flute (Al-Andalus) */
  S.andalusi = (A, ts, te, o) => { o = prep(o, ts, te); const bpm = o.bpm || 92, key = A.midi(o.key || 'D3'); const sc = A.scale(key, 'hijaz', 2);
    A.drone(ts, te - ts, [key - 12, key - 5], { vel: 0.5 * o.gain, attack: 3, release: 3 });
    A.bars(ts, te, bpm, 4, (bt, bi, b) => { const k = I(A, o, bt); if (k <= 0.01) return;
      if (k > 0.2) { A.drum(bt, 'doum', { vel: 0.55 * k * o.gain }); A.drum(bt + 1.5 * b, 'tek', { vel: 0.3 * k * o.gain, pan: 0.2 }); A.drum(bt + 2 * b, 'doum', { vel: 0.45 * k * o.gain }); A.drum(bt + 3 * b, 'tek', { vel: 0.35 * k * o.gain, pan: 0.2 }); A.drum(bt + 3.5 * b, 'tek', { vel: 0.2 * k * o.gain, pan: -0.2 }); }
      const r = MG.rng((o.seed || 5) + bi); let pos = 0, d = Math.floor(r() * 5) + 3; while (pos < 4) { const len = [0.5, 0.5, 0.25, 1, 0.75][Math.floor(r() * 5)]; d = clamp(d + Math.floor(r() * 5) - 2, 0, 12); A.oud(bt + pos * b, sc[d], { vel: (0.4 + 0.3 * r()) * k * o.gain, pan: -0.25 }); if (r() < 0.3 && k > 0.4) A.oud(bt + (pos + 0.12) * b, sc[d], { vel: 0.25 * k * o.gain, pan: -0.25 }); pos += len; }
      if (k > 0.55 && bi % 4 === 2) A.flute(bt, b * 3.5, sc[7 + Math.floor(r() * 4)] + 12, { vel: 0.4 * k * o.gain, pan: 0.3, glide: -1 }); }); };

  /** epic: orchestral ostinato, brass swells, timpani, choir (empire, big reveals) */
  S.epic = (A, ts, te, o) => { o = prep(o, ts, te); const bpm = o.bpm || 96, key = A.midi(o.key || 'D3'); const prog = o.prog || [[0, 'min'], [-4, 'maj'], [-7, 'maj'], [-2, 'maj']];
    A.bars(ts, te, bpm, 4, (bt, bi, b) => { const k = I(A, o, bt); if (k <= 0.01) return; const [d, q] = prog[bi % prog.length]; const r = key + d; const ch = A.chord(r, q);
      A.strings(bt, b * 4.1, ch.concat([r + 12]), { vel: (0.35 + 0.4 * k) * o.gain, attack: 0.4 }); A.cello(bt, b * 4, [r - 12], { vel: 0.5 * k * o.gain });
      for (let s = 0; s < 8; s++) A.pizz(bt + s * b / 2, (s % 2 ? ch[1] : r) - 12 + (s === 6 ? 7 : 0), { vel: 0.45 * k * o.gain, pan: -0.3 });
      if (k > 0.45) { A.drum(bt, 'timpani', { p: A.hz(r - 24), vel: 0.6 * k * o.gain }); A.drum(bt + 2.5 * b, 'timpani', { p: A.hz(r - 24), vel: 0.4 * k * o.gain }); }
      if (k > 0.6 && bi % 2 === 1) A.brass(bt + 2 * b, b * 2, A.chord(r, q), { vel: 0.5 * k * o.gain });
      if (k > 0.75) { A.choir(bt, b * 4, ch, { vel: 0.5 * k * o.gain }); A.drum(bt, 'taiko', { vel: 0.5 * k * o.gain }); A.drum(bt + 1.5 * b, 'taiko', { vel: 0.35 * k * o.gain }); } }); };

  /** tension: pulsing low strings, ticking, unresolved harmony (build-ups, problems) */
  S.tension = (A, ts, te, o) => { o = prep(o, ts, te); const bpm = o.bpm || 100, key = A.midi(o.key || 'C3');
    A.drone(ts, te - ts, [key - 12, key - 11 + 12], { vel: 0.45 * o.gain });
    A.grid(ts, te, bpm, 4, (t, i) => { const k = I(A, o, t); if (k <= 0.02) return; if (i % 2 === 0) A.cello(t, 60 / bpm / 2.2, [key - 12 + (Math.floor(i / 16) % 4 === 3 ? 1 : 0)], { vel: (0.3 + 0.4 * k) * o.gain, attack: 0.01, release: 0.05 }); if (k > 0.4 && i % 4 === 2) A.drum(t, 'tick', { vel: 0.25 * k * o.gain, pan: 0.4 }); if (k > 0.65 && i % 8 === 0) A.drum(t, 'kick', { vel: 0.35 * k * o.gain }); });
    A.bars(ts, te, bpm, 4, (bt, bi, b) => { const k = I(A, o, bt); if (k > 0.5 && bi % 2 === 0) A.strings(bt, b * 8, [key + 12, key + 13, key + 18], { vel: 0.25 * k * o.gain, attack: 2 }); }); };

  /** dread / horror: clusters, sub swells, metallic bowed tones, sparse heartbeats */
  S.dread = (A, ts, te, o) => { o = prep(o, ts, te); const key = A.midi(o.key || 'C2');
    A.drone(ts, te - ts, [key, key + 1, key + 6], { vel: 0.6 * o.gain, attack: 3 }); A.glass(ts, te - ts, [key + 36, key + 37], { vel: 0.35 * o.gain, attack: 4 });
    for (let t = ts + 2; t < te - 1; t += 6 + MG.hash(t) * 4) { A.sfx.swell(t, { dur: 2.5, gain: 0.6 * o.gain }); A.drum(t, 'gong', { vel: 0.25 * o.gain, rate: 0.6 }); }
    if ((o.intensity ?? 0.5) > 0.5) for (let t = ts + 4; t < te - 2; t += 8) A.sfx.heartbeat(t, { n: 3, bpm: 56, gain: 0.5 * o.gain }); };

  /** sneaky / ironic: pizzicato bassoon-like line, woodblock, staccato clarinet (wry, "ехидная") */
  S.sneaky = (A, ts, te, o) => { o = prep(o, ts, te); const bpm = o.bpm || 118, key = A.midi(o.key || 'D3'); const line = [0, 3, 5, 6, 7, 6, 5, 3, 0, -2, 0, 3, 7, 6, 3, 0];
    A.grid(ts, te, bpm, 2, (t, i) => { const k = I(A, o, t); if (k <= 0.02) return; const d = line[i % 16]; if (i % 16 !== 7 && i % 16 !== 15) A.pizz(t, key + d - 12, { vel: (0.5 + 0.3 * k) * o.gain }); if (i % 4 === 2) A.drum(t, 'woodblock', { p: 900, vel: 0.25 * k * o.gain, pan: 0.4 }); if (k > 0.5 && i % 8 === 4) A.clarinet(t, 0.12, key + d + 12, { vel: 0.5 * k * o.gain, pan: -0.2 }); if (i % 4 === 0) A.drum(t, 'brush', { vel: 0.15 * k * o.gain }); }); };

  /** retro60s: bossa/lounge — organ, vibes, brushed groove, walking bass (Spanish Miracle, tourism boom) */
  S.retro60s = (A, ts, te, o) => { o = prep(o, ts, te); const bpm = o.bpm || 126, key = A.midi(o.key || 'F3'); const prog = [[0, 'maj7'], [2, 'min7'], [-3, 'min7'], [-5, 'dom7']];
    A.bars(ts, te, bpm, 4, (bt, bi, b) => { const k = I(A, o, bt); if (k <= 0.01) return; const [d, q] = prog[bi % 4]; const ch = A.chord(key + d, q);
      A.organ(bt, b * 1.6, ch, { vel: 0.4 * k * o.gain, pan: -0.2 }); A.organ(bt + 2.5 * b, b * 1.3, ch, { vel: 0.35 * k * o.gain, pan: -0.2 });
      [0, 1, 2, 3].forEach((p, i) => A.bass(bt + p * b, b * 0.9, key + d - 12 + [0, 7, 12, 7][i] - (i === 3 ? 1 : 0), { vel: 0.5 * k * o.gain }));
      A.pattern(bt, bt + 4 * b, bpm, 4, 'x..x..x...x..x..', (t) => A.drum(t, 'rim', { vel: 0.18 * k * o.gain, pan: 0.3 }));
      A.grid(bt, bt + 4 * b, bpm, 2, (t, i) => A.drum(t, i % 2 ? 'shaker' : 'brush', { vel: 0.16 * k * o.gain, pan: 0.2 }));
      if (k > 0.45) { const mel = [12, 14, 16, 19, 16, 14]; mel.forEach((m, i) => { if (MG.hash(bi * 6 + i) > 0.35) A.mallet(bt + i * b * 0.66, key + d + m, { kind: 'vibes', vel: 0.4 * k * o.gain, pan: 0.35 }); }); } }); };

  /** pulse: modern electronic — kick, hats, synth bass, pluck arps (economy, tech, trains, energy) */
  S.pulse = (A, ts, te, o) => { o = prep(o, ts, te); const bpm = o.bpm || 118, key = A.midi(o.key || 'A2'); const prog = o.prog || [[0, 'min'], [-4, 'maj'], [3, 'maj'], [-2, 'maj']];
    A.bars(ts, te, bpm, 4, (bt, bi, b) => { const k = I(A, o, bt); if (k <= 0.01) return; const [d, q] = prog[Math.floor(bi / 2) % prog.length]; const ch = A.chord(key + d + 12, q);
      if (k > 0.3) for (let s = 0; s < 4; s++) A.drum(bt + s * b, 'kick', { vel: 0.5 * k * o.gain });
      A.grid(bt, bt + 4 * b, bpm, 4, (t, i) => { if (k > 0.45 && i % 2 === 1) A.drum(t, 'hat', { vel: 0.18 * k * o.gain, pan: 0.25 }); if (i % 2 === 0 || k > 0.7) A.synthbass(t, 60 / bpm / 4 * 0.8, key + d, { vel: (0.3 + 0.4 * k) * o.gain, cutoff: 500 + 900 * k }); });
      if (k > 0.55) { A.drum(bt + b, 'clap', { vel: 0.25 * k * o.gain }); A.drum(bt + 3 * b, 'clap', { vel: 0.25 * k * o.gain }); }
      A.grid(bt, bt + 4 * b, bpm, 4, (t, i) => A.mallet(t, ch[i % 3] + (i % 8 > 3 ? 12 : 0), { kind: 'kalimba', vel: 0.28 * k * o.gain, pan: Math.sin(i) * 0.5, verb: 0.3 }));
      A.pad(bt, b * 4.2, ch, { vel: 0.35 * k * o.gain }); }); };

  /** warm: calm explanatory — felt piano chords, soft pad, light brushes (geography, explainers) */
  S.warm = (A, ts, te, o) => { o = prep(o, ts, te); const bpm = o.bpm || 84, key = A.midi(o.key || 'C3'); const prog = o.prog || [[0, 'maj9'], [-3, 'min9'], [5, 'maj7'], [7, 'add9']];
    A.bars(ts, te, bpm, 4, (bt, bi, b) => { const k = I(A, o, bt); if (k <= 0.01) return; const [d, q] = prog[bi % prog.length]; const ch = A.chord(key + d, q);
      ch.forEach((m, i) => A.piano(bt + i * 0.03, m + 12, { vel: 0.32 * k * o.gain })); A.piano(bt + 2 * b, ch[1] + 24, { vel: 0.22 * k * o.gain }); A.piano(bt + 3 * b, ch[2] + 24, { vel: 0.18 * k * o.gain });
      A.bass(bt, b * 3.8, key + d - 12, { vel: 0.35 * k * o.gain }); A.pad(bt, b * 4.3, ch, { vel: 0.25 * k * o.gain });
      if (k > 0.5) A.grid(bt, bt + 4 * b, bpm, 2, (t, i) => A.drum(t, i % 4 === 2 ? 'brush' : 'shaker', { vel: 0.12 * k * o.gain, pan: 0.2 })); if (k > 0.65) { A.drum(bt, 'kick', { vel: 0.22 * k * o.gain }); A.drum(bt + 2.5 * b, 'kick', { vel: 0.18 * k * o.gain }); } }); };

  /** ambient: geography / maps — harp arpeggios, airy pad, glass (spacious, curious) */
  S.ambient = (A, ts, te, o) => { o = prep(o, ts, te); const bpm = o.bpm || 72, key = A.midi(o.key || 'D3'); const sc = A.scale(key, o.scale || 'lydian', 3);
    A.pad(ts, te - ts, [key, key + 7, key + 16], { vel: 0.4 * o.gain, attack: 3, release: 3 });
    A.grid(ts, te, bpm, 2, (t, i) => { const k = I(A, o, t); if (k <= 0.02) return; const n = sc[[0, 2, 4, 7, 9, 7, 4, 2][i % 8] + (Math.floor(i / 16) % 2) * 1]; A.harp(t, n + 12, { vel: (0.25 + 0.3 * k) * o.gain, pan: Math.sin(i * 0.7) * 0.4 }); if (k > 0.6 && i % 8 === 0) A.mallet(t, n + 24, { kind: 'celesta', vel: 0.25 * k * o.gain }); }); };

  /** march: military snare, low brass, minor (civil war, Franco) */
  S.march = (A, ts, te, o) => { o = prep(o, ts, te); const bpm = o.bpm || 104, key = A.midi(o.key || 'C3'); const prog = [[0, 'min'], [-4, 'maj'], [-5, 'maj'], [0, 'min']];
    A.bars(ts, te, bpm, 4, (bt, bi, b) => { const k = I(A, o, bt); if (k <= 0.01) return; const [d, q] = prog[bi % 4];
      A.pattern(bt, bt + 4 * b, bpm, 4, 'x.xxx.x.x.xxx.xx', (t, c, i) => A.drum(t, 'snare', { vel: (i % 4 === 0 ? 0.42 : 0.22) * k * o.gain, pan: -0.1 }));
      A.drum(bt, 'kick', { vel: 0.4 * k * o.gain }); A.drum(bt + 2 * b, 'kick', { vel: 0.35 * k * o.gain });
      A.horn(bt, b * 2, A.chord(key + d - 12, q), { vel: 0.5 * k * o.gain }); if (k > 0.5) A.brass(bt + 2 * b, b * 1.8, A.chord(key + d, q), { vel: 0.4 * k * o.gain });
      A.cello(bt, b * 4, [key + d - 12], { vel: 0.4 * k * o.gain }); }); };

  /** lament: slow cello/strings + sparse piano (memory, loss, unmarked graves) */
  S.lament = (A, ts, te, o) => { o = prep(o, ts, te); const bpm = o.bpm || 60, key = A.midi(o.key || 'D3'); const prog = [[0, 'min'], [-2, 'maj'], [-4, 'maj'], [-5, 'min7']]; const mel = [7, 5, 3, 2, 3, 0, -2, 0];
    A.bars(ts, te, bpm, 4, (bt, bi, b) => { const k = I(A, o, bt); if (k <= 0.01) return; const [d, q] = prog[bi % 4]; A.strings(bt, b * 4.3, A.chord(key + d, q), { vel: 0.4 * k * o.gain, attack: 1.2 }); A.cello(bt + b * 0.5, b * 3.2, [key + mel[(bi * 2) % 8] + 12 - 12], { vel: 0.5 * k * o.gain, attack: 0.5 }); A.piano(bt, key + d + 12, { vel: 0.3 * k * o.gain }); A.piano(bt + 2 * b, key + mel[(bi * 2 + 1) % 8] + 24, { vel: 0.22 * k * o.gain }); }); };

  /** hopeful: rising piano arps + strings, major (transition to democracy, finale) */
  S.hopeful = (A, ts, te, o) => { o = prep(o, ts, te); const bpm = o.bpm || 92, key = A.midi(o.key || 'G3'); const prog = o.prog || [[0, 'maj'], [7, 'maj'], [9, 'min'], [5, 'maj']];
    A.bars(ts, te, bpm, 4, (bt, bi, b) => { const k = I(A, o, bt); if (k <= 0.01) return; const [d, q] = prog[bi % 4]; const ch = A.chord(key + d, q);
      A.grid(bt, bt + 4 * b, bpm, 4, (t, i) => A.piano(t, ch[i % 3] + 12 + (i % 8 > 4 ? 12 : 0), { vel: (0.22 + 0.15 * k) * o.gain }));
      A.strings(bt, b * 4.2, ch.concat(ch[0] + 12), { vel: (0.2 + 0.4 * k) * o.gain, attack: 0.8 }); A.bass(bt, b * 3.8, key + d - 12, { vel: 0.35 * k * o.gain });
      if (k > 0.6) { A.drum(bt, 'kick', { vel: 0.3 * k * o.gain }); A.drum(bt + 2 * b, 'snare', { vel: 0.18 * k * o.gain }); A.horn(bt, b * 4, [ch[0] + 12], { vel: 0.3 * k * o.gain }); } }); };

  /** triumph: big drums + brass fanfare (Olympics, football glory) */
  S.triumph = (A, ts, te, o) => { o = prep(o, ts, te); const bpm = o.bpm || 120, key = A.midi(o.key || 'C3'); const prog = [[0, 'maj'], [5, 'maj'], [7, 'maj'], [0, 'maj']];
    A.bars(ts, te, bpm, 4, (bt, bi, b) => { const k = I(A, o, bt); if (k <= 0.01) return; const [d, q] = prog[bi % 4]; const ch = A.chord(key + d, q);
      A.brass(bt, b * 1.4, ch, { vel: 0.55 * k * o.gain }); A.brass(bt + 1.5 * b, b * 0.45, ch, { vel: 0.45 * k * o.gain }); A.brass(bt + 2 * b, b * 1.9, A.chord(key + d + (bi % 2 ? 7 : 5), 'maj'), { vel: 0.5 * k * o.gain });
      A.strings(bt, b * 4, ch.concat(ch[0] + 12), { vel: 0.45 * k * o.gain }); A.drum(bt, 'taiko', { vel: 0.5 * k * o.gain }); A.drum(bt + b, 'snare', { vel: 0.35 * k * o.gain }); A.drum(bt + 2 * b, 'taiko', { vel: 0.4 * k * o.gain }); A.drum(bt + 3 * b, 'snare', { vel: 0.35 * k * o.gain }); if (bi % 4 === 0) A.drum(bt, 'crash', { vel: 0.18 * k * o.gain }); A.bass(bt, b * 4, key + d - 12, { vel: 0.4 * k * o.gain }); }); };

  /** fiesta: rumba flamenca — fast strums, palmas, cajón, bright (Spanish joy, nightlife) */
  S.fiesta = (A, ts, te, o) => { o = prep(o, ts, te); const bpm = o.bpm || 132, key = A.midi(o.key || 'A3'); const prog = [[0, 'min'], [-2, 'maj'], [-4, 'maj'], [-5, 'maj']];
    A.bars(ts, te, bpm, 4, (bt, bi, b) => { const k = I(A, o, bt); if (k <= 0.01) return; const [d, q] = prog[bi % 4]; const ch = A.chord(key + d - 12, q).concat(A.chord(key + d, q));
      A.pattern(bt, bt + 4 * b, bpm, 4, 'x.xxx.x.x.xxx.x.', (t, c, i) => A.strum(t, ch, { vel: (i % 4 === 0 ? 0.6 : 0.38) * k * o.gain, dir: i % 2 ? 'up' : 'down', spread: 0.01 }));
      A.pattern(bt, bt + 4 * b, bpm, 2, '.x.x.x.x', (t) => A.drum(t, 'clap', { vel: 0.3 * k * o.gain, pan: 0.3 })); A.pattern(bt, bt + 4 * b, bpm, 4, 'x..x..x.x..x..x.', (t) => A.drum(t, 'cajon', { vel: 0.45 * k * o.gain })); A.pattern(bt, bt + 4 * b, bpm, 4, '..x...x...x...xx', (t) => A.drum(t, 'cajonSlap', { vel: 0.3 * k * o.gain }));
      A.bass(bt, b * 1.8, key + d - 24, { vel: 0.45 * k * o.gain }); A.bass(bt + 2 * b, b * 1.8, key + d - 17, { vel: 0.4 * k * o.gain }); if (k > 0.6) A.accordion(bt, b * 4, [key + d + 12, key + d + 16], { vel: 0.25 * k * o.gain }); }); };

  /** mystery: plucks & question motifs (hooks, quiz moments, 'who's second?') */
  S.mystery = (A, ts, te, o) => { o = prep(o, ts, te); const bpm = o.bpm || 100, key = A.midi(o.key || 'E3'); const mot = [0, 7, 12, 11, 7, 3, 2, -1];
    A.pad(ts, te - ts, [key - 12, key - 5], { vel: 0.35 * o.gain, attack: 2 });
    A.grid(ts, te, bpm, 2, (t, i) => { const k = I(A, o, t); if (k <= 0.02) return; if (i % 8 < 6) A.mallet(t, key + 12 + mot[i % 8], { kind: 'musicbox', vel: (0.3 + 0.3 * k) * o.gain, pan: 0.2 }); if (i % 4 === 0) A.pizz(t, key - 12, { vel: 0.5 * k * o.gain }); if (k > 0.5 && i % 2 === 1) A.drum(t, 'shaker', { vel: 0.12 * k * o.gain }); if (k > 0.6 && i % 8 === 0) A.drum(t, 'kick', { vel: 0.3 * k * o.gain }); }); };

  /** heat: arid desert drone + slow frame drum + bent oud (drought, Meseta in summer) */
  S.heat = (A, ts, te, o) => { o = prep(o, ts, te); const key = A.midi(o.key || 'E2'); const bpm = o.bpm || 70;
    A.drone(ts, te - ts, [key, key + 7, key + 13], { vel: 0.45 * o.gain }); A.sfx.amb('cicadas', ts, te - ts, { gain: 0.6 * o.gain });
    A.bars(ts, te, bpm, 4, (bt, bi, b) => { const k = I(A, o, bt); if (k <= 0.02) return; A.drum(bt, 'frame', { vel: 0.5 * k * o.gain }); A.drum(bt + 2.5 * b, 'frame', { vel: 0.3 * k * o.gain }); if (bi % 2 === 0) A.oud(bt + b, key + 24 + [0, 1, 4, 5][bi % 4], { vel: 0.4 * k * o.gain, bend: -1.2, bendTime: 0.3 }); }); };

  /** minimal stinger helpers that agents can call directly */
  S.sting = (A, ts, te, o) => { o = prep(o, ts, te); A.sfx.tonal(ts, o.notes || ['D2', 'A2', 'D3', 'F3'], { gain: o.gain }); };

  // ---------- rendering ----------
  /** wrap the A-API so a segment script written in English seconds schedules on the French timeline.
   *  Every time argument goes through W (EN→FR). Music cues: start/end/intensity keys/hits are warped and the style
   *  itself is generated in output time, so beats stay perfectly regular. */
  AU.warpAPI = (A, W) => {
    const AW = Object.create(A);
    for (const k of ['pluck', 'guitar', 'oud', 'harp', 'pizz', 'strum', 'piano', 'mallet', 'bell', 'drum', 'voice', 'whistle']) if (typeof A[k] === 'function') AW[k] = (t, ...r) => A[k](W(t), ...r);
    AW.play = (buf, t, o) => A.play(buf, W(t), o);
    AW.inRange = (t, len) => A.inRange(W(t), len);
    AW.sfx = {}; for (const k of Object.keys(A.sfx)) AW.sfx[k] = k === 'amb' ? (kind, t, dur, o) => A.sfx.amb(kind, W(t), dur, o) : (t, ...r) => A.sfx[k](W(t), ...r);
    const Winv = MG.toEn || ((t) => t);
    AW.music = (style, ts, te, o = {}) => { const o2 = { ...o };
      if (Array.isArray(o.intensity)) o2.intensity = o.intensity.map((p) => (Array.isArray(p) ? [W(p[0]), p[1]] : p)); else if (typeof o.intensity === 'function') { const f = o.intensity; o2.intensity = (t) => f(Winv(t)); }
      if (Array.isArray(o.hits)) o2.hits = o.hits.map(W);
      return A.music(style, W(ts), W(te), o2); };
    return AW;
  };
  /** render a segment's bed to an AudioBuffer. Range = [seg.start, seg.end + TAIL] */
  AU.renderSegment = async (segId) => {
    const seg = MG.segments.find((s) => s.id === segId); if (!seg) throw new Error('no segment ' + segId);
    // French version: the segment is rendered on the OUTPUT (French) timeline; its script is authored in English seconds
    const W = MG.toOut || ((t) => t); const t0 = W(seg.start), t1 = W(seg.end) + AU.TAIL; const ac = new OfflineAudioContext(2, Math.ceil((t1 - t0) * SR), SR);
    const A = makeAPI(ac, seg, t0, t1);
    if (seg.audio) { try { seg.audio(AU.warpAPI(A, W)); } catch (e) { console.error('[audio]', segId, e); MG.errors.push(`audio ${segId}: ${e.message}`); } }
    return ac.startRendering();
  };
  /** encode AudioBuffer → 16-bit PCM WAV (ArrayBuffer) with TPDF dither */
  AU.wav = (buf) => { const ch = buf.numberOfChannels, n = buf.length; const data = new DataView(new ArrayBuffer(44 + n * ch * 2)); const W = (o, s) => { for (let i = 0; i < s.length; i++) data.setUint8(o + i, s.charCodeAt(i)); };
    W(0, 'RIFF'); data.setUint32(4, 36 + n * ch * 2, true); W(8, 'WAVE'); W(12, 'fmt '); data.setUint32(16, 16, true); data.setUint16(20, 1, true); data.setUint16(22, ch, true); data.setUint32(24, SR, true); data.setUint32(28, SR * ch * 2, true); data.setUint16(32, ch * 2, true); data.setUint16(34, 16, true); W(36, 'data'); data.setUint32(40, n * ch * 2, true);
    const chans = []; for (let c = 0; c < ch; c++) chans.push(buf.getChannelData(c)); const r = MG.rng(99); let o = 44; for (let i = 0; i < n; i++) for (let c = 0; c < ch; c++) { const v = clamp(chans[c][i] + (r() - r()) / 65536, -1, 1); data.setInt16(o, v < 0 ? v * 32768 : v * 32767, true); o += 2; } return data.buffer; };
  /** render + encode; result kept in AU._last as base64 chunks for transfer */
  AU.renderSegmentWav = async (segId) => { const b = await AU.renderSegment(segId); const ab = AU.wav(b); const u8 = new Uint8Array(ab); const CH = 3 * 1024 * 1024; AU._chunks = []; for (let i = 0; i < u8.length; i += CH) { let s = ''; const sub = u8.subarray(i, i + CH); for (let k = 0; k < sub.length; k += 8192) s += String.fromCharCode.apply(null, sub.subarray(k, k + 8192)); AU._chunks.push(btoa(s)); } let peak = 0; for (let c = 0; c < b.numberOfChannels; c++) { const d = b.getChannelData(c); for (let i = 0; i < d.length; i++) peak = Math.max(peak, Math.abs(d[i])); } return { chunks: AU._chunks.length, bytes: u8.length, peak, seconds: b.duration, start: MG.segments.find((s) => s.id === segId).start }; };
  AU.chunk = (i) => AU._chunks[i];
})();
