// Destructuring for object

const students = {
    name: 'Alice',
    age: 23,
    roll: 13
};

const {age, name:fullName} = students;        // name:fullName -----> overwrite or modify

console.log(age, name);                             // Error