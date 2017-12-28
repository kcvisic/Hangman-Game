
var app = {}

app.phrases = ["Early bird gets the worm",
    "Read between lines", "I can eat a horse",
    "Cat got your tongue", "One in million",
    "Easer said then done", "Add insult to injury",
    "Do not cry over spilled milk",
    "Curiosity killed the cat",
    "Two peas in the pod",
    "Piece of cake", "Speak of the devil",
    "Go the whole nine yards", "An eye for an eye",
    "Stab someone in the back", "Quit cold turkey",
    "Cut to the chase", "Best of both worlds",
    "Kill two birds with one stone", "Break a leg",
    "Hit the nail on the head", "Kick the bucket",
    "Nip in the bud", "dodged a bullet",
    "Wild goose chase", "Winter is comming",
    "Barking up the wrong tree", "Break the ice",
    "Burst your bubble",
    "Cry wolf", "Cut the mustard",
    "Back to square one",
    "All Greek to me",
    "A chip on your sholder"
];

app.secretPhrase = "";
app.usersKeyArray = [];
app.userMisses = 0;
app.wins = 0;
app.gameStarted = false;
app.allowedMisses = 10;

function getRandomArbitrary(min, max) {
    var randomNum = Math.random() * (max - min) + min;
    return Math.floor(randomNum)
}

function returnRandElement(array) {
    var randomNum = getRandomArbitrary(0, array.length);
    var returnRandE = array[randomNum];
    return returnRandE
}

function createDisplayString(hiddenWord, usersKeyArray) {

    var toDisplay = "";

    for (var i = 0; i < hiddenWord.length; i++) {

        var hiddenCharacter = hiddenWord[i];

        var existsInUserKeyArray = usersKeyArray.indexOf(hiddenCharacter.toLowerCase());

        if (hiddenCharacter === " ") {
            toDisplay += " ";

        } else if (existsInUserKeyArray === -1) {
            toDisplay += "_ "
        } else {

            toDisplay += hiddenCharacter;
        }
    }
    return toDisplay
}

function updateGameUI() {

    var guessesLeft = getRemainingGueses();
    var displayString = createDisplayString(app.secretPhrase, app.usersKeyArray);

    $("#displayString").text(displayString);
    $("#wins").text(app.wins);
    $("#lettersGuessed").text(app.usersKeyArray);
    $("#guessesLeft").text(guessesLeft);

    if (app.gameStarted === true) {
        $("#welcomeMsg").css("display", "none");
    }
}

function getRemainingGueses(){
    return app.allowedMisses - app.userMisses;
}

function isCharacterInString(char, string){
    if(string.indexOf(char) !== -1)
        return true
    else
        return false
}

function resetGame(){
    app.usersKeyArray = [];
    app.userMisses = 0;
    app.secretPhrase = returnRandElement(app.phrases);
}

function handleKeyPress(event) {
    var key = event.key;
    if (! (event.keyCode >= 65 && event.keyCode <= 90) ){
      ; //pass
    }
    else if(app.gameStarted === true){
        // The game is going on
        app.usersKeyArray.push(key);

        // if character is not in string, increase the number of misses
        if( isCharacterInString(key, app.secretPhrase) === false){
            app.userMisses++;
        }

        // game is over
        if(getRemainingGueses() === 0){
            alert("You lose!");
            app.secretPhrase = returnRandElement(app.phrases);
            resetGame();
        }

        // check if the user won
        var displayString = createDisplayString(app.secretPhrase, app.usersKeyArray)
        if( displayString === app.secretPhrase){
            alert("You win!");
            app.wins++;
            resetGame();
        }

    }
    else{
        // The game has not started
        app.gameStarted = true;
        app.secretPhrase = returnRandElement(app.phrases);
    }

    updateGameUI();
}

$(function() {
    $(document).keyup(handleKeyPress);
    updateGameUI();
})
