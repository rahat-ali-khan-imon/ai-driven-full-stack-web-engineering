// Problem 13: Loop Through an Object's Properties

let monitor = {
    color: 'Black',
    brand: 'LG',
    display: 'Something',
    size: 'Something'
};

// For in loop
for(const key in monitor) {
    console.log(key);
}