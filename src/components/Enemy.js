import React, { useEffect, useState } from 'react';
import { getUserData } from '../utils/utils'

function Enemy({ enemy, setEnemy, playerTurn, spr, gameState }) {


    const [user, setUser] = useState(() => {
        return []
    })

    const benjis = [
        { name: "Scared Benji", avatar_url: "../assets/images/scared.png", hp: 40, maxHP: 40, level: 8 },
        { name: "French Benji", avatar_url: "../assets/images/french.png", hp: 65, maxHP: 65, level: 23 },
        { name: "Serial Killer Benji", avatar_url: "../assets/images/serialKiller.png", hp: 80, maxHP: 80, level: 47 },
        { name: "Female Benji", avatar_url: "../assets/images/female.png", hp: 100, maxHP: 100, level: 60 },
        { name: "Darth Sidius Benji", avatar_url: "../assets/images/darth.png", hp: 120, maxHP: 120, level: 100 }
    ]



    console.log("BENJI CHECK", benjis[gameState.round - 1].name)

    useEffect(() => {
        setEnemy((enemy) => ({
            ...enemy,
            name: benjis[gameState.round - 1].name,
            avatar_url: benjis[gameState.round - 1].avatar_url,
            hp: benjis[gameState.round - 1].hp,
            maxHP: benjis[gameState.round - 1].maxHP,
            level: benjis[gameState.round - 1].level
        }))
    }, []);



    return (

        <div id="enemy-container">
            <div className="character-stats">
                <div className="name-level">
                    <h2 className="name">{enemy.name}</h2>
                    <h2>Lv{enemy.level}</h2>
                </div>
                <div className="bar">
                    HP<progress value={enemy.hp} max={enemy.maxHP}>0%</progress>
                    <h5><span className={enemy.hp > 60 ? "" : enemy.hp > 30 ? "yellow" : "red"}>{enemy.hp}</span>/{enemy.maxHP}</h5>
                </div>
            </div>
            <div className={"pokemon-display " + (spr === "used" ? "spr" : "")}>
                <img className={"enemy-pokemon " + (!playerTurn ? "hit" : "enemyatk")} src={enemy.avatar_url} />
                <div className="grey-oval"></div>
            </div>
        </div>
    )

}

export default Enemy