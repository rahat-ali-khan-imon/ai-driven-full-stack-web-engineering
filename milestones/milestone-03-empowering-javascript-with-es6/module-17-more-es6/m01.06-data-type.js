// Difference Primitive and Non-Primitive

let students = {
    name: 'Jisoo'
};
let students2 = students;

let arr = [10, 20, 30];

function add(a, b) {
    return a + b;
}


students.age = 23;                              /* */

console.log(students2);
console.log(students);