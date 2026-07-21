// Strings
const cup = "World Cup";
const tea = "Tea Cup";
const location = "Dhaka";

// Array
const numbers = [4, 54, 6, 78, 11];

// Length examples
console.log("Cup Length:", cup.length);
console.log("Numbers Length:", numbers.length);

// Access elements
console.log("First Number:", numbers[0]);
console.log("First Character:", location[0]);

// Arrays are mutable
numbers[0] = 99;
console.log("Updated Numbers:", numbers);

// Strings are immutable
location[0] = "F";
console.log("Location:", location);