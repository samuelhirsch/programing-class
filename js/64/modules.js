'use strict';


const DAYOFWEEK=(function(){
const DAYS=['Sunday','Monday','Tuesday','Wednsday','Thursday','Friday','Saturday'];
return{
 getDayname(number){
 return DAYS[number-1];
},
 getDaynumber(day){
 return DAYS.findIndex(d=>d===day)+1;
  }
 };
}());

console.log(DAYOFWEEK.getDayname(3));
console.log(DAYOFWEEK.getDaynumber('Friday'));

const CALCULATOR =(function(){
 let interestrate=0;
 let years=0;
 return{
     setrate(rate){
      interestrate=rate;
      return this;
     },
     setyear(numberofyears){
       years=numberofyears;
       return this;
     },
     calculateinterest(principal){
       return principal * interestrate * years; 
     }
 };
}());
console.log(CALCULATOR.setrate(0.05).setyear(5).calculateinterest(20000));





