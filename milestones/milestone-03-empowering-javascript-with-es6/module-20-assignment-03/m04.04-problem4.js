const bonusScore = (scores) => {
    if(!Array.isArray(scores) || scores.length === 0) {                         //
        return 'Invalid';
    }

    const updateScores = scores.map((score) => score + 10);

    return updateScores.reduce((total, score) => total + score, 0);
};

console.log(bonusScore([80, 65, 90, 75]));
console.log(bonusScore([100]));
console.log(bonusScore([0, 10]));
console.log(bonusScore([]));
console.log(bonusScore("scores"));
console.log(bonusScore([80, "90", 70]));