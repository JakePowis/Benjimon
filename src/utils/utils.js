const checkResponse = response => {
  if(response.status !== 200) {
      console.log(`Error with the request! ${response.status}`);
      return;
  }
  return response.json()
}

export function getPokemon(name) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(checkResponse)
      .catch(err => {
        throw new Error(`fetch getPokemon failed${err}`)
      })
  }

const token = process.env.ACCESS_TOKEN;

export const getUserData = () => {
    return fetch(`https://api.github.com/orgs/webahead5/members?access_token=157e4efd2e6ceed30176431b660c8e75b4868407`)
    .then(checkResponse)
    .catch(err => {
        throw new Error(`fetch getUserData failed ${err}`)
    });
};

// export default {getUserData ,getPokemon}