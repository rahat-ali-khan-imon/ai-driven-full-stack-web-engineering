function weeklyStepsSummary(stepsArray) {
    if(!Array.isArray(stepsArray)) {
        return 'Invalid';
    }
    
    let steps = 0;
    for(const item of stepsArray) {
        console.log(typeof item, item);                                     //
        steps += item;
    }

    let goalReached = false;
    if(steps >= 50000) {
        goalReached = true;
    }
    
    return {
        totalSteps: steps,
        goalReached
    }
}


const arr = [8000,7500,9200,6000,10000,5500,4000];
const result = weeklyStepsSummary(arr);

console.log(result);
console.log(weeklyStepsSummary('hello, problem solving'));
console.log(weeklyStepsSummary([8000, 'hello', 7500, 9200, 6000, 5500, 4000]));