// function useState(initialValue: number): number {
//     let value = initialValue;

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


function useState(initialValue: number): [number, (newValue: number) => void] {
  let value = initialValue

  function setValue(newValue: number): void {
    value = newValue
  }

  return [value, setValue]
}

const [counter, setCounter] = useState(0)

console.log(counter)
console.log(setCounter)