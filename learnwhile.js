// File learnwhile.js
// Introduce while loop and do while

/*-----------Syntax--------------*/
// 1. while (expression)
//  {
//   <statement>
//  }

// 2. do
// {
//   <statement 1>    
// }
// while (expression);

var x=5;
while (x<25) {
    x=2*x-1;
}
console.log("x: ",x)

var k=1, sum=0;
do{
    sum+=k;
    k++;
}
while (k<10);
console.log("Sum 1 to 10: ",sum);