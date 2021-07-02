/*
  Suppose you are given a string: ‘Karachi’. 
  Convert it to ‘Kolachi’ (Hint: Need to look
 at appropriate indices and replace them)
*/

let city = "Karachi";
String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

//replacing "a" into "o"
city = city.replaceAt(1, 'o');
console.log(city);


String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

//replacing "r" into "l"
city = city.replaceAt(2, 'l');
console.log(city);