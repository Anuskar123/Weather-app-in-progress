// Import search icon asset
import search from "../../assets/search.svg";
// Import useState and useContext hooks
import { useState, useContext } from "react";
// Import WeatherContext
import { WeatherContext } from "../../context";

// Search component for location input
const Search = () => {
  // State for search input
  const [searchQuery, setSearchQuery] = useState("");
  // Get the search function from context
  const { fetchWeatherByCity } = useContext(WeatherContext);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      fetchWeatherByCity(searchQuery.trim());
      setSearchQuery(""); // Clear the input after search
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md'>
        <input
          className='bg-transparent placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none'
          type='search'
          placeholder='Search Location'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
        <button type='submit'>
          <img src={search} alt='Search' />
        </button>
      </div>
    </form>
  );
};

// Export Search component
export default Search;
