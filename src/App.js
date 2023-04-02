import axios from "axios";
import { useState } from "react";
import style from "./style.module.scss";
import searchImage from "./image/4708645.png";
import humiditiImage from "./image/2120124.png";
import windSpeed from "./image/1233333.png";
function App() {
  const [nameOfCountry, setNameOfCountry] = useState();
  const [weatherData, setWeatherData] = useState();
  const [currentTemp, setCurrentTemp] = useState();

  const apiKey = "5eac858cbc638bf9cf41fef1f454746f";
  const getCountyCords = () => {
    const feelsLikeKelvin = 273.15;
    const apiRequest = `http://api.openweathermap.org/geo/1.0/direct?q=${nameOfCountry}&limit=5&appid=${apiKey}`;
    axios
      .get(apiRequest)
      .then((dataCountry) => {
        return axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${dataCountry.data[0].lat}&limit=5&lon=${dataCountry.data[0].lon}&appid=${apiKey}`
        );
      })
      .then((weatherData) => {
        setWeatherData(weatherData);
        setCurrentTemp(
          parseInt(weatherData.data.main.temp_max - feelsLikeKelvin)
        );
      })
      .catch(() => {
        alert(`Sorry, but your country ${nameOfCountry} was not found`);
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
            <div className={style.temperatureStyle}>
              <div className={style.mainInfo}>
                <h3>Country: {weatherData.data.sys.country}</h3>
                <div>
                  <span>{currentTemp && currentTemp} °C</span>
                  <img
                    src={`https://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}@2x.png`}
                    alt="Sorry but your country not found"
                  />
                </div>
                <span>{weatherData.data.weather[0].main}</span>
                <div className={style.humiditiStyle}>
                  <div>
                    <span>{weatherData.data.main.humidity}%</span>
                    <img src={humiditiImage} alt="humidity not found" />
                  </div>
                  <div>
                    <span>{weatherData.data.wind.speed}Km/h</span>
                    <img src={windSpeed} alt="wind speed not found" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
