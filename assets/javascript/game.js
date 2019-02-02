// options for computer to guess
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var loss = 0;
var guessCount = 9;
var pastGuess = [];

var i = 0;
var txt = 'Guess what letter I am thinking of...';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



document.onkeydown = function(event) {

   if (guessCount > 0) {
    
        var userGuess = event.key;
        var computerGuess = letters[Math.floor(Math.random() * letters.length)];
        
        if ((userGuess === computerGuess)) {
            win++;
            pastGuess = [];
            guessCount = 9;
            alert('You won!');
        } else {
            pastGuess.push(userGuess);
            guessCount--;
        } 

    };

    if (guessCount === 0) {
        loss++;
        pastGuess = [];
        guessCount = 9;
    };


var winElement = document.getElementById('user-Win');
var lossElement = document.getElementById('user-Loss');
var guessCountElement = document.getElementById('guess-Count');
var pastGuessElement = document.getElementById('past-Guess');

winElement.innerHTML = win;
lossElement.innerHTML = loss;
guessCountElement.innerHTML = guessCount;
pastGuessElement.innerHTML = pastGuess;

};