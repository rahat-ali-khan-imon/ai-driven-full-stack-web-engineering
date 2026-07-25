// Take a year variable and check whether it is a leap year (hint: year % 4 === 0).

const year = 2024;

if (year % 4 === 0) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
console.log();



if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year, " is a leap year.");
} else {
    console.log(year, " is not a leap year.");
}
console.log();



if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year, "is a leap year.");
} else {
    console.log(year, "is not a leap year.");
}