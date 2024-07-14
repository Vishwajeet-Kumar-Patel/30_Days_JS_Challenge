// Task 1: Write a program to add two numbers and log the result to the console.
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(sum); // 30

// Task 2: Write a program to subtract two numbers and log the result to the console.
let num3 = 20;
let num4 = 10;
let diff = num3 - num4;
console.log(diff); // 10

// Task 3: Write a program to multiply two numbers and log the result to the console.
let num5 = 10;
let num6 = 20;
let prod = num5 * num6;
console.log(prod); // 200

// Task 4: Write a program to divide two numbers and log the result to the console.
let num7 = 20;
let num8 = 10;
let div = num7 / num8;
console.log(div); // 2

// Task 5: Write a program to find the remainder of dividing two numbers and log the result to the console.
let num9 = 20;
let num10 = 10;
let rem = num9 % num10;
console.log(rem); // 0

// Task 6: Use the += operator to add a number to a variable and log the result to the console.
let num11 = 10;
num11 += 5;
console.log(num11); // 15

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let num12 = 20;
num12 -= 10;
console.log(num12); // 10

// Task 8: Write a program to compare two numbers using > and < operators and log the result to the console.
let num13 = 10;
let num14 = 20;
console.log(num13 > num14); // false
console.log(num13 < num14); // true

// Task 9: Write a program to compare two numbers using >= and <= operators and log the result to the console.
let num15 = 10;
let num16 = 20;
console.log(num15 >= num16); // false
console.log(num15 <= num16); // true

// Task 10: Write a program to compare two numbers using == and === operators and log the result to the console.
let num17 = 10;
let num18 = 20;
console.log(num17 == num18); // false

let num19 = 10;
let num20 = 20;
console.log(num19 === num20); // false

// Task 11: Write a program that uses && operator to combine two conditions and log the result to the console.
let num21 = 10;
let num22 = 20;
console.log(num21 < num22 && num21 > num22); // false

// Task 12: Write a program that uses || operator to combine two conditions and log the result to the console.
let num23 = 10;
let num24 = 20;
console.log(num23 < num24 || num23 > num24); // true

// Task 13: Write a program that uses ! operator to negate a condition and log the result to the console.
let num25 = 10;
let num26 = 20;
console.log(!(num25 < num26)); // false

// Task 14: Write a program that uses ternary operator if a number is positive or negative and log the result to the console.
let num27 = 10;
let result = num27 > 0 ? 'Positive' : 'Negative';
console.log(result); // Positive


// Feature 1: Arithmetic Operations Script 
// Write a script that performs arithmetic operations such as addition, subtraction, multiplication, division, and remainder operations on two numbers.
let num28 = 10;
let num29 = 20;
let add = num28 + num29;
let sub = num28 - num29;
let mul = num28 * num29;
let divi = num28 / num29;
let rema = num28 % num29;
console.log(add, sub, mul, divi, rema);


// Feature 2: Comparision and Logical Operations Script
// Write a script that compares two numbers using comparison operators such as >, <, >=, <=, ==, and ===, and logical operators such as &&, ||, and !.
let num30 = 10;
let num31 = 20;
console.log(num30 > num31); // false
console.log(num30 < num31); // true
console.log(num30 >= num31); // false
console.log(num30 <= num31); // true
console.log(num30 == num31); // false
console.log(num30 === num31); // false
console.log(num30 < num31 && num30 > num31); // false
console.log(num30 < num31 || num30 > num31); // true
console.log(!(num30 < num31)); // false

// Feature 3: Ternary Operator Script
// Write a script that uses the ternary operator to check if a number is even or odd.
let num32 = 10;
let result1 = num32 % 2 === 0 ? 'Even' : 'Odd';
console.log(result1); // Even