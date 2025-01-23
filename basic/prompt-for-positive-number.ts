import { askQuestion } from './prompt'

export const promptForPositiveNumber = async (): Promise<number> => {
  let isValid = false
  let number: number | null = null

  while (!isValid) {
    try {
      const userInput = await askQuestion('Enter a positive number or zero: ')
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

  return number as number
}
