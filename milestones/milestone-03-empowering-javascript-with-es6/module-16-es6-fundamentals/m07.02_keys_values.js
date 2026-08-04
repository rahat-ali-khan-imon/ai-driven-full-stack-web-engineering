// Object Methods: keys, values, entries, delete, seal, freeze

const user = {
    name: 'John Doe',
    age: 23,
    id: 1233467
};

const keys = Object.keys(user);

for(let element of keys) {
    console.log(element, ':', user[element]);
}