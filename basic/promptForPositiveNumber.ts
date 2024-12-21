import * as readline from 'readline/promises'
import { stdin as input, stdout as output } from 'process'

export const promptForPositiveNumber = async (): Promise<number> => {
  const rl = readline.createInterface({ input, output })

  let isValid = false
  let number: number | null = null

  while (!isValid) {
    try {
      const userInput = await rl.question('Enter a positive number or zero: ')
      number = parseInt(userInput, 10)
      if (Number.isInteger(number) && number >= 0) {
        isValid = true
      } else {
        console.log('ERROR: Invalid input.')
      }
    } catch (err) {
      console.error('ERROR: Unable to read input. Please try again.', err)
    }
  }

  rl.close()

  return number as number
}
