/* Problem 14: You are given an object containing information about a student.

---- Tasks ----
Print all keys.
Print all values.
Print each key-value pair.

name: Alice
age: 26
university: DIU
department: CSE

Count the total number of properties in the object.
Check if the object contains a property named "email".

---- Expected input:
 const student = {
  name: "Alice",
  age: 25,
  university: "DIU",
  department: "CSE",
};

-----------------------------

---- Expected output:
name age university department

Alice 26 DIU CSE

name: Alice
age: 26
university: DIU
department: CSE

Total Properties: 4
Has Email: false
*/

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

    let ans = "";
    for(let key in obj) {
        ans += obj[key] + " ";
    }
    console.log(ans);
    console.log();

    for(let key in obj) {
        console.log(key, ':', obj[key]);
    }
}

objOperation(student);