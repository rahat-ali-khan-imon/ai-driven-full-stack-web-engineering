type Weather = "sunny" | "rainy" | "cloudy";

const getWeatherAdvice = (weather: Weather): string => {
    if (weather === "sunny") {
        return "Wear sunscreen";
    } else if (weather === "rainy") {
        return "Carry an umbrella";
    } else {
        return "Bring a light jacket";
    }
};

console.log(getWeatherAdvice("sunny"));  // "Wear sunscreen"
console.log(getWeatherAdvice("rainy"));  // "Carry an umbrella"
console.log(getWeatherAdvice("cloudy")); // "Bring a light jacket"

// TypeScript Error:
// console.log(getWeatherAdvice("snowy"));