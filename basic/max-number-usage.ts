import { maxNumberA, maxNumberB } from './max-number'
import { randomNumberByLength } from './random-number-by-length'

const num = randomNumberByLength(9)
console.log(num)
console.log(maxNumberA(num))
console.log(maxNumberB(num))

// Example output:
// 879393971
// 9
// 9
