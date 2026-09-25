// শুধু number নিয়ে কাজ করতে চাও।

function double<T extends number>(value: T): number {
    return value * 2;
}

console.log(double(10));
// console.log(double("20"));       // error