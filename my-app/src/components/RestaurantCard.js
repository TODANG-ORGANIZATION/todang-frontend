import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

const RestaurantCard = ({
  image,
  name,
  starAvg,
  cleannessAvg,
  reviewCnt,
  className
}) => {
  return (
    <div className={`bg-gray-100 rounded-2xl shadow-sm overflow-hidden ${className || ''}`}>
      {/* 이미지 컨테이너 */}
      <div className="relative aspect-[4/3]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 컨텐츠 영역 */}
      <div className="p-4">
        {/* 상단 영역: 이름과 평가 점수 */}
        <div className="flex justify-between items-start">
          {/* 왼쪽: 이름과 리뷰 수 */}
          <div className="space-y-1">
            <h3 className="font-semibold text-gray-900 text-base truncate">
              {name}
            </h3>
            <div className="text-sm text-gray-500">
              리뷰 {reviewCnt}개
            </div>
          </div>

          {/* 오른쪽: 별점들 */}
          <div className="flex flex-col items-end gap-1">
            {/* 맛 별점 */}
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faStarSolid}
                className="text-yellow-400 w-4 h-4"
              />
              <span className="ml-1 text-sm text-gray-700">{starAvg}</span>
            </div>

            {/* 위생 별점 */}
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faStarSolid}
                className="text-yellow-400 w-4 h-4"
              />
              <span className="ml-1 text-sm text-gray-700">{cleannessAvg}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;