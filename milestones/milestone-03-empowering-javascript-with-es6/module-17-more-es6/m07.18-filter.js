let phones = [
    {
        model: 'iphone 15',
        price: 72000
    },
    {
        model: 'iphone 16',
        price: 86000
    },
    {
        model: 'iphone 17',
        price: 96000
    },
    {
        model: 'OnePlus',
        price: 65000
    },
    {
        model: 'Tecno',
        price: 15000
    },
    {
        model: 'Samsung',
        price: 17000
    }
];

let expansivePhones = phones.filter(phone => phone.price >= 50000);
let cheapestPhones = phones.filter(phone => phone.price <= 20000);

console.log(expansivePhones);
console.log(cheapestPhones);