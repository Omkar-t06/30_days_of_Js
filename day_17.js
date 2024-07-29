// Activity 1: Linked List
// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList{
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if(this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next != null) {
                current = current.next;
            }
            current.next = newNode
        }
    }

    remove() {
        if(this.head === null) return null;

        if(this.head.next === null) {
            this.head = null;
            return;
        }

        let current = this.head;
        while(current.next.next !== null) {
            current = current.next;
        }
        current.next = null
    }

    display() {
        let current = this.head;
        while(current !== null) {
            console.log(current.value);
            current = current.next;
        }
        console.log()
    }
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
// list.display();
list.remove(2);
// list.display();

// Activity 2: Stack
// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element),
class Stack {
    constructor() {
        this.item = []
    }

    push(value) {
        this.item.push(value);
    }

    pop() {
        if(this.item.length === 0) {
            return null;
        }

        return this.item.pop();
    }

    peek() {
        if(this.item.length === 0) return null;
        return this.item[this.item.length-1]
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); 
stack.pop();
console.log(stack.peek());
// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
function reverseStr(str) {
    let stack = new Stack;
    for(let char of str){
        stack.push(char)
    }

    let rev = ''
    while(stack.peek() !== null) {
        rev += stack.pop();
    }

    return rev;
}

console.log(reverseStr("omkar"));

// Activity 3: Queue
// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element). 
class Queue{
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) return null;
        return this.items.shift();
    }

    front() {
        if (this.items.length === 0) return null;
        return this.items[0];
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.front());
queue.dequeue();
console.log(queue.front());

// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in an order.
class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    addJob(job) {
        this.queue.enqueue(job);
        console.log(`Job ${job} added to the queue.`);
    }

    processJobs() {
        while (this.queue.front() !== null) {
            let job = this.queue.dequeue();
            console.log(`Processing job ${job}...`);
        }
    }
}

let printerQueue = new PrinterQueue();
printerQueue.addJob("Job1");
printerQueue.addJob("Job2");
printerQueue.addJob("Job3");
printerQueue.processJobs();

// Activity 4: Binary Tree
// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if(this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(node,newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

let tree = new BinaryTree();
tree.insert(5);
tree.insert(2);
tree.insert(8);
tree.insert(1);
tree.insert(3);
tree.inOrderTraversal(tree.root);

// Activity 5: Graph (Optional)
// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);
    }

    bfs(startingNode) {
        let visited = new Set();
        let queue = new Queue();
        visited.add(startingNode);
        queue.enqueue(startingNode);

        while (queue.length > 0) {
            let current = queue.dequeue();
            console.log(current);

            let neighbors = this.adjacencyList.get(current);
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
}

let graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);

graph.bfs(1);

// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
class GraphWithShortestPath extends Graph {
    findShortestPath(start, end) {
        let visited = new Set();
        let queue = [[start]];
        let paths = {};

        while (queue.length > 0) {
            let path = queue.shift();
            let node = path[path.length - 1];

            if (node === end) {
                return path;
            }

            if (!visited.has(node)) {
                visited.add(node);
                let neighbors = this.adjacencyList.get(node);

                for (let neighbor of neighbors) {
                    let newPath = [...path, neighbor];
                    queue.push(newPath);
                    paths[neighbor] = newPath;
                }
            }
        }

        return null;
    }
}

// Example usage:
let graph2 = new GraphWithShortestPath();
graph2.addVertex(1);
graph2.addVertex(2);
graph2.addVertex(3);
graph2.addVertex(4);
graph2.addVertex(5);

graph2.addEdge(1, 2);
graph2.addEdge(1, 3);
graph2.addEdge(2, 4);
graph2.addEdge(3, 5);

console.log(graph2.findShortestPath(1, 5));