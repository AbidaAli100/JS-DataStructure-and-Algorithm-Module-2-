/*
    You are given a object of user’s details .
    Your task is to traverse the object and print its properties (both names and values).
 */
let userObject = {
    userName: "Philip",

    fatherName: "Norman",

    className: "four",
}
console.log(Object.keys(userObject));

//expected output 
// [ 'userName', 'fatherName', 'className' ]

console.log(Object.values(userObject));

//expected output
// [ 'Philip', 'Norman', 'four' ]