import WeatherBoard from "./components/weather/WeatherBoard";
import { FavouriteProvider, WeatherProvider } from "./provider";

// Main App component that wraps the entire application
function App() {
  return (
    <WeatherProvider>
      <FavouriteProvider>
        <div className='bg-body font-[Roboto] text-light bg-no-repeat bg-cover grid place-items-center'>
          <WeatherBoard />
        </div>
      </FavouriteProvider>
    </WeatherProvider>
  );
}

export default App;
