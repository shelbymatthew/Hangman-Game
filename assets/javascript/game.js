//Variables for the game

var wins = 0;
var losses = 0;
var guessesLeft = 8;
var playerGuess = [];
var randWord;
var underScores = [];
var wrongLetters = [];
var wordBank = ['pizza', 'hamburger', 'hotdog', 'pie'];

function startGame(){
    randWord = wordBank[Math.floor(Math.random()* wordBank.length)];
    for(var i = 0; i< randWord.length; i++){
        console.log(i);
       underScores.push(' _ ');
       console.log(underScores);
       console.log(randWord);
    }
    document.getElementById('word-to-guess').textContent = underScores.join(' ');

    document.getElementById('guesses-left').textContent = guessesLeft;

    
    
    

}

//game
document.onkeyup = function(event) {
    var playerGuess = String.fromCharCode(event.keyCode).
        toLowerCase()

        console.log(playerGuess);
        if (randWord.indexOf(playerGuess) > -1){
        console.log("true")} else {wrongLetters.push(playerGuess);
        console.log(wrongLetters)}
}

startGame();

