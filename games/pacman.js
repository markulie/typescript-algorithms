import { emitKeypressEvents } from 'readline'
import { stdin as input, stdout as output } from 'process'

// Terminal configuration
emitKeypressEvents(input)
input.setRawMode(true)

// Game configuration
const width = 20
const height = 20
let pacman = { x: Math.floor(width / 2), y: Math.floor(height / 2) }
let ghosts = initializeGhosts()
let dots = initializeDots()
let score = 0
let direction = { x: 1, y: 0 }
let gameOver = false
let gameSpeed = 400

// Initialize dots randomly
function initializeDots() {
  const dotsArray = []
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (Math.random() < 0.3 && !(x === pacman.x && y === pacman.y)) {
        // 30% chance of dot
        dotsArray.push({ x, y })
      }
    }
  }
  return dotsArray
}

// Initialize ghosts at corners
function initializeGhosts() {
  return [
    { x: 1, y: 1 },
    { x: width - 2, y: 1 },
    { x: 1, y: height - 2 },
    { x: width - 2, y: height - 2 },
  ]
}

// Draw the game state
function draw() {
  output.write('\x1B[2J\x1B[0f')
  let display = ''
  for (let y = 0; y < height; y++) {
    let row = ''
    for (let x = 0; x < width; x++) {
      if (x === pacman.x && y === pacman.y) {
        row += 'O' // Pac-Man
      } else if (ghosts.some((ghost) => ghost.x === x && ghost.y === y)) {
        row += 'X' // Ghosts
      } else if (dots.some((dot) => dot.x === x && dot.y === y)) {
        row += '·' // Dots
      } else {
        row += ' ' // Empty space
      }
    }
    display += row + '\n'
  }
  console.log(display)
  console.log(`Score: ${score}`)
}

// Move Pac-Man
function movePacman() {
  pacman.x = wrap(pacman.x + direction.x, width)
  pacman.y = wrap(pacman.y + direction.y, height)

  eatDots()
}

// Eat dots
function eatDots() {
  dots = dots.filter((dot) => {
    if (dot.x === pacman.x && dot.y === pacman.y) {
      score++
      return false
    }
    return true
  })

  if (dots.length === 0) {
    gameOver = true
    console.log(`You Win! Final Score: ${score}`)
    process.exit()
  }
}

// Move ghosts towards Pac-Man
function moveGhosts() {
  ghosts = ghosts.map((ghost) => {
    let dx = Math.sign(pacman.x - ghost.x)
    let dy = Math.sign(pacman.y - ghost.y)
    if (Math.random() < 0.5) {
      return { x: wrap(ghost.x + dx, width), y: ghost.y }
    } else {
      return { x: ghost.x, y: wrap(ghost.y + dy, height) }
    }
  })
}

// Check for collisions with ghosts
function checkCollisions() {
  if (ghosts.some((ghost) => ghost.x === pacman.x && ghost.y === pacman.y)) {
    gameOver = true
    console.log(`Game Over! Final Score: ${score}`)
    process.exit()
  }
}

// Wrap function to handle screen edges
function wrap(value, max) {
  return (value + max) % max
}

// Game loop
function gameLoop() {
  if (gameOver) {
    return
  }

  movePacman()
  moveGhosts()
  checkCollisions()
  draw()

  setTimeout(gameLoop, gameSpeed)
}

// Handle key presses
input.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit()
  } else {
    switch (key.name) {
      case 'up':
        if (direction.y === 0) direction = { x: 0, y: -1 }
        break
      case 'down':
        if (direction.y === 0) direction = { x: 0, y: 1 }
        break
      case 'left':
        if (direction.x === 0) direction = { x: -1, y: 0 }
        break
      case 'right':
        if (direction.x === 0) direction = { x: 1, y: 0 }
        break
    }
  }
})

// Start the game
draw()
gameLoop()
