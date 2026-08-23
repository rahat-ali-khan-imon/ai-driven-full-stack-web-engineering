"use strict";
const device = {
    name: 'iphone',
    type: 'smartPhone',
    price: 999,
    color: 'black',
    storage: '128GB'
};
// const {name} = device;                   // Error
const { name: deviceName, ...deviceInfo } = device;
console.log(deviceName);
console.log(deviceInfo);
console.log();
const numbers = [10, 20, 30, 40, 50];
const newNumbers = [70, 80, 90, 100];
const closeFriends = ['Alice', 'Alisa', 'Jamal', 'John'];
const allNumbers = [...numbers, ...newNumbers];
console.log(numbers);
console.log(newNumbers);
console.log(closeFriends);
console.log(allNumbers);
