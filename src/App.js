import { Route, Routes } from "react-router-dom";
import WelcomePage from "./roadMap/WelcomePage";
import WeatherInfo from "./WeatherInfo";

function App() {
  return (
    <Routes>
      <Route path="*" element={<WelcomePage />} />
      <Route path="/weather_info" element={<WeatherInfo />} />
    </Routes>
  );
}

export default App;
