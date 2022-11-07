// File recursion.js
// Introduction to recursive structures

/*-------------Note------------*/
// 1. Base clause
// 2. Recursive clause
// 3. Infinite recursion if it has no termination clause or base clause

function countdown(number) {
    if (number>0) {
        console.log(number);
        return countdown(number-1);
    }
    return number;
}

countdown(10);