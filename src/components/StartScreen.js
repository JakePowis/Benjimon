import React, { useState } from 'react';
import playerSound from "../assets/sound/SFX_SHOOTING_STAR.wav"
import enemySound from "../assets/sound/SFX_INTRO_WHOOSH.wav"
import hitSound from "../assets/sound/SFX_CUT.wav"
import superSound from "../assets/sound/super.wav"


const StartScreen = ({ setPlayer, setGameState, username, setUsername }) => {
    const [value, setValue] = useState('')
    const [nameValue, setNameValue] = useState('')



    var suggestion = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"];


    const handleSubmit = e => {
        if (!value) return;
        setPlayer((player) => ({ ...player, name: value }))
        setUsername(nameValue || localStorage.getItem('name'))
        setGameState((gameState) => ({ ...gameState, gameState: "intro" }))
    }

    const handleDiffChange = e => {
        let diff = e.target.value
        setGameState((gameState) => ({ ...gameState, diff: diff }))

    }

    return (


        <div className="startScreen">
            <img src="https://fontmeme.com/permalink/200515/7e82309218b5e1bb46ddc4735668fa55.png" alt="pokemon title" />
            <img src="https://fontmeme.com/permalink/200513/cab741fc2d12adebbdd05a50303f9c57.png" alt="slogan" />

            <fieldset>
                <legend className="pokeLegend">Pick a Pokemon to start</legend>
                {username ? <div>Welcome {username} </div> : <label>Your name:
                <input className="name-input" value={nameValue} onChange={e => setNameValue(e.target.value)} />
                </label>}
                <label htmlFor="pokemon-name"> </label>
                <select className="choose-pokemon-input" onChange={e => setValue(e.target.value)}>
                    <option style={{ color: "grey" }}>Select</option>
                    {suggestion.map((pokemon, index) => (
                        <option value={pokemon.toLowerCase()} key={index}>{pokemon}</option>
                    ))}
                </select>
                <button type="submit" className="btn1" value="Submit" onClick={handleSubmit}>PLAY!</button>

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
