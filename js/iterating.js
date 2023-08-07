(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
// Declare an array called 'names' containing a list of strings.
    let names = ['Nancy', 'Andrew', 'Mary', 'Eric'];



    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
// Declare an array called 'numbers' containing a list of numbers.
    let numbers = [1, 2, 3, 4];
    console.log(names[0]); // 1
    console.log(names[1]); // 2
    console.log(names[2]); // 3
    console.log(names[3]); // 4



    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    // Print the first element (index 0) of the 'names' array.
    console.log(names[0]); // Output: Nancy

// Print the second element (index 1) of the 'names' array.
    console.log(names[1]); // Output: Andrew

// Print the third element (index 2) of the 'names' array.
    console.log(names[2]); // Output: Mary

// Print the fourth element (index 3) of the 'names' array.
    console.log(names[3]); // Output: Eric



    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
// Syntax Position Names
// for (function(element, index, array) {
// })
// loop through the array and log the values
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
    
    
    
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
// Declare an array called 'names' containing a list of strings.
//     let names = ['Nancy', 'Andrew', 'Mary', 'Eric'];

// Use a forEach loop to iterate through each element in the 'names' array.
    names.forEach(function(individualname) {
        // Inside the loop, the 'name' variable holds the current element.
        // Print each name individually.
        console.log(individualname);
    });



    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */



    /**
     * Returns the first item in the array.
     * @param {Array} arr - The input array.
     * @returns {*} - The first element of the array.
     */
    function first(arr) {
        return arr[0];
    }

    /**
     * Returns the second item in the array.
     * @param {Array} arr - The input array.
     * @returns {*} - The second element of the array.
     */
    function second(arr) {
        return arr[1];
    }

    /**
     * Returns the last item in the array.
     * @param {Array} arr - The input array.
     * @returns {*} - The last element of the array.
     */
    function last(arr) {
        return arr[arr.length - 1];
    }

// Example usage:
//     let numbers = [1, 2, 3, 4, 5];
//
//     let firstNumber = first(numbers);
//     console.log(firstNumber); // Output: 1
//
//     let secondNumber = second(numbers);
//     console.log(secondNumber); // Output: 2
//
//     let lastNumber = last(numbers);
//     console.log(lastNumber); // Output: 5





})();