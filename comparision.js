const subject = "chemistry";
const book = "CHeMisTry";

if (subject.toLowerCase() === book.toLowerCase()) {
    console.log("The subject and book match.");
} else {
    console.log("The strings are different.");
}

const emailUserProvided = "  goni@MIA.com  ";
const emailSavedInDatabase = "goni@mia.com";

const normalizedEmail = emailUserProvided.trim().toLowerCase();

if (normalizedEmail === emailSavedInDatabase.toLowerCase()) {
    console.log("Welcome to the website!");
} else {
    console.log("Invalid email.");
}