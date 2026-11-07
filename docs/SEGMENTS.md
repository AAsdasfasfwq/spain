# Segment plan — 11 segments, one author each

Boundaries sit on sentence starts. Each segment file is `segments/sNN.js` and registers `MG.segment('SNN', {start, end, ...})`
with EXACTLY these times. The first scene of a segment owns the transition from the previous segment (its `transIn`).
Full timed script per segment: `docs/script/SNN.md`. Director notes below are the intended visual idea — the author
deepens / improves them (better ideas welcome), but keeps the handoffs and the film's devices.

| id | start → end (s) | chapter | colour states |
|---|---|---|---|
| S01 | 0.00 → 174.63 | Cold open · the big question · title · the peninsula | hook → land |
| S02 | 174.63 → 351.14 | Madrid at the centre · rock & water · olive/wine/jamón · Empty Spain · Al-Andalus → 1492 | land → andalus |
| S03 | 351.14 → 507.32 | 1492 · America · Potosí silver · the peso & $ · Dutch disease · Moriscos · Armada · 1898 | empire → decline |
| S04 | 507.32 → 681.58 | Civil war · Guernica · Franco · autarky · 1959 · tourism boom · Spanish Miracle · clocks · siesta | war → miracle |
| S05 | 681.58 → 858.37 | Transition · 1981 coup · EC 1986 · 1992 · AVE · the economy · pillar 1 tourism · pillar 2 fashion (Ortega) | europe → economy |
| S06 | 858.37 → 1013.98 | Spanish giants · pillar 3 banking · pillar 4 energy & blackout · pillar 5 Europe's vegetable garden | economy |
| S07 | 1013.98 → 1187.85 | Drought & olive oil · water · cars · THE PRICE · problem 1: 2008 bubble, jobs, temp contracts | summer/heat → crisis |
| S08 | 1187.85 → 1345.48 | Living with parents · problem 2 housing & tourists · protests · 2026 · problem 3 children · immigration | summer → politics |
| S09 | 1345.48 → 1509.97 | Problem 4 a country that wants to come apart · ETA · Catalonia 2017 · party politics · Vox · Oct 2026 | politics |
| S10 | 1509.97 → 1638.53 | Problem 5 memory · geopolitics · Ceuta/Melilla · Canary route · Gibraltar · Latin America · football | memory → border |
| S11 | 1638.53 → 1750.00 | Where Spain wins · the unusual choice · live to enjoy · the real empire · end title | finale |

## Handoffs (both neighbours must respect these)
* **S01→S02 @174.63** — S01 ends on the standard relief map: `MG.kit.iberiaMap(ctx,{view:'iberia', relief:0.75, lift:14})`
  with the Meseta emphasised. S02 opens on the identical frame (no transition: continuity), then Madrid's pin drops.
* **S02→S03 @351.14** — S02 ends on the year **1492** (fall of Granada) as a `MG.kit.dateCard(ctx,t,t0,1492,{state:MG.STATES.empire, sub:'Granada'})`-style
  card. S03 opens on the same 1492 card (cut, continuity) and develops "two more things happen that same year".
