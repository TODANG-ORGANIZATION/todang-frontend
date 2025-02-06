import React, { useState } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import Footer from '../components/layout/Footer';

function LikedPage() {
  // 백엔드에서 받아올 찜한 식당 데이터 (예시)
  const [likedRestaurants] = useState({
    open: [
      {
        id: 1,
        image: '/images/restaurant1.jpg',
        name: '김밥천국',
        rating: 4.5,
        isOpen: true
      },
      {
        id: 2,
        image: '/images/restaurant2.jpg',
        name: '맛있는 치킨',
        rating: 4.8,
        isOpen: true
      }
    ],
    closed: [
      {
        id: 3,
        image: '/images/restaurant3.jpg',
        name: '동네 피자',
        rating: 4.3,
        isOpen: false,
        openTime: '17:00'
      },
      {
        id: 4,
        image: '/images/restaurant4.jpg',
        name: '일식당',
        rating: 4.6,
        isOpen: false,
        openTime: '11:30'
      }
    ]
  });

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="flex-1 pb-[10vh]">
        {/* 영업 중인 식당 */}
        <div className="m-4">
          <div className="grid grid-cols-2 gap-4">
            {likedRestaurants.open.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                image={restaurant.image}
                name={restaurant.name}
                rating={restaurant.rating}
              />
            ))}
          </div>
        </div>
        
        {/* 구분선 */}
        <div>
          <div className="border-t border-gray-300"></div>
          <div className="h-[12px] bg-gray-100"></div>
        </div>

        {/* 영업 준비 중인 식당 */}
        {likedRestaurants.closed.length > 0 && (
          <div className="mx-4">
            <div className="border-b border-gray-200 mt-2 mb-1">
              <h2 className="text-lg font-semibold text-gray-800">
                영업 준비 중
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {likedRestaurants.closed.map((restaurant) => (
                <div key={restaurant.id} className="relative">
                  <RestaurantCard
                    image={restaurant.image}
                    name={restaurant.name}
                    rating={restaurant.rating}
                    className="opacity-60"
                  />
                  {/* 준비 중 오버레이 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg">
                      준비 중
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white">
        <Footer />
      </div>
    </div>
  );
}

export default LikedPage; 