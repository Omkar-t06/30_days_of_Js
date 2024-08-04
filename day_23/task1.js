// Task 1: Solve the "Median of Two Sorted Arrays problem on LeetCode.
// Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// Log the median for a few test cases, including edge cases.

var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    let len = mergedArray.length;
    if (len % 2 === 0) {
        return (mergedArray[len / 2 - 1] + mergedArray[len / 2]) / 2;
    } else {
        return mergedArray[Math.floor(len / 2)];
    }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([], [1]));
console.log(findMedianSortedArrays([0, 0], [0, 0]));