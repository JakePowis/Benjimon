import React from 'react';
import Player from './components/Player'
import Enemy from './components/Enemy'
import GameState from './components/GameState'
import { Attack } from './components/Menu'
import { Flee } from './components/Menu'
import KoScreen from './components/KO'
import StartScreen from './components/StartScreen'
import './App.css';



function App() {

  const [player, setPlayer] = React.useState({
    hp: 100,
    name: "pikachu"
  })
  const [enemy, setEnemy] = React.useState({
    hp: 100,
    name: "enemy",
    avatar_url: "https://avatars2.githubusercontent.com/u/51966598?s=460&u=9fda51179cc2ce2e7a37d0abe91bcd2e206e5423&v=4"
  })

  const [playerTurn, setPlayerTurn] = React.useState(true)

  const [gameState, setGameState] = React.useState({
    gameState: "start", //start, fight, gameover
    round: 1,
  })
 
  const [winner, setWinner] = React.useState(null) //PLAYER or ENEMY
  const props = { player, setPlayer, enemy, setEnemy, playerTurn, setPlayerTurn, winner, setWinner }

  const game = gameState.gameState
  const round = gameState.round

  return (
    <div className="App">
      <div id="game-container">
        <div id="battle-container">

        {game === "start" ?
                
                // <StartScreen setPlayer={setPlayer} player={player} setGameState={setGameState} gameState={gameState}/>
<div>text</div>

            : game === "fight" ?
              <React.Fragment >
                <Enemy {...props} />
                <Player {...props} />
                <Attack {...props} gameState={gameState} setGameState={setGameState} setWinner={setWinner} />
              </React.Fragment>

                    :  //gameOver
                    <KoScreen {...props} />}
                
    
          {/* <GameState gameState={gameState} winner={winner} setWinner={setWinner} /> */}
          {/* <Flee player={player} setPlayer={setPlayer} enemy={enemy} setEnemy={setEnemy}/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
