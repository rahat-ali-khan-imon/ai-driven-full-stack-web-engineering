"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
const mark = {
    name: 'Mark',
    id: 101,
    department: 'Engineering',
    salary: 75000
};
const bill = {
    name: 'Bill',
    id: 102,
    department: 'Marketing'
};
console.log(mark);
console.log(bill);
console.log();
const team = [mark, bill, {
        name: 'Alisa',
        id: 103,
        department: 'Finance'
    }];
console.log(team);
console.log();
function printEmployeeDetails(employee) {
    console.log(`Name: ${employee.name}`);
    console.log(`ID: ${employee.id}`);
    console.log(`Department: ${employee.department}`);
}
printEmployeeDetails({
    name: 'Elon',
    id: 111,
    department: 'SpaceX'
});
console.log();
function displayEmployeeDetails({ name, id, department }) {
    console.log(`Name: ${name}`);
    console.log(`ID: ${id}`);
    console.log(`Department: ${department}`);
}
displayEmployeeDetails({
    name: 'Elon',
    id: 111,
    department: 'SpaceX'
});
displayEmployeeDetails(mark);
//# sourceMappingURL=m03.01-interface.js.map