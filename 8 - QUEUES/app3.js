/*
    Implement following methods:
isEmpty: a method that checks whether the given queue is empty or not. It will return a boolean
isFull: a method that checks whether the given queue is full or not. Hint: Compare the length of array with size
*/
class Queue {
    constructor() {
        this.items = [];
        this.size = 5;
    }
    isEmpty() {
        if (this.items.length == 0) {
            console.log("This is an empty Array")
        } else {
            console.log("This Array is not Empty");
        }
    }

    isFull() {
        if (this.items.length != 0) {
            console.log("This is Full")
        } else {
            console.log("This is Empty")
        }
    }
}



//calling for functions

let myQueue = new Queue();
myQueue.isEmpty();
myQueue.isFull();