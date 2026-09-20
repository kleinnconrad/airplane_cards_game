# Airplane Top Trumps - Implementation Plan (implement.md)

## 1. Project Overview
Develop a cross-platform "Top Trumps" (Trumpfen) card game focusing on airplanes. 
- **Platforms:** Windows (Browser) and Android (Progressive Web App via "Add to Homescreen").
- **Players:** 2 to 4 players via real-time online multiplayer.
- **Tech Stack:**
  - **Frontend:** React, TypeScript, Vite, Vite PWA Plugin, TailwindCSS.
  - **Backend:** Node.js, Express, Socket.io (for real-time multiplayer lobbies).
  - **Hosting:** Vercel (Frontend), Render/Heroku (Backend).

## 2. Game Logic, Rules & Categories
- **Deck:** 32 Airplane cards.
- **Categories:**
  1. **Top Speed (km/h):** Higher is better.
  2. **Wingspan (m):** Higher is better.
  3. **Range (km):** Higher is better.
  4. **Max. Passengers:** Higher is better.
  5. **Thrust / Power (kN):** Higher is better.
  6. **First Flight (Year):** Lower is better.
- **Dealing:** Cards are shuffled and distributed equally.
- **Turns:** Active player selects a stat from their top card. Other players reveal the same stat from their top card.
- **Winning a trick:** The best value wins. Winner takes all played cards to the bottom of their deck and starts the next turn.
- **Draws (Stechen):** If there's a tie, cards go to a "pot". Tied players use their next card, original caller picks a new stat. Winner takes the pot + current cards.
- **Elimination:** Players with 0 cards are eliminated. Last player standing wins.

## 3. Data Structure (Example)
```json
{
  "id": "A380",
  "name": "Airbus A380",
  "image": "[https://source.unsplash.com/800x600/?airbus,a380](https://source.unsplash.com/800x600/?airbus,a380)",
  "stats": {
    "topSpeed_kmh": { "value": 1185, "higherIsBetter": true },
    "wingspan_m": { "value": 79.8, "higherIsBetter": true },
    "range_km": { "value": 15200, "higherIsBetter": true },
    "passengers": { "value": 853, "higherIsBetter": true },
    "thrust_kN": { "value": 1264, "higherIsBetter": true },
    "firstFlight_year": { "value": 2005, "higherIsBetter": false }
  }
}
```

## 4. The 32 Airplanes Deck
Generate the JSON for the following 8 categories (4 planes each) to ensure a highly tactical and balanced game. Assign realistic real-world data to each stat. (For propeller planes, convert horsepower/kW to approximate kN equivalent or just use a uniform power scale):

1. **Giants:** Airbus A380, Boeing 747-8, Antonov An-225, Airbus Beluga XL
2. **Supersonic & Records:** Concorde, SR-71 Blackbird, North American X-15, Tu-144
3. **Modern Long-Haul:** Airbus A350-1000, Boeing 787-9, Boeing 777-300ER, Airbus A340-600
4. **Historical Legends:** Wright Flyer, Douglas DC-3, Junkers Ju 52, Lockheed Constellation
5. **Fighter Jets:** F-22 Raptor, F-15 Eagle, Eurofighter Typhoon, MiG-25
6. **Business Jets:** Gulfstream G700, Global 7500, Learjet 35, Cessna Citation X
7. **Light Aircraft:** Cessna 172, Piper PA-28, Beechcraft Bonanza, Cirrus SR22
8. **Pioneers & Special:** Hughes H-4 Hercules, Solar Impulse 2, Rutan Voyager, Dornier Do X

## 5. Implementation Phases

### Phase 1: Setup & Architecture
- [ ] Initialize Vite + React + TS project.
- [ ] Install and configure `vite-plugin-pwa`. Ensure `manifest.json` includes `display: "standalone"`, icons (192x192, 512x512), and theme colors to trigger the Android "Add to Homescreen" prompt.
- [ ] Initialize Node.js + Socket.io backend.
- [ ] Setup Tailwind UI framework for a mobile-first UI.

### Phase 2: Game Engine (Backend/Socket.io)
- [ ] **Lobby System:** Create rooms with 4-letter join codes. Allow 2-4 players to join and signal "Ready".
- [ ] **State Machine:** Implement game states: `LOBBY`, `DEALING`, `TURN_SELECTION`, `REVEAL`, `TRICK_EVALUATION`, `GAME_OVER`.
- [ ] **Deck Management:** Function to shuffle and distribute the 32 cards evenly.
- [ ] **Trick Logic:** Compare stats based on `higherIsBetter` flag. Handle ties/draws correctly and push cards to the winner's deck.

### Phase 3: Frontend & UI
- [ ] **Home Screen:** "Create Game" or "Join Game" via room code.
- [ ] **Game View (Mobile First):**
  - Show opponent avatars and remaining card counts.
  - Display the player's top card in the center with a high-quality placeholder image.
  - Make stat rows clickable ONLY during the player's turn.
- [ ] **Animations:** CSS transitions for flipping cards and moving won cards to the winner's deck.
- [ ] **PWA Install Banner:** Provide a clear button/prompt for Android users to install the app.

### Phase 4: Offline & Error Handling
- [ ] Handle player disconnects (graceful pause or auto-fold).
- [ ] Implement service worker caching for static assets and images so the app launches instantly from the Android homescreen.

## 6. Execution Instructions for the AI Agent
1. Scaffold the repository structure (create `/frontend` and `/backend` folders).
2. Generate the complete `deck.json` file with accurate real-world stats for all 32 mentioned airplanes. Use Unsplash API parameters or Wikimedia URLs for images.
3. Build the backend Socket.io logic completely before binding it to the React UI.
4. Keep all UI components strictly mobile-responsive, prioritizing the Android portrait layout.