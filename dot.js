const person = {
    name: "Tobarak Ali",
    profession: "Student",
    age: 21,
    isSingle: true
};

console.log("Original Object:");
console.log(person);

console.log("Age:", person.age);

person.age = 29;
person.isSingle = false;

console.log("Updated Object:");
console.log(person);