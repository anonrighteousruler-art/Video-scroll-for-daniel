import React from 'react';
import { 
  Users, 
  Shirt, 
  Landmark, 
  Scroll, 
  Camera, 
  Layers, 
  HeartHandshake, 
  Package, 
  PawPrint, 
  AlertTriangle, 
  Sparkles, 
  Lock, 
  FileText 
} from 'lucide-react';

interface SectionNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const NAV_SECTIONS = [
  { id: 'character-locks', label: '1. Character Locks', icon: Users },
  { id: 'costume-sheet', label: '2. Costume Continuity', icon: Shirt },
  { id: 'location-locks', label: '3. Location Locks', icon: Landmark },
  { id: 'historical-language', label: '4. Historical Language', icon: Scroll },
  { id: 'cinematography', label: '5. Cinematography', icon: Camera },
  { id: 'scene-matrix', label: '6. Scene Matrix (1-7)', icon: Layers },
  { id: 'relationships-animals', label: '7 & 9. Dynamics & Lions', icon: PawPrint },
  { id: 'props-continuity', label: '8. Prop Continuity', icon: Package },
  { id: 'forbidden-visuals', label: '10. Forbidden Visuals', icon: AlertTriangle },
  { id: 'prompt-generator', label: '11. Flow Prompts', icon: Sparkles },
  { id: 'master-lock', label: '12. Master Lock', icon: Lock },
  { id: 'full-export', label: 'Full Document', icon: FileText }
];

export const SectionNav: React.FC<SectionNavProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="border-b border-[#1f232f] bg-[#0e1015] px-4 overflow-x-auto scrollbar-none">
      <div className="max-w-7xl mx-auto flex items-center gap-1 py-2 min-w-max">
        {NAV_SECTIONS.map((section) => {
          const Icon = section.icon;
          const isActive = activeTab === section.id;
          return (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-[#1e2330] text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-[#151821] border border-transparent'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-stone-500'}`} />
              <span>{section.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
