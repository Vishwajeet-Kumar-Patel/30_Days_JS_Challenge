// Write a function that takes an integer and returns the integer in reverse. Handle the edge cases like negative numbers and numbers ending with 0. Log the output to the console for few test cases.

const reverse = (num) => {
    let reversed = parseInt(num.toString().split('').reverse().join(''));
    if (num < 0) {
        return -reversed;
    }
    return reversed;
}

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321