// File learncondition.js
// Conditional branch statement

/*-----------Syntax--------------*/
// 1. if <condition>
//    {block statement}

// 2. if <condition>  
//    {block statement 1}
//   else {block statement 2}

// 3. if <condition 1>
//    {block statement 1}
//   else if <condition 2>
//    {block statement 2}
//   ...
//   else {block statement n}

var a=4;b=5;
var max;
max=a;
if (a<b) {
    max=b;
}
console.log("Max a and b: ",max);

// Condition if-else
if (a<b){
    max=a;
}
else{
    max=b;
}

// Condition if-else if-else

var k=-1;
if (k==6) {
    console.log(k,"is a number equal to 6");
}
else if (k>6) {
    console.log(k,"is a number greater than 6");
}
else if (0<k<6) {
    console.log(k,"is a number less than 6");
}
else{
    console.log(k,"is a number nagetive");
}