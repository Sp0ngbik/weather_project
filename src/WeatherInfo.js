import axios from "axios";
import { useState } from "react";

const WeatherInfo = () => {
  const [nameOfCountry, setNameOfCountry] = useState();
  const getWeather = () => {
    axios
      .get("http://api.openweathermap.org/geo/1.0/direct?q=London")
      .then((dataCountry) => {
        setNameOfCountry(dataCountry);
      });
  };
  return <div>{nameOfCountry}</div>;
};

export default WeatherInfo;
