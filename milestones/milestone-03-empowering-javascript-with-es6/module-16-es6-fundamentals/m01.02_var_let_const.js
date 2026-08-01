// Scope --:> Global scope, block scope, function scope


let globalScope1 = 'global scope let';              // Global scope
const globalScope2 = 'global scope const';
var globalScope3 = 'global scope var';


if(true) {
    let blockScope1 = 'block scope let';                 // Block scope
    const blockScope2 = 'block scope const';
    var blockScope3 = 'Declaring block-scope variables but accessing them globally'
}

// console.log(blockScope1);                // blockScope1 is not defined
// console.log(blockScope2);
console.log(blockScope3);
console.log();


console.log(globalScope1);                // Global scope
console.log(globalScope2);
console.log(globalScope3);