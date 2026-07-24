const person = {
    name: "Tobarak Ali",
    profession: "Student",
    age: 21,
    isSingle: true,
    "home address": "NewKhali",
    "parent:name": "Kodom Ali"
};

console.log("Name:", person.name);
console.log("Home:", person["home address"]);
console.log("Parent:", person["parent:name"]);

person.age = 24;
person["home address"] = "Dhaka";

const property = "profession";

console.log("Profession:", person[property]);

console.log(person);