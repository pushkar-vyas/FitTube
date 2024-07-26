import React from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <div className="mt-0 lg:mt-25">
    <h2 className="text-2xl lg:text-4xl font-bold text-black mb-8 ml-5">
      Similar <span className="text-red-500 capitalize">Target Muscle</span> exercises
    </h2>
    <div className="relative p-2 flex flex-row">
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
    </div>

    <h2 className="text-2xl lg:text-4xl font-bold text-black mb-8 ml-5 mt-15 lg:mt-25">
      Similar <span className="text-red-500 capitalize">Equipment</span> exercises
    </h2>
    <div className="relative p-2 flex flex-row">
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
    </div>
  </div>
);

export default SimilarExercises;
