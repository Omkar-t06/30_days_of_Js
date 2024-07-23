// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
let p = new Promise((res,rej) => {
    setTimeout(() => {
        res("This is a Promise which is resolved")
    },2000);
});

p.then((mes) => {
    console.log(mes)
});

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch()
let p1 = new Promise((res,rej) => {
    setTimeout(() => {
        rej("This is a Promise which is rejected")
    },2000);
});

p1.then((mes) => {
    console.log(mes)
}).catch((err) => console.error(err));

// Activity 2: Chaining Promises
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
let p2 = new Promise((resolve,reject) => {
    setTimeout(function(){
        console.log("resolved after 2 seconds")
        resolve("The data is being fetched from server...")
    },2000)
})

p2.then((msg) => {
    console.log(msg);
    let p = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!")
        }, 2000);
    })
    return p;
}).then((msg) => {
    console.log(msg)
    return "Data Processed Successfully!!!"
}).then((msg) => {
    console.log(msg)
});

// Activity 3: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
async function main1() {
    try {
        console.log(await p1);
    } catch (error) {
        console.error(error);
    }
}
main1();
// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function main2() {
    try {
        console.log(await p2)
    } catch (error) {
        throw error
    }
}

main2()
// Activity 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch((err) => console.error(err));

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function apiFetch() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let data = await res.json();
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

apiFetch()
// Activity 5: Concurrent Promises
// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
let promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved")
    },1000)
});
let promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved")
    },2000)
});
let promise3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved")
    },3000)
});

Promise.all([promise1,promise2,promise3])
.then((values) => {
    console.log(values)
}).catch((error) => {
    console.error(error);
});

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([promise1,promise2,promise3])
.then((value) => {
    console.log(value)
}).catch((error) => {
    console.error(error);
});
