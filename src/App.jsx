// Import the Header component for the top navigation and search
import Header from "./components/Header/Header";
// Import the WeatherBoard component to display weather information
import WeatherBoard from "./components/weather/WeatherBoard";
// Import context providers for managing global state
import { FavouriteProvider, WeatherProvider } from "./provider";


// Main App component that wraps the application with context providers
const App = () => {
  return (
    // WeatherProvider supplies weather-related state to the app
    <WeatherProvider>
      {/* FavouriteProvider manages the list of favorite locations */}
      <FavouriteProvider>
        {/* Main container with background and layout styling */}
        <div className='bg-body font-[Roboto] text-light bg-no-repeat bg-cover  grid place-items-center'>
          {/* Header contains the app title and search bar */}
          <Header />
          {/* WeatherBoard displays the main weather information */}
          <WeatherBoard />
        </div>
      </FavouriteProvider>
    </WeatherProvider>
  );
};


// Export the App component as the default export
export default App;
