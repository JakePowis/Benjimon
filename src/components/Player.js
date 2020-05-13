import React, { useEffect, useState } from 'react';
import { getPokemon } from '../utils/utils'


function Player({ player, setPlayer, enemy, setEnemy, playerTurn }) {
  const [data, setData] = useState(() => {
    return ""
  })


  useEffect(() => {
    getPokemon(player.name).then((data) => setData(data))
  }, [player])


  console.log("Player TURN", playerTurn)

  if (!data) return <div>Loading...</div>;
  return (


    <div id="player-container">
      <div className="pokemon-display">

          <img className={"enemy-pokemon " + (playerTurn ? "hit" : "playeratk")} src={data.sprites.back_default? data.sprites.back_default : data.sprites.front_default } alt={`${data.name} default sprite`} />

        <div className="grey-oval"></div>
      </div>
      <div className="character-stats">
        <div className="name-level">
          <h2 className="name">{data.name}</h2>
          <h2>Lv10</h2>
        </div>
        <div className="bar">
          HP<progress value={player.hp} max="100">0%</progress>
          <h5><span className={player.hp > 60 ? "" : player.hp > 30 ? "yellow" : "red"}> {player.hp}</span>/100</h5>
        </div>
      </div>
    </div>

  );
}

export default Player;
