import {
  CharacterLock,
  CostumeContinuityItem,
  LocationLock,
  SceneMatrixRow,
  PropItem,
  FlowPrompt
} from '../types';

export const FILM_METADATA = {
  title: "DANIEL — THE NIGHT OF THE LIONS",
  source: "Daniel 6 (Screenplay-Authored Continuity Bible)",
  duration: "~3 minutes (7 Scenes)",
  format: "Live-Action Cinematic Drama",
  historicalSetting: "Achaemenid Persian Empire / Babylon, c. 539–538 BCE (Reign of Darius the Mede / Cyrus II era) [Production Choice]",
  aspectRatio: "2.39:1 Anamorphic",
  targetGenerators: "Google Flow / Veo (Consistent Photorealistic Video & Still Generation)"
};

/* =========================================================================
   1. CHARACTER LOCKS
   ========================================================================= */
export const CHARACTER_LOCKS: CharacterLock[] = [
  {
    id: "daniel",
    name: "DANIEL",
    role: "Chief Royal Administrator / Judean Elder & Prophet",
    age: "80–84 years old [Production Choice based on biblical chronology: taken captive as a youth in 605 BCE; now in early Persian period ~539 BCE]",
    sex: "Male",
    physicalBuild: "Lean, sinewy, upright elder frame. Not frail or hunched; exhibits quiet physical resilience and dignified economy of motion.",
    heightProportions: "5 ft 9 in (175 cm), balanced proportion, dignified carriage with straight spine despite advanced age.",
    complexion: "Sun-weathered warm Mediterranean/Levantine olive-tan with fine etched network of wrinkles around the eyes and brow.",
    faceShape: "Elongated, chiseled bone structure, prominent cheekbones, hollowed temples, strong jawline softened by age.",
    eyes: "Deep-set dark walnut-brown eyes; penetrating, unclouded, calm; prominent lower eyelid crow's feet; thick graying brow arches.",
    nose: "Distinguished, straight Levantine/aquiline bridge with slightly rounded tip; dignified and prominent.",
    mouth: "Firm, composed lips with gentle corners; no tremor, no tension, habitual expression of interior peace.",
    hair: "Long silver-white wavy hair with sparse dark slate streaks; center-parted, falling naturally behind the ears to shoulder length.",
    beardFacialHair: "Full natural silver-white beard with darker iron-gray flecks along the jaw; neatly groomed and trimmed to mid-chest; mustache combed outward without wax.",
    distinguishingFeatures: "A distinct small pale scar (1 cm) above the left temple hidden near hairline; weathered age spots on back of hands; calm, unblinking focus.",
    clothing: "Simple, dignified administrative robe reflecting Judean heritage within Persian court: inner tunic of raw unbleached natural flax linen with high neckline; outer himation/mantle of dense slate-indigo wool draped over the left shoulder.",
    clothingColors: "Primary: Raw ecru/unbleached linen and deep slate-indigo. Accent: A narrow woven band of muted madder red along the mantle hem.",
    fabricsMaterials: "Heavy hand-spun organic linen and coarse-weave sheep's wool. Matte texture, no sheen, visible weave texture.",
    footwear: "Simple, hard-wearing dark oxblood-brown leather strap sandals with thick leather soles, worn at the edges.",
    jewelryAccessories: "Subtle tarnished bronze signet ring on right index finger bearing administrative cuneiform markings (mark of office); no Persian gold chains, no vanity ornaments.",
    props: "Small smooth cedar-wood pocket prayer token (carried in girdle); no weapons.",
    posture: "Still, erect, grounded, dignified; movements are slow, deliberate, and unhurried; kneeling is effortless and reverent.",
    emotionalBaseline: "Profound interior serenity, moral gravity, absolute lack of panic or erratic agitation.",
    voiceCharacteristics: "Low, resonant, gravelly baritone; quiet authority, measured pacing, zero trembling even under threat.",
    historicalCulturalAppearance: "Noble Judean exile elevated to highest Persian administration; dressed modestly yet impeccably, adhering to Levitical modesty without adopting Persian royal vanity.",
    continuityCriticalAttributes: [
      "Exact beard length: mid-chest, silver-white with iron-gray flecks",
      "Hair: center-parted, shoulder length, silver-white",
      "Mantle drape: always over left shoulder unless kneeling in prayer (where it drapes symmetrically)",
      "Signet ring: tarnished bronze on right index finger",
      "Zero Persian cosmetics, eyeliner, or curled ringlets"
    ],
    productionNotes: "Daniel's visual identity must anchor the entire film. An image generator must never render him as a panicked victim or an aggressive rebel, but as an immovably serene mountain of quiet faith."
  },
  {
    id: "darius",
    name: "KING DARIUS",
    role: "Monarch of the Medo-Persian realm",
    age: "62–65 years old [Production Choice]",
    sex: "Male",
    physicalBuild: "Broad-shouldered, imposing, former warrior's physique now carrying the physical weight of empire; barrel-chested, thick neck.",
    heightProportions: "6 ft 1 in (185 cm), physically towering over administrators, commanding presence.",
    complexion: "Golden-bronze Persian/Median olive skin, leathery from decades in campaigns, with deep horizontal furrow lines across the forehead.",
    faceShape: "Square, heavy-jawed, aristocratic Persian bone structure with high forehead and prominent brow ridge.",
    eyes: "Intense hazel-amber eyes; heavy hooded upper lids; bloodshot and shadowed by sleepless exhaustion in Scenes 4, 5, and 7.",
    nose: "Prominent straight Persian aristocratic nose with sharp dorsal ridge.",
    mouth: "Sculpted, stern mouth with natural downturned corners; heavy lower lip; capable of showing devastating vulnerability when Daniel is accused.",
    hair: "Coarse, thick charcoal-black hair heavily peppered with silver-white at temples; styled in the imperial Persian low curled chignon at nape.",
    beardFacialHair: "Ceremonial Achaemenid royal beard: thick, meticulously crimped with horizontal wave patterns, squared off at lower chest level; oiled mustache curled at tips.",
    distinguishingFeatures: "Deep vertical furrow between the eyebrows (sorrow/worry crease); prominent hands with thick knuckles; visible fatigue rings under eyes.",
    clothing: "Imperial pleated candys robe (Achaemenid court gown) with voluminous trailing sleeves: deep royal Tyrian purple wool layered over saffron-gold raw silk under-tunic.",
    clothingColors: "Imperial Tyrian purple, burnished saffron gold, vermilion trim, and antique bronze/gold embroidery of rosettes along borders.",
    fabricsMaterials: "Heavy dyed wool, raw heavy wild silk, gold-thread embroidery, supple polished calfskin boots.",
    footwear: "High soft Persian leather court boots dyed saffron yellow with buttoned ankle straps and turned-up toes.",
    jewelryAccessories: "Heavy solid gold torque around the neck with double-ram terminals; twin electrum armlets on upper biceps; gold-mounted carnelian cylinder seal on braided silk wrist cord; low fluted gold-banded royal cidaris (tiara) on head.",
    props: "Carved lapis and carnelian royal cylinder seal with bronze rolling pin; gold-capped cedar royal scepter (Scene 1).",
    posture: "Commanding, rigidly upright on the throne in Scene 1; gradually slumped and burdened by remorse in Scenes 4 & 5; frantic, undignified rushing in Scene 7.",
    emotionalBaseline: "Regal supremacy masking deep political exhaustion; trapped by unbending imperial protocol; genuine personal reverence and agony for Daniel.",
    voiceCharacteristics: "Deep, thunderous, aristocratic baritone; becomes strained, hollowed, and cracking with desperate hope in Scenes 5 & 7.",
    historicalCulturalAppearance: "Quintessential Achaemenid Persian Great King as depicted in Persepolis reliefs, with authentic crimped square beard and fluted tiara.",
    continuityCriticalAttributes: [
      "Square-cut crimped royal beard (never wild, never pointed)",
      "Carnelian cylinder seal tied to right wrist",
      "Tyrian purple and saffron-gold pleated candys robe",
      "Gold ram-head torque around neck",
      "Exhausted, sleepless demeanor with dark under-eye circles in Scenes 4–7"
    ],
    productionNotes: "Darius is not an evil despot; he is a trapped monarch bound by the irrevocable 'Law of the Medes and Persians'. His visual arc moves from supreme imperial certainty to sleepless desolation."
  },
  {
    id: "official1",
    name: "OFFICIAL 1 (Conspiracy Leader)",
    role: "Senior Persian Satrap / Court Prosecutor",
    age: "46–50 years old",
    sex: "Male",
    physicalBuild: "Slender, tall, predatory posture; bird-of-prey angularity with narrow shoulders and long neck.",
    heightProportions: "6 ft 0 in (183 cm), lean and slightly inclined forward.",
    complexion: "Sallow, pale olive complexion; smooth skin suggesting indoor administrative life.",
    faceShape: "Sharp, triangular face with narrow jaw, prominent pointed chin, and receding cheekbones.",
    eyes: "Narrow, hooded, obsidian-black eyes; rapid, scanning, calculating gaze; never wide with surprise.",
    nose: "Sharp, thin, beak-like aquiline nose with narrow nostrils.",
    mouth: "Thin, pale lips held in a tight, perpetual smirk of legal self-satisfaction.",
    hair: "Glossy jet-black hair heavily scented and oiled, gathered under a stiff Persian pleated white felt tiara.",
    beardFacialHair: "Narrow, sharply tapered black spade beard reaching the collarbone, tightly curled into spiral ringlets with sweet almond oil.",
    distinguishingFeatures: "Thin aristocratic arched eyebrows; smooth manicured hands with long fingers; subtle facial twitch at right eye when under stress.",
    clothing: "Richly pleated court tunic of rust-crimson wool with embroidered geometric border; wide pleated sleeves; ochre wool sash.",
    clothingColors: "Rust crimson, dark ochre, and burnished copper-bronze accents.",
    fabricsMaterials: "Fine pleated wool, polished stiffened felt tiara, soft goatskin sash.",
    footwear: "Pointed dark red leather slipper-shoes with bronze buckles.",
    jewelryAccessories: "Single silver coiled snake ring on pinky finger; cast bronze pen-case and stylus tucked into belt.",
    props: "Baked clay tablet decree in leather protective pouch (Scene 1); bronze stylus.",
    posture: "Ingratiating, subservient bow when addressing the King; predatory and upright when spying on Daniel.",
    emotionalBaseline: "Cold, legalistic malice disguised as hyper-loyal imperial patriotism.",
    voiceCharacteristics: "Silky, sibilant, precise diction; clipped consonants, measured courtly deference.",
    historicalCulturalAppearance: "High Persian court aristocrat conforming strictly to court etiquette and legal maneuvering.",
    continuityCriticalAttributes: [
      "White pleated felt tiara atop head",
      "Sharp tapered spade beard with ringlets",
      "Rust-crimson pleated robe",
      "Slender predatory posture"
    ],
    productionNotes: "Official 1 represents cold institutional bureaucracy used as an assassination weapon. Never overact or sneer like a cartoon villain; all venom is packaged in legal decorum."
  },
  {
    id: "official2",
    name: "OFFICIAL 2 (Accomplice Satrap)",
    role: "Median Satrap / Judicial Informant",
    age: "38–42 years old",
    sex: "Male",
    physicalBuild: "Stocky, compact, muscular build with thick neck and broad hands.",
    heightProportions: "5 ft 8 in (173 cm), heavy-set, grounded stance.",
    complexion: "Ruddy, sun-darkened olive with weathered stubble along lower neckline.",
    faceShape: "Round, fleshy face with heavy jowls and broad brow.",
    eyes: "Small, dark brown, darting eyes with heavy lids; conspiratorial glance.",
    nose: "Broad, fleshy hooked nose.",
    mouth: "Thick lips, usually parted slightly in tense anticipation.",
    hair: "Coarse black curly hair cut short beneath a rounded felt Median cap (bashlyk).",
    beardFacialHair: "Dense, curly black beard rounded at the jaw, medium fullness, slightly less manicured than Official 1.",
    distinguishingFeatures: "Thick, unbroken unibrow; heavy brow ridge.",
    clothing: "Median riding-style court tunic: slate-gray wool coat with embroidered collar over mustard-ochre linen trousers (anaxyrides).",
    clothingColors: "Slate gray, mustard ochre, dark charcoal.",
    fabricsMaterials: "Heavy wool felt, twill linen, thick rawhide belt.",
    footwear: "Ankle-high laced rawhide Median boots in natural tan.",
    jewelryAccessories: "Heavy cast bronze torque with stylized griffin heads.",
    props: "None.",
    posture: "Alert, watchful, flanking Official 1 like an enforcer; hunched slightly in doorway.",
    emotionalBaseline: "Nervous opportunism; eager to see the foreign Judean governor eliminated.",
    voiceCharacteristics: "Gruff, hushed, clipped whispered delivery ('There').",
    historicalCulturalAppearance: "Median nobleman integrated into Persian court hierarchy; pragmatic and ruthless.",
    continuityCriticalAttributes: [
      "Rounded Median felt cap (bashlyk)",
      "Slate-gray riding coat with mustard undertunic",
      "Heavy unibrow and rounded beard"
    ],
    productionNotes: "Functions as the corroborating witness required by Persian law. Silent complicity."
  },
  {
    id: "guards",
    name: "PERSIAN GUARDS (Royal Immortals / Spearmen)",
    role: "Imperial Palace Guards & Execution Escort",
    age: "24–32 years old",
    sex: "Male",
    physicalBuild: "Broad, athletic, military conditioning; identical disciplined posture and stance.",
    heightProportions: "5 ft 11 in (180 cm) uniform height.",
    complexion: "Deeply tanned bronze Mediterranean/Persian skin.",
    faceShape: "Square, stern, disciplined jawlines.",
    eyes: "Dark, vigilant, staring straight ahead; unblinking military obedience.",
    nose: "Straight, prominent noses.",
    mouth: "Set, straight, expressionless.",
    hair: "Dark hair bound neatly under ribbed felt caps.",
    beardFacialHair: "Short, neatly squared black beards with crimped rows matching imperial guard reliefs.",
    distinguishingFeatures: "Absolute uniformity; identical stoicism; no emotional reaction to Daniel's sentence.",
    clothing: "Dark crimson wool tunics with yellow diamond border weave; iron scale armor cuirass worn beneath; yellow felt Persian guard caps.",
    clothingColors: "Crimson, dark saffron, polished iron/bronze.",
    fabricsMaterials: "Iron scales laced on leather, heavy wool, bronze fittings.",
    footwear: "Laced brown leather combat boots with brass hobnails.",
    jewelryAccessories: "Twisted bronze armlets.",
    props: "Achaemenid six-foot ash-wood spears with silver-plated apple pommels (Melophoroi); iron-bladed short swords (akinakes) in wood scabbards at hips; thick braided hemp lowering rope (Scene 6 & 7).",
    posture: "Immovable, synchronized, stone-like rigidity.",
    emotionalBaseline: "Cold imperial discipline; they do not hate Daniel, they execute the King's seal without question.",
    voiceCharacteristics: "Silent throughout; communicative through mechanical, practiced physical movements.",
    historicalCulturalAppearance: "Authentic Achaemenid 'Apple-Bearers' (Royal Guard) from Susa/Persepolis palace friezes.",
    continuityCriticalAttributes: [
      "Yellow pleated Persian caps",
      "Crimson tunics with scale armor vest",
      "Six-foot spear with silver apple counterweight",
      "Iron akinakes dagger at right hip"
    ],
    productionNotes: "Never depict guards as medieval knights or fantasy warriors. Use Susa glazed brick guard references."
  },
  {
    id: "lions",
    name: "LIONS (Asiatic Lions — Panthera leo persica)",
    role: "Royal Den Predators / Witnesses to Divine Deliverance",
    age: "Adult male (primary foreground lion: 6–7 years old; two background sub-adults/females)",
    sex: "Male (primary lead lion) + mixed pride members in darkness",
    physicalBuild: "Lean, muscular, sinewy, heavily muscled shoulders; not overfed or bloated; raw apex predator power.",
    heightProportions: "Shoulder height 3 ft 3 in (100 cm), body length 6 ft 2 in (190 cm), weight ~380 lbs (175 kg). More compact than African lion.",
    complexion: "Tawny sandy-gold coat with subtle pale buff underbelly.",
    faceShape: "Broad feline skull, wide amber-yellow eyes, heavy whisker pads with black tactile dots, black nose leather.",
    eyes: "Large, luminous amber-yellow eyes with reflective tapetum lucidum in darkness; intense unblinking feline curiosity; zero cartoon rage.",
    nose: "Textured black leather nose pad with wet sheen.",
    mouth: "Closed, heavy jowls; prominent black lips; no snarling or exaggerated drool.",
    hair: "Short, dense, rough coat; distinct longitudinal fold of skin running along the belly (species marker for Asiatic lion).",
    beardFacialHair: "Mane: Dark reddish-brown to charcoal tips, shorter and sparser than African lions; mane leaves ears clearly visible; mane runs along belly line.",
    distinguishingFeatures: "Longitudinal belly skin fold; visible ears protruding through mane; black tail tuft; pale scar across left shoulder blade from prior fights.",
    clothing: "N/A (Natural animal)",
    clothingColors: "N/A",
    fabricsMaterials: "N/A",
    footwear: "N/A",
    jewelryAccessories: "N/A",
    props: "N/A",
    posture: "Initially a low, deliberate, stealthy stalking prowl with lowered head; pauses at 6 feet; transitions smoothly into a calm, majestic sternal recumbency (lying down on chest with paws folded inward).",
    emotionalBaseline: "Curious, predatory baseline that mysteriously softens into tranquil docility and calm recognition of divine restraint.",
    voiceCharacteristics: "Low resonant guttural breathing; zero roaring, zero theatrical snarling.",
    historicalCulturalAppearance: "Authentic Asiatic lion (Panthera leo persica) native to ancient Mesopotamia and Persia, identical to lions carved on the Ishtar Gate and Persepolis reliefs.",
    continuityCriticalAttributes: [
      "Prominent longitudinal fold of skin along belly",
      "Short sparse mane leaving ears clearly exposed",
      "Tawny sand-gold fur with black tail tuft",
      "No roaring, no glowing CGI eyes, no monster fangs"
    ],
    productionNotes: "The lion is a real, terrifying apex predator whose mouth is closed by supernatural peace, NOT by physical sickness, CGI smoke, or cartoon tameness. It lies down with the natural grace of a massive cat."
  }
];

