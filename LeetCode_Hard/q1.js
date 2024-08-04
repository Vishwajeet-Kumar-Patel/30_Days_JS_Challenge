// Median of Two Sorted Arrays : Write a function that takes two sorted arrays and returns the median of the two arrays. Log the median for few test cases.

const findMedianSortedArrays = (nums1, nums2) => {
    let merged = [...nums1, ...nums2].sort((a, b) => a - b);
    let mid = Math.floor(merged.length / 2);
    return merged.length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
}

console.log(findMedianSortedArrays([1,3], [2])); // 2
console.log(findMedianSortedArrays([1,2], [3,4])); // 2.5