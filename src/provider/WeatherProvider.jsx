import { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({
    location: "Kathmandu",
    temperature: 25,
    condition: "Clear Sky",
    humidity: 60,
    windSpeed: 5,
    visibility: 10,
  });

  const updateWeather = (data) => {
    setWeatherData(data);
  };

  return (
    <WeatherContext.Provider value={{ weatherData, updateWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
