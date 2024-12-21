import { createArray } from './create-array'
import { arrayData } from './array-data'

const arr = createArray(8, true)
const result = arrayData(arr)

console.log(arr)
console.log('Max:    ', result.max)
console.log('Min:    ', result.min)
console.log('Sum:    ', result.sum)
console.log('Average:', result.average)
console.log('Prime Numbers:', result.primeNumbers)
console.log('Odd Numbers:  ', result.oddNumbers)
console.log('Even Numbers: ', result.evenNumbers)

// Example output:
//   [
//     1, 2, 8, 2,
//     7, 2, 2, 5
//   ]
//   Max:     8
//   Min:     1
//   Sum:     29
//   Average: 3.625
//   Prime Numbers: [ 2, 2, 7, 2, 2, 5 ]
//   Odd Numbers:   [ 1, 7, 5 ]
//   Even Numbers:  [ 2, 8, 2, 2, 2 ]
