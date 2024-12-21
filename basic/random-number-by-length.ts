import { randomNumberByIndex } from './random-number-by-index'

export const randomNumberByLength = (length: number): number => {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += randomNumberByIndex(10)
  }

  return parseInt(result, 10)
}
