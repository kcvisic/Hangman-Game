var phrases = ["Early bird gets the worm",
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

for (var i = 0; i < phrases.length; i++) {
    console.log(phrases[i].toLowerCase());
}

function getRandomArbitrary(min, max) {
    var randomNum = Math.random() * (max - min) + min;
    return Math.floor(randomNum)
}

function returnRandElement(array) {
    var randomNum = getRandomArbitrary(0, array.length);
    var returnRandE = array[randomNum];
    return returnRandE

}

returnRandElement(phrases)

function createDisplayString(hiddenWord, usersKeyArray) {

    var toDisplay = "";

    for (var i = 0; i < hiddenWord.length; i++) {

        var hiddenCharacter = hiddenWord[i];

        var existsInUserKeyArray = usersKeyArray.indexOf(hiddenCharacter);
       
        if (hiddenCharacter === " ") {
            toDisplay += " ";
            
        } else if (existsInUserKeyArray === -1) {
            toDisplay += "_ "
        } else {

            toDisplay += hiddenCharacter + " ";
        }

        

    }
    return toDisplay
}
createDisplayString(returnRandElement(phrases), [])