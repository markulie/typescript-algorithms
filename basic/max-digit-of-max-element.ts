import { maxNumberA } from './max-number'
import { maxElement } from './max-element'

export const maxDigitOfMaxElement = (arr: number[]): number => {
  const result = maxElement(arr)
  const maxDigit = maxNumberA(result.max)

  return maxDigit
}
