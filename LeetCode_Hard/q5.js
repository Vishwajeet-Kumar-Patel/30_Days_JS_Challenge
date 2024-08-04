// Word Ladder : https://leetcode.com/problems/word-ladder/

// Write a function that takes a beginWord, endWord, and a dictionary of words and returns the length of the shortest transformation sequence from beginWord to endWord. Only one letter can be changed at a time and each transformed word must exist in the word list. Log the length of the shortest transformation sequence for beginWord = "hit", endWord = "cog", and wordList = ["hot","dot","dog","lot","log","cog"].

const ladderLength = (beginWord, endWord, wordList) => {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    const queue = [beginWord];
    let level = 1;

    while (queue.length) {
        const next = [];

        for (const word of queue) {
            if (word === endWord) return level;

            for (let i = 0; i < word.length; i++) {
                for (let j = 0; j < 26; j++) {
                    const newWord = word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);
                    if (wordSet.has(newWord)) {
                        next.push(newWord);
                        wordSet.delete(newWord);
                    }
                }
            }
        }

        queue.length = 0;
        queue.push(...next);
        level++;
    }

    return 0;
}

console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // 5
console.log(ladderLength("bat", "cot", ["bat","cot"])); 