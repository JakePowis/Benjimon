import React, {useEffect, useState} from 'react';


function UserButtons () {
    let pokemons = 


    return (
<div id="battle-container">
  <div class="user-info">
    <div class="health-bar pxl-border">
      <div class="character-stats">
        <h2 class="name">{{childEnemyPokemon?.name}}</h2>
        <h2>Lv10</h2>
      </div>
      <div class="bar">
        HP<progress value={{childEnemyPokemon?.currentHp}} max={{childEnemyPokemon?.hp}}>0%</progress>
          <h5>{{childEnemyPokemon?.currentHp}}/{{childEnemyPokemon?.hp}}</h5>
      </div>
    </div>
    <div class="pokemon-display">
      <img class="player-pokemon" src="{{childPlayerPokemon?.sprite}}">
      <div class="grey-oval"></div>
    </div>
  </div>
  <div class="opponent-info">
    <div class="pokemon-display">
      <img src="{{childEnemyPokemon?.sprite}}">
        <div class="grey-oval"></div>
    </div>
    <div class="health-bar pxl-border">
      <div class="character-stats">
        <h2>{{childPlayerPokemon?.name}}</h2>
        <h2>Lv10</h2>
      </div>
      <div class="HP"></div>
      <div class="bar">
        HP<progress value={{childPlayerPokemon?.currentHp}} max={{childPlayerPokemon?.hp}}>0%</progress>
        <h5>{{childPlayerPokemon?.currentHp}}/{{childPlayerPokemon?.hp}}</h5>
      </div>
    </div>
  </div>
</div>
  <div class="left-menu">
    <div class="yellow-menu">
      <div class="inner-menu">
        <p id="menu-prompt">What will {{childPlayerPokemon?.name}} do?</p>
      </div>
    </div>
  </div>
  <div class="fight-menu">
    <div class="right-menu">
      <h3 >FIGHT</h3>
      <h3 >BAG</h3>
      <h3 >POKEMON</h3>
      <h3 >RUN</h3>
    </div>
  </div>
</div>
<div  class="move-result-menu">
  <div class="yellow-border">
    <div class="inner-menu">
      <h2> POkemon usedd Move X</h2>
      <h2 >X's attack missed!</h2>
      <h2 >X used Y move</h2>
      <h2>X's attack missed!</h2>
      <h2 >Your Bag is Empty!</h2>
      <h2 >You haven't caught any other Pokemon!</h2>
      <h2 >Got away safely!</h2>
      <h2 >Your attemt to run has failed!</h2>
    </div>
  </div>
</div>
    )
}




export default UserButtons;