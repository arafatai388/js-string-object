const numbers = [11, 22, 33, 44, 55];

for (const number of numbers) {
    // console.log(number);
}

const student = {
    name: 'Akbar Mogol',
    id: 111,
    age: 14,
    favSubjects: ['physics', 'math', 'chemistry']
};

// for...of --> Array
// for...in --> Object

for (const key in student) {
    const value = student[key];
    // console.log(key, value);
}

const keys = Object.keys(student);

for (const key of keys) {
    console.log(key);
    const value = student[key];
    console.log(key, value);
}