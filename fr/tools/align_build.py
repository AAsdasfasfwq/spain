#!/usr/bin/env python3
"""Build the EN→FR time alignment for the French version.
The film's animation timeline is authored against the English voice-over (data/words.js). The French voice-over is
aligned to it sentence-by-sentence (dynamic programming on speech duration + shared anchors: digits, names, places),
then refined with word-level anchors inside each aligned sentence group. Output: data/align.js (MG_ALIGN = [[en,fr],...])
and data/words_fr.js (French word timings). Manual corrections live in OVERRIDES below.
Usage: python3 tools/align_build.py   (from the fr/ folder)"""
import json, re, unicodedata, math, os, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EN = json.load(open(os.path.join(ROOT, 'assets', 'script_en.json')))
FR = json.load(open(os.path.join(ROOT, 'assets', 'script.json')))

def words(d):
    return [w for w in d['words'] if not (w['word'].startswith('[') and w['word'].endswith(']'))]
def sentences(ws):
    out, cur = [], []
    for w in ws:
        cur.append(w)
        if re.search(r'[.?!…]["»”’)]*$', w['word']):
            out.append(cur); cur = []
    if cur: out.append(cur)
    return out
def norm(s):
    s = unicodedata.normalize('NFD', s.lower()); s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    s = re.sub(r"^(l|d|qu|j|n|s|c|m|t)['’]", '', s)
    return re.sub(r"[^a-z0-9&]", '', s)

# canonical anchors: EN token → key, FR token → key (names, places, brands, numbers written as words)
PAIRS = """spain:espagne|spanish:espagnol,espagnols,espagnole,espagnoles|spaniards:espagnols|france:france|french:francais,francaise,francaises
italy:italie|china:chine|chinese:chinois|russia:russie|mexico:mexique|philippines:philippines|netherlands:paysbas|argentina:argentine|japan:japon
madrid:madrid|barcelona:barcelone|seville:seville|valencia:valence|bilbao:bilbao|siberia:siberie|switzerland:suisse|pyrenees:pyrenees|meseta:meseta
washington:washington|canberra:canberra|tagus:tage|ebro:ebre|guadalquivir:guadalquivir|cordoba:cordoue|paris:paris|alhambra:alhambra|granada:grenade
reconquista:reconquista|isabella:isabelle|columbus:colomb|bolivia:bolivie|potosi:potosi|india:inde|ottoman:ottoman|holland:hollande|italian:italie
genoa:genes|antwerp:anvers|moriscos:morisques|armada:armada|cuba:cuba|puerto:porto|franco:franco|guernica:guernica|marshall:marshall|opus:opus
london:londres|hamburg:hambourg|benidorm:benidorm|seat:seat|fiat:fiat|hitler:hitler|berlin:berlin|greenwich:greenwich|juan:juan|carlos:carlos
communist:communiste|europe:europe|european:europeenne,europeen,europeens,europeennes|barcelona:barcelone|ave:ave|germany:allemagne|germans:allemands
balearic:baleares|amancio:amancio|ortega:ortega|coruna:corogne|inditex:inditex|zara:zara|bershka:bershka|massimo:massimo|dutti:dutti|pull&bear:pull&bear
arnault:arnault|bernard:bernard|mercadona:mercadona|talgo:talgo|saudi:saoudite|kazakhstan:kazakhstan|telefonica:telefonica|brazil:bresil|texas:texas
australia:australie|santander:santander|bbva:bbva|latin:latine|portugal:portugal|almeria:almeria|scandinavia:scandinavie|huelva:huelva|catalonia:catalogne
olive:olive|volkswagen:volkswagen|renault:renault|ford:ford|stellantis:stellantis|greece:grece|ciudad:ciudad|sweden:suede|malaga:malaga|palma:palma
canaries:canaries|canary:canaries|sanchez:sanchez|venezuela:venezuela|colombia:colombie|peru:perou|morocco:maroc|basque:basque|galicia:galice
eta:eta|belgium:belgique|vox:vox|nato:otan|ceuta:ceuta|melilla:melilla|senegal:senegal|mali:mali|brussels:bruxelles|gibraltar:gibraltar|real:real
barca:barca|mediterranean:mediterraneenne|atlantic:atlantique|africa:afrique|african:africains|siesta:sieste|swedes:suede
""".replace('\n', '|')
EN2K, FR2K = {}, {}
for p in PAIRS.split('|'):
    if not p.strip(): continue
    e, f = p.split(':'); EN2K[e] = e
    for x in f.split(','): FR2K[x] = e
