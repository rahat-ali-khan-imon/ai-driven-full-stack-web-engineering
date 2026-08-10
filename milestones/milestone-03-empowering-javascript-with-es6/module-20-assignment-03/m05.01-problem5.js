/* Problem 5 — Debugging Challenge: AI Leaderboard Generator
Function Name Must be: generateLeaderboard
Programming Hero-এর নতুন AI Coding Arena-তে প্রতিদিন হাজার হাজার শিক্ষার্থী Problem Solve করে।

দিন শেষে একটি AI Leaderboard Engine Top Performer-দের তালিকা তৈরি করে।


Rules খুবই সহজ—
    শুধুমাত্র যাদের Score 70 বা তার বেশি, তারা Leaderboard-এ থাকবে।
    প্রত্যেক Qualified Student-এর নাম UPPERCASE করা হবে।
    Leaderboard-এ শুধুমাত্র প্রথম ৩ জন দেখানো হবে।(যে order-এ Input এসেছে সেই order-ই থাকবে)

কিন্তু সমস্যা হলো...
একজন Junior Developer তাড়াহুড়ো করে পুরো Function লিখে ফেলেছে।
সে ES6 Feature ব্যবহার করার চেষ্টা করেছে, কিন্তু অনেক জায়গায় ভুল করেছে।
এখন Leaderboard ভুল Result দিচ্ছে।
তোমার কাজ হলো সব Bug খুঁজে বের করে ঠিক করা।

Input
একটি Array of Object, যেমনঃ 
[
    { name: "Rafi", score: 90 },
    { name: "Sadia", score: 65 },
    { name: "Karim", score: 85 },
    { name: "Nafis", score: 75 }
]

Output
একটি Array, যেমনঃ 
["RAFI", "KARIM", "NAFIS"] 

Challenge
Bug ঠিক করার পরে function এটাও handle করবে —
    Input Array না হলে "Invalid" 
    Empty Array হলে "Invalid" 
    কোনো Object-এ name বা score না থাকলে "Invalid" 
    score Number না হলে "Invalid" 

Buggy Code:
Find and fix every bug. Do not change the function name.
function generateLeaderboard(students) {
    if (!Array.isArray = students) {
        return "Invalid";
    }

    if (students.length == []) {
        return "Invalid";
    }

    const qualified = students.filter(student => {
        student.score > 70;
    });

    const names = qualified.map(({ name }) => {
        name.toUpperCase();
    });

    return names.slice(0, 2);
}


Tips
এই Function-এ ৮টিরও বেশি Bug আছে।

খেয়াল করে দেখো—
    Array.isArray() সঠিকভাবে ব্যবহার করা হয়েছে কি?
    Empty Array Check ঠিক আছে কি?
    filter() Callback কি Return করছে?
    Condition অনুযায়ী Score ঠিকভাবে Filter হচ্ছে?
    map() Callback কি Return করছে?
    toUpperCase()-এর Result কি Return হচ্ছে?
    slice() ঠিক কয়টি Element নিচ্ছে?
    Validation সম্পূর্ণ করা হয়েছে কি?

NB: Final Array কে Sort করতে হবে না।

Sample Test Cases
Input:
[{name:"Rafi",score:90},{name:"Sadia",score:65},{name:"Karim",score:85},{name:"Nafis",score:75}]
[{name:"A",score:70},{name:"B",score:71}]
[]
"students"
[{name:"Rafi"}]
[{name:"Rafi",score:"90"}]


Output:
["RAFI","KARIM","NAFIS"] 
["A","B"] 
Invalid
Invalid
Invalid
Invalid

*/

/* Find and fix every bug. Do not change the function name. */

function generateLeaderboard(students) {
    // if (!Array.isArray = students) {
    //     return "Invalid";
    // }

    // if (students.length == []) {
    //     return "Invalid";
    // }

    // const qualified = students.filter(student => {
    //     student.score > 70;
    // });

    // const names = qualified.map(({ name }) => {
    //     name.toUpperCase();
    // });

    // return names.slice(0, 2);

    console.log(students);
}

console.log(generateLeaderboard([
    {name:"Rafi", score:90},
    {name:"Sadia", score:65},
    {name:"Karim", score:85}, {name:"Nafis", score:75}
]));
console.log(generateLeaderboard([
    {name:"A", score:70},
    {name:"B", score:71}
]));
console.log(generateLeaderboard([]));
console.log(generateLeaderboard("students"));
console.log(generateLeaderboard([{name:"Rafi"}]));
console.log(generateLeaderboard([{name:"Rafi",score:"90"}]));