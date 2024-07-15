//Activity 1: if else statements
//Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to thee console.

let n = 0;

if(n > 0){
    console.log(n + " is positive");
} else if (n == 0) {
    console.log(n + " is zero");
} else {
    console.log(n + " is negative");
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to thee console.
let age = 12;

if(age < 18) {
    console.log("You are not eligible to vote");
} else {
    console.log("You are eligible to vote");
}

//Activity 2: Nested if else statements
// Task 3: Write a program to find the largest of three numbers using nested if else statements
let n1 = 5,n2 = 7,n3 = 9;
if(n1 > n2) {
    if(n1 > n3) {
        console.log(n1 + " is largest");
    } else {
        console.log(n3 + " is largest");
    }
} else {
    if(n2 > n3) {
        console.log(n1 + " is largest");
    } else {
        console.log(n3 + " is largest");
    }
}

// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1 - 7) and log the day name to the console. 
switch(n2){
    case 1: console.log("Sunday")
    break;
    case 2: console.log("Monday")
    break;
    case 3: console.log("Tuesday")
    break;
    case 4: console.log("Wednesday")
    break;
    case 5: console.log("Thusday")
    break;
    case 6: console.log("Friday")
    break;
    case 7: console.log("Saturday")
    break;
    default: console.log("Wrong Choice")
}
// Task 5: Write a program that uses a switch case to assign a grade ('A', B, C, D', 'P) based on a score and log the grade to the console.
let marks = 50;
let grade;

switch (true) {
    case (marks > 90):
        grade = "A";
        break;
    case (marks >= 80):
        grade = "B";
        break;
    case (marks >= 70):
        grade = "C";
        break;
    case (marks >= 60):
        grade = "D";
        break;
    case (marks >= 40):
        grade = "P";
        break;
    default:
        grade = "F";
}

console.log(`The grade is: ${grade}`);

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the temary operator to check if a number is even or odd and log the result to the console.
let evenOrOdd = (n) =>  n % 2 == 0 ? "Even" : "Odd";
console.log(evenOrOdd(5));

// Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 200;
if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}