// Import heart icon asset
import heart from "../../assets/heart.svg";

// Favourite component for displaying favorites button
const Favourite = ({ onShow }) => {
  return (
    <div
      onClick={onShow}
      className='p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all'
    >
      <img src={heart} alt='heart img' />
      <span>Favourite Locations</span>
    </div>
  );
};

// Export Favourite component
export default Favourite;
