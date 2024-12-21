import { askQuestion, closeInput } from './input'

type Player = 'X' | 'O' | null

class TicTacToe {
  private board: Player[][]
  private currentPlayer: Player
  private turns: number

  constructor() {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]
    this.currentPlayer = 'X'
    this.turns = 0
  }

  public printBoard(): void {
    this.board.forEach((row) => {
      console.log(row.map((cell) => cell || ' ').join(' | '))
    })
    console.log('\n')
  }

  public makeMove(row: number, col: number): boolean {
    if (row < 0 || row > 2 || col < 0 || col > 2 || this.board[row][col]) {
      console.log('Invalid move. Try again.')

      return false
    }

    this.board[row][col] = this.currentPlayer
    this.turns++

    return true
  }

  public checkWinner(): Player {
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

  public isDraw(): boolean {
    return this.turns === 9 && !this.checkWinner()
  }

  public switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'
  }

  public getCurrentPlayer(): Player {
    return this.currentPlayer
  }
}

async function promptMove(game: TicTacToe): Promise<void> {
  const input = await askQuestion(
    `Player ${game.getCurrentPlayer()}, enter your move (row and column): `,
  )
  const [row, col] = input.split(' ').map(Number)

  if (game.makeMove(row, col)) {
    game.printBoard()
    const winner = game.checkWinner()

    if (winner) {
      console.log(`Player ${winner} wins!`)
      closeInput()
    } else if (game.isDraw()) {
      console.log('The game is a draw.')
      closeInput()
    } else {
      game.switchPlayer()
      promptMove(game)
    }
  } else {
    promptMove(game)
  }
}

const game = new TicTacToe()
game.printBoard()
promptMove(game)

// Example output:
//    |   |
//    |   |
//    |   |
//
//
// Player X, enter your move (row and column):
