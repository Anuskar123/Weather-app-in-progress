import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

const Favourite = ({ onShow }) => {
  return (
    <button
      onClick={onShow}
      className='text-white cursor-pointer text-xl'
      title='Favourite locations'
    >
      <MdOutlineFavoriteBorder />
    </button>
  );
};

export default Favourite;
