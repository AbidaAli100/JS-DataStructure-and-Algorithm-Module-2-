/*
    Implement following methods:
clear: a method that clears stack
toString: a method that converts all members of stack into string
*/

class Stack {
    constructor() {
        this.items = [21, 23, 34, 30];
        this.size = 0;
    }

    clear() {
        this.items = []
        this.size = 0;
        return this.items
    }
    toStringMethod() {
        let str;
        str = this.items.toString();
    }
}

let myStack = new Stack()
console.log(myStack.clear());
console.log(myStack.toString());