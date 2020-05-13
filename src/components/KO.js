import React, { useEffect, useState } from 'react';

const KO = ({ player, setPlayer, enemy, setEnemy, winner, setWinner, gameState }) => {


    console.log(enemy);

    return (
        <div className="ko-container">
            <div className="victor-and-loser">
                <img className={(winner = "PLAYER" ? "playerwins" : "enemywins")} src={enemy.avatar_url} alt="player" />
                <img className={(winner = "PLAYER" ? "playerwins" : "enemywins")} src={enemy.avatar_url} alt="player" />
            </div>
            <p>{player.name} has won! {enemy.name} is defeated.</p>
            <h3 onClick={gameState = "start"}>Click here to start a new game</h3>
        </div>

    )
}

export default KO;