import type { GameCard, DeckConfig } from '../types';

const speed = (v: number) => ({ value: v, higherIsBetter: true });
const built = (v: number) => ({ value: v, higherIsBetter: true });
const range = (v: number) => ({ value: v, higherIsBetter: true });
const pax = (v: number) => ({ value: v, higherIsBetter: true });
const crashes = (v: number) => ({ value: v, higherIsBetter: false });
const year = (v: number) => ({ value: v, higherIsBetter: false });

const getLocalImage = (id: string) => `${import.meta.env.BASE_URL}images/${id}.jpg`;

const cards: GameCard[] = [
  {
    id: "a380", name: "Airbus A380", category: "Giganten", image: getLocalImage("a380"),
    stats: { topSpeed_kmh: speed(1185), built_count: built(251), range_km: range(15200), passengers: pax(853), crashes_count: crashes(0), firstFlight_year: year(2005) }
  },
  {
    id: "747-8", name: "Boeing 747-8", category: "Giganten", image: getLocalImage("747-8"),
    stats: { topSpeed_kmh: speed(988), built_count: built(155), range_km: range(14320), passengers: pax(605), crashes_count: crashes(0), firstFlight_year: year(2010) }
  },
  {
    id: "an-225", name: "Antonov An-225", category: "Giganten", image: getLocalImage("an-225"),
    stats: { topSpeed_kmh: speed(850), built_count: built(1), range_km: range(15400), passengers: pax(6), crashes_count: crashes(1), firstFlight_year: year(1988) }
  },
  {
    id: "beluga", name: "Airbus Beluga XL", category: "Giganten", image: getLocalImage("beluga"),
    stats: { topSpeed_kmh: speed(737), built_count: built(6), range_km: range(4260), passengers: pax(2), crashes_count: crashes(0), firstFlight_year: year(2018) }
  },
  {
    id: "concorde", name: "Concorde", category: "Überschall & Rekorde", image: getLocalImage("concorde"),
    stats: { topSpeed_kmh: speed(2179), built_count: built(20), range_km: range(7222), passengers: pax(100), crashes_count: crashes(1), firstFlight_year: year(1969) }
  },
  {
    id: "sr71", name: "SR-71 Blackbird", category: "Überschall & Rekorde", image: getLocalImage("sr71"),
    stats: { topSpeed_kmh: speed(3529), built_count: built(32), range_km: range(5400), passengers: pax(2), crashes_count: crashes(12), firstFlight_year: year(1964) }
  },
  {
    id: "x15", name: "North American X-15", category: "Überschall & Rekorde", image: getLocalImage("x15"),
    stats: { topSpeed_kmh: speed(7274), built_count: built(3), range_km: range(450), passengers: pax(1), crashes_count: crashes(1), firstFlight_year: year(1959) }
  },
  {
    id: "tu144", name: "Tu-144", category: "Überschall & Rekorde", image: getLocalImage("tu144"),
    stats: { topSpeed_kmh: speed(2430), built_count: built(16), range_km: range(6500), passengers: pax(140), crashes_count: crashes(2), firstFlight_year: year(1968) }
  },
  {
    id: "a350", name: "Airbus A350-1000", category: "Moderne Langstrecke", image: getLocalImage("a350"),
    stats: { topSpeed_kmh: speed(1098), built_count: built(86), range_km: range(16100), passengers: pax(410), crashes_count: crashes(0), firstFlight_year: year(2016) }
  },
  {
    id: "787-9", name: "Boeing 787-9", category: "Moderne Langstrecke", image: getLocalImage("787-9"),
    stats: { topSpeed_kmh: speed(956), built_count: built(645), range_km: range(14140), passengers: pax(290), crashes_count: crashes(0), firstFlight_year: year(2013) }
  },
  {
    id: "777", name: "Boeing 777-300ER", category: "Moderne Langstrecke", image: getLocalImage("777"),
    stats: { topSpeed_kmh: speed(945), built_count: built(832), range_km: range(13649), passengers: pax(396), crashes_count: crashes(1), firstFlight_year: year(2003) }
  },
  {
    id: "a340", name: "Airbus A340-600", category: "Moderne Langstrecke", image: getLocalImage("a340"),
    stats: { topSpeed_kmh: speed(913), built_count: built(97), range_km: range(14450), passengers: pax(380), crashes_count: crashes(1), firstFlight_year: year(2001) }
  },
  {
    id: "wright", name: "Wright Flyer", category: "Historische Legenden", image: getLocalImage("wright"),
    stats: { topSpeed_kmh: speed(48), built_count: built(1), range_km: range(3), passengers: pax(1), crashes_count: crashes(1), firstFlight_year: year(1903) }
  },
  {
    id: "dc3", name: "Douglas DC-3", category: "Historische Legenden", image: getLocalImage("dc3"),
    stats: { topSpeed_kmh: speed(370), built_count: built(16079), range_km: range(2400), passengers: pax(32), crashes_count: crashes(4400), firstFlight_year: year(1935) }
  },
  {
    id: "ju52", name: "Junkers Ju 52", category: "Historische Legenden", image: getLocalImage("ju52"),
    stats: { topSpeed_kmh: speed(265), built_count: built(4845), range_km: range(870), passengers: pax(17), crashes_count: crashes(140), firstFlight_year: year(1930) }
  },
  {
    id: "constellation", name: "Lockheed Constellation", category: "Historische Legenden", image: getLocalImage("constellation"),
    stats: { topSpeed_kmh: speed(547), built_count: built(856), range_km: range(8700), passengers: pax(81), crashes_count: crashes(100), firstFlight_year: year(1943) }
  },
  {
    id: "f22", name: "F-22 Raptor", category: "Kampfjets", image: getLocalImage("f22"),
    stats: { topSpeed_kmh: speed(2414), built_count: built(195), range_km: range(2960), passengers: pax(1), crashes_count: crashes(5), firstFlight_year: year(1997) }
  },
  {
    id: "f15", name: "F-15 Eagle", category: "Kampfjets", image: getLocalImage("f15"),
    stats: { topSpeed_kmh: speed(2655), built_count: built(1200), range_km: range(5550), passengers: pax(1), crashes_count: crashes(175), firstFlight_year: year(1972) }
  },
  {
    id: "typhoon", name: "Eurofighter Typhoon", category: "Kampfjets", image: getLocalImage("typhoon"),
    stats: { topSpeed_kmh: speed(2495), built_count: built(592), range_km: range(2900), passengers: pax(1), crashes_count: crashes(11), firstFlight_year: year(1994) }
  },
  {
    id: "mig25", name: "MiG-25", category: "Kampfjets", image: getLocalImage("mig25"),
    stats: { topSpeed_kmh: speed(3000), built_count: built(1186), range_km: range(1730), passengers: pax(1), crashes_count: crashes(150), firstFlight_year: year(1964) }
  },
  {
    id: "g700", name: "Gulfstream G700", category: "Business Jets", image: getLocalImage("g700"),
    stats: { topSpeed_kmh: speed(1142), built_count: built(20), range_km: range(13890), passengers: pax(19), crashes_count: crashes(0), firstFlight_year: year(2020) }
  },
  {
    id: "global7500", name: "Global 7500", category: "Business Jets", image: getLocalImage("global7500"),
    stats: { topSpeed_kmh: speed(1142), built_count: built(150), range_km: range(14260), passengers: pax(19), crashes_count: crashes(0), firstFlight_year: year(2016) }
  },
  {
    id: "learjet35", name: "Learjet 35", category: "Business Jets", image: getLocalImage("learjet35"),
    stats: { topSpeed_kmh: speed(872), built_count: built(738), range_km: range(2789), passengers: pax(8), crashes_count: crashes(80), firstFlight_year: year(1973) }
  },
  {
    id: "citationx", name: "Cessna Citation X", category: "Business Jets", image: getLocalImage("citationx"),
    stats: { topSpeed_kmh: speed(1156), built_count: built(338), range_km: range(6410), passengers: pax(12), crashes_count: crashes(3), firstFlight_year: year(1993) }
  },
  {
    id: "c172", name: "Cessna 172", category: "Leichtflugzeuge", image: getLocalImage("c172"),
    stats: { topSpeed_kmh: speed(226), built_count: built(44000), range_km: range(1289), passengers: pax(4), crashes_count: crashes(5000), firstFlight_year: year(1955) }
  },
  {
    id: "pa28", name: "Piper PA-28", category: "Leichtflugzeuge", image: getLocalImage("pa28"),
    stats: { topSpeed_kmh: speed(237), built_count: built(32778), range_km: range(1426), passengers: pax(4), crashes_count: crashes(4000), firstFlight_year: year(1960) }
  },
  {
    id: "bonanza", name: "Beechcraft Bonanza", category: "Leichtflugzeuge", image: getLocalImage("bonanza"),
    stats: { topSpeed_kmh: speed(326), built_count: built(17000), range_km: range(1722), passengers: pax(6), crashes_count: crashes(3000), firstFlight_year: year(1945) }
  },
  {
    id: "sr22", name: "Cirrus SR22", category: "Leichtflugzeuge", image: getLocalImage("sr22"),
    stats: { topSpeed_kmh: speed(389), built_count: built(7400), range_km: range(1943), passengers: pax(5), crashes_count: crashes(200), firstFlight_year: year(2000) }
  },
  {
    id: "h4", name: "Hughes H-4 Hercules", category: "Pioniere & Spezial", image: getLocalImage("h4"),
    stats: { topSpeed_kmh: speed(217), built_count: built(1), range_km: range(4800), passengers: pax(750), crashes_count: crashes(0), firstFlight_year: year(1947) }
  },
  {
    id: "solar", name: "Solar Impulse 2", category: "Pioniere & Spezial", image: getLocalImage("solar"),
    stats: { topSpeed_kmh: speed(140), built_count: built(1), range_km: range(40000), passengers: pax(1), crashes_count: crashes(0), firstFlight_year: year(2014) }
  },
  {
    id: "voyager", name: "Rutan Voyager", category: "Pioniere & Spezial", image: getLocalImage("voyager"),
    stats: { topSpeed_kmh: speed(196), built_count: built(1), range_km: range(42212), passengers: pax(2), crashes_count: crashes(0), firstFlight_year: year(1984) }
  },
  {
    id: "dox", name: "Dornier Do X", category: "Pioniere & Spezial", image: getLocalImage("dox"),
    stats: { topSpeed_kmh: speed(211), built_count: built(3), range_km: range(1700), passengers: pax(100), crashes_count: crashes(0), firstFlight_year: year(1929) }
  }
];

export const airplanesDeck: DeckConfig = {
  id: 'airplanes',
  name: 'Flugzeug Trumpfen',
  description: 'Das klassische Quartett mit 32 der bekanntesten Flugzeuge der Geschichte.',
  statLabels: {
    topSpeed_kmh: 'Höchstgeschwindigkeit',
    built_count: 'Gebaute Exemplare',
    range_km: 'Reichweite',
    passengers: 'Max. Passagiere',
    crashes_count: 'Anzahl Abstürze',
    firstFlight_year: 'Erstflug',
  },
  statUnits: {
    topSpeed_kmh: ' km/h',
    built_count: '',
    range_km: ' km',
    passengers: '',
    crashes_count: '',
    firstFlight_year: '',
  },
  cards
};
