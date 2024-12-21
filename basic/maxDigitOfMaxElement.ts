import { maxNumberA } from './maxNumber'
import { maxElement } from './maxElement'

export const maxDigitOfMaxElement = (arr: number[]): number => {
  const result = maxElement(arr)
  const maxDigit = maxNumberA(result.max)

  return maxDigit
}
