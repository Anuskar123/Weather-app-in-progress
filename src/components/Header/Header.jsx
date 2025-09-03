// Import useState hook for managing component state
import { useState } from "react";
// Import logo image asset
import logo from "../../assets/logo.svg";
// Import Favourite component for favorites button
import Favourite from "./Favorite";
// Import Search component for location search
import Search from "./Search";
// Import FavouriteListModal for displaying favorite locations
import FavouriteListModal from "./FavouriteLIstModal";

// Header component that renders the top navigation bar
const Header = () => {
  // State to control the visibility of the favorites modal
  const [showFavModal, setShowFavModal] = useState(false);
  return (
    <header className=' w-full  bg-gradient-to-b from-black/60 to-black/0 pb-10'>
      <nav className='container mx-auto flex items-center justify-between py-6'>
        <a href='#'>
          <img className='h-9' src={logo} alt='Weather App' />
        </a>

        <div className='flex items-center gap-4 relative'>
          <Search />
          <Favourite onShow={() => setShowFavModal(!showFavModal)} />
          {showFavModal && <FavouriteListModal />}
        </div>
      </nav>
    </header>
  );
};

// Export Header component
export default Header;
