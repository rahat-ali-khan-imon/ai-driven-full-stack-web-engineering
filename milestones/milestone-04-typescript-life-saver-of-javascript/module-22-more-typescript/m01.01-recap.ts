/**
 * 1. Variables (Basic Types)
 * 2. Array
 * 3. Function
 * 4. Object
 * 5. Some more basic types
*/

// Variable
const destination: string = 'Saint Martin';
const helicopters: number = 63;


// Array
const countries: string[] = ['France', 'Germany', 'Italy', 'Spain'];


// Function
function buyBook(title: string, price: number, discount: number) {
    return `The book ${title} cost ${price - discount}`;
}


function buyBook2(title: string, price: number, discount?: number) {
    // return `The book ${title} cost ${price - discount}`;                     // Error
}


function buyBook3(title: string, price: number, discount?: number): string {
    if(discount == undefined) {
        discount = 0;
    }

    return `The book ${title} cost ${price - discount}`;
}


// Object
const tubeLight: {
    brand: string,
    color: string,
    price: number,
    isAvailable: boolean
} = {
    brand: 'Philips',
    color: 'White',
    price: 12.99,
    isAvailable: true
};



// union string | number | boolean | null