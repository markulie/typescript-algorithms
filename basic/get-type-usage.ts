import { getType } from './get-type'

console.log(42, getType(42))
console.log('Hello', getType('Hello'))
console.log(true, getType(true))
console.log({}, getType({}))
console.log([], getType([]))
console.log(null, getType(null))
console.log(undefined, getType(undefined))
console.log(
  () => {},
  getType(() => {}),
)

// Example output:
// 42 number
// Hello string
// true boolean
// {} object
// [] array
// null null
// undefined undefined
// [Function (anonymous)] function
