// Task 1: Define a class Person with properties name and age, and a method to return a greeting message.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    // Task 2: Add a method to the class Person that updates age property and logs the updated message.
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Age updated to ${this.age}`);
    }
  
    // Task 5: Add a static method to the Person class that returns a generic greeting message.
    static greetAll() {
      console.log('Hello, everyone!');
    }
  
    // Task 7: Add a getter method to the Person class that returns the full name.
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    // Task 8: Add a setter method to the Person class that updates the first name and last name properties.
    set fullName(name) {
      const [firstName, lastName] = name.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  
  // Create an instance of the class and log the greeting message.
  const person = new Person('Vishwajeet', 20);
  console.log(person.greet());
  person.updateAge(21);
  console.log(person.greet());
  
  Person.greetAll();
  
  // Create an instance and log the full name using the getter method.
  const person1 = new Person('Vishwajeet', 20);
  person1.firstName = 'Vishwajeet';
  person1.lastName = 'Kumar';
  console.log(person1.fullName);
  person1.fullName = 'Randy Orton';
  console.log(person1.fullName);
  
  // Task 3: Define a class Student that extends Person class and has a new property studentId and a method to return studentId.
  class Student extends Person {
    static studentCount = 0;
  
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
      Student.studentCount++;
    }
  
    getStudentId() {
      return this.studentId;
    }
  
    // Task 4: Override the greeting method in the Student class to include studentId in the greeting message.
    greet() {
      const message = `Hello, my name is ${this.name}, my student ID is ${this.studentId}, and I am ${this.age} years old.`;
      console.log(message);
      return message;
    }
  }
  
  // Create an instance of the class Student and log the studentId.
  const student = new Student('Vishwajeet', 20, 65);
  console.log(student.getStudentId());
  console.log(student.greet());
  console.log(Student.studentCount);
  
  // Task 9: Define a class Account with private fields for a balance and a method to deposit and withdraw money.
  class Account {
    #balance = 0;
  
    deposit(amount) {
      this.#balance += amount;
      console.log(`Deposited ${amount}. Balance is now ${this.#balance}`);
    }
  
    withdraw(amount) {
      if (amount > this.#balance) {
        console.log('Insufficient balance');
      } else {
        this.#balance -= amount;
        console.log(`Withdrew ${amount}. Balance is now ${this.#balance}`);
      }
    }
  }
  
  // Task 10: Create an instance of the Account class and test the deposit and withdraw methods.
  const account = new Account();
  account.deposit(100);
  account.withdraw(50);
  account.withdraw(60);
  account.deposit(200);
  account.withdraw(100);
  