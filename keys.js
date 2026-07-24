const person = {
    name: "Tobarak Ali",
    profession: "Student",
    age: 21,
    isSingle: true
};

// Remove properties
delete person.isSingle;
delete person.profession;

console.log("Updated Object:");
console.log(person);

console.log("Keys:");
console.log(Object.keys(person));

console.log("Values:");
console.log(Object.values(person));

console.log("Entries:");
console.log(Object.entries(person));