(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    
    // let person = {};                        // Step 1
    // person.firstName = "YourFirstName";     // Step 2
    // person.lastName = "YourLastName";       // Step 3
    //
    // console.log(person.firstName); // Output: YourFirstName
    // console.log(person.lastName);  // Output: YourLastName


    
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
// kb Notes: Might use this. 

    let person = {};                     // Step 1: Create an empty object named `person`
    person.firstName = "Rick";           // Step 2: Add `firstName` property and assign a value
    person.lastName = "Sanchez";         // Step 3: Add `lastName` property and assign a value

// Step 4: Create a `sayHello` method on the `person` object
    person.sayHello = function () {
        console.log("Hello from " + this.firstName + " " + this.lastName);
    };

// Step 5: Call the `sayHello` method of the `person` object
    person.sayHello();                   // Step 6: Output: "Hello from Rick Sanchez!"



    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // Define the shopper information:
    //     Define the shoppers' names (Cameron, Ryan, George) and their respective purchase amounts ($180, $250, $320).
    // Calculate the discounts:
    //     Determine the discount percentage (12% for purchases over $200).
    // Calculate the discount amount for each shopper based on their purchase amount and the discount percentage.
    //     Calculate the final amounts:
    //     Calculate the amount each shopper needs to pay after applying the discount.
    //     Display the information:
    //     Use conditional statements (if/else) to determine if a discount applies and log the relevant information for each shopper (name, initial amount, discount amount, final amount).
    //     Create an array of shopper objects:
    //     Uncomment the lines to create an array of objects representing shoppers, where each object contains the shopper's name and purchase amount.
    // Iterate through the array using a forEach loop:
    //     Use a forEach loop to iterate through the array of shopper objects.
    //     Inside the loop, log the relevant messages for each shopper.
    //     Test the code:
    //     Run the program to see the output for each shopper.

// // Create an array of objects where each object represents one shopper.
    let shoppers = [
        { name: 'Cameron', amount: 180 },
        { name: 'Ryan', amount: 250 },
        { name: 'George', amount: 320 }
    ];

// Iterate through the array of shoppers using a forEach loop.
    shoppers.forEach(function(shopper) {
        let discount = 0;
        let amountAfterDiscount = shopper.amount;

        // Check if the shopper's amount is greater than $200.
        if (shopper.amount > 200) {
            // Calculate the discount (12% of the amount).
            discount = shopper.amount * 0.12;
            // Apply the discount to the amount.
            amountAfterDiscount = shopper.amount - discount;
        }

        // Display the payment details for each shopper.
        console.log(shopper.name + " bought $" + shopper.amount.toFixed(2) +
            ", discount: $" + discount.toFixed(2) +
            ", amount after discount: $" + amountAfterDiscount.toFixed(2));
    });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     * > console.log(books[0].title) // "Walkaway"
     * > console.log(books[0].author.firstName) // "Cory"
     * > console.log(books[0].author.lastName) // "Doctorow"
     * > console.log(books[0].title) // "A Brief History of Time"
     * > console.log(books[0].author.firstName) // "Stephen"
     * > console.log(books[0].author.lastName) // "Hawking"
     * > console.log(books[0].title) // "1984"
     * > console.log(books[0].author.firstName) // "George"
     * > console.log(books[0].author.lastName) // "Orwell"
     * > console.log(books[0].title) // "The Great Gatsby"
     * > console.log(books[0].author.firstName) // "F. Scott"
     * > console.log(books[0].author.lastName) // "Fitzgerald"
    */

// Create an array named 'books' to store the book objects.
    let books = [
        {
            title: "The Salmon of Doubt",
            author: {
                firstName: "Douglas",
                lastName: "Adams"
            }
        },
        {
            title: "Walkaway",
            author: {
                firstName: "Cory",
                lastName: "Doctorow"
            }
        },
        {
            title: "A Brief History of Time",
            author: {
                firstName: "Stephen",
                lastName: "Hawking"
            }
        },
        {
            title: "1984",
            author: {
                firstName: "George",
                lastName: "Orwell"
            }
        },
        {
            title: "The Great Gatsby",
            author: {
                firstName: "F. Scott",
                lastName: "Fitzgerald"
            }
        }
    ];

// Example usage for each book:
    console.log(books[0].title);            // Output: "The Salmon of Doubt"
    console.log(books[0].author.firstName); // Output: "Douglas"
    console.log(books[0].author.lastName);  // Output: "Adams"

    console.log(books[1].title);            // Output: "Walkaway"
    console.log(books[1].author.firstName); // Output: "Cory"
    console.log(books[1].author.lastName);  // Output: "Doctorow"

    console.log(books[2].title);            // Output: "A Brief History of Time"
    console.log(books[2].author.firstName); // Output: "Stephen"
    console.log(books[2].author.lastName);  // Output: "Hawking"

    console.log(books[3].title);            // Output: "1984"
    console.log(books[3].author.firstName); // Output: "George"
    console.log(books[3].author.lastName);  // Output: "Orwell"

    console.log(books[4].title);            // Output: "The Great Gatsby"
    console.log(books[4].author.firstName); // Output: "F. Scott"
    console.log(books[4].author.lastName);  // Output: "Fitzgerald"



// ------------------------------------

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      Book # 4
     *      Title: 1984
     *      Author: George Orwell
     *      ---
     *      Book # 5
     *      Title: The Great Gatsby
     *      Author: F. Scott Fitzgerald
     *      ---
     */

// Loop through the 'books' array using a 'for' loop.
    for (let i = 0; i < books.length; i++) {
        // Get the current book object from the 'books' array.
        let book = books[i];

        // Calculate the book number (index + 1).
        let bookNumber = i + 1;

        // Construct the output message for each book.
        let output = `Book # ${bookNumber}\nTitle: ${book.title}\nAuthor: ${book.author.firstName} ${book.author.lastName}\n---`;

        // Log the output message to the console.
        console.log(output);
    }


    // -----------------------------------------------------------------------
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();