/* =========================================================================
   2. COSTUME CONTINUITY
   ========================================================================= */
export const COSTUME_CONTINUITY: CostumeContinuityItem[] = [
  {
    characterId: "daniel",
    characterName: "DANIEL",
    scenesPresent: "Scenes 1, 2, 3, 5, 6, 7",
    baseGarments: "Undyed natural flax linen tunic, knee-length, high round neckline, long sleeves with tight wrists, off-white/ecru color.",
    outerGarments: "Dense slate-indigo woven wool mantle (himation style), 3 yards long, draped over left shoulder and wrapped around torso; narrow 1-inch madder red woven geometric band at hem.",
    belts: "Woven natural hemp cord girdle, 1.5-inch width, tied with simple square knot at right hip.",
    footwear: "Dark oxblood-brown oiled leather strap sandals with thick double-layer leather soles and bronze buckle pins.",
    jewelry: "Tarnished bronze administrative signet ring on right index finger.",
    crownsHeadwear: "Bare-headed in all scenes; natural silver-white hair visible.",
    colors: "Ecru/off-white (tunic), slate-indigo (mantle), madder red (accent border), oxblood (sandals).",
    materials: "Hand-spun unbleached linen, coarse organic wool, tanned leather, bronze.",
    wearDirtState: "Scenes 1–5: Pristine, clean, dignified administrative state. Scene 6: Intact, but hem of tunic gathers light stone dust from the den floor. Scene 7: Light limestone dust on knees, left elbow, and lower hem; mantle slightly loosened; hair lightly rumpled by night breeze.",
    permittedChanges: [
      "Mantle drape may loosen naturally when lowered by rope in Scene 6",
      "Dust and grit on knees and hem in Scenes 6 and 7",
      "Hair slightly disheveled in morning light of Scene 7"
    ],
    forbiddenChanges: [
      "NO color change of tunic or mantle across any scene",
      "NO modern tailoring, seams, buttons, or metal zippers",
      "NO shredded or torn rags (the lions did not touch him)",
      "NO bloody stains, cuts, or bruises (scripture and screenplay explicitly state he was unharmed)",
      "NO ornate Persian golden embroidery added to his clothes"
    ]
  },
  {
    characterId: "darius",
    characterName: "KING DARIUS",
    scenesPresent: "Scenes 1, 4, 5, 7",
    baseGarments: "Saffron-gold fine wild silk under-tunic with high standing collar and tight gold-embroidered cuffs.",
    outerGarments: "Imperial Achaemenid pleated candys gown: rich royal Tyrian purple wool with voluminous draped bell sleeves; embroidered gold rosette borders along all margins.",
    belts: "Gilded leather imperial belt with carnelian cabochons and heavy gold buckle plate.",
    footwear: "High Persian saffron-yellow calfskin boots with turned-up toes and three button clasps along outer calf.",
    jewelry: "Heavy solid gold torque with double-ram terminals around neck; electrum armlets; carnelian cylinder seal on right wrist braided silk cord.",
    crownsHeadwear: "Scenes 1 & 4: Fluted gold-banded royal cidaris (low tiara). Scene 5: Cidaris remains, slightly askew. Scene 7: No cidaris (left in bedchamber during his frantic morning rush); hair wild and disheveled at crown.",
    colors: "Tyrian imperial purple, saffron gold, vermilion red lining, burnished gold jewelry.",
    materials: "Tyrian-dyed wool, wild silk, heavy gold plate, carnelian stone, fine calfskin.",
    wearDirtState: "Scene 1: Flawless imperial grandeur. Scene 4: Impeccable, but mantle hangs heavily. Scene 5: Robes slightly rumpled from pacing. Scene 7: Disheveled, unbuttoned collar, no crown, hem dusted with dawn sand from running to the pit.",
    permittedChanges: [
      "Removal of crown/cidaris in Scene 7 to visually telegraph his sleepless panic",
      "Unfastened mantle clasp and rumpled silk collar in Scene 7",
      "Sand and dust on boots in Scene 7"
    ],
    forbiddenChanges: [
      "NO change from Tyrian purple colorway",
      "NO European medieval crown with crosses or points",
      "NO modern tuxedo-like cuts or synthetic glossy fabrics",
      "NO armor or breastplate (Darius is in court robes, not marching to battle)"
    ]
  },
  {
    characterId: "official1",
    characterName: "OFFICIAL 1",
    scenesPresent: "Scenes 1, 3, 4",
    baseGarments: "Bleached cream linen under-robe with long fitted sleeves.",
    outerGarments: "Rust-crimson pleated wool court robe with wide accordion-folded sleeves and dark ochre border.",
    belts: "Tooled dark brown leather belt with cast bronze plaque and suspension loops for stylus.",
    footwear: "Pointed dark red-dyed leather slipper-shoes.",
    jewelry: "Silver snake-coil pinky ring; bronze stylus case.",
    crownsHeadwear: "Stiff white pleated felt court tiara (Achaemenid fluted hat).",
    colors: "Rust crimson, dark ochre, bleached cream, polished bronze.",
    materials: "Fine wool, felt, goatskin, bronze.",
    wearDirtState: "Pristine, immaculate, oiled, smelling of rosewater and almonds across all scenes.",
    permittedChanges: ["None across Scenes 1, 3, and 4."],
    forbiddenChanges: [
      "NO changing color palette to blue, green, or black",
      "NO removing the white court tiara",
      "NO weapons (officials do not carry swords into the throne room)"
    ]
  },
  {
    characterId: "guards",
    characterName: "PERSIAN GUARDS",
    scenesPresent: "Scenes 6, 7 (optional in 1)",
    baseGarments: "Dark crimson wool tunics with woven yellow diamond fretwork pattern.",
    outerGarments: "Iron scale-armor cuirasses laced over leather breast harness.",
    belts: "Thick rawhide sword belt with brass buckle.",
    footwear: "Laced brown combat boots with reinforced toe caps.",
    jewelry: "Twisted bronze torque around neck.",
    crownsHeadwear: "Ribbed yellow felt Persian guard headgear (fluted skullcap).",
    colors: "Crimson, mustard yellow, dark iron, oiled brown leather.",
    materials: "Iron scales, boiled leather, wool, brass, ash wood.",
    wearDirtState: "Functional military cleanliness; light dust on boots.",
    permittedChanges: ["Handling rope in Scenes 6 and 7."],
    forbiddenChanges: [
      "NO medieval plate armor, visored helmets, or cross designs",
      "NO Roman legionary armor (lorica segmentata)"
    ]
  }
];

