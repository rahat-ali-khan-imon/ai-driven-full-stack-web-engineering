const students = {
    name: 'Alice',
    age: 23,
    showName: function () {
        return students.name;
    }
}

console.log(students.showName());