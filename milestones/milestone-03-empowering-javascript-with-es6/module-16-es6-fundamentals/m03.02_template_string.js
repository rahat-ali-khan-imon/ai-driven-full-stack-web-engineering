let name = 'Alice';
let price = 1030;
let quantity = 5;

let location = `Rajshahi`;


let message1 = "Hello, " + name + ". Your bill is " + price;
let message2 = `Hello, ${name}. Your bill is ${price}`;
let message3 = `Hello, ${name}. Your bill is ${price * quantity}`;

let message4 = `Hello, ${name}. Your bill is ${price * quantity}

line 1
line 2
line 3
`;

console.log(message1);
console.log(message2);
console.log(message3);
console.log(message4);