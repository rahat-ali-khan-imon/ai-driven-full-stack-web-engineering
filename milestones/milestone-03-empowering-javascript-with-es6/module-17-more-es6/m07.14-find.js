let prices = [100, 200, 300, 400, 501, 500, 600];               // add 501

let expensiveProduct = prices.find((element) => element >= 500);

console.log(expensiveProduct);