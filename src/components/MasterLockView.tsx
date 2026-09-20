import React, { useState } from 'react';
import { MASTER_CONTINUITY_LOCK } from '../data/productionBibleData';
import { Lock, Copy, Check, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

export const MasterLockView: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(MASTER_CONTINUITY_LOCK);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-[#141720] border border-[#232838] rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono-code uppercase tracking-wider mb-1">
            <Lock className="w-4 h-4" />
            <span>Section 12 • Master Production Lock</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-cinzel text-stone-100">
            Master Continuity Lock
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-2xl">
            The concise, immutable master continuity lock designed to be copied directly into future Google Flow / Veo system prompts or pre-roll generation parameters.
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="px-4 py-2.5 rounded-lg text-xs font-semibold bg-amber-500 text-stone-950 hover:bg-amber-400 flex items-center gap-2 transition-all self-start sm:self-auto shadow-sm"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-stone-950" />
              <span>Master Lock Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-stone-950" />
              <span>Copy Master Continuity Lock</span>
            </>
          )}
        </button>
      </div>

      {/* Lock Content Container */}
      <div className="bg-[#12141c] border border-[#222736] rounded-xl overflow-hidden shadow-lg">
        <div className="p-4 border-b border-[#202534] bg-[#171a24] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono-code font-bold text-stone-200">
              IMMUTABLE PRODUCTION LOCK (SYSTEM PROMPT BLOCK)
            </span>
          </div>
          <span className="text-[11px] font-mono-code text-stone-400">
            Google Flow / Veo Ready
          </span>
        </div>

        <div className="p-5 sm:p-6">
          <pre className="p-5 rounded-lg bg-[#0c0d12] border border-[#1e2332] text-xs sm:text-sm font-mono-code text-amber-300/90 whitespace-pre-wrap leading-relaxed shadow-inner">
            {MASTER_CONTINUITY_LOCK}
          </pre>
        </div>

        <div className="p-4 bg-[#141722] border-t border-[#202534] text-xs text-stone-400 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            Instructions: Prepend this Master Lock to any image, keyframe, or video prompt in Google Flow or Veo to maintain unbreakable visual identity across all 7 scenes.
          </span>
        </div>
      </div>
    </div>
  );
};
