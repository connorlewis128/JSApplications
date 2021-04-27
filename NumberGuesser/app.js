// Game Values 
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3; 

// ui elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// assign UI
minNum.textContent = min;
maxNum.textContent = max;

// Play Again Listner
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click',function(){
  let guess = parseInt(guessInput.value);


// validate input
if(isNaN(guess) || guess < min || guess > max){
  setMessage(`Please enter a number between ${min} and ${max}`,'red');
}


// check if won
if(guess === winningNum){
  gameOver(true, `${winningNum} is correct, You Win!`)
 
}
//  If they guess wrong
else{
  guessesLeft -= 1;
  
  if(guessesLeft === 0){
  gameOver(false, `Game over , you lost. the correct number  was ${winningNum}`);
  
  } else{
  //  game continues- answer wrong
  // change border color 
  guessInput.style.borderColor ='red';

  // Clear input
  guessInput.value = '';

  //  tell user its the wrong number
  setMessage(`Guess is not correct you have ${guessesLeft} guesses left`, 'red');
  
  }

}


}); 

//  Game over 
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';


  // disable input
  guessInput.disabled = true;
  // change border color 
  guessInput.style.borderColor = color;
  //  set text color
  message.style.color = color;
  // set message
  setMessage(msg);


  // Play again
  guessBtn.value = 'Play Again';
  guessBtn.className +=  'play-again';

}
// Get Random Num
function getRandomNum(min, max){
  return(Math.floor(Math.random()* (max - min + 1) + min));
}
// Set Message
function setMessage(msg,color){
  message.textContent = msg;
  message.style.color = color
}

