import React from 'react';
import Player from './components/Player'
import Enemy from './components/Enemy'
import GameState from './components/GameState'
import { Attack } from './components/Menu'
import { Flee } from './components/Menu'
import StartScreen from './components/StartScreen'
import './App.css';



function App() {

  const [player, setPlayer] = React.useState({
    hp: 100,
    name: "pikachu"
  })
  const [enemy, setEnemy] = React.useState({
    hp: 100,
    name: "enemy"
  })

  const [playerTurn, setPlayerTurn] = React.useState(true)

  const [gameState, setGameState] = React.useState({
    gameState: "start", //start, fight, gameover
    round: 1,
  })
  console.log(gameState)
 
  const [winner, setWinner] = React.useState(null)
  const props = { player, setPlayer, enemy, setEnemy, playerTurn, setPlayerTurn }

  const game = gameState.gameState
  const round = gameState.round

  return (
    <div className="App">
      <div id="game-container">
        <div id="battle-container">

        {game === "start" ?
                
                <StartScreen setPlayer={setPlayer} player={player} setGameState={setGameState} gameState={gameState}/>


            : game === "fight" ?
              <React.Fragment >
                <Enemy {...props} />
                <Player {...props} />
                <Attack {...props} gameState={gameState} setGameState={setGameState} setWinner={setWinner} />
              </React.Fragment>

                    :  //gameOver
                    <div>game over</div> }
                
    
          {/* <GameState gameState={gameState} winner={winner} setWinner={setWinner} /> */}
          {/* <Flee player={player} setPlayer={setPlayer} enemy={enemy} setEnemy={setEnemy}/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
