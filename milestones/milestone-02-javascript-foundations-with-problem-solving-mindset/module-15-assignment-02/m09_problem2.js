function isElevatorSafe(weights) {
    if(!Array.isArray(weights)) {                                   //
        return 'Invalid';
    }

    let sum = 0;
    for(const weight of weights) {
        sum += weight;
    }
    
    if(sum <= 400) {
        return true;
    } else {
        return false;
    }
}

const result = isElevatorSafe([60, 75, 50]);

console.log(result);
console.log(isElevatorSafe([90, 100, 95, 120]));
console.log(isElevatorSafe([400]));
console.log(isElevatorSafe("60,75,50"));