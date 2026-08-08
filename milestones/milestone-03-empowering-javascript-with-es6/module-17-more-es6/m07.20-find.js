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

const findSpecificStudent = students.find(student => {
    return student.roll === 29;
});

console.log(findSpecificStudent);