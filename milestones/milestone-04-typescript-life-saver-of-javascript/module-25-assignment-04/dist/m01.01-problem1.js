"use strict";
// Problem: https://docs.google.com/document/d/1qkibLZQ1M9JwkXeXkm-Fg8lUZjs8B0oUJ6o-DvGmIN4/edit?tab=t.0
Object.defineProperty(exports, "__esModule", { value: true });
const getBatteryStatus = (percentage) => {
    if (percentage <= 20) {
        return 'Low';
    }
    else if (percentage <= 50) {
        return 'Medium';
    }
    else if (percentage <= 90) {
        return 'High';
    }
    else {
        return 'Full';
    }
};
console.log(getBatteryStatus(10)); // "Low"
console.log(getBatteryStatus(35)); // "Medium"
console.log(getBatteryStatus(75)); // "High"
console.log(getBatteryStatus(100)); // "Full"
//# sourceMappingURL=m01.01-problem1.js.map