const VSOP87_L0 = [
    [4.40250710144],
    [0.40989414976, 1.48302034194, 26087.90314157420],
    [0.05046294199, 4.47785489540, 52175.80628314840],
    [0.00855346843, 1.16520322351, 78263.70942472259],
    [0.00165590362, 4.11969163181, 104351.61256629678],
    [0.00034561897, 0.77930765817, 130439.51570787099],
    [0.00007583476, 3.71348400510, 156527.41884944518],
    [0.00003559740, 1.51202669419, 1109.37855209340],
    [0.00001726012, 0.35832239908, 182615.32199101939],
    [0.00001803463, 4.10333178410, 5661.33204915220],
    [0.00001364682, 4.59918318745, 27197.28169366760],
    [0.00001589923, 2.99510417815, 25028.52121138500],
    [0.00001017332, 0.88031439040, 31749.23519072640],
    [0.00000714182, 1.54144865265, 24978.52458948080],
    [0.00000643759, 5.30266110787, 21535.94964451540],
    [0.00000404200, 3.28228847025, 208703.22513259358],
    [0.00000352441, 5.24156297101, 20426.57109242200],
    [0.00000343313, 5.76531885335, 955.59974160860],
    [0.00000339214, 5.86327765000, 25558.21217647960],
    [0.00000451137, 6.04989275289, 51116.42435295920],
    [0.00000325335, 1.33674334780, 53285.18483524180],
    [0.00000259587, 0.98732428184, 4551.95349705880],
    [0.00000345212, 2.79211901539, 15874.61759536320],
    [0.00000272947, 2.49451163975, 529.69096509460],
    [0.00000234830, 0.26672118900, 11322.66409830440],
    [0.00000238793, 0.11343953378, 1059.38193018920],
    [0.00000264336, 3.91705094013, 57837.13833230060],
    [0.00000216645, 0.65987207348, 13521.75144159140],
    [0.00000183359, 2.62878670784, 27043.50288318280],
    [0.00000175965, 4.53636829858, 51066.42773105500],
    [0.00000181629, 2.43413502466, 25661.30495069820],
    [0.00000208995, 2.09178234008, 47623.85278608960],
    [0.00000172643, 2.45200164173, 24498.83024629040],
    [0.00000142316, 3.36003948842, 37410.56723987860],
    [0.00000137942, 0.29098447849, 10213.28554621100],
    [0.00000118233, 2.78149786369, 77204.32749453338],
    [0.00000096860, 6.20398202740, 234791.12827416777],
    [0.00000125219, 3.72079804425, 39609.65458316560],
    [0.00000086819, 2.64219349385, 51646.11531805379],
];

const VSOP87_L1 = [
    [26088.14706222746],
    [0.01126007832, 6.21703970996, 26087.90314157420],
    [0.00303471395, 3.05565472363, 52175.80628314840],
    [0.00080538452, 6.10454743366, 78263.70942472259],
    [0.00021245035, 2.83531934452, 104351.61256629678],
    [0.00005592094, 5.82675673328, 130439.51570787099],
    [0.00001472233, 2.51845458395, 156527.41884944518],
    [0.00000352244, 3.05238094403, 1109.37855209340],
    [0.00000388318, 5.48039225891, 182615.32199101939],
    [0.00000093540, 6.11791163931, 27197.28169366760],
    [0.00000090579, 0.00045481669, 24978.52458948080],
    [0.00000102743, 2.14879173777, 208703.22513259358],
    [0.00000051941, 5.62107554052, 5661.33204915220],
    [0.00000044370, 4.57348500464, 25028.52121138500],
    [0.00000028070, 3.04195430989, 51066.42773105500],
    [0.00000022003, 0.86475371243, 955.59974160860],
    [0.00000027295, 5.09210138837, 234791.12827416777],
    [0.00000020425, 3.71509622702, 20426.57109242200],
    [0.00000020221, 0.51934047295, 21535.94964451540],
    [0.00000017496, 5.72663608620, 4551.95349705880],
    [0.00000016680, 1.35134428173, 529.69096509460],
];

const VSOP87_L2 = [
    [0.00053049845],
    [0.00016903658, 4.69072300649, 26087.90314157420],
    [0.00007396711, 1.34735624669, 52175.80628314840],
    [0.00003018297, 4.45643539705, 78263.70942472259],
    [0.00001107419, 1.26226537554, 104351.61256629678],
    [0.00000378173, 4.31998055900, 130439.51570787099],
    [0.00000122998, 1.06868541052, 156527.41884944518],
    [0.00000038663, 4.08011610182, 182615.32199101939],
    [0.00000014898, 4.63343085810, 1109.37855209340],
    [0.00000011861, 0.79187646439, 208703.22513259358],
    [0.00000005243, 4.71799772791, 24978.52458948080],
];

