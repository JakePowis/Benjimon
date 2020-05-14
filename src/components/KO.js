import React, { useEffect, useState } from 'react';
import endMusic from "../assets/sound/SFX_GET_KEY_ITEM.wav"

const KO = ({ player, setPlayer, enemy, setEnemy, winner, setWinner, gameState, setGameState, setSpr, setPlayerTurn }) => {

    console.log("player avatar_url = ", player);

    let refreshgame = () => {
        setGameState({ ...gameState, gameState: "start" })
        setPlayer({ ...player, hp: 100 })
        setEnemy({ ...enemy, hp: 100 })
        setPlayerTurn(true)
        setSpr("ready")
    }

    let endAudio = new Audio(endMusic)
    endAudio.volume = 0.05;

    useEffect(() => {
        endAudio.play()
        return () => {
            endAudio.pause();
            endAudio.currentTime = 0;
        }
    }, []);

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

                <div className={"contender player1 " + (winner === "PLAYER" ? "winnerimage" : "loserimage")}>
                    {winner === "PLAYER" ? <img src="../assets/images/trophy.svg" className="trophy" alt="trophy" /> : ""}
                    <img src={player.avatar_url} alt="player" />
                </div>
                <div className={("contender enemy " + winner === "PLAYER" ? "loserimage" : "winnerimage")}>
                {winner === "PLAYER" ? "": <img src="../assets/images/trophy.svg" className="trophy" alt="trophy" />}
                    <img src={enemy.avatar_url} alt="enemy" />
                </div>
            </div>

            {winner === "PLAYER" ? <p><b>{player.name}</b> has <span className="green">won!</span> <br /><br />{enemy.name} is defeated</p> : <p><b>{enemy.name}</b> has won!  <br /><br />{player.name} is <span className="red">defeated</span></p>}

            <h3 onClick={refreshgame}>Click here to start a new game</h3>

        </div>
    )
}

export default KO;