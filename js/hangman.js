
var guessesLeft = counter;
var counter = 8;
setGuessesLeft(8);


// stolen from here: https://gist.github.com/gravitymonkey/2406023
//Declare array of words
var hangmanWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];

//Setting up filter to get rid of short words
function filterOutShortWords(words) {
  return words.length >= 3;
  var sorted = [];

}

/* call function filterOutShortWords for array hangmanWords
 * Return all words with >= 3 chars
 * added .toLowerCase
 */
var wordsArray = hangmanWords.filter(filterOutShortWords);

/* This is picking the address (index) of the person (*word* in the array )
 * from the neighborhood (array). We will get the person (*word*) later.
 * Returns a random # that corresponds with a word in the wordsArray variable.
 */
function randomWordIndex() {
  return wordsArray[Math.floor(Math.random() * wordsArray.length)];
}
//Picks the random word for the game
var  randomWord = randomWordIndex();
randomWord.toLowercase;

/* Check the random word in console.
 * console.log(randomWord);
 */

//Split randomWord for display
var displayWord = randomWord.split('');


// replacing all characters with underscores
var dashedWord = displayWord.map(function(ch) {
  return '_';
});

// create string from displayWord array and add spaces between underscores
var finalDisplay = dashedWord.join(' ');

document.querySelector('.hidden-word-display').textContent = finalDisplay;


/* This is what the computer does every user turn
 * Calls functions for checking
 * Refreshes box every time user guesses
 * Decreases # of userGuesses every turn by one
 */
function onUserGuess() {
  var input = document.querySelector('.user-letter');
  var userLetter = input.value;

  // calls functions checking if letter is in word with if/else
  if (isGuessCorrect(userLetter) === true)  {
    onCorrectGuess(userLetter);
  } else {
    onIncorrectGuess(userLetter);

  }
  //resets input to null
  input.value = "";

  //decrements guessesLeft, goes with setGuessesLeft (line 96)
  counter = --counter;
  guessesLeft = counter;
  setGuessesLeft(guessesLeft);



}

function isGuessCorrect(userLetter) {
  if (displayWord.indexOf(userLetter) !== -1)  { //previously gameWord
    return true;
    alert("Good job, brainy kid!");
  }
  else {
    return false;
    alert("Try again");
  }
}
// This sets how many guesses remain
function setGuessesLeft(guessesLeft) {
  var guessesLeft = document.querySelector('.turn-count').textContent = counter;
  guessesLeft = guessesLeft.value;
  if (counter === 0) {
    onUserLose();
  }
}

function onCorrectGuess(userLetter) {
  for (var i = 0; i < wordsArray.length; ++i) {
    if(userLetter === displayWord[i]) {
      dashedWord[i] = userLetter;
      }
  }

  finalDisplay = dashedWord.join(' ');
  document.querySelector('.hidden-word-display').textContent = finalDisplay;
  console.log('onCorrectGuess:', displayWord, randomWord);
  if (dashedWord.join('') === randomWord) {
    onUserWin();
  }
}

function onIncorrectGuess(userLetter) {
  alert("Wrong! \n Enjoy your freedom while you can.");
}

function onUserWin() {
  confirm(" Good on you! \nYou survived and came out ahead with a bit of cheese");
  playAgain();
}

function onUserLose() {
  confirm("You lost.\n Welcome to the cage.");
  playAgain();

}

function playAgain() {
  alert("Play again?")
  location.reload();
}
