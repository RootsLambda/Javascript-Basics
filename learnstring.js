// File learnstring.js
// Introduce some methods when working with string data type

/*-------------Note------------*/
// 1. Use the new keyword to allocate memory for data
// 2. toUpperCase(): capitalize all characters in the string
// 3. toLowerCase(): lowercase all characters in string
// 4. length: get the length of the string
// 5. `${string_format}`: format a string into a template
// 6. indexOf(): get the index position of that character
// 7. slice(): perform string cutting from start index to end index
// 8. replace(): perform a character replacement with another character in a string
// 9. trim(): remove trailing whitespace from a string
// 10. split(): cut a string based on a certain character, the result is an array

var name="Lambda";
var name= new String("Lambda");

console.log(name.toUpperCase());

console.log(name.toLowerCase());

console.log(name.length);

console.log(`Name is: ${name}`);

console.log(name.indexOf("L"));

console.log(name.slice(3,5));

console.log(name.replace("a",'o'))

console.log(name.trim());

var subject="Caculus, Agebra,Number Theory";

console.log(subject.split(','));




