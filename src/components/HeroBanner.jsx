import React from 'react';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <div className="flex flex-col-reverse md:flex-row items-center justify-center h-auto py-8 md:py-6">

    <div className="w-full md:w-1/2 text-center md:text-center px-4 md:px-8 xl:px-16">
      <h1 className="text-red-500 font-bold text-4xl md:text-6xl xl:text-7xl">Fit Tube</h1>
      <h2 className="m-5 font-semibold text-2xl md:text-3xl xl:text-4xl tracking-wide">
        Sweat, Smile And Repeat
      </h2>
      <p className="text-lg md:text-xl xl:text-2xl font-algreya text-gray-700">
        Unleash Your Potential:<br />
        Discover Tailored Workouts and <br />
        Fitness Inspiration on FitTube
      </p>
      <a
        href="#exercises"
        className="mt-7 inline-block bg-red-500 text-white py-2 px-6 text-md md:text-xl xl:text-2xl rounded"
      >
        Explore Exercises
      </a>
    </div>

    <div className="w-full md:w-1/2 mb-6 md:mb-0 px-4 md:px-8 xl:px-16">
      <img src={HeroBannerImage} alt="hero-banner" className="w-full h-auto object-cover max-h-[400px] md:max-h-[500px] xl:max-h-[500px]" />
    </div>
  </div>
);

export default HeroBanner;
