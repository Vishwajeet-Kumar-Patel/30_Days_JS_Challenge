// Task 1: Create an object representing a book with the properties like title, author and year and log them to the console. 
let book = {
    title: "The Alchemist",
    author: "Paul Coelho",
    year: 1988,
};
console.log(book.title);
console.log(book.author);
console.log(book.year);


// Task 2: Access and log the title and author properties of the book object.
console.log(book["title"]);
console.log(book["author"]);


// Task 3: Add a method to the book object that returns the string with the book's title and author and log it to the console.
book.info = function() {
    return `${this.title} by ${this.author}`;
}
console.log(book.info());


// Task 4: Add a method object that takes a parameter (year) and updates the year property of the object and log it to the console.
book.updateYear = function(year) {
    this.year = year;
}
book.updateYear(1990);

console.log(book.year);

// Task 5: Create a nested object representing a library with the properties like name and books (an array of books) and log them to the console.
let library = {
    name: "City Library",
    books: ["DX", "The Alchemist", "The Da Vinci Code"]
};

console.log(library.name);
console.log(library.books);


// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library["name"]);
console.log(library["books"]);


// Task 7: Add a method to the object that uses this keyword and return a string with book's title and year, and log the result of calling this method to the console.
library.info = function() {
    return `${this.books[0]} was published in ${book.year}`;
}
console.log(library.info());


// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value to the console.
for (let property in book) {
    // Log each property and its value to the console
    console.log(`${property}: ${book[property]}`);
  }


// Task 9: Use Object.keys() method and Object.values() method to log all the keys and values of the book object to the console.
console.log(Object.keys(book));
console.log(Object.values(book));
