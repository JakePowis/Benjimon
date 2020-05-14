# Pokemon-war 

***[Click here to Play Pokemon War!!!](https://pokemon-war.netlify.app/)***

### Introduction

Here we are again, with another creative and nostalgic game, that gonna put smile on your face when ever you play it
How many of you didn't watch pokemon or play pokemon game once, or even didnt hear about it.

We wanted to come with something fun while also practice the React library, and master the hooks, while also having fun working on the project.



### How to Play 
![](https://i.imgur.com/4JVvqyw.gif)

- Enter the app
- Enter your name
- Choose your favorite pokemon
- Select your difficulty level
- The game will put you against one of the 15 github monsters you have to beat.

![](https://i.imgur.com/1i96GOb.gif)

- you have 3 buttons which you need to play with.
     - **Attack** is the button you use to the attack the enemy, you can use it as much as you want.
     - **Super Attack** is one per game special attack that does higher damage than the normal Attack button, so be wise and use it carefuly.
     - **Run**... please don't tell me you gonna use this button.

![](https://i.imgur.com/1Lhpl7D.gif)

- You can also use the mute button to mute the game noises at any time.
- The aim is to defeat your opponanent and make his HP fall to 0!


### Components
    Components
    - App
        - Start Screen
        
        - Fight Screen
            - Enemy
            - Player
            - Menu
        
        - GameOver Screen
         
    States
        -playerState
        -gameState
        -loadState
        -winnerState
        -turnState
        -superMoveState
        -muteState
        -volumeState
        -usernameState
        
        
    API Calls
        -Pokemon API 
        -GitHub API


### Team workflow

#### Day-1

On the first day we decided to start the build together until we setup the whole file structure so then we can split the work between us the next day.

#### Day-2

We split the work load into the 3 main componenents
    - **Marwan:** *Welcome screen*, including select pokemon, save username to local storage, API calls etc
    - **Jake:** *Battle screen*, including battle animations, sounds & game logic
    - **James:** *GameOver screen*, including ending animations, game reset, plus overall CSS & sounds

### Useful Links
* [Github Repo](https://github.com/WebAhead5/Pokemon-War.git)


## Features

### Audio


Battle music auto plays when the gameState changes to fight!

        useEffect(() => {
        if (!mute) battleAudio.play()
        else {
            battleAudio.pause();
            battleAudio.currentTime = 0;
        }
        return () => {
            battleAudio.pause();
            battleAudio.currentTime = 0;
        }
    }, [mute]);

when the gameState changes to something else, the music stops, and when mute is pressed, the music also stops.


The other sound effects are linked to the button press:

    OnClick runs a function that contains:
    
    if (!mute) attackSound("player")

When its your turn youll hear the sound for your pokemon, and when its the enemys turn youll hear their attack sound!

        const attackSound = (person) => {
        let audio = ""
        let hit = new Audio(hitSound)
        hit.volume = volumeState;

        if (person === "player") {
            audio = new Audio(playerSound)
            audio.volume = volumeState;
            setTimeout(() => hit.play(), 1100)
        }
        else if (person === "super") {
            audio = new Audio(superSound)
            audio.volume = volumeState; 
            setTimeout(() => {
                hit.play()
                setTimeout(() => hit.play(), 400)
            }, 600) 
            
        else {
            audio = new Audio(enemySound)
            audio.volume = volumeState; //change to good sound
            setTimeout(() => hit.play(), 1100)
            }
        
        audio.play()
        }

The 'hit sound' is on a set timeout, so that it will always play 1100ms after the attack sound (or in the case of super, play twice)

### Battle Logic

Both the player attacks and enemy attacks rae based on generating random numbers, plus a fixed base amount:

    Player Normal:    Math.floor(10 + Math.random() * 20)  - between 11-30

    Enemy Normal:     Math.floor(15 + Math.random() * 20)  - between 16-35
    
    Player Super:     Math.floor(30 + Math.random() * 10)  - between 31-40

This makes it fun for the user as the battles should be very close, with an element of randomness dictating the final result.

In hard mode, +10 is added ontop the base damage of the enemy

    Enemy Hard:  Math.floor(15 + Math.random() * 20)
                 if (gameState.diff === "Hard") enemyDam = enemyDam + 10
                 
                 so between 26-45 each hit!


When someones HP falls below 0, the gameState is set to GameOver.

### Pokemon Theme

We settled on the idea of a pokemon battle concept and wanted the game to have a retro 90's feel.

![](https://i.imgur.com/X1OBZWt.png)

After some searching online, we found a team (credited below) who had created a pokemon battle app with Angular JS.

![](https://i.imgur.com/p02gY33.png)

Rather than re-invent the wheel we adapted what we could for our own app:

![](https://i.imgur.com/DrxLb0b.png)

The Angular app also had the pokemon theme and an authentic looking font which we were able to use. We later found the battle sound effects from sounds-resource.com.

### CSS

The confetti effect was found on cagremett.com, after some time searching google. 

![](https://i.imgur.com/uj8l3Uk.gif)

The pokemon animations were taken from css-tricks.com and other resources found by searching google (see credits).

### Credits

* [CSS](https://css-tricks.com/css-animation-libraries/)
* [Angular JS game that we took some of the sounds, font and css from](https://github.com/nathan-barrett/PokemonJS)
* [Trophy Icon](Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>)
* [Pokemon gameboy sounds](https://www.sounds-resource.com/game_boy_gbc/pokemonredblueyellow/sound/17241/)
* [CSS Confetti](http://www.cagrimmett.com/til/2018/01/05/css-confetti.html)