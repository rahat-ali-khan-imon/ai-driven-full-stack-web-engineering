// ধরো আমাদের function-এর এমন একটা object দরকার যার id আছে।

function getId<T extends {id: number}>(item: T): number {
    return item.id;
}

const user = {
    id: 101,
    name: "Alisa"
};

const product ={
    id: 501,
    price: 50000
};

const category = {
  name: "Laptop"
};

console.log(getId(user));
console.log(getId(product));
// console.log(getId(category));        // error