export const reverseNumberA = (num: number): number => {
  let reversed: number = 0

  while (num !== 0) {
    reversed = reversed * 10 + (num % 10)
    num = Math.floor(num / 10)
  }

  return reversed
}

export const reverseNumberB = (num: number): number => {
  const reversed = parseInt(num.toString().split('').reverse().join(''))

  return reversed * Math.sign(num)
}

export const reverseNumberC = (num: number, reversed: number = 0): number => {
  if (num === 0) return reversed

  return reverseNumberC(Math.trunc(num / 10), reversed * 10 + (num % 10))
}
