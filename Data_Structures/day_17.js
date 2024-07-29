// Task 1: Implement a node class to represent an element in a linked list with properties value and next.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;

console.log(node1);
console.log(node2);


// Task 2: Implement a LinkedList class with methods to add a node at the end, remove a node from the end, and display all the nodes.
class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    removeNode() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.display();
list.removeNode();

console.log('After removing the last node:');
list.display();


// Task 3: Implement a stack class with methods to push, pop and peek.
class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        const node = new Node(value);
        if (!this.top) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
    }

    pop() {
        if (!this.top) {
            return;
        }
        this.top = this.top.next;
    }

    peek() {
        return this.top ? this.top.value : null;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());


// Task 4: Use a Stack class to reverse a string by pushing all the characters onto a stack and then popping them off.
function reverseString(str) {
    const stack = new Stack();
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    let reversed = '';
    while (stack.top) {
        reversed += stack.peek();
        stack.pop();
    }
    return reversed;
}

console.log(reverseString('Manu Bhaker'));


// Task 5: Implement a queue class with methods to enqueue, dequeue and front.
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(value) {
        const node = new Node(value);
        if (!this.front) {
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
    }

    dequeue() {
        if (!this.front) {
            return;
        }
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null;
        }
    }

    frontValue() {
        return this.front ? this.front.value : null;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.frontValue());
queue.dequeue();
console.log(queue.frontValue());


// Task 6: Use a Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    addJob(job) {
        this.queue.enqueue(job);
    }

    processJobs() {
        while (this.queue.front) {
            console.log(`Printing job: ${this.queue.front.value}`);
            this.queue.dequeue();
        }
    }
}

const printerQueue = new PrinterQueue();
printerQueue.addJob('Job 1');
printerQueue.addJob('Job 2');
printerQueue.addJob('Job 3');
printerQueue.processJobs();


// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left and right.
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const nodeA = new TreeNode('A');
const nodeB = new TreeNode('B');
const nodeC = new TreeNode('C');
nodeA.left = nodeB;
nodeA.right = nodeC;

console.log(nodeA);


// Task 8: Implement a BinaryTree class with methods to inserting values, and performing in-order traversal to display nodes.
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new TreeNode(value);
        if (!this.root) {
            this.root = node;
        } else {
            let current = this.root;
            while (true) {
                if (value < current.value) {
                    if (!current.left) {
                        current.left = node;
                        break;
                    }
                    current = current.left;
                } else {
                    if (!current.right) {
                        current.right = node;
                        break;
                    }
                    current = current.right;
                }
            }
        }
    }

    inOrderTraversal(node = this.root) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);

tree.inOrderTraversal();


// Task 9: Implement a Graph class with methods to add vertices and edges, and perform a breadth-first search.
class Graph {
    constructor() {
        this.vertices = {};
    }

    addVertex(vertex) {
        this.vertices[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.vertices[vertex1].push(vertex2);
        this.vertices[vertex2].push(vertex1);
    }

    breadthFirstSearch(startingVertex) {
        const visited = {};
        const queue = new Queue();
        queue.enqueue(startingVertex);
        visited[startingVertex] = true;
        while (queue.front) {
            const currentVertex = queue.frontValue();
            console.log(currentVertex);
            queue.dequeue();
            for (const vertex of this.vertices[currentVertex]) {
                if (!visited[vertex]) {
                    visited[vertex] = true;
                    queue.enqueue(vertex);
                }
            }
        }
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.breadthFirstSearch('A');


// Task 10: Use a Graph class to represent a simple network and perform a breadth-first search to find the shortest path between two nodes.
class newGraph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList[vertex2]) {
        this.addVertex(vertex2);
      }
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  
    bfsShortestPath(start, end) {
      const queue = [start];
      const distances = { [start]: 0 };
      const predecessors = { [start]: null };
  
      while (queue.length > 0) {
        const current = queue.shift();
        
        if (current === end) {
          const path = [];
          let step = end;
          while (step !== null) {
            path.unshift(step);
            step = predecessors[step];
          }
          return { path, distance: distances[end] };
        }
  
        this.adjacencyList[current].forEach(neighbor => {
          if (!distances.hasOwnProperty(neighbor)) {
            queue.push(neighbor);
            distances[neighbor] = distances[current] + 1;
            predecessors[neighbor] = current;
          }
        });
      }
      return null; // No path found
    }
  }
  
  // Example usage:
  const graph1 = new newGraph();
  graph1.addEdge('A', 'B');
  graph1.addEdge('A', 'C');
  graph1.addEdge('B', 'D');
  graph1.addEdge('C', 'E');
  graph1.addEdge('D', 'E');
  graph1.addEdge('D', 'F');
  graph1.addEdge('E', 'F');
  
  const result = graph1.bfsShortestPath('A', 'F');
  if (result) {
    console.log('Shortest path:', result.path);
    console.log('Distance:', result.distance);
  } else {
    console.log('No path found');
  }
  