import React from 'react';
import { CINEMATOGRAPHY_BIBLE } from '../data/productionBibleData';
import { Camera, Film, Eye, SunMedium, MoveHorizontal, CheckCircle } from 'lucide-react';

export const CinematographyView: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-[#141720] border border-[#232838] rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono-code uppercase tracking-wider mb-1">
            <Camera className="w-4 h-4" />
            <span>Section 5 • Cinematic Grammar & Lens Physics</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-cinzel text-stone-100">
            Cinematography Bible
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-2xl">
            Strict photographic guidelines ensuring the film appears as a serious high-budget historical drama filmed on physical 35mm anamorphic film, completely avoiding AI slideshow artifacts.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#0c0d12] px-3.5 py-2 rounded-lg border border-[#1f2330]">
          <span className="text-xs text-stone-400">Aspect Ratio:</span>
          <span className="text-xs font-bold text-amber-300 font-mono-code">
            {CINEMATOGRAPHY_BIBLE.aspectRatio}
          </span>
        </div>
      </div>

      {/* Core Specs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-[#12141c] p-4 sm:p-5 rounded-xl border border-[#222736] space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono-code uppercase text-amber-400 font-semibold">
            <Film className="w-4 h-4" />
            <span>Lens & Optical Profile</span>
          </div>
          <p className="text-xs text-stone-300 leading-relaxed">
            {CINEMATOGRAPHY_BIBLE.lensPhilosophy}
          </p>
          <div className="text-xs text-stone-400 pt-2 border-t border-[#1d222e]">
            <strong>Depth of Field:</strong> {CINEMATOGRAPHY_BIBLE.depthOfField}
          </div>
        </div>

        <div className="bg-[#12141c] p-4 sm:p-5 rounded-xl border border-[#222736] space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono-code uppercase text-amber-400 font-semibold">
            <MoveHorizontal className="w-4 h-4" />
            <span>Camera Movement & Rigging</span>
          </div>
          <p className="text-xs text-stone-300 leading-relaxed">
            {CINEMATOGRAPHY_BIBLE.cameraMovement}
          </p>
          <div className="text-xs text-amber-400/90 pt-2 border-t border-[#1d222e]">
            <strong>Rule:</strong> 90% stabilized dolly/tripod. Zero erratic handheld shaking.
          </div>
        </div>

        <div className="bg-[#12141c] p-4 sm:p-5 rounded-xl border border-[#222736] space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono-code uppercase text-amber-400 font-semibold">
            <SunMedium className="w-4 h-4" />
            <span>Film Stock & Texture</span>
          </div>
          <p className="text-xs text-stone-300 leading-relaxed">
            {CINEMATOGRAPHY_BIBLE.filmTexture}
          </p>
          <div className="text-xs text-stone-400 pt-2 border-t border-[#1d222e]">
            <strong>Contrast:</strong> {CINEMATOGRAPHY_BIBLE.visualContrast}
          </div>
        </div>
      </div>

      {/* Lens Focal Kit */}
      <div className="bg-[#12141c] p-5 rounded-xl border border-[#222736]">
        <h3 className="text-sm font-bold font-cinzel text-stone-100 uppercase tracking-wider mb-3">
          Locked Anamorphic Lens Kit by Shot Category
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#232838]">
            <span className="text-xs font-mono-code font-bold text-amber-400 block mb-1">
              Wide Shots (35mm Anamorphic)
            </span>
            <p className="text-xs text-stone-300 leading-relaxed">
              {CINEMATOGRAPHY_BIBLE.focalLengths.wide}
            </p>
          </div>
          <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#232838]">
            <span className="text-xs font-mono-code font-bold text-amber-400 block mb-1">
              Medium & Two-Shots (50mm Anamorphic)
            </span>
            <p className="text-xs text-stone-300 leading-relaxed">
              {CINEMATOGRAPHY_BIBLE.focalLengths.medium}
            </p>
          </div>
          <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#232838]">
            <span className="text-xs font-mono-code font-bold text-amber-400 block mb-1">
              Close-Ups & Portraits (75mm–100mm)
            </span>
            <p className="text-xs text-stone-300 leading-relaxed">
              {CINEMATOGRAPHY_BIBLE.focalLengths.closeUp}
            </p>
          </div>
        </div>
      </div>

      {/* Lighting Ratios & Framing Rules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-[#12141c] p-5 rounded-xl border border-[#222736] space-y-3">
          <h3 className="text-sm font-bold font-cinzel text-stone-100 uppercase tracking-wider">
            Scene Lighting Ratios (Key : Fill)
          </h3>
          <div className="space-y-2 text-xs text-stone-300">
            <div className="flex items-center justify-between p-2 rounded bg-[#171a24] border border-[#252b3b]">
              <span>Scene 1: Court (Day)</span>
              <span className="font-mono-code text-amber-400 font-semibold">{CINEMATOGRAPHY_BIBLE.lightingRatios.courtDay}</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-[#171a24] border border-[#252b3b]">
              <span>Scenes 2–3: Daniel's Room (Golden Hour)</span>
              <span className="font-mono-code text-amber-400 font-semibold">{CINEMATOGRAPHY_BIBLE.lightingRatios.roomLateAfternoon}</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-[#171a24] border border-[#252b3b]">
              <span>Scenes 4–5: Court / Confrontation (Evening)</span>
              <span className="font-mono-code text-amber-400 font-semibold">{CINEMATOGRAPHY_BIBLE.lightingRatios.courtEvening}</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-[#171a24] border border-[#252b3b]">
              <span>Scene 6: Lions' Den (Midnight Moonlight)</span>
              <span className="font-mono-code text-amber-400 font-semibold">{CINEMATOGRAPHY_BIBLE.lightingRatios.lionsDenNight}</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-[#171a24] border border-[#252b3b]">
              <span>Scene 7: Morning Deliverance (Sunrise)</span>
              <span className="font-mono-code text-amber-400 font-semibold">{CINEMATOGRAPHY_BIBLE.lightingRatios.lionsDenDawn}</span>
            </div>
          </div>
        </div>

        <div className="bg-[#12141c] p-5 rounded-xl border border-[#222736] space-y-3">
          <h3 className="text-sm font-bold font-cinzel text-stone-100 uppercase tracking-wider">
            Framing & Eyeline Principles
          </h3>
          <ul className="space-y-2 text-xs text-stone-300">
            {CINEMATOGRAPHY_BIBLE.framingPrinciples.map((fp, idx) => (
              <li key={idx} className="flex items-start gap-2 p-2 rounded bg-[#171a24] border border-[#252b3b]">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{fp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
