/*
    Implement following methods:

 - isEmpty: 
 - isFull: 
*/
class stack {
    constructor() {
        this.item = ["Ali", "Haider"];
    }
    isEmpty() {
        if (this.item == 0) {
            console.log(true);
        } else {
            console.log(false)
        }

    }
}

let myStack = new stack();
myStack.isEmpty();

//FALSE