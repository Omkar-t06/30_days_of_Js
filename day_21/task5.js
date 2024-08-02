// Activity 5: Valid Parentheses
// Task 5: Solve the "Valid Parentheses problem on LeetCode.
// - Write a function that takes a string containing just the characters (, T, T, T. T and T, and determines if the input string is valid. A string is valid if open brackets are closed in the correct order.
// - Log the result for a few test cases.

function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i]);
        } else {
            const last = stack.pop();
            if (s[i] !== map[last]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Test cases
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
