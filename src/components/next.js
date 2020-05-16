import React, { useEffect } from 'react';
import endMusic from "../assets/sound/SFX_GET_KEY_ITEM.wav"

const Next = ({ player, setPlayer, enemy, setEnemy, winner, setWinner, gameState, setGameState, setSpr, setPlayerTurn, volumeState, mute, onLoad, setOnLoad }) => {


    let refreshgame = () => {
        setGameState({ ...gameState, gameState: "fight", round: gameState.round + 1 })
        setPlayer({ ...player, hp: 100 })
        setEnemy({ ...enemy, hp: 100 })
        setPlayerTurn(true)
        setSpr("ready")
        setOnLoad(true)
    }

    console.log("round is", gameState.round)

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
        <div className="next-container">
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
                    <img src={player.avatar_url} alt="player" />
                </div>
                <div className="contender enemy loserimage">
                    <img src={enemy.avatar_url} alt="player" />
                </div>

            </div>


            <p>You have defeated {enemy.name}!!!!!!</p>

            <p>Time to take on the next Benji...</p>


            <div class="pokebola2 tooltip2" onClick={refreshgame}><span className="tooltiptext2">battle</span></div>

        </div>
    )
}

export default Next;