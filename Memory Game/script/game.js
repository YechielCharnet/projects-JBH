"use strict";
const cardsArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "10",
  "20",
  "30",
  "40",
  "50",
  "60",
  "70",
  "80",
  "90",
  "100",
];
// settings:
const grid = document.getElementById("grid");
let pairsOfCards = 8;
let cards = [];
for (let i = 0; i < pairsOfCards; i++) {
  cards.push(cardsArray[i]);
  cards.push(cardsArray[i]);
}
let card1 = null;
let card2 = null;
let availableOpenCards = 0;
let numOfGuesses;

function initGame() {
  numOfGuesses = 0;
  cards = shuffle(cards);
  for (let i = 0; i < pairsOfCards * 2; i++) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.textContent = cards[i];
    div.addEventListener("click", flippedCard);
    grid.append(div);
  }
}

function flippedCard() {
  if (this.classList.contains("flipped") || availableOpenCards > 1) return;
  //   if (availableOpenCards === 2) resetCards();
  this.classList.add("flipped");
  availableOpenCards++;
  if (!card1) card1 = this;
  else {
    card2 = this;
    numOfGuesses++;
    if (card1.textContent === card2.textContent) {
      card1 = null;
      card2 = null;
      availableOpenCards = 0;
      if (document.querySelectorAll(".flipped").length >= pairsOfCards * 2) {
        setTimeout(() => {
          alert(`Congratulations! you're done with ${numOfGuesses} guesses`);
        }, 500);
      }
    } else {
      setTimeout(() => {
        resetCards();
      }, 1000);
    }
  }
}

function resetCards() {
  card1.classList.remove("flipped");
  card2.classList.remove("flipped");
  card1 = null;
  card2 = null;
  availableOpenCards = 0;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

initGame();
