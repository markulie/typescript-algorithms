import { isPrime } from './isPrime'
import { promptForPositiveNumber } from './promptForPositiveNumber'

async function main(): Promise<void> {
  // eslint-disable-next-line no-constant-condition
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
