const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }

  return response.json()
}

// --------- unused for now -----------

// export function pokemonNameSuggestion() {
//   return fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964')
//     .then(checkResponse)
//     .catch(err => {
//       throw new Error(`fetch getPokemon failed${err}`)
//     })
// }

export function getPokemon(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch getPokemon failed${err}`)
    })
}

const token = process.env.REACT_APP_KEY;

export const getUserData = () => {
  return fetch(`https://api.github.com/orgs/webahead5/members?access_token=${token}`)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch getUserData failed ${err}`)
    });
};


export const gameOverCheck = ({ gameState, setGameState, player, enemy, setWinner }) => {

  console.log("CHECK ROUND HERE & ENEMY HP", enemy.hp, gameState.round)

  if (enemy.hp <= 0 && gameState.round === 6) {
    setGameState({ ...gameState, gameState: "win" })
    setWinner("PLAYER")
  }
  else if (enemy.hp <= 0) {
    setGameState({ ...gameState, gameState: "next" })
    console.log("GOING TO nEXT OAGE")
    setWinner("PLAYER")
  }
  else if (player.hp <= 0) {
    setGameState({ ...gameState, gameState: "gameover" })
    setWinner("ENEMY")
  }

}



// export default {getUserData ,getPokemon}