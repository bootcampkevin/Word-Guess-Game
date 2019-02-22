// Array of words.
var wordList = ["Laptop", "Beanbag", "Cats", "Slippers"];
var wins = 0;
var losses = 0;
var remaining = 16;
var lettersGuessed = [];
var mysteryWord = '';


// FUNCTIONS
// ========================================================================================

// Here we create a "Function" that allows us to "call" (run) the loop for any array we wish.
// We pass in an array as an "argument".
function consoleInside(arr) {
  // We then loop through the selected array.
  for (var i = 0; i < arr.length; i++) {
    // Each time we print the value inside the array.
    console.log(arr[i]);
  }
  console.log("----Above Array of Words----");
}

function randomWord(wordArray) {
    // Randomly chooses a choice from the options array. This is the word for the round.
    var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    return randomWord;
  }

  function createGameScreen(word) {
    
  
    console.log(word);
    console.log(word.length);

    //Getting and setting variables on screen
    document.getElementById("wins").innerHTML = wins.toString();
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("remainingGuesses").innerHTML = remaining;
    mysteryWord=fnReturnBlankWord(gameWord);
    document.getElementById("mysteryWord").innerHTML = (mysteryWord);
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
    document.getElementById("gameHeader").innerHTML = "Good Luck!";
    
  }
  
  function fnReturnBlankWord(gw){
    var blanks = '';
    for (var i=0;i<gameWord.length;i++){
        blanks+='-';
    }
    return blanks;
  };

  function displayAndChangeMysteryWord(ch,place){

    
    console.log('mysteryword as mw: ' + mysteryWord);
    console.log('before:' + mysteryWord.substring(0, place));
    console.log('after: ' + mysteryWord.substring(place+1));
    this.mysteryWord = mysteryWord.substring(0, place) + ch + mysteryWord.substring(place+1);   
    console.log('mysteryword changed?: ' + mysteryWord);
    document.getElementById("mysteryWord").innerHTML = mysteryWord;
  }

  function letterChecker(word, letter) {
    for (var i = 0; i < word.length; i++) {
      // Each time we print a placeholder for the letters.
  //TODO toLowerCase() cases.
      if (letter == gameWord.charAt(i)) {
        //if letter is found, make letter Visible
        displayAndChangeMysteryWord(letter,i);
        console.log("found letter " + i);
      } else {
        console.log("not found " + i);
      }
    }
  }
// FUNCTION CALLS (Execution)
// =======================================================================================

// Here we call the function to run our for-loop code on each of the following arrays.
consoleInside(wordList);

//send the word list array to the random function and assigns it to a var.
var gameWord = randomWord(wordList);






// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  // Determines which key was pressed.
  var userGuess = event.key;

  //set up the game screen upon any key, TODO check valid input only
  createGameScreen(gameWord);
  
  //TODO creat function to check guessed letters and to only take letters. 
  lettersGuessed.push(userGuess);
  document.getElementById("lettersGuessed").innerHTML = lettersGuessed;

  var b = letterChecker(gameWord, userGuess);
  // Randomly chooses a choice from the options array. This is the word for the round.
  //   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // Alerts the key the user pressed (userGuess).
 
  alert("Letter " + userGuess + " has already been guessed!");
  console.log(b);
};


//for hints TODO
// document.getElementById("btnHint").style.display = "block";