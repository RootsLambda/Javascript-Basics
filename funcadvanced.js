// File funcadvanced.js
// Learn some ways to write advanced functions

/*----------Note----------*/
// 1. Expression function: must define first to call
// 2. Declaration function: can call before definition
// 3. Callback: The function argument can be a function
// 4. Nested function: Functions can be nested and call back to themselves

var message=function() {
    console.log('This is expression function');
}
message();

messagebox();
function messagebox() {
    console.log("This is declaration function");
}

function printmessage(parameter){
     parameter('Functional')
}

function analysis(m){
    console.log('Comment: ',m)
}

printmessage(analysis);

function func1() {
    console.log("This function 1")
    function func2() {
        console.log('This function 2')
    }
    return func2()
}

func1();