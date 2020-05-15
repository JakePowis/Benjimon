import React, { useEffect } from 'react';
import endMusic from "../assets/sound/SFX_GET_KEY_ITEM.wav"

const Win = ({ player, setPlayer, enemy, setEnemy, winner, setWinner, gameState, setGameState, setSpr, setPlayerTurn, volumeState, mute }) => {


    let refreshgame = () => {
        setGameState({ ...gameState, gameState: "start", round: 1 })
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
                    <img src={player.avatar_url} alt="player" />
                </div>


            </div>

            <p> Congratulations, you have defeated all of the evil evil Benjis!</p>

            <p> The world is now a much, much safer place</p>

            <h3 onClick={refreshgame}>Home</h3>

        </div>
    )
}

export default Win;