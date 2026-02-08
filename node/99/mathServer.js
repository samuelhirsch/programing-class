import express from "express";
const app = express();

app.param(["number1", "number2"], (req, res, next,value,name) => {
 const num =Number(value);
  if (isNaN(num))  {
    res.status(500);
    res.send(`The value for ${name} is not a valid number.`);
    return;
  }
 req.params[name]=num;
  next();

})
app.get("/add/:number1/:number2", (req, res, next) => {
 const { number1, number2 } = req.params;
 res.status(200);
 res.send(` ${number1}+${number2} = ${number1+number2}`);
});
app.get("/subtract/:number1/:number2", (req, res, next) => {
  const { number1, number2 } = req.params;
 res.status(200);
 res.send(` ${number1}-${number2} = ${number1-number2}`);

});
app.get("/calculate/:number1/:number2/:oparator", (req, res, next) => {
const { number1, number2, oparator } =req.params;
let result;
switch(oparator){
case "+":
  result=number1+number2;
  break;
  case "-":
  result=number1-number2;
  break;
  case "*":
  result=number1*number2;
  break;
   case "/":
    if (number2 === 0) return res.status(400).send("Cannot divide by zero");
  result=number1/number2;
  break;
  default:
      return res.status(400).send("Invalid operator. Use + - /(%2f8) or * as a oparator");
};
res.status(200);
res.send(`The result for ${number1}${oparator}${number2} is ${result}`);

});
app.use((req, res, next) => {
 res.status(200);
 res.send("somthing is wrong please make sure that the inputs are correct");
});
app.listen(80);
