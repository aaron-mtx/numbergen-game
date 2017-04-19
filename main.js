var numGen = Math.floor(Math.random() * 1000 + 1);
var attempts = 0;

function guessingButton() {
  attempts++;
  var usersGuess = document.getElementById('numInput').value;

  if (usersGuess == "") {
    document.getElementById('user-result').innerHTML = "Result: Please enter a value into the input";
  } else if (usersGuess == numGen) {
    document.getElementById('user-result').innerHTML = "Result: You guessed the right number! " + attempts + " attempts.";
  } else if (usersGuess < numGen) {
    document.getElementById('user-result').innerHTML = "Result: You guessed too small!";
  } else {
    document.getElementById('user-result').innerHTML = "Result: You guessed too big!";
  }
}

function revealNumber() {
  document.getElementById('num-gen-output').innerHTML = "The answer is: " + numGen;
}
