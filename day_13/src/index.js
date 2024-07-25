// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
const add = require('../add');

const result = add(2, 3);
console.log(result);

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const person = require('../person_obj');
person.getDetails();

// Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
const {add1,sub} = require('../math')
console.log(add(2,2)) 
console.log(sub(2,2)) 

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
const greet = require('../greet');
greet("Ram");

// Activity 3: Importing Entire Modules
// Task 5: Create a module that exports multiple constants and functions, Import the entire module as an object in another script and use its properties.
const utils = require('../utils');
console.log(utils.PI);
console.log(utils.add(2,2));
console.log(utils.multiply(2,2));

// Activity 4: Using Third-Party Modules
// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
const _ = require('lodash');

const numbers = [10, 5, 100, 2, 1000];
console.log(_.max(numbers));

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Activity 5: Module Bundling (Optional)
// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.