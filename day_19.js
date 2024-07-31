// Activity 1: Basic Regular Expressions
// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript in a string). Log the matches. 
let str = "JavaScript is a popular programming language. Many developers use JavaScript as per the developer survey of stackoverflow 20204.";
let regex = /JavaScript/g;

let matches = str.match(regex);
console.log(matches);

// Task 2: Write a regular expression to match all digits in a string. Log the matches.
let str1 = "This Day 19 of 30 days of JS from Chai and Code in the year 2024.";
regex = /\d/g;

matches = str1.match(regex);
console.log(matches);

// Activity 2: Character Classes and Quantifiers
// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
let str2 = "Alice and Bob went to the Wonderland. They met the Queen.";
regex = /\b[A-Z][a-z]*\b/g;

matches = str2.match(regex);
console.log(matches);

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
let str3 = "The house numbers are 123, 4567, and 89.";
regex = /\d+/g;

matches = str3.match(regex);
console.log(matches);

// Activity 3: Grouping and Capturing
// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
const phone = "(123) 456-7890";

regex = /\((\d{3})\)\s(\d{3})-(\d{4})/
matches = phone.match(regex);

// console.log(matches)
const [,area_code,central_office_code,line_number] = matches
console.log(`area code: ${area_code},central office code: ${central_office_code},line number: ${line_number}`);

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
let email = "omkar@gmail.com";

regex = /(\w+)@(\w+\.\w+)/
matches = email.match(regex);
console.log(matches);
let [,user_name,domain] = matches;
console.log(`The user name is ${user_name} and user domain is ${domain}`);

// Activity 4: Assertions and Boundaries
// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
regex = /^\w+/;
let strings = ["hello world", "world hello", "hello", "goodbye hello"];

strings.forEach((str) => {
  let match = str.match(regex);
  if (match) {
    console.log(`Match found: ${match[0]} in "${str}"`);
  } else {
    console.log(`No match found in "${str}"`);
  }
});

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
regex = /\w+$/;

strings.forEach((str) => {
    let match = str.match(regex);
    if (match) {
      console.log(`Match found: ${match[0]} in "${str}"`);
    } else {
      console.log(`No match found in "${str}"`);
    }
  });

// Activity 5: Practical Applications
// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
let password = "Password1!";
regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let isValid = regex.test(password);
console.log(isValid);

// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
let url = "https://www.example.com";
regex = /^(https?:\/\/)?(www\.)?[\w-]+(\.[a-z]+)+([\/\w-]*)*\/?$/;
isValid = regex.test(url);
console.log(isValid);