NOUNS = """trains:trains|subways:metros|airports:aeroports|blackout:panne|unemployed:chomage|unemployment:chomage|housing:logement|children:enfants
immigration:immigration|memory:memoire|geopolitics:geopolitique|fashion:mode|tourism:tourisme|banking:banques|energy:energie|garden:potager
greenhouses:serres|snow:neige|salt:sel|solar:solaires|turbines:eoliennes|map:carte|square:carre|mountains:montagnes|strait:detroit|winter:hiver
hell:enfer|myth:mythe|king:roi|television:television|coup:coup|constitution:constitution|republic:republique|referendum:referendum|police:police
amnesty:amnistie|budget:budget|polls:sondages|cross:croix|graves:fosses|football:football|soccer:football|retirees:retraites|empire:empire
inflation:inflation|silver:argent|peso:peso|dollar:dollar|jackpot:jackpot|america:amerique|jews:juifs|olives:oliviers|grapes:vignes|sheep:moutons
pork:porc|ham:jambon|acorns:glands|cattle:vaches|edges:bords|coasts:cotes|valleys:vallees|ministry:ministere|libraries:bibliotheques|pigs:cochons
algebra:algebre|oranges:oranges|rice:riz|cotton:coton|ole:ole|allah:allah|wool:laine|weapons:armes|ships:bateaux|prices:prix|nobility:nobles
storms:tempetes|bankruptcies:faillites|disaster:desastre|anarchists:anarchistes|communists:communistes|church:eglise|military:armee
landowners:proprietaires|monarchists:monarchistes|autarky:autarcie|hunger:faim|rationing:rationnement|technocrats:technocrates|slogan:slogan
growth:croissance|hotels:hotels|skyscrapers:gratteciel|highrises:gratteciel|clocks:horloges|siesta:sieste|democracy:democratie|uniform:uniforme
olympics:olympiques|expo:exposition|tomatoes:tomates|cucumbers:concombres|peppers:poivrons|strawberries:fraises|peaches:peches|drought:secheresse
desalination:dessalement|waiters:serveurs|nini:nini|bubble:bulle|rents:loyers|wages:salaires|guns:pistolets|signs:pancartes|tents:campement
mother:mere|mom:mere|immigrants:immigres|students:etudiant|student:etudiant|squares:places|bipartisanship:bipartisme|minister:ministre|vote:voix
cayucos:embarcations|boats:embarcations|record:record|door:porte|influence:influence|cups:coupes|secret:secret|healthcare:sante|organ:organes
safest:surs|marriage:mariage|dictator:dictateur|saying:formule|argument:debat|coast:cotes|work:travailler|germansg:allemand""".replace('\n', '|')
for p in NOUNS.split('|'):
    e, f = p.split(':'); EN2K.setdefault(e, e); FR2K.setdefault(f, e)
