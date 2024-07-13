// Task 1:  Declare a variable using var and assign a number to it.
var num = 10;
console.log(num); // 10

// Task 2:  Declare a variable using let and assign a string to it.
let str = 'Vishwajeet';
console.log(str); // Vishwajeet

// Task 3:  Declare a variable using const and assign a boolean to it.
const bool = true;
console.log(bool); // true

// Task 4:  Create variables of different data types and log each variables out using typeof operator.
let a = 10;
let b = 'Vishwajeet';
let c = true;
let d = null;
let e = ["Audi", "BMW", "Fortuner"];
let f = { name: 'Vishwajeet' };
typeof a, b, c, d, e, f; // number, string, boolean, object, array, object
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f);

// Task 5:  Declare a variable using let and assign a value to it. Reassign a new value to the variable. And log both the values to the console.
let x = 10;
console.log(x); // 10
x = 11;
console.log(x); // 11 

// Task 6:  Try reassigning a value to a variable declared using const and observe the error.
const y = 100;
y = 101; // TypeError: Assignment to constant variable;
console.log(y);
// Assignment to constant variable means you are trying to change the value of a constant variable which is not allowed in JavaScript.



// Write a script that declares variabl"es of different data types, and logs the values and type of these variables to the console.
let g = 10
let h = 'Vishwajeet'
let i = true
let j = null
let k = ["Audi", "BMW", "Fortuner"]
let l = { name: 'Vishwajeet' }
console.log(g, typeof g);
console.log(h, typeof h);
console.log(i, typeof i);
console.log(j, typeof j);
console.log(k, typeof k);
console.log(l, typeof l);


// Create a script that differentiates between let and const variables when it comes to reassigment.
let m = 10;
m = 11;
console.log(m); // 11

const n = 100;
n = 101; // TypeError: Assignment to constant variable;
console.log(n);