//Format of the game
//title of the game to call
//player & computer
//pokemons to choose
//compare pokemons to see who is the winner
//change text of the result

/*const dbz = ['goku', 'vegeta', 'gohan']
const random = Math.floor(Math.random() * 3);
//// Testing method
////Computer Choice
const pickPlayer = () => {
    if (random === 0) {
        return dbz[0];
    } else if (random === 1) {
        return dbz[1];
    } else if (random === 2) {
        return dbz[2];
    }
};
///// 
//Player Choice

function readyPlayer(player) {
    if (player === 'goku' && pickPlayer() === 'goku') {
        return console.log('You both win!');
    } else if (player === 'goku' && pickPlayer() === 'vegeta') {
        return console.log('You win!');
    } else if (player === 'goku' && pickPlayer() === 'gohan') {
        return console.log('You lose!');
    }
};
readyPlayer('goku');*/





//Text change after clicking a pokemon
//Trainers choice of pokemon
const pokemonBattle = () => {

    //Pokemon's call
    let charCry = document.getElementById('charcall');
    let squirtCry = document.getElementById('squirtcall');
    let bulbCry = document.getElementById('bulbcall');

    //Background Battle Song
    let startMusic = document.getElementById('start-music');
    startMusic.addEventListener('click', function () {
        document.getElementById('background').play()
    });

    //Pause Music when pressing the button
    let stopMusic = document.getElementById('music');
    stopMusic.addEventListener('click', function () {
        document.getElementById('background').pause();
    });


    //Pokemon Trainers
    let RED = document.querySelector('.red');
    let BLUE = document.querySelector('.blue');
    //Trainers animation
    const tl = new TimelineMax();
    tl.fromTo(RED, 1.2, { x: "-200%", opacity: 0 }, { x: "0%", opacity: 1, ease: Power2.easeInOut }, "-=0.2")
        .fromTo(BLUE, 1.2, { x: "200%", opacity: 0 }, { x: "0%", opacity: 1, ease: Power2.easeInOut }, "-=1.2");



    const pokemonTrainer = () => {

        //Pokemons
        const charmander = document.querySelector('.charmander');
        const squirtle = document.querySelector('.squirtle');
        const bulbasaur = document.querySelector('.bulbasaur');
        //Storing pokemons in a pokeball container
        const pokemons = [charmander, squirtle, bulbasaur];
        
        //Play audio when button is click
        charmander.onclick = function () {
            charCry.play();
        }
        
        squirtle.onclick = function () {
            squirtCry.play();
        }
        
        bulbasaur.onclick = function () {
            bulbCry.play();
        }

        pokemons.forEach(pokemon => {
            pokemon.addEventListener('click', function () {
                const computerPokeBalls = ['charmander', 'squirtle', 'bulbasaur'];
                const random = Math.floor(Math.random() * 3);
                //Computer's pokemon generator
                const computerPokemon = computerPokeBalls[random];
                console.log(this);
                console.log(computerPokemon);

                //Showing results after comparing pokemons to the html file
                comparePokemons(this.textContent, computerPokemon)
                
            });
        });
    };
    //Results after comparing both trainer's pokemon
    const comparePokemons = (trainerPokemon, computerPokemon) => {
        const winner = document.querySelector('.winner');

        if(winner.textContent === 'You won!'){
            window.open('/winner/hope.html');
            return;
        }

        if (trainerPokemon === computerPokemon) {
            winner.textContent = 'It is a draw!';
            return;
        }
        //Charmander
        if (trainerPokemon === 'charmander') {
            if (computerPokemon === 'bulbasaur') {
                winner.textContent = 'You won!';
                return;
            } else {
                winner.textContent = 'You lose!';
                return;
            }
        }
        //Squirtle
        if (trainerPokemon === 'squirtle') {
            if (computerPokemon === 'charmander') {
                winner.textContent = 'You won!';
                return;
            } else {
                winner.textContent = 'You lose!';
                return;
            }
        }
        //Bulbasaur
        if (trainerPokemon === 'bulbasaur') {
            if (computerPokemon === 'squirtle') {
                winner.textContent = 'You won!';
                return;
            } else {
                winner.textContent = 'You lose!';
                return;
            }
        }
    };
    pokemonTrainer();
    
}
pokemonBattle();

