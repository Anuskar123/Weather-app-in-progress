import Header from "../Header/Header";
import WeatherHeadline from "./WeatherHeadline";
import WeatherCondition from "./WeatherCondition";

const WeatherBoard = () => {
  return (
    <div className='container'>
      <div className='grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto'>
        <Header />
        <WeatherHeadline />
        <WeatherCondition />
      </div>
    </div>
  );
};

export default WeatherBoard;
