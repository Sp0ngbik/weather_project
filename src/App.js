import axios from "axios";
import { useState } from "react";
import style from "./style.module.scss";
function App() {
  const [nameOfCountry, setNameOfCountry] = useState();
  const [fullCountryInfo, setFullCountryInfo] = useState();
  const [currentTemp, setCurrentTemp] = useState();
  const [weatherImage, setWeatherImage] = useState();
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
      .then((ar) => {
        setWeatherImage(ar.data.weather[0].icon);
        setFullCountryInfo(ar);
        setCurrentTemp(parseInt(ar.data.main.temp_max - feelsLikeKelvin));
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
            placeholder="chose your country"
            onChange={(e) => {
              setNameOfCountry(e.target.value);
            }}
          />
          <button
            onClick={() => {
              getCountyCords();
            }}
          >
            Получить погоду
          </button>
        </div>
        <div>
          {weatherImage && <span>{currentTemp && currentTemp} °C</span>}
          {weatherImage && (
            <img
              src={`https://openweathermap.org/img/wn/${weatherImage}@2x.png`}
              alt="Sorry but your country not found"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
