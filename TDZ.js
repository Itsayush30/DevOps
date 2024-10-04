// Trying to access `a` before its declaration will result in a ReferenceError
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;
console.log(a); // 10

// Trying to access `b` before its declaration will result in a ReferenceError
console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 20;
console.log(b); // 20

// Function to demonstrate TDZ within a block scope
function checkTDZ() {
  // Trying to access `c` before its declaration will result in a ReferenceError
  console.log(c); // ReferenceError: Cannot access 'c' before initialization
  let c = 30;
  console.log(c); // 30

  // Trying to access `d` before its declaration will result in a ReferenceError
  console.log(d); // ReferenceError: Cannot access 'd' before initialization
  const d = 40;
  console.log(d); // 40
}
checkTDZ();
