// Import WeatherContext
import { WeatherContext } from "../context";
// Import useWeather hook
import { useWeather } from "../hooks/useWeather";

// WeatherProvider component to provide weather context to children
const WeatherProvider = ({ children }) => {
  // Get weather data from custom hook
  const { weatherData, error, loading } = useWeather();
  return (
    // Provide weather data to child components
    <WeatherContext.Provider value={{ weatherData, error, loading }}>
      {children}
    </WeatherContext.Provider>
  );
};

// Export WeatherProvider
export default WeatherProvider;