const VSOP87_L3 = [
    [0.00000188077, 0.03466830117, 52175.80628314840],
    [0.00000142152, 3.12505452600, 26087.90314157420],
    [0.00000096877, 3.00378171915, 78263.70942472259],
    [0.00000043669, 6.01867965826, 104351.61256629678],
    [0.00000035395],
    [0.00000018045, 2.77538373991, 130439.51570787099],
    [0.00000006971, 5.81808665742, 156527.41884944518],
    [0.00000002556, 2.57014364454, 182615.32199101939],
    [0.00000000900, 5.59308888939, 208703.22513259358],
];

const VSOP87_L4 = [
    [0.00000114078, 3.14159265359],
    [0.00000003247, 2.02848007619, 26087.90314157420],
    [0.00000001914, 1.41731803758, 78263.70942472259],
    [0.00000001727, 4.50137643801, 52175.80628314840],
    [0.00000001237, 4.49970181057, 104351.61256629678],
    [0.00000000645, 1.26591776986, 130439.51570787099],
    [0.00000000298, 4.30600984981, 156527.41884944518],
    [0.00000000128, 1.05702505039, 182615.32199101939],
];

const VSOP87_L5 = [
    [0.00000000877, 3.14159265359],
];

const VSOP87_B0 = [
    [0.11737528962, 1.98357498767, 26087.90314157420],
    [0.02388076996, 5.03738959685, 52175.80628314840],
    [0.01222839532, 3.14159265359],
    [0.00543251810, 1.79644363963, 78263.70942472259],
    [0.00129778770, 4.83232503961, 104351.61256629678],
    [0.00031866927, 1.58088495667, 130439.51570787099],
    [0.00007963301, 4.60972126348, 156527.41884944518],
    [0.00002014189, 1.35324164694, 182615.32199101939],
    [0.00000513953, 4.37835409309, 208703.22513259358],
    [0.00000207674, 4.91772564073, 27197.28169366760],
    [0.00000208584, 2.02020294153, 24978.52458948080],
    [0.00000132013, 1.11908492283, 234791.12827416777],
    [0.00000100454, 5.65684734206, 20426.57109242200],
    [0.00000121395, 1.81271752059, 53285.18483524180],
    [0.00000091566, 2.28163128692, 25028.52121138500],
    [0.00000099214, 0.09391887097, 51116.42435295920],
    [0.00000094574, 1.24184909234, 31749.23519072640],
    [0.00000078785, 4.40725880000, 57837.13833230060],
    [0.00000077747, 0.52557061749, 1059.38193018920],
    [0.00000084264, 5.08510388314, 51066.42773105500],
    [0.00000049948, 3.49752993688, 5661.33204915220],
    [0.00000046454, 3.23739270829, 77204.32749453338],
    [0.00000044767, 4.87849816734, 79373.08797681599],
    [0.00000040766, 2.46558332165, 46514.47423399620],
    [0.00000037378, 4.45768797944, 4551.95349705880],
    [0.00000034082, 4.14209210575, 260879.03141574195],
    [0.00000035911, 1.09057317869, 1109.37855209340],
    [0.00000031953, 1.18516389747, 83925.04147387479],
    [0.00000030954, 3.50328027210, 21535.94964451540],
    [0.00000031808, 2.41474588439, 47623.85278608960],
    [0.00000028691, 1.84828614269, 77154.33087262919],
    [0.00000025765, 2.77593370583, 27043.50288318280],
    [0.00000025199, 3.59062266460, 27147.28507176339],
    [0.00000020244, 3.06833797229, 51646.11531805379],
    [0.00000018591, 5.58427274440, 73711.75592766379],
    [0.00000016971, 0.02791276551, 103292.23063610759],
    [0.00000020099, 4.06593040301, 25132.30339996560],
    [0.00000017002, 6.13739392193, 41962.52073693740],
    [0.00000014984, 1.64717994813, 105460.99111839019],
];

const VSOP87_B1 = [
    [0.00429151362, 3.50169780393, 26087.90314157420],
    [0.00146233668, 3.14159265359],
    [0.00022675295, 0.01515366880, 52175.80628314840],
    [0.00010894981, 0.48540174006, 78263.70942472259],
    [0.00006353462, 3.42943919982, 104351.61256629678],
    [0.00002495743, 0.16051210665, 130439.51570787099],
    [0.00000859585, 3.18452433647, 156527.41884944518],
    [0.00000277503, 6.21020774184, 182615.32199101939],
    [0.00000086233, 2.95244391822, 208703.22513259358],
    [0.00000026133, 5.97708962692, 234791.12827416777],
    [0.00000027696, 0.29068938889, 27197.28169366760],
    [0.00000012831, 3.37744320558, 53285.18483524180],
    [0.00000012720, 0.53792661684, 24978.52458948080],
    [0.00000007781, 2.71768609268, 260879.03141574195],
    [0.00000007527, 3.58305121268, 51066.42773105500],
    [0.00000006183, 2.92383205004, 31749.23519072640],
    [0.00000005453, 1.97318763801, 51116.42435295920],
    [0.00000003394, 0.34761695275, 77154.33087262919],
    [0.00000003481, 0.10739761667, 79373.08797681599],
    [0.00000002932, 5.95430013169, 57837.13833230060],
    [0.00000002742, 0.98758439378, 25028.52121138500],
];

