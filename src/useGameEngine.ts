import { useState, useCallback } from 'react';
import type { AirplaneCard, Player, GameState, Room } from './types';
import { deck } from './deck';

const shuffle = (array: any[]) => {
  let currentIndex = array.length, randomIndex;
  const newArr = [...array];
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArr[currentIndex], newArr[randomIndex]] = [newArr[randomIndex], newArr[currentIndex]];
  }
  return newArr;
};

export function useGameEngine() {
  const [room, setRoom] = useState<Room>({
    id: 'LOCAL',
    players: [],
    state: 'LOBBY',
    activePlayerIndex: 0,
    pot: [],
    selectedStat: null,
    winners: []
  });

  const addPlayer = (name: string) => {
    setRoom(r => ({
      ...r,
      players: [...r.players, {
        id: Math.random().toString(36).substr(2, 9),
        name,
        connected: true,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
        cardsCount: 0,
        topCard: null,
        cards: []
      }]
    }));
  };

  const removePlayer = (id: string) => {
    setRoom(r => ({
      ...r,
      players: r.players.filter(p => p.id !== id)
    }));
  };

  const startGame = () => {
    if (room.players.length < 2) return;
    
    const shuffledDeck = shuffle([...deck]);
    const newPlayers = [...room.players].map(p => ({ ...p, cards: [] as AirplaneCard[] }));
    
    let pIndex = 0;
    shuffledDeck.forEach(card => {
      newPlayers[pIndex].cards.push(card);
      pIndex = (pIndex + 1) % newPlayers.length;
    });
    
    newPlayers.forEach(p => {
      p.cardsCount = p.cards.length;
      p.topCard = p.cards[0];
    });

    setRoom(r => ({
      ...r,
      state: 'TURN_SELECTION',
      activePlayerIndex: Math.floor(Math.random() * newPlayers.length),
      players: newPlayers,
      pot: [],
      selectedStat: null,
      winners: []
    }));
  };

  const computeWinners = (players: Player[], statKey: keyof AirplaneCard['stats']): number[] => {
    let bestValue = -Infinity;
    let higherIsBetter = true;
    let winners: number[] = [];

    const currentCards = players.map(p => p.cards[0]).filter(Boolean);
    if (currentCards.length > 0) {
      higherIsBetter = currentCards[0].stats[statKey].higherIsBetter;
      bestValue = higherIsBetter ? -Infinity : Infinity;
    }

    players.forEach((p, index) => {
      if (p.cards.length === 0) return;
      const val = p.cards[0].stats[statKey].value;
      if (higherIsBetter) {
        if (val > bestValue) { bestValue = val; winners = [index]; }
        else if (val === bestValue) { winners.push(index); }
      } else {
        if (val < bestValue) { bestValue = val; winners = [index]; }
        else if (val === bestValue) { winners.push(index); }
      }
    });
    return winners;
  };

  const selectStat = (statKey: keyof AirplaneCard['stats'], cardId?: string) => {
    const players = room.players.map(p => ({ ...p, cards: [...p.cards] }));
    const activePlayer = players[room.activePlayerIndex];
    
    if (cardId && activePlayer.cards.length <= 3) {
      const cardIndex = activePlayer.cards.findIndex(c => c.id === cardId);
      if (cardIndex > 0) {
        const chosenCard = activePlayer.cards.splice(cardIndex, 1)[0];
        activePlayer.cards.unshift(chosenCard);
        activePlayer.topCard = chosenCard;
      }
    }

    const defenderIndex = players.findIndex((p, idx) => idx !== room.activePlayerIndex && p.cards.length > 0 && p.cards.length <= 3);

    if (defenderIndex !== -1) {
      setRoom(r => ({
        ...r,
        players,
        state: 'DEFENDER_SELECTION',
        selectedStat: statKey,
        defendingPlayerIndex: defenderIndex
      }));
    } else {
      const finalWinners = computeWinners(players, statKey);
      
      setRoom(r => ({
        ...r,
        players,
        state: 'TRICK_EVALUATION',
        selectedStat: statKey,
        winners: finalWinners
      }));

      setTimeout(() => {
        evaluateTrick(statKey, finalWinners);
      }, 3000);
    }
  };

  const selectDefendingCard = (cardId: string) => {
    const statKey = room.selectedStat;
    if (!statKey) return;

    const players = room.players.map(p => ({ ...p, cards: [...p.cards] }));
    const defender = players[room.defendingPlayerIndex!];
    
    if (defender && defender.cards.length <= 3) {
      const cardIndex = defender.cards.findIndex(c => c.id === cardId);
      if (cardIndex > 0) {
        const chosenCard = defender.cards.splice(cardIndex, 1)[0];
        defender.cards.unshift(chosenCard);
        defender.topCard = chosenCard;
      }
    }

    const finalWinners = computeWinners(players, statKey);

    setRoom(r => ({
      ...r,
      players,
      state: 'TRICK_EVALUATION',
      winners: finalWinners
    }));

    setTimeout(() => {
      evaluateTrick(statKey, finalWinners);
    }, 3000);
  };

  const evaluateTrick = useCallback((statKey: keyof AirplaneCard['stats'], winners: number[]) => {
    setRoom(r => {
      // PURE state update - don't mutate arrays with shift()!
      const players = r.players.map(p => ({ 
        ...p, 
        cards: p.cards.length > 0 ? p.cards.slice(1) : [] 
      }));
      const newPot = [...r.pot];
      
      // Take top cards from the ORIGINAL state
      const cardsInPlay = r.players.map(p => p.cards.length > 0 ? p.cards[0] : null).filter(Boolean) as AirplaneCard[];
      newPot.push(...cardsInPlay);
      
      let nextActivePlayerIndex = r.activePlayerIndex;

      if (winners.length === 1) {
        // One winner takes pot
        players[winners[0]].cards = [...players[winners[0]].cards, ...newPot];
        newPot.length = 0; // empty pot
        nextActivePlayerIndex = winners[0];
      } else {
        // Draw (Stechen)
        // active player stays the same
      }

      // Update card counts and top cards
      players.forEach(p => {
        p.cardsCount = p.cards.length;
        p.topCard = p.cards.length > 0 ? p.cards[0] : null;
      });

      // Check elimination
      const remainingPlayers = players.filter(p => p.cards.length > 0);
      let nextState = r.state;
      if (remainingPlayers.length === 1) {
        nextState = 'GAME_OVER';
      } else {
        nextState = 'TURN_SELECTION';
        // Ensure active player has cards
        while (players[nextActivePlayerIndex].cards.length === 0) {
          nextActivePlayerIndex = (nextActivePlayerIndex + 1) % players.length;
        }
      }

      return {
        ...r,
        state: nextState,
        players,
        pot: newPot,
        selectedStat: null,
        winners: [],
        activePlayerIndex: nextActivePlayerIndex
      };
    });
  }, []);

  const resetGame = () => {
    setRoom(r => ({
      ...r,
      state: 'LOBBY',
      players: r.players.map(p => ({ ...p, cards: [], cardsCount: 0, topCard: null })),
      pot: [],
      selectedStat: null,
      winners: []
    }));
  };

  return {
    room,
    addPlayer,
    removePlayer,
    startGame,
    selectStat,
    selectDefendingCard,
    resetGame
  };
}
