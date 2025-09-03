import { useState, useEffect } from "react";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      // Mock data for now
      const mockData = {
        location: city || "Kathmandu",
        temperature: 25,
        condition: "Clear Sky",
        humidity: 60,
        windSpeed: 5,
        visibility: 10,
      };
      setWeatherData(mockData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return { weatherData, loading, error, fetchWeather };
};

export default useWeather;
