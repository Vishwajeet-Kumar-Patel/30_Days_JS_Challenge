// Write a function that takes a string and returns true if it is a palindrome. Log the output to the console for few test cases.

const isPalindrome = (str) => {
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false