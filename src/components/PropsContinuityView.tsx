import React from 'react';
import { PROP_CONTINUITY } from '../data/productionBibleData';
import { Package, ShieldCheck, Clock, Layers } from 'lucide-react';

export const PropsContinuityView: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-[#141720] border border-[#232838] rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono-code uppercase tracking-wider mb-1">
            <Package className="w-4 h-4" />
            <span>Section 8 • Prop & Artifact Continuity</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-cinzel text-stone-100">
            Key Prop & Artifact Specifications
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-2xl">
            Physical tracking for all canonical items. Replaces modern or medieval assumptions (like wax-sealed paper scrolls) with authentic 6th-century BCE Near Eastern archaeology.
          </p>
        </div>
      </div>

      {/* Prop Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROP_CONTINUITY.map((prop) => (
          <div
            key={prop.id}
            className="bg-[#12141c] border border-[#222736] rounded-xl p-5 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-base font-bold font-cinzel text-stone-100">
                  {prop.name}
                </h3>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  {prop.scenes}
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-stone-300 leading-relaxed">
                <p>
                  <strong className="text-amber-400">Materials:</strong> {prop.materials}
                </p>
                <p>
                  <strong className="text-stone-100">Visuals & Dimensions:</strong>{' '}
                  {prop.dimensionsVisuals}
                </p>
                <p>
                  <strong className="text-stone-100">Archaeological Basis:</strong>{' '}
                  {prop.historicalContext}
                </p>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-[#171a24] border border-[#252b3b] text-xs text-stone-300">
              <strong className="text-amber-300 flex items-center gap-1 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Continuity Mandate:
              </strong>
              {prop.continuityRules}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
