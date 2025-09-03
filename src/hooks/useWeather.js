// Import React hooks
import { useEffect, useState } from "react";

// Custom hook for fetching and managing weather data
export const useWeather = () => {
  // State for weather data
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  // State for loading status
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  // State for error handling
  const [error, setError] = useState(null);

  // Function to fetch weather data from API
  const fetchWeatherData = async (latitude, longitude) => {
    try {
      // Set loading state
      setLoading({
        ...loading,
        state: true,
        message: "Fetching weather data",
      });

      // Fetch data from OpenWeatherMap API
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_key
        }&units=metric`
      );
      const data = await response.json();

      // Update weather data state
      const updateWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      };
      setWeatherData(updateWeatherData);
      // Check for response errors
      if (!response.ok) {
        const errorMessage = `Featching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }
    } catch (error) {
      setError(error);
    } finally {
      // Reset loading state
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  // Effect to get user's location and fetch weather data
  useEffect(() => {
    setLoading({
      state: true,
      message: "Finding location...",
    });

    navigator.geolocation.getCurrentPosition((position) => {
      fetchWeatherData(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  // Return weather data, error, and loading state
  return {
    weatherData,
    error,
    loading,
  };
};
