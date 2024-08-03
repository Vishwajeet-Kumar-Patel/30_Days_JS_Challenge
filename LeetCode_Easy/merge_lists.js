// Write a function that takes two sorted linked lists and merges them into a single sorted linked list. Log the output to the console for few test cases.

const mergeLists = (l1, l2) => {
    let merged = [];
    while (l1.length && l2.length) {
        if (l1[0] < l2[0]) {
            merged.push(l1.shift());
        } else {
            merged.push(l2.shift());
        }
    }
    return merged.concat(l1).concat(l2);
}

console.log(mergeLists([1, 2, 4], [1, 3, 4])); // [1, 1, 2, 3, 4, 4]