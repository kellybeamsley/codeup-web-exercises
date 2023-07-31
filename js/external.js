"use strict";



console.log('Hello from external JavaScript');

alert("Welcome to my Website!");

let userInput = prompt('What is your favorite color:');
console.log('Your favorite color is ' + userInput);

alert("Great, " + userInput + " is my favorite color too!");



// Define variables for the number of days each movie is rented
let littleMermaidDays = prompt('How many rental days do you want the movie, The Little Mermaid?');
console.log('You want The Little Mermaid for ' + littleMermaidDays + " days");
let brotherBearDays = prompt('How many rental days do you want the movie, The Little Mermaid?');
console.log('You want The Little Mermaid for ' + brotherBearDays + " days");
let herculesDays = prompt('How many rental days do you want the movie, The Little Mermaid?');
console.log('You want The Little Mermaid for ' + herculesDays + " days");

// Define the price per movie per day
let pricePerDay = prompt('The price per movie per day is what?');
console.log('You want The Little Mermaid for ' + pricePerDay + " days");

// Calculate the total cost for each movie
let littleMermaidCost = littleMermaidDays * pricePerDay;
let brotherBearCost = brotherBearDays * pricePerDay;
let herculesCost = herculesDays * pricePerDay;

// Calculate the total amount you have to pay for renting all movies
var totalCost = littleMermaidCost + brotherBearCost + herculesCost;

// Display the result
alert("Total amount to pay: $" + totalCost);



// Prompt variables for the cost of hour rate
let googleHourRate = prompt('What is the hourly rate for a Google contractor?');
console.log('Your cost per hour at Google is $' + googleHourRate + '.');
let amazonHourRate = prompt('What is the hourly rate for an Amazon contractor?');
console.log('Your cost per hour at Amazon is $' + amazonHourRate + '.');
let facebookHourRate = prompt('What is the hourly rate for a Facebook contractor?');
console.log('Your cost per hour at Facebook is $' + facebookHourRate + '.');

// Prompt variables for the hours worked
let googleHoursWorked = prompt('How many hours did you work at Google this week?');
console.log('You worked ' + googleHoursWorked + ' hours this week at Google.');
let amazonHoursWorked = prompt('How many hours did you work at Amazon this week?');
console.log('You worked ' + amazonHoursWorked + ' hours this week at Amazon.');
let facebookHoursWorked = prompt('How many hours did you work at Facebook this week?');
console.log('You worked ' + facebookHoursWorked + ' hours this week at Facebook.');

// Calculate the total payment for each company
let googlePayment = googleHourRate * googleHoursWorked;
let amazonPayment = amazonHourRate * amazonHoursWorked;
let facebookPayment = facebookHourRate * facebookHoursWorked;

// Calculate the total payment for this week as a contractor
let totalPayment = googlePayment + amazonPayment + facebookPayment;

// Display the result
alert("Total payment for this week: $" + totalPayment);



// Variables representing the conditions
let isClassFull = false; // true if the class is full, false otherwise
let scheduleConflict = false; // true if there is a schedule conflict, false otherwise

// Check if the student can be enrolled in the class
let canEnroll = !isClassFull && !scheduleConflict;

// Display the result
alert("Can the student enroll in the class? " + canEnroll);



// Variables representing the conditions
let numberOfItemsBought = parseInt(prompt('How many items were bought?')); // Number of items bought by the person
let isOfferExpired = false; // true if the offer has expired, false otherwise
let isPremiumMember = false; // true if the person is a premium member, false otherwise

// Check if the product offer can be applied
let canApplyOffer = (numberOfItemsBought > 2 && !isOfferExpired) || numberOfItemsBought === 1;

// Display the result
alert("Can the product offer be applied? " + canApplyOffer);


// Username and Password
// the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace
let username = prompt('Type an username: ');
let password = prompt('Type a password:');

// Check if the password is at least 5 characters
let isPasswordLengthValid = password.length >= 5;

// Check if the password does not include the username
let doesPasswordIncludeUsername = password.toLowerCase().includes(username.toLowerCase());

// Check if the username is no more than 20 characters
let isUsernameLengthValid = username.length <= 20;

// Check if neither the username nor password starts or ends with whitespace
let noWhitespaceAtStartOrEnd = username.trim() && !password.trim();


// Display the results
alert("Is the password at least 5 characters? " + isPasswordLengthValid);
alert("Does the password include the username? " + doesPasswordIncludeUsername);
alert("Is the username no more than 20 characters? " + isUsernameLengthValid);
alert("Does neither the username nor password have whitespace at the start or end? " + noWhitespaceAtStartOrEnd);
