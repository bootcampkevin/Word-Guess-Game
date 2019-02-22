function toggleClock() {
    // get the clock
    var myClock = document.getElementById('clock');

    // get the current value of the clock's display property
    var displaySetting = myClock.style.display;

    // also get the clock button, so we can change what it says
    var clockButton = document.getElementById('clockButton');

    // now toggle the clock and the button text, depending on current state
    if (displaySetting == 'block') {
      // clock is visible. hide it
      myClock.style.display = 'none';
      // change button text
      clockButton.innerHTML = 'Show clock';
    }
    else {
      // clock is hidden. show it
      myClock.style.display = 'block';
      // change button text
      clockButton.innerHTML = 'Hide clock';
    }
  }




  <div class="container">
      <div class="row">
        <div class="col-md-offset-2 col-md-8">
          <div class="jumbotron">
            <h2>You just typed <span id="user-text"><strong>...Nothing.</strong></span></h2>
          </div>
        </div>
      </div>
    </div>

<script type="text/javascript">
      // Let's start by grabbing a reference to the <span> below.
      var userText = document.getElementById("user-text");

      // Next, we give JavaScript a function to execute when onkeyup event fires.
      document.onkeyup = function(event) {
        userText.textContent = event.key;
      };
    </script>






    var wordList = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

      // Looping through each item in the array and logging a message to the console.
      for (var i = 0; i < wordList.length; i++) {
        console.log(wordList[i]);
        var word=wordList[i]
        for (var l = 0; l < word.length; l++){
          console.log(word[l]);

        }
      }






      23:
      <script type="text/javascript">

    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["r", "p", "s"];

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // Alerts the key the user pressed (userGuess).
      alert("User guess: " + userGuess);

      // Alerts the Computer's guess.
      alert("Computer guess: " + computerGuess);

    };
  </script>


  25:
  <script type="text/javascript">

      // ????
      var favTVshows = [];
      var tvShow;

      // For Loop Elements Repeats ??? Times
      for (var i = 1; i < 4; i++) {

        // ????
        tvShow = prompt("What's your #" + i + " favorite TV show?");

        // ????
        favTVshows.push(tvShow);
      }

      // ????
      for (var j = 0; j < favTVshows.length; j++) {

        // ???
        alert(favTVshows[j]);
      }

    </script>


    26:
    <script type="text/javascript">

      // VARIABLES
      // =======================================================================================

      // Various Arrays
      var brands = ["Acer", "Apple", "Sony", "Samsung"];
      var heroes = ["Black Panther", "Cyborg", "Black Canary", "Donna Troy", "Huntress", "Blue Beetle", "Captain Atom"];
      var booksOnMyShelf = ["Calculus Early Transcendentals", "Ravens", "The Self Illusion", "Harry Potter"];
      var thingsInFrontOfMe = ["Laptop", "Beanbag", "Cats", "Slippers"];
      var howIFeel = ["Sleep Deprived", "Wired on Coffee", "Excited"];

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
        console.log("---------");
      }


      // FUNCTION CALLS (Execution)
      // =======================================================================================

      // Here we call the function to run our for-loop code on each of the following arrays.
      consoleInside(brands);
      consoleInside(heroes);
      consoleInside(booksOnMyShelf);
      consoleInside(thingsInFrontOfMe);
      consoleInside(howIFeel);

    </script>






     function isAstring(x,y,z){
            if (typeof(x) == typeof(y)){
              return true;
            }
            else{return false;}

            }




     function letterChecker(word,letter){
      var vowels = ["a","e","i"];
      <!-- //var favTVshows = ['p'];
      // var count = 0; -->
      for (var i=0;i < vowels.length;i++){
      if (letter === vowels[i]){
        <!-- //  favTVshows.push(vowels[i]); -->
        return true;
      }
      }
      return false;
      }







    30:


     <script type="text/javascript">
    var gandalf = {
      "real name": "Gandalf",
      "age (est)": 11000,
      "race": "Maia",
      "haveRetirementPlan": true,
      "aliases": [
        "Greyhame",
        "Stormcrow",
        "Mithrandir",
        "Gandalf the Grey",
        "Gandalf the White"
      ]
    };

    // Object properties can be accessed with "bracket notation"
    alert("My name is " + gandalf["real name"]);

    // Or with "dot notation" if the property has no spaces
    if (gandalf.haveRetirementPlan) {

      // Or with a variable that matches the name of the property
      var ageProperty = "age (est)";
      var years = gandalf[ageProperty];
      alert("My 401k has been gathering interest for " + years + " years!");
    }

    // You can access arrays and their properties from an object
    alert("I have more than " + gandalf.aliases.length + " aliases");

    // Non-existent properties return undefined
    alert("My designation is " + gandalf["designation"]);
  </script>





