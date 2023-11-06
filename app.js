// Script for weather app
const apiKey = "121bc5bf28828e13754dfcb1bb3e5a53";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherCondition = document.querySelector(".weather-condition");

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}q=${city}&appid=${apiKey}`);
    const data = await response.json();

    if (data.cod === 200) {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    } else {
        // Handle cases where the city was not found or an error occurred
        document.querySelector(".city").innerHTML = "City not found";
        document.querySelector(".temp").innerHTML = "";
        document.querySelector(".humidity").innerHTML = "";
        document.querySelector(".wind").innerHTML = "";
    }

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/cloudy.png";
        weatherCondition.innerHTML = "Cloudy";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clearsky.png";
        weatherCondition.innerHTML = "Clear Sky";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/heavy-rain.png";
        weatherCondition.innerHTML = "Rainy";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
        weatherCondition.innerHTML = "Drizzle";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/foggy.png";
        weatherCondition.innerHTML = "Foggy";
    }
    else if (data.weather[0].main == "Smoke") {
        weatherIcon.src = "images/smoke.png";
        weatherCondition.innerHTML = "Smoke";
    }

    console.log(data);
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});



// Script for converting celsius to farhenheit

// Accessing DOM elements using document.getElementById
let celsiusInput = document.getElementById('celsiusBox');
let display = document.getElementById('displayBox'); // Assuming this is the output display

// Function to convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit() {
    // Get the value from the input box for Celsius and convert it into a number
    let celsiusValue = parseFloat(celsiusInput.value);
    if (isNaN(celsiusValue)) {
        alert("Please enter numeric values only.");
        return;
    } else {
        // Calculate Fahrenheit equivalent using formula: (Celsius * 9/5) + 32
        let fahrenheitEquivalent = (celsiusValue * 9/5) + 32;
        // Display the result in the output box
        display.value = Math.round(fahrenheitEquivalent) + "°F";
        // Clear the input box for Celsius after displaying the result
        celsiusInput.value = "";
        //Clear the display after displaying the output
        setTimeout(function() {
            displayOutput.value = '';
        },3000);
    }
}
// Function to convert Fahrenheit to Celsius 

let fahrenheitInput = document.getElementById('fahrenheitBox');
let displayOutput = document.getElementById('displayBox'); // Assuming this is the output display

function convertFahrenheitToCelsius(){
    // Get the value from the input box for Fahrenheit 
    let fahrenheitValue =  parseFloat(fahrenheitInput.value);
     // Calculate Fahrenheit equivalent using formula: (fahrenheit - 32) * 5/9
    let celsiusEquivalent = (fahrenheitValue - 32) * 5/9;
    // Display the result in the output box
    displayOutput.value = celsiusEquivalent + "°C";
    // Clear the input box for Fahrenheit after displaying the result
    fahrenheitInput.value = "";
    //Clear the display after displaying the output
    setTimeout(function() {
        displayOutput.value = '';
    },3000);
}