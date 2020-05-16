import React, { useEffect, useState } from 'react';



function Player({ player, setPlayer, playerTurn, spr, data, setData, onLoad }) {



  return (

    <div id="player-container">
      <div className={"pokemon-display " + (spr === "used" ? "sprAtk" : "")}>

        <img className={"player " + (onLoad ? "" : playerTurn ? "hit" : "playeratk")} src={data.sprites.back_default ? data.sprites.back_default : data.sprites.front_default} alt={`${data.name} default sprite`} />

        <div className="grey-oval"></div>
      </div>
      <div className="character-stats">
        <div className="name-level">
          <h2 className="name">{data.name}</h2>
          <h2>Lv60</h2>
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
