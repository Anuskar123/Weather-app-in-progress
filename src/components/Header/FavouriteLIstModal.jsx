import { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const FavouriteListModal = () => {
  const [favourites, setFavourites] = useState([]);

  const handleClose = () => {
    // Close modal logic
  };

  return (
    <div className='fixed left-0 top-0 w-full h-full bg-black/40 z-50 flex justify-center items-center'>
      <div className='bg-white rounded-lg p-6 max-w-md w-full mx-4'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-lg font-semibold'>Favourite Locations</h3>
          <button onClick={handleClose} className='text-gray-500 hover:text-gray-700'>
            <IoMdClose size={24} />
          </button>
        </div>
        <ul className='space-y-2'>
          {favourites.length > 0 ? (
            favourites.map((fav, index) => (
              <li key={index} className='flex items-center space-x-2 p-2 bg-gray-100 rounded'>
                <MdOutlineLocationOn className='text-gray-600' />
                <span>{fav}</span>
              </li>
            ))
          ) : (
            <li className='text-gray-500 text-center py-4'>No favourite locations yet</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FavouriteListModal;
