const students = {
    name: 'Alice',
    age: 23,
    showName: function () {
        console.log(this);
        return `Name: ${this.name} \nAge: ${this.age}`;
    },
    showAge: () => {
        console.log(this);                          // this
        return `Age: ${this.age}`;                      // this
    }
}

console.log(students.showName());
console.log();
console.log(students.showAge());