// Activity 5: Group Anagrams

// Task 5: Solve the "Group Anagrams" problem on LeetCode.
// Write a function that takes an array of strings and groups anagrams together. Log the grouped anagrams for a few test cases

function groupAnagrams(strs) {
    const map = new Map();

    for(let str of strs) {
        const sortedStr = str.split('').sort().join('')
        if(!map.has(sortedStr)) {
            map.set(sortedStr,[])
        }
        map.get(sortedStr).push(str)
    }

    return Array.from(map.values());
}

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]