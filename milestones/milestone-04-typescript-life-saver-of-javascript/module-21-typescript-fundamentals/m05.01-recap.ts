const books: string[] = ['book1', 'book2', 'book3'];
const runs: number[] = [10, 20, 30, 40, 50];


const shoppingList: [string, number] = ['iphone', 15000];           // Fixed size


const book: {
    name: string,
    author: string,
    price: number,
    pages: number,
    isUsed: boolean
} = {
    name: 'Chemistry',
    author: 'Alisa',
    price: 500,
    pages: 256,
    isUsed: true
};


const book1: {
    name: string,
    author: string,
    price: number,
    pages: number,
    isUsed?: boolean        // Optional property
} = {
    name: 'Chemistry',
    author: 'Alisa',
    price: 500,
    pages: 256,
    // isUsed: true
};


const book2: {
    name: 'Chemistry',               // Object literal
    author: string,
    price: number,
    pages: number,
    isUsed?: boolean 
} = {
    name: 'Chemistry',
    author: 'Alisa',
    price: 500,
    pages: 256,
    isUsed: true
};

// book2.name = 'Physics';                  // Error



console.log(books);
console.log(runs);
console.log(shoppingList);
console.log(book);
console.log(book1);
console.log(book2);