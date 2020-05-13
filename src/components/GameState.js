import React, { useEffect, useState } from 'react'


export function GameState({ gameState, winner }) {

    const game = gameState.gameState
    const round = gameState.round


    return (
        <div>
            <div>ROUND: {round}</div>
            {winner ? <div> {winner} WINS!</div> : <div>fighting....</div>}


            {/* ROUND LOGIC */}

            {game === "start" ?
                <div>Start Screen</div>

                : game === "fight" ?
                    <div>FIGHT!</div>

                    :  //gameOver
                    <div>GameOver</div>}

        </div>
    )


}

export default GameState;
