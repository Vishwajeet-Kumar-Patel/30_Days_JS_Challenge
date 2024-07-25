
const PI = 3.141592653589793;
const E = 2.718281828459045;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}

module.exports = { PI, E, add, subtract, multiply, divide };