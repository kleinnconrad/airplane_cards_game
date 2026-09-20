import { Lobby } from './components/Lobby';
import { Game } from './components/Game';
import { useGameEngine } from './useGameEngine';

function App() {
  const { room, addPlayer, removePlayer, startGame, selectStat, selectDefendingCard, resetGame } = useGameEngine();

  if (room.state === 'LOBBY') {
    return (
      <Lobby 
        room={room} 
        onAddPlayer={addPlayer} 
        onRemovePlayer={removePlayer} 
        onStartGame={startGame} 
      />
    );
  }

  return (
    <Game 
      room={room} 
      onSelectStat={selectStat} 
      onSelectDefendingCard={selectDefendingCard}
      onResetGame={resetGame}
    />
  );
}

export default App;
