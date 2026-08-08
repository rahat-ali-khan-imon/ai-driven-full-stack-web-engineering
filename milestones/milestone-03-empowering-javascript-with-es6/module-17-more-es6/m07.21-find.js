let students = [
    {
        name: 'Utsho',
        roll: 29
    },
    {
        name: 'Utsho',
        roll: 30
    }
];

const findSpecificStudent = students.find(
    student => student.name === 'Utsho'
);

console.log(findSpecificStudent);