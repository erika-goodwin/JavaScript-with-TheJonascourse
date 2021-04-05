'use strict';

// SELECTING ELEMENTS  *El =DOM element
//Score reset L82
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
//Current score L83
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
//Hide the dice pic L82
const diceEl = document.querySelector('.dice');

// ROLLING THE DICE L83
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;

//STARING CONDITION L82
//Score reset
score0El.textContent = 0;
score1El.textContent = 0;
//Hide the dice pic
diceEl.classList.add('hidden');

// ROLLING THE DICE functionality L83
btnRoll.addEventListener('click', function () {
  //1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3. Check for rolled 1.
  if (dice !== 1) {
    //Add dice to currect score
    currentScore += dice;
    current0El.textContent = currentScore;
    console.log(currentScore);
  } else {
    //switch to next player.
  }
});
