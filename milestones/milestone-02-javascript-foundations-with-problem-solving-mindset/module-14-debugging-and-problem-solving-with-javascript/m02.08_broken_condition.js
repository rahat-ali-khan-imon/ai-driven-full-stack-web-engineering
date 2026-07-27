// Broken condition (2)

function canApply(age, hasNID) {
    if(age >= 18 && hasNID) {               // >=
        return 'Eligible';
    }

    return 'Not Eligible';
}

console.log(canApply(15, false));
console.log(canApply(18, true));
console.log(canApply(35, false));
console.log(canApply(35, true));