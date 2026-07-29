function isElevatorSafe(weights) {
    if(!Array.isArray(weights)) {
        return 'Invalid';
    }

    let sum = 0;
    for(const weight of weights) {
        if(typeof weight !== 'number') {
            return 'Invalid';
        }

        sum += weight;
    }

    return sum <= 400;
}

const result = isElevatorSafe([60, 75, 50]);

console.log(result);
console.log(isElevatorSafe([90, 100, 95, 120]));
console.log(isElevatorSafe([400]));
console.log(isElevatorSafe("60,75,50"));
console.log(isElevatorSafe([100, '95']));
console.log(isElevatorSafe(['95']));
console.log(isElevatorSafe({"weight":60}));
console.log(isElevatorSafe([]));
console.log(isElevatorSafe(0));                                     //
console.log(isElevatorSafe(null));
console.log(isElevatorSafe([null]));
console.log(isElevatorSafe(NaN));
console.log(isElevatorSafe([NaN]));