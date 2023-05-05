import {SnakeSpeed, update as updateSnake, draw as DrawSnake} from './snake.js'

let lastRenderTime = 0
const gameBoard = document.getElementByID('game-board')

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SnakeSpeed) return 
    
    
    console.log('Render')
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
}