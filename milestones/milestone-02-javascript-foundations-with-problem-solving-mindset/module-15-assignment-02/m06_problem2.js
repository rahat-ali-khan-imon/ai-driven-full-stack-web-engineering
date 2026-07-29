function isElevatorSafe(weights) {
    let sum = 0;
    for(const weight of weights) {                          //
        sum += weight;
    }
    return sum;
}

const result = isElevatorSafe([60, 75, 50]);

console.log(result);
console.log(isElevatorSafe([90, 100, 95, 120]));
console.log(isElevatorSafe([400]));