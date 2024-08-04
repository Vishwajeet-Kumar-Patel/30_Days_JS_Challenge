// Group Anagrams : Write a function that takes in an array of strings and groups anagrams together. Log the grouped anagrams for few test cases.

const groupAnagrams = (strs) => {
    let map = {};
    
    for (let str of strs) {
        let key = [...str].sort().join('');
        map[key] = map[key] ? [...map[key], str] : [str];
    }
    return Object.values(map);
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); // [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(groupAnagrams(["a"])); // [["a"]]