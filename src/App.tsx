import axios from "axios";
import { useEffect, useState } from "react";

import Input from "./components/Input";
import Weather from "./components/Weather";

import { IWeather } from "./types/weather";

const API_KEY = "181489c58e50b559969e222c5df19947";

function App() {
  const [cityName, setCityName] = useState<string>("");
  const [weatherData, setWeatherData] = useState<IWeather>();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cityName.length > 3) {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
          )
          .then(({ data }) => {
            setWeatherData(data);
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }, 500); // Kullanıcı girişine 500 milisaniye bekleme süresi
    return () => clearTimeout(timer); // Temizleme fonksiyonu
  }, [cityName]);

  return (
    <div>
      <h1 className="weather">Weather</h1>
      <Input cityName={cityName} setCityName={setCityName} />
      {weatherData && <Weather weather={weatherData} />}
    </div>
  );
}

export default App;
