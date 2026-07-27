// Broken condition (1)

function checkAdult(age) {
    if(age >= 18) {              // Logic Correct
        return 'Adult';
    }

    return 'Minor';
}

console.log(checkAdult(15));
console.log(checkAdult(5));
console.log(checkAdult(18));
console.log(checkAdult(35));