// Broken condition (2)

function canApply(age, hasNID) {
    if(age == 18 || hasNID) {
        return 'Eligible';
    }

    return 'Not Eligible';
}

console.log(canApply(15, true));