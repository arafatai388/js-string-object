const firstName = "Silver";
const lastName = "Gold";

// Using concat()
const fullName1 = firstName.concat(" ", lastName, " Chowdhury");

// Using +
const fullName2 = firstName + " " + lastName + " Chowdhury";

// Using template literals (recommended)
const fullName3 = `${firstName} ${lastName} Chowdhury`;

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);