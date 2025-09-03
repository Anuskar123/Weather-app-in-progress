// Import hooks and context
import { useContext, useEffect } from "react";
import HeartIcon from "../../assets/heart.svg";
import RedHeartIcon from "../../assets/heart-red.svg";
import { FavouriteContext, WeatherContext } from "../../context";
import { useState } from "react";

// AddToFavourite component for adding/removing locations from favorites
const AddToFavourite = () => {
  // Get functions and data from FavouriteContext
  const { AddToFavurites, removeFromFavouriteItems, favourites } =
    useContext(FavouriteContext);

  // State for whether current location is favorite
  const [isFavourite, toggleFavourite] = useState(false);
  // Get weather data from WeatherContext
  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;

  // Effect to check if location is already favorite
  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    toggleFavourite(found);
  }, []);

  // Handler for adding/removing from favorites
  const handleFavourites = () => {
    const found = favourites.find((fav) => fav.location === location);
    if (!found) {
      AddToFavurites(latitude, longitude, location);
    } else {
      removeFromFavouriteItems(location);
    }

    toggleFavourite(!isFavourite);
  };

  return (
    // Container for the button
    <div className='md:col-span-2'>
      <div className='flex items-center justify-end space-x-6'>
        // Button to toggle favorite status
        <button
          onClick={handleFavourites} // Corrected onClick handler
          className='text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]'
        >
          // Button text
          <span>Add to Favourite</span>
          // Heart icon based on favorite status
          <img src={isFavourite ? RedHeartIcon : HeartIcon} alt='' />
        </button>
      </div>
    </div>
  );
};

// Export AddToFavourite component
export default AddToFavourite;
