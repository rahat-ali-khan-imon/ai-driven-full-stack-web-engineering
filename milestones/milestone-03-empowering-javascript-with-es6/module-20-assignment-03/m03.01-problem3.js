/* Problem 3 —Trending Hashtag Counter
Function Name Must be: countHashtags
Clipzy একটি short-video app, যা Gen Z দের মধ্যে জনপ্রিয়। এটি একটি caption কতটা "trend-friendly" তা বুঝতে 
caption-এ থাকা hashtag গণনা করতে চায় এবং সবচেয়ে বড় hashtag খুঁজে বের করতে চায়। প্রতিটি hashtag হলো # দিয়ে 
শুরু হওয়া একটি word।
তোমার কাজ হলো এমন একটি function লেখা যা caption string স্ক্যান করে বলবে সেখানে কয়টি hashtag আছে এবং 
সবচেয়ে বড় hashtag কোনটি (# চিহ্ন ছাড়া)।

Input
একটি string, caption, যেমনঃ "Loving this weather today #sunny #vibes #weekend"

Output
একটি Object, শেপ: { hashtagCount: Number, longestTag: String }
    hashtagCount → মোট কতগুলো word # দিয়ে শুরু হয়েছে


Challenge
    Input String না হলে "Invalid" রিটার্ন করবে।
    longestTag → সবচেয়ে বড় hashtag-এর টেক্সট, # ছাড়া (length সমান হলে যেটা আগে আছে সেটা)
    কোনো hashtag না থাকলে longestTag হবে ""

টিপস: caption-কে word এ ভাগ করার জন্য split(" ") ব্যবহার করো, তারপর প্রতিটা word startsWith("#") দিয়ে চেক 
করো।

Starter Code:
function countHashtags(caption) {
    // Write your code here…
}


Test Cases
Input:
"Loving this weather today #sunny #vibes #weekend"
"No hashtags here"
"#ai #ml data science"
123
["#fun"]


Output:
{ hashtagCount: 3, longestTag: "weekend" }
{ hashtagCount: 0, longestTag: "" }
{ hashtagCount: 2, longestTag: "ai" }
Invalid
Invalid


*/

const countHashtags = (caption) => {
    console.log(caption);
};

console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"));
console.log(countHashtags("No hashtags here"));
console.log(countHashtags("#ai #ml data science"));
console.log(countHashtags(123));
console.log(countHashtags(["#fun"]));