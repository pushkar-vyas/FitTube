import React from 'react';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';


const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <div className="mt-5 flex w-full overflow-x-auto space-x-4 p-4 scrollbar-hidden">
    {data.map((item) => (
      <div
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        className="flex-shrink-0 w-30 sm:w-40 md:w-40 lg:w-40 xl:w-45"
      >
        {bodyParts ? (
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </div>
    ))}
  </div>
);

export default HorizontalScrollbar;
