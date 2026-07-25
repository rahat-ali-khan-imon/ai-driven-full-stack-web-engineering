// Using a bmi variable, determine the category — Underweight, Normal, Overweight, Obese (use if-else if).
// BMI = Body Mass Index


const weight = 70;      // Weight in kilograms
const height = 1.75;    // Height in meters

const bmi = weight / (height * height);

console.log("BMI:", bmi.toFixed(2));

if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi < 25) {
    console.log("Normal");
} else if (bmi < 30) {
    console.log("Overweight");
} else {
    console.log("Obese");
}