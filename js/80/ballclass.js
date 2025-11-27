'use strict';
class BallClass {
    static theCanvas = document.querySelector('#theCanvas');
    static context = BallClass.theCanvas.getContext('2d');
    dx = 1;
    dy = 2.5;
    colorArray = ['red', 'blue', 'yellow', 'orange'];
    constructor(radius, color) {
        this.RADIUS = Number(radius);
        this.color = color;
        this.x = this.RADIUS + 1;
        this.y = this.RADIUS + 1;
        this.colorFull = false;
    }

    draw() {
        BallClass.context.beginPath();

        BallClass.context.fillStyle = !this.colorFull ? this.color : this.randomColors();

        this.x += this.dx;
        this.y += this.dy;

        if (this.x < this.RADIUS + 1 || this.x >= BallClass.theCanvas.width - (this.RADIUS + 1)) {
            if (this.x >= BallClass.theCanvas.width - (this.RADIUS + 1) && this.dx === -1) {
                this.x = BallClass.theCanvas.width - (this.RADIUS + 1);
            }
            else if (this.x < this.RADIUS + 1 && this.dx === 1) {
                this.x = this.RADIUS + 1;
            }
            else {
                this.dx = -this.dx;
            }
        }

        if (this.y < this.RADIUS + 1 || this.y >= BallClass.theCanvas.height - (this.RADIUS + 1)) {
            if (this.y >= BallClass.theCanvas.height - (this.RADIUS + 1) && this.dy === -2.5) {
                this.y = BallClass.theCanvas.height - (this.RADIUS + 1);
            }
            else if (this.y < this.RADIUS + 1 && this.dy === 2.5) {
                this.y = this.RADIUS + 1;
            }
            else {
                this.dy = - this.dy;
            }
        }

        BallClass.context.arc(this.x, this.y, this.RADIUS, 0, 2 * Math.PI);
        BallClass.context.fill();
    }
    counterForRandom = 0;
    changeColorForRandom = 0;
    randomColors() {
        this.counterForRandom++;
        if (this.counterForRandom === 100) {
            this.counterForRandom = 0;
            this.changeColorForRandom++;
            if (this.changeColorForRandom === this.colorArray.length) {
                this.changeColorForRandom = 0;
            }
        }
        return this.colorArray[this.changeColorForRandom];
    }
    static resizeCanvas() {
        BallClass.theCanvas.width = window.innerWidth;
        BallClass.theCanvas.height = window.innerHeight;
    }
}
