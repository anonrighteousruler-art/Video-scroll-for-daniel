import React, { useState } from 'react';
import { LOCATION_LOCKS } from '../data/productionBibleData';
import { Landmark, Compass, Eye, ShieldAlert, Sparkles } from 'lucide-react';

export const LocationLocksView: React.FC = () => {
  const [selectedLocId, setSelectedLocId] = useState<string>(LOCATION_LOCKS[0].id);

  const activeLoc = LOCATION_LOCKS.find((l) => l.id === selectedLocId) || LOCATION_LOCKS[0];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-[#141720] border border-[#232838] rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono-code uppercase tracking-wider mb-1">
            <Landmark className="w-4 h-4" />
            <span>Section 3 • Architectural & Environmental Locks</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-cinzel text-stone-100">
            Location Continuity Specifications
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-2xl">
            Locked physical sets across all 7 scenes. Locations must remain unmistakably identical whenever reused, with persistent architectural landmarks and lighting fidelity.
          </p>
        </div>

        {/* Location Selector */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-[#0c0d12] rounded-lg border border-[#1f2330]">
          {LOCATION_LOCKS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setSelectedLocId(loc.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                selectedLocId === loc.id
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-[#181b26]'
              }`}
            >
              {loc.name.split('(')[0].replace(/[A-C]\.\s*/, '')}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Location Card */}
      <div className="bg-[#12141c] border border-[#222736] rounded-xl overflow-hidden shadow-lg">
        {/* Header */}
        <div className="p-5 border-b border-[#202534] bg-gradient-to-r from-[#171a25] to-[#12141c] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-stone-100">
              {activeLoc.name}
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              Scenes: <strong className="text-amber-400">{activeLoc.scenesAppeared}</strong> • Historical Period: <strong className="text-stone-200">{activeLoc.historicalPeriod}</strong>
            </p>
          </div>
        </div>

        <div className="p-5 sm:p-6 space-y-6">
          {/* Visual Landmarks & Negative List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Landmarks */}
            <div className="bg-amber-950/20 border border-amber-500/30 rounded-lg p-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2.5">
                <Eye className="w-4 h-4" />
                <span>Recurring Visual Landmarks (Must Be Identical)</span>
              </div>
              <ul className="space-y-1.5 text-xs text-stone-300">
                {activeLoc.recurringVisualLandmarks.map((lm, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">★</span>
                    <span>{lm}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Must Not Appear */}
            <div className="bg-rose-950/20 border border-rose-500/30 rounded-lg p-4">
              <div className="flex items-center gap-1.5 text-rose-400 text-xs font-bold uppercase tracking-wider mb-2.5">
                <ShieldAlert className="w-4 h-4" />
                <span>Forbidden Elements (Must NOT Appear)</span>
              </div>
              <ul className="space-y-1.5 text-xs text-stone-300">
                {activeLoc.mustNotAppear.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Architecture & Construction */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#232838]">
              <span className="text-[11px] font-mono-code uppercase text-amber-400 font-semibold block mb-1">
                Architecture & Form
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">{activeLoc.architecture}</p>
            </div>

            <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#232838]">
              <span className="text-[11px] font-mono-code uppercase text-amber-400 font-semibold block mb-1">
                Construction Materials
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">{activeLoc.constructionMaterials}</p>
            </div>

            <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#232838]">
              <span className="text-[11px] font-mono-code uppercase text-amber-400 font-semibold block mb-1">
                Flooring & Ground
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">{activeLoc.floor}</p>
            </div>

            <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#232838]">
              <span className="text-[11px] font-mono-code uppercase text-amber-400 font-semibold block mb-1">
                Walls & Glazed Reliefs
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">{activeLoc.walls}</p>
            </div>

            <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#232838]">
              <span className="text-[11px] font-mono-code uppercase text-amber-400 font-semibold block mb-1">
                Ceiling & Beams
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">{activeLoc.ceiling}</p>
            </div>

            <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#232838]">
              <span className="text-[11px] font-mono-code uppercase text-amber-400 font-semibold block mb-1">
                Windows & Portals
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                <strong>Windows:</strong> {activeLoc.windows}
              </p>
              <p className="text-xs text-stone-300 leading-relaxed mt-1">
                <strong>Doors:</strong> {activeLoc.doors}
              </p>
            </div>
          </div>

          {/* Lighting, Atmosphere & Props */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#171a24] p-4 rounded-lg border border-[#232838]">
              <span className="text-[11px] font-mono-code uppercase text-amber-400 font-semibold block mb-1">
                Lighting Philosophy & Key Sources
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">{activeLoc.lighting}</p>
            </div>

            <div className="bg-[#171a24] p-4 rounded-lg border border-[#232838]">
              <span className="text-[11px] font-mono-code uppercase text-amber-400 font-semibold block mb-1">
                Atmosphere & Environmental Air
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                <strong>Atmosphere:</strong> {activeLoc.atmosphere}
              </p>
              <p className="text-xs text-stone-300 leading-relaxed mt-1">
                <strong>Details:</strong> {activeLoc.environmentalDetails}
              </p>
            </div>
          </div>

          {/* Furniture, Textiles & Palette */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#232838]">
              <span className="text-[11px] font-mono-code uppercase text-stone-400 font-semibold block mb-1">
                Furniture & Stools
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">{activeLoc.furniture}</p>
            </div>

            <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#232838]">
              <span className="text-[11px] font-mono-code uppercase text-stone-400 font-semibold block mb-1">
                Textiles & Rugs
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">{activeLoc.textiles}</p>
            </div>

            <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#232838]">
              <span className="text-[11px] font-mono-code uppercase text-stone-400 font-semibold block mb-1">
                Color Palette & Props
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                <strong>Colors:</strong> {activeLoc.colors}
              </p>
              <p className="text-xs text-stone-300 leading-relaxed mt-1">
                <strong>Props:</strong> {activeLoc.props}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
