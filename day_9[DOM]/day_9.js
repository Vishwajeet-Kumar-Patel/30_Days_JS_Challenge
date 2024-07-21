// Task 1: Select an HTML element by its id and its text content.
// Select the element by its id
var element = document.getElementById('Task-1');

// Set the text content of the selected element
element.textContent = 'Vishwajeet Kumar';


// Task 2: Select an HTML element by its class and change its background color.
var element = document.getElementsByClassName('Task-2');
element[0].style.backgroundColor = 'red';

// Task 3: Create a new div element with some new text content and append it to the body.
var newElement = document.createElement('Task-3');
newElement.textContent = 'This is a new div element';

document.body.appendChild(newElement);

// Task 4: Create a new li element and add it to an existing ul element.
var newElement = document.createElement('li');
newElement.textContent = 'This is a new li element';

var ul = document.getElementById('Task-4');
ul.appendChild(newElement);


// Task 5: Select an HTML element and remove it from the DOM
var element = document.getElementById('Task-5');
if (element) {
    element.parentNode.removeChild(element);
}


// Task 6: Remove the last child of specific HTML element
var ul = document.getElementById('Task-6');
var lastChild = ul.lastElementChild;
if (lastChild) {
    ul.removeChild(lastChild);
}

// Task 7: Select an HTML element and change one of its attributes (e.g. src or tag)
var element = document.getElementById('Task-7');
element.src = 'https://www.example.com/image.jpg';
element.alt = 'This is an image';

// Task 8: Add and remove a CSS class to/from an HTML element.
var element = document.getElementById('Task-8');
element.classList.add('new-class');
element.classList.remove('old-class');


// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
var button = document.getElementById('Task-9-button');
var paragraph = document.getElementById('Task-9');

button.addEventListener('click', function() {
    paragraph.textContent = 'Button clicked!';
})


// Task 10: Add a mouseover event listener to an element that changes its border colour.
var element = document.getElementById('Task-10');
element.addEventListener('mouseover', function() {
    element.style.borderColor = 'red';
}
);

element.addEventListener('mouseout', function() {
    element.style.borderColor = 'black';
}
);