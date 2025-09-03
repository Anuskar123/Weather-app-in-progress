// Import createContext from React for creating context objects
import { createContext } from "react";

// Create WeatherContext for managing weather-related state
const WeatherContext = createContext("");
// Create FavouriteContext for managing favorite locations state
const FavouriteContext = createContext("");

// Export the context objects
export { WeatherContext, FavouriteContext };
