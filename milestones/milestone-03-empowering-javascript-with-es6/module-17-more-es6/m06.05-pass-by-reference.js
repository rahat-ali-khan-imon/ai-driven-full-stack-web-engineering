let student = {
    name: 'Utsho',
    roll: 29
};

function myFunc(data) {
    data.name = 'Habib Utsho';                  // reference
    console.log(data);
}

myFunc(student);

console.log(student);               //