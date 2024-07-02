class Stack {
    constructor() {
        this.stack = {};
        this.top = -1;
    }

    // O(1)
    push(value) {
        this.top++;
        this.stack[this.top] = value;
    }

    // O(1)
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        const item = this.peak();
        delete this.stack[this.top];
        this.top--;
        return item;
    }

    isEmpty() {
        return this.top === -1;
    }

    // O(1)
    peak() {
        if (!this.isEmpty()) {
            return this.stack[this.top];
        }
        return null;
    }

    print() {
        console.log(this.stack);
    }
}

const s = new Stack();
console.log(s.isEmpty());

s.push(10);
s.push(20);

s.print();

console.log(s.peak());

s.push(40);
s.push(30);

s.print();

s.pop();
s.print();

s.push(5);
s.print();