import React from 'react';
import Player from './components/Player'
import Enemy from './components/Enemy'
import { Attack } from './components/Menu'
import KoScreen from './components/KO'
import NextScreen from './components/next'
import WinScreen from './components/win'
import IntroScreen from './components/intro'
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
    avatar_url: ""
  })
  const [enemy, setEnemy] = React.useState({
    hp: 100,
    name: "enemy",
    avatar_url: ""
  })

  const [playerTurn, setPlayerTurn] = React.useState(true)

  const [spr, setSpr] = React.useState("ready") //state for super

  const [data, setData] = React.useState(() => {
    return ""
  })

  const [gameState, setGameState] = React.useState({
    gameState: "start", //start, intro, fight, next, gameover, win
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

  const props = { player, setPlayer, enemy, setEnemy, playerTurn, setPlayerTurn, winner, setWinner, gameState, setGameState, spr, setSpr, username, setUsername, volumeState, mute, setMute, data, setData }

  const game = gameState.gameState


  return (
    <div className="App">
      <div id="game-container">

        {game === "start" ?
          <div id="battle-container">
            <StartScreen {...props} />
          </div>
          : game === "intro" ?
            <IntroScreen {...props} />
            : game === "fight" ?
              <div id="battle-container">
                <Head {...props} />
                <Enemy {...props} />
                <Player {...props} />
                <Attack {...props} />
              </div>
              : game === "next" ?
                <NextScreen {...props} />
                : game === "gameover" ?
                  <KoScreen {...props} />
                  : game === "win" ?
                    <WinScreen {...props} /> :
                    <div>NO RESULT LIKE THIS</div>}


      </div>
    </div>
  );
}

export default App;
