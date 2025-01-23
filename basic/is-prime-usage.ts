import { isPrime } from './is-prime'
import { promptForPositiveNumber } from './prompt-for-positive-number'
import { closeInput } from './prompt'

const main = async (): Promise<void> => {
  try {
    while (true) {
      const number = await promptForPositiveNumber()
      const isPrimeNumber = isPrime(number)
      console.log(`${number} is ${isPrimeNumber ? '' : 'NOT '}a prime number.`)
    }
  } catch (err) {
    console.error('Unexpected error:', err)
  } finally {
    closeInput()
  }
}

main().catch((err) => {
  console.error('Unexpected error during execution:', err)
})

// Example output:
// Enter a positive integer:
