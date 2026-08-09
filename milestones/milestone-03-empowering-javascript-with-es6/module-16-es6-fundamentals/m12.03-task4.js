const calculateBMI = (weight, height) => {
    if(weight <= 0 || height <= 0) {
        return 'Invalid';
    }

    const bmi = weight / (height * height);
    return Number(bmi.toFixed(2));
};

console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(50, 1.6));
console.log(calculateBMI(60, -1.7));
console.log(calculateBMI(12, 0));
console.log(calculateBMI(123, undefined));
console.log(calculateBMI(23, null));