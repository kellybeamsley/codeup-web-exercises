"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

// function sayHello(name) {
//     return "Hello, " + name + "!";
// }
// console.log(sayHello("codeup")); // Output: "Hello, codeup!"



/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

// function sayHello(name) {
//     return "Hello, " + name + "!";
//}
// Call the 'sayHello' function and pass your name as a string literal argument
// let helloMessage = sayHello("Kelly");
//
// // Log the value of 'helloMessage' to the console
// console.log(helloMessage);



/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// function sayHello(name){
//     return "Hello, " + name;
// }
// let myName = "Kelly";
// console.log(sayHello(myName))



// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

// function isTwo(number) {
//     return number === 2;
// }
// // Test cases
// console.log(isTwo(1)); // returns false
// console.log(isTwo(2)); // returns true
// console.log(isTwo(3)); // returns false
//
// var random = Math.floor((Math.random() * 3) + 1);
// console.log(isTwo(random)); // Output will be either true or false based on the value of 'random'



/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
// function calculateTip(tipPercentage, totalBill) {
//     return tipPercentage * totalBill;
// }
//
// // Examples
// console.log(calculateTip(0.20, 20));     // returns 4
// console.log(calculateTip(0.25, 25.50));  // returns 6.375
// console.log(calculateTip(0.15, 33.42));  // returns 5.013



/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
// function calculateTip(tipPercentage, totalBill) {
//     return tipPercentage * totalBill;
// }
//
// // Get input from the user
// let billTotalInput = prompt("Enter the total bill amount:");
// let tipPercentageInput = prompt("Enter the tip percentage (e.g., 15 for 15%):");
//
// // Parse the user inputs to numbers (since prompt returns strings)
// let billTotal = parseFloat(billTotalInput);
// let tipPercentage = parseFloat(tipPercentageInput) / 100; // Convert percentage to decimal
//
// // Calculate the tip amount using the calculateTip function
// let tipAmount = calculateTip(tipPercentage, billTotal);
//
// // // Display the calculated tip amount to the user
// alert("You should tip: $" + tipAmount.toFixed(2));



/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
// Create a function name `applyDiscount`.  This function should accept a price (before a discount is applied) and a discount percentage (a number between 0 and 1). It should return the result of applying the discount to the original price.

// Example A
// function applyDiscount(price, discountPercentage) {
//     return price * (1 - discountPercentage);
// }
//
// // Examples
// var originalPrice = 100;
// var discountPercent = 0.2; // 20%
// console.log(applyDiscount(originalPrice, discountPercent)); // Output: 80
//
// console.log(applyDiscount(45.99, 0.12)); // Output: 40.4712

//Example B
function applyDiscount(price, discountPercent) {
     return price - (price * discountPercent);
}

// Get input from the user
let originalPriceInput = prompt("Enter the price:");
let discountPercentInput = prompt("Enter the discount percentage (e.g., .15 for 15% or .18 for 18%):");

// Parse the user inputs to numbers (since prompt returns strings)
let originalPrice = parseFloat(originalPriceInput);
let discountPercent = parseFloat(discountPercentInput);

// Calculate the discount amount using the applyDiscount function
let discountAmount = applyDiscount(originalPrice, discountPercent);

// Display the calculated discounted amount to the user
alert("You should pay: $" + discountAmount.toFixed(2));
