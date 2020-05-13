const checkResponse = response => {
  if(response.status !== 200) {
      console.log(`Error with the request! ${response.status}`);
      return;
  }
  console.log(response.json);
  
  return response.json()
}

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

// export default {getUserData ,getPokemon}