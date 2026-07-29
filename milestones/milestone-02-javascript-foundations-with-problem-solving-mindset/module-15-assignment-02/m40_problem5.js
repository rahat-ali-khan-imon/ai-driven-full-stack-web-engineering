function averageResponseTime(times) {
    if(!Array.isArray(times)) {
        return 'Invalid';
    }

    let total = 0;
    for(let i = 0; i < times.length; i++) {
        total = total + times[i];
    }

    return total / times.length;
}

const result = averageResponseTime([120, 200, 150, 130])

console.log(result);
console.log(averageResponseTime([100, 100]));
console.log(averageResponseTime("logs"));
console.log(averageResponseTime([]));                                       //