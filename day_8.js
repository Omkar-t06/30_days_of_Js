// Activity 1: Template Literals


// Task 1: Use template itevsh to create a string that includes variables for a person's name and age, and log the vering to the console
let pName = "Omkar";
let pAge = 19;
let s = `${pName} is of ${pAge} year`;
console.log(s); 

// Task 2: Create a multi-line string using template literals and log it to the console
let para = `
Hi! This is Omkar Tavva.
Doing 30 Days Of JS from Chai Aur Code; 
`

console.log(para);

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console. 
let arr = [1,2,3,4,5]
let [a,b] = arr
console.log(a,b);

// Task 4: the object destructuring to extract the title and author from a book object and log them to the console.
let book = {
    title : "The Quotes of Kotlin",
    author: "Omkar Tavva",
    year  : 2026
}
let {title: bookTitle,author: bookAuthor} = book;
console.log(`${bookTitle} - ${bookAuthor}`);

// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console. 
let arr1 = [...arr,6,7,8,9,10]
console.log(arr1);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...nums){
    return nums.reduce((acc,curr) => acc + curr,0);
}

console.log(sum(1,2,3,3,3,3));

// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter
function product(a, b = 1) {
    return a * b;
}
console.log(product(2))
console.log(product(2,2))

// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console. 
let person = {
    name : "Omkar",
    age: 30,
    role: "SDE",

    greet () {
        console.log(`${this.name} is of ${this.age} year. I am a ${this.role}`)
    }
}

person.greet();

// Task 9: Create an object with computed property names based on variables and log the object to the console
const prop1 = "first-name"
const prop2 = "last-name"
const prop3 = "age"
let person2 = {
    [prop1] : "Omkar",
    [prop2] : "Tavva",
    [prop3] : 19
}

console.log(person2);