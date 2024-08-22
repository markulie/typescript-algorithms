import { minNumberA, minNumberB } from './minNumber'
import { randomNumberByLength } from './randomNumberByLength'

const num = randomNumberByLength(9)
console.log(num)
console.log(minNumberA(num))
console.log(minNumberB(num))

// Example output:
// 168261438
// 1
// 1
