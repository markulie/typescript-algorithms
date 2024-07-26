import { maxElement } from './maxElement'
import { maxDigitOfMaxElement } from './maxDigitOfMaxElement'
import { createArray } from './createArray'
import { randomNumberByIndex } from './randomNumberByIndex'

const arr = createArray(8, true, randomNumberByIndex(10))
console.log(arr)
console.log(`Max element: ${maxElement(arr).max}`)
console.log(`Max index: ${maxElement(arr).index}`)
console.log(`Max digit: ${maxDigitOfMaxElement(arr)}`)

// Example output:
//   [
//     2416987, 2840605,
//     7312317, 3933007,
//     3427406, 9315160,
//     9933735, 5510356
//   ]
//   Max element: 9933735
//   Max index: 6
//   Max digit: 9
