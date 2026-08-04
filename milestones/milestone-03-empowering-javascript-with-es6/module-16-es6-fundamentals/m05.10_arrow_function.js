const students = {
    name: 'Alice',
    age: 23,
    showName: function () {
        console.log(this);                                  // this ----> object
        return `Name: ${this.name} \nAge: ${this.age}`;
    }
}

console.log(students.showName());