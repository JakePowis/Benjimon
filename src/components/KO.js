import React, { useEffect } from 'react';
import endMusic from "../assets/sound/SFX_GET_KEY_ITEM.wav"

const KO = ({ player, setPlayer, enemy, setEnemy, winner, setWinner, gameState, setGameState, setSpr, setPlayerTurn, volumeState, mute }) => {


    let refreshgame = () => {
        setGameState({ ...gameState, gameState: "start" })
        setPlayer({ ...player, hp: 100 })
        setEnemy({ ...enemy, hp: 100 })
        setPlayerTurn(true)
        setSpr("ready")
    }

    let endAudio = new Audio(endMusic)
    endAudio.volume = volumeState;

    useEffect(() => {
        if (mute) endAudio.play()
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

               
                <div className="contender player1 winnerimage">
                    <img src="../assets/images/trophy.svg" className="trophy" alt="trophy" />
                    <img src={winner === "PLAYER" ? player.avatar_url : enemy.avatar_url} alt="player" />
                </div>
                <div className="contender enemy loserimage">
                    <img src={winner === "PLAYER" ? enemy.avatar_url : player.avatar_url} alt="player" />
                </div>

            </div>

            {winner === "PLAYER" ? <p><b>{player.name}</b> has <span className="green">won!</span> <br /><br />{enemy.name} is defeated</p> : <p><b>{enemy.name}</b> has won!  <br /><br />{player.name} is <span className="red">defeated</span></p>}

            <h3 onClick={refreshgame}>Click here to start a new game</h3>

        </div>
    )
}

export default KO;