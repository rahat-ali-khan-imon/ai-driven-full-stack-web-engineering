// Problem 13: Loop Through an Object's Properties

let monitor = {
    color: 'Black',
    brand: 'LG',
    display: 'Something',
    size: 'Something'
};

for(const key in monitor) {
    let value = monitor[key];

    console.log(key, ':', value);
}