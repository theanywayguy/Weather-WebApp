const apiKey = "c6ec6baa91b90fafdacb67ab74bc2738";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
const errorElement = document.querySelector(".error");
const weatherElement = document.querySelector(".weather");

const weatherImages = {
  Clouds: "/assets/clouds.png",
  Clear: "/assets/clear.png",
  Rain: "/assets/rain.png",
  Drizzle: "/assets/drizzle.png",
  Mist: "/assets/mist.png",
};

async function fetchWeatherData(city) {
  try {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    if (!response.ok) throw new Error("City not found");
    return await response.json();
  } catch (error) {
    showError(error.message);
  }
}

function updateWeatherUI({ name, main, wind, weather }) {
  const { temp, humidity } = main;
  const { speed } = wind;
  const { main: condition } = weather[0];

  document.querySelector(".city").innerHTML = name;
  document.querySelector(".temp").innerHTML = `${Math.round(temp)}°C`;
  document.querySelector(".humidity").innerHTML = `${humidity}%`;
  document.querySelector(".wind").innerHTML = `${Math.round(speed)} KM/H`;

  // Set weather icon based on condition
  weathericon.src = weatherImages[condition] || "";

  weatherElement.style.display = "block";
  errorElement.style.display = "none";
}

function showError(message) {
  document.querySelector(".error").innerHTML = message;
  weatherElement.style.display = "none";
  errorElement.style.display = "block";
}

async function performSearch() {
  const city = searchbox.value.trim();
  if (city) {
    const data = await fetchWeatherData(city);
    if (data) updateWeatherUI(data);
  } else {
    showError("Please enter a city name.");
  }
}

searchbtn.addEventListener("click", performSearch);

searchbox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    performSearch();
  }
});
