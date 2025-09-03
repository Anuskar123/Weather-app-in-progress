import { useState } from "react";
import logo from "../../assets/logo.svg";
import Favourite from "./Favorite";
import Search from "./Search";
import FavouriteListModal from "./FavouriteLIstModal";

const Header = () => {
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

export default Header;
