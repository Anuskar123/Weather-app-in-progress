import { useContext } from "react";
import { WeatherContext } from "../../context";

const WeatherHeadline = () => {
  const { weatherData } = useContext(WeatherContext);
  const { location, temperature, condition } = weatherData || {};

  return (
    <div className='max-md:flex items-center justify-between md:-mt-10'>
      <div className='max-md:flex items-center max-md:space-x-4'>
        <div className='max-md:flex items-center max-md:space-x-4'>
          <h1 className='text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4'>
            {temperature || "25"}°
          </h1>
          <div className='flex items-center space-x-4 md:mb-4'>
            <h2 className='text-2xl lg:text-[50px]'>{location || "Kathmandu"}</h2>
          </div>
        </div>
      </div>
      <p className='text-sm lg:text-lg'>
        {condition || "Clear Sky"}
      </p>
    </div>
  );
};

export default WeatherHeadline;
