class CircularQueue {
    constructor(capacity) {
        this.queue = new Array(capacity);
        this.front = this.rear = -1;
        this.capacity = capacity;
        this.size = 0;
    }

    isFull() {
        return this.size === this.capacity;
    }

    isEmpty() {
        return this.size === 0;
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.queue[this.rear] = element;
            this.size++;

            if (this.front === -1) {
                this.front = this.rear;
            }
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            const item = this.queue[this.front];
            this.front = (this.front + 1) % this.capacity;
            this.size--;

            if (this.isEmpty()) {
                this.front = this.rear = -1;
            }
            return item;
        }

        return null;
    }

    peak() {
        if (!this.isEmpty()) {
            return this.queue[this.front];
        }
        return null;
    }

    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            for (
                let i = this.front;
                i != this.rear;
                i = (i + 1) % this.capacity
            ) {
                console.log(`${this.queue[i]} `);
            }
        }
    }
}

const q = new CircularQueue(5);

console.log(q.isEmpty());
console.log(q.isFull());

q.enqueue(10);

console.log(q.isEmpty());
console.log(q.isFull());

q.enqueue(30);
q.enqueue(40);
q.enqueue(50);
q.enqueue(60);
q.enqueue(70);

q.dequeue();
q.dequeue();

q.dequeue();

q.dequeue();

q.enqueue(80);

q.enqueue(90);

console.log(q.front, q.rear);

q.print();
