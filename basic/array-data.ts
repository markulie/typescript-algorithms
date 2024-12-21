import { isEven } from './is-even'
import { isPrime } from './is-prime'

type ArrayResult = {
  max: number
  min: number
  sum: number
  average: number
  oddNumbers: number[]
  evenNumbers: number[]
  primeNumbers: number[]
}

export const arrayData = (arr: number[]): ArrayResult => {
  let max: number = arr[0]
  let min: number = arr[0]
  let sum: number = 0
  const oddNumbers: number[] = []
  const primeNumbers: number[] = []
  const evenNumbers: number[] = []

  for (const i of arr) {
    sum += i
    if (i > max) {
      max = i
    }
    if (i < min) {
      min = i
    }
    if (isEven(i)) {
      evenNumbers.push(i)
    } else {
      oddNumbers.push(i)
    }
    if (isPrime(i)) {
      primeNumbers.push(i)
    }
  }
  const average = sum / arr.length

  return {
    max,
    min,
    sum,
    average,
    oddNumbers,
    evenNumbers,
    primeNumbers,
  }
}
