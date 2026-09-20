import React from 'react';
import { CHARACTER_RELATIONSHIPS, ANIMAL_CONTINUITY } from '../data/productionBibleData';
import { PawPrint, HeartHandshake, ShieldAlert, Sparkles, CheckCircle, AlertTriangle } from 'lucide-react';

export const RelationshipsAndAnimalsView: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* SECTION 7: Character Relationships */}
      <div className="space-y-4">
        <div className="bg-[#141720] border border-[#232838] rounded-xl p-4 sm:p-5">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono-code uppercase tracking-wider mb-1">
            <HeartHandshake className="w-4 h-4" />
            <span>Section 7 • Visual & Emotional Blocking Continuity</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-cinzel text-stone-100">
            Character Relationship Continuity
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-3xl">
            Derived strictly from physical blocking and screenplay eyelines. No invented psychoanalysis or extraneous backstory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CHARACTER_RELATIONSHIPS.map((rel, idx) => (
            <div
              key={idx}
              className="bg-[#12141c] border border-[#222736] rounded-xl p-5 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono-code bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  {rel.pair}
                </span>
                <h3 className="text-base font-bold font-cinzel text-stone-100 mt-2 mb-2">
                  {rel.visualDynamic}
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed mb-3">
                  <strong className="text-amber-400/90 block mb-1">Visual Blocking & Eyelines:</strong>
                  {rel.blockingDetails}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#171a24] border border-[#252b3b] text-xs text-stone-300 mt-2">
                <strong className="text-stone-100 block mb-0.5">Screenplay Subtext:</strong>
                {rel.emotionalSubtext}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 9: Animal Continuity */}
      <div className="space-y-4 pt-4 border-t border-[#1f232f]">
        <div className="bg-[#141720] border border-[#232838] rounded-xl p-4 sm:p-5">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono-code uppercase tracking-wider mb-1">
            <PawPrint className="w-4 h-4" />
            <span>Section 9 • Asiatic Lion (Panthera leo persica) Continuity</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-cinzel text-stone-100">
            Asiatic Lion Biological & Behavioral Lock
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-3xl">
            Authentic Near Eastern apex predator. Distinguishable from African lions by smaller size, sparse mane revealing ears, and a signature longitudinal fold of skin along the belly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Anatomical Profile */}
          <div className="bg-[#12141c] p-5 rounded-xl border border-[#222736] space-y-3">
            <h3 className="text-base font-bold font-cinzel text-stone-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Species Anatomy & Physical Traits
            </h3>

            <div className="space-y-2.5 text-xs text-stone-300 leading-relaxed">
              <div className="p-2.5 rounded-lg bg-[#171a24] border border-amber-500/20">
                <strong className="text-amber-400 block mb-0.5">
                  CRITICAL SPECIES MARKER: Longitudinal Belly Fold
                </strong>
                {ANIMAL_CONTINUITY.anatomicalProfile.bellyFold}
              </div>
              <p>
                <strong className="text-stone-100">Body & Proportions:</strong> {ANIMAL_CONTINUITY.anatomicalProfile.size}
              </p>
              <p>
                <strong className="text-stone-100">Mane Structure:</strong> {ANIMAL_CONTINUITY.anatomicalProfile.mane}
              </p>
              <p>
                <strong className="text-stone-100">Coat & Pelt:</strong> {ANIMAL_CONTINUITY.anatomicalProfile.coatColor}
              </p>
              <p>
                <strong className="text-stone-100">Eyes & Facial Anatomy:</strong> {ANIMAL_CONTINUITY.anatomicalProfile.eyes}
              </p>
            </div>
          </div>

          {/* Behavioral Dynamics & Negatives */}
          <div className="space-y-4">
            <div className="bg-[#12141c] p-5 rounded-xl border border-[#222736] space-y-3">
              <h3 className="text-base font-bold font-cinzel text-stone-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Kinematics, Stalking & Resting Mechanics
              </h3>
              <div className="space-y-2 text-xs text-stone-300 leading-relaxed">
                <p>
                  <strong className="text-stone-100">Approach Pace:</strong> {ANIMAL_CONTINUITY.behavioralContinuity.approachSpeed}
                </p>
                <p>
                  <strong className="text-stone-100">Stopping Distance:</strong> {ANIMAL_CONTINUITY.behavioralContinuity.interaction}
                </p>
                <p>
                  <strong className="text-stone-100">Resting Mechanics:</strong> {ANIMAL_CONTINUITY.behavioralContinuity.restingMechanics}
                </p>
                <p>
                  <strong className="text-stone-100">Tapetum Lucidum Shine:</strong> {ANIMAL_CONTINUITY.behavioralContinuity.lightingResponse}
                </p>
              </div>
            </div>

            {/* Negative Animal Traits */}
            <div className="bg-rose-950/20 p-4 rounded-xl border border-rose-500/30">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Forbidden Animal Traits (Rejection Criteria)</span>
              </div>
              <ul className="space-y-1 text-xs text-stone-300">
                {ANIMAL_CONTINUITY.strictNegativeAnimalTraits.map((trait, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
