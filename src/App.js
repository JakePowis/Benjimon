import React from 'react';
import Player from './components/Player'
import Enemy from './components/Enemy'
import GameState from './components/GameState'
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

  const [gameState, setGameState] = React.useState({
    gameState: "fight", //start, fight, gameover
    round: 1,
  })

  const [winner, setWinner] = React.useState(null)
  const props = { player, setPlayer, enemy, setEnemy }

    const game = gameState.gameState
    const round = gameState.round

  return (
    <div className="App">
      <div id="game-container">
        <div id="battle-container">

        {game === "start" ?
                
                <startScreen />

                : game === "fight" ?
                <React.Fragment >
                  <Enemy {...props} />
                  <Player {...props} />
                  <Attack {...props} gameState={gameState} setGameState={setGameState} setWinner={setWinner} />
              </React.Fragment>
                    :  //gameOver
                    <gameOverScreen />}
                
    
          {/* <GameState gameState={gameState} winner={winner} setWinner={setWinner} /> */}
          {/* <Flee player={player} setPlayer={setPlayer} enemy={enemy} setEnemy={setEnemy}/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
