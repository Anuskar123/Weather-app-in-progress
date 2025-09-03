// Import search icon asset
import search from "../../assets/search.svg";

// Search component for location input
const Search = () => {
  return (
    // Form for search functionality
    <form action='#'>
      // Container with styling for focus states
      <div className='flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md'>
        // Input field for search query
        <input
          className='bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none'
          type='search'
          placeholder='Search Location'
          required
        />
        // Submit button with search icon
        <button type='submit'>
          <img src={search} />
        </button>
      </div>
    </form>
  );
};

// Export Search component
export default Search;
