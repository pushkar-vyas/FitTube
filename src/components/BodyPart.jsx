import React from 'react';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <div
    className={`flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 lg:p-12 cursor-pointer rounded-lg lg:rounded-xl gap-3 sm:gap-4 md:gap-5 ${
      bodyPart === item ? 'border-t-4 border-red-500 bg-white shadow-lg' : 'bg-white shadow-md border border-gray-300'
    }`}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
     // Limits the width of the component
  >
    <img src={Icon} alt="dumbbell" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 capitalize">{item}</p>
  </div>
);

export default BodyPart;
