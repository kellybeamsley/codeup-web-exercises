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