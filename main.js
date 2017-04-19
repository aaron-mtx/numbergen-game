var numGen = Math.floor(Math.random() * 1000 + 1);
var attempts = 0;

function guessingButton() {
  attempts++;
  var usersGuess = document.getElementById('numInput').value;

  if (usersGuess == "") {
    alert("Please enter a make a guess in the input");
  } else if (usersGuess == numGen) {
    alert("You guessed the right number! " + attempts + " attempts.");
    location.reload();
  } else if (usersGuess < numGen) {
    alert("You guessed too small!");
  } else {
    alert("You guessed too big!");
  }
}
