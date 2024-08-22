import { swapMaxMin } from './swapMaxMin'
import { createArray } from './createArray'

const arr = createArray(4, true)
console.log('Initial  array:', arr)
console.log('Modified array:', swapMaxMin(arr))

// Example output:
// Initial  array: [ 7, 3, 9, 2 ]
// Modified array: [ 7, 3, 2, 9 ]
