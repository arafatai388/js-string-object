const college = {
    name: "VNC",
    address: "Baily Road",
    students: 800,

    events: [
        "21 Feb",
        "Independence Day",
        "Victory Day"
    ],

    people: {
        count: 200,

        principal: {
            name: "Sabura Mam",
            yearsOfExperience: 25,
            degree: "English"
        }
    }
};

console.log("Principal:", college.people.principal.name);
console.log("Degree:", college.people.principal.degree);

college.events[2] = "Eid ul Adha";

console.log("Updated Events:");
console.log(college.events);