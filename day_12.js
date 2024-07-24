// Activity 1: Basic Error Handiing with Try Catch
// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
let handleError = () => {
    try {
        throw new Error("This was intentional")
    } catch (error) {
        console.error(error.message)
    } 
}

handleError()

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
let divides = (a,b) =>{
    if(b == 0) {
        throw new Error("Divison By Zero Error")
    }
    return a / b; 
}

function handleDivision(n1,n2) {
    try {
        let result = divides(n1,n2);
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

handleDivision(1,1);
handleDivision(1,0);

// Activity 2: Finally Block
// Task 3. Write a script that includes a try-catch block and a finally block Log messages in the try, catch, and finally blocks to observe the execution flow
try {
    console.log('This is from try');
    throw new Error("This is to catch block");
} catch (error) {
    console.error(error.message)
} finally {
    console.log('Finally the finally block!')
}

// Activity 3: Custom Error Objects
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try catch block.
class DivisionByZeroError extends Error{
    constructor(message) {
        super(message);
        this.message = "Division By Zero Error";
    }
}

function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        throw new DivisionByZeroError("Division by zero is not allowed.");
    }
    return numerator / denominator;
}

function handleDivision1(n1,n2) {
    try {
        let result = divideNumbers(n1,n2);
        console.log(result);
    } catch (error) {
        if(error instanceof DivisionByZeroError)
        console.error(`Custom Error: ${error.name} - ${error.message}`);
        else
        console.error(`General Error: ${error.name} - ${error.message}`);
    }
}

handleDivision1(1,0);
// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try catch block
class ValidateError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
    }
}

function validateInput(userInput) {
    if(!userInput || userInput.trim() === "") {
        throw new ValidateError("This input is empty");
    } else
        return true
}

function handleValiidation(input) {
    try {
        let isValid = validateInput(input);
        console.log(`Validation Successfull: ${isValid}`);
    } catch (error) {
        if(error instanceof ValidateError)
            console.error(`Validate Error: ${error.name} - ${error.message}`);
        else
            console.error(`General Error: ${error.name} - ${error.message}`)
    }
}

handleValiidation("Hello")
handleValiidation("")

// Activity 4. Error Handling in Promises
// Task 6: Create a promise that randomly resolves or rejects. Use catch() to handle the rejection and log an appropriate message to the console. 
function createRandomPromise() {
    return new Promise(
        (resolves,rejects) => {
            const random = Math.random();
            setTimeout(() => {
                if(random < 0.5) {
                    resolves("Promise resolve Successfully!");
                } else {
                    rejects("Promise reject due to random reason!")
                }
            },2000);
        }
    )
}

function handleRandomPromise() {
    createRandomPromise()
        .then((message) => {
            console.log(message);
        })
        .catch((error) => {
            console.error("An error occurred:", error);
        });
}

handleRandomPromise();

// Task 7: Use try-catch within an async function to handie errors from a promise that randomly resolves or rejects, and log the error message
async function handleRandomPromiseWithAsync()  {
    try {
        console.log(await createRandomPromise())
    } catch (error) {
        console.error("An error occurred:", error)
    }
}

handleRandomPromiseWithAsync()
// Activity 5: Graceful Error Handling in Fetch
// Task 8: Use the fetch API to request data from an invalid URL, and handle the error using catch() Log an appropriate error message to the console.
fetch('https://invalid.url/endpoint')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Fetch error:', error.message);
    });

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch Log an appropriate error message.
async function fetchData() {
    try {
        let response = await fetch('https://invalid.url/endpoint');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error.message);
    }
}

fetchData()