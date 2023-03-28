import axios from "axios";
import { useState } from "react";
import style from "./style.module.scss";
import searchImage from "./image/4708645.png";
function App() {
  const [nameOfCountry, setNameOfCountry] = useState();
  const [weatherData, setWeatherData] = useState();
  const [currentTemp, setCurrentTemp] = useState();
  const [openInfoWeather, setopenInfoWeather] = useState();
  const getCountyCords = () => {
    const feelsLikeKelvin = 273.15;
    const apiKey = "5eac858cbc638bf9cf41fef1f454746f";
    const apiRequest = `http://api.openweathermap.org/geo/1.0/direct?q=${nameOfCountry}&appid=${apiKey}`;
    axios
      .get(apiRequest)
      .then((dataCountry) => {
        return axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${dataCountry.data[0].lat}&lon=${dataCountry.data[0].lon}&appid=${apiKey}`
        );
      })
      .then((weatherData) => {
        setWeatherData(weatherData);
        setCurrentTemp(
          parseInt(weatherData.data.main.temp_max - feelsLikeKelvin)
        );
        setopenInfoWeather(true);
      })
      .catch(() => {
        alert("Sorry, but your country was not found");
      });
  };
  return (
    <div className={style.mainWeatherBlock}>
      <div className={style.weatherContent}>
        <div className={style.inputBlock}>
          <input
            placeholder={"Chose your country"}
            onChange={(e) => {
              setNameOfCountry(e.target.value);
            }}
          />

          <button
            onClick={() => {
              getCountyCords();
            }}
          >
            <img src={searchImage} alt="search not found" />
          </button>
        </div>
        <div className={style.weatherDataStyle}>
          {weatherData && (
            <div
              className={`${style.temperatureStyle} ${
                openInfoWeather ?? style.openInfo
              }`}
            >
              <div>
                <h3>Country: {weatherData.data.sys.country}</h3>
                <span>{currentTemp && currentTemp} °C</span>
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}@2x.png`}
                  alt="Sorry but your country not found"
                />
                {/* <span>{weatherData.data.weather[0].main}</span>
                <span>{weatherData.data.weather[0].description}</span> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
