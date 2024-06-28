// a linked list is a linear data structure that includes a series of connected nodes
// each node consists of a data value and a pointer that points to the next node
// the list elements can be easily inserted or removed without reallocation or reorganization of the enitre structure
// random access of elements is not feasible and accessing an element has linear time complexity

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.size++;
    }

    append(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }

            curr.next = node;
        }

        this.size++;
    }

    insertAtIndex(value, index) {
        if (index < 0 && index > this.size) return;

        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeFrom(index) {
        if (index < 0 && index >= this.size) {
            return null;
        }

        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }

            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }

    removeValue() {
        
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let curr = this.head;
            while (curr) {
                console.log(`${curr.value} `);
                curr = curr.next;
            }
        }
    }
}

const list = new LinkedList();
console.log(list.getSize());

list.print();

list.prepend(10);

list.print();

list.prepend(20);
list.prepend(30);

list.append(40);
list.append(50);

list.prepend(60);

list.print();
