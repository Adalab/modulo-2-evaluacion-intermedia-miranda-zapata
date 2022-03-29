'use strict';
// Variables

// Constantes
const playerChoice = document.querySelector('.js-number');
const playerBet = document.querySelector('.js-bet');
const playerBalance = document.querySelector('.js-balance');
const botMessage = document.querySelector('.js-message');
const btnPlay = document.querySelector('.js-button');

// Función random
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//

// Función manejadora
function handleClickBtn(event) {
  event.preventDefault();
}

// Evento del botón
btnPlay.addEventListener('click', handleClickBtn);
