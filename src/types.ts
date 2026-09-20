export interface CharacterLock {
  id: string;
  name: string;
  role: string;
  age: string;
  sex: string;
  physicalBuild: string;
  heightProportions: string;
  complexion: string;
  faceShape: string;
  eyes: string;
  nose: string;
  mouth: string;
  hair: string;
  beardFacialHair: string;
  distinguishingFeatures: string;
  clothing: string;
  clothingColors: string;
  fabricsMaterials: string;
  footwear: string;
  jewelryAccessories: string;
  props: string;
  posture: string;
  emotionalBaseline: string;
  voiceCharacteristics: string;
  historicalCulturalAppearance: string;
  continuityCriticalAttributes: string[];
  productionNotes?: string;
}

export interface CostumeContinuityItem {
  characterId: string;
  characterName: string;
  scenesPresent: string;
  baseGarments: string;
  outerGarments: string;
  belts: string;
  footwear: string;
  jewelry: string;
  crownsHeadwear: string;
  colors: string;
  materials: string;
  wearDirtState: string;
  permittedChanges: string[];
  forbiddenChanges: string[];
}

export interface LocationLock {
  id: string;
  name: string;
  scenesAppeared: string;
  historicalPeriod: string;
  architecture: string;
  constructionMaterials: string;
  floor: string;
  walls: string;
  ceiling: string;
  windows: string;
  doors: string;
  furniture: string;
  lighting: string;
  textiles: string;
  colors: string;
  props: string;
  environmentalDetails: string;
  atmosphere: string;
  recurringVisualLandmarks: string[];
  mustNotAppear: string[];
}

export interface SceneMatrixRow {
  sceneNumber: number;
  title: string;
  durationTarget: string;
  location: string;
  timeOfDay: string;
  characters: string;
  characterAppearanceReqs: string;
  costumeRequirements: string;
  props: string;
  lighting: string;
  emotionalState: string;
  action: string;
  cameraRequirements: string;
  environmentalContinuity: string;
  criticalVisualRisks: string;
}

export interface PropItem {
  id: string;
  name: string;
  scenes: string;
  materials: string;
  dimensionsVisuals: string;
  historicalContext: string;
  continuityRules: string;
}

export interface FlowPrompt {
  characterReferences: string;
  locationReference: string;
  scene: string;
  action: string;
  dialogue: string;
  emotion: string;
  camera: string;
  lighting: string;
  environment: string;
  continuityRequirements: string;
  negativeRequirements: string;
}
