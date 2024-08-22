export function reverseArrayA(arr: number[]): number[] {
  return arr.slice().reverse()
}

export function reverseArrayB(arr: number[]): number[] {
  const reversedArray = [...arr].reverse()

  return reversedArray
}

export function reverseArrayC(arr: number[]): number[] {
  const reversedArray: number[] = []

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i])
  }

  return reversedArray
}
