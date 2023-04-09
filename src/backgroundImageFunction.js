import ash from "./image/ash.jpg";
import clouds from "./image/clouds.jpg";
import clear from "./image/clear.jpg";
import dust from "./image/dust.jpg";
import fog from "./image/fog.jpg";
import haze from "./image/haze.jpg";
import mist from "./image/mist.jpg";
import rain from "./image/rain.jpg";
import sand from "./image/sand.jpg";
import smoke from "./image/smoke.jpg";
import snow from "./image/snow.jpg";
import squall from "./image/squall.jpg";
import thunder from "./image/thunder.jpg";
import tornado from "./image/tornado.jpg";

export const backroundWeatherFunc = (currentWeather) => {
  switch (currentWeather) {
    case "Clear":
      return clear;
    case "Clouds":
      return clouds;
    case "Rain":
      return rain;
    case "Thunderstorm":
      return thunder;
    case "Snow":
      return snow;
    case "Mist":
      return mist;
    case "Smoke":
      return smoke;
    case "Haze":
      return haze;
    case "Dust":
      return dust;
    case "Fog":
      return fog;
    case "Sand":
      return sand;
    case "Ash":
      return ash;
    case "Squall":
      return squall;
    case "Tornado":
      return tornado;
    default:
      break;
  }
};
