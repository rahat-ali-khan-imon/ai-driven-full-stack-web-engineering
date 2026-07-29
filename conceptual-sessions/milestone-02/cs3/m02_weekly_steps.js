function weeklyStepsSummary(stepsArray) {
    let steps = 0;
    for(const item of stepsArray) {
        steps += item;
    }
    return steps;
}


const arr = [8000,7500,9200,6000,10000,5500,4000];
const result = weeklyStepsSummary(arr);

console.log(result);