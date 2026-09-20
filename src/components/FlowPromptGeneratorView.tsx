import React, { useState } from 'react';
import { FLOW_PROMPT_TEMPLATE, SCENE_5_COMPLETED_PROMPT } from '../data/productionBibleData';
import { ALL_SCENE_PROMPTS } from '../data/scenePrompts';
import { Sparkles, Copy, Check, Sliders, Film, ArrowRight, ShieldCheck } from 'lucide-react';
import { FlowPrompt } from '../types';

interface FlowPromptGeneratorViewProps {
  initialSceneNum?: number;
}

export const FlowPromptGeneratorView: React.FC<FlowPromptGeneratorViewProps> = ({
  initialSceneNum = 5
}) => {
  const [activeTab, setActiveTab] = useState<'scene5' | 'builder' | 'template'>('scene5');
  const [selectedScene, setSelectedScene] = useState<number>(initialSceneNum);
  const [selectedShotType, setSelectedShotType] = useState<'wide' | 'medium' | 'closeUp'>('medium');
  const [copied, setCopied] = useState(false);

  // Get active prompt based on builder selection
  const currentPrompt: FlowPrompt =
    activeTab === 'scene5'
      ? SCENE_5_COMPLETED_PROMPT
      : ALL_SCENE_PROMPTS[selectedScene]?.[selectedShotType] || SCENE_5_COMPLETED_PROMPT;

  const formatFlowPromptText = (p: FlowPrompt) => {
    return `CHARACTER REFERENCES:
${p.characterReferences}

LOCATION REFERENCE:
${p.locationReference}

SCENE:
${p.scene}

ACTION:
${p.action}

DIALOGUE:
${p.dialogue}

EMOTION:
${p.emotion}

CAMERA:
${p.camera}

LIGHTING:
${p.lighting}

ENVIRONMENT:
${p.environment}

CONTINUITY REQUIREMENTS:
${p.continuityRequirements}

NEGATIVE REQUIREMENTS:
${p.negativeRequirements}`;
  };

  const handleCopy = () => {
    const textToCopy =
      activeTab === 'template' ? FLOW_PROMPT_TEMPLATE : formatFlowPromptText(currentPrompt);
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-[#141720] border border-[#232838] rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono-code uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Section 11 • Google Flow / Veo Prompt System</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-cinzel text-stone-100">
            Flow Prompt Generator & Canonical Examples
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-2xl">
            Locked structured prompt framework for photorealistic video and still frames. Formatted with all 11 required production-design tiers.
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex flex-wrap gap-1 p-1 bg-[#0c0d12] rounded-lg border border-[#1f2330]">
          <button
            onClick={() => setActiveTab('scene5')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              activeTab === 'scene5'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-[#181b26]'
            }`}
          >
            Canonical Scene 5
          </button>
          <button
            onClick={() => setActiveTab('builder')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              activeTab === 'builder'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-[#181b26]'
            }`}
          >
            Scene 1–7 Builder
          </button>
          <button
            onClick={() => setActiveTab('template')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              activeTab === 'template'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-[#181b26]'
            }`}
          >
            Empty Template
          </button>
        </div>
      </div>

      {/* Builder Controls (if builder tab active) */}
      {activeTab === 'builder' && (
        <div className="bg-[#12141c] border border-[#222736] rounded-xl p-4 sm:p-5 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Scene Selector */}
            <div>
              <span className="text-xs font-mono-code text-stone-400 uppercase tracking-wider block mb-1.5">
                Select Screenplay Scene
              </span>
              <div className="flex flex-wrap gap-1">
                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                  <button
                    key={num}
                    onClick={() => setSelectedScene(num)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                      selectedScene === num
                        ? 'bg-amber-500 text-stone-950 font-bold'
                        : 'bg-[#1a1d26] text-stone-300 hover:bg-[#252a3a] border border-[#2a3042]'
                    }`}
                  >
                    Scene {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Shot Type Selector */}
            <div>
              <span className="text-xs font-mono-code text-stone-400 uppercase tracking-wider block mb-1.5">
                Camera Framing Tier
              </span>
              <div className="flex gap-1.5">
                {(['wide', 'medium', 'closeUp'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedShotType(type)}
                    className={`px-3 py-1 rounded-md text-xs font-medium capitalize transition-all ${
                      selectedShotType === type
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                        : 'bg-[#1a1d26] text-stone-400 hover:bg-[#252a3a] border border-[#2a3042]'
                    }`}
                  >
                    {type === 'closeUp' ? 'Close-Up' : type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Prompt Output Display Card */}
      <div className="bg-[#12141c] border border-[#222736] rounded-xl overflow-hidden shadow-lg">
        <div className="p-4 sm:p-5 border-b border-[#202534] bg-gradient-to-r from-[#171a25] to-[#12141c] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-amber-500/10 text-amber-300 border border-amber-500/30">
                GOOGLE FLOW / VEO COMPLIANT
              </span>
              <span className="text-xs text-stone-400">
                {activeTab === 'scene5'
                  ? 'Canonical Screenplay Scene 5: Daniel Before Darius'
                  : activeTab === 'builder'
                  ? `Scene ${selectedScene} • ${selectedShotType.toUpperCase()} Framing`
                  : 'Universal Reusable Template'}
              </span>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-amber-500 text-stone-950 hover:bg-amber-400 flex items-center gap-2 transition-all self-start sm:self-auto shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-stone-950" />
                <span>Prompt Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Flow Prompt</span>
              </>
            )}
          </button>
        </div>

        {/* Prompt Content */}
        <div className="p-5 sm:p-6">
          {activeTab === 'template' ? (
            <pre className="p-4 rounded-lg bg-[#0e1017] border border-[#1f2433] text-xs font-mono-code text-amber-300/90 whitespace-pre-wrap leading-relaxed">
              {FLOW_PROMPT_TEMPLATE}
            </pre>
          ) : (
            <div className="space-y-4 font-mono-code text-xs">
              <div className="p-3.5 rounded-lg bg-[#171a24] border border-[#252b3b]">
                <strong className="text-amber-400 block mb-1">CHARACTER REFERENCES:</strong>
                <p className="text-stone-300 leading-relaxed whitespace-pre-line">
                  {currentPrompt.characterReferences}
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#171a24] border border-[#252b3b]">
                <strong className="text-amber-400 block mb-1">LOCATION REFERENCE:</strong>
                <p className="text-stone-300 leading-relaxed whitespace-pre-line">
                  {currentPrompt.locationReference}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-lg bg-[#171a24] border border-[#252b3b]">
                  <strong className="text-amber-400 block mb-1">SCENE & CANONICAL ACTION:</strong>
                  <p className="text-stone-300 leading-relaxed">{currentPrompt.action}</p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#171a24] border border-[#252b3b]">
                  <strong className="text-amber-400 block mb-1">DIALOGUE & EMOTION:</strong>
                  <p className="text-stone-300 leading-relaxed">
                    <strong>Dialogue:</strong> {currentPrompt.dialogue}
                  </p>
                  <p className="text-stone-300 leading-relaxed mt-1">
                    <strong>Emotion:</strong> {currentPrompt.emotion}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-lg bg-[#171a24] border border-[#232838]">
                  <strong className="text-amber-400 block mb-1">CAMERA:</strong>
                  <p className="text-stone-300 leading-relaxed">{currentPrompt.camera}</p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#171a24] border border-[#232838]">
                  <strong className="text-amber-400 block mb-1">LIGHTING:</strong>
                  <p className="text-stone-300 leading-relaxed">{currentPrompt.lighting}</p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#171a24] border border-[#232838]">
                  <strong className="text-amber-400 block mb-1">ENVIRONMENT:</strong>
                  <p className="text-stone-300 leading-relaxed">{currentPrompt.environment}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-amber-950/20 border border-amber-500/30">
                <strong className="text-amber-400 flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  CONTINUITY REQUIREMENTS:
                </strong>
                <p className="text-stone-300 leading-relaxed">
                  {currentPrompt.continuityRequirements}
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-rose-950/20 border border-rose-500/30">
                <strong className="text-rose-400 block mb-1">NEGATIVE REQUIREMENTS:</strong>
                <p className="text-rose-200 leading-relaxed">
                  {currentPrompt.negativeRequirements}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
