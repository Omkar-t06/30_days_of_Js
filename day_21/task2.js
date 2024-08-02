// Activity 2: Reverse Integer
// Task 2: Solve the "Reverse Integer" problem on LeetCode.
// Write a function that takes an integer and returns it with its digits reversed.
//     - Handle edge cases like negative numbers and numbers ending in zero.
//     - Log the reversed integers for a few test cases.

function reverseInt(x) {
    const sign = x < 0 ? -1 : 1;
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;
    return (reversed >= Math.pow(2, 31) * -1 && reversed <= Math.pow(2, 31) - 1) ? reversed : 0;
}

console.log(reverseInt(123));
console.log(reverseInt(-123));
console.log(reverseInt(120));