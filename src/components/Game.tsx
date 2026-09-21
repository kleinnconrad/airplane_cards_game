import { useState, useEffect } from 'react';
import type { Room } from '../types';
import { Card } from './Card';
import { motion, AnimatePresence } from 'framer-motion';
import { availableDecks } from '../decks';

interface Props {
  room: Room;
  onSelectStat: (stat: string, cardId: string) => void;
  onSelectDefendingCard: (cardId: string) => void;
  onNextRound: () => void;
  onResetGame: () => void;
}

export function Game({ room, onSelectStat, onSelectDefendingCard, onNextRound, onResetGame }: Props) {
  const [showDefenderCards, setShowDefenderCards] = useState(false);
  const [browsingPlayerId, setBrowsingPlayerId] = useState<string | null>(null);

  useEffect(() => {
    if (room.state !== 'DEFENDER_SELECTION') {
      setShowDefenderCards(false);
    }
  }, [room.state]);
  if (room.state === 'GAME_OVER') {
    const winner = room.players.find(p => p.cardsCount > 0);
    return (
      <div className="min-h-screen bg-slate-950 p-4 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center bg-slate-900 p-12 rounded-3xl border-2 border-sky-500 shadow-[0_0_50px_rgba(56,189,248,0.2)]"
        >
          <div className="text-8xl mb-6">🏆</div>
          <h1 className="text-4xl font-black text-white mb-2">Spiel Beendet</h1>
          <h2 className="text-2xl font-bold text-sky-400">{winner?.name} hat gewonnen!</h2>
          <button 
            onClick={onResetGame}
            className="mt-8 bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-xl border border-slate-600 transition-colors"
          >
            Neues Spiel
          </button>
        </motion.div>
      </div>
    );
  }

  const activePlayer = room.players[room.activePlayerIndex];
  const activeDeck = availableDecks[room.deckId as keyof typeof availableDecks];

  return (
    <div className="min-h-[100dvh] bg-slate-950 flex flex-col font-sans overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-800 p-4 flex justify-between items-center z-20 shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="text-2xl">✈️</div>
          <div className="font-black text-sky-500 tracking-tight hidden sm:block">Trumpfen</div>
        </div>
        <div className="flex space-x-2 sm:space-x-4 overflow-x-auto pb-1 hide-scrollbar">
          {room.players.map(p => {
             const isActive = p.id === activePlayer.id;
             const isWinner = room.winners.includes(room.players.findIndex(pl => pl.id === p.id));
             
             return (
              <div key={p.id} className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl border-2 transition-all shrink-0 ${isActive ? 'bg-slate-800 border-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.3)]' : isWinner && room.state === 'TRICK_EVALUATION' ? 'bg-green-900/50 border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)]' : 'bg-slate-900 border-transparent opacity-60'}`}>
                <div className="text-right">
                  <div className={`text-sm font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>{p.name}</div>
                  <div className="text-xs text-sky-400 font-bold">{p.cardsCount} Karten</div>
                </div>
                <img src={p.avatar} alt={p.name} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-700" />
                <button 
                  onClick={() => setBrowsingPlayerId(p.id)}
                  className="ml-2 flex items-center justify-center w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-colors"
                  title="Karten ansehen"
                >
                  👁️
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Main Game Area */}
      <div className="flex-1 flex flex-col w-full relative">
        
        {/* Deck Browsing Overlay */}
        <AnimatePresence>
          {browsingPlayerId && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-[100] bg-slate-950/95 flex flex-col p-4 sm:p-8 overflow-y-auto"
            >
              <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 shrink-0">
                <h2 className="text-3xl font-bold text-white text-center">
                  {room.players.find(p => p.id === browsingPlayerId)?.name}'s Karten
                </h2>
                <button 
                  onClick={() => setBrowsingPlayerId(null)}
                  className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-8 rounded-xl text-lg shadow-[0_0_15px_rgba(2,132,199,0.5)] transition-transform hover:scale-105 shrink-0"
                >
                  Zurück zum Spiel
                </button>
              </div>
              <div className="flex flex-wrap justify-center gap-4 pb-10">
                {room.players.find(p => p.id === browsingPlayerId)?.cards.map(card => (
                  <div key={card.id} className="w-[140px] sm:w-[220px]">
                    <Card 
                      card={card} 
                      isSelectable={false}
                      statLabels={activeDeck.statLabels}
                      statUnits={activeDeck.statUnits}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Status Message */}
        <div className="absolute top-4 left-0 w-full z-20 pointer-events-none px-4">
          <motion.div 
            key={room.state}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-slate-800/90 backdrop-blur border border-slate-700 rounded-full py-2 px-6 shadow-xl mx-auto max-w-fit text-center"
          >
            <h2 className="text-sm sm:text-base font-bold text-white">
              {room.state === 'DEALING' && "Karten werden ausgeteilt..."}
              {room.state === 'TURN_SELECTION' && <span className="text-sky-400">{activePlayer?.name}</span>}
              {room.state === 'TURN_SELECTION' && " ist am Zug! Wähle ein Attribut."}
              {room.state === 'REVEAL' && "Auswertung..."}
              {room.state === 'TRICK_EVALUATION' && (
                 room.winners.length === 1 
                   ? <span className="text-green-400">{room.players[room.winners[0]].name} gewinnt!</span> 
                   : <span className="text-orange-400">Unentschieden! Stechen...</span>
              )}
            </h2>
            {room.pot.length > 0 && (
               <p className="text-orange-400 text-xs font-bold mt-0.5 animate-pulse">Pot: {room.pot.length} Karten</p>
            )}
          </motion.div>
        </div>

        {/* Cards Area */}
        <div className="flex-1 flex flex-col justify-center items-center relative pt-20 pb-4 px-4 overflow-y-auto">
          
          {room.state === 'DEFENDER_SELECTION' && (
            <div className="absolute inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center p-4">
              {!showDefenderCards ? (
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">Angreifer, bitte wegschauen!</h2>
                  <p className="text-slate-400 mb-8 font-bold">{room.players[room.defendingPlayerIndex!].name}, wähle deine Verteidigungskarte.</p>
                  <button onClick={() => setShowDefenderCards(true)} className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-4 px-8 rounded-xl text-xl shadow-[0_0_20px_rgba(2,132,199,0.5)] transition-transform hover:scale-105">
                    Meine Karten zeigen
                  </button>
                </div>
              ) : (
                <div className="w-full max-w-7xl flex flex-col items-center">
                  <h2 className="text-2xl font-bold text-white mb-6 text-center text-orange-400">Wähle eine Karte zur Verteidigung</h2>
                  <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 w-full">
                    {room.players[room.defendingPlayerIndex!].cards.map(card => (
                      <div key={card.id} className="cursor-pointer hover:-translate-y-2 transition-transform relative" onClick={() => onSelectDefendingCard(card.id)}>
                        <div className="absolute inset-0 z-10"></div>
                        <Card 
                          card={card} 
                          isSelectable={false}
                          statLabels={activeDeck.statLabels}
                          statUnits={activeDeck.statUnits}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {room.state === 'TURN_SELECTION' ? (
             <div className="relative z-10 w-full max-w-7xl flex flex-col sm:flex-row flex-wrap justify-center gap-6">
               {activePlayer.cards.length <= 3 ? (
                 activePlayer.cards.map(card => (
                   <div key={card.id} className="flex-1 w-full max-w-sm mx-auto">
                     <Card 
                       card={card} 
                       isSelectable={true}
                       selectedStat={null}
                       onSelectStat={onSelectStat}
                       isWinner={false}
                       statLabels={activeDeck.statLabels}
                       statUnits={activeDeck.statUnits}
                     />
                   </div>
                 ))
               ) : (
                 activePlayer.topCard && (
                   <div className="w-full max-w-sm mx-auto">
                     <Card 
                       card={activePlayer.topCard} 
                       isSelectable={true}
                       selectedStat={null}
                       onSelectStat={onSelectStat}
                       isWinner={false}
                       statLabels={activeDeck.statLabels}
                       statUnits={activeDeck.statUnits}
                     />
                   </div>
                 )
               )}
             </div>
          ) : (
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10 sm:gap-4 w-full max-w-7xl">
              <AnimatePresence>
                {room.players.map((p, index) => {
                  if (p.cardsCount === 0 || !p.topCard) return null;
                  const isWinner = room.winners.includes(index);
                  
                  return (
                    <motion.div 
                      key={p.id}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="w-full sm:w-auto flex-1 max-w-[320px] relative"
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 border-2 border-slate-700 px-4 py-1 rounded-full text-center font-bold text-white z-10 shadow-lg whitespace-nowrap">
                         {p.name}
                      </div>
                      <Card 
                        card={p.topCard} 
                        isSelectable={false}
                        selectedStat={room.selectedStat}
                        isWinner={isWinner}
                        statLabels={activeDeck.statLabels}
                        statUnits={activeDeck.statUnits}
                      />
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          )}

          {room.state === 'TRICK_EVALUATION' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 z-20 relative"
            >
              <button 
                onClick={onNextRound}
                className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-12 rounded-xl text-xl shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-transform hover:scale-105 border border-green-400"
              >
                Nächste Runde ➔
              </button>
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}
