import React, { useState } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import Footer from '../components/layout/Footer';


function MainPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showMore, setShowMore] = useState(false);

  const initialCategories = [
    { id: 1, name: '치킨' },
    { id: 2, name: '중식' },
    { id: 3, name: '돈까스' },
    { id: 4, name: '족발·보쌈' },
    { id: 5, name: '분식' },
  ];

  const additionalCategories = [
    { id: 6, name: '패스트푸드' },
    { id: 7, name: '카페·디저트' },
    { id: 8, name: '찜·탕' },
    { id: 9, name: '한식' },
    { id: 10, name: '회' },
    { id: 11, name: '고기' },
    { id: 12, name: '양식' },
    { id: 13, name: '아시안' },
    { id: 14, name: '야식' },
    { id: 15, name: '도시락' },
  ];

  const restaurants = [
    {
      id: 1,
      name: "맛있는 음식점",
      restaurantPhoto: "/images/restaurant1.jpg",
      starAvg: 4.5,
      cleannessAvg: 4.2,
      reviewCnt: 128,
      isOpen: true,
      isLive: true
    },
    {
      id: 2,
      name: "행복한 식당",
      restaurantPhoto: "/images/restaurant2.jpg",
      starAvg: 4.8,
      cleannessAvg: 4.5,
      reviewCnt: 256,
      isOpen: true,
      isLive: true
    },
    {
      id: 3,
      name: "즐거운 맛집",
      restaurantPhoto: "/images/restaurant3.jpg",
      starAvg: 4.3,
      cleannessAvg: 4.0,
      reviewCnt: 64,
      isOpen: true,
      isLive: false
    },
    {
      id: 4,
      name: "우리동네 파스타",
      restaurantPhoto: "/images/restaurant4.jpg",
      starAvg: 4.7,
      cleannessAvg: 4.6,
      reviewCnt: 182,
      isOpen: true,
      isLive: true
    },
    {
      id: 5,
      name: "착한가격 중국집",
      restaurantPhoto: "/images/restaurant5.jpg",
      starAvg: 4.4,
      cleannessAvg: 4.1,
      reviewCnt: 95,
      isOpen: true,
      isLive: false
    },
    {
      id: 6,
      name: "프리미엄 초밥",
      restaurantPhoto: "/images/restaurant6.jpg",
      starAvg: 4.9,
      cleannessAvg: 4.8,
      reviewCnt: 324,
      isOpen: true,
      isLive: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 pb-[10vh]">
        <div className="w-full bg-white py-3 px-4">
          <div className="max-w-2xl mx-auto">
            <input
              type="search"
              placeholder="식당을 검색해보세요"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              inputMode="search"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
            />
          </div>
        </div>

        <div className="w-full bg-white pb-2 px-4">
          <div className="max-w-2xl mx-auto">
            {/* 초기 카테고리 */}
            <div className="grid grid-cols-5">
              {initialCategories.map((category) => (
                <button
                  key={category.id}
                  className="flex flex-col items-center justify-center rounded-lg hover:bg-gray-100"
                >
                  <div className="w-12 h-12 bg-gray-200 rounded-full mb-2"></div>
                  <span className="text-sm text-gray-700">{category.name}</span>
                </button>
              ))}
            </div>

            {/* 더보기 버튼 */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="w-full text-gray-500 text-sm flex items-center justify-center py-2 gap-1"
            >
              {showMore ? '접기' : '더보기'}
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  showMore ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* 추가 카테고리 */}
            {showMore && (
              <div className="grid grid-cols-5">
                {additionalCategories.map((category) => (
                  <button
                    key={category.id}
                    className="flex flex-col items-center justify-center rounded-lg hover:bg-gray-100"
                  >
                    <div className="w-12 h-12 bg-gray-200 rounded-full mb-2"></div>
                    <span className="text-sm text-gray-700">{category.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 구분선 */}
        <div className="h-[12px] bg-gray-100"></div>

        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            {restaurants.map((restaurant) => (
              <RestaurantCard 
                key={restaurant.id}
                image={restaurant.restaurantPhoto}
                name={restaurant.name}
                starAvg={restaurant.starAvg}
                cleannessAvg={restaurant.cleannessAvg}
                reviewCnt={restaurant.reviewCnt}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0">
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
