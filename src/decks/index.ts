import { airplanesDeck } from './airplanes';
import { animalsDeck } from './animals';
import { rcCarsDeck } from './rccars';
import { fernseherDeck } from './fernseher';

export const availableDecks = {
  [airplanesDeck.id]: airplanesDeck,
  [animalsDeck.id]: animalsDeck,
  [rcCarsDeck.id]: rcCarsDeck,
  [fernseherDeck.id]: fernseherDeck,
};
