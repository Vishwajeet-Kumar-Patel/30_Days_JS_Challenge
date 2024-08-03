// Write a function that takes an array of numbers and a target number, and returns the indices of two of the numbers that add up to the target number. Log the indices to the console for few test cases.

const twoSum = (arr, target) => {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if (map[diff] !== undefined) {
        return [map[diff], i];
        }
        map[arr[i]] = i;
    }
    return [];
    }
    console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

    console.log(twoSum([3, 2, 4], 6)); // [1, 2]