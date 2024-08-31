let targetNumber = Math.floor(Math.random() * 100) + 1;
let chances = 7;

document.getElementById('remainingChances').textContent = `Chances Left: ${chances}`;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const feedback = document.getElementById('feedback');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = 'Please enter a valid number between 1 and 100.';
        feedback.style.color = 'red';
        return;
    }

    chances--;

    if (guess === targetNumber) {
        feedback.textContent = `Congratulations! You guessed it right! The number was ${targetNumber}.`;
        feedback.style.color = 'green';
        endGame();
    } else if (guess > targetNumber) {
        feedback.textContent = 'Your guess is too high!';
        feedback.style.color = 'blue';
    } else {
        feedback.textContent = 'Your guess is too low!';
        feedback.style.color = 'blue';
    }

    document.getElementById('remainingChances').textContent = `Chances Left: ${chances}`;

    if (chances === 0 && guess !== targetNumber) {
        feedback.textContent = `Sorry, you ran out of chances. The number was ${targetNumber}.`;
        feedback.style.color = 'red';
        endGame();
    }
}

function endGame() {
    document.getElementById('guessInput').disabled = true;
    document.querySelector('.btn').disabled = true;
}

function restartGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    chances = 7;
    document.getElementById('guessInput').disabled = false;
    document.getElementById('guessInput').value = '';
    document.querySelector('.btn').disabled = false;
    document.getElementById('feedback').textContent = '';
    document.getElementById('remainingChances').textContent = `Chances Left: ${chances}`;
}