// Rest Operator

function sum(a, b, c, ...restNumbers) {                             //
    console.log('Rest Numbers:', restNumbers);
    return a + b + c;
}

console.log(sum(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));