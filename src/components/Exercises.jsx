import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <div id="exercises" className=" p-4 sm:p-6 md:p-8 lg:p-10">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
        Showing Results
      </h2>
      <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-center">
        {currentExercises.map((exercise, idx) => (
          <div key={idx} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
            <ExerciseCard exercise={exercise} />
          </div>
        ))}
      </div>
      {exercises.length > 9 && (
        <div className="mt-8 sm:mt-12 flex justify-center">
          <Pagination
            className="pagination"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            color="primary"
            size="large"
          />
        </div>
      )}
    </div>
  );
};

const Pagination = ({ count, page, onChange }) => {
  const handlePageChange = (event, value) => {
    onChange(event, value);
  };

  return (
    <div className="flex gap-2">
      {[...Array(count).keys()].map((number) => (
        <button
          key={number}
          onClick={(event) => handlePageChange(event, number + 1)}
          className={`px-4 py-2 rounded-md ${page === number + 1 ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
        >
          {number + 1}
        </button>
      ))}
    </div>
  );
};

export default Exercises;
