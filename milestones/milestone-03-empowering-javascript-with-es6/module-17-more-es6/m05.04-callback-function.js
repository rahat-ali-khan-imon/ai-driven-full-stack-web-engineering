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
    console.log(student);                       //
}

console.log(registerStudent(userBasicInfo));