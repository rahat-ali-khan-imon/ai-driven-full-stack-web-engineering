const brand: string = 'Apple';

// if(brand === 'Samsung') 
//     const isExpensive: boolean = true;               // Error

if(brand === 'Samsung') {
    const isExpensive: boolean = true;
}

// Inference : implicit
for(let i = 0; i < 10; i++) {

}


for(let i: number = 0; i < 10; i++) {

}



// Normal function
// const getLargerName = (name1, name2) => {
//     if(name1.length > name2.length) {
//         return name1;
//     }

//     return name2;
// }


// Arrow function
const getLargerName = (name1: string, name2: string): string => {
    if(name1.length > name2.length) {
        return name1;
    }

    return name2;
}

console.log(getLargerName('Alice', 'Jennie'));
console.log(getLargerName('Alice', 'Jennie').toUpperCase());



// map()
const marks: number[] = [10, 20, 30, 40, 50];

const doubles: number[] = marks.map(mark => mark * 2);

console.log(doubles);