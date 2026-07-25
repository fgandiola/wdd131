// copyright year and last modified date

const currentyear = document.querySelector("#current-year")
const lastModified = document.querySelector("#lastModified")
const today = new Date()
currentyear.innerHTML = today.getFullYear()
document.getElementById("lastModified").innerHTML = document.lastModified;

// weather values

function calculateWindChill(temperatureCelsius, windSpeed) {
    return 13.12 + 0.6215 * temperatureCelsius - 11.37 * windSpeed ** 0.16 + 0.3965 * temperatureCelsius * windSpeed ** 0.16;
}

let weatherTemperature = 10;
let weatherCondition = 'Partly Cloudy';
let weatherWind = 5;
let weatherWindChill = "";

// display weather values

const currentTemperature = document.querySelector("#current-temperature")
const currentCondition = document.querySelector("#current-condition")
const currentWindSpeed = document.querySelector("#current-wind")
const currentWindChill = document.querySelector("#current-windchill")

currentTemperature.innerHTML = weatherTemperature
currentCondition.innerHTML = weatherCondition
currentWindSpeed.innerHTML = weatherWind

if (weatherTemperature <= 10) {
    if (weatherWind >= 4.8) {
        weatherWindChill = calculateWindChill(weatherTemperature, weatherWind);
        weatherWindChill = Math.round(weatherWindChill * 10) / 10;
        currentWindChill.innerHTML = weatherWindChill + ' ℃'
    }
    else {
        currentWindChill.innerHTML = 'N/A'
}
}