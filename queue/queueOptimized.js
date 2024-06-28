class Queue {
    constructor() {
        this.queue = {};
        this.front = -1;
        this.rear = -1;
    }

    enqueue(element) {
        this.rear++;
        this.queue[this.rear] = element;

        if (this.front === -1) {
            this.front = this.rear;
        }
    }

    dequeue() {
        if (this.isEmpty()) return null;

        const item = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        return item;
    }

    isEmpty() {
        return this.size() === 0;
    }

    peak() {
        return this.queue[this.front];
    }

    size() {
        return this.rear - this.front + 1;
    }

    print() {
        console.log(this.queue);
    }
}

const q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

q.print();

console.log(q.dequeue());

q.print();

console.log(q.peak());


console.log(q.dequeue());

q.print();

console.log(q.dequeue());

q.print();

console.log(q.dequeue());

q.print();


q.enqueue(40);

q.print();