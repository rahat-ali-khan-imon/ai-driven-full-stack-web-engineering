function cashRegister() {
    let amount = 0;

    return function (payableAmount) {
        amount += payableAmount;                            //
        return amount;
    };
}

let coffeeShopCashCounter = cashRegister();

console.log('Coffee shop:', coffeeShopCashCounter(200));