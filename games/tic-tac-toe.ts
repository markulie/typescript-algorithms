import readline from 'readline'

type Player = 'X' | 'O'
type Cell = Player | null

class TicTacToe {
  private board: Cell[][]
  private currentPlayer: Player
  private turns: number

  constructor() {
    // Initialize a 3x3 board filled with null values
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]
    this.currentPlayer = 'X' // Start with Player X
    this.turns = 0 // Track the number of turns
  }

  // Print the game board
  printBoard(): void {
    console.clear()
    console.log('  1   2   3')
    this.board.forEach((row, rowIndex) => {
      const rowString = row.map((cell) => cell || ' ').join(' | ')
      console.log(`${rowIndex + 1} ${rowString}`)
      if (rowIndex < 2) console.log('  ---+---+---')
    })
    console.log('\n')
  }

  // Attempt to make a move
  makeMove(row: number, col: number): boolean {
    // Adjust for 1-based indexing
    row -= 1
    col -= 1

    if (row < 0 || row > 2 || col < 0 || col > 2 || this.board[row][col]) {
      console.log('Invalid move. Try again.')

      return false
    }

    this.board[row][col] = this.currentPlayer // Place the current player's symbol
    this.turns++ // Increment the turn count

    return true
  }

  // Check for a winner
  checkWinner(): Player | null {
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

    for (const line of lines) {
      if (line[0] && line[0] === line[1] && line[1] === line[2]) {
        return line[0]
      }
    }

    return null
  }

  // Check if the game is a draw
  isDraw(): boolean {
    return this.turns === 9 && !this.checkWinner()
  }

  // Switch to the next player
  switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'
  }

  // Get the current player
  getCurrentPlayer(): Player {
    return this.currentPlayer
  }
}

// Setting up the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Function to handle prompting the player for their move
function promptMove(game: TicTacToe): void {
  rl.question(
    `Player ${game.getCurrentPlayer()}, enter your move (row and column, e.g., "1 2"): `,
    (input) => {
      const [row, col] = input.split(' ').map(Number)

      if (game.makeMove(row, col)) {
        game.printBoard()

        const winner = game.checkWinner()
        if (winner) {
          console.log(`Player ${winner} wins!`)
          rl.close()
        } else if (game.isDraw()) {
          console.log('The game is a draw.')
          rl.close()
        } else {
          game.switchPlayer()
          promptMove(game)
        }
      } else {
        promptMove(game)
      }
    },
  )
}

// Start the game
const game = new TicTacToe()
game.printBoard()
promptMove(game)
