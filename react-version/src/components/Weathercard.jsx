/* eslint-disable react/prop-types */
const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const weatherImages = {
    Clouds: "src/assets/clouds.png",
    Clear: "src/assets/clear.png",
    Rain: "src/assets/rain.png",
    Drizzle: "src/assets/drizzle.png",
    Mist: "src/assets/mist.png",
  };
  const { name, main, wind, weather } = weatherData;
  const { temp, humidity } = main;
  const { speed } = wind;
  const condition = weather[0].main;
  return (
    <div className="w-11/12 max-w-md bg-gradient-to-br from-[#00feba] to-[#5b548a] text-white rounded-3xl p-6 text-center">
      <h2 className="text-4xl font-medium">{name}</h2>
      <img
        className="w-36 mx-auto mt-4"
        src={weatherImages[condition] || ""}
        alt={condition}
      />
      <h1 className="text-5xl font-semibold">{Math.round(temp)}°C</h1>

      <div className="flex justify-between items-center mt-4 px-4">
        <div className="flex items-center">
          <img
            src="src/assets/humidity.png"
            alt="Humidity"
            className="w-10 mr-4"
          />
          <div>
            <p className="text-lg">Humidity</p>
            <p className="text-2xl">{humidity}%</p>
          </div>
        </div>

        <div className="flex items-center">
          <img src="src/assets/wind.png" alt="Wind" className="w-10 mr-4" />
          <div>
            <p className="text-lg">Wind</p>
            <p className="text-2xl">{Math.round(speed)} KM/H</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
