/* 
 Consider the situation in which you are required to 
 check if a number is 1 or 0. If it’s 1 you need to print true. 
 Otherwise, you should print false.
*/

// if-else condition

var number = 1 || 0;


if (number == 1) {
    console.log(true)
}
else {
    console.log(false)
}



//switch-case

switch (number) {
    case 0:
        number == 1;
        console.log("case 0 is true");
        break;

    case 1:
        number = 2;
        console.log("case 1 is true");
        break;

    default:
        console.log("not found");
}
