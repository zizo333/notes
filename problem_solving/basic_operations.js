console.log(basicOp("*", 3, 6));

function basicOp(operation, value1, value2) {
  //   switch (operation) {
  //     case "+":
  //       return value1 + value2;
  //     case "-":
  //       return value1 - value2;
  //     case "*":
  //       return value1 * value2;
  //     case "/":
  //       return value1 / value2;
  //   }
  return eval(value1 + operation + value2);
}

// console.log(basicOp(mult, 3, 6));

// function basicOp(operation, value1, value2) {
//   return operation(value1, value2);
// }

function sum(value1, value2) {
  return value1 + value2;
}
function sub(value1, value2) {
  return value1 - value2;
}
function divide(value1, value2) {
  return value1 / value2;
}
function mult(value1, value2) {
  return value1 * value2;
}
