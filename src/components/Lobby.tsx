import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Room } from '../types';

interface Props {
  room: Room;
  onAddPlayer: (name: string) => void;
  onRemovePlayer: (id: string) => void;
  onStartGame: () => void;
}

export function Lobby({ room, onAddPlayer, onRemovePlayer, onStartGame }: Props) {
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (name.trim() && room.players.length < 4) {
      onAddPlayer(name.trim());
      setName('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-950">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-md w-full bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 p-8"
      >
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">✈️</div>
          <h1 className="text-3xl font-black text-white tracking-tight">Flugzeug</h1>
          <h1 className="text-3xl font-black text-sky-500 tracking-tight">Trumpfen</h1>
        </div>

        <div className="space-y-6">
          <div className="space-y-3 mb-6">
            <h2 className="text-slate-400 font-bold uppercase tracking-wider text-sm mb-2">Spieler ({room.players.length}/4)</h2>
            {room.players.map((p) => (
              <div key={p.id} className="flex items-center justify-between bg-slate-800 p-3 rounded-xl border border-slate-700">
                <div className="flex items-center space-x-3">
                  <img src={p.avatar} alt={p.name} className="w-10 h-10 rounded-full bg-slate-700" />
                  <span className="font-bold text-white">{p.name}</span>
                </div>
                <button onClick={() => onRemovePlayer(p.id)} className="text-red-400 hover:text-red-300 px-3 py-1 bg-red-900/30 rounded-lg">
                  Entfernen
                </button>
              </div>
            ))}
            {room.players.length === 0 && (
              <div className="text-center text-slate-500 py-4 italic">Noch keine Spieler eingetragen.</div>
            )}
          </div>

          {room.players.length < 4 && (
            <div className="flex space-x-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                className="flex-1 bg-slate-800 border-2 border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                placeholder="Spielername..."
                maxLength={12}
              />
              <button
                onClick={handleAdd}
                disabled={!name.trim()}
                className="bg-sky-600 hover:bg-sky-500 text-white font-bold px-6 py-3 rounded-xl transition-all disabled:opacity-50"
              >
                + Hinzufügen
              </button>
            </div>
          )}

          <button
            onClick={onStartGame}
            disabled={room.players.length < 2}
            className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(22,163,74,0.5)] transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
          >
            Spiel starten
          </button>
        </div>
      </motion.div>
    </div>
  );
}
