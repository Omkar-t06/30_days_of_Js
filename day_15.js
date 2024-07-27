// Activity 1: Understanding Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function init() {
    let name = "Omkar";
    function displayName() {
        console.log(name);
    }
    displayName();
}

init()
// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.  
function createCounter() {
    let counter = 0;

    return {
        increment: function() {
            counter += 1;
        },
        getValue: function() {
            return counter;
        }
    };
}

const myCounter = createCounter();

myCounter.increment();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getValue())

// Activity 2: Practical Closures
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call. 
function createIDGenerator() {
    let lastId = 0;
    return function() {
        lastId++;
        return lastId;
    }
}

let generateId = createIDGenerator();

console.log(generateId());
console.log(generateId());
console.log(generateId());
console.log(generateId());

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function createGreeter(name) {
    return function() {
        return `Hello ${name}`
    }
}

let greetOmkar = createGreeter("Omkar");
console.log(greetOmkar());

// Activity 3: Closures in Loops
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
let functionArray = [];

for(let i = 0;i < 5;i++) {
    functionArray.push(
        (function(index){
            return function () {
                console.log(index);
            }
        })(i)
    )
}

functionArray[0]();
functionArray[1]();
functionArray[2]();
functionArray[3]();
functionArray[4]();

// Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
const itemManager = (function () {
    let items = [];
    return {
        addItem: function(item) {
            items.push(item);
            console.log(`${item} has been added.`);
        },
        removeItem: function (item) {
            const index = items.indexOf(item);
            if(index > -1){
                items.splice(index,1);
                console.log(`${item} has been removed item.`);
            } else {
                console.log(`${item} not found`);
            }
        },
        listItem: function () {
            if(items.length == 0){
                console.log("List is empty");
            } else {
                items.forEach((item,index) => {
                    console.log(`${index + 1} : ${item}`);
                });
            }
        }
    };
})();

itemManager.addItem("Omkar");
itemManager.addItem("Manoj");
itemManager.listItem();
itemManager.removeItem("Omkar");
itemManager.listItem();

// Activity 5: Memoization
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args); // Convert arguments to a string key
        if (cache[key]) {
            return cache[key]; // Return cached result if it exists
        }
        const result = fn(...args); // Compute the result if not cached
        cache[key] = result; // Store the result in the cache
        return result;
    };
}

// Task 8: Create a memoized version of a function that calculates the factorial of a number.
// Regular factorial function
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Memoized factorial function
const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));