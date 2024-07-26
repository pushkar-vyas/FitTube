import React, { useEffect, useState } from 'react';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
import "../App.css"

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      console.log(bodyPartsData)
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
          || item.target.toLowerCase().includes(search)
          || item.equipment.toLowerCase().includes(search)
          || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <div className="flex flex-col items-center mt-9 p-5">
      <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-6 lg:mb-12 text-center">
        Awesome Exercises You <br /> Should Know
      </h1>
      <div className="relative w-full flex justify-center">
        <input
          type="text"
          placeholder="Search Exercises"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          className="h-12 sm:h-14 lg:h-14 w-full max-w-[350px] sm:max-w-[500px] lg:max-w-[1170px] px-4 text-base sm:text-lg lg:text-xl rounded-full border border-black bg-white"
        />
        <button
          onClick={handleSearch}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 h-12 sm:h-14 lg:h-14 w-24 sm:w-32 lg:w-44 bg-red-600 text-white text-sm sm:text-base lg:text-lg rounded-full"
        >
          Search
        </button>
      </div>

      <div className="w-[100%] relative flex flex-row">
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </div>
    </div >
  );
};

export default SearchExercises;
