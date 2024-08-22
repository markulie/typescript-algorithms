function whileFunction(): void {
  let i = 0
  while (i < 10000) {
    i++
  }
}

const start = performance.now()
whileFunction()
const end = performance.now()
console.log(`performance.now: ${end - start}ms`)

console.time('console.time   ')
whileFunction()
console.timeEnd('console.time   ')

// Example output:
// performance.now: 0.18966499999999087ms
// console.time   : 0.087ms
