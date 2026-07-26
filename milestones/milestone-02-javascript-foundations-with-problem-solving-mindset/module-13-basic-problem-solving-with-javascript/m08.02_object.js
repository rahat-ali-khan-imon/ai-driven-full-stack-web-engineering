// Problem 13: Loop Through an Object's Properties

let monitor = {
    color: 'Black',
    brand: 'LG',
    display: 'Something',
    size: 'Something'
};

for(const key in monitor) {
    console.log(key);
}
console.log();


console.log(monitor['color']);              // bracket notation
console.log(monitor.brand);                // dot notation