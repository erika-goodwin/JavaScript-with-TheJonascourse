'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelector('.show-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

//SHOW MODAL
const openModal = function () {
  console.log('Buttun clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

//CLOSE MODAL
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//CLOSE MODAL with X bottun
btnCloseModal.addEventListener('click', closeModal);
//CLOSE MODAL with clicking
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function);
