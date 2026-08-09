/** Receipt Generator
Function Name Must be: generateReceipt
একটি Grocery Shop-এর POS System প্রতিটি Purchase-এর পর একটি Multi-line Receipt প্রিন্ট করে। 
Template Literal ব্যবহার করে এই Receipt তৈরি করতে হবে।

Input
Function তিনটি Parameter গ্রহণ করবে — customerName (String), items (Array of String), total (Number)

Output / নিয়ম
    Template Literal (backtick) ব্যবহার করে Multi-line String Return করতে হবে
    Format exactly:Receipt for <customerName>Items: <item1, item2, ...>Total: ৳<total>

Validation
Return "Invalid" যদি items Array না হয় অথবা Empty হয়।

টেস্ট কেস
Input:
"Rakib", ["Pen","Book"], 150
"Sadia", ["Milk"], 60
"Tanvir", [], 0

Output:
Receipt for Rakib\nItems: Pen, Book\nTotal: ৳150
Receipt for Sadia\nItems: Milk\nTotal: ৳60
Invalid
*/

const generateReceipt = (customerName, items, total) => {
    return `
    Receipt for${customerName}
    Items: ${items}              ${typeof items}
    Total: ${total}`;
};

console.log(generateReceipt("Rakib", ["Pen", "Book"], 150));
console.log(generateReceipt("Sadia", ["Milk"], 60));
console.log(generateReceipt("Tanvir", [], 0));