// Import weather condition icons
import temp_max from "../../assets/icons/temp-max.svg";
import temp_min from "../../assets/icons/temp-min.svg";
import humadityImg from "../../assets/icons/humidity.svg";
import cloud from "../../assets/icons/cloud.svg";
import windImg from "../../assets/icons/wind.svg";
// Import useContext hook
import { useContext } from "react";
// Import WeatherContext
import { WeatherContext } from "../../context";

// WeatherCondition component to display detailed weather conditions
const WeatherCondition = () => {
  // Get weather data from context
  const { weatherData } = useContext(WeatherContext);
  const {
    climate,
    maxTemperature,
    minTemperature,
    humidity,
    cloudPercentage,
    wind,
  } = weatherData;

  return (
    <div>
      <p className='text-sm lg:text-lg font-bold uppercase mb-8'>
        {climate ? `Weather: ${climate}` : "Loading weather data..."}
      </p>
      <ul className='space-y-6 lg:space-y-6'>
        <li className='text-sm lg:text-lg flex items-center justify-between space-x-4'>
          <span>Temp max</span>
          <div className='inline-flex space-x-4'>
            <p>{maxTemperature !== null ? `${maxTemperature}°` : "--°"}</p>
            <img src={temp_max} alt='temp-max' />
          </div>
        </li>
        <li className='text-sm lg:text-lg flex items-center justify-between space-x-4'>
          <span>Temp min</span>
          <div className='inline-flex space-x-4'>
            <p>{minTemperature !== null ? `${minTemperature}°` : "--°"}</p>
            <img src={temp_min} alt='temp-min' />
          </div>
        </li>
        <li className='text-sm lg:text-lg flex items-center justify-between space-x-4'>
          <span>Humadity</span>
          <div className='inline-flex space-x-4'>
            <p>{humidity !== null ? `${humidity}%` : "--%"}</p>
            <img src={humadityImg} alt='humidity' />
          </div>
        </li>
        <li className='text-sm lg:text-lg flex items-center justify-between space-x-4'>
          <span>Cloudy</span>
          <div className='inline-flex space-x-4'>
            <p>{cloudPercentage !== null ? `${cloudPercentage}%` : "--%"}</p>
            <img src={cloud} alt='cloudy' />
          </div>
        </li>
        <li className='text-sm lg:text-lg flex items-center justify-between space-x-4'>
          <span>Wind</span>
          <div className='inline-flex space-x-4'>
            <p>{wind !== null ? `${wind} km/h` : "-- km/h"}</p>
            <img src={windImg} alt='wind' />
          </div>
        </li>
      </ul>
    </div>
  );
};

// Export WeatherCondition component
export default WeatherCondition;
