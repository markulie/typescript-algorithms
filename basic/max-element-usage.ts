import { maxElement } from './max-element'
import { createArray } from './create-array'
import { randomNumberByIndex } from './random-number-by-index'

const arr = createArray(8, true, randomNumberByIndex(10))
console.log(arr)
console.log(`Max element: ${maxElement(arr).max}`)
console.log(`Max index: ${maxElement(arr).index}`)

// Example output:
//  [
//    139, 2731, 7897,
//    5453,   99, 3120,
//    5632,  654
//  ]
//  Max element: 7897
//  Max index: 2
