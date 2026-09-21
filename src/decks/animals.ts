import type { GameCard, DeckConfig } from '../types';

const toxicity = (v: number) => ({ value: v, higherIsBetter: false });
const size = (v: number) => ({ value: v, higherIsBetter: true });
const lifespan = (v: number) => ({ value: v, higherIsBetter: true });
const fatal = (v: number) => ({ value: v, higherIsBetter: true });

const getLocalImage = (id: string) => `${import.meta.env.BASE_URL}images/animals/${id}.jpg`;

const cards: GameCard[] = [
  // Schlangen
  { id: "inlandtaipan", name: "Inlandtaipan", category: "Schlangen", image: getLocalImage("inlandtaipan"), stats: { toxicity_mg_kg: toxicity(0.025), size_cm: size(200), lifespan_years: lifespan(15), fatalities_yearly: fatal(0) } },
  { id: "schwarze_mamba", name: "Schwarze Mamba", category: "Schlangen", image: getLocalImage("schwarze_mamba"), stats: { toxicity_mg_kg: toxicity(0.28), size_cm: size(250), lifespan_years: lifespan(11), fatalities_yearly: fatal(20000) } },
  { id: "koenigskobra", name: "Königskobra", category: "Schlangen", image: getLocalImage("koenigskobra"), stats: { toxicity_mg_kg: toxicity(1.09), size_cm: size(400), lifespan_years: lifespan(20), fatalities_yearly: fatal(5) } },
  { id: "seeschlange", name: "Seeschlange", category: "Schlangen", image: getLocalImage("seeschlange"), stats: { toxicity_mg_kg: toxicity(0.04), size_cm: size(150), lifespan_years: lifespan(10), fatalities_yearly: fatal(50) } },
  { id: "hornviper", name: "Wüsten-Hornviper", category: "Schlangen", image: getLocalImage("hornviper"), stats: { toxicity_mg_kg: toxicity(3.0), size_cm: size(60), lifespan_years: lifespan(14), fatalities_yearly: fatal(100) } },
  { id: "klapperschlange", name: "Klapperschlange", category: "Schlangen", image: getLocalImage("klapperschlange"), stats: { toxicity_mg_kg: toxicity(1.2), size_cm: size(120), lifespan_years: lifespan(20), fatalities_yearly: fatal(5) } },
  { id: "taipan", name: "Taipan", category: "Schlangen", image: getLocalImage("taipan"), stats: { toxicity_mg_kg: toxicity(0.09), size_cm: size(200), lifespan_years: lifespan(15), fatalities_yearly: fatal(0) } },
  { id: "tigerotter", name: "Tigerotter", category: "Schlangen", image: getLocalImage("tigerotter"), stats: { toxicity_mg_kg: toxicity(0.12), size_cm: size(120), lifespan_years: lifespan(10), fatalities_yearly: fatal(1) } },

  // Spinnentiere
  { id: "wanderspinne", name: "Wanderspinne", category: "Spinnentiere", image: getLocalImage("wanderspinne"), stats: { toxicity_mg_kg: toxicity(0.13), size_cm: size(15), lifespan_years: lifespan(2), fatalities_yearly: fatal(10) } },
  { id: "trichternetz", name: "Trichternetzspinne", category: "Spinnentiere", image: getLocalImage("trichternetz"), stats: { toxicity_mg_kg: toxicity(0.16), size_cm: size(5), lifespan_years: lifespan(8), fatalities_yearly: fatal(0) } },
  { id: "witwe", name: "Schwarze Witwe", category: "Spinnentiere", image: getLocalImage("witwe"), stats: { toxicity_mg_kg: toxicity(0.9), size_cm: size(4), lifespan_years: lifespan(3), fatalities_yearly: fatal(5) } },
  { id: "deathstalker", name: "Mittelmeerskorpion", category: "Spinnentiere", image: getLocalImage("deathstalker"), stats: { toxicity_mg_kg: toxicity(0.25), size_cm: size(10), lifespan_years: lifespan(5), fatalities_yearly: fatal(20) } },
  { id: "dornenspinne", name: "Rote Dornenspinne", category: "Spinnentiere", image: getLocalImage("dornenspinne"), stats: { toxicity_mg_kg: toxicity(1.5), size_cm: size(3), lifespan_years: lifespan(2), fatalities_yearly: fatal(0) } },
  { id: "kroetenspinne", name: "Krötenspinne", category: "Spinnentiere", image: getLocalImage("kroetenspinne"), stats: { toxicity_mg_kg: toxicity(0.5), size_cm: size(14), lifespan_years: lifespan(15), fatalities_yearly: fatal(0) } },
  { id: "dickschwanz", name: "Dickschwanzskorpion", category: "Spinnentiere", image: getLocalImage("dickschwanz"), stats: { toxicity_mg_kg: toxicity(0.32), size_cm: size(9), lifespan_years: lifespan(5), fatalities_yearly: fatal(50) } },
  { id: "einsiedler", name: "Braune Einsiedler", category: "Spinnentiere", image: getLocalImage("einsiedler"), stats: { toxicity_mg_kg: toxicity(0.48), size_cm: size(2), lifespan_years: lifespan(2), fatalities_yearly: fatal(2) } },

  // Meerestiere
  { id: "blauringkrake", name: "Blauringkrake", category: "Meerestiere", image: getLocalImage("blauringkrake"), stats: { toxicity_mg_kg: toxicity(0.3), size_cm: size(20), lifespan_years: lifespan(2), fatalities_yearly: fatal(1) } },
  { id: "seewespe", name: "Seewespe", category: "Meerestiere", image: getLocalImage("seewespe"), stats: { toxicity_mg_kg: toxicity(0.04), size_cm: size(300), lifespan_years: lifespan(1), fatalities_yearly: fatal(100) } },
  { id: "steinfisch", name: "Steinfisch", category: "Meerestiere", image: getLocalImage("steinfisch"), stats: { toxicity_mg_kg: toxicity(0.15), size_cm: size(40), lifespan_years: lifespan(10), fatalities_yearly: fatal(10) } },
  { id: "kugelfisch", name: "Kugelfisch", category: "Meerestiere", image: getLocalImage("kugelfisch"), stats: { toxicity_mg_kg: toxicity(0.01), size_cm: size(60), lifespan_years: lifespan(10), fatalities_yearly: fatal(50) } },
  { id: "kegelschnecke", name: "Kegelschnecke", category: "Meerestiere", image: getLocalImage("kegelschnecke"), stats: { toxicity_mg_kg: toxicity(0.012), size_cm: size(15), lifespan_years: lifespan(10), fatalities_yearly: fatal(1) } },
  { id: "irukandji", name: "Irukandji-Qualle", category: "Meerestiere", image: getLocalImage("irukandji"), stats: { toxicity_mg_kg: toxicity(0.05), size_cm: size(2), lifespan_years: lifespan(1), fatalities_yearly: fatal(2) } },
  { id: "galeere", name: "Port. Galeere", category: "Meerestiere", image: getLocalImage("galeere"), stats: { toxicity_mg_kg: toxicity(1.5), size_cm: size(150), lifespan_years: lifespan(1), fatalities_yearly: fatal(3) } },
  { id: "feuerfisch", name: "Feuerfisch", category: "Meerestiere", image: getLocalImage("feuerfisch"), stats: { toxicity_mg_kg: toxicity(2.0), size_cm: size(38), lifespan_years: lifespan(15), fatalities_yearly: fatal(0) } },

  // Amphibien & Weitere
  { id: "schrecklicher", name: "Pfeilgiftfrosch", category: "Amphibien & Tiere", image: getLocalImage("schrecklicher"), stats: { toxicity_mg_kg: toxicity(0.002), size_cm: size(5), lifespan_years: lifespan(10), fatalities_yearly: fatal(0) } },
  { id: "erdbeer", name: "Erdbeer-Frosch", category: "Amphibien & Tiere", image: getLocalImage("erdbeer"), stats: { toxicity_mg_kg: toxicity(0.08), size_cm: size(2), lifespan_years: lifespan(8), fatalities_yearly: fatal(0) } },
  { id: "krustenechse", name: "Krustenechse", category: "Amphibien & Tiere", image: getLocalImage("krustenechse"), stats: { toxicity_mg_kg: toxicity(1.4), size_cm: size(60), lifespan_years: lifespan(20), fatalities_yearly: fatal(0) } },
  { id: "schnabeltier", name: "Schnabeltier", category: "Amphibien & Tiere", image: getLocalImage("schnabeltier"), stats: { toxicity_mg_kg: toxicity(5.0), size_cm: size(50), lifespan_years: lifespan(12), fatalities_yearly: fatal(0) } },
  { id: "blaupfeil", name: "Blaupfeil-Frosch", category: "Amphibien & Tiere", image: getLocalImage("blaupfeil"), stats: { toxicity_mg_kg: toxicity(0.01), size_cm: size(4), lifespan_years: lifespan(10), fatalities_yearly: fatal(0) } },
  { id: "faerberfrosch", name: "Färberfrosch", category: "Amphibien & Tiere", image: getLocalImage("faerberfrosch"), stats: { toxicity_mg_kg: toxicity(0.05), size_cm: size(5), lifespan_years: lifespan(10), fatalities_yearly: fatal(0) } },
  { id: "pussraupe", name: "Puss-Raupe", category: "Amphibien & Tiere", image: getLocalImage("pussraupe"), stats: { toxicity_mg_kg: toxicity(8.0), size_cm: size(3), lifespan_years: lifespan(1), fatalities_yearly: fatal(0) } },
  { id: "riesenhornisse", name: "Riesenhornisse", category: "Amphibien & Tiere", image: getLocalImage("riesenhornisse"), stats: { toxicity_mg_kg: toxicity(4.1), size_cm: size(5), lifespan_years: lifespan(1), fatalities_yearly: fatal(40) } },
];

export const animalsDeck: DeckConfig = {
  id: 'animals',
  name: 'Giftige Tiere',
  description: 'Die gefährlichsten und giftigsten Tiere der Welt. Vorsicht: Niedriger LD50-Wert = Gewinnt!',
  statLabels: {
    toxicity_mg_kg: 'Giftigkeit (LD50)',
    size_cm: 'Größe',
    lifespan_years: 'Lebenserwartung',
    fatalities_yearly: 'Todesfälle/Jahr',
  },
  statUnits: {
    toxicity_mg_kg: ' mg/kg',
    size_cm: ' cm',
    lifespan_years: ' Jahre',
    fatalities_yearly: '',
  },
  cards
};
