'use strict';
// Variables

// Constantes
const playerChoice = document.querySelector('.js-number');
const playerBet = document.querySelector('.js-bet');
const playerBalance = document.querySelector('.js-balance');
const botMessage = document.querySelector('.js-message');
const btnPlay = document.querySelector('.js-button');
// Constante número aleatorio
const randomNumber = getRandomNumber(6);
console.log(randomNumber);

// Función random
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// Función para adivinar el número
function checkResults() {
  const valueChoice = parseInt(playerChoice.value);

  if (randomNumber === valueChoice) {
    botMessage.innerHTML = 'Has ganado el doble de lo apostado';
    balance = valueBet * 2 + balance;
  } else {
    botMessage.innerHTML = 'Has perdido lo apostado';
    balance = balance - valueBet;
  }
}

// Función manejadora
function handleClickBtn(event) {
  event.preventDefault();
  checkResults();
}

// Evento del botón
btnPlay.addEventListener('click', handleClickBtn);
