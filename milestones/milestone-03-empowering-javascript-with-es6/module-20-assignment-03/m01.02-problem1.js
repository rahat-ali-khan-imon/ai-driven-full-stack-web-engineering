const studentIntroduction = (obj) => {
    const {name, age, course} = obj;                                            //

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
console.log(studentIntroduction('student'));