/*
    Consider a string ‘Node.js’given to you.
     I want the last three characters removed. 
     How’d you do that?
*/

let str = "node.js";

var newStr = str.substring(0, str.length - 3);
console.log(newStr);