// Object
const user: {
    name: string,
    age: number,
    isAdmin: boolean
} = {
    name: 'John',
    age: 23, 
    isAdmin: true
};

const name1 = user.name;
const age1 = user.age;


// const {name2, age2, isAdmin2} = user;            // Error
// const {name, age, isAdmin} = user;              // Error
const {name:newName, age, isAdmin} = user;


console.log(name1);
console.log(age1);
console.log();

console.log(newName);
console.log(age);
console.log(isAdmin);
console.log();



// Array
const userInfo = ['Alisa', 23];

const [userName, userAge] = userInfo;

console.log(userName);
console.log(userAge);