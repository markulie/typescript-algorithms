export const primeDigits = (num: number): number[] => {
  const primeDigits: number[] = []

  while (num !== 0) {
    const digit: number = num % 10
    num = Math.floor(num / 10)
    if (digit === 2 || digit === 3 || digit === 5 || digit === 7) {
      primeDigits.push(digit)
    }
  }

  return primeDigits
}
