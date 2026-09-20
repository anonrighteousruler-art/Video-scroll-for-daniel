import React, { useState } from 'react';
import {
  FILM_METADATA,
  CHARACTER_LOCKS,
  COSTUME_CONTINUITY,
  LOCATION_LOCKS,
  HISTORICAL_VISUAL_LANGUAGE,
  CINEMATOGRAPHY_BIBLE,
  SCENE_CONTINUITY_MATRIX,
  CHARACTER_RELATIONSHIPS,
  PROP_CONTINUITY,
  ANIMAL_CONTINUITY,
  MASTER_NEGATIVE_VISUALS,
  FLOW_PROMPT_TEMPLATE,
  SCENE_5_COMPLETED_PROMPT,
  MASTER_CONTINUITY_LOCK
} from '../data/productionBibleData';
import { Copy, Check, Download, BookOpen, FileText } from 'lucide-react';

export const FullDocumentExportView: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Generate full comprehensive Markdown text
  const generateMarkdownBible = () => {
    return `# PRODUCTION BIBLE: ${FILM_METADATA.title}
**Project:** Short Cinematic Biblical Film (~3 Minutes, 7 Scenes)  
**Setting:** ${FILM_METADATA.historicalSetting}  
**Format:** ${FILM_METADATA.format} | **Aspect Ratio:** ${FILM_METADATA.aspectRatio}  
**Engine:** ${FILM_METADATA.targetGenerators}  

---

## 1. CHARACTER LOCKS

${CHARACTER_LOCKS.map(
  (c) => `### [CHARACTER LOCK: ${c.name}]
- **Role:** ${c.role}
- **Approximate Age:** ${c.age}
- **Sex:** ${c.sex}
- **Physical Build:** ${c.physicalBuild}
- **Height / Proportions:** ${c.heightProportions}
- **Complexion:** ${c.complexion}
- **Face Shape:** ${c.faceShape}
- **Eyes:** ${c.eyes}
- **Nose:** ${c.nose}
- **Mouth:** ${c.mouth}
- **Hair:** ${c.hair}
- **Beard / Facial Hair:** ${c.beardFacialHair}
- **Distinguishing Facial Features:** ${c.distinguishingFeatures}
- **Clothing:** ${c.clothing}
- **Clothing Colors:** ${c.clothingColors}
- **Fabrics & Materials:** ${c.fabricsMaterials}
- **Footwear:** ${c.footwear}
- **Jewelry & Accessories:** ${c.jewelryAccessories}
- **Props:** ${c.props}
- **Posture:** ${c.posture}
- **Normal Emotional Baseline:** ${c.emotionalBaseline}
- **Voice Characteristics:** ${c.voiceCharacteristics}
- **Historical-Cultural Appearance:** ${c.historicalCulturalAppearance}
- **Continuity-Critical Attributes:**
${c.continuityCriticalAttributes.map((a) => `  * ${a}`).join('\n')}
${c.productionNotes ? `- **Production Note:** ${c.productionNotes}` : ''}
`
).join('\n')}

---

## 2. COSTUME CONTINUITY

${COSTUME_CONTINUITY.map(
  (costume) => `### COSTUME SHEET: ${costume.characterName} (Scenes: ${costume.scenesPresent})
- **Base Garments:** ${costume.baseGarments}
- **Outer Garments:** ${costume.outerGarments}
- **Belts & Fasteners:** ${costume.belts}
- **Footwear:** ${costume.footwear}
- **Jewelry:** ${costume.jewelry}
- **Crowns / Headwear:** ${costume.crownsHeadwear}
- **Colors:** ${costume.colors}
- **Materials:** ${costume.materials}
- **Wear & Dirt State Progression:** ${costume.wearDirtState}
- **Permitted Changes:**
${costume.permittedChanges.map((p) => `  * ${p}`).join('\n')}
- **Forbidden Changes:**
${costume.forbiddenChanges.map((f) => `  * ${f}`).join('\n')}
`
).join('\n')}

---

## 3. LOCATION LOCKS

${LOCATION_LOCKS.map(
  (loc) => `### LOCATION LOCK: ${loc.name}
- **Scenes Appeared:** ${loc.scenesAppeared}
- **Historical Period:** ${loc.historicalPeriod}
- **Architecture:** ${loc.architecture}
- **Construction Materials:** ${loc.constructionMaterials}
- **Floor:** ${loc.floor}
- **Walls:** ${loc.walls}
- **Ceiling:** ${loc.ceiling}
- **Windows:** ${loc.windows}
- **Doors:** ${loc.doors}
- **Furniture:** ${loc.furniture}
- **Lighting Philosophy:** ${loc.lighting}
- **Textiles:** ${loc.textiles}
- **Colors:** ${loc.colors}
- **Props:** ${loc.props}
- **Environmental Details:** ${loc.environmentalDetails}
- **Atmosphere:** ${loc.atmosphere}
- **Recurring Visual Landmarks:**
${loc.recurringVisualLandmarks.map((l) => `  * ${l}`).join('\n')}
- **Forbidden Elements (Must NOT Appear):**
${loc.mustNotAppear.map((m) => `  * ${m}`).join('\n')}
`
).join('\n')}

---

## 4. HISTORICAL VISUAL LANGUAGE

- **Historical Period:** ${HISTORICAL_VISUAL_LANGUAGE.historicalPeriod}
- **Architectural Style:** ${HISTORICAL_VISUAL_LANGUAGE.architecturalStyle}
- **Clothing Philosophy:** ${HISTORICAL_VISUAL_LANGUAGE.clothingPhilosophy}
- **Approved Materials:** ${HISTORICAL_VISUAL_LANGUAGE.materials}
- **Weaponry:** ${HISTORICAL_VISUAL_LANGUAGE.weapons}
- **Furnishings:** ${HISTORICAL_VISUAL_LANGUAGE.furnishings}
- **Lighting Philosophy:** ${HISTORICAL_VISUAL_LANGUAGE.lightingPhilosophy}
- **Camera Realism:** ${HISTORICAL_VISUAL_LANGUAGE.cameraRealism}
- **Environmental Realism:** ${HISTORICAL_VISUAL_LANGUAGE.environmentalRealism}
- **Historiographical Safeguards:** ${HISTORICAL_VISUAL_LANGUAGE.anachronismSafeguards}

### Color Palette:
${HISTORICAL_VISUAL_LANGUAGE.colorPalette
  .map((col) => `- **${col.name}** (${col.hex}): ${col.use}`)
  .join('\n')}

---

## 5. CINEMATOGRAPHY BIBLE

- **Aspect Ratio:** ${CINEMATOGRAPHY_BIBLE.aspectRatio}
- **Lens Philosophy:** ${CINEMATOGRAPHY_BIBLE.lensPhilosophy}
- **Focal Lengths:**
  * Wide: ${CINEMATOGRAPHY_BIBLE.focalLengths.wide}
  * Medium: ${CINEMATOGRAPHY_BIBLE.focalLengths.medium}
  * Close-Up: ${CINEMATOGRAPHY_BIBLE.focalLengths.closeUp}
- **Camera Movement & Rigging:** ${CINEMATOGRAPHY_BIBLE.cameraMovement}
- **Depth of Field:** ${CINEMATOGRAPHY_BIBLE.depthOfField}
- **Lighting Ratios:**
  * Court (Day): ${CINEMATOGRAPHY_BIBLE.lightingRatios.courtDay}
  * Daniel's Room (Afternoon): ${CINEMATOGRAPHY_BIBLE.lightingRatios.roomLateAfternoon}
  * Court (Evening): ${CINEMATOGRAPHY_BIBLE.lightingRatios.courtEvening}
  * Lions' Den (Night): ${CINEMATOGRAPHY_BIBLE.lightingRatios.lionsDenNight}
  * Lions' Den (Dawn): ${CINEMATOGRAPHY_BIBLE.lightingRatios.lionsDenDawn}
- **Framing Principles:**
${CINEMATOGRAPHY_BIBLE.framingPrinciples.map((fp) => `  * ${fp}`).join('\n')}
- **Film Texture & Grain:** ${CINEMATOGRAPHY_BIBLE.filmTexture}
- **Visual Contrast:** ${CINEMATOGRAPHY_BIBLE.visualContrast}

---

## 6. SCENE-BY-SCENE CONTINUITY MATRIX

| Scene | Location | Time | Characters | Action | Lighting | Camera |
|---|---|---|---|---|---|---|
${SCENE_CONTINUITY_MATRIX.map(
  (s) =>
    `| **${s.sceneNumber}. ${s.title}** | ${s.location} | ${s.timeOfDay} | ${s.characters} | ${s.action} | ${s.lighting} | ${s.cameraRequirements} |`
).join('\n')}

### Detailed Scene Breakdown:
${SCENE_CONTINUITY_MATRIX.map(
  (s) => `
#### SCENE ${s.sceneNumber}: ${s.title} (${s.durationTarget})
- **Location:** ${s.location}
- **Time of Day:** ${s.timeOfDay}
- **Characters:** ${s.characters}
- **Character Appearance:** ${s.characterAppearanceReqs}
- **Costumes:** ${s.costumeRequirements}
- **Props:** ${s.props}
- **Lighting:** ${s.lighting}
- **Emotional State:** ${s.emotionalState}
- **Canonical Action:** ${s.action}
- **Camera Requirements:** ${s.cameraRequirements}
- **Environmental Continuity:** ${s.environmentalContinuity}
- **Critical Visual Risks:** ${s.criticalVisualRisks}
`
).join('\n')}

---

## 7. CHARACTER RELATIONSHIP CONTINUITY

${CHARACTER_RELATIONSHIPS.map(
  (rel) => `### ${rel.pair} (${rel.visualDynamic})
- **Visual Blocking & Eyelines:** ${rel.blockingDetails}
- **Screenplay Subtext:** ${rel.emotionalSubtext}
`
).join('\n')}

---

## 8. PROP CONTINUITY

${PROP_CONTINUITY.map(
  (p) => `### ${p.name} (Scenes: ${p.scenes})
- **Materials:** ${p.materials}
- **Visuals & Dimensions:** ${p.dimensionsVisuals}
- **Historical Context:** ${p.historicalContext}
- **Continuity Rules:** ${p.continuityRules}
`
).join('\n')}

---

## 9. ANIMAL CONTINUITY (ASIATIC LION)

- **Species:** ${ANIMAL_CONTINUITY.species}
- **Size & Build:** ${ANIMAL_CONTINUITY.anatomicalProfile.size}
- **Belly Skin Fold (Species Marker):** ${ANIMAL_CONTINUITY.anatomicalProfile.bellyFold}
- **Mane Structure:** ${ANIMAL_CONTINUITY.anatomicalProfile.mane}
- **Coat & Pelt:** ${ANIMAL_CONTINUITY.anatomicalProfile.coatColor}
- **Eyes & Facial Anatomy:** ${ANIMAL_CONTINUITY.anatomicalProfile.eyes}
- **Behavior & Resting Mechanics:**
  * Approach Pace: ${ANIMAL_CONTINUITY.behavioralContinuity.approachSpeed}
  * Interaction: ${ANIMAL_CONTINUITY.behavioralContinuity.interaction}
  * Resting: ${ANIMAL_CONTINUITY.behavioralContinuity.restingMechanics}
  * Tapetum Reflection: ${ANIMAL_CONTINUITY.behavioralContinuity.lightingResponse}
- **Strict Negative Animal Traits:**
${ANIMAL_CONTINUITY.strictNegativeAnimalTraits.map((t) => `  * ${t}`).join('\n')}

---

## 10. NEGATIVE / FORBIDDEN VISUALS (MASTER CATALOG)

${MASTER_NEGATIVE_VISUALS.map((neg) => `- ${neg}`).join('\n')}

---

## 11. FLOW PROMPT SYSTEM

### Reusable Prompt Template:
\`\`\`
${FLOW_PROMPT_TEMPLATE}
\`\`\`

### Completed Canonical Example (Scene 5: Daniel Before Darius):
- **CHARACTER REFERENCES:** ${SCENE_5_COMPLETED_PROMPT.characterReferences}
- **LOCATION REFERENCE:** ${SCENE_5_COMPLETED_PROMPT.locationReference}
- **SCENE:** ${SCENE_5_COMPLETED_PROMPT.scene}
- **ACTION:** ${SCENE_5_COMPLETED_PROMPT.action}
- **DIALOGUE:** ${SCENE_5_COMPLETED_PROMPT.dialogue}
- **EMOTION:** ${SCENE_5_COMPLETED_PROMPT.emotion}
- **CAMERA:** ${SCENE_5_COMPLETED_PROMPT.camera}
- **LIGHTING:** ${SCENE_5_COMPLETED_PROMPT.lighting}
- **ENVIRONMENT:** ${SCENE_5_COMPLETED_PROMPT.environment}
- **CONTINUITY REQUIREMENTS:** ${SCENE_5_COMPLETED_PROMPT.continuityRequirements}
- **NEGATIVE REQUIREMENTS:** ${SCENE_5_COMPLETED_PROMPT.negativeRequirements}

---

## 12. MASTER CONTINUITY LOCK

\`\`\`
${MASTER_CONTINUITY_LOCK}
\`\`\`
`;
  };

  const handleCopyAll = () => {
    const markdown = generateMarkdownBible();
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const markdown = generateMarkdownBible();
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Daniel_Night_of_the_Lions_Production_Bible.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-[#141720] border border-[#232838] rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono-code uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Complete Unified Document</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-cinzel text-stone-100">
            Full Production Bible Exporter
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-2xl">
            Export the complete, unabridged 12-section continuity bible as a single formatted markdown document or copy it directly for off-platform production binders.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleCopyAll}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-amber-500 text-stone-950 hover:bg-amber-400 flex items-center gap-1.5 transition-all shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-stone-950" />
                <span>Bible Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-stone-950" />
                <span>Copy Full Bible (Markdown)</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownload}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-[#1a1d26] text-stone-200 hover:bg-[#252a3a] border border-[#2b3040] flex items-center gap-1.5 transition-all shadow-sm"
          >
            <Download className="w-4 h-4 text-stone-300" />
            <span>Download .md</span>
          </button>
        </div>
      </div>

      {/* Formatted Viewer */}
      <div className="bg-[#12141c] border border-[#222736] rounded-xl p-5 sm:p-8 shadow-lg">
        <div className="max-w-4xl mx-auto space-y-6 text-stone-300 text-xs sm:text-sm leading-relaxed font-sans">
          <div className="border-b border-[#222736] pb-5">
            <span className="text-xs font-mono-code text-amber-400 uppercase tracking-wider">
              Project Specification Document
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold font-cinzel text-stone-100 mt-1">
              DANIEL — THE NIGHT OF THE LIONS
            </h1>
            <p className="text-stone-400 text-xs sm:text-sm mt-1">
              Complete Visual Continuity & Production-Design System for Google Flow / Veo
            </p>
          </div>

          <div className="bg-[#0e1017] p-4 rounded-lg border border-[#1e2332] font-mono-code text-xs text-stone-400">
            Document Summary: 12 Sections • 7 Scenes • 6 Character Locks • 3 Location Locks • Zero Invented Scenes • Strictly Grounded in Daniel 6 Screenplay.
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold font-cinzel text-amber-300 border-b border-[#1f2434] pb-1">
              Quick Table of Contents
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-400 list-decimal list-inside">
              <li>Character Locks (Daniel, Darius, Officials, Guards, Lions)</li>
              <li>Costume Continuity & Wear Progression</li>
              <li>Location Locks (Apadana, Upper Chamber, Lions&apos; Den)</li>
              <li>Historical Visual Language & Achaemenid Realism</li>
              <li>Cinematography Bible (2.39:1 Anamorphic, 35mm stock)</li>
              <li>Scene-by-Scene Continuity Matrix (Scenes 1–7)</li>
              <li>Character Relationship Continuity</li>
              <li>Prop Continuity & Material Tracking</li>
              <li>Asiatic Lion (Panthera leo persica) Lock</li>
              <li>Master Negative / Forbidden Visuals Catalog</li>
              <li>Google Flow Prompt System & Scene 5 Example</li>
              <li>Master Continuity Lock (Immutable Prompt Block)</li>
            </ol>
          </div>

          <div className="pt-4">
            <pre className="p-4 sm:p-6 rounded-lg bg-[#0a0b0f] border border-[#1a1e2b] text-xs font-mono-code text-stone-300 whitespace-pre-wrap leading-relaxed max-h-[600px] overflow-y-auto">
              {generateMarkdownBible()}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
