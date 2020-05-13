import React, { useEffect, useState } from 'react'

export function Attack({ player, setPlayer, enemy, setEnemy }) {

    const [playerturn, setPlayerturn] = useState(true)

    const playerAttack = () => {
        let playerDam = Math.floor(10 + Math.random() * 20)
        setEnemy((enemy) => ({ ...enemy, hp: enemy.hp - playerDam }))
        console.log("player attack", enemy, player)
        setPlayerturn(!playerturn)
        return
    }

    const enemyAttack = () => {
        let enemyDam = Math.floor(10 + Math.random() * 20)
        setPlayer((player) => ({ ...player, hp: player.hp - enemyDam }))
        setPlayerturn(!playerturn)
        console.log("enemy attack", enemy, player);
        return
    }

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
                    <h3 onClick={playerturn ? playerAttack : enemyAttack}>{playerturn? "ATTACK" : "DEFEND"}</h3>
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

