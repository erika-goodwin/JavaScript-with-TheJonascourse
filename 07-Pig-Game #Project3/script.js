'use strict';

// SELECTING ELEMENTS  *El =DOM element
//SWITCHING THE ACTIVE PLAYER L84
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

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

let scores, currentScore, activePlayer, playing;

//MAde repeatable function for initiate the game (reset)
const init = function () {
  //SWITCHING THE ACTIVE PLAYER L84
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true; //L85

  //1.current number -> 0
  current0El.textContent = 0;
  current1El.textContent = 0;
  //2. Score reset
  score0El.textContent = 0;
  score1El.textContent = 0;
  //3. Hide the dice pic
  diceEl.classList.add('hidden');

  //4. player number -> 0
  player0El.classList.add('player-active');
  player1El.classList.remove('player-active');

  //5. background -> normal
  player0El.classList.remove('player-winner');
  player1El.classList.remove('player-winner');
};
//Run the function ↑↑↑↑↑↑↑
init();

//Made repeatable function from existed code L85
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  //changing the background color (remove/add class .player--active)
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// ROLLING THE DICE functionality L83
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. Check for rolled 1.
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      // current0El.textContent = currentScore; //Change later
      // console.log(currentScore);
    } else {
      //SWITCHING THE ACTIVE PLAYER L84
      switchPlayer();
    }
  }
});
// HOLDING CURRENT SCORE L85
btnHold.addEventListener('click', function () {
  if (playing) {
    console.log('hold button');
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if player's score is >=100
    //Finish the game
    if (scores[activePlayer] >= 20) {
      //Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Switch to the next player
      switchPlayer();
    }
  }
});

// RESETTING THE GAME L86
btnNew.addEventListener('click', init);
