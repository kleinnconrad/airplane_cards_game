export interface CardStat {
  value: number;
  higherIsBetter: boolean;
}

export interface GameCard {
  id: string;
  name: string;
  image: string;
  category: string;
  stats: Record<string, CardStat>;
}

export interface DeckConfig {
  id: string;
  name: string;
  description: string;
  statLabels: Record<string, string>;
  statUnits: Record<string, string>;
  cards: GameCard[];
}

export type GameState = 'LOBBY' | 'DEALING' | 'TURN_SELECTION' | 'DEFENDER_SELECTION' | 'REVEAL' | 'TRICK_EVALUATION' | 'GAME_OVER';

export interface Player {
  id: string;
  name: string;
  connected: boolean;
  avatar: string;
  cardsCount: number;
  topCard: GameCard | null;
  cards: GameCard[];
}

export interface Room {
  id: string;
  players: Player[];
  state: GameState;
  activePlayerIndex: number;
  defendingPlayerIndex?: number;
  pendingDefenders?: number[];
  deckId: string;
  pot: GameCard[];
  selectedStat: string | null;
  winners: number[];
}
