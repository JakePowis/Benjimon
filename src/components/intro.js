import React, { useEffect } from 'react';
import endMusic from "../assets/sound/start-music.mp3"
import { getPokemon } from '../utils/utils'
var ReactCSSTransitionGroup = require('react-transition-group'); // ES5 with npm

const Intro = ({ player, setPlayer, enemy, setEnemy, winner, setWinner, gameState, setGameState, setSpr, setPlayerTurn, volumeState, mute, data, setData }) => {


    let endAudio = new Audio(endMusic)
    endAudio.currentTime = 16;
    endAudio.volume = volumeState + 0.05;

    const [you, setYou] = React.useState(false)
    const [btn, setBtn] = React.useState(false)

    console.log("you is", you)



    useEffect(() => {
        getPokemon(player.name).then((data) => {
            setData(data)
            setPlayer(() => ({ ...player, avatar_url: data.sprites.front_default }))
        })
    }, [])

    useEffect(() => {
        if (mute) endAudio.play()
        return () => {
            endAudio.pause();
            endAudio.currentTime = 20;
        }
    }, []);


    useEffect(() => {
        const timer = setTimeout(() => {
            setYou(true)
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setBtn(true)
        }, 5000);
        return () => clearTimeout(timer);
    }, []);


    const handleSubmit = e => {
        setGameState((gameState) => ({ ...gameState, gameState: "fight" }))
    }

    return (
        <div className="intro-container">

            <div>Evil benjis are attacking Pillet Town, and there is only one person who can stop him!!!</div>
            {/* 

            <ReactCSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {<div>Evil benjis are attacking Pillet Town, and there is only one person who can stop him!!!</div>}
            </ReactCSSTransitionGroup> */}

            <div className={you ? "intro1" : "intro1 visible"}>
                <div> {player.name}, i choose you!!</div>
                <img className="introImg" src={player.avatar_url} alt="player" />
            </div>

            <div className={btn ? "intro2" : "intro2 visible"}>
                <button type="submit" className="btn1" value="Submit" onClick={handleSubmit}>BATTLE!</button>
            </div>




        </div>
    )
}

export default Intro;