// File learnarry.js
// Concept array Javascript

/*-----------Syntax--------------*/
// var <name_array> = [element 1, element 2, ...];

// Traversal array one dimensional
var A=[1,2,3,4];
for (var i=0;i<A.length;i++){
    console.log(A[i]);
}

var householditems=[
    "Fan",
    "Pillow",
    "Bed",
    "Mattress"
]
for (var i=0; i<householditems.length;i++) {
    console.log(householditems[i]);

}

// Traversal array two dimensional
var B=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for (var i=0;i<B.length;i++) {
    for(var j=0;j<B[i].length;j++){
        console.log(B[i][j]);
    }
}