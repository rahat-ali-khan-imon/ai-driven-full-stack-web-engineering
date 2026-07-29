// 2. Take a portion of an array (not the whole thing) without changing the original. Log the result.

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

const newArray = fruits.slice(1, 4);

console.log(newArray);
console.log(fruits);
console.log();



// Take a portion of an array (not the whole thing) with changing the original.

const fruit = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

const removedItems = fruit.splice(1, 3);

console.log(removedItems);
console.log(fruit);