// Optional Property

type User = {
    name: String;
    age: Number;
    email?: String;                                         //
};

const user1: User = {
    name: 'Alisa',
    age: 23,
    email: 'alisa@gmail.com'
};

const user2: User = {
    name: 'Alice',
    age: 63                             // email remove
};


console.log(user1);
console.log(user1.name)
console.log(user1.age);
console.log(user1.email);
console.log();

console.log(user2);
console.log(user2.name);
console.log(user2.age);
console.log(user2.email);