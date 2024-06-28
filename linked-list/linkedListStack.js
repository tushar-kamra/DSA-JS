const LinkedListTail = require("./linkedListTail");

class LinkedListStack {
    constructor() {
        this.list = new LinkedListTail();
    }

    push(value) {
        this.list.prepend(value);
    }

    pop() {
        this.list.removeFromFront();
    }

    peak() {
        return this.list.head.value;
    }
}

const ls = new LinkedListStack();

