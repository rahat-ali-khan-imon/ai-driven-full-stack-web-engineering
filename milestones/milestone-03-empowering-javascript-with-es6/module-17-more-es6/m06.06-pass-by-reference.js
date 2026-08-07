let student = {
    name: 'Utsho',
    roll: 29
};

function myFunc(data) {
    data.name = 'Habib Utsho'
    console.log(data);
}

myFunc({...student});                           //

console.log(student);