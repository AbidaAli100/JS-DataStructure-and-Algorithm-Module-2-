/*
    Implement following methods. Don’t forget to increase
    and decrease the size when you add or remove an element from the queue.
*/

// enqueue: a method through that you can add a value to the queue
// peek: a method through which you can get the value on the top of queue
// dequeue: a method through which you can remove the first element of the queue

class Queue {
    constructor() {
            this.items = ["two"];
            this.size = 5;
        }
        //adding at the first
    enqueue(item) {
        if (this.items.length + 1 > this.size) {
            console.log('Queue overflow');
        } else {
            this.items.push(item);
        }
    }

    // finding out the zero index
    peek() {
        console.log(this.items[0]);
    }
    dequeue() {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i] = this.items[i + 1];
        }
        this.items.length = this.items.length - 1;
    }
}


//calling for functions

let myQueue = new Queue();
myQueue.enqueue("one");
myQueue.peek();
myQueue.dequeue();
console.log(myQueue);