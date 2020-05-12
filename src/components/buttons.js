import React, {useEffect, useState} from 'react'

export function Attack ({player, setPlayer, enemy, setEnemy}) {

    const [playerturn, setPlayerturn] = useState(true)

    const playerAttack = () => {
        let playerDam = Math.floor(10 + Math.random() * 20)
        setEnemy((enemy) => enemy.hp = enemy.hp - playerDam)
        console.log("player attack", enemy, player)
        setPlayerturn(!playerturn)
        return
    }

    const enemyAttack = () => {
        let enemyDam = Math.floor(10 + Math.random() * 20)
        setPlayer((player) => player.hp = player.hp - enemyDam)
        setPlayerturn(!playerturn)
        console.log("enemy attack", enemy, player);
        return

    }

    return (
        <div>
            <button onClick={playerturn ? playerAttack : enemyAttack}>Attack</button>
        </div>
    )
}

export function Flee () {

}

