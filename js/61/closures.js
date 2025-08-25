'use strict';
function multiply(a,b){
    return a*b;
};
console.log( multiply(2,3));
console.log( multiply(10,3));
console.log( multiply(32,2));

function getmultiplier(){
    return function(a,b){
       return a*b;
    };
}
const themultiplier=getmultiplier();
console.log(themultiplier(5,5));
console.log(themultiplier(10,5));
console.log(themultiplier(6,6));

function TheGetMultiplier(a){
    return function(b){
        return a*b;
    };
}
const multiplyByFive=TheGetMultiplier(5);
console.log(multiplyByFive(2)) ;
const multiplyBySix=TheGetMultiplier(6);
console.log(multiplyBySix(2));