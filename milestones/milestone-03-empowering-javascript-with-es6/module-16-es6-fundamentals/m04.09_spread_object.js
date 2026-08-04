let students1 = {
    name: 'Alice',
    age: 26
};

let students2 = students1;

students1.something = 'Test';                   //

console.log(students1);
console.log(students2);