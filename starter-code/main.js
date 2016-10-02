console.log("JS file is connected to HTML! Woo!")


var cardOne = "queen";
var cardTwo = "king";
var cardThree = "king";
var cardFour = "queen";

/*
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

function createCards() {
	for (i = 0; i < 4; i++) {
	var newCards = document.createElement('div');
	newCards.className = 'card';
	gameBoard.appendChild(newCards);
}
}

window.onload = createCards()



