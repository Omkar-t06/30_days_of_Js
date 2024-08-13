// Activity 3: Trapping Rain Water

// Task 3: Solve the "Trapping Rain Water" problem on LeetCode.

// Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining. Log the amount of trapped water for a few test cases.

function trap(heights) {
    let left = 0, right = heights.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left < right) {
        if(heights[left] < heights[right]) {
            if(heights[left] >= leftMax) {
                leftMax = heights[left];
            } else {
                water += leftMax - heights[left]
            } 
            left++;
        } else {
            if(heights[right] >= rightMax) {
                rightMax = heights[right]
            } else {
                water += rightMax - heights[right]
            } 
            right--;
        }
    }

    return water;
}

// Test cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected output: 6
console.log(trap([4,2,0,3,2,5])); // Expected output: 9