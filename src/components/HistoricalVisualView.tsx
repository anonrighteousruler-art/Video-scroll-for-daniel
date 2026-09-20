import React from 'react';
import { HISTORICAL_VISUAL_LANGUAGE } from '../data/productionBibleData';
import { Scroll, Palette, Shield, Sparkles, AlertCircle } from 'lucide-react';

export const HistoricalVisualView: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-[#141720] border border-[#232838] rounded-xl p-4 sm:p-5">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-mono-code uppercase tracking-wider mb-1">
          <Scroll className="w-4 h-4" />
          <span>Section 4 • Cohesive Visual Language & Antiquity Safeguards</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold font-cinzel text-stone-100">
          Historical Visual Language
        </h2>
        <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-3xl">
          Unified aesthetic grammar for the entire 3-minute film. Rejects fantasy-medieval clichés, Renaissance anachronisms, and Hollywood swords-and-sandals tropes in favor of archaeologically grounded Achaemenid Persian and Neo-Babylonian realism.
        </p>
      </div>

      {/* Color Palette Swatches */}
      <div className="bg-[#12141c] border border-[#222736] rounded-xl p-5 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-mono-code uppercase text-amber-400 font-semibold mb-3">
          <Palette className="w-4 h-4" />
          <span>Locked Film Color Palette</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {HISTORICAL_VISUAL_LANGUAGE.colorPalette.map((color, idx) => (
            <div
              key={idx}
              className="bg-[#171a24] rounded-lg p-2.5 border border-[#252b3b] flex flex-col items-center text-center"
            >
              <div
                className="w-full h-10 rounded-md border border-white/10 shadow-inner mb-2"
                style={{ backgroundColor: color.hex }}
              />
              <span className="text-xs font-bold text-stone-200 line-clamp-1">{color.name}</span>
              <span className="text-[10px] font-mono-code text-stone-400 mt-0.5">{color.hex}</span>
              <span className="text-[10px] text-stone-400 mt-1 leading-tight line-clamp-2">
                {color.use}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Core Philosophies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-[#12141c] p-5 rounded-xl border border-[#222736] space-y-4">
          <h3 className="text-base font-bold font-cinzel text-stone-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Historical Period & Architecture
          </h3>
          <div className="text-xs text-stone-300 space-y-2 leading-relaxed">
            <p>
              <strong className="text-amber-400">Period:</strong> {HISTORICAL_VISUAL_LANGUAGE.historicalPeriod}
            </p>
            <p>
              <strong className="text-stone-100">Architectural Style:</strong> {HISTORICAL_VISUAL_LANGUAGE.architecturalStyle}
            </p>
            <p>
              <strong className="text-stone-100">Furnishings:</strong> {HISTORICAL_VISUAL_LANGUAGE.furnishings}
            </p>
          </div>
        </div>

        <div className="bg-[#12141c] p-5 rounded-xl border border-[#222736] space-y-4">
          <h3 className="text-base font-bold font-cinzel text-stone-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Costume & Material Philosophy
          </h3>
          <div className="text-xs text-stone-300 space-y-2 leading-relaxed">
            <p>
              <strong className="text-stone-100">Clothing Philosophy:</strong> {HISTORICAL_VISUAL_LANGUAGE.clothingPhilosophy}
            </p>
            <p>
              <strong className="text-stone-100">Approved Materials:</strong> {HISTORICAL_VISUAL_LANGUAGE.materials}
            </p>
            <p>
              <strong className="text-stone-100">Weaponry:</strong> {HISTORICAL_VISUAL_LANGUAGE.weapons}
            </p>
          </div>
        </div>

        <div className="bg-[#12141c] p-5 rounded-xl border border-[#222736] space-y-4">
          <h3 className="text-base font-bold font-cinzel text-stone-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Lighting & Atmospheric Realism
          </h3>
          <div className="text-xs text-stone-300 space-y-2 leading-relaxed">
            <p>
              <strong className="text-stone-100">Lighting Philosophy:</strong> {HISTORICAL_VISUAL_LANGUAGE.lightingPhilosophy}
            </p>
            <p>
              <strong className="text-stone-100">Environmental Realism:</strong> {HISTORICAL_VISUAL_LANGUAGE.environmentalRealism}
            </p>
          </div>
        </div>

        <div className="bg-[#12141c] p-5 rounded-xl border border-[#222736] space-y-4">
          <h3 className="text-base font-bold font-cinzel text-stone-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Camera Realism & Production Choices
          </h3>
          <div className="text-xs text-stone-300 space-y-2 leading-relaxed">
            <p>
              <strong className="text-stone-100">Optical Camera Realism:</strong> {HISTORICAL_VISUAL_LANGUAGE.cameraRealism}
            </p>
            <div className="p-3 rounded-lg bg-[#0e1017] border border-amber-500/20 text-stone-300">
              <strong className="text-amber-400 flex items-center gap-1 mb-1">
                <AlertCircle className="w-3.5 h-3.5" />
                Historiographical Safeguard:
              </strong>
              {HISTORICAL_VISUAL_LANGUAGE.anachronismSafeguards}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
