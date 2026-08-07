function registerStudent(callback) {
    console.log('User is registering. Need more data.');

    callback();
}

function userBasicInfo() {
    let student = {
        name: 'Jisoo',
        age: 23,
        roll: 3
    };
    console.log(student);
}

function pastAcademicInfo() {                                   //
    let academicInfo = {
        ssc: '5.00',
        hsc:  '5.00'
    };
    console.log(academicInfo);
}

console.log(registerStudent(userBasicInfo));
console.log();
console.log(registerStudent(pastAcademicInfo));                     //