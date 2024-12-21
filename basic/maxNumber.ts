export const maxNumberA = (num: number): number => {
  let max = 0

  while (num !== 0) {
    const digit = num % 10
    num = Math.trunc(num / 10)
    if (digit > max) max = digit
  }

  return max
}

export const maxNumberB = (num: number): number => {
  const strNumber = Math.abs(num).toString()
  let max = 0

  for (let i = 0; i < strNumber.length; i++) {
    const digit = parseInt(strNumber[i])
    if (digit > max) {
      max = digit
    }
  }

  return max
}
