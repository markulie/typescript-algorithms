import { performance } from 'perf_hooks'

const concatenateStrings = (str1: string, str2: string): string => str1 + str2

const benchmarkConcatenation = (): void => {
  const str1 = 'Hello, '
  const str2 = 'world!'
  const iterations = 1000000

  const startTime = performance.now()

  for (let i = 0; i < iterations; i++) {
    concatenateStrings(str1, str2)
  }

  const endTime = performance.now()
  const duration = endTime - startTime

  console.log(`Duration:   ${duration}ms\nIterations: ${iterations}`)
}

benchmarkConcatenation()

// Example output:
// Duration:   1.612916000000041ms
// Iterations: 1000000
