import React, { useState } from 'react';
import { MASTER_NEGATIVE_VISUALS } from '../data/productionBibleData';
import { AlertTriangle, Copy, Check, ShieldAlert, Sparkles } from 'lucide-react';

export const ForbiddenVisualsView: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const fullNegativePrompt = MASTER_NEGATIVE_VISUALS.join(', ');

  const handleCopy = () => {
    navigator.clipboard.writeText(fullNegativePrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categories = [
    {
      title: '1. Anachronisms & Modernity',
      items: [
        'Modern objects, electrical wires, light switches, modern plumbing, plastic items',
        'Wristwatches, modern eyewear, modern rings, printed books, bound codices with spines',
        'Paper envelopes, modern metal zippers, synthetic stitching, machine-hemmed edges',
        'Modern furniture, glass window panes, contemporary makeup, lipstick, mascara, modern hair gel'
      ]
    },
    {
      title: '2. Medieval European & Fantasy Tropes',
      items: [
        'Medieval European knight plate armor, chainmail coifs, visored bascinets, metal gauntlets',
        'Roman legionary segmentata, cross motifs, heraldic shields, broadswords, crossbows, halberds',
        'Fantasy castles with fairy-tale spires, Gothic stone arches, gargoyles, medieval portcullises',
        'Velvet cloaks, Renaissance doublets, theatrical villain capes'
      ]
    },
    {
      title: '3. Supernatural Restraint Violations',
      items: [
        'Glowing magical auras, glowing neon angels, wings of light, radiant celestial figures',
        'Laser-like light beams, lightning bolts, supernatural fireballs, explosion effects',
        'CGI ghost figures, fantasy smoke wisps, comic-book divine halos, levitating objects',
        'CRITICAL RULE: Screenplay explicitly forbids glowing angels or supernatural pyrotechnics in Scene 6'
      ]
    },
    {
      title: '4. AI Generative & Anatomy Defects',
      items: [
        'Distorted hands, extra fingers, fused thumbs, missing digits, mutated anatomy',
        'Duplicated people in background, malformed eyes, asymmetric pupils, floating jewelry',
        'Clothes clipping through limbs, unnatural skin smoothing/wax doll textures, blurry facial features',
        'Impossible shadows, multiple conflicting light directions, visible digital noise, watermarks, subtitles, text overlays'
      ]
    },
    {
      title: '5. Animal & Behavioral Defects',
      items: [
        'African lion full fluffy mane hiding ears (must be Asiatic lion with exposed ears & belly fold)',
        'Roaring CGI monster lion, snarling fangs, dripping saliva, cartoon aggression',
        'Lions with wolf anatomy or unnatural rapid agile leaps, glowing yellow/red demon eyes',
        'Emaciated, diseased, or starved appearance (these are well-kept royal game lions)'
      ]
    },
    {
      title: '6. Character Continuity Shifts',
      items: [
        'Inconsistent character ages across scenes, changing hairstyles, changing beard shapes',
        'Daniel wearing golden royal robes, or torn bloody rags',
        'Darius wearing battle armor in court, or European pointed crowns',
        'Guards dressed as Roman legionaries or crusaders'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-[#141720] border border-[#232838] rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-rose-400 text-xs font-mono-code uppercase tracking-wider mb-1">
            <AlertTriangle className="w-4 h-4" />
            <span>Section 10 • Master Negative & Forbidden Visuals</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-cinzel text-stone-100">
            Universal Rejection Catalog
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-2xl">
            Strict negative prompts for Google Flow / Veo generations. Any frame containing these elements is considered a production failure and must be re-rendered.
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="px-4 py-2 rounded-lg text-xs font-semibold bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/40 flex items-center gap-2 transition-all self-start sm:self-auto shadow-sm"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300">Negative Prompt Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-rose-400" />
              <span>Copy Full Negative Prompt</span>
            </>
          )}
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-[#12141c] border border-[#222736] rounded-xl p-5 shadow-sm space-y-3"
          >
            <h3 className="text-sm font-bold font-cinzel text-rose-400 uppercase tracking-wide">
              {cat.title}
            </h3>
            <ul className="space-y-2 text-xs text-stone-300">
              {cat.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Raw Prompt Box */}
      <div className="bg-[#0e1017] border border-[#232838] rounded-xl p-4">
        <span className="text-[11px] font-mono-code uppercase text-stone-400 font-semibold block mb-2">
          Raw Concatenated Negative Prompt (Ready for Flow / Veo Engine)
        </span>
        <div className="p-3 rounded-lg bg-[#141720] border border-[#1d222e] text-xs font-mono-code text-stone-300 leading-relaxed max-h-36 overflow-y-auto">
          {fullNegativePrompt}
        </div>
      </div>
    </div>
  );
};
