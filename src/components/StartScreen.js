import React, { useState } from 'react';
// import AutoComplete from './Suggestion'


const StartScreen = ({ setPlayer, setGameState, gameState, player }) => {
    const [value, setValue] = useState('')


    const [suggestion, setSuggestion] = useState(() => {
        return [
            "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", 'Jigglypuff', 'Pidgey', 'Magikarp', 'Meowth', 'Charmander', 'Greninja', 'Lucario', 'Mimikyu-disguised', 'Charizard-mega-x', 'Umbreon', "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", 'Sylveon', "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", 'Gardevoir-mega', 'Gengar', "Electabuzz", "Magmar", "Gyarados", "Nidorino", "Clefairy", 'toxicroak', 'Lugia', 'Rowlet', 'Aegislash-blade', 'Chandelure', 'Pikachu', 'Eevee', 'Luxray', "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", 'Decidueye', 'Zoroark', 'Lycanroc-midday', 'corsola', 'Flygon', 'Hydreigon', 'Sceptile', 'Blaziken-mega', 'snorlax', "Dragonair", "Dragonite", "Mewtwo", "Mew"]
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

        <div className="startScreen">
            <img src="https://fontmeme.com/permalink/200513/76b4d46ea3cad47dba7fd58af03f8544.png" alt="pokemon title" />
            <img src="https://fontmeme.com/permalink/200513/cab741fc2d12adebbdd05a50303f9c57.png" alt="slogan" />

            <fieldset>
                <legend className="pokeLegend">Pick a Pokemon to start</legend>

                <label htmlFor="pokemon-name"> </label>
                <select className="choose-pokemon-input" onChange={e => setValue(e.target.value)}>
                    <option style={{ color: "grey" }}>Select</option>
                    {suggestion.map((pokemon, index) => (
                        <option value={pokemon.toLowerCase()} key={index}>{pokemon}</option>
                    ))}
                </select>
                <button type="submit" className="btn1" value="Submit" onClick={handleSubmit}>BATTLE!</button>

            </fieldset>
            <br /><br /><br />


        </div >

    )
}

export default StartScreen