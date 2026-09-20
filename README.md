# Airplane Top Trumps (Flugzeug Trumpfen) ✈️

A modern, highly tactical web-based "Hot-Seat" multiplayer implementation of the classic Top Trumps card game, featuring 32 spectacular AI-generated aircraft cards. Built with React, Vite, and Tailwind CSS.

## 📸 The Game
Take control of 32 of the most iconic aircraft in aviation history — from historical pioneers like the Wright Flyer to modern giants like the Airbus A380 and supersonic legends like the SR-71 Blackbird.

Players compete on a single screen (Hot-Seat) to win all cards by choosing the strongest statistics of their top cards.

## 📜 Game Rules

### Classic Mechanics
1. **Dealing:** The deck of 32 cards is shuffled and distributed evenly among the players.
2. **Turn Selection:** The active player looks at their top card and selects a statistic (e.g., Top Speed, Range, Thrust) they believe will beat the opponent's top card.
3. **Winning the Trick:** The player with the better value wins both cards and places them at the bottom of their deck. The winner becomes the active player for the next round.
   - *Note:* For all statistics, **Higher is Better**, with the exception of the **First Flight Year**, where **Lower (older) is Better**!

### Tie-Breaker (Stechen)
If both players have the exact same value for a chosen statistic:
- The game enters a "Draw" (Stechen).
- The current cards are moved to a neutral **Pot** (Stapel).
- The active player who called the stat keeps their turn and chooses a new stat from their *next* card.
- If there is another tie, the new cards are added to the pot.
- The first player to win a subsequent trick takes their trick cards **PLUS all accumulated cards in the Pot**.

### The "Endgame" Rule (<= 3 Cards)
To add a layer of deep strategy and prevent the end of the game from being purely based on luck, a special tactical rule is triggered when a player's hand dwindles:
- **Active Player:** If you have 3 or fewer cards remaining, you no longer have to play your top card! You will see all your remaining cards side-by-side and can choose *which card* and *which stat* to attack with.
- **Defending Player:** If the defending player has 3 or fewer cards, the game employs a "Hidden Screen" mechanic. The attacker is asked to look away, and the defender gets to securely choose their defending card from their remaining hand to counter the attack.

### Victory
The game ends when one player successfully collects all 32 cards!

---

## 🚀 How to Start the Game

Since the game is completely local and runs entirely in your browser, setup is extremely simple:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Running
1. Open your terminal and navigate to the `frontend` folder of the project:
   ```bash
   cd frontend
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the provided local URL (usually `http://localhost:3000`).

Grab a friend, enter your names in the lobby, and let the best pilot win!
