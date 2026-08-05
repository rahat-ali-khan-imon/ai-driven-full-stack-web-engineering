const user = {
    name: "Alice",
    age: 23,
    "my-address": "something",
    array: [10, 20, 30, 40, 50],
    objects: {
        name: "Programming Here",
        id: 194
    }
}

// Access property: Dot notation and Bracket notation 
const key = 'objects';
console.log(user[key]);
console.log();


console.log(user.my-address);                       // error