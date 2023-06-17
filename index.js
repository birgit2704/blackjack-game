let player = {
  name: "Player's name",
  chips: 100,
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let loggedIn = false;
let rulesVisible = false;

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function login() {
  if (loggedIn)
    messageEl.textContent =
      "You are already logged in, you can start the game.";
  else {
    player.name = prompt("What is your name?");
    playerEl.textContent = player.name + ": $" + player.chips;
    loggedIn = true;
  }
}

function startGame() {
  if (!loggedIn) messageEl.textContent = "PLEASE LOG IN FIRST";
  else {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

function toggleRules() {
  if (!rulesVisible) {
    document.getElementById("rules").style.display = "block";
    document.getElementById("rules-btn").innerHTML = "Hide rules";
    rulesVisible = true;
  } else {
    document.getElementById("rules").style.display = "none";
    document.getElementById("rules-btn").innerHTML = "Show rules";
    rulesVisible = false;
  }
}
