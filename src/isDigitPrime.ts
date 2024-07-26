import { isOneDigit } from './isOneDigit'

export function isDigitPrime(num: number): boolean {
  if (!isOneDigit(num)) return false

  switch (num) {
    case 2:
    case 3:
    case 5:
    case 7:
      return true
    default:
      return false
  }
}
