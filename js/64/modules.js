'use strict';


const DAYOFWEEK = (function () {
  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'];
  return {
    getDayname(number) {
      return DAYS[number - 1];
    },
    getDaynumber(day) {
      return DAYS.findIndex(d => d === day) + 1;
    }
  };
}());

console.log(DAYOFWEEK.getDayname(3));
console.log(DAYOFWEEK.getDaynumber('Friday'));

const CALCULATOR = (function () {
  let interestrate = 0;
  let years = 0;
  return {
    setrate(rate) {
      interestrate = rate;
      return this;
    },
    setyear(numberofyears) {
      years = numberofyears;
      return this;
    },
    calculateinterest(principal) {
      let amount = principal;
      for (let i = 0; i < years; i++) {
        amount +=amount*interestrate;
      }
      return amount - principal;
    }
  };
}());
console.log(CALCULATOR.setrate(.1).setyear(2).calculateinterest(100));





