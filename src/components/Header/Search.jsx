import { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='h-16 bg-black/30 w-full max-w-[450px] rounded-full backdrop-blur-[32px] mb-8'
    >
      <div className='h-full relative flex items-center justify-between p-2'>
        <MdOutlineLocationOn className='text-white text-xl' />
        <input
          type='text'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder='Search for city...'
          className='flex-1 bg-transparent outline-none placeholder:text-white text-white text-[15px] font-light pl-6 h-full'
        />
        <button
          type='submit'
          className='bg-[#1ab8ed] hover:bg-[#15abdd] w-20 h-12 rounded-full flex justify-center items-center transition'
        >
          <IoMdSearch className='text-2xl text-white' />
        </button>
      </div>
    </form>
  );
};

export default Search;
