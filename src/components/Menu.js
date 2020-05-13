import React, { useEffect, useState } from 'react'
import { gameOverCheck } from "../utils/utils"
import playerSound from "../assets/sound/SFX_SHOOTING_STAR.wav"
import enemySound from "../assets/sound/SFX_INTRO_WHOOSH.wav"
import hitSound from "../assets/sound/SFX_CUT.wav"
import superSound from "../assets/sound/SFX_SHOOTING_STAR.wav"
import battleMusic from "../assets/sound/battle.mp3"

export function Attack({ player, setPlayer, enemy, setEnemy, gameState, setGameState, winner, setWinner, playerTurn, setPlayerTurn }) {


    const [mute, setMute] = useState("false")
    const [menu, setMenu] = useState("false")
    const [spr, setSpr] = useState("ready")

    let battleAudio = new Audio(battleMusic)

    const toggleMute = () => {

        setMute(!mute)

        if (!mute) {  //mute not working for MP3
            battleAudio.pause();
            battleAudio.currentTime = 0;
        }
        console.log("MUTED", mute)

    }


    const attackSound = (person) => {
        let audio = ""
        let hit = new Audio(hitSound)
        if (person === "player") {
            audio = new Audio(playerSound)
            setTimeout(() => hit.play(), 1100)
        }
        else if (person === "super") {
            audio = new Audio(playerSound) //change to good sound
            setTimeout(() => {
                hit.play()
                setTimeout(() => hit.play(), 800)
            }, 600) // fix set time out call back

            console.log("SUPPER HITTT")
        }
        else {
            audio = new Audio(enemySound)
            setTimeout(() => hit.play(), 1100)
        }
        console.log("Play sound", audio)
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
            let playerDam = ""
            playerDam = Math.floor(30 + Math.random() * 10)
            let remainingHp = enemy.hp - playerDam
            setMenu(false)
            setEnemy((enemy) => ({ ...enemy, hp: remainingHp < 0 ? 0 : remainingHp }))
        }, 1100)
    }


    const enemyAttack = () => {
        if (mute) attackSound("enemy")
        setPlayerTurn(!playerTurn)
        setTimeout(() => {
            let enemyDam = Math.floor(10 + Math.random() * 20)
            let remainingHp = player.hp - enemyDam
            setMenu(true)
            setPlayer((player) => ({ ...player, hp: remainingHp < 0 ? 0 : remainingHp }))
        }, 1100)
    }

    useEffect(() => {
        gameOverCheck({gameState, setGameState, player, enemy, setPlayer, setEnemy, winner, setWinner})
    }, [player, enemy]);



    return (
        // <button onClick={playerturn ? playerAttack : enemyAttack}>Attack</button>
        <div id="menu">
            <div className="left-menu">
                <div className="yellow-menu">
                    <div className="inner-menu">
                        <p id="menu-prompt">{menu ? <span>What will {player.name} do?</span> : <span>{enemy.name} is ATTACKING!</span>} </p>
                    </div>
                </div>
            </div>
            <div className="fight-menu">
                <div className="right-menu">
                    <h3 onClick={playerTurn ? playerAttack : enemyAttack}>{menu ? "ATTACK" : "DEFEND"}</h3>
                    <h3 className={spr === "used" ? "used" : ""} onClick={playerTurn ? superAttack : enemyAttack}>{menu ? "SUPER ATTACK" : "-"} </h3>
                    <h3 onClick={toggleMute}>{mute ? "MUTE" : "MUTED"}</h3>
                    <h3 onClick={() => setGameState({ ...gameState, gameState: "start" })}> RUN</h3>
                </div>
            </div>
        </div>
    )
}

export function Flee() {

}

