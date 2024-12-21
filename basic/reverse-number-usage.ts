import { randomNumberByLength } from './random-number-by-length'
import {
  reverseNumberA,
  reverseNumberB,
  reverseNumberC,
} from './reverse-number'

const num = randomNumberByLength(5)
console.log('Initial   :', num)
console.log('Modified A:', reverseNumberA(num))
console.log('Modified B:', reverseNumberB(num))
console.log('Modified C:', reverseNumberC(num))

// Example output:
// Initial   : 43690
// Modified A: 9634
// Modified B: 9634
// Modified C: 9634
