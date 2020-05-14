import React, { useEffect, useState } from 'react';

const KO = ({ player, setPlayer, enemy, setEnemy, winner, setWinner, gameState, setGameState }) => {

    console.log("player avatar_url = ", player);

    let refreshgame = () => {
        setGameState({ ...gameState, gameState: "start" })
        setPlayer({ ...player, hp: 100 })
        setEnemy({ ...enemy, hp: 100 })
    }


    return (
        <div className="ko-container">
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>

            <div className="victor-and-loser">

                <div className={"contender player " + (winner === "PLAYER" ? "winnerimage" : "loserimage")}>
                    {winner === "PLAYER" ? <img src="../assets/images/trophy.svg" className="trophy" alt="trophy" /> : ""}
                    <img src={player.avatar_url} alt="player" />
                </div>
                <div className={("contender enemy " + winner === "PLAYER" ? "loserimage" : "winnerimage")}>
                {winner === "PLAYER" ? "": <img src="../assets/images/trophy.svg" className="trophy" alt="trophy" />}
                    <img src={enemy.avatar_url} alt="enemy" />
                </div>
            </div>
            {winner === "PLAYER" ?
                <p>{player.name} has won! {enemy.name} is defeated.</p> :
                <p>{enemy.name} has won! {player.name} is defeated.</p>
            }
            <h3 onClick={refreshgame}>Click here to start a new game</h3>

        </div>
    )
}

export default KO;