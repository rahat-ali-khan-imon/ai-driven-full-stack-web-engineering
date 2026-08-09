/* BMI Calculator (Arrow Refactor)
Function Name Must be: calculateBMI
একটি Fitness App-এর পুরানো ES5 Function কে Arrow Function এ Refactor করতে হবে। Function টি Weight (kg)
এবং Height (m) নিয়ে BMI বের করবে।

Input
Arrow Function দুইটি Parameter গ্রহণ করবে — weight (Number, kg), height (Number, m)

Output / নিয়ম
    BMI = weight / (height × height)
    Return করতে হবে BMI একটি Number হিসেবে, 2 Decimal Place পর্যন্ত (toFixed(2), তারপর Number এ Convert)

Validation
Return "Invalid" যদি weight বা height শূন্য বা Negative হয়।

টেস্ট কেস
Input:
70, 1.75
50, 1.6
60, -1.7


Output:
22.86
19.53
Invalid

*/

const calculateBMI = (weight, height) => {
    return `${weight} ------> ${height}`;
};

console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(50, 1.6));
console.log(calculateBMI(60, -1.7));