let name = 'Alice';
let amount = 2500;

let message = `Hello, ${name}, 
               Your payment is successful.
               Your paid amount is ${amount}`;

console.log(message);
console.log('------------------------------------------\n');



function admissionConfirmationMail(name, amount) {
  let message = `Hello, ${name || "student"},
              Your payment is successful.
              Your paid amount is ${amount}`;
  return message;
}

console.log(admissionConfirmationMail("Jennie", 3000));
console.log(admissionConfirmationMail("Alisa", 8000));
console.log(admissionConfirmationMail(undefined, 5000));