/*
    Implement following methods:
clear: a method that clears queue
toString: a method that converts all members of queue into string
*/
class Queue {
    constructor() {
        this.items = [1, 2];
        this.size = 5;
    }
    toString() {
        let str = this.items.toString();
        console.log(str);
    }
    clear() {
        this.items = []
        this.size = 0;
        return this.items;
    }

}
let myQueue = new Queue();
myQueue.toString();
myQueue.clear();
console.log(myQueue);

//output =
// 1-  1,2
// 2-  Queue { items: [], size: 0 }