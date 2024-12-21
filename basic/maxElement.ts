type MaxResult = {
  max: number
  index: number
}

export const maxElement = (arr: number[]): MaxResult => {
  let max: number = arr[0]
  let index: number = 0

  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i]
      index = i
    }
  }

  return {
    max,
    index,
  }
}
