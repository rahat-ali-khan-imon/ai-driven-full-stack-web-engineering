function cashRegister() {
    let amount = 0;

    return function (payableAmount) {
        amount += payableAmount;
        return amount;
    };
}

let coffeeShopCashCounter = cashRegister();
let restaurantCashCounter = cashRegister();                               //

console.log('Coffee shop:', coffeeShopCashCounter(200));
console.log('Coffee shop:', coffeeShopCashCounter(100));
console.log('Coffee shop:', coffeeShopCashCounter(500));
console.log();

console.log('Restaurant:', restaurantCashCounter(50));                         //