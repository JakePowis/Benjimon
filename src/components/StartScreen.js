import React, { useState } from 'react';
// import AutoComplete from './Suggestion'


const StartScreen = ({ setPlayer, setGameState, gameState, player }) => {
    const [value, setValue] = useState('')


    const [suggestion, setSuggestion] = useState(() => {
        return ['Greninja', 'Lucario', 'Mimikyu-disguised', 'Charizard-mega-x', 'Umbreon', 'Sylveon', 'Garchomp-mega', 'Rayquaza-mega', 'Gardevoir-mega', 'Gengar',
            'Dragalge', 'Tyranitar', 'Bulbasaur', 'toxicroak', 'Lugia', 'Rowlet', 'Aegislash-blade', 'Chandelure', 'Pikachu', 'Eevee', 'Luxray',
            'Decidueye', 'Zoroark', 'Lycanroc-midday', 'corsola', 'Flygon', 'Hydreigon', 'Sceptile', 'Blaziken-mega', 'snorlax']
    })

    const handleSubmit = e => {
        console.log('i have faith')
        if (!value) return;
        setPlayer((player) => ({ ...player, name: value }))
        setGameState((gameState) => ({ ...gameState, gameState: "fight" }))
        setValue('')
    }
    console.log(value)

    return (
        <fieldset>
            <legend>Pick Pokemon to start</legend>

            <label htmlFor="pokemon-name">Choose Pokemon</label>
            <select className="choose-pokemon-input" onChange={e => setValue(e.target.value)}>
                <option disabled="disabled" selected="selected">Select</option>
                {suggestion.map((pokemon, index) => (
                    <option value={pokemon.toLowerCase()} key={index}>{pokemon}</option>
                ))}
            </select>
            <button type="submit" value="Submit" onClick={handleSubmit}>Start</button>

        </fieldset>
    )
}

export default StartScreen