import { minNumberA, minNumberB } from './min-number'
import { randomNumberByLength } from './random-number-by-length'

const num = randomNumberByLength(9)
console.log(num)
console.log(minNumberA(num))
console.log(minNumberB(num))

// Example output:
// 168261438
// 1
// 1
