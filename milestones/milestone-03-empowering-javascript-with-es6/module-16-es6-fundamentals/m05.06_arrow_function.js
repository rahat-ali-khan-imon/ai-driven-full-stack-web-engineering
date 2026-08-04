const students = {
    name: 'Alice',
    age: 23,
    showName: function () {
        return students.name;
    }
}

console.log(students);
console.log(students.showName);
console.log(students.showName());