/* =========================================================================
   3. LOCATION LOCKS
   ========================================================================= */
export const LOCATION_LOCKS: LocationLock[] = [
  {
    id: "loc_court",
    name: "A. PERSIAN ROYAL COURT / THRONE ROOM (APADANA)",
    scenesAppeared: "Scene 1 (Day), Scene 4 (Evening), Scene 5 (Evening)",
    historicalPeriod: "Achaemenid Empire (Late 6th Century BCE, Susa or Babylon administrative palace)",
    architecture: "Monumental hypostyle hall with towering limestone columns (40 feet high) topped with double-bull protome capitals; colossal post-and-lintel proportions.",
    constructionMaterials: "Grey-white dressed limestone, Lebanese cedar roof beams, glazed polychrome ceramic relief bricks.",
    floor: "Highly polished dark bituminous limestone flagstones reflecting torch and window light like still water.",
    walls: "Lower registers lined with glazed polychrome ceramic relief tiles depicting rows of marching Persian spearmen, winged sphinxes, and stylized rosettes in cobalt blue, turquoise, yellow, and white.",
    ceiling: "Exposed colossal Lebanese cedar beams painted with geometric indigo, vermilion, and gold rosette coffers.",
    windows: "High clerestory window embrasures cut near ceiling height, throwing dramatic diagonal shafts of dust-mote sunlight (Day) or deep blue dusk (Evening).",
    doors: "Massive double cedar portals clad in beaten bronze plates embossed with mythological lion-griffin scenes.",
    furniture: "Elevated three-tiered dais with carved cedar and gold-leaf throne; lion-paw feet resting on bronze footstools; two ceremonial bronze incense burners releasing frankincense.",
    lighting: "Scene 1 (Day): Soft, brilliant, diffused Persian daylight filtered from high clerestory shafts with crisp diagonal beam highlights. Scenes 4 & 5 (Evening): Low, moody, high-contrast chiaroscuro; twin bronze braziers on stands casting amber-orange flame glow (2200K) against deep cool umber shadows (6500K).",
    textiles: "Heavy woven wool carpets with geometric Persian medallions on dais; royal purple and gold drapes behind throne.",
    colors: "Imperial gold, Tyrian purple, cobalt blue, turquoise, warm sandstone, deep torchlight amber, charcoal shadows.",
    props: "Royal decree tablet, cylinder seal, inkwell, bronze braziers, guards' spears.",
    environmentalDetails: "A subtle drift of sweet frankincense smoke hanging in horizontal blue layers across the upper third of the frame; polished stone reflections.",
    atmosphere: "Massive, crushing, imperial weight; dwarfing human individuals; solemn, bureaucratic, and inescapable.",
    recurringVisualLandmarks: [
      "Double-bull capital column visible in right-third of wide shots",
      "Three-tiered elevated throne dais with lion-paw bronze legs",
      "Glazed turquoise-and-yellow relief wall of archers behind the dais",
      "Twin standing bronze fire braziers flanking the throne"
    ],
    mustNotAppear: [
      "Gothic arches, Roman barrel vaults, medieval stonework, chandeliers, candles, glass windows, clocks, paper manuscripts, heraldic European crests."
    ]
  },
  {
    id: "loc_daniels_room",
    name: "B. DANIEL'S ROOM (UPPER CHAMBER / ALIYAH)",
    scenesAppeared: "Scene 2 (Late Afternoon), Scene 3 (Late Afternoon)",
    historicalPeriod: "Babylonian/Persian residential administrative quarter, c. 539 BCE",
    architecture: "Intimate rectangular upper chamber constructed atop an administrative residence; modest, peaceful, stripped of ostentation.",
    constructionMaterials: "Sun-dried mudbrick coated in smooth whitewashed lime plaster; rough-hewn cedar ceiling poles.",
    floor: "Smooth, cool pale sandstone flagstones covered partially by a single woven reed/rush prayer mat.",
    walls: "Plain whitewashed plaster walls bearing subtle organic trowel textures and soft micro-cracks; no tapestries, no idol friezes.",
    ceiling: "Exposed horizontal cedar joists with woven reed matting laid across them.",
    windows: "A large, unglazed deep-set arched window opening facing west-southwest (toward Jerusalem). Built with an open stone sill; a simple coarse unbleached linen curtain pulled aside and tied with hemp cord.",
    doors: "Open wooden post-and-lintel doorway with simple cedar lintel, allowing a clear sightline from the hallway where officials spy.",
    furniture: "A low rectangular cedar writing table (18 inches high) with a clay inkwell and reed pens; a low wooden stool; a rolled rush prayer mat.",
    lighting: "Late Afternoon Golden Hour: Warm, honey-amber sunlight (3200K) streaming through the open window, illuminating Daniel's face and silver beard; soft ambient bounce filling the room; deep warm shadows.",
    textiles: "Coarse natural undyed flax linen curtain; woven dried reed rush prayer mat.",
    colors: "Warm alabaster white, sun-baked clay, honey amber, deep cedar brown, muted golden sky beyond window.",
    props: "Unglazed terracotta clay oil lamp on table; rolled papyrus scroll in leather tube; clay water jar.",
    environmentalDetails: "Gently drifting golden dust motes suspended in the window sunlight; visible distant horizon of flat Babylonian palm groves and mudbrick roofs through the window.",
    atmosphere: "Sanctuary of absolute tranquility, spiritual clarity, and monastic simplicity amidst a pagan empire.",
    recurringVisualLandmarks: [
      "Arched stone window opening with tied linen curtain looking towards Jerusalem",
      "Woven reed prayer mat on flagstones before the window sill",
      "The open doorway frame showing the dark hallway perspective"
    ],
    mustNotAppear: [
      "Glass window panes, curtains with Victorian tassels, modern desks, crucifixes, medieval candelabras, books/bound codices, iron hinges."
    ]
  },
  {
    id: "loc_lions_den",
    name: "C. THE LIONS' DEN (ROYAL GAME PIT / GUV)",
    scenesAppeared: "Scene 6 (Night), Scene 7 (Dawn)",
    historicalPeriod: "Ancient Mesopotamian subterranean pit for captive lions (Achaemenid royal menagerie)",
    architecture: "Subterranean circular pit (30 feet in diameter, 25 feet deep) excavated directly into natural bedrock limestone; vertical cliff-like walls prevent escape.",
    constructionMaterials: "Rough-hewn living limestone bedrock, chisel-scarred rock faces, damp earth, iron grate aperture overhead.",
    floor: "Hard-packed desert sand mixed with crushed gravel, scattered dry limestone scree, and weathered sun-bleached animal bones.",
    walls: "Dark, cavernous, chisel-marked natural stone walls with damp water-seepage streaks and deep recessed shadowy alcoves.",
    ceiling: "Solid bedrock vault converging into a single circular opening (8 feet wide) directly overhead, fitted with an iron-reinforced stone collar.",
    windows: "None. The ONLY light and ventilation source is the single circular opening above.",
    doors: "No side doors. Access is strictly via lowering ropes through the ceiling aperture.",
    furniture: "None. Natural stone ledges and alcoves where lions bed down.",
    lighting: "Scene 6 (Night): Extreme chiaroscuro; a single cool silver-blue beam of pure moonlight (5600K) slicing down through the circular hole, casting a sharp pool of light on the sand; the rest of the den remains in velvety umber and charcoal darkness (0.5 to 1 foot-candle); the lions' eyes catch subtle reflective tapetum glow. Scene 7 (Dawn): The overhead beam shifts to pale, cool rose-gold and lavender-tinged morning sunlight (3800K), widening across the pit as the sky brightens.",
    textiles: "None.",
    colors: "Scene 6: Silver-blue, deep charcoal, umber, bone white, tawny gold fur. Scene 7: Soft rose-gold, pale slate, sand ochre, radiant morning sky.",
    props: "Heavy braided hemp lowering ropes with knotted foot loops; scattered dry cow/sheep leg bones; heavy round sealing stone above.",
    environmentalDetails: "Cool night condensation dripping down stone walls; fine dust stirred up by lion paws; visible cold breath condensation from Daniel and the lions; absolute auditory and visual stillness.",
    atmosphere: "Primal, claustrophobic, lethal, and sacred. A place of certain execution transformed into a cathedral of peace.",
    recurringVisualLandmarks: [
      "The circular ceiling opening framing the sky directly overhead",
      "The massive rough limestone wall with chisel marks behind Daniel",
      "The flat sand clearing where Daniel kneels and the lion reclines"
    ],
    mustNotAppear: [
      "Torches burning inside the pit, iron prison cell bars on walls, fantasy demon statues, skeletons in chains, wooden doors, electric lighting, glowing angel apparitions."
    ]
  }
];

