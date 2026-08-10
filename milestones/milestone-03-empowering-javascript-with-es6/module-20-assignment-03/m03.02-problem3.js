const countHashtags = (caption) => {
    const words = caption.split(' ');
    console.log(words);
};

console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"));
console.log(countHashtags("No hashtags here"));
console.log(countHashtags("#ai #ml data science"));
// console.log(countHashtags(123));
// console.log(countHashtags(["#fun"]));