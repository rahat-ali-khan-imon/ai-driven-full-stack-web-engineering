/* Task 13 — Comparing Loop Types
Write the same task — printing numbers 1 to 5 — three times: once using for, once using while, 
and once using do while. Compare how the code structure differs for each.
*/

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log('\n');


let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
console.log('\n');


i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);



/*
##> Comparison
| Loop Type    | Initialization  | Condition           | Update               |
| ------------ | --------------- | ------------------- | -------------------- |
| `for`        | Inside the loop | Inside the loop     | Inside the loop      |
| `while`      | Before the loop | Inside `while`      | Inside the loop body |
| `do...while` | Before the loop | After the loop body | Inside the loop body |


##> When to Use
✅ for loop → Best when you know the number of iterations beforehand.
✅ while loop → Best when the number of iterations is unknown and depends on a condition.
✅ do...while loop → Best when you want the loop body to execute at least once, regardless of the 
    condition.
*/