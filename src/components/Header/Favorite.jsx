// Import heart icon asset
import heart from "../../assets/heart.svg";

// Favourite component for displaying favorites button
const Favourite = ({ onShow }) => {
  return (
    // Clickable div to toggle favorites modal
    <div
      onClick={onShow}
      className='p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all'
    >
      // Heart icon
      <img src={heart} alt='heart img' />
      // Text label
      <span>Favourite Locations</span>
    </div>
  );
};

// Export Favourite component
export default Favourite;
