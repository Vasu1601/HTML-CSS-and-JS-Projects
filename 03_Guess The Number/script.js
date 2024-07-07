let randomNumber = parseInt(Math.random()*100+1); 

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
   if(isNaN(guess)){
    alert('Please enter a valid Number');
   }else if(guess<1){
    alert('Please enter a Number more than 1');
   }else if(guess>100){
    alert('The Number should be less than 100');
   }
   else{
    prevGuess.push(guess);
    if(numGuesses === 11){
        displayGuess(guess);
        displayMessage(`Game Over. The Random number was ${randomNumber}`);
        endGame();
    }else{
        displayGuess(guess);
        checkGuess(guess);
    }
   }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage("You Guessed it right");
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage("The Number is too Low");
    }else if(guess>randomNumber){
        displayMessage("The Number is too High");
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuesses++;
    remaining.innerHTML = `${11-numGuesses}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.innerHTML = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = [];
        numGuesses = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuesses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHi.innerHTML = '';

        playGame = true;
    })
}

