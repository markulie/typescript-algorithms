import readline from 'readline'

// Setting up the readline interface for handling user input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Function to start the guessing game
function playGame() {
  const min = 1
  const max = 100
  const secretNumber = getRandomNumber(min, max)
  let attempts = 0

  console.log(`Guess the number between ${min} and ${max}`)

  // Recursive function to handle user input and guessing logic
  function promptGuess() {
    rl.question('Enter your guess: ', (input) => {
      const guess = parseInt(input, 10)
      attempts++

      if (isNaN(guess)) {
        console.log('Please enter a valid number.')
      } else if (guess < secretNumber) {
        console.log('Too low! Try again.')
      } else if (guess > secretNumber) {
        console.log('Too high! Try again.')
      } else {
        console.log(
          `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`,
        )
        rl.close()
        return
      }

      // Continue prompting for guesses until the correct number is guessed
      promptGuess()
    })
  }

  // Start the game by prompting the first guess
  promptGuess()
}

// Start the game
playGame()
