let prices = [100, 200, 300, 400, 500, 600];

let expensiveProduct = prices.filter((element) => {
    return element >= 500;
});

console.log(expensiveProduct);