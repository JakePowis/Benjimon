import React, { useEffect, useState } from 'react';
import { getPokemon } from '../utils/utils'

function Player({ player, setPlayer, enemy, setEnemy }) {
  const [data, setData] = useState(() => {
    return ""
  })

  const [name, setName] = useState(() => {
    return "pikachu"
  })
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return;
    setName(value)
    setValue('')
  }

  useEffect(() => {
    getPokemon(name).then((data) => setData(data))
  }, [name])



  if (!data) return <div>Loading...</div>;
  return (
    <div>
      {name ? <form onSubmit={handleSubmit}>
        <label>Choose Pokemon</label>
        <input className="pokemon-player-input"
          name="pokemon"
          value={value}
          type="text"
          onChange={e => setValue(e.target.value)} />
      </form> : null}

      <div id="player-container">
        <div className="pokemon-display">
          <img className="enemy-pokemon" src={data.sprites.front_default} alt={`${data.name} default sprite`} />
          <div className="grey-oval"></div>
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
