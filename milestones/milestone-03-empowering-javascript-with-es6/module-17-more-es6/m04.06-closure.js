function cashRegister() {
    let amount = 0;

    return function (payableAmount) {
        console.log(payableAmount);                             //
        return amount;
    };
}

let coffeeShopCashCounter = cashRegister();

console.log(coffeeShopCashCounter(200));                    // 