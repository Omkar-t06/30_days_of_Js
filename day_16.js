// Activity 1: Basic Recursion
// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function fact(n) {
    if(n == 1)
        return n;
    return n * fact(n - 1);
}

console.log(fact(5))
console.log(fact(6))
console.log(fact(7))
console.log(fact(8))
console.log(fact(9))
console.log();

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fibonacci(n) {
    if(n <= 1) {
        return 1
    }
    return fibonacci(n-1) + fibonacci(n - 2);
}

console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log();

// Activity 2: Recursion with Arrays
// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases. 
function reArrSum(ar,n) {
    if(n < 0){
        return 0;
    } else {
        return ar[n] + reArrSum(ar,n - 1)
    }
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [10, 20, 30, 40, 50];
let array3 = [0, -1, 1, -2, 2];
let array4 = [];
let array5 = [7];

console.log(reArrSum(array1, array1.length - 1));
console.log(reArrSum(array2, array2.length - 1));
console.log(reArrSum(array3, array3.length - 1));
console.log(reArrSum(array4, array4.length - 1));
console.log(reArrSum(array5, array5.length - 1));
console.log();

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function findMax(arr,n) {
    if(n === 0) {
        return "array is empty";
    }
    if (n === 1) {
        return arr[0];
    }

    return Math.max(arr[n - 1], findMax(arr, n - 1));
}

console.log(findMax(array1, array1.length));
console.log(findMax(array2, array2.length));
console.log(findMax(array3, array3.length));
console.log(findMax(array4, array4.length));
console.log(findMax(array5, array5.length));
console.log();

// Activity 3: String Manipulation with Recursion
// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseStr(str) {
    if(str === "") {
        return "";
    }

    return reverseStr(str.substr(1)) + str.charAt(0)
}

console.log(reverseStr("omkar"));
console.log(reverseStr("o"));
console.log(reverseStr("manoj"));
console.log(reverseStr("ma"));
console.log(reverseStr("day16"));
console.log();

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Helper recursive function
    function checkPalindrome(s, start, end) {
        // Base case: If the start index is greater than or equal to the end index, it's a palindrome
        if (start >= end) {
            return true;
        }
        // If characters at the current indexes do not match, it's not a palindrome
        if (s[start] !== s[end]) {
            return false;
        }
        // Recursive case: Move towards the middle of the string
        return checkPalindrome(s, start + 1, end - 1);
    }

    return checkPalindrome(str, 0, str.length - 1);
}

// Test cases for isPalindrome
console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));                          
console.log(isPalindrome("Was it a car or a cat I saw?"));   
console.log(isPalindrome("No 'x' in Nixon"));
console.log(isPalindrome("12321"));
console.log(isPalindrome("12345"));
console.log();


// Activity 4: Recursive Search
// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr,target,left = 0,right = arr.length - 1) {
    if(left > right) {
        return -1;
    }

    let mid = Math.floor((left + right) / 2);

    if(arr[mid] === target) {
        return mid;
    } else if(arr[mid] > target) {
        return binarySearch(arr,target,left,mid - 1);
    } else {
        return binarySearch(arr,target,mid + 1,right);
    }
}
// Test cases for binarySearch
let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(sortedArray, 5));
console.log(binarySearch(sortedArray, 1));
console.log(binarySearch(sortedArray, 10));
console.log(binarySearch(sortedArray, 11));
console.log();

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function targetCount(arr,target,index = 0) {
    if(index > arr.length - 1) {
        return 0;
    }

    let count = (arr[index] === target) ? 1 : 0;
    return count + targetCount(arr,target,index + 1);
}

let array = [1, 2, 3, 4, 5, 2, 2, 6, 2];
console.log(targetCount(array, 2));
console.log(targetCount(array, 5));
console.log(targetCount(array, 7));

console.log();

// Activity 5: Tree Traversal (Optional)
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

let root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left);
        console.log(node.value);
        inOrderTraversal(node.right);
    }
}

inOrderTraversal(root);
console.log();
// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
function calculateDepth(node) {
    if (node === null) {
        return 0; // Base case: empty tree
    }

    let leftDepth = calculateDepth(node.left);
    let rightDepth = calculateDepth(node.right);

    return Math.max(leftDepth, rightDepth) + 1;
}

let root2 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, null, new TreeNode(6)));
console.log(calculateDepth(root2));

let root3 = new TreeNode(1);
console.log(calculateDepth(root3));

let root4 = null;
console.log(calculateDepth(root4));