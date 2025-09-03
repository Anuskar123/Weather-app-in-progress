// Import FavouriteContext
import { FavouriteContext } from "../context";
// Import useLocalStroage hook
import useLocalStroage from "../hooks/useLocalStroag";

// FavouriteProvider component to manage favorite locations
const FavouriteProvider = ({ children }) => {
  // State for favorites using localStorage
  const [favourites, setFavourites] = useLocalStroage("favourite", []);

  // Function to add location to favorites
  const AddToFavurites = (latitude, longitude, location) => {
    setFavourites([
      ...favourites,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };

  // Function to remove location from favorites
  const removeFromFavouriteItems = (location) => {
    const restFavourites = favourites.filter(
      (fav) => fav.location !== location
    );
    setFavourites(restFavourites);
  };

  return (
    // Provide favorites functions and data to children
    <FavouriteContext.Provider
      value={{ AddToFavurites, removeFromFavouriteItems, favourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

// Export FavouriteProvider
export default FavouriteProvider;
