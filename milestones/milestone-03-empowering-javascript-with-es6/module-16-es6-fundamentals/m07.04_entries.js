// Object Methods: keys, values, entries, delete, seal, freeze

const user = {
    name: 'John Doe',
    age: 23,
    id: 1233467
};

const entries = Object.entries(user);

for(let element of entries) {
    console.log(element);

    const [key, value] = element;
    console.log(`${key}: ${value}`);

    console.log();
}



const students = {
    name: 'Alice',
    age: 23,
    id: 1245
};

for(const [key, value] of Object.entries(students)) {
    console.log(`${key} : ${value}`);
}