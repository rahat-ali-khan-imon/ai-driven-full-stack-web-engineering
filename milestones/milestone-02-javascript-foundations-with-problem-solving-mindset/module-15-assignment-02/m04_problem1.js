function matchWinner(teamAGoals, teamBGoals) {
    if(typeof teamAGoals !== 'number' || typeof teamBGoals !== 'number' || 
        Number.isNaN(teamAGoals) || Number.isNaN(teamBGoals)) {
        return 'Invalid';
    }

    if(teamAGoals > teamBGoals) {
        return 'Team A Won';
    } else if(teamAGoals < teamBGoals) {
        return 'Team B Won';
    } else {
        return 'Draw';
    }
}

const result = matchWinner(2, 1);

console.log(result);
console.log(matchWinner(1, 3));
console.log(matchWinner(2, 2));
console.log(matchWinner('3', 2));
console.log(matchWinner(3, true));
console.log(matchWinner(0, 0));
console.log(matchWinner(undefined, 1));
console.log(matchWinner(NaN, 1));