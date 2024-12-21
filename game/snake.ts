import readline from 'readline'

class Point {
  constructor(public x: number, public y: number) {}
}

class SnakeGame {
  private width: number
  private height: number
  private snake: Point[]
  private food: Point
  private direction: Point
  private score: number
  private speed: number
  private gameOver: boolean

  constructor(width: number = 20, height: number = 20) {
    this.width = width
    this.height = height
    this.snake = [new Point(2, 2)]
    this.food = this.spawnFood()
    this.direction = new Point(1, 0)
    this.score = 0
    this.speed = 500
    this.gameOver = false

    // Configure terminal input
    readline.emitKeypressEvents(process.stdin)
    process.stdin.setRawMode(true)
    process.stdin.on('keypress', (_, key) => this.handleKeyPress(key))
  }

  private spawnFood(): Point {
    let food: Point
    do {
      food = new Point(
        Math.floor(Math.random() * this.width),
        Math.floor(Math.random() * this.height),
      )
    } while (
      this.snake.some((segment) => segment.x === food.x && segment.y === food.y)
    )

    return food
  }

  private draw(): void {
    console.clear()
    for (let y = 0; y < this.height; y++) {
      let row = ''
      for (let x = 0; x < this.width; x++) {
        if (this.snake.some((segment) => segment.x === x && segment.y === y)) {
          row += 'O' // Snake
        } else if (this.food.x === x && this.food.y === y) {
          row += 'X' // Food
        } else {
          row += '.' // Empty space
        }
      }
      console.log(row)
    }
    console.log(`Score: ${this.score}`)
  }

  private moveSnake(): void {
    const head = this.snake[0]
    const newHead = new Point(
      (head.x + this.direction.x + this.width) % this.width,
      (head.y + this.direction.y + this.height) % this.height,
    )

    // Check for collision with itself
    if (
      this.snake.some(
        (segment) => segment.x === newHead.x && segment.y === newHead.y,
      )
    ) {
      this.gameOver = true

      return
    }

    this.snake.unshift(newHead)

    // Check if food is eaten
    if (newHead.x === this.food.x && newHead.y === this.food.y) {
      this.score++
      this.food = this.spawnFood()
      this.speed = Math.max(100, this.speed - 20)
    } else {
      this.snake.pop()
    }
  }

  private handleKeyPress(key: { name: string; ctrl: boolean }): void {
    if (key.ctrl && key.name === 'c') {
      process.exit()
    }

    switch (key.name) {
      case 'up':
        if (this.direction.y === 0) this.direction = new Point(0, -1)
        break
      case 'down':
        if (this.direction.y === 0) this.direction = new Point(0, 1)
        break
      case 'left':
        if (this.direction.x === 0) this.direction = new Point(-1, 0)
        break
      case 'right':
        if (this.direction.x === 0) this.direction = new Point(1, 0)
        break
    }
  }

  private gameLoop(): void {
    if (this.gameOver) {
      console.log('Game Over!')
      process.exit()
    }

    this.moveSnake()
    this.draw()
    setTimeout(() => this.gameLoop(), this.speed)
  }

  public start(): void {
    console.log('Welcome to Snake Game! Use arrow keys to play.')
    this.draw()
    this.gameLoop()
  }
}

// Start the game
const game = new SnakeGame()
game.start()
