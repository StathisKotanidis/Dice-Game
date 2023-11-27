('use strict');

const overallScoreOne = document.querySelector('#score--0');
const overallScoreTwo = document.querySelector('#score--1');
const currentScoreOne = document.querySelector('#current--0');
const currentScoreTwo = document.querySelector('#current--1');
const currentImage = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

overallScoreOne.textContent = '0';
overallScoreTwo.textContent = '0';
currentImage.style.display = 'none';

let currentScore = 0;
let activePlayer = 0;
let totalScoreOne = 0;
let totalScoreTwo = 0;

function rollDice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  currentImage.style.display = 'block';
  currentImage.src = `dice-${dice}.png`;
  return dice;
}

rollDiceBtn.addEventListener('click', () => {
  let rolledDice = rollDice();
  if (rolledDice === 1) {
    //switch player
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  } else {
    currentScore += rolledDice;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore; // dynamically!
  }
});

holdBtn.addEventListener('click', () => {
  if (activePlayer === 0) {
    totalScoreOne += currentScore;
    overallScoreOne.textContent = totalScoreOne;
  } else {
    totalScoreTwo += currentScore;
    overallScoreTwo.textContent = totalScoreTwo;
  }
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
});
