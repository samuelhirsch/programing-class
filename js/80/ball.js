/*global BallClass */
(function () {
    'use strict';
    const newBallButton = document.querySelector('#newball-button');
    const newBallDiv = document.querySelector('#newball-div');
    const newBallColor = document.querySelector('#newball-color');
    const newBallRadius = document.querySelector('#newball-radius');
    const createButton = document.querySelector('#Create-button');
    const theCanvas = document.querySelector('#theCanvas');
    const balls = [];
    newBallButton.addEventListener('click', () => {
        newBallDiv.style.display = 'flex';
    });
    createButton.addEventListener('click', () => {
        balls.push(new BallClass(newBallRadius.value, newBallColor.value));
        newBallDiv.style.display = 'none';
    });
    setInterval(moveBalls, 10);
    function moveBalls() {
        BallClass.context.clearRect(0, 0, theCanvas.width, theCanvas.height);
        balls.forEach(ball => {
            console.log(ball.RADIUS, ball.color);
            ball.draw();
        });
    }
    window.addEventListener('resize', BallClass.resizeCanvas);
    BallClass.resizeCanvas();
}());

