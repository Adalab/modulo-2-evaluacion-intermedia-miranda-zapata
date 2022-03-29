'use strict';
// Variables
let balance = 50;

// Constantes
const playerChoice = document.querySelector('.js-number');
const playerBet = document.querySelector('.js-bet');
const playerBalance = document.querySelector('.js-balance');
const botMessage = document.querySelector('.js-message');
const btnPlay = document.querySelector('.js-button');
// Constante número aleatorio (fuera de la función para que sólo se genere una vez y la usuaria pueda apostar siempre al mismo, hasta adivinarlo)
const randomNumber = getRandomNumber(6);
console.log(randomNumber);

// Función random
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// Función para adivinar el número
function checkResults() {
  // Aquí iría la constante randomNumber si quisiera generar un número aleatorio diferente cada jugada
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

// Función para terminar el juego (limitando el saldo)
function stopGame() {
  if (balance <= 0) {
    botMessage.innerHTML = 'Ya has apostado suficiente por hoy...';
    playerBalance.innerHTML = 'Has llegado a tu saldo mínimo: 0';
  } else if (balance >= 200) {
    botMessage.innerHTML = 'Mejor lo dejamos aquí';
    playerBalance.innerHTML = 'Has llegado a tu saldo tope: 200';
  }
}

// Función para resetear el número aleatorio cuando la usuaria lo adivine (porque la constante está fuera de la función)

// Función para resetear el juego
/* function resetGame() {
  if (balance <= 0 || balance >= 200) {
    btnPlay.innerHTML = 'Reiniciar';
  }
} */

// Función manejadora
function handleClickBtn(event) {
  event.preventDefault();
  checkResults();
  checkBalance();
  stopGame();
}

// Evento del botón
btnPlay.addEventListener('click', handleClickBtn);
