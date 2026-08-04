let numbers1 = [10, 20, 30, 40, 50];

let numbers2 = [...numbers1];                        //
numbers1.push(111);

console.log(numbers1);
console.log(numbers2);