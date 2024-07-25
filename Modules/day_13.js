// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
const add = require('./add');

const num1 = 5;
const num2 = 7;

const sum = add(num1, num2);
console.log(`The sum of ${num1} and ${num2} is ${sum}`);


// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const person = require('./objectRep');
person.greet();


// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
const { subtract, multiply, divide } = require('./mulfunc');

const diff = subtract(num1, num2);
const product = multiply(num1, num2);
const quotient = divide(num1, num2);

console.log(`The sum of ${num1} and ${num2} is ${sum}`);
console.log(`The difference between ${num1} and ${num2} is ${diff}`);
console.log(`The product of ${num1} and ${num2} is ${product}`);
console.log(`The quotient of ${num1} and ${num2} is ${quotient}`);


// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
const avg = require('./default');

const numbers = [10, 20, 30, 40, 50];

console.log(`The average of ${numbers} is ${avg(numbers)}`);


// Task 5: Install a third-party module (e.g., lodash) using npm. Import and use this module in a script.
const _ = require('lodash');

const arr = [1, 2, 3, 4, 5];
const sumArr = _.sum(arr);

console.log(`The sum of ${arr} is ${sumArr}`);


// Task 6: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });


// Task 7: Create a module that exports multiple functions and constants. Import the entire module as an object in another script and use its properties.
const math = require('./mulfunc');

const { PI, E} = math;

console.log(`The value of PI is ${PI}`);
console.log(`The value of E is ${E}`);

const sum1 = add(num1, num2);
const diff1 = subtract(num1, num2);
const product1 = multiply(num1, num2);
const quotient1 = divide(num1, num2);

console.log(`The sum of ${num1} and ${num2} is ${sum1}`);
console.log(`The difference between ${num1} and ${num2} is ${diff1}`);
console.log(`The product of ${num1} and ${num2} is ${product1}`);
console.log(`The quotient of ${num1} and ${num2} is ${quotient1}`);


// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple javascript files into a single file. Write a script to demonstrate the bundling process.
// Webpack is a module bundler that takes modules with dependencies and generates static assets representing those modules.
// To use Webpack, you need to install it globally using npm:
// npm install -g webpack
// Create a new directory and initialize a new npm project:
// mkdir webpack-demo
// cd webpack-demo
// npm init -y
// Install Webpack as a development dependency:
// npm install --save-dev webpack
// Create two JavaScript files named add.js and subtract.js:
// Create an entry file named index.js that imports and uses the add and subtract functions:
// Create a Webpack configuration file named webpack.config.js:
//  Run Webpack to bundle the files:
// webpack
// The bundled file will be generated in the dist directory.
