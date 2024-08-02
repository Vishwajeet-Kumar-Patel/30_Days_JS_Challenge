// Task 1: Write a script to save a string value in local storage and then retrieve it. Log the retrieved value.
const key = 'myString';
const value = 'Hello, world!';
localStorage.setItem(key, value);
const retrievedValue = localStorage.getItem(key);

console.log(retrievedValue);


// Task 2: Write a script to save an object in local storage and convert it to JSON string. Retrieve and parse the object and log it to the console.
const key1 = 'myObject';
const value1 = { name: 'Vishwajeet', age: 20 };
localStorage.setItem(key1, JSON.stringify(value1));
const retrievedValue1 = JSON.parse(localStorage.getItem(key1));

console.log(retrievedValue1);


// Task 3: Create a simple form that takes users input (e.g. name, email) to local storage when submitted. Retrieve and save data on page load.
function saveFormData(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Save data to local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    
    // Display a confirmation message
    alert('Data saved to local storage');
}

// Function to load form data from local storage
function loadFormData() {
    // Retrieve data from local storage
    const savedName = localStorage.getItem('name');
    const savedEmail = localStorage.getItem('email');
    
    // If data exists, set it to the form fields
    if (savedName && savedEmail) {
        document.getElementById('name').value = savedName;
        document.getElementById('email').value = savedEmail;
    }
}

// Call loadFormData on page load
window.onload = loadFormData;


// Task 4: write a script to remove an item from local storage. Log the local storage content before and after removing the item. 
console.log(localStorage.getItem('name'));
console.log(localStorage.getItem('email'));

localStorage.removeItem('name');
localStorage.removeItem('email');

console.log(localStorage.getItem('name'));


// Task 5: Write a script to save a string value in session storage and then retrieve it. Log the retrieved value.
const key3 = 'myString';
const value3 = 'Hi, there!';
sessionStorage.setItem(key3, value3);
const retrievedValue3 = sessionStorage.getItem(key3);

console.log(retrievedValue3);


// Task 6: Write a script to save an object in session storage and convert it to JSON string. Retrieve and parse the object and log it to the console.
const key4 = 'myObject';
const value4 = { name: 'Vishwajeet', age: 20 };
sessionStorage.setItem(key4, JSON.stringify(value4));
const retrievedValue4 = JSON.parse(sessionStorage.getItem(key4));

console.log(retrievedValue4);


// Task 7: Create a simple form that takes users input (e.g. name, email) to session storage when submitted. Retrieve and save data on page load.
function saveFormData(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Save data to session storage
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    
    // Display a confirmation message
    alert('Data saved to session storage');
}

// Function to load form data from session storage
function loadFormData() {
    // Retrieve data from session storage
    const savedName = sessionStorage.getItem('name');
    const savedEmail = sessionStorage.getItem('email');
    
    // If data exists, set it to the form fields
    if (savedName && savedEmail) {
        document.getElementById('name').value = savedName;
        document.getElementById('email').value = savedEmail;
    }
}

// Call loadFormData on page load
window.onload = loadFormData;


// Task 8: Write a script to remove an item from session storage. Log the session storage content before and after removing the item.
console.log(sessionStorage.getItem('name'));
console.log(sessionStorage.getItem('email'));

sessionStorage.removeItem('name');
sessionStorage.removeItem('email');

console.log(sessionStorage.getItem('name'));


// Task 9: Write a function that takes a key and value and saves both to local storage and session storage. Retrieve and log the values from both storage mechanisms.
function saveToLocalStorageAndSessionStorage(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
}

saveToLocalStorageAndSessionStorage('name', 'Vishwajeet');
console.log(localStorage.getItem('name'));
console.log(sessionStorage.getItem('name'));


// Task 10: Write a function that clears all data from local storage and session storage. Verify that both storage mechanisms are empty.
function clearStorage() {
    localStorage.clear();
    sessionStorage.clear();
}

clearStorage();
console.log(localStorage.getItem('name'));
console.log(sessionStorage.getItem('name'));

