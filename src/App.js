import React from 'react';
import Player from './components/Player'
import Enemy from './components/Enemy'
import { Attack } from './components/Menu'
import { Flee } from './components/Menu'
import './App.css';



function App() {

  const [player, setPlayer] = React.useState({
    hp: 100,
    name: "pokemon"
  })
  const [enemy, setEnemy] = React.useState({
    hp: 100,
    name: "enemy"
  })

  return (
    <div className="App">
           <div id="game-container">
        <div id="battle-container">
          
        <Enemy player={player} setPlayer={setPlayer} enemy={enemy} setEnemy={setEnemy} />
          
          <Player player={player} setPlayer={setPlayer} enemy={enemy} setEnemy={setEnemy} />
          <Attack player={player} setPlayer={setPlayer} enemy={enemy} setEnemy={setEnemy} />
      {/* <Flee player={player} setPlayer={setPlayer} enemy={enemy} setEnemy={setEnemy}/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
