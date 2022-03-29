'use strict';
// Variables
let balance = 50;

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
  const valueBet = parseInt(playerBet.value);

  if (randomNumber === valueChoice) {
    botMessage.innerHTML = 'Has ganado el doble de lo apostado';
    balance = valueBet * 2 + balance;
  } else {
    botMessage.innerHTML = 'Has perdido lo apostado';
    balance = balance - valueBet;
  }
}

// Función para indicar el saldo
function checkBalance() {
  playerBalance.innerHTML = `¡Tu saldo es... ${balance}!`;
  return balance;
}

// Función para terminar el juego
function stopGame() {
  if (balance > 200 || balance === 0) {
    botMessage.innerHTML = 'El juego ha terminado';
  }
}

// Función manejadora
function handleClickBtn(event) {
  event.preventDefault();
  checkResults();
  checkBalance();
  stopGame();
}

// Evento del botón
btnPlay.addEventListener('click', handleClickBtn);
