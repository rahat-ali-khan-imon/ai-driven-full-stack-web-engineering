// Problems: https://docs.google.com/document/d/1bu-Zar1dX3y_W8g9PFlQ4uOyv2m2gkS_TGBf8hocDzY/edit?tab=t.0

const getSignalStatus = (percentage: number): string => {
    if(percentage <= 25) {
        return 'Poor';
    } else if(percentage <= 55) {
        return 'Fair';
    } else if(percentage <= 85) {
        return 'Good';
    } else {
        return 'Excellent';
    }
};

console.log(getSignalStatus(15)); // "Poor"
console.log(getSignalStatus(40)); // "Fair"
console.log(getSignalStatus(70)); // "Good"
console.log(getSignalStatus(95)); // "Excellent"