// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for some test cases.
const factorial = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(6)); // 720


// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for some test cases.
const fibonacci = (n) => {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // 5
console.log(fibonacci(7)); // 13


// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for some test cases.
const sumOfArray = (arr, n) => {
    if (n === 0) {
        return 0;
    }
    return arr[n - 1] + sumOfArray(arr, n - 1);
}

console.log(sumOfArray([1, 2, 3, 4, 5], 5)); // 15
console.log(sumOfArray([2, 4, 6, 8, 10], 5)); // 30


// Task 4: Write a recursive function to find the maximum element in an array. Log the result for some test cases.
const maxOfArray = (arr, n) => {
    if (n === 1) {
        return arr[0];
    }
    return Math.max(arr[n - 1], maxOfArray(arr, n - 1));
}

console.log(maxOfArray([1, 2, 3, 6, 8, 10, 4, 5], 5)); // 10


// Task 5: Write a recursive function to reverse a string. Log the result for some test cases.
const reverseString = (str) => {
    if (str === '') {
        return '';
    }
    return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString('Vishwajeet')); // teejawhsiV


// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for some test cases.
const isPalindrome = (str) => {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.substr(1, str.length - 2));
}

console.log(isPalindrome('hello')); // true
console.log(isPalindrome('racecar')); // true


// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for some test cases.
const binarySearch = (arr, target, low, high) => {
    if (low > high) {
        return -1;
    }
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, high);
    }
    return binarySearch(arr, target, low, mid - 1);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(arr, 5, 0, arr.length - 1)); // 4


// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for some test cases.
const countOccurrences = (arr, target, n) => {
    if (n === 0) {
        return 0;
    }
    return (arr[n - 1] === target ? 1 : 0) + countOccurrences(arr, target, n - 1);
}

console.log(countOccurrences([1, 2, 3, 4, 5, 4, 6, 4, 7, 4, 8, 4], 4, 12)); // 5


// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const inOrderTraversal = (root) => {
    if (root !== null) {
        inOrderTraversal(root.left);
        console.log(root.data);
        inOrderTraversal(root.right);
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log("In-order traversal of the binary tree is: ");
inOrderTraversal(root); // 4 2 5 1 6 3 7


// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for some test cases.
const maxDepth = (root) => {
    if (root === null) {
        return 0;
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

console.log("Depth of the binary tree is: ");
console.log(maxDepth(root)); // 3

