const studentIntroduction = (obj) => {
    if(typeof obj !== 'object') {                       //
        return 'Invalid';
    }

    const {name, age, course} = obj;

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