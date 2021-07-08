/*
    Implement following methods. 
    Don’t forget to increase and decrease the size when you add or remove an element 
    from the stack.
    */
// push: a method through that you can add a value to the stack
// peek: a method through which you can get the value on the top of stack
// pop: a method through which you can remove the first element of the stack


class stack {
    constructor() {
        this.item = ["Ali", "Haider"];
        this.size = 3;
    }
    push(item) {
        this.item.push(item);
        this.item.size + 1;

    }
    peek() {
        console.log(this.item[this.item.length - 1]);
    }
    pop() {
        this.item.pop();
        this.item[this.size - 1];
    }
}
let myStack = new stack();
myStack.push("Anjum");
myStack.peek();
myStack.pop();
console.log(myStack);