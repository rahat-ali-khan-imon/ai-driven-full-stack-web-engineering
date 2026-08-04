const sumFirstThenMultiplyByThree1 = (a, b) => {
  const sum = a + b;
  const multiply = sum * 3;
  return multiply;
};

const sumFirstThenMultiplyByThree2 = (a, b) => (a + b) * 3;

const sayHi = () => "Hi";


console.log(sumFirstThenMultiplyByThree1(5, 5));
console.log(sayHi());
console.log(sumFirstThenMultiplyByThree2(5, 5));