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
            console.log(true + " it is Empty");
        } else {
            console.log(false + " it is not Empty")
        }
    }
    isFull() {
        if (this.item !== 0) {
            console.log(true + "  it is Full");
        } else {
            console.log(false + " it is not Full")
        }
    }
}

let myStack = new stack();
myStack.isEmpty();
myStack.isFull();

//FALSE