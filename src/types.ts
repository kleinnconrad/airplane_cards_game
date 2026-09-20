export interface CardStat {
  value: number;
  higherIsBetter: boolean;
}

export interface AirplaneCard {
  id: string;
  name: string;
  image: string;
  category: string;
  stats: {
    topSpeed_kmh: CardStat;
    wingspan_m: CardStat;
    range_km: CardStat;
    passengers: CardStat;
    thrust_kN: CardStat;
    firstFlight_year: CardStat;
  };
}

export type GameState = 'LOBBY' | 'DEALING' | 'TURN_SELECTION' | 'DEFENDER_SELECTION' | 'REVEAL' | 'TRICK_EVALUATION' | 'GAME_OVER';

export interface Player {
  id: string;
  name: string;
  connected: boolean;
  avatar: string;
  cardsCount: number;
  topCard: AirplaneCard | null;
  cards: AirplaneCard[];
}

export interface Room {
  id: string;
  players: Player[];
  state: GameState;
  activePlayerIndex: number;
  defendingPlayerIndex?: number;
  pot: AirplaneCard[];
  selectedStat: keyof AirplaneCard['stats'] | null;
  winners: number[];
}