/* =========================================================================
   4. HISTORICAL VISUAL LANGUAGE
   ========================================================================= */
export const HISTORICAL_VISUAL_LANGUAGE = {
  historicalPeriod: "Early Achaemenid Persian Empire (c. 539–538 BCE), specifically the transitional administration following the conquest of Babylon by Cyrus the Great and Darius the Mede [Production Choice].",
  architecturalStyle: "Synthesis of monumental Persian Apadana architecture (Persepolis / Susa) and Neo-Babylonian brickwork. Hallmarks: colossal fluted columns with double-bull capitals, stepped merlons, polychrome glazed brick friezes of archers and rosettes, massive post-and-lintel stone construction.",
  clothingPhilosophy: "Strictly grounded in Achaemenid court relief carvings and Levantine textile archaeology. Flowing pleated candys robes with voluminous bell sleeves for Persian royalty; layered unbleached linen tunics and wool mantles for Judean dignitaries; Median riding tunics and anaxyrides trousers for northern satraps. No tight European tailoring.",
  materials: "Natural, ancient organic materials: unbleached flax linen, coarse hand-spun wool, raw wild silk, sheepskin, rawhide, vegetable-tanned leather, beaten bronze, cast iron, solid gold, electrum, lapis lazuli, carnelian, cedarwood, and limestone. Matte and organic surfaces; zero synthetic polymers or modern weaves.",
  weapons: "Authentic Achaemenid weaponry: 6-foot ash-wood spears with silver apple counterweights (Melophoroi), double-edged iron akinakes short swords in wooden scabbards worn at the right hip, composite recurve bow cases. No medieval broadswords, no halberds, no crossbows.",
  furnishings: "Low-slung wooden furniture (cedar, cypress), turned legs with bronze ferrules, lion-paw and bull-hoof terminals, woven rush mats, bronze oil lamps, terracotta vessels. No high dining chairs, no Victorian desks, no glass mirrors.",
  lightingPhilosophy: "Strictly motivated by natural and period-accurate practical sources: low-angle golden-hour sunlight, directional clerestory shafts, silver moonlight through open apertures, and warm open-flame bronze braziers and terracotta olive-oil lamps (1800K–2400K). Never employ unmotivated digital rim lights, fluorescent fills, or fantasy bioluminescence.",
  colorPalette: [
    { name: "Tyrian Purple", hex: "#4A154B", use: "Darius's imperial robes; symbol of supreme monarchy" },
    { name: "Persian Saffron Gold", hex: "#D4A017", use: "Under-tunics, jewelry, and royal palace friezes" },
    { name: "Slate Indigo", hex: "#2C3E50", use: "Daniel's outer mantle; sober, contemplative, and dignified" },
    { name: "Ecru Flax Linen", hex: "#EAE6DF", use: "Daniel's inner tunic and official undergarments" },
    { name: "Madder Rust Crimson", hex: "#8B261E", use: "Official 1's robe and Persian guard tunics" },
    { name: "Limestone Buff", hex: "#D8CCA3", use: "Architecture, court columns, and Daniel's room" },
    { name: "Bedrock Umber / Charcoal", hex: "#1C1B1A", use: "Lions' den shadows and night darkness" },
    { name: "Moonlight Silver-Blue", hex: "#8A9BA8", use: "Scene 6 night lighting in the pit" }
  ],
  cameraRealism: "Filmed as if on location using physical 35mm motion picture cameras with vintage anamorphic primes. Natural optical depth of field, physical camera inertia, organic lens flares from actual flame practicals, and true focal length perspective.",
  environmentalRealism: "Atmospheric particulate: subtle incense haze in the court, floating dust motes in Daniel's sunlit room, cold condensation and damp stone dust in the lions' den. Fabrics exhibit natural weight, drape, wrinkles, and physical gravity.",
  anachronismSafeguards: "Flagged [Production Choice] on all specific regnal attributions to Darius the Mede to maintain historical and scriptural fidelity without speculation."
};

