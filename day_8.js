// Task 1: Use Template Literals to create a string that includes variables of a person's name and age and log the result to the console.
let name = "Vishwajeet";
let age = 20;
console.log(`My name is ${name} and I am ${age} years old.`);

// Task 2: Create a multi-line string using Template Literals and log it to the console.
const multiLineString = `
This is a multi-line string.
You can write across multiple lines
without using escape characters.
Template literals make it easier
to include expressions like ${4 + 3}
${name} and variables as well.
`;
console.log(multiLineString);

// Task 3: Use the array destructuring to extract first and second element from the array of numbers and log them to the console.
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(first, second);

// Task 4: Use the object destructuring to extract the title and author from a book object and log them to the console.
const book = {
  title: "JavaScript for Beginners",
  author: "Vishwajeet",
  publisher: "Self-Published",
};
const { title, author } = book;
console.log(title, "&", author);


// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements and log the new array to the console.
const fruits = ["apple", "banana", "mango"];
const moreFruits = [...fruits, "orange", "grapes"];
console.log(moreFruits);


// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);  // 0 is the initial value of total  &  numbers is an array about which we are talking
}
console.log(sum(1, 2, 3, 4, 5)); // 15


// Task 7: Write a function that takes two arguments and returns their product, with the second argument having a default value of 1. Log the result of calling this function with or without the second parameter.
function product(a, b = 1) {
    return a * b;
    }
    console.log(product(7, 2)); // 14
    console.log(product(7)); // 7


// Task 8: Use enhanced object literals to create an object with methods and properties and log the result to the console.
const person = {
    name: "Vishwajeet",
    age: 20,
    greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    };
    person.greet(); // Hello, my name is Vishwajeet and I am 20 years old.


// Task 9: Create an object with computed property names based on variables and log the result to the console.    
const key = "name";
const value = "Vishwajeet";
const obj = {
    [key]: value,
    };

    console.log(obj); // { name: 'Vishwajeet' }
    