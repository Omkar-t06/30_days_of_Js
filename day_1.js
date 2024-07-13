// Day 1 tasks

//Task 1: Declare the varible using `var` and assign it a number and log it to console
var num = 19;
console.log(num);

//Task 2: Declare the varible using `let` and assign it a string and log it to console
let str = "Hello World!";
console.log(str);

//Task 3: Declare the varible using `const` and assign it a boolean and log it to console
const b = true;
console.log(b);

//Task 4: Create variables of different type(number,string,boolean,object and array) and log each varible's type to the console
let var1 = 6;
let var2 = "Omkar";
let var3 = true;
let var4 = {
    id : "12b3",
    name: "Omkar",
};
let var5 = [1,2,3,4,5];
console.log(typeof var1 +"\n" + typeof var2 +"\n" + typeof var3 +"\n" + typeof var4 +"\n" + typeof var5 +"\n");

//Task 5: Declare a varible with `let` ans assign with a initial value and reassign that with new value and log both the values to the console 
let reVar = "Manoj";
console.log(reVar);
reVar = "Mani";
console.log(reVar);

//Task 6: Try reassigning const variable and note the error message.
const c = "This is const";
c = "reassigning const";

// Error msg: `TypeError: Assignment to constant variable.`