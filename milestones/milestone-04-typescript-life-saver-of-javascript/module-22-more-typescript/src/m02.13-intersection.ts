// Intersection Type

type Person = {
    name: string;
    age: number
};

type Employee = {
    employeeId: number;
    department: string;
};

type Staff = Person & Employee;

const staff: Staff = {
    name: 'Rose',
    age: 22,
    employeeId: 1012,
    department: 'Developer'
};

console.log(staff);