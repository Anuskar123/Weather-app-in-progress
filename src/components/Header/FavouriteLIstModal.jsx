// Import useContext hook for accessing context
import { useContext } from "react";
// Import FavouriteContext for favorites data
import { FavouriteContext } from "../../context";

// FavouriteListModal component to display list of favorite locations
const FavouriteListModal = () => {
  // Access favorites from context
  const { favourites } = useContext(FavouriteContext);

  return (
    <div className='max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg '>
      <h3 className='text-lg font-bold px-4'>Favourite Locations</h3>
      <ul className='space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer'>
        {favourites.length > 0 ? (
          favourites.map((fav) => (
            <li key={fav.location} className='hover:bg-gray-200'>
              {fav.location}
            </li>
          ))
        ) : (
          <p>Nothing is added to Favourites</p>
        )}
      </ul>
    </div>
  );
};

// Export FavouriteListModal component
export default FavouriteListModal;
