
'use strict';
const gameAudio = document.querySelector('#game-audio');
const gameOverMessage = document.querySelector('#game-over-messege');
const playAgainButton = document.querySelector('#yes-button');
const theCanvas = document.querySelector('#theCanvas');
const context = theCanvas.getContext('2d');
let score = 0;
let speed = 500;
let gameOver = false;
const CellSize = 64;
resizeCanvas();
const snake = {
  direction: 'ArrowRight',
  snakeArray: [{ x: -64, y: 0 }],
  head() {
    return this.snakeArray[0];
  }
};
console.log(snake.head());
const apple = {
  x: getPositionForApple('x'),
  y: getPositionForApple('y')
};

let appleReady = false;
const appleImage = document.createElement('img');
appleImage.src = 'apple.png';
appleImage.onload = () => {
  appleReady = true;
};
function resizeCanvas() {
  theCanvas.width = window.innerWidth - (window.innerWidth % CellSize);
  theCanvas.height = window.innerHeight - (window.innerHeight % CellSize);
}
window.addEventListener('resize', resizeCanvas);



const snakeHead = document.createElement('img');
snakeHead.src = 'snakeHead.png';
let intervel;
startGame();
function startGame() {
  if (!intervel) {
    snakeHead.onload = start;
  }
  else {
    snake.head().x = -CellSize;
    snake.head().y = 0;
    snake.direction = 'ArrowRight';
    start();
  }
};
function start() {
  intervel = setInterval(() => {
    context.clearRect(0, 0, theCanvas.width, theCanvas.height);
    if (appleReady) {
      context.drawImage(appleImage, apple.x, apple.y);
    }
    context.font = '30px Arial';
    context.fillText(`Score :${score}`, 10, 30);
    let tempX = snake.head().x;
    let tempY = snake.head().y;
    switch (snake.direction) {
      case 'ArrowRight':
        tempX += CellSize;
        break;
      case 'ArrowLeft':
        tempX -= CellSize;
        break;
      case 'ArrowUp':
        tempY -= CellSize;
        break;
      case 'ArrowDown':
        tempY += CellSize;
        break;
    }
    if (!(tempX >= theCanvas.width || tempX < 0 ||
      tempY >= theCanvas.height || tempY < 0)) {
      const newhead = snake.snakeArray.pop();
      newhead.x = tempX;
      newhead.y = tempY;
      snake.snakeArray.unshift(newhead);
    }
    else {
      gameAudio.src = "snake_dramatic_death.wav";
      gameAudio.play();
      score = 0;
      clearInterval(intervel);
      gameOverMessage.style.display = 'inline';
    }
    context.fillStyle = 'green';
    for (let i = 1; i < snake.snakeArray.length; i++) {
      context.fillRect(snake.snakeArray[i].x, snake.snakeArray[i].y, CellSize, CellSize);
    }
    context.drawImage(snakeHead, snake.head().x, snake.head().y);
    if (appleReady && apple.x === snake.head().x && apple.y === snake.head().y) {
      snake.snakeArray.push({ });
      gameAudio.src = 'snake_cute_pop.wav';
      gameAudio.play();
      score++;
      newPositionApple();
      clearInterval(intervel);
      speed -= 2;
      start();
    }
  }, speed);
};

document.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowRight':
    case 'ArrowLeft':
    case 'ArrowUp':
    case 'ArrowDown':
      snake.direction = e.key;
      break;
    default:
      console.log(e.key, 'is not a supported key');
  }
});
function getPositionForApple(pos) {
  let number = pos === 'x' ? Math.floor((Math.random() * theCanvas.width + 1))
    : Math.floor((Math.random() * theCanvas.height + 1));
  return number - number % CellSize;
}
function newPositionApple() {
  apple.x = getPositionForApple('x');
  apple.y = getPositionForApple('y');
  //console.log(apple.x, apple.y);
}
playAgainButton.addEventListener('click', () => {
  snake.snakeArray = [{}];
  startGame();
  speed = 500;
  gameOverMessage.style.display = 'none';
});
//}());