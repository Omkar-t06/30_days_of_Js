// Activity 1: For Loop
// Task 1: Write a program to print numbers from 1 to 10 using a for Loop
for(let i = 1; i <= 10; i++ ) {
    console.log(i);
}

// Task 2: Write a program to print the multiplication table of 5 using a for Loop
for(let i = 1; i <= 10; i++ ) {
    console.log(`5 x ${i} = ` + (i * 5));
}

// Activity 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while Loop
let i = 1;
let sum = 0;

while(i <= 10) {
    sum += i;
    i++;
}
console.log(sum);
// Task 4: Write a program to print numbers from 10 to 1 using a while Loop
i--;
while(i >= 1) {
    console.log(i);
    i--
}

// Activity 3: Do... While Loop
// Task 5: Write a program to print numbers from 1 to 5 using a do.. while Loop
let j = 1;
do {
    console.log(j);
    j++;
} while(j <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do.. while Loop
let n = 5;
let fact = 1;
do {
    fact *= n;
    n--;
} while(n != 0);
console.log(fact);

// Activity 4: Nested Loop
// Task 7: Write a program to print a pattern using nested for loops:
// *
// **
// ***
// ****
// *****
let stars = 5;
for(let i = 1; i <= stars; i++) {
    let line = ""
    for(let j = 1; j <= i; j++){
        line += "*"
    }
    console.log(line);
}

// Activity 5: 
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the `continue` statement
for(let i = 1; i <= 10; i++ ) {
    if( i == 5) continue;
    console.log(i);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the `break` statement
for(let i = 1; i <= 10; i++ ) {
    if( i == 7 ) break;
    console.log(i);
}