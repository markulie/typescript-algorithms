import readline from 'readline'

interface Point {
  x: number
  y: number
}

class PacManGame {
  private width: number
  private height: number
  private pacman: Point
  private ghosts: Point[]
  private dots: Point[]
  private score: number
  private direction: Point
  private gameOver: boolean
  private gameSpeed: number

  constructor(width: number = 20, height: number = 20) {
    this.width = width
    this.height = height
    this.pacman = { x: Math.floor(width / 2), y: Math.floor(height / 2) }
    this.ghosts = this.initializeGhosts()
    this.dots = this.initializeDots()
    this.score = 0
    this.direction = { x: 1, y: 0 }
    this.gameOver = false
    this.gameSpeed = 400

    // Configure terminal input
    readline.emitKeypressEvents(process.stdin)
    process.stdin.setRawMode(true)
    process.stdin.on('keypress', (_, key) => this.handleKeyPress(key))
  }

  private initializeDots(): Point[] {
    const dotsArray: Point[] = []
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (
          Math.random() < 0.3 &&
          !(x === this.pacman.x && y === this.pacman.y)
        ) {
          dotsArray.push({ x, y })
        }
      }
    }

    return dotsArray
  }

  private initializeGhosts(): Point[] {
    return [
      { x: 1, y: 1 },
      { x: this.width - 2, y: 1 },
      { x: 1, y: this.height - 2 },
      { x: this.width - 2, y: this.height - 2 },
    ]
  }

  private draw(): void {
    console.clear()
    let display = ''
    for (let y = 0; y < this.height; y++) {
      let row = ''
      for (let x = 0; x < this.width; x++) {
        if (x === this.pacman.x && y === this.pacman.y) {
          row += 'O' // Pac-Man
        } else if (
          this.ghosts.some((ghost) => ghost.x === x && ghost.y === y)
        ) {
          row += 'X' // Ghosts
        } else if (this.dots.some((dot) => dot.x === x && dot.y === y)) {
          row += '·' // Dots
        } else {
          row += ' ' // Empty space
        }
      }
      display += row + '\n'
    }
    console.log(display)
    console.log(`Score: ${this.score}`)
  }

  private movePacman(): void {
    this.pacman.x = this.wrap(this.pacman.x + this.direction.x, this.width)
    this.pacman.y = this.wrap(this.pacman.y + this.direction.y, this.height)
    this.eatDots()
  }

  private eatDots(): void {
    this.dots = this.dots.filter((dot) => {
      if (dot.x === this.pacman.x && dot.y === this.pacman.y) {
        this.score++

        return false
      }

      return true
    })

    if (this.dots.length === 0) {
      this.gameOver = true
      console.log(`You Win! Final Score: ${this.score}`)
      process.exit()
    }
  }

  private moveGhosts(): void {
    this.ghosts = this.ghosts.map((ghost) => {
      const dx = Math.sign(this.pacman.x - ghost.x)
      const dy = Math.sign(this.pacman.y - ghost.y)
      if (Math.random() < 0.5) {
        return { x: this.wrap(ghost.x + dx, this.width), y: ghost.y }
      } else {
        return { x: ghost.x, y: this.wrap(ghost.y + dy, this.height) }
      }
    })
  }

  private checkCollisions(): void {
    if (
      this.ghosts.some(
        (ghost) => ghost.x === this.pacman.x && ghost.y === this.pacman.y,
      )
    ) {
      this.gameOver = true
      console.log(`Game Over! Final Score: ${this.score}`)
      process.exit()
    }
  }

  private wrap(value: number, max: number): number {
    return (value + max) % max
  }

  private gameLoop(): void {
    if (this.gameOver) {
      return
    }

    this.movePacman()
    this.moveGhosts()
    this.checkCollisions()
    this.draw()

    setTimeout(() => this.gameLoop(), this.gameSpeed)
  }

  private handleKeyPress(key: { name: string; ctrl: boolean }): void {
    if (key.ctrl && key.name === 'c') {
      process.exit()
    }

    switch (key.name) {
      case 'up':
        if (this.direction.y === 0) this.direction = { x: 0, y: -1 }
        break
      case 'down':
        if (this.direction.y === 0) this.direction = { x: 0, y: 1 }
        break
      case 'left':
        if (this.direction.x === 0) this.direction = { x: -1, y: 0 }
        break
      case 'right':
        if (this.direction.x === 0) this.direction = { x: 1, y: 0 }
        break
    }
  }

  public start(): void {
    console.log('Welcome to Pac-Man Game! Use arrow keys to play.')
    this.draw()
    this.gameLoop()
  }
}

// Start the game
const game = new PacManGame()
game.start()
