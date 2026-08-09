const getPassingStudents = (students, threshold) => {
    const filteredStudents = students.filter(student => {
        if(student.marks >= threshold) {                                        //
            return true;
        }

        return false;
    });

    console.log(filteredStudents); 
};

const students = [
    { name: "Rafi", marks: 75 },
    { name: "Karim", marks: 40 },
    { name: "Utsho", marks: 60 }
];

console.log(getPassingStudents(students, 60));