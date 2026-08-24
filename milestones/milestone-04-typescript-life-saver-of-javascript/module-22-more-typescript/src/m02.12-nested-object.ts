// Nested Object Type

type Address = {
    city: string;
    country: string;
};

type User = {
    name: string;
    age: number;
    address: Address;
};

const user: User = {
    name: 'Jamal',
    age: 23,
    address: {
        city: 'Rajshahi',
        country: 'Bangladesh'
    }
};

console.log(user);
console.log(user.name);
console.log(user.address);
console.log(user.address.city);