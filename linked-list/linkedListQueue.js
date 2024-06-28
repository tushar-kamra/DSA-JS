const LinkedListTail = require("./linkedListTail");

class LinkedListQueue {
    constructor() {
        this.list = new LinkedListTail();
    }

    enqueue(value) {
        this.list.append(value);
    }

    dequeue() {
        this.list.removeFromFront();
    }

    peak() {
        return this.list.head.value;
    }

    isEmpty() {
        return this.list.isEmpty();
    }
}

const ls = new LinkedListQueue();
