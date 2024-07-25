// Create a module that exports an object representing a person with properties and methods.
const person = {
    name: 'Vishwajeet',
    age: 20,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
};

module.exports = person;