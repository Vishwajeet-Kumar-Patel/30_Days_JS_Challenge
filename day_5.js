// Task 1: Write a function to check if a number is even or odd and log the result to the console.
let isEven = (num) => {
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}

isEven(4); // 4 is even

// Task 2: Write a function to calculate the square of a number and log the result to the console.
let square = (num) => {
    console.log(num * num);
}

square(5); // 25


// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
let max = function (num1, num2) {
    console.log(Math.max(num1, num2));
}

max(7, 10); // 10


// Task 4: Write a function expression to concatenate two strings and log the result to the console.
let concat = function (str1, str2) {
    console.log(str1 + str2);
}

concat('Code', 'Chai'); // HelloWorld


// Task 5: Write an arrow function to calculate the sum of two numbers and log the result to the console.
let sum = (num1, num2) => {
    console.log(num1 + num2);
}

sum(7, 10); // 17


// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
let contains = (str, char) => {
    console.log(str.includes(char));
}

contains('Vishwajeet@Kumar', '@'); // true


// Task 7: Write a function that takes two parameters and return their product. Provide default value for the second parameter.
let product = (num1, num2 = 1) => {
    console.log(num1 * num2);
}

product(5); // 5
product(5,10); // 50


/* User Defined based
function multiply(a, b = 1) {
    return a * b;
}

// Getting input from the user
const userValue = parseFloat(prompt("Enter the first number:"));

// Calling the function with one value from the user and one default value
const result = multiply(userValue);

console.log(`The product is: ${result}`); */


// Task 8: Write a function that takes a person's name and age and returns a greeting message. provide default value for the age.
let greet = (name, age = 20) => {
    console.log(`Hello ${name}, you are ${age} years old.`);
}

greet('Vishwajeet'); // Hello Vishwajeet, you are 20 years old.


// Task 9: Write a higher order function that takes a function and a number, and calls the function that many times.
let repeat = (func, num) => {
    for (let i = 0; i < num; i++) {
        func();
    }
}

let sayMyName = () => {
    console.log('Loki');
}

repeat(sayMyName, 5); // Loki Loki Loki Loki Loki


// Task 10: Write a higher order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
let compose = (func1, func2, value) => {
    return func2(func1(value));
}

let double = (num) => {
    return num * 2;
}

let squareRoot = (num) => {
    return Math.sqrt(num);
}

console.log(compose(double, squareRoot, 9)); // 6

