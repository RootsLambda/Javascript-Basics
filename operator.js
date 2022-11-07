// File operator.js
// Introduction to common operators in Javascript

/*-------------Note------------*/
// 1. Variables need to be declared keyword var
// 2. The 'and' operator takes precedence on the right-hand side for the number
// 3. The 'or' operator takes precedence on the left-hand side for the number
// 4. '===' absolute equality operator compares value and data type
// 5. '!==' absolute diff operator compares value and data type

// Arithmetic expression

var a=2; b=5;
console.log("Add: ",a+b);
console.log("Subtract: ",a-b);
console.log("Mutily: ",a*b);
console.log("Divide: ",a/b);

// Comparison expression

var c=4.2; d=5.7;
console.log("Operator '>' is greater: ",c>d);
console.log("Operator '<' is less: ",c<d);
console.log("Operator '==' is equality: ",c==d);
console.log("Operator '!=' is not equality: ",c!=d);

// Logical operator

var e=45.3; f= 4.3;
console.log("NOT is '!': ",!e);
console.log("AND is '&&': ",e&&f);
console.log("OR is '||': ",e||f);

// Complex expression
var r=3;
var area=3.14*r*r;
console.log("Area is cricle: ",area);

// Absolute comparison
var g='1';
var h=1;
console.log(g==h); // True
console.log(g===h); // False
console.log(g!=h); // False
console.log(g!==h); // True


