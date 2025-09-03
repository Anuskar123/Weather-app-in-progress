import { useContext } from "react";
import { WeatherContext } from "../../context";

const WeatherCondition = () => {
  const { weatherData } = useContext(WeatherContext);
  const { humidity, windSpeed, visibility } = weatherData || {};

  return (
    <div className='pt-12 pb-6'>
      <p className='text-sm lg:text-lg font-bold uppercase mb-8'>
        Today's Forecast
      </p>
      <ul className='space-y-6 lg:space-y-6'>
        <li className='text-sm lg:text-lg flex items-center justify-between space-x-4'>
          <div className='inline-flex space-x-4'>
            <p>Humidity</p>
          </div>
          <p>{humidity || "60"}%</p>
        </li>
        <li className='text-sm lg:text-lg flex items-center justify-between space-x-4'>
          <div className='inline-flex space-x-4'>
            <p>Wind Speed</p>
          </div>
          <p>{windSpeed || "5"} km/h</p>
        </li>
        <li className='text-sm lg:text-lg flex items-center justify-between space-x-4'>
          <div className='inline-flex space-x-4'>
            <p>Visibility</p>
          </div>
          <p>{visibility || "10"} km</p>
        </li>
      </ul>
    </div>
  );
};

export default WeatherCondition;
