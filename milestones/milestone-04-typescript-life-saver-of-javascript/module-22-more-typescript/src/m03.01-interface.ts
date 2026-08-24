interface Employee {                // Employee interface
    name: string;
    id: number;
    department: string;
    salary?: number;                // Optional property (salary?)
};

const mark: Employee = {            // Interface দিয়ে object type করা
    name: 'Mark',
    id: 101,
    department: 'Engineering',
    salary: 75000
};

const bill: Employee = {
    name: 'Bill',
    id: 102,
    department: 'Marketing'
};

console.log(mark);
console.log(bill);
console.log();



const team: Employee[] = [mark, bill, {                 // Interface দিয়ে object array type করা
    name: 'Alisa',
    id: 103,
    department: 'Finance'
}];

console.log(team);
console.log();



function printEmployeeDetails(employee: Employee): void {     // Function parameter হিসেবে interface ব্যবহার
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

function displayEmployeeDetails({name, id, department}: Employee): void {   // Function parameter destructuring
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