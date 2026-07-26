// process.stdout.write() (Node.js) যদি Node.js ব্যবহার করো, তাহলে:

const student = {
    name: "Alice",
    age: 26,
    university: "DIU",
    department: "CSE",
};

function objOperation(obj) {
    for (let key in obj) {
        process.stdout.write(key + " ");
    }
}

objOperation(student);