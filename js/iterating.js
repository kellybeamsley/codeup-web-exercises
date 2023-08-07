(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ['Nancy', 'Andrew', 'Mary', 'Eric'];



    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
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
// Syntax Position Names
// for (function(element, index, array) {
// })
// loop through the array and log the values
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }



    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    
    
    
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

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

})();



// [] // an empty array
//
//     [1] // an array with one element
//
//     [1, 2, 3, 4, 5] // an array with 5 elements
//
//     ["one", 42, [8, 9, 10]] // an array with 3 elements all of different types
// // notice that the array above does *not* have 5 elements, rather the last
// // element is itself an array with 3 elements in it



// let shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// console.log(shapes.length); // 4
//
// var numbers = [1, 2, 3, 4];
// console.log(numbers[0]); // 1
// console.log(numbers[1]); // 2
// console.log(numbers[2]); // 3
// console.log(numbers[3]); // 4


// var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// console.log('There are ' + shapes.length + ' shapes in the array');
//
// console.log('The first shape is: ' + shapes[0]);
// // The first shape is: square
//
// console.log('The second shape is: ' + shapes[1]);
// // The second shape is: rectangle
//
// console.log('The third shape is: ' + shapes[2]);
// // The third shape is: circle
//
// console.log('The fourth shape is: ' + shapes[3]);
// // The fourth shape is: triangle
//
// console.log('The fifth shape is: ' + shapes[4]);
// // The fifth shape is: undefined
//
//
//
// // For Loop
// let shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// // loop through the array and log the values
// for (let i = 0; i < shapes.length; i++) {
//     console.log('The shape at index ' + i + ' is: ' + shapes[i]);
