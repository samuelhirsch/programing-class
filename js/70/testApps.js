/* global app*/ 
(function () {
    'use strict';
    
    app.counter.increment();
    app.counter.increment();
    app.counter.increment();
    app.counter.increment();
    app.counter.increment();
    app.counter.increment();
    app.counter.increment();
    app.counter.increment();
    app.counter.increment();
    app.counter.increment();

    const counter1 = app.createCounter();
    counter1.increment();
    counter1.increment();
    counter1.increment();
    counter1.increment();
    counter1.increment();

    const counter2 = app.createCounter();
    counter2.increment();
    counter2.increment();
    counter2.increment();
    counter2.increment();
    counter2.increment();
    counter2.increment();
    counter2.increment();
    counter2.increment();
    counter2.increment();
    counter2.increment();
    counter2.increment();
    counter2.increment();
    counter2.increment();
    counter2.increment();
    counter2.increment();
    console.log(app.counter.getCount());
    console.log(counter1.getCount());
    console.log(counter2.getCount());

}());