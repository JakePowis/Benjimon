import React from 'react';
import Player from './components/Player'
import Enemy from './components/Enemy'
import { Attack } from './components/Menu'
import KoScreen from './components/KO'
import StartScreen from './components/StartScreen'
import Head from './components/Head'
import './App.css';



function App() {


  const [username, setUsername] = React.useState(localStorage.getItem('name'))


  React.useEffect(() => {
    if (username)
      localStorage.setItem('name', username)
  }, [username])

  const [player, setPlayer] = React.useState({
    hp: 100,
    name: "pikachu",
    avatar_url: "https://avatars2.githubusercontent.com/u/51966598?s=460&u=9fda51179cc2ce2e7a37d0abe91bcd2e206e5423&v=4"
  })
  const [enemy, setEnemy] = React.useState({
    hp: 100,
    name: "enemy",
    avatar_url: "https://avatars2.githubusercontent.com/u/51966598?s=460&u=9fda51179cc2ce2e7a37d0abe91bcd2e206e5423&v=4"
  })

  const [playerTurn, setPlayerTurn] = React.useState(true)

  const [spr, setSpr] = React.useState("ready") //state for super

  const [gameState, setGameState] = React.useState({
    gameState: "start", //start, fight, gameover
    round: 1,
    diff: "Normal" //Normal, Hard
  })

  const [volumeState, setVolumeState] = React.useState(0.05)

  let handleKeyPress = (event) => {
    if (event.key > 0 && event.key < 10) setVolumeState(event.key / 20)
    else if (event.key === '0') setVolumeState(1)
  }

  const [mute, setMute] = React.useState("false")

  document.addEventListener("keydown", handleKeyPress)

  const [winner, setWinner] = React.useState(null) //PLAYER or ENEMY

  const props = { player, setPlayer, enemy, setEnemy, playerTurn, setPlayerTurn, winner, setWinner, gameState, setGameState, spr, setSpr, username, setUsername, volumeState, mute, setMute }

  const game = gameState.gameState
 

  return (
    <div className="App">
      <div id="game-container">

        {game === "start" ?
          <div id="battle-container">
            <StartScreen {...props} />
          </div>
          : game === "fight" ?
            <div id="battle-container">
              <Head username={username} />
              <Enemy {...props} />
              <Player {...props} />
              <Attack {...props} />
            </div>
            : <KoScreen {...props} />}

      </div>
    </div>
  );
}

export default App;
