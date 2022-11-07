// File foradvanced.js
// Learn some commands with advanced for

/*-----------Syntax--------------*/
// for(var key in array or object) {
//     <statement>
// }

// for(var value of array) {
//     <statement>
// }

/*-------------Note------------*/
// 1. Statement for - in is used to get the key that is the index of the array and the key for the object
// 2. Statement for of is used to get array values 
// 3. Object.keys(): used to convert object to array


var languages = [
    'Javascripts',
    'PHP',
    'HTML',
    'CSS'
];

for(var key in languages) {
    console.log(languages[key]);
}

var info={
    name:'Lambda',
    age: 21,
    address: 'Long An'
}

for(var key in info) {
    console.log(key);
}

for (var value of languages) {
    console.log(value);
}

for (var value of Object.keys(info)) {
    console.log(value);
}
