const students = {
    name: 'Alice',
    age: 23,
    showName: function () {
        return this.name;                           // this
    }
}

console.log(students.showName());