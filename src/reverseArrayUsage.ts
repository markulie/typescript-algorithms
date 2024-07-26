import { reverseArrayA, reverseArrayB, reverseArrayC } from './reverseArray'
import { createArray } from './createArray'

const arr = createArray(4, true)
console.log('Initial:   ', arr)
console.log('Reversed A:', reverseArrayA(arr))
console.log('Reversed B:', reverseArrayB(arr))
console.log('Reversed C:', reverseArrayC(arr))

// Example output:
// Initial:    [ 0, 3, 7, 7 ]
// Reversed A: [ 7, 7, 3, 0 ]
// Reversed B: [ 7, 7, 3, 0 ]
// Reversed C: [ 7, 7, 3, 0 ]
