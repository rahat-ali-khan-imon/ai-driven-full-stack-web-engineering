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
};

const keys = Object.keys(user);                             //

// for of loop
for(let key of keys) {
    console.log(key, ":", user[key]);
}