// Object Methods: keys, values, entries, delete, seal, freeze

const user = {
    name: 'John Doe',
    age: 23,
    id: 1233467
};

const keys = Object.keys(user);
const values = Object.values(user);

console.log(keys);
console.log(values);
console.log('Keys:', keys.length);