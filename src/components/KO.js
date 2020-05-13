import React, { useEffect, useState } from 'react';

const KO = ({ player, setPlayer, enemy, setEnemy, winner, setWinner, gameState, setGameState }) => {

    console.log("player avatar_url = ", player);

  let refreshgame = ()=> {
      setGameState({...gameState, gameState:"start"})
      setPlayer({...player, hp: 100})
      setEnemy({...enemy, hp:100})
  }
      

    return (
        <div className="ko-container">
            <div className="victor-and-loser">
                <img className={(winner === "PLAYER" ? "playerwins" : "enemywins")} src={player.avatar_url} alt="player"/>
                <img className={(winner === "ENEMY" ? "playerwins" : "enemywins")} src={enemy.avatar_url} alt="enemy"/>
            </div>
            <p>{player.name} has won! {enemy.name} is defeated.</p>
            <h3 onClick={refreshgame}>Click here to start a new game</h3>

        </div>
    )
}

export default KO;