// Task 1: Write a function that returns another function where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
const outerFunction = () => {
    let outerVariable = 'I am the outer variable';
    const innerFunction = () => {
        console.log(outerVariable);
    }
    return innerFunction;
}

const innerFunction = outerFunction();
innerFunction();

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
const counter = () => {
    let count = 0;
    return {
        increment: () => {
            count++;
        },
        getCurrentValue: () => {
            return count;
        }
    }
}

const newCounter = counter();
newCounter.increment();
newCounter.increment();

console.log(newCounter.getCurrentValue()); // 2

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
const generateUniqueId = () => {
    let id = 0;
    return () => {
        return id++;
    }
}

const newId = generateUniqueId();
console.log(newId()); // 0
console.log(newId()); // 1

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by their name.
const greetUser = (name) => {
    return () => {
        console.log(`Hello ${name}`);
    }
}

const greetMe = greetUser('Vishwajeet');
greetMe(); // Hello Vishwajeet

// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
const createFunctions = () => {
    const functions = [];
    for (let i = 0; i < 5; i++) {
        functions.push(((index) => {
            return () => {
                console.log(index);
            }
        })(i));
    }
    return functions;
}

const functions = createFunctions();
functions[0](); // 0
functions[1](); // 1
functions[2](); // 2

// Task 6: Use closures to create a simple module for managing collections of items. Implement methods to add, remove, and list items.
const collection = () => {
    const items = [];
    return {
        add: (item) => {
            items.push(item);
        },
        remove: (item) => {
            const index = items.indexOf(item);
            if (index !== -1) {
                items.splice(index, 1);
            }
        },
        list: () => {
            return items;
        }
    }
}

const newCollection = collection();
newCollection.add('item1');
newCollection.add('item2');
newCollection.add('item3');
newCollection.remove('item2');
console.log(newCollection.list()); // ['item1', 'item3']

// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
const memoize = (func) => {
    const cache = {};
    return (n) => {
        if (n in cache) {
            return cache[n];
        } else {
            const result = func(n);
            cache[n] = result;
            return result;
        }
    }
}

const square = (n) => {
    console.log('Computing square');
    return n * n;
}

const memoizedSquare = memoize(square);
console.log(memoizedSquare(5)); // Computing square, 25
console.log(memoizedSquare(5)); // 25

// Task 8: Create a memoized version of a function that calculates the factorial of a number.
const factorial = (n) => {
    console.log('Computing factorial');
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Computing factorial, 120
console.log(memoizedFactorial(5)); // 120
