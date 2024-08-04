// Merge K Sorted Lists : Write a function that takes an array of sorted linked lists, each list is sorted in ascending order and merges them into one sorted linked list. 

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Priority Queue class using a min-heap
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(node) {
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex].val > this.heap[index].val) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild.val < element.val) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild.val < element.val) ||
                    (swap !== null && rightChild.val < leftChild.val)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;

            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }
}

// Function to merge k sorted linked lists
function mergeKLists(lists) {
    const minHeap = new MinHeap();

    // Insert the first node of each list into the heap
    for (let list of lists) {
        if (list !== null) {
            minHeap.insert(list);
        }
    }

    let dummyHead = new ListNode(0);
    let current = dummyHead;

    // Extract the minimum element from the heap and add the next node from the same list to the heap
    while (minHeap.heap.length > 0) {
        let minNode = minHeap.extractMin();
        current.next = minNode;
        current = current.next;
        if (minNode.next !== null) {
            minHeap.insert(minNode.next);
        }
    }

    return dummyHead.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummyHead.next;
}

// Helper function to print linked list
function printLinkedList(list) {
    let result = [];
    while (list !== null) {
        result.push(list.val);
        list = list.next;
    }
    console.log(result.join(" -> "));
}

// Example usage
let l1 = createLinkedList([1, 4, 5]);
let l2 = createLinkedList([1, 3, 4]);
let l3 = createLinkedList([2, 6]);

let lists = [l1, l2, l3];
let mergedList = mergeKLists(lists);

printLinkedList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6