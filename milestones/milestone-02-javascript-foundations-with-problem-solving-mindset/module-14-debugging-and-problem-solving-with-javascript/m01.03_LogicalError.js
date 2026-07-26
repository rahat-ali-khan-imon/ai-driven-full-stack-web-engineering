function addNumbers(a, b) {
    console.log('a is', a, 'b is', b);
    return a - b;   // wrong operator ====> correct code => return a + b;
}

console.log(addNumbers(5, 3));      // LogicalError: No crash, wrong answer