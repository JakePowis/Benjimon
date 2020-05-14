import React, { useState, useEffect } from 'react';
// import AutoComplete from './Suggestion'


const StartScreen = ({ setPlayer, setGameState, username, setUsername }) => {
    const [value, setValue] = useState('')
    const [nameValue, setNameValue] = useState('')




    const [suggestion, setSuggestion] = useState(() => {
        return [
            "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", 'Jigglypuff', 'Pidgey', 'Magikarp', 'Meowth', 'Greninja', 'Oddish', 'Lucario', 'Mimikyu-disguised', 'Charizard-mega-x', 'Umbreon', "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", 'Sylveon', "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", 'Gardevoir-mega', 'Gengar', "Electabuzz", "Magmar", "Gyarados", "Nidorino", "Clefairy", 'toxicroak', 'Lugia', 'Rowlet', 'Aegislash-blade', 'Chandelure', 'Pikachu', 'Eevee', 'Luxray', "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", 'Decidueye', 'Zoroark', 'Lycanroc-midday', 'corsola', 'Flygon', 'Hydreigon', 'Sceptile', 'Blaziken-mega', 'snorlax', "Dragonair", "Dragonite", "Mewtwo", "Mew"]
    })

    const handleSubmit = e => {
        if (!value) return;
        setPlayer((player) => ({ ...player, name: value }))
        setUsername(nameValue || localStorage.getItem('name'))
        setGameState((gameState) => ({ ...gameState, gameState: "fight" }))
    }

    const handleDiffChange = e => {
        let diff = e.target.value
        setGameState((gameState) => ({ ...gameState, diff: diff }))

    }

    return (


        <div className="startScreen">
            <img src="https://fontmeme.com/permalink/200513/76b4d46ea3cad47dba7fd58af03f8544.png" alt="pokemon title" />
            <img src="https://fontmeme.com/permalink/200513/cab741fc2d12adebbdd05a50303f9c57.png" alt="slogan" />

            <fieldset>
                <legend className="pokeLegend">Pick a Pokemon to start</legend>
                {username? <div>Welcome {username} </div> : <label>Your name: 
                <input className="name-input" value={nameValue} onChange={e=> setNameValue(e.target.value)} />
            </label>}
                <label htmlFor="pokemon-name"> </label>
                <select className="choose-pokemon-input" onChange={e => setValue(e.target.value)}>
                    <option style={{ color: "grey" }}>Select</option>
                    {suggestion.map((pokemon, index) => (
                        <option value={pokemon.toLowerCase()} key={index}>{pokemon}</option>
                    ))}
                </select>
                <button type="submit" className="btn1" value="Submit" onClick={handleSubmit}>BATTLE!</button>

            </fieldset>
            <br /><br /> <br />
            <select className="choose-pokemon-input" onChange={handleDiffChange}>
                <option value="Normal"> Normal Mode</option>
                <option value="Hard" style={{ fontWeight: 800 }}> Hard Mode</option>
                    ))}
                </select>
            <br />

        </div>


    )
}

export default StartScreen
