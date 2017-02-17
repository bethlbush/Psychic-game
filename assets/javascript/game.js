
/* "Press any key to get started" 
Use key event to start game when user
presses any key.*/
document.onkeyup = function()
/*Create an array with the list of words
the computer will choose from.*/
var wordList = 
["Aqua", "Aquamarine", "Azure", "Beige", "Bisque", 
"Black", "Blue", "Brown", "Chartreuse", 
"Chocolate", "Coral", "Cornsilk","Crimson", 
"Cyan", "Fuchsia",  "Gold", "Goldenrod", 
"Gray", "Green", "Honeydew","Indigo", 
"Ivory", "Khaki", "Lavender", "Lime", 
"Linen", "Magenta", "Maroon", "Moccasin", 
"Navy", "Olive", "Orange", "Orchid", 
"Peru", "Pink","Plum","Purple", 
"Red", "Salmon", "Sienna", "Silver", 
"Snow", "Tan", "Teal", "Thistle", 
"Tomato", "Turquoise", "Violet", 
"Wheat", "White", "Yellow"];

//test
/* for (i = 0; wordList.length -1; i++){
   console.log (wordList[i]);
 } */

/*computer randomly chooses a word from the array.*/

var newWord = wordList[Math.floor(Math.random() * wordList.length)];
//console.log(newWord);

var word = document.getElementById("word");

word.innerHTML = newWord;

/*"newWord" is displayed
as underscores where letters should be.*/
var blankWord

/*"letters chosen" If the letter guessed 
is correct, it goes in the correct slot 
in the word.
If not correct, the letter goes
in the "letters chosen" section.*/

/*"number of guesses" Each time the user
guesses a letter, the number of guesses
goes down by 1. */

/*If the letter has already been guessed,
the number of guesses does not go down.*/

/*If user fills in every letter of
the word before number of guesses
is 0, user wins.*/

/*"Wins" - Starts at 0. If user
 guesses the word, the number goes
 up by 1 and something happens.*/

/*If the "number of guesses" gets to zero,
the player loses and a new word to guess
is diplayed.*/

/*computer tells user what the 
word was if they do not guess it?*/

