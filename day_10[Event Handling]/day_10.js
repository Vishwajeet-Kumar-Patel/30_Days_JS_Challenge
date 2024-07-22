// Task 1: Add a click event listener to the button that changes the text content of the paragraph.
const button = document.getElementById('button');
const paragraph = document.getElementById('p');

button.addEventListener('click', () => {
    paragraph.textContent = 'This is a new text';
});


// Task 2: Add a double click event listener to an image that toggles its visibility.
const image = document.getElementById('image');

image.addEventListener('dblclick', () => {
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
});


// Task 3: Add a mouseover event listener to an element that changes its background color.
const div = document.getElementById('modiv');

div.addEventListener('mouseover', () => {
    if (div.style.backgroundColor === 'Yellow') {
        div.style.backgroundColor = 'blue';
    }
    else {
        div.style.backgroundColor = 'Yellow';
    }
});


// Task 4: Add a mouseout event listener to an element that resets its background color.
div.addEventListener('mouseout', () => {
    div.style.backgroundColor = 'white';
});


// Task 5: Add a keydown event listener to an input field that logs the value of the key pressed to the console.
const input = document.getElementById('inputField');

function logKey(e) {
    console.log(e.key);
}


input.addEventListener('keydown', logKey);

// Task 6: Add a keyup event listener to an input field that logs the current value in a paragraph.
const inputField = document.getElementById('inputField_2');
const outputParagraph = document.getElementById('p2');

function updateParagraph(event) {
    outputParagraph.textContent = event.target.value;
}

inputField.addEventListener('keyup', updateParagraph);


// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.getElementById('form');

function logFormData(event) {
    event.preventDefault();
    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log(data);
}

form.addEventListener('submit', logFormData);


// Task 8: Add a change event listener to an input field that displays the current value in a paragraph.
const inputField_3 = document.getElementById('inputField_3');
const displayParagraph = document.getElementById('displayParagraph');

function handleChange(event) {
    const currentValue = event.target.value;
    
    displayParagraph.textContent = `Current value: ${currentValue}`;
}

inputField_3.addEventListener('change', handleChange);


// Task 9: Add a click event listener to list that logs the text content of clicked list item using event delegation.
const list = document.getElementById('list'); // Get the parent element

list.addEventListener('click', function(event) {
    if (event.target && event.target.tagName === 'LI') {
        console.log(event.target.textContent);
    }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
function addItem() {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
}

document.getElementById('add-item').addEventListener('click', addItem);
