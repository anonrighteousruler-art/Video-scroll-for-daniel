import React, { useState } from 'react';
import { Header } from './components/Header';
import { SectionNav } from './components/SectionNav';
import { CharacterLocksView } from './components/CharacterLocksView';
import { CostumeSheetView } from './components/CostumeSheetView';
import { LocationLocksView } from './components/LocationLocksView';
import { HistoricalVisualView } from './components/HistoricalVisualView';
import { CinematographyView } from './components/CinematographyView';
import { SceneMatrixView } from './components/SceneMatrixView';
import { RelationshipsAndAnimalsView } from './components/RelationshipsAndAnimalsView';
import { PropsContinuityView } from './components/PropsContinuityView';
import { ForbiddenVisualsView } from './components/ForbiddenVisualsView';
import { FlowPromptGeneratorView } from './components/FlowPromptGeneratorView';
import { MasterLockView } from './components/MasterLockView';
import { FullDocumentExportView } from './components/FullDocumentExportView';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('character-locks');
  const [promptSceneNum, setPromptSceneNum] = useState<number>(5);

  const handleSelectSceneForPrompt = (sceneNum: number) => {
    setPromptSceneNum(sceneNum);
    setActiveTab('prompt-generator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#e2e4e9] flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Application Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Navigation Bar for All 12 Sections */}
      <SectionNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Body Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'character-locks' && <CharacterLocksView />}
        {activeTab === 'costume-sheet' && <CostumeSheetView />}
        {activeTab === 'location-locks' && <LocationLocksView />}
        {activeTab === 'historical-language' && <HistoricalVisualView />}
        {activeTab === 'cinematography' && <CinematographyView />}
        {activeTab === 'scene-matrix' && (
          <SceneMatrixView onSelectSceneForPrompt={handleSelectSceneForPrompt} />
        )}
        {activeTab === 'relationships-animals' && <RelationshipsAndAnimalsView />}
        {activeTab === 'props-continuity' && <PropsContinuityView />}
        {activeTab === 'forbidden-visuals' && <ForbiddenVisualsView />}
        {activeTab === 'prompt-generator' && (
          <FlowPromptGeneratorView initialSceneNum={promptSceneNum} />
        )}
        {activeTab === 'master-lock' && <MasterLockView />}
        {activeTab === 'full-export' && <FullDocumentExportView />}
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-[#1a1d27] bg-[#0a0b0e] py-4 text-center text-xs text-stone-500 font-mono-code">
        <p>
          DANIEL — THE NIGHT OF THE LIONS • Production Bible & Continuity System • Daniel 6 Screenplay Authority • Google Flow / Veo Engine
        </p>
      </footer>
    </div>
  );
}
