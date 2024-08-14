// Activity 5: Word Ladder

// Task 5: Solve the "Word Ladder" problem on LeetCode.
// Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list. Log the length of the shortest transformation sequence for a few test cases.
function ladderLength(beginWord,endWord,wordList) {
    let wordSet = new Set(wordList);
    if(!wordSet.has(endWord)) return 0;

    let queue = [[beginWord, 1]];
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    while(queue.length > 0) {
        let [word, length] = queue.shift();
        if(word === endWord) return length;

        for (let i = 0; i < word.length; i++) {
            for(let c of alphabet) {
                let newWord = word.slice(0,i) + c + word.slice(i + 1);
                if (wordSet.has(newWord)) {
                    queue.push([newWord,length + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }

    return 0;
}



// Test cases
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // Expected output: 5
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])); // Expected output: 0