// Longest Substring Without Repeating Characters

const lengthOfLongestSubstring = (s) => {
    let longest = 0;
    let start = 0;
    let end = 0;
    let set = new Set();
    while (end < s.length) {
        if (!set.has(s[end])) {
            set.add(s[end]);
            longest = Math.max(longest, set.size);
            end++;
        } else {
            set.delete(s[start]);
            start++;
        }
    }
    return longest;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1