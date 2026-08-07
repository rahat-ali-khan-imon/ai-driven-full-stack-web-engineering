let student = {
    name: 'Utsho',
    roll: 29
};

function myFunc(data) {
    data = {                                // reassign
        name: 'Habib Utsho',
        age: 63
    };
    console.log(data);
}

myFunc(student);

console.log(student);