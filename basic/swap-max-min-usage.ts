import { swapMaxMin } from './swap-max-min'
import { createArray } from './create-array'

const arr = createArray(4, true)
console.log('Initial  array:', arr)
console.log('Modified array:', swapMaxMin(arr))

// Example output:
// Initial  array: [ 7, 3, 9, 2 ]
// Modified array: [ 7, 3, 2, 9 ]
