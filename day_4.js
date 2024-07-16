// Task 1: Write a program that print numbers 1 to 10 using for loop.
let i;
for (i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2: Write a program to print the multiplication table of 5 using for loop.
let num = 5;
for (i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}


// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
i = 1;
while (i <= 10) {
    sum += i;
    i++;
}

console.log(`Sum of numbers from 1 to 10 is: ${sum}`);


// Task 4: Write a program to print the numbers from 10 to 1 using a while loop.
i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}


// Task 5: Write a program to print numbers from 1 to 5 using a do-while loop.
i = 1;
do {
    console.log(i);
    i++;
}

while (i <= 5);


// Task 6: Write a program to calculate the factorial of a number using do-while loop.
function factorial(num) {
    let fact = 1;
    i = 1;
    do {
        fact *= i;
        i++;
    } while (i <= num);

    return fact;
}

console.log(`Factorial of 5 is: ${factorial(5)}`);


// Task 7: Write a program to print a pattern using nested for loops.
let rows = 5;
for (i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '* ';
    }
    console.log(pattern);
}


// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the "continue" statement.
for (i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}


// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when number 7 is reached using the "break" statement.
for (i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}