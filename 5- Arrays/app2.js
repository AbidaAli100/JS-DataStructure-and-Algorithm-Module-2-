/*
    Suppose you are given an array: [9, 7, 75, 32, 3234, 5, 3] .
     Find whether 3 is present in the given array.
     If it’s there return true otherwise return false
*/

let array = [9, 7, 75, 32, 3234, 5, 3];

for (let i = 0; i < array.length; i++) {
    if (array[i] === 3) {
        console.log("Yes 3 includes in the array");
        return true
    } else {
        console.log("3 does not include");
        return false;
    }
}


// The output will be like
/*
3 does not include
3 does not include
3 does not include
3 does not include
3 does not include
3 does not include
Yes 3 includes in the array
*/