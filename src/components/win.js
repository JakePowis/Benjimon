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

            <p style={{ margin: "1% 1% 3% 1%" }}> Congratulations, you have defeated all of the evil evil Benjis!</p>

            <p style={{ margin: "3% 1%" }}> The world is now a much, much safer place</p>

            <p style={{ margin: "3% 1%" }}>You completed the game on <span style={{ color: "blue" }}>{gameState.diff}</span> mode</p>

            <h3 style={{ margin: "2%" }} onClick={refreshgame}>Return home</h3>

        </div>
    )
}

export default Win;