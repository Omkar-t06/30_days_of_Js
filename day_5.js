// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function evenOrOdd(n) {
    if(n % 2 == 0)  
        console.log(`${n} is even`);
    else 
        console.log(`${n} is odd`);
}
// Task 2: Write a function to calculate the square of a number and return the result.
function nSquare(n) {
    return n * n;    
}

evenOrOdd(2);
console.log(nSquare(2));
// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
let maxi = function(a,b) {
    a > b ? console.log(`${a} is greater`) : console.log(`${b} is greater`)
}

maxi(2,5);
// Task 4: Write a function expression to concatenate two strings and return the result.
let concatStr = function(str1,str2) {
    return str1+str2;
}

console.log(concatStr("om","kar"));
// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
let sum = (a,b) => a + b;
console.log(sum(1,2));

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
let containsChar = (str,char) => str.includes(char)
console.log(containsChar("omkar","a"));

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and retums their product. Provide a default value for the second parameter.
function productof(n1,n2 = 2) {
    return n1 * n2;
}
console.log(productof(2));
console.log(productof(2,3));

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greeting(pName,pAge = 18) {
    return `Hello ${pName}! You are ${pAge} old. How are you doing`
}

console.log(greeting('omkar'));
console.log(greeting('manoj',21));
// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
let callFunctionNTime = (fn,n) => {
    for(let i = 0; i< n;i++){
        fn();
    }
}

let sayHello = () => console.log("Hello")
callFunctionNTime(sayHello,3)

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result
let applyFunction = (fn1,fn2,n) => {
    let res1 = fn1(n);
    let res2 = fn2(res1);
    return res2
}

console.log(applyFunction(nSquare,productof,2));
