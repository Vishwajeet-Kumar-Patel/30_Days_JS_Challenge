// Trapping Rain Water : https://leetcode.com/problems/trapping-rain-water/

// Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, computes how much water it can trap after raining. Log the amount of water that can be trapped for few test cases.

const trap = (height) => {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let trapped = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= leftMax ? (leftMax = height[left]) : trapped += leftMax - height[left];
            left++;
        } else {
            height[right] >= rightMax ? (rightMax = height[right]) : trapped += rightMax - height[right];
            right--;
        }
    }

    return trapped;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
console.log(trap([4,2,0,3,2,5])); // 9