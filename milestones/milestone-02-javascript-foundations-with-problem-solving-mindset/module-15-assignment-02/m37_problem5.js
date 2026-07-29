function averageResponseTime(times) {
    let total = 0;
    for(let i = 0; i < times.length; i++) {           // i = 1 -----> i = 0 and <=== ------> <
        total = total + times[i];                    // time[i] ---> times[i]
    }

    return total / times.length;                   // times ----> times.length
}

const result = averageResponseTime([120, 200, 150, 130])

console.log(result);
console.log(averageResponseTime([100, 100]));