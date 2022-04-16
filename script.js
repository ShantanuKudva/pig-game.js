'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let currentScore0 = document.querySelector('#current--0');
let currentScore1 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const roll = document.querySelector('.btn--roll');
const refresh = document.querySelector('.btn--new');
const hold = document.querySelector('.btn--hold');
let player0Score = document.querySelector('#score--0');
let player1Score = document.querySelector('#score--1');
let random = Math.floor(Math.random() * 6) + 1;
let score0 = 0;
let score1 = 0;

//dice roll functionality
const diceclick = function () {
  random = Math.floor(Math.random() * 6) + 1;
  console.log(random);
  if (player0.classList.contains('player--active')) {
    if (random === 1) {
      dice.src = 'dice-1.png';
      score0 = 0;
      currentScore0.textContent = 0;
      player0.classList.remove('player--active');
      player1.classList.add('player--active');
      player0Score.textContent = 0;
    } else if (random === 2) {
      dice.src = 'dice-2.png';
      currentScore0.textContent = 2;
      score0 += random;
      player0Score.textContent = score0;
    } else if (random === 3) {
      dice.src = 'dice-3.png';
      currentScore0.textContent = 3;
      score0 += random;
      player0Score.textContent = score0;
    } else if (random === 4) {
      dice.src = 'dice-4.png';
      currentScore0.textContent = 4;
      score0 += random;
      player0Score.textContent = score0;
    } else if (random === 5) {
      dice.src = 'dice-5.png';
      currentScore0.textContent = 5;
      score0 += random;
      player0Score.textContent = score0;
    } else if (random === 6) {
      dice.src = 'dice-6.png';
      currentScore0.textContent = 6;
      score0 += random;
      player0Score.textContent = score0;
    }
  } else if (player1.classList.contains('player--active')) {
    if (random === 1) {
      dice.src = 'dice-1.png';
      currentScore1.textContent = 0;
      player1.classList.remove('player--active');
      player0.classList.add('player--active');
      player1Score.textContent = 0;
      score1 = 0;
    } else if (random === 2) {
      dice.src = 'dice-2.png';
      currentScore1.textContent = 2;
      score1 += random;
      player1Score.textContent = score1;
    } else if (random === 3) {
      dice.src = 'dice-3.png';
      currentScore1.textContent = 3;
      score1 += random;
      player1Score.textContent = score1;
    } else if (random === 4) {
      dice.src = 'dice-4.png';
      currentScore1.textContent = 4;
      score1 += random;
      player1Score.textContent = score1;
    } else if (random === 5) {
      dice.src = 'dice-5.png';
      currentScore1.textContent = 5;
      score1 += random;
      player1Score.textContent = score1;
    } else if (random === 6) {
      dice.src = 'dice-6.png';
      currentScore1.textContent = 6;
      score1 += random;
      player1Score.textContent = score1;
    }
  }
};

//hold functionlality
const holdclick = function () {
  if (player0.classList.contains('player--active')) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  } else if (player1.classList.contains('player--active')) {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }
};

const resetClick = function () {
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  player0Score.textContent =
    player1Score.textContent =
    currentScore0.textContent =
    currentScore1.textContent =
    score0 =
    score1 =
      0;
};

roll.addEventListener('click', diceclick);
hold.addEventListener('click', holdclick);
refresh.addEventListener('click', resetClick);
