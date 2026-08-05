const user = {
    name: "Alice",
    age: 23,
    "my-address": "something",
    array: [10, 20, 30, 40, 50],
    company: {
        name: "Programming Here",
        id: 194,
        address: {
            location: "Mirpur-2",
            streetNumber: "47"
        }
    }
}

console.log(user.company);
console.log(user.company.name);
console.log();

console.log(user.company.address);
console.log(user.company.address.location);