// Activity 1: Sorting Algorithms
// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

let array1 = [5, 3, 8, 4, 2];
console.log(bubbleSort(array1));

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order Log the sorted array.
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

let array2 = [64, 25, 12, 22, 11];
console.log(selectionSort(array2));

// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order Log the sorted array.
function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    return [...quicksort(left), pivot, ...quicksort(right)];
}

let array3 = [10, 7, 8, 9, 1, 5];
console.log(quicksort(array3));

// Activity 2: Searching Algorithms
// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target velue.
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let array4 = [2, 3, 4, 10, 40];
let target1 = 10;
console.log(linearSearch(array4, target1));

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

let array5 = [2, 3, 4, 10, 40];
let target2 = 10;
console.log(binarySearch(array5, target2));

// Activity 3: String Algorithms
// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
function countCharOccurrences(str) {
    let charCount = {};
    
    for (let char of str) {
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
    
    return charCount;
}

let str1 = "hello world";
console.log(countCharOccurrences(str1));

// Task 7 Write a function to find the longest substring without repeating characters in a string. Log the length of the string
function longestUniqueSubstring(str) {
    let seen = new Set();
    let start = 0;
    let maxLength = 0;
    
    for (let end = 0; end < str.length; end++) {
        while (seen.has(str[end])) {
            seen.delete(str[start]);
            start++;
        }
        seen.add(str[end]);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}

let str2 = "abcabcbb";
console.log(longestUniqueSubstring(str2));

// Activity 4 Array Algorithms
// Task 8: Write a function to rotate en array by k positions. Log the rotated array.
function rotateArray(arr, k) {
    k = k % arr.length;
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

let array6 = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log(rotateArray(array6, k));

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0;
    let j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    
    return merged;
}

let array7 = [1, 3, 5, 7];
let array8 = [2, 4, 6, 8];
console.log(mergeSortedArrays(array7, array8));

// Activity 5 Dynamic Programming (Optional)
// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci number
// Task 11: Write a function to solve the knapsack problem using dynamic pragramming. Log the maximum value that can be obtained.
