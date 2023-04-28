"use strict";
const weatherData = [
    { city: 'Resita', zipcode: '320018', temperature: 20, humidity: 50, windSpeed: 10 },
    { city: 'Timisoara', zipcode: '300013', temperature: 19, humidity: 40, windSpeed: 5 },
    { city: 'Oradea', zipcode: '410000', temperature: 18, humidity: 60, windSpeed: 16 },
    { city: 'Bucuresti', zipcode: '010001', temperature: 17, humidity: 60, windSpeed: 25 },
    { city: 'Cluj', zipcode: '400001', temperature: 18, humidity: 70, windSpeed: 5 },
    { city: 'Arad', zipcode: '310010', temperature: 18, humidity: 50, windSpeed: 10 },
    { city: 'Sibiu', zipcode: '500035', temperature: 18, humidity: 40, windSpeed: 19 },
    { city: 'Brasov', zipcode: '500001', temperature: 20, humidity: 60, windSpeed: 8 },
    { city: 'Iasi', zipcode: '700028', temperature: 23, humidity: 60, windSpeed: 7 },
    { city: 'Craiova', zipcode: '200051', temperature: 20, humidity: 60, windSpeed: 10 },
];
function getWeatherData(cityOrZipcode) {
    return weatherData.find((data) => data.city === cityOrZipcode || data.zipcode === cityOrZipcode);
}
function displayWeatherData(weatherData) {
    const windSpeedEl = document.getElementById('wind-speed');
    const temperatureEl = document.getElementById('temperature');
    const humidityEl = document.getElementById('humidity');
    windSpeedEl.textContent = `${weatherData.windSpeed} m/s`;
    temperatureEl.textContent = `${weatherData.temperature}°C`;
    humidityEl.textContent = `${weatherData.humidity}%`;
}
const formEl = document.getElementById('weather-form');
formEl === null || formEl === void 0 ? void 0 : formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputEl = document.getElementById('location-input');
    const cityOrZipcode = inputEl.value.trim();
    const weatherData = getWeatherData(cityOrZipcode);
    if (weatherData) {
        displayWeatherData(weatherData);
    }
    else {
        alert('Weather data not found for this location!');
    }
});
