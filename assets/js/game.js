//Global Variables, then Objects, then Calls:

// Array of words. must ONLY contain a-z, A_Z,  and/or a space ' '. 
var wordList = ["laptop", "beanbag", "two words", "th ree words", "Cats", "Slippers"];
var wins = 0;
var losses = 0;
var remaining = 16;
var lettersGuessed = [];
var mysteryWord = "";
var gameOn = false;
var dirty = true;
//var audioLose = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
var audioWin = new Audio('../assets/sounds/cannon.mp3');
var audioLose = new Audio('../assets/sounds/daviejones.mp3');
var gameWord = '';



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

function fnReturnWordBlanks() {
  var blanks = "";
  for (var i = 0; i < gameWord.length; i++) {
    blanks += "-";
  }
  return blanks;
}


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
function checkRemaining() {
  // console.log('CHECK fn');
   if (remaining == 0){
    //if reaming is at 0, need to reset some variables
    // console.log('CHECK fn == 0');
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
  // console.log("mysteryword as mw: " + mysteryWord);
  // console.log("before:" + mysteryWord.substring(0, place));
  // console.log("after: " + mysteryWord.substring(place + 1));
  this.mysteryWord =
    mysteryWord.substring(0, place) + ch + mysteryWord.substring(place + 1);
  // console.log("mysteryword changed?: " + mysteryWord);
  document.getElementById("mysteryWord").innerHTML = mysteryWord;
  
}

function letterChecker(word, letter) {
  for (var i = 0; i < word.length; i++) {
    // Each time we print a placeholder for the letters.
    //TODO toLowerCase() cases.
    if (letter == gameWord.charAt(i)) {
      //if letter is found, make letter Visible
      displayAndChangeMysteryWord(letter, i);
      // console.log("found letter " + i);
    } else {
      // console.log("not found " + i);
    }
  }
}

// Cancel click event - stops the action of the game until the ok/cancel button is pressed.
function cancelAction(){  
  dirty = true;
};



// FUNCTION CALLS (Execution)
// =======================================================================================

// Here we call the function to run our for-loop code on each of the following arrays and help print info to the console.
consoleInside(wordList);




// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  // Determines which key was pressed.
  var userGuess = event.key.toUpperCase();


  var key = event.key || event.keyCode;

  //TODO implement this?
  // if (key === 'Escape' || key === 'Esc' || key === 27 || key === 'Shift' || key === 'Control' || key === 'Alt' || key === 'Meta' || key === 'Tab' || key === 'Enter' || key === 'Return' || key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight' || key === 'Backspace') {
  //     alert('wrong key pressings');
  // }


  //set up the game screen upon any key
  if (!gameOn) {
    //send the word list array to the random function and assigns it to a var.
    gameWord = randomWord(wordList).toUpperCase();

    createGameScreen(gameWord);
  } else {
    //dirty is a boolean to stop action of the screen if a modal is showing. 
    if(dirty){
//   if (event.defaultPrevented) {
//     return;
// }
    //Only check guessed letters and to only take letters by regex. add a 'space' at the end to include spacebar valid inputs
    // if ((userGuess.search(/[^a-zA-Z ]+/) === -1)) {
    if ((userGuess.search(/[^a-zA-Z ]+/) === -1) && !(key === 'Escape' || key === 'Esc' || key === 27 || key === 'Shift' || key === 'Control' || key === 'Alt' || key === 'Meta' || key === 'Tab' || key === 'Enter' || key === 'Return' || key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight' || key === 'Backspace')) {
      //This only gets reached if a letter has been pushed;
      
      //add to guessed letters only if not already guessed.
      if (letterInArray(userGuess)) {
        
          document.getElementById("alreadyLetter").innerHTML = userGuess;      
          $('#myModalGuessedAlready').modal({show: true, backdrop: 'static', keyboard: false});
          dirty = false;
        // Alerts the key the user pressed (userGuess)
        // alert("Letter '" + userGuess + "' has already been guessed! Try again.");

        //event.preventDefault();
        
      
    }
      //else letter is not in the array of guesses yet.
      else {
        // console.log("Letter " + userGuess + " has NOT already been guessed!");
        
        //TODO: Meta gets pushed. Also cap letters get pushed. Shift keys
        lettersGuessed.push(userGuess);
        document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
        letterChecker(gameWord, userGuess);
        remaining--;
        document.getElementById("remainingGuesses").innerHTML = remaining;
      }
    
    }
    //else a non-letter was pressed and do nothing.
    //TODO possibly just do nothing here. 
    else {
      // $('#myModalAlphaOnly').modal({show: true, backdrop: 'static', keyboard: false});
      // alert("Please press a letter in the alphabet...");
      //  DO NOTHING THEN!!!   
    }
  }

//putting the check win here to display all letters before inform of a win
if (checkGameWin()){
  // setTimeout(function() {
    // alert("You win! Please press another key to play again.");  
    audioWin.play(); 
    $('#myModalWin').modal({show: true, backdrop: 'static', keyboard: false});
    dirty = false;
  // }, 10)
  
}

if (checkRemaining()){
  //No more guesses left if true.
  // $('#myModalLose').modal('show');  
  audioLose.play();
  $('#myModalLose').modal({show: true, backdrop: 'static', keyboard: false});
  dirty = false;
  // $('#myModalLose').modal('show',{
  //   keyboard: false,
  //   backdrop: false
  // });   
  // setTimeout(function() {
  //   alert("No more guesses left! You lose. Please press another key to play again.");   
  // }, 10)  
}

}
};

//example of an object
//for hints TODO
// document.getElementById("btnHint").style.display = "block";
var person = {
  name: ["Bob", "Smith"],
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  bio: function() {
    alert(
      this.name[0] +
        " " +
        this.name[1] +
        " is " +
        this.age +
        " years old. He likes " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        "."
    );
  },
  greeting: function() {
    alert("Hi! I'm " + this.name[0] + ".");
  }
};
