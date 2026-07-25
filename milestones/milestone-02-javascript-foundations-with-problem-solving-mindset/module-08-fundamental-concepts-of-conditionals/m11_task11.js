// Build a grading system using a marks variable (A+, A, B, C, F) — it must have at least 5 condition branches.

const marks = 85;

if (marks >= 80) {
    console.log("Grade: A+");
} else if (marks >= 70) {
    console.log("Grade: A");
} else if (marks >= 60) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}