import type { GameCard, DeckConfig } from '../types';

const speed = (v: number) => ({ value: v, higherIsBetter: true });
const length = (v: number) => ({ value: v, higherIsBetter: true });
const weight = (v: number) => ({ value: v, higherIsBetter: true });
const cells = (v: number) => ({ value: v, higherIsBetter: true });
const price = (v: number) => ({ value: v, higherIsBetter: false }); // Lower price is more affordable/better, or should it be higher? Let's use false so cheaper wins.

const getLocalImage = (id: string) => `${import.meta.env.BASE_URL}images/${id}.jpg`;

const cards: GameCard[] = [
  // Speedrun & On-Road
  {
    id: "xo1", name: "Traxxas XO-1", category: "Speedrun & On-Road", image: getLocalImage("xo1"),
    stats: { topSpeed_kmh: speed(160), length_mm: length(686), weight_kg: weight(4.6), lipo_cells: cells(6), price_eur: price(850) }
  },
  {
    id: "limitless", name: "Arrma Limitless", category: "Speedrun & On-Road", image: getLocalImage("limitless"),
    stats: { topSpeed_kmh: speed(175), length_mm: length(730), weight_kg: weight(3.9), lipo_cells: cells(8), price_eur: price(950) }
  },
  {
    id: "infraction", name: "Arrma Infraction", category: "Speedrun & On-Road", image: getLocalImage("infraction"),
    stats: { topSpeed_kmh: speed(130), length_mm: length(695), weight_kg: weight(5.0), lipo_cells: cells(6), price_eur: price(650) }
  },
  {
    id: "vte2", name: "Hobao VTE2", category: "Speedrun & On-Road", image: getLocalImage("vte2"),
    stats: { topSpeed_kmh: speed(180), length_mm: length(560), weight_kg: weight(3.2), lipo_cells: cells(8), price_eur: price(900) }
  },
  {
    id: "x4", name: "Xray X4", category: "Speedrun & On-Road", image: getLocalImage("x4"),
    stats: { topSpeed_kmh: speed(120), length_mm: length(370), weight_kg: weight(1.3), lipo_cells: cells(2), price_eur: price(1200) }
  },
  {
    id: "mi8", name: "Schumacher Mi8", category: "Speedrun & On-Road", image: getLocalImage("mi8"),
    stats: { topSpeed_kmh: speed(120), length_mm: length(370), weight_kg: weight(1.3), lipo_cells: cells(2), price_eur: price(1150) }
  },
  {
    id: "a800r", name: "Awesomatix A800R", category: "Speedrun & On-Road", image: getLocalImage("a800r"),
    stats: { topSpeed_kmh: speed(120), length_mm: length(370), weight_kg: weight(1.3), lipo_cells: cells(2), price_eur: price(1250) }
  },
  {
    id: "stx", name: "WRC Racing STX", category: "Speedrun & On-Road", image: getLocalImage("stx"),
    stats: { topSpeed_kmh: speed(115), length_mm: length(370), weight_kg: weight(1.3), lipo_cells: cells(2), price_eur: price(1100) }
  },
  // Basher & Monster Trucks
  {
    id: "xmaxx", name: "Traxxas X-Maxx", category: "Basher & Monster Trucks", image: getLocalImage("xmaxx"),
    stats: { topSpeed_kmh: speed(80), length_mm: length(779), weight_kg: weight(8.6), lipo_cells: cells(8), price_eur: price(1100) }
  },
  {
    id: "maxx", name: "Traxxas Maxx", category: "Basher & Monster Trucks", image: getLocalImage("maxx"),
    stats: { topSpeed_kmh: speed(96), length_mm: length(549), weight_kg: weight(4.4), lipo_cells: cells(4), price_eur: price(650) }
  },
  {
    id: "kraton8s", name: "Arrma Kraton 8S", category: "Basher & Monster Trucks", image: getLocalImage("kraton8s"),
    stats: { topSpeed_kmh: speed(88), length_mm: length(771), weight_kg: weight(11.0), lipo_cells: cells(8), price_eur: price(1150) }
  },
  {
    id: "kronos", name: "Corally Kronos XTR", category: "Basher & Monster Trucks", image: getLocalImage("kronos"),
    stats: { topSpeed_kmh: speed(105), length_mm: length(590), weight_kg: weight(4.7), lipo_cells: cells(6), price_eur: price(600) }
  },
  {
    id: "mt410", name: "Tekno MT410", category: "Basher & Monster Trucks", image: getLocalImage("mt410"),
    stats: { topSpeed_kmh: speed(95), length_mm: length(530), weight_kg: weight(4.0), lipo_cells: cells(4), price_eur: price(950) }
  },
  {
    id: "lmt", name: "Losi LMT", category: "Basher & Monster Trucks", image: getLocalImage("lmt"),
    stats: { topSpeed_kmh: speed(65), length_mm: length(558), weight_kg: weight(4.9), lipo_cells: cells(3), price_eur: price(650) }
  },
  {
    id: "clodbuster", name: "Tamiya Clod Buster", category: "Basher & Monster Trucks", image: getLocalImage("clodbuster"),
    stats: { topSpeed_kmh: speed(35), length_mm: length(480), weight_kg: weight(3.9), lipo_cells: cells(2), price_eur: price(350) }
  },
  {
    id: "madforce", name: "Kyosho Mad Force", category: "Basher & Monster Trucks", image: getLocalImage("madforce"),
    stats: { topSpeed_kmh: speed(60), length_mm: length(545), weight_kg: weight(4.2), lipo_cells: cells(3), price_eur: price(500) }
  },
  // Buggies & Racing
  {
    id: "xb8", name: "Xray XB8", category: "Buggies & Racing", image: getLocalImage("xb8"),
    stats: { topSpeed_kmh: speed(110), length_mm: length(500), weight_kg: weight(3.6), lipo_cells: cells(4), price_eur: price(1300) }
  },
  {
    id: "mbx8r", name: "Mugen MBX8R", category: "Buggies & Racing", image: getLocalImage("mbx8r"),
    stats: { topSpeed_kmh: speed(110), length_mm: length(510), weight_kg: weight(3.5), lipo_cells: cells(4), price_eur: price(1250) }
  },
  {
    id: "rc8b4", name: "Team Associated RC8B4", category: "Buggies & Racing", image: getLocalImage("rc8b4"),
    stats: { topSpeed_kmh: speed(110), length_mm: length(515), weight_kg: weight(3.5), lipo_cells: cells(4), price_eur: price(1200) }
  },
  {
    id: "8ightx", name: "TLR 8IGHT-X", category: "Buggies & Racing", image: getLocalImage("8ightx"),
    stats: { topSpeed_kmh: speed(110), length_mm: length(505), weight_kg: weight(3.6), lipo_cells: cells(4), price_eur: price(1250) }
  },
  {
    id: "nb48", name: "Tekno EB48 2.1", category: "Buggies & Racing", image: getLocalImage("nb48"),
    stats: { topSpeed_kmh: speed(110), length_mm: length(515), weight_kg: weight(3.5), lipo_cells: cells(4), price_eur: price(1250) }
  },
  {
    id: "s354", name: "Sworkz S35-4", category: "Buggies & Racing", image: getLocalImage("s354"),
    stats: { topSpeed_kmh: speed(105), length_mm: length(510), weight_kg: weight(3.6), lipo_cells: cells(4), price_eur: price(1150) }
  },
  {
    id: "mp10", name: "Kyosho Inferno MP10", category: "Buggies & Racing", image: getLocalImage("mp10"),
    stats: { topSpeed_kmh: speed(105), length_mm: length(518), weight_kg: weight(3.7), lipo_cells: cells(4), price_eur: price(1350) }
  },
  {
    id: "a319", name: "Agama A319", category: "Buggies & Racing", image: getLocalImage("a319"),
    stats: { topSpeed_kmh: speed(105), length_mm: length(515), weight_kg: weight(3.5), lipo_cells: cells(4), price_eur: price(1200) }
  },
  // Scale & Off-Road
  {
    id: "udr", name: "Traxxas UDR", category: "Scale & Off-Road", image: getLocalImage("udr"),
    stats: { topSpeed_kmh: speed(80), length_mm: length(694), weight_kg: weight(6.1), lipo_cells: cells(6), price_eur: price(850) }
  },
  {
    id: "superbajarey", name: "Losi Super Baja Rey", category: "Scale & Off-Road", image: getLocalImage("superbajarey"),
    stats: { topSpeed_kmh: speed(80), length_mm: length(774), weight_kg: weight(8.8), lipo_cells: cells(8), price_eur: price(950) }
  },
  {
    id: "mojave", name: "Arrma Mojave", category: "Scale & Off-Road", image: getLocalImage("mojave"),
    stats: { topSpeed_kmh: speed(96), length_mm: length(715), weight_kg: weight(5.4), lipo_cells: cells(6), price_eur: price(650) }
  },
  {
    id: "trx4", name: "Traxxas TRX-4", category: "Scale & Off-Road", image: getLocalImage("trx4"),
    stats: { topSpeed_kmh: speed(20), length_mm: length(586), weight_kg: weight(3.4), lipo_cells: cells(3), price_eur: price(550) }
  },
  {
    id: "scx10", name: "Axial SCX10 III", category: "Scale & Off-Road", image: getLocalImage("scx10"),
    stats: { topSpeed_kmh: speed(20), length_mm: length(485), weight_kg: weight(2.9), lipo_cells: cells(3), price_eur: price(500) }
  },
  {
    id: "enduro", name: "Element RC Enduro", category: "Scale & Off-Road", image: getLocalImage("enduro"),
    stats: { topSpeed_kmh: speed(25), length_mm: length(462), weight_kg: weight(2.8), lipo_cells: cells(3), price_eur: price(450) }
  },
  {
    id: "vs410", name: "Vanquish VS4-10", category: "Scale & Off-Road", image: getLocalImage("vs410"),
    stats: { topSpeed_kmh: speed(25), length_mm: length(490), weight_kg: weight(3.0), lipo_cells: cells(3), price_eur: price(850) }
  },
  {
    id: "avante", name: "Tamiya Avante", category: "Scale & Off-Road", image: getLocalImage("avante"),
    stats: { topSpeed_kmh: speed(40), length_mm: length(420), weight_kg: weight(1.8), lipo_cells: cells(2), price_eur: price(600) }
  }
];

export const rcCarsDeck: DeckConfig = {
  id: 'rccars',
  name: 'RC Cars (Premium)',
  description: 'Premium RTR Fahrzeuge und Profi-Kits der Spitzenklasse – von Speedrun-Legenden bis Monster Trucks!',
  statLabels: {
    topSpeed_kmh: 'Höchstgeschwindigkeit',
    length_mm: 'Länge',
    weight_kg: 'Gewicht',
    lipo_cells: 'LiPo-Zellen',
    price_eur: 'Preis',
  },
  statUnits: {
    topSpeed_kmh: ' km/h',
    length_mm: ' mm',
    weight_kg: ' kg',
    lipo_cells: 'S',
    price_eur: ' €',
  },
  cards
};
