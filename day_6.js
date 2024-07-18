// Task 1: Create an array of numbers from 1 to 5  and log the array to the console.
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Task 2: Access first and last element of the array and log it to the console.
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

// Task 3: Use the push method to add a new element to the end of the array and log the updated array to the console.
numbers.push(6);
console.log(numbers);

// Task 4: Use the pop method to remove the last element from the array and log the updated array to the console.
numbers.pop();
console.log(numbers);

// Task 5: Use the shift method to remove the first element from the array and log the updated array to the console.
numbers.shift();
console.log(numbers);

// Task 6: Use the unshift method to add a new element to the beginning of the array and log the updated array to the console.
numbers.unshift(0);
console.log(numbers);

// Task 7: Use the map method to create a new array with each number is doubled and log the new array to the console.
let doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

// Task 8: Use the filter method to create a new array with only the even numbers and log the new array to the console.
let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// Task 9: Use the reduce method to calculate the sum of all the numbers in the array and log the sum to the console.
let sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum); // 14 (0 + 1 + 2 + 3 + 4 + 5)Updated Array

// Task 10: Use a for loop to iterate over the array and log each number to the console.
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}


// Task 11: Use the forEach method to iterate over the array and log each number to the console.
numbers.forEach((number) => {
  console.log(number);
});


// Task 12: Create a two-dimensional array (matrix) and log the matrix to the console.
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix);

// Task 13: Access and log a specific element from 2D array to the console.
console.log(matrix[2][1]); // 8