* **S03→S04 @507.32** — S03 ends dark/sepia on "The 20th century starts even worse". S04 opens with `transIn: MG.kit.T.tear` into the war-poster world.
* **S04→S05 @681.58** — S04 ends dim on "Franco dies in his bed in 1975". S05 opens with a sun-disk iris (`MG.kit.T.sunIris()`) — a new dawn.
* **S05→S06 @858.37** — S05 ends on fast fashion ("Everyone else will eventually copy that model"). S06 opens with a whip (`MG.kit.T.whipL`).
* **S06→S07 @1013.98** — S06 ends on "With one catch." (olive oil / vegetable garden). S07 opens with `{type:'ink'}` or a heat flash into the drought.
* **S07→S08 @1187.85** — S07 ends on temporary contracts ("the habit stuck"). S08 opens with `{type:'push', dir:'left'}` into the 30-year-old's bedroom.
* **S08→S09 @1345.48** — S08 ends on the ominous "So far." S09 opens with `{type:'split'}` — the country literally splitting.
* **S09→S10 @1509.97** — S09 ends wry on "doesn't much care who's in charge in Madrid". S10 opens with `{type:'dip', color:'#120e0c'}` into memory.
* **S10→S11 @1638.53** — S10 ends on the question "…living better than so many others?". S11 opens with `MG.kit.T.flash` (golden) or a sun iris.
* Keep your last scene alive up to +1.2 s past your end (the next segment's transition draws it).
* Music: start your first cue with a 1–2 s fade-in at your start; end your last cue with a fade-out that finishes ≈ +1.5 s after your end.

## Film-wide devices (use them!)
* Sun disk motif (`MG.kit.sun`) — appears in every segment at least once, transforming meaningfully.
* SOL/SOMBRA number cards (`MG.kit.numberCard`): pillars **01 tourism (S05) · 02 fashion (S05) · 03 banking (S06) · 04 energy (S06) ·
  05 vegetable garden (S06)** on the `sol` side; problems **01 2008 / jobs (S07) · 02 housing (S08) · 03 children (S08) ·
  04 a country coming apart (S09) · 05 memory (S10)** on the `sombra` side. Same component, same timing (~2.2 s), then a
  meaningful transition into the topic.
* Callbacks: S03 silver routes ⟶ S06 "conquest in reverse" (same route, reversed, interest payments) ⟶ S11 the world's tourists flying in.
  "More rock than water" type (S02) ⟶ S07. Franco's clock (S04) ⟶ "dinner at ten" (S11). 97 million (S01) ⟶ S08 "those 97 million tourists".
* Chapter cards (`MG.kit.chapter` / `MG.kit.dateCard`) for big time jumps ("Now for the history" S02, 711 S02, 1492, 1936, 1959, 1975, 2008…).

## Director notes per segment

### S01 · 0 → 174.63 · cold open, the question, the peninsula
* 0–15 Quiz: "Which country gets the most tourists?" — a podium/ranking built of paper slabs on a desk-like ground in 2.5D;
  France rises to #1; slot #2 flips through candidates on each word: United States (No — marker strike), Italy with Rome &
  Venice as tiny illustrated vignettes (struck), China (Wrong again). Fast, rhythmic, cut on the words.
* 15.5–25.3 "a country with 49 million residents… almost twice that many visitors: 97 million. Spain." — dot-matrix of people
  filling Spain's silhouette (49M), then doubling (97M) with counter; **"Spain."** = the film's first big reveal: Spain
  lifts as a saffron slab + the sun disk is born.
* 26–34 €135 billion vs Russia's gas exports — two physical stacks/flows (tourist money vs a gas pipeline), compare in 2.5D.
* 34–46 "more than beaches" (postcard torn away) → the empire on which the sun never set: globe, the sun orbits and some part
  of the Spanish empire (Mexico, Philippines, Netherlands, Argentina…) is always lit.
* 46.5–60 Spanish: native speakers vs Chinese, half a billion; "a man who dresses half the planet" (garments raining over a
  globe), top-10 richest.
* 60–72 High-speed rail #2 behind China, highest life expectancy in the EU, most decorated football club — 3 punchy
  full-frame colour-field beats with big numbers.
* 72–103 "But is everything really that sunny?" — the sun dims, the SOMBRA divide sweeps in; the problems as fast beats:
  2013 1 in 4 unemployed / youth 1 in 2, lowest birth rates, provinces emptying, regions wanting to break away (map cracks),
  flats rented to tourists not to young locals, fall 2026 the government falls.
* 103–113 THE QUESTION + TITLE: "How did a country that lost the world's greatest empire learn to live better than many of
  the countries that defeated it? And what's the price?" → strong typographic title sequence (SPAIN + sun + sol/sombra).
  "Let's start with the map." → dive into the map.
* 113–174.6 Geography: peninsula roughly square (draw the square), cut off by mountains; Pyrenees wall rising (≈270 mi /
  435 km ruler); barely any roads; "a world unto itself"; French saying "Africa begins at the Pyrenees" (quote typography);
  water on three sides (Atlantic, Mediterranean labels; zoom to the Strait of Gibraltar, 9 mi / 14 km ruler); elevation map
  (stacked paper relief bands `MG.geo.reliefBands`), 2nd-highest average elevation in Europe after Switzerland (~2,200 ft /
  ≈670 m), the Meseta 2,000–2,600 ft (cross-section profile through the plateau), hot summers & cold winters ("nine months
  of winter and three months of hell" — snow/frost vs blazing sun on the same plateau). → handoff map.
* Music: mystery (quiz) → hit on "Spain." → epic (empire) → triumph-ish (positives) → tension (problems) → big sting on the
  question/title → ambient/warm (map) → heat drone ("three months of hell").

### S02 · 174.63 → 351.14 · centre, rock & water, food, empty Spain, Al-Andalus
* Madrid pin at the centre; 1561 Philip II (caricature: black, ruff, Habsburg jaw) moves the capital to an unremarkable town in
  the geographic centre — equal-distance rings to the coasts; Washington & Canberra (accurate mini-maps) follow the same logic.
* "More rock than water": Tagus, Ebro, Guadalquivir drawn; they run low in summer (water thinning). Semidesert → olives, grapes,
  sheep as a 2.5D landscape (olive rows in perspective). World's largest olive-oil producer, ~half the global supply; most land
  under vines; Europe's largest pork producer; jamón — black Iberian pigs eating acorns under holm oaks (dehesa) — do better
  in the dry south than cattle (lovely character-animal moment).
* Where people live: around the edges — population dots slide to the coasts; 85 % of people on 30 % of the land; Greater
  Madrid 7M, Barcelona 5M (proportional bubbles), Valencia, Seville, Bilbao; inland provinces with Siberia-like density
  (choropleth with `MG.geo.density`, label Soria/Teruel/Cuenca); "Empty Spain": villages with ten retirees (small scene),
  shuttered school, one bus a week; lost half its population in 50 years; a ministry created; everyone moved to the coast.
* "Now for the history" (chapter card) → **711**: Arab & Berber forces cross the strait (map arrows), conquer almost all the
  peninsula within a few years; eight centuries; 10th-century Córdoba, Europe's largest city (≈500k, libraries, paved
  lit streets) vs Paris pigs in the mud (split-screen illustration); numerals, algebra, oranges, rice, cotton flow into Europe;
  4,000 words of Arabic origin (word morphs: aceite ← az-zayt, azúcar ← as-sukkar, ojalá ← law šā' Allāh); the Alhambra
  (2.5D/3D arches & zellige); "olé" ← "Allah" (Amiri). The Reconquista: a frontier line sweeping south over 800 years
  (year ticker) to **1492**, the fall of Granada → handoff date card.
* Music: warm/ambient → heat → a light, warm guitar for food → lament for Empty Spain → andalusi (711+) → epic for the Reconquista.

### S03 · 351.14 → 507.32 · 1492 → 1898
* 1492: spring — Isabella expels Jews who refuse to convert (sober); summer — three ships to a persistent Genoese sailor
  (Columbus caricature; three caravels crossing on an old-map route). Jackpot; first to reach America.
* Potosí's silver mountain (Bolivia, located on the map); silver pours into Europe (a river of coins across the Atlantic);
  the silver peso, first global currency (routes to China, India, Ottoman Empire, incl. the Manila galleon); the **$** sign
  borrowed from the peso (8-reales coin with the pillars → $ morph). Empire on four continents; "looks like it will last forever".
* Dutch disease explained as a machine: money pumped from the ground → flows through Spain "like water through a pipe" → out
  to bankers in Genoa & Antwerp; wool to the Netherlands → cloth bought back; weapons from Italy; foreigners build ships; prices ×5
  in a century (price chart); nobility scorns work (penniless nobleman vs rich merchant, caricatures).
* 1609 Moriscos: 300,000 skilled farmers/craftspeople expelled (people leaving ports); endless wars; the "invincible" Armada
  1588 defeated + storms (3D ships in a storm — a cinematic 3D moment); four bankruptcies in a century (stamps); the empire
  deflates. 1898: the US takes Cuba, the Philippines, Puerto Rico in three months (map); "the Disaster" (newspaper headline);
  writers & philosophers ask "how did we go from the world's leading power to being nobody?" → "the 20th century starts even worse".
* Music: epic/exploration → sneaky (Dutch disease) → tension (Moriscos) → dread + storm (Armada) → lament (1898).

### S04 · 507.32 → 681.58 · war, Franco, the miracle, the clocks
* A poor agricultural country splits into two camps (map splits; Republicans/anarchists/Communists vs Church/military/landowners/
  monarchists — stencil poster typography); 1936; three years; half a million dead; Guernica bombed by German aircraft before
  WWII (bombers' shadows over a Basque town — do not copy Picasso); the military wins, Franco; 36 years until 1975.
* Two lives: 20 years of autarky (walls around the map), hunger, rationing, GDP below pre-war; Europe gets the Marshall Plan
  (flows bypassing Spain); pariah, UN only in 1955. 1959 everything changes: Opus Dei technocrats persuade the aging
  dictator; restrictions fall, foreign firms in, beaches open → 1960s travel-poster world, "Spain is different", two-hour
  flights from rainy London & Hamburg (arcs from clouds to sun), Germans & British by the millions; the Spanish Miracle
  7 % growth, only Japan faster; Andalusian farmworkers to coastal hotels & Barcelona factories; Benidorm fishing village →
  forest of high-rises (time-lapse 2.5D); SEAT under Fiat licence (a little 1960s car, no real logo), every family has a car;
  agricultural → industrial in 15 years.
* Dinner at 10 pm? Sun sets at 10:30? **Franco**: 1940 clocks to Berlin time; geographically Madrid is west of London (map
  with the Greenwich meridian — accurate: Madrid ≈3.7° W); an hour out of sync with the sun (sun-disk vs clock motif); up in
  the dark, lunch at three, dinner at ten (24-h dial); siesta mostly a myth — 1 in 6 naps; Franco dies in his bed in 1975.
* Music: march/dread → dread (Guernica) → tension (autarky) → retro60s (miracle) → sneaky (clocks/siesta) → hush.

### S05 · 681.58 → 858.37 · Transition, Europe, economy, tourism, fashion
* Juan Carlos (caricature), chosen by Franco, turns Spain into a democracy in three years; all parties legal incl. Communists;
  constitution; "the Transition"; 1981 coup — officers storm parliament (tricorn-hat officer, pistol raised); the king on
  live TV in uniform says no; the coup collapses overnight.
* Europe's fast track: 1986 EC (stars gather), funding → roads, bridges, airports, trains (network grows on the map); 1992
  Barcelona Olympics, Seville Expo, first AVE Madrid–Seville (a 3D high-speed train shot); network ≈2,500 mi, 2nd in the world;
  Madrid–Barcelona ≈375 mi in 2 h 30.
* "What pays the bills?" Eurozone #4 behind Germany, France, Italy (~$1.7 T); fastest-growing major EU economy for three
  years while Germany stands still. **Pillar 01 tourism** (12–13 % of GDP, more than cars in Germany; Balearics: 1M residents,
  16M visitors — 16 per local, every year). **Pillar 02 fashion**: Amancio Ortega (railway worker's son, school out at 13, tailor's
  apprentice; 1975 first shop in A Coruña; Inditex: Zara, Bershka, Massimo Dutti, Pull&Bear — plain type, no logos; 5,500+ stores
  in ~100 countries; #1/#2 in Europe vs Arnault); fast fashion: two weeks instead of six months — runway to mall in 14 days.
* Music: hopeful → tension (coup) → triumph (1992) → pulse (economy) → retro/pulse fashion.

### S06 · 858.37 → 1013.98 · giants, banking, energy, vegetable garden
* Mercadona (a quarter of the grocery market), Talgo (Saudi Arabia, Kazakhstan, USA), Telefónica (Brazil's largest telecom),
  construction firms abroad (London subway, Texas highways, Australian airports) — crisis made them global.
* **Pillar 03 banking**: Santander & BBVA, profits mostly from Latin America (Mexico, Brazil) — "conquest in reverse": the
  S03 silver route reversed, now carrying interest payments.
* **Pillar 04 energy**: the dry sunny Meseta perfect for solar (the sun disk becomes a field of panels, 3D), coast for wind;
  >50 % renewable electricity; midday wholesale price falls to zero (price curve). Spring 2025: Spain + Portugal blackout —
  the map's lights go out; trains, subways, traffic lights, airports stop (quick dark beats); debate over going too fast.
* **Pillar 05 Europe's vegetable garden**: the south-east from space — the white patch near Almería is greenhouses (zoom from
  globe to a stylised satellite mosaic), ≈74,000 acres of plastic, the largest concentration on Earth; less rain than some
  deserts; winter tomatoes, cucumbers, peppers for Germany, Britain, Scandinavia (trucks north); oranges from Valencia,
  strawberries from Huelva, peaches from Catalonia; #1 EU fruit & veg exporter; world's largest olive-oil producer… "with one catch."
* Music: pulse → sneaky (conquest in reverse) → ambient/pulse (energy) → dread/silence (blackout) → warm (garden).

### S07 · 1013.98 → 1187.85 · drought, cars, the price, 2008
* 2023 drought wipes out half the harvest, olive-oil prices double (≈€10 a quart); like bread doubling; water = the biggest
  constraint; 2024 Barcelona drought emergency, Catalonia's reservoirs at 15 %; Europe's largest desalination plants & river
  transfers; "more rock than water" (callback) — only hotter now.
* Cars: Europe's #2 automaker behind Germany; SEAT (VW), Renault, Ford, Stellantis; 2M+ vehicles a year.
* "Now let's talk about the price of all this" → **Problem 01** (sombra card): 2008. The 2000s boom: cheap euro loans, tourists,
  immigrants; everyone building; 2006: 800,000 homes started — more than Germany + France + Britain combined; 1 in 8 jobs;
  Ciudad Real (75,000 people) builds a €1-billion airport, 3 years then closed; ghost airports, ghost neighbourhoods; bubble
  bursts 2008, worst in Europe after Greece; unemployment 26 %, youth 55 %; half a million families evicted; young educated
  Spaniards leave to work as waiters in Germany & Britain; "ni-ni"; €40 bn bank bailout; ten years to recover; today ≈11 %,
  still the EU's highest. Why: seasonal low-paid work (hotel opens in May, closes in October), 1 in 4 contracts temporary
  (EU record), 2022 reform, but the habit stuck.
* Music: heat → pulse (cars) → tension→dread (bubble) → lament (evictions/emigration) → sneaky (temp contracts).

### S08 · 1187.85 → 1345.48 · parents, housing, protests, children, immigration
* A 30-year-old engineer still living with his parents (a funny-sad character scene: grown man in a childhood bedroom),
  no permanent job, no mortgage; moving-out age 30 in Spain vs 21 in Sweden.
* **Problem 02 housing** — full circle: those 97 million tourists need beds; flats in central Barcelona, Málaga, Palma become
  short-term rentals (a façade whose windows flip to key-boxes & suitcases); €1,000/week tourist vs €800/month student;
  rents +50–100 % in ten years vs wages +10 %; summer 2024 Barcelona residents spray tourists with water guns ("Tourists, go
  home"); 10,000 licensed tourist flats to be eliminated by 2028; caps & taxes in the Canaries/Balearics; fall 2026: tent camp
  in Madrid's main square, parliament rejects housing decrees, Sánchez calls an early election; the dilemma: 1 in 8 workers
  depend on tourism (balance scale).
* **Problem 03 children**: fertility 1.1 (lower than Japan), first child at 32 (Europe's highest); "it makes sense" (callback to
  the bedroom); immigration keeps the population from shrinking: half a million a year, mostly Latin America (Venezuela,
  Colombia, Peru), same language, integrate quickly; others from Morocco & Africa; almost 1 in 5 born abroad; relaxed… "So far."
* Music: sneaky (bedroom) → tension (housing) → playful/fiesta (water guns) → tension (2026) → lament/warm (children) → hopeful (arrivals) → ominous hush.

### S09 · 1345.48 → 1509.97 · a country that wants to come apart, politics
* **Problem 04**: 17 autonomous communities (assemble as puzzle pieces; Canary inset), own parliaments, some own language,
  police, taxes; Catalonia, the Basque Country, Galicia (hello in their languages); the 1978 constitution gives everything but
  the right to leave. ETA: 40 years, 850 killed, dissolved 2018 (sober). Catalonia 2017: illegal referendum, police vs voters,
  republic declared, leaders flee to Belgium; jailed → pardoned → amnesty for votes; "that's Spanish politics for you";
  a fifth of GDP not wanting to subsidise the poorer south; every ten years or so…
* Politics: 40 years of two parties (PSOE / PP pendulum); 2008 → squares full of young people; new parties; four elections
  2015–2019; Sánchez since 2018 on a coalition of half a dozen parties incl. Catalan & Basque nationalists — every vote has a
  price (amnesty, tax concession, regional powers); no budget since 2023; Vox rising (abolish autonomy, close borders, "united
  Spain"); one side pulls apart, the other forces together (tug of war on the map); October 2026 collapse; election 29 November;
  far right could enter government for the first time; the economy keeps growing faster than Germany's — "doesn't care who's in charge".
* Music: tension → dread (ETA) → sneaky (Spanish politics) → march-lite (Vox) → tension (collapse) → sneaky outro.

### S10 · 1509.97 → 1638.53 · memory, geopolitics, soft power
* **Problem 05 memory**: Franco died 50 years ago; until 2019 he lay in a mausoleum carved into a mountain by political
  prisoners, under a cross ≈500 ft tall (scale comparison), remains removed; unmarked civil-war graves still being opened —
  more than 2,000 (sober map of points); the left wants a reckoning, the right says leave it; a party nostalgic for that era is
  3rd-largest and may soon govern.
* Geopolitics: quiet; NATO & EU, trade over war; Ceuta & Melilla, Europe's last possessions in Africa (map, fence); thousands try
  to cross; the Canary route: tens of thousands from Senegal & Mali in wooden boats, ≈50,000 in 2024, one of the deadliest
  routes — thousands never arrive (sober); Spain = Europe's southern door, Brussels pays Morocco to keep it mostly closed;
  Gibraltar, taken 1713, never returned; Latin America: 20 countries speaking Spanish = soft power, half a billion people for
  whom Madrid feels like home; football: Real Madrid, 15 European Cups; El Clásico watched in 200 countries; "So what's the
  secret? How does a country that lost everything end up living better than so many others?"
* Music: lament → ambient/night → dread (route deaths) → sneaky (Gibraltar) → warm (Latin America) → triumph (football) → mystery (question).

### S11 · 1638.53 → 1750.00 · where Spain wins, the real empire
* Life expectancy 84, highest in the EU; projected #1 in the world by 2040 (ranking climbs); why: Mediterranean food, olive oil,
  sunshine, free healthcare among the best; organ-donation world leader for 30 years; one of Europe's safest; most accepting —
  same-sex marriage 2005, 3rd country in the world (after the Netherlands 2001 and Belgium 2003); a Catholic country that spent
  decades under a dictator ruling in the Church's name.
* The unusual choice: not a great power again; economy not the most efficient; jobs not the most secure; politicians fight;
  regions want to leave (quick recap of earlier motifs) — BUT they live longer, eat well, dinner at ten (clock callback) and
  out at midnight with the whole family, kids included (warm night-street character scene); "Spaniards live to enjoy life,
  Germans live to work" (split typography); German retirees move to the Spanish coast, Spaniards don't do the reverse.
* Finale: five centuries ago Spain conquered half the world and got inflation and war; today it conquers no one, and half the
  world comes voluntarily (all the arcs now point INTO Spain), pays, sunbathes, goes home; "Maybe that's what a real empire
  looks like. A place the world comes to because it wants to." → the sun disk sets over Spain into the end title. Fade out at ~1749.
* Music: hopeful/warm → fiesta (night) → sneaky (Germans) → epic-hopeful finale → resolve.
