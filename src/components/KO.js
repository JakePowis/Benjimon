import React, { useEffect, useState } from 'react';

const KO = ({ player, setPlayer, enemy, setEnemy })=>{


    return (
    <div>{player.name} has won! {enemy.name} is defeated.</div>

    )
}

export default KO;