// Function Returning Nothing — void

function printName(name: string): void {
    console.log(name);
}

printName('Alice');



const printName1 = (name: string): void => {        // Explicit void
    console.log(name);
}

printName1('Alisa');



const printName2 = (name: string) => {          // Type Inference
    console.log(name);
}

printName2('Jamal');