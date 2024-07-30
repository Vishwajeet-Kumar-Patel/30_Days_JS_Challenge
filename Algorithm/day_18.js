// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
const bubbleSort = (arr) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            swapped = true;
        }
        }
    } while (swapped);
    return arr;
}

console.log(bubbleSort([5, 3, 8, 2, 1, 4])); // [1, 2, 3, 4, 5, 8]


// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
            min = j;
        }
        }
        if (i !== min) {
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([5, 3, 8, 2, 1, 4])); // [1, 2, 3, 4, 5, 8]


// Task 3: Implement the quick sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
        left.push(arr[i]);
        } else {
        right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 3, 8, 2, 1, 4])); // [1, 2, 3, 4, 5, 8]


// Task 4: Implement the linear search algorithm to find a target number in an array of numbers. Log the index of the target number.
const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
        return i;
        }
    }
    return -1;
}

console.log(linearSearch([5, 3, 8, 2, 1, 4], 8)); // 2


// Task 5: Implement the binary search algorithm to find a target number in a sorted array of numbers. Log the index of the target number.
const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
        return mid;
        } else if (arr[mid] < target) {
        left = mid + 1;
        } else {
        right = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 8], 8)); // 5


// Task 6: Write a function to count the occurernces of each character in a string. Log the character counts.
const countCharacters = (str) => {
    const charCounts = {};

    for (let char of str) {
        if (charCounts[char]) {
        charCounts[char]++;
        } else {
        charCounts[char] = 1;
        }
    }

    return charCounts;
}

console.log(countCharacters('vishwajeet kumar')); 


// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
const longestSubstring = (str) => {
    let longest = 0;
    let start = 0;
    const seen = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (seen[char]) {
        start = Math.max(start, seen[char]);
        }
        longest = Math.max(longest, i - start + 1);
        seen[char] = i + 1;
    }

    return longest;
}

console.log(longestSubstring('abcabcbb')); // 3


// Task 8: Write a function to rotate an array by K position. Log the rotated array.
const rotateArray = (arr, k) => {
    k = k % arr.length;
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);
    return arr;
}

const reverse = (arr, start, end) => {
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); // [5, 6, 7, 1, 2, 3, 4]


// Task 9: Write a function to merge two sorted arrays into a single sorted array. Log the merged array.
const mergeArrays = (arr1, arr2) => {
    const merged = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
        merged.push(arr1[i]);
        i++;
        } else {
        merged.push(arr2[j]);
        j++;
        }
    }

    return [...merged, ...arr1.slice(i), ...arr2.slice(j)];
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]


// Task 10: Write a function to solve the Fibonacci sequence using Dynamic Programming. Log the Fibonacci numbers.
const fibonacci = (n) => {
    const fib = [0, 1];

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n];
}

console.log(fibonacci(6)); // 8


// Task 11: Write a function to solve the KnapSack problem using Dynamic Programming. Log the maximum value that can be obtained.
const knapSack = (capacity, weights, values, n) => {
    const dp = Array.from(Array(n + 1), () => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
        if (weights[i - 1] <= w) {
            dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
        } else {
            dp[i][w] = dp[i - 1][w];
        }
        }
    }

    return dp[n][capacity];
}

console.log(knapSack(50, [10, 20, 30], [60, 100, 120], 3)); // 220 Explanation: The maximum value that can be obtained is 220 by selecting items with weights 10 and 20. 
// The total weight of the selected items is 30 which is less than the capacity of the knapsack which is 50.
// The value of the selected items is 60 + 100 = 160 which is the maximum value that can be obtained.
// The maximum value that can be obtained is 220 by selecting items with weights 10, 20, and 30.
// KnapSack problem is a problem in combinatorial optimization. The problem is to select a collection of items with maximum value without exceeding the capacity of the knapsack.