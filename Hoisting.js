console.log(a); // undefined
var a = 5;
console.log(a); // 5

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log(b); // 10

hoistedFunction(); // "This function is hoisted"

function hoistedFunction() {
  console.log("This function is hoisted");