NUM_EN = {'ten': 10, 'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15, 'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'twenty': 20, 'twentyone': 21, 'thirty': 30, 'thirtytwo': 32, 'thirtysix': 36, 'forty': 40, 'fifty': 50, 'eighty': 80, 'eightyfour': 84, 'hundred': 100}
NUM_FR = {'dix': 10, 'onze': 11, 'douze': 12, 'treize': 13, 'quatorze': 14, 'quinze': 15, 'seize': 16, 'dixsept': 17, 'dixhuit': 18, 'vingt': 20, 'trente': 30, 'trentedeux': 32, 'trentesix': 36, 'quarante': 40, 'cinquante': 50, 'quatrevingts': 80, 'quatrevingtquatre': 84, 'cent': 100}
def key_en(tok):
    n = norm(tok)
    if n == 'spaniards': n = 'spanish'
    if n == 'germans': n = 'germansg'
    if re.fullmatch(r'\d+', n) and len(n) >= 2: return 'n' + n.lstrip('0')
    if n in NUM_EN: return 'n' + str(NUM_EN[n])
    return EN2K.get(n)
def key_fr(tok):
    n = norm(tok)
    if n in ('allemand', 'allemands'): return 'germansg'
    if re.fullmatch(r'\d+', n) and len(n) >= 2: return 'n' + n.lstrip('0')
    if n in NUM_FR: return 'n' + str(NUM_FR[n])
    return FR2K.get(n)

we, wf = words(EN), words(FR); SE, SF = sentences(we), sentences(wf)
def info(S, kf):
    return [{'t0': s[0]['start'], 't1': s[-1]['end'], 'dur': max(0.15, s[-1]['end'] - s[0]['start']), 'chars': sum(len(w['word']) + 1 for w in s), 'keys': [k for k in (kf(w['word']) for w in s) if k], 'ws': s} for s in S]
IE, IF = info(SE, key_en), info(SF, key_fr)
r = sum(x['dur'] for x in IF) / sum(x['dur'] for x in IE)
rc = sum(x['chars'] for x in IF) / sum(x['chars'] for x in IE)
BEADS = [(1, 1, 0.0), (2, 1, 0.35), (1, 2, 0.35), (3, 1, 0.8), (1, 3, 0.8), (2, 2, 0.7), (3, 2, 1.2), (2, 3, 1.2), (4, 1, 1.6), (1, 0, 2.2), (0, 1, 2.2)]
def bead_cost(i, a, j, b):
    E = IE[i:i + a]; Fg = IF[j:j + b]
    de = sum(x['dur'] for x in E); df = sum(x['dur'] for x in Fg); ce = sum(x['chars'] for x in E); cf = sum(x['chars'] for x in Fg)
    c = 0.0
    if a and b:
        c += 2.2 * abs(math.log((df + 0.6) / (r * de + 0.6))) + 1.2 * abs(math.log((cf + 8) / (rc * ce + 8)))
        ke = [k for x in E for k in x['keys']]; kf = [k for x in Fg for k in x['keys']]
        se, sf = set(ke), set(kf); inter = se & sf
        c -= 1.4 * len(inter); c += 0.35 * len(se ^ sf)
        # timeline drift (keep near the global proportion)
        c += 0.12 * abs(Fg[0]['t0'] - r * E[0]['t0']) / 10.0
    else:
        c += 1.5
    return c
# forced sentence-boundary pairs (EN sentence index, FR sentence index): the alignment path must pass through them
FORCE = [(345, 305), (372, 326), (395, 346), (417, 364), (419, 365), (422, 366), (424, 367)]
FE = {k: l for k, l in FORCE}; FF = {l: k for k, l in FORCE}
def allowed(i, a, j, b):
    for k, l in FORCE:
        if i < k < i + a or j < l < j + b: return False   # bead would swallow a forced boundary
        if (i + a == k) != (j + b == l): return False      # must land on the forced node exactly
    return True
N, M = len(IE), len(IF); INF = 1e18
D = [[INF] * (M + 1) for _ in range(N + 1)]; BP = [[None] * (M + 1) for _ in range(N + 1)]; D[0][0] = 0
for i in range(N + 1):
    for j in range(M + 1):
        if D[i][j] >= INF: continue
        for a, b, pen in BEADS:
            if i + a > N or j + b > M: continue
            if not allowed(i, a, j, b): continue
            v = D[i][j] + pen + bead_cost(i, a, j, b)
            if v < D[i + a][j + b]: D[i + a][j + b] = v; BP[i + a][j + b] = (a, b)
