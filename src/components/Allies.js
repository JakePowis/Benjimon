import React, {useEffect, useState} from 'react';
import {getPokemon} from '../utils/utils'

function Pokemon({hp}) {
    const [data, setData] = useState(()=> {
      return ""
    })

    const name = 'pikachu'

    useEffect(()=> {
      getPokemon(name).then((data)=> setData(data))
    }, [])
    
    if (!data) return <div>Loading...</div>;
      return (
        <div>
          <h2>{data.name}</h2>
          <img
            src={data.sprites.front_default}
            alt={`${data.name} default sprite`}
          />
          <h2>{hp}</h2>
        </div>
      );
  }

  export default Pokemon;
