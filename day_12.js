// ERROR HANDLING

// Task 1: Write a function that intentionally throws an error and use a try/catch block to handle the error and log an appropriate message to the console.
const throwError = () => {
    throw new Error("This is an intentional error");
}

try {
    throwError();
}  
catch (error) {
    console.log(error.message);
}


// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try/catch block to handle the error and log an appropriate message to the console.
const divideNumbers = (numerator, denominator) => {
    if (denominator === 0) {
        throw new Error("Cannot divide by zero");
    }
    return numerator / denominator;
}

try {
    console.log(divideNumbers(10, 0));
}
catch (error) {
    console.log(error.message);
}


// Task 3: Write a script that includes a try/catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try {
    console.log("This is the try block");
    throw new Error("This is an error");
}
catch (error) {
    console.log("This is the catch block");
    console.log(error.message);
}
finally {
    console.log("This is the finally block");
}


// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of the custom error in a function and handle it using a try/catch block.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

const throwCustomError = () => {
    throw new CustomError("This is a custom error");
}

try {
    throwCustomError();
}
catch (error) {
    console.log(error.message);
}


// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try/catch block.
const validateInput = (input) => {
    if (input === "") {
        throw new CustomError("Input cannot be empty");
    }
    return input;
}

try {
    console.log(validateInput(""));
}
catch (error) {
    console.log(error.message);
}


// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
const randomPromise = new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.5) {
        resolve("Resolved");
    } else {
        reject("Rejected");
    }
});

randomPromise
.then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
});    


// Task 7: Use try/catch within an async function to handle errors from a promise that randomly resolves or rejects, and log an appropriate message to the console.
const handlePromise = async () => {
    try {
        const message = await randomPromise;
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}

handlePromise();


// Task 8: Use a fetch API to request data from an invalid URL and handle the error using a .catch() and log an appropriate message to the console. 
fetch("https://jsonplaceholder.typicode.com/posts/invalid")
.then(response => {
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json();
})

.catch(error => {
    console.error(error);
});


// Task 9: Use a fetch API to request data from a invalid URL within an async function and handle the error using a try/catch block and log an appropriate message to the console.
const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/invalid");
        if (!response.ok) {
            throw new Error("Failed in fetching data");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();

