const add = require('./add');
const sub = require('./sub');

const num1 = 5;
const num2 = 7;

const sum = add(num1, num2);
const diff = sub(num1, num2);

console.log(`The sum of ${num1} and ${num2} is ${sum}`);
console.log(`The difference between ${num1} and ${num2} is ${diff}`);