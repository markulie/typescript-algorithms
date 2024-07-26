import { reverseNumberA } from './reverseNumber'

export function isSymmetric(num: number): boolean {
  return num === reverseNumberA(num)
}
