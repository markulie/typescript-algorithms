import { randomNumberByLength } from './random-number-by-length'

export const createArray = (
  length: number,
  fillRandom: boolean = false,
  elementLength: number = 1,
): number[] => {
  const arr: number[] = new Array(length).fill(0)
  if (fillRandom) {
    arr.forEach((_, index) => {
      arr[index] = randomNumberByLength(elementLength)
    })
  }

  return arr
}
