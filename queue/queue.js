class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(ele) {
        this.queue.push(ele);
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    peak() {
        if (!this.isEmpty()) return this.queue[0];
        return null;
    }

    print() {
        console.log(this.queue.toString());
    }
}

const q = new Queue();

console.log(q.isEmpty());

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

q.print();

q.dequeue();

q.print();
