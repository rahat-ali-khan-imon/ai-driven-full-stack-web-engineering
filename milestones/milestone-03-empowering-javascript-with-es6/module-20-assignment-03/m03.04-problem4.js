const countHashtags = (caption) => {
    if(typeof caption !== 'string') {
        return 'Invalid';
    }

    const words = caption.split(' ');
    
    let hashtagCount = 0;
    let longestTag = '';

    for(const word of words) {
        if(word.startsWith('#')) {
            hashtagCount++;

            const tag = word.slice(1);

            if(tag.length > longestTag.length) {
                longestTag = tag;
            }
        }
    }

    return {
        hashtagCount,
        longestTag
    };
};

console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"));
console.log(countHashtags("No hashtags here"));
console.log(countHashtags("#ai #ml data science"));
console.log(countHashtags(123));
console.log(countHashtags(["#fun"]));
console.log(countHashtags("Loving #weekend this weather today #sunny #vibes #weekend"));
console.log(countHashtags(null));
console.log(countHashtags(undefined));
console.log(countHashtags(true));
console.log(countHashtags("#"));
console.log(countHashtags("hello #sunny,#weekend"));