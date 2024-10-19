const originalArray = [1, 2, 3, { a: 4 }];
const shallowCopyArray = [...originalArray];

shallowCopyArray[3].a = 5;
console.log(originalArray[3].a); // 5
console.log(shallowCopyArray[3].a); // 5