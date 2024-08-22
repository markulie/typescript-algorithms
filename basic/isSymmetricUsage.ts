import { randomNumberByLength } from './randomNumberByLength'
import { isSymmetric } from './isSymmetric'
import { reverseNumberA } from './reverseNumber'

const num = randomNumberByLength(5)
console.log('Initial :', num)
console.log('Mirrored:', reverseNumberA(num))
console.log(isSymmetric(num) ? 'Symmetric' : 'Asymmetric')

// Example output:
// Initial : 69103
// Mirrored: 30196
// Asymmetric
