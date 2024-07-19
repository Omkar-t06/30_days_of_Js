// Activity 1: Object Creation and Access
// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
let book = {
    title : "The Quotes of Kotlin",
    author: "Omkar Tavva",
    year  : 2026
}

console.log(book);
// Task 2: Access and log the title and author properties of the book object.
console.log(book.title);
console.log(book["author"]);

// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.getDetails = function() {
    return `Title: ${book.title}, Author: ${book.author}`;
}

console.log(book.getDetails())
// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function(year) {
    book.year = year;
}

book.updateYear(2027);
console.log(book);

// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console. 
let book1 = {
    title: "The FLuttering Dart",
    author: "Omkar Tavva",
    year: 2028,
    getDetails: function() {
        return `Title: ${this.title}, Author: ${this.author}`;
    },
    updateYear: function(year) {
        this.year = year;
    }
};

let library = {
    name : "Om Sai Ram",
    books: [
        book,
        book1
    ]
}

console.log(library);
// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.name);
library.books.forEach((book,index)=>{
    console.log(`Book ${index+1}, Title ${book.title}`);
});

// Activity 4: The this Keyword
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.getThisDetails = function() {
    return `Title: ${this.title} and Year: ${this.year}`
}

console.log(book.getThisDetails());
// Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for(i in book) {
    console.log(book[i]);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book));
console.log(Object.values(book));