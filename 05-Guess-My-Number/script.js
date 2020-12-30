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
*/

// L73
// Implement 1: for when the number is correct
// Implement 2: for when the number is low
// Implement 3: for when the number is high

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContect = number;

document.querySelector('.check').addEventListener('click', function () {
  //.addEventListener = method
  var guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'NO Number!';
  }
}); //click = the first event  //function = just value
