// Object Array

type Product = {
    name: string;
    price: number;
};

type Products = Product[];

const products: Products = [
    {
        name: "Laptop",
        price: 80000
    },
    {
        name: "Mouse",
        price: 1500
    }
];

console.log(products);
console.log(products[0]);