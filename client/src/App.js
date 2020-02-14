import React from 'react';
import GameScene from './components/game_scene';
import GameEngine from './components/game_engine';

function App() {
  return (
    <React.Fragment>
      <GameEngine />
      <GameScene />
    </React.Fragment>
  );
}

export default App;
