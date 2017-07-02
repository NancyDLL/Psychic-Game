//Check connection to html page
console.log("connected")

//Set the initial global variables
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess = null;
var guessesLeft = 9;
var guessesMade = [];
var wins = 0;
var losses = 0;



//1 - create a function
document.onkeyup = function(){
	//2 - Computer makes a choice - choice is stored in a variable.
	var computerGuess = options[Math.floor(Math.random()*options.length)];
	console.log("The Computer guessed " + computerGuess);

	//3 - User makes a choice - choice is stored in a variable.
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("The User guessed " + userGuess);

	//4 - Computer choice is compared to User choice - determine who gets the win.
	if (userGuess == computerGuess) {
 	console.log("same");
	} else {
 	console.log("different");
 }
}




//4 - Script tracks number of User choices and counts against the limit.

//5 - Display result of the number of guesses left and the number guessed so far to User.

//6 - Script tracks wins and losses.

//7 - Display wins, losses, and guesses to User




