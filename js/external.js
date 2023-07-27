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
