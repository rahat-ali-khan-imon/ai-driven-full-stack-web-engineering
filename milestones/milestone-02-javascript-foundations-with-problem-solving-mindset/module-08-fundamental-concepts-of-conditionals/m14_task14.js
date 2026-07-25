// Using age and hasID, use nested if-else to check whether someone is eligible to vote.


const age = 20;
const hasID = true;

if (age >= 18) {
    if (hasID) {
        console.log("Eligible to vote");
    } else {
        console.log("ID is required to vote");
    }
} else {
    console.log("Not eligible to vote");
}