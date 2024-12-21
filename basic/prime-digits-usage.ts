import { primeDigits } from './prime-digits'
import { randomNumberByLength } from './random-number-by-length'

const num = randomNumberByLength(9)
console.log(num)
console.log(primeDigits(num))

// Example output:
// 339429658
// [ 5, 2, 3, 3 ]
