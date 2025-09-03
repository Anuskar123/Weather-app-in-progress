// Import useContext hook
import { useContext } from "react";
// Import child components
import AddToFavurite from "./AddToFavurite";
import WeatherCondition from "./WeatherCondition";
import WeatherHeadline from "./WeatherHeadline";
// Import WeatherContext
import { WeatherContext } from "../../context";

// WeatherBoard component that displays the main weather information
const WeatherBoard = () => {
  // Get loading state from context
  const { loading } = useContext(WeatherContext);

  // Show loading message if loading
  return loading.state ? (
    <p>{loading.message}</p>
  ) : (
    // Main weather section
    <section>
      <div className='container'>
        // Weather board container with styling
        <div className='grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto'>
          // Grid layout for components
          <div className='grid md:grid-cols-2 gap-10 md:gap-6'>
            // Add to favorites component
            <AddToFavurite />
            // Weather headline
            <WeatherHeadline />
            // Weather condition details
            <WeatherCondition />
          </div>
        </div>
      </div>
    </section>
  );
};

// Export WeatherBoard component
export default WeatherBoard;
