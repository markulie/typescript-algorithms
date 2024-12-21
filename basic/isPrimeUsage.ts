import { isPrime } from './isPrime'
import { promptForPositiveNumber } from './promptForPositiveNumber'

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
