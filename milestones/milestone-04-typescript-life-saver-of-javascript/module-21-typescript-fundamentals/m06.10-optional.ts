// Optional Parameters

const greet = (name?: string): string => {
    return `Hello ${name ?? "Guest"}`;
}

const result6 = greet('Jamal');
console.log(result6);

console.log(greet());
console.log()



const greet1 = (name?: string): string => {
    return `Hello ${name || "Guest"}`;
}

const result7 = greet1('Jamal');
console.log(result7);

console.log(greet1());


/*
"" || "Guest"       // "Guest"
"" ?? "Guest"       // ""

0 || "Guest"        // "Guest"
0 ?? "Guest"        // 0

false || "Guest"    // "Guest"
false ?? "Guest"    // false

undefined || "Guest" // "Guest"
undefined ?? "Guest" // "Guest"
*/