// Destructuring for object

const students = {
    name: 'Alice',
    age: 23,
    roll: 13,
    marks: {
        physics: 95,
        philosophy: 91,
        math: 97
    }
};

const {name, marks: {philosophy, physics}} = students;

console.log(name, philosophy, physics)