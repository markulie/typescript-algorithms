import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('What is your name? ', (name: string) => {
  console.log(`Hello, ${name}!`)
  rl.close()
})

rl.on('close', () => {
  console.log('Readline interface closed.')
})

// Example output:
// What is your name?
