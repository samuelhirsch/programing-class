 window.app=window.app || {} ;
(function () {
    'use strict';
    let createdcounters = 0;

      window.app.createCounter=function () {
            let count = 0;
            createdcounters++;
            return {
                getCount() {
                    return count;
                },
                increment() {
                    count++;
                },
                getCreatedCounters(){
                    return createdcounters;
                }
            };
        };
   
}());
