// Object Parameter with Optional Property

const printStudent2 = (
    student: {
        name: string,
        // age: number         // Error
        age?: number
    }
): string => {
    return `Student Name: ${student.name}
Student Age: ${student.age}`;
}

console.log(
    printStudent2({
        name: 'Jamal'
    })
);

console.log(
    printStudent2({
        name: 'Alisa',
        age: 23
    })
);