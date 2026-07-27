// Broken condition (1)

function checkAdult(age) {
    if(age = 18) {              // Logical Bug/Error
        console.log(age);                                           //
        return 'Adult';
    }

    return 'Minor';
}

console.log(checkAdult(15));
console.log(checkAdult(5));
console.log(checkAdult(35));