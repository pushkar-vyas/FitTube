import React from 'react';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center p-4 sm:p-6 md:p-8 lg:p-10 gap-8 lg:gap-12">
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        className="w-full lg:w-1/2 object-cover rounded-lg"
      />
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full lg:w-1/2">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold capitalize">
          {name}
        </h1>
        <p className="text-base sm:text-md md:text-lg lg:text-xl xl:text-xl text-gray-700">
          Exercises keep you strong.{' '}
          <span className="capitalize font-semibold">{name}</span> is one of the best
          exercises to target your <span className="capitalize font-semibold">{target}</span>. It will help you improve your
          mood and gain energy.
        </p>
        {extraDetail?.map((item) => (
          <div key={item.name} className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
            <button className="bg-yellow-100 rounded-full w-15 h-15 flex items-center justify-center">
              <img src={item.icon} alt={bodyPart} className="w-10 h-10" />
            </button>
            <span className="text-md sm:text-sm md:text-lg lg:text-xl capitalize">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
