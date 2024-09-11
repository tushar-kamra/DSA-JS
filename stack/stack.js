class Stack {
    constructor() {
        this.stack = [];
    }

    // O(n)
    push(value) {
        this.stack.unshift(value);
    }

    // O(n)
    pop() {
        return this.stack.shift();
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    // O(1)
    top() {
        if (!this.isEmpty()) {
            return this.stack[0];
        }
        return null;
    }

    // O(n)
    print() {
        console.log(this.stack.toString());
    }
}

// const s = new Stack();
// console.log(s.isEmpty());

// s.push(10);
// s.push(20);

// s.print();

// console.log(s.top());

// s.push(40);
// s.push(30);

// s.print();

// s.pop();
// s.print();

module.exports = Stack;