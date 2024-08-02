// Task 3: Solve the "Palindrome Number problem on LeetCode.
// Write a function that takes an integer and returns true if it is a palindrome, and false otherwise. Log the result for a few test cases, including edge cases like negative numbers.


function isPalindrome(x) {
    if (x < 0) return false;
    const str = x.toString();
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));