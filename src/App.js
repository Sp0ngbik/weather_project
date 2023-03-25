import axios from "axios";
import { useState } from "react";

function App() {
  const [nameOfCountry, setNameOfCountry] = useState();
  const [currentTemp, setCurrentTemp] = useState();
  const getCountyCords = () => {
    const feelsLikeKelvin = 273.15;
    const apiKey = "5eac858cbc638bf9cf41fef1f454746f";
    const apiRequest = `http://api.openweathermap.org/geo/1.0/direct?q=${nameOfCountry}&appid=${apiKey}`;
    axios
      .get(apiRequest)
      .then((dataCountry) => {
        console.log(dataCountry);
        return axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${dataCountry.data[0].lat}&lon=${dataCountry.data[0].lon}&appid=${apiKey}`
        );
      })
      .then((ar) => {
        setCurrentTemp(parseInt(ar.data.main.temp_max - feelsLikeKelvin));
      })
      .catch(() => {
        alert("Sorry, but your country was not found");
      });
  };
  return (
    <div>
      <div>hello</div>
      <input
        placeholder="chose your country"
        onChange={(e) => {
          setNameOfCountry(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(getCountyCords());
        }}
      >
        sad
      </button>
    </div>
  );
}

export default App;
