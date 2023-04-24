// Declare and use variables
let num1 = 5;
let num2 = 10;
let str1 = "Hello";
let str2 = "World";

// Use arithmetic operators
let sum = num1 + num2;
let product = num1 * num2;
let quotient = num2 / num1;

// Use template literals
let message = `${str1} ${str2}! The sum of ${num1} and ${num2} is ${sum}.`;

// Use methods for working with strings
let upperCaseStr1 = str1.toUpperCase();
let lowerCaseStr2 = str2.toLowerCase();
let trimmedStr1 = str1.trim();
let charAtStr2 = str2.charAt(0);

// Conditional statements
if (num1 < num2) {
  message += ` ${num1} is less than ${num2}.`;
} else if (num1 > num2) {
  message += ` ${num1} is greater than ${num2}.`;
} else {
  message += ` ${num1} is equal to ${num2}.`;
}

switch (charAtStr2) {
  case "W":
    message += " The first character of str2 is W.";
    break;
  case "w":
    message += " The first character of str2 is w.";
    break;
  default:
    message += " The first character of str2 is not W or w.";
}

// Output message to HTML
document.getElementById("demo").innerHTML = message;