function generateLeaderboard(students) {
    if (!Array.isArray(students) || students.length === 0) {
        return "Invalid";
    }

    for(const student of students) {
        if(
            !student.hasOwnProperty('name') ||
            !student.hasOwnProperty('score') ||
            typeof student.score !== 'number' ||
            student === null                                    //
        ) {
            return 'Invalid';
        }
    }

    const qualified = students.filter(({score}) => {
        return score >= 70;
    });

    const names = qualified.map(({ name }) => {
        return name.toUpperCase();
    });

    return names.slice(0, 3);
}

console.log(generateLeaderboard([
    {name:"Rafi", score:90},
    {name:"Sadia", score:65},
    {name:"Karim", score:85}, 
    {name:"Nafis", score:75}
]));
console.log(generateLeaderboard([
    {name: "Alice", score: 97},
    {name:"Rafi", score:90},
    {name:"Sadia", score:65},
    {name:"Karim", score:85}, 
    {name:"Nafis", score:75}
]));
console.log(generateLeaderboard([
    {name:"A", score:70},
    {name:"B", score:71}
]));
console.log(generateLeaderboard([]));
console.log(generateLeaderboard("students"));
console.log(generateLeaderboard([{name:"Rafi"}]));
console.log(generateLeaderboard([{name:"Rafi",score:"90"}]));
console.log();
console.log(generateLeaderboard([  
    { name: "A", score: 60 },
    { name: "B", score: 50 }
]));
console.log(generateLeaderboard([
    { name: "A", score: 80 },
    { name: "B", score: NaN }
]));
console.log(generateLeaderboard([
    { name: "C", score: 80 },
    { name: "B", score: null }
]));
console.log(generateLeaderboard([
    { name: "D", score: 80 },
    { name: "B", score: undefined }
]));
console.log();
console.log(generateLeaderboard(null));
console.log(generateLeaderboard(undefined));
console.log(generateLeaderboard([null]));                               //
console.log(generateLeaderboard(['student']));