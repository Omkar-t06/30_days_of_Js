// Activity 1: Selecting and Manipulating Elements
// Task 1: Select an HTML element by its ID and change its text content.
let header = document.getElementById("header");
header.innerText ='Hello World'

// Task 2: Select an HTML element by its class and change its background color.
let p = document.getElementsByClassName("ch-color");
p[0].style.backgroundColor = "red";

// Activity 2: Creating and Appending Elements
// Task 3: Create a new div element with some text content and append it to the body.
let newDiv = document.createElement("div");
newDiv.textContent = "Appended Div"

document.body.appendChild(newDiv);
// Task 4: Create a new li element and add it to an existing ul list.
let ul = document.getElementById("list");
let newLi = document.createElement("li");
newLi.textContent = "item 0";

ul.prepend(newLi);

// Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM.
let removeChild = document.getElementById("remove");
removeChild.remove();

// Task 6: Remove the last child of a specific HTML element.
ul.removeChild(ul.lastElementChild)

// Activity 4: Modifying Attributes and Classes
// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
let my_linkedIn = document.getElementById("my_link");
my_linkedIn.setAttribute("href","https://www.google.com/")
my_linkedIn.setAttribute("target","_blank")

// Task 8: Add and remove a CSS class to/from an HTML element.
function addClass() {
    let h3 = document.getElementById("header3");
    h3.classList.add("highLight")
}
function dropClass() {
    let h3 = document.getElementById("header3");
    h3.classList.remove("highLight")
}
// Activity 5: Event Handling
// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
function changeMe() {
    let h3 = document.getElementById("changeable_header");
    h3.innerText = "You Did It"
}

// Task 10: Add a mouseover event listener to an element that changes its border color
let myDiv = document.getElementById("myDiv") 
myDiv.addEventListener("mouseover", () => {
    myDiv.style.borderColor = "cyan"
})
myDiv.addEventListener("mouseout", () => {
    myDiv.style.borderColor = "black"
})
