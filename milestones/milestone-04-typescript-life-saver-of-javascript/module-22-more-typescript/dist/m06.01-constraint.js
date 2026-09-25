"use strict";
// function useState(initialValue: number): number {
//     let value = initialValue;
Object.defineProperty(exports, "__esModule", { value: true });
//     function setValue(newValue: number) {
//         value = newValue;
//     }
//     // return value;
//     return [value, setValue];
// }
// // const counter = useState(0);
// const [counter, setCounter] = useState(0);
// console.log(counter);
// console.log(setCounter);
function useState(initialValue) {
    let value = initialValue;
    function setValue(newValue) {
        value = newValue;
    }
    return [value, setValue];
}
const [counter, setCounter] = useState(0);
console.log(counter);
console.log(setCounter);
//# sourceMappingURL=m06.01-constraint.js.map