import React, { useState } from 'react';
import { FILM_METADATA, MASTER_CONTINUITY_LOCK } from '../data/productionBibleData';
import { Copy, Check, ShieldCheck, Film, BookOpen, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [copiedLock, setCopiedLock] = useState(false);

  const handleCopyMasterLock = () => {
    navigator.clipboard.writeText(MASTER_CONTINUITY_LOCK);
    setCopiedLock(true);
    setTimeout(() => setCopiedLock(false), 2500);
  };

  return (
    <header className="border-b border-[#232734] bg-[#11131a]/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-stone-100">
                  {FILM_METADATA.title}
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-mono-code font-medium bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded">
                  LOCKED BIBLE
                </span>
              </div>
              <p className="text-xs text-stone-400">
                Production-Design & Continuity System • Google Flow / Veo Engine • {FILM_METADATA.source}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setActiveTab('prompt-generator')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors border ${
              activeTab === 'prompt-generator'
                ? 'bg-amber-500 text-stone-950 border-amber-400 font-semibold'
                : 'bg-[#1a1d26] text-stone-200 border-[#2b3040] hover:bg-[#232734]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Flow Prompt Builder</span>
          </button>

          <button
            onClick={() => setActiveTab('full-export')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors border ${
              activeTab === 'full-export'
                ? 'bg-amber-500 text-stone-950 border-amber-400 font-semibold'
                : 'bg-[#1a1d26] text-stone-200 border-[#2b3040] hover:bg-[#232734]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Full Document View</span>
          </button>

          <button
            onClick={handleCopyMasterLock}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r from-amber-600/20 to-amber-500/10 hover:from-amber-600/30 hover:to-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1.5 transition-all shadow-sm"
            title="Copy Master Continuity Lock to Clipboard"
          >
            {copiedLock ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Lock Copied!</span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Copy Master Lock</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
