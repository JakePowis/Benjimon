import React, { useEffect, useState } from 'react'
import { gameOverCheck } from "../utils/utils"
import playerSound from "../assets/sound/SFX_SHOOTING_STAR.wav"
import enemySound from "../assets/sound/SFX_INTRO_WHOOSH.wav"
import hitSound from "../assets/sound/SFX_CUT.wav"
import superSound from "../assets/sound/super.wav"
import battleMusic from "../assets/sound/battle.mp3"

export function Attack({ player, setPlayer, enemy, setEnemy, gameState, setGameState, winner, setWinner, playerTurn, setPlayerTurn, spr, setSpr }) {


    const [mute, setMute] = useState("false")
    const [menu, setMenu] = useState("false")
    const [onLoad, setOnLoad] = useState("true")


    let battleAudio = new Audio(battleMusic)
    battleAudio.volume = 0.05;

    const toggleMute = () => {

        setMute(!mute)

        if (!mute) {  //mute not working for MP3
            battleAudio.pause();
            battleAudio.currentTime = 0;
        }

    }


    const attackSound = (person) => {
        let audio = ""
        let hit = new Audio(hitSound)
        if (person === "player") {
            audio = new Audio(playerSound)
            setTimeout(() => hit.play(), 1100)
        }
        else if (person === "super") {
            audio = new Audio(superSound) //change to good sound
            setTimeout(() => {
                hit.play()
                setTimeout(() => hit.play(), 400)
            }, 600) // fix set time out call back


        }
        else {
            audio = new Audio(enemySound)
            setTimeout(() => hit.play(), 1100)
        }
        audio.play()
    }

    useEffect(() => {
        if (mute) battleAudio.play()
        else {
            battleAudio.pause();
            battleAudio.currentTime = 0;
        }
        return () => {
            battleAudio.pause();
            battleAudio.currentTime = 0;
        }
    }, [mute]);


    const playerAttack = () => {
        if (mute) attackSound("player")
        setPlayerTurn(!playerTurn)
        setTimeout(() => {
            if (onLoad) setOnLoad(false)
            let playerDam = ""
            playerDam = Math.floor(10 + Math.random() * 20)
            let remainingHp = enemy.hp - playerDam
            setMenu(false)
            setEnemy((enemy) => ({ ...enemy, hp: remainingHp < 0 ? 0 : remainingHp }))
        }, 1100)
    }


    const superAttack = () => {
        if (spr === "used") return

        if (mute) attackSound("super")
        setSpr("used")
        setPlayerTurn(!playerTurn)
        setTimeout(() => {
            if (onLoad) setOnLoad(false)
            let playerDam = Math.floor(30 + Math.random() * 10)
            let remainingHp = enemy.hp - playerDam
            let hit = new Audio(hitSound)
            if (mute) hit.play() //extra hit
            setMenu(false)
            setEnemy((enemy) => ({ ...enemy, hp: remainingHp < 0 ? 0 : remainingHp }))
        }, 1100)
    }


    const enemyAttack = () => {
        if (mute) attackSound("enemy")
        setPlayerTurn(!playerTurn)
        setTimeout(() => {
            let enemyDam = Math.floor(15 + Math.random() * 20)
            if (gameState.diff === "Hard") enemyDam = enemyDam + 10
            let remainingHp = player.hp - enemyDam
            setMenu(true)
            setPlayer((player) => ({ ...player, hp: remainingHp < 0 ? 0 : remainingHp }))
        }, 1100)
    }

    useEffect(() => {
        gameOverCheck({ gameState, setGameState, player, enemy, setPlayer, setEnemy, winner, setWinner })
    }, [player, enemy]);


    return (
        // <button onClick={playerturn ? playerAttack : enemyAttack}>Attack</button>
        <div id="menu">
            <div className="left-menu">
                <div className="yellow-menu">
                    <div className="inner-menu">
                        <p id="menu-prompt">{onLoad ? <span>A WILD {enemy.name.toUpperCase()} APPEARS!!!!</span> : menu ? <span>What will {player.name} do?</span> : <span>{enemy.name} is ATTACKING!</span>} </p>
                    </div>
                </div>
            </div>
            <div className="fight-menu">
                <div className="right-menu">
                    <h3 onClick={playerTurn ? playerAttack : enemyAttack}>{menu ? "ATTACK" : "DEFEND"}</h3>
                    <h3 className={spr === "used" ? "used" : ""} onClick={playerTurn ? superAttack : enemyAttack}>{menu ? "SUPER ATTACK" : "-"} </h3>
                    <h3 className={mute ? "" : "used"} onClick={toggleMute}>{mute ? "MUTE" : "MUTED"}</h3>
                    <h3 onClick={() => {
                        setGameState({ ...gameState, gameState: "start" })
                        setPlayer({ ...player, hp: 100 })
                        setEnemy({ ...enemy, hp: 100 })
                        setPlayerTurn(true)
                        setSpr("ready")
                    }}> RUN</h3>
                </div>
            </div>
        </div>
    )
}

export function Flee() {

}

