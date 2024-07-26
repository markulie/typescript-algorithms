import { askQuestion, closeInput } from './input'

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

async function playGame(): Promise<void> {
  const min = 1
  const max = 100
  const secretNumber = getRandomNumber(min, max)
  let guess: number | null = null
  let attempts = 0

  console.log(`Guess the number between ${min} and ${max}`)

  while (guess !== secretNumber) {
    const input = await askQuestion('Enter your guess: ')
    guess = parseInt(input, 10)
    attempts++

    if (isNaN(guess)) {
      console.log('Please enter a valid number.')
    } else if (guess < secretNumber) {
      console.log('Too low! Try again.')
    } else if (guess > secretNumber) {
      console.log('Too high! Try again.')
    } else {
      console.log(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`)
    }
  }

  closeInput()
}

playGame()

// Example output:
// Guess the number between 1 and 100
// Enter your guess:
