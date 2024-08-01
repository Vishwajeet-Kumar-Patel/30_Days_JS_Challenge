// Task 1: Write a regular expression to match a simple pattern. Log the matches.
const pattern = /hello/;
const str = 'hello world';

console.log(str.match(pattern)); // Output: [ 'hello', index: 0, input: 'hello world', groups: undefined ]


// Task 2: Write a regular expression to match all digits in a string. Log the matches.
const pattern1 = /\d/g;
const str1 = 'hello 123 world 456';

console.log(str1.match(pattern1)); // Output: [ '1', '2', '3', '4', '5', '6' ]


// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const pattern2 = /[A-Z]\w+/g;
const str2 = 'Hello World';

console.log(str2.match(pattern2)); // Output: [ 'Hello', 'World' ]


// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches. 
const pattern3 = /\d+/g;
const str3 = 'hello 123 world 456';

console.log(str3.match(pattern3)); // Output: [ '123', '456' ]


// Task 5: Write a regular expression to capture the area code, central office code, and a line number for a US phone number. Log the catures.
const pattern4 = /(\d{3})-(\d{3})-(\d{4})/;
const str4 = '555-555-5555';

console.log(str4.match(pattern4)); // Output: [ '555-555-5555', '555', '555', '5555', index: 0, input: '555-555-5555', groups: undefined ]


// Task 6: Write a regular expression to capture the username and domain name from an email address. Log the captures.
const pattern5 = /(\w+)@(\w+\.\w+)/
const str5 = 'vishwajeetcenation@gmail.com';

console.log(str5.match(pattern5)); 


// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
const pattern6 = /^\w+/;
const str6 = 'hello world';

console.log(str6.match(pattern6)); // Output: [ 'hello', index: 0, input: 'hello world', groups: undefined ]


// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
const pattern7 = /\w+$/;
const str7 = 'hello world';

console.log(str7.match(pattern7)); // Output: [ 'world', index: 6, input: 'hello world', groups: undefined ]


// Task 9: Write a regular expression to validate a simple password(must include at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long). Log the matches.
const pattern8 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const str8 = 'Password1';

console.log(str8.match(pattern8)); // Output: [ 'Password1', index: 0, input: 'Password1', groups: undefined ]


// Task 10: Write a regular expression to validate an URL. Log whether the URL is valid or not.
const pattern9 = /^(http|https):\/\/[a-z]+\.[a-z]+$/;
const str9 = 'https://www.google.com';

console.log(pattern9.test(str9)); // Output: false
console.log(pattern9.test('www.google.com')); // Output: false