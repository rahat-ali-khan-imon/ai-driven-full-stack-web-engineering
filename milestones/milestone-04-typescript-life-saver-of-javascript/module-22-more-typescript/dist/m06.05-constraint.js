"use strict";
// ধরো আমাদের function-এর এমন একটা object দরকার যার id আছে।
Object.defineProperty(exports, "__esModule", { value: true });
function getId(item) {
    return item.id;
}
const user = {
    id: 101,
    name: "Alisa"
};
const product = {
    id: 501,
    price: 50000
};
const category = {
    name: "Laptop"
};
console.log(getId(user));
console.log(getId(product));
// console.log(getId(category));        // error
//# sourceMappingURL=m06.05-constraint.js.map