// Object Methods: keys, values, entries, delete, seal, freeze

const user = {
    name: 'John Doe',
    age: 23,
    id: 1233467
};

const entries = Object.entries(user);

console.log(entries);
console.log(entries[0]);
console.log();


for(let element of entries) {
    console.log(element);
}