// footer

const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = today.getFullYear()
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`

// weather

const temperature = document.querySelector("#temperature");
const conditions = document.querySelector("#conditions");
const wind = document.querySelector("#wind");
const windChill = document.querySelector("#wind-chill");

let tempData = 10
let conData = "Sunny"
let winData = 5

temperature.innerHTML = `<span class="highlight">Temperature: </span>${tempData}°C`
conditions.innerHTML = `<span class="highlight">Conditions: </span>${conData}`
wind.innerHTML = `<span class="highlight">Wind: </span>${winData} km/h`

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10) {
        if (windSpeed > 4.8) {
            let calculation = 13.12 + 0.6215 * {temperature} - 11.37 * {windSpeed} ** 0.16 + 0.3965 * {temperature} * {windSpeed} ** 0.16
            calculation = calculation.toFixed(1);
            let result = `${calculation}°C`;
            return result;
        } else {
            let result = "N/A";
            return result;
        }; 
    } else {
        let result = "N/A";
        return result;
    };
};

let windChillData = calculateWindChill(tempData, winData);
windChill.innerHTML = `<span class="highlight">Wind Chill: </span>${windChillData}`