function guessingGame() {
  let number = Math.floor(Math.random() * 100);
  let guesses = 0;
  let winner = false;
  return function guess(num) {
    if (winner === true) return "You already won";
    guesses++;
    if (num === number) {
      const guess = guesses === 1 ? "guess" : "guesses";
      return `You win the number was ${num}, only in ${guess} guesses too!`;
    }
    if (num < number) {
      return "Higher";
    }
    if (num > number) {
      return "Lower";
    }
  };
}

module.exports = { guessingGame };
