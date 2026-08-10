const studentIntroduction = (student) => {
    if(typeof student !== 'object' || student === null) {                   //
        return 'Invalid';
    }

    if(
        !student.hasOwnProperty('name') ||
        !student.hasOwnProperty('age') ||
        !student.hasOwnProperty('course')
    ) {
        return 'Invalid';
    }

    const {name, age, course} = student;

    return `My name is ${name}. I am ${age} years old. I am learning ${course}`
};

console.log(
    studentIntroduction({
        name: 'Rafi',
        age: 18,
        course: 'JavaScript'
    })
);
console.log(studentIntroduction({}));
console.log(studentIntroduction({
    name: 'Alice',
    age: 23
}));
console.log(studentIntroduction({
    name: 'Alice',
    course: 'Python'
}));
console.log(studentIntroduction({
    age: 23,
    course: 'Java'
}));
console.log(studentIntroduction('student'));
console.log();
console.log(studentIntroduction([]));
console.log(studentIntroduction([10, 20, 30]));
console.log(studentIntroduction(['name', 'age', 'course']));
console.log(studentIntroduction(null));
console.log(studentIntroduction(undefined));