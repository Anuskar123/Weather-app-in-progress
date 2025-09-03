import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

const AddToFavourite = () => {
  return (
    <button
      className='text-white cursor-pointer text-xl'
      title='Add to favourites'
    >
      <MdOutlineFavoriteBorder />
    </button>
  );
};

export default AddToFavourite;
