// Rest Operator

function sum(a, b, c, ...restNumbers) {
    console.log('Rest Numbers:', restNumbers);

    let sum = 0 ;                                               //
    for(const number of restNumbers) {
        sum += number;
    }

    return a + b + c + sum;
}

console.log(sum(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));