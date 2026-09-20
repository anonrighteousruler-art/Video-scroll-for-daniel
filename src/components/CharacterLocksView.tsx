import React, { useState } from 'react';
import { CHARACTER_LOCKS } from '../data/productionBibleData';
import { Copy, Check, UserCheck, ShieldAlert, Sparkles, Tag } from 'lucide-react';

export const CharacterLocksView: React.FC = () => {
  const [selectedCharId, setSelectedCharId] = useState<string>('daniel');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const selectedChar = CHARACTER_LOCKS.find((c) => c.id === selectedCharId) || CHARACTER_LOCKS[0];

  const handleCopy = (char: typeof selectedChar) => {
    const text = `CHARACTER LOCK: ${char.name} (${char.role})
Age: ${char.age} | Sex: ${char.sex}
Build: ${char.physicalBuild} | Height: ${char.heightProportions}
Complexion: ${char.complexion} | Face: ${char.faceShape}
Eyes: ${char.eyes} | Nose: ${char.nose} | Mouth: ${char.mouth}
Hair: ${char.hair} | Beard: ${char.beardFacialHair}
Distinguishing Features: ${char.distinguishingFeatures}
Clothing: ${char.clothing}
Colors: ${char.clothingColors} | Materials: ${char.fabricsMaterials}
Footwear: ${char.footwear} | Jewelry: ${char.jewelryAccessories}
Props: ${char.props} | Posture: ${char.posture}
Emotional Baseline: ${char.emotionalBaseline}
Voice: ${char.voiceCharacteristics}
Cultural Appearance: ${char.historicalCulturalAppearance}
CRITICAL CONTINUITY ATTRIBUTES:
${char.continuityCriticalAttributes.map((a) => `- ${a}`).join('\n')}`;

    navigator.clipboard.writeText(text);
    setCopiedId(char.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-[#141720] border border-[#232838] rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono-code uppercase tracking-wider mb-1">
            <UserCheck className="w-4 h-4" />
            <span>Section 1 • Definitive Identity Locks</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-cinzel text-stone-100">
            Character Continuity Locks
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-2xl">
            Single definitive physical appearance specifications for text-to-image and video generators (Google Flow / Veo). Strictly NO alternative designs permitted.
          </p>
        </div>

        {/* Character Selector Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-[#0c0d12] rounded-lg border border-[#1f2330]">
          {CHARACTER_LOCKS.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCharId(c.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                selectedCharId === c.id
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-[#181b26]'
              }`}
            >
              {c.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Character Card */}
      <div className="bg-[#12141c] border border-[#222736] rounded-xl overflow-hidden shadow-lg">
        {/* Card Header */}
        <div className="p-5 border-b border-[#202534] bg-gradient-to-r from-[#171a25] to-[#12141c] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className="text-2xl font-bold font-cinzel text-stone-100 tracking-wide">
                {selectedChar.name}
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30">
                {selectedChar.role}
              </span>
            </div>
            <p className="text-xs text-stone-400 mt-1">
              Age: <strong className="text-stone-200">{selectedChar.age}</strong> • Height: <strong className="text-stone-200">{selectedChar.heightProportions}</strong> • Sex: <strong className="text-stone-200">{selectedChar.sex}</strong>
            </p>
          </div>

          <button
            onClick={() => handleCopy(selectedChar)}
            className="px-3.5 py-2 rounded-lg text-xs font-medium bg-[#1e2332] hover:bg-[#272d3f] text-stone-200 border border-[#333a4f] flex items-center gap-2 transition-all self-start sm:self-auto"
          >
            {copiedId === selectedChar.id ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Lock Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copy Lock Prompt</span>
              </>
            )}
          </button>
        </div>

        {/* Card Content Grid */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* Critical Continuity Tag Warning */}
          <div className="bg-amber-950/20 border border-amber-500/30 rounded-lg p-3.5">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldAlert className="w-4 h-4" />
              <span>Continuity-Critical Attributes (Non-Negotiable)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedChar.continuityCriticalAttributes.map((attr, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-stone-300">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>{attr}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#252b3b]">
              <span className="text-[11px] font-mono-code uppercase text-amber-400/80 font-semibold block mb-1">
                Anatomy & Complexion
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                <strong>Build:</strong> {selectedChar.physicalBuild}
              </p>
              <p className="text-xs text-stone-300 leading-relaxed mt-1">
                <strong>Complexion:</strong> {selectedChar.complexion}
              </p>
              <p className="text-xs text-stone-300 leading-relaxed mt-1">
                <strong>Face Shape:</strong> {selectedChar.faceShape}
              </p>
            </div>

            <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#252b3b]">
              <span className="text-[11px] font-mono-code uppercase text-amber-400/80 font-semibold block mb-1">
                Eyes, Nose & Mouth
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                <strong>Eyes:</strong> {selectedChar.eyes}
              </p>
              <p className="text-xs text-stone-300 leading-relaxed mt-1">
                <strong>Nose:</strong> {selectedChar.nose}
              </p>
              <p className="text-xs text-stone-300 leading-relaxed mt-1">
                <strong>Mouth:</strong> {selectedChar.mouth}
              </p>
            </div>

            <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#252b3b]">
              <span className="text-[11px] font-mono-code uppercase text-amber-400/80 font-semibold block mb-1">
                Hair & Beard Styling
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                <strong>Hair:</strong> {selectedChar.hair}
              </p>
              <p className="text-xs text-stone-300 leading-relaxed mt-1">
                <strong>Facial Hair:</strong> {selectedChar.beardFacialHair}
              </p>
              <p className="text-xs text-stone-300 leading-relaxed mt-1">
                <strong>Distinguishing:</strong> {selectedChar.distinguishingFeatures}
              </p>
            </div>

            <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#252b3b]">
              <span className="text-[11px] font-mono-code uppercase text-amber-400/80 font-semibold block mb-1">
                Clothing & Silhouette
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                <strong>Garments:</strong> {selectedChar.clothing}
              </p>
              <p className="text-xs text-stone-300 leading-relaxed mt-1">
                <strong>Colors:</strong> {selectedChar.clothingColors}
              </p>
              <p className="text-xs text-stone-300 leading-relaxed mt-1">
                <strong>Fabrics:</strong> {selectedChar.fabricsMaterials}
              </p>
            </div>

            <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#252b3b]">
              <span className="text-[11px] font-mono-code uppercase text-amber-400/80 font-semibold block mb-1">
                Footwear, Jewelry & Props
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                <strong>Footwear:</strong> {selectedChar.footwear}
              </p>
              <p className="text-xs text-stone-300 leading-relaxed mt-1">
                <strong>Jewelry:</strong> {selectedChar.jewelryAccessories}
              </p>
              <p className="text-xs text-stone-300 leading-relaxed mt-1">
                <strong>Props:</strong> {selectedChar.props}
              </p>
            </div>

            <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#252b3b]">
              <span className="text-[11px] font-mono-code uppercase text-amber-400/80 font-semibold block mb-1">
                Posture, Emotion & Voice
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                <strong>Posture:</strong> {selectedChar.posture}
              </p>
              <p className="text-xs text-stone-300 leading-relaxed mt-1">
                <strong>Emotional Baseline:</strong> {selectedChar.emotionalBaseline}
              </p>
              <p className="text-xs text-stone-300 leading-relaxed mt-1">
                <strong>Voice:</strong> {selectedChar.voiceCharacteristics}
              </p>
            </div>
          </div>

          {/* Historical Cultural Note & Production Directive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-3.5 rounded-lg bg-[#0e1017] border border-[#1d222e]">
              <span className="text-[11px] font-mono-code uppercase text-stone-400 font-semibold block mb-1">
                Historical-Cultural Appearance
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                {selectedChar.historicalCulturalAppearance}
              </p>
            </div>
            {selectedChar.productionNotes && (
              <div className="p-3.5 rounded-lg bg-[#0e1017] border border-[#1d222e]">
                <span className="text-[11px] font-mono-code uppercase text-amber-400 font-semibold block mb-1">
                  Director's Continuity Directive
                </span>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {selectedChar.productionNotes}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
