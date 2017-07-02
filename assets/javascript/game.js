//1 - Check connection to html page
console.log("connected")

//2 - Set the initial global variables
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess = null;
var guessesLeft = 9;
var guessesMade = [];
var wins = 0;
var losses = 0;


//3 - create a function
document.onkeyup = function(){

		
		//3.1 - Computer makes a choice - choice is stored in a variable.
		var computerGuess = options[Math.floor(Math.random()*options.length)];
		console.log("The Computer guessed " + computerGuess);

		//3.2 - User makes a choice - choice is stored in a variable.
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log("The User guessed " + userGuess);

		//3.3 - Computer choice is compared to User choice.
		if (userGuess == computerGuess) {
		 	console.log("same");
		 	wins++;
		 	//reset guessesLeft count to 9
		 	guessesLeft=9;
			console.log("The user has won " + wins + " times.");
		} else {
		 	console.log("different");
		 	guessesMade++;
		 	guessesLeft--;
		 	console.log("The user has guessed a total of " + guessesMade + " times.");
		 		if (guessesLeft == 0) {
		 			losses++;
		 			guessesLeft=9;
	 			}
	 		}

 	//3.4 - Display user Guess, wins, losses, guesses left
 	document.querySelector('#winsCount').innerHTML = wins;
 	document.querySelector('#lossesCount').innerHTML = losses;
 	document.querySelector('#guessesLeft').innerHTML = guessesLeft;
 	document.querySelector('#guessesSoFar').innerHTML = userGuess;

}




//4 - Script tracks number of User choices and counts against the limit.

//5 - Display result of the number of guesses left and the number guessed so far to User.

//6 - Script tracks wins and losses.

//7 - Display wins, losses, and guesses to User




