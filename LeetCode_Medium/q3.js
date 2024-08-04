// Container With Most Water
// Write a function that takes in an array of non-negative integers where each integer represents the height of a line drawn at each point. Find the two lines that together with the x-axis forms a container that would hold the greatest amount of water. Log the maximum amount of water for few test cases.

const maxArea = (height) => {
    let max = 0;
    let i = 0;
    let j = height.length - 1;
    
    while (i < j) {
        let h = Math.min(height[i], height[j]);
        max = Math.max(max, h * (j - i));
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return max;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1])); // 1