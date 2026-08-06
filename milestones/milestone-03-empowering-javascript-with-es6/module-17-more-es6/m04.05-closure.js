function cashRegister() {
    let amount = 0;

    return function () {
        return amount;
    }
}

let coffeeShopCashCounter = cashRegister();

console.log(coffeeShopCashCounter());