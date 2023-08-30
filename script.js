const apiKey = '0013f4a1ea91b42698ffa996b13f3dbf';

// Elements
const highTempElement = document.getElementById('highTemp');
const lowTempElement = document.getElementById('lowTemp');
const forecastElement = document.getElementById('forecast');
const humidityElement = document.getElementById('humidity');
const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');

function updateWeatherInfo(data) {
    const highTemp = data.main.temp_max;
    const lowTemp = data.main.temp_min;
    const forecast = data.weather[0].description;
    const humidity = data.main.humidity;

    highTempElement.textContent = highTemp;
    lowTempElement.textContent = lowTemp;
    forecastElement.textContent = forecast;
    humidityElement.textContent = humidity;
}

function fetchWeatherData(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the API response data
            updateWeatherInfo(data);
        })
        .catch(error => console.error('Error fetching weather data:', error));
}


searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetchWeatherData(city);
    } else {
        alert('Please enter a city name.');
    }
});
