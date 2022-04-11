'use strict';
// Variables
let balance = 50;

// Constantes
const playerChoice = document.querySelector('.js-number');
const playerBet = document.querySelector('.js-bet');
const playerBalance = document.querySelector('.js-balance');
const botMessage = document.querySelector('.js-message');
const botNumber = document.querySelector('.js-randomNumber');
const btnPlay = document.querySelector('.js-button');

// Función random
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// Función para asegurar que se rellenan los campos
function validateInput() {
  if (playerChoice.value === '' || playerBet.value === '') {
    printMessage('Por favor, tira el dado y apuesta un dinerillo...');
  } else {
    checkResults();
  }
}

// Función para adivinar el número
function checkResults() {
  const randomNumber = getRandomNumber(6);

  const valueChoice = parseInt(playerChoice.value);
  const valueBet = parseInt(playerBet.value);

  if (randomNumber === valueChoice) {
    printMessage('¡Has ganado el doble de lo apostado!');
    balance = valueBet * 2 + balance;
  } else {
    printMessage('Has perdido lo apostado');
    balance = balance - valueBet;
  }
  printBotDie(`(El bot ha lanzado el dado y ha salido: ${randomNumber})`);
}

// Función para indicar el saldo
function checkBalance() {
  printBalance(`Tu saldo es... ${balance}`);
  return balance;
}

// Función para terminar el juego (limitando el saldo)
function stopGame() {
  if (balance <= 0) {
    printMessage('Ya has apostado suficiente por hoy...');
    printBalance('Has llegado a tu saldo mínimo: 0');
  } else if (balance >= 200) {
    printMessage('Mejor lo dejamos aquí');
    printBalance('Has llegado a tu saldo tope: 200');
  }
}

// Funciones feedback painter
function printMessage(message) {
  botMessage.innerHTML = message;
}

function printBalance(money) {
  playerBalance.innerHTML = money;
}

function printBotDie(die) {
  botNumber.innerHTML = die;
}

// Función para resetear el juego
/* function resetGame() {
  if (balance <= 0 || balance >= 200) {
    btnPlay.innerHTML = 'Reiniciar';
  }
} */

// Función manejadora
function handleClickBtn(event) {
  event.preventDefault();
  validateInput();
  checkBalance();
  stopGame();
}

// Evento del botón
btnPlay.addEventListener('click', handleClickBtn);
