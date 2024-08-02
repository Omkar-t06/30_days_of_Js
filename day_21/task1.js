//Activity 1: Two Sum
// Task 1: Solve the "Two Sum" problem on LeetCode.
// Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target. Log the indices for a few test cases.
function twoSum(nums,target) {
    const map = new Map();
    for(let i = 0;i < nums.length; i++) {
        let diff = target - nums[i];
        if(map.has(diff)){
            return [map.get(diff),i];
        }
        map.set(nums[i],i);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));