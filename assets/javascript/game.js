var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var letterUser = [];
var eachofLetters = null;


var computerGuess = letters[Math.floor(Math.random() *   letters.length)];
function countGuessesLeft() {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
    console.log(computerGuess)
}
function farUserGuesses() {
    document.querySelector("#user-guesses").innerHTML = letterUser.join(" ");
}
countGuessesLeft();
var restart = function () {
    guessesLeft = 10;
    letterUser = [];
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
}
document.onkeyup = function (event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    letterUser.push(userGuess);
    countGuessesLeft();
    farUserGuesses();
    if (userGuess === computerGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        restart();
    } else if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        restart();
    }
}; 