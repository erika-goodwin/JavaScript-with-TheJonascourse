'use strict';
/*
//L70
//GETTING THE CONTENT OF THE ELEMENT
console.log(document.querySelector('.message')); //All line from HTML
console.log(document.querySelector('.message').textContent); //Only text content from HTML

//L72
//SETTING THE CONTENNT OF THE ELEMENT
document.querySelector('.message').textContent = 'Correct Number!';

//SCORE
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//SELECTOR
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); //.value: propaty


//L73
//mouse lick, mouse moving , key press ,,,
//wait to react with a event listener

// const x = function (){
//   console.log(23)
// }
// ↑⇩　its kinda same thing

// document.querySelector('.check').addEventListener('click', function () {
//   //.addEventListener = method
//   console.log(document.querySelector('.guess').value);
// }); //click = the first event  //function = just value

document.querySelector('.check').addEventListener('click', function () {
  //.addEventListener = method
  var guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'NO Number!';
  }
}); //click = the first event  //function = just value

// L73 & 74
//[scenario]
// Implement 1: for when the number is empty
// Implement 2: for when the number is correct
// Implement 3: for when the number is low
// -> the score has to be > 0
// Implement 4: for when the number is high
// -> the score has to be > 0

const secretNumber = Math.trunc(Math.random() * 20) + 1;
//define score (not rely on HTML)
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  //.addEventListener = method
  var guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //CONDITION
  if (!guess) {
    //Implement 1: for when the number is empty
    document.querySelector('.message').textContent = '⛔️ NO Number!';
  } else if (guess === secretNumber) {
    //Implement 2: for when the number is correct
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    // Implement 3: for when the number is low
    if (score > 1) {
      // <- the score has to be > 0
      document.querySelector('.message').textContent = '📈 Too high!';

      //SCORE
      score--; //score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 GAME OVER!';
      //score > 1 then score stops at 1 when it should be 0
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    // Implement 4: for when the number is high
    if (score > 1) {
      // <- the score has to be > 0
      document.querySelector('.message').textContent = '📉 Too low!';

      //SCORE
      score--; //score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 GAME OVER!';
      document.querySelector('.score').textContent = 0;
    }
  }
}); //click = the first event  //function = just value
*/

//L75-77

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//define score (not rely on HTML)
let score = 20;
//define high score
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  //.addEventListener = method
  var guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //CONDITION

  //Implement 1: when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ NO Number!';

    //Implement 2: When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    //background color
    document.querySelector('body').style.backgroundColor = '#60b347'; //background-color = backgroundColor

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    //highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Implement 3: When guess is too high
  } else if (guess > secretNumber) {
    // <- the score has to be > 0
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';

      //SCORE
      score--; //score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 GAME OVER!';
      //score > 1 then score stops at 1 when it should be 0
      document.querySelector('.score').textContent = 0;
    }

    // Implement 4: for when the number is low
  } else if (guess < secretNumber) {
    // <- the score has to be > 0
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';

      //SCORE
      score--; //score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 GAME OVER!';
      document.querySelector('.score').textContent = 0;
    }
  }
}); //click = the first event  //function = just value

//RESET THE GAME
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; //reassign the seacret number

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