const VSOP87_B2 = [
    [0.00011830934, 4.79065585784, 26087.90314157420],
    [0.00001913516],
    [0.00001044801, 1.21216540536, 52175.80628314840],
    [0.00000266213, 4.43418336532, 78263.70942472259],
    [0.00000170280, 1.62255638714, 104351.61256629678],
    [0.00000096300, 4.80023692017, 130439.51570787099],
    [0.00000044692, 1.60758267772, 156527.41884944518],
    [0.00000018316, 4.66904655377, 182615.32199101939],
    [0.00000006927, 1.43404888930, 208703.22513259358],
    [0.00000002479, 4.47495202955, 234791.12827416777],
    [0.00000001739, 1.83080039600, 27197.28169366760],
];

const VSOP87_B3 = [
    [0.00000235423, 0.35387524604, 26087.90314157420],
    [0.00000160537],
    [0.00000018904, 4.36275460261, 52175.80628314840],
    [0.00000006376, 2.50715381439, 78263.70942472259],
    [0.00000004580, 6.14257817571, 104351.61256629678],
    [0.00000003061, 3.12497552681, 130439.51570787099],
    [0.00000001732, 6.26642412058, 156527.41884944518],
    [0.00000000857, 3.07673166705, 182615.32199101939],
    [0.00000000384, 6.14815319932, 208703.22513259358],
];

const VSOP87_B4 = [
    [0.00000004276, 1.74579932115, 26087.90314157420],
    [0.00000001023, 3.14159265359],
    [0.00000000425, 4.03419509143, 52175.80628314840],
    [0.00000000257, 0.20643590425, 78263.70942472259],
    [0.00000000116, 3.75237354024, 104351.61256629678],
    [0.00000000073, 1.18210375402, 130439.51570787099],
    [0.00000000051, 4.54581086194, 156527.41884944518],
    [0.00000000031, 1.44226942756, 182615.32199101939],
];

const VSOP87_B5 = [
    [0.00000000106, 3.94555784256, 26087.90314157420],
];

const VSOP87_R0 = [
    [0.39528271652],
    [0.07834131817, 6.19233722599, 26087.90314157420],
    [0.00795525557, 2.95989690096, 52175.80628314840],
    [0.00121281763, 6.01064153805, 78263.70942472259],
    [0.00021921969, 2.77820093975, 104351.61256629678],
    [0.00004354065, 5.82894543257, 130439.51570787099],
    [0.00000918228, 2.59650562598, 156527.41884944518],
    [0.00000260033, 3.02817753482, 27197.28169366760],
    [0.00000289955, 1.42441936951, 25028.52121138500],
    [0.00000201855, 5.64725040350, 182615.32199101939],
    [0.00000201499, 5.59227724202, 31749.23519072640],
    [0.00000141980, 6.25264202645, 24978.52458948080],
    [0.00000100144, 3.73435608689, 21535.94964451540],
    [0.00000077561, 3.66972526976, 20426.57109242200],
    [0.00000063277, 4.29905918105, 25558.21217647960],
    [0.00000062951, 4.76588899933, 1059.38193018920],
    [0.00000066754, 2.52520309182, 5661.33204915220],
    [0.00000075500, 4.47428642962, 51116.42435295920],
    [0.00000048266, 6.06824478778, 53285.18483524180],
    [0.00000045748, 2.41480951648, 208703.22513259358],
    [0.00000035224, 1.05917802674, 27043.50288318280],
    [0.00000040815, 2.35882016415, 57837.13833230060],
    [0.00000044234, 1.21957314874, 15874.61759536320],
    [0.00000033873, 0.86381554651, 25661.30495069820],
    [0.00000037203, 0.51733821470, 47623.85278608960],
    [0.00000030092, 1.79500530627, 37410.56723987860],
    [0.00000028417, 3.02063625668, 51066.42773105500],
    [0.00000030903, 0.88366335532, 24498.83024629040],
    [0.00000026105, 2.15021963174, 39609.65458316560],
    [0.00000018699, 4.96496008403, 11322.66409830440],
    [0.00000021270, 5.36857139841, 13521.75144159140],
    [0.00000019422, 4.98378647655, 10213.28554621100],
    [0.00000016941, 3.88765393402, 26617.59410666880],
    [0.00000015109, 0.44510589948, 46514.47423399620],
    [0.00000017087, 1.24077764194, 77204.32749453338],
    [0.00000013940, 1.62573946865, 27147.28507176339],
    [0.00000013382, 1.07657890477, 51646.11531805379],
    [0.00000015012, 4.28173463507, 41962.52073693740],
    [0.00000013977, 4.77056848793, 33326.57873317420],
];

