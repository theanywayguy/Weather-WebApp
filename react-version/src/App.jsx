import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const API_KEY = "c6ec6baa91b90fafdacb67ab74bc2738";
const apiWeatherUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(`${apiWeatherUrl}${city}&appid=${API_KEY}`);
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#222] font-sans">
      <div className="w-11/12 max-w-md">
        <SearchBar onSearch={fetchWeather} />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {weatherData && <WeatherCard weatherData={weatherData} />}
      </div>
    </div>
  );
}

export default App;
