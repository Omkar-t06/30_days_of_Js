// Activity 1: Basic Event Handling
// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
let p1 = document.getElementById("to-change");
let b1 = document.getElementById("change-button");

b1.addEventListener('click',()=> {
    p1.textContent = "You Did It!!!"
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.
let img = document.getElementById("myImage");

img.addEventListener(
    'dblclick', () => {
        if (img.style.visibility === "hidden") {
            img.style.visibility = "visible";
        } else {
            img.style.visibility = "hidden";
        }
    }
);

// Activity 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background color. 
let d1 = document.getElementById("bgDiv");

d1.addEventListener('mouseover',() => {
    d1.textContent = "mouse over"
    d1.style.background = "cyan"
});

// Task 4: Add a mouseout event listener to an element that resets its background color.
d1.addEventListener('mouseout',()=>{
    d1.textContent = "mouse out"
    d1.style.background = "snow"
});

// Activity 3: Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console. 
let inp = document.getElementById("myInput")

inp.addEventListener('keydown',(e)=> {
    console.log(e.key)
})

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
let d2 = document.getElementById("inpDiv");
let p = document.createElement("p");
inp.addEventListener('keyup',(e) => {
    p.textContent += `${e.key}`
    d2.appendChild(p)
})

// Activity 4: Form Events
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console. 
let myForm = document.getElementById("myForm");

myForm.addEventListener('submit',(e) => {
    e.preventDefault();
    let data = new FormData(myForm)
    for (let [key, value] of data.entries()) {
        console.log(`${key}: ${value}`);
    }
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
let d3 = document.getElementById("formDiv");

let dropDown = document.getElementById("dropDown");
dropDown.addEventListener("change",(e)=>{
    let p = document.createElement("p");
    p.textContent = e.target.value
    d3.appendChild(p);
});

// Activity 5: Event Delegation
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const list = document.getElementById('myList');
list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log(event.target.textContent);
    }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
const parentElement = document.getElementById('parent');

parentElement.addEventListener('click', (event) => {
  // Check if the clicked element is a dynamically added child
  if (event.target.classList.contains('dynamicChild')) {
    // Handle the event for the dynamically added child
    console.log('Clicked on a dynamically added child:', event.target);
  }
});

const newChild = document.createElement('div');
newChild.classList.add('dynamicChild');
newChild.textContent = 'Dynamic Child';
parentElement.appendChild(newChild);
