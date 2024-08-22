import { createArray } from './createArray'
import { findIndex } from './findIndex'
import { randomNumberByIndex } from './randomNumberByIndex'

const length = 5
const arr = createArray(length)
arr[randomNumberByIndex(length)] = 1
console.log(arr)
console.log(`Length: ${arr.length}`)
console.log(`Index:  ${findIndex(arr, 1)}`)

// Example output:
// [ 0, 1, 0, 0, 0 ]
// Length: 5
// Index:  1
