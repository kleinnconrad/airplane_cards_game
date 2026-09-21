import { Lobby } from './components/Lobby';
import { Game } from './components/Game';
import { useGameEngine } from './useGameEngine';

function App() {
  const { room, addPlayer, removePlayer, startGame, selectDeck, selectStat, selectDefendingCard, nextRound, resetGame } = useGameEngine();

  if (room.state === 'LOBBY') {
    return (
      <Lobby 
        room={room} 
        onAddPlayer={addPlayer} 
        onRemovePlayer={removePlayer} 
        onSelectDeck={selectDeck}
        onStartGame={startGame} 
      />
    );
  }

  return (
    <Game 
      room={room} 
      onSelectStat={selectStat} 
      onSelectDefendingCard={selectDefendingCard}
      onNextRound={nextRound}
      onResetGame={resetGame}
    />
  );
}

export default App;
