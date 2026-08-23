// Object as Function Input

const printStudent = (student: {
    name: string,
    age: number
}): string => {
    return `${student.name} is ${student.age} years old.`;
};

console.log(
    printStudent({
        name: 'Alisa',
        age: 23
    })
);



const printStudent1 = (
    student1: {
        name: string,
        age: number
    }
): string => {
    return `${student1.name} is ${student1.age} years old.`;
};

console.log(
    printStudent1({
        name: 'Jennie',
        age: 63
    })
);