// Using a month number (1-12), determine which season that month falls in (Winter, Summer, Monsoon, etc.).


const month = 7;

if(month === 12 || month === 1 || month === 2) {
    console.log("Winter");
} else if(month === 3 || month === 4 || month === 5) {
    console.log("Summer");
} else if(month === 6 || month === 7 || month === 8) {
    console.log("Monsoon");
} else if(month === 9 || month === 10) {
    console.log("Autumn");
} else if(month === 11) {
    console.log("Late Autumn");
} else{
    console.log("Invalid month");
}