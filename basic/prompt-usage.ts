import { askQuestion, closeInput } from './prompt'

askQuestion('Your name? ')
  .then(name => {
    console.log('Hi', name)
    closeInput()
  })
  .catch(error => {
    console.error('Error:', error)
    closeInput()
  })

// Example output:
// Your name?
// Hi {name}