const VSOP87_R1 = [
    [0.00217347739, 4.65617158663, 26087.90314157420],
    [0.00044141826, 1.42385543975, 52175.80628314840],
    [0.00010094479, 4.47466326316, 78263.70942472259],
    [0.00002432804, 1.24226083435, 104351.61256629678],
    [0.00001624367],
    [0.00000603996, 4.29303116561, 130439.51570787099],
    [0.00000152851, 1.06060779810, 156527.41884944518],
    [0.00000039202, 4.11136751416, 182615.32199101939],
    [0.00000017760, 4.54424653085, 27197.28169366760],
    [0.00000017999, 4.71193725810, 24978.52458948080],
    [0.00000010154, 0.87893548494, 208703.22513259358],
    [0.00000008086, 3.00540854890, 25028.52121138500],
    [0.00000004444, 2.13639058123, 20426.57109242200],
    [0.00000004393, 1.48074475165, 51066.42773105500],
    [0.00000003510, 3.21171223697, 1059.38193018920],
    [0.00000003133, 5.23846336855, 21535.94964451540],
    [0.00000002650, 3.92968881423, 234791.12827416777],
    [0.00000002498, 2.02623950395, 24498.83024629040],
    [0.00000002011, 1.23911360588, 53285.18483524180],
    [0.00000001963, 4.04524902962, 5661.33204915220],
    [0.00000001546, 2.61849590442, 26617.59410666880],
];

const VSOP87_R2 = [
    [0.00003117867, 3.08231840296, 26087.90314157420],
    [0.00001245396, 6.15183317423, 52175.80628314840],
    [0.00000424822, 2.92583352960, 78263.70942472259],
    [0.00000136130, 5.97983925842, 104351.61256629678],
    [0.00000042175, 2.74936980629, 130439.51570787099],
    [0.00000021759, 3.14159265359],
    [0.00000012793, 5.80143162209, 156527.41884944518],
    [0.00000003825, 2.56993599584, 182615.32199101939],
    [0.00000001042, 3.14648120079, 24978.52458948080],
    [0.00000001131, 5.62142196970, 208703.22513259358],
    [0.00000000483, 6.14307654520, 27197.28169366760],
];

const VSOP87_R3 = [
    [0.00000032676, 1.67971635359, 26087.90314157420],
    [0.00000024166, 4.63403168997, 52175.80628314840],
    [0.00000012133, 1.38983781545, 78263.70942472259],
    [0.00000005140, 4.43915386930, 104351.61256629678],
    [0.00000001981, 1.20733880274, 130439.51570787099],
    [0.00000001460, 3.14159265359],
    [0.00000000719, 4.25913631362, 156527.41884944518],
    [0.00000000250, 1.02794425848, 182615.32199101939],
    [0.00000000084, 4.08008618813, 208703.22513259358],
];

const VSOP87_R4 = [
    [0.00000000394, 0.36735403840, 26087.90314157420],
    [0.00000000387, 3.18568771507, 52175.80628314840],
    [0.00000000270, 6.16983616444, 78263.70942472259],
    [0.00000000149, 2.91591904641, 104351.61256629678],
    [0.00000000071, 5.95867889641, 130439.51570787099],
    [0.00000000031, 2.72386700044, 156527.41884944518],
    [0.00000000017],
    [0.00000000012, 5.77775334056, 182615.32199101939],
];

const VSOP87_R5 = [
    [0.00000000006, 3.98900269603, 26087.90314157420],
];

export const VSOP87_X = [
    VSOP87_L0,
    VSOP87_L1,
    VSOP87_L2,
    VSOP87_L3,
    VSOP87_L4,
    VSOP87_L5,
];

export const VSOP87_Y = [
    VSOP87_B0,
    VSOP87_B1,
    VSOP87_B2,
    VSOP87_B3,
    VSOP87_B4,
    VSOP87_B5,
];

export const VSOP87_Z = [
    VSOP87_R0,
    VSOP87_R1,
    VSOP87_R2,
    VSOP87_R3,
    VSOP87_R4,
    VSOP87_R5,
];