import React, { useState } from 'react';
import { SCENE_CONTINUITY_MATRIX } from '../data/productionBibleData';
import { Layers, Clock, MapPin, Users, Camera, ShieldAlert, Sparkles, ChevronRight } from 'lucide-react';

interface SceneMatrixViewProps {
  onSelectSceneForPrompt?: (sceneNum: number) => void;
}

export const SceneMatrixView: React.FC<SceneMatrixViewProps> = ({ onSelectSceneForPrompt }) => {
  const [activeSceneNum, setActiveSceneNum] = useState<number>(1);

  const activeScene = SCENE_CONTINUITY_MATRIX.find((s) => s.sceneNumber === activeSceneNum) || SCENE_CONTINUITY_MATRIX[0];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-[#141720] border border-[#232838] rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono-code uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4" />
            <span>Section 6 • Scene-by-Scene Continuity Matrix</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-cinzel text-stone-100">
            Canonical 7-Scene Production Matrix
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-2xl">
            Complete continuity specifications for all 7 scenes from the screenplay. Total runtime ~3 minutes. Strictly zero invented scenes.
          </p>
        </div>

        {/* Scene Selector Strip */}
        <div className="flex flex-wrap gap-1 p-1 bg-[#0c0d12] rounded-lg border border-[#1f2330]">
          {SCENE_CONTINUITY_MATRIX.map((s) => (
            <button
              key={s.sceneNumber}
              onClick={() => setActiveSceneNum(s.sceneNumber)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeSceneNum === s.sceneNumber
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-[#181b26]'
              }`}
            >
              Scene {s.sceneNumber}
            </button>
          ))}
        </div>
      </div>

      {/* Active Scene Detail Card */}
      <div className="bg-[#12141c] border border-[#222736] rounded-xl overflow-hidden shadow-lg">
        {/* Card Header */}
        <div className="p-5 border-b border-[#202534] bg-gradient-to-r from-[#171a25] to-[#12141c] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono-code bg-amber-500/10 text-amber-300 border border-amber-500/30">
                SCENE {activeScene.sceneNumber} OF 7
              </span>
              <span className="text-xs text-stone-400 font-mono-code">
                Duration: {activeScene.durationTarget}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-stone-100 mt-1">
              {activeScene.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400 mt-1.5">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {activeScene.location}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                {activeScene.timeOfDay}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                {activeScene.characters}
              </span>
            </div>
          </div>

          {onSelectSceneForPrompt && (
            <button
              onClick={() => onSelectSceneForPrompt(activeScene.sceneNumber)}
              className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-amber-500 text-stone-950 hover:bg-amber-400 flex items-center gap-1.5 transition-all self-start sm:self-auto shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Generate Flow Prompt</span>
            </button>
          )}
        </div>

        {/* 13-Column Breakdown */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Action & Emotional State */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#171a24] p-4 rounded-lg border border-[#232838]">
              <span className="text-[11px] font-mono-code uppercase text-amber-400 font-semibold block mb-1">
                Canonical Screenplay Action
              </span>
              <p className="text-xs text-stone-200 leading-relaxed font-medium">
                {activeScene.action}
              </p>
            </div>

            <div className="bg-[#171a24] p-4 rounded-lg border border-[#232838]">
              <span className="text-[11px] font-mono-code uppercase text-amber-400 font-semibold block mb-1">
                Emotional State & Subtext
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                {activeScene.emotionalState}
              </p>
            </div>
          </div>

          {/* Character Appearance & Costumes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#171a24] p-4 rounded-lg border border-[#232838]">
              <span className="text-[11px] font-mono-code uppercase text-stone-400 font-semibold block mb-1">
                Character Appearance Requirements
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                {activeScene.characterAppearanceReqs}
              </p>
            </div>

            <div className="bg-[#171a24] p-4 rounded-lg border border-[#232838]">
              <span className="text-[11px] font-mono-code uppercase text-stone-400 font-semibold block mb-1">
                Costume Requirements
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                {activeScene.costumeRequirements}
              </p>
            </div>
          </div>

          {/* Camera, Lighting & Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#232838]">
              <span className="text-[11px] font-mono-code uppercase text-amber-400 font-semibold block mb-1">
                Camera Setup & Movement
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                {activeScene.cameraRequirements}
              </p>
            </div>

            <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#232838]">
              <span className="text-[11px] font-mono-code uppercase text-amber-400 font-semibold block mb-1">
                Lighting Ratios & Temperatures
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                {activeScene.lighting}
              </p>
            </div>

            <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#232838]">
              <span className="text-[11px] font-mono-code uppercase text-amber-400 font-semibold block mb-1">
                Scene Props & Artifacts
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                {activeScene.props}
              </p>
            </div>
          </div>

          {/* Environmental Continuity & Critical Risks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#171a24] p-4 rounded-lg border border-[#232838]">
              <span className="text-[11px] font-mono-code uppercase text-stone-400 font-semibold block mb-1">
                Environmental Atmosphere Continuity
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                {activeScene.environmentalContinuity}
              </p>
            </div>

            <div className="bg-rose-950/20 p-4 rounded-lg border border-rose-500/30">
              <span className="text-[11px] font-mono-code uppercase text-rose-400 font-semibold flex items-center gap-1.5 mb-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                Critical Visual Risks (High Vigilance)
              </span>
              <p className="text-xs text-rose-200 leading-relaxed">
                {activeScene.criticalVisualRisks}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full 7-Scene Summary Table */}
      <div className="bg-[#12141c] border border-[#222736] rounded-xl overflow-x-auto shadow-md">
        <div className="p-4 border-b border-[#202534]">
          <h4 className="text-sm font-bold font-cinzel text-stone-100">
            Quick Multi-Scene Index
          </h4>
        </div>
        <table className="w-full text-left text-xs text-stone-300 border-collapse">
          <thead className="bg-[#161922] text-stone-400 uppercase font-mono-code text-[11px] border-b border-[#232838]">
            <tr>
              <th className="p-3">Scene</th>
              <th className="p-3">Location</th>
              <th className="p-3">Time</th>
              <th className="p-3">Characters</th>
              <th className="p-3">Key Action</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1f2433]">
            {SCENE_CONTINUITY_MATRIX.map((s) => (
              <tr
                key={s.sceneNumber}
                onClick={() => setActiveSceneNum(s.sceneNumber)}
                className={`cursor-pointer transition-colors ${
                  activeSceneNum === s.sceneNumber ? 'bg-amber-500/10' : 'hover:bg-[#171a25]'
                }`}
              >
                <td className="p-3 font-semibold text-amber-300 font-mono-code">
                  #{s.sceneNumber}: {s.title}
                </td>
                <td className="p-3">{s.location}</td>
                <td className="p-3 text-stone-400">{s.timeOfDay}</td>
                <td className="p-3 text-stone-300">{s.characters}</td>
                <td className="p-3 max-w-xs truncate text-stone-400">{s.action}</td>
                <td className="p-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSceneNum(s.sceneNumber);
                    }}
                    className="text-amber-400 hover:text-amber-300 flex items-center gap-0.5"
                  >
                    <span>View</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
