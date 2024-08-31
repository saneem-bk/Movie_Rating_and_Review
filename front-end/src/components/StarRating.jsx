import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ averageRating }) => {
  const totalStars = 5;

  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, index) => {
        const ratingForStar = averageRating - index;
        return (
          <div key={index} className="relative inline-block w-6 h-6">
            
            <FaStar className="absolute text-gray-300" />

            
            <div
              className="absolute overflow-hidden"
              style={{
                width: `${
                  ratingForStar > 1
                    ? 100
                    : ratingForStar > 0
                    ? ratingForStar * 100
                    : 0
                }%`,
              }}
            >
              <FaStar className="text-yellow-400" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;