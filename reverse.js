const commitment = "I will work hard and will never give up.";

// Method 1
const reversed = commitment
    .split("")
    .reverse()
    .join("");

console.log("Method 1:");
console.log(reversed);

// Method 2
let reversedText = "";

for (const character of commitment) {
    reversedText = character + reversedText;
}

console.log("Method 2:");
console.log(reversedText);