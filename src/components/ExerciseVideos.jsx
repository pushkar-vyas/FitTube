import React from 'react';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <div className="p-4 sm:p-6 lg:p-8 xl:p-10">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 sm:mb-8 lg:mb-10">
        Watch <span className="text-red-500 capitalize">{name}</span> exercise videos
      </h1>

      <div className="flex flex-wrap justify-start items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col rounded-lg overflow-hidden bg-white shadow-md"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-full h-40 sm:h-48 lg:h-56 xl:h-64 object-cover"
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <div className="p-3">
              <h2 className="text-md sm:text-sm md:text-sm lg:text-lg font-semibold text-black mb-1">
                {item.video.title}
              </h2>
              <p className="text-xs sm:text-base text-gray-700">
                {item.video.channelName}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
