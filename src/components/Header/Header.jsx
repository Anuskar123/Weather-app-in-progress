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
    // Header element with gradient background
    <header className=' w-full  bg-gradient-to-b from-black/60 to-black/0 pb-10'>
      // Navigation bar with centered layout
      <nav className='container mx-auto flex items-center justify-between py-6'>
        // Logo link
        <a href='#'>
          <img className='h-9' src={logo} alt='Weather App' />
        </a>

        // Container for search and favorites
        <div className='flex items-center gap-4 relative'>
          // Search component
          <Search />
          // Favourite component with toggle function
          <Favourite onShow={() => setShowFavModal(!showFavModal)} />
          // Conditionally render favorites modal
          {showFavModal && <FavouriteListModal />}
        </div>
      </nav>
    </header>
  );
};

// Export Header component
export default Header;
