export function minNumberA(num: number): number {
  let min = 9

  while (num !== 0) {
    const digit = num % 10
    num = Math.trunc(num / 10)
    if (digit < min) min = digit
  }

  return min
}

export function minNumberB(num: number): number {
  const strNumber = Math.abs(num).toString()
  let min = 9

  for (let i = 0; i < strNumber.length; i++) {
    const digit = parseInt(strNumber[i])
    if (digit < min) {
      min = digit
    }
  }

  return min
}
