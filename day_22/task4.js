// Activity 4: 3Sum

// Task 4: Solve the "3Sum" problem on LeetCode.
// Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero. Log the triplets for a few test cases, including edge cases.

function threeSum(nums) {
    const result = []
    nums.sort((a,b) => a - b);

    for(let i = 0; i <= nums.length - 1; i++) {
        if(i > 0 && nums[i] === nums[i + 1]) {
            continue; // Skipping duplicates for first number
        }

        let left = i;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if(sum === 0) {
                result.push([nums[i], nums[left], nums[right]])
                while(left < right && nums[left] === nums[left + 1]) left++
                while(left < right && nums[right] === nums[right + 1]) right--
                left++;
                right--;
            } else if(sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 0, 0])); // [[0, 0, 0]]
console.log(threeSum([3, 0, -2, -1, 1, 2])); // [[-2, -1, 3], [-2, 0, 2], [-1, 0, 1]]