/* =========================================================================
   5. CINEMATOGRAPHY BIBLE
   ========================================================================= */
export const CINEMATOGRAPHY_BIBLE = {
  aspectRatio: "2.39:1 Anamorphic Widescreen (Cinemascope format)",
  lensPhilosophy: "Emulate vintage anamorphic prime lenses (e.g., Panavision C-Series or Cooke Anamorphic/i Full Frame Plus equivalent). Characteristics: gentle edge falloff, subtle oval bokeh on background braziers, creamy organic skin texture rendering, low geometric distortion in center-frame, authentic warm horizontal streak flares on direct torch practicals.",
  focalLengths: {
    wide: "35mm Anamorphic (used for establishing royal court scale and the isolation of Daniel in the deep pit)",
    medium: "50mm Anamorphic (two-shots in Scenes 1, 4, 5, and doorway framing in Scene 3)",
    closeUp: "75mm & 100mm Anamorphic (intimate emotional framing on Daniel's serene prayer in Scene 2 & 6; Darius's agony in Scene 5 & 7)"
  },
  cameraMovement: "Heavily motivated, dignified, and controlled. 90% stabilized tripod and smooth hydraulic dolly tracks. Slow, creeping push-ins (inching forward 2–3 feet over 10 seconds) to build psychological pressure during Daniel's prayers and confrontations. Absolute ban on erratic handheld shaky-cam, rapid zoom snaps, or unmotivated crane pirouettes.",
  depthOfField: "Shallow to medium depth of field (T2.0 to T2.8). Keeps character faces pin-sharp with eyes in crystalline focus while softly separating them from dense architectural backgrounds and dark lion shadows.",
  lightingRatios: {
    courtDay: "Key:Fill 3:1 (soft, directional, grand)",
    roomLateAfternoon: "Key:Fill 5:1 (rich golden-hour window slash with warm ambient bounce)",
    courtEvening: "Key:Fill 6:1 (flickering brazier firelight against deep umber room tone)",
    lionsDenNight: "Key:Fill 8:1 (hard 5600K silver moonlight shaft isolated in black 1800K shadow)",
    lionsDenDawn: "Key:Fill 4:1 (soft 3800K morning lavender-gold illumination rising)"
  },
  framingPrinciples: [
    "Rule of Thirds with deliberate negative space: Daniel framed with expansive negative space to emphasize his moral isolation and tranquility.",
    "Eyeline matching: Strict adherence to 180-degree rule in Scenes 1, 4, and 5.",
    "Low angle on Darius on throne in Scene 1 (imperial dominance); shifting to level eyeline with Daniel in Scene 5 (moral equality).",
    "High-angle god's-eye POV from the pit opening looking down at Daniel (vulnerability), answered by low-angle looking up at the sky."
  ],
  filmTexture: "Organic 35mm motion picture film stock emulation (Kodak Vision3 500T 5219 for night/interior scenes, Vision3 250D 5207 for day). Fine organic film grain, natural halation around flame highlights, deep rich shadow toe, and smooth highlight roll-off.",
  visualContrast: "High dynamic range with deep true blacks (not milky grey) and soft rolled-off specular highlights. No digital sharpness or edge haloing."
};

/* =========================================================================
   6. SCENE-BY-SCENE CONTINUITY MATRIX
   ========================================================================= */