beads = []; i, j = N, M
while i > 0 or j > 0:
    a, b = BP[i][j]; beads.append((i - a, a, j - b, b)); i -= a; j -= b
beads.reverse()
# anchors
anchors = [(0.0, 0.0)]
report = []
for (i, a, j, b) in beads:
    if not a or not b:
        report.append(('SKIP', i, a, j, b)); continue
    E = [w for x in IE[i:i + a] for w in x['ws']]; Fw = [w for x in IF[j:j + b] for w in x['ws']]
    anchors.append((E[0]['start'], Fw[0]['start']))
    # unique shared keys inside the group → word anchors (kept monotonic)
    ke = {}; kf = {}
    for w in E:
        k = key_en(w['word']);
        if k: ke.setdefault(k, []).append(w['start'])
    for w in Fw:
        k = key_fr(w['word']);
        if k: kf.setdefault(k, []).append(w['start'])
    inner = sorted((ke[k][0], kf[k][0]) for k in ke if k in kf and len(ke[k]) == 1 and len(kf[k]) == 1)
    last = anchors[-1]
    for ae, af in inner:
        if ae > last[0] + 0.05 and af > last[1] + 0.05 and ae < E[-1]['end'] - 0.05 and af < Fw[-1]['end'] - 0.05: anchors.append((ae, af)); last = (ae, af)
    anchors.append((E[-1]['end'], Fw[-1]['end']))
    report.append(('OK', i, a, j, b))
DUR_EN = EN['duration_seconds']; DUR_FR = FR['duration_seconds']
anchors.append((DUR_EN, DUR_FR))
# overrides: (en, fr) extra anchors, applied after the automatic ones
OVERRIDES = []
anchors += OVERRIDES
anchors.sort()
mono = []
for ae, af in anchors:
    if not mono or (ae > mono[-1][0] + 1e-3 and af > mono[-1][1] + 1e-3): mono.append((round(ae, 3), round(af, 3)))
with open(os.path.join(ROOT, 'data', 'align.js'), 'w') as f:
    f.write('// EN→FR voice-over time alignment (built by tools/align_build.py). Pairs [enSeconds, frSeconds], monotonic.\n')
    f.write('window.MG_ALIGN=' + json.dumps(mono, separators=(',', ':')) + ';\n')
    f.write(f'window.MG_VO_DURATION_EN={DUR_EN};window.MG_VO_DURATION_FR={DUR_FR};\n')
with open(os.path.join(ROOT, 'data', 'words_fr.js'), 'w') as f:
    f.write('// French voice-over word timings (seconds): MG_WORDS_FR: [word, start, end]\n')
    f.write('window.MG_WORDS_FR=' + json.dumps([[w['word'], round(w['start'], 3), round(w['end'], 3)] for w in wf], ensure_ascii=False, separators=(',', ':')) + ';\n')
# human-readable report
with open(os.path.join(ROOT, 'tools', 'align_report.txt'), 'w') as f:
    for st, i, a, j, b in report:
        et = ' '.join(w['word'] for x in IE[i:i + a] for w in x['ws']); ft = ' '.join(w['word'] for x in IF[j:j + b] for w in x['ws'])
        t1 = IE[i]['t0'] if a else -1; t2 = IF[j]['t0'] if b else -1
        f.write(f"{st} EN[{i}+{a}] {t1:8.2f} | FR[{j}+{b}] {t2:8.2f}\n   EN: {et}\n   FR: {ft}\n")
print('sentences EN', N, 'FR', M, 'beads', len(beads), 'skips', sum(1 for x in report if x[0] == 'SKIP'), 'anchors', len(mono), 'ratio', round(r, 3))
