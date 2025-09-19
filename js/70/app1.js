 window.app = window.app || {};
(function () {
        'use strict';
        let count = 0;

        function getCount() {
            return count;
        }
        function increment() {
            count++;
        }
        window.app.counter = {
            getCount,
            increment
        };
}());







