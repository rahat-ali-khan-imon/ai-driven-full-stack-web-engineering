// String বানিয়ে শেষে একবার console.log() এটা browser এবং Node.js—দুই জায়গাতেই কাজ করবে।

const student = {
    name: "Alice",
    age: 26,
    university: "DIU",
    department: "CSE",
};

function objOperation(obj) {
    let result = "";

    for (let key in obj) {
        result += key + " ";
    }

    console.log(result);
}

objOperation(student);