import React from 'react';

const images = [
  '/Platform/tweet1.png',
  '/Platform/tweet2.png',
  '/Platform/tweet3.png',
];

const Tweet = () => {
  return (
    <div className='flex flex-col mt-4 text-black w-full'>
      {images.map((imageUrl, index) => {
        const imageClassName =
          index === 1
            ? 'w-full sm:w-[73%] lg:w-[80.33%] h-auto sm:h-[50%] lg:h-auto'
            : 'w-full sm:w-[73%] lg:w-[80.33%] h-auto sm:h-[50%] lg:h-auto';

        return (
          <div key={index} className='p-2 sm:p-4 lg:p-6 flex items-center justify-center'>
            <img src={imageUrl} alt={`Image ${index}`} className={imageClassName} />
          </div>
        );
      })}
      
    </div>
    
  );
};

export default Tweet;
