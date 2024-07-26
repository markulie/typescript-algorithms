import * as readline from 'readline'

class AdvancedCalculator {
  add(a: number, b: number): number {
    return a + b
  }
  subtract(a: number, b: number): number {
    return a - b
  }
  multiply(a: number, b: number): number {
    return a * b
  }
  divide(a: number, b: number): number {
    if (b === 0) throw new Error('Division by zero is not allowed.')
    return a / b
  }
  power(base: number, exponent: number): number {
    return Math.pow(base, exponent)
  }
  sqrt(value: number): number {
    if (value < 0) throw new Error('Cannot calculate the square root of a negative number.')
    return Math.sqrt(value)
  }
  sin(angle: number): number {
    return Math.sin(this.degreesToRadians(angle))
  }
  cos(angle: number): number {
    return Math.cos(this.degreesToRadians(angle))
  }
  tan(angle: number): number {
    return Math.tan(this.degreesToRadians(angle))
  }
  log(value: number): number {
    if (value <= 0) throw new Error('Logarithm is undefined for non-positive values.')
    return Math.log(value)
  }
  log10(value: number): number {
    if (value <= 0) throw new Error('Logarithm base 10 is undefined for non-positive values.')
    return Math.log10(value)
  }
  factorial(n: number): number {
    if (n < 0) throw new Error('Factorial is not defined for negative numbers.')
    return n <= 1 ? 1 : n * this.factorial(n - 1)
  }
  combination(n: number, k: number): number {
    if (n < 0 || k < 0) throw new Error('Combination is not defined for negative numbers.')
    return this.factorial(n) / (this.factorial(k) * this.factorial(n - k))
  }
  permutation(n: number, k: number): number {
    if (n < 0 || k < 0) throw new Error('Permutation is not defined for negative numbers.')
    return this.factorial(n) / this.factorial(n - k)
  }
  private degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180)
  }
}

const calculator = new AdvancedCalculator()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log("Advanced Calculator. Type 'exit' to quit.")

rl.on('line', (input: string) => {
  if (input.trim().toLowerCase() === 'exit') {
    rl.close()
    return
  }
  try {
    const result = evalExpression(input)
    console.log(`Result: ${result}`)
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Error: ${error.message}`)
    } else {
      console.log('Unknown error occurred.')
    }
  }
  rl.prompt()
})

rl.on('close', () => {
  console.log('Goodbye!')
  process.exit(0)
})

rl.prompt()

function evalExpression(expression: string): number {
  // Handle basic operations and functions manually
  const [operator, ...operands] = expression.split(' ').filter(Boolean)
  const args = operands.map((arg) => parseFloat(arg))

  switch (operator) {
    case '+':
      return calculator.add(args[0], args[1])
    case '-':
      return calculator.subtract(args[0], args[1])
    case '*':
      return calculator.multiply(args[0], args[1])
    case '/':
      return calculator.divide(args[0], args[1])
    case 'add':
      return calculator.add(args[0], args[1])
    case 'subtract':
      return calculator.subtract(args[0], args[1])
    case 'multiply':
      return calculator.multiply(args[0], args[1])
    case 'divide':
      return calculator.divide(args[0], args[1])
    case 'power':
      return calculator.power(args[0], args[1])
    case 'sqrt':
      return calculator.sqrt(args[0])
    case 'sin':
      return calculator.sin(args[0])
    case 'cos':
      return calculator.cos(args[0])
    case 'tan':
      return calculator.tan(args[0])
    case 'log':
      return calculator.log(args[0])
    case 'log10':
      return calculator.log10(args[0])
    case 'factorial':
      return calculator.factorial(args[0])
    case 'combination':
      return calculator.combination(args[0], args[1])
    case 'permutation':
      return calculator.permutation(args[0], args[1])
    default:
      throw new Error('Unknown operation')
  }
}
