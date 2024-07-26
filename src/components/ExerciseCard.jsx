import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => (
  <Link 
    to={`/exercise/${exercise.id}`} 
    className="block border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <img 
      src={exercise.gifUrl} 
      alt={exercise.name} 
      loading="lazy" 
      className="w-full h-40 object-cover"
    />
    <div className="p-4">
      <div className="flex space-x-3 mb-2">
        <button 
          className="bg-red-400 text-white px-4 py-2 text-sm rounded-full capitalize"
        >
          {exercise.bodyPart}
        </button>
        <button 
          className="bg-yellow-400 text-white px-4 py-2 text-sm rounded-full capitalize"
        >
          {exercise.target}
        </button>
      </div>
      <h3 
        className="text-lg font-bold text-gray-900 capitalize"
      >
        {exercise.name}
      </h3>
    </div>
  </Link>
);

export default ExerciseCard;
