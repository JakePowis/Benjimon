import React, { useEffect, useState } from 'react';
import { getPokemon } from '../utils/utils'

function Player({ player, setPlayer, enemy, setEnemy }) {
  const [data, setData] = useState(() => {
    return ""
  })

  const name = 'pikachu'

  useEffect(() => {
    getPokemon(name).then((data) => setData(data))
  }, [])

  if (!data) return <div>Loading...</div>;
  return (
    <div id="player-container">
      <div className="pokemon-display">
        <img className="enemy-pokemon" src={data.sprites.back_default} alt={`${data.name} default sprite`} />
        <div className="grey-oval"></div>
      </div>
      <div className="character-stats">
        <div className="name-level">
          <h2 className="name">{data.name}</h2>
          <h2>Lv10</h2>
        </div>
        <div className="bar">
          HP<progress value={player.hp} max="100">0%</progress>
          <h5>{player.hp}/100</h5>
        </div>
      </div>
    </div>

  );
}

export default Player;
