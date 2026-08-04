const students = {
    name: 'Alice',
    age: 23,
    showName: function () {
        console.log(this);
        return `Name: ${this.name} \nAge: ${this.age}`;
    },
    showAge: () => {
        return `Age: ${students.age}`;
    }
}

console.log(students.showName());
console.log();
console.log(students.showAge());                        //