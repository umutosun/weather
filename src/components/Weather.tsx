import React from "react";

import "../App.css";

interface IProps {
  weather: {
    name: string;
    weather: {
      description: string;
      icon: string;
    }[];
    main: {
      temp: number;
    };
    dt: number;
  };
}

const Weather: React.FC<IProps> = ({ weather }) => {
  return (
    <div className="weather-data">
      <img
        src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
        alt={weather.weather[0].icon}
      />
      <h3>{weather.name}</h3>
      <h4>{weather.weather.map((data) => data.description).join(", ")}</h4>

      <h4> {weather.main.temp}°C</h4>
      <p>{new Date(weather.dt * 1000).toLocaleDateString()}</p>
    </div>
  );
};
export default Weather;
