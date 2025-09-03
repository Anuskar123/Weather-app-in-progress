import { FavouriteContext } from "../context";
import useLocalStroage from "../hooks/useLocalStroag";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStroage("favourite", []);

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

  const removeFromFavouriteItems = (location) => {
    const restFavourites = favourites.filter(
      (fav) => fav.location !== location
    );
    setFavourites(restFavourites);
  };

  return (
    <FavouriteContext.Provider
      value={{ AddToFavurites, removeFromFavouriteItems, favourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
