// Problem 13: Loop Through an Object's Properties

let monitor = {
    color: 'Black',
    brand: 'LG',
    display: 'Something',
    size: 'Something'
};

// Using keys method
let keys = Object.keys(monitor);
console.log(keys);

let values = Object.values(monitor);
console.log(values);
console.log();



for(let key of keys) {
    let value = monitor[key];
    console.log(key, ':', value);
}