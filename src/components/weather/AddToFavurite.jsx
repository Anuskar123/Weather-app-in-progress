import { useContext, useEffect } from "react";
import HeartIcon from "../../assets/heart.svg";
import RedHeartIcon from "../../assets/heart-red.svg";
import { FavouriteContext, WeatherContext } from "../../context";
import { useState } from "react";

const AddToFavourite = () => {
  const { AddToFavurites, removeFromFavouriteItems, favourites } =
    useContext(FavouriteContext);

  const [isFavourite, toggleFavourite] = useState(false);
  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    toggleFavourite(found);
  }, []);

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
    <div className='md:col-span-2'>
      <div className='flex items-center justify-end space-x-6'>
        <button
          onClick={handleFavourites} // Corrected onClick handler
          className='text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]'
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? RedHeartIcon : HeartIcon} alt='' />
        </button>
      </div>
    </div>
  );
};

export default AddToFavourite;
