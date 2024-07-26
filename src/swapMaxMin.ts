export function swapMaxMin(arr: number[]): number[] {
  let max = arr[0]
  let min = arr[0]
  let maxIndex = 0
  let minIndex = 0

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
      maxIndex = i
    } else if (arr[i] < min) {
      min = arr[i]
      minIndex = i
    }
  }

  [arr[maxIndex], arr[minIndex]] = [arr[minIndex], arr[maxIndex]]

  return arr
}
