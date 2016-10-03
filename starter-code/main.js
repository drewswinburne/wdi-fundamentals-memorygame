console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

/*
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "king";
var cardFour = "queen";


if (cardOne === cardThree) {
	alert ("You've found a match!");}
	else {
	alert ("Sorry, try again");}

if (cardOne === cardFour) {
	alert ("You've found a match!");}
	else {
	alert ("Sorry, try again");}

if (cardOne === cardFour) {
	alert ("You've found a match!");}
	else {
	alert ("Sorry, try again");}

if (cardTwo === cardThree) {
	alert ("You've found a match!");}
	else {
	alert ("Sorry, try again");}*/

var gameBoard = document.getElementById('game-board')



function createBoard() {
	for (var i = 0; i< cards.length; i++) {
var cardElement = document.createElement('div');
	cardElement.className = 'card';
	
cardElement.setAttribute('data-card', cards[i]);
cardElement.addEventListener('click', isTwoCards);
gameBoard.appendChild(cardElement);
}



function isTwoCards () {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png'>";
	} else {
		this.innerHTML = "<img src='queen.png'>";
	}
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  }

}
}
 function isMatch(cards) {

	if (cards[0] === cards[1]) {
	alert ("You've found a match!");
document.getElementByClassName('card').innerHTML = [];}
	else {
	alert ("Sorry, try again");
this.innerHTML = [];}
}


window.onload = createBoard()



