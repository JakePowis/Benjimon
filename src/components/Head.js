import React from 'react'

const Head = ({ username, gameState }) => {

    return (
        <React.Fragment>
            <div className="welcome-message">
                <div className="welcome"> Player: {username} </div>
                <div>{gameState.round === 5 ? "BOSS FIGHT!!!" : "Round: " + gameState.round} </div>
            </div>


        </React.Fragment>
    )
}

export default Head;