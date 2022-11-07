// File methodarray.js
// Introduce some methods when working with arrays

/*-------------Note------------*/
// 1. toString(): convert array data type to string
// 2. join(): joins array elements together based on template and returns a string
// 3. pop(): pick the last element of the array
// 4. push(): add element to the end of array
// 5. shift(): pick the first element of the array
// 6. unshift(): add element to first element of array
// 7. splice(): from the pointer position delete the n elements
// 8. concat(): concatnate two arrays together
// 9. slice(): slice array into sub-arrays

var luggage=['shirt','trousers','sock','hat'];

console.log(luggage.toString());

console.log(luggage.join(' '));

console.log(luggage.pop());

console.log(luggage.push('glove'));

console.log(luggage.shift());

console.log(luggage.unshift('towel'));

console.log(luggage.splice(1,2));

var airport=['HAN','SGN','DAD'];

console.log(luggage.concat(airport));

console.log(luggage.slice(1));

