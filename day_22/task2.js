// Task 2: Solve the "Longest Substring Without Repeating Characters problem on LeetCode."

// Write a function that takes a string and returns the length of the longest substring without repeating characters.Log the length for a few test cases, including edge cases.

function lengthOfLongestSubstring(str) {
    let len = str.length;

    if(len === 0 || len === 1) {
        return len
    }
    
    let set = new Set();
    let maxLen = 0, i = 0, j = 0;


    while(i < len && j < len) {
        if(!set.has(str[j])){
            set.add(str[j++]);
            maxLen = Math.max(maxLen, set.size);
        } else {
            set.delete(str[i++]);
        }
    }

    return maxLen;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("")); // 0
console.log(lengthOfLongestSubstring("a")); // 1