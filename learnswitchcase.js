// File learnswitchcase.js
// No condition branch statement

/*-----------Syntax--------------*/
// switch <expression>{
// case value 1: block 1;
// case value 2: block 2;
// ....
// default:
//     block 0;
// }

var date=2;

switch (date) {
    case 2:
        console.log("Today is Monday");
        break;
    case 3:
        console.log("Today is Tuesday");
        break;
    case 4:
        console.log("Today is Wednesday");
        break;
    default:
        console.log("Don't know");
        break;
    
}