// Replace with your API key and base URL
const apiKey = "YOUR_API_KEY";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

// Function to fetch weather data
async function getWeather(city) {
    const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    // Update the weather information on the page
    document.getElementById("city-name").textContent = data.name;
    document.getElementById("date").textContent = new Date().toLocaleDateString();
    document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById("description").textContent = `Description: ${data.weather[0].description}`;
    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById("wind-speed").textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

// Event listener for the search button
document.getElementById("search-button").addEventListener("click", () => {
    const city = document.getElementById("city-input").value;
    getWeather(city);
});