export const SCENE_CONTINUITY_MATRIX: SceneMatrixRow[] = [
  {
    sceneNumber: 1,
    title: "THE DECREE",
    durationTarget: "20–25 sec",
    location: "Persian Royal Court (Apadana)",
    timeOfDay: "Day (Mid-morning light)",
    characters: "King Darius, Daniel, Official 1, Persian court officials, Guards",
    characterAppearanceReqs: "Darius seated on throne with tiara and scepter; Daniel standing among governors in slate-indigo mantle; Official 1 holding clay decree tablet.",
    costumeRequirements: "Darius: pristine Tyrian purple/saffron candys. Daniel: immaculate slate-indigo mantle over ecru tunic. Official 1: rust-crimson pleated robe.",
    props: "Baked clay tablet decree with cuneiform inscriptions; Darius's carnelian cylinder seal; royal cedar scepter.",
    lighting: "Brilliant diagonal sunbeams pouring from high clerestory windows; soft ambient fill reflecting off polished dark limestone.",
    emotionalState: "Darius: complacent imperial authority. Official 1: veiled triumphant cunning. Daniel: sudden interior realization, quiet gravity, unblinking awareness.",
    action: "Official presents decree; Darius inquires, studies document, and rolls cylinder seal into the clay/wax; Daniel listens, turns gaze slightly; subtle expression change.",
    cameraRequirements: "Wide establishing shot of Apadana (35mm) -> Medium two-shot of Darius & Official 1 (50mm) -> Slow push-in close-up on Daniel's face (75mm).",
    environmentalContinuity: "Incense haze in upper hall; quiet murmurs of court scribes; dust motes dancing in sunlight.",
    criticalVisualRisks: "Avoid paper parchment scrolls with wax drippings; use period clay tablet/cylinder seal. Daniel must NOT react with open anger or panic."
  },
  {
    sceneNumber: 2,
    title: "DANIEL PRAYS",
    durationTarget: "25–30 sec",
    location: "Daniel's Room (Upper Chamber)",
    timeOfDay: "Late Afternoon (Golden Hour)",
    characters: "Daniel (Solo)",
    characterAppearanceReqs: "Daniel, silver-white hair and beard, tranquil dignified countenance; eyes open looking to horizon, then closing in prayer.",
    costumeRequirements: "Identical slate-indigo mantle and ecru linen tunic from Scene 1; no costume change.",
    props: "Woven rush prayer mat, terracotta oil lamp on table, cedar writing desk.",
    lighting: "Rich, low-angle honey-gold sunlight (3200K) streaming through open arched window; warm bounce onto whitewashed walls; deep warm shadows.",
    emotionalState: "Complete absence of panic; immovable resolve; intimate, reverent communion with God.",
    action: "Daniel enters room; approaches open window facing Jerusalem; kneels smoothly onto rush mat; speaks prayer calmly; looks to horizon; bows head.",
    cameraRequirements: "Medium tracking shot following Daniel to window (50mm) -> Slow 10-second dolly push to intimate close-up (85mm) framing face and silver beard in golden light.",
    environmentalContinuity: "Linen curtain fluttering slightly in gentle breeze; distant mudbrick rooftops and date palms visible outside window.",
    criticalVisualRisks: "No glowing halo, no angelic silhouettes, no frantic rapid breathing. Daniel's prayer must feel deeply grounded and historically real."
  },
  {
    sceneNumber: 3,
    title: "DISCOVERED",
    durationTarget: "15–20 sec",
    location: "Daniel's Room (Doorway / Hallway perspective)",
    timeOfDay: "Late Afternoon (Sunset transition)",
    characters: "Daniel (kneeling in background), Official 1, Official 2",
    characterAppearanceReqs: "Daniel seen from behind/side in prayer; Officials with conspiratorial, predatory expressions.",
    costumeRequirements: "Official 1: rust-crimson robe and white felt tiara. Official 2: slate-gray Median coat and rounded bashlyk cap. Daniel: unchanged.",
    props: "None.",
    lighting: "Deep hallway shadow in foreground framing the bright, warm golden-lit room beyond (frame within a frame).",
    emotionalState: "Officials: predatory triumph, suppressed malicious satisfaction. Daniel: oblivious, immersed in prayer.",
    action: "Two officials quietly step into the doorway shadow; Official 1 peers in, confirms Daniel praying; turns to Official 2; they exchange a glance; Official 1 whispers 'There'; they slip away.",
    cameraRequirements: "Deep-focus medium shot from shadowed hallway looking over officials' shoulders at Daniel framed in the golden window light; shallow pull to officials' smiling eyes.",
    environmentalContinuity: "Exact continuity of Daniel's posture from Scene 2; sunlight slightly lower on the wall (10 minutes later in story time).",
    criticalVisualRisks: "Officials must not make loud comic sneers. Daniel must remain strictly stationary and unaware in background."
  },
  {
    sceneNumber: 4,
    title: "THE TRAP",
    durationTarget: "25–30 sec",
    location: "Persian Throne Room (Apadana)",
    timeOfDay: "Evening (Dusk)",
    characters: "King Darius, Official 1",
    characterAppearanceReqs: "Darius sitting with furrowed brow, looking weary; Official 1 approaching with false humility; Darius rising in sudden shock.",
    costumeRequirements: "Darius: Tyrian purple robe, gold ram torque; tiara slightly back on forehead. Official 1: rust-crimson robe.",
    props: "Throne, twin bronze fire braziers flickering with live coals.",
    lighting: "Evening chiaroscuro; warm amber-orange brazier flame glow (2200K) against dark blue exterior twilight through clerestory.",
    emotionalState: "Darius: initial regal confidence turning into sudden sickening realization of betrayal. Official 1: calculating, cold legal trap sprung.",
    action: "Official approaches throne, reminds King of the signed decree; Darius affirms 'The decree stands'; Official names Daniel; Darius freezes, gasps 'Daniel?', rises abruptly from throne.",
    cameraRequirements: "Low-angle medium shot on Darius (50mm) -> Over-the-shoulder on Official 1 -> Rapid creeping push onto Darius's widening, horrified eyes (75mm).",
    environmentalContinuity: "Twin braziers lit; dusk darkness outside high windows; shadows dancing on relief-tiled archers.",
    criticalVisualRisks: "Darius must register grief and betrayal, not anger at Daniel. He realizes HE himself has been outplayed by his own court."
  },
  {
    sceneNumber: 5,
    title: "DANIEL BEFORE THE KING",
    durationTarget: "30–35 sec",
    location: "Persian Throne Room (Apadana)",
    timeOfDay: "Night (Interior torchlight)",
    characters: "King Darius, Daniel",
    characterAppearanceReqs: "Daniel standing completely unbound, hands relaxed at sides; Darius stepped down from dais, physically close to Daniel.",
    costumeRequirements: "Daniel: slate-indigo mantle, ecru tunic. Darius: Tyrian purple robe, unclasped torque at throat, visible exhaustion.",
    props: "None in hands.",
    lighting: "Low, dramatic Rembrandt lighting from single large standing brazier; half of Darius's face in shadow; Daniel's face evenly illuminated by warm firelight.",
    emotionalState: "Darius: tormented by his legal impotence, desperate, grieving. Daniel: gentle, unyielding, compassionate toward the tormented king.",
    action: "Daniel stands before Darius (unbound); Darius walks up to him; speaks brokenly 'Is it true?'; Daniel affirms; Darius looks away, asks 'Why?'; Daniel delivers lines calmly; silence.",
    cameraRequirements: "Eye-level two-shot (50mm) emphasizing intimacy -> Close-up on Darius's anguished face (85mm) -> Reverse close-up on Daniel's calm, steady eyes -> Static hold on both in profile.",
    environmentalContinuity: "No guards between them; intimate royal chamber silence; braziers crackling softly.",
    criticalVisualRisks: "Daniel must NOT be bound in chains or beaten. Darius must NOT shout. Tension is purely psychological and moral."
  },
  {
    sceneNumber: 6,
    title: "THE LIONS' DEN",
    durationTarget: "30–40 sec",
    location: "The Lions' Den (Subterranean Pit)",
    timeOfDay: "Night (Midnight)",
    characters: "Daniel, Asiatic Lion (primary), shadows of other pride members",
    characterAppearanceReqs: "Daniel lowered by rope into darkness; lion with dark sparse mane and longitudinal belly fold emerging from shadow.",
    costumeRequirements: "Daniel: slate-indigo mantle slightly loosened, light stone dust on hem; bare-headed.",
    props: "Thick braided hemp rope disappearing upward through circular stone hole; weathered animal bones on sand.",
    lighting: "Single vertical shaft of cool 5600K silver moonlight penetrating through overhead circular hole; deep black surrounding shadows; faint amber tapetum eye reflections.",
    emotionalState: "Daniel: calm, prayerful surrender. Lion: natural predatory investigation shifting into docile stillness.",
    action: "Daniel lands on pit floor; rope pulled upward; circular aperture shrinks; Daniel spots lions; primary lion stalks forward, stops 6 feet away; Daniel slowly kneels, prays; lion lies down peacefully; hold.",
    cameraRequirements: "High-angle POV looking down through hole at Daniel -> Low-angle shot of descending rope -> Eye-level tracking shot on lion's paws -> Slow creeping wide shot holding Daniel and reclining lion.",
    environmentalContinuity: "Damp cold condensation on stone; dust stirred by paws; no torches in pit.",
    criticalVisualRisks: "NO glowing angel apparition! NO light show! NO explosion! The miracle is strictly the silence and the lion lying down."
  },
  {
    sceneNumber: 7,
    title: "MORNING",
    durationTarget: "30–35 sec",
    location: "Lions' Den (Top opening and interior pit)",
    timeOfDay: "Dawn (First Light / Sunrise)",
    characters: "King Darius, Daniel, Persian Guards",
    characterAppearanceReqs: "Darius haggard, crownless, hair wild from sleeplessness; Daniel dusted with sand, unharmed, radiant in morning light.",
    costumeRequirements: "Darius: disheveled purple robe, collar open, no tiara. Daniel: tunic dusted with limestone sand at knees; completely intact.",
    props: "Heavy circular sealing stone rolled aside; lowering ropes; guards' spears.",
    lighting: "Crisp lavender-pink dawn transitioning into bright golden horizontal morning sunlight (3800K to 5000K).",
    emotionalState: "Darius: desperate, frantic hope breaking into overwhelming weeping relief. Daniel: peaceful, victorious, worshipful.",
    action: "Darius rushes to den opening; calls down in agonizing doubt; silence; Daniel answers 'My king, live forever'; Darius freezes, commands 'Lift him out!'; Daniel hoisted up; emerges into sunlight; looks to sky.",
    cameraRequirements: "Handheld-emulated quick push on Darius running -> Downward plunge shot into pit -> Low-angle shot from inside pit looking up at Darius framed by dawn sky -> Final majestic medium close-up of Daniel emerging into brilliant sunlight.",
    environmentalContinuity: "Cool morning mist rising; birds chirping faintly; sunlight hitting upper rim of pit.",
    criticalVisualRisks: "Daniel must emerge without a scratch or drop of blood. Darius's relief must feel deeply human and tearful."
  }
];

/* =========================================================================
   7. CHARACTER RELATIONSHIP CONTINUITY
   ========================================================================= */
