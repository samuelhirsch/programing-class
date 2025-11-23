(function () {
  'use strict';
  const gameAudio = document.querySelector('#game-audio');
  const gameOverMessage = document.querySelector('#game-over-messege');
  const playAgainButton = document.querySelector('#yes-button');
  const theCanvas = document.querySelector('#theCanvas');
  const context = theCanvas.getContext('2d');
  let score = 0;
  let speed=500;
  const snake = {
    SNAKE_SIZE: 64,
    x: -64,
    y: 0,
    direction: 'ArrowRight'
  };
  const apple = {
    APPLE_SIZE: 64,
    x: 64,
    y: 64
  };
  let appleReady = false;
  const appleImage = document.createElement('img');
  appleImage.src = 'apple.png';
  appleImage.onload = () => {
    appleReady = true;
  };
  function resizeCanvas() {
    theCanvas.width = window.innerWidth - (window.innerWidth % snake.SNAKE_SIZE);
    theCanvas.height = window.innerHeight - (window.innerHeight % snake.SNAKE_SIZE);
  }


  window.addEventListener('resize', resizeCanvas);

  resizeCanvas();

  const snakeHead = document.createElement('img');
  snakeHead.src = 'snakeHead.png';
  let intervel;
  startGame();
  function startGame() {
    if (!intervel) {
      snakeHead.onload = start;
    }
    else {
      snake.x = -snake.SNAKE_SIZE;
      snake.y = 0;
      snake.direction = 'ArrowRight';
      start();
    }
  };
  function start() {
    intervel = setInterval(() => {
      console.log(intervel);
      context.clearRect(0, 0, theCanvas.width, theCanvas.height);

      switch (snake.direction) {
        case 'ArrowRight':
          snake.x += snake.SNAKE_SIZE;
          break;
        case 'ArrowLeft':
          snake.x -= snake.SNAKE_SIZE;
          break;
        case 'ArrowUp':
          snake.y -= snake.SNAKE_SIZE;
          break;
        case 'ArrowDown':
          snake.y += snake.SNAKE_SIZE;
          break;
      }
      context.font = '20px Arial';
      context.fillText(`Score :${score}`, 0, 20);
      context.drawImage(snakeHead, snake.x, snake.y);
      if (appleReady) {
        context.drawImage(appleImage, apple.x, apple.y);
      }
      if (appleReady && apple.x === snake.x && apple.y === snake.y) {
        gameAudio.src = 'snake_cute_pop.wav';
        gameAudio.play();
        score++;
        newPositionApple();
      clearInterval(intervel);
        speed-=2;
        start();
      }
      context.font = '20px';
      context.fillText(`Score :${score}`, 0, 20);
      if (snake.x >= theCanvas.width || snake.x < 0 || snake.y >= theCanvas.height || snake.y < 0) {
        gameAudio.src = "snake_dramatic_death.wav";
        gameAudio.play();
        score = 0;
        clearInterval(intervel);
        gameOverMessage.style.display = 'inline';
      }
    }, speed);
  };

  document.addEventListener('keydown', e => {
    console.log(e);
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
    let number = pos === 'x' ? Math.floor((Math.random() * theCanvas.width + 1)) : Math.floor((Math.random() * theCanvas.height + 1));
    return number - number % apple.APPLE_SIZE;
  }
  function newPositionApple() {
    apple.x = getPositionForApple('x');
    apple.y = getPositionForApple('y');
    console.log(apple.x, apple.y);

  }


  playAgainButton.addEventListener('click', () => {
    startGame();
    speed=500;
    gameOverMessage.style.display = 'none';
  });
}());