// Import React hooks
import { useEffect, useState } from "react";

// Custom hook for fetching and managing weather data
export const useWeather = () => {
  // State for weather data
  const [weatherData, setWeatherData] = useState({
    location: "Loading...",
    climate: "Loading...",
    temperature: null,
    maxTemperature: null,
    minTemperature: null,
    humidity: null,
    cloudPercentage: null,
    wind: null,
    time: null,
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
      console.log('Fetching weather data for:', latitude, longitude);
      // Set loading state
      setLoading({
        ...loading,
        state: true,
        message: "Fetching weather data",
      });

      // Fetch data from OpenWeatherMap API
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
        import.meta.env.VITE_WEATHER_API_key
      }&units=metric`;
      console.log('API URL:', apiUrl);

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();

      console.log('Weather API Response:', data); // Debug log

      // Check if we have valid weather data
      if (!data || !data.main) {
        throw new Error('Invalid weather data received from API');
      }

      // Update weather data state
      const updateWeatherData = {
        ...weatherData,
        location: data?.name || "Unknown Location",
        climate: data?.weather?.[0]?.main || "Unknown",
        temperature: data?.main?.temp || null,
        maxTemperature: data?.main?.temp_max || null,
        minTemperature: data?.main?.temp_min || null,
        humidity: data?.main?.humidity || null,
        cloudPercentage: data?.clouds?.all || null,
        wind: data?.wind?.speed || null,
        time: data?.dt || null,
        longitude: longitude,
        latitude: latitude,
      };

      console.log('Updating weather data:', updateWeatherData);
      setWeatherData(updateWeatherData);

      // Set loading to false after successful data fetch
      setLoading({
        state: false,
        message: "",
      });

      console.log('Weather data fetch completed successfully');
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError(error.message || 'Failed to fetch weather data');
      setLoading({
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

    console.log('Starting geolocation...');

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('Geolocation success:', position.coords);
          fetchWeatherData(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error('Geolocation error:', error);
          console.log('Error code:', error.code, 'Message:', error.message);
          // Fallback to Kathmandu coordinates (since user mentioned Kathmandu District)
          console.log('Using Kathmandu as fallback location');
          fetchWeatherData(27.7172, 85.3240); // Kathmandu coordinates
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000
        }
      );
    } else {
      console.error('Geolocation not supported');
      setError('Geolocation is not supported by this browser.');
      // Fallback to Kathmandu
      fetchWeatherData(27.7172, 85.3240);
    }
  }, []);

  // Return weather data, error, and loading state
  return {
    weatherData,
    error,
    loading,
  };
};
