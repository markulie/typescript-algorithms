import { isPrime } from './is-prime'
import { promptForPositiveNumber } from './prompt-for-positive-number'

const main = async (): Promise<void> => {
  while (true) {
    const number = await promptForPositiveNumber()
    const isPrimeNumber = isPrime(number)
    console.log(`${number} is ${isPrimeNumber ? '' : 'NOT '}a prime number.`)
  }
}

main().catch((err) => {
  console.error('Unexpected error:', err)
})

// Example output:
// Enter a positive integer:
