// Write a function that takes a string of parentheses and returns true if the parentheses are valid and false if they are not. Log the output to the console for few test cases.

const validParenthesis = (str) => {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
            stack.push(str[i]);
        } else {
            let last = stack.pop();
            if (str[i] !== map[last]) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
}

console.log(validParenthesis('()')); // true

console.log(validParenthesis('()[]{}')); // true

console.log(validParenthesis('(]')); // false