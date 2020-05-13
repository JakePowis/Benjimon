import React, {useState} from 'react';


const StartScreen = ({setPlayer, setGameState, gameState, player}) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
      e.preventDefault()
      if (!value) return;
      setPlayer((player)=> ({...player, name:value}))
      setGameState((gameState)=>({...gameState, gameState:"fight"}) )
      setValue('')
    }

    return (
        <fieldset>
            <legend>Pick Pokemon to start</legend>
            <form onSubmit={handleSubmit}>
                <label htmlFor="pokemon-name">Choose Pokemon</label>
                <input className="choose-pokemon-input"
                name="pokemon-name" 
                value={value} 
                type="text" 
                onChange={e=> setValue(e.target.value)} ></input>
            </form>
        </fieldset>
    )
}

export default StartScreen