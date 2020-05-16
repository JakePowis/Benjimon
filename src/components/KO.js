import React, { useEffect } from 'react';
import endMusic from "../assets/sound/map.mp3"

const KO = ({ player, setPlayer, enemy, setEnemy, winner, setWinner, gameState, setGameState, setSpr, setPlayerTurn, volumeState, mute, setOnLoad }) => {


    let refreshgame = () => {
        setGameState({ ...gameState, gameState: "start", round: 1 })
        setPlayer({ ...player, hp: 100 })
        setEnemy({ ...enemy, hp: 100 })
        setPlayerTurn(true)
        setSpr("ready")
        setOnLoad(true)
    }

    let endAudio = new Audio(endMusic)
    endAudio.currentTime = 1;
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


            <div className="victor-and-loser">


                <div className="contender player1 winnerimage">
                    <img src={enemy.avatar_url} alt="player" />
                </div>
                <div className="contender enemy loserimage">
                    <img src={player.avatar_url} alt="player" />
                </div>

            </div>

            <p>You got rekt, son.</p>
            <br />

            <p> {enemy.name} is victorious!</p>

            <h3 onClick={refreshgame}>Benjis now rule the world, click here to try again to stop them</h3>

        </div>
    )
}

export default KO;