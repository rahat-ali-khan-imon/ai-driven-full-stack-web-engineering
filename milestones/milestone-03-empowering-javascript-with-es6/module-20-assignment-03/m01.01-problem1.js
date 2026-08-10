/* Problem 1 — Student Introduction Generator
Function Name Must be: studentIntroduction 
একটি Online Learning Platform নতুন Student Registration-এর পরে একটি Introduction Message তৈরি করতে চায়।

Input
Function একটি Object গ্রহণ করবে।

Example:
{
  name: "Rafi",
  age: 18,
  course: "JavaScript"
}

Output
Template Literal ব্যবহার করে Return করবে—

Example:
My name is Rafi. I am 18 years old. I am learning JavaScript.


Challenge
Return "Invalid"
    যদি Input Object না হয়
    অথবা name, age অথবা course property না থাকে

Starter Code:
function studentIntroduction(student) {
  // Write your code here
}


Sample Test Cases
Input:
{name:"Rafi",age:18,course:"JavaScript"}
{} 
"student" 


Output:
My name is Rafi. I am 18 years old. I am learning JavaScript.
Invalid
Invalid

*/

onst studentIntroduction = (obj) => {
    console.log(obj);
};

console.log(studentIntroduction({name:"Rafi", age:18, course:"JavaScript"}));
console.log(
    stucdentIntroduction(
        {
            name: 'Rafi',
            age: 18, 
            course: 'JavaScript'
        }
    )
);

console.log(
    studentIntroduction({
        name: 'Rafi',
        age: 18,
        course: 'JavaScript'
    })
);