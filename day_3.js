// Task 1: Write a program to check if a number is positive, negative or zero, and log the result to the console.
function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} is a positive number.`);
    } else if (num < 0) {
        console.log(`${num} is a negative number.`);
    } else {
        console.log(`${num} is zero.`);
    }
}

// Example usage:
checkNumber(10);  // Output: 10 is a positive number.
checkNumber(-5);  // Output: -5 is a negative number.
checkNumber(0);   // Output: 0 is zero.


// Task 2: Write a program to check if a person is eligible to vote or not, and log the result to the console.
function checkEligibility(age) {
    if (age >= 18) {
        console.log(`You are eligible to vote.`);
    } else {
        console.log(`You are not eligible to vote.`);
    }
}

// Example usage:
checkEligibility(20);  // Output: You are eligible to vote.


// Task 3: Write a program to check the largest number among three numbers, and log the result to the console.
function findLargestNumber(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        console.log(`${num1} is the largest number.`);
    } else if (num2 >= num1 && num2 >= num3) {
        console.log(`${num2} is the largest number.`);
    } else {
        console.log(`${num3} is the largest number.`);
    }
}

// Example usage:
findLargestNumber(10, 20, 15);  // Output: 20 is the largest number.

// Task 4: Write a program to use switch case to determine the name of the day of the week based on the number.
function getDayName(day) {
    switch (day) {
        case 1:
            console.log('Sunday');
            break;
        case 2:
            console.log('Monday');
            break;
        case 3:
            console.log('Tuesday');
            break;
        case 4:
            console.log('Wednesday');
            break;
        case 5:
            console.log('Thursday');
            break;
        case 6:
            console.log('Friday');
            break;
        case 7:
            console.log('Saturday');
            break;
        default:
            console.log('Invalid day');
    }
}

// Example usage:
getDayName(2);  // Output: Monday


// Task 5: Write a program that uses Switch Case to assign a grade (A, B, C, D, E, F) based on the score and log the result to the console.
function getGrade(score) {
    let grade;
    switch (true) {
        case score >= 90:
            grade = 'A';
            break;
        case score >= 80:
            grade = 'B';
            break;
        case score >= 70:
            grade = 'C';
            break;
        case score >= 60:
            grade = 'D';
            break;
        case score >= 50:
            grade = 'E';
            break;
        default:
            grade = 'F';
    }
    console.log(`Your grade is ${grade}`);
}

// Example usage:
getGrade(85);  // Output: Your grade is B

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd, and log the result to the console.
function checkEvenOdd(num) {
    const result = num % 2 === 0 ? 'even' : 'odd';
    console.log(`${num} is an ${result} number.`);
}

// Example usage:
checkEvenOdd(10);  // Output: 10 is an even number.


// Task 7: Write a program to check if a year is a leap year or not, using multiple condition (divisible by 4, but not by 100, or divisible by 400) and log the result to the console.
function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

// Example usage:
checkLeapYear(2020);  // Output: 2020 is a leap year.