export const CHARACTER_RELATIONSHIPS = [
  {
    pair: "Daniel and Darius",
    visualDynamic: "Moral Equality & Mutual Sorrow",
    blockingDetails: "In Scene 1, Darius sits elevated on the throne while Daniel stands among administrators, acknowledging the legal hierarchy. In Scene 5, the hierarchy collapses: Darius descends the dais steps to stand at eye-level with Daniel. Daniel is not bound, nor forced to grovel. They stand within arm's reach. Darius looks away in shame when asking 'Why?'; Daniel maintains steady, direct, compassionate eye contact. In Scene 7, Darius drops all royal decorum, running on foot and leaning precariously over the pit rim. Eyeline connection is vertical (king looking down, prophet looking up), resolved when Daniel is lifted to stand together on the earth.",
    emotionalSubtext: "Darius loves Daniel as his finest governor and wise counselor, but is paralyzed by the unyielding legal trap he signed. Daniel harbors no bitterness toward Darius, addressing him with traditional respect ('My king, live forever') while remaining fundamentally loyal to his God."
  },
  {
    pair: "Daniel and the Officials",
    visualDynamic: "Innocent Openness vs. Shadowed Stalking",
    blockingDetails: "In Scene 1, Daniel stands openly in the light of the court while officials whisper in clusters. In Scenes 2 & 3, Daniel is positioned in the full golden light of the window, facing outward toward Jerusalem, completely vulnerable. The two officials stay confined to the dark perimeter of the doorway, using the architectural frame as a sniper's nest. In Scene 4, Official 1 stands tall before the seated King, using formal legal deferrals to disguise a coup.",
    emotionalSubtext: "Official 1 and 2 view Daniel with intense professional envy and xenophobic malice, targeting his religious devotion as his only vulnerability. Daniel never acknowledges their existence; his visual reality remains focused on duty and God."
  },
  {
    pair: "Daniel and the Lions",
    visualDynamic: "Natural Majesty Meeting Divine Stillness",
    blockingDetails: "In Scene 6, the lion enters the light as a dominant predator: lowered head, muscular shoulders rolling, eyes locked on prey. Daniel does not flee, flinch, or wave his arms. He matches the lion's focus with absolute stillness. As Daniel slowly descends to his knees, his vertical silhouette shrinks; normally this triggers a predator's strike, but here it has the opposite effect: the lion stops at 6 feet, watches, blinks slowly, and mimics Daniel's posture by lowering its massive chest to the sand.",
    emotionalSubtext: "No fear from the man; no frenzy from the beast. An eerie, supernatural hush where natural law is suspended by divine command without theatrical pyrotechnics."
  }
];

/* =========================================================================
   8. PROP CONTINUITY
   ========================================================================= */
export const PROP_CONTINUITY: PropItem[] = [
  {
    id: "prop_decree",
    name: "The Royal Decree",
    scenes: "Scenes 1, 4",
    materials: "Kiln-baked terracotta clay tablet (Achaemenid administrative style) [Production Choice: far more authentic to Babylon/Persian court than paper parchment].",
    dimensionsVisuals: "Rectangular clay pillow tablet, 8 inches tall, 5 inches wide, 1.5 inches thick. Inscribed with crisp rows of Elamite/Old Persian cuneiform characters. Bears a fresh cylindrical seal impression pressed into the damp clay collar at base.",
    historicalContext: "Standard imperial edict tablet preserved in royal archives.",
    continuityRules: "Must remain identical between Scene 1 and Scene 4. No torn edges, no paper rolls, no molten red sealing wax."
  },
  {
    id: "prop_seal",
    name: "Royal Cylinder Seal",
    scenes: "Scene 1 (and tied to Darius's wrist in 4, 5, 7)",
    materials: "Deep translucent red carnelian stone cylinder, drilled longitudinally with a gold pin mount and braided purple-gold silk cord.",
    dimensionsVisuals: "1.5 inches long, 0.75 inches diameter. Intaglio carved with the motif of the Persian Great King battling two rampant winged lions beneath the winged disc of Ahura Mazda.",
    historicalContext: "The personal seal of the monarch, legally representing his inviolable royal authority.",
    continuityRules: "Tied securely around Darius's right wrist in all scenes. Visible when he signs in Scene 1 and when he clenches his fist in Scene 4."
  },
  {
    id: "prop_throne",
    name: "Achaemenid Royal Throne",
    scenes: "Scenes 1, 4",
    materials: "Carved Lebanese cedar overlaid with beaten gold and electrum leaf; bronze lion-paw leg terminals.",
    dimensionsVisuals: "High-backed ceremonial seat with turned wooden spindles and a stepped geometric cresting. Sits atop a three-tiered dais covered in woven purple carpets.",
    historicalContext: "Modeled directly on the throne reliefs of Darius I at Persepolis.",
    continuityRules: "Positioned centrally on the Apadana dais. Must never be replaced by a stone gothic throne or modern chair."
  },
  {
    id: "prop_prayer_room",
    name: "Daniel's Prayer Room Furnishings",
    scenes: "Scenes 2, 3",
    materials: "Woven marsh reed rush mat (4 ft x 2 ft); unglazed terracotta saucershaped oil lamp with pinched wick nozzle; low cedar writing table.",
    dimensionsVisuals: "Mat shows soft golden-tan weave with frayed fringe. Lamp burns olive oil with a soft, steady flame.",
    historicalContext: "Modest Jewish diaspora domestic furnishings in Babylon.",
    continuityRules: "Mat must remain aligned directly toward the open window facing west-southwest in both Scene 2 and 3."
  },
  {
    id: "prop_ropes",
    name: "Braided Lowering Ropes",
    scenes: "Scenes 6, 7",
    materials: "Thick four-strand braided natural hemp/flax rope, 1.5 inches in diameter.",
    dimensionsVisuals: "Features heavy tied eye-loops and wooden footholds every 2 feet. Weathered tan color with fibrous stray strands.",
    historicalContext: "Heavy imperial construction and pit-rigging ropes.",
    continuityRules: "Visible dropping from the ceiling hole in Scene 6, ascending, and lowered down again in Scene 7."
  },
  {
    id: "prop_pit_entrance",
    name: "Pit Mouth & Sealing Stone",
    scenes: "Scenes 6, 7",
    materials: "Rough-dressed circular limestone well-curb collar (8 feet diameter) with iron hinge bracket slots; massive disk-shaped limestone sealing stone.",
    dimensionsVisuals: "Collar rises 2 feet above surface ground level. Circular aperture drops 25 feet into vertical dark pit. Stone is 9 feet in diameter, 18 inches thick.",
    historicalContext: "Mesopotamian cistern and royal pit trap construction.",
    continuityRules: "Stone is rolled over the opening in Scene 6; rolled aside by guards in Scene 7."
  }
];

/* =========================================================================
   9. ANIMAL CONTINUITY (ASIATIC LION SPECIFICATION)
   ========================================================================= */
export const ANIMAL_CONTINUITY = {
  species: "Asiatic Lion (Panthera leo persica)",
  anatomicalProfile: {
    size: "Compact, robust, muscular build. 15% smaller than the African lion. Adult male weighs ~175 kg (385 lbs), with dense muscular forequarters and a lower center of gravity.",
    bellyFold: "CRITICAL SPECIES MARKER: Must possess a prominent longitudinal fold of loose skin running along the entire center of the belly. (This anatomical trait strictly distinguishes Asiatic lions from African lions).",
    mane: "Sparse, short, and darker than the body. The mane leaves the round feline ears clearly exposed and visible. A dark reddish-brown to charcoal crest of hair runs along the throat, chest, and along the underside of the belly, rather than blooming into a huge fluffy halo around the head.",
    coatColor: "Tawny sandy-buff pelt with subtle grizzled gray-brown tips. Lighter cream on muzzle and throat. Tail ends in a dense black tufted brush concealing an 8mm horny spur.",
    eyes: "Intense luminous amber-gold irises with circular pupils (not slit pupils). Prominent black tear-line accents extending from medial canthus.",
    facialFeatures: "Heavy, broad muzzle with prominent black whisker pores; pinkish-black textured nose leather; pronounced cheek whiskers."
  },
  behavioralContinuity: {
    approachSpeed: "Slow, measured, hydraulic stalking walk. Shoulder blades roll visibly beneath the skin with each step. Head carried low, parallel to the spine.",
    interaction: "Stops 6 feet from Daniel. No snarling, no bared fangs, no lip curling, no roaring. Head tilts slightly with inquisitive apex-predator focus.",
    restingMechanics: "Transitions smoothly into sternal recumbency: forepaws extend forward, hindquarters tuck underneath, heavy head rests atop the front paws or turns sideways. Deep, slow, rhythmic ribcage breathing.",
    lightingResponse: "In Scene 6 night lighting, eyes produce a natural greenish-gold reflective tapetum lucidum shine when glancing toward the moonlight beam."
  },
  strictNegativeAnimalTraits: [
    "NO African lion giant puffy manes obscuring ears",
    "NO roaring, snarling, or cartoon monster aggression",
    "NO glowing magical yellow or red demon eyes",
    "NO unnatural rapid CGI movements or jerky leaping",
    "NO emaciated, diseased, or starved appearance (these are well-kept royal predators)"
  ]
};

/* =========================================================================
   10. NEGATIVE / FORBIDDEN VISUALS (MASTER CATALOG)
   ========================================================================= */
export const MASTER_NEGATIVE_VISUALS = [
  // Anachronisms & Modernity
  "Modern objects, electrical wires, light switches, modern plumbing, plastic items, modern glassware, wristwatch, modern rings, printed books, bound codices with spines, paper envelopes, metal zippers, synthetic stitching, machine-hemmed edges.",
  // Armor & Medieval Hollywood tropes
  "Medieval European knight armor, plate armor, chainmail coifs, visored bascinets, Roman legionary segmentata, cross motifs, heraldic shields, broadswords, crossbows, fantasy castles with fairy-tale spires, Gothic stone arches, gargoyles, medieval portcullises.",
  // Supernatural & Fantasy Clichés
  "Glowing magical auras, glowing neon angels, wings of light, laser-like light beams, lightning bolts, supernatural fireballs, explosion effects, floating celestial bodies, CGI ghost figures, fantasy smoke wisps, comic-book divine halos.",
  // AI & Anatomy Defects
  "Distorted hands, extra fingers, fused thumbs, missing digits, mutated anatomy, duplicated people in background, malformed eyes, asymmetric pupils, floating jewelry, clothes clipping through limbs, unnatural skin smoothing/wax doll textures, blurry facial features.",
  // Costume & Continuity Violations
  "Inconsistent character age, changing hairstyles mid-scene, changing beard shapes, Daniel wearing golden royal robes, Darius wearing battle armor in court, modern makeup, mascara, lipstick, modern hair gel, shaved modern tapers/fades.",
  // Environment & Animal Defects
  "African lion full fluffy mane hiding ears, roaring CGI monster lion, lions with wolf anatomy, impossible shadows, multiple conflicting light directions, visible digital noise, watermarks, subtitles, text overlays, floating props."
];

/* =========================================================================
   11. FLOW PROMPT SYSTEM & SCENE 5 EXAMPLE
   ========================================================================= */
export const FLOW_PROMPT_TEMPLATE = `[FLOW PROMPT TEMPLATE - DANIEL: THE NIGHT OF THE LIONS]

CHARACTER REFERENCES:
- [Character 1 Name]: [Locked physical description, age, beard/hair, specific costume, exact colorway]
- [Character 2 Name]: [Locked physical description, age, beard/hair, specific costume, exact colorway]

LOCATION REFERENCE:
- [Location Name]: [Specific architectural style, materials, lighting sources, time of day, atmosphere]

SCENE:
- Scene [X]: [Scene Title] — Screenplay canonical action

ACTION:
- [Precise physical action, character blocking, spatial distance, gestures]

DIALOGUE:
- [Character]: "[Dialogue line from screenplay]" (if visual lip-sync required)

EMOTION:
- [Emotional baseline and visible micro-expressions without melodramatic exaggeration]

CAMERA:
- [Aspect ratio: 2.39:1 Anamorphic, focal length, shot size (Wide/Medium/Close-up), angle, movement speed]

LIGHTING:
- [Key light color temperature and source, fill ratio, shadow depth, practical flame/moonlight]

ENVIRONMENT:
- [Atmospheric details: dust motes, incense haze, floor reflections, texture resolution]

CONTINUITY REQUIREMENTS:
- [Strict costume locks, prop locks, hair/beard rules, spatial geometry]

NEGATIVE REQUIREMENTS:
- [Forbidden visual elements, anachronisms, CGI fantasy clichés, AI defects]`;

export const SCENE_5_COMPLETED_PROMPT: FlowPrompt = {
  characterReferences: `DANIEL: 82-year-old Judean elder, lean erect frame, weathered olive skin, prominent aquiline nose, center-parted wavy silver-white hair to shoulders, full silver-white beard with dark flecks to mid-chest. Wearing unbleached ecru linen tunic and slate-indigo coarse wool mantle draped over left shoulder with narrow madder-red embroidered hem. Tarnished bronze signet ring on right index finger. Hands unbound, calm stillness.
DARIUS: 63-year-old Persian monarch, broad-shouldered, square-jawed, hazel-amber eyes with dark exhaustion circles, crimped squared Achaemenid royal beard with horizontal waves. Wearing imperial Tyrian purple pleated candys robe over saffron-gold wild silk under-tunic with gold rosette border. Solid gold ram-head torque at throat, carnelian cylinder seal on right wrist cord. Cidaris tiara sitting slightly askew on head.`,
  locationReference: `Achaemenid Persian Royal Court (Apadana throne room), late 6th century BCE. Monumental limestone columns with double-bull capitals in background, glazed polychrome turquoise-and-yellow brick relief walls of spearmen, polished dark bituminous limestone floor reflecting warm flame light.`,
  scene: `Scene 5: Daniel Before the King (Evening / Night interior)`,
  action: `Daniel stands unbound in center frame, dignified and motionless. King Darius has stepped down from the elevated dais and stands within three feet of Daniel, looking directly at him with profound sorrow and torment. Darius looks away in helplessness when asking 'Why?', then Daniel responds with calm conviction, meeting the king's eyes directly.`,
  dialogue: `DARIUS: "Why?" / DANIEL: "Because the decree changed what I was permitted to say. It did not change who God is."`,
  emotion: `Darius: Trapped agony, deep personal grief, regal helplessness, heavy guilt. Daniel: Immovable serenity, moral gravity, compassionate eye contact without anger, fear, or defiance.`,
  camera: `2.39:1 Anamorphic widescreen, 50mm vintage anamorphic lens, T2.8 aperture. Eye-level two-shot with shallow depth of field, slow imperceptible 5-second creeping push toward Daniel's steadfast face. Subtle anamorphic oval bokeh on distant bronze braziers.`,
  lighting: `High-contrast chiaroscuro (Key:Fill 6:1). Warm 2200K amber firelight from a standing bronze brazier on camera-left casting warm Rembrandt lighting on Daniel's face and creating rich copper highlights on Darius's purple robes; deep cool 6500K umber shadows in the expansive hall background.`,
  environment: `Thin strata of aromatic cedar and frankincense smoke drifting lazily through the upper frame; polished dark stone floor mirrors the flickering flame practicals; fine weave texture visible in wool mantles.`,
  continuityRequirements: `Daniel MUST NOT be bound in ropes or chains. No guards standing between Daniel and Darius. Darius's beard must be squared and crimped (not pointed). Daniel's mantle must remain slate-indigo over left shoulder. No European crowns or Gothic architecture.`,
  negativeRequirements: `No medieval armor, no chains, no bloody marks, no shouting or exaggerated melodrama, no glowing halos, no neon lighting, no modern clothing, no distorted hands or extra fingers, no blurry faces, no plastic textures, no paper scrolls.`
};

/* =========================================================================
   12. MASTER CONTINUITY LOCK (IMMUTABLE GENERATION RULE)
   ========================================================================= */
export const MASTER_CONTINUITY_LOCK = `[MASTER CONTINUITY LOCK — DANIEL: THE NIGHT OF THE LIONS]
PROJECT: Daniel 6 Cinematic Live-Action Production Bible
SETTING: Achaemenid Persian Empire / Babylon, c. 539 BCE
ASPECT RATIO: 2.39:1 Anamorphic Widescreen | FILM STOCK: 35mm Kodak Vision3 emulation

LOCKED CHARACTER RULES:
1. DANIEL: 80–84yo Judean elder statesman, silver-white center-parted hair, mid-chest silver-white beard with dark flecks, weathered olive skin, peaceful unblinking eyes. Wears ecru linen tunic + slate-indigo wool mantle over left shoulder + oxblood sandals + bronze ring. NO purple, NO gold chains, NO panic.
2. DARIUS: 62–65yo Persian king, square jaw, crimped squared royal beard, tired amber eyes. Wears Tyrian purple pleated candys robe + saffron silk + gold ram torque + carnelian cylinder seal on right wrist. NO battle armor, NO European pointed crown.
3. OFFICIALS: Official 1 in rust-crimson robe + white fluted felt tiara + pointed spade beard; Official 2 in slate-gray Median coat + rounded bashlyk cap.
4. GUARDS: Crimson tunics + iron scale cuirass + 6-foot spear with silver apple pommel + yellow felt cap. NO medieval plate armor.
5. LIONS: Authentic Asiatic lions (Panthera leo persica) with longitudinal belly skin fold, sparse dark mane exposing ears, amber eyes. Calm predatory dignity; NO roaring, NO cartoon monster jaws, NO glowing demon eyes.

LOCKED VISUAL RULES:
- ARCHITECTURE: Monumental Persian Apadana (double-bull capitals, glazed turquoise archer bricks) & modest whitewashed mudbrick upper chamber.
- LIGHTING: 100% physically motivated natural light (golden hour, 2200K brazier fire, 5600K silver moonlight shaft).
- SUPERNATURAL RESTRAINT: STRICTLY NO glowing angels, floating spirits, magic rays, or lightning. Miracle is expressed purely through moral stillness and the lion lying peacefully on the sand.
- SCREENPLAY SUPREMACY: 7 scenes only. No invented dialogue, no additional characters, no altered story beats.`;
