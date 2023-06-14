import React from "react";

interface IProps {
  cityName: string;
  setCityName: (cityName: string) => void;
}
const Input: React.FC<IProps> = ({ cityName, setCityName }) => {
  return (
    <div className="weather">
      <input
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        className="weather-input"
        placeholder="entry city"
      />
    </div>
  );
};

export default Input;
