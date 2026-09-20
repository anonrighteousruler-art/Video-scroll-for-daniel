import React, { useState } from 'react';
import { COSTUME_CONTINUITY } from '../data/productionBibleData';
import { Shirt, CheckCircle, XCircle, ShieldAlert, Sparkles, Filter } from 'lucide-react';

export const CostumeSheetView: React.FC = () => {
  const [selectedChar, setSelectedChar] = useState<string>('all');

  const filteredCostumes =
    selectedChar === 'all'
      ? COSTUME_CONTINUITY
      : COSTUME_CONTINUITY.filter((c) => c.characterId === selectedChar);

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-[#141720] border border-[#232838] rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono-code uppercase tracking-wider mb-1">
            <Shirt className="w-4 h-4" />
            <span>Section 2 • Costume Sheet & Wear Continuity</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-cinzel text-stone-100">
            Costume Continuity Specifications
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-2xl">
            Strict garment tracking across all 7 scenes. Daniel&apos;s attire is locked across Scenes 1–7 (gathering only sand dust in 6–7); Darius&apos;s royal robes remain locked (disheveled in 7).
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-2 bg-[#0c0d12] p-1.5 rounded-lg border border-[#1f2330]">
          <Filter className="w-3.5 h-3.5 text-stone-500 ml-1" />
          <select
            value={selectedChar}
            onChange={(e) => setSelectedChar(e.target.value)}
            className="bg-transparent text-xs text-stone-200 border-none outline-none pr-3 cursor-pointer"
          >
            <option value="all" className="bg-[#141720]">All Characters</option>
            {COSTUME_CONTINUITY.map((c) => (
              <option key={c.characterId} value={c.characterId} className="bg-[#141720]">
                {c.characterName}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Costume Cards */}
      <div className="space-y-6">
        {filteredCostumes.map((costume) => (
          <div
            key={costume.characterId}
            className="bg-[#12141c] border border-[#222736] rounded-xl overflow-hidden shadow-md"
          >
            <div className="p-4 sm:p-5 border-b border-[#202534] bg-gradient-to-r from-[#171a25] to-[#12141c] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold font-cinzel text-stone-100">
                  {costume.characterName}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono-code bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  {costume.scenesPresent}
                </span>
              </div>
              <div className="text-xs text-stone-400">
                Palette: <span className="text-stone-200 font-medium">{costume.colors}</span>
              </div>
            </div>

            <div className="p-5 sm:p-6 space-y-5">
              {/* Garment Breakdown Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#232838]">
                  <span className="text-[11px] font-mono-code uppercase text-amber-400 font-semibold block mb-1">
                    Base Garments
                  </span>
                  <p className="text-xs text-stone-300 leading-relaxed">{costume.baseGarments}</p>
                </div>

                <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#232838]">
                  <span className="text-[11px] font-mono-code uppercase text-amber-400 font-semibold block mb-1">
                    Outer Garments & Mantles
                  </span>
                  <p className="text-xs text-stone-300 leading-relaxed">{costume.outerGarments}</p>
                </div>

                <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#232838]">
                  <span className="text-[11px] font-mono-code uppercase text-amber-400 font-semibold block mb-1">
                    Belts, Sash & Fasteners
                  </span>
                  <p className="text-xs text-stone-300 leading-relaxed">{costume.belts}</p>
                </div>

                <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#232838]">
                  <span className="text-[11px] font-mono-code uppercase text-amber-400 font-semibold block mb-1">
                    Footwear & Leather
                  </span>
                  <p className="text-xs text-stone-300 leading-relaxed">{costume.footwear}</p>
                </div>
              </div>

              {/* Jewelry, Headwear, Materials, Wear State */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#232838]">
                  <span className="text-[11px] font-mono-code uppercase text-stone-400 font-semibold block mb-1">
                    Headwear & Crowns
                  </span>
                  <p className="text-xs text-stone-300 leading-relaxed">{costume.crownsHeadwear}</p>
                </div>

                <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#232838]">
                  <span className="text-[11px] font-mono-code uppercase text-stone-400 font-semibold block mb-1">
                    Jewelry & Metalwork
                  </span>
                  <p className="text-xs text-stone-300 leading-relaxed">{costume.jewelry}</p>
                </div>

                <div className="bg-[#171a24] p-3.5 rounded-lg border border-[#232838]">
                  <span className="text-[11px] font-mono-code uppercase text-stone-400 font-semibold block mb-1">
                    Materials & Weave Texture
                  </span>
                  <p className="text-xs text-stone-300 leading-relaxed">{costume.materials}</p>
                </div>
              </div>

              {/* Wear & Dirt Evolution */}
              <div className="bg-[#171922] p-4 rounded-lg border border-[#252b3b]">
                <span className="text-[11px] font-mono-code uppercase text-amber-400 font-semibold block mb-1">
                  Wear & Environmental Dirt Progression
                </span>
                <p className="text-xs text-stone-300 leading-relaxed">{costume.wearDirtState}</p>
              </div>

              {/* Permitted vs Forbidden Changes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Permitted */}
                <div className="bg-emerald-950/15 border border-emerald-500/30 rounded-lg p-3.5">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Permitted Narrative Changes</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-stone-300">
                    {costume.permittedChanges.map((change, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold">✓</span>
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Forbidden */}
                <div className="bg-rose-950/15 border border-rose-500/30 rounded-lg p-3.5">
                  <div className="flex items-center gap-1.5 text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <XCircle className="w-3.5 h-3.5" />
                    <span>Forbidden Costume Deviations</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-stone-300">
                    {costume.forbiddenChanges.map((change, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold">✗</span>
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
