// 3Sum : Write a function that takes an array of integers and returns all the unique triplets in the array which gives the sum of zero. Log the triplets for few test cases.

const threeSum = (nums) => {
    let result = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let low = i + 1;
            let high = nums.length - 1;
            let sum = 0 - nums[i];
            
            while (low < high) {
                if (nums[low] + nums[high] === sum) {
                    result.push([nums[i], nums[low], nums[high]]);
                    while (low < high && nums[low] === nums[low + 1]) low++;
                    while (low < high && nums[high] === nums[high - 1]) high--;
                    low++;
                    high--;
                } else if (nums[low] + nums[high] < sum) {
                    low++;
                } else {
                    high--;
                }
            }
        }
    }
    return result;
}

console.log(threeSum([-1,0,1,2,-1,-4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,0,0,0])); // [[0,0,0]]