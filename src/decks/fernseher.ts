import type { GameCard, DeckConfig } from '../types';

const price = (v: number) => ({ value: v, higherIsBetter: true });
const diagonal = (v: number) => ({ value: v, higherIsBetter: true });
const thickness = (v: number) => ({ value: v, higherIsBetter: false });
const power = (v: number) => ({ value: v, higherIsBetter: false });
const volume = (v: number) => ({ value: v, higherIsBetter: true });

const getLocalImage = (id: string) => `${import.meta.env.BASE_URL}images/fernseher/${id}.jpg`;

const cards: GameCard[] = [
  // OLED & QD-OLED
  {
    id: "lgg4", name: "LG OLED G4", category: "OLED & QD-OLED", image: getLocalImage("lgg4"),
    stats: { preis_eur: price(2799), diagonale_zoll: diagonal(65), duenne_mm: thickness(24), strom_w: power(115), lautstaerke_db: volume(85) }
  },
  {
    id: "lgc4", name: "LG OLED C4", category: "OLED & QD-OLED", image: getLocalImage("lgc4"),
    stats: { preis_eur: price(1999), diagonale_zoll: diagonal(65), duenne_mm: thickness(45), strom_w: power(95), lautstaerke_db: volume(82) }
  },
  {
    id: "samsungs95d", name: "Samsung S95D", category: "OLED & QD-OLED", image: getLocalImage("samsungs95d"),
    stats: { preis_eur: price(2899), diagonale_zoll: diagonal(65), duenne_mm: thickness(11), strom_w: power(120), lautstaerke_db: volume(88) }
  },
  {
    id: "samsungs90d", name: "Samsung S90D", category: "OLED & QD-OLED", image: getLocalImage("samsungs90d"),
    stats: { preis_eur: price(1899), diagonale_zoll: diagonal(65), duenne_mm: thickness(40), strom_w: power(100), lautstaerke_db: volume(84) }
  },
  {
    id: "sonya95l", name: "Sony A95L", category: "OLED & QD-OLED", image: getLocalImage("sonya95l"),
    stats: { preis_eur: price(3299), diagonale_zoll: diagonal(65), duenne_mm: thickness(35), strom_w: power(130), lautstaerke_db: volume(86) }
  },
  {
    id: "sonya80l", name: "Sony A80L", category: "OLED & QD-OLED", image: getLocalImage("sonya80l"),
    stats: { preis_eur: price(2199), diagonale_zoll: diagonal(65), duenne_mm: thickness(53), strom_w: power(98), lautstaerke_db: volume(81) }
  },
  {
    id: "panamz2000", name: "Panasonic MZ2000", category: "OLED & QD-OLED", image: getLocalImage("panamz2000"),
    stats: { preis_eur: price(2999), diagonale_zoll: diagonal(65), duenne_mm: thickness(69), strom_w: power(110), lautstaerke_db: volume(95) }
  },
  {
    id: "philips908", name: "Philips OLED+908", category: "OLED & QD-OLED", image: getLocalImage("philips908"),
    stats: { preis_eur: price(2499), diagonale_zoll: diagonal(65), duenne_mm: thickness(47), strom_w: power(105), lautstaerke_db: volume(90) }
  },
  // Mini-LED & QLED
  {
    id: "samsungqn900d", name: "Samsung QN900D (8K)", category: "Mini-LED & QLED", image: getLocalImage("samsungqn900d"),
    stats: { preis_eur: price(4999), diagonale_zoll: diagonal(75), duenne_mm: thickness(15), strom_w: power(250), lautstaerke_db: volume(92) }
  },
  {
    id: "samsungqn90d", name: "Samsung QN90D", category: "Mini-LED & QLED", image: getLocalImage("samsungqn90d"),
    stats: { preis_eur: price(1999), diagonale_zoll: diagonal(65), duenne_mm: thickness(27), strom_w: power(115), lautstaerke_db: volume(87) }
  },
  {
    id: "tclqm8", name: "TCL QM8", category: "Mini-LED & QLED", image: getLocalImage("tclqm8"),
    stats: { preis_eur: price(1499), diagonale_zoll: diagonal(65), duenne_mm: thickness(42), strom_w: power(140), lautstaerke_db: volume(85) }
  },
  {
    id: "tclc845", name: "TCL C845", category: "Mini-LED & QLED", image: getLocalImage("tclc845"),
    stats: { preis_eur: price(1299), diagonale_zoll: diagonal(65), duenne_mm: thickness(65), strom_w: power(125), lautstaerke_db: volume(83) }
  },
  {
    id: "hisenseu8k", name: "Hisense U8K", category: "Mini-LED & QLED", image: getLocalImage("hisenseu8k"),
    stats: { preis_eur: price(1399), diagonale_zoll: diagonal(65), duenne_mm: thickness(76), strom_w: power(135), lautstaerke_db: volume(86) }
  },
  {
    id: "hisenseu7k", name: "Hisense U7K", category: "Mini-LED & QLED", image: getLocalImage("hisenseu7k"),
    stats: { preis_eur: price(999), diagonale_zoll: diagonal(65), duenne_mm: thickness(78), strom_w: power(110), lautstaerke_db: volume(82) }
  },
  {
    id: "sonyx95l", name: "Sony X95L", category: "Mini-LED & QLED", image: getLocalImage("sonyx95l"),
    stats: { preis_eur: price(2599), diagonale_zoll: diagonal(65), duenne_mm: thickness(60), strom_w: power(150), lautstaerke_db: volume(88) }
  },
  {
    id: "lgqned85", name: "LG QNED85", category: "Mini-LED & QLED", image: getLocalImage("lgqned85"),
    stats: { preis_eur: price(1299), diagonale_zoll: diagonal(65), duenne_mm: thickness(30), strom_w: power(100), lautstaerke_db: volume(80) }
  },
  // LED & Budget
  {
    id: "samsungcu8000", name: "Samsung CU8000", category: "LED & Budget", image: getLocalImage("samsungcu8000"),
    stats: { preis_eur: price(599), diagonale_zoll: diagonal(55), duenne_mm: thickness(26), strom_w: power(85), lautstaerke_db: volume(75) }
  },
  {
    id: "lgur8000", name: "LG UR8000", category: "LED & Budget", image: getLocalImage("lgur8000"),
    stats: { preis_eur: price(549), diagonale_zoll: diagonal(55), duenne_mm: thickness(57), strom_w: power(80), lautstaerke_db: volume(73) }
  },
  {
    id: "sonyx85l", name: "Sony X85L", category: "LED & Budget", image: getLocalImage("sonyx85l"),
    stats: { preis_eur: price(999), diagonale_zoll: diagonal(55), duenne_mm: thickness(72), strom_w: power(95), lautstaerke_db: volume(78) }
  },
  {
    id: "tclq6", name: "TCL Q6", category: "LED & Budget", image: getLocalImage("tclq6"),
    stats: { preis_eur: price(499), diagonale_zoll: diagonal(55), duenne_mm: thickness(70), strom_w: power(75), lautstaerke_db: volume(76) }
  },
  {
    id: "hisensea6k", name: "Hisense A6K", category: "LED & Budget", image: getLocalImage("hisensea6k"),
    stats: { preis_eur: price(399), diagonale_zoll: diagonal(55), duenne_mm: thickness(74), strom_w: power(70), lautstaerke_db: volume(72) }
  },
  {
    id: "philipstheone", name: "Philips The One", category: "LED & Budget", image: getLocalImage("philipstheone"),
    stats: { preis_eur: price(799), diagonale_zoll: diagonal(55), duenne_mm: thickness(82), strom_w: power(90), lautstaerke_db: volume(79) }
  },
  {
    id: "panamx700", name: "Panasonic MX700", category: "LED & Budget", image: getLocalImage("panamx700"),
    stats: { preis_eur: price(499), diagonale_zoll: diagonal(55), duenne_mm: thickness(80), strom_w: power(75), lautstaerke_db: volume(74) }
  },
  {
    id: "viziomq6", name: "Vizio MQ6", category: "LED & Budget", image: getLocalImage("viziomq6"),
    stats: { preis_eur: price(449), diagonale_zoll: diagonal(55), duenne_mm: thickness(75), strom_w: power(78), lautstaerke_db: volume(75) }
  },
  // Exoten & High-End
  {
    id: "samsungthewall", name: "Samsung The Wall", category: "Exoten & High-End", image: getLocalImage("samsungthewall"),
    stats: { preis_eur: price(150000), diagonale_zoll: diagonal(146), duenne_mm: thickness(30), strom_w: power(1200), lautstaerke_db: volume(100) }
  },
  {
    id: "lgm3", name: "LG Signature M3", category: "Exoten & High-End", image: getLocalImage("lgm3"),
    stats: { preis_eur: price(29999), diagonale_zoll: diagonal(97), duenne_mm: thickness(28), strom_w: power(200), lautstaerke_db: volume(90) }
  },
  {
    id: "sonyz9k", name: "Sony Z9K (8K)", category: "Exoten & High-End", image: getLocalImage("sonyz9k"),
    stats: { preis_eur: price(7999), diagonale_zoll: diagonal(85), duenne_mm: thickness(73), strom_w: power(300), lautstaerke_db: volume(93) }
  },
  {
    id: "beovisionharmony", name: "B&O Harmony", category: "Exoten & High-End", image: getLocalImage("beovisionharmony"),
    stats: { preis_eur: price(18500), diagonale_zoll: diagonal(77), duenne_mm: thickness(85), strom_w: power(150), lautstaerke_db: volume(105) }
  },
  {
    id: "lgrx", name: "LG Rollable RX", category: "Exoten & High-End", image: getLocalImage("lgrx"),
    stats: { preis_eur: price(80000), diagonale_zoll: diagonal(65), duenne_mm: thickness(6), strom_w: power(115), lautstaerke_db: volume(88) }
  },
  {
    id: "samsungtheframe", name: "Samsung The Frame", category: "Exoten & High-End", image: getLocalImage("samsungtheframe"),
    stats: { preis_eur: price(1299), diagonale_zoll: diagonal(55), duenne_mm: thickness(25), strom_w: power(95), lautstaerke_db: volume(77) }
  },
  {
    id: "loewebildi", name: "Loewe Bild i", category: "Exoten & High-End", image: getLocalImage("loewebildi"),
    stats: { preis_eur: price(2999), diagonale_zoll: diagonal(65), duenne_mm: thickness(64), strom_w: power(105), lautstaerke_db: volume(85) }
  },
  {
    id: "cseedn1", name: "C-Seed N1", category: "Exoten & High-End", image: getLocalImage("cseedn1"),
    stats: { preis_eur: price(200000), diagonale_zoll: diagonal(165), duenne_mm: thickness(95), strom_w: power(1500), lautstaerke_db: volume(110) }
  }
];

export const fernseherDeck: DeckConfig = {
  id: 'fernseher',
  name: 'Fernseher',
  description: 'Von preiswerten LED-TVs bis hin zu ultra-teuren MicroLED Exoten.',
  statLabels: {
    preis_eur: 'Preis',
    diagonale_zoll: 'Bildschirmdiagonale',
    duenne_mm: 'Dicke (wie dünn)',
    strom_w: 'Stromverbrauch',
    lautstaerke_db: 'Max. Lautstärke',
  },
  statUnits: {
    preis_eur: ' €',
    diagonale_zoll: ' "',
    duenne_mm: ' mm',
    strom_w: ' W',
    lautstaerke_db: ' dB',
  },
  cards
};
