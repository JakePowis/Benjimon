import React, { useEffect, useState } from 'react';

const KO = ({ player, setPlayer, enemy, setEnemy }) => {


    return (
        <div className="ko-container">
            <div className="victor-and-loser">
                <img></img>
                
            </div>
            <p>{player.name} has won! {enemy.name} is defeated.</p>
            <h3>Click here to start a new game</h3>
        </div>

    )
}

export default KO;