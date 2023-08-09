(function() {
    "use strict"; 
    
    const circle = {
        radius: 3,

        // Define the getArea method to calculate the area of the circle.
        getArea: function () {
            // Calculate the area using the formula: area = pi * radius^2
            return Math.PI * Math.pow(this.radius, 2);
        },

        // Define the logInfo method to log information about the circle.
        logInfo: function (doRounding) {
            // Calculate the area using the getArea method.
            const area = this.getArea();

            // If doRounding is true, round the area to the nearest integer.
            // Otherwise, keep the complete value.
            if (doRounding) {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(area));
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
            }
        }
    };

    // Log raw circle information and rounded circle information.
    console.log("Raw circle information");
    circle.logInfo(false); // Log without rounding
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true); // Log with rounding

    console.log("=======================================================");

    // Change the radius of the circle to 5.
    circle.radius = 5;

    // Log raw circle information and rounded circle information after changing the radius.
    console.log("Raw circle information");
    circle.logInfo(false); // Log without rounding
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true); // Log with rounding
})();
