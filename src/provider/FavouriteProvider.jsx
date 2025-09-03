import { createContext, useState } from "react";

export const FavouriteContext = createContext();

export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (location) => {
    if (!favourites.includes(location)) {
      setFavourites([...favourites, location]);
    }
  };

  const removeFromFavourites = (location) => {
    setFavourites(favourites.filter((fav) => fav !== location));
  };

  return (
    <FavouriteContext.Provider value={{ favourites, addToFavourites, removeFromFavourites }}>
      {children}
    </FavouriteContext.Provider>
  );
};
