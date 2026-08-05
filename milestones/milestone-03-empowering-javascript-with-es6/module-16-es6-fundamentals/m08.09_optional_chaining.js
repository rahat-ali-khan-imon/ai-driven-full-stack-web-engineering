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

const user2 = {
    name: "Ab",
    age: 63,
    "my-address": "something",
    array: [10, 20, 30, 40, 50],
    // company: {
    //     name: "Programming Here",
    //     id: 194,
    //     address: {
    //         location: "Mirpur-2",
    //         streetNumber: "47"
    //     }
    // }
};

console.log(user2.company);
console.log(user2?.company?.name);
console.log(user2?.company?.location);