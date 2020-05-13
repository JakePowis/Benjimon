import React from 'react';
import Pokemon from './components/Allies'
import UserData from './components/Axis'
import {Attack} from './components/buttons'
import {Flee} from './components/buttons'
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
      
      <Pokemon />
      <UserData hp={enemy.hp} />
      <Attack player={player} setPlayer={setPlayer} enemy={enemy} setEnemy={setEnemy}/>
      {/* <Flee player={player} setPlayer={setPlayer} enemy={enemy} setEnemy={setEnemy}/> */}
    </div>
  );
}

export default App;
