// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Function to return the smallest of two numbers
// Examples:
// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10

// Function to return the smallest of two numbers
    function min(a, b) {
    return a < b ? a : b;
    }
console.log(min(15, 25)); // will output 15
console.log(min(-5, 20)); // will output -5


// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4

function calculateCircumference(radius) {
    const pi = 3.14;
    return 2 * pi * radius;
}

console.log(calculateCircumference(5)); //will output 31.4


// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0

// Function to search for a character in a string and count its occurrences
function searchString(char, str) {
    let count = 0;  // Initialize count variable to zero
    for (let i = 0; i < str.length; i++) {  
        if (str[i] === char) {  
        }
        return count;  // Return the total count of matches
    }
    
console.log(searchString("i", "mississippi")); //will out 4 
}
