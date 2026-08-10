/* Problem 2 — Active User Filter
Function Name Must be: filterActiveUsers
একটি Social Media Platform-এ User-দের Status Check করতে হবে।
User List একটি Array of Object আকারে দেওয়া আছে।
Function শুধুমাত্র isActive: true হওয়া User-দের Array Return করবে।

Input
একটি array of object যেখানে name এবং isActive property থাকবে।
যেমনঃ
    [
    {name:"A", isActive:true},
    {name:"B", isActive:false}
    ]



Output
শুধুমাত্র isActive: true হওয়া User-দের Array Return করবে।
যেমনঃ
    [{name:"A", isActive:true}]


Challenge
    Return "Invalid"
    Input Array না হলে
    Empty Array হলে
    Object-এ isActive property না থাকলে

টিপস: filter() ব্যবহার করার চেষ্টা করো।

Starter Code:
function filterActiveUsers(users) {
    // Write your code here
}


Sample Test Cases
Input:
[{name:"A", isActive:true},{name:"B", isActive:false}]
[]
[{name:"A"}]
"users"


Output:
[{name:"A", isActive:true}]
Invalid
Invalid
Invalid

*/

const filterActiveUsers = (users) => {
    console.log(users);
};

console.log(
    filterActiveUsers([
        {name: 'A', isActive: true},
        {name: 'B', isActive: false}
    ])
);
console.log(filterActiveUsers([]));
console.log(filterActiveUsers([{name: 'A'}]));;
console.log(filterActiveUsers('users'));