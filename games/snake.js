import { emitKeypressEvents } from 'readline'
import { stdin as input, stdout as output } from 'process'

// Terminal configuration
emitKeypressEvents(input)
input.setRawMode(true)

// Game configuration
const width = 20
const height = 20
let snake = [{ x: 2, y: 2 }]
let direction = { x: 1, y: 0 }
let food = spawnFood()
let score = 0
let gameOver = false
let speed = 500

// Draw the game state
function draw() {
  output.write('\x1B[2J\x1B[0f')
  for (let y = 0; y < height; y++) {
    let row = ''
    for (let x = 0; x < width; x++) {
      if (snake.some((segment) => segment.x === x && segment.y === y)) {
        row += 'O' // Snake
      } else if (food.x === x && food.y === y) {
        row += 'X' // Food
      } else {
        row += '.' // Empty space
      }
    }
    console.log(row)
  }
  console.log(`Score: ${score}`)
}

// Move the snake
function moveSnake() {
  const newHead = {
    x: wrap(snake[0].x + direction.x, width),
    y: wrap(snake[0].y + direction.y, height),
  }

  if (isCollision(newHead)) {
    gameOver = true
    return
  }

  snake.unshift(newHead)

  if (newHead.x === food.x && newHead.y === food.y) {
    score++
    food = spawnFood()
    speed = Math.max(100, speed - 10) // Increase speed
  } else {
    snake.pop()
  }
}

function isCollision(position) {
  return snake.some(
    (segment) => segment.x === position.x && segment.y === position.y,
  )
}

function wrap(value, max) {
  return (value + max) % max
}

function spawnFood() {
  return {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
  }
}

// Game loop
function gameLoop() {
  if (gameOver) {
    console.log('Game Over!')
    process.exit()
  } else {
    moveSnake()
    draw()
    setTimeout(gameLoop, speed)
  }
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
