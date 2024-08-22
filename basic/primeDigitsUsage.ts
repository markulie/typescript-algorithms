import { primeDigits } from './primeDigits'
import { randomNumberByLength } from './randomNumberByLength'

const num = randomNumberByLength(9)
console.log(num)
console.log(primeDigits(num))

// Example output:
// 339429658
// [ 5, 2, 3, 3 ]
