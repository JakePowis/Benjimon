import React, { useEffect, useState } from 'react';
import { getUserData } from '../utils/utils'

function Enemy({ player, setPlayer, enemy, setEnemy }) {


    const [user, setUser] = useState(() => {
        return []
    })

    useEffect(() => {
        getUserData().then(data => setUser(data[Math.floor(Math.random() * data.length)]));
    }, []);

    const { avatar_url, login } = user

    return (

        <div id="enemy-container">
            <div className="character-stats">
                <div className="name-level">
                    <h2 className="name">{login}</h2>
                    <h2>Lv10</h2>
                </div>
                <div className="bar">
                    HP<progress value={enemy.hp} max="100">0%</progress>
                    <h5>{enemy.hp}/100</h5>
                </div>
            </div>
            <div className="pokemon-display">
                <img className="enemy-pokemon" src={avatar_url} />
                <div className="grey-oval"></div>
            </div>
        </div>
    )

}

export default Enemy