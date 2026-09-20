import { FlowPrompt } from '../types';

export const ALL_SCENE_PROMPTS: Record<number, { wide: FlowPrompt; medium: FlowPrompt; closeUp: FlowPrompt }> = {
  1: {
    wide: {
      characterReferences: "King Darius on throne (Tyrian purple pleated candys, gold ram torque, squared crimped beard); Daniel in background among administrators (slate-indigo mantle over ecru linen, silver-white hair and beard); Official 1 in foreground (rust-crimson robe, white fluted tiara).",
      locationReference: "Grand Persian Apadana (Royal Throne Room), colossal 40-foot limestone columns with double-bull capitals, glazed turquoise-and-yellow brick relief walls of spearmen, polished dark bituminous floor.",
      scene: "Scene 1: The Decree (Day) - Wide Establishing Shot",
      action: "Officials gather before the elevated three-tiered dais. King Darius sits upon the carved cedar-and-gold throne as Official 1 steps forward holding a baked clay decree tablet.",
      dialogue: "OFFICIAL: 'My king, let a decree be established throughout the kingdom.'",
      emotion: "Imperial grandeur, bureaucratic solemnity, quiet court tension.",
      camera: "2.39:1 Anamorphic, 35mm wide lens, low-angle looking toward elevated throne, slow stabilized dolly in.",
      lighting: "Soft natural Persian sunlight streaming from high clerestory windows in sharp diagonal dust-mote shafts.",
      environment: "Incense haze drifting under colossal cedar ceiling beams; polished floor reflections.",
      continuityRequirements: "Official carries clay cuneiform tablet (NOT parchment scroll). Darius wears cidaris tiara. Daniel is visible in right-midground standing motionless.",
      negativeRequirements: "No medieval European throne, no paper scrolls, no Gothic arches, no modern clothing, no blurry faces."
    },
    medium: {
      characterReferences: "King Darius seated close, holding carnelian cylinder seal; Official 1 bowing with false deference, holding out clay tablet.",
      locationReference: "Persian Apadana, throne dais with bronze incense burners and heavy woven wool carpet.",
      scene: "Scene 1: The Decree (Day) - Medium Two-Shot",
      action: "Darius studies the clay tablet, raises his right hand, and presses his carnelian cylinder seal into the clay collar. Official 1 watches with subtle, hidden satisfaction.",
      dialogue: "DARIUS: 'Let it be written.'",
      emotion: "Darius: sovereign administrative certainty. Official 1: calculated triumph masked by humility.",
      camera: "2.39:1 Anamorphic, 50mm prime lens, eye-level over-the-shoulder framing on Darius's hands pressing the seal.",
      lighting: "Directional daylight with 3:1 contrast ratio; specular highlights on gold ram torque and carnelian stone.",
      environment: "Fine dust motes; delicate smoke rising from bronze incense burner.",
      continuityRequirements: "Carnelian cylinder seal tied to Darius's right wrist. Square crimped beard.",
      negativeRequirements: "No molten red wax, no metal quill pens, no distorted fingers, no plastic sheen."
    },
    closeUp: {
      characterReferences: "Daniel: 82-year-old Judean statesman, prominent aquiline nose, center-parted silver-white hair, full silver-white beard with slate flecks, dark piercing eyes.",
      locationReference: "Persian Apadana court, soft blurred background of glazed tile archers.",
      scene: "Scene 1: The Decree (Day) - Intimate Close-Up",
      action: "Daniel listens to the king's pronouncement. He remains completely still, but his dark eyes shift slightly and his jaw tightens subtly as he absorbs the mortal danger.",
      dialogue: "None (Silent character turn).",
      emotion: "Subtle profound realization; interior gravity; resolute tranquility replacing surprise.",
      camera: "2.39:1 Anamorphic, 85mm portrait prime lens, shallow depth of field (T2.0), crystalline focus on Daniel's eyes.",
      lighting: "Soft wrap-around clerestory daylight with natural catchlights in irises.",
      environment: "Subtle atmospheric haze.",
      continuityRequirements: "Silver-white beard to mid-chest. Weathered crow's feet. Ecru tunic collar visible. Slate-indigo mantle on left shoulder.",
      negativeRequirements: "No open-mouthed panic, no shouting, no tears, no modern facial grooming."
    }
  },
  2: {
    wide: {
      characterReferences: "Daniel (solo): 82-year-old elder, wearing unbleached ecru linen tunic and slate-indigo mantle.",
      locationReference: "Daniel's Upper Chamber (Aliyah), whitewashed mudbrick walls, exposed cedar roof beams, large open arched stone window facing west-southwest.",
      scene: "Scene 2: Daniel Prays (Late Afternoon) - Wide Room View",
      action: "Daniel enters his peaceful private room, walks steadily toward the open window, and approaches the woven reed rush mat on the sandstone floor.",
      dialogue: "None.",
      emotion: "Quiet resolve, monastic simplicity, complete absence of panic.",
      camera: "2.39:1 Anamorphic, 35mm lens, static lock-off capturing room geometry and the distant Babylonian horizon through the open window.",
      lighting: "Late afternoon golden-hour sunlight pouring horizontally through the open window, painting amber rectangles on the whitewashed wall.",
      environment: "Gentle breeze stirring coarse linen curtain tied with hemp cord; golden dust motes.",
      continuityRequirements: "Window unglazed with open stone sill; reed prayer mat aligned with window.",
      negativeRequirements: "No glass panes, no curtains with tassels, no medieval cruciforms, no computers or modern furniture."
    },
    medium: {
      characterReferences: "Daniel: silver-white hair, silver-white beard, slate-indigo mantle draped over both shoulders as he kneels.",
      locationReference: "Daniel's Upper Chamber, before the open arched stone window.",
      scene: "Scene 2: Daniel Prays (Late Afternoon) - Medium Kneeling Shot",
      action: "Daniel lowers himself smoothly onto his knees on the woven rush mat. He rests his hands upon the stone sill and lifts his face toward the distant horizon.",
      dialogue: "DANIEL: 'God of my fathers... You have carried me through kingdoms that have fallen.'",
      emotion: "Profound reverence, intimate communion, unshakeable bedrock conviction.",
      camera: "2.39:1 Anamorphic, 50mm lens, slow 5-second dolly push-in toward Daniel's profile.",
      lighting: "Warm 3200K golden sunlight illuminating his face and silver beard; soft bounce fill on front.",
      environment: "Distant date palm treetops and flat mudbrick roofs visible in soft focus outside.",
      continuityRequirements: "Sandals visible beside mat; tarnished bronze ring on index finger.",
      negativeRequirements: "No glowing aura, no angels, no modern watches, no distorted hand gestures."
    },
    closeUp: {
      characterReferences: "Daniel: close-up on weathered profile, dark unblinking eyes gazing into distance, silver mustache and beard catching golden light.",
      locationReference: "Window frame in Daniel's room, warm textured lime plaster.",
      scene: "Scene 2: Daniel Prays (Late Afternoon) - Tight Portrait",
      action: "Daniel looks toward the distant horizon. He speaks with quiet defiance against the decree, then gently bows his head into reverent stillness.",
      dialogue: "DANIEL: 'I will not close my mouth now.'",
      emotion: "Moral fortitude, immovable serenity, serene submission to his Creator.",
      camera: "2.39:1 Anamorphic, 100mm lens, macro-close framing on eyes and silver brow.",
      lighting: "Golden-hour rim light on silver hair; warm skin tones.",
      environment: "Fine airborne dust particles illuminated by sunlight beam.",
      continuityRequirements: "Beard silver-white with iron-gray flecks; realistic skin pores and wrinkles.",
      negativeRequirements: "No tears of fear, no melodramatic trembling, no CGI light streaks."
    }
  },
  3: {
    wide: {
      characterReferences: "Foreground: Official 1 (rust-crimson robe, white tiara) and Official 2 (slate-gray coat, rounded bashlyk). Background: Daniel kneeling at window.",
      locationReference: "Dark corridor leading to Daniel's sunlit upper chamber; frame-within-a-frame composition.",
      scene: "Scene 3: Discovered (Late Afternoon) - Hallway Depth Shot",
      action: "The two officials quietly glide into the shadowed hallway archway, peering into the sun-drenched room where Daniel remains oblivious in prayer.",
      dialogue: "None.",
      emotion: "Stealth, predatory surveillance in shadow versus tranquil innocence in light.",
      camera: "2.39:1 Anamorphic, 40mm lens, deep focus establishing both hallway conspirators and the distant praying prophet.",
      lighting: "Deep hallway shadow (cool 6500K ambient) contrasting with the brilliant 3200K amber room.",
      environment: "Subtle texture of hand-hewn mudbrick doorframe.",
      continuityRequirements: "Daniel in exact position and clothing from Scene 2; Official 1 in white court tiara.",
      negativeRequirements: "No cartoon sneaking, no flashlights, no medieval lanterns."
    },
    medium: {
      characterReferences: "Official 1 (sharp hawk-like nose, thin smiling lips) and Official 2 (stocky, thick unibrow, dark eyes).",
      locationReference: "Shadowed doorframe of Daniel's residence.",
      scene: "Scene 3: Discovered (Late Afternoon) - Conspirators Two-Shot",
      action: "Official 1 looks inside, sees Daniel, and turns his head toward Official 2. They exchange a knowing, chilling glance of legal trap closure.",
      dialogue: "OFFICIAL 1: 'There.'",
      emotion: "Cold bureaucratic satisfaction, malice disguised as imperial duty.",
      camera: "2.39:1 Anamorphic, 65mm lens, shallow depth of field focusing on the two faces whispering.",
      lighting: "Subtle rim light from the room doorway glancing off Official 1's sallow cheekbone.",
      environment: "Dark corridor plaster walls.",
      continuityRequirements: "Official 1's tapered ringlet spade beard; Official 2's curly rounded beard.",
      negativeRequirements: "No overt villain cackles, no modern suits, no guns."
    },
    closeUp: {
      characterReferences: "Daniel seen from doorway angle, back partially turned, head bowed in deep communion with God.",
      locationReference: "Sunlit room interior with empty doorway background.",
      scene: "Scene 3: Discovered (Late Afternoon) - Daniel Oblivious",
      action: "As the two men silently withdraw, the doorway empties. Daniel remains entirely still, his prayer unbroken, unaware of the trap that has just sprung.",
      dialogue: "None.",
      emotion: "Unshakable devotion, divine peace untouched by human malice.",
      camera: "2.39:1 Anamorphic, 75mm lens, hold static on Daniel as shadows shift.",
      lighting: "Late sunset orange glow warming the whitewashed wall.",
      environment: "Quiet room; linen curtain drifting softly.",
      continuityRequirements: "Identical mantle drape; reed prayer mat.",
      negativeRequirements: "No dramatic stingers or sudden jump cuts."
    }
  },
  4: {
    wide: {
      characterReferences: "King Darius seated on elevated cedar throne; Official 1 standing at the base of the dais.",
      locationReference: "Persian Apadana (Throne Room) at dusk, twin standing bronze braziers burning with live coals.",
      scene: "Scene 4: The Trap (Evening) - Wide Throne Hall",
      action: "Official 1 approaches the throne across the dark polished limestone floor. Darius listens from his throne as the satrap delivers his calculated legal trap.",
      dialogue: "OFFICIAL: 'O king, did you not sign a decree...?' / DARIUS: 'The decree stands.'",
      emotion: "Cold prosecutorial menace meeting sovereign confidence, pivoting to impending disaster.",
      camera: "2.39:1 Anamorphic, 35mm lens, low angle looking up at the majestic throne flanked by fluted columns.",
      lighting: "Chiaroscuro evening: twin 2200K amber braziers lighting the dais against deep navy twilight in the hall.",
      environment: "Frankincense smoke curls rising from braziers; torchlight flickering on glazed archer reliefs.",
      continuityRequirements: "Darius wears Tyrian purple candys; Official 1 in rust-crimson.",
      negativeRequirements: "No paper documents, no European court dress, no modern lanterns."
    },
    medium: {
      characterReferences: "King Darius rising abruptly; Official 1 standing smugly with head bowed.",
      locationReference: "Apadana throne dais.",
      scene: "Scene 4: The Trap (Evening) - Medium King's Reaction",
      action: "Official 1 delivers the blow: 'Daniel has broken it.' Darius's eyes widen, his breath catches, and he abruptly rises from his throne in total shock.",
      dialogue: "DARIUS: 'Daniel?' / OFFICIAL: 'The same Daniel who serves among your governors.' / DARIUS: 'Bring him to me.'",
      emotion: "Sudden sickening betrayal, royal horror, panic masked by royal fury.",
      camera: "2.39:1 Anamorphic, 50mm lens, rapid creeping push-in as Darius stands to full height.",
      lighting: "Firelight playing across Darius's crimped beard and heavy furrowed brow.",
      environment: "Braziers flaring slightly with sudden movement.",
      continuityRequirements: "Gold ram torque around neck; carnelian seal on wrist.",
      negativeRequirements: "No shouting tantrum; dignity collapsing into profound dread."
    },
    closeUp: {
      characterReferences: "King Darius: tight framing on wide, horrified hazel-amber eyes and clenched jaw.",
      locationReference: "Apadana throne background blurred into warm bokeh.",
      scene: "Scene 4: The Trap (Evening) - Darius's Realization",
      action: "Darius realizes the entire decree was conceived specifically to kill his trusted friend. His face drains of color; deep worry creases etch his forehead.",
      dialogue: "DARIUS: 'Daniel?'",
      emotion: "Trapped sovereign, acute guilt, sudden despair.",
      camera: "2.39:1 Anamorphic, 85mm lens, shallow focus, trembling micro-movements.",
      lighting: "Harsh single-source firelight from brazier creating deep shadows in eye sockets.",
      environment: "Smoke drifting behind him.",
      continuityRequirements: "Horizontal waves in squared beard; gold cidaris tiara.",
      negativeRequirements: "No cartoon tears, no exaggerated grimaces."
    }
  },
  5: {
    wide: {
      characterReferences: "Daniel standing center frame, unbound. King Darius stepped down from dais, standing before him. Guards motionless in far background.",
      locationReference: "Persian Apadana hall at night, illuminated by a single large bronze fire brazier.",
      scene: "Scene 5: Daniel Before the King (Night) - Two-Shot Master",
      action: "The king and his senior governor stand on equal footing in the vast empty hall. The physical distance between them is intimate, weighed down by unspoken doom.",
      dialogue: "DARIUS: 'Daniel... Is it true?' / DANIEL: 'Yes, my king.'",
      emotion: "Tragic inevitability, profound mutual respect, moral gravity.",
      camera: "2.39:1 Anamorphic, 40mm lens, static composed two-shot framing both figures in profile against the monumental stone pillars.",
      lighting: "Moody 2200K amber firelight from brazier on left; deep charcoal shadows surrounding them.",
      environment: "Thin strata of incense smoke; stone reflections.",
      continuityRequirements: "Daniel is NOT bound. Darius is close to him. No guards intervening.",
      negativeRequirements: "No chains, no ropes, no shouting, no medieval weapons."
    },
    medium: {
      characterReferences: "King Darius looking away in torment; Daniel looking steadily and compassionately at him.",
      locationReference: "Apadana hall interior, bronze brazier glowing softly.",
      scene: "Scene 5: Daniel Before the King (Night) - Medium Confrontation",
      action: "Darius turns his head aside, unable to maintain eye contact, whispering 'Why?'. Daniel pauses, then answers with unshakable clarity.",
      dialogue: "DANIEL: 'Because the decree changed what I was permitted to say. It did not change who God is.'",
      emotion: "Darius: profound shame and grief. Daniel: unyielding truth delivered with deep compassion.",
      camera: "2.39:1 Anamorphic, 50mm lens, slow track across their eyelines.",
      lighting: "Warm Rembrandt lighting on Daniel's cheek; Darius half-veiled in shadow.",
      environment: "Soft crackle of live coals in brazier.",
      continuityRequirements: "Daniel's slate-indigo mantle; Darius's Tyrian purple robe with unfastened collar.",
      negativeRequirements: "No theatrical defiance, no sneering, no violence."
    },
    closeUp: {
      characterReferences: "Daniel: 82-year-old face, steady dark eyes, silver-white beard illuminated by amber firelight.",
      locationReference: "Dark Apadana background.",
      scene: "Scene 5: Daniel Before the King (Night) - Daniel's Declaration",
      action: "Daniel delivers the pivotal declaration. His lips are calm, his gaze unwavering. A profound silence hangs in the air as Darius has no answer.",
      dialogue: "DANIEL: 'It did not change who God is.'",
      emotion: "Eternal certainty, transcendence of earthly authority, serene peace.",
      camera: "2.39:1 Anamorphic, 85mm lens, rock-solid locked frame on Daniel's serene eyes.",
      lighting: "Warm, luminous amber firelight modeling his facial structure; pure crystalline catchlights.",
      environment: "Total visual stillness.",
      continuityRequirements: "Silver-white beard with slate flecks; calm facial muscles.",
      negativeRequirements: "No glowing eyes, no halo, no artificial CGI sparkle."
    }
  },
  6: {
    wide: {
      characterReferences: "Daniel standing on pit floor; large Asiatic lion (Panthera leo persica) emerging from dark stone alcove; two other lion shapes in deep background shadow.",
      locationReference: "The Lions' Den (subterranean circular limestone pit, 25 ft deep, 30 ft wide). Overhead 8-foot circular opening framing dark night sky.",
      scene: "Scene 6: The Lions' Den (Night) - Master Pit View",
      action: "Daniel is lowered into the pit; the rope disappears upward. Daniel turns to face the darkness as the primary lion stalks forward into the moonlight.",
      dialogue: "None.",
      emotion: "Lethal danger, claustrophobic dread transitioning into supernatural stillness.",
      camera: "2.39:1 Anamorphic, 35mm lens, wide angle capturing the towering chisel-scarred limestone walls and the pool of silver moonlight.",
      lighting: "Hard vertical shaft of 5600K silver moonlight penetrating from overhead opening; deep 0.5 foot-candle charcoal shadows.",
      environment: "Cold condensation glistening on stone walls; dry bones scattered on sand floor.",
      continuityRequirements: "Asiatic lion with sparse dark mane, exposed ears, and longitudinal belly fold. No torches.",
      negativeRequirements: "No glowing angels, no CGI forcefields, no lion roaring with open monster jaws."
    },
    medium: {
      characterReferences: "Daniel slowly lowering to his knees; Asiatic lion stopping 6 feet away, watching with amber feline eyes.",
      locationReference: "Center clearing of the limestone lions' den.",
      scene: "Scene 6: The Lions' Den (Night) - Encounter & Kneeling",
      action: "The lion halts. Daniel slowly, without sudden motion, lowers himself to his knees on the sand. He speaks his prayer softly. The lion blinks, watches, and slowly sinks to the sand.",
      dialogue: "DANIEL: 'God of my fathers...'",
      emotion: "Absolute spiritual surrender; predatory instinct yielding to supernatural peace.",
      camera: "2.39:1 Anamorphic, 50mm lens, slow 8-second creeping push-in on the shared space between prophet and predator.",
      lighting: "Moonlight rimming Daniel's silver hair and the lion's muscular shoulders.",
      environment: "Visible cold breath condensation from Daniel and the lion in the night chill.",
      continuityRequirements: "Lion lies down in natural sternal recumbency (paws folded forward). Daniel closes eyes.",
      negativeRequirements: "No cartoon petting, no smiling lion, no supernatural beam of light."
    },
    closeUp: {
      characterReferences: "Split visual emphasis: Daniel's closed eyes and peaceful face / The massive lion resting its heavy chin on front paws, amber eyes watching peacefully.",
      locationReference: "Dark stone and sand floor.",
      scene: "Scene 6: The Lions' Den (Night) - The Peace Hold",
      action: "Hold on Daniel praying in the darkness. The lion rests beside him in complete stillness. No sound, no violence, no spectacle. Just silence. Cut to black.",
      dialogue: "None (Profound silence).",
      emotion: "Miraculous peace, divine restraint, sacred awe.",
      camera: "2.39:1 Anamorphic, 75mm lens, locked-off static hold for 10 full seconds.",
      lighting: "Soft ambient silver moonlight bounce; subtle green-gold tapetum glow in lion's eyes.",
      environment: "Rhythmic rise and fall of lion's ribcage; gentle sand grains.",
      continuityRequirements: "Stone dust on Daniel's tunic hem; lion's ears exposed through dark mane.",
      negativeRequirements: "No angel apparition, no divine light show, no explosions, no roaring."
    }
  },
  7: {
    wide: {
      characterReferences: "Surface: King Darius running frantically to pit opening; Persian guards with lowering ropes. Pit: Daniel standing below in rising dawn light.",
      locationReference: "Upper mouth of the Lions' Den at sunrise; rough limestone curb and rolled-aside sealing stone.",
      scene: "Scene 7: Morning (Dawn) - Pit Aperture Wide",
      action: "King Darius rushes on foot to the den opening at first light. He looks completely exhausted and frantic as he leans dangerously over the stone edge.",
      dialogue: "DARIUS: 'Daniel! Daniel, servant of the living God! Has your God been able to save you?'",
      emotion: "Sleepless agony, desperate pleading hope, royal decorum completely shattered.",
      camera: "2.39:1 Anamorphic, 35mm lens, dynamic tracking move following Darius running to the pit curb.",
      lighting: "Lavender-pink dawn sky transitioning into golden horizontal sunlight (3800K to 5000K).",
      environment: "Morning ground mist dissipating; cold dawn breeze.",
      continuityRequirements: "Darius has NO crown/tiara; hair disheveled; robes rumpled. Circular stone rolled back.",
      negativeRequirements: "No smiling Darius until Daniel speaks, no medieval soldiers."
    },
    medium: {
      characterReferences: "Darius frozen in shock and weeping relief above / Daniel looking up from below with serene smile.",
      locationReference: "Vertical perspective through the circular limestone opening.",
      scene: "Scene 7: Morning (Dawn) - Deliverance Revealed",
      action: "From the depths, Daniel's voice echoes: 'My king, live forever.' Darius freezes in disbelief, overwhelming relief floods his weeping face, and he commands 'Lift him out!'.",
      dialogue: "DANIEL: 'My king, live forever.' / DARIUS: 'Lift him out!'",
      emotion: "Stunned ecstasy, overwhelming tears of joy, restoration of justice.",
      camera: "2.39:1 Anamorphic, 50mm lens, low-angle looking up from pit at Darius against the dawn sky, then reverse looking down at Daniel intact.",
      lighting: "Shaft of morning golden sunlight striking Daniel's face; warm glow filling the pit.",
      environment: "Guards throwing down braided hemp ropes; dust swirling in sunbeam.",
      continuityRequirements: "Daniel has ZERO scratches or blood. Robes intact with only light sand dust.",
      negativeRequirements: "No dead lions, no lion blood, no injuries."
    },
    closeUp: {
      characterReferences: "Daniel: emerging fully from the pit opening into the radiant golden morning light, looking upward toward the heavens.",
      locationReference: "Surface of the pit ground, golden sunrise sky behind him.",
      scene: "Scene 7: Morning (Dawn) - Final Shot",
      action: "FINAL SHOT: Daniel steps out of the pit onto solid ground. The morning light envelops his silver hair and weathered face. He is alive. He looks toward the sky. CUT TO BLACK.",
      dialogue: "None.",
      emotion: "Transcendental victory, vindication of faith, serene majesty.",
      camera: "2.39:1 Anamorphic, 75mm lens, slow tilt-up following Daniel's posture from earth to radiant sky.",
      lighting: "Brilliant, warm 5000K sunrise backlighting creating natural golden lens flare across anamorphic glass.",
      environment: "Golden dawn atmosphere, clean crisp morning air.",
      continuityRequirements: "Final frame of the film; matches Scene 1 beard, hair, and character identity perfectly.",
      negativeRequirements: "No credits overlay, no digital sparks, no wings, no CGI rays."
    }
  }
};
