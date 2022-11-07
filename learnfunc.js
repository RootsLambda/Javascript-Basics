// File learnfunc.js
// Show us function basics

/*-----------Syntax--------------*/
// function <name funcion>(variable1, variable2, .....) {
//       <Statement>
// return value 
// }

/*-----------Note--------------*/
// 1. The return value may or may not be
// 2. Using the argument keyword can pass multiple arguments to the function

function add(x,y) {
    return x+y
}

console.log("Result add: ",add(1,2));

function display(message) {
    console.log(message);
}

display("This letter from the company just sent to you");

function sequence() {
    console.log(arguments);
}
sequence("This","is","a","apple");


