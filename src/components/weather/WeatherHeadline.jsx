// Import useContext hook
import { useContext } from "react";
// Import WeatherContext
import { WeatherContext } from "../../context";
// Import date utility function
import { getFormattedDate } from "../../utils/date-util";
// Import various weather icons
import pin from "../../assets/pin.svg";
import CloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import SunnyIcon from "../../assets/icons/sunny.svg";
import RainIcon from "../../assets/rainy.svg";
import ThunderIcon from "../../assets/thunder.svg";

// WeatherHeadline component to display main weather info
const WeatherHeadline = () => {
  // Get weather data from context
  const { weatherData } = useContext(WeatherContext);
  const { location, climate, temperature, time } = weatherData;

  // Function to get appropriate weather icon based on climate
  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        return RainIcon;
      case "Clouds":
        return CloudIcon;
      case "Clear":
        return SunnyIcon;
      case "Snow":
        return SnowIcon;
      case "Thunder":
        return ThunderIcon;
      case "Fog":
        return HazeIcon;
      case "Haze":
        return HazeIcon;
      case "Mist":
        return HazeIcon;

      default:
        return SunnyIcon;
    }
  }

  return (
    // Main container
    <div>
      // Top section with icon and temperature/location
      <div className='max-md:flex items-center justify-between md:-mt-10'>
        // Weather icon
        <img src={getWeatherIcon(climate)} alt='cloud' />
        // Temperature and location
        <div className='max-md:flex items-center max-md:space-x-4'>
          // Temperature display
          <h1 className='text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4'>
            {Math.round(temperature)}
          </h1>
          // Location with pin icon
          <div className='flex items-center space-x-4 md:mb-4'>
            <img src={pin} />
            <h2 className='text-2xl lg:text-[50px]'>{location}</h2>
          </div>
        </div>
      </div>
      // Date and time display
      <p className='text-sm lg:text-lg'>
        {getFormattedDate(time, "time", false)} -{" "}
        {getFormattedDate(time, "date", false)}
      </p>
    </div>
  );
};

// Export WeatherHeadline component
export default WeatherHeadline;
