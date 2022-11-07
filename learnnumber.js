// File learnnumber.js
// Some methods when working with numbers

/*-----------Note--------------*/
// 1. Create number keyword new Number
// 2. isFinite(): determines whether a given number is finite or not
// 3. isInteger(): check if it is an integer
// 4. parseFloat(): convert data type to float number
// 5. parseInt(): convert data type to interger number
// 6. toFixed(): accuracy after dot
// 7. toString(): covert data type to string
// 8. isNAN(): check if it is a none at null
 
var a=new Number(9);

console.log(Number.isFinite(2/0));

console.log(Number.isInteger(9));

console.log(Number.parseFloat('4'));

console.log(Number.parseInt(19.2));

var b=23.44859;

console.log(b.toFixed());

console.log(b.toFixed(1));

console.log(b.toString());

console.log(isNaN(b));




