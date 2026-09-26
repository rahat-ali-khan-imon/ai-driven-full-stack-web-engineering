let value: unknown;

let myValue = value as string;
const up = myValue.toUpperCase();

const yourValue = value as number;
yourValue.toFixed();



let data: unknown;

interface User {
    name: string;
    email: string;
}

const userData = data as User;
userData.name;




// as const

// const alisa: User = {            // error 
//     name: "alisa Mor"
// }


const alisa: User = {
    name: "alisa Mor",
    email: "email@gmail.com"
} as const;

// alisa.name = "Jennie";