import type { GameCard } from '../types';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Props {
  card: GameCard;
  isSelectable?: boolean;
  selectedStat?: string | null;
  onSelectStat?: (statKey: string, cardId: string) => void;
  isWinner?: boolean;
  statLabels: Record<string, string>;
  statUnits: Record<string, string>;
}

export function Card({ card, isSelectable, selectedStat, onSelectStat, isWinner, statLabels, statUnits }: Props) {
  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-slate-800 rounded-xl overflow-hidden shadow-2xl border-2 border-slate-700 w-full max-w-sm mx-auto flex flex-col h-[460px]"
    >
      <div className="h-44 overflow-hidden relative border-b-2 border-slate-700">
        <img src={card.image} alt={card.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute top-2 right-2 bg-sky-500 text-white text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded shadow">
          {card.category}
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col bg-slate-800">
        <h2 className="text-xl font-black text-white mb-3 text-center">{card.name}</h2>
        
        <div className="flex-1 flex flex-col justify-between space-y-2">
          {Object.keys(card.stats).map((key) => {
            const isSelected = selectedStat === key;
            return (
              <button
                key={key}
                disabled={!isSelectable}
                onClick={() => onSelectStat?.(key, card.id)}
                className={cn(
                  "flex justify-between items-center w-full px-3 py-1.5 rounded transition-all text-sm",
                  isSelectable ? "hover:bg-slate-700 active:scale-95 cursor-pointer ring-1 ring-slate-600" : "cursor-default",
                  isSelected ? (isWinner ? "bg-green-900/50 ring-2 ring-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)]" : "bg-sky-900/50 ring-2 ring-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.3)]") : "bg-slate-900/50 ring-1 ring-slate-700"
                )}
              >
                <span className={cn("text-xs font-semibold uppercase tracking-wide", isSelected ? (isWinner ? "text-green-400" : "text-sky-400") : "text-slate-400")}>{statLabels[key]}</span>
                <span className={cn("font-bold font-mono text-base", isSelected ? "text-white" : "text-slate-200")}>
                  {card.stats[key].value}{statUnits[key]}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </motion.div>
  );
}

export function CardBack() {
  return (
    <div className="bg-slate-800 rounded-xl shadow-2xl border-2 border-slate-700 w-full max-w-sm mx-auto flex items-center justify-center h-[460px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-700 to-slate-900">
      <div className="text-center">
        <div className="text-7xl mb-4 opacity-80">✈️</div>
        <div className="text-2xl font-black text-slate-500 tracking-widest">TRUMPFEN</div>
      </div>
    </div>
  );
}
