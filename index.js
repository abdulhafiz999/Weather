// Define your variables
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherInfo = document.getElementById("weatherInfo");
const errorInfo = document.getElementById("errorInfo");

const API_KEY = "84cf007586292a4a191e20860845941c";

// Event listener on the search button
searchBtn.addEventListener("click", () => {
  const city = cityInput.value;

  getWeather(city);
});

// Function to fetch weather data
// Receives the city from the input
function getWeather(city) {
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  fetch(weatherURL).then((response) => {
    return response.json();
  })
  .then((data) =>{
    displayWeather(data);
  })
}

function displayWeather(data){
    const name = data.name;
    const rawTemp = data.main.temp;
   const actualTemp = Math.floor(((rawTemp-32)*5)/9); // converting raw temperature to degrees celcius and using it using the math floor function
    const description = data.weather[0].description; // description of weather condition from the weather array inside the data
    const icon = data.weather[0].icon; // icon ID from weather array inside data

    // Display data items in HTML elements in weather info div
    weatherInfo.innerHTML = `
    <h3>City Name: ${name}</h3>
    <p>Temperature: ${actualTemp}°C</p>
    <p>Description: ${description}</p>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" />
    `
  }