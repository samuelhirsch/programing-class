//(function(){
'use strict';
const VehicleFunctions = {
    go(speed) {
        this.speed = speed;
        console.log(`Now going at speed ${this.speed}`);
    },
    print() {
        console.log(`My color is '${this.color}' and my speed is '${this.speed}'`);
    }
};
function Vehicle(color) {
    this.color = color;
}


function Plane(color) {
    Vehicle.call(this, color);

}
Vehicle.prototype = VehicleFunctions;
//Vehicle.prototype.constructor=Vehicle;

Plane.prototype = Object.create(Vehicle.prototype);
Plane.prototype.go = function(speed) {
    this.speed = speed;
    console.log(`Now flying at speed ${this.speed}`);
};


const blueCar = new Vehicle('blue');
blueCar.go(70);
blueCar.print();

const redCar = new Vehicle('red');
redCar.go(55);
redCar.print();
console.log(blueCar, redCar);

const bluePlane = new Plane('blue');
bluePlane.go(650);
bluePlane.print();

const redPlane = new Plane('red');
redPlane.go(750);
redPlane.print();
console.log(bluePlane, redPlane);
//}());