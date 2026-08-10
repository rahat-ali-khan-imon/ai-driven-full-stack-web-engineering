const studentIntroduction = (student) => {
    if(typeof student !== 'object') {
        return 'Invalid';
    }

    if(!student.hasOwnProperty('name')) {                           //
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