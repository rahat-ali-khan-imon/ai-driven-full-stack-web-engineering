// Literal Type

type Status = 'success' | 'error' | 'loading';
let status: Status;

status = 'success';
status = 'error';
status = 'loading';
// status = 'pending';          // Error

console.log(status);