function matchWinner(teamAGoals, teamBGoals) {
    if(teamAGoals === teamBGoals) {
        return 'Draw';
    } else if(teamAGoals > teamBGoals) {
        return 'Team A Won';
    } else {
        return 'Team B Won';
    }
}

const result = matchWinner(2, 1);

console.log(result);
console.log(matchWinner(1, 3));
console.log(matchWinner(2, 2));
console.log();


console.log(typeof null);
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof undefined);
console.log(Number.isNaN(NaN));