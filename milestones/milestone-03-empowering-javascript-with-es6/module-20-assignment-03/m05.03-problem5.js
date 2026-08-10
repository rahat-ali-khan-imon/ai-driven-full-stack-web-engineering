function generateLeaderboard(students) {
    // if (!Array.isArray = students) {
    //     return "Invalid";
    // }

    // if (students.length == []) {
    //     return "Invalid";
    // }

    const qualified = students.filter(({score}) => {
        return score >= 70;
    });

    const names = qualified.map(({ name }) => {
        return name.toUpperCase();                                      //
    });

    console.log(names);

    // return names.slice(0, 2);
}

console.log(generateLeaderboard([
    {name:"Rafi", score:90},
    {name:"Sadia", score:65},
    {name:"Karim", score:85}, 
    {name:"Nafis", score:75}
]));
console.log(generateLeaderboard([
    {name:"A", score:70},
    {name:"B", score:71}
]));
// console.log(generateLeaderboard([]));
// console.log(generateLeaderboard("students"));
// console.log(generateLeaderboard([{name:"Rafi"}]));
// console.log(generateLeaderboard([{name:"Rafi",score:"90"}]));