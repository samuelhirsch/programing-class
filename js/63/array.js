'use strict';
const letters = ['A', 'B', 'C'];
function myevery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }
    return true;
}
function uppercase(letter) {
    return letter === letter.toUpperCase();
}
function lowercase(letter) {
    return letter === letter.toLowerCase();
}

console.log(myevery(letters, uppercase));

console.log(myevery(letters, lowercase));

console.log(letters.every(uppercase));

console.log(letters.every(lowercase));



function mysome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }
    return false;
}
console.log(mysome(letters, uppercase));

console.log(mysome(letters, lowercase));

console.log(letters.some(uppercase));

console.log(letters.some(lowercase));

const amount = [73, 10, 20, 14, 35, 80, 5];

function test(amount) {
    return amount >= 30;
}
function action(amount) {
    console.log(amount);
}

function onlyif(array, test, action) {
    for (let i = 0; i < array.length; i++)
        if (test(array[i])) {
            action(array[i]);
        }
}
onlyif(amount, test, action);

function onlyif2(array, test, action) {
    const filteramount = array.filter(test);
    filteramount.forEach(action);
}
onlyif2(amount,test,action);

