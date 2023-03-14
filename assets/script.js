var timerEl = document.getElementById('countdown');
var startButton = document.querySelector(".start-button");
var wordBlank = document.querySelector(".word-blanks");
var possibleWords = ["Modulus", "Function", "Array", "Boolean", "String", "JavaScript", "Document", "Index", "Variable", "Stylesheet", "Object"];
var chosenWord = [];
var chosenLetters = [];
document.querySelector(".word-blanks");

function init() {
    getLosses();
    getWins();
}

function startGame() {
 isWin = false;
}

function winGame() {
    wordBlank.textContent = "You Win!";
    winCounter++
    startButton.disabled = false;
}

function loseGame() {

}

function setTime() {
    function countdown() {
        var timeLeft = 10;
      
        var timeInterval = setInterval(function () {
          if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
          } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
          } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            winGame();
          }
        }, 1000);
      }
}

function renderBlanks() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    chosenLetters = chosenWord.length;
    wordBlank = chosenLetters.length;
    blankLetters = []
}

function setWins() {

}

function setLosses() {

}

function getWins() {

}

function getLosses() {

}

function resetGame() {

}