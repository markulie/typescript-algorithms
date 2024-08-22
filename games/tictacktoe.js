import readline from 'readline'

// Setting up the readline interface for handling user input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Class representing the Tic-Tac-Toe game
class TicTacToe {
  constructor() {
    // Initializing the game board as a 3x3 grid filled with nulls
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]
    // Setting the starting player to 'X'
    this.currentPlayer = 'X'
    // Tracking the number of turns taken in the game
    this.turns = 0
  }

  // Method to print the current state of the game board
  printBoard() {
    this.board.forEach((row) => {
      console.log(row.map((cell) => cell || ' ').join(' | '))
    })
    console.log('\n')
  }

  // Method to make a move on the board
  makeMove(row, col) {
    // Checking if the move is within bounds and if the cell is empty
    if (row < 0 || row > 2 || col < 0 || col > 2 || this.board[row][col]) {
      console.log('Invalid move. Try again.')
      return false
    }

    // Placing the current player's symbol on the board
    this.board[row][col] = this.currentPlayer
    // Incrementing the turn count
    this.turns++
    return true
  }

  // Method to check if there is a winner
  checkWinner() {
    const lines = [
      // Rows
      [this.board[0][0], this.board[0][1], this.board[0][2]],
      [this.board[1][0], this.board[1][1], this.board[1][2]],
      [this.board[2][0], this.board[2][1], this.board[2][2]],
      // Columns
      [this.board[0][0], this.board[1][0], this.board[2][0]],
      [this.board[0][1], this.board[1][1], this.board[2][1]],
      [this.board[0][2], this.board[1][2], this.board[2][2]],
      // Diagonals
      [this.board[0][0], this.board[1][1], this.board[2][2]],
      [this.board[0][2], this.board[1][1], this.board[2][0]],
    ]

    // Checking all possible winning lines
    for (const line of lines) {
      if (line[0] && line[0] === line[1] && line[1] === line[2]) {
        return line[0]
      }
    }

    return null
  }

  // Method to check if the game is a draw
  isDraw() {
    return this.turns === 9 && !this.checkWinner()
  }

  // Method to switch the current player
  switchPlayer() {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'
  }

  // Method to get the current player
  getCurrentPlayer() {
    return this.currentPlayer
  }
}

// Function to prompt the player for their move
function promptMove(game) {
  rl.question(
    `Player ${game.getCurrentPlayer()}, enter your move (row and column): `,
    (input) => {
      // Parsing the player's input into row and column numbers
      const [row, col] = input.split(' ').map(Number)

      // Attempting to make the move
      if (game.makeMove(row, col)) {
        // If the move is successful, print the board
        game.printBoard()
        const winner = game.checkWinner()

        // Checking if there's a winner or if the game is a draw
        if (winner) {
          console.log(`Player ${winner} wins!`)
          rl.close()
        } else if (game.isDraw()) {
          console.log('The game is a draw.')
          rl.close()
        } else {
          // If the game continues, switch the player and prompt again
          game.switchPlayer()
          promptMove(game)
        }
      } else {
        // If the move is invalid, prompt again
        promptMove(game)
      }
    },
  )
}

// Initializing and starting the game
const game = new TicTacToe()
game.printBoard()
promptMove(game)
