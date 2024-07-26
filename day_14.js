// Activity 1: Class Definition
// Task 1: Define a class Person with properties name and age and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
    constructor(firstName,lastName,age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greeting() {
        console.log(`Hello! My name is ${this.firstName}. I am ${this.age} years old`)
    }

    // Task 2. Add a method to the Person class that updates the age property and logs the updated age
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Your age is updated to ${this.age} years`);
    }

    // Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message
    static genericGreetingMessage()  {
        return "Hello, welcome to the Person class!";
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

let p = new Person("Omkar","Tavva",19);
console.log(p);
p.updateAge(20)

// Activity 2. Class Inheritance
// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID, Create an instance of the Student class and log the student
class Student extends Person {
    static count = 0;
    constructor(firstName,lastName,age,studentId) {
        super(firstName,lastName,age);
        this.studentId = studentId;
        Student.count++;
    }

    // Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old and My student ID is ${this.studentId}`)
    }
}

let s1 = new Student("Omkar",19,123);
console.log(s1);
s1.greeting();

// Activity 3: Static Methods and Properties
// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
console.log(Person.genericGreetingMessage())

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
console.log(Student.count);

// Activity 4: Getters and Setters
// Task 7: Add a getter method to the Person class to return the full name (assume a firstname and lastname property). Create an instance and log the full name using the getter
console.log(p.fullName);

// Task: 8: Add a setter method to the Person class to update the name properties (firstname and lastname). Update the name using the setter and log the updated full name.
p.fullName = "Manoj Kokkula"
console.log(p.fullName)

// Activity 5: Private Fields (Optional)
// Task 9 Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods. 
class Account {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if(amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if(amount > 0 && amount < this.#balance){
            this.#balance -= amount;
            console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
        } else if(amount > this.#balance) {
            console.log('Insufficient funds.');
        } else {
            console.log('Withdraw amount must be positive.');
        }
    }

    getBalance() {
        return this.#balance;
    }
}

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation
const acc1 = new Account(100);

console.log(acc1.getBalance());
acc1.deposit(50);
acc1.withdraw(50)
