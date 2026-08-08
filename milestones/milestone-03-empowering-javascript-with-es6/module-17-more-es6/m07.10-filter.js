let prices = [100, 200, 300, 400, 500, 600];

let expensiveProduct = prices.filter((element) => {
    if(element >= 500){
        return true;
    }

    return false;
});

console.log(expensiveProduct);