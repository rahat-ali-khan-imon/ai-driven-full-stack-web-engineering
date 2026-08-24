"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getWeatherAdvice = (weather) => {
    if (weather === "sunny") {
        return "Wear sunscreen";
    }
    else if (weather === "rainy") {
        return "Carry an umbrella";
    }
    else {
        return "Bring a light jacket";
    }
};
console.log(getWeatherAdvice("sunny")); // "Wear sunscreen"
console.log(getWeatherAdvice("rainy")); // "Carry an umbrella"
console.log(getWeatherAdvice("cloudy")); // "Bring a light jacket"
// TypeScript Error:
// console.log(getWeatherAdvice("snowy"));
//# sourceMappingURL=m04.01-problem5.js.map