// Destructuring for object

const students = {
    name: 'Alice',
    age: 23,
    roll: 13
};

const {age, name:fullName} = students;

console.log(age, fullName);                         //