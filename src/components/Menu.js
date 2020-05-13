import React, { useEffect, useState } from 'react'
import { gameOverCheck } from "../utils/utils"

export function Attack({ player, setPlayer, enemy, setEnemy, gameState, setGameState, winner, setWinner }) {

    const [playerturn, setPlayerturn] = useState(true)

    const playerAttack = () => {
        let playerDam = Math.floor(10 + Math.random() * 20)
        let remainingHp = enemy.hp - playerDam
        setEnemy((enemy) => ({ ...enemy, hp: remainingHp < 0 ? 0 : remainingHp }))
        console.log("player attack", enemy, player)
        setPlayerturn(!playerturn)

    }

    const enemyAttack = () => {
        let enemyDam = Math.floor(10 + Math.random() * 20)
        let remainingHp = player.hp - enemyDam
        setPlayer((player) => ({ ...player, hp: remainingHp < 0 ? 0 : remainingHp }))
        setPlayerturn(!playerturn)
        console.log("enemy attack", enemy, player);

    }

    useEffect(() => {
        gameOverCheck(gameState, setGameState, player, enemy, setPlayer, setEnemy, winner, setWinner)
    }, [player, enemy]);



    return (
        // <button onClick={playerturn ? playerAttack : enemyAttack}>Attack</button>
        <div id="menu">
            <div className="left-menu">
                <div className="yellow-menu">
                    <div className="inner-menu">
                        <p id="menu-prompt">What will PLAYERNAME do?</p>
                    </div>
                </div>
            </div>
            <div className="fight-menu">
                <div className="right-menu">
                    <h3 onClick={playerturn ? playerAttack : enemyAttack}>{playerturn ? "ATTACK" : "DEFEND"}</h3>
                    <h3 >RUN</h3>
                    <h3 >UNUSED</h3>
                    <h3 >UNUSED</h3>
                </div>
            </div>
        </div>
    )
}

export function Flee() {

}

