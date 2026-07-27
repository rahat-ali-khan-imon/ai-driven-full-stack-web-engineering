// Broken condition (3)

/** Condition
 * Scholarship: 90% or move attendance AND 80 or more assignment marks.
 * Final Exam: 80% or more attendance AND or more assignment marks.
 * OtherwiseL Not Eligible
*/

function canAttendFinalExam(attendance, assignmentMark) {
    if(attendance > 90 && assignmentMark > 80) {                        // logical error
        return 'Eligible with Scholarship.';
    } else if(attendance > 80 || assignmentMark > 50) {
        return 'Eligible for Final Exam.';
    } else {
        return 'Not Eligible';
    }
}

console.log(canAttendFinalExam(90, 80));