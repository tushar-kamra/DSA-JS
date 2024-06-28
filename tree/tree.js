// A tree is a non-linear data structure, compared to arrays, linked lists, stacks and queues which are linear data structure.

// In linear data structure, the time required to search is proportional to the size of the data set. Trees however, being nonlinear allow quicker and easier access to the data.

// Usage: file system for directory structure, abstract syntax tree, DOM

// Degree of a node = total no. of child node it has
// Degree of a tree = maximum degree of a node in a tree

// Depth of node = number of edges from root to that node
// Depth of root node = 0

// Height of node = number of edges from deepest leaf to that node

// Height of root node = height of tree

// Binary tree is a tree data structure in which each node has at most 2 children

// Binary Search Tree
//  - the value of each left node must be smaller than the parent node
//  - the value of each right node must be greater than the parent node
//  - Operations:
//      a. insertion - to add a node to the tree
//      b. search - to find a node given its value
//      c. DFS & BFS - to visit all nodes in the tree
//      d. deletion - to remove a node given its value

// Depth First Search (DFS)
// - starts at the root node and explores as far as possible along each branch before backtracking
// - visit the root node, visit all the nodes in the left subtree and visit all the nodes in the right subtree
// - depending on the order in which we do this, there can be three types of DFS traversals: Preorder, Inorder, Postorder

// Preorder traversal
// 1. read the data of the node
// 2. visit the left subtree
// 3. visit the right subtree

// Inorder traversal
// 1. visit the left subtree
// 2. read the data of the node
// 3. visit the right subtree

// Postorder traversal
// 1. visit the left subtree
// 2. visit the right subtree
// 3. read the data of the node

// BFS Traversal approach
// 1. create a queue
// 2. enqueue the root node
// 3. as long as a node exists in the queue
//      a. dequeu the node from the front
//      b. read the node's value
//      c. enqueue the node's left child if it exists
//      d. enqueue the node's right child if it exists

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }

    search(root, value) {
        if (!root) return false;

        if (root.value === value) {
            return true;
        } else if (root.value > value) {
            return this.search(root.left, value);
        } else {
            return this.search(root.right, value);
        }
    }

    preorder(root) {
        if (root) {
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }

    inorder(root) {
        if (root) {
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
        }
    }

    postorder(root) {
        if (root) {
            this.postorder(root.left);
            this.postorder(root.right);
            console.log(root.value);
        }
    }

    levelOrder() {
        const queue = [];
        queue.push(this.root);

        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
    }

    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }

    delete(value) {
         
    }
}

const bst = new BinarySearchTree();

console.log(bst.isEmpty());

bst.insert(10);
bst.insert(20);
bst.insert(30);

console.log(bst.search(bst.root, 30));
