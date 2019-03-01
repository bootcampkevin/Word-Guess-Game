//Global Variables, then Objects, then Calls:

// Array of words. must ONLY contain a-z, A_Z,  and/or a space ' '. 
var wordList = ["laptop", "beanbag", "two words", "three small words", "Cats", "Slippers"];
var wins = 0;
var losses = 0;
var remaining = 16;
var lettersGuessed = [];
var mysteryWord = "";
var gameOn = false;
var dirty = true;
//var audioLose = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
var audioWin = new Audio('./assets/sounds/cannon.mp3');
var audioLose = new Audio('./assets/sounds/daviejones.mp3');
var gameWord = '';



// FUNCTIONS
// ========================================================================================

// fn that loops through the array of mystery words
// uses the word array as an argument to console.log the array for debugging.
function consoleInside(arr) {
  // We then loop through the selected array.
  for (var i = 0; i < arr.length; i++) {
    // Each time we print the value inside the array.
    console.log(arr[i]);
  }
  console.log("----Above is My Array of Words----");
}

// Randomly chooses a choice from the options array. This is the word for the round.
function randomWord(wordArray) {
  
  var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  return randomWord;
}

//creates the game screen, sets the gameOn to true, and populates elements in the DOM 
function createGameScreen(word) {
  gameOn = true;

  console.log(word);
  console.log(word.length);

  //Getting and setting variables on screen
  document.getElementById("wins").innerHTML = wins.toString();
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("remainingGuesses").innerHTML = remaining;
  mysteryWord = fnReturnWordBlanks();
  document.getElementById("mysteryWord").innerHTML = mysteryWord;
  document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
  document.getElementById("gameHeader").innerHTML = "Good Luck!";
}

//returns a blank words, filled with hyphens corresponding to the number of letters in the mystery word chosen for this game.  
function fnReturnWordBlanks() {
  var blanks = "";
  for (var i = 0; i < gameWord.length; i++) {
    blanks += "-";
  }
  return blanks;
}

//checks for a game WIN by comparing the game's mystery word with the updated 'hyphened' called gameWord
//fn then turns the flag to false for a continued game, raises the number of wins, and resets some variables 
function checkGameWin() {
  if (mysteryWord === gameWord) {
    gameOn = false;
    wins++;
    lettersGuessed = [];
    remaining = 16;
    return true;
  }  
  else {return false};
}

//fn to check the remaining number of guesses, and returns true if the game needs to end,
// after turning the game flag off, increases number of losses and resets some vars
function checkRemaining() {
   if (remaining == 0){
    //if reaming is at 0, need to reset some variables
    
    gameOn = false;
    losses++;
    lettersGuessed = [];
    remaining = 16;
    return true;
   }
  else {return false;}
}


//function to see if a userGuessed key is in the lettersGuessed already array.
function letterInArray(guess) {
  for (var i = 0; i < lettersGuessed.length; i++) {
    if (guess === lettersGuessed[i]) {
      //the guess is in the guessed letter array already
      return true;
    }
  }
  //the guess is NOT in the guessed letter array already
  return false;
}

function displayAndChangeMysteryWord(ch, place) {
  //no need for 'this' keyword, just checking that it would work
  this.mysteryWord =
    mysteryWord.substring(0, place) + ch + mysteryWord.substring(place + 1);
  
  document.getElementById("mysteryWord").innerHTML = mysteryWord;
  
}

//fn takes the gameword and a letter as arguments and checks to see if the letter is in the word
function letterChecker(word, letter) {
  for (var i = 0; i < word.length; i++) {
       
    if (letter == gameWord.charAt(i)) {
      //if letter is found, make letter Visible
      displayAndChangeMysteryWord(letter, i);
      
    } else {
      //Do nothing
    }
  }
}

// Cancel click event - stops the action of the game and resets the game.
function cancelAction(){  
  setTimeout(function(){ document.location.reload(); }, 700);
  dirty = true;
};
// Pause game event - pauses the action of the game until the ok/cancel button is pressed.
function pauseAction(){   
  dirty = true;
};

// FUNCTION CALLS (Execution)
// =======================================================================================

// Here we call the function to run our for-loop code on each of the following arrays
// and help print info to the console for the TA's and debugging.
consoleInside(wordList);

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  // Determines which key was pressed, and makes it uppercase to avoid case sensitivity
  var userGuess = event.key.toUpperCase();


  var key = event.key || event.keyCode;

  //played with key events and key codes to prevent certain keys from populating the array
  //of letters guessed; I used it later.  
  // if (key === 'Escape' || key === 'Esc' || key === 27 || key === 'Shift' || key === 'Control' || key === 'Alt' || key === 'Meta' || key === 'Tab' || key === 'Enter' || key === 'Return' || key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight' || key === 'Backspace') {
  //     alert('wrong key');
  // }


  //set up the game screen upon any key if the game should be running
  if (!gameOn) {
    //send the word list array to the random function and assigns it to a var.
    gameWord = randomWord(wordList).toUpperCase();

    createGameScreen(gameWord);
  } else {
    //dirty is a boolean to stop action of the screen if a modal is showing. 
    //I tried playing with  if (event.defaultPrevented) {return;}
    //which was passed my pay-grade, so I made a flag to turn the game on and off called dirty.
    if(dirty){

    //Only check guessed letters and to only take letters by regex. add a 'space' at the end to include spacebar valid inputs
    // if ((userGuess.search(/[^a-zA-Z ]+/) === -1)) {  //later implemented the Meta Keys
    if ((userGuess.search(/[^a-zA-Z ]+/) === -1) && !(key === 'Escape' || key === 'Esc' || key === 27 || key === 'Shift' || key === 'Control' || key === 'Alt' || key === 'Meta' || key === 'Tab' || key === 'Enter' || key === 'Return' || key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight' || key === 'Backspace')) {
      //This only gets reached if a letter has been pushed;
      
      //add to guessed letters only if not already guessed.
      if (letterInArray(userGuess)) {
        
          document.getElementById("alreadyLetter").innerHTML = userGuess;      
          $('#myModalGuessedAlready').modal({show: true, backdrop: 'static', keyboard: false});
          //dirty is triggered because I want to prevent the DOM from continuing the game while the modal is visible. 
          dirty = false;       
    }
      //else letter is not in the array of guesses yet, puts it in the array of guesses, decreases number of guesses remaining; updates DOM
      else {        
        lettersGuessed.push(userGuess);
        document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
        letterChecker(gameWord, userGuess);
        remaining--;
        document.getElementById("remainingGuesses").innerHTML = remaining;
      }
    
    }
    //else a non-letter was pressed and do nothing.
    
    else {
      //decided to not use a modal, and do nothing for invalid keys like numbers or the plus key, etc.
      // $('#myModalAlphaOnly').modal({show: true, backdrop: 'static', keyboard: false});
      //  DO NOTHING THEN!!!   
    }
  }

//putting the check win here to display all letters before inform of a win
if (checkGameWin()){
    audioWin.play(); 
    $('#myModalWin').modal({show: true, backdrop: 'static', keyboard: false});
    dirty = false;  
}

if (checkRemaining()){
  //No more guesses left if true.
  audioLose.play();
  $('#myModalLose').modal({show: true, backdrop: 'static', keyboard: false});
  dirty = false;  
}

}
};
