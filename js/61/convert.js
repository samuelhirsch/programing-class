'use strict';
const farenheit= prompt(`Please enter a number for farenheit 
and we will convert it to celsius`);

alert(`You enterd the number "${farenheit}" 
this will be in celsius the number ${FarenheitToCelsius(farenheit)}`);

const celsius= prompt(`Now enter a number for celsius
and we will convert it to farenheit`);

alert(`You enterd the number "${celsius}" 
this will be in farenheit the number ${CelsiusToFarenheit(celsius)}`);

function FarenheitToCelsius(farenheit){
    return ((Number(farenheit)-32)*5)/9;
}
console.log( FarenheitToCelsius(59));
console.log( FarenheitToCelsius(80));
console.log( FarenheitToCelsius(90));

function CelsiusToFarenheit(Celsius){
    return ((Number(Celsius)/5)*9)+32;
}
console.log(CelsiusToFarenheit(13));
console.log( CelsiusToFarenheit(56));
console.log( CelsiusToFarenheit(46));
