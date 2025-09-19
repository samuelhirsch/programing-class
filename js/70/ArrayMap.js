(function () {
    'use strict';
    const array = [2, 4, 6];

    const doubleArray = mymap(array, myDoubleMethod);

    console.log(array);
    console.log(doubleArray);

    function mymap(array, callback) {
        const newarray = [];
        for (let i = 0; i < array.length; i++) {
            newarray.push(callback(array[i]));
        };
        return newarray;
    }

    function myDoubleMethod(number) {
        return number * 2;
    }
}());