/* Problem 4 — Bonus Score Calculator
Function Name Must be: bonusScore
একটি Programming Contest-এ প্রতিটি Participant-এর Score একটি Number Array আকারে দেওয়া আছে।

Contest শেষে প্রত্যেক Participant-এর Score-এর সাথে ১০ Bonus Marks যোগ করা হবে। এরপর সব Updated Score যোগ 
করে Total Score Return করতে হবে।

Input
একটি Number Array, যেমনঃ 
[80, 65, 90, 75]

Output
350

Explanation
Updated Scores: (প্রত্যেকের সাথে 10 যোগ করে)
[90, 75, 100, 85]
Total: 
90 + 75 + 100 + 85 = 350


Challenge
Return "Invalid" যদি—
    Input Array না হয়।
    Array Empty হয়।
    Array-এর মধ্যে Number ছাড়া অন্য কোনো Data Type থাকে।

টিপস: এই Problem সমাধান করতে map() এবং reduce() ব্যবহার করতে পারো। 

Starter Code:
function bonusScore(scores) {
    // Write your code here
}


Sample Test Cases
Input:
[80, 65, 90, 75]
[100]
[0, 10]
[]
"scores"
[80, "90", 70]


Output:
350
110
30
Invalid
Invalid
Invalid

*/

const bonusScore = (scores) => {
    console.log(scores);
};

console.log(bonusScore([80, 65, 90, 75]));
console.log(bonusScore([100]));
console.log(bonusScore([0, 10]));
console.log(bonusScore([]));
console.log(bonusScore("scores"));
console.log(bonusScore([80, "90", 70]));