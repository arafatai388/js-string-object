const companiesStr =
    "Tesla SpaceX PayPal Neuralink SolarCity Twitter";

// Convert string to array
const companies = companiesStr.split(" ");

console.log("Companies Array:");
console.log(companies);

// Convert array back to string
const sentence = companies.join(" ");

console.log("Back to String:");
console.log(sentence);

// Join using another separator
console.log(companies.join(" | "));