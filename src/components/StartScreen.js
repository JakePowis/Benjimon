import React, { useState, useEffect } from 'react';
// import AutoComplete from './Suggestion'


const StartScreen = ({ setPlayer, setGameState, gameState, player, username, setUsername }) => {
    const [value, setValue] = useState('')
    const [nameValue, setNameValue] = useState('')



    const [suggestion, setSuggestion] = useState(() => {
        return ['Greninja', 'Lucario', 'Mimikyu-disguised', 'Charizard-mega-x', 'Umbreon', 'Sylveon', 'Garchomp-mega', 'Rayquaza-mega', 'Gardevoir-mega', 'Gengar',
            'Dragalge', 'Tyranitar', 'Bulbasaur', 'toxicroak', 'Lugia', 'Rowlet', 'Aegislash-blade', 'Chandelure', 'Pikachu', 'Eevee', 'Luxray',
            'Decidueye', 'Zoroark', 'Lycanroc-midday', 'corsola', 'Flygon', 'Hydreigon', 'Sceptile', 'Blaziken-mega', 'snorlax']
    })

    const handleSubmit = e => {
        if (!value) return;
        setPlayer((player) => ({ ...player, name: value }))
        setUsername(nameValue)
        setGameState((gameState) => ({ ...gameState, gameState: "fight" }))
    }
    

    

    return (

        
        <fieldset className="start-screen-container">
            <legend>Let's start</legend>
            
            <label htmlFor="pokemon-name"></label>
            <div className="custom-select">
                {username? <div>Welcome {username} </div> : <label>Your name: 
                <input className="name-input" value={nameValue} onChange={e=> setNameValue(e.target.value)} />
            </label>}
            
            <select className="choose-pokemon-input" onChange={e => setValue(e.target.value)}>
                <option>Select Pokemon</option>
                {suggestion.map((pokemon, index) => (
                    <option value={pokemon.toLowerCase()} key={index}>{pokemon}</option>
                ))}
            </select>
            <button type="submit" value="Submit" onClick={handleSubmit}>Start</button>
            </div>
        </fieldset>
       
    )
}

export default StartScreen
