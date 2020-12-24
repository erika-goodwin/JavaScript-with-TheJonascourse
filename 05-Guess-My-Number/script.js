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
*/

//L73
//mouse click, mouse moving , key press ,,,
//wait to react with a event listener

document.querySelector('.check').addEventListener('click', function () {
  //.addEventListener = method
  console.log(document.querySelector('.guess').value);
}); //click = the first event  //function = just value
