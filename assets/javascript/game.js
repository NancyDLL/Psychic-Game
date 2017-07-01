//Check connection to html page
console.log("connected")

//1 - Computer makes a choice - choice is stored in a variable.
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = options[Math.floor(Math.random()*options.length)];
console.log("The Computer guessed " + computerGuess);

//2 - User makes a choice - choice is stored in a variable.
document.onkeyup = function(){
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("The User guessed " + userGuess);
}





//3 - Computer choice is compared to User choice - determine who gets the win.
// if (computerGuess == userGuess) {
// 	console.log("same");
// } else {
// 	console.log("different");
// }

//4 - Script tracks wins and losses.

//5 - Display result of wins and losses to user.

//6 - Script tracks number of  User choices and counts against the limit.

//7 - Display result of the number of guesses left and the number guessed so far to User.

//8 - When limit is reached game the script delivers end of game message